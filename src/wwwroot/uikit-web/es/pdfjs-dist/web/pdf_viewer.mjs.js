var Zs = Object.defineProperty;
var Qs = (a) => {
  throw TypeError(a);
};
var wa = (a, e, t) => e in a ? Zs(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var h = (a, e) => Zs(a, "name", { value: e, configurable: !0 });
var rn = (a, e, t) => wa(a, typeof e != "symbol" ? e + "" : e, t), an = (a, e, t) => e.has(a) || Qs("Cannot " + t);
var o = (a, e, t) => (an(a, e, "read from private field"), t ? t.call(a) : e.get(a)), b = (a, e, t) => e.has(a) ? Qs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), f = (a, e, t, i) => (an(a, e, "write to private field"), i ? i.call(a, t) : e.set(a, t), t), c = (a, e, t) => (an(a, e, "access private method"), t);
var Js = (a, e, t, i) => ({
  set _(n) {
    f(a, e, n, t);
  },
  get _() {
    return o(a, e, i);
  }
});
var Gt = {};
Gt.d = (a, e) => {
  for (var t in e)
    Gt.o(e, t) && !Gt.o(a, t) && Object.defineProperty(a, t, { enumerable: !0, get: e[t] });
};
Gt.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e);
var H = globalThis.pdfjsViewer = {};
Gt.d(H, {
  AnnotationLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Gi
  ), "AnnotationLayerBuilder"),
  DownloadManager: /* @__PURE__ */ h(() => (
    /* reexport */
    In
  ), "DownloadManager"),
  EventBus: /* @__PURE__ */ h(() => (
    /* reexport */
    Ki
  ), "EventBus"),
  FindState: /* @__PURE__ */ h(() => (
    /* reexport */
    xe
  ), "FindState"),
  GenericL10n: /* @__PURE__ */ h(() => (
    /* reexport */
    Dt
  ), "GenericL10n"),
  LinkTarget: /* @__PURE__ */ h(() => (
    /* reexport */
    ze
  ), "LinkTarget"),
  PDFFindController: /* @__PURE__ */ h(() => (
    /* reexport */
    mn
  ), "PDFFindController"),
  PDFHistory: /* @__PURE__ */ h(() => (
    /* reexport */
    Vn
  ), "PDFHistory"),
  PDFLinkService: /* @__PURE__ */ h(() => (
    /* reexport */
    Wi
  ), "PDFLinkService"),
  PDFPageView: /* @__PURE__ */ h(() => (
    /* reexport */
    qi
  ), "PDFPageView"),
  PDFScriptingManager: /* @__PURE__ */ h(() => (
    /* reexport */
    ls
  ), "PDFScriptingManager"),
  PDFSinglePageViewer: /* @__PURE__ */ h(() => (
    /* reexport */
    ps
  ), "PDFSinglePageViewer"),
  PDFViewer: /* @__PURE__ */ h(() => (
    /* reexport */
    en
  ), "PDFViewer"),
  ProgressBar: /* @__PURE__ */ h(() => (
    /* reexport */
    pn
  ), "ProgressBar"),
  RenderingStates: /* @__PURE__ */ h(() => (
    /* reexport */
    U
  ), "RenderingStates"),
  ScrollMode: /* @__PURE__ */ h(() => (
    /* reexport */
    O
  ), "ScrollMode"),
  SimpleLinkService: /* @__PURE__ */ h(() => (
    /* reexport */
    Qt
  ), "SimpleLinkService"),
  SpreadMode: /* @__PURE__ */ h(() => (
    /* reexport */
    Z
  ), "SpreadMode"),
  StructTreeLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Qi
  ), "StructTreeLayerBuilder"),
  TextLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Ji
  ), "TextLayerBuilder"),
  XfaLayerBuilder: /* @__PURE__ */ h(() => (
    /* reexport */
    Yi
  ), "XfaLayerBuilder"),
  parseQueryString: /* @__PURE__ */ h(() => (
    /* reexport */
    sn
  ), "parseQueryString")
});
const _a = "auto", Rr = 1, Ys = 1.1, ya = 0.1, va = 10, on = 0, Pa = 1.25, qs = 40, er = 5, U = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
}, pt = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
}, ce = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_PERMISSIONS: 2
}, O = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2,
  PAGE: 3
}, Z = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
function Nr(a, e, t = !1) {
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
h(Nr, "scrollIntoView");
function xa(a, e, t = void 0) {
  const i = /* @__PURE__ */ h(function(r) {
    s || (s = window.requestAnimationFrame(/* @__PURE__ */ h(function() {
      s = null;
      const d = a.scrollLeft, u = n.lastX;
      d !== u && (n.right = d > u), n.lastX = d;
      const g = a.scrollTop, E = n.lastY;
      g !== E && (n.down = g > E), n.lastY = g, e(n);
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
  }), t == null || t.addEventListener("abort", () => window.cancelAnimationFrame(s), {
    once: !0
  }), n;
}
h(xa, "watchScroll");
function sn(a) {
  const e = /* @__PURE__ */ new Map();
  for (const [t, i] of new URLSearchParams(a))
    e.set(t.toLowerCase(), i);
  return e;
}
h(sn, "parseQueryString");
const tr = /[\x00-\x1F]/g;
function Kt(a, e = !1) {
  return tr.test(a) ? e ? a.replaceAll(tr, (t) => t === "\0" ? "" : " ") : a.replaceAll("\0", "") : a;
}
h(Kt, "removeNullCharacters");
function Zt(a, e, t = 0) {
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
h(Zt, "binarySearchFirstItem");
function ir(a) {
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
    const u = n + r, g = s + l;
    if (g > t)
      break;
    i <= u / g ? (r = u, l = g) : (n = u, s = g);
  }
  let d;
  return i - n / s < r / l - i ? d = i === a ? [n, s] : [s, n] : d = i === a ? [r, l] : [l, r], d;
}
h(ir, "approximateFraction");
function Li(a, e) {
  return a - a % e;
}
h(Li, "floorToDivide");
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
  function u(M) {
    const v = M.div;
    return v.offsetTop + v.clientTop + v.clientHeight > s;
  }
  h(u, "isElementBottomAfterViewTop");
  function g(M) {
    const v = M.div, C = v.offsetLeft + v.clientLeft, F = C + v.clientWidth;
    return n ? C < d : F > l;
  }
  h(g, "isElementNextAfterViewHorizontally");
  const E = [], w = /* @__PURE__ */ new Set(), L = e.length;
  let I = Zt(e, i ? g : u);
  I > 0 && I < L && !i && (I = Sa(I, e, s));
  let P = i ? d : -1;
  for (let M = I; M < L; M++) {
    const v = e[M], C = v.div, F = C.offsetLeft + C.clientLeft, B = C.offsetTop + C.clientTop, W = C.clientWidth, V = C.clientHeight, p = F + W, _ = B + V;
    if (P === -1)
      _ >= r && (P = _);
    else if ((i ? F : B) > P)
      break;
    if (_ <= s || B >= r || p <= l || F >= d)
      continue;
    const x = Math.max(0, s - B) + Math.max(0, _ - r), j = Math.max(0, l - F) + Math.max(0, p - d), D = (V - x) / V, k = (W - j) / W, z = D * k * 100 | 0;
    E.push({
      id: v.id,
      x: F,
      y: B,
      view: v,
      percent: z,
      widthPercent: k * 100 | 0
    }), w.add(v.id);
  }
  const S = E[0], T = E.at(-1);
  return t && E.sort(function(M, v) {
    const C = M.percent - v.percent;
    return Math.abs(C) > 1e-3 ? -C : M.id - v.id;
  }), {
    first: S,
    last: T,
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
  return Number.isInteger(a) && Object.values(O).includes(a) && a !== O.UNKNOWN;
}
h(Ia, "isValidScrollMode");
function La(a) {
  return Number.isInteger(a) && Object.values(Z).includes(a) && a !== Z.UNKNOWN;
}
h(La, "isValidSpreadMode");
function nr(a) {
  return a.width <= a.height;
}
h(nr, "isPortraitOrientation");
new Promise(function(a) {
  window.requestAnimationFrame(a);
});
const Ta = document.documentElement.style;
function Ra(a, e, t) {
  return Math.min(Math.max(a, e), t);
}
h(Ra, "clamp");
var Ie, Xe, Le, mt, Ze;
const bs = class bs {
  constructor(e) {
    b(this, Ie, null);
    b(this, Xe, null);
    b(this, Le, 0);
    b(this, mt, null);
    b(this, Ze, !0);
    f(this, Ie, e.classList), f(this, mt, e.style);
  }
  get percent() {
    return o(this, Le);
  }
  set percent(e) {
    if (f(this, Le, Ra(e, 0, 100)), isNaN(e)) {
      o(this, Ie).add("indeterminate");
      return;
    }
    o(this, Ie).remove("indeterminate"), o(this, mt).setProperty("--progressBar-percent", `${o(this, Le)}%`);
  }
  setWidth(e) {
    if (!e)
      return;
    const i = e.parentNode.offsetWidth - e.offsetWidth;
    i > 0 && o(this, mt).setProperty("--progressBar-end-offset", `${i}px`);
  }
  setDisableAutoFetch(e = 5e3) {
    o(this, Le) === 100 || isNaN(o(this, Le)) || (o(this, Xe) && clearTimeout(o(this, Xe)), this.show(), f(this, Xe, setTimeout(() => {
      f(this, Xe, null), this.hide();
    }, e)));
  }
  hide() {
    o(this, Ze) && (f(this, Ze, !1), o(this, Ie).add("hidden"));
  }
  show() {
    o(this, Ze) || (f(this, Ze, !0), o(this, Ie).remove("hidden"));
  }
};
Ie = new WeakMap(), Xe = new WeakMap(), Le = new WeakMap(), mt = new WeakMap(), Ze = new WeakMap(), h(bs, "ProgressBar");
let pn = bs;
function Na(a) {
  let e = O.VERTICAL, t = Z.NONE;
  switch (a) {
    case "SinglePage":
      e = O.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      e = O.PAGE;
    case "TwoColumnLeft":
      t = Z.ODD;
      break;
    case "TwoPageRight":
      e = O.PAGE;
    case "TwoColumnRight":
      t = Z.EVEN;
      break;
  }
  return {
    scrollMode: e,
    spreadMode: t
  };
}
h(Na, "apiPageLayoutToViewerModes");
const Ti = function() {
  const a = document.createElement("div");
  return a.style.width = "round(down, calc(1.6666666666666665 * 792px), 1px)", a.style.width === "calc(1320px)" ? Math.fround : (e) => e;
}(), se = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
function Ca(a) {
  return a < 11904;
}
h(Ca, "isAlphabeticalScript");
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
function Ri(a) {
  return Ca(a) ? Ma(a) ? Da(a) ? se.SPACE : ka(a) || Oa(a) || a === 95 ? se.ALPHA_LETTER : se.PUNCT : Ha(a) ? se.THAI_LETTER : a === 160 ? se.SPACE : se.ALPHA_LETTER : ja(a) ? se.HAN_LETTER : Fa(a) ? se.KATAKANA_LETTER : Va(a) ? se.HIRAGANA_LETTER : Ba(a) ? se.HALFWIDTH_KATAKANA_LETTER : se.ALPHA_LETTER;
}
h(Ri, "getCharacterType");
let sr;
function Ua() {
  return sr || (sr = " ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦"), sr;
}
h(Ua, "getNormalizeWithNFKC");
const xe = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
}, $a = 250, Wa = -50, za = -400, rr = {
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
}, ar = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
let or;
const Ga = new RegExp("\\p{M}+", "gu"), Ka = new RegExp("([.*+?^${}()|[\\]\\\\])|(\\p{P})|(\\s+)|(\\p{M})|(\\p{L})", "gu"), Xa = new RegExp("([^\\p{M}])\\p{M}*$", "u"), Za = new RegExp("^\\p{M}*([^\\p{M}])", "u"), Qa = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, lr = /* @__PURE__ */ new Map(), Ja = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", hr = /* @__PURE__ */ new Map();
let ln = null, hn = null;
function dn(a) {
  const e = [];
  let t;
  for (; (t = Qa.exec(a)) !== null; ) {
    let {
      index: P
    } = t;
    for (const S of t[0]) {
      let T = lr.get(S);
      T || (T = S.normalize("NFD").length, lr.set(S, T)), e.push([T, P++]);
    }
  }
  let i;
  if (e.length === 0 && ln)
    i = ln;
  else if (e.length > 0 && hn)
    i = hn;
  else {
    const P = Object.keys(rr).join(""), S = Ua(), C = `([${P}])|([${S}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\p{Ll}-\\n\\p{Lu})|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
    e.length === 0 ? i = ln = new RegExp(C + "|(\\u0000)", "gum") : i = hn = new RegExp(C + `|(${Ja})`, "gum");
  }
  const n = [];
  for (; (t = Ga.exec(a)) !== null; )
    n.push([t[0].length, t.index]);
  let s = a.normalize("NFD");
  const r = [0, 0];
  let l = 0, d = 0, u = 0, g = 0, E = 0, w = !1;
  s = s.replace(i, (P, S, T, M, v, C, F, B, W, V, p) => {
    var _, x, j;
    if (p -= g, S) {
      const D = rr[S], k = D.length;
      for (let z = 1; z < k; z++)
        r.push(p - u + z, u - z);
      return u -= k - 1, D;
    }
    if (T) {
      let D = hr.get(T);
      D || (D = T.normalize("NFKC"), hr.set(T, D));
      const k = D.length;
      for (let z = 1; z < k; z++)
        r.push(p - u + z, u - z);
      return u -= k - 1, D;
    }
    if (M)
      return w = !0, p + E === ((_ = n[l]) == null ? void 0 : _[1]) ? ++l : (r.push(p - 1 - u + 1, u - 1), u -= 1, g += 1), r.push(p - u + 1, u), g += 1, E += 1, M.charAt(0);
    if (v) {
      const D = v.endsWith(`
`), k = D ? v.length - 2 : v.length;
      w = !0;
      let z = k;
      p + E === ((x = n[l]) == null ? void 0 : x[1]) && (z -= n[l][0], ++l);
      for (let ut = 1; ut <= z; ut++)
        r.push(p - 1 - u + ut, u - ut);
      return u -= z, g += z, D ? (p += k - 1, r.push(p - u + 1, 1 + u), u += 1, g += 1, E += 1, v.slice(0, k)) : v;
    }
    if (C)
      return g += 1, E += 1, C.replace(`
`, "");
    if (F) {
      const D = F.length - 2;
      return r.push(p - u + D, 1 + u), u += 1, g += 1, E += 1, F.slice(0, -2);
    }
    if (B) {
      const D = B.length - 1;
      return r.push(p - u + D, u), g += 1, E += 1, B.slice(0, -1);
    }
    if (W)
      return r.push(p - u + 1, u - 1), u -= 1, g += 1, E += 1, " ";
    if (p + E === ((j = e[d]) == null ? void 0 : j[1])) {
      const D = e[d][0] - 1;
      ++d;
      for (let k = 1; k <= D; k++)
        r.push(p - (u - k), u - k);
      u -= D, g += D;
    }
    return V;
  }), r.push(s.length, u);
  const L = new Uint32Array(r.length >> 1), I = new Int32Array(r.length >> 1);
  for (let P = 0, S = r.length; P < S; P += 2)
    L[P >> 1] = r[P], I[P >> 1] = r[P + 1];
  return [s, [L, I], w];
}
h(dn, "normalize");
function Ya(a, e, t) {
  if (!a)
    return [e, t];
  const [i, n] = a, s = e, r = e + t - 1;
  let l = Zt(i, (w) => w >= s);
  i[l] > s && --l;
  let d = Zt(i, (w) => w >= r, l);
  i[d] > r && --d;
  const u = s + n[l], E = r + n[d] + 1 - u;
  return [u, E];
}
h(Ya, "getOriginalIndex");
var K, bt, Qe, y, Mr, bn, En, kr, Or, wn, Dr, jr, ki, Bt, ct, Fr, _n, yn, Oi, Vr, vn, Pn, Ht;
const Es = class Es {
  constructor({
    linkService: e,
    eventBus: t,
    updateMatchesCountOnProgress: i = !0
  }) {
    b(this, y);
    b(this, K, null);
    b(this, bt, !0);
    b(this, Qe, 0);
    this._linkService = e, this._eventBus = t, f(this, bt, i), this.onIsPageVisible = null, c(this, y, bn).call(this), t._on("find", c(this, y, Mr).bind(this)), t._on("findbarclose", c(this, y, Vr).bind(this));
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
    return o(this, K);
  }
  setDocument(e) {
    this._pdfDocument && c(this, y, bn).call(this), e && (this._pdfDocument = e, this._firstPageCapability.resolve());
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
    Nr(e, s, !0);
  }
  match(e, t, i) {
    const n = this._hasDiacritics[i];
    let s = !1;
    if (typeof e == "string" ? [s, e] = c(this, y, wn).call(this, e, n) : e = e.sort().reverse().map((E) => {
      const [w, L] = c(this, y, wn).call(this, E, n);
      return s || (s = w), `(${L})`;
    }).join("|"), !e)
      return;
    const {
      caseSensitive: r,
      entireWord: l
    } = o(this, K), d = `g${s ? "u" : ""}${r ? "" : "i"}`;
    e = new RegExp(e, d);
    const u = [];
    let g;
    for (; (g = e.exec(t)) !== null; )
      l && !c(this, y, Or).call(this, t, g.index, g[0].length) || u.push({
        index: g.index,
        length: g[0].length
      });
    return u;
  }
};
K = new WeakMap(), bt = new WeakMap(), Qe = new WeakMap(), y = new WeakSet(), Mr = /* @__PURE__ */ h(function(e) {
  if (!e)
    return;
  const t = this._pdfDocument, {
    type: i
  } = e;
  (o(this, K) === null || c(this, y, kr).call(this, e)) && (this._dirtyMatch = !0), f(this, K, e), i !== "highlightallchange" && c(this, y, Ht).call(this, xe.PENDING), this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || t && this._pdfDocument !== t)
      return;
    c(this, y, jr).call(this);
    const n = !this._highlightMatches, s = !!this._findTimeout;
    this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), i ? this._dirtyMatch ? c(this, y, ct).call(this) : i === "again" ? (c(this, y, ct).call(this), n && o(this, K).highlightAll && c(this, y, Bt).call(this)) : i === "highlightallchange" ? (s ? c(this, y, ct).call(this) : this._highlightMatches = !0, c(this, y, Bt).call(this)) : c(this, y, ct).call(this) : this._findTimeout = setTimeout(() => {
      c(this, y, ct).call(this), this._findTimeout = null;
    }, $a);
  });
}, "#onFind"), bn = /* @__PURE__ */ h(function() {
  this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], f(this, Qe, 0), f(this, K, null), this._selected = {
    pageIdx: -1,
    matchIdx: -1
  }, this._offset = {
    pageIdx: null,
    matchIdx: null,
    wrapped: !1
  }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = Promise.withResolvers();
}, "#reset"), En = /* @__PURE__ */ h(function() {
  const {
    query: e
  } = o(this, K);
  return typeof e == "string" ? (e !== this._rawQuery && (this._rawQuery = e, [this._normalizedQuery] = dn(e)), this._normalizedQuery) : (e || []).filter((t) => !!t).map((t) => dn(t)[0]);
}, "#query"), kr = /* @__PURE__ */ h(function(e) {
  var r;
  const t = e.query, i = o(this, K).query, n = typeof t;
  if (n !== typeof i)
    return !0;
  if (n === "string") {
    if (t !== i)
      return !0;
  } else if (JSON.stringify(t) !== JSON.stringify(i))
    return !0;
  switch (e.type) {
    case "again":
      const l = this._selected.pageIdx + 1, d = this._linkService;
      return l >= 1 && l <= d.pagesCount && l !== d.page && !(((r = this.onIsPageVisible) == null ? void 0 : r.call(this, l)) ?? !0);
    case "highlightallchange":
      return !1;
  }
  return !0;
}, "#shouldDirtyMatch"), Or = /* @__PURE__ */ h(function(e, t, i) {
  let n = e.slice(0, t).match(Xa);
  if (n) {
    const s = e.charCodeAt(t), r = n[1].charCodeAt(0);
    if (Ri(s) === Ri(r))
      return !1;
  }
  if (n = e.slice(t + i).match(Za), n) {
    const s = e.charCodeAt(t + i - 1), r = n[1].charCodeAt(0);
    if (Ri(s) === Ri(r))
      return !1;
  }
  return !0;
}, "#isEntireWord"), wn = /* @__PURE__ */ h(function(e, t) {
  const {
    matchDiacritics: i
  } = o(this, K);
  let n = !1;
  e = e.replaceAll(Ka, (r, l, d, u, g, E) => l ? `[ ]*\\${l}[ ]*` : d ? `[ ]*${d}[ ]*` : u ? "[ ]+" : i ? g || E : g ? ar.has(g.charCodeAt(0)) ? g : "" : t ? (n = !0, `${E}\\p{M}*`) : E);
  const s = "[ ]*";
  return e.endsWith(s) && (e = e.slice(0, e.length - s.length)), i && t && (or || (or = String.fromCharCode(...ar)), n = !0, e = `${e}(?=[${or}]|[^\\p{M}]|$)`), [n, e];
}, "#convertToRegExpString"), Dr = /* @__PURE__ */ h(function(e) {
  const t = o(this, y, En);
  if (t.length === 0)
    return;
  const i = this._pageContents[e], n = this.match(t, i, e), s = this._pageMatches[e] = [], r = this._pageMatchesLength[e] = [], l = this._pageDiffs[e];
  n == null || n.forEach(({
    index: u,
    length: g
  }) => {
    const [E, w] = Ya(l, u, g);
    w && (s.push(E), r.push(w));
  }), o(this, K).highlightAll && c(this, y, ki).call(this, e), this._resumePageIdx === e && (this._resumePageIdx = null, c(this, y, _n).call(this));
  const d = s.length;
  this._matchesCountTotal += d, o(this, bt) ? d > 0 && c(this, y, Pn).call(this) : ++Js(this, Qe)._ === this._linkService.pagesCount && c(this, y, Pn).call(this);
}, "#calculateMatch"), jr = /* @__PURE__ */ h(function() {
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
      for (const u of l.items)
        d.push(u.str), u.hasEOL && d.push(`
`);
      [this._pageContents[i], this._pageDiffs[i], this._hasDiacritics[i]] = dn(d.join("")), r();
    }, (l) => {
      console.error(`Unable to get text content for page ${i + 1}`, l), this._pageContents[i] = "", this._pageDiffs[i] = null, this._hasDiacritics[i] = !1, r();
    }));
  }
}, "#extractText"), ki = /* @__PURE__ */ h(function(e) {
  this._scrollMatches && this._selected.pageIdx === e && (this._linkService.page = e + 1), this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: e
  });
}, "#updatePage"), Bt = /* @__PURE__ */ h(function() {
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: -1
  });
}, "#updateAllPages"), ct = /* @__PURE__ */ h(function() {
  const e = o(this, K).findPrevious, t = this._linkService.page - 1, i = this._linkService.pagesCount;
  if (this._highlightMatches = !0, this._dirtyMatch) {
    this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = t, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, f(this, Qe, 0), this._matchesCountTotal = 0, c(this, y, Bt).call(this);
    for (let r = 0; r < i; r++)
      this._pendingFindMatches.has(r) || (this._pendingFindMatches.add(r), this._extractTextPromises[r].then(() => {
        this._pendingFindMatches.delete(r), c(this, y, Dr).call(this, r);
      }));
  }
  if (o(this, y, En).length === 0) {
    c(this, y, Ht).call(this, xe.FOUND);
    return;
  }
  if (this._resumePageIdx)
    return;
  const s = this._offset;
  if (this._pagesToSearch = i, s.matchIdx !== null) {
    const r = this._pageMatches[s.pageIdx].length;
    if (!e && s.matchIdx + 1 < r || e && s.matchIdx > 0) {
      s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, c(this, y, Oi).call(this, !0);
      return;
    }
    c(this, y, yn).call(this, e);
  }
  c(this, y, _n).call(this);
}, "#nextMatch"), Fr = /* @__PURE__ */ h(function(e) {
  const t = this._offset, i = e.length, n = o(this, K).findPrevious;
  return i ? (t.matchIdx = n ? i - 1 : 0, c(this, y, Oi).call(this, !0), !0) : (c(this, y, yn).call(this, n), t.wrapped && (t.matchIdx = null, this._pagesToSearch < 0) ? (c(this, y, Oi).call(this, !1), !0) : !1);
}, "#matchesReady"), _n = /* @__PURE__ */ h(function() {
  this._resumePageIdx !== null && console.error("There can only be one pending page.");
  let e = null;
  do {
    const t = this._offset.pageIdx;
    if (e = this._pageMatches[t], !e) {
      this._resumePageIdx = t;
      break;
    }
  } while (!c(this, y, Fr).call(this, e));
}, "#nextPageMatch"), yn = /* @__PURE__ */ h(function(e) {
  const t = this._offset, i = this._linkService.pagesCount;
  t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this._pagesToSearch--, (t.pageIdx >= i || t.pageIdx < 0) && (t.pageIdx = e ? i - 1 : 0, t.wrapped = !0);
}, "#advanceOffsetPage"), Oi = /* @__PURE__ */ h(function(e = !1) {
  let t = xe.NOT_FOUND;
  const i = this._offset.wrapped;
  if (this._offset.wrapped = !1, e) {
    const n = this._selected.pageIdx;
    this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, t = i ? xe.WRAPPED : xe.FOUND, n !== -1 && n !== this._selected.pageIdx && c(this, y, ki).call(this, n);
  }
  c(this, y, Ht).call(this, t, o(this, K).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, c(this, y, ki).call(this, this._selected.pageIdx));
}, "#updateMatch"), Vr = /* @__PURE__ */ h(function(e) {
  const t = this._pdfDocument;
  this._firstPageCapability.promise.then(() => {
    !this._pdfDocument || t && this._pdfDocument !== t || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), c(this, y, Ht).call(this, xe.FOUND), this._highlightMatches = !1, c(this, y, Bt).call(this));
  });
}, "#onFindBarClose"), vn = /* @__PURE__ */ h(function() {
  var s;
  const {
    pageIdx: e,
    matchIdx: t
  } = this._selected;
  let i = 0, n = this._matchesCountTotal;
  if (t !== -1) {
    for (let r = 0; r < e; r++)
      i += ((s = this._pageMatches[r]) == null ? void 0 : s.length) || 0;
    i += t + 1;
  }
  return (i < 1 || i > n) && (i = n = 0), {
    current: i,
    total: n
  };
}, "#requestMatchesCount"), Pn = /* @__PURE__ */ h(function() {
  this._eventBus.dispatch("updatefindmatchescount", {
    source: this,
    matchesCount: c(this, y, vn).call(this)
  });
}, "#updateUIResultsCount"), Ht = /* @__PURE__ */ h(function(e, t = !1) {
  var i, n;
  !o(this, bt) && (o(this, Qe) !== this._linkService.pagesCount || e === xe.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
    source: this,
    state: e,
    previous: t,
    entireWord: ((i = o(this, K)) == null ? void 0 : i.entireWord) ?? null,
    matchesCount: c(this, y, vn).call(this),
    rawQuery: ((n = o(this, K)) == null ? void 0 : n.query) ?? null
  });
}, "#updateUIState"), h(Es, "PDFFindController");
let mn = Es;
const qa = "noopener noreferrer nofollow", ze = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
var tn, Br;
const Xt = class Xt {
  constructor({
    eventBus: e,
    externalLinkTarget: t = null,
    externalLinkRel: i = null,
    ignoreDestinationZoom: n = !1
  } = {}) {
    rn(this, "externalLinkEnabled", !0);
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
    const n = i ? ze.BLANK : this.externalLinkTarget, s = this.externalLinkRel;
    this.externalLinkEnabled ? e.href = e.title = t : (e.href = "", e.title = `Disabled: ${t}`, e.onclick = () => !1);
    let r = "";
    switch (n) {
      case ze.NONE:
        break;
      case ze.SELF:
        r = "_self";
        break;
      case ze.BLANK:
        r = "_blank";
        break;
      case ze.PARENT:
        r = "_parent";
        break;
      case ze.TOP:
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
      const s = sn(e);
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
    if (typeof i == "string" || c(n = Xt, tn, Br).call(n, i)) {
      this.goToDestination(i);
      return;
    }
    console.error(`PDFLinkService.setHash: "${unescape(e)}" is not a valid destination.`);
  }
  executeNamedAction(e) {
    var t, i;
    if (this.pdfDocument) {
      switch (e) {
        case "GoBack":
          (t = this.pdfHistory) == null || t.back();
          break;
        case "GoForward":
          (i = this.pdfHistory) == null || i.forward();
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
tn = new WeakSet(), Br = /* @__PURE__ */ h(function(e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [t, i, ...n] = e;
  if (!(typeof t == "object" && Number.isInteger(t == null ? void 0 : t.num) && Number.isInteger(t == null ? void 0 : t.gen)) && !Number.isInteger(t) || !(typeof i == "object" && typeof (i == null ? void 0 : i.name) == "string"))
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
}, "#isValidExplicitDest"), b(Xt, tn), h(Xt, "PDFLinkService");
let Wi = Xt;
const ws = class ws extends Wi {
  setDocument(e, t = null) {
  }
};
h(ws, "SimpleLinkService");
let Qt = ws;
const {
  AbortException: eo,
  AnnotationEditorLayer: to,
  AnnotationEditorParamsType: dl,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: io,
  AnnotationLayer: no,
  AnnotationMode: Pe,
  build: ul,
  ColorPicker: cl,
  createValidAbsoluteUrl: so,
  DOMSVGFactory: fl,
  DrawLayer: ro,
  FeatureTest: gl,
  fetchData: dr,
  getDocument: pl,
  getFilenameFromUrl: ml,
  getPdfFilenameFromUrl: ao,
  getXfaPageViewport: bl,
  GlobalWorkerOptions: El,
  ImageKind: wl,
  InvalidPDFException: _l,
  isDataScheme: yl,
  isPdfFile: oo,
  MissingPDFException: vl,
  noContextMenu: Pl,
  normalizeUnicode: lo,
  OPS: xl,
  OutputScale: ho,
  PasswordResponses: Sl,
  PDFDataRangeTransport: Al,
  PDFDateString: Il,
  PDFWorker: Ll,
  PermissionFlag: Ni,
  PixelsPerInch: be,
  RenderingCancelledException: xn,
  setLayerDimensions: uo,
  shadow: zi,
  stopEvent: Sn,
  TextLayer: co,
  TouchManager: Tl,
  UnexpectedResponseException: Rl,
  Util: Nl,
  VerbosityLevel: Cl,
  version: ur,
  XfaLayer: un
} = globalThis.pdfjsLib;
var Yt, Te, qt, An;
const _s = class _s {
  constructor({
    pdfPage: e,
    linkService: t,
    downloadManager: i,
    annotationStorage: n = null,
    imageResourcesPath: s = "",
    renderForms: r = !0,
    enableScripting: l = !1,
    hasJSActionsPromise: d = null,
    fieldObjectsPromise: u = null,
    annotationCanvasMap: g = null,
    accessibilityManager: E = null,
    annotationEditorUIManager: w = null,
    onAppend: L = null
  }) {
    b(this, qt);
    b(this, Yt, null);
    b(this, Te, null);
    this.pdfPage = e, this.linkService = t, this.downloadManager = i, this.imageResourcesPath = s, this.renderForms = r, this.annotationStorage = n, this.enableScripting = l, this._hasJSActionsPromise = d || Promise.resolve(!1), this._fieldObjectsPromise = u || Promise.resolve(null), this._annotationCanvasMap = g, this._accessibilityManager = E, this._annotationEditorUIManager = w, f(this, Yt, L), this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = t.eventBus;
  }
  async render(e, t, i = "display") {
    var d, u;
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
    if (l.className = "annotationLayer", (d = o(this, Yt)) == null || d.call(this, l), n.length === 0) {
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
      structTreeLayer: (t == null ? void 0 : t.structTreeLayer) || null
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
    }), this.linkService.isInPresentationMode && c(this, qt, An).call(this, pt.FULLSCREEN), o(this, Te) || (f(this, Te, new AbortController()), (u = this._eventBus) == null || u._on("presentationmodechanged", (g) => {
      c(this, qt, An).call(this, g.state);
    }, {
      signal: o(this, Te).signal
    }));
  }
  cancel() {
    var e;
    this._cancelled = !0, (e = o(this, Te)) == null || e.abort(), f(this, Te, null);
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
  hasEditableAnnotations() {
    var e;
    return !!((e = this.annotationLayer) != null && e.hasEditableAnnotations());
  }
};
Yt = new WeakMap(), Te = new WeakMap(), qt = new WeakSet(), An = /* @__PURE__ */ h(function(e) {
  if (!this.div)
    return;
  let t = !1;
  switch (e) {
    case pt.FULLSCREEN:
      t = !0;
      break;
    case pt.NORMAL:
      break;
    default:
      return;
  }
  for (const i of this.div.childNodes)
    i.hasAttribute("data-internal-link") || (i.inert = t);
}, "#updatePresentationModeState"), h(_s, "AnnotationLayerBuilder");
let Gi = _s;
function cr(a, e) {
  const t = document.createElement("a");
  if (!t.click)
    throw new Error('DownloadManager: "a.click()" is not supported.');
  t.href = a, t.target = "_parent", "download" in t && (t.download = e), (document.body || document.documentElement).append(t), t.click(), t.remove();
}
h(cr, "download");
var ms;
const ys = class ys {
  constructor() {
    b(this, ms, /* @__PURE__ */ new WeakMap());
  }
  downloadData(e, t, i) {
    const n = URL.createObjectURL(new Blob([e], {
      type: i
    }));
    cr(n, t);
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
    cr(n, i);
  }
};
ms = new WeakMap(), h(ys, "DownloadManager");
let In = ys;
const fr = {
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
  function r(u) {
    s.abort(), clearTimeout(d), n(u);
  }
  h(r, "handler");
  const l = a instanceof Ki ? "_on" : "addEventListener";
  a[l](e, r.bind(null, fr.EVENT), {
    signal: s.signal
  });
  const d = setTimeout(r.bind(null, fr.TIMEOUT), t);
  return i;
}
h(fo, "waitOnEventOrTimeout");
var Et;
const vs = class vs {
  constructor() {
    b(this, Et, /* @__PURE__ */ Object.create(null));
  }
  on(e, t, i = null) {
    this._on(e, t, {
      external: !0,
      once: i == null ? void 0 : i.once,
      signal: i == null ? void 0 : i.signal
    });
  }
  off(e, t, i = null) {
    this._off(e, t);
  }
  dispatch(e, t) {
    const i = o(this, Et)[e];
    if (!i || i.length === 0)
      return;
    let n;
    for (const {
      listener: s,
      external: r,
      once: l
    } of i.slice(0)) {
      if (l && this._off(e, s), r) {
        (n || (n = [])).push(s);
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
    var r;
    let n = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: l
      } = i;
      if (l.aborted) {
        console.error("Cannot use an `aborted` signal.");
        return;
      }
      const d = /* @__PURE__ */ h(() => this._off(e, t), "onAbort");
      n = /* @__PURE__ */ h(() => l.removeEventListener("abort", d), "rmAbort"), l.addEventListener("abort", d);
    }
    ((r = o(this, Et))[e] || (r[e] = [])).push({
      listener: t,
      external: (i == null ? void 0 : i.external) === !0,
      once: (i == null ? void 0 : i.once) === !0,
      rmAbort: n
    });
  }
  _off(e, t, i = null) {
    var s;
    const n = o(this, Et)[e];
    if (n)
      for (let r = 0, l = n.length; r < l; r++) {
        const d = n[r];
        if (d.listener === t) {
          (s = d.rmAbort) == null || s.call(d), n.splice(r, 1);
          return;
        }
      }
  }
};
Et = new WeakMap(), h(vs, "EventBus");
let Ki = vs;
const Ps = class Ps {
  constructor(e) {
    this.value = e;
  }
  valueOf() {
    return this.value;
  }
};
h(Ps, "FluentType");
let kt = Ps;
const xs = class xs extends kt {
  constructor(e = "???") {
    super(e);
  }
  toString(e) {
    return `{${this.value}}`;
  }
};
h(xs, "FluentNone");
let $ = xs;
const Ss = class Ss extends kt {
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
h(Ss, "FluentNumber");
let oe = Ss;
const As = class As extends kt {
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
h(As, "FluentDateTime");
let dt = As;
const gr = 100, go = "⁨", po = "⁩";
function mo(a, e, t) {
  if (t === e || t instanceof oe && e instanceof oe && t.value === e.value)
    return !0;
  if (e instanceof oe && typeof t == "string") {
    let i = a.memoizeIntlObject(Intl.PluralRules, e.opts).select(e.value);
    if (t === i)
      return !0;
  }
  return !1;
}
h(mo, "match");
function pr(a, e, t) {
  return e[t] ? Ot(a, e[t].value) : (a.reportError(new RangeError("No default")), new $());
}
h(pr, "getDefault");
function Ln(a, e) {
  const t = [], i = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    n.type === "narg" ? i[n.name] = Jt(a, n.value) : t.push(Jt(a, n));
  return {
    positional: t,
    named: i
  };
}
h(Ln, "getArguments");
function Jt(a, e) {
  switch (e.type) {
    case "str":
      return e.value;
    case "num":
      return new oe(e.value, {
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
      return yo(a, e);
    default:
      return new $();
  }
}
h(Jt, "resolveExpression");
function bo(a, {
  name: e
}) {
  let t;
  if (a.params)
    if (Object.prototype.hasOwnProperty.call(a.params, e))
      t = a.params[e];
    else
      return new $(`$${e}`);
  else if (a.args && Object.prototype.hasOwnProperty.call(a.args, e))
    t = a.args[e];
  else
    return a.reportError(new ReferenceError(`Unknown variable: $${e}`)), new $(`$${e}`);
  if (t instanceof kt)
    return t;
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return new oe(t);
    case "object":
      if (t instanceof Date)
        return new dt(t.getTime());
    default:
      return a.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)), new $(`$${e}`);
  }
}
h(bo, "resolveVariableReference");
function Eo(a, {
  name: e,
  attr: t
}) {
  const i = a.bundle._messages.get(e);
  if (!i)
    return a.reportError(new ReferenceError(`Unknown message: ${e}`)), new $(e);
  if (t) {
    const n = i.attributes[t];
    return n ? Ot(a, n) : (a.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new $(`${e}.${t}`));
  }
  return i.value ? Ot(a, i.value) : (a.reportError(new ReferenceError(`No value: ${e}`)), new $(e));
}
h(Eo, "resolveMessageReference");
function wo(a, {
  name: e,
  attr: t,
  args: i
}) {
  const n = `-${e}`, s = a.bundle._terms.get(n);
  if (!s)
    return a.reportError(new ReferenceError(`Unknown term: ${n}`)), new $(n);
  if (t) {
    const l = s.attributes[t];
    if (l) {
      a.params = Ln(a, i).named;
      const d = Ot(a, l);
      return a.params = null, d;
    }
    return a.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new $(`${n}.${t}`);
  }
  a.params = Ln(a, i).named;
  const r = Ot(a, s.value);
  return a.params = null, r;
}
h(wo, "resolveTermReference");
function _o(a, {
  name: e,
  args: t
}) {
  let i = a.bundle._functions[e];
  if (!i)
    return a.reportError(new ReferenceError(`Unknown function: ${e}()`)), new $(`${e}()`);
  if (typeof i != "function")
    return a.reportError(new TypeError(`Function ${e}() is not callable`)), new $(`${e}()`);
  try {
    let n = Ln(a, t);
    return i(n.positional, n.named);
  } catch (n) {
    return a.reportError(n), new $(`${e}()`);
  }
}
h(_o, "resolveFunctionReference");
function yo(a, {
  selector: e,
  variants: t,
  star: i
}) {
  let n = Jt(a, e);
  if (n instanceof $)
    return pr(a, t, i);
  for (const s of t) {
    const r = Jt(a, s.key);
    if (mo(a, n, r))
      return Ot(a, s.value);
  }
  return pr(a, t, i);
}
h(yo, "resolveSelectExpression");
function Hr(a, e) {
  if (a.dirty.has(e))
    return a.reportError(new RangeError("Cyclic reference")), new $();
  a.dirty.add(e);
  const t = [], i = a.bundle._useIsolating && e.length > 1;
  for (const n of e) {
    if (typeof n == "string") {
      t.push(a.bundle._transform(n));
      continue;
    }
    if (a.placeables++, a.placeables > gr)
      throw a.dirty.delete(e), new RangeError(`Too many placeables expanded: ${a.placeables}, max allowed is ${gr}`);
    i && t.push(go), t.push(Jt(a, n).toString(a)), i && t.push(po);
  }
  return a.dirty.delete(e), t.join("");
}
h(Hr, "resolveComplexPattern");
function Ot(a, e) {
  return typeof e == "string" ? a.bundle._transform(e) : Hr(a, e);
}
h(Ot, "resolvePattern");
const Is = class Is {
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
h(Is, "Scope");
let Tn = Is;
function Xi(a, e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [i, n] of Object.entries(a))
    e.includes(i) && (t[i] = n.valueOf());
  return t;
}
h(Xi, "values");
const mr = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
function vo(a, e) {
  let t = a[0];
  if (t instanceof $)
    return new $(`NUMBER(${t.valueOf()})`);
  if (t instanceof oe)
    return new oe(t.valueOf(), {
      ...t.opts,
      ...Xi(e, mr)
    });
  if (t instanceof dt)
    return new oe(t.valueOf(), {
      ...Xi(e, mr)
    });
  throw new TypeError("Invalid argument to NUMBER");
}
h(vo, "NUMBER");
const br = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
function Po(a, e) {
  let t = a[0];
  if (t instanceof $)
    return new $(`DATETIME(${t.valueOf()})`);
  if (t instanceof dt)
    return new dt(t.valueOf(), {
      ...t.opts,
      ...Xi(e, br)
    });
  if (t instanceof oe)
    return new dt(t.valueOf(), {
      ...Xi(e, br)
    });
  throw new TypeError("Invalid argument to DATETIME");
}
h(Po, "DATETIME");
const Er = /* @__PURE__ */ new Map();
function xo(a) {
  const e = Array.isArray(a) ? a.join(" ") : a;
  let t = Er.get(e);
  return t === void 0 && (t = /* @__PURE__ */ new Map(), Er.set(e, t)), t;
}
h(xo, "getMemoizerForLocale");
const Ls = class Ls {
  constructor(e, {
    functions: t,
    useIsolating: i = !0,
    transform: n = /* @__PURE__ */ h((s) => s, "transform")
  } = {}) {
    this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
      NUMBER: vo,
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
    let n = new Tn(this, i, t);
    try {
      return Hr(n, e).toString(n);
    } catch (s) {
      if (n.errors && s instanceof Error)
        return n.errors.push(s), new $().toString(n);
      throw s;
    }
  }
};
h(Ls, "FluentBundle");
let Rn = Ls;
const cn = /^(-?[a-zA-Z][\w-]*) *= */gm, wr = /\.([a-zA-Z][\w-]*) *= */y, So = /\*?\[/y, fn = /(-?[0-9]+(?:\.([0-9]+))?)/y, Ao = /([a-zA-Z][\w-]*)/y, _r = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y, Io = /^[A-Z][A-Z0-9_-]*$/, Ci = /([^{}\n\r]+)/y, Lo = /([^\\"\n\r]*)/y, yr = /\\([\\"])/y, vr = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y, To = /^\n+/, Pr = / +$/, Ro = / *\r?\n/g, No = /( *)$/, Co = /{\s*/y, xr = /\s*}/y, Mo = /\[\s*/y, ko = /\s*] */y, Oo = /\s*\(\s*/y, Do = /\s*->\s*/y, jo = /\s*:\s*/y, Fo = /\s*,?\s*/y, Vo = /\s+/y, Ts = class Ts {
  constructor(e) {
    this.body = [], cn.lastIndex = 0;
    let t = 0;
    for (; ; ) {
      let p = cn.exec(e);
      if (p === null)
        break;
      t = cn.lastIndex;
      try {
        this.body.push(d(p[1]));
      } catch (_) {
        if (_ instanceof SyntaxError)
          continue;
        throw _;
      }
    }
    function i(p) {
      return p.lastIndex = t, p.test(e);
    }
    h(i, "test");
    function n(p, _) {
      if (e[t] === p)
        return t++, !0;
      if (_)
        throw new _(`Expected ${p}`);
      return !1;
    }
    h(n, "consumeChar");
    function s(p, _) {
      if (i(p))
        return t = p.lastIndex, !0;
      if (_)
        throw new _(`Expected ${p.toString()}`);
      return !1;
    }
    h(s, "consumeToken");
    function r(p) {
      p.lastIndex = t;
      let _ = p.exec(e);
      if (_ === null)
        throw new SyntaxError(`Expected ${p.toString()}`);
      return t = p.lastIndex, _;
    }
    h(r, "match");
    function l(p) {
      return r(p)[1];
    }
    h(l, "match1");
    function d(p) {
      let _ = g(), x = u();
      if (_ === null && Object.keys(x).length === 0)
        throw new SyntaxError("Expected message value or attributes");
      return {
        id: p,
        value: _,
        attributes: x
      };
    }
    h(d, "parseMessage");
    function u() {
      let p = /* @__PURE__ */ Object.create(null);
      for (; i(wr); ) {
        let _ = l(wr), x = g();
        if (x === null)
          throw new SyntaxError("Expected attribute value");
        p[_] = x;
      }
      return p;
    }
    h(u, "parseAttributes");
    function g() {
      let p;
      if (i(Ci) && (p = l(Ci)), e[t] === "{" || e[t] === "}")
        return E(p ? [p] : [], 1 / 0);
      let _ = B();
      return _ ? p ? E([p, _], _.length) : (_.value = W(_.value, To), E([_], _.length)) : p ? W(p, Pr) : null;
    }
    h(g, "parsePattern");
    function E(p = [], _) {
      for (; ; ) {
        if (i(Ci)) {
          p.push(l(Ci));
          continue;
        }
        if (e[t] === "{") {
          p.push(w());
          continue;
        }
        if (e[t] === "}")
          throw new SyntaxError("Unbalanced closing brace");
        let k = B();
        if (k) {
          p.push(k), _ = Math.min(_, k.length);
          continue;
        }
        break;
      }
      let x = p.length - 1, j = p[x];
      typeof j == "string" && (p[x] = W(j, Pr));
      let D = [];
      for (let k of p)
        k instanceof Zi && (k = k.value.slice(0, k.value.length - _)), k && D.push(k);
      return D;
    }
    h(E, "parsePatternElements");
    function w() {
      s(Co, SyntaxError);
      let p = L();
      if (s(xr))
        return p;
      if (s(Do)) {
        let _ = S();
        return s(xr, SyntaxError), {
          type: "select",
          selector: p,
          ..._
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    h(w, "parsePlaceable");
    function L() {
      if (e[t] === "{")
        return w();
      if (i(_r)) {
        let [, p, _, x = null] = r(_r);
        if (p === "$")
          return {
            type: "var",
            name: _
          };
        if (s(Oo)) {
          let j = I();
          if (p === "-")
            return {
              type: "term",
              name: _,
              attr: x,
              args: j
            };
          if (Io.test(_))
            return {
              type: "func",
              name: _,
              args: j
            };
          throw new SyntaxError("Function names must be all upper-case");
        }
        return p === "-" ? {
          type: "term",
          name: _,
          attr: x,
          args: []
        } : {
          type: "mesg",
          name: _,
          attr: x
        };
      }
      return M();
    }
    h(L, "parseInlineExpression");
    function I() {
      let p = [];
      for (; ; ) {
        switch (e[t]) {
          case ")":
            return t++, p;
          case void 0:
            throw new SyntaxError("Unclosed argument list");
        }
        p.push(P()), s(Fo);
      }
    }
    h(I, "parseArguments");
    function P() {
      let p = L();
      return p.type !== "mesg" ? p : s(jo) ? {
        type: "narg",
        name: p.name,
        value: M()
      } : p;
    }
    h(P, "parseArgument");
    function S() {
      let p = [], _ = 0, x;
      for (; i(So); ) {
        n("*") && (x = _);
        let j = T(), D = g();
        if (D === null)
          throw new SyntaxError("Expected variant value");
        p[_++] = {
          key: j,
          value: D
        };
      }
      if (_ === 0)
        return null;
      if (x === void 0)
        throw new SyntaxError("Expected default variant");
      return {
        variants: p,
        star: x
      };
    }
    h(S, "parseVariants");
    function T() {
      s(Mo, SyntaxError);
      let p;
      return i(fn) ? p = v() : p = {
        type: "str",
        value: l(Ao)
      }, s(ko, SyntaxError), p;
    }
    h(T, "parseVariantKey");
    function M() {
      if (i(fn))
        return v();
      if (e[t] === '"')
        return C();
      throw new SyntaxError("Invalid expression");
    }
    h(M, "parseLiteral");
    function v() {
      let [, p, _ = ""] = r(fn), x = _.length;
      return {
        type: "num",
        value: parseFloat(p),
        precision: x
      };
    }
    h(v, "parseNumberLiteral");
    function C() {
      n('"', SyntaxError);
      let p = "";
      for (; ; ) {
        if (p += l(Lo), e[t] === "\\") {
          p += F();
          continue;
        }
        if (n('"'))
          return {
            type: "str",
            value: p
          };
        throw new SyntaxError("Unclosed string literal");
      }
    }
    h(C, "parseStringLiteral");
    function F() {
      if (i(yr))
        return l(yr);
      if (i(vr)) {
        let [, p, _] = r(vr), x = parseInt(p || _, 16);
        return x <= 55295 || 57344 <= x ? String.fromCodePoint(x) : "�";
      }
      throw new SyntaxError("Unknown escape sequence");
    }
    h(F, "parseEscapeSequence");
    function B() {
      let p = t;
      switch (s(Vo), e[t]) {
        case ".":
        case "[":
        case "*":
        case "}":
        case void 0:
          return !1;
        case "{":
          return V(e.slice(p, t));
      }
      return e[t - 1] === " " ? V(e.slice(p, t)) : !1;
    }
    h(B, "parseIndent");
    function W(p, _) {
      return p.replace(_, "");
    }
    h(W, "trim");
    function V(p) {
      let _ = p.replace(Ro, `
`), x = No.exec(p)[1].length;
      return new Zi(_, x);
    }
    h(V, "makeIndent");
  }
};
h(Ts, "FluentResource");
let Nn = Ts;
const Rs = class Rs {
  constructor(e, t) {
    this.value = e, this.length = t;
  }
};
h(Rs, "Indent");
let Zi = Rs;
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
  Ur(e, a);
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
      console.warn(`An element of forbidden type "${t.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`), a.replaceChild(Cn(t), t);
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
function Ur(a, e) {
  const t = e.hasAttribute("data-l10n-attrs") ? e.getAttribute("data-l10n-attrs").split(",").map((i) => i.trim()) : null;
  for (const i of Array.from(e.attributes))
    Sr(i.name, e, t) && !zo(a.attributes, i.name) && e.removeAttribute(i.name);
  if (a.attributes)
    for (const i of Array.from(a.attributes))
      Sr(i.name, e, t) && e.getAttribute(i.name) !== i.value && e.setAttribute(i.name, i.value);
}
h(Ur, "overlayAttributes");
function Go(a, e) {
  const t = e.getAttribute("data-l10n-name"), i = a.querySelector(`[data-l10n-name="${t}"]`);
  if (!i)
    return console.warn(`An element named "${t}" wasn't found in the source.`), Cn(e);
  if (i.localName !== e.localName)
    return console.warn(`An element named "${t}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${i.localName}).`), Cn(e);
  a.removeChild(i);
  const n = i.cloneNode(!1);
  return $r(e, n);
}
h(Go, "getNodeForNamedElement");
function Ko(a) {
  const e = a.ownerDocument.createElement(a.localName);
  return $r(a, e);
}
h(Ko, "createSanitizedElement");
function Cn(a) {
  return a.ownerDocument.createTextNode(a.textContent);
}
h(Cn, "createTextNodeFromTextContent");
function Xo(a) {
  const e = Ho[a.namespaceURI];
  return e && e.includes(a.localName);
}
h(Xo, "isElementAllowed");
function Sr(a, e, t = null) {
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
h(Sr, "isAttrNameLocalizable");
function $r(a, e) {
  return e.textContent = a.textContent, Ur(a, e), e;
}
h($r, "shallowPopulateUsing");
const Ns = class Ns extends Array {
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
};
h(Ns, "CachedIterable");
let Mn = Ns;
const Cs = class Cs extends Mn {
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
h(Cs, "CachedAsyncIterable");
let kn = Cs;
const Ms = class Ms {
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
    this.bundles = kn.from(this.generateBundles(this.resourceIds)), e && this.bundles.touchNext(2);
  }
};
h(Ms, "Localization");
let On = Ms;
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
    let u = e.getMessage(r);
    if (u) {
      if (n.length = 0, i[d] = a(e, n, u, l), n.length > 0 && typeof console < "u") {
        const g = e.locales[0], E = n.join(", ");
        console.warn(`[fluent][resolver] errors in ${g}/${r}: ${E}.`);
      }
    } else
      s.add(r);
  }), s;
}
h(Jo, "keysFromBundle");
const Ge = "data-l10n-id", Vt = "data-l10n-args", Yo = `[${Ge}]`, ks = class ks extends On {
  constructor(e, t) {
    super(e, t), this.roots = /* @__PURE__ */ new Set(), this.pendingrAF = null, this.pendingElements = /* @__PURE__ */ new Set(), this.windowElement = null, this.mutationObserver = null, this.observerConfig = {
      attributes: !0,
      characterData: !1,
      childList: !0,
      subtree: !0,
      attributeFilter: [Ge, Vt]
    };
  }
  onChange(e = !1) {
    super.onChange(e), this.roots && this.translateRoots();
  }
  setAttributes(e, t, i) {
    return e.setAttribute(Ge, t), i ? e.setAttribute(Vt, JSON.stringify(i)) : e.removeAttribute(Vt), e;
  }
  getAttributes(e) {
    return {
      id: e.getAttribute(Ge),
      args: JSON.parse(e.getAttribute(Vt) || null)
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
              else i.hasAttribute(Ge) && this.pendingElements.add(i);
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
    return typeof e.hasAttribute == "function" && e.hasAttribute(Ge) && t.push(e), t;
  }
  getKeysForElement(e) {
    return {
      id: e.getAttribute(Ge),
      args: JSON.parse(e.getAttribute(Vt) || null)
    };
  }
};
h(ks, "DOMLocalization");
let Dn = ks;
var ei, Re, wt, J, jt, Wr, zr;
const gt = class gt {
  constructor({
    lang: e,
    isRTL: t
  }, i = null) {
    b(this, ei);
    b(this, Re);
    b(this, wt);
    b(this, J);
    var n, s;
    f(this, wt, c(n = gt, jt, Wr).call(n, e)), f(this, J, i), f(this, ei, t ?? c(s = gt, jt, zr).call(s, o(this, wt)) ? "rtl" : "ltr");
  }
  _setL10n(e) {
    f(this, J, e);
  }
  getLanguage() {
    return o(this, wt);
  }
  getDirection() {
    return o(this, ei);
  }
  async get(e, t = null, i) {
    var s;
    return Array.isArray(e) ? (e = e.map((l) => ({
      id: l
    })), (await o(this, J).formatMessages(e)).map((l) => l.value)) : ((s = (await o(this, J).formatMessages([{
      id: e,
      args: t
    }]))[0]) == null ? void 0 : s.value) || i;
  }
  async translate(e) {
    (o(this, Re) || f(this, Re, /* @__PURE__ */ new Set())).add(e);
    try {
      o(this, J).connectRoot(e), await o(this, J).translateRoots();
    } catch {
    }
  }
  async translateOnce(e) {
    try {
      await o(this, J).translateElements([e]);
    } catch (t) {
      console.error("translateOnce:", t);
    }
  }
  async destroy() {
    if (o(this, Re)) {
      for (const e of o(this, Re))
        o(this, J).disconnectRoot(e);
      o(this, Re).clear(), f(this, Re, null);
    }
    o(this, J).pauseObserving();
  }
  pause() {
    o(this, J).pauseObserving();
  }
  resume() {
    o(this, J).resumeObserving();
  }
};
ei = new WeakMap(), Re = new WeakMap(), wt = new WeakMap(), J = new WeakMap(), jt = new WeakSet(), Wr = /* @__PURE__ */ h(function(e) {
  return e = (e == null ? void 0 : e.toLowerCase()) || "en-us", {
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
}, "#fixupLangCode"), zr = /* @__PURE__ */ h(function(e) {
  const t = e.split("-", 1)[0];
  return ["ar", "he", "fa", "ps", "ur"].includes(t);
}, "#isRTL"), b(gt, jt), h(gt, "L10n");
let jn = gt;
function Ar(a, e) {
  const t = new Nn(e), i = new Rn(a), n = i.addResource(t);
  return n.length && console.error("L10n errors", n), i;
}
h(Ar, "createBundle");
var te, Gr, Kr, Xr, Zr, Fn;
const Ae = class Ae extends jn {
  constructor(e) {
    super({
      lang: e
    });
    const t = e ? c(Ae, te, Gr).bind(Ae, "en-us", this.getLanguage()) : c(Ae, te, Zr).bind(Ae, this.getLanguage());
    this._setL10n(new Dn([], t));
  }
};
te = new WeakSet(), Gr = /* @__PURE__ */ h(async function* (e, t) {
  const {
    baseURL: i,
    paths: n
  } = await c(this, te, Xr).call(this), s = [t];
  if (e !== t) {
    const r = t.split("-", 1)[0];
    r !== t && s.push(r), s.push(e);
  }
  for (const r of s) {
    const l = await c(this, te, Kr).call(this, r, i, n);
    l ? yield l : r === "en-us" && (yield c(this, te, Fn).call(this, r));
  }
}, "#generateBundles"), Kr = /* @__PURE__ */ h(async function(e, t, i) {
  const n = i[e];
  if (!n)
    return null;
  const s = new URL(n, t), r = await dr(s, "text");
  return Ar(e, r);
}, "#createBundle"), Xr = /* @__PURE__ */ h(async function() {
  try {
    const {
      href: e
    } = document.querySelector('link[type="application/l10n"]'), t = await dr(e, "json");
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
}, "#getPaths"), Zr = /* @__PURE__ */ h(async function* (e) {
  yield c(this, te, Fn).call(this, e);
}, "#generateBundlesFallback"), Fn = /* @__PURE__ */ h(async function(e) {
  return Ar(e, `pdfjs-previous-button =
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
}, "#createBundleFallback"), b(Ae, te), h(Ae, "genericl10n_GenericL10n");
let Dt = Ae;
const qo = 1e3, el = 50, tl = 1e3;
function gn() {
  return document.location.hash;
}
h(gn, "getCurrentHash");
var Ne, R, pe, Di, ji, Ut, Fi, Bn, Qr, Jr, Hn, Yr, qr;
const Os = class Os {
  constructor({
    linkService: e,
    eventBus: t
  }) {
    b(this, R);
    b(this, Ne, null);
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
    this._fingerprint = e, this._updateUrl = i === !0, this._initialized = !0, c(this, R, Yr).call(this);
    const s = window.history.state;
    if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = gn(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !c(this, R, Ut).call(this, s, !0) || t) {
      const {
        hash: l,
        page: d,
        rotation: u
      } = c(this, R, Bn).call(this, !0);
      if (!l || n || t) {
        c(this, R, pe).call(this, null, !0);
        return;
      }
      c(this, R, pe).call(this, {
        hash: l,
        page: d,
        rotation: u
      }, !0);
      return;
    }
    const r = s.destination;
    c(this, R, Fi).call(this, r, s.uid, !0), r.rotation !== void 0 && (this._initialRotation = r.rotation), r.dest ? (this._initialBookmark = JSON.stringify(r.dest), this._destination.page = null) : r.hash ? this._initialBookmark = r.hash : r.page && (this._initialBookmark = `page=${r.page}`);
  }
  reset() {
    this._initialized && (c(this, R, Hn).call(this), this._initialized = !1, c(this, R, qr).call(this)), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
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
      if (!c(this, R, ji).call(this, i) && (i !== null || this._destination)) {
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
    this._popStateInProgress && !s || (c(this, R, pe).call(this, {
      dest: t,
      hash: n,
      page: i,
      rotation: this.linkService.rotation
    }, s), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
      this._popStateInProgress = !1;
    })));
  }
  pushPage(e) {
    var t;
    if (this._initialized) {
      if (!c(this, R, ji).call(this, e)) {
        console.error(`PDFHistory.pushPage: "${e}" is not a valid page number.`);
        return;
      }
      ((t = this._destination) == null ? void 0 : t.page) !== e && (this._popStateInProgress || (c(this, R, pe).call(this, {
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
    !this._initialized || this._popStateInProgress || c(this, R, Di).call(this);
  }
  back() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    c(this, R, Ut).call(this, e) && e.uid > 0 && window.history.back();
  }
  forward() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    c(this, R, Ut).call(this, e) && e.uid < this._maxUid && window.history.forward();
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
Ne = new WeakMap(), R = new WeakSet(), pe = /* @__PURE__ */ h(function(e, t = !1) {
  const i = t || !this._destination, n = {
    fingerprint: this._fingerprint,
    uid: i ? this._uid : this._uid + 1,
    destination: e
  };
  c(this, R, Fi).call(this, e, n.uid);
  let s;
  if (this._updateUrl && (e != null && e.hash)) {
    const r = document.location.href.split("#", 1)[0];
    r.startsWith("file://") || (s = `${r}#${e.hash}`);
  }
  i ? window.history.replaceState(n, "", s) : window.history.pushState(n, "", s);
}, "#pushOrReplaceState"), Di = /* @__PURE__ */ h(function(e = !1) {
  if (!this._position)
    return;
  let t = this._position;
  if (e && (t = Object.assign(/* @__PURE__ */ Object.create(null), this._position), t.temporary = !0), !this._destination) {
    c(this, R, pe).call(this, t);
    return;
  }
  if (this._destination.temporary) {
    c(this, R, pe).call(this, t, !0);
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
  c(this, R, pe).call(this, t, i);
}, "#tryPushCurrentPosition"), ji = /* @__PURE__ */ h(function(e) {
  return Number.isInteger(e) && e > 0 && e <= this.linkService.pagesCount;
}, "#isValidPage"), Ut = /* @__PURE__ */ h(function(e, t = !1) {
  if (!e)
    return !1;
  if (e.fingerprint !== this._fingerprint)
    if (t) {
      if (typeof e.fingerprint != "string" || e.fingerprint.length !== this._fingerprint.length)
        return !1;
      const [i] = performance.getEntriesByType("navigation");
      if ((i == null ? void 0 : i.type) !== "reload")
        return !1;
    } else
      return !1;
  return !(!Number.isInteger(e.uid) || e.uid < 0 || e.destination === null || typeof e.destination != "object");
}, "#isValidState"), Fi = /* @__PURE__ */ h(function(e, t, i = !1) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), i && (e != null && e.temporary) && delete e.temporary, this._destination = e, this._uid = t, this._maxUid = Math.max(this._maxUid, t), this._numPositionUpdates = 0;
}, "#updateInternalState"), Bn = /* @__PURE__ */ h(function(e = !1) {
  const t = unescape(gn()).substring(1), i = sn(t), n = i.get("nameddest") || "";
  let s = i.get("page") | 0;
  return (!c(this, R, ji).call(this, s) || e && n.length > 0) && (s = null), {
    hash: t,
    page: s,
    rotation: this.linkService.rotation
  };
}, "#parseCurrentHash"), Qr = /* @__PURE__ */ h(function({
  location: e
}) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
    hash: e.pdfOpenParams.substring(1),
    page: this.linkService.page,
    first: e.pageNumber,
    rotation: e.rotation
  }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
    this._popStateInProgress || c(this, R, Di).call(this, !0), this._updateViewareaTimeout = null;
  }, tl));
}, "#updateViewarea"), Jr = /* @__PURE__ */ h(function({
  state: e
}) {
  const t = gn(), i = this._currentHash !== t;
  if (this._currentHash = t, !e) {
    this._uid++;
    const {
      hash: s,
      page: r,
      rotation: l
    } = c(this, R, Bn).call(this);
    c(this, R, pe).call(this, {
      hash: s,
      page: r,
      rotation: l
    }, !0);
    return;
  }
  if (!c(this, R, Ut).call(this, e))
    return;
  this._popStateInProgress = !0, i && (this._blockHashChange++, fo({
    target: window,
    name: "hashchange",
    delay: qo
  }).then(() => {
    this._blockHashChange--;
  }));
  const n = e.destination;
  c(this, R, Fi).call(this, n, e.uid, !0), Cr(n.rotation) && (this.linkService.rotation = n.rotation), n.dest ? this.linkService.goToDestination(n.dest) : n.hash ? this.linkService.setHash(n.hash) : n.page && (this.linkService.page = n.page), Promise.resolve().then(() => {
    this._popStateInProgress = !1;
  });
}, "#popState"), Hn = /* @__PURE__ */ h(function() {
  (!this._destination || this._destination.temporary) && c(this, R, Di).call(this);
}, "#pageHide"), Yr = /* @__PURE__ */ h(function() {
  if (o(this, Ne))
    return;
  f(this, Ne, new AbortController());
  const {
    signal: e
  } = o(this, Ne);
  this.eventBus._on("updateviewarea", c(this, R, Qr).bind(this), {
    signal: e
  }), window.addEventListener("popstate", c(this, R, Jr).bind(this), {
    signal: e
  }), window.addEventListener("pagehide", c(this, R, Hn).bind(this), {
    signal: e
  });
}, "#bindEvents"), qr = /* @__PURE__ */ h(function() {
  var e;
  (e = o(this, Ne)) == null || e.abort(), f(this, Ne, null);
}, "#unbindEvents"), h(Os, "PDFHistory");
let Vn = Os;
function il(a, e) {
  return typeof a != "string" || typeof e != "string" ? !1 : a === e || sn(a).get("nameddest") === e;
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
var ti, ii, ni, si, ri, _t;
const Ds = class Ds {
  constructor(e) {
    b(this, ti, null);
    b(this, ii, null);
    b(this, ni, null);
    b(this, si, null);
    b(this, ri, null);
    b(this, _t);
    this.pdfPage = e.pdfPage, this.accessibilityManager = e.accessibilityManager, this.l10n = e.l10n, this.l10n || (this.l10n = new Dt()), this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, f(this, _t, e.uiManager), f(this, ti, e.annotationLayer || null), f(this, ri, e.textLayer || null), f(this, ii, e.drawLayer || null), f(this, ni, e.onAppend || null), f(this, si, e.structTreeLayer || null);
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
    n.className = "annotationEditorLayer", n.hidden = !0, n.dir = o(this, _t).direction, (r = o(this, ni)) == null || r.call(this, n), this.annotationEditorLayer = new to({
      uiManager: o(this, _t),
      div: n,
      structTreeLayer: o(this, si),
      accessibilityManager: this.accessibilityManager,
      pageIndex: this.pdfPage.pageNumber - 1,
      l10n: this.l10n,
      viewport: i,
      annotationLayer: o(this, ti),
      textLayer: o(this, ri),
      drawLayer: o(this, ii)
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
ti = new WeakMap(), ii = new WeakMap(), ni = new WeakMap(), si = new WeakMap(), ri = new WeakMap(), _t = new WeakMap(), h(Ds, "AnnotationEditorLayerBuilder");
let Un = Ds;
{
  var $n = /* @__PURE__ */ new Map();
  const a = navigator.userAgent || "", e = navigator.platform || "", t = navigator.maxTouchPoints || 1, i = /Android/.test(a), n = /\b(iPad|iPhone|iPod)(?=;)/.test(a) || e === "MacIntel" && t > 1;
  (function() {
    (n || i) && $n.set("maxCanvasPixels", 5242880);
  })(), function() {
    i && $n.set("useSystemFonts", !1);
  }();
}
const m = {
  BROWSER: 1,
  VIEWER: 2,
  API: 4,
  WORKER: 8,
  EVENT_DISPATCH: 16,
  PREFERENCE: 128
}, Wn = {
  BOOLEAN: 1,
  NUMBER: 2,
  OBJECT: 4,
  STRING: 8,
  UNDEFINED: 16
}, fe = {
  allowedGlobalEvents: {
    value: null,
    kind: m.BROWSER
  },
  canvasMaxAreaInBytes: {
    value: -1,
    kind: m.BROWSER + m.API
  },
  isInAutomation: {
    value: !1,
    kind: m.BROWSER
  },
  localeProperties: {
    value: {
      lang: navigator.language || "en-US"
    },
    kind: m.BROWSER
  },
  nimbusDataStr: {
    value: "",
    kind: m.BROWSER
  },
  supportsCaretBrowsingMode: {
    value: !1,
    kind: m.BROWSER
  },
  supportsDocumentFonts: {
    value: !0,
    kind: m.BROWSER
  },
  supportsIntegratedFind: {
    value: !1,
    kind: m.BROWSER
  },
  supportsMouseWheelZoomCtrlKey: {
    value: !0,
    kind: m.BROWSER
  },
  supportsMouseWheelZoomMetaKey: {
    value: !0,
    kind: m.BROWSER
  },
  supportsPinchToZoom: {
    value: !0,
    kind: m.BROWSER
  },
  toolbarDensity: {
    value: 0,
    kind: m.BROWSER + m.EVENT_DISPATCH
  },
  altTextLearnMoreUrl: {
    value: "",
    kind: m.VIEWER + m.PREFERENCE
  },
  annotationEditorMode: {
    value: 0,
    kind: m.VIEWER + m.PREFERENCE
  },
  annotationMode: {
    value: 2,
    kind: m.VIEWER + m.PREFERENCE
  },
  cursorToolOnLoad: {
    value: 0,
    kind: m.VIEWER + m.PREFERENCE
  },
  debuggerSrc: {
    value: "./debugger.mjs",
    kind: m.VIEWER
  },
  defaultZoomDelay: {
    value: 400,
    kind: m.VIEWER + m.PREFERENCE
  },
  defaultZoomValue: {
    value: "",
    kind: m.VIEWER + m.PREFERENCE
  },
  disableHistory: {
    value: !1,
    kind: m.VIEWER
  },
  disablePageLabels: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  enableAltText: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  enableAltTextModelDownload: {
    value: !0,
    kind: m.VIEWER + m.PREFERENCE + m.EVENT_DISPATCH
  },
  enableGuessAltText: {
    value: !0,
    kind: m.VIEWER + m.PREFERENCE + m.EVENT_DISPATCH
  },
  enableHighlightFloatingButton: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  enableNewAltTextWhenAddingImage: {
    value: !0,
    kind: m.VIEWER + m.PREFERENCE
  },
  enablePermissions: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: !0,
    kind: m.VIEWER + m.PREFERENCE
  },
  enableScripting: {
    value: !0,
    kind: m.VIEWER + m.PREFERENCE
  },
  enableUpdatedAddImage: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: m.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: m.VIEWER + m.PREFERENCE
  },
  highlightEditorColors: {
    value: "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F",
    kind: m.VIEWER + m.PREFERENCE
  },
  historyUpdateUrl: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: m.VIEWER
  },
  maxCanvasPixels: {
    value: 2 ** 25,
    kind: m.VIEWER
  },
  forcePageColors: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  pageColorsBackground: {
    value: "Canvas",
    kind: m.VIEWER + m.PREFERENCE
  },
  pageColorsForeground: {
    value: "CanvasText",
    kind: m.VIEWER + m.PREFERENCE
  },
  pdfBugEnabled: {
    value: !1,
    kind: m.VIEWER + m.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: m.VIEWER
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: m.VIEWER + m.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: m.VIEWER + m.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: m.VIEWER + m.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: m.VIEWER + m.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: m.VIEWER + m.PREFERENCE
  },
  cMapPacked: {
    value: !0,
    kind: m.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: m.API
  },
  disableAutoFetch: {
    value: !1,
    kind: m.API + m.PREFERENCE
  },
  disableFontFace: {
    value: !1,
    kind: m.API + m.PREFERENCE
  },
  disableRange: {
    value: !1,
    kind: m.API + m.PREFERENCE
  },
  disableStream: {
    value: !1,
    kind: m.API + m.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: m.API
  },
  enableHWA: {
    value: !0,
    kind: m.API + m.VIEWER + m.PREFERENCE
  },
  enableXfa: {
    value: !0,
    kind: m.API + m.PREFERENCE
  },
  fontExtraProperties: {
    value: !1,
    kind: m.API
  },
  isEvalSupported: {
    value: !0,
    kind: m.API
  },
  isOffscreenCanvasSupported: {
    value: !0,
    kind: m.API
  },
  maxImageSize: {
    value: -1,
    kind: m.API
  },
  pdfBug: {
    value: !1,
    kind: m.API
  },
  standardFontDataUrl: {
    value: "../web/standard_fonts/",
    kind: m.API
  },
  useSystemFonts: {
    value: void 0,
    kind: m.API,
    type: Wn.BOOLEAN + Wn.UNDEFINED
  },
  verbosity: {
    value: 1,
    kind: m.API
  },
  workerPort: {
    value: null,
    kind: m.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.mjs",
    kind: m.WORKER
  }
};
fe.defaultUrl = {
  value: "compressed.tracemonkey-pldi-09.pdf",
  kind: m.VIEWER
}, fe.sandboxBundleSrc = {
  value: "../build/pdf.sandbox.mjs",
  kind: m.VIEWER
}, fe.viewerCssTheme = {
  value: 0,
  kind: m.VIEWER + m.PREFERENCE
}, fe.enableFakeMLManager = {
  value: !0,
  kind: m.VIEWER
};
fe.disablePreferences = {
  value: !1,
  kind: m.VIEWER
};
var Ce;
const re = class re {
  static get(e) {
    return o(this, Ce).get(e);
  }
  static getAll(e = null, t = !1) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const n in fe) {
      const s = fe[n];
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
    this._hasInvokedSet || (this._hasInvokedSet = !0);
    let i;
    for (const n in e) {
      const s = fe[n], r = e[n];
      if (!s || !(typeof r == typeof s.value || Wn[(typeof r).toUpperCase()] & s.type))
        continue;
      const {
        kind: l
      } = s;
      t && !(l & m.BROWSER || l & m.PREFERENCE) || (this.eventBus && l & m.EVENT_DISPATCH && (i || (i = /* @__PURE__ */ new Map())).set(n, r), o(this, Ce).set(n, r));
    }
    if (i)
      for (const [n, s] of i)
        this.eventBus.dispatch(n.toLowerCase(), {
          source: this,
          value: s
        });
  }
};
Ce = new WeakMap(), h(re, "AppOptions"), rn(re, "eventBus"), b(re, Ce, /* @__PURE__ */ new Map()), (() => {
  for (const e in fe)
    o(re, Ce).set(e, fe[e].value);
  for (const [e, t] of $n)
    o(re, Ce).set(e, t);
  re._hasInvokedSet = !1, re._checkDisablePreferences = () => re.get("disablePreferences") ? !0 : (re._hasInvokedSet && console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.'), !1);
})();
let zn = re;
var le;
const js = class js {
  constructor(e) {
    b(this, le, null);
    this.pageIndex = e.pageIndex;
  }
  async render(e = "display") {
    e !== "display" || o(this, le) || this._cancelled || f(this, le, new ro({
      pageIndex: this.pageIndex
    }));
  }
  cancel() {
    this._cancelled = !0, o(this, le) && (o(this, le).destroy(), f(this, le, null));
  }
  setParent(e) {
    var t;
    (t = o(this, le)) == null || t.setParent(e);
  }
  getDrawLayer() {
    return o(this, le);
  }
};
le = new WeakMap(), h(js, "DrawLayerBuilder");
let Gn = js;
const Ir = {
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
var yt, ae, vt, Pt, xt, Me, ge, Kn, ea, Xn;
const Fs = class Fs {
  constructor(e, t) {
    b(this, ge);
    b(this, yt);
    b(this, ae, null);
    b(this, vt);
    b(this, Pt, /* @__PURE__ */ new Map());
    b(this, xt);
    b(this, Me, null);
    f(this, yt, e.getStructTree()), f(this, xt, t);
  }
  async render() {
    var n;
    if (o(this, vt))
      return o(this, vt);
    const {
      promise: e,
      resolve: t,
      reject: i
    } = Promise.withResolvers();
    f(this, vt, e);
    try {
      f(this, ae, c(this, ge, Xn).call(this, await o(this, yt)));
    } catch (s) {
      i(s);
    }
    return f(this, yt, null), (n = o(this, ae)) == null || n.classList.add("structTree"), t(o(this, ae)), e;
  }
  async getAriaAttributes(e) {
    try {
      return await this.render(), o(this, Pt).get(e);
    } catch {
    }
    return null;
  }
  hide() {
    o(this, ae) && !o(this, ae).hidden && (o(this, ae).hidden = !0);
  }
  show() {
    var e;
    (e = o(this, ae)) != null && e.hidden && (o(this, ae).hidden = !1);
  }
  addElementsToTextLayer() {
    var e;
    if (o(this, Me)) {
      for (const [t, i] of o(this, Me))
        (e = document.getElementById(t)) == null || e.append(i);
      o(this, Me).clear(), f(this, Me, null);
    }
  }
};
yt = new WeakMap(), ae = new WeakMap(), vt = new WeakMap(), Pt = new WeakMap(), xt = new WeakMap(), Me = new WeakMap(), ge = new WeakSet(), Kn = /* @__PURE__ */ h(function(e, t) {
  const {
    alt: i,
    id: n,
    lang: s
  } = e;
  if (i !== void 0) {
    let r = !1;
    const l = Kt(i);
    for (const d of e.children)
      if (d.type === "annotation") {
        let u = o(this, Pt).get(d.id);
        u || (u = /* @__PURE__ */ new Map(), o(this, Pt).set(d.id, u)), u.set("aria-label", l), r = !0;
      }
    r || t.setAttribute("aria-label", l);
  }
  n !== void 0 && t.setAttribute("aria-owns", n), s !== void 0 && t.setAttribute("lang", Kt(s, !0));
}, "#setAttributes"), ea = /* @__PURE__ */ h(function(e, t) {
  const {
    alt: i,
    bbox: n,
    children: s
  } = e, r = s == null ? void 0 : s[0];
  if (!o(this, xt) || !i || !n || (r == null ? void 0 : r.type) !== "content")
    return !1;
  const {
    id: l
  } = r;
  if (!l)
    return !1;
  t.setAttribute("aria-owns", l);
  const d = document.createElement("span");
  (o(this, Me) || f(this, Me, /* @__PURE__ */ new Map())).set(l, d), d.setAttribute("role", "img"), d.setAttribute("aria-label", Kt(i));
  const {
    pageHeight: u,
    pageX: g,
    pageY: E
  } = o(this, xt), w = "calc(var(--scale-factor)*", {
    style: L
  } = d;
  return L.width = `${w}${n[2] - n[0]}px)`, L.height = `${w}${n[3] - n[1]}px)`, L.left = `${w}${n[0] - g}px)`, L.top = `${w}${u - n[3] + E}px)`, !0;
}, "#addImageInTextLayer"), Xn = /* @__PURE__ */ h(function(e) {
  if (!e)
    return null;
  const t = document.createElement("span");
  if ("role" in e) {
    const {
      role: i
    } = e, n = i.match(sl);
    if (n ? (t.setAttribute("role", "heading"), t.setAttribute("aria-level", n[1])) : Ir[i] && t.setAttribute("role", Ir[i]), i === "Figure" && c(this, ge, ea).call(this, e, t))
      return t;
  }
  if (c(this, ge, Kn).call(this, e, t), e.children)
    if (e.children.length === 1 && "id" in e.children[0])
      c(this, ge, Kn).call(this, e.children[0], t);
    else
      for (const i of e.children)
        t.append(c(this, ge, Xn).call(this, i));
  return t;
}, "#walk"), h(Fs, "StructTreeLayerBuilder");
let Qi = Fs;
var Ee, ie, we, ke, St, Vi, ai, Qn;
const Ke = class Ke {
  constructor() {
    b(this, ai);
    b(this, Ee, !1);
    b(this, ie, null);
    b(this, we, /* @__PURE__ */ new Map());
    b(this, ke, /* @__PURE__ */ new Map());
  }
  setTextMapping(e) {
    f(this, ie, e);
  }
  enable() {
    if (o(this, Ee))
      throw new Error("TextAccessibilityManager is already enabled.");
    if (!o(this, ie))
      throw new Error("Text divs and strings have not been set.");
    if (f(this, Ee, !0), f(this, ie, o(this, ie).slice()), o(this, ie).sort(c(Ke, St, Vi)), o(this, we).size > 0) {
      const e = o(this, ie);
      for (const [t, i] of o(this, we)) {
        if (!document.getElementById(t)) {
          o(this, we).delete(t);
          continue;
        }
        c(this, ai, Qn).call(this, t, e[i]);
      }
    }
    for (const [e, t] of o(this, ke))
      this.addPointerInTextLayer(e, t);
    o(this, ke).clear();
  }
  disable() {
    o(this, Ee) && (o(this, ke).clear(), f(this, ie, null), f(this, Ee, !1));
  }
  removePointerInTextLayer(e) {
    if (!o(this, Ee)) {
      o(this, ke).delete(e);
      return;
    }
    const t = o(this, ie);
    if (!t || t.length === 0)
      return;
    const {
      id: i
    } = e, n = o(this, we).get(i);
    if (n === void 0)
      return;
    const s = t[n];
    o(this, we).delete(i);
    let r = s.getAttribute("aria-owns");
    r != null && r.includes(i) && (r = r.split(" ").filter((l) => l !== i).join(" "), r ? s.setAttribute("aria-owns", r) : (s.removeAttribute("aria-owns"), s.setAttribute("role", "presentation")));
  }
  addPointerInTextLayer(e, t) {
    const {
      id: i
    } = e;
    if (!i)
      return null;
    if (!o(this, Ee))
      return o(this, ke).set(e, t), null;
    t && this.removePointerInTextLayer(e);
    const n = o(this, ie);
    if (!n || n.length === 0)
      return null;
    const s = Zt(n, (u) => {
      var g;
      return c(g = Ke, St, Vi).call(g, e, u) < 0;
    }), r = Math.max(0, s - 1), l = n[r];
    c(this, ai, Qn).call(this, i, l), o(this, we).set(i, r);
    const d = l.parentNode;
    return d != null && d.classList.contains("markedContent") ? d.id : null;
  }
  moveElementInDOM(e, t, i, n) {
    const s = this.addPointerInTextLayer(i, n);
    if (!e.hasChildNodes())
      return e.append(t), s;
    const r = Array.from(e.childNodes).filter((u) => u !== t);
    if (r.length === 0)
      return s;
    const l = i || t, d = Zt(r, (u) => {
      var g;
      return c(g = Ke, St, Vi).call(g, l, u) < 0;
    });
    return d === 0 ? r[0].before(t) : r[d - 1].after(t), s;
  }
};
Ee = new WeakMap(), ie = new WeakMap(), we = new WeakMap(), ke = new WeakMap(), St = new WeakSet(), Vi = /* @__PURE__ */ h(function(e, t) {
  const i = e.getBoundingClientRect(), n = t.getBoundingClientRect();
  if (i.width === 0 && i.height === 0)
    return 1;
  if (n.width === 0 && n.height === 0)
    return -1;
  const s = i.y, r = i.y + i.height, l = i.y + i.height / 2, d = n.y, u = n.y + n.height, g = n.y + n.height / 2;
  if (l <= d && g >= r)
    return -1;
  if (g <= s && l >= u)
    return 1;
  const E = i.x + i.width / 2, w = n.x + n.width / 2;
  return E - w;
}, "#compareElementPositions"), ai = new WeakSet(), Qn = /* @__PURE__ */ h(function(e, t) {
  const i = t.getAttribute("aria-owns");
  i != null && i.includes(e) || t.setAttribute("aria-owns", i ? `${i} ${e}` : e), t.removeAttribute("role");
}, "#addIdToAriaOwns"), b(Ke, St), h(Ke, "TextAccessibilityManager");
let Zn = Ke;
var Oe;
const Vs = class Vs {
  constructor({
    findController: e,
    eventBus: t,
    pageIndex: i
  }) {
    b(this, Oe, null);
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
    this.enabled = !0, o(this, Oe) || (f(this, Oe, new AbortController()), this.eventBus._on("updatetextlayermatches", (e) => {
      (e.pageIndex === this.pageIdx || e.pageIndex === -1) && this._updateMatches();
    }, {
      signal: o(this, Oe).signal
    })), this._updateMatches();
  }
  disable() {
    var e;
    this.enabled && (this.enabled = !1, (e = o(this, Oe)) == null || e.abort(), f(this, Oe, null), this._updateMatches(!0));
  }
  _convertMatches(e, t) {
    if (!e)
      return [];
    const {
      textContentItemsStr: i
    } = this;
    let n = 0, s = 0;
    const r = i.length - 1, l = [];
    for (let d = 0, u = e.length; d < u; d++) {
      let g = e[d];
      for (; n !== r && g >= s + i[n].length; )
        s += i[n].length, n++;
      n === i.length && console.error("Could not find a matching mapping");
      const E = {
        begin: {
          divIdx: n,
          offset: g - s
        }
      };
      for (g += t[d]; n !== r && g > s + i[n].length; )
        s += i[n].length, n++;
      E.end = {
        divIdx: n,
        offset: g - s
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
    let u = null;
    const g = {
      offset: void 0
    };
    function E(T, M) {
      const v = T.divIdx;
      return s[v].textContent = "", w(v, 0, T.offset, M);
    }
    h(E, "beginText");
    function w(T, M, v, C) {
      let F = s[T];
      if (F.nodeType === Node.TEXT_NODE) {
        const V = document.createElement("span");
        F.before(V), V.append(F), s[T] = V, F = V;
      }
      const B = n[T].substring(M, v), W = document.createTextNode(B);
      if (C) {
        const V = document.createElement("span");
        if (V.className = `${C} appended`, V.append(W), F.append(V), C.includes("selected")) {
          const {
            left: p
          } = V.getClientRects()[0], _ = F.getBoundingClientRect().left;
          return p - _;
        }
        return 0;
      }
      return F.append(W), 0;
    }
    h(w, "appendTextToDiv");
    let L = l, I = L + 1;
    if (d)
      L = 0, I = e.length;
    else if (!r)
      return;
    let P = -1, S = -1;
    for (let T = L; T < I; T++) {
      const M = e[T], v = M.begin;
      if (v.divIdx === P && v.offset === S)
        continue;
      P = v.divIdx, S = v.offset;
      const C = M.end, F = r && T === l, B = F ? " selected" : "";
      let W = 0;
      if (!u || v.divIdx !== u.divIdx ? (u !== null && w(u.divIdx, u.offset, g.offset), E(v)) : w(u.divIdx, u.offset, v.offset), v.divIdx === C.divIdx)
        W = w(v.divIdx, v.offset, C.offset, "highlight" + B);
      else {
        W = w(v.divIdx, v.offset, g.offset, "highlight begin" + B);
        for (let V = v.divIdx + 1, p = C.divIdx; V < p; V++)
          s[V].className = "highlight middle" + B;
        E(C, "highlight end" + B);
      }
      u = C, F && t.scrollMatchIntoView({
        element: s[v.divIdx],
        selectedLeft: W,
        pageIndex: i,
        matchIndex: l
      });
    }
    u && w(u.divIdx, u.offset, g.offset);
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
    for (const g of i) {
      const E = Math.max(l, g.begin.divIdx);
      for (let w = E, L = g.end.divIdx; w <= L; w++) {
        const I = r[w];
        I.textContent = s[w], I.className = "";
      }
      l = g.end.divIdx + 1;
    }
    if (!(t != null && t.highlightMatches) || e)
      return;
    const d = t.pageMatches[n] || null, u = t.pageMatchesLength[n] || null;
    this.matches = this._convertMatches(d, u), this._renderMatches(this.matches);
  }
};
Oe = new WeakMap(), h(Vs, "TextHighlighter");
let Jn = Vs;
var oi, li, Je, he, Y, De, nn, ta, Ft, ia, na;
const me = class me {
  constructor({
    pdfPage: e,
    highlighter: t = null,
    accessibilityManager: i = null,
    enablePermissions: n = !1,
    onAppend: s = null
  }) {
    b(this, nn);
    b(this, oi, !1);
    b(this, li, null);
    b(this, Je, !1);
    b(this, he, null);
    this.pdfPage = e, this.highlighter = t, this.accessibilityManager = i, f(this, oi, n === !0), f(this, li, s), this.div = document.createElement("div"), this.div.tabIndex = 0, this.div.className = "textLayer";
  }
  async render(e, t = null) {
    var r, l, d, u, g;
    if (o(this, Je) && o(this, he)) {
      o(this, he).update({
        viewport: e,
        onBefore: this.hide.bind(this)
      }), this.show();
      return;
    }
    this.cancel(), f(this, he, new co({
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
    } = o(this, he);
    (r = this.highlighter) == null || r.setTextMapping(i, n), (l = this.accessibilityManager) == null || l.setTextMapping(i), await o(this, he).render(), f(this, Je, !0);
    const s = document.createElement("div");
    s.className = "endOfContent", this.div.append(s), c(this, nn, ta).call(this, s), (d = o(this, li)) == null || d.call(this, this.div), (u = this.highlighter) == null || u.enable(), (g = this.accessibilityManager) == null || g.enable();
  }
  hide() {
    var e;
    !this.div.hidden && o(this, Je) && ((e = this.highlighter) == null || e.disable(), this.div.hidden = !0);
  }
  show() {
    var e;
    this.div.hidden && o(this, Je) && (this.div.hidden = !1, (e = this.highlighter) == null || e.enable());
  }
  cancel() {
    var e, t, i, n;
    (e = o(this, he)) == null || e.cancel(), f(this, he, null), (t = this.highlighter) == null || t.disable(), (i = this.accessibilityManager) == null || i.disable(), c(n = me, Ft, ia).call(n, this.div);
  }
};
oi = new WeakMap(), li = new WeakMap(), Je = new WeakMap(), he = new WeakMap(), Y = new WeakMap(), De = new WeakMap(), nn = new WeakSet(), ta = /* @__PURE__ */ h(function(e) {
  var i;
  const {
    div: t
  } = this;
  t.addEventListener("mousedown", () => {
    t.classList.add("selecting");
  }), t.addEventListener("copy", (n) => {
    if (!o(this, oi)) {
      const s = document.getSelection();
      n.clipboardData.setData("text/plain", Kt(lo(s.toString())));
    }
    Sn(n);
  }), o(me, Y).set(t, e), c(i = me, Ft, na).call(i);
}, "#bindMouse"), Ft = new WeakSet(), ia = /* @__PURE__ */ h(function(e) {
  var t;
  o(this, Y).delete(e), o(this, Y).size === 0 && ((t = o(this, De)) == null || t.abort(), f(this, De, null));
}, "#removeGlobalSelectionListener"), na = /* @__PURE__ */ h(function() {
  if (o(this, De))
    return;
  f(this, De, new AbortController());
  const {
    signal: e
  } = o(this, De), t = /* @__PURE__ */ h((r, l) => {
    l.append(r), r.style.width = "", r.style.height = "", l.classList.remove("selecting");
  }, "reset");
  let i = !1;
  document.addEventListener("pointerdown", () => {
    i = !0;
  }, {
    signal: e
  }), document.addEventListener("pointerup", () => {
    i = !1, o(this, Y).forEach(t);
  }, {
    signal: e
  }), window.addEventListener("blur", () => {
    i = !1, o(this, Y).forEach(t);
  }, {
    signal: e
  }), document.addEventListener("keyup", () => {
    i || o(this, Y).forEach(t);
  }, {
    signal: e
  });
  var n, s;
  document.addEventListener("selectionchange", () => {
    var L;
    const r = document.getSelection();
    if (r.rangeCount === 0) {
      o(this, Y).forEach(t);
      return;
    }
    const l = /* @__PURE__ */ new Set();
    for (let I = 0; I < r.rangeCount; I++) {
      const P = r.getRangeAt(I);
      for (const S of o(this, Y).keys())
        !l.has(S) && P.intersectsNode(S) && l.add(S);
    }
    for (const [I, P] of o(this, Y))
      l.has(I) ? I.classList.add("selecting") : t(P, I);
    if (n ?? (n = getComputedStyle(o(this, Y).values().next().value).getPropertyValue("-moz-user-select") === "none"), n)
      return;
    const d = r.getRangeAt(0), u = s && (d.compareBoundaryPoints(Range.END_TO_END, s) === 0 || d.compareBoundaryPoints(Range.START_TO_END, s) === 0);
    let g = u ? d.startContainer : d.endContainer;
    g.nodeType === Node.TEXT_NODE && (g = g.parentNode);
    const E = (L = g.parentElement) == null ? void 0 : L.closest(".textLayer"), w = o(this, Y).get(E);
    w && (w.style.width = E.style.width, w.style.height = E.style.height, g.parentElement.insertBefore(w, u ? g : g.nextSibling)), s = d.cloneRange();
  }, {
    signal: e
  });
}, "#enableGlobalSelectionListener"), b(me, Ft), h(me, "TextLayerBuilder"), b(me, Y, /* @__PURE__ */ new Map()), b(me, De, null);
let Ji = me;
const Bs = class Bs {
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
      return this.div = document.createElement("div"), s.div = this.div, un.render(s);
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
    return this.div ? un.update(n) : (this.div = document.createElement("div"), n.div = this.div, un.render(n));
  }
  cancel() {
    this._cancelled = !0;
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
};
h(Bs, "XfaLayerBuilder");
let Yi = Bs;
const rl = {
  annotationEditorUIManager: null,
  annotationStorage: null,
  downloadManager: null,
  enableScripting: !1,
  fieldObjectsPromise: null,
  findController: null,
  hasJSActionsPromise: null,
  get linkService() {
    return new Qt();
  }
}, al = /* @__PURE__ */ new Map([["canvasWrapper", 0], ["textLayer", 1], ["annotationLayer", 2], ["annotationEditorLayer", 3], ["xfaLayer", 3]]);
var Ye, je, hi, qe, di, Fe, Ve, At, ui, ci, fi, et, It, Lt, _e, Be, N, ft, Bi, $t, Yn, qn, es, ts, is, sa, ra, ns, ss;
const Hs = class Hs {
  constructor(e) {
    b(this, N);
    b(this, Ye, Pe.ENABLE_FORMS);
    b(this, je, null);
    b(this, hi, !1);
    b(this, qe, !1);
    b(this, di, !1);
    b(this, Fe, null);
    b(this, Ve, null);
    b(this, At, null);
    b(this, ui, null);
    b(this, ci, 1);
    b(this, fi, 1);
    b(this, et, null);
    b(this, It, U.INITIAL);
    b(this, Lt, ce.ENABLE);
    b(this, _e, {
      directDrawing: !0,
      initialOptionalContent: !0,
      regularAnnotations: !0
    });
    b(this, Be, [null, null, null, null]);
    var s, r;
    const t = e.container, i = e.defaultViewport;
    this.id = e.id, this.renderingId = "page" + this.id, f(this, Fe, e.layerProperties || rl), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = e.scale || Rr, this.viewport = i, this.pdfPageRotate = i.rotation, this._optionalContentConfigPromise = e.optionalContentConfigPromise || null, f(this, Lt, e.textLayerMode ?? ce.ENABLE), f(this, Ye, e.annotationMode ?? Pe.ENABLE_FORMS), this.imageResourcesPath = e.imageResourcesPath || "", this.maxCanvasPixels = e.maxCanvasPixels ?? zn.get("maxCanvasPixels"), this.pageColors = e.pageColors || null, f(this, hi, e.enableHWA || !1), this.eventBus = e.eventBus, this.renderingQueue = e.renderingQueue, this.l10n = e.l10n, this.l10n || (this.l10n = new Dt()), this.renderTask = null, this.resume = null, this._isStandalone = !((s = this.renderingQueue) != null && s.hasViewer()), this._container = t, this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.xfaLayer = null, this.structTreeLayer = null, this.drawLayer = null;
    const n = document.createElement("div");
    if (n.className = "page", n.setAttribute("data-page-number", this.id), n.setAttribute("role", "region"), n.setAttribute("data-l10n-id", "pdfjs-page-landmark"), n.setAttribute("data-l10n-args", JSON.stringify({
      page: this.id
    })), this.div = n, c(this, N, Bi).call(this), t == null || t.append(n), this._isStandalone) {
      t == null || t.style.setProperty("--scale-factor", this.scale * be.PDF_TO_CSS_UNITS), (r = this.pageColors) != null && r.background && (t == null || t.style.setProperty("--page-bg-color", this.pageColors.background));
      const {
        optionalContentConfigPromise: l
      } = e;
      l && l.then((d) => {
        l === this._optionalContentConfigPromise && (o(this, _e).initialOptionalContent = d.hasInitialVisibility);
      }), e.l10n || this.l10n.translate(this.div);
    }
  }
  get renderingState() {
    return o(this, It);
  }
  set renderingState(e) {
    if (e !== o(this, It))
      switch (f(this, It, e), o(this, Ve) && (clearTimeout(o(this, Ve)), f(this, Ve, null)), e) {
        case U.PAUSED:
          this.div.classList.remove("loading");
          break;
        case U.RUNNING:
          this.div.classList.add("loadingIcon"), f(this, Ve, setTimeout(() => {
            this.div.classList.add("loading"), f(this, Ve, null);
          }, 0));
          break;
        case U.INITIAL:
        case U.FINISHED:
          this.div.classList.remove("loadingIcon", "loading");
          break;
      }
  }
  setPdfPage(e) {
    var i, n, s, r;
    this._isStandalone && (((i = this.pageColors) == null ? void 0 : i.foreground) === "CanvasText" || ((n = this.pageColors) == null ? void 0 : n.background) === "Canvas") && ((s = this._container) == null || s.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), (r = this._container) == null || r.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = e, this.pdfPageRotate = e.rotate;
    const t = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = e.getViewport({
      scale: this.scale * be.PDF_TO_CSS_UNITS,
      rotation: t
    }), c(this, N, Bi).call(this), this.reset();
  }
  destroy() {
    var e;
    this.reset(), (e = this.pdfPage) == null || e.cleanup();
  }
  hasEditableAnnotations() {
    var e;
    return !!((e = this.annotationLayer) != null && e.hasEditableAnnotations());
  }
  get _textHighlighter() {
    return zi(this, "_textHighlighter", new Jn({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: o(this, Fe).findController
    }));
  }
  reset({
    keepAnnotationLayer: e = !1,
    keepAnnotationEditorLayer: t = !1,
    keepXfaLayer: i = !1,
    keepTextLayer: n = !1,
    keepCanvasWrapper: s = !1
  } = {}) {
    var L, I, P, S, T;
    this.cancelRendering({
      keepAnnotationLayer: e,
      keepAnnotationEditorLayer: t,
      keepXfaLayer: i,
      keepTextLayer: n
    }), this.renderingState = U.INITIAL;
    const r = this.div, l = r.childNodes, d = e && ((L = this.annotationLayer) == null ? void 0 : L.div) || null, u = t && ((I = this.annotationEditorLayer) == null ? void 0 : I.div) || null, g = i && ((P = this.xfaLayer) == null ? void 0 : P.div) || null, E = n && ((S = this.textLayer) == null ? void 0 : S.div) || null, w = s && o(this, je) || null;
    for (let M = l.length - 1; M >= 0; M--) {
      const v = l[M];
      switch (v) {
        case d:
        case u:
        case g:
        case E:
        case w:
          continue;
      }
      v.remove();
      const C = o(this, Be).indexOf(v);
      C >= 0 && (o(this, Be)[C] = null);
    }
    r.removeAttribute("data-loaded"), d && this.annotationLayer.hide(), u && this.annotationEditorLayer.hide(), g && this.xfaLayer.hide(), E && this.textLayer.hide(), (T = this.structTreeLayer) == null || T.hide(), !s && o(this, je) && (f(this, je, null), c(this, N, ns).call(this));
  }
  toggleEditingMode(e) {
    this.hasEditableAnnotations() && (f(this, di, e), this.reset({
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
    var r;
    this.scale = e || this.scale, typeof t == "number" && (this.rotation = t), i instanceof Promise && (this._optionalContentConfigPromise = i, i.then((l) => {
      i === this._optionalContentConfigPromise && (o(this, _e).initialOptionalContent = l.hasInitialVisibility);
    })), o(this, _e).directDrawing = !0;
    const s = (this.rotation + this.pdfPageRotate) % 360;
    if (this.viewport = this.viewport.clone({
      scale: this.scale * be.PDF_TO_CSS_UNITS,
      rotation: s
    }), c(this, N, Bi).call(this), this._isStandalone && ((r = this._container) == null || r.style.setProperty("--scale-factor", this.viewport.scale)), this.canvas) {
      let l = !1;
      if (o(this, qe)) {
        if (this.maxCanvasPixels === 0)
          l = !0;
        else if (this.maxCanvasPixels > 0) {
          const {
            width: u,
            height: g
          } = this.viewport, {
            sx: E,
            sy: w
          } = this.outputScale;
          l = (Math.floor(u) * E | 0) * (Math.floor(g) * w | 0) > this.maxCanvasPixels;
        }
      }
      const d = n >= 0 && n < 1e3;
      if (d || l) {
        if (d && !l && this.renderingState !== U.FINISHED && (this.cancelRendering({
          keepAnnotationLayer: !0,
          keepAnnotationEditorLayer: !0,
          keepXfaLayer: !0,
          keepTextLayer: !0,
          cancelExtraDelay: n
        }), this.renderingState = U.FINISHED, o(this, _e).directDrawing = !1), this.cssTransform({
          redrawAnnotationLayer: !0,
          redrawAnnotationEditorLayer: !0,
          redrawXfaLayer: !0,
          redrawTextLayer: !d,
          hideTextLayer: d
        }), d)
          return;
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: !0,
          timestamp: performance.now(),
          error: o(this, et)
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
    var r;
    this.renderTask && (this.renderTask.cancel(s), this.renderTask = null), this.resume = null, this.textLayer && (!n || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.annotationLayer && (!e || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationEditorLayer && (!t || !this.annotationEditorLayer.div) && (this.drawLayer && (this.drawLayer.cancel(), this.drawLayer = null), this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!i || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, (r = this._textHighlighter) == null || r.disable());
  }
  cssTransform({
    redrawAnnotationLayer: e = !1,
    redrawAnnotationEditorLayer: t = !1,
    redrawXfaLayer: i = !1,
    redrawTextLayer: n = !1,
    hideTextLayer: s = !1
  }) {
    var d;
    const {
      canvas: r
    } = this;
    if (!r)
      return;
    const l = o(this, At);
    if (this.viewport !== l) {
      const u = (360 + this.viewport.rotation - l.rotation) % 360;
      if (u === 90 || u === 270) {
        const {
          width: g,
          height: E
        } = this.viewport, w = E / g, L = g / E;
        r.style.transform = `rotate(${u}deg) scale(${w},${L})`;
      } else
        r.style.transform = u === 0 ? "" : `rotate(${u}deg)`;
    }
    e && this.annotationLayer && c(this, N, Yn).call(this), t && this.annotationEditorLayer && (this.drawLayer && c(this, N, es).call(this), c(this, N, qn).call(this)), i && this.xfaLayer && c(this, N, ts).call(this), this.textLayer && (s ? (this.textLayer.hide(), (d = this.structTreeLayer) == null || d.hide()) : n && c(this, N, is).call(this));
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
    this.renderingState !== U.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: e,
      l10n: t,
      pageColors: i,
      pdfPage: n,
      viewport: s
    } = this;
    if (!n)
      throw this.renderingState = U.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = U.RUNNING;
    let r = o(this, je);
    if (r || (r = f(this, je, document.createElement("div")), r.classList.add("canvasWrapper"), c(this, N, ft).call(this, r, "canvasWrapper")), !this.textLayer && o(this, Lt) !== ce.DISABLE && !n.isPureXfa && (this._accessibilityManager || (this._accessibilityManager = new Zn()), this.textLayer = new Ji({
      pdfPage: n,
      highlighter: this._textHighlighter,
      accessibilityManager: this._accessibilityManager,
      enablePermissions: o(this, Lt) === ce.ENABLE_PERMISSIONS,
      onAppend: /* @__PURE__ */ h((x) => {
        this.l10n.pause(), c(this, N, ft).call(this, x, "textLayer"), this.l10n.resume();
      }, "onAppend")
    })), !this.annotationLayer && o(this, Ye) !== Pe.DISABLE) {
      const {
        annotationStorage: x,
        annotationEditorUIManager: j,
        downloadManager: D,
        enableScripting: k,
        fieldObjectsPromise: z,
        hasJSActionsPromise: ut,
        linkService: ba
      } = o(this, Fe);
      this._annotationCanvasMap || (this._annotationCanvasMap = /* @__PURE__ */ new Map()), this.annotationLayer = new Gi({
        pdfPage: n,
        annotationStorage: x,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: o(this, Ye) === Pe.ENABLE_FORMS,
        linkService: ba,
        downloadManager: D,
        enableScripting: k,
        hasJSActionsPromise: ut,
        fieldObjectsPromise: z,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager,
        annotationEditorUIManager: j,
        onAppend: /* @__PURE__ */ h((Ea) => {
          c(this, N, ft).call(this, Ea, "annotationLayer");
        }, "onAppend")
      });
    }
    const l = /* @__PURE__ */ h((x) => {
      if (I == null || I(!1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = U.PAUSED, this.resume = () => {
          this.renderingState = U.RUNNING, x();
        };
        return;
      }
      x();
    }, "renderContinueCallback"), {
      width: d,
      height: u
    } = s, g = document.createElement("canvas");
    g.setAttribute("role", "presentation");
    const E = !!(i != null && i.background && (i != null && i.foreground)), w = this.canvas, L = !w && !E;
    this.canvas = g, f(this, At, s);
    let I = /* @__PURE__ */ h((x) => {
      if (L) {
        r.prepend(g), I = null;
        return;
      }
      x && (w ? (w.replaceWith(g), w.width = w.height = 0) : r.prepend(g), I = null);
    }, "showCanvas");
    const P = g.getContext("2d", {
      alpha: !1,
      willReadFrequently: !o(this, hi)
    }), S = this.outputScale = new ho();
    if (this.maxCanvasPixels === 0) {
      const x = 1 / this.scale;
      S.sx *= x, S.sy *= x, f(this, qe, !0);
    } else if (this.maxCanvasPixels > 0) {
      const x = d * u, j = Math.sqrt(this.maxCanvasPixels / x);
      S.sx > j || S.sy > j ? (S.sx = j, S.sy = j, f(this, qe, !0)) : f(this, qe, !1);
    }
    const T = ir(S.sx), M = ir(S.sy), v = g.width = Li(Ti(d * S.sx), T[0]), C = g.height = Li(Ti(u * S.sy), M[0]), F = Li(Ti(d), T[1]), B = Li(Ti(u), M[1]);
    S.sx = v / F, S.sy = C / B, o(this, ci) !== T[1] && (e.style.setProperty("--scale-round-x", `${T[1]}px`), f(this, ci, T[1])), o(this, fi) !== M[1] && (e.style.setProperty("--scale-round-y", `${M[1]}px`), f(this, fi, M[1]));
    const W = S.scaled ? [S.sx, 0, 0, S.sy, 0, 0] : null, V = {
      canvasContext: P,
      transform: W,
      viewport: s,
      annotationMode: o(this, Ye),
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors: i,
      isEditing: o(this, di)
    }, p = this.renderTask = n.render(V);
    p.onContinue = l;
    const _ = p.promise.then(async () => {
      var j;
      I == null || I(!0), await c(this, N, ss).call(this, p), this.structTreeLayer || (this.structTreeLayer = new Qi(n, s.rawDims)), c(this, N, is).call(this), this.annotationLayer && await c(this, N, Yn).call(this);
      const {
        annotationEditorUIManager: x
      } = o(this, Fe);
      x && (this.drawLayer || (this.drawLayer = new Gn({
        pageIndex: this.id
      })), await c(this, N, es).call(this), this.drawLayer.setParent(r), this.annotationEditorLayer || (this.annotationEditorLayer = new Un({
        uiManager: x,
        pdfPage: n,
        l10n: t,
        structTreeLayer: this.structTreeLayer,
        accessibilityManager: this._accessibilityManager,
        annotationLayer: (j = this.annotationLayer) == null ? void 0 : j.annotationLayer,
        textLayer: this.textLayer,
        drawLayer: this.drawLayer.getDrawLayer(),
        onAppend: /* @__PURE__ */ h((D) => {
          c(this, N, ft).call(this, D, "annotationEditorLayer");
        }, "onAppend")
      })), c(this, N, qn).call(this));
    }, (x) => (x instanceof xn ? (w == null || w.remove(), c(this, N, ns).call(this)) : I == null || I(!0), c(this, N, ss).call(this, p, x)));
    if (n.isPureXfa) {
      if (!this.xfaLayer) {
        const {
          annotationStorage: x,
          linkService: j
        } = o(this, Fe);
        this.xfaLayer = new Yi({
          pdfPage: n,
          annotationStorage: x,
          linkService: j
        });
      }
      c(this, N, ts).call(this);
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
    } = o(this, _e);
    return e && t && i ? this.canvas : null;
  }
};
Ye = new WeakMap(), je = new WeakMap(), hi = new WeakMap(), qe = new WeakMap(), di = new WeakMap(), Fe = new WeakMap(), Ve = new WeakMap(), At = new WeakMap(), ui = new WeakMap(), ci = new WeakMap(), fi = new WeakMap(), et = new WeakMap(), It = new WeakMap(), Lt = new WeakMap(), _e = new WeakMap(), Be = new WeakMap(), N = new WeakSet(), ft = /* @__PURE__ */ h(function(e, t) {
  const i = al.get(t), n = o(this, Be)[i];
  if (o(this, Be)[i] = e, n) {
    n.replaceWith(e);
    return;
  }
  for (let s = i - 1; s >= 0; s--) {
    const r = o(this, Be)[s];
    if (r) {
      r.after(e);
      return;
    }
  }
  this.div.prepend(e);
}, "#addLayer"), Bi = /* @__PURE__ */ h(function() {
  const {
    viewport: e
  } = this;
  if (this.pdfPage) {
    if (o(this, ui) === e.rotation)
      return;
    f(this, ui, e.rotation);
  }
  uo(this.div, e, !0, !1);
}, "#setDimensions"), $t = /* @__PURE__ */ h(function(e, t) {
  this.eventBus.dispatch(e, {
    source: this,
    pageNumber: this.id,
    error: t
  });
}, "#dispatchLayerRendered"), Yn = /* @__PURE__ */ h(async function() {
  let e = null;
  try {
    await this.annotationLayer.render(this.viewport, {
      structTreeLayer: this.structTreeLayer
    }, "display");
  } catch (t) {
    console.error("#renderAnnotationLayer:", t), e = t;
  } finally {
    c(this, N, $t).call(this, "annotationlayerrendered", e);
  }
}, "#renderAnnotationLayer"), qn = /* @__PURE__ */ h(async function() {
  let e = null;
  try {
    await this.annotationEditorLayer.render(this.viewport, "display");
  } catch (t) {
    console.error("#renderAnnotationEditorLayer:", t), e = t;
  } finally {
    c(this, N, $t).call(this, "annotationeditorlayerrendered", e);
  }
}, "#renderAnnotationEditorLayer"), es = /* @__PURE__ */ h(async function() {
  try {
    await this.drawLayer.render("display");
  } catch (e) {
    console.error("#renderDrawLayer:", e);
  }
}, "#renderDrawLayer"), ts = /* @__PURE__ */ h(async function() {
  var t;
  let e = null;
  try {
    const i = await this.xfaLayer.render(this.viewport, "display");
    i != null && i.textDivs && this._textHighlighter && c(this, N, ra).call(this, i.textDivs);
  } catch (i) {
    console.error("#renderXfaLayer:", i), e = i;
  } finally {
    (t = this.xfaLayer) != null && t.div && (this.l10n.pause(), c(this, N, ft).call(this, this.xfaLayer.div, "xfaLayer"), this.l10n.resume()), c(this, N, $t).call(this, "xfalayerrendered", e);
  }
}, "#renderXfaLayer"), is = /* @__PURE__ */ h(async function() {
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
  c(this, N, $t).call(this, "textlayerrendered", e), c(this, N, sa).call(this);
}, "#renderTextLayer"), sa = /* @__PURE__ */ h(async function() {
  var t, i, n;
  if (!this.textLayer)
    return;
  const e = await ((t = this.structTreeLayer) == null ? void 0 : t.render());
  e && (this.l10n.pause(), (i = this.structTreeLayer) == null || i.addElementsToTextLayer(), this.canvas && e.parentNode !== this.canvas && this.canvas.append(e), this.l10n.resume()), (n = this.structTreeLayer) == null || n.show();
}, "#renderStructTreeLayer"), ra = /* @__PURE__ */ h(async function(e) {
  const t = await this.pdfPage.getTextContent(), i = [];
  for (const n of t.items)
    i.push(n.str);
  this._textHighlighter.setTextMapping(e, i), this._textHighlighter.enable();
}, "#buildXfaTextContentItems"), ns = /* @__PURE__ */ h(function() {
  const {
    canvas: e
  } = this;
  e && (e.remove(), e.width = e.height = 0, this.canvas = null, f(this, At, null));
}, "#resetCanvas"), ss = /* @__PURE__ */ h(async function(e, t = null) {
  if (e === this.renderTask && (this.renderTask = null), t instanceof xn) {
    f(this, et, null);
    return;
  }
  if (f(this, et, t), this.renderingState = U.FINISHED, o(this, _e).regularAnnotations = !e.separateAnnots, this.eventBus.dispatch("pagerendered", {
    source: this,
    pageNumber: this.id,
    cssTransform: !1,
    timestamp: performance.now(),
    error: o(this, et)
  }), t)
    throw t;
}, "#finishRenderTask"), h(Hs, "PDFPageView");
let qi = Hs;
async function ol(a) {
  const e = "", t = e.split("#", 1)[0];
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
    filename: s || ao(e),
    metadata: n == null ? void 0 : n.getRaw(),
    authors: n == null ? void 0 : n.get("dc:creator"),
    numPages: a.numPages,
    URL: e
  };
}
h(ol, "docProperties");
const Us = class Us {
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
h(Us, "GenericScripting");
let rs = Us;
var de, tt, gi, it, nt, pi, Q, ye, Tt, G, ne, X, aa, Hi, os, oa, Wt;
const $s = class $s {
  constructor({
    eventBus: e,
    externalServices: t = null,
    docProperties: i = null
  }) {
    b(this, X);
    b(this, de, null);
    b(this, tt, null);
    b(this, gi, null);
    b(this, it, null);
    b(this, nt, null);
    b(this, pi, null);
    b(this, Q, null);
    b(this, ye, null);
    b(this, Tt, !1);
    b(this, G, null);
    b(this, ne, null);
    f(this, nt, e), f(this, pi, t), f(this, gi, i);
  }
  setViewer(e) {
    f(this, ye, e);
  }
  async setDocument(e) {
    var l;
    if (o(this, Q) && await c(this, X, Wt).call(this), f(this, Q, e), !e)
      return;
    const [t, i, n] = await Promise.all([e.getFieldObjects(), e.getCalculationOrderIds(), e.getJSActions()]);
    if (!t && !n) {
      await c(this, X, Wt).call(this);
      return;
    }
    if (e !== o(this, Q))
      return;
    try {
      f(this, G, c(this, X, oa).call(this));
    } catch (d) {
      console.error("setDocument:", d), await c(this, X, Wt).call(this);
      return;
    }
    const s = o(this, nt);
    f(this, it, new AbortController());
    const {
      signal: r
    } = o(this, it);
    s._on("updatefromsandbox", (d) => {
      (d == null ? void 0 : d.source) === window && c(this, X, aa).call(this, d.detail);
    }, {
      signal: r
    }), s._on("dispatcheventinsandbox", (d) => {
      var u;
      (u = o(this, G)) == null || u.dispatchEventInSandbox(d.detail);
    }, {
      signal: r
    }), s._on("pagechanging", ({
      pageNumber: d,
      previous: u
    }) => {
      d !== u && (c(this, X, os).call(this, u), c(this, X, Hi).call(this, d));
    }, {
      signal: r
    }), s._on("pagerendered", ({
      pageNumber: d
    }) => {
      this._pageOpenPending.has(d) && d === o(this, ye).currentPageNumber && c(this, X, Hi).call(this, d);
    }, {
      signal: r
    }), s._on("pagesdestroy", async () => {
      var d, u;
      await c(this, X, os).call(this, o(this, ye).currentPageNumber), await ((d = o(this, G)) == null ? void 0 : d.dispatchEventInSandbox({
        id: "doc",
        name: "WillClose"
      })), (u = o(this, de)) == null || u.resolve();
    }, {
      signal: r
    });
    try {
      const d = await o(this, gi).call(this, e);
      if (e !== o(this, Q))
        return;
      await o(this, G).createSandbox({
        objects: t,
        calculationOrder: i,
        appInfo: {
          platform: navigator.platform,
          language: navigator.language
        },
        docInfo: {
          ...d,
          actions: n
        }
      }), s.dispatch("sandboxcreated", {
        source: this
      });
    } catch (d) {
      console.error("setDocument:", d), await c(this, X, Wt).call(this);
      return;
    }
    await ((l = o(this, G)) == null ? void 0 : l.dispatchEventInSandbox({
      id: "doc",
      name: "Open"
    })), await c(this, X, Hi).call(this, o(this, ye).currentPageNumber, !0), Promise.resolve().then(() => {
      e === o(this, Q) && f(this, Tt, !0);
    });
  }
  async dispatchWillSave() {
    var e;
    return (e = o(this, G)) == null ? void 0 : e.dispatchEventInSandbox({
      id: "doc",
      name: "WillSave"
    });
  }
  async dispatchDidSave() {
    var e;
    return (e = o(this, G)) == null ? void 0 : e.dispatchEventInSandbox({
      id: "doc",
      name: "DidSave"
    });
  }
  async dispatchWillPrint() {
    var e;
    if (o(this, G)) {
      await ((e = o(this, ne)) == null ? void 0 : e.promise), f(this, ne, Promise.withResolvers());
      try {
        await o(this, G).dispatchEventInSandbox({
          id: "doc",
          name: "WillPrint"
        });
      } catch (t) {
        throw o(this, ne).resolve(), f(this, ne, null), t;
      }
      await o(this, ne).promise;
    }
  }
  async dispatchDidPrint() {
    var e;
    return (e = o(this, G)) == null ? void 0 : e.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });
  }
  get destroyPromise() {
    var e;
    return ((e = o(this, tt)) == null ? void 0 : e.promise) || null;
  }
  get ready() {
    return o(this, Tt);
  }
  get _pageOpenPending() {
    return zi(this, "_pageOpenPending", /* @__PURE__ */ new Set());
  }
  get _visitedPages() {
    return zi(this, "_visitedPages", /* @__PURE__ */ new Map());
  }
};
de = new WeakMap(), tt = new WeakMap(), gi = new WeakMap(), it = new WeakMap(), nt = new WeakMap(), pi = new WeakMap(), Q = new WeakMap(), ye = new WeakMap(), Tt = new WeakMap(), G = new WeakMap(), ne = new WeakMap(), X = new WeakSet(), aa = /* @__PURE__ */ h(async function(e) {
  var u, g;
  const t = o(this, ye), i = t.isInPresentationMode || t.isChangingPresentationMode, {
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
          const E = Na(l);
          t.spreadMode = E.spreadMode;
        }
        break;
      case "page-num":
        t.currentPageNumber = l + 1;
        break;
      case "print":
        await t.pagesPromise, o(this, nt).dispatch("print", {
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
        o(this, nt).dispatch("download", {
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
        (u = o(this, ne)) == null || u.resolve(), f(this, ne, null);
        break;
    }
    return;
  }
  if (i && e.focus)
    return;
  delete e.id, delete e.siblings;
  const d = s ? [n, ...s] : [n];
  for (const E of d) {
    const w = document.querySelector(`[data-element-id="${E}"]`);
    w ? w.dispatchEvent(new CustomEvent("updatefromsandbox", {
      detail: e
    })) : (g = o(this, Q)) == null || g.annotationStorage.setValue(E, e);
  }
}, "#updateFromSandbox"), Hi = /* @__PURE__ */ h(async function(e, t = !1) {
  const i = o(this, Q), n = this._visitedPages;
  if (t && f(this, de, Promise.withResolvers()), !o(this, de))
    return;
  const s = o(this, ye).getPageView(e - 1);
  if ((s == null ? void 0 : s.renderingState) !== U.FINISHED) {
    this._pageOpenPending.add(e);
    return;
  }
  this._pageOpenPending.delete(e);
  const r = (async () => {
    var d, u;
    const l = await (n.has(e) ? null : (d = s.pdfPage) == null ? void 0 : d.getJSActions());
    i === o(this, Q) && await ((u = o(this, G)) == null ? void 0 : u.dispatchEventInSandbox({
      id: "page",
      name: "PageOpen",
      pageNumber: e,
      actions: l
    }));
  })();
  n.set(e, r);
}, "#dispatchPageOpen"), os = /* @__PURE__ */ h(async function(e) {
  var s;
  const t = o(this, Q), i = this._visitedPages;
  if (!o(this, de) || this._pageOpenPending.has(e))
    return;
  const n = i.get(e);
  n && (i.set(e, null), await n, t === o(this, Q) && await ((s = o(this, G)) == null ? void 0 : s.dispatchEventInSandbox({
    id: "page",
    name: "PageClose",
    pageNumber: e
  })));
}, "#dispatchPageClose"), oa = /* @__PURE__ */ h(function() {
  if (f(this, tt, Promise.withResolvers()), o(this, G))
    throw new Error("#initScripting: Scripting already exists.");
  return o(this, pi).createScripting();
}, "#initScripting"), Wt = /* @__PURE__ */ h(async function() {
  var e, t, i, n;
  if (!o(this, G)) {
    f(this, Q, null), (e = o(this, tt)) == null || e.resolve();
    return;
  }
  o(this, de) && (await Promise.race([o(this, de).promise, new Promise((s) => {
    setTimeout(s, 1e3);
  })]).catch(() => {
  }), f(this, de, null)), f(this, Q, null);
  try {
    await o(this, G).destroySandbox();
  } catch {
  }
  (t = o(this, ne)) == null || t.reject(new Error("Scripting destroyed.")), f(this, ne, null), (i = o(this, it)) == null || i.abort(), f(this, it, null), this._pageOpenPending.clear(), this._visitedPages.clear(), f(this, G, null), f(this, Tt, !1), (n = o(this, tt)) == null || n.resolve();
}, "#destroyScripting"), h($s, "PDFScriptingManager");
let as = $s;
const Ws = class Ws extends as {
  constructor(e) {
    e.externalServices || window.addEventListener("updatefromsandbox", (t) => {
      e.eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: t.detail
      });
    }), e.externalServices || (e.externalServices = {
      createScripting: /* @__PURE__ */ h(() => new rs(e.sandboxBundleSrc), "createScripting")
    }), e.docProperties || (e.docProperties = (t) => ol(t)), super(e);
  }
};
h(Ws, "PDFScriptingManagerComponents");
let ls = Ws;
const ll = 3e4, zs = class zs {
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
    var t;
    this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), !this.pdfViewer.forceRendering(e) && (this.isThumbnailViewEnabled && ((t = this.pdfThumbnailViewer) != null && t.forceRendering()) || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), ll)));
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
      for (let w = 1, L = d - l; w < L; w++) {
        const I = i ? l + w : d - w;
        if (E.has(I))
          continue;
        const P = t[I - 1];
        if (!this.isViewFinished(P))
          return P;
      }
    }
    let u = i ? d : l - 2, g = t[u];
    return g && !this.isViewFinished(g) || n && (u += i ? 1 : -1, g = t[u], g && !this.isViewFinished(g)) ? g : null;
  }
  isViewFinished(e) {
    return e.renderingState === U.FINISHED;
  }
  renderView(e) {
    switch (e.renderingState) {
      case U.FINISHED:
        return !1;
      case U.PAUSED:
        this.highestPriorityPage = e.renderingId, e.resume();
        break;
      case U.RUNNING:
        this.highestPriorityPage = e.renderingId;
        break;
      case U.INITIAL:
        this.highestPriorityPage = e.renderingId, e.draw().finally(() => {
          this.renderHighestPriority();
        }).catch((t) => {
          t instanceof xn || console.error("renderView:", t);
        });
        break;
    }
    return !0;
  }
};
h(zs, "PDFRenderingQueue");
let hs = zs;
const Lr = 10, Mi = {
  FORCE_SCROLL_MODE_PAGE: 1e4,
  FORCE_LAZY_PAGE_INIT: 5e3,
  PAUSE_EAGER_PAGE_INIT: 250
};
function Tr(a) {
  return Object.values(q).includes(a) && a !== q.DISABLE;
}
h(Tr, "isValidAnnotationEditorMode");
var ve, st, mi, us;
const Gs = class Gs {
  constructor(e) {
    b(this, mi);
    b(this, ve, /* @__PURE__ */ new Set());
    b(this, st, 0);
    f(this, st, e);
  }
  push(e) {
    const t = o(this, ve);
    t.has(e) && t.delete(e), t.add(e), t.size > o(this, st) && c(this, mi, us).call(this);
  }
  resize(e, t = null) {
    f(this, st, e);
    const i = o(this, ve);
    if (t) {
      const n = i.size;
      let s = 1;
      for (const r of i)
        if (t.has(r.id) && (i.delete(r), i.add(r)), ++s > n)
          break;
    }
    for (; i.size > o(this, st); )
      c(this, mi, us).call(this);
  }
  has(e) {
    return o(this, ve).has(e);
  }
  [Symbol.iterator]() {
    return o(this, ve).keys();
  }
};
ve = new WeakMap(), st = new WeakMap(), mi = new WeakSet(), us = /* @__PURE__ */ h(function() {
  const e = o(this, ve).keys().next().value;
  e == null || e.destroy(), o(this, ve).delete(e);
}, "#destroyFirstView"), h(Gs, "PDFPageViewBuffer");
let ds = Gs;
var He, bi, Ei, ue, ee, rt, wi, _i, yi, vi, Pi, xi, Si, Ue, at, ot, lt, Rt, $e, Nt, Ai, Ct, ht, We, Ii, Mt, A, la, ha, da, zt, Ui, ua, cs, ca, Se, fs, fa, ga, pa, gs, ma, $i;
const Ks = class Ks {
  constructor(e) {
    b(this, A);
    b(this, He, null);
    b(this, bi, null);
    b(this, Ei, null);
    b(this, ue, q.NONE);
    b(this, ee, null);
    b(this, rt, Pe.ENABLE_FORMS);
    b(this, wi, null);
    b(this, _i, null);
    b(this, yi, !1);
    b(this, vi, !1);
    b(this, Pi, !1);
    b(this, xi, !1);
    b(this, Si, !1);
    b(this, Ue, null);
    b(this, at, null);
    b(this, ot, null);
    b(this, lt, null);
    b(this, Rt, !1);
    b(this, $e, null);
    b(this, Nt, !1);
    b(this, Ai, 0);
    b(this, Ct, new ResizeObserver(c(this, A, ma).bind(this)));
    b(this, ht, null);
    b(this, We, null);
    b(this, Ii, !0);
    b(this, Mt, ce.ENABLE);
    var n, s;
    const t = "4.10.38";
    if (ur !== t)
      throw new Error(`The API version "${ur}" does not match the Viewer version "${t}".`);
    if (this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, ((n = this.container) == null ? void 0 : n.tagName) !== "DIV" || ((s = this.viewer) == null ? void 0 : s.tagName) !== "DIV")
      throw new Error("Invalid `container` and/or `viewer` option.");
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
      throw new Error("The `container` must be absolutely positioned.");
    o(this, Ct).observe(this.container), this.eventBus = e.eventBus, this.linkService = e.linkService || new Qt(), this.downloadManager = e.downloadManager || null, this.findController = e.findController || null, f(this, bi, e.altTextManager || null), f(this, _i, e.editorUndoBar || null), this.findController && (this.findController.onIsPageVisible = (r) => this._getVisiblePages().ids.has(r)), this._scriptingManager = e.scriptingManager || null, f(this, Mt, e.textLayerMode ?? ce.ENABLE), f(this, rt, e.annotationMode ?? Pe.ENABLE_FORMS), f(this, ue, e.annotationEditorMode ?? q.NONE), f(this, Ei, e.annotationEditorHighlightColors || null), f(this, vi, e.enableHighlightFloatingButton === !0), f(this, xi, e.enableUpdatedAddImage === !0), f(this, Si, e.enableNewAltTextWhenAddingImage === !0), this.imageResourcesPath = e.imageResourcesPath || "", this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.removePageBorders = e.removePageBorders || !1, this.maxCanvasPixels = e.maxCanvasPixels, this.l10n = e.l10n, this.l10n || (this.l10n = new Dt()), f(this, Pi, e.enablePermissions || !1), this.pageColors = e.pageColors || null, f(this, at, e.mlManager || null), f(this, yi, e.enableHWA || !1), f(this, Ii, e.supportsPinchToZoom !== !1), this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new hs(), this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue;
    const {
      abortSignal: i
    } = e;
    i == null || i.addEventListener("abort", () => {
      o(this, Ct).disconnect(), f(this, Ct, null);
    }, {
      once: !0
    }), this.scroll = xa(this.container, this._scrollUpdate.bind(this), i), this.presentationModeState = pt.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), c(this, A, gs).call(this), this.eventBus._on("thumbnailrendered", ({
      pageNumber: r,
      pdfPage: l
    }) => {
      const d = this._pages[r - 1];
      o(this, He).has(d) || l == null || l.cleanup();
    }), e.l10n || this.l10n.translate(this.container);
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(e) {
    return this._pages[e];
  }
  getCachedPageViews() {
    return new Set(o(this, He));
  }
  get pageViewsReady() {
    return this._pages.every((e) => e == null ? void 0 : e.pdfPage);
  }
  get renderForms() {
    return o(this, rt) === Pe.ENABLE_FORMS;
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
    var n;
    if (this._currentPageNumber === e)
      return t && c(this, A, fs).call(this), !0;
    if (!(0 < e && e <= this.pagesCount))
      return !1;
    const i = this._currentPageNumber;
    return this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: e,
      pageLabel: ((n = this._pageLabels) == null ? void 0 : n[e - 1]) ?? null,
      previous: i
    }), t && c(this, A, fs).call(this), !0;
  }
  get currentPageLabel() {
    var e;
    return ((e = this._pageLabels) == null ? void 0 : e[this._currentPageNumber - 1]) ?? null;
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
    return this._currentScale !== on ? this._currentScale : Rr;
  }
  set currentScale(e) {
    if (isNaN(e))
      throw new Error("Invalid numeric scale.");
    this.pdfDocument && c(this, A, Se).call(this, e, {
      noScroll: !1
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(e) {
    this.pdfDocument && c(this, A, Se).call(this, e, {
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
    }), this._currentScaleValue && c(this, A, Se).call(this, this._currentScaleValue, {
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
    return zi(this, "_layerProperties", {
      get annotationEditorUIManager() {
        return o(e, ee);
      },
      get annotationStorage() {
        var t;
        return (t = e.pdfDocument) == null ? void 0 : t.annotationStorage;
      },
      get downloadManager() {
        return e.downloadManager;
      },
      get enableScripting() {
        return !!e._scriptingManager;
      },
      get fieldObjectsPromise() {
        var t;
        return (t = e.pdfDocument) == null ? void 0 : t.getFieldObjects();
      },
      get findController() {
        return e.findController;
      },
      get hasJSActionsPromise() {
        var t;
        return (t = e.pdfDocument) == null ? void 0 : t.hasJSActions();
      },
      get linkService() {
        return e.linkService;
      }
    });
  }
  async getAllText() {
    const e = [], t = [];
    for (let i = 1, n = this.pdfDocument.numPages; i <= n; ++i) {
      if (o(this, Nt))
        return null;
      t.length = 0;
      const s = await this.pdfDocument.getPage(i), {
        items: r
      } = await s.getTextContent();
      for (const l of r)
        l.str && t.push(l.str), l.hasEOL && t.push(`
`);
      e.push(Kt(t.join("")));
    }
    return e.join(`
`);
  }
  setDocument(e) {
    var w, L, I;
    if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
      source: this
    }), this._cancelRendering(), this._resetView(), (w = this.findController) == null || w.setDocument(null), (L = this._scriptingManager) == null || L.setDocument(null), (I = o(this, ee)) == null || I.destroy(), f(this, ee, null)), this.pdfDocument = e, !e)
      return;
    const t = e.numPages, i = e.getPage(1), n = e.getOptionalContentConfig({
      intent: "display"
    }), s = o(this, Pi) ? e.getPermissions() : Promise.resolve(), {
      eventBus: r,
      pageColors: l,
      viewer: d
    } = this;
    f(this, Ue, new AbortController());
    const {
      signal: u
    } = o(this, Ue);
    if (t > Mi.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const P = this._scrollMode = O.PAGE;
      r.dispatch("scrollmodechanged", {
        source: this,
        mode: P
      });
    }
    this._pagesCapability.promise.then(() => {
      r.dispatch("pagesloaded", {
        source: this,
        pagesCount: t
      });
    }, () => {
    });
    const g = /* @__PURE__ */ h((P) => {
      const S = this._pages[P.pageNumber - 1];
      S && o(this, He).push(S);
    }, "onBeforeDraw");
    r._on("pagerender", g, {
      signal: u
    });
    const E = /* @__PURE__ */ h((P) => {
      P.cssTransform || (this._onePageRenderedCapability.resolve({
        timestamp: P.timestamp
      }), r._off("pagerendered", E));
    }, "onAfterDraw");
    r._on("pagerendered", E, {
      signal: u
    }), Promise.all([i, s]).then(([P, S]) => {
      var W, V;
      if (e !== this.pdfDocument)
        return;
      this._firstPageCapability.resolve(P), this._optionalContentConfigPromise = n;
      const {
        annotationEditorMode: T,
        annotationMode: M,
        textLayerMode: v
      } = c(this, A, la).call(this, S);
      if (v !== ce.DISABLE) {
        const p = f(this, $e, document.createElement("div"));
        p.id = "hiddenCopyElement", d.before(p);
      }
      if (typeof AbortSignal.any == "function" && T !== q.DISABLE) {
        const p = T;
        e.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : Tr(p) ? (f(this, ee, new io(this.container, d, o(this, bi), r, e, l, o(this, Ei), o(this, vi), o(this, xi), o(this, Si), o(this, at), o(this, _i), o(this, Ii))), r.dispatch("annotationeditoruimanager", {
          source: this,
          uiManager: o(this, ee)
        }), p !== q.NONE && (p === q.STAMP && ((W = o(this, at)) == null || W.loadModel("altText")), o(this, ee).updateMode(p))) : console.error(`Invalid AnnotationEditor mode: ${p}`);
      }
      const C = this._scrollMode === O.PAGE ? null : d, F = this.currentScale, B = P.getViewport({
        scale: F * be.PDF_TO_CSS_UNITS
      });
      d.style.setProperty("--scale-factor", B.scale), l != null && l.background && d.style.setProperty("--page-bg-color", l.background), ((l == null ? void 0 : l.foreground) === "CanvasText" || (l == null ? void 0 : l.background) === "Canvas") && (d.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), d.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "ButtonText")));
      for (let p = 1; p <= t; ++p) {
        const _ = new qi({
          container: C,
          eventBus: r,
          id: p,
          scale: F,
          defaultViewport: B.clone(),
          optionalContentConfigPromise: n,
          renderingQueue: this.renderingQueue,
          textLayerMode: v,
          annotationMode: M,
          imageResourcesPath: this.imageResourcesPath,
          maxCanvasPixels: this.maxCanvasPixels,
          pageColors: l,
          l10n: this.l10n,
          layerProperties: this._layerProperties,
          enableHWA: o(this, yi)
        });
        this._pages.push(_);
      }
      (V = this._pages[0]) == null || V.setPdfPage(P), this._scrollMode === O.PAGE ? c(this, A, zt).call(this) : this._spreadMode !== Z.NONE && this._updateSpreadMode(), c(this, A, ha).call(this, u).then(async () => {
        var _, x;
        if (e !== this.pdfDocument)
          return;
        if ((_ = this.findController) == null || _.setDocument(e), (x = this._scriptingManager) == null || x.setDocument(e), o(this, $e) && document.addEventListener("copy", c(this, A, da).bind(this, v), {
          signal: u
        }), o(this, ee) && r.dispatch("annotationeditormodechanged", {
          source: this,
          mode: o(this, ue)
        }), e.loadingParams.disableAutoFetch || t > Mi.FORCE_LAZY_PAGE_INIT) {
          this._pagesCapability.resolve();
          return;
        }
        let p = t - 1;
        if (p <= 0) {
          this._pagesCapability.resolve();
          return;
        }
        for (let j = 2; j <= t; ++j) {
          const D = e.getPage(j).then((k) => {
            const z = this._pages[j - 1];
            z.pdfPage || z.setPdfPage(k), --p === 0 && this._pagesCapability.resolve();
          }, (k) => {
            console.error(`Unable to get page ${j} to initialize viewer`, k), --p === 0 && this._pagesCapability.resolve();
          });
          j % Mi.PAUSE_EAGER_PAGE_INIT === 0 && await D;
        }
      }), r.dispatch("pagesinit", {
        source: this
      }), e.getMetadata().then(({
        info: p
      }) => {
        e === this.pdfDocument && p.Language && (d.lang = p.Language);
      }), this.defaultRenderingQueue && this.update();
    }).catch((P) => {
      console.error("Unable to initialize viewer", P), this._pagesCapability.reject(P);
    });
  }
  setPageLabels(e) {
    var t;
    if (this.pdfDocument) {
      e ? Array.isArray(e) && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("setPageLabels: Invalid page labels.")) : this._pageLabels = null;
      for (let i = 0, n = this._pages.length; i < n; i++)
        this._pages[i].setPageLabel(((t = this._pageLabels) == null ? void 0 : t[i]) ?? null);
    }
  }
  _resetView() {
    var e, t;
    this._pages = [], this._currentPageNumber = 1, this._currentScale = on, this._currentScaleValue = null, this._pageLabels = null, f(this, He, new ds(Lr)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = Promise.withResolvers(), this._onePageRenderedCapability = Promise.withResolvers(), this._pagesCapability = Promise.withResolvers(), this._scrollMode = O.VERTICAL, this._previousScrollMode = O.UNKNOWN, this._spreadMode = Z.NONE, f(this, ht, {
      previousPageNumber: 1,
      scrollDown: !0,
      pages: []
    }), (e = o(this, Ue)) == null || e.abort(), f(this, Ue, null), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), (t = o(this, $e)) == null || t.remove(), f(this, $e, null), c(this, A, $i).call(this);
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
    let r = 0, l = 0, d = 0, u = 0, g, E;
    const w = s.rotation % 180 !== 0, L = (w ? s.height : s.width) / s.scale / be.PDF_TO_CSS_UNITS, I = (w ? s.width : s.height) / s.scale / be.PDF_TO_CSS_UNITS;
    let P = 0;
    switch (t[1].name) {
      case "XYZ":
        r = t[2], l = t[3], P = t[4], r = r !== null ? r : 0, l = l !== null ? l : I;
        break;
      case "Fit":
      case "FitB":
        P = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        l = t[2], P = "page-width", l === null && this._location ? (r = this._location.left, l = this._location.top) : (typeof l != "number" || l < 0) && (l = I);
        break;
      case "FitV":
      case "FitBV":
        r = t[2], d = L, u = I, P = "page-height";
        break;
      case "FitR":
        r = t[2], l = t[3], d = t[4] - r, u = t[5] - l;
        let v = qs, C = er;
        this.removePageBorders && (v = C = 0), g = (this.container.clientWidth - v) / d / be.PDF_TO_CSS_UNITS, E = (this.container.clientHeight - C) / u / be.PDF_TO_CSS_UNITS, P = Math.min(Math.abs(g), Math.abs(E));
        break;
      default:
        console.error(`scrollPageIntoView: "${t[1].name}" is not a valid destination type.`);
        return;
    }
    if (n || (P && P !== this._currentScale ? this.currentScaleValue = P : this._currentScale === on && (this.currentScaleValue = _a)), P === "page-fit" && !t[4]) {
      c(this, A, Ui).call(this, s);
      return;
    }
    const S = [s.viewport.convertToViewportPoint(r, l), s.viewport.convertToViewportPoint(r + d, l + u)];
    let T = Math.min(S[0][0], S[1][0]), M = Math.min(S[0][1], S[1][1]);
    i || (T = Math.max(T, 0), M = Math.max(M, 0)), c(this, A, Ui).call(this, s, {
      left: T,
      top: M
    });
  }
  _updateLocation(e) {
    const t = this._currentScale, i = this._currentScaleValue, n = parseFloat(i) === t ? Math.round(t * 1e4) / 100 : i, s = e.id, r = this._pages[s - 1], l = this.container, d = r.getPagePoint(l.scrollLeft - e.x, l.scrollTop - e.y), u = Math.round(d[0]), g = Math.round(d[1]);
    let E = `#page=${s}`;
    this.isInPresentationMode || (E += `&zoom=${n},${u},${g}`), this._location = {
      pageNumber: s,
      scale: n,
      top: g,
      left: u,
      rotation: this._pagesRotation,
      pdfOpenParams: E
    };
  }
  update() {
    const e = this._getVisiblePages(), t = e.views, i = t.length;
    if (i === 0)
      return;
    const n = Math.max(Lr, 2 * i + 1);
    o(this, He).resize(n, e.ids), this.renderingQueue.renderHighestPriority(e);
    const s = this._spreadMode === Z.NONE && (this._scrollMode === O.PAGE || this._scrollMode === O.VERTICAL), r = this._currentPageNumber;
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
    return this.presentationModeState === pt.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === pt.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const e = this._scrollMode === O.PAGE ? o(this, ht).pages : this._pages, t = this._scrollMode === O.HORIZONTAL, i = t && this._isContainerRtl;
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
      e.renderingState !== U.FINISHED && e.reset();
  }
  _cancelRendering() {
    for (const e of this._pages)
      e.cancelRendering();
  }
  forceRendering(e) {
    const t = e || this._getVisiblePages(), i = c(this, A, pa).call(this, t), n = this._spreadMode !== Z.NONE && this._scrollMode !== O.HORIZONTAL, s = this.renderingQueue.getHighestPriority(t, this._pages, i, n);
    return s ? (c(this, A, ga).call(this, s).then(() => {
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
      }), n = nr(i);
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
      this.pagesCount > Mi.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = e, this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: e
      }), this._updateScrollMode(this._currentPageNumber));
    }
  }
  _updateScrollMode(e = null) {
    const t = this._scrollMode, i = this.viewer;
    i.classList.toggle("scrollHorizontal", t === O.HORIZONTAL), i.classList.toggle("scrollWrapped", t === O.WRAPPED), !(!this.pdfDocument || !e) && (t === O.PAGE ? c(this, A, zt).call(this) : this._previousScrollMode === O.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && c(this, A, Se).call(this, this._currentScaleValue, {
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
    if (this._scrollMode === O.PAGE)
      c(this, A, zt).call(this);
    else if (t.textContent = "", this._spreadMode === Z.NONE)
      for (const n of this._pages)
        t.append(n.div);
    else {
      const n = this._spreadMode - 1;
      let s = null;
      for (let r = 0, l = i.length; r < l; ++r)
        s === null ? (s = document.createElement("div"), s.className = "spread", t.append(s)) : r % 2 === n && (s = s.cloneNode(!1), t.append(s)), s.append(i[r].div);
    }
    e && (this._currentScaleValue && isNaN(this._currentScaleValue) && c(this, A, Se).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  _getPageAdvance(e, t = !1) {
    switch (this._scrollMode) {
      case O.WRAPPED: {
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
          let u = n.get(r);
          u || n.set(r, u || (u = [])), u.push(s);
        }
        for (const s of n.values()) {
          const r = s.indexOf(e);
          if (r === -1)
            continue;
          const l = s.length;
          if (l === 1)
            break;
          if (t)
            for (let d = r - 1, u = 0; d >= u; d--) {
              const g = s[d], E = s[d + 1] - 1;
              if (g < E)
                return e - E;
            }
          else
            for (let d = r + 1, u = l; d < u; d++) {
              const g = s[d], E = s[d - 1] + 1;
              if (g > E)
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
      case O.HORIZONTAL:
        break;
      case O.PAGE:
      case O.VERTICAL: {
        if (this._spreadMode === Z.NONE)
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
      const r = i > 0 ? Ys : 1 / Ys, l = i > 0 ? Math.ceil : Math.floor;
      i = Math.abs(i);
      do
        s = l((s * r).toFixed(2) * 10) / 10;
      while (--i > 0);
    }
    s = Math.max(ya, Math.min(va, s)), c(this, A, Se).call(this, s, {
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
    return o(this, wi) || f(this, wi, [this.container.offsetTop, this.container.offsetLeft]);
  }
  get annotationEditorMode() {
    return o(this, ee) ? o(this, ue) : q.DISABLE;
  }
  set annotationEditorMode({
    mode: e,
    editId: t = null,
    isFromKeyboard: i = !1
  }) {
    var r;
    if (!o(this, ee))
      throw new Error("The AnnotationEditor is not enabled.");
    if (o(this, ue) === e)
      return;
    if (!Tr(e))
      throw new Error(`Invalid AnnotationEditor mode: ${e}`);
    if (!this.pdfDocument)
      return;
    e === q.STAMP && ((r = o(this, at)) == null || r.loadModel("altText"));
    const {
      eventBus: n
    } = this, s = /* @__PURE__ */ h(() => {
      c(this, A, $i).call(this), f(this, ue, e), o(this, ee).updateMode(e, t, i), n.dispatch("annotationeditormodechanged", {
        source: this,
        mode: e
      });
    }, "updater");
    if (e === q.NONE || o(this, ue) === q.NONE) {
      const l = e !== q.NONE;
      l || this.pdfDocument.annotationStorage.resetModifiedIds();
      for (const u of this._pages)
        u.toggleEditingMode(l);
      const d = c(this, A, fa).call(this);
      if (l && d) {
        c(this, A, $i).call(this), f(this, ot, new AbortController());
        const u = AbortSignal.any([o(this, Ue).signal, o(this, ot).signal]);
        n._on("pagerendered", ({
          pageNumber: g
        }) => {
          d.delete(g), d.size === 0 && f(this, lt, setTimeout(s, 0));
        }, {
          signal: u
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
      o(this, We) !== null && (clearTimeout(o(this, We)), f(this, We, null)), e || this.update();
    }
  }
};
He = new WeakMap(), bi = new WeakMap(), Ei = new WeakMap(), ue = new WeakMap(), ee = new WeakMap(), rt = new WeakMap(), wi = new WeakMap(), _i = new WeakMap(), yi = new WeakMap(), vi = new WeakMap(), Pi = new WeakMap(), xi = new WeakMap(), Si = new WeakMap(), Ue = new WeakMap(), at = new WeakMap(), ot = new WeakMap(), lt = new WeakMap(), Rt = new WeakMap(), $e = new WeakMap(), Nt = new WeakMap(), Ai = new WeakMap(), Ct = new WeakMap(), ht = new WeakMap(), We = new WeakMap(), Ii = new WeakMap(), Mt = new WeakMap(), A = new WeakSet(), la = /* @__PURE__ */ h(function(e) {
  const t = {
    annotationEditorMode: o(this, ue),
    annotationMode: o(this, rt),
    textLayerMode: o(this, Mt)
  };
  return e && (!e.includes(Ni.COPY) && o(this, Mt) === ce.ENABLE && (t.textLayerMode = ce.ENABLE_PERMISSIONS), e.includes(Ni.MODIFY_CONTENTS) || (t.annotationEditorMode = q.DISABLE), !e.includes(Ni.MODIFY_ANNOTATIONS) && !e.includes(Ni.FILL_INTERACTIVE_FORMS) && o(this, rt) === Pe.ENABLE_FORMS && (t.annotationMode = Pe.ENABLE)), t;
}, "#initializePermissions"), ha = /* @__PURE__ */ h(async function(e) {
  if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
    return;
  const t = Promise.withResolvers(), i = new AbortController();
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && t.resolve();
  }, {
    signal: typeof AbortSignal.any == "function" ? AbortSignal.any([e, i.signal]) : e
  }), await Promise.race([this._onePageRenderedCapability.promise, t.promise]), i.abort();
}, "#onePageRenderedOrForceFetch"), da = /* @__PURE__ */ h(function(e, t) {
  const i = document.getSelection(), {
    focusNode: n,
    anchorNode: s
  } = i;
  if (s && n && i.containsNode(o(this, $e))) {
    if (o(this, Rt) || e === ce.ENABLE_PERMISSIONS) {
      Sn(t);
      return;
    }
    f(this, Rt, !0);
    const {
      classList: r
    } = this.viewer;
    r.add("copyAll");
    const l = new AbortController();
    window.addEventListener("keydown", (d) => f(this, Nt, d.key === "Escape"), {
      signal: l.signal
    }), this.getAllText().then(async (d) => {
      d !== null && await navigator.clipboard.writeText(d);
    }).catch((d) => {
      console.warn(`Something goes wrong when extracting the text: ${d.message}`);
    }).finally(() => {
      f(this, Rt, !1), f(this, Nt, !1), l.abort(), r.remove("copyAll");
    }), Sn(t);
  }
}, "#copyCallback"), zt = /* @__PURE__ */ h(function() {
  if (this._scrollMode !== O.PAGE)
    throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
  const e = this._currentPageNumber, t = o(this, ht), i = this.viewer;
  if (i.textContent = "", t.pages.length = 0, this._spreadMode === Z.NONE && !this.isInPresentationMode) {
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
}, "#ensurePageViewVisible"), Ui = /* @__PURE__ */ h(function(e, t = null) {
  const {
    div: i,
    id: n
  } = e;
  if (this._currentPageNumber !== n && this._setCurrentPageNumber(n), this._scrollMode === O.PAGE && (c(this, A, zt).call(this), this.update()), !t && !this.isInPresentationMode) {
    const s = i.offsetLeft + i.clientLeft, r = s + i.clientWidth, {
      scrollLeft: l,
      clientWidth: d
    } = this.container;
    (this._scrollMode === O.HORIZONTAL || s < l || r > l + d) && (t = {
      left: 0,
      top: 0
    });
  }
  Nr(i, t), !this._currentScaleValue && this._location && (this._location = null);
}, "#scrollIntoView"), ua = /* @__PURE__ */ h(function(e) {
  return e === this._currentScale || Math.abs(e - this._currentScale) < 1e-15;
}, "#isSameScale"), cs = /* @__PURE__ */ h(function(e, t, {
  noScroll: i = !1,
  preset: n = !1,
  drawingDelay: s = -1,
  origin: r = null
}) {
  if (this._currentScaleValue = t.toString(), c(this, A, ua).call(this, e)) {
    n && this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: e,
      presetValue: t
    });
    return;
  }
  this.viewer.style.setProperty("--scale-factor", e * be.PDF_TO_CSS_UNITS);
  const l = s >= 0 && s < 1e3;
  this.refresh(!0, {
    scale: e,
    drawingDelay: l ? s : -1
  }), l && f(this, We, setTimeout(() => {
    f(this, We, null), this.refresh();
  }, s));
  const d = this._currentScale;
  if (this._currentScale = e, !i) {
    let u = this._currentPageNumber, g;
    if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (u = this._location.pageNumber, g = [null, {
      name: "XYZ"
    }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
      pageNumber: u,
      destArray: g,
      allowNegativeOffset: !0
    }), Array.isArray(r)) {
      const E = e / d - 1, [w, L] = this.containerTopLeft;
      this.container.scrollLeft += (r[0] - L) * E, this.container.scrollTop += (r[1] - w) * E;
    }
  }
  this.eventBus.dispatch("scalechanging", {
    source: this,
    scale: e,
    presetValue: n ? t : void 0
  }), this.defaultRenderingQueue && this.update();
}, "#setScaleUpdatePages"), ca = /* @__PURE__ */ h(function() {
  return this._spreadMode !== Z.NONE && this._scrollMode !== O.HORIZONTAL ? 2 : 1;
}, "#pageWidthScaleFactor"), Se = /* @__PURE__ */ h(function(e, t) {
  let i = parseFloat(e);
  if (i > 0)
    t.preset = !1, c(this, A, cs).call(this, i, e, t);
  else {
    const n = this._pages[this._currentPageNumber - 1];
    if (!n)
      return;
    let s = qs, r = er;
    this.isInPresentationMode ? (s = r = 4, this._spreadMode !== Z.NONE && (s *= 2)) : this.removePageBorders ? s = r = 0 : this._scrollMode === O.HORIZONTAL && ([s, r] = [r, s]);
    const l = (this.container.clientWidth - s) / n.width * n.scale / o(this, A, ca), d = (this.container.clientHeight - r) / n.height * n.scale;
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
        const u = nr(n) ? l : Math.min(d, l);
        i = Math.min(Pa, u);
        break;
      default:
        console.error(`#setScale: "${e}" is an unknown zoom value.`);
        return;
    }
    t.preset = !0, c(this, A, cs).call(this, i, e, t);
  }
}, "#setScale"), fs = /* @__PURE__ */ h(function() {
  const e = this._pages[this._currentPageNumber - 1];
  this.isInPresentationMode && c(this, A, Se).call(this, this._currentScaleValue, {
    noScroll: !0
  }), c(this, A, Ui).call(this, e);
}, "#resetCurrentPageView"), fa = /* @__PURE__ */ h(function() {
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
}, "#switchToEditAnnotationMode"), ga = /* @__PURE__ */ h(async function(e) {
  if (e.pdfPage)
    return e.pdfPage;
  try {
    const t = await this.pdfDocument.getPage(e.id);
    return e.pdfPage || e.setPdfPage(t), t;
  } catch (t) {
    return console.error("Unable to get page for page view", t), null;
  }
}, "#ensurePdfPageLoaded"), pa = /* @__PURE__ */ h(function(e) {
  var t, i;
  if (((t = e.first) == null ? void 0 : t.id) === 1)
    return !0;
  if (((i = e.last) == null ? void 0 : i.id) === this.pagesCount)
    return !1;
  switch (this._scrollMode) {
    case O.PAGE:
      return o(this, ht).scrollDown;
    case O.HORIZONTAL:
      return this.scroll.right;
  }
  return this.scroll.down;
}, "#getScrollAhead"), gs = /* @__PURE__ */ h(function(e = this.container.clientHeight) {
  e !== o(this, Ai) && (f(this, Ai, e), Ta.setProperty("--viewer-container-height", `${e}px`));
}, "#updateContainerHeightCss"), ma = /* @__PURE__ */ h(function(e) {
  for (const t of e)
    if (t.target === this.container) {
      c(this, A, gs).call(this, Math.floor(t.borderBoxSize[0].blockSize)), f(this, wi, null);
      break;
    }
}, "#resizeObserverCallback"), $i = /* @__PURE__ */ h(function() {
  var e;
  (e = o(this, ot)) == null || e.abort(), f(this, ot, null), o(this, lt) !== null && (clearTimeout(o(this, lt)), f(this, lt, null));
}, "#cleanupSwitchAnnotationEditorMode"), h(Ks, "PDFViewer");
let en = Ks;
const Xs = class Xs extends en {
  _resetView() {
    super._resetView(), this._scrollMode = O.PAGE, this._spreadMode = Z.NONE;
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
h(Xs, "PDFSinglePageViewer");
let ps = Xs;
var Ml = H.AnnotationLayerBuilder, kl = H.DownloadManager, Ol = H.EventBus, Dl = H.FindState, jl = H.GenericL10n, Fl = H.LinkTarget, Vl = H.PDFFindController, Bl = H.PDFHistory, Hl = H.PDFLinkService, Ul = H.PDFPageView, $l = H.PDFScriptingManager, Wl = H.PDFSinglePageViewer, zl = H.PDFViewer, Gl = H.ProgressBar, Kl = H.RenderingStates, Xl = H.ScrollMode, Zl = H.SimpleLinkService, Ql = H.SpreadMode, Jl = H.StructTreeLayerBuilder, Yl = H.TextLayerBuilder, ql = H.XfaLayerBuilder, eh = H.parseQueryString;
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
