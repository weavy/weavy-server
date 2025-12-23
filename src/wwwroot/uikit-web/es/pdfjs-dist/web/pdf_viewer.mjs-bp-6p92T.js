var Ks = Object.defineProperty;
var Xs = (a) => {
  throw TypeError(a);
};
var wa = (a, e, t) => e in a ? Ks(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var h = (a, e) => Ks(a, "name", { value: e, configurable: !0 });
var Zs = (a, e, t) => wa(a, typeof e != "symbol" ? e + "" : e, t), sn = (a, e, t) => e.has(a) || Xs("Cannot " + t);
var o = (a, e, t) => (sn(a, e, "read from private field"), t ? t.call(a) : e.get(a)), m = (a, e, t) => e.has(a) ? Xs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), f = (a, e, t, i) => (sn(a, e, "write to private field"), i ? i.call(a, t) : e.set(a, t), t), u = (a, e, t) => (sn(a, e, "access private method"), t);
var Qs = (a, e, t, i) => ({
  set _(n) {
    f(a, e, n, t);
  },
  get _() {
    return o(a, e, i);
  }
});
var Wt = {};
Wt.d = (a, e) => {
  for (var t in e)
    Wt.o(e, t) && !Wt.o(a, t) && Object.defineProperty(a, t, { enumerable: !0, get: e[t] });
};
Wt.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e);
var V = globalThis.pdfjsViewer = {};
Wt.d(V, {
  AnnotationLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Wi
  ), "AnnotationLayerBuilder"),
  DownloadManager: /* @__PURE__ */ h(() => (
    /* reexport */
    Sn
  ), "DownloadManager"),
  EventBus: /* @__PURE__ */ h(() => (
    /* reexport */
    zi
  ), "EventBus"),
  FindState: /* @__PURE__ */ h(() => (
    /* reexport */
    Pe
  ), "FindState"),
  GenericL10n: /* @__PURE__ */ h(() => (
    /* reexport */
    kt
  ), "GenericL10n"),
  LinkTarget: /* @__PURE__ */ h(() => (
    /* reexport */
    We
  ), "LinkTarget"),
  PDFFindController: /* @__PURE__ */ h(() => (
    /* reexport */
    pn
  ), "PDFFindController"),
  PDFHistory: /* @__PURE__ */ h(() => (
    /* reexport */
    jn
  ), "PDFHistory"),
  PDFLinkService: /* @__PURE__ */ h(() => (
    /* reexport */
    Ui
  ), "PDFLinkService"),
  PDFPageView: /* @__PURE__ */ h(() => (
    /* reexport */
    Ji
  ), "PDFPageView"),
  PDFScriptingManager: /* @__PURE__ */ h(() => (
    /* reexport */
    as
  ), "PDFScriptingManager"),
  PDFSinglePageViewer: /* @__PURE__ */ h(() => (
    /* reexport */
    fs
  ), "PDFSinglePageViewer"),
  PDFViewer: /* @__PURE__ */ h(() => (
    /* reexport */
    Yi
  ), "PDFViewer"),
  ProgressBar: /* @__PURE__ */ h(() => (
    /* reexport */
    fn
  ), "ProgressBar"),
  RenderingStates: /* @__PURE__ */ h(() => (
    /* reexport */
    H
  ), "RenderingStates"),
  ScrollMode: /* @__PURE__ */ h(() => (
    /* reexport */
    D
  ), "ScrollMode"),
  SimpleLinkService: /* @__PURE__ */ h(() => (
    /* reexport */
    Xt
  ), "SimpleLinkService"),
  SpreadMode: /* @__PURE__ */ h(() => (
    /* reexport */
    G
  ), "SpreadMode"),
  StructTreeLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Xi
  ), "StructTreeLayerBuilder"),
  TextLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Zi
  ), "TextLayerBuilder"),
  XfaLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Qi
  ), "XfaLayerBuilder"),
  parseQueryString: /* @__PURE__ */ h(() => (
    /* reexport */
    tn
  ), "parseQueryString")
});
const _a = "auto", Tr = 1, Js = 1.1, va = 0.1, ya = 10, rn = 0, Pa = 1.25, Ys = 40, qs = 5, H = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
}, ft = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
}, ue = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_PERMISSIONS: 2
}, D = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2,
  PAGE: 3
}, G = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
function Rr(a, e, t = !1) {
  let i = a.offsetParent;
  if (!i) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }
  let n = a.offsetTop + a.clientTop, s = a.offsetLeft + a.clientLeft;
  for (; i.clientHeight === i.scrollHeight && i.clientWidth === i.scrollWidth || t && (i.classList.contains("markedContent") || getComputedStyle(i).overflow === "hidden"); )
    if (n += i.offsetTop, s += i.offsetLeft, i = i.offsetParent, !i)
      return;
  e && (e.top !== void 0 && (n += e.top), e.left !== void 0 && (s += e.left, i.scrollLeft = s)), i.scrollTop = n;
}
h(Rr, "scrollIntoView");
function xa(a, e, t = void 0) {
  const i = /* @__PURE__ */ h(function(r) {
    s || (s = window.requestAnimationFrame(/* @__PURE__ */ h(function() {
      s = null;
      const d = a.scrollLeft, c = n.lastX;
      d !== c && (n.right = d > c), n.lastX = d;
      const p = a.scrollTop, E = n.lastY;
      p !== E && (n.down = p > E), n.lastY = p, e(n);
    }, "viewAreaElementScrolled")));
  }, "debounceScroll"), n = {
    right: !0,
    down: !0,
    lastX: a.scrollLeft,
    lastY: a.scrollTop,
    _eventHandler: i
  };
  let s = null;
  return a.addEventListener("scroll", i, {
    useCapture: !0,
    signal: t
  }), t?.addEventListener("abort", () => window.cancelAnimationFrame(s), {
    once: !0
  }), n;
}
h(xa, "watchScroll");
function tn(a) {
  const e = /* @__PURE__ */ new Map();
  for (const [t, i] of new URLSearchParams(a))
    e.set(t.toLowerCase(), i);
  return e;
}
h(tn, "parseQueryString");
const er = /[\x00-\x1F]/g;
function zt(a, e = !1) {
  return er.test(a) ? e ? a.replaceAll(er, (t) => t === "\0" ? "" : " ") : a.replaceAll("\0", "") : a;
}
h(zt, "removeNullCharacters");
function Kt(a, e, t = 0) {
  let i = t, n = a.length - 1;
  if (n < 0 || !e(a[n]))
    return a.length;
  if (e(a[i]))
    return i;
  for (; i < n; ) {
    const s = i + n >> 1, r = a[s];
    e(r) ? n = s : i = s + 1;
  }
  return i;
}
h(Kt, "binarySearchFirstItem");
function tr(a) {
  if (Math.floor(a) === a)
    return [a, 1];
  const e = 1 / a, t = 8;
  if (e > t)
    return [1, t];
  if (Math.floor(e) === e)
    return [1, e];
  const i = a > 1 ? e : a;
  let n = 0, s = 1, r = 1, l = 1;
  for (; ; ) {
    const c = n + r, p = s + l;
    if (p > t)
      break;
    i <= c / p ? (r = c, l = p) : (n = c, s = p);
  }
  let d;
  return i - n / s < r / l - i ? d = i === a ? [n, s] : [s, n] : d = i === a ? [r, l] : [l, r], d;
}
h(tr, "approximateFraction");
function Ai(a, e) {
  return a - a % e;
}
h(Ai, "floorToDivide");
function Sa(a, e, t) {
  if (a < 2)
    return a;
  let i = e[a].div, n = i.offsetTop + i.clientTop;
  n >= t && (i = e[a - 1].div, n = i.offsetTop + i.clientTop);
  for (let s = a - 2; s >= 0 && (i = e[s].div, !(i.offsetTop + i.clientTop + i.clientHeight <= n)); --s)
    a = s;
  return a;
}
h(Sa, "backtrackBeforeAllVisibleElements");
function Aa({
  scrollEl: a,
  views: e,
  sortByVisibility: t = !1,
  horizontal: i = !1,
  rtl: n = !1
}) {
  const s = a.scrollTop, r = s + a.clientHeight, l = a.scrollLeft, d = l + a.clientWidth;
  function c(M) {
    const x = M.div;
    return x.offsetTop + x.clientTop + x.clientHeight > s;
  }
  h(c, "isElementBottomAfterViewTop");
  function p(M) {
    const x = M.div, P = x.offsetLeft + x.clientLeft, k = P + x.clientWidth;
    return n ? P < d : k > l;
  }
  h(p, "isElementNextAfterViewHorizontally");
  const E = [], w = /* @__PURE__ */ new Set(), A = e.length;
  let C = Kt(e, i ? p : c);
  C > 0 && C < A && !i && (C = Sa(C, e, s));
  let I = i ? d : -1;
  for (let M = C; M < A; M++) {
    const x = e[M], P = x.div, k = P.offsetLeft + P.clientLeft, F = P.offsetTop + P.clientTop, B = P.clientWidth, j = P.clientHeight, b = k + B, _ = F + j;
    if (I === -1)
      _ >= r && (I = _);
    else if ((i ? k : F) > I)
      break;
    if (_ <= s || F >= r || b <= l || k >= d)
      continue;
    const v = Math.max(0, s - F) + Math.max(0, _ - r), O = Math.max(0, l - k) + Math.max(0, b - d), Z = (j - v) / j, K = (B - O) / B, nn = Z * K * 100 | 0;
    E.push({
      id: x.id,
      x: k,
      y: F,
      view: x,
      percent: nn,
      widthPercent: K * 100 | 0
    }), w.add(x.id);
  }
  const L = E[0], N = E.at(-1);
  return t && E.sort(function(M, x) {
    const P = M.percent - x.percent;
    return Math.abs(P) > 1e-3 ? -P : M.id - x.id;
  }), {
    first: L,
    last: N,
    views: E,
    ids: w
  };
}
h(Aa, "getVisibleElements");
function Cr(a) {
  return Number.isInteger(a) && a % 90 === 0;
}
h(Cr, "isValidRotation");
function Ia(a) {
  return Number.isInteger(a) && Object.values(D).includes(a) && a !== D.UNKNOWN;
}
h(Ia, "isValidScrollMode");
function La(a) {
  return Number.isInteger(a) && Object.values(G).includes(a) && a !== G.UNKNOWN;
}
h(La, "isValidSpreadMode");
function ir(a) {
  return a.width <= a.height;
}
h(ir, "isPortraitOrientation");
new Promise(function(a) {
  window.requestAnimationFrame(a);
});
const Ta = document.documentElement.style;
function Ra(a, e, t) {
  return Math.min(Math.max(a, e), t);
}
h(Ra, "clamp");
var Ae, Ke, Ie, pt, Xe;
const gs = class gs {
  constructor(e) {
    m(this, Ae, null);
    m(this, Ke, null);
    m(this, Ie, 0);
    m(this, pt, null);
    m(this, Xe, !0);
    f(this, Ae, e.classList), f(this, pt, e.style);
  }
  get percent() {
    return o(this, Ie);
  }
  set percent(e) {
    if (f(this, Ie, Ra(e, 0, 100)), isNaN(e)) {
      o(this, Ae).add("indeterminate");
      return;
    }
    o(this, Ae).remove("indeterminate"), o(this, pt).setProperty("--progressBar-percent", `${o(this, Ie)}%`);
  }
  setWidth(e) {
    if (!e)
      return;
    const i = e.parentNode.offsetWidth - e.offsetWidth;
    i > 0 && o(this, pt).setProperty("--progressBar-end-offset", `${i}px`);
  }
  setDisableAutoFetch(e = 5e3) {
    o(this, Ie) === 100 || isNaN(o(this, Ie)) || (o(this, Ke) && clearTimeout(o(this, Ke)), this.show(), f(this, Ke, setTimeout(() => {
      f(this, Ke, null), this.hide();
    }, e)));
  }
  hide() {
    o(this, Xe) && (f(this, Xe, !1), o(this, Ae).add("hidden"));
  }
  show() {
    o(this, Xe) || (f(this, Xe, !0), o(this, Ae).remove("hidden"));
  }
};
Ae = new WeakMap(), Ke = new WeakMap(), Ie = new WeakMap(), pt = new WeakMap(), Xe = new WeakMap(), h(gs, "ProgressBar");
let fn = gs;
function Ca(a) {
  let e = D.VERTICAL, t = G.NONE;
  switch (a) {
    case "SinglePage":
      e = D.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      e = D.PAGE;
    case "TwoColumnLeft":
      t = G.ODD;
      break;
    case "TwoPageRight":
      e = D.PAGE;
    case "TwoColumnRight":
      t = G.EVEN;
      break;
  }
  return {
    scrollMode: e,
    spreadMode: t
  };
}
h(Ca, "apiPageLayoutToViewerModes");
const Ii = (function() {
  const a = document.createElement("div");
  return a.style.width = "round(down, calc(1.6666666666666665 * 792px), 1px)", a.style.width === "calc(1320px)" ? Math.fround : (e) => e;
})(), ne = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
function Na(a) {
  return a < 11904;
}
h(Na, "isAlphabeticalScript");
function Ma(a) {
  return (a & 65408) === 0;
}
h(Ma, "isAscii");
function ka(a) {
  return a >= 97 && a <= 122 || a >= 65 && a <= 90;
}
h(ka, "isAsciiAlpha");
function Oa(a) {
  return a >= 48 && a <= 57;
}
h(Oa, "isAsciiDigit");
function Da(a) {
  return a === 32 || a === 9 || a === 13 || a === 10;
}
h(Da, "isAsciiSpace");
function ja(a) {
  return a >= 13312 && a <= 40959 || a >= 63744 && a <= 64255;
}
h(ja, "isHan");
function Fa(a) {
  return a >= 12448 && a <= 12543;
}
h(Fa, "isKatakana");
function Va(a) {
  return a >= 12352 && a <= 12447;
}
h(Va, "isHiragana");
function Ba(a) {
  return a >= 65376 && a <= 65439;
}
h(Ba, "isHalfwidthKatakana");
function Ha(a) {
  return (a & 65408) === 3584;
}
h(Ha, "isThai");
function Li(a) {
  return Na(a) ? Ma(a) ? Da(a) ? ne.SPACE : ka(a) || Oa(a) || a === 95 ? ne.ALPHA_LETTER : ne.PUNCT : Ha(a) ? ne.THAI_LETTER : a === 160 ? ne.SPACE : ne.ALPHA_LETTER : ja(a) ? ne.HAN_LETTER : Fa(a) ? ne.KATAKANA_LETTER : Va(a) ? ne.HIRAGANA_LETTER : Ba(a) ? ne.HALFWIDTH_KATAKANA_LETTER : ne.ALPHA_LETTER;
}
h(Li, "getCharacterType");
let nr;
function Ua() {
  return nr ||= " ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦", nr;
}
h(Ua, "getNormalizeWithNFKC");
const Pe = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
}, $a = 250, Wa = -50, za = -400, sr = {
  "‐": "-",
  "‘": "'",
  "’": "'",
  "‚": "'",
  "‛": "'",
  "“": '"',
  "”": '"',
  "„": '"',
  "‟": '"',
  "¼": "1/4",
  "½": "1/2",
  "¾": "3/4"
}, rr = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
let ar;
const Ga = new RegExp("\\p{M}+", "gu"), Ka = new RegExp("([.*+?^${}()|[\\]\\\\])|(\\p{P})|(\\s+)|(\\p{M})|(\\p{L})", "gu"), Xa = new RegExp("([^\\p{M}])\\p{M}*$", "u"), Za = new RegExp("^\\p{M}*([^\\p{M}])", "u"), Qa = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, or = /* @__PURE__ */ new Map(), Ja = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", lr = /* @__PURE__ */ new Map();
let an = null, on = null;
function ln(a) {
  const e = [];
  let t;
  for (; (t = Qa.exec(a)) !== null; ) {
    let {
      index: I
    } = t;
    for (const L of t[0]) {
      let N = or.get(L);
      N || (N = L.normalize("NFD").length, or.set(L, N)), e.push([N, I++]);
    }
  }
  let i;
  if (e.length === 0 && an)
    i = an;
  else if (e.length > 0 && on)
    i = on;
  else {
    const I = Object.keys(sr).join(""), L = Ua(), P = `([${I}])|([${L}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\p{Ll}-\\n\\p{Lu})|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
    e.length === 0 ? i = an = new RegExp(P + "|(\\u0000)", "gum") : i = on = new RegExp(P + `|(${Ja})`, "gum");
  }
  const n = [];
  for (; (t = Ga.exec(a)) !== null; )
    n.push([t[0].length, t.index]);
  let s = a.normalize("NFD");
  const r = [0, 0];
  let l = 0, d = 0, c = 0, p = 0, E = 0, w = !1;
  s = s.replace(i, (I, L, N, M, x, P, k, F, B, j, b) => {
    if (b -= p, L) {
      const _ = sr[L], v = _.length;
      for (let O = 1; O < v; O++)
        r.push(b - c + O, c - O);
      return c -= v - 1, _;
    }
    if (N) {
      let _ = lr.get(N);
      _ || (_ = N.normalize("NFKC"), lr.set(N, _));
      const v = _.length;
      for (let O = 1; O < v; O++)
        r.push(b - c + O, c - O);
      return c -= v - 1, _;
    }
    if (M)
      return w = !0, b + E === n[l]?.[1] ? ++l : (r.push(b - 1 - c + 1, c - 1), c -= 1, p += 1), r.push(b - c + 1, c), p += 1, E += 1, M.charAt(0);
    if (x) {
      const _ = x.endsWith(`
`), v = _ ? x.length - 2 : x.length;
      w = !0;
      let O = v;
      b + E === n[l]?.[1] && (O -= n[l][0], ++l);
      for (let Z = 1; Z <= O; Z++)
        r.push(b - 1 - c + Z, c - Z);
      return c -= O, p += O, _ ? (b += v - 1, r.push(b - c + 1, 1 + c), c += 1, p += 1, E += 1, x.slice(0, v)) : x;
    }
    if (P)
      return p += 1, E += 1, P.replace(`
`, "");
    if (k) {
      const _ = k.length - 2;
      return r.push(b - c + _, 1 + c), c += 1, p += 1, E += 1, k.slice(0, -2);
    }
    if (F) {
      const _ = F.length - 1;
      return r.push(b - c + _, c), p += 1, E += 1, F.slice(0, -1);
    }
    if (B)
      return r.push(b - c + 1, c - 1), c -= 1, p += 1, E += 1, " ";
    if (b + E === e[d]?.[1]) {
      const _ = e[d][0] - 1;
      ++d;
      for (let v = 1; v <= _; v++)
        r.push(b - (c - v), c - v);
      c -= _, p += _;
    }
    return j;
  }), r.push(s.length, c);
  const A = new Uint32Array(r.length >> 1), C = new Int32Array(r.length >> 1);
  for (let I = 0, L = r.length; I < L; I += 2)
    A[I >> 1] = r[I], C[I >> 1] = r[I + 1];
  return [s, [A, C], w];
}
h(ln, "normalize");
function Ya(a, e, t) {
  if (!a)
    return [e, t];
  const [i, n] = a, s = e, r = e + t - 1;
  let l = Kt(i, (w) => w >= s);
  i[l] > s && --l;
  let d = Kt(i, (w) => w >= r, l);
  i[d] > r && --d;
  const c = s + n[l], E = r + n[d] + 1 - c;
  return [c, E];
}
h(Ya, "getOriginalIndex");
var W, gt, Ze, y, Nr, gn, mn, Mr, kr, bn, Or, Dr, Ni, Ft, dt, jr, En, wn, Mi, Fr, _n, vn, Vt;
const ms = class ms {
  constructor({
    linkService: e,
    eventBus: t,
    updateMatchesCountOnProgress: i = !0
  }) {
    m(this, y);
    m(this, W, null);
    m(this, gt, !0);
    m(this, Ze, 0);
    this._linkService = e, this._eventBus = t, f(this, gt, i), this.onIsPageVisible = null, u(this, y, gn).call(this), t._on("find", u(this, y, Nr).bind(this)), t._on("findbarclose", u(this, y, Fr).bind(this));
  }
  get highlightMatches() {
    return this._highlightMatches;
  }
  get pageMatches() {
    return this._pageMatches;
  }
  get pageMatchesLength() {
    return this._pageMatchesLength;
  }
  get selected() {
    return this._selected;
  }
  get state() {
    return o(this, W);
  }
  setDocument(e) {
    this._pdfDocument && u(this, y, gn).call(this), e && (this._pdfDocument = e, this._firstPageCapability.resolve());
  }
  scrollMatchIntoView({
    element: e = null,
    selectedLeft: t = 0,
    pageIndex: i = -1,
    matchIndex: n = -1
  }) {
    if (!this._scrollMatches || !e)
      return;
    if (n === -1 || n !== this._selected.matchIdx)
      return;
    if (i === -1 || i !== this._selected.pageIdx)
      return;
    this._scrollMatches = !1;
    const s = {
      top: Wa,
      left: t + za
    };
    Rr(e, s, !0);
  }
  match(e, t, i) {
    const n = this._hasDiacritics[i];
    let s = !1;
    if (typeof e == "string" ? [s, e] = u(this, y, bn).call(this, e, n) : e = e.sort().reverse().map((E) => {
      const [w, A] = u(this, y, bn).call(this, E, n);
      return s ||= w, `(${A})`;
    }).join("|"), !e)
      return;
    const {
      caseSensitive: r,
      entireWord: l
    } = o(this, W), d = `g${s ? "u" : ""}${r ? "" : "i"}`;
    e = new RegExp(e, d);
    const c = [];
    let p;
    for (; (p = e.exec(t)) !== null; )
      l && !u(this, y, kr).call(this, t, p.index, p[0].length) || c.push({
        index: p.index,
        length: p[0].length
      });
    return c;
  }
};
W = new WeakMap(), gt = new WeakMap(), Ze = new WeakMap(), y = new WeakSet(), Nr = /* @__PURE__ */ h(function(e) {
  if (!e)
    return;
  const t = this._pdfDocument, {
    type: i
  } = e;
  (o(this, W) === null || u(this, y, Mr).call(this, e)) && (this._dirtyMatch = !0), f(this, W, e), i !== "highlightallchange" && u(this, y, Vt).call(this, Pe.PENDING), this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || t && this._pdfDocument !== t)
      return;
    u(this, y, Dr).call(this);
    const n = !this._highlightMatches, s = !!this._findTimeout;
    this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), i ? this._dirtyMatch ? u(this, y, dt).call(this) : i === "again" ? (u(this, y, dt).call(this), n && o(this, W).highlightAll && u(this, y, Ft).call(this)) : i === "highlightallchange" ? (s ? u(this, y, dt).call(this) : this._highlightMatches = !0, u(this, y, Ft).call(this)) : u(this, y, dt).call(this) : this._findTimeout = setTimeout(() => {
      u(this, y, dt).call(this), this._findTimeout = null;
    }, $a);
  });
}, "#onFind"), gn = /* @__PURE__ */ h(function() {
  this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], f(this, Ze, 0), f(this, W, null), this._selected = {
    pageIdx: -1,
    matchIdx: -1
  }, this._offset = {
    pageIdx: null,
    matchIdx: null,
    wrapped: !1
  }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = Promise.withResolvers();
}, "#reset"), mn = /* @__PURE__ */ h(function() {
  const {
    query: e
  } = o(this, W);
  return typeof e == "string" ? (e !== this._rawQuery && (this._rawQuery = e, [this._normalizedQuery] = ln(e)), this._normalizedQuery) : (e || []).filter((t) => !!t).map((t) => ln(t)[0]);
}, "#query"), Mr = /* @__PURE__ */ h(function(e) {
  const t = e.query, i = o(this, W).query, n = typeof t;
  if (n !== typeof i)
    return !0;
  if (n === "string") {
    if (t !== i)
      return !0;
  } else if (JSON.stringify(t) !== JSON.stringify(i))
    return !0;
  switch (e.type) {
    case "again":
      const r = this._selected.pageIdx + 1, l = this._linkService;
      return r >= 1 && r <= l.pagesCount && r !== l.page && !(this.onIsPageVisible?.(r) ?? !0);
    case "highlightallchange":
      return !1;
  }
  return !0;
}, "#shouldDirtyMatch"), kr = /* @__PURE__ */ h(function(e, t, i) {
  let n = e.slice(0, t).match(Xa);
  if (n) {
    const s = e.charCodeAt(t), r = n[1].charCodeAt(0);
    if (Li(s) === Li(r))
      return !1;
  }
  if (n = e.slice(t + i).match(Za), n) {
    const s = e.charCodeAt(t + i - 1), r = n[1].charCodeAt(0);
    if (Li(s) === Li(r))
      return !1;
  }
  return !0;
}, "#isEntireWord"), bn = /* @__PURE__ */ h(function(e, t) {
  const {
    matchDiacritics: i
  } = o(this, W);
  let n = !1;
  e = e.replaceAll(Ka, (r, l, d, c, p, E) => l ? `[ ]*\\${l}[ ]*` : d ? `[ ]*${d}[ ]*` : c ? "[ ]+" : i ? p || E : p ? rr.has(p.charCodeAt(0)) ? p : "" : t ? (n = !0, `${E}\\p{M}*`) : E);
  const s = "[ ]*";
  return e.endsWith(s) && (e = e.slice(0, e.length - s.length)), i && t && (ar ||= String.fromCharCode(...rr), n = !0, e = `${e}(?=[${ar}]|[^\\p{M}]|$)`), [n, e];
}, "#convertToRegExpString"), Or = /* @__PURE__ */ h(function(e) {
  const t = o(this, y, mn);
  if (t.length === 0)
    return;
  const i = this._pageContents[e], n = this.match(t, i, e), s = this._pageMatches[e] = [], r = this._pageMatchesLength[e] = [], l = this._pageDiffs[e];
  n?.forEach(({
    index: c,
    length: p
  }) => {
    const [E, w] = Ya(l, c, p);
    w && (s.push(E), r.push(w));
  }), o(this, W).highlightAll && u(this, y, Ni).call(this, e), this._resumePageIdx === e && (this._resumePageIdx = null, u(this, y, En).call(this));
  const d = s.length;
  this._matchesCountTotal += d, o(this, gt) ? d > 0 && u(this, y, vn).call(this) : ++Qs(this, Ze)._ === this._linkService.pagesCount && u(this, y, vn).call(this);
}, "#calculateMatch"), Dr = /* @__PURE__ */ h(function() {
  if (this._extractTextPromises.length > 0)
    return;
  let e = Promise.resolve();
  const t = {
    disableNormalization: !0
  };
  for (let i = 0, n = this._linkService.pagesCount; i < n; i++) {
    const {
      promise: s,
      resolve: r
    } = Promise.withResolvers();
    this._extractTextPromises[i] = s, e = e.then(() => this._pdfDocument.getPage(i + 1).then((l) => l.getTextContent(t)).then((l) => {
      const d = [];
      for (const c of l.items)
        d.push(c.str), c.hasEOL && d.push(`
`);
      [this._pageContents[i], this._pageDiffs[i], this._hasDiacritics[i]] = ln(d.join("")), r();
    }, (l) => {
      console.error(`Unable to get text content for page ${i + 1}`, l), this._pageContents[i] = "", this._pageDiffs[i] = null, this._hasDiacritics[i] = !1, r();
    }));
  }
}, "#extractText"), Ni = /* @__PURE__ */ h(function(e) {
  this._scrollMatches && this._selected.pageIdx === e && (this._linkService.page = e + 1), this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: e
  });
}, "#updatePage"), Ft = /* @__PURE__ */ h(function() {
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: -1
  });
}, "#updateAllPages"), dt = /* @__PURE__ */ h(function() {
  const e = o(this, W).findPrevious, t = this._linkService.page - 1, i = this._linkService.pagesCount;
  if (this._highlightMatches = !0, this._dirtyMatch) {
    this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = t, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, f(this, Ze, 0), this._matchesCountTotal = 0, u(this, y, Ft).call(this);
    for (let r = 0; r < i; r++)
      this._pendingFindMatches.has(r) || (this._pendingFindMatches.add(r), this._extractTextPromises[r].then(() => {
        this._pendingFindMatches.delete(r), u(this, y, Or).call(this, r);
      }));
  }
  if (o(this, y, mn).length === 0) {
    u(this, y, Vt).call(this, Pe.FOUND);
    return;
  }
  if (this._resumePageIdx)
    return;
  const s = this._offset;
  if (this._pagesToSearch = i, s.matchIdx !== null) {
    const r = this._pageMatches[s.pageIdx].length;
    if (!e && s.matchIdx + 1 < r || e && s.matchIdx > 0) {
      s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, u(this, y, Mi).call(this, !0);
      return;
    }
    u(this, y, wn).call(this, e);
  }
  u(this, y, En).call(this);
}, "#nextMatch"), jr = /* @__PURE__ */ h(function(e) {
  const t = this._offset, i = e.length, n = o(this, W).findPrevious;
  return i ? (t.matchIdx = n ? i - 1 : 0, u(this, y, Mi).call(this, !0), !0) : (u(this, y, wn).call(this, n), t.wrapped && (t.matchIdx = null, this._pagesToSearch < 0) ? (u(this, y, Mi).call(this, !1), !0) : !1);
}, "#matchesReady"), En = /* @__PURE__ */ h(function() {
  this._resumePageIdx !== null && console.error("There can only be one pending page.");
  let e = null;
  do {
    const t = this._offset.pageIdx;
    if (e = this._pageMatches[t], !e) {
      this._resumePageIdx = t;
      break;
    }
  } while (!u(this, y, jr).call(this, e));
}, "#nextPageMatch"), wn = /* @__PURE__ */ h(function(e) {
  const t = this._offset, i = this._linkService.pagesCount;
  t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this._pagesToSearch--, (t.pageIdx >= i || t.pageIdx < 0) && (t.pageIdx = e ? i - 1 : 0, t.wrapped = !0);
}, "#advanceOffsetPage"), Mi = /* @__PURE__ */ h(function(e = !1) {
  let t = Pe.NOT_FOUND;
  const i = this._offset.wrapped;
  if (this._offset.wrapped = !1, e) {
    const n = this._selected.pageIdx;
    this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, t = i ? Pe.WRAPPED : Pe.FOUND, n !== -1 && n !== this._selected.pageIdx && u(this, y, Ni).call(this, n);
  }
  u(this, y, Vt).call(this, t, o(this, W).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, u(this, y, Ni).call(this, this._selected.pageIdx));
}, "#updateMatch"), Fr = /* @__PURE__ */ h(function(e) {
  const t = this._pdfDocument;
  this._firstPageCapability.promise.then(() => {
    !this._pdfDocument || t && this._pdfDocument !== t || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), u(this, y, Vt).call(this, Pe.FOUND), this._highlightMatches = !1, u(this, y, Ft).call(this));
  });
}, "#onFindBarClose"), _n = /* @__PURE__ */ h(function() {
  const {
    pageIdx: e,
    matchIdx: t
  } = this._selected;
  let i = 0, n = this._matchesCountTotal;
  if (t !== -1) {
    for (let s = 0; s < e; s++)
      i += this._pageMatches[s]?.length || 0;
    i += t + 1;
  }
  return (i < 1 || i > n) && (i = n = 0), {
    current: i,
    total: n
  };
}, "#requestMatchesCount"), vn = /* @__PURE__ */ h(function() {
  this._eventBus.dispatch("updatefindmatchescount", {
    source: this,
    matchesCount: u(this, y, _n).call(this)
  });
}, "#updateUIResultsCount"), Vt = /* @__PURE__ */ h(function(e, t = !1) {
  !o(this, gt) && (o(this, Ze) !== this._linkService.pagesCount || e === Pe.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
    source: this,
    state: e,
    previous: t,
    entireWord: o(this, W)?.entireWord ?? null,
    matchesCount: u(this, y, _n).call(this),
    rawQuery: o(this, W)?.query ?? null
  });
}, "#updateUIState"), h(ms, "PDFFindController");
let pn = ms;
const qa = "noopener noreferrer nofollow", We = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
var qi, Vr;
const Gt = class Gt {
  externalLinkEnabled = !0;
  constructor({
    eventBus: e,
    externalLinkTarget: t = null,
    externalLinkRel: i = null,
    ignoreDestinationZoom: n = !1
  } = {}) {
    this.eventBus = e, this.externalLinkTarget = t, this.externalLinkRel = i, this._ignoreDestinationZoom = n, this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null;
  }
  setDocument(e, t = null) {
    this.baseUrl = t, this.pdfDocument = e;
  }
  setViewer(e) {
    this.pdfViewer = e;
  }
  setHistory(e) {
    this.pdfHistory = e;
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return this.pdfDocument ? this.pdfViewer.currentPageNumber : 1;
  }
  set page(e) {
    this.pdfDocument && (this.pdfViewer.currentPageNumber = e);
  }
  get rotation() {
    return this.pdfDocument ? this.pdfViewer.pagesRotation : 0;
  }
  set rotation(e) {
    this.pdfDocument && (this.pdfViewer.pagesRotation = e);
  }
  get isInPresentationMode() {
    return this.pdfDocument ? this.pdfViewer.isInPresentationMode : !1;
  }
  async goToDestination(e) {
    if (!this.pdfDocument)
      return;
    let t, i, n;
    if (typeof e == "string" ? (t = e, i = await this.pdfDocument.getDestination(e)) : (t = null, i = await e), !Array.isArray(i)) {
      console.error(`goToDestination: "${i}" is not a valid destination array, for dest="${e}".`);
      return;
    }
    const [s] = i;
    if (s && typeof s == "object") {
      if (n = this.pdfDocument.cachedPageNumber(s), !n)
        try {
          n = await this.pdfDocument.getPageIndex(s) + 1;
        } catch {
          console.error(`goToDestination: "${s}" is not a valid page reference, for dest="${e}".`);
          return;
        }
    } else Number.isInteger(s) && (n = s + 1);
    if (!n || n < 1 || n > this.pagesCount) {
      console.error(`goToDestination: "${n}" is not a valid page number, for dest="${e}".`);
      return;
    }
    this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.push({
      namedDest: t,
      explicitDest: i,
      pageNumber: n
    })), this.pdfViewer.scrollPageIntoView({
      pageNumber: n,
      destArray: i,
      ignoreDestinationZoom: this._ignoreDestinationZoom
    });
  }
  goToPage(e) {
    if (!this.pdfDocument)
      return;
    const t = typeof e == "string" && this.pdfViewer.pageLabelToPageNumber(e) || e | 0;
    if (!(Number.isInteger(t) && t > 0 && t <= this.pagesCount)) {
      console.error(`PDFLinkService.goToPage: "${e}" is not a valid page.`);
      return;
    }
    this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.pushPage(t)), this.pdfViewer.scrollPageIntoView({
      pageNumber: t
    });
  }
  addLinkAttributes(e, t, i = !1) {
    if (!t || typeof t != "string")
      throw new Error('A valid "url" parameter must provided.');
    const n = i ? We.BLANK : this.externalLinkTarget, s = this.externalLinkRel;
    this.externalLinkEnabled ? e.href = e.title = t : (e.href = "", e.title = `Disabled: ${t}`, e.onclick = () => !1);
    let r = "";
    switch (n) {
      case We.NONE:
        break;
      case We.SELF:
        r = "_self";
        break;
      case We.BLANK:
        r = "_blank";
        break;
      case We.PARENT:
        r = "_parent";
        break;
      case We.TOP:
        r = "_top";
        break;
    }
    e.target = r, e.rel = typeof s == "string" ? s : qa;
  }
  getDestinationHash(e) {
    if (typeof e == "string") {
      if (e.length > 0)
        return this.getAnchorUrl("#" + escape(e));
    } else if (Array.isArray(e)) {
      const t = JSON.stringify(e);
      if (t.length > 0)
        return this.getAnchorUrl("#" + escape(t));
    }
    return this.getAnchorUrl("");
  }
  getAnchorUrl(e) {
    return this.baseUrl ? this.baseUrl + e : e;
  }
  setHash(e) {
    var n;
    if (!this.pdfDocument)
      return;
    let t, i;
    if (e.includes("=")) {
      const s = tn(e);
      if (s.has("search")) {
        const r = s.get("search").replaceAll('"', ""), l = s.get("phrase") === "true";
        this.eventBus.dispatch("findfromurlhash", {
          source: this,
          query: l ? r : r.match(/\S+/g)
        });
      }
      if (s.has("page") && (t = s.get("page") | 0 || 1), s.has("zoom")) {
        const r = s.get("zoom").split(","), l = r[0], d = parseFloat(l);
        l.includes("Fit") ? l === "Fit" || l === "FitB" ? i = [null, {
          name: l
        }] : l === "FitH" || l === "FitBH" || l === "FitV" || l === "FitBV" ? i = [null, {
          name: l
        }, r.length > 1 ? r[1] | 0 : null] : l === "FitR" ? r.length !== 5 ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : i = [null, {
          name: l
        }, r[1] | 0, r[2] | 0, r[3] | 0, r[4] | 0] : console.error(`PDFLinkService.setHash: "${l}" is not a valid zoom value.`) : i = [null, {
          name: "XYZ"
        }, r.length > 1 ? r[1] | 0 : null, r.length > 2 ? r[2] | 0 : null, d ? d / 100 : l];
      }
      i ? this.pdfViewer.scrollPageIntoView({
        pageNumber: t || this.page,
        destArray: i,
        allowNegativeOffset: !0
      }) : t && (this.page = t), s.has("pagemode") && this.eventBus.dispatch("pagemode", {
        source: this,
        mode: s.get("pagemode")
      }), s.has("nameddest") && this.goToDestination(s.get("nameddest"));
      return;
    }
    i = unescape(e);
    try {
      i = JSON.parse(i), Array.isArray(i) || (i = i.toString());
    } catch {
    }
    if (typeof i == "string" || u(n = Gt, qi, Vr).call(n, i)) {
      this.goToDestination(i);
      return;
    }
    console.error(`PDFLinkService.setHash: "${unescape(e)}" is not a valid destination.`);
  }
  executeNamedAction(e) {
    if (this.pdfDocument) {
      switch (e) {
        case "GoBack":
          this.pdfHistory?.back();
          break;
        case "GoForward":
          this.pdfHistory?.forward();
          break;
        case "NextPage":
          this.pdfViewer.nextPage();
          break;
        case "PrevPage":
          this.pdfViewer.previousPage();
          break;
        case "LastPage":
          this.page = this.pagesCount;
          break;
        case "FirstPage":
          this.page = 1;
          break;
      }
      this.eventBus.dispatch("namedaction", {
        source: this,
        action: e
      });
    }
  }
  async executeSetOCGState(e) {
    if (!this.pdfDocument)
      return;
    const t = this.pdfDocument, i = await this.pdfViewer.optionalContentConfigPromise;
    t === this.pdfDocument && (i.setOCGState(e), this.pdfViewer.optionalContentConfigPromise = Promise.resolve(i));
  }
};
qi = new WeakSet(), Vr = /* @__PURE__ */ h(function(e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [t, i, ...n] = e;
  if (!(typeof t == "object" && Number.isInteger(t?.num) && Number.isInteger(t?.gen)) && !Number.isInteger(t) || !(typeof i == "object" && typeof i?.name == "string"))
    return !1;
  const s = n.length;
  let r = !0;
  switch (i.name) {
    case "XYZ":
      if (s < 2 || s > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return s === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (s > 1)
        return !1;
      break;
    case "FitR":
      if (s !== 4)
        return !1;
      r = !1;
      break;
    default:
      return !1;
  }
  for (const l of n)
    if (!(typeof l == "number" || r && l === null))
      return !1;
  return !0;
}, "#isValidExplicitDest"), m(Gt, qi), h(Gt, "PDFLinkService");
let Ui = Gt;
const bs = class bs extends Ui {
  setDocument(e, t = null) {
  }
};
h(bs, "SimpleLinkService");
let Xt = bs;
const {
  AbortException: eo,
  AnnotationEditorLayer: to,
  AnnotationEditorParamsType: dl,
  AnnotationEditorType: Y,
  AnnotationEditorUIManager: io,
  AnnotationLayer: no,
  AnnotationMode: ye,
  build: ul,
  ColorPicker: cl,
  createValidAbsoluteUrl: so,
  DOMSVGFactory: fl,
  DrawLayer: ro,
  FeatureTest: pl,
  fetchData: hr,
  getDocument: gl,
  getFilenameFromUrl: ml,
  getPdfFilenameFromUrl: ao,
  getXfaPageViewport: bl,
  GlobalWorkerOptions: El,
  ImageKind: wl,
  InvalidPDFException: _l,
  isDataScheme: vl,
  isPdfFile: oo,
  MissingPDFException: yl,
  noContextMenu: Pl,
  normalizeUnicode: lo,
  OPS: xl,
  OutputScale: ho,
  PasswordResponses: Sl,
  PDFDataRangeTransport: Al,
  PDFDateString: Il,
  PDFWorker: Ll,
  PermissionFlag: Ti,
  PixelsPerInch: me,
  RenderingCancelledException: yn,
  setLayerDimensions: uo,
  shadow: $i,
  stopEvent: Pn,
  TextLayer: co,
  TouchManager: Tl,
  UnexpectedResponseException: Rl,
  Util: Cl,
  VerbosityLevel: Nl,
  version: dr,
  XfaLayer: hn
} = globalThis.pdfjsLib;
var Qt, Le, Jt, xn;
const Es = class Es {
  constructor({
    pdfPage: e,
    linkService: t,
    downloadManager: i,
    annotationStorage: n = null,
    imageResourcesPath: s = "",
    renderForms: r = !0,
    enableScripting: l = !1,
    hasJSActionsPromise: d = null,
    fieldObjectsPromise: c = null,
    annotationCanvasMap: p = null,
    accessibilityManager: E = null,
    annotationEditorUIManager: w = null,
    onAppend: A = null
  }) {
    m(this, Jt);
    m(this, Qt, null);
    m(this, Le, null);
    this.pdfPage = e, this.linkService = t, this.downloadManager = i, this.imageResourcesPath = s, this.renderForms = r, this.annotationStorage = n, this.enableScripting = l, this._hasJSActionsPromise = d || Promise.resolve(!1), this._fieldObjectsPromise = c || Promise.resolve(null), this._annotationCanvasMap = p, this._accessibilityManager = E, this._annotationEditorUIManager = w, f(this, Qt, A), this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = t.eventBus;
  }
  async render(e, t, i = "display") {
    var d;
    if (this.div) {
      if (this._cancelled || !this.annotationLayer)
        return;
      this.annotationLayer.update({
        viewport: e.clone({
          dontFlip: !0
        })
      });
      return;
    }
    const [n, s, r] = await Promise.all([this.pdfPage.getAnnotations({
      intent: i
    }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
    if (this._cancelled)
      return;
    const l = this.div = document.createElement("div");
    if (l.className = "annotationLayer", (d = o(this, Qt)) == null || d.call(this, l), n.length === 0) {
      this.hide();
      return;
    }
    this.annotationLayer = new no({
      div: l,
      accessibilityManager: this._accessibilityManager,
      annotationCanvasMap: this._annotationCanvasMap,
      annotationEditorUIManager: this._annotationEditorUIManager,
      page: this.pdfPage,
      viewport: e.clone({
        dontFlip: !0
      }),
      structTreeLayer: t?.structTreeLayer || null
    }), await this.annotationLayer.render({
      annotations: n,
      imageResourcesPath: this.imageResourcesPath,
      renderForms: this.renderForms,
      linkService: this.linkService,
      downloadManager: this.downloadManager,
      annotationStorage: this.annotationStorage,
      enableScripting: this.enableScripting,
      hasJSActions: s,
      fieldObjects: r
    }), this.linkService.isInPresentationMode && u(this, Jt, xn).call(this, ft.FULLSCREEN), o(this, Le) || (f(this, Le, new AbortController()), this._eventBus?._on("presentationmodechanged", (c) => {
      u(this, Jt, xn).call(this, c.state);
    }, {
      signal: o(this, Le).signal
    }));
  }
  cancel() {
    this._cancelled = !0, o(this, Le)?.abort(), f(this, Le, null);
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
};
Qt = new WeakMap(), Le = new WeakMap(), Jt = new WeakSet(), xn = /* @__PURE__ */ h(function(e) {
  if (!this.div)
    return;
  let t = !1;
  switch (e) {
    case ft.FULLSCREEN:
      t = !0;
      break;
    case ft.NORMAL:
      break;
    default:
      return;
  }
  for (const i of this.div.childNodes)
    i.hasAttribute("data-internal-link") || (i.inert = t);
}, "#updatePresentationModeState"), h(Es, "AnnotationLayerBuilder");
let Wi = Es;
function ur(a, e) {
  const t = document.createElement("a");
  if (!t.click)
    throw new Error('DownloadManager: "a.click()" is not supported.');
  t.href = a, t.target = "_parent", "download" in t && (t.download = e), (document.body || document.documentElement).append(t), t.click(), t.remove();
}
h(ur, "download");
var ps;
const ws = class ws {
  constructor() {
    m(this, ps, /* @__PURE__ */ new WeakMap());
  }
  downloadData(e, t, i) {
    const n = URL.createObjectURL(new Blob([e], {
      type: i
    }));
    ur(n, t);
  }
  openOrDownloadData(e, t, i = null) {
    const s = oo(t) ? "application/pdf" : "";
    return this.downloadData(e, t, s), !1;
  }
  download(e, t, i) {
    let n;
    if (e)
      n = URL.createObjectURL(new Blob([e], {
        type: "application/pdf"
      }));
    else {
      if (!so(t, "http://example.com")) {
        console.error(`download - not a valid URL: ${t}`);
        return;
      }
      n = t + "#pdfjs.action=download";
    }
    ur(n, i);
  }
};
ps = new WeakMap(), h(ws, "DownloadManager");
let Sn = ws;
const cr = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
async function fo({
  target: a,
  name: e,
  delay: t = 0
}) {
  if (typeof a != "object" || !(Number.isInteger(t) && t >= 0))
    throw new Error("waitOnEventOrTimeout - invalid parameters.");
  const {
    promise: i,
    resolve: n
  } = Promise.withResolvers(), s = new AbortController();
  function r(c) {
    s.abort(), clearTimeout(d), n(c);
  }
  h(r, "handler");
  const l = a instanceof zi ? "_on" : "addEventListener";
  a[l](e, r.bind(null, cr.EVENT), {
    signal: s.signal
  });
  const d = setTimeout(r.bind(null, cr.TIMEOUT), t);
  return i;
}
h(fo, "waitOnEventOrTimeout");
var mt;
const _s = class _s {
  constructor() {
    m(this, mt, /* @__PURE__ */ Object.create(null));
  }
  on(e, t, i = null) {
    this._on(e, t, {
      external: !0,
      once: i?.once,
      signal: i?.signal
    });
  }
  off(e, t, i = null) {
    this._off(e, t);
  }
  dispatch(e, t) {
    const i = o(this, mt)[e];
    if (!i || i.length === 0)
      return;
    let n;
    for (const {
      listener: s,
      external: r,
      once: l
    } of i.slice(0)) {
      if (l && this._off(e, s), r) {
        (n ||= []).push(s);
        continue;
      }
      s(t);
    }
    if (n) {
      for (const s of n)
        s(t);
      n = null;
    }
  }
  _on(e, t, i = null) {
    let n = null;
    if (i?.signal instanceof AbortSignal) {
      const {
        signal: r
      } = i;
      if (r.aborted) {
        console.error("Cannot use an `aborted` signal.");
        return;
      }
      const l = /* @__PURE__ */ h(() => this._off(e, t), "onAbort");
      n = /* @__PURE__ */ h(() => r.removeEventListener("abort", l), "rmAbort"), r.addEventListener("abort", l);
    }
    (o(this, mt)[e] ||= []).push({
      listener: t,
      external: i?.external === !0,
      once: i?.once === !0,
      rmAbort: n
    });
  }
  _off(e, t, i = null) {
    const n = o(this, mt)[e];
    if (n)
      for (let s = 0, r = n.length; s < r; s++) {
        const l = n[s];
        if (l.listener === t) {
          l.rmAbort?.(), n.splice(s, 1);
          return;
        }
      }
  }
};
mt = new WeakMap(), h(_s, "EventBus");
let zi = _s;
const vs = class vs {
  constructor(e) {
    this.value = e;
  }
  valueOf() {
    return this.value;
  }
};
h(vs, "FluentType");
let Nt = vs;
const ys = class ys extends Nt {
  constructor(e = "???") {
    super(e);
  }
  toString(e) {
    return `{${this.value}}`;
  }
};
h(ys, "FluentNone");
let U = ys;
const Ps = class Ps extends Nt {
  constructor(e, t = {}) {
    super(e), this.opts = t;
  }
  toString(e) {
    try {
      return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
    } catch (t) {
      return e.reportError(t), this.value.toString(10);
    }
  }
};
h(Ps, "FluentNumber");
let ae = Ps;
const xs = class xs extends Nt {
  constructor(e, t = {}) {
    super(e), this.opts = t;
  }
  toString(e) {
    try {
      return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
    } catch (t) {
      return e.reportError(t), new Date(this.value).toISOString();
    }
  }
};
h(xs, "FluentDateTime");
let ht = xs;
const fr = 100, po = "⁨", go = "⁩";
function mo(a, e, t) {
  if (t === e || t instanceof ae && e instanceof ae && t.value === e.value)
    return !0;
  if (e instanceof ae && typeof t == "string") {
    let i = a.memoizeIntlObject(Intl.PluralRules, e.opts).select(e.value);
    if (t === i)
      return !0;
  }
  return !1;
}
h(mo, "match");
function pr(a, e, t) {
  return e[t] ? Mt(a, e[t].value) : (a.reportError(new RangeError("No default")), new U());
}
h(pr, "getDefault");
function An(a, e) {
  const t = [], i = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    n.type === "narg" ? i[n.name] = Zt(a, n.value) : t.push(Zt(a, n));
  return {
    positional: t,
    named: i
  };
}
h(An, "getArguments");
function Zt(a, e) {
  switch (e.type) {
    case "str":
      return e.value;
    case "num":
      return new ae(e.value, {
        minimumFractionDigits: e.precision
      });
    case "var":
      return bo(a, e);
    case "mesg":
      return Eo(a, e);
    case "term":
      return wo(a, e);
    case "func":
      return _o(a, e);
    case "select":
      return vo(a, e);
    default:
      return new U();
  }
}
h(Zt, "resolveExpression");
function bo(a, {
  name: e
}) {
  let t;
  if (a.params)
    if (Object.prototype.hasOwnProperty.call(a.params, e))
      t = a.params[e];
    else
      return new U(`$${e}`);
  else if (a.args && Object.prototype.hasOwnProperty.call(a.args, e))
    t = a.args[e];
  else
    return a.reportError(new ReferenceError(`Unknown variable: $${e}`)), new U(`$${e}`);
  if (t instanceof Nt)
    return t;
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return new ae(t);
    case "object":
      if (t instanceof Date)
        return new ht(t.getTime());
    default:
      return a.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)), new U(`$${e}`);
  }
}
h(bo, "resolveVariableReference");
function Eo(a, {
  name: e,
  attr: t
}) {
  const i = a.bundle._messages.get(e);
  if (!i)
    return a.reportError(new ReferenceError(`Unknown message: ${e}`)), new U(e);
  if (t) {
    const n = i.attributes[t];
    return n ? Mt(a, n) : (a.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new U(`${e}.${t}`));
  }
  return i.value ? Mt(a, i.value) : (a.reportError(new ReferenceError(`No value: ${e}`)), new U(e));
}
h(Eo, "resolveMessageReference");
function wo(a, {
  name: e,
  attr: t,
  args: i
}) {
  const n = `-${e}`, s = a.bundle._terms.get(n);
  if (!s)
    return a.reportError(new ReferenceError(`Unknown term: ${n}`)), new U(n);
  if (t) {
    const l = s.attributes[t];
    if (l) {
      a.params = An(a, i).named;
      const d = Mt(a, l);
      return a.params = null, d;
    }
    return a.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new U(`${n}.${t}`);
  }
  a.params = An(a, i).named;
  const r = Mt(a, s.value);
  return a.params = null, r;
}
h(wo, "resolveTermReference");
function _o(a, {
  name: e,
  args: t
}) {
  let i = a.bundle._functions[e];
  if (!i)
    return a.reportError(new ReferenceError(`Unknown function: ${e}()`)), new U(`${e}()`);
  if (typeof i != "function")
    return a.reportError(new TypeError(`Function ${e}() is not callable`)), new U(`${e}()`);
  try {
    let n = An(a, t);
    return i(n.positional, n.named);
  } catch (n) {
    return a.reportError(n), new U(`${e}()`);
  }
}
h(_o, "resolveFunctionReference");
function vo(a, {
  selector: e,
  variants: t,
  star: i
}) {
  let n = Zt(a, e);
  if (n instanceof U)
    return pr(a, t, i);
  for (const s of t) {
    const r = Zt(a, s.key);
    if (mo(a, n, r))
      return Mt(a, s.value);
  }
  return pr(a, t, i);
}
h(vo, "resolveSelectExpression");
function Br(a, e) {
  if (a.dirty.has(e))
    return a.reportError(new RangeError("Cyclic reference")), new U();
  a.dirty.add(e);
  const t = [], i = a.bundle._useIsolating && e.length > 1;
  for (const n of e) {
    if (typeof n == "string") {
      t.push(a.bundle._transform(n));
      continue;
    }
    if (a.placeables++, a.placeables > fr)
      throw a.dirty.delete(e), new RangeError(`Too many placeables expanded: ${a.placeables}, max allowed is ${fr}`);
    i && t.push(po), t.push(Zt(a, n).toString(a)), i && t.push(go);
  }
  return a.dirty.delete(e), t.join("");
}
h(Br, "resolveComplexPattern");
function Mt(a, e) {
  return typeof e == "string" ? a.bundle._transform(e) : Br(a, e);
}
h(Mt, "resolvePattern");
const Ss = class Ss {
  constructor(e, t, i) {
    this.dirty = /* @__PURE__ */ new WeakSet(), this.params = null, this.placeables = 0, this.bundle = e, this.errors = t, this.args = i;
  }
  reportError(e) {
    if (!this.errors || !(e instanceof Error))
      throw e;
    this.errors.push(e);
  }
  memoizeIntlObject(e, t) {
    let i = this.bundle._intls.get(e);
    i || (i = {}, this.bundle._intls.set(e, i));
    let n = JSON.stringify(t);
    return i[n] || (i[n] = new e(this.bundle.locales, t)), i[n];
  }
};
h(Ss, "Scope");
let In = Ss;
function Gi(a, e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [i, n] of Object.entries(a))
    e.includes(i) && (t[i] = n.valueOf());
  return t;
}
h(Gi, "values");
const gr = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
function yo(a, e) {
  let t = a[0];
  if (t instanceof U)
    return new U(`NUMBER(${t.valueOf()})`);
  if (t instanceof ae)
    return new ae(t.valueOf(), {
      ...t.opts,
      ...Gi(e, gr)
    });
  if (t instanceof ht)
    return new ae(t.valueOf(), {
      ...Gi(e, gr)
    });
  throw new TypeError("Invalid argument to NUMBER");
}
h(yo, "NUMBER");
const mr = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
function Po(a, e) {
  let t = a[0];
  if (t instanceof U)
    return new U(`DATETIME(${t.valueOf()})`);
  if (t instanceof ht)
    return new ht(t.valueOf(), {
      ...t.opts,
      ...Gi(e, mr)
    });
  if (t instanceof ae)
    return new ht(t.valueOf(), {
      ...Gi(e, mr)
    });
  throw new TypeError("Invalid argument to DATETIME");
}
h(Po, "DATETIME");
const br = /* @__PURE__ */ new Map();
function xo(a) {
  const e = Array.isArray(a) ? a.join(" ") : a;
  let t = br.get(e);
  return t === void 0 && (t = /* @__PURE__ */ new Map(), br.set(e, t)), t;
}
h(xo, "getMemoizerForLocale");
const As = class As {
  constructor(e, {
    functions: t,
    useIsolating: i = !0,
    transform: n = /* @__PURE__ */ h((s) => s, "transform")
  } = {}) {
    this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
      NUMBER: yo,
      DATETIME: Po,
      ...t
    }, this._useIsolating = i, this._transform = n, this._intls = xo(e);
  }
  hasMessage(e) {
    return this._messages.has(e);
  }
  getMessage(e) {
    return this._messages.get(e);
  }
  addResource(e, {
    allowOverrides: t = !1
  } = {}) {
    const i = [];
    for (let n = 0; n < e.body.length; n++) {
      let s = e.body[n];
      if (s.id.startsWith("-")) {
        if (t === !1 && this._terms.has(s.id)) {
          i.push(new Error(`Attempt to override an existing term: "${s.id}"`));
          continue;
        }
        this._terms.set(s.id, s);
      } else {
        if (t === !1 && this._messages.has(s.id)) {
          i.push(new Error(`Attempt to override an existing message: "${s.id}"`));
          continue;
        }
        this._messages.set(s.id, s);
      }
    }
    return i;
  }
  formatPattern(e, t = null, i = null) {
    if (typeof e == "string")
      return this._transform(e);
    let n = new In(this, i, t);
    try {
      return Br(n, e).toString(n);
    } catch (s) {
      if (n.errors && s instanceof Error)
        return n.errors.push(s), new U().toString(n);
      throw s;
    }
  }
};
h(As, "FluentBundle");
let Ln = As;
const dn = /^(-?[a-zA-Z][\w-]*) *= */gm, Er = /\.([a-zA-Z][\w-]*) *= */y, So = /\*?\[/y, un = /(-?[0-9]+(?:\.([0-9]+))?)/y, Ao = /([a-zA-Z][\w-]*)/y, wr = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y, Io = /^[A-Z][A-Z0-9_-]*$/, Ri = /([^{}\n\r]+)/y, Lo = /([^\\"\n\r]*)/y, _r = /\\([\\"])/y, vr = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y, To = /^\n+/, yr = / +$/, Ro = / *\r?\n/g, Co = /( *)$/, No = /{\s*/y, Pr = /\s*}/y, Mo = /\[\s*/y, ko = /\s*] */y, Oo = /\s*\(\s*/y, Do = /\s*->\s*/y, jo = /\s*:\s*/y, Fo = /\s*,?\s*/y, Vo = /\s+/y, Is = class Is {
  constructor(e) {
    this.body = [], dn.lastIndex = 0;
    let t = 0;
    for (; ; ) {
      let b = dn.exec(e);
      if (b === null)
        break;
      t = dn.lastIndex;
      try {
        this.body.push(d(b[1]));
      } catch (_) {
        if (_ instanceof SyntaxError)
          continue;
        throw _;
      }
    }
    function i(b) {
      return b.lastIndex = t, b.test(e);
    }
    h(i, "test");
    function n(b, _) {
      if (e[t] === b)
        return t++, !0;
      if (_)
        throw new _(`Expected ${b}`);
      return !1;
    }
    h(n, "consumeChar");
    function s(b, _) {
      if (i(b))
        return t = b.lastIndex, !0;
      if (_)
        throw new _(`Expected ${b.toString()}`);
      return !1;
    }
    h(s, "consumeToken");
    function r(b) {
      b.lastIndex = t;
      let _ = b.exec(e);
      if (_ === null)
        throw new SyntaxError(`Expected ${b.toString()}`);
      return t = b.lastIndex, _;
    }
    h(r, "match");
    function l(b) {
      return r(b)[1];
    }
    h(l, "match1");
    function d(b) {
      let _ = p(), v = c();
      if (_ === null && Object.keys(v).length === 0)
        throw new SyntaxError("Expected message value or attributes");
      return {
        id: b,
        value: _,
        attributes: v
      };
    }
    h(d, "parseMessage");
    function c() {
      let b = /* @__PURE__ */ Object.create(null);
      for (; i(Er); ) {
        let _ = l(Er), v = p();
        if (v === null)
          throw new SyntaxError("Expected attribute value");
        b[_] = v;
      }
      return b;
    }
    h(c, "parseAttributes");
    function p() {
      let b;
      if (i(Ri) && (b = l(Ri)), e[t] === "{" || e[t] === "}")
        return E(b ? [b] : [], 1 / 0);
      let _ = F();
      return _ ? b ? E([b, _], _.length) : (_.value = B(_.value, To), E([_], _.length)) : b ? B(b, yr) : null;
    }
    h(p, "parsePattern");
    function E(b = [], _) {
      for (; ; ) {
        if (i(Ri)) {
          b.push(l(Ri));
          continue;
        }
        if (e[t] === "{") {
          b.push(w());
          continue;
        }
        if (e[t] === "}")
          throw new SyntaxError("Unbalanced closing brace");
        let K = F();
        if (K) {
          b.push(K), _ = Math.min(_, K.length);
          continue;
        }
        break;
      }
      let v = b.length - 1, O = b[v];
      typeof O == "string" && (b[v] = B(O, yr));
      let Z = [];
      for (let K of b)
        K instanceof Ki && (K = K.value.slice(0, K.value.length - _)), K && Z.push(K);
      return Z;
    }
    h(E, "parsePatternElements");
    function w() {
      s(No, SyntaxError);
      let b = A();
      if (s(Pr))
        return b;
      if (s(Do)) {
        let _ = L();
        return s(Pr, SyntaxError), {
          type: "select",
          selector: b,
          ..._
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    h(w, "parsePlaceable");
    function A() {
      if (e[t] === "{")
        return w();
      if (i(wr)) {
        let [, b, _, v = null] = r(wr);
        if (b === "$")
          return {
            type: "var",
            name: _
          };
        if (s(Oo)) {
          let O = C();
          if (b === "-")
            return {
              type: "term",
              name: _,
              attr: v,
              args: O
            };
          if (Io.test(_))
            return {
              type: "func",
              name: _,
              args: O
            };
          throw new SyntaxError("Function names must be all upper-case");
        }
        return b === "-" ? {
          type: "term",
          name: _,
          attr: v,
          args: []
        } : {
          type: "mesg",
          name: _,
          attr: v
        };
      }
      return M();
    }
    h(A, "parseInlineExpression");
    function C() {
      let b = [];
      for (; ; ) {
        switch (e[t]) {
          case ")":
            return t++, b;
          case void 0:
            throw new SyntaxError("Unclosed argument list");
        }
        b.push(I()), s(Fo);
      }
    }
    h(C, "parseArguments");
    function I() {
      let b = A();
      return b.type !== "mesg" ? b : s(jo) ? {
        type: "narg",
        name: b.name,
        value: M()
      } : b;
    }
    h(I, "parseArgument");
    function L() {
      let b = [], _ = 0, v;
      for (; i(So); ) {
        n("*") && (v = _);
        let O = N(), Z = p();
        if (Z === null)
          throw new SyntaxError("Expected variant value");
        b[_++] = {
          key: O,
          value: Z
        };
      }
      if (_ === 0)
        return null;
      if (v === void 0)
        throw new SyntaxError("Expected default variant");
      return {
        variants: b,
        star: v
      };
    }
    h(L, "parseVariants");
    function N() {
      s(Mo, SyntaxError);
      let b;
      return i(un) ? b = x() : b = {
        type: "str",
        value: l(Ao)
      }, s(ko, SyntaxError), b;
    }
    h(N, "parseVariantKey");
    function M() {
      if (i(un))
        return x();
      if (e[t] === '"')
        return P();
      throw new SyntaxError("Invalid expression");
    }
    h(M, "parseLiteral");
    function x() {
      let [, b, _ = ""] = r(un), v = _.length;
      return {
        type: "num",
        value: parseFloat(b),
        precision: v
      };
    }
    h(x, "parseNumberLiteral");
    function P() {
      n('"', SyntaxError);
      let b = "";
      for (; ; ) {
        if (b += l(Lo), e[t] === "\\") {
          b += k();
          continue;
        }
        if (n('"'))
          return {
            type: "str",
            value: b
          };
        throw new SyntaxError("Unclosed string literal");
      }
    }
    h(P, "parseStringLiteral");
    function k() {
      if (i(_r))
        return l(_r);
      if (i(vr)) {
        let [, b, _] = r(vr), v = parseInt(b || _, 16);
        return v <= 55295 || 57344 <= v ? String.fromCodePoint(v) : "�";
      }
      throw new SyntaxError("Unknown escape sequence");
    }
    h(k, "parseEscapeSequence");
    function F() {
      let b = t;
      switch (s(Vo), e[t]) {
        case ".":
        case "[":
        case "*":
        case "}":
        case void 0:
          return !1;
        case "{":
          return j(e.slice(b, t));
      }
      return e[t - 1] === " " ? j(e.slice(b, t)) : !1;
    }
    h(F, "parseIndent");
    function B(b, _) {
      return b.replace(_, "");
    }
    h(B, "trim");
    function j(b) {
      let _ = b.replace(Ro, `
`), v = Co.exec(b)[1].length;
      return new Ki(_, v);
    }
    h(j, "makeIndent");
  }
};
h(Is, "FluentResource");
let Tn = Is;
const Ls = class Ls {
  constructor(e, t) {
    this.value = e, this.length = t;
  }
};
h(Ls, "Indent");
let Ki = Ls;
const Bo = /<|&#?\w+;/, Ho = {
  "http://www.w3.org/1999/xhtml": ["em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "bdi", "bdo", "span", "br", "wbr"]
}, Uo = {
  "http://www.w3.org/1999/xhtml": {
    global: ["title", "aria-label", "aria-valuetext"],
    a: ["download"],
    area: ["download", "alt"],
    input: ["alt", "placeholder"],
    menuitem: ["label"],
    menu: ["label"],
    optgroup: ["label"],
    option: ["label"],
    track: ["label"],
    img: ["alt"],
    textarea: ["placeholder"],
    th: ["abbr"]
  },
  "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul": {
    global: ["accesskey", "aria-label", "aria-valuetext", "label", "title", "tooltiptext"],
    description: ["value"],
    key: ["key", "keycode"],
    label: ["value"],
    textbox: ["placeholder", "value"]
  }
};
function $o(a, e) {
  const {
    value: t
  } = e;
  if (typeof t == "string")
    if (a.localName === "title" && a.namespaceURI === "http://www.w3.org/1999/xhtml")
      a.textContent = t;
    else if (!Bo.test(t))
      a.textContent = t;
    else {
      const i = a.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "template");
      i.innerHTML = t, Wo(i.content, a);
    }
  Hr(e, a);
}
h($o, "translateElement");
function Wo(a, e) {
  for (const t of a.childNodes)
    if (t.nodeType !== t.TEXT_NODE) {
      if (t.hasAttribute("data-l10n-name")) {
        const i = Go(e, t);
        a.replaceChild(i, t);
        continue;
      }
      if (Xo(t)) {
        const i = Ko(t);
        a.replaceChild(i, t);
        continue;
      }
      console.warn(`An element of forbidden type "${t.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`), a.replaceChild(Rn(t), t);
    }
  e.textContent = "", e.appendChild(a);
}
h(Wo, "overlayChildNodes");
function zo(a, e) {
  if (!a)
    return !1;
  for (let t of a)
    if (t.name === e)
      return !0;
  return !1;
}
h(zo, "hasAttribute");
function Hr(a, e) {
  const t = e.hasAttribute("data-l10n-attrs") ? e.getAttribute("data-l10n-attrs").split(",").map((i) => i.trim()) : null;
  for (const i of Array.from(e.attributes))
    xr(i.name, e, t) && !zo(a.attributes, i.name) && e.removeAttribute(i.name);
  if (a.attributes)
    for (const i of Array.from(a.attributes))
      xr(i.name, e, t) && e.getAttribute(i.name) !== i.value && e.setAttribute(i.name, i.value);
}
h(Hr, "overlayAttributes");
function Go(a, e) {
  const t = e.getAttribute("data-l10n-name"), i = a.querySelector(`[data-l10n-name="${t}"]`);
  if (!i)
    return console.warn(`An element named "${t}" wasn't found in the source.`), Rn(e);
  if (i.localName !== e.localName)
    return console.warn(`An element named "${t}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${i.localName}).`), Rn(e);
  a.removeChild(i);
  const n = i.cloneNode(!1);
  return Ur(e, n);
}
h(Go, "getNodeForNamedElement");
function Ko(a) {
  const e = a.ownerDocument.createElement(a.localName);
  return Ur(a, e);
}
h(Ko, "createSanitizedElement");
function Rn(a) {
  return a.ownerDocument.createTextNode(a.textContent);
}
h(Rn, "createTextNodeFromTextContent");
function Xo(a) {
  const e = Ho[a.namespaceURI];
  return e && e.includes(a.localName);
}
h(Xo, "isElementAllowed");
function xr(a, e, t = null) {
  if (t && t.includes(a))
    return !0;
  const i = Uo[e.namespaceURI];
  if (!i)
    return !1;
  const n = a.toLowerCase(), s = e.localName;
  if (i.global.includes(n))
    return !0;
  if (!i[s])
    return !1;
  if (i[s].includes(n))
    return !0;
  if (e.namespaceURI === "http://www.w3.org/1999/xhtml" && s === "input" && n === "value") {
    const r = e.type.toLowerCase();
    if (r === "submit" || r === "button" || r === "reset")
      return !0;
  }
  return !1;
}
h(xr, "isAttrNameLocalizable");
function Ur(a, e) {
  return e.textContent = a.textContent, Hr(a, e), e;
}
h(Ur, "shallowPopulateUsing");
const Ts = class Ts extends Array {
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
};
h(Ts, "CachedIterable");
let Cn = Ts;
const Rs = class Rs extends Cn {
  constructor(e) {
    if (super(), Symbol.asyncIterator in Object(e))
      this.iterator = e[Symbol.asyncIterator]();
    else if (Symbol.iterator in Object(e))
      this.iterator = e[Symbol.iterator]();
    else
      throw new TypeError("Argument must implement the iteration protocol.");
  }
  [Symbol.asyncIterator]() {
    const e = this;
    let t = 0;
    return {
      async next() {
        return e.length <= t && e.push(e.iterator.next()), e[t++];
      }
    };
  }
  async touchNext(e = 1) {
    let t = 0;
    for (; t++ < e; ) {
      const i = this[this.length - 1];
      if (i && (await i).done)
        break;
      this.push(this.iterator.next());
    }
    return this[this.length - 1];
  }
};
h(Rs, "CachedAsyncIterable");
let Nn = Rs;
const Cs = class Cs {
  constructor(e = [], t) {
    this.resourceIds = e, this.generateBundles = t, this.onChange(!0);
  }
  addResourceIds(e, t = !1) {
    return this.resourceIds.push(...e), this.onChange(t), this.resourceIds.length;
  }
  removeResourceIds(e) {
    return this.resourceIds = this.resourceIds.filter((t) => !e.includes(t)), this.onChange(), this.resourceIds.length;
  }
  async formatWithFallback(e, t) {
    const i = [];
    let n = !1;
    for await (const s of this.bundles) {
      n = !0;
      const r = Jo(t, s, e, i);
      if (r.size === 0)
        break;
      if (typeof console < "u") {
        const l = s.locales[0], d = Array.from(r).join(", ");
        console.warn(`[fluent] Missing translations in ${l}: ${d}`);
      }
    }
    return !n && typeof console < "u" && console.warn(`[fluent] Request for keys failed because no resource bundles got generated.
  keys: ${JSON.stringify(e)}.
  resourceIds: ${JSON.stringify(this.resourceIds)}.`), i;
  }
  formatMessages(e) {
    return this.formatWithFallback(e, Qo);
  }
  formatValues(e) {
    return this.formatWithFallback(e, Zo);
  }
  async formatValue(e, t) {
    const [i] = await this.formatValues([{
      id: e,
      args: t
    }]);
    return i;
  }
  handleEvent() {
    this.onChange();
  }
  onChange(e = !1) {
    this.bundles = Nn.from(this.generateBundles(this.resourceIds)), e && this.bundles.touchNext(2);
  }
};
h(Cs, "Localization");
let Mn = Cs;
function Zo(a, e, t, i) {
  return t.value ? a.formatPattern(t.value, i, e) : null;
}
h(Zo, "valueFromBundle");
function Qo(a, e, t, i) {
  const n = {
    value: null,
    attributes: null
  };
  t.value && (n.value = a.formatPattern(t.value, i, e));
  let s = Object.keys(t.attributes);
  if (s.length > 0) {
    n.attributes = new Array(s.length);
    for (let [r, l] of s.entries()) {
      let d = a.formatPattern(t.attributes[l], i, e);
      n.attributes[r] = {
        name: l,
        value: d
      };
    }
  }
  return n;
}
h(Qo, "messageFromBundle");
function Jo(a, e, t, i) {
  const n = [], s = /* @__PURE__ */ new Set();
  return t.forEach(({
    id: r,
    args: l
  }, d) => {
    if (i[d] !== void 0)
      return;
    let c = e.getMessage(r);
    if (c) {
      if (n.length = 0, i[d] = a(e, n, c, l), n.length > 0 && typeof console < "u") {
        const p = e.locales[0], E = n.join(", ");
        console.warn(`[fluent][resolver] errors in ${p}/${r}: ${E}.`);
      }
    } else
      s.add(r);
  }), s;
}
h(Jo, "keysFromBundle");
const ze = "data-l10n-id", jt = "data-l10n-args", Yo = `[${ze}]`, Ns = class Ns extends Mn {
  constructor(e, t) {
    super(e, t), this.roots = /* @__PURE__ */ new Set(), this.pendingrAF = null, this.pendingElements = /* @__PURE__ */ new Set(), this.windowElement = null, this.mutationObserver = null, this.observerConfig = {
      attributes: !0,
      characterData: !1,
      childList: !0,
      subtree: !0,
      attributeFilter: [ze, jt]
    };
  }
  onChange(e = !1) {
    super.onChange(e), this.roots && this.translateRoots();
  }
  setAttributes(e, t, i) {
    return e.setAttribute(ze, t), i ? e.setAttribute(jt, JSON.stringify(i)) : e.removeAttribute(jt), e;
  }
  getAttributes(e) {
    return {
      id: e.getAttribute(ze),
      args: JSON.parse(e.getAttribute(jt) || null)
    };
  }
  connectRoot(e) {
    for (const t of this.roots)
      if (t === e || t.contains(e) || e.contains(t))
        throw new Error("Cannot add a root that overlaps with existing root.");
    if (this.windowElement) {
      if (this.windowElement !== e.ownerDocument.defaultView)
        throw new Error(`Cannot connect a root:
          DOMLocalization already has a root from a different window.`);
    } else
      this.windowElement = e.ownerDocument.defaultView, this.mutationObserver = new this.windowElement.MutationObserver((t) => this.translateMutations(t));
    this.roots.add(e), this.mutationObserver.observe(e, this.observerConfig);
  }
  disconnectRoot(e) {
    return this.roots.delete(e), this.pauseObserving(), this.roots.size === 0 ? (this.mutationObserver = null, this.windowElement && this.pendingrAF && this.windowElement.cancelAnimationFrame(this.pendingrAF), this.windowElement = null, this.pendingrAF = null, this.pendingElements.clear(), !0) : (this.resumeObserving(), !1);
  }
  translateRoots() {
    const e = Array.from(this.roots);
    return Promise.all(e.map((t) => this.translateFragment(t)));
  }
  pauseObserving() {
    this.mutationObserver && (this.translateMutations(this.mutationObserver.takeRecords()), this.mutationObserver.disconnect());
  }
  resumeObserving() {
    if (this.mutationObserver)
      for (const e of this.roots)
        this.mutationObserver.observe(e, this.observerConfig);
  }
  translateMutations(e) {
    for (const t of e)
      switch (t.type) {
        case "attributes":
          t.target.hasAttribute("data-l10n-id") && this.pendingElements.add(t.target);
          break;
        case "childList":
          for (const i of t.addedNodes)
            if (i.nodeType === i.ELEMENT_NODE)
              if (i.childElementCount)
                for (const n of this.getTranslatables(i))
                  this.pendingElements.add(n);
              else i.hasAttribute(ze) && this.pendingElements.add(i);
          break;
      }
    this.pendingElements.size > 0 && this.pendingrAF === null && (this.pendingrAF = this.windowElement.requestAnimationFrame(() => {
      this.translateElements(Array.from(this.pendingElements)), this.pendingElements.clear(), this.pendingrAF = null;
    }));
  }
  translateFragment(e) {
    return this.translateElements(this.getTranslatables(e));
  }
  async translateElements(e) {
    if (!e.length)
      return;
    const t = e.map(this.getKeysForElement), i = await this.formatMessages(t);
    return this.applyTranslations(e, i);
  }
  applyTranslations(e, t) {
    this.pauseObserving();
    for (let i = 0; i < e.length; i++)
      t[i] !== void 0 && $o(e[i], t[i]);
    this.resumeObserving();
  }
  getTranslatables(e) {
    const t = Array.from(e.querySelectorAll(Yo));
    return typeof e.hasAttribute == "function" && e.hasAttribute(ze) && t.push(e), t;
  }
  getKeysForElement(e) {
    return {
      id: e.getAttribute(ze),
      args: JSON.parse(e.getAttribute(jt) || null)
    };
  }
};
h(Ns, "DOMLocalization");
let kn = Ns;
var Yt, Te, bt, Q, Ot, $r, Wr;
const ct = class ct {
  constructor({
    lang: e,
    isRTL: t
  }, i = null) {
    m(this, Yt);
    m(this, Te);
    m(this, bt);
    m(this, Q);
    var n, s;
    f(this, bt, u(n = ct, Ot, $r).call(n, e)), f(this, Q, i), f(this, Yt, t ?? u(s = ct, Ot, Wr).call(s, o(this, bt)) ? "rtl" : "ltr");
  }
  _setL10n(e) {
    f(this, Q, e);
  }
  getLanguage() {
    return o(this, bt);
  }
  getDirection() {
    return o(this, Yt);
  }
  async get(e, t = null, i) {
    return Array.isArray(e) ? (e = e.map((r) => ({
      id: r
    })), (await o(this, Q).formatMessages(e)).map((r) => r.value)) : (await o(this, Q).formatMessages([{
      id: e,
      args: t
    }]))[0]?.value || i;
  }
  async translate(e) {
    (o(this, Te) || f(this, Te, /* @__PURE__ */ new Set())).add(e);
    try {
      o(this, Q).connectRoot(e), await o(this, Q).translateRoots();
    } catch {
    }
  }
  async translateOnce(e) {
    try {
      await o(this, Q).translateElements([e]);
    } catch (t) {
      console.error("translateOnce:", t);
    }
  }
  async destroy() {
    if (o(this, Te)) {
      for (const e of o(this, Te))
        o(this, Q).disconnectRoot(e);
      o(this, Te).clear(), f(this, Te, null);
    }
    o(this, Q).pauseObserving();
  }
  pause() {
    o(this, Q).pauseObserving();
  }
  resume() {
    o(this, Q).resumeObserving();
  }
};
Yt = new WeakMap(), Te = new WeakMap(), bt = new WeakMap(), Q = new WeakMap(), Ot = new WeakSet(), $r = /* @__PURE__ */ h(function(e) {
  return e = e?.toLowerCase() || "en-us", {
    en: "en-us",
    es: "es-es",
    fy: "fy-nl",
    ga: "ga-ie",
    gu: "gu-in",
    hi: "hi-in",
    hy: "hy-am",
    nb: "nb-no",
    ne: "ne-np",
    nn: "nn-no",
    pa: "pa-in",
    pt: "pt-pt",
    sv: "sv-se",
    zh: "zh-cn"
  }[e] || e;
}, "#fixupLangCode"), Wr = /* @__PURE__ */ h(function(e) {
  const t = e.split("-", 1)[0];
  return ["ar", "he", "fa", "ps", "ur"].includes(t);
}, "#isRTL"), m(ct, Ot), h(ct, "L10n");
let On = ct;
function Sr(a, e) {
  const t = new Tn(e), i = new Ln(a), n = i.addResource(t);
  return n.length && console.error("L10n errors", n), i;
}
h(Sr, "createBundle");
var ee, zr, Gr, Kr, Xr, Dn;
const Se = class Se extends On {
  constructor(e) {
    super({
      lang: e
    });
    const t = e ? u(Se, ee, zr).bind(Se, "en-us", this.getLanguage()) : u(Se, ee, Xr).bind(Se, this.getLanguage());
    this._setL10n(new kn([], t));
  }
};
ee = new WeakSet(), zr = /* @__PURE__ */ h(async function* (e, t) {
  const {
    baseURL: i,
    paths: n
  } = await u(this, ee, Kr).call(this), s = [t];
  if (e !== t) {
    const r = t.split("-", 1)[0];
    r !== t && s.push(r), s.push(e);
  }
  for (const r of s) {
    const l = await u(this, ee, Gr).call(this, r, i, n);
    l ? yield l : r === "en-us" && (yield u(this, ee, Dn).call(this, r));
  }
}, "#generateBundles"), Gr = /* @__PURE__ */ h(async function(e, t, i) {
  const n = i[e];
  if (!n)
    return null;
  const s = new URL(n, t), r = await hr(s, "text");
  return Sr(e, r);
}, "#createBundle"), Kr = /* @__PURE__ */ h(async function() {
  try {
    const {
      href: e
    } = document.querySelector('link[type="application/l10n"]'), t = await hr(e, "json");
    return {
      baseURL: e.replace(/[^/]*$/, "") || "./",
      paths: t
    };
  } catch {
  }
  return {
    baseURL: "./",
    paths: /* @__PURE__ */ Object.create(null)
  };
}, "#getPaths"), Xr = /* @__PURE__ */ h(async function* (e) {
  yield u(this, ee, Dn).call(this, e);
}, "#generateBundlesFallback"), Dn = /* @__PURE__ */ h(async function(e) {
  return Sr(e, `pdfjs-previous-button =
    .title = Previous Page
pdfjs-previous-button-label = Previous
pdfjs-next-button =
    .title = Next Page
pdfjs-next-button-label = Next
pdfjs-page-input =
    .title = Page
pdfjs-of-pages = of { $pagesCount }
pdfjs-page-of-pages = ({ $pageNumber } of { $pagesCount })
pdfjs-zoom-out-button =
    .title = Zoom Out
pdfjs-zoom-out-button-label = Zoom Out
pdfjs-zoom-in-button =
    .title = Zoom In
pdfjs-zoom-in-button-label = Zoom In
pdfjs-zoom-select =
    .title = Zoom
pdfjs-presentation-mode-button =
    .title = Switch to Presentation Mode
pdfjs-presentation-mode-button-label = Presentation Mode
pdfjs-open-file-button =
    .title = Open File
pdfjs-open-file-button-label = Open
pdfjs-print-button =
    .title = Print
pdfjs-print-button-label = Print
pdfjs-save-button =
    .title = Save
pdfjs-save-button-label = Save
pdfjs-download-button =
    .title = Download
pdfjs-download-button-label = Download
pdfjs-bookmark-button =
    .title = Current Page (View URL from Current Page)
pdfjs-bookmark-button-label = Current Page
pdfjs-tools-button =
    .title = Tools
pdfjs-tools-button-label = Tools
pdfjs-first-page-button =
    .title = Go to First Page
pdfjs-first-page-button-label = Go to First Page
pdfjs-last-page-button =
    .title = Go to Last Page
pdfjs-last-page-button-label = Go to Last Page
pdfjs-page-rotate-cw-button =
    .title = Rotate Clockwise
pdfjs-page-rotate-cw-button-label = Rotate Clockwise
pdfjs-page-rotate-ccw-button =
    .title = Rotate Counterclockwise
pdfjs-page-rotate-ccw-button-label = Rotate Counterclockwise
pdfjs-cursor-text-select-tool-button =
    .title = Enable Text Selection Tool
pdfjs-cursor-text-select-tool-button-label = Text Selection Tool
pdfjs-cursor-hand-tool-button =
    .title = Enable Hand Tool
pdfjs-cursor-hand-tool-button-label = Hand Tool
pdfjs-scroll-page-button =
    .title = Use Page Scrolling
pdfjs-scroll-page-button-label = Page Scrolling
pdfjs-scroll-vertical-button =
    .title = Use Vertical Scrolling
pdfjs-scroll-vertical-button-label = Vertical Scrolling
pdfjs-scroll-horizontal-button =
    .title = Use Horizontal Scrolling
pdfjs-scroll-horizontal-button-label = Horizontal Scrolling
pdfjs-scroll-wrapped-button =
    .title = Use Wrapped Scrolling
pdfjs-scroll-wrapped-button-label = Wrapped Scrolling
pdfjs-spread-none-button =
    .title = Do not join page spreads
pdfjs-spread-none-button-label = No Spreads
pdfjs-spread-odd-button =
    .title = Join page spreads starting with odd-numbered pages
pdfjs-spread-odd-button-label = Odd Spreads
pdfjs-spread-even-button =
    .title = Join page spreads starting with even-numbered pages
pdfjs-spread-even-button-label = Even Spreads
pdfjs-document-properties-button =
    .title = Document Properties…
pdfjs-document-properties-button-label = Document Properties…
pdfjs-document-properties-file-name = File name:
pdfjs-document-properties-file-size = File size:
pdfjs-document-properties-size-kb = { NUMBER($kb, maximumSignificantDigits: 3) } KB ({ $b } bytes)
pdfjs-document-properties-size-mb = { NUMBER($mb, maximumSignificantDigits: 3) } MB ({ $b } bytes)
pdfjs-document-properties-title = Title:
pdfjs-document-properties-author = Author:
pdfjs-document-properties-subject = Subject:
pdfjs-document-properties-keywords = Keywords:
pdfjs-document-properties-creation-date = Creation Date:
pdfjs-document-properties-modification-date = Modification Date:
pdfjs-document-properties-date-time-string = { DATETIME($dateObj, dateStyle: "short", timeStyle: "medium") }
pdfjs-document-properties-creator = Creator:
pdfjs-document-properties-producer = PDF Producer:
pdfjs-document-properties-version = PDF Version:
pdfjs-document-properties-page-count = Page Count:
pdfjs-document-properties-page-size = Page Size:
pdfjs-document-properties-page-size-unit-inches = in
pdfjs-document-properties-page-size-unit-millimeters = mm
pdfjs-document-properties-page-size-orientation-portrait = portrait
pdfjs-document-properties-page-size-orientation-landscape = landscape
pdfjs-document-properties-page-size-name-a-three = A3
pdfjs-document-properties-page-size-name-a-four = A4
pdfjs-document-properties-page-size-name-letter = Letter
pdfjs-document-properties-page-size-name-legal = Legal
pdfjs-document-properties-page-size-dimension-string = { $width } × { $height } { $unit } ({ $orientation })
pdfjs-document-properties-page-size-dimension-name-string = { $width } × { $height } { $unit } ({ $name }, { $orientation })
pdfjs-document-properties-linearized = Fast Web View:
pdfjs-document-properties-linearized-yes = Yes
pdfjs-document-properties-linearized-no = No
pdfjs-document-properties-close-button = Close
pdfjs-print-progress-message = Preparing document for printing…
pdfjs-print-progress-percent = { $progress }%
pdfjs-print-progress-close-button = Cancel
pdfjs-printing-not-supported = Warning: Printing is not fully supported by this browser.
pdfjs-printing-not-ready = Warning: The PDF is not fully loaded for printing.
pdfjs-toggle-sidebar-button =
    .title = Toggle Sidebar
pdfjs-toggle-sidebar-notification-button =
    .title = Toggle Sidebar (document contains outline/attachments/layers)
pdfjs-toggle-sidebar-button-label = Toggle Sidebar
pdfjs-document-outline-button =
    .title = Show Document Outline (double-click to expand/collapse all items)
pdfjs-document-outline-button-label = Document Outline
pdfjs-attachments-button =
    .title = Show Attachments
pdfjs-attachments-button-label = Attachments
pdfjs-layers-button =
    .title = Show Layers (double-click to reset all layers to the default state)
pdfjs-layers-button-label = Layers
pdfjs-thumbs-button =
    .title = Show Thumbnails
pdfjs-thumbs-button-label = Thumbnails
pdfjs-current-outline-item-button =
    .title = Find Current Outline Item
pdfjs-current-outline-item-button-label = Current Outline Item
pdfjs-findbar-button =
    .title = Find in Document
pdfjs-findbar-button-label = Find
pdfjs-additional-layers = Additional Layers
pdfjs-thumb-page-title =
    .title = Page { $page }
pdfjs-thumb-page-canvas =
    .aria-label = Thumbnail of Page { $page }
pdfjs-find-input =
    .title = Find
    .placeholder = Find in document…
pdfjs-find-previous-button =
    .title = Find the previous occurrence of the phrase
pdfjs-find-previous-button-label = Previous
pdfjs-find-next-button =
    .title = Find the next occurrence of the phrase
pdfjs-find-next-button-label = Next
pdfjs-find-highlight-checkbox = Highlight All
pdfjs-find-match-case-checkbox-label = Match Case
pdfjs-find-match-diacritics-checkbox-label = Match Diacritics
pdfjs-find-entire-word-checkbox-label = Whole Words
pdfjs-find-reached-top = Reached top of document, continued from bottom
pdfjs-find-reached-bottom = Reached end of document, continued from top
pdfjs-find-match-count =
    { $total ->
        [one] { $current } of { $total } match
       *[other] { $current } of { $total } matches
    }
pdfjs-find-match-count-limit =
    { $limit ->
        [one] More than { $limit } match
       *[other] More than { $limit } matches
    }
pdfjs-find-not-found = Phrase not found
pdfjs-page-scale-width = Page Width
pdfjs-page-scale-fit = Page Fit
pdfjs-page-scale-auto = Automatic Zoom
pdfjs-page-scale-actual = Actual Size
pdfjs-page-scale-percent = { $scale }%
pdfjs-page-landmark =
    .aria-label = Page { $page }
pdfjs-loading-error = An error occurred while loading the PDF.
pdfjs-invalid-file-error = Invalid or corrupted PDF file.
pdfjs-missing-file-error = Missing PDF file.
pdfjs-unexpected-response-error = Unexpected server response.
pdfjs-rendering-error = An error occurred while rendering the page.
pdfjs-annotation-date-time-string = { DATETIME($dateObj, dateStyle: "short", timeStyle: "medium") }
pdfjs-text-annotation-type =
    .alt = [{ $type } Annotation]
pdfjs-password-label = Enter the password to open this PDF file.
pdfjs-password-invalid = Invalid password. Please try again.
pdfjs-password-ok-button = OK
pdfjs-password-cancel-button = Cancel
pdfjs-web-fonts-disabled = Web fonts are disabled: unable to use embedded PDF fonts.
pdfjs-editor-free-text-button =
    .title = Text
pdfjs-editor-free-text-button-label = Text
pdfjs-editor-ink-button =
    .title = Draw
pdfjs-editor-ink-button-label = Draw
pdfjs-editor-stamp-button =
    .title = Add or edit images
pdfjs-editor-stamp-button-label = Add or edit images
pdfjs-editor-highlight-button =
    .title = Highlight
pdfjs-editor-highlight-button-label = Highlight
pdfjs-highlight-floating-button1 =
    .title = Highlight
    .aria-label = Highlight
pdfjs-highlight-floating-button-label = Highlight
pdfjs-editor-remove-ink-button =
    .title = Remove drawing
pdfjs-editor-remove-freetext-button =
    .title = Remove text
pdfjs-editor-remove-stamp-button =
    .title = Remove image
pdfjs-editor-remove-highlight-button =
    .title = Remove highlight
pdfjs-editor-free-text-color-input = Color
pdfjs-editor-free-text-size-input = Size
pdfjs-editor-ink-color-input = Color
pdfjs-editor-ink-thickness-input = Thickness
pdfjs-editor-ink-opacity-input = Opacity
pdfjs-editor-stamp-add-image-button =
    .title = Add image
pdfjs-editor-stamp-add-image-button-label = Add image
pdfjs-editor-free-highlight-thickness-input = Thickness
pdfjs-editor-free-highlight-thickness-title =
    .title = Change thickness when highlighting items other than text
pdfjs-free-text2 =
    .aria-label = Text Editor
    .default-content = Start typing…
pdfjs-ink =
    .aria-label = Draw Editor
pdfjs-ink-canvas =
    .aria-label = User-created image
pdfjs-editor-alt-text-button =
    .aria-label = Alt text
pdfjs-editor-alt-text-button-label = Alt text
pdfjs-editor-alt-text-edit-button =
    .aria-label = Edit alt text
pdfjs-editor-alt-text-dialog-label = Choose an option
pdfjs-editor-alt-text-dialog-description = Alt text (alternative text) helps when people can’t see the image or when it doesn’t load.
pdfjs-editor-alt-text-add-description-label = Add a description
pdfjs-editor-alt-text-add-description-description = Aim for 1-2 sentences that describe the subject, setting, or actions.
pdfjs-editor-alt-text-mark-decorative-label = Mark as decorative
pdfjs-editor-alt-text-mark-decorative-description = This is used for ornamental images, like borders or watermarks.
pdfjs-editor-alt-text-cancel-button = Cancel
pdfjs-editor-alt-text-save-button = Save
pdfjs-editor-alt-text-decorative-tooltip = Marked as decorative
pdfjs-editor-alt-text-textarea =
    .placeholder = For example, “A young man sits down at a table to eat a meal”
pdfjs-editor-resizer-top-left =
    .aria-label = Top left corner — resize
pdfjs-editor-resizer-top-middle =
    .aria-label = Top middle — resize
pdfjs-editor-resizer-top-right =
    .aria-label = Top right corner — resize
pdfjs-editor-resizer-middle-right =
    .aria-label = Middle right — resize
pdfjs-editor-resizer-bottom-right =
    .aria-label = Bottom right corner — resize
pdfjs-editor-resizer-bottom-middle =
    .aria-label = Bottom middle — resize
pdfjs-editor-resizer-bottom-left =
    .aria-label = Bottom left corner — resize
pdfjs-editor-resizer-middle-left =
    .aria-label = Middle left — resize
pdfjs-editor-highlight-colorpicker-label = Highlight color
pdfjs-editor-colorpicker-button =
    .title = Change color
pdfjs-editor-colorpicker-dropdown =
    .aria-label = Color choices
pdfjs-editor-colorpicker-yellow =
    .title = Yellow
pdfjs-editor-colorpicker-green =
    .title = Green
pdfjs-editor-colorpicker-blue =
    .title = Blue
pdfjs-editor-colorpicker-pink =
    .title = Pink
pdfjs-editor-colorpicker-red =
    .title = Red
pdfjs-editor-highlight-show-all-button-label = Show all
pdfjs-editor-highlight-show-all-button =
    .title = Show all
pdfjs-editor-new-alt-text-dialog-edit-label = Edit alt text (image description)
pdfjs-editor-new-alt-text-dialog-add-label = Add alt text (image description)
pdfjs-editor-new-alt-text-textarea =
    .placeholder = Write your description here…
pdfjs-editor-new-alt-text-description = Short description for people who can’t see the image or when the image doesn’t load.
pdfjs-editor-new-alt-text-disclaimer1 = This alt text was created automatically and may be inaccurate.
pdfjs-editor-new-alt-text-disclaimer-learn-more-url = Learn more
pdfjs-editor-new-alt-text-create-automatically-button-label = Create alt text automatically
pdfjs-editor-new-alt-text-not-now-button = Not now
pdfjs-editor-new-alt-text-error-title = Couldn’t create alt text automatically
pdfjs-editor-new-alt-text-error-description = Please write your own alt text or try again later.
pdfjs-editor-new-alt-text-error-close-button = Close
pdfjs-editor-new-alt-text-ai-model-downloading-progress = Downloading alt text AI model ({ $downloadedSize } of { $totalSize } MB)
    .aria-valuetext = Downloading alt text AI model ({ $downloadedSize } of { $totalSize } MB)
pdfjs-editor-new-alt-text-added-button =
    .aria-label = Alt text added
pdfjs-editor-new-alt-text-added-button-label = Alt text added
pdfjs-editor-new-alt-text-missing-button =
    .aria-label = Missing alt text
pdfjs-editor-new-alt-text-missing-button-label = Missing alt text
pdfjs-editor-new-alt-text-to-review-button =
    .aria-label = Review alt text
pdfjs-editor-new-alt-text-to-review-button-label = Review alt text
pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer = Created automatically: { $generatedAltText }
pdfjs-image-alt-text-settings-button =
    .title = Image alt text settings
pdfjs-image-alt-text-settings-button-label = Image alt text settings
pdfjs-editor-alt-text-settings-dialog-label = Image alt text settings
pdfjs-editor-alt-text-settings-automatic-title = Automatic alt text
pdfjs-editor-alt-text-settings-create-model-button-label = Create alt text automatically
pdfjs-editor-alt-text-settings-create-model-description = Suggests descriptions to help people who can’t see the image or when the image doesn’t load.
pdfjs-editor-alt-text-settings-download-model-label = Alt text AI model ({ $totalSize } MB)
pdfjs-editor-alt-text-settings-ai-model-description = Runs locally on your device so your data stays private. Required for automatic alt text.
pdfjs-editor-alt-text-settings-delete-model-button = Delete
pdfjs-editor-alt-text-settings-download-model-button = Download
pdfjs-editor-alt-text-settings-downloading-model-button = Downloading…
pdfjs-editor-alt-text-settings-editor-title = Alt text editor
pdfjs-editor-alt-text-settings-show-dialog-button-label = Show alt text editor right away when adding an image
pdfjs-editor-alt-text-settings-show-dialog-description = Helps you make sure all your images have alt text.
pdfjs-editor-alt-text-settings-close-button = Close
pdfjs-editor-undo-bar-message-highlight = Highlight removed
pdfjs-editor-undo-bar-message-freetext = Text removed
pdfjs-editor-undo-bar-message-ink = Drawing removed
pdfjs-editor-undo-bar-message-stamp = Image removed
pdfjs-editor-undo-bar-message-multiple =
    { $count ->
        [one] { $count } annotation removed
       *[other] { $count } annotations removed
    }
pdfjs-editor-undo-bar-undo-button =
    .title = Undo
pdfjs-editor-undo-bar-undo-button-label = Undo
pdfjs-editor-undo-bar-close-button =
    .title = Close
pdfjs-editor-undo-bar-close-button-label = Close`);
}, "#createBundleFallback"), m(Se, ee), h(Se, "genericl10n_GenericL10n");
let kt = Se;
const qo = 1e3, el = 50, tl = 1e3;
function cn() {
  return document.location.hash;
}
h(cn, "getCurrentHash");
var Re, T, pe, ki, Oi, Bt, Di, Fn, Zr, Qr, Vn, Jr, Yr;
const Ms = class Ms {
  constructor({
    linkService: e,
    eventBus: t
  }) {
    m(this, T);
    m(this, Re, null);
    this.linkService = e, this.eventBus = t, this._initialized = !1, this._fingerprint = "", this.reset(), this.eventBus._on("pagesinit", () => {
      this._isPagesLoaded = !1, this.eventBus._on("pagesloaded", (i) => {
        this._isPagesLoaded = !!i.pagesCount;
      }, {
        once: !0
      });
    });
  }
  initialize({
    fingerprint: e,
    resetHistory: t = !1,
    updateUrl: i = !1
  }) {
    if (!e || typeof e != "string") {
      console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
      return;
    }
    this._initialized && this.reset();
    const n = this._fingerprint !== "" && this._fingerprint !== e;
    this._fingerprint = e, this._updateUrl = i === !0, this._initialized = !0, u(this, T, Jr).call(this);
    const s = window.history.state;
    if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = cn(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !u(this, T, Bt).call(this, s, !0) || t) {
      const {
        hash: l,
        page: d,
        rotation: c
      } = u(this, T, Fn).call(this, !0);
      if (!l || n || t) {
        u(this, T, pe).call(this, null, !0);
        return;
      }
      u(this, T, pe).call(this, {
        hash: l,
        page: d,
        rotation: c
      }, !0);
      return;
    }
    const r = s.destination;
    u(this, T, Di).call(this, r, s.uid, !0), r.rotation !== void 0 && (this._initialRotation = r.rotation), r.dest ? (this._initialBookmark = JSON.stringify(r.dest), this._destination.page = null) : r.hash ? this._initialBookmark = r.hash : r.page && (this._initialBookmark = `page=${r.page}`);
  }
  reset() {
    this._initialized && (u(this, T, Vn).call(this), this._initialized = !1, u(this, T, Yr).call(this)), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
  }
  push({
    namedDest: e = null,
    explicitDest: t,
    pageNumber: i
  }) {
    if (!this._initialized)
      return;
    if (e && typeof e != "string") {
      console.error(`PDFHistory.push: "${e}" is not a valid namedDest parameter.`);
      return;
    } else if (Array.isArray(t)) {
      if (!u(this, T, Oi).call(this, i) && (i !== null || this._destination)) {
        console.error(`PDFHistory.push: "${i}" is not a valid pageNumber parameter.`);
        return;
      }
    } else {
      console.error(`PDFHistory.push: "${t}" is not a valid explicitDest parameter.`);
      return;
    }
    const n = e || JSON.stringify(t);
    if (!n)
      return;
    let s = !1;
    if (this._destination && (il(this._destination.hash, n) || nl(this._destination.dest, t))) {
      if (this._destination.page)
        return;
      s = !0;
    }
    this._popStateInProgress && !s || (u(this, T, pe).call(this, {
      dest: t,
      hash: n,
      page: i,
      rotation: this.linkService.rotation
    }, s), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
      this._popStateInProgress = !1;
    })));
  }
  pushPage(e) {
    if (this._initialized) {
      if (!u(this, T, Oi).call(this, e)) {
        console.error(`PDFHistory.pushPage: "${e}" is not a valid page number.`);
        return;
      }
      this._destination?.page !== e && (this._popStateInProgress || (u(this, T, pe).call(this, {
        dest: null,
        hash: `page=${e}`,
        page: e,
        rotation: this.linkService.rotation
      }), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
        this._popStateInProgress = !1;
      }))));
    }
  }
  pushCurrentPosition() {
    !this._initialized || this._popStateInProgress || u(this, T, ki).call(this);
  }
  back() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    u(this, T, Bt).call(this, e) && e.uid > 0 && window.history.back();
  }
  forward() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    u(this, T, Bt).call(this, e) && e.uid < this._maxUid && window.history.forward();
  }
  get popStateInProgress() {
    return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
  }
  get initialBookmark() {
    return this._initialized ? this._initialBookmark : null;
  }
  get initialRotation() {
    return this._initialized ? this._initialRotation : null;
  }
};
Re = new WeakMap(), T = new WeakSet(), pe = /* @__PURE__ */ h(function(e, t = !1) {
  const i = t || !this._destination, n = {
    fingerprint: this._fingerprint,
    uid: i ? this._uid : this._uid + 1,
    destination: e
  };
  u(this, T, Di).call(this, e, n.uid);
  let s;
  if (this._updateUrl && e?.hash) {
    const r = document.location.href.split("#", 1)[0];
    r.startsWith("file://") || (s = `${r}#${e.hash}`);
  }
  i ? window.history.replaceState(n, "", s) : window.history.pushState(n, "", s);
}, "#pushOrReplaceState"), ki = /* @__PURE__ */ h(function(e = !1) {
  if (!this._position)
    return;
  let t = this._position;
  if (e && (t = Object.assign(/* @__PURE__ */ Object.create(null), this._position), t.temporary = !0), !this._destination) {
    u(this, T, pe).call(this, t);
    return;
  }
  if (this._destination.temporary) {
    u(this, T, pe).call(this, t, !0);
    return;
  }
  if (this._destination.hash === t.hash || !this._destination.page && this._numPositionUpdates <= el)
    return;
  let i = !1;
  if (this._destination.page >= t.first && this._destination.page <= t.page) {
    if (this._destination.dest !== void 0 || !this._destination.first)
      return;
    i = !0;
  }
  u(this, T, pe).call(this, t, i);
}, "#tryPushCurrentPosition"), Oi = /* @__PURE__ */ h(function(e) {
  return Number.isInteger(e) && e > 0 && e <= this.linkService.pagesCount;
}, "#isValidPage"), Bt = /* @__PURE__ */ h(function(e, t = !1) {
  if (!e)
    return !1;
  if (e.fingerprint !== this._fingerprint)
    if (t) {
      if (typeof e.fingerprint != "string" || e.fingerprint.length !== this._fingerprint.length)
        return !1;
      const [i] = performance.getEntriesByType("navigation");
      if (i?.type !== "reload")
        return !1;
    } else
      return !1;
  return !(!Number.isInteger(e.uid) || e.uid < 0 || e.destination === null || typeof e.destination != "object");
}, "#isValidState"), Di = /* @__PURE__ */ h(function(e, t, i = !1) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), i && e?.temporary && delete e.temporary, this._destination = e, this._uid = t, this._maxUid = Math.max(this._maxUid, t), this._numPositionUpdates = 0;
}, "#updateInternalState"), Fn = /* @__PURE__ */ h(function(e = !1) {
  const t = unescape(cn()).substring(1), i = tn(t), n = i.get("nameddest") || "";
  let s = i.get("page") | 0;
  return (!u(this, T, Oi).call(this, s) || e && n.length > 0) && (s = null), {
    hash: t,
    page: s,
    rotation: this.linkService.rotation
  };
}, "#parseCurrentHash"), Zr = /* @__PURE__ */ h(function({
  location: e
}) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
    hash: e.pdfOpenParams.substring(1),
    page: this.linkService.page,
    first: e.pageNumber,
    rotation: e.rotation
  }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
    this._popStateInProgress || u(this, T, ki).call(this, !0), this._updateViewareaTimeout = null;
  }, tl));
}, "#updateViewarea"), Qr = /* @__PURE__ */ h(function({
  state: e
}) {
  const t = cn(), i = this._currentHash !== t;
  if (this._currentHash = t, !e) {
    this._uid++;
    const {
      hash: s,
      page: r,
      rotation: l
    } = u(this, T, Fn).call(this);
    u(this, T, pe).call(this, {
      hash: s,
      page: r,
      rotation: l
    }, !0);
    return;
  }
  if (!u(this, T, Bt).call(this, e))
    return;
  this._popStateInProgress = !0, i && (this._blockHashChange++, fo({
    target: window,
    name: "hashchange",
    delay: qo
  }).then(() => {
    this._blockHashChange--;
  }));
  const n = e.destination;
  u(this, T, Di).call(this, n, e.uid, !0), Cr(n.rotation) && (this.linkService.rotation = n.rotation), n.dest ? this.linkService.goToDestination(n.dest) : n.hash ? this.linkService.setHash(n.hash) : n.page && (this.linkService.page = n.page), Promise.resolve().then(() => {
    this._popStateInProgress = !1;
  });
}, "#popState"), Vn = /* @__PURE__ */ h(function() {
  (!this._destination || this._destination.temporary) && u(this, T, ki).call(this);
}, "#pageHide"), Jr = /* @__PURE__ */ h(function() {
  if (o(this, Re))
    return;
  f(this, Re, new AbortController());
  const {
    signal: e
  } = o(this, Re);
  this.eventBus._on("updateviewarea", u(this, T, Zr).bind(this), {
    signal: e
  }), window.addEventListener("popstate", u(this, T, Qr).bind(this), {
    signal: e
  }), window.addEventListener("pagehide", u(this, T, Vn).bind(this), {
    signal: e
  });
}, "#bindEvents"), Yr = /* @__PURE__ */ h(function() {
  o(this, Re)?.abort(), f(this, Re, null);
}, "#unbindEvents"), h(Ms, "PDFHistory");
let jn = Ms;
function il(a, e) {
  return typeof a != "string" || typeof e != "string" ? !1 : a === e || tn(a).get("nameddest") === e;
}
h(il, "isDestHashesEqual");
function nl(a, e) {
  function t(i, n) {
    if (typeof i != typeof n || Array.isArray(i) || Array.isArray(n))
      return !1;
    if (i !== null && typeof i == "object" && n !== null) {
      if (Object.keys(i).length !== Object.keys(n).length)
        return !1;
      for (const s in i)
        if (!t(i[s], n[s]))
          return !1;
      return !0;
    }
    return i === n || Number.isNaN(i) && Number.isNaN(n);
  }
  if (h(t, "isEntryEqual"), !(Array.isArray(a) && Array.isArray(e)) || a.length !== e.length)
    return !1;
  for (let i = 0, n = a.length; i < n; i++)
    if (!t(a[i], e[i]))
      return !1;
  return !0;
}
h(nl, "isDestArraysEqual");
var qt, ei, ti, ii, ni, Et;
const ks = class ks {
  constructor(e) {
    m(this, qt, null);
    m(this, ei, null);
    m(this, ti, null);
    m(this, ii, null);
    m(this, ni, null);
    m(this, Et);
    this.pdfPage = e.pdfPage, this.accessibilityManager = e.accessibilityManager, this.l10n = e.l10n, this.l10n ||= new kt(), this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, f(this, Et, e.uiManager), f(this, qt, e.annotationLayer || null), f(this, ni, e.textLayer || null), f(this, ei, e.drawLayer || null), f(this, ti, e.onAppend || null), f(this, ii, e.structTreeLayer || null);
  }
  async render(e, t = "display") {
    var r;
    if (t !== "display" || this._cancelled)
      return;
    const i = e.clone({
      dontFlip: !0
    });
    if (this.div) {
      this.annotationEditorLayer.update({
        viewport: i
      }), this.show();
      return;
    }
    const n = this.div = document.createElement("div");
    n.className = "annotationEditorLayer", n.hidden = !0, n.dir = o(this, Et).direction, (r = o(this, ti)) == null || r.call(this, n), this.annotationEditorLayer = new to({
      uiManager: o(this, Et),
      div: n,
      structTreeLayer: o(this, ii),
      accessibilityManager: this.accessibilityManager,
      pageIndex: this.pdfPage.pageNumber - 1,
      l10n: this.l10n,
      viewport: i,
      annotationLayer: o(this, qt),
      textLayer: o(this, ni),
      drawLayer: o(this, ei)
    });
    const s = {
      viewport: i,
      div: n,
      annotations: null,
      intent: t
    };
    this.annotationEditorLayer.render(s), this.show();
  }
  cancel() {
    this._cancelled = !0, this.div && this.annotationEditorLayer.destroy();
  }
  hide() {
    this.div && (this.annotationEditorLayer.pause(!0), this.div.hidden = !0);
  }
  show() {
    !this.div || this.annotationEditorLayer.isInvisible || (this.div.hidden = !1, this.annotationEditorLayer.pause(!1));
  }
};
qt = new WeakMap(), ei = new WeakMap(), ti = new WeakMap(), ii = new WeakMap(), ni = new WeakMap(), Et = new WeakMap(), h(ks, "AnnotationEditorLayerBuilder");
let Bn = ks;
{
  var Hn = /* @__PURE__ */ new Map();
  const a = navigator.userAgent || "", e = navigator.platform || "", t = navigator.maxTouchPoints || 1, i = /Android/.test(a), n = /\b(iPad|iPhone|iPod)(?=;)/.test(a) || e === "MacIntel" && t > 1;
  (function() {
    (n || i) && Hn.set("maxCanvasPixels", 5242880);
  })(), (function() {
    i && Hn.set("useSystemFonts", !1);
  })();
}
const g = {
  BROWSER: 1,
  VIEWER: 2,
  API: 4,
  WORKER: 8,
  EVENT_DISPATCH: 16,
  PREFERENCE: 128
}, Un = {
  BOOLEAN: 1,
  NUMBER: 2,
  OBJECT: 4,
  STRING: 8,
  UNDEFINED: 16
}, ce = {
  allowedGlobalEvents: {
    value: null,
    kind: g.BROWSER
  },
  canvasMaxAreaInBytes: {
    value: -1,
    kind: g.BROWSER + g.API
  },
  isInAutomation: {
    value: !1,
    kind: g.BROWSER
  },
  localeProperties: {
    value: {
      lang: navigator.language || "en-US"
    },
    kind: g.BROWSER
  },
  nimbusDataStr: {
    value: "",
    kind: g.BROWSER
  },
  supportsCaretBrowsingMode: {
    value: !1,
    kind: g.BROWSER
  },
  supportsDocumentFonts: {
    value: !0,
    kind: g.BROWSER
  },
  supportsIntegratedFind: {
    value: !1,
    kind: g.BROWSER
  },
  supportsMouseWheelZoomCtrlKey: {
    value: !0,
    kind: g.BROWSER
  },
  supportsMouseWheelZoomMetaKey: {
    value: !0,
    kind: g.BROWSER
  },
  supportsPinchToZoom: {
    value: !0,
    kind: g.BROWSER
  },
  toolbarDensity: {
    value: 0,
    kind: g.BROWSER + g.EVENT_DISPATCH
  },
  altTextLearnMoreUrl: {
    value: "",
    kind: g.VIEWER + g.PREFERENCE
  },
  annotationEditorMode: {
    value: 0,
    kind: g.VIEWER + g.PREFERENCE
  },
  annotationMode: {
    value: 2,
    kind: g.VIEWER + g.PREFERENCE
  },
  cursorToolOnLoad: {
    value: 0,
    kind: g.VIEWER + g.PREFERENCE
  },
  debuggerSrc: {
    value: "./debugger.mjs",
    kind: g.VIEWER
  },
  defaultZoomDelay: {
    value: 400,
    kind: g.VIEWER + g.PREFERENCE
  },
  defaultZoomValue: {
    value: "",
    kind: g.VIEWER + g.PREFERENCE
  },
  disableHistory: {
    value: !1,
    kind: g.VIEWER
  },
  disablePageLabels: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  enableAltText: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  enableAltTextModelDownload: {
    value: !0,
    kind: g.VIEWER + g.PREFERENCE + g.EVENT_DISPATCH
  },
  enableGuessAltText: {
    value: !0,
    kind: g.VIEWER + g.PREFERENCE + g.EVENT_DISPATCH
  },
  enableHighlightFloatingButton: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  enableNewAltTextWhenAddingImage: {
    value: !0,
    kind: g.VIEWER + g.PREFERENCE
  },
  enablePermissions: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: !0,
    kind: g.VIEWER + g.PREFERENCE
  },
  enableScripting: {
    value: !0,
    kind: g.VIEWER + g.PREFERENCE
  },
  enableUpdatedAddImage: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: g.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: g.VIEWER + g.PREFERENCE
  },
  highlightEditorColors: {
    value: "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F",
    kind: g.VIEWER + g.PREFERENCE
  },
  historyUpdateUrl: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: g.VIEWER
  },
  maxCanvasPixels: {
    value: 2 ** 25,
    kind: g.VIEWER
  },
  forcePageColors: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  pageColorsBackground: {
    value: "Canvas",
    kind: g.VIEWER + g.PREFERENCE
  },
  pageColorsForeground: {
    value: "CanvasText",
    kind: g.VIEWER + g.PREFERENCE
  },
  pdfBugEnabled: {
    value: !1,
    kind: g.VIEWER + g.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: g.VIEWER
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: g.VIEWER + g.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: g.VIEWER + g.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: g.VIEWER + g.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: g.VIEWER + g.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: g.VIEWER + g.PREFERENCE
  },
  cMapPacked: {
    value: !0,
    kind: g.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: g.API
  },
  disableAutoFetch: {
    value: !1,
    kind: g.API + g.PREFERENCE
  },
  disableFontFace: {
    value: !1,
    kind: g.API + g.PREFERENCE
  },
  disableRange: {
    value: !1,
    kind: g.API + g.PREFERENCE
  },
  disableStream: {
    value: !1,
    kind: g.API + g.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: g.API
  },
  enableHWA: {
    value: !0,
    kind: g.API + g.VIEWER + g.PREFERENCE
  },
  enableXfa: {
    value: !0,
    kind: g.API + g.PREFERENCE
  },
  fontExtraProperties: {
    value: !1,
    kind: g.API
  },
  isEvalSupported: {
    value: !0,
    kind: g.API
  },
  isOffscreenCanvasSupported: {
    value: !0,
    kind: g.API
  },
  maxImageSize: {
    value: -1,
    kind: g.API
  },
  pdfBug: {
    value: !1,
    kind: g.API
  },
  standardFontDataUrl: {
    value: "../web/standard_fonts/",
    kind: g.API
  },
  useSystemFonts: {
    value: void 0,
    kind: g.API,
    type: Un.BOOLEAN + Un.UNDEFINED
  },
  verbosity: {
    value: 1,
    kind: g.API
  },
  workerPort: {
    value: null,
    kind: g.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.mjs",
    kind: g.WORKER
  }
};
ce.defaultUrl = {
  value: "compressed.tracemonkey-pldi-09.pdf",
  kind: g.VIEWER
}, ce.sandboxBundleSrc = {
  value: "../build/pdf.sandbox.mjs",
  kind: g.VIEWER
}, ce.viewerCssTheme = {
  value: 0,
  kind: g.VIEWER + g.PREFERENCE
}, ce.enableFakeMLManager = {
  value: !0,
  kind: g.VIEWER
};
ce.disablePreferences = {
  value: !1,
  kind: g.VIEWER
};
var Ce;
const se = class se {
  static get(e) {
    return o(this, Ce).get(e);
  }
  static getAll(e = null, t = !1) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const n in ce) {
      const s = ce[n];
      e && !(e & s.kind) || (i[n] = t ? s.value : o(this, Ce).get(n));
    }
    return i;
  }
  static set(e, t) {
    this.setAll({
      [e]: t
    });
  }
  static setAll(e, t = !1) {
    this._hasInvokedSet ||= !0;
    let i;
    for (const n in e) {
      const s = ce[n], r = e[n];
      if (!s || !(typeof r == typeof s.value || Un[(typeof r).toUpperCase()] & s.type))
        continue;
      const {
        kind: l
      } = s;
      t && !(l & g.BROWSER || l & g.PREFERENCE) || (this.eventBus && l & g.EVENT_DISPATCH && (i ||= /* @__PURE__ */ new Map()).set(n, r), o(this, Ce).set(n, r));
    }
    if (i)
      for (const [n, s] of i)
        this.eventBus.dispatch(n.toLowerCase(), {
          source: this,
          value: s
        });
  }
};
Ce = new WeakMap(), h(se, "AppOptions"), Zs(se, "eventBus"), m(se, Ce, /* @__PURE__ */ new Map()), (() => {
  for (const e in ce)
    o(se, Ce).set(e, ce[e].value);
  for (const [e, t] of Hn)
    o(se, Ce).set(e, t);
  se._hasInvokedSet = !1, se._checkDisablePreferences = () => se.get("disablePreferences") ? !0 : (se._hasInvokedSet && console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.'), !1);
})();
let $n = se;
var oe;
const Os = class Os {
  constructor(e) {
    m(this, oe, null);
    this.pageIndex = e.pageIndex;
  }
  async render(e = "display") {
    e !== "display" || o(this, oe) || this._cancelled || f(this, oe, new ro({
      pageIndex: this.pageIndex
    }));
  }
  cancel() {
    this._cancelled = !0, o(this, oe) && (o(this, oe).destroy(), f(this, oe, null));
  }
  setParent(e) {
    o(this, oe)?.setParent(e);
  }
  getDrawLayer() {
    return o(this, oe);
  }
};
oe = new WeakMap(), h(Os, "DrawLayerBuilder");
let Wn = Os;
const Ar = {
  Document: null,
  DocumentFragment: null,
  Part: "group",
  Sect: "group",
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  P: null,
  H: "heading",
  Title: null,
  FENote: "note",
  Sub: "group",
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  L: "list",
  LI: "listitem",
  LBody: null,
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  Caption: null,
  Figure: "figure",
  Formula: null,
  Artifact: null
}, sl = /^H(\d+)$/;
var wt, re, _t, vt, yt, Ne, fe, zn, qr, Gn;
const Ds = class Ds {
  constructor(e, t) {
    m(this, fe);
    m(this, wt);
    m(this, re, null);
    m(this, _t);
    m(this, vt, /* @__PURE__ */ new Map());
    m(this, yt);
    m(this, Ne, null);
    f(this, wt, e.getStructTree()), f(this, yt, t);
  }
  async render() {
    if (o(this, _t))
      return o(this, _t);
    const {
      promise: e,
      resolve: t,
      reject: i
    } = Promise.withResolvers();
    f(this, _t, e);
    try {
      f(this, re, u(this, fe, Gn).call(this, await o(this, wt)));
    } catch (n) {
      i(n);
    }
    return f(this, wt, null), o(this, re)?.classList.add("structTree"), t(o(this, re)), e;
  }
  async getAriaAttributes(e) {
    try {
      return await this.render(), o(this, vt).get(e);
    } catch {
    }
    return null;
  }
  hide() {
    o(this, re) && !o(this, re).hidden && (o(this, re).hidden = !0);
  }
  show() {
    o(this, re)?.hidden && (o(this, re).hidden = !1);
  }
  addElementsToTextLayer() {
    if (o(this, Ne)) {
      for (const [e, t] of o(this, Ne))
        document.getElementById(e)?.append(t);
      o(this, Ne).clear(), f(this, Ne, null);
    }
  }
};
wt = new WeakMap(), re = new WeakMap(), _t = new WeakMap(), vt = new WeakMap(), yt = new WeakMap(), Ne = new WeakMap(), fe = new WeakSet(), zn = /* @__PURE__ */ h(function(e, t) {
  const {
    alt: i,
    id: n,
    lang: s
  } = e;
  if (i !== void 0) {
    let r = !1;
    const l = zt(i);
    for (const d of e.children)
      if (d.type === "annotation") {
        let c = o(this, vt).get(d.id);
        c || (c = /* @__PURE__ */ new Map(), o(this, vt).set(d.id, c)), c.set("aria-label", l), r = !0;
      }
    r || t.setAttribute("aria-label", l);
  }
  n !== void 0 && t.setAttribute("aria-owns", n), s !== void 0 && t.setAttribute("lang", zt(s, !0));
}, "#setAttributes"), qr = /* @__PURE__ */ h(function(e, t) {
  const {
    alt: i,
    bbox: n,
    children: s
  } = e, r = s?.[0];
  if (!o(this, yt) || !i || !n || r?.type !== "content")
    return !1;
  const {
    id: l
  } = r;
  if (!l)
    return !1;
  t.setAttribute("aria-owns", l);
  const d = document.createElement("span");
  (o(this, Ne) || f(this, Ne, /* @__PURE__ */ new Map())).set(l, d), d.setAttribute("role", "img"), d.setAttribute("aria-label", zt(i));
  const {
    pageHeight: c,
    pageX: p,
    pageY: E
  } = o(this, yt), w = "calc(var(--scale-factor)*", {
    style: A
  } = d;
  return A.width = `${w}${n[2] - n[0]}px)`, A.height = `${w}${n[3] - n[1]}px)`, A.left = `${w}${n[0] - p}px)`, A.top = `${w}${c - n[3] + E}px)`, !0;
}, "#addImageInTextLayer"), Gn = /* @__PURE__ */ h(function(e) {
  if (!e)
    return null;
  const t = document.createElement("span");
  if ("role" in e) {
    const {
      role: i
    } = e, n = i.match(sl);
    if (n ? (t.setAttribute("role", "heading"), t.setAttribute("aria-level", n[1])) : Ar[i] && t.setAttribute("role", Ar[i]), i === "Figure" && u(this, fe, qr).call(this, e, t))
      return t;
  }
  if (u(this, fe, zn).call(this, e, t), e.children)
    if (e.children.length === 1 && "id" in e.children[0])
      u(this, fe, zn).call(this, e.children[0], t);
    else
      for (const i of e.children)
        t.append(u(this, fe, Gn).call(this, i));
  return t;
}, "#walk"), h(Ds, "StructTreeLayerBuilder");
let Xi = Ds;
var be, te, Ee, Me, Pt, ji, si, Xn;
const Ge = class Ge {
  constructor() {
    m(this, si);
    m(this, be, !1);
    m(this, te, null);
    m(this, Ee, /* @__PURE__ */ new Map());
    m(this, Me, /* @__PURE__ */ new Map());
  }
  setTextMapping(e) {
    f(this, te, e);
  }
  enable() {
    if (o(this, be))
      throw new Error("TextAccessibilityManager is already enabled.");
    if (!o(this, te))
      throw new Error("Text divs and strings have not been set.");
    if (f(this, be, !0), f(this, te, o(this, te).slice()), o(this, te).sort(u(Ge, Pt, ji)), o(this, Ee).size > 0) {
      const e = o(this, te);
      for (const [t, i] of o(this, Ee)) {
        if (!document.getElementById(t)) {
          o(this, Ee).delete(t);
          continue;
        }
        u(this, si, Xn).call(this, t, e[i]);
      }
    }
    for (const [e, t] of o(this, Me))
      this.addPointerInTextLayer(e, t);
    o(this, Me).clear();
  }
  disable() {
    o(this, be) && (o(this, Me).clear(), f(this, te, null), f(this, be, !1));
  }
  removePointerInTextLayer(e) {
    if (!o(this, be)) {
      o(this, Me).delete(e);
      return;
    }
    const t = o(this, te);
    if (!t || t.length === 0)
      return;
    const {
      id: i
    } = e, n = o(this, Ee).get(i);
    if (n === void 0)
      return;
    const s = t[n];
    o(this, Ee).delete(i);
    let r = s.getAttribute("aria-owns");
    r?.includes(i) && (r = r.split(" ").filter((l) => l !== i).join(" "), r ? s.setAttribute("aria-owns", r) : (s.removeAttribute("aria-owns"), s.setAttribute("role", "presentation")));
  }
  addPointerInTextLayer(e, t) {
    const {
      id: i
    } = e;
    if (!i)
      return null;
    if (!o(this, be))
      return o(this, Me).set(e, t), null;
    t && this.removePointerInTextLayer(e);
    const n = o(this, te);
    if (!n || n.length === 0)
      return null;
    const s = Kt(n, (c) => {
      var p;
      return u(p = Ge, Pt, ji).call(p, e, c) < 0;
    }), r = Math.max(0, s - 1), l = n[r];
    u(this, si, Xn).call(this, i, l), o(this, Ee).set(i, r);
    const d = l.parentNode;
    return d?.classList.contains("markedContent") ? d.id : null;
  }
  moveElementInDOM(e, t, i, n) {
    const s = this.addPointerInTextLayer(i, n);
    if (!e.hasChildNodes())
      return e.append(t), s;
    const r = Array.from(e.childNodes).filter((c) => c !== t);
    if (r.length === 0)
      return s;
    const l = i || t, d = Kt(r, (c) => {
      var p;
      return u(p = Ge, Pt, ji).call(p, l, c) < 0;
    });
    return d === 0 ? r[0].before(t) : r[d - 1].after(t), s;
  }
};
be = new WeakMap(), te = new WeakMap(), Ee = new WeakMap(), Me = new WeakMap(), Pt = new WeakSet(), ji = /* @__PURE__ */ h(function(e, t) {
  const i = e.getBoundingClientRect(), n = t.getBoundingClientRect();
  if (i.width === 0 && i.height === 0)
    return 1;
  if (n.width === 0 && n.height === 0)
    return -1;
  const s = i.y, r = i.y + i.height, l = i.y + i.height / 2, d = n.y, c = n.y + n.height, p = n.y + n.height / 2;
  if (l <= d && p >= r)
    return -1;
  if (p <= s && l >= c)
    return 1;
  const E = i.x + i.width / 2, w = n.x + n.width / 2;
  return E - w;
}, "#compareElementPositions"), si = new WeakSet(), Xn = /* @__PURE__ */ h(function(e, t) {
  const i = t.getAttribute("aria-owns");
  i?.includes(e) || t.setAttribute("aria-owns", i ? `${i} ${e}` : e), t.removeAttribute("role");
}, "#addIdToAriaOwns"), m(Ge, Pt), h(Ge, "TextAccessibilityManager");
let Kn = Ge;
var ke;
const js = class js {
  constructor({
    findController: e,
    eventBus: t,
    pageIndex: i
  }) {
    m(this, ke, null);
    this.findController = e, this.matches = [], this.eventBus = t, this.pageIdx = i, this.textDivs = null, this.textContentItemsStr = null, this.enabled = !1;
  }
  setTextMapping(e, t) {
    this.textDivs = e, this.textContentItemsStr = t;
  }
  enable() {
    if (!this.textDivs || !this.textContentItemsStr)
      throw new Error("Text divs and strings have not been set.");
    if (this.enabled)
      throw new Error("TextHighlighter is already enabled.");
    this.enabled = !0, o(this, ke) || (f(this, ke, new AbortController()), this.eventBus._on("updatetextlayermatches", (e) => {
      (e.pageIndex === this.pageIdx || e.pageIndex === -1) && this._updateMatches();
    }, {
      signal: o(this, ke).signal
    })), this._updateMatches();
  }
  disable() {
    this.enabled && (this.enabled = !1, o(this, ke)?.abort(), f(this, ke, null), this._updateMatches(!0));
  }
  _convertMatches(e, t) {
    if (!e)
      return [];
    const {
      textContentItemsStr: i
    } = this;
    let n = 0, s = 0;
    const r = i.length - 1, l = [];
    for (let d = 0, c = e.length; d < c; d++) {
      let p = e[d];
      for (; n !== r && p >= s + i[n].length; )
        s += i[n].length, n++;
      n === i.length && console.error("Could not find a matching mapping");
      const E = {
        begin: {
          divIdx: n,
          offset: p - s
        }
      };
      for (p += t[d]; n !== r && p > s + i[n].length; )
        s += i[n].length, n++;
      E.end = {
        divIdx: n,
        offset: p - s
      }, l.push(E);
    }
    return l;
  }
  _renderMatches(e) {
    if (e.length === 0)
      return;
    const {
      findController: t,
      pageIdx: i
    } = this, {
      textContentItemsStr: n,
      textDivs: s
    } = this, r = i === t.selected.pageIdx, l = t.selected.matchIdx, d = t.state.highlightAll;
    let c = null;
    const p = {
      offset: void 0
    };
    function E(N, M) {
      const x = N.divIdx;
      return s[x].textContent = "", w(x, 0, N.offset, M);
    }
    h(E, "beginText");
    function w(N, M, x, P) {
      let k = s[N];
      if (k.nodeType === Node.TEXT_NODE) {
        const j = document.createElement("span");
        k.before(j), j.append(k), s[N] = j, k = j;
      }
      const F = n[N].substring(M, x), B = document.createTextNode(F);
      if (P) {
        const j = document.createElement("span");
        if (j.className = `${P} appended`, j.append(B), k.append(j), P.includes("selected")) {
          const {
            left: b
          } = j.getClientRects()[0], _ = k.getBoundingClientRect().left;
          return b - _;
        }
        return 0;
      }
      return k.append(B), 0;
    }
    h(w, "appendTextToDiv");
    let A = l, C = A + 1;
    if (d)
      A = 0, C = e.length;
    else if (!r)
      return;
    let I = -1, L = -1;
    for (let N = A; N < C; N++) {
      const M = e[N], x = M.begin;
      if (x.divIdx === I && x.offset === L)
        continue;
      I = x.divIdx, L = x.offset;
      const P = M.end, k = r && N === l, F = k ? " selected" : "";
      let B = 0;
      if (!c || x.divIdx !== c.divIdx ? (c !== null && w(c.divIdx, c.offset, p.offset), E(x)) : w(c.divIdx, c.offset, x.offset), x.divIdx === P.divIdx)
        B = w(x.divIdx, x.offset, P.offset, "highlight" + F);
      else {
        B = w(x.divIdx, x.offset, p.offset, "highlight begin" + F);
        for (let j = x.divIdx + 1, b = P.divIdx; j < b; j++)
          s[j].className = "highlight middle" + F;
        E(P, "highlight end" + F);
      }
      c = P, k && t.scrollMatchIntoView({
        element: s[x.divIdx],
        selectedLeft: B,
        pageIndex: i,
        matchIndex: l
      });
    }
    c && w(c.divIdx, c.offset, p.offset);
  }
  _updateMatches(e = !1) {
    if (!this.enabled && !e)
      return;
    const {
      findController: t,
      matches: i,
      pageIdx: n
    } = this, {
      textContentItemsStr: s,
      textDivs: r
    } = this;
    let l = -1;
    for (const p of i) {
      const E = Math.max(l, p.begin.divIdx);
      for (let w = E, A = p.end.divIdx; w <= A; w++) {
        const C = r[w];
        C.textContent = s[w], C.className = "";
      }
      l = p.end.divIdx + 1;
    }
    if (!t?.highlightMatches || e)
      return;
    const d = t.pageMatches[n] || null, c = t.pageMatchesLength[n] || null;
    this.matches = this._convertMatches(d, c), this._renderMatches(this.matches);
  }
};
ke = new WeakMap(), h(js, "TextHighlighter");
let Zn = js;
var ri, ai, Qe, le, J, Oe, en, ea, Dt, ta, ia;
const ge = class ge {
  constructor({
    pdfPage: e,
    highlighter: t = null,
    accessibilityManager: i = null,
    enablePermissions: n = !1,
    onAppend: s = null
  }) {
    m(this, en);
    m(this, ri, !1);
    m(this, ai, null);
    m(this, Qe, !1);
    m(this, le, null);
    this.pdfPage = e, this.highlighter = t, this.accessibilityManager = i, f(this, ri, n === !0), f(this, ai, s), this.div = document.createElement("div"), this.div.tabIndex = 0, this.div.className = "textLayer";
  }
  async render(e, t = null) {
    var r;
    if (o(this, Qe) && o(this, le)) {
      o(this, le).update({
        viewport: e,
        onBefore: this.hide.bind(this)
      }), this.show();
      return;
    }
    this.cancel(), f(this, le, new co({
      textContentSource: this.pdfPage.streamTextContent(t || {
        includeMarkedContent: !0,
        disableNormalization: !0
      }),
      container: this.div,
      viewport: e
    }));
    const {
      textDivs: i,
      textContentItemsStr: n
    } = o(this, le);
    this.highlighter?.setTextMapping(i, n), this.accessibilityManager?.setTextMapping(i), await o(this, le).render(), f(this, Qe, !0);
    const s = document.createElement("div");
    s.className = "endOfContent", this.div.append(s), u(this, en, ea).call(this, s), (r = o(this, ai)) == null || r.call(this, this.div), this.highlighter?.enable(), this.accessibilityManager?.enable();
  }
  hide() {
    !this.div.hidden && o(this, Qe) && (this.highlighter?.disable(), this.div.hidden = !0);
  }
  show() {
    this.div.hidden && o(this, Qe) && (this.div.hidden = !1, this.highlighter?.enable());
  }
  cancel() {
    var e;
    o(this, le)?.cancel(), f(this, le, null), this.highlighter?.disable(), this.accessibilityManager?.disable(), u(e = ge, Dt, ta).call(e, this.div);
  }
};
ri = new WeakMap(), ai = new WeakMap(), Qe = new WeakMap(), le = new WeakMap(), J = new WeakMap(), Oe = new WeakMap(), en = new WeakSet(), ea = /* @__PURE__ */ h(function(e) {
  var i;
  const {
    div: t
  } = this;
  t.addEventListener("mousedown", () => {
    t.classList.add("selecting");
  }), t.addEventListener("copy", (n) => {
    if (!o(this, ri)) {
      const s = document.getSelection();
      n.clipboardData.setData("text/plain", zt(lo(s.toString())));
    }
    Pn(n);
  }), o(ge, J).set(t, e), u(i = ge, Dt, ia).call(i);
}, "#bindMouse"), Dt = new WeakSet(), ta = /* @__PURE__ */ h(function(e) {
  o(this, J).delete(e), o(this, J).size === 0 && (o(this, Oe)?.abort(), f(this, Oe, null));
}, "#removeGlobalSelectionListener"), ia = /* @__PURE__ */ h(function() {
  if (o(this, Oe))
    return;
  f(this, Oe, new AbortController());
  const {
    signal: e
  } = o(this, Oe), t = /* @__PURE__ */ h((r, l) => {
    l.append(r), r.style.width = "", r.style.height = "", l.classList.remove("selecting");
  }, "reset");
  let i = !1;
  document.addEventListener("pointerdown", () => {
    i = !0;
  }, {
    signal: e
  }), document.addEventListener("pointerup", () => {
    i = !1, o(this, J).forEach(t);
  }, {
    signal: e
  }), window.addEventListener("blur", () => {
    i = !1, o(this, J).forEach(t);
  }, {
    signal: e
  }), document.addEventListener("keyup", () => {
    i || o(this, J).forEach(t);
  }, {
    signal: e
  });
  var n, s;
  document.addEventListener("selectionchange", () => {
    const r = document.getSelection();
    if (r.rangeCount === 0) {
      o(this, J).forEach(t);
      return;
    }
    const l = /* @__PURE__ */ new Set();
    for (let A = 0; A < r.rangeCount; A++) {
      const C = r.getRangeAt(A);
      for (const I of o(this, J).keys())
        !l.has(I) && C.intersectsNode(I) && l.add(I);
    }
    for (const [A, C] of o(this, J))
      l.has(A) ? A.classList.add("selecting") : t(C, A);
    if (n ??= getComputedStyle(o(this, J).values().next().value).getPropertyValue("-moz-user-select") === "none", n)
      return;
    const d = r.getRangeAt(0), c = s && (d.compareBoundaryPoints(Range.END_TO_END, s) === 0 || d.compareBoundaryPoints(Range.START_TO_END, s) === 0);
    let p = c ? d.startContainer : d.endContainer;
    p.nodeType === Node.TEXT_NODE && (p = p.parentNode);
    const E = p.parentElement?.closest(".textLayer"), w = o(this, J).get(E);
    w && (w.style.width = E.style.width, w.style.height = E.style.height, p.parentElement.insertBefore(w, c ? p : p.nextSibling)), s = d.cloneRange();
  }, {
    signal: e
  });
}, "#enableGlobalSelectionListener"), m(ge, Dt), h(ge, "TextLayerBuilder"), m(ge, J, /* @__PURE__ */ new Map()), m(ge, Oe, null);
let Zi = ge;
const Fs = class Fs {
  constructor({
    pdfPage: e,
    annotationStorage: t = null,
    linkService: i,
    xfaHtml: n = null
  }) {
    this.pdfPage = e, this.annotationStorage = t, this.linkService = i, this.xfaHtml = n, this.div = null, this._cancelled = !1;
  }
  async render(e, t = "display") {
    if (t === "print") {
      const s = {
        viewport: e.clone({
          dontFlip: !0
        }),
        div: this.div,
        xfaHtml: this.xfaHtml,
        annotationStorage: this.annotationStorage,
        linkService: this.linkService,
        intent: t
      };
      return this.div = document.createElement("div"), s.div = this.div, hn.render(s);
    }
    const i = await this.pdfPage.getXfa();
    if (this._cancelled || !i)
      return {
        textDivs: []
      };
    const n = {
      viewport: e.clone({
        dontFlip: !0
      }),
      div: this.div,
      xfaHtml: i,
      annotationStorage: this.annotationStorage,
      linkService: this.linkService,
      intent: t
    };
    return this.div ? hn.update(n) : (this.div = document.createElement("div"), n.div = this.div, hn.render(n));
  }
  cancel() {
    this._cancelled = !0;
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
};
h(Fs, "XfaLayerBuilder");
let Qi = Fs;
const rl = {
  annotationEditorUIManager: null,
  annotationStorage: null,
  downloadManager: null,
  enableScripting: !1,
  fieldObjectsPromise: null,
  findController: null,
  hasJSActionsPromise: null,
  get linkService() {
    return new Xt();
  }
}, al = /* @__PURE__ */ new Map([["canvasWrapper", 0], ["textLayer", 1], ["annotationLayer", 2], ["annotationEditorLayer", 3], ["xfaLayer", 3]]);
var Je, De, oi, Ye, li, je, Fe, xt, hi, di, ui, qe, St, At, we, Ve, R, ut, Fi, Ht, Qn, Jn, Yn, qn, es, na, sa, ts, is;
const Vs = class Vs {
  constructor(e) {
    m(this, R);
    m(this, Je, ye.ENABLE_FORMS);
    m(this, De, null);
    m(this, oi, !1);
    m(this, Ye, !1);
    m(this, li, !1);
    m(this, je, null);
    m(this, Fe, null);
    m(this, xt, null);
    m(this, hi, null);
    m(this, di, 1);
    m(this, ui, 1);
    m(this, qe, null);
    m(this, St, H.INITIAL);
    m(this, At, ue.ENABLE);
    m(this, we, {
      directDrawing: !0,
      initialOptionalContent: !0,
      regularAnnotations: !0
    });
    m(this, Ve, [null, null, null, null]);
    const t = e.container, i = e.defaultViewport;
    this.id = e.id, this.renderingId = "page" + this.id, f(this, je, e.layerProperties || rl), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = e.scale || Tr, this.viewport = i, this.pdfPageRotate = i.rotation, this._optionalContentConfigPromise = e.optionalContentConfigPromise || null, f(this, At, e.textLayerMode ?? ue.ENABLE), f(this, Je, e.annotationMode ?? ye.ENABLE_FORMS), this.imageResourcesPath = e.imageResourcesPath || "", this.maxCanvasPixels = e.maxCanvasPixels ?? $n.get("maxCanvasPixels"), this.pageColors = e.pageColors || null, f(this, oi, e.enableHWA || !1), this.eventBus = e.eventBus, this.renderingQueue = e.renderingQueue, this.l10n = e.l10n, this.l10n ||= new kt(), this.renderTask = null, this.resume = null, this._isStandalone = !this.renderingQueue?.hasViewer(), this._container = t, this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.xfaLayer = null, this.structTreeLayer = null, this.drawLayer = null;
    const n = document.createElement("div");
    if (n.className = "page", n.setAttribute("data-page-number", this.id), n.setAttribute("role", "region"), n.setAttribute("data-l10n-id", "pdfjs-page-landmark"), n.setAttribute("data-l10n-args", JSON.stringify({
      page: this.id
    })), this.div = n, u(this, R, Fi).call(this), t?.append(n), this._isStandalone) {
      t?.style.setProperty("--scale-factor", this.scale * me.PDF_TO_CSS_UNITS), this.pageColors?.background && t?.style.setProperty("--page-bg-color", this.pageColors.background);
      const {
        optionalContentConfigPromise: s
      } = e;
      s && s.then((r) => {
        s === this._optionalContentConfigPromise && (o(this, we).initialOptionalContent = r.hasInitialVisibility);
      }), e.l10n || this.l10n.translate(this.div);
    }
  }
  get renderingState() {
    return o(this, St);
  }
  set renderingState(e) {
    if (e !== o(this, St))
      switch (f(this, St, e), o(this, Fe) && (clearTimeout(o(this, Fe)), f(this, Fe, null)), e) {
        case H.PAUSED:
          this.div.classList.remove("loading");
          break;
        case H.RUNNING:
          this.div.classList.add("loadingIcon"), f(this, Fe, setTimeout(() => {
            this.div.classList.add("loading"), f(this, Fe, null);
          }, 0));
          break;
        case H.INITIAL:
        case H.FINISHED:
          this.div.classList.remove("loadingIcon", "loading");
          break;
      }
  }
  setPdfPage(e) {
    this._isStandalone && (this.pageColors?.foreground === "CanvasText" || this.pageColors?.background === "Canvas") && (this._container?.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), this._container?.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = e, this.pdfPageRotate = e.rotate;
    const t = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = e.getViewport({
      scale: this.scale * me.PDF_TO_CSS_UNITS,
      rotation: t
    }), u(this, R, Fi).call(this), this.reset();
  }
  destroy() {
    this.reset(), this.pdfPage?.cleanup();
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  get _textHighlighter() {
    return $i(this, "_textHighlighter", new Zn({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: o(this, je).findController
    }));
  }
  reset({
    keepAnnotationLayer: e = !1,
    keepAnnotationEditorLayer: t = !1,
    keepXfaLayer: i = !1,
    keepTextLayer: n = !1,
    keepCanvasWrapper: s = !1
  } = {}) {
    this.cancelRendering({
      keepAnnotationLayer: e,
      keepAnnotationEditorLayer: t,
      keepXfaLayer: i,
      keepTextLayer: n
    }), this.renderingState = H.INITIAL;
    const r = this.div, l = r.childNodes, d = e && this.annotationLayer?.div || null, c = t && this.annotationEditorLayer?.div || null, p = i && this.xfaLayer?.div || null, E = n && this.textLayer?.div || null, w = s && o(this, De) || null;
    for (let A = l.length - 1; A >= 0; A--) {
      const C = l[A];
      switch (C) {
        case d:
        case c:
        case p:
        case E:
        case w:
          continue;
      }
      C.remove();
      const I = o(this, Ve).indexOf(C);
      I >= 0 && (o(this, Ve)[I] = null);
    }
    r.removeAttribute("data-loaded"), d && this.annotationLayer.hide(), c && this.annotationEditorLayer.hide(), p && this.xfaLayer.hide(), E && this.textLayer.hide(), this.structTreeLayer?.hide(), !s && o(this, De) && (f(this, De, null), u(this, R, ts).call(this));
  }
  toggleEditingMode(e) {
    this.hasEditableAnnotations() && (f(this, li, e), this.reset({
      keepAnnotationLayer: !0,
      keepAnnotationEditorLayer: !0,
      keepXfaLayer: !0,
      keepTextLayer: !0,
      keepCanvasWrapper: !0
    }));
  }
  update({
    scale: e = 0,
    rotation: t = null,
    optionalContentConfigPromise: i = null,
    drawingDelay: n = -1
  }) {
    this.scale = e || this.scale, typeof t == "number" && (this.rotation = t), i instanceof Promise && (this._optionalContentConfigPromise = i, i.then((r) => {
      i === this._optionalContentConfigPromise && (o(this, we).initialOptionalContent = r.hasInitialVisibility);
    })), o(this, we).directDrawing = !0;
    const s = (this.rotation + this.pdfPageRotate) % 360;
    if (this.viewport = this.viewport.clone({
      scale: this.scale * me.PDF_TO_CSS_UNITS,
      rotation: s
    }), u(this, R, Fi).call(this), this._isStandalone && this._container?.style.setProperty("--scale-factor", this.viewport.scale), this.canvas) {
      let r = !1;
      if (o(this, Ye)) {
        if (this.maxCanvasPixels === 0)
          r = !0;
        else if (this.maxCanvasPixels > 0) {
          const {
            width: d,
            height: c
          } = this.viewport, {
            sx: p,
            sy: E
          } = this.outputScale;
          r = (Math.floor(d) * p | 0) * (Math.floor(c) * E | 0) > this.maxCanvasPixels;
        }
      }
      const l = n >= 0 && n < 1e3;
      if (l || r) {
        if (l && !r && this.renderingState !== H.FINISHED && (this.cancelRendering({
          keepAnnotationLayer: !0,
          keepAnnotationEditorLayer: !0,
          keepXfaLayer: !0,
          keepTextLayer: !0,
          cancelExtraDelay: n
        }), this.renderingState = H.FINISHED, o(this, we).directDrawing = !1), this.cssTransform({
          redrawAnnotationLayer: !0,
          redrawAnnotationEditorLayer: !0,
          redrawXfaLayer: !0,
          redrawTextLayer: !l,
          hideTextLayer: l
        }), l)
          return;
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: !0,
          timestamp: performance.now(),
          error: o(this, qe)
        });
        return;
      }
    }
    this.cssTransform({}), this.reset({
      keepAnnotationLayer: !0,
      keepAnnotationEditorLayer: !0,
      keepXfaLayer: !0,
      keepTextLayer: !0,
      keepCanvasWrapper: !0
    });
  }
  cancelRendering({
    keepAnnotationLayer: e = !1,
    keepAnnotationEditorLayer: t = !1,
    keepXfaLayer: i = !1,
    keepTextLayer: n = !1,
    cancelExtraDelay: s = 0
  } = {}) {
    this.renderTask && (this.renderTask.cancel(s), this.renderTask = null), this.resume = null, this.textLayer && (!n || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.annotationLayer && (!e || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationEditorLayer && (!t || !this.annotationEditorLayer.div) && (this.drawLayer && (this.drawLayer.cancel(), this.drawLayer = null), this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!i || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, this._textHighlighter?.disable());
  }
  cssTransform({
    redrawAnnotationLayer: e = !1,
    redrawAnnotationEditorLayer: t = !1,
    redrawXfaLayer: i = !1,
    redrawTextLayer: n = !1,
    hideTextLayer: s = !1
  }) {
    const {
      canvas: r
    } = this;
    if (!r)
      return;
    const l = o(this, xt);
    if (this.viewport !== l) {
      const d = (360 + this.viewport.rotation - l.rotation) % 360;
      if (d === 90 || d === 270) {
        const {
          width: c,
          height: p
        } = this.viewport, E = p / c, w = c / p;
        r.style.transform = `rotate(${d}deg) scale(${E},${w})`;
      } else
        r.style.transform = d === 0 ? "" : `rotate(${d}deg)`;
    }
    e && this.annotationLayer && u(this, R, Qn).call(this), t && this.annotationEditorLayer && (this.drawLayer && u(this, R, Yn).call(this), u(this, R, Jn).call(this)), i && this.xfaLayer && u(this, R, qn).call(this), this.textLayer && (s ? (this.textLayer.hide(), this.structTreeLayer?.hide()) : n && u(this, R, es).call(this));
  }
  get width() {
    return this.viewport.width;
  }
  get height() {
    return this.viewport.height;
  }
  getPagePoint(e, t) {
    return this.viewport.convertToPdfPoint(e, t);
  }
  async draw() {
    this.renderingState !== H.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: e,
      l10n: t,
      pageColors: i,
      pdfPage: n,
      viewport: s
    } = this;
    if (!n)
      throw this.renderingState = H.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = H.RUNNING;
    let r = o(this, De);
    if (r || (r = f(this, De, document.createElement("div")), r.classList.add("canvasWrapper"), u(this, R, ut).call(this, r, "canvasWrapper")), !this.textLayer && o(this, At) !== ue.DISABLE && !n.isPureXfa && (this._accessibilityManager ||= new Kn(), this.textLayer = new Zi({
      pdfPage: n,
      highlighter: this._textHighlighter,
      accessibilityManager: this._accessibilityManager,
      enablePermissions: o(this, At) === ue.ENABLE_PERMISSIONS,
      onAppend: /* @__PURE__ */ h((v) => {
        this.l10n.pause(), u(this, R, ut).call(this, v, "textLayer"), this.l10n.resume();
      }, "onAppend")
    })), !this.annotationLayer && o(this, Je) !== ye.DISABLE) {
      const {
        annotationStorage: v,
        annotationEditorUIManager: O,
        downloadManager: Z,
        enableScripting: K,
        fieldObjectsPromise: nn,
        hasJSActionsPromise: ma,
        linkService: ba
      } = o(this, je);
      this._annotationCanvasMap ||= /* @__PURE__ */ new Map(), this.annotationLayer = new Wi({
        pdfPage: n,
        annotationStorage: v,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: o(this, Je) === ye.ENABLE_FORMS,
        linkService: ba,
        downloadManager: Z,
        enableScripting: K,
        hasJSActionsPromise: ma,
        fieldObjectsPromise: nn,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager,
        annotationEditorUIManager: O,
        onAppend: /* @__PURE__ */ h((Ea) => {
          u(this, R, ut).call(this, Ea, "annotationLayer");
        }, "onAppend")
      });
    }
    const l = /* @__PURE__ */ h((v) => {
      if (C?.(!1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = H.PAUSED, this.resume = () => {
          this.renderingState = H.RUNNING, v();
        };
        return;
      }
      v();
    }, "renderContinueCallback"), {
      width: d,
      height: c
    } = s, p = document.createElement("canvas");
    p.setAttribute("role", "presentation");
    const E = !!(i?.background && i?.foreground), w = this.canvas, A = !w && !E;
    this.canvas = p, f(this, xt, s);
    let C = /* @__PURE__ */ h((v) => {
      if (A) {
        r.prepend(p), C = null;
        return;
      }
      v && (w ? (w.replaceWith(p), w.width = w.height = 0) : r.prepend(p), C = null);
    }, "showCanvas");
    const I = p.getContext("2d", {
      alpha: !1,
      willReadFrequently: !o(this, oi)
    }), L = this.outputScale = new ho();
    if (this.maxCanvasPixels === 0) {
      const v = 1 / this.scale;
      L.sx *= v, L.sy *= v, f(this, Ye, !0);
    } else if (this.maxCanvasPixels > 0) {
      const v = d * c, O = Math.sqrt(this.maxCanvasPixels / v);
      L.sx > O || L.sy > O ? (L.sx = O, L.sy = O, f(this, Ye, !0)) : f(this, Ye, !1);
    }
    const N = tr(L.sx), M = tr(L.sy), x = p.width = Ai(Ii(d * L.sx), N[0]), P = p.height = Ai(Ii(c * L.sy), M[0]), k = Ai(Ii(d), N[1]), F = Ai(Ii(c), M[1]);
    L.sx = x / k, L.sy = P / F, o(this, di) !== N[1] && (e.style.setProperty("--scale-round-x", `${N[1]}px`), f(this, di, N[1])), o(this, ui) !== M[1] && (e.style.setProperty("--scale-round-y", `${M[1]}px`), f(this, ui, M[1]));
    const B = L.scaled ? [L.sx, 0, 0, L.sy, 0, 0] : null, j = {
      canvasContext: I,
      transform: B,
      viewport: s,
      annotationMode: o(this, Je),
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors: i,
      isEditing: o(this, li)
    }, b = this.renderTask = n.render(j);
    b.onContinue = l;
    const _ = b.promise.then(async () => {
      C?.(!0), await u(this, R, is).call(this, b), this.structTreeLayer ||= new Xi(n, s.rawDims), u(this, R, es).call(this), this.annotationLayer && await u(this, R, Qn).call(this);
      const {
        annotationEditorUIManager: v
      } = o(this, je);
      v && (this.drawLayer ||= new Wn({
        pageIndex: this.id
      }), await u(this, R, Yn).call(this), this.drawLayer.setParent(r), this.annotationEditorLayer ||= new Bn({
        uiManager: v,
        pdfPage: n,
        l10n: t,
        structTreeLayer: this.structTreeLayer,
        accessibilityManager: this._accessibilityManager,
        annotationLayer: this.annotationLayer?.annotationLayer,
        textLayer: this.textLayer,
        drawLayer: this.drawLayer.getDrawLayer(),
        onAppend: /* @__PURE__ */ h((O) => {
          u(this, R, ut).call(this, O, "annotationEditorLayer");
        }, "onAppend")
      }), u(this, R, Jn).call(this));
    }, (v) => (v instanceof yn ? (w?.remove(), u(this, R, ts).call(this)) : C?.(!0), u(this, R, is).call(this, b, v)));
    if (n.isPureXfa) {
      if (!this.xfaLayer) {
        const {
          annotationStorage: v,
          linkService: O
        } = o(this, je);
        this.xfaLayer = new Qi({
          pdfPage: n,
          annotationStorage: v,
          linkService: O
        });
      }
      u(this, R, qn).call(this);
    }
    return e.setAttribute("data-loaded", !0), this.eventBus.dispatch("pagerender", {
      source: this,
      pageNumber: this.id
    }), _;
  }
  setPageLabel(e) {
    this.pageLabel = typeof e == "string" ? e : null, this.div.setAttribute("data-l10n-args", JSON.stringify({
      page: this.pageLabel ?? this.id
    })), this.pageLabel !== null ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label");
  }
  get thumbnailCanvas() {
    const {
      directDrawing: e,
      initialOptionalContent: t,
      regularAnnotations: i
    } = o(this, we);
    return e && t && i ? this.canvas : null;
  }
};
Je = new WeakMap(), De = new WeakMap(), oi = new WeakMap(), Ye = new WeakMap(), li = new WeakMap(), je = new WeakMap(), Fe = new WeakMap(), xt = new WeakMap(), hi = new WeakMap(), di = new WeakMap(), ui = new WeakMap(), qe = new WeakMap(), St = new WeakMap(), At = new WeakMap(), we = new WeakMap(), Ve = new WeakMap(), R = new WeakSet(), ut = /* @__PURE__ */ h(function(e, t) {
  const i = al.get(t), n = o(this, Ve)[i];
  if (o(this, Ve)[i] = e, n) {
    n.replaceWith(e);
    return;
  }
  for (let s = i - 1; s >= 0; s--) {
    const r = o(this, Ve)[s];
    if (r) {
      r.after(e);
      return;
    }
  }
  this.div.prepend(e);
}, "#addLayer"), Fi = /* @__PURE__ */ h(function() {
  const {
    viewport: e
  } = this;
  if (this.pdfPage) {
    if (o(this, hi) === e.rotation)
      return;
    f(this, hi, e.rotation);
  }
  uo(this.div, e, !0, !1);
}, "#setDimensions"), Ht = /* @__PURE__ */ h(function(e, t) {
  this.eventBus.dispatch(e, {
    source: this,
    pageNumber: this.id,
    error: t
  });
}, "#dispatchLayerRendered"), Qn = /* @__PURE__ */ h(async function() {
  let e = null;
  try {
    await this.annotationLayer.render(this.viewport, {
      structTreeLayer: this.structTreeLayer
    }, "display");
  } catch (t) {
    console.error("#renderAnnotationLayer:", t), e = t;
  } finally {
    u(this, R, Ht).call(this, "annotationlayerrendered", e);
  }
}, "#renderAnnotationLayer"), Jn = /* @__PURE__ */ h(async function() {
  let e = null;
  try {
    await this.annotationEditorLayer.render(this.viewport, "display");
  } catch (t) {
    console.error("#renderAnnotationEditorLayer:", t), e = t;
  } finally {
    u(this, R, Ht).call(this, "annotationeditorlayerrendered", e);
  }
}, "#renderAnnotationEditorLayer"), Yn = /* @__PURE__ */ h(async function() {
  try {
    await this.drawLayer.render("display");
  } catch (e) {
    console.error("#renderDrawLayer:", e);
  }
}, "#renderDrawLayer"), qn = /* @__PURE__ */ h(async function() {
  let e = null;
  try {
    const t = await this.xfaLayer.render(this.viewport, "display");
    t?.textDivs && this._textHighlighter && u(this, R, sa).call(this, t.textDivs);
  } catch (t) {
    console.error("#renderXfaLayer:", t), e = t;
  } finally {
    this.xfaLayer?.div && (this.l10n.pause(), u(this, R, ut).call(this, this.xfaLayer.div, "xfaLayer"), this.l10n.resume()), u(this, R, Ht).call(this, "xfalayerrendered", e);
  }
}, "#renderXfaLayer"), es = /* @__PURE__ */ h(async function() {
  if (!this.textLayer)
    return;
  let e = null;
  try {
    await this.textLayer.render(this.viewport);
  } catch (t) {
    if (t instanceof eo)
      return;
    console.error("#renderTextLayer:", t), e = t;
  }
  u(this, R, Ht).call(this, "textlayerrendered", e), u(this, R, na).call(this);
}, "#renderTextLayer"), na = /* @__PURE__ */ h(async function() {
  if (!this.textLayer)
    return;
  const e = await this.structTreeLayer?.render();
  e && (this.l10n.pause(), this.structTreeLayer?.addElementsToTextLayer(), this.canvas && e.parentNode !== this.canvas && this.canvas.append(e), this.l10n.resume()), this.structTreeLayer?.show();
}, "#renderStructTreeLayer"), sa = /* @__PURE__ */ h(async function(e) {
  const t = await this.pdfPage.getTextContent(), i = [];
  for (const n of t.items)
    i.push(n.str);
  this._textHighlighter.setTextMapping(e, i), this._textHighlighter.enable();
}, "#buildXfaTextContentItems"), ts = /* @__PURE__ */ h(function() {
  const {
    canvas: e
  } = this;
  e && (e.remove(), e.width = e.height = 0, this.canvas = null, f(this, xt, null));
}, "#resetCanvas"), is = /* @__PURE__ */ h(async function(e, t = null) {
  if (e === this.renderTask && (this.renderTask = null), t instanceof yn) {
    f(this, qe, null);
    return;
  }
  if (f(this, qe, t), this.renderingState = H.FINISHED, o(this, we).regularAnnotations = !e.separateAnnots, this.eventBus.dispatch("pagerendered", {
    source: this,
    pageNumber: this.id,
    cssTransform: !1,
    timestamp: performance.now(),
    error: o(this, qe)
  }), t)
    throw t;
}, "#finishRenderTask"), h(Vs, "PDFPageView");
let Ji = Vs;
async function ol(a) {
  const t = "".split("#", 1)[0];
  let {
    info: i,
    metadata: n,
    contentDispositionFilename: s,
    contentLength: r
  } = await a.getMetadata();
  if (!r) {
    const {
      length: l
    } = await a.getDownloadInfo();
    r = l;
  }
  return {
    ...i,
    baseURL: t,
    filesize: r,
    filename: s || ao(""),
    metadata: n?.getRaw(),
    authors: n?.get("dc:creator"),
    numPages: a.numPages,
    URL: ""
  };
}
h(ol, "docProperties");
const Bs = class Bs {
  constructor(e) {
    this._ready = new Promise((t, i) => {
      import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL(
          /*webpackIgnore: true*/
          e,
          typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url
        ).href
      ).then((s) => {
        t(s.QuickJSSandbox());
      }).catch(i);
    });
  }
  async createSandbox(e) {
    (await this._ready).create(e);
  }
  async dispatchEventInSandbox(e) {
    const t = await this._ready;
    setTimeout(() => t.dispatchEvent(e), 0);
  }
  async destroySandbox() {
    (await this._ready).nukeSandbox();
  }
};
h(Bs, "GenericScripting");
let ns = Bs;
var he, et, ci, tt, it, fi, X, _e, It, $, ie, z, ra, Vi, rs, aa, Ut;
const Hs = class Hs {
  constructor({
    eventBus: e,
    externalServices: t = null,
    docProperties: i = null
  }) {
    m(this, z);
    m(this, he, null);
    m(this, et, null);
    m(this, ci, null);
    m(this, tt, null);
    m(this, it, null);
    m(this, fi, null);
    m(this, X, null);
    m(this, _e, null);
    m(this, It, !1);
    m(this, $, null);
    m(this, ie, null);
    f(this, it, e), f(this, fi, t), f(this, ci, i);
  }
  setViewer(e) {
    f(this, _e, e);
  }
  async setDocument(e) {
    if (o(this, X) && await u(this, z, Ut).call(this), f(this, X, e), !e)
      return;
    const [t, i, n] = await Promise.all([e.getFieldObjects(), e.getCalculationOrderIds(), e.getJSActions()]);
    if (!t && !n) {
      await u(this, z, Ut).call(this);
      return;
    }
    if (e !== o(this, X))
      return;
    try {
      f(this, $, u(this, z, aa).call(this));
    } catch (l) {
      console.error("setDocument:", l), await u(this, z, Ut).call(this);
      return;
    }
    const s = o(this, it);
    f(this, tt, new AbortController());
    const {
      signal: r
    } = o(this, tt);
    s._on("updatefromsandbox", (l) => {
      l?.source === window && u(this, z, ra).call(this, l.detail);
    }, {
      signal: r
    }), s._on("dispatcheventinsandbox", (l) => {
      o(this, $)?.dispatchEventInSandbox(l.detail);
    }, {
      signal: r
    }), s._on("pagechanging", ({
      pageNumber: l,
      previous: d
    }) => {
      l !== d && (u(this, z, rs).call(this, d), u(this, z, Vi).call(this, l));
    }, {
      signal: r
    }), s._on("pagerendered", ({
      pageNumber: l
    }) => {
      this._pageOpenPending.has(l) && l === o(this, _e).currentPageNumber && u(this, z, Vi).call(this, l);
    }, {
      signal: r
    }), s._on("pagesdestroy", async () => {
      await u(this, z, rs).call(this, o(this, _e).currentPageNumber), await o(this, $)?.dispatchEventInSandbox({
        id: "doc",
        name: "WillClose"
      }), o(this, he)?.resolve();
    }, {
      signal: r
    });
    try {
      const l = await o(this, ci).call(this, e);
      if (e !== o(this, X))
        return;
      await o(this, $).createSandbox({
        objects: t,
        calculationOrder: i,
        appInfo: {
          platform: navigator.platform,
          language: navigator.language
        },
        docInfo: {
          ...l,
          actions: n
        }
      }), s.dispatch("sandboxcreated", {
        source: this
      });
    } catch (l) {
      console.error("setDocument:", l), await u(this, z, Ut).call(this);
      return;
    }
    await o(this, $)?.dispatchEventInSandbox({
      id: "doc",
      name: "Open"
    }), await u(this, z, Vi).call(this, o(this, _e).currentPageNumber, !0), Promise.resolve().then(() => {
      e === o(this, X) && f(this, It, !0);
    });
  }
  async dispatchWillSave() {
    return o(this, $)?.dispatchEventInSandbox({
      id: "doc",
      name: "WillSave"
    });
  }
  async dispatchDidSave() {
    return o(this, $)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidSave"
    });
  }
  async dispatchWillPrint() {
    if (o(this, $)) {
      await o(this, ie)?.promise, f(this, ie, Promise.withResolvers());
      try {
        await o(this, $).dispatchEventInSandbox({
          id: "doc",
          name: "WillPrint"
        });
      } catch (e) {
        throw o(this, ie).resolve(), f(this, ie, null), e;
      }
      await o(this, ie).promise;
    }
  }
  async dispatchDidPrint() {
    return o(this, $)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });
  }
  get destroyPromise() {
    return o(this, et)?.promise || null;
  }
  get ready() {
    return o(this, It);
  }
  get _pageOpenPending() {
    return $i(this, "_pageOpenPending", /* @__PURE__ */ new Set());
  }
  get _visitedPages() {
    return $i(this, "_visitedPages", /* @__PURE__ */ new Map());
  }
};
he = new WeakMap(), et = new WeakMap(), ci = new WeakMap(), tt = new WeakMap(), it = new WeakMap(), fi = new WeakMap(), X = new WeakMap(), _e = new WeakMap(), It = new WeakMap(), $ = new WeakMap(), ie = new WeakMap(), z = new WeakSet(), ra = /* @__PURE__ */ h(async function(e) {
  const t = o(this, _e), i = t.isInPresentationMode || t.isChangingPresentationMode, {
    id: n,
    siblings: s,
    command: r,
    value: l
  } = e;
  if (!n) {
    switch (r) {
      case "clear":
        console.clear();
        break;
      case "error":
        console.error(l);
        break;
      case "layout":
        if (!i) {
          const c = Ca(l);
          t.spreadMode = c.spreadMode;
        }
        break;
      case "page-num":
        t.currentPageNumber = l + 1;
        break;
      case "print":
        await t.pagesPromise, o(this, it).dispatch("print", {
          source: this
        });
        break;
      case "println":
        console.log(l);
        break;
      case "zoom":
        i || (t.currentScaleValue = l);
        break;
      case "SaveAs":
        o(this, it).dispatch("download", {
          source: this
        });
        break;
      case "FirstPage":
        t.currentPageNumber = 1;
        break;
      case "LastPage":
        t.currentPageNumber = t.pagesCount;
        break;
      case "NextPage":
        t.nextPage();
        break;
      case "PrevPage":
        t.previousPage();
        break;
      case "ZoomViewIn":
        i || t.increaseScale();
        break;
      case "ZoomViewOut":
        i || t.decreaseScale();
        break;
      case "WillPrintFinished":
        o(this, ie)?.resolve(), f(this, ie, null);
        break;
    }
    return;
  }
  if (i && e.focus)
    return;
  delete e.id, delete e.siblings;
  const d = s ? [n, ...s] : [n];
  for (const c of d) {
    const p = document.querySelector(`[data-element-id="${c}"]`);
    p ? p.dispatchEvent(new CustomEvent("updatefromsandbox", {
      detail: e
    })) : o(this, X)?.annotationStorage.setValue(c, e);
  }
}, "#updateFromSandbox"), Vi = /* @__PURE__ */ h(async function(e, t = !1) {
  const i = o(this, X), n = this._visitedPages;
  if (t && f(this, he, Promise.withResolvers()), !o(this, he))
    return;
  const s = o(this, _e).getPageView(e - 1);
  if (s?.renderingState !== H.FINISHED) {
    this._pageOpenPending.add(e);
    return;
  }
  this._pageOpenPending.delete(e);
  const r = (async () => {
    const l = await (n.has(e) ? null : s.pdfPage?.getJSActions());
    i === o(this, X) && await o(this, $)?.dispatchEventInSandbox({
      id: "page",
      name: "PageOpen",
      pageNumber: e,
      actions: l
    });
  })();
  n.set(e, r);
}, "#dispatchPageOpen"), rs = /* @__PURE__ */ h(async function(e) {
  const t = o(this, X), i = this._visitedPages;
  if (!o(this, he) || this._pageOpenPending.has(e))
    return;
  const n = i.get(e);
  n && (i.set(e, null), await n, t === o(this, X) && await o(this, $)?.dispatchEventInSandbox({
    id: "page",
    name: "PageClose",
    pageNumber: e
  }));
}, "#dispatchPageClose"), aa = /* @__PURE__ */ h(function() {
  if (f(this, et, Promise.withResolvers()), o(this, $))
    throw new Error("#initScripting: Scripting already exists.");
  return o(this, fi).createScripting();
}, "#initScripting"), Ut = /* @__PURE__ */ h(async function() {
  if (!o(this, $)) {
    f(this, X, null), o(this, et)?.resolve();
    return;
  }
  o(this, he) && (await Promise.race([o(this, he).promise, new Promise((e) => {
    setTimeout(e, 1e3);
  })]).catch(() => {
  }), f(this, he, null)), f(this, X, null);
  try {
    await o(this, $).destroySandbox();
  } catch {
  }
  o(this, ie)?.reject(new Error("Scripting destroyed.")), f(this, ie, null), o(this, tt)?.abort(), f(this, tt, null), this._pageOpenPending.clear(), this._visitedPages.clear(), f(this, $, null), f(this, It, !1), o(this, et)?.resolve();
}, "#destroyScripting"), h(Hs, "PDFScriptingManager");
let ss = Hs;
const Us = class Us extends ss {
  constructor(e) {
    e.externalServices || window.addEventListener("updatefromsandbox", (t) => {
      e.eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: t.detail
      });
    }), e.externalServices ||= {
      createScripting: /* @__PURE__ */ h(() => new ns(e.sandboxBundleSrc), "createScripting")
    }, e.docProperties ||= (t) => ol(t), super(e);
  }
};
h(Us, "PDFScriptingManagerComponents");
let as = Us;
const ll = 3e4, $s = class $s {
  constructor() {
    this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1, Object.defineProperty(this, "hasViewer", {
      value: /* @__PURE__ */ h(() => !!this.pdfViewer, "value")
    });
  }
  setViewer(e) {
    this.pdfViewer = e;
  }
  setThumbnailViewer(e) {
    this.pdfThumbnailViewer = e;
  }
  isHighestPriority(e) {
    return this.highestPriorityPage === e.renderingId;
  }
  renderHighestPriority(e) {
    this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), !this.pdfViewer.forceRendering(e) && (this.isThumbnailViewEnabled && this.pdfThumbnailViewer?.forceRendering() || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), ll)));
  }
  getHighestPriority(e, t, i, n = !1) {
    const s = e.views, r = s.length;
    if (r === 0)
      return null;
    for (let E = 0; E < r; E++) {
      const w = s[E].view;
      if (!this.isViewFinished(w))
        return w;
    }
    const l = e.first.id, d = e.last.id;
    if (d - l + 1 > r) {
      const E = e.ids;
      for (let w = 1, A = d - l; w < A; w++) {
        const C = i ? l + w : d - w;
        if (E.has(C))
          continue;
        const I = t[C - 1];
        if (!this.isViewFinished(I))
          return I;
      }
    }
    let c = i ? d : l - 2, p = t[c];
    return p && !this.isViewFinished(p) || n && (c += i ? 1 : -1, p = t[c], p && !this.isViewFinished(p)) ? p : null;
  }
  isViewFinished(e) {
    return e.renderingState === H.FINISHED;
  }
  renderView(e) {
    switch (e.renderingState) {
      case H.FINISHED:
        return !1;
      case H.PAUSED:
        this.highestPriorityPage = e.renderingId, e.resume();
        break;
      case H.RUNNING:
        this.highestPriorityPage = e.renderingId;
        break;
      case H.INITIAL:
        this.highestPriorityPage = e.renderingId, e.draw().finally(() => {
          this.renderHighestPriority();
        }).catch((t) => {
          t instanceof yn || console.error("renderView:", t);
        });
        break;
    }
    return !0;
  }
};
h($s, "PDFRenderingQueue");
let os = $s;
const Ir = 10, Ci = {
  FORCE_SCROLL_MODE_PAGE: 1e4,
  FORCE_LAZY_PAGE_INIT: 5e3,
  PAUSE_EAGER_PAGE_INIT: 250
};
function Lr(a) {
  return Object.values(Y).includes(a) && a !== Y.DISABLE;
}
h(Lr, "isValidAnnotationEditorMode");
var ve, nt, pi, hs;
const Ws = class Ws {
  constructor(e) {
    m(this, pi);
    m(this, ve, /* @__PURE__ */ new Set());
    m(this, nt, 0);
    f(this, nt, e);
  }
  push(e) {
    const t = o(this, ve);
    t.has(e) && t.delete(e), t.add(e), t.size > o(this, nt) && u(this, pi, hs).call(this);
  }
  resize(e, t = null) {
    f(this, nt, e);
    const i = o(this, ve);
    if (t) {
      const n = i.size;
      let s = 1;
      for (const r of i)
        if (t.has(r.id) && (i.delete(r), i.add(r)), ++s > n)
          break;
    }
    for (; i.size > o(this, nt); )
      u(this, pi, hs).call(this);
  }
  has(e) {
    return o(this, ve).has(e);
  }
  [Symbol.iterator]() {
    return o(this, ve).keys();
  }
};
ve = new WeakMap(), nt = new WeakMap(), pi = new WeakSet(), hs = /* @__PURE__ */ h(function() {
  const e = o(this, ve).keys().next().value;
  e?.destroy(), o(this, ve).delete(e);
}, "#destroyFirstView"), h(Ws, "PDFPageViewBuffer");
let ls = Ws;
var Be, gi, mi, de, q, st, bi, Ei, wi, _i, vi, yi, Pi, He, rt, at, ot, Lt, Ue, Tt, xi, Rt, lt, $e, Si, Ct, S, oa, la, ha, $t, Bi, da, ds, ua, xe, us, ca, fa, pa, cs, ga, Hi;
const zs = class zs {
  constructor(e) {
    m(this, S);
    m(this, Be, null);
    m(this, gi, null);
    m(this, mi, null);
    m(this, de, Y.NONE);
    m(this, q, null);
    m(this, st, ye.ENABLE_FORMS);
    m(this, bi, null);
    m(this, Ei, null);
    m(this, wi, !1);
    m(this, _i, !1);
    m(this, vi, !1);
    m(this, yi, !1);
    m(this, Pi, !1);
    m(this, He, null);
    m(this, rt, null);
    m(this, at, null);
    m(this, ot, null);
    m(this, Lt, !1);
    m(this, Ue, null);
    m(this, Tt, !1);
    m(this, xi, 0);
    m(this, Rt, new ResizeObserver(u(this, S, ga).bind(this)));
    m(this, lt, null);
    m(this, $e, null);
    m(this, Si, !0);
    m(this, Ct, ue.ENABLE);
    const t = "4.10.38";
    if (dr !== t)
      throw new Error(`The API version "${dr}" does not match the Viewer version "${t}".`);
    if (this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, this.container?.tagName !== "DIV" || this.viewer?.tagName !== "DIV")
      throw new Error("Invalid `container` and/or `viewer` option.");
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
      throw new Error("The `container` must be absolutely positioned.");
    o(this, Rt).observe(this.container), this.eventBus = e.eventBus, this.linkService = e.linkService || new Xt(), this.downloadManager = e.downloadManager || null, this.findController = e.findController || null, f(this, gi, e.altTextManager || null), f(this, Ei, e.editorUndoBar || null), this.findController && (this.findController.onIsPageVisible = (n) => this._getVisiblePages().ids.has(n)), this._scriptingManager = e.scriptingManager || null, f(this, Ct, e.textLayerMode ?? ue.ENABLE), f(this, st, e.annotationMode ?? ye.ENABLE_FORMS), f(this, de, e.annotationEditorMode ?? Y.NONE), f(this, mi, e.annotationEditorHighlightColors || null), f(this, _i, e.enableHighlightFloatingButton === !0), f(this, yi, e.enableUpdatedAddImage === !0), f(this, Pi, e.enableNewAltTextWhenAddingImage === !0), this.imageResourcesPath = e.imageResourcesPath || "", this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.removePageBorders = e.removePageBorders || !1, this.maxCanvasPixels = e.maxCanvasPixels, this.l10n = e.l10n, this.l10n ||= new kt(), f(this, vi, e.enablePermissions || !1), this.pageColors = e.pageColors || null, f(this, rt, e.mlManager || null), f(this, wi, e.enableHWA || !1), f(this, Si, e.supportsPinchToZoom !== !1), this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new os(), this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue;
    const {
      abortSignal: i
    } = e;
    i?.addEventListener("abort", () => {
      o(this, Rt).disconnect(), f(this, Rt, null);
    }, {
      once: !0
    }), this.scroll = xa(this.container, this._scrollUpdate.bind(this), i), this.presentationModeState = ft.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), u(this, S, cs).call(this), this.eventBus._on("thumbnailrendered", ({
      pageNumber: n,
      pdfPage: s
    }) => {
      const r = this._pages[n - 1];
      o(this, Be).has(r) || s?.cleanup();
    }), e.l10n || this.l10n.translate(this.container);
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(e) {
    return this._pages[e];
  }
  getCachedPageViews() {
    return new Set(o(this, Be));
  }
  get pageViewsReady() {
    return this._pages.every((e) => e?.pdfPage);
  }
  get renderForms() {
    return o(this, st) === ye.ENABLE_FORMS;
  }
  get enableScripting() {
    return !!this._scriptingManager;
  }
  get currentPageNumber() {
    return this._currentPageNumber;
  }
  set currentPageNumber(e) {
    if (!Number.isInteger(e))
      throw new Error("Invalid page number.");
    this.pdfDocument && (this._setCurrentPageNumber(e, !0) || console.error(`currentPageNumber: "${e}" is not a valid page.`));
  }
  _setCurrentPageNumber(e, t = !1) {
    if (this._currentPageNumber === e)
      return t && u(this, S, us).call(this), !0;
    if (!(0 < e && e <= this.pagesCount))
      return !1;
    const i = this._currentPageNumber;
    return this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: e,
      pageLabel: this._pageLabels?.[e - 1] ?? null,
      previous: i
    }), t && u(this, S, us).call(this), !0;
  }
  get currentPageLabel() {
    return this._pageLabels?.[this._currentPageNumber - 1] ?? null;
  }
  set currentPageLabel(e) {
    if (!this.pdfDocument)
      return;
    let t = e | 0;
    if (this._pageLabels) {
      const i = this._pageLabels.indexOf(e);
      i >= 0 && (t = i + 1);
    }
    this._setCurrentPageNumber(t, !0) || console.error(`currentPageLabel: "${e}" is not a valid page.`);
  }
  get currentScale() {
    return this._currentScale !== rn ? this._currentScale : Tr;
  }
  set currentScale(e) {
    if (isNaN(e))
      throw new Error("Invalid numeric scale.");
    this.pdfDocument && u(this, S, xe).call(this, e, {
      noScroll: !1
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(e) {
    this.pdfDocument && u(this, S, xe).call(this, e, {
      noScroll: !1
    });
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(e) {
    if (!Cr(e))
      throw new Error("Invalid pages rotation angle.");
    if (!this.pdfDocument || (e %= 360, e < 0 && (e += 360), this._pagesRotation === e))
      return;
    this._pagesRotation = e;
    const t = this._currentPageNumber;
    this.refresh(!0, {
      rotation: e
    }), this._currentScaleValue && u(this, S, xe).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this.eventBus.dispatch("rotationchanging", {
      source: this,
      pagesRotation: e,
      pageNumber: t
    }), this.defaultRenderingQueue && this.update();
  }
  get firstPagePromise() {
    return this.pdfDocument ? this._firstPageCapability.promise : null;
  }
  get onePageRendered() {
    return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
  }
  get pagesPromise() {
    return this.pdfDocument ? this._pagesCapability.promise : null;
  }
  get _layerProperties() {
    const e = this;
    return $i(this, "_layerProperties", {
      get annotationEditorUIManager() {
        return o(e, q);
      },
      get annotationStorage() {
        return e.pdfDocument?.annotationStorage;
      },
      get downloadManager() {
        return e.downloadManager;
      },
      get enableScripting() {
        return !!e._scriptingManager;
      },
      get fieldObjectsPromise() {
        return e.pdfDocument?.getFieldObjects();
      },
      get findController() {
        return e.findController;
      },
      get hasJSActionsPromise() {
        return e.pdfDocument?.hasJSActions();
      },
      get linkService() {
        return e.linkService;
      }
    });
  }
  async getAllText() {
    const e = [], t = [];
    for (let i = 1, n = this.pdfDocument.numPages; i <= n; ++i) {
      if (o(this, Tt))
        return null;
      t.length = 0;
      const s = await this.pdfDocument.getPage(i), {
        items: r
      } = await s.getTextContent();
      for (const l of r)
        l.str && t.push(l.str), l.hasEOL && t.push(`
`);
      e.push(zt(t.join("")));
    }
    return e.join(`
`);
  }
  setDocument(e) {
    if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
      source: this
    }), this._cancelRendering(), this._resetView(), this.findController?.setDocument(null), this._scriptingManager?.setDocument(null), o(this, q)?.destroy(), f(this, q, null)), this.pdfDocument = e, !e)
      return;
    const t = e.numPages, i = e.getPage(1), n = e.getOptionalContentConfig({
      intent: "display"
    }), s = o(this, vi) ? e.getPermissions() : Promise.resolve(), {
      eventBus: r,
      pageColors: l,
      viewer: d
    } = this;
    f(this, He, new AbortController());
    const {
      signal: c
    } = o(this, He);
    if (t > Ci.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const w = this._scrollMode = D.PAGE;
      r.dispatch("scrollmodechanged", {
        source: this,
        mode: w
      });
    }
    this._pagesCapability.promise.then(() => {
      r.dispatch("pagesloaded", {
        source: this,
        pagesCount: t
      });
    }, () => {
    });
    const p = /* @__PURE__ */ h((w) => {
      const A = this._pages[w.pageNumber - 1];
      A && o(this, Be).push(A);
    }, "onBeforeDraw");
    r._on("pagerender", p, {
      signal: c
    });
    const E = /* @__PURE__ */ h((w) => {
      w.cssTransform || (this._onePageRenderedCapability.resolve({
        timestamp: w.timestamp
      }), r._off("pagerendered", E));
    }, "onAfterDraw");
    r._on("pagerendered", E, {
      signal: c
    }), Promise.all([i, s]).then(([w, A]) => {
      if (e !== this.pdfDocument)
        return;
      this._firstPageCapability.resolve(w), this._optionalContentConfigPromise = n;
      const {
        annotationEditorMode: C,
        annotationMode: I,
        textLayerMode: L
      } = u(this, S, oa).call(this, A);
      if (L !== ue.DISABLE) {
        const P = f(this, Ue, document.createElement("div"));
        P.id = "hiddenCopyElement", d.before(P);
      }
      if (typeof AbortSignal.any == "function" && C !== Y.DISABLE) {
        const P = C;
        e.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : Lr(P) ? (f(this, q, new io(this.container, d, o(this, gi), r, e, l, o(this, mi), o(this, _i), o(this, yi), o(this, Pi), o(this, rt), o(this, Ei), o(this, Si))), r.dispatch("annotationeditoruimanager", {
          source: this,
          uiManager: o(this, q)
        }), P !== Y.NONE && (P === Y.STAMP && o(this, rt)?.loadModel("altText"), o(this, q).updateMode(P))) : console.error(`Invalid AnnotationEditor mode: ${P}`);
      }
      const N = this._scrollMode === D.PAGE ? null : d, M = this.currentScale, x = w.getViewport({
        scale: M * me.PDF_TO_CSS_UNITS
      });
      d.style.setProperty("--scale-factor", x.scale), l?.background && d.style.setProperty("--page-bg-color", l.background), (l?.foreground === "CanvasText" || l?.background === "Canvas") && (d.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), d.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "ButtonText")));
      for (let P = 1; P <= t; ++P) {
        const k = new Ji({
          container: N,
          eventBus: r,
          id: P,
          scale: M,
          defaultViewport: x.clone(),
          optionalContentConfigPromise: n,
          renderingQueue: this.renderingQueue,
          textLayerMode: L,
          annotationMode: I,
          imageResourcesPath: this.imageResourcesPath,
          maxCanvasPixels: this.maxCanvasPixels,
          pageColors: l,
          l10n: this.l10n,
          layerProperties: this._layerProperties,
          enableHWA: o(this, wi)
        });
        this._pages.push(k);
      }
      this._pages[0]?.setPdfPage(w), this._scrollMode === D.PAGE ? u(this, S, $t).call(this) : this._spreadMode !== G.NONE && this._updateSpreadMode(), u(this, S, la).call(this, c).then(async () => {
        if (e !== this.pdfDocument)
          return;
        if (this.findController?.setDocument(e), this._scriptingManager?.setDocument(e), o(this, Ue) && document.addEventListener("copy", u(this, S, ha).bind(this, L), {
          signal: c
        }), o(this, q) && r.dispatch("annotationeditormodechanged", {
          source: this,
          mode: o(this, de)
        }), e.loadingParams.disableAutoFetch || t > Ci.FORCE_LAZY_PAGE_INIT) {
          this._pagesCapability.resolve();
          return;
        }
        let P = t - 1;
        if (P <= 0) {
          this._pagesCapability.resolve();
          return;
        }
        for (let k = 2; k <= t; ++k) {
          const F = e.getPage(k).then((B) => {
            const j = this._pages[k - 1];
            j.pdfPage || j.setPdfPage(B), --P === 0 && this._pagesCapability.resolve();
          }, (B) => {
            console.error(`Unable to get page ${k} to initialize viewer`, B), --P === 0 && this._pagesCapability.resolve();
          });
          k % Ci.PAUSE_EAGER_PAGE_INIT === 0 && await F;
        }
      }), r.dispatch("pagesinit", {
        source: this
      }), e.getMetadata().then(({
        info: P
      }) => {
        e === this.pdfDocument && P.Language && (d.lang = P.Language);
      }), this.defaultRenderingQueue && this.update();
    }).catch((w) => {
      console.error("Unable to initialize viewer", w), this._pagesCapability.reject(w);
    });
  }
  setPageLabels(e) {
    if (this.pdfDocument) {
      e ? Array.isArray(e) && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("setPageLabels: Invalid page labels.")) : this._pageLabels = null;
      for (let t = 0, i = this._pages.length; t < i; t++)
        this._pages[t].setPageLabel(this._pageLabels?.[t] ?? null);
    }
  }
  _resetView() {
    this._pages = [], this._currentPageNumber = 1, this._currentScale = rn, this._currentScaleValue = null, this._pageLabels = null, f(this, Be, new ls(Ir)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = Promise.withResolvers(), this._onePageRenderedCapability = Promise.withResolvers(), this._pagesCapability = Promise.withResolvers(), this._scrollMode = D.VERTICAL, this._previousScrollMode = D.UNKNOWN, this._spreadMode = G.NONE, f(this, lt, {
      previousPageNumber: 1,
      scrollDown: !0,
      pages: []
    }), o(this, He)?.abort(), f(this, He, null), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), o(this, Ue)?.remove(), f(this, Ue, null), u(this, S, Hi).call(this);
  }
  _scrollUpdate() {
    this.pagesCount !== 0 && this.update();
  }
  pageLabelToPageNumber(e) {
    if (!this._pageLabels)
      return null;
    const t = this._pageLabels.indexOf(e);
    return t < 0 ? null : t + 1;
  }
  scrollPageIntoView({
    pageNumber: e,
    destArray: t = null,
    allowNegativeOffset: i = !1,
    ignoreDestinationZoom: n = !1
  }) {
    if (!this.pdfDocument)
      return;
    const s = Number.isInteger(e) && this._pages[e - 1];
    if (!s) {
      console.error(`scrollPageIntoView: "${e}" is not a valid pageNumber parameter.`);
      return;
    }
    if (this.isInPresentationMode || !t) {
      this._setCurrentPageNumber(e, !0);
      return;
    }
    let r = 0, l = 0, d = 0, c = 0, p, E;
    const w = s.rotation % 180 !== 0, A = (w ? s.height : s.width) / s.scale / me.PDF_TO_CSS_UNITS, C = (w ? s.width : s.height) / s.scale / me.PDF_TO_CSS_UNITS;
    let I = 0;
    switch (t[1].name) {
      case "XYZ":
        r = t[2], l = t[3], I = t[4], r = r !== null ? r : 0, l = l !== null ? l : C;
        break;
      case "Fit":
      case "FitB":
        I = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        l = t[2], I = "page-width", l === null && this._location ? (r = this._location.left, l = this._location.top) : (typeof l != "number" || l < 0) && (l = C);
        break;
      case "FitV":
      case "FitBV":
        r = t[2], d = A, c = C, I = "page-height";
        break;
      case "FitR":
        r = t[2], l = t[3], d = t[4] - r, c = t[5] - l;
        let x = Ys, P = qs;
        this.removePageBorders && (x = P = 0), p = (this.container.clientWidth - x) / d / me.PDF_TO_CSS_UNITS, E = (this.container.clientHeight - P) / c / me.PDF_TO_CSS_UNITS, I = Math.min(Math.abs(p), Math.abs(E));
        break;
      default:
        console.error(`scrollPageIntoView: "${t[1].name}" is not a valid destination type.`);
        return;
    }
    if (n || (I && I !== this._currentScale ? this.currentScaleValue = I : this._currentScale === rn && (this.currentScaleValue = _a)), I === "page-fit" && !t[4]) {
      u(this, S, Bi).call(this, s);
      return;
    }
    const L = [s.viewport.convertToViewportPoint(r, l), s.viewport.convertToViewportPoint(r + d, l + c)];
    let N = Math.min(L[0][0], L[1][0]), M = Math.min(L[0][1], L[1][1]);
    i || (N = Math.max(N, 0), M = Math.max(M, 0)), u(this, S, Bi).call(this, s, {
      left: N,
      top: M
    });
  }
  _updateLocation(e) {
    const t = this._currentScale, i = this._currentScaleValue, n = parseFloat(i) === t ? Math.round(t * 1e4) / 100 : i, s = e.id, r = this._pages[s - 1], l = this.container, d = r.getPagePoint(l.scrollLeft - e.x, l.scrollTop - e.y), c = Math.round(d[0]), p = Math.round(d[1]);
    let E = `#page=${s}`;
    this.isInPresentationMode || (E += `&zoom=${n},${c},${p}`), this._location = {
      pageNumber: s,
      scale: n,
      top: p,
      left: c,
      rotation: this._pagesRotation,
      pdfOpenParams: E
    };
  }
  update() {
    const e = this._getVisiblePages(), t = e.views, i = t.length;
    if (i === 0)
      return;
    const n = Math.max(Ir, 2 * i + 1);
    o(this, Be).resize(n, e.ids), this.renderingQueue.renderHighestPriority(e);
    const s = this._spreadMode === G.NONE && (this._scrollMode === D.PAGE || this._scrollMode === D.VERTICAL), r = this._currentPageNumber;
    let l = !1;
    for (const d of t) {
      if (d.percent < 100)
        break;
      if (d.id === r && s) {
        l = !0;
        break;
      }
    }
    this._setCurrentPageNumber(l ? r : t[0].id), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
      source: this,
      location: this._location
    });
  }
  containsElement(e) {
    return this.container.contains(e);
  }
  focus() {
    this.container.focus();
  }
  get _isContainerRtl() {
    return getComputedStyle(this.container).direction === "rtl";
  }
  get isInPresentationMode() {
    return this.presentationModeState === ft.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === ft.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const e = this._scrollMode === D.PAGE ? o(this, lt).pages : this._pages, t = this._scrollMode === D.HORIZONTAL, i = t && this._isContainerRtl;
    return Aa({
      scrollEl: this.container,
      views: e,
      sortByVisibility: !0,
      horizontal: t,
      rtl: i
    });
  }
  cleanup() {
    for (const e of this._pages)
      e.renderingState !== H.FINISHED && e.reset();
  }
  _cancelRendering() {
    for (const e of this._pages)
      e.cancelRendering();
  }
  forceRendering(e) {
    const t = e || this._getVisiblePages(), i = u(this, S, pa).call(this, t), n = this._spreadMode !== G.NONE && this._scrollMode !== D.HORIZONTAL, s = this.renderingQueue.getHighestPriority(t, this._pages, i, n);
    return s ? (u(this, S, fa).call(this, s).then(() => {
      this.renderingQueue.renderView(s);
    }), !0) : !1;
  }
  get hasEqualPageSizes() {
    const e = this._pages[0];
    for (let t = 1, i = this._pages.length; t < i; ++t) {
      const n = this._pages[t];
      if (n.width !== e.width || n.height !== e.height)
        return !1;
    }
    return !0;
  }
  getPagesOverview() {
    let e;
    return this._pages.map((t) => {
      const i = t.pdfPage.getViewport({
        scale: 1
      }), n = ir(i);
      if (e === void 0)
        e = n;
      else if (this.enablePrintAutoRotate && n !== e)
        return {
          width: i.height,
          height: i.width,
          rotation: (i.rotation - 90) % 360
        };
      return {
        width: i.width,
        height: i.height,
        rotation: i.rotation
      };
    });
  }
  get optionalContentConfigPromise() {
    return this.pdfDocument ? this._optionalContentConfigPromise ? this._optionalContentConfigPromise : (console.error("optionalContentConfigPromise: Not initialized yet."), this.pdfDocument.getOptionalContentConfig({
      intent: "display"
    })) : Promise.resolve(null);
  }
  set optionalContentConfigPromise(e) {
    if (!(e instanceof Promise))
      throw new Error(`Invalid optionalContentConfigPromise: ${e}`);
    this.pdfDocument && this._optionalContentConfigPromise && (this._optionalContentConfigPromise = e, this.refresh(!1, {
      optionalContentConfigPromise: e
    }), this.eventBus.dispatch("optionalcontentconfigchanged", {
      source: this,
      promise: e
    }));
  }
  get scrollMode() {
    return this._scrollMode;
  }
  set scrollMode(e) {
    if (this._scrollMode !== e) {
      if (!Ia(e))
        throw new Error(`Invalid scroll mode: ${e}`);
      this.pagesCount > Ci.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = e, this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: e
      }), this._updateScrollMode(this._currentPageNumber));
    }
  }
  _updateScrollMode(e = null) {
    const t = this._scrollMode, i = this.viewer;
    i.classList.toggle("scrollHorizontal", t === D.HORIZONTAL), i.classList.toggle("scrollWrapped", t === D.WRAPPED), !(!this.pdfDocument || !e) && (t === D.PAGE ? u(this, S, $t).call(this) : this._previousScrollMode === D.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && u(this, S, xe).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  get spreadMode() {
    return this._spreadMode;
  }
  set spreadMode(e) {
    if (this._spreadMode !== e) {
      if (!La(e))
        throw new Error(`Invalid spread mode: ${e}`);
      this._spreadMode = e, this.eventBus.dispatch("spreadmodechanged", {
        source: this,
        mode: e
      }), this._updateSpreadMode(this._currentPageNumber);
    }
  }
  _updateSpreadMode(e = null) {
    if (!this.pdfDocument)
      return;
    const t = this.viewer, i = this._pages;
    if (this._scrollMode === D.PAGE)
      u(this, S, $t).call(this);
    else if (t.textContent = "", this._spreadMode === G.NONE)
      for (const n of this._pages)
        t.append(n.div);
    else {
      const n = this._spreadMode - 1;
      let s = null;
      for (let r = 0, l = i.length; r < l; ++r)
        s === null ? (s = document.createElement("div"), s.className = "spread", t.append(s)) : r % 2 === n && (s = s.cloneNode(!1), t.append(s)), s.append(i[r].div);
    }
    e && (this._currentScaleValue && isNaN(this._currentScaleValue) && u(this, S, xe).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  _getPageAdvance(e, t = !1) {
    switch (this._scrollMode) {
      case D.WRAPPED: {
        const {
          views: i
        } = this._getVisiblePages(), n = /* @__PURE__ */ new Map();
        for (const {
          id: s,
          y: r,
          percent: l,
          widthPercent: d
        } of i) {
          if (l === 0 || d < 100)
            continue;
          let c = n.get(r);
          c || n.set(r, c ||= []), c.push(s);
        }
        for (const s of n.values()) {
          const r = s.indexOf(e);
          if (r === -1)
            continue;
          const l = s.length;
          if (l === 1)
            break;
          if (t)
            for (let d = r - 1, c = 0; d >= c; d--) {
              const p = s[d], E = s[d + 1] - 1;
              if (p < E)
                return e - E;
            }
          else
            for (let d = r + 1, c = l; d < c; d++) {
              const p = s[d], E = s[d - 1] + 1;
              if (p > E)
                return E - e;
            }
          if (t) {
            const d = s[0];
            if (d < e)
              return e - d + 1;
          } else {
            const d = s[l - 1];
            if (d > e)
              return d - e + 1;
          }
          break;
        }
        break;
      }
      case D.HORIZONTAL:
        break;
      case D.PAGE:
      case D.VERTICAL: {
        if (this._spreadMode === G.NONE)
          break;
        const i = this._spreadMode - 1;
        if (t && e % 2 !== i)
          break;
        if (!t && e % 2 === i)
          break;
        const {
          views: n
        } = this._getVisiblePages(), s = t ? e - 1 : e + 1;
        for (const {
          id: r,
          percent: l,
          widthPercent: d
        } of n)
          if (r === s) {
            if (l > 0 && d === 100)
              return 2;
            break;
          }
        break;
      }
    }
    return 1;
  }
  nextPage() {
    const e = this._currentPageNumber, t = this.pagesCount;
    if (e >= t)
      return !1;
    const i = this._getPageAdvance(e, !1) || 1;
    return this.currentPageNumber = Math.min(e + i, t), !0;
  }
  previousPage() {
    const e = this._currentPageNumber;
    if (e <= 1)
      return !1;
    const t = this._getPageAdvance(e, !0) || 1;
    return this.currentPageNumber = Math.max(e - t, 1), !0;
  }
  updateScale({
    drawingDelay: e,
    scaleFactor: t = null,
    steps: i = null,
    origin: n
  }) {
    if (i === null && t === null)
      throw new Error("Invalid updateScale options: either `steps` or `scaleFactor` must be provided.");
    if (!this.pdfDocument)
      return;
    let s = this._currentScale;
    if (t > 0 && t !== 1)
      s = Math.round(s * t * 100) / 100;
    else if (i) {
      const r = i > 0 ? Js : 1 / Js, l = i > 0 ? Math.ceil : Math.floor;
      i = Math.abs(i);
      do
        s = l((s * r).toFixed(2) * 10) / 10;
      while (--i > 0);
    }
    s = Math.max(va, Math.min(ya, s)), u(this, S, xe).call(this, s, {
      noScroll: !1,
      drawingDelay: e,
      origin: n
    });
  }
  increaseScale(e = {}) {
    this.updateScale({
      ...e,
      steps: e.steps ?? 1
    });
  }
  decreaseScale(e = {}) {
    this.updateScale({
      ...e,
      steps: -(e.steps ?? 1)
    });
  }
  get containerTopLeft() {
    return o(this, bi) || f(this, bi, [this.container.offsetTop, this.container.offsetLeft]);
  }
  get annotationEditorMode() {
    return o(this, q) ? o(this, de) : Y.DISABLE;
  }
  set annotationEditorMode({
    mode: e,
    editId: t = null,
    isFromKeyboard: i = !1
  }) {
    if (!o(this, q))
      throw new Error("The AnnotationEditor is not enabled.");
    if (o(this, de) === e)
      return;
    if (!Lr(e))
      throw new Error(`Invalid AnnotationEditor mode: ${e}`);
    if (!this.pdfDocument)
      return;
    e === Y.STAMP && o(this, rt)?.loadModel("altText");
    const {
      eventBus: n
    } = this, s = /* @__PURE__ */ h(() => {
      u(this, S, Hi).call(this), f(this, de, e), o(this, q).updateMode(e, t, i), n.dispatch("annotationeditormodechanged", {
        source: this,
        mode: e
      });
    }, "updater");
    if (e === Y.NONE || o(this, de) === Y.NONE) {
      const r = e !== Y.NONE;
      r || this.pdfDocument.annotationStorage.resetModifiedIds();
      for (const d of this._pages)
        d.toggleEditingMode(r);
      const l = u(this, S, ca).call(this);
      if (r && l) {
        u(this, S, Hi).call(this), f(this, at, new AbortController());
        const d = AbortSignal.any([o(this, He).signal, o(this, at).signal]);
        n._on("pagerendered", ({
          pageNumber: c
        }) => {
          l.delete(c), l.size === 0 && f(this, ot, setTimeout(s, 0));
        }, {
          signal: d
        });
        return;
      }
    }
    s();
  }
  refresh(e = !1, t = /* @__PURE__ */ Object.create(null)) {
    if (this.pdfDocument) {
      for (const i of this._pages)
        i.update(t);
      o(this, $e) !== null && (clearTimeout(o(this, $e)), f(this, $e, null)), e || this.update();
    }
  }
};
Be = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), de = new WeakMap(), q = new WeakMap(), st = new WeakMap(), bi = new WeakMap(), Ei = new WeakMap(), wi = new WeakMap(), _i = new WeakMap(), vi = new WeakMap(), yi = new WeakMap(), Pi = new WeakMap(), He = new WeakMap(), rt = new WeakMap(), at = new WeakMap(), ot = new WeakMap(), Lt = new WeakMap(), Ue = new WeakMap(), Tt = new WeakMap(), xi = new WeakMap(), Rt = new WeakMap(), lt = new WeakMap(), $e = new WeakMap(), Si = new WeakMap(), Ct = new WeakMap(), S = new WeakSet(), oa = /* @__PURE__ */ h(function(e) {
  const t = {
    annotationEditorMode: o(this, de),
    annotationMode: o(this, st),
    textLayerMode: o(this, Ct)
  };
  return e && (!e.includes(Ti.COPY) && o(this, Ct) === ue.ENABLE && (t.textLayerMode = ue.ENABLE_PERMISSIONS), e.includes(Ti.MODIFY_CONTENTS) || (t.annotationEditorMode = Y.DISABLE), !e.includes(Ti.MODIFY_ANNOTATIONS) && !e.includes(Ti.FILL_INTERACTIVE_FORMS) && o(this, st) === ye.ENABLE_FORMS && (t.annotationMode = ye.ENABLE)), t;
}, "#initializePermissions"), la = /* @__PURE__ */ h(async function(e) {
  if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
    return;
  const t = Promise.withResolvers(), i = new AbortController();
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && t.resolve();
  }, {
    signal: typeof AbortSignal.any == "function" ? AbortSignal.any([e, i.signal]) : e
  }), await Promise.race([this._onePageRenderedCapability.promise, t.promise]), i.abort();
}, "#onePageRenderedOrForceFetch"), ha = /* @__PURE__ */ h(function(e, t) {
  const i = document.getSelection(), {
    focusNode: n,
    anchorNode: s
  } = i;
  if (s && n && i.containsNode(o(this, Ue))) {
    if (o(this, Lt) || e === ue.ENABLE_PERMISSIONS) {
      Pn(t);
      return;
    }
    f(this, Lt, !0);
    const {
      classList: r
    } = this.viewer;
    r.add("copyAll");
    const l = new AbortController();
    window.addEventListener("keydown", (d) => f(this, Tt, d.key === "Escape"), {
      signal: l.signal
    }), this.getAllText().then(async (d) => {
      d !== null && await navigator.clipboard.writeText(d);
    }).catch((d) => {
      console.warn(`Something goes wrong when extracting the text: ${d.message}`);
    }).finally(() => {
      f(this, Lt, !1), f(this, Tt, !1), l.abort(), r.remove("copyAll");
    }), Pn(t);
  }
}, "#copyCallback"), $t = /* @__PURE__ */ h(function() {
  if (this._scrollMode !== D.PAGE)
    throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
  const e = this._currentPageNumber, t = o(this, lt), i = this.viewer;
  if (i.textContent = "", t.pages.length = 0, this._spreadMode === G.NONE && !this.isInPresentationMode) {
    const n = this._pages[e - 1];
    i.append(n.div), t.pages.push(n);
  } else {
    const n = /* @__PURE__ */ new Set(), s = this._spreadMode - 1;
    s === -1 ? n.add(e - 1) : e % 2 !== s ? (n.add(e - 1), n.add(e)) : (n.add(e - 2), n.add(e - 1));
    const r = document.createElement("div");
    if (r.className = "spread", this.isInPresentationMode) {
      const l = document.createElement("div");
      l.className = "dummyPage", r.append(l);
    }
    for (const l of n) {
      const d = this._pages[l];
      d && (r.append(d.div), t.pages.push(d));
    }
    i.append(r);
  }
  t.scrollDown = e >= t.previousPageNumber, t.previousPageNumber = e;
}, "#ensurePageViewVisible"), Bi = /* @__PURE__ */ h(function(e, t = null) {
  const {
    div: i,
    id: n
  } = e;
  if (this._currentPageNumber !== n && this._setCurrentPageNumber(n), this._scrollMode === D.PAGE && (u(this, S, $t).call(this), this.update()), !t && !this.isInPresentationMode) {
    const s = i.offsetLeft + i.clientLeft, r = s + i.clientWidth, {
      scrollLeft: l,
      clientWidth: d
    } = this.container;
    (this._scrollMode === D.HORIZONTAL || s < l || r > l + d) && (t = {
      left: 0,
      top: 0
    });
  }
  Rr(i, t), !this._currentScaleValue && this._location && (this._location = null);
}, "#scrollIntoView"), da = /* @__PURE__ */ h(function(e) {
  return e === this._currentScale || Math.abs(e - this._currentScale) < 1e-15;
}, "#isSameScale"), ds = /* @__PURE__ */ h(function(e, t, {
  noScroll: i = !1,
  preset: n = !1,
  drawingDelay: s = -1,
  origin: r = null
}) {
  if (this._currentScaleValue = t.toString(), u(this, S, da).call(this, e)) {
    n && this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: e,
      presetValue: t
    });
    return;
  }
  this.viewer.style.setProperty("--scale-factor", e * me.PDF_TO_CSS_UNITS);
  const l = s >= 0 && s < 1e3;
  this.refresh(!0, {
    scale: e,
    drawingDelay: l ? s : -1
  }), l && f(this, $e, setTimeout(() => {
    f(this, $e, null), this.refresh();
  }, s));
  const d = this._currentScale;
  if (this._currentScale = e, !i) {
    let c = this._currentPageNumber, p;
    if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (c = this._location.pageNumber, p = [null, {
      name: "XYZ"
    }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
      pageNumber: c,
      destArray: p,
      allowNegativeOffset: !0
    }), Array.isArray(r)) {
      const E = e / d - 1, [w, A] = this.containerTopLeft;
      this.container.scrollLeft += (r[0] - A) * E, this.container.scrollTop += (r[1] - w) * E;
    }
  }
  this.eventBus.dispatch("scalechanging", {
    source: this,
    scale: e,
    presetValue: n ? t : void 0
  }), this.defaultRenderingQueue && this.update();
}, "#setScaleUpdatePages"), ua = /* @__PURE__ */ h(function() {
  return this._spreadMode !== G.NONE && this._scrollMode !== D.HORIZONTAL ? 2 : 1;
}, "#pageWidthScaleFactor"), xe = /* @__PURE__ */ h(function(e, t) {
  let i = parseFloat(e);
  if (i > 0)
    t.preset = !1, u(this, S, ds).call(this, i, e, t);
  else {
    const n = this._pages[this._currentPageNumber - 1];
    if (!n)
      return;
    let s = Ys, r = qs;
    this.isInPresentationMode ? (s = r = 4, this._spreadMode !== G.NONE && (s *= 2)) : this.removePageBorders ? s = r = 0 : this._scrollMode === D.HORIZONTAL && ([s, r] = [r, s]);
    const l = (this.container.clientWidth - s) / n.width * n.scale / o(this, S, ua), d = (this.container.clientHeight - r) / n.height * n.scale;
    switch (e) {
      case "page-actual":
        i = 1;
        break;
      case "page-width":
        i = l;
        break;
      case "page-height":
        i = d;
        break;
      case "page-fit":
        i = Math.min(l, d);
        break;
      case "auto":
        const c = ir(n) ? l : Math.min(d, l);
        i = Math.min(Pa, c);
        break;
      default:
        console.error(`#setScale: "${e}" is an unknown zoom value.`);
        return;
    }
    t.preset = !0, u(this, S, ds).call(this, i, e, t);
  }
}, "#setScale"), us = /* @__PURE__ */ h(function() {
  const e = this._pages[this._currentPageNumber - 1];
  this.isInPresentationMode && u(this, S, xe).call(this, this._currentScaleValue, {
    noScroll: !0
  }), u(this, S, Bi).call(this, e);
}, "#resetCurrentPageView"), ca = /* @__PURE__ */ h(function() {
  const e = this._getVisiblePages(), t = [], {
    ids: i,
    views: n
  } = e;
  for (const s of n) {
    const {
      view: r
    } = s;
    if (!r.hasEditableAnnotations()) {
      i.delete(r.id);
      continue;
    }
    t.push(s);
  }
  return t.length === 0 ? null : (this.renderingQueue.renderHighestPriority({
    first: t[0],
    last: t.at(-1),
    views: t,
    ids: i
  }), i);
}, "#switchToEditAnnotationMode"), fa = /* @__PURE__ */ h(async function(e) {
  if (e.pdfPage)
    return e.pdfPage;
  try {
    const t = await this.pdfDocument.getPage(e.id);
    return e.pdfPage || e.setPdfPage(t), t;
  } catch (t) {
    return console.error("Unable to get page for page view", t), null;
  }
}, "#ensurePdfPageLoaded"), pa = /* @__PURE__ */ h(function(e) {
  if (e.first?.id === 1)
    return !0;
  if (e.last?.id === this.pagesCount)
    return !1;
  switch (this._scrollMode) {
    case D.PAGE:
      return o(this, lt).scrollDown;
    case D.HORIZONTAL:
      return this.scroll.right;
  }
  return this.scroll.down;
}, "#getScrollAhead"), cs = /* @__PURE__ */ h(function(e = this.container.clientHeight) {
  e !== o(this, xi) && (f(this, xi, e), Ta.setProperty("--viewer-container-height", `${e}px`));
}, "#updateContainerHeightCss"), ga = /* @__PURE__ */ h(function(e) {
  for (const t of e)
    if (t.target === this.container) {
      u(this, S, cs).call(this, Math.floor(t.borderBoxSize[0].blockSize)), f(this, bi, null);
      break;
    }
}, "#resizeObserverCallback"), Hi = /* @__PURE__ */ h(function() {
  o(this, at)?.abort(), f(this, at, null), o(this, ot) !== null && (clearTimeout(o(this, ot)), f(this, ot, null));
}, "#cleanupSwitchAnnotationEditorMode"), h(zs, "PDFViewer");
let Yi = zs;
const Gs = class Gs extends Yi {
  _resetView() {
    super._resetView(), this._scrollMode = D.PAGE, this._spreadMode = G.NONE;
  }
  set scrollMode(e) {
  }
  _updateScrollMode() {
  }
  set spreadMode(e) {
  }
  _updateSpreadMode() {
  }
};
h(Gs, "PDFSinglePageViewer");
let fs = Gs;
var Ml = V.AnnotationLayerBuilder, kl = V.DownloadManager, Ol = V.EventBus, Dl = V.FindState, jl = V.GenericL10n, Fl = V.LinkTarget, Vl = V.PDFFindController, Bl = V.PDFHistory, Hl = V.PDFLinkService, Ul = V.PDFPageView, $l = V.PDFScriptingManager, Wl = V.PDFSinglePageViewer, zl = V.PDFViewer, Gl = V.ProgressBar, Kl = V.RenderingStates, Xl = V.ScrollMode, Zl = V.SimpleLinkService, Ql = V.SpreadMode, Jl = V.StructTreeLayerBuilder, Yl = V.TextLayerBuilder, ql = V.XfaLayerBuilder, eh = V.parseQueryString;
export {
  Ml as AnnotationLayerBuilder,
  kl as DownloadManager,
  Ol as EventBus,
  Dl as FindState,
  jl as GenericL10n,
  Fl as LinkTarget,
  Vl as PDFFindController,
  Bl as PDFHistory,
  Hl as PDFLinkService,
  Ul as PDFPageView,
  $l as PDFScriptingManager,
  Wl as PDFSinglePageViewer,
  zl as PDFViewer,
  Gl as ProgressBar,
  Kl as RenderingStates,
  Xl as ScrollMode,
  Zl as SimpleLinkService,
  Ql as SpreadMode,
  Jl as StructTreeLayerBuilder,
  Yl as TextLayerBuilder,
  ql as XfaLayerBuilder,
  eh as parseQueryString
};
