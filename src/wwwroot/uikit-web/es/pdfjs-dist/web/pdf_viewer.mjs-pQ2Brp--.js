var Kr = Object.defineProperty;
var Yr = (o) => {
  throw TypeError(o);
};
var So = (o, e, t) => e in o ? Kr(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var d = (o, e) => Kr(o, "name", { value: e, configurable: !0 });
var Z = (o, e, t) => So(o, typeof e != "symbol" ? e + "" : e, t), Gn = (o, e, t) => e.has(o) || Yr("Cannot " + t);
var a = (o, e, t) => (Gn(o, e, "read from private field"), t ? t.call(o) : e.get(o)), p = (o, e, t) => e.has(o) ? Yr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), u = (o, e, t, i) => (Gn(o, e, "write to private field"), i ? i.call(o, t) : e.set(o, t), t), f = (o, e, t) => (Gn(o, e, "access private method"), t);
var Xn = (o, e, t, i) => ({
  set _(n) {
    u(o, e, n, t);
  },
  get _() {
    return a(o, e, i);
  }
});
const {
  AbortException: Co,
  AnnotationEditorLayer: Io,
  AnnotationEditorParamsType: bd,
  AnnotationEditorType: Q,
  AnnotationEditorUIManager: Ao,
  AnnotationLayer: Ro,
  AnnotationMode: be,
  AnnotationType: Ia,
  applyOpacity: wd,
  build: Ed,
  ColorPicker: vd,
  createValidAbsoluteUrl: Aa,
  CSSConstants: yd,
  DOMSVGFactory: xd,
  DrawLayer: Lo,
  FeatureTest: Ra,
  fetchData: Zr,
  findContrastColor: Pd,
  getDocument: _d,
  getFilenameFromUrl: Sd,
  getPdfFilenameFromUrl: To,
  getRGB: Cd,
  getUuid: Id,
  getXfaPageViewport: Ad,
  GlobalWorkerOptions: Rd,
  ImageKind: Ld,
  InvalidPDFException: Td,
  isDataScheme: Nd,
  isPdfFile: No,
  isValidExplicitDest: Mo,
  makeArr: jo,
  makeMap: ko,
  makeObj: Md,
  MathClamp: La,
  noContextMenu: jd,
  normalizeUnicode: Do,
  OPS: kd,
  OutputScale: mn,
  PasswordResponses: Dd,
  PDFDataRangeTransport: Od,
  PDFDateString: Fd,
  PDFWorker: Vd,
  PermissionFlag: At,
  PixelsPerInch: ye,
  RenderingCancelledException: ts,
  renderRichText: Ud,
  ResponseException: Bd,
  setLayerDimensions: Ta,
  shadow: Ei,
  SignatureExtractor: Hd,
  stopEvent: is,
  SupportedImageMimeTypes: Wd,
  TextLayer: Oo,
  TouchManager: $d,
  updateUrlHash: Fo,
  Util: hr,
  VerbosityLevel: zd,
  version: Qr,
  XfaLayer: Kn
} = globalThis.pdfjsLib, Vo = "auto", Na = 1, Jr = 1.1, Uo = 0.1, Bo = 10, Yn = 0, Ho = 1.25, qr = 40, ea = 5, Mt = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
}, me = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_PERMISSIONS: 2
}, j = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2,
  PAGE: 3
}, K = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
function Ma(o, e, t = !1) {
  let i = o.offsetParent;
  if (!i) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }
  let n = o.offsetTop + o.clientTop, s = o.offsetLeft + o.clientLeft;
  for (; i.clientHeight === i.scrollHeight && i.clientWidth === i.scrollWidth || t && (i.classList.contains("markedContent") || getComputedStyle(i).overflow === "hidden"); )
    if (n += i.offsetTop, s += i.offsetLeft, i = i.offsetParent, !i)
      return;
  if (e && (e.top !== void 0 && (n += e.top), e.left !== void 0)) {
    if (t) {
      const r = o.getBoundingClientRect().width, l = La((i.clientWidth - r) / 2, 20, 400);
      s += e.left - l;
    } else
      s += e.left;
    i.scrollLeft = s;
  }
  i.scrollTop = n;
}
d(Ma, "scrollIntoView");
function Wo(o, e, t = void 0) {
  const i = /* @__PURE__ */ d(function(r) {
    s || (s = window.requestAnimationFrame(/* @__PURE__ */ d(function() {
      s = null;
      const h = o.scrollLeft, c = n.lastX;
      h !== c && (n.right = h > c), n.lastX = h;
      const m = o.scrollTop, w = n.lastY;
      m !== w && (n.down = m > w), n.lastY = m, e(n);
    }, "viewAreaElementScrolled")));
  }, "debounceScroll"), n = {
    right: !0,
    down: !0,
    lastX: o.scrollLeft,
    lastY: o.scrollTop,
    _eventHandler: i
  };
  let s = null;
  return o.addEventListener("scroll", i, {
    useCapture: !0,
    signal: t
  }), t?.addEventListener("abort", () => window.cancelAnimationFrame(s), {
    once: !0
  }), n;
}
d(Wo, "watchScroll");
function zn(o) {
  const e = /* @__PURE__ */ new Map();
  for (const [t, i] of new URLSearchParams(o))
    e.set(t.toLowerCase(), i);
  return e;
}
d(zn, "parseQueryString");
const ta = /[\x00-\x1F]/g;
function mi(o, e = !1) {
  return ta.test(o) ? e ? o.replaceAll(ta, (t) => t === "\0" ? "" : " ") : o.replaceAll("\0", "") : o;
}
d(mi, "removeNullCharacters");
function vi(o, e, t = 0) {
  let i = t, n = o.length - 1;
  if (n < 0 || !e(o[n]))
    return o.length;
  if (e(o[i]))
    return i;
  for (; i < n; ) {
    const s = i + n >> 1, r = o[s];
    e(r) ? n = s : i = s + 1;
  }
  return i;
}
d(vi, "binarySearchFirstItem");
function ia(o) {
  if (Math.floor(o) === o)
    return [o, 1];
  const e = 1 / o, t = 8;
  if (e > t)
    return [1, t];
  if (Math.floor(e) === e)
    return [1, e];
  const i = o > 1 ? e : o;
  let n = 0, s = 1, r = 1, l = 1;
  for (; ; ) {
    const c = n + r, m = s + l;
    if (m > t)
      break;
    i <= c / m ? (r = c, l = m) : (n = c, s = m);
  }
  let h;
  return i - n / s < r / l - i ? h = i === o ? [n, s] : [s, n] : h = i === o ? [r, l] : [l, r], h;
}
d(ia, "approximateFraction");
function un(o, e) {
  return o - o % e;
}
d(un, "floorToDivide");
function $o(o, e, t) {
  if (o < 2)
    return o;
  let i = e[o].div, n = i.offsetTop + i.clientTop;
  n >= t && (i = e[o - 1].div, n = i.offsetTop + i.clientTop);
  for (let s = o - 2; s >= 0 && (i = e[s].div, !(i.offsetTop + i.clientTop + i.clientHeight <= n)); --s)
    o = s;
  return o;
}
d($o, "backtrackBeforeAllVisibleElements");
function zo({
  scrollEl: o,
  views: e,
  sortByVisibility: t = !1,
  horizontal: i = !1,
  rtl: n = !1
}) {
  const s = o.scrollTop, r = s + o.clientHeight, l = o.scrollLeft, h = l + o.clientWidth;
  function c(A) {
    const P = A.div;
    return P.offsetTop + P.clientTop + P.clientHeight > s;
  }
  d(c, "isElementBottomAfterViewTop");
  function m(A) {
    const P = A.div, y = P.offsetLeft + P.clientLeft, I = y + P.clientWidth;
    return n ? y < h : I > l;
  }
  d(m, "isElementNextAfterViewHorizontally");
  const w = [], g = /* @__PURE__ */ new Set(), v = e.length;
  let C = vi(e, i ? m : c);
  C > 0 && C < v && !i && (C = $o(C, e, s));
  let R = i ? h : -1;
  for (let A = C; A < v; A++) {
    const P = e[A], y = P.div, I = y.offsetLeft + y.clientLeft, k = y.offsetTop + y.clientTop, V = y.clientWidth, F = y.clientHeight, E = I + V, _ = k + F;
    if (R === -1)
      _ >= r && (R = _);
    else if ((i ? I : k) > R)
      break;
    if (_ <= s || k >= r || E <= l || I >= h)
      continue;
    const O = Math.max(0, s - k), B = Math.max(0, l - I), U = O + Math.max(0, _ - r), H = B + Math.max(0, E - h), X = (F - U) / F, st = (V - H) / V, Xr = X * st * 100 | 0;
    w.push({
      id: P.id,
      x: I,
      y: k,
      visibleArea: Xr === 100 ? null : {
        minX: B,
        minY: O,
        maxX: Math.min(E, h) - I,
        maxY: Math.min(_, r) - k
      },
      view: P,
      percent: Xr,
      widthPercent: st * 100 | 0
    }), g.add(P.id);
  }
  const L = w[0], M = w.at(-1);
  return t && w.sort(function(A, P) {
    const y = A.percent - P.percent;
    return Math.abs(y) > 1e-3 ? -y : A.id - P.id;
  }), {
    first: L,
    last: M,
    views: w,
    ids: g
  };
}
d(zo, "getVisibleElements");
function ja(o) {
  return Number.isInteger(o) && o % 90 === 0;
}
d(ja, "isValidRotation");
function Go(o) {
  return Number.isInteger(o) && Object.values(j).includes(o) && o !== j.UNKNOWN;
}
d(Go, "isValidScrollMode");
function Xo(o) {
  return Number.isInteger(o) && Object.values(K).includes(o) && o !== K.UNKNOWN;
}
d(Xo, "isValidSpreadMode");
function na(o) {
  return o.width <= o.height;
}
d(na, "isPortraitOrientation");
new Promise(function(o) {
  window.requestAnimationFrame(o);
});
const Ko = document.documentElement.style;
var Ve, dt, Ue, jt, ht;
const ur = class ur {
  constructor(e) {
    p(this, Ve, null);
    p(this, dt, null);
    p(this, Ue, 0);
    p(this, jt, null);
    p(this, ht, !0);
    u(this, Ve, e.classList), u(this, jt, e.style);
  }
  get percent() {
    return a(this, Ue);
  }
  set percent(e) {
    if (u(this, Ue, e), isNaN(e)) {
      a(this, Ve).add("indeterminate");
      return;
    }
    a(this, Ve).remove("indeterminate"), a(this, jt).setProperty("--progressBar-percent", `${a(this, Ue)}%`);
  }
  setWidth(e) {
    if (!e)
      return;
    const i = e.parentNode.offsetWidth - e.offsetWidth;
    i > 0 && a(this, jt).setProperty("--progressBar-end-offset", `${i}px`);
  }
  setDisableAutoFetch(e = 5e3) {
    a(this, Ue) === 100 || isNaN(a(this, Ue)) || (a(this, dt) && clearTimeout(a(this, dt)), this.show(), u(this, dt, setTimeout(() => {
      u(this, dt, null), this.hide();
    }, e)));
  }
  hide() {
    a(this, ht) && (u(this, ht, !1), a(this, Ve).add("hidden"));
  }
  show() {
    a(this, ht) || (u(this, ht, !0), a(this, Ve).remove("hidden"));
  }
};
Ve = new WeakMap(), dt = new WeakMap(), Ue = new WeakMap(), jt = new WeakMap(), ht = new WeakMap(), d(ur, "ProgressBar");
let ns = ur;
function Yo(o) {
  let e = j.VERTICAL, t = K.NONE;
  switch (o) {
    case "SinglePage":
      e = j.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      e = j.PAGE;
    case "TwoColumnLeft":
      t = K.ODD;
      break;
    case "TwoPageRight":
      e = j.PAGE;
    case "TwoColumnRight":
      t = K.EVEN;
      break;
  }
  return {
    scrollMode: e,
    spreadMode: t
  };
}
d(Yo, "apiPageLayoutToViewerModes");
const cn = (function() {
  const o = document.createElement("div");
  return o.style.width = "round(down, calc(1.6666666666666665 * 792px), 1px)", o.style.width === "calc(1320px)" ? Math.fround : (e) => e;
})(), ae = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
function Zo(o) {
  return o < 11904;
}
d(Zo, "isAlphabeticalScript");
function Qo(o) {
  return (o & 65408) === 0;
}
d(Qo, "isAscii");
function Jo(o) {
  return o >= 97 && o <= 122 || o >= 65 && o <= 90;
}
d(Jo, "isAsciiAlpha");
function qo(o) {
  return o >= 48 && o <= 57;
}
d(qo, "isAsciiDigit");
function el(o) {
  return o === 32 || o === 9 || o === 13 || o === 10;
}
d(el, "isAsciiSpace");
function tl(o) {
  return o >= 13312 && o <= 40959 || o >= 63744 && o <= 64255;
}
d(tl, "isHan");
function il(o) {
  return o >= 12448 && o <= 12543;
}
d(il, "isKatakana");
function nl(o) {
  return o >= 12352 && o <= 12447;
}
d(nl, "isHiragana");
function sl(o) {
  return o >= 65376 && o <= 65439;
}
d(sl, "isHalfwidthKatakana");
function rl(o) {
  return (o & 65408) === 3584;
}
d(rl, "isThai");
function fn(o) {
  return Zo(o) ? Qo(o) ? el(o) ? ae.SPACE : Jo(o) || qo(o) || o === 95 ? ae.ALPHA_LETTER : ae.PUNCT : rl(o) ? ae.THAI_LETTER : o === 160 ? ae.SPACE : ae.ALPHA_LETTER : tl(o) ? ae.HAN_LETTER : il(o) ? ae.KATAKANA_LETTER : nl(o) ? ae.HIRAGANA_LETTER : sl(o) ? ae.HALFWIDTH_KATAKANA_LETTER : ae.ALPHA_LETTER;
}
d(fn, "getCharacterType");
let rt;
function al() {
  if (!rt) {
    const o = [], e = [], t = new RegExp("^\\p{M}$", "u");
    for (let n = 0; n < 65536; n++) {
      if (n >= 55296 && n <= 57343)
        continue;
      const s = String.fromCharCode(n);
      if (s.normalize("NFKC") !== s && !t.test(s)) {
        if (e.length !== 2) {
          e[0] = e[1] = n;
          continue;
        }
        e[1] + 1 !== n ? (e[0] === e[1] ? o.push(String.fromCharCode(e[0])) : o.push(`${String.fromCharCode(e[0])}-${String.fromCharCode(e[1])}`), e[0] = e[1] = n) : e[1] = n;
      }
    }
    const i = o.join("");
    if (!rt)
      rt = i;
    else if (i !== rt) {
      for (let n = 1; n < i.length; n++)
        if (i[n] !== rt[n]) {
          console.log(`Difference at index ${n}: U+${i.charCodeAt(n).toString(16).toUpperCase().padStart(4, "0")}!== U+${rt.charCodeAt(n).toString(16).toUpperCase().padStart(4, "0")}`);
          break;
        }
      throw new Error("getNormalizeWithNFKC - update the `NormalizeWithNFKC` string.");
    }
  }
  return rt;
}
d(al, "getNormalizeWithNFKC");
const De = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
}, ol = 250, ll = -50, sa = {
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
}, ra = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
let aa;
const dl = new RegExp("\\p{M}+", "gu"), hl = new RegExp("([+^$|])|(\\p{P}+)|(\\s+)|(\\p{M})|(\\p{L})", "gu"), ul = new RegExp("([^\\p{M}])\\p{M}*$", "u"), cl = new RegExp("^\\p{M}*([^\\p{M}])", "u"), fl = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, oa = /* @__PURE__ */ new Map(), gl = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", la = /* @__PURE__ */ new Map();
let Zn = null, Qn = null;
function bn(o, e = {}) {
  const t = [];
  let i;
  for (; (i = fl.exec(o)) !== null; ) {
    let {
      index: A
    } = i;
    for (const P of i[0]) {
      let y = oa.get(P);
      y || (y = P.normalize("NFD").length, oa.set(P, y)), t.push([y, A++]);
    }
  }
  const n = t.length > 0, s = e.ignoreDashEOL ?? !1;
  let r;
  if (!n && Zn)
    r = Zn;
  else if (n && Qn)
    r = Qn;
  else {
    const A = Object.keys(sa).join(""), P = al(), V = [`[${A}]`, `[${P}]`, "(?:゙|゚)\\n", "\\p{M}+(?:-\\n)?", "\\p{Ll}-\\n(?=\\p{Ll})|\\p{Lu}-\\n(?=\\p{L})", "\\S-\\n", "(?:\\p{Ideographic}|[぀-ヿ])\\n", "\\n", n ? gl : "\\u0000"];
    r = new RegExp(V.map((F) => `(${F})`).join("|"), "gum"), n ? Qn = r : Zn = r;
  }
  const l = [];
  for (; (i = dl.exec(o)) !== null; )
    l.push([i[0].length, i.index]);
  let h = o.normalize("NFD");
  const c = [0, 0];
  let m = 0, w = 0, g = 0, v = 0, C = 0, R = !1;
  h = h.replace(r, (A, P, y, I, k, V, F, E, _, O, B) => {
    if (B -= v, P) {
      const U = sa[P], H = U.length;
      for (let X = 1; X < H; X++)
        c.push(B - g + X, g - X);
      return g -= H - 1, U;
    }
    if (y) {
      let U = la.get(y);
      U || (U = y.normalize("NFKC"), la.set(y, U));
      const H = U.length;
      for (let X = 1; X < H; X++)
        c.push(B - g + X, g - X);
      return g -= H - 1, U;
    }
    if (I)
      return R = !0, B + C === l[m]?.[1] ? ++m : (c.push(B - 1 - g + 1, g - 1), g -= 1, v += 1), c.push(B - g + 1, g), v += 1, C += 1, I.charAt(0);
    if (k) {
      const U = k.endsWith(`
`), H = U ? k.length - 2 : k.length;
      R = !0;
      let X = H;
      B + C === l[m]?.[1] && (X -= l[m][0], ++m);
      for (let st = 1; st <= X; st++)
        c.push(B - 1 - g + st, g - st);
      return g -= X, v += X, U ? (B += H - 1, c.push(B - g + 1, 1 + g), g += 1, v += 1, C += 1, k.slice(0, H)) : k;
    }
    if (V) {
      if (s)
        return v += 1, C += 1, V.slice(0, -1);
      const U = V.length - 2;
      return c.push(B - g + U, 1 + g), g += 1, v += 1, C += 1, V.slice(0, -2);
    }
    if (F)
      return v += 1, C += 1, F.slice(0, -1);
    if (E) {
      const U = E.length - 1;
      return c.push(B - g + U, g), v += 1, C += 1, E.slice(0, -1);
    }
    if (_)
      return c.push(B - g + 1, g - 1), g -= 1, v += 1, C += 1, " ";
    if (B + C === t[w]?.[1]) {
      const U = t[w][0] - 1;
      ++w;
      for (let H = 1; H <= U; H++)
        c.push(B - (g - H), g - H);
      g -= U, v += U;
    }
    return O;
  }), c.push(h.length, g);
  const L = new Uint32Array(c.length >> 1), M = new Int32Array(c.length >> 1);
  for (let A = 0, P = c.length; A < P; A += 2)
    L[A >> 1] = c[A], M[A >> 1] = c[A + 1];
  return [h, [L, M], R];
}
d(bn, "normalize");
function ka(o, e, t) {
  if (!o)
    return [e, t];
  const [i, n] = o, s = e, r = e + t - 1;
  let l = vi(i, (g) => g >= s);
  i[l] > s && --l;
  let h = vi(i, (g) => g >= r, l);
  i[h] > r && --h;
  const c = s + n[l], w = r + n[h] + 1 - c;
  return [c, w];
}
d(ka, "getOriginalIndex");
var $, kt, ut, ct, x, Da, rs, as, Oa, Fa, os, Va, Ua, wn, hi, Rt, Ba, ls, ds, En, Ha, hs, us, cs, ui;
const cr = class cr {
  constructor({
    linkService: e,
    eventBus: t,
    updateMatchesCountOnProgress: i = !0
  }) {
    p(this, x);
    p(this, $, null);
    p(this, kt, !0);
    p(this, ut, 0);
    p(this, ct, null);
    this._linkService = e, this._eventBus = t, u(this, kt, i), this.onIsPageVisible = null, f(this, x, rs).call(this), t._on("find", f(this, x, Da).bind(this)), t._on("findbarclose", f(this, x, hs).bind(this)), t._on("pagesedited", f(this, x, Ha).bind(this));
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
    return a(this, $);
  }
  setDocument(e) {
    this._pdfDocument && f(this, x, rs).call(this), e && (this._pdfDocument = e, this._firstPageCapability.resolve());
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
    this._scrollMatches = !1, Ma(e, {
      top: ll,
      left: t
    }, !0);
  }
  match(e, t, i) {
    const n = this._hasDiacritics[i];
    let s = !1;
    if (typeof e == "string" ? [s, e] = f(this, x, os).call(this, e, n) : e = e.sort().reverse().map((w) => {
      const [g, v] = f(this, x, os).call(this, w, n);
      return s ||= g, `(${v})`;
    }).join("|"), !e)
      return;
    const {
      caseSensitive: r,
      entireWord: l
    } = a(this, $), h = `g${s ? "u" : ""}${r ? "" : "i"}`;
    e = new RegExp(e, h);
    const c = [];
    let m;
    for (; (m = e.exec(t)) !== null; )
      l && !f(this, x, Fa).call(this, t, m.index, m[0].length) || c.push({
        index: m.index,
        length: m[0].length
      });
    return c;
  }
};
$ = new WeakMap(), kt = new WeakMap(), ut = new WeakMap(), ct = new WeakMap(), x = new WeakSet(), Da = /* @__PURE__ */ d(function(e) {
  if (!e)
    return;
  const t = this._pdfDocument, {
    type: i
  } = e;
  (a(this, $) === null || f(this, x, Oa).call(this, e)) && (this._dirtyMatch = !0), u(this, $, e), i !== "highlightallchange" && f(this, x, ui).call(this, De.PENDING), this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || t && this._pdfDocument !== t)
      return;
    f(this, x, Ua).call(this);
    const n = !this._highlightMatches, s = !!this._findTimeout;
    this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), i ? this._dirtyMatch ? f(this, x, Rt).call(this) : i === "again" ? (f(this, x, Rt).call(this), n && a(this, $).highlightAll && f(this, x, hi).call(this)) : i === "highlightallchange" ? (s ? f(this, x, Rt).call(this) : this._highlightMatches = !0, f(this, x, hi).call(this)) : f(this, x, Rt).call(this) : this._findTimeout = setTimeout(() => {
      f(this, x, Rt).call(this), this._findTimeout = null;
    }, ol);
  });
}, "#onFind"), rs = /* @__PURE__ */ d(function() {
  this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], u(this, ut, 0), u(this, $, null), this._selected = {
    pageIdx: -1,
    matchIdx: -1
  }, this._offset = {
    pageIdx: null,
    matchIdx: null,
    wrapped: !1
  }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, u(this, ct, null), this._firstPageCapability = Promise.withResolvers();
}, "#reset"), as = /* @__PURE__ */ d(function() {
  const {
    query: e
  } = a(this, $);
  return typeof e == "string" ? (e !== this._rawQuery && (this._rawQuery = e, [this._normalizedQuery] = bn(e)), this._normalizedQuery) : (e || []).filter((t) => !!t).map((t) => bn(t)[0]);
}, "#query"), Oa = /* @__PURE__ */ d(function(e) {
  const t = e.query, i = a(this, $).query, n = typeof t;
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
}, "#shouldDirtyMatch"), Fa = /* @__PURE__ */ d(function(e, t, i) {
  let n = e.slice(0, t).match(ul);
  if (n) {
    const s = e.charCodeAt(t), r = n[1].charCodeAt(0);
    if (fn(s) === fn(r))
      return !1;
  }
  if (n = e.slice(t + i).match(cl), n) {
    const s = e.charCodeAt(t + i - 1), r = n[1].charCodeAt(0);
    if (fn(s) === fn(r))
      return !1;
  }
  return !0;
}, "#isEntireWord"), os = /* @__PURE__ */ d(function(e, t) {
  const {
    matchDiacritics: i
  } = a(this, $);
  let n = !1;
  const s = /* @__PURE__ */ d((l, h) => l === e ? h : e.startsWith(l) ? `${h}[ ]*` : e.endsWith(l) ? `[ ]*${h}` : `[ ]*${h}[ ]*`, "addExtraWhitespaces");
  e = e.replaceAll(hl, (l, h, c, m, w, g) => h ? s(h, RegExp.escape(h)) : c ? s(c, RegExp.escape(c)) : m ? "[ ]+" : i ? w || g : w ? ra.has(w.charCodeAt(0)) ? w : "" : t ? (n = !0, `${g}\\p{M}*`) : g);
  const r = "[ ]*";
  return e.endsWith(r) && (e = e.slice(0, e.length - r.length)), i && t && (aa ||= String.fromCharCode(...ra), n = !0, e = `${e}(?=[${aa}]|[^\\p{M}]|$)`), [n, e];
}, "#convertToRegExpString"), Va = /* @__PURE__ */ d(function(e) {
  if (!a(this, $))
    return;
  const t = a(this, x, as);
  if (t.length === 0)
    return;
  const i = this._pageContents[e], n = this.match(t, i, e), s = this._pageMatches[e] = [], r = this._pageMatchesLength[e] = [], l = this._pageDiffs[e];
  n?.forEach(({
    index: c,
    length: m
  }) => {
    const [w, g] = ka(l, c, m);
    g && (s.push(w), r.push(g));
  }), a(this, $).highlightAll && f(this, x, wn).call(this, e), this._resumePageIdx === e && (this._resumePageIdx = null, f(this, x, ls).call(this));
  const h = s.length;
  this._matchesCountTotal += h, a(this, kt) ? h > 0 && f(this, x, cs).call(this) : ++Xn(this, ut)._ === this._linkService.pagesCount && f(this, x, cs).call(this);
}, "#calculateMatch"), Ua = /* @__PURE__ */ d(function() {
  if (this._extractTextPromises.length > 0)
    return;
  let e = Promise.resolve();
  const t = {
    disableNormalization: !0
  }, i = this._pdfDocument;
  for (let n = 0, s = this._linkService.pagesCount; n < s; n++) {
    const {
      promise: r,
      resolve: l
    } = Promise.withResolvers();
    this._extractTextPromises[n] = r, e = e.then(async () => {
      if (i !== this._pdfDocument) {
        l();
        return;
      }
      await i.getPage(n + 1).then((h) => h.getTextContent(t)).then((h) => {
        const c = [];
        for (const m of h.items)
          c.push(m.str), m.hasEOL && c.push(`
`);
        [this._pageContents[n], this._pageDiffs[n], this._hasDiacritics[n]] = bn(c.join("")), l();
      }, (h) => {
        console.error(`Unable to get text content for page ${n + 1}`, h), this._pageContents[n] = "", this._pageDiffs[n] = null, this._hasDiacritics[n] = !1, l();
      });
    });
  }
}, "#extractText"), wn = /* @__PURE__ */ d(function(e) {
  this._scrollMatches && this._selected.pageIdx === e && (this._linkService.page = e + 1), this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: e
  });
}, "#updatePage"), hi = /* @__PURE__ */ d(function() {
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: -1
  });
}, "#updateAllPages"), Rt = /* @__PURE__ */ d(function() {
  const e = a(this, $).findPrevious, t = this._linkService.page - 1, i = this._linkService.pagesCount;
  if (this._highlightMatches = !0, this._dirtyMatch) {
    this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = t, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, u(this, ut, 0), this._matchesCountTotal = 0, f(this, x, hi).call(this);
    for (let r = 0; r < i; r++)
      this._pendingFindMatches.has(r) || (this._pendingFindMatches.add(r), this._extractTextPromises[r].then(() => {
        this._pendingFindMatches.delete(r), f(this, x, Va).call(this, r);
      }));
  }
  if (a(this, x, as).length === 0) {
    f(this, x, ui).call(this, De.FOUND);
    return;
  }
  if (this._resumePageIdx)
    return;
  const s = this._offset;
  if (this._pagesToSearch = i, s.matchIdx !== null) {
    const r = this._pageMatches[s.pageIdx].length;
    if (!e && s.matchIdx + 1 < r || e && s.matchIdx > 0) {
      s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, f(this, x, En).call(this, !0);
      return;
    }
    f(this, x, ds).call(this, e);
  }
  f(this, x, ls).call(this);
}, "#nextMatch"), Ba = /* @__PURE__ */ d(function(e) {
  const t = this._offset, i = e.length, n = a(this, $).findPrevious;
  return i ? (t.matchIdx = n ? i - 1 : 0, f(this, x, En).call(this, !0), !0) : (f(this, x, ds).call(this, n), t.wrapped && (t.matchIdx = null, this._pagesToSearch < 0) ? (f(this, x, En).call(this, !1), !0) : !1);
}, "#matchesReady"), ls = /* @__PURE__ */ d(function() {
  this._resumePageIdx !== null && console.error("There can only be one pending page.");
  let e = null;
  do {
    const t = this._offset.pageIdx;
    if (e = this._pageMatches[t], !e) {
      this._resumePageIdx = t;
      break;
    }
  } while (!f(this, x, Ba).call(this, e));
}, "#nextPageMatch"), ds = /* @__PURE__ */ d(function(e) {
  const t = this._offset, i = this._linkService.pagesCount;
  t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this._pagesToSearch--, (t.pageIdx >= i || t.pageIdx < 0) && (t.pageIdx = e ? i - 1 : 0, t.wrapped = !0);
}, "#advanceOffsetPage"), En = /* @__PURE__ */ d(function(e = !1) {
  let t = De.NOT_FOUND;
  const i = this._offset.wrapped;
  if (this._offset.wrapped = !1, e) {
    const n = this._selected.pageIdx;
    this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, t = i ? De.WRAPPED : De.FOUND, n !== -1 && n !== this._selected.pageIdx && f(this, x, wn).call(this, n);
  }
  f(this, x, ui).call(this, t, a(this, $).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, f(this, x, wn).call(this, this._selected.pageIdx));
}, "#updateMatch"), Ha = /* @__PURE__ */ d(function({
  pagesMapper: e,
  type: t,
  pageNumbers: i
}) {
  if (this._extractTextPromises.length === 0)
    return;
  if (t === "copy") {
    u(this, ct, /* @__PURE__ */ new Map());
    for (const r of i)
      a(this, ct).set(r, this._extractTextPromises[r - 1]);
    return;
  }
  f(this, x, hs).call(this), this._dirtyMatch = !0;
  const n = this._extractTextPromises, s = this._extractTextPromises.length = [];
  for (let r = 1, l = e.length; r <= l; r++) {
    const h = e.getPrevPageNumber(r);
    if (h < 0) {
      s.push(a(this, ct)?.get(-h) || Promise.resolve());
      continue;
    }
    s.push(n[h - 1] || Promise.resolve());
  }
}, "#onPagesEdited"), hs = /* @__PURE__ */ d(function(e) {
  const t = this._pdfDocument;
  this._firstPageCapability.promise.then(() => {
    !this._pdfDocument || t && this._pdfDocument !== t || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), f(this, x, ui).call(this, De.FOUND), this._highlightMatches = !1, f(this, x, hi).call(this));
  });
}, "#onFindBarClose"), us = /* @__PURE__ */ d(function() {
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
}, "#requestMatchesCount"), cs = /* @__PURE__ */ d(function() {
  this._eventBus.dispatch("updatefindmatchescount", {
    source: this,
    matchesCount: f(this, x, us).call(this)
  });
}, "#updateUIResultsCount"), ui = /* @__PURE__ */ d(function(e, t = !1) {
  !a(this, kt) && (a(this, ut) !== this._linkService.pagesCount || e === De.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
    source: this,
    state: e,
    previous: t,
    entireWord: a(this, $)?.entireWord ?? null,
    matchesCount: f(this, x, us).call(this),
    rawQuery: a(this, $)?.query ?? null
  });
}, "#updateUIState"), d(cr, "PDFFindController");
let ss = cr;
const pl = "noopener noreferrer nofollow", at = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
}, fr = class fr {
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
    return this.pdfDocument?.pagesMapper.pagesNumber || 0;
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
    const r = new AbortController();
    this.eventBus._on("textlayerrendered", (l) => {
      l.pageNumber === n && (l.source.textLayer.div.focus(), r.abort());
    }, {
      signal: r.signal
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
  goToXY(e, t, i, n = {}) {
    this.pdfViewer.scrollPageIntoView({
      pageNumber: e,
      destArray: [null, {
        name: "XYZ"
      }, t, i],
      ignoreDestinationZoom: !0,
      ...n
    });
  }
  addLinkAttributes(e, t, i = !1) {
    if (!t || typeof t != "string")
      throw new Error('A valid "url" parameter must provided.');
    const n = i ? at.BLANK : this.externalLinkTarget, s = this.externalLinkRel;
    this.externalLinkEnabled ? e.href = e.title = t : (e.href = "", e.title = `Disabled: ${t}`, e.onclick = () => !1);
    let r = "";
    switch (n) {
      case at.NONE:
        break;
      case at.SELF:
        r = "_self";
        break;
      case at.BLANK:
        r = "_blank";
        break;
      case at.PARENT:
        r = "_parent";
        break;
      case at.TOP:
        r = "_top";
        break;
    }
    e.target = r, e.rel = typeof s == "string" ? s : pl;
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
    if (!this.pdfDocument)
      return;
    let t, i;
    if (e.includes("=")) {
      const n = zn(e);
      if (n.has("search")) {
        const s = n.get("search").replaceAll('"', ""), r = n.get("phrase") === "true";
        this.eventBus.dispatch("findfromurlhash", {
          source: this,
          query: r ? s : s.match(/\S+/g)
        });
      }
      if (n.has("page") && (t = n.get("page") | 0 || 1), n.has("zoom")) {
        const s = n.get("zoom").split(","), r = s[0], l = parseFloat(r);
        r.includes("Fit") ? r === "Fit" || r === "FitB" ? i = [null, {
          name: r
        }] : r === "FitH" || r === "FitBH" || r === "FitV" || r === "FitBV" ? i = [null, {
          name: r
        }, s.length > 1 ? s[1] | 0 : null] : r === "FitR" ? s.length !== 5 ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : i = [null, {
          name: r
        }, s[1] | 0, s[2] | 0, s[3] | 0, s[4] | 0] : console.error(`PDFLinkService.setHash: "${r}" is not a valid zoom value.`) : i = [null, {
          name: "XYZ"
        }, s.length > 1 ? s[1] | 0 : null, s.length > 2 ? s[2] | 0 : null, l ? l / 100 : r];
      }
      i ? this.pdfViewer.scrollPageIntoView({
        pageNumber: t || this.page,
        destArray: i,
        allowNegativeOffset: !0
      }) : t && (this.page = t), n.has("pagemode") && this.eventBus.dispatch("pagemode", {
        source: this,
        mode: n.get("pagemode")
      }), n.has("nameddest") && this.goToDestination(n.get("nameddest"));
      return;
    }
    i = unescape(e);
    try {
      i = JSON.parse(i), Array.isArray(i) || (i = i.toString());
    } catch {
    }
    if (typeof i == "string" || Mo(i)) {
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
d(fr, "PDFLinkService");
let An = fr;
const gr = class gr extends An {
  setDocument(e, t = null) {
  }
};
d(gr, "SimpleLinkService");
let yi = gr;
var Be, Pi, _i, Si, He, Ci, ke, Wa, fs, $a;
const pr = class pr {
  constructor({
    pdfPage: e,
    linkService: t,
    downloadManager: i,
    annotationStorage: n = null,
    imageResourcesPath: s = "",
    renderForms: r = !0,
    enableComment: l = !1,
    commentManager: h = null,
    enableScripting: c = !1,
    hasJSActionsPromise: m = null,
    fieldObjectsPromise: w = null,
    annotationCanvasMap: g = null,
    accessibilityManager: v = null,
    annotationEditorUIManager: C = null,
    onAppend: R = null
  }) {
    p(this, ke);
    p(this, Be, null);
    p(this, Pi, null);
    p(this, _i, !1);
    p(this, Si, null);
    p(this, He, null);
    p(this, Ci, !1);
    this.pdfPage = e, this.linkService = t, this.downloadManager = i, this.imageResourcesPath = s, this.renderForms = r, this.annotationStorage = n, this.enableComment = l, u(this, Pi, h), this.enableScripting = c, this._hasJSActionsPromise = m || Promise.resolve(!1), this._fieldObjectsPromise = w || Promise.resolve(null), this._annotationCanvasMap = g, this._accessibilityManager = v, this._annotationEditorUIManager = C, u(this, Si, R), this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = t.eventBus;
  }
  async render({
    viewport: e,
    intent: t = "display",
    structTreeLayer: i = null
  }) {
    var h;
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
      intent: t
    }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
    if (this._cancelled)
      return;
    const l = this.div = document.createElement("div");
    if (l.className = "annotationLayer", (h = a(this, Si)) == null || h.call(this, l), f(this, ke, Wa).call(this, e, i), n.length === 0) {
      u(this, Be, n), Ta(this.div, e);
      return;
    }
    await this.annotationLayer.render({
      annotations: n,
      imageResourcesPath: this.imageResourcesPath,
      renderForms: this.renderForms,
      downloadManager: this.downloadManager,
      enableComment: this.enableComment,
      enableScripting: this.enableScripting,
      hasJSActions: s,
      fieldObjects: r
    }), u(this, Be, n), this.linkService.isInPresentationMode && f(this, ke, fs).call(this, Mt.FULLSCREEN), a(this, He) || (u(this, He, new AbortController()), this._eventBus?._on("presentationmodechanged", (c) => {
      f(this, ke, fs).call(this, c.state);
    }, {
      signal: a(this, He).signal
    }));
  }
  cancel() {
    this._cancelled = !0, a(this, He)?.abort(), u(this, He, null);
  }
  hide(e = !1) {
    u(this, _i, !e), this.div && (this.div.hidden = !0);
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  async injectLinkAnnotations(e) {
    if (a(this, Be) === null)
      throw new Error("`render` method must be called before `injectLinkAnnotations`.");
    if (this._cancelled || a(this, Ci))
      return;
    u(this, Ci, !0);
    const t = a(this, Be).length ? f(this, ke, $a).call(this, e) : e;
    t.length && (await this.annotationLayer.addLinkAnnotations(t), a(this, _i) || (this.div.hidden = !1));
  }
};
Be = new WeakMap(), Pi = new WeakMap(), _i = new WeakMap(), Si = new WeakMap(), He = new WeakMap(), Ci = new WeakMap(), ke = new WeakSet(), Wa = /* @__PURE__ */ d(function(e, t) {
  this.annotationLayer = new Ro({
    div: this.div,
    accessibilityManager: this._accessibilityManager,
    annotationCanvasMap: this._annotationCanvasMap,
    annotationEditorUIManager: this._annotationEditorUIManager,
    annotationStorage: this.annotationStorage,
    page: this.pdfPage,
    viewport: e.clone({
      dontFlip: !0
    }),
    structTreeLayer: t,
    commentManager: a(this, Pi),
    linkService: this.linkService
  });
}, "#initAnnotationLayer"), fs = /* @__PURE__ */ d(function(e) {
  if (!this.div)
    return;
  let t = !1;
  switch (e) {
    case Mt.FULLSCREEN:
      t = !0;
      break;
    case Mt.NORMAL:
      break;
    default:
      return;
  }
  for (const i of this.div.childNodes)
    i.hasAttribute("data-internal-link") || (i.inert = t);
}, "#updatePresentationModeState"), $a = /* @__PURE__ */ d(function(e) {
  function t(s) {
    if (!s.quadPoints)
      return [s.rect];
    const r = [];
    for (let l = 2, h = s.quadPoints.length; l < h; l += 8) {
      const c = s.quadPoints[l], m = s.quadPoints[l + 1], w = s.quadPoints[l + 2], g = s.quadPoints[l + 3];
      r.push([w, g, c, m]);
    }
    return r;
  }
  d(t, "annotationRects");
  function i(s, r) {
    const l = [], h = t(s), c = t(r);
    for (const m of h)
      for (const w of c) {
        const g = hr.intersect(m, w);
        g && l.push(g);
      }
    return l;
  }
  d(i, "intersectAnnotations");
  function n(s) {
    let r = 0;
    for (const l of s)
      r += Math.abs((l[2] - l[0]) * (l[3] - l[1]));
    return r;
  }
  return d(n, "areaRects"), e.filter((s) => {
    let r;
    for (const l of a(this, Be)) {
      if (l.annotationType !== Ia.LINK || !l.url)
        continue;
      const h = i(l, s);
      if (h.length !== 0 && (r ??= n(t(s)), n(h) / r > 0.5))
        return !1;
    }
    return !0;
  });
}, "#checkInferredLinks"), d(pr, "AnnotationLayerBuilder");
let Rn = pr;
var Ii;
const mr = class mr {
  constructor() {
    p(this, Ii, /* @__PURE__ */ new WeakMap());
  }
  _triggerDownload(e, t, i, n = !1) {
    throw new Error("Not implemented: _triggerDownload");
  }
  _getOpenDataUrl(e, t, i = null) {
    throw new Error("Not implemented: _getOpenDataUrl");
  }
  downloadData(e, t, i) {
    const n = URL.createObjectURL(new Blob([e], {
      type: i
    }));
    this._triggerDownload(n, n, t, !0);
  }
  openOrDownloadData(e, t, i = null) {
    const n = No(t), s = n ? "application/pdf" : "";
    if (n) {
      const r = a(this, Ii).getOrInsertComputed(e, () => URL.createObjectURL(new Blob([e], {
        type: s
      })));
      try {
        const l = this._getOpenDataUrl(r, t, i);
        return window.open(l), !0;
      } catch (l) {
        console.error("openOrDownloadData:", l), URL.revokeObjectURL(r), a(this, Ii).delete(e);
      }
    }
    return this.downloadData(e, t, s), !1;
  }
  download(e, t, i) {
    const n = e ? URL.createObjectURL(new Blob([e], {
      type: "application/pdf"
    })) : null;
    this._triggerDownload(n, t, i);
  }
};
Ii = new WeakMap(), d(mr, "BaseDownloadManager");
let gs = mr;
const br = class br extends gs {
  _triggerDownload(e, t, i, n = !1) {
    if (!e && !n) {
      if (!Aa(t, "http://example.com"))
        throw new Error(`_triggerDownload - not a valid URL: ${t}`);
      e = t + "#pdfjs.action=download";
    }
    const s = document.createElement("a");
    s.href = e, s.target = "_parent", "download" in s && (s.download = i), (document.body || document.documentElement).append(s), s.click(), s.remove();
  }
  _getOpenDataUrl(e, t, i = null) {
    throw new Error("Opening data is not supported in `COMPONENTS` builds.");
  }
};
d(br, "DownloadManager");
let ps = br;
const da = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
async function ml({
  target: o,
  name: e,
  delay: t = 0
}) {
  if (typeof o != "object" || !(Number.isInteger(t) && t >= 0))
    throw new Error("waitOnEventOrTimeout - invalid parameters.");
  const {
    promise: i,
    resolve: n
  } = Promise.withResolvers(), s = new AbortController();
  function r(c) {
    s.abort(), clearTimeout(h), n(c);
  }
  d(r, "handler");
  const l = o instanceof Ln ? "_on" : "addEventListener";
  o[l](e, r.bind(null, da.EVENT), {
    signal: s.signal
  });
  const h = setTimeout(r.bind(null, da.TIMEOUT), t);
  return i;
}
d(ml, "waitOnEventOrTimeout");
var Dt;
const wr = class wr {
  constructor() {
    p(this, Dt, /* @__PURE__ */ Object.create(null));
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
    const i = a(this, Dt)[e];
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
      const l = /* @__PURE__ */ d(() => this._off(e, t), "onAbort");
      n = /* @__PURE__ */ d(() => r.removeEventListener("abort", l), "rmAbort"), r.addEventListener("abort", l);
    }
    (a(this, Dt)[e] ||= []).push({
      listener: t,
      external: i?.external === !0,
      once: i?.once === !0,
      rmAbort: n
    });
  }
  _off(e, t, i = null) {
    const n = a(this, Dt)[e];
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
Dt = new WeakMap(), d(wr, "EventBus");
let Ln = wr;
const Er = class Er {
  constructor(e) {
    this.value = e;
  }
  valueOf() {
    return this.value;
  }
};
d(Er, "FluentType");
let nt = Er;
const vr = class vr extends nt {
  constructor(e = "???") {
    super(e);
  }
  toString(e) {
    return `{${this.value}}`;
  }
};
d(vr, "FluentNone");
let W = vr;
const yr = class yr extends nt {
  constructor(e, t = {}) {
    super(e), this.opts = t;
  }
  toString(e) {
    if (e)
      try {
        return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
      } catch (t) {
        e.reportError(t);
      }
    return this.value.toString(10);
  }
};
d(yr, "FluentNumber");
let he = yr;
const wi = class wi extends nt {
  static supportsValue(e) {
    if (typeof e == "number" || e instanceof Date) return !0;
    if (e instanceof nt) return wi.supportsValue(e.valueOf());
    if ("Temporal" in globalThis) {
      const t = globalThis.Temporal;
      if (e instanceof t.Instant || e instanceof t.PlainDateTime || e instanceof t.PlainDate || e instanceof t.PlainMonthDay || e instanceof t.PlainTime || e instanceof t.PlainYearMonth)
        return !0;
    }
    return !1;
  }
  constructor(e, t = {}) {
    e instanceof wi ? (t = {
      ...e.opts,
      ...t
    }, e = e.value) : e instanceof nt && (e = e.valueOf()), typeof e == "object" && "calendarId" in e && t.calendar === void 0 && (t = {
      ...t,
      calendar: e.calendarId
    }), super(e), this.opts = t;
  }
  [Symbol.toPrimitive](e) {
    return e === "string" ? this.toString() : this.toNumber();
  }
  toNumber() {
    const e = this.value;
    if (typeof e == "number") return e;
    if (e instanceof Date) return e.getTime();
    if ("epochMilliseconds" in e)
      return e.epochMilliseconds;
    if ("toZonedDateTime" in e)
      return e.toZonedDateTime("UTC").epochMilliseconds;
    throw new TypeError("Unwrapping a non-number value as a number");
  }
  toString(e) {
    if (e)
      try {
        return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
      } catch (t) {
        e.reportError(t);
      }
    return typeof this.value == "number" || this.value instanceof Date ? new Date(this.value).toISOString() : this.value.toString();
  }
};
d(wi, "FluentDateTime");
let It = wi;
const ha = 100, bl = "⁨", wl = "⁩";
function El(o, e, t) {
  if (t === e || t instanceof he && e instanceof he && t.value === e.value)
    return !0;
  if (e instanceof he && typeof t == "string") {
    let i = o.memoizeIntlObject(Intl.PluralRules, e.opts).select(e.value);
    if (t === i)
      return !0;
  }
  return !1;
}
d(El, "match");
function ua(o, e, t) {
  return e[t] ? ri(o, e[t].value) : (o.reportError(new RangeError("No default")), new W());
}
d(ua, "getDefault");
function ms(o, e) {
  const t = [], i = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    n.type === "narg" ? i[n.name] = xi(o, n.value) : t.push(xi(o, n));
  return {
    positional: t,
    named: i
  };
}
d(ms, "getArguments");
function xi(o, e) {
  switch (e.type) {
    case "str":
      return e.value;
    case "num":
      return new he(e.value, {
        minimumFractionDigits: e.precision
      });
    case "var":
      return vl(o, e);
    case "mesg":
      return yl(o, e);
    case "term":
      return xl(o, e);
    case "func":
      return Pl(o, e);
    case "select":
      return _l(o, e);
    default:
      return new W();
  }
}
d(xi, "resolveExpression");
function vl(o, {
  name: e
}) {
  let t;
  if (o.params)
    if (Object.prototype.hasOwnProperty.call(o.params, e))
      t = o.params[e];
    else
      return new W(`$${e}`);
  else if (o.args && Object.prototype.hasOwnProperty.call(o.args, e))
    t = o.args[e];
  else
    return o.reportError(new ReferenceError(`Unknown variable: $${e}`)), new W(`$${e}`);
  if (t instanceof nt)
    return t;
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return new he(t);
    case "object":
      if (It.supportsValue(t))
        return new It(t);
    default:
      return o.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)), new W(`$${e}`);
  }
}
d(vl, "resolveVariableReference");
function yl(o, {
  name: e,
  attr: t
}) {
  const i = o.bundle._messages.get(e);
  if (!i)
    return o.reportError(new ReferenceError(`Unknown message: ${e}`)), new W(e);
  if (t) {
    const n = i.attributes[t];
    return n ? ri(o, n) : (o.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new W(`${e}.${t}`));
  }
  return i.value ? ri(o, i.value) : (o.reportError(new ReferenceError(`No value: ${e}`)), new W(e));
}
d(yl, "resolveMessageReference");
function xl(o, {
  name: e,
  attr: t,
  args: i
}) {
  const n = `-${e}`, s = o.bundle._terms.get(n);
  if (!s)
    return o.reportError(new ReferenceError(`Unknown term: ${n}`)), new W(n);
  if (t) {
    const l = s.attributes[t];
    if (l) {
      o.params = ms(o, i).named;
      const h = ri(o, l);
      return o.params = null, h;
    }
    return o.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new W(`${n}.${t}`);
  }
  o.params = ms(o, i).named;
  const r = ri(o, s.value);
  return o.params = null, r;
}
d(xl, "resolveTermReference");
function Pl(o, {
  name: e,
  args: t
}) {
  let i = o.bundle._functions[e];
  if (!i)
    return o.reportError(new ReferenceError(`Unknown function: ${e}()`)), new W(`${e}()`);
  if (typeof i != "function")
    return o.reportError(new TypeError(`Function ${e}() is not callable`)), new W(`${e}()`);
  try {
    let n = ms(o, t);
    return i(n.positional, n.named);
  } catch (n) {
    return o.reportError(n), new W(`${e}()`);
  }
}
d(Pl, "resolveFunctionReference");
function _l(o, {
  selector: e,
  variants: t,
  star: i
}) {
  let n = xi(o, e);
  if (n instanceof W)
    return ua(o, t, i);
  for (const s of t) {
    const r = xi(o, s.key);
    if (El(o, n, r))
      return ri(o, s.value);
  }
  return ua(o, t, i);
}
d(_l, "resolveSelectExpression");
function za(o, e) {
  if (o.dirty.has(e))
    return o.reportError(new RangeError("Cyclic reference")), new W();
  o.dirty.add(e);
  const t = [], i = o.bundle._useIsolating && e.length > 1;
  for (const n of e) {
    if (typeof n == "string") {
      t.push(o.bundle._transform(n));
      continue;
    }
    if (o.placeables++, o.placeables > ha)
      throw o.dirty.delete(e), new RangeError(`Too many placeables expanded: ${o.placeables}, max allowed is ${ha}`);
    i && t.push(bl), t.push(xi(o, n).toString(o)), i && t.push(wl);
  }
  return o.dirty.delete(e), t.join("");
}
d(za, "resolveComplexPattern");
function ri(o, e) {
  return typeof e == "string" ? o.bundle._transform(e) : za(o, e);
}
d(ri, "resolvePattern");
const xr = class xr {
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
d(xr, "Scope");
let bs = xr;
function ws(o, e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [i, n] of Object.entries(o))
    e.includes(i) && (t[i] = n.valueOf());
  return t;
}
d(ws, "values");
const ca = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
function Sl(o, e) {
  let t = o[0];
  if (t instanceof W)
    return new W(`NUMBER(${t.valueOf()})`);
  if (t instanceof he)
    return new he(t.valueOf(), {
      ...t.opts,
      ...ws(e, ca)
    });
  if (t instanceof It)
    return new he(t.toNumber(), {
      ...ws(e, ca)
    });
  throw new TypeError("Invalid argument to NUMBER");
}
d(Sl, "NUMBER");
const Cl = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
function Il(o, e) {
  let t = o[0];
  if (t instanceof W)
    return new W(`DATETIME(${t.valueOf()})`);
  if (t instanceof It || t instanceof he)
    return new It(t, ws(e, Cl));
  throw new TypeError("Invalid argument to DATETIME");
}
d(Il, "DATETIME");
const fa = /* @__PURE__ */ new Map();
function Al(o) {
  const e = Array.isArray(o) ? o.join(" ") : o;
  let t = fa.get(e);
  return t === void 0 && (t = /* @__PURE__ */ new Map(), fa.set(e, t)), t;
}
d(Al, "getMemoizerForLocale");
const Pr = class Pr {
  constructor(e, {
    functions: t,
    useIsolating: i = !0,
    transform: n = /* @__PURE__ */ d((s) => s, "transform")
  } = {}) {
    this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
      NUMBER: Sl,
      DATETIME: Il,
      ...t
    }, this._useIsolating = i, this._transform = n, this._intls = Al(e);
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
    let n = new bs(this, i, t);
    try {
      return za(n, e).toString(n);
    } catch (s) {
      if (n.errors && s instanceof Error)
        return n.errors.push(s), new W().toString(n);
      throw s;
    }
  }
};
d(Pr, "FluentBundle");
let Es = Pr;
const Jn = /^(-?[a-zA-Z][\w-]*) *= */gm, ga = /\.([a-zA-Z][\w-]*) *= */y, Rl = /\*?\[/y, qn = /(-?[0-9]+(?:\.([0-9]+))?)/y, Ll = /([a-zA-Z][\w-]*)/y, pa = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y, Tl = /^[A-Z][A-Z0-9_-]*$/, gn = /([^{}\n\r]+)/y, Nl = /([^\\"\n\r]*)/y, ma = /\\([\\"])/y, ba = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y, Ml = /^\n+/, wa = / +$/, jl = / *\r?\n/g, kl = /( *)$/, Dl = /{\s*/y, Ea = /\s*}/y, Ol = /\[\s*/y, Fl = /\s*] */y, Vl = /\s*\(\s*/y, Ul = /\s*->\s*/y, Bl = /\s*:\s*/y, Hl = /\s*,?\s*/y, Wl = /\s+/y, _r = class _r {
  constructor(e) {
    this.body = [], Jn.lastIndex = 0;
    let t = 0;
    for (; ; ) {
      let E = Jn.exec(e);
      if (E === null)
        break;
      t = Jn.lastIndex;
      try {
        this.body.push(h(E[1]));
      } catch (_) {
        if (_ instanceof SyntaxError)
          continue;
        throw _;
      }
    }
    function i(E) {
      return E.lastIndex = t, E.test(e);
    }
    d(i, "test");
    function n(E, _) {
      if (e[t] === E)
        return t++, !0;
      if (_)
        throw new _(`Expected ${E}`);
      return !1;
    }
    d(n, "consumeChar");
    function s(E, _) {
      if (i(E))
        return t = E.lastIndex, !0;
      if (_)
        throw new _(`Expected ${E.toString()}`);
      return !1;
    }
    d(s, "consumeToken");
    function r(E) {
      E.lastIndex = t;
      let _ = E.exec(e);
      if (_ === null)
        throw new SyntaxError(`Expected ${E.toString()}`);
      return t = E.lastIndex, _;
    }
    d(r, "match");
    function l(E) {
      return r(E)[1];
    }
    d(l, "match1");
    function h(E) {
      let _ = m(), O = c();
      if (_ === null && Object.keys(O).length === 0)
        throw new SyntaxError("Expected message value or attributes");
      return {
        id: E,
        value: _,
        attributes: O
      };
    }
    d(h, "parseMessage");
    function c() {
      let E = /* @__PURE__ */ Object.create(null);
      for (; i(ga); ) {
        let _ = l(ga), O = m();
        if (O === null)
          throw new SyntaxError("Expected attribute value");
        E[_] = O;
      }
      return E;
    }
    d(c, "parseAttributes");
    function m() {
      let E;
      if (i(gn) && (E = l(gn)), e[t] === "{" || e[t] === "}")
        return w(E ? [E] : [], 1 / 0);
      let _ = k();
      return _ ? E ? w([E, _], _.length) : (_.value = V(_.value, Ml), w([_], _.length)) : E ? V(E, wa) : null;
    }
    d(m, "parsePattern");
    function w(E = [], _) {
      for (; ; ) {
        if (i(gn)) {
          E.push(l(gn));
          continue;
        }
        if (e[t] === "{") {
          E.push(g());
          continue;
        }
        if (e[t] === "}")
          throw new SyntaxError("Unbalanced closing brace");
        let H = k();
        if (H) {
          E.push(H), _ = Math.min(_, H.length);
          continue;
        }
        break;
      }
      let O = E.length - 1, B = E[O];
      typeof B == "string" && (E[O] = V(B, wa));
      let U = [];
      for (let H of E)
        H instanceof Tn && (H = H.value.slice(0, H.value.length - _)), H && U.push(H);
      return U;
    }
    d(w, "parsePatternElements");
    function g() {
      s(Dl, SyntaxError);
      let E = v();
      if (s(Ea))
        return E;
      if (s(Ul)) {
        let _ = L();
        return s(Ea, SyntaxError), {
          type: "select",
          selector: E,
          ..._
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    d(g, "parsePlaceable");
    function v() {
      if (e[t] === "{")
        return g();
      if (i(pa)) {
        let [, E, _, O = null] = r(pa);
        if (E === "$")
          return {
            type: "var",
            name: _
          };
        if (s(Vl)) {
          let B = C();
          if (E === "-")
            return {
              type: "term",
              name: _,
              attr: O,
              args: B
            };
          if (Tl.test(_))
            return {
              type: "func",
              name: _,
              args: B
            };
          throw new SyntaxError("Function names must be all upper-case");
        }
        return E === "-" ? {
          type: "term",
          name: _,
          attr: O,
          args: []
        } : {
          type: "mesg",
          name: _,
          attr: O
        };
      }
      return A();
    }
    d(v, "parseInlineExpression");
    function C() {
      let E = [];
      for (; ; ) {
        switch (e[t]) {
          case ")":
            return t++, E;
          case void 0:
            throw new SyntaxError("Unclosed argument list");
        }
        E.push(R()), s(Hl);
      }
    }
    d(C, "parseArguments");
    function R() {
      let E = v();
      return E.type !== "mesg" ? E : s(Bl) ? {
        type: "narg",
        name: E.name,
        value: A()
      } : E;
    }
    d(R, "parseArgument");
    function L() {
      let E = [], _ = 0, O;
      for (; i(Rl); ) {
        n("*") && (O = _);
        let B = M(), U = m();
        if (U === null)
          throw new SyntaxError("Expected variant value");
        E[_++] = {
          key: B,
          value: U
        };
      }
      if (_ === 0)
        return null;
      if (O === void 0)
        throw new SyntaxError("Expected default variant");
      return {
        variants: E,
        star: O
      };
    }
    d(L, "parseVariants");
    function M() {
      s(Ol, SyntaxError);
      let E;
      return i(qn) ? E = P() : E = {
        type: "str",
        value: l(Ll)
      }, s(Fl, SyntaxError), E;
    }
    d(M, "parseVariantKey");
    function A() {
      if (i(qn))
        return P();
      if (e[t] === '"')
        return y();
      throw new SyntaxError("Invalid expression");
    }
    d(A, "parseLiteral");
    function P() {
      let [, E, _ = ""] = r(qn), O = _.length;
      return {
        type: "num",
        value: parseFloat(E),
        precision: O
      };
    }
    d(P, "parseNumberLiteral");
    function y() {
      n('"', SyntaxError);
      let E = "";
      for (; ; ) {
        if (E += l(Nl), e[t] === "\\") {
          E += I();
          continue;
        }
        if (n('"'))
          return {
            type: "str",
            value: E
          };
        throw new SyntaxError("Unclosed string literal");
      }
    }
    d(y, "parseStringLiteral");
    function I() {
      if (i(ma))
        return l(ma);
      if (i(ba)) {
        let [, E, _] = r(ba), O = parseInt(E || _, 16);
        return O <= 55295 || 57344 <= O ? String.fromCodePoint(O) : "�";
      }
      throw new SyntaxError("Unknown escape sequence");
    }
    d(I, "parseEscapeSequence");
    function k() {
      let E = t;
      switch (s(Wl), e[t]) {
        case ".":
        case "[":
        case "*":
        case "}":
        case void 0:
          return !1;
        case "{":
          return F(e.slice(E, t));
      }
      return e[t - 1] === " " ? F(e.slice(E, t)) : !1;
    }
    d(k, "parseIndent");
    function V(E, _) {
      return E.replace(_, "");
    }
    d(V, "trim");
    function F(E) {
      let _ = E.replace(jl, `
`), O = kl.exec(E)[1].length;
      return new Tn(_, O);
    }
    d(F, "makeIndent");
  }
};
d(_r, "FluentResource");
let vs = _r;
const Sr = class Sr {
  constructor(e, t) {
    this.value = e, this.length = t;
  }
};
d(Sr, "Indent");
let Tn = Sr;
const $l = /<|&#?\w+;/, zl = {
  "http://www.w3.org/1999/xhtml": ["em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "bdi", "bdo", "span", "br", "wbr"]
}, Gl = {
  "http://www.w3.org/1999/xhtml": {
    global: ["title", "aria-description", "aria-label", "aria-valuetext"],
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
function Xl(o, e) {
  const {
    value: t
  } = e;
  if (typeof t == "string")
    if (o.localName === "title" && o.namespaceURI === "http://www.w3.org/1999/xhtml")
      o.textContent = t;
    else if (!$l.test(t))
      o.textContent = t;
    else {
      const i = o.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "template");
      i.innerHTML = t, Kl(i.content, o);
    }
  Ga(e, o);
}
d(Xl, "translateElement");
function Kl(o, e) {
  for (const t of o.childNodes)
    if (t.nodeType !== t.TEXT_NODE) {
      if (t.hasAttribute("data-l10n-name")) {
        const i = Zl(e, t);
        o.replaceChild(i, t);
        continue;
      }
      if (Jl(t)) {
        const i = Ql(t);
        o.replaceChild(i, t);
        continue;
      }
      console.warn(`An element of forbidden type "${t.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`), o.replaceChild(ys(t), t);
    }
  e.textContent = "", e.appendChild(o);
}
d(Kl, "overlayChildNodes");
function Yl(o, e) {
  if (!o)
    return !1;
  for (let t of o)
    if (t.name === e)
      return !0;
  return !1;
}
d(Yl, "hasAttribute");
function Ga(o, e) {
  const t = e.hasAttribute("data-l10n-attrs") ? e.getAttribute("data-l10n-attrs").split(",").map((i) => i.trim()) : null;
  for (const i of Array.from(e.attributes))
    va(i.name, e, t) && !Yl(o.attributes, i.name) && e.removeAttribute(i.name);
  if (o.attributes)
    for (const i of Array.from(o.attributes))
      va(i.name, e, t) && e.getAttribute(i.name) !== i.value && e.setAttribute(i.name, i.value);
}
d(Ga, "overlayAttributes");
function Zl(o, e) {
  const t = e.getAttribute("data-l10n-name"), i = o.querySelector(`[data-l10n-name="${t}"]`);
  if (!i)
    return console.warn(`An element named "${t}" wasn't found in the source.`), ys(e);
  if (i.localName !== e.localName)
    return console.warn(`An element named "${t}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${i.localName}).`), ys(e);
  o.removeChild(i);
  const n = i.cloneNode(!1);
  return Xa(e, n);
}
d(Zl, "getNodeForNamedElement");
function Ql(o) {
  const e = o.ownerDocument.createElement(o.localName);
  return Xa(o, e);
}
d(Ql, "createSanitizedElement");
function ys(o) {
  return o.ownerDocument.createTextNode(o.textContent);
}
d(ys, "createTextNodeFromTextContent");
function Jl(o) {
  const e = zl[o.namespaceURI];
  return e && e.includes(o.localName);
}
d(Jl, "isElementAllowed");
function va(o, e, t = null) {
  if (t && t.includes(o))
    return !0;
  const i = Gl[e.namespaceURI];
  if (!i)
    return !1;
  const n = o.toLowerCase(), s = e.localName;
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
d(va, "isAttrNameLocalizable");
function Xa(o, e) {
  return e.textContent = o.textContent, Ga(o, e), e;
}
d(Xa, "shallowPopulateUsing");
const Cr = class Cr extends Array {
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
};
d(Cr, "CachedIterable");
let xs = Cr;
const Ir = class Ir extends xs {
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
d(Ir, "CachedAsyncIterable");
let Ps = Ir;
const Ar = class Ar {
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
      const r = td(t, s, e, i);
      if (r.size === 0)
        break;
      if (typeof console < "u") {
        const l = s.locales[0], h = Array.from(r).join(", ");
        console.warn(`[fluent] Missing translations in ${l}: ${h}`);
      }
    }
    return !n && typeof console < "u" && console.warn(`[fluent] Request for keys failed because no resource bundles got generated.
  keys: ${JSON.stringify(e)}.
  resourceIds: ${JSON.stringify(this.resourceIds)}.`), i;
  }
  formatMessages(e) {
    return this.formatWithFallback(e, ed);
  }
  formatValues(e) {
    return this.formatWithFallback(e, ql);
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
    this.bundles = Ps.from(this.generateBundles(this.resourceIds)), e && this.bundles.touchNext(2);
  }
};
d(Ar, "Localization");
let _s = Ar;
function ql(o, e, t, i) {
  return t.value ? o.formatPattern(t.value, i, e) : null;
}
d(ql, "valueFromBundle");
function ed(o, e, t, i) {
  const n = {
    value: null,
    attributes: null
  };
  t.value && (n.value = o.formatPattern(t.value, i, e));
  let s = Object.keys(t.attributes);
  if (s.length > 0) {
    n.attributes = new Array(s.length);
    for (let [r, l] of s.entries()) {
      let h = o.formatPattern(t.attributes[l], i, e);
      n.attributes[r] = {
        name: l,
        value: h
      };
    }
  }
  return n;
}
d(ed, "messageFromBundle");
function td(o, e, t, i) {
  const n = [], s = /* @__PURE__ */ new Set();
  return t.forEach(({
    id: r,
    args: l
  }, h) => {
    if (i[h] !== void 0)
      return;
    let c = e.getMessage(r);
    if (c) {
      if (n.length = 0, i[h] = o(e, n, c, l), n.length > 0 && typeof console < "u") {
        const m = e.locales[0], w = n.join(", ");
        console.warn(`[fluent][resolver] errors in ${m}/${r}: ${w}.`);
      }
    } else
      s.add(r);
  }), s;
}
d(td, "keysFromBundle");
const ot = "data-l10n-id", di = "data-l10n-args", id = `[${ot}]`, Rr = class Rr extends _s {
  constructor(e, t) {
    super(e, t), this.roots = /* @__PURE__ */ new Set(), this.pendingrAF = null, this.pendingElements = /* @__PURE__ */ new Set(), this.windowElement = null, this.mutationObserver = null, this.observerConfig = {
      attributes: !0,
      characterData: !1,
      childList: !0,
      subtree: !0,
      attributeFilter: [ot, di]
    };
  }
  onChange(e = !1) {
    super.onChange(e), this.roots && this.translateRoots();
  }
  setAttributes(e, t, i) {
    return e.setAttribute(ot, t), i ? e.setAttribute(di, JSON.stringify(i)) : e.removeAttribute(di), e;
  }
  getAttributes(e) {
    return {
      id: e.getAttribute(ot),
      args: JSON.parse(e.getAttribute(di) || null)
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
              else i.hasAttribute(ot) && this.pendingElements.add(i);
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
      t[i] !== void 0 && Xl(e[i], t[i]);
    this.resumeObserving();
  }
  getTranslatables(e) {
    const t = Array.from(e.querySelectorAll(id));
    return typeof e.hasAttribute == "function" && e.hasAttribute(ot) && t.push(e), t;
  }
  getKeysForElement(e) {
    return {
      id: e.getAttribute(ot),
      args: JSON.parse(e.getAttribute(di) || null)
    };
  }
};
d(Rr, "DOMLocalization");
let Ss = Rr;
var Ai, We, Ot, J, oi, Ka, Ya;
const Tt = class Tt {
  constructor({
    lang: e,
    isRTL: t
  }, i = null) {
    p(this, Ai);
    p(this, We);
    p(this, Ot);
    p(this, J);
    var n, s;
    u(this, Ot, f(n = Tt, oi, Ka).call(n, e)), u(this, J, i), u(this, Ai, t ?? f(s = Tt, oi, Ya).call(s, a(this, Ot)) ? "rtl" : "ltr");
  }
  _setL10n(e) {
    u(this, J, e);
  }
  getLanguage() {
    return a(this, Ot);
  }
  getDirection() {
    return a(this, Ai);
  }
  async get(e, t = null, i) {
    return Array.isArray(e) ? (e = e.map((r) => ({
      id: r
    })), (await a(this, J).formatMessages(e)).map((r) => r.value)) : (await a(this, J).formatMessages([{
      id: e,
      args: t
    }]))[0]?.value || i;
  }
  async translate(e) {
    (a(this, We) || u(this, We, /* @__PURE__ */ new Set())).add(e);
    try {
      a(this, J).connectRoot(e), await a(this, J).translateRoots();
    } catch {
    }
  }
  async translateOnce(e) {
    try {
      await a(this, J).translateElements([e]);
    } catch (t) {
      console.error("translateOnce:", t);
    }
  }
  async destroy() {
    if (a(this, We)) {
      for (const e of a(this, We))
        a(this, J).disconnectRoot(e);
      a(this, We).clear(), u(this, We, null);
    }
    a(this, J).pauseObserving();
  }
  pause() {
    a(this, J).pauseObserving();
  }
  resume() {
    a(this, J).resumeObserving();
  }
};
Ai = new WeakMap(), We = new WeakMap(), Ot = new WeakMap(), J = new WeakMap(), oi = new WeakSet(), Ka = /* @__PURE__ */ d(function(e) {
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
}, "#fixupLangCode"), Ya = /* @__PURE__ */ d(function(e) {
  const t = e.split("-", 1)[0];
  return ["ar", "he", "fa", "ps", "ur"].includes(t);
}, "#isRTL"), p(Tt, oi), d(Tt, "L10n");
let Cs = Tt;
function nd() {
  const {
    isAndroid: o,
    isLinux: e,
    isMac: t,
    isWindows: i
  } = Ra.platform;
  return e ? "linux" : i ? "windows" : t ? "macos" : o ? "android" : "other";
}
d(nd, "PLATFORM");
function ya(o, e) {
  const t = new vs(e), i = new Es(o, {
    functions: {
      PLATFORM: nd
    }
  }), n = i.addResource(t);
  return n.length && console.error("L10n errors", n), i;
}
d(ya, "createBundle");
var te, Za, Qa, Ja, qa, Is;
const Fe = class Fe extends Cs {
  constructor(e) {
    super({
      lang: e
    });
    const t = e ? f(Fe, te, Za).bind(Fe, "en-us", this.getLanguage()) : f(Fe, te, qa).bind(Fe, this.getLanguage());
    this._setL10n(new Ss([], t));
  }
};
te = new WeakSet(), Za = /* @__PURE__ */ d(async function* (e, t) {
  const {
    baseURL: i,
    paths: n
  } = await f(this, te, Ja).call(this), s = [t];
  if (e !== t) {
    const l = t.split("-", 1)[0];
    l !== t && s.push(l), s.push(e);
  }
  const r = s.map((l) => [l, f(this, te, Qa).call(this, l, i, n)]);
  for (const [l, h] of r) {
    const c = await h;
    c ? yield c : l === "en-us" && (yield f(this, te, Is).call(this, l));
  }
}, "#generateBundles"), Qa = /* @__PURE__ */ d(async function(e, t, i) {
  const n = i[e];
  if (!n)
    return null;
  const s = new URL(n, t), r = await Zr(s, "text");
  return ya(e, r);
}, "#createBundle"), Ja = /* @__PURE__ */ d(async function() {
  try {
    const {
      href: e
    } = document.querySelector('link[type="application/l10n"]'), t = await Zr(e, "json");
    return {
      baseURL: e.substring(0, e.lastIndexOf("/") + 1) || "./",
      paths: t
    };
  } catch {
  }
  return {
    baseURL: "./",
    paths: /* @__PURE__ */ Object.create(null)
  };
}, "#getPaths"), qa = /* @__PURE__ */ d(async function* (e) {
  yield f(this, te, Is).call(this, e);
}, "#generateBundlesFallback"), Is = /* @__PURE__ */ d(async function(e) {
  return ya(e, `pdfjs-previous-button =
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
pdfjs-current-outline-item-button =
    .title = Find Current Outline Item
pdfjs-current-outline-item-button-label = Current Outline Item
pdfjs-findbar-button =
    .title = Find in Document
pdfjs-findbar-button-label = Find
pdfjs-additional-layers = Additional Layers
pdfjs-thumb-page-title1 =
    .title = Page { $page } of { $total }
pdfjs-thumb-page-canvas =
    .aria-label = Thumbnail of Page { $page }
pdfjs-thumb-page-checkbox1 =
    .title = Select page { $page }
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
pdfjs-editor-color-picker-free-text-input =
    .title = Change text color
pdfjs-editor-free-text-button-label = Text
pdfjs-editor-ink-button =
    .title = Draw
pdfjs-editor-color-picker-ink-input =
    .title = Change drawing color
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
pdfjs-comment-floating-button =
    .title = Comment
    .aria-label = Comment
pdfjs-comment-floating-button-label = Comment
pdfjs-editor-comment-button =
    .title = Comment
    .aria-label = Comment
pdfjs-editor-comment-button-label = Comment
pdfjs-editor-signature-button =
    .title = Add signature
pdfjs-editor-signature-button-label = Add signature
pdfjs-editor-highlight-editor =
    .aria-label = Highlight editor
pdfjs-editor-ink-editor =
    .aria-label = Drawing editor
pdfjs-editor-signature-editor1 =
    .aria-description = Signature editor: { $description }
pdfjs-editor-stamp-editor =
    .aria-label = Image editor
pdfjs-editor-remove-ink-button =
    .title = Remove drawing
pdfjs-editor-remove-freetext-button =
    .title = Remove text
pdfjs-editor-remove-stamp-button =
    .title = Remove image
pdfjs-editor-remove-highlight-button =
    .title = Remove highlight
pdfjs-editor-remove-signature-button =
    .title = Remove signature
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
pdfjs-editor-add-signature-container =
    .aria-label = Signature controls and saved signatures
pdfjs-editor-signature-add-signature-button =
    .title = Add new signature
pdfjs-editor-signature-add-signature-button-label = Add new signature
pdfjs-editor-add-saved-signature-button =
    .title = Saved signature: { $description }
pdfjs-free-text2 =
    .aria-label = Text Editor
    .default-content = Start typing…
pdfjs-editor-comments-sidebar-title =
    { $count ->
        [one] Comment
       *[other] Comments
    }
pdfjs-editor-comments-sidebar-close-button =
    .title = Close the sidebar
    .aria-label = Close the sidebar
pdfjs-editor-comments-sidebar-close-button-label = Close the sidebar
pdfjs-editor-comments-sidebar-no-comments1 = See something noteworthy? Highlight it and leave a comment.
pdfjs-editor-comments-sidebar-no-comments-link = Learn more
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
pdfjs-editor-alt-text-settings-editor-title = Alt text editor
pdfjs-editor-alt-text-settings-show-dialog-button-label = Show alt text editor right away when adding an image
pdfjs-editor-alt-text-settings-show-dialog-description = Helps you make sure all your images have alt text.
pdfjs-editor-alt-text-settings-close-button = Close
pdfjs-editor-highlight-added-alert = Highlight added
pdfjs-editor-freetext-added-alert = Text added
pdfjs-editor-ink-added-alert = Drawing added
pdfjs-editor-stamp-added-alert = Image added
pdfjs-editor-signature-added-alert = Signature added
pdfjs-editor-undo-bar-message-highlight = Highlight removed
pdfjs-editor-undo-bar-message-freetext = Text removed
pdfjs-editor-undo-bar-message-ink = Drawing removed
pdfjs-editor-undo-bar-message-stamp = Image removed
pdfjs-editor-undo-bar-message-signature = Signature removed
pdfjs-editor-undo-bar-message-comment = Comment removed
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
pdfjs-editor-undo-bar-close-button-label = Close
pdfjs-editor-add-signature-dialog-label = This modal allows the user to create a signature to add to a PDF document. The user can edit the name (which also serves as the alt text), and optionally save the signature for repeated use.
pdfjs-editor-add-signature-dialog-title = Add a signature
pdfjs-editor-add-signature-type-button = Type
    .title = Type
pdfjs-editor-add-signature-draw-button = Draw
    .title = Draw
pdfjs-editor-add-signature-image-button = Image
    .title = Image
pdfjs-editor-add-signature-type-input =
    .aria-label = Type your signature
    .placeholder = Type your signature
pdfjs-editor-add-signature-draw-placeholder = Draw your signature
pdfjs-editor-add-signature-draw-thickness-range-label = Thickness
pdfjs-editor-add-signature-draw-thickness-range =
    .title = Drawing thickness: { $thickness }
pdfjs-editor-add-signature-image-placeholder = Drag a file here to upload
pdfjs-editor-add-signature-image-browse-link =
    { PLATFORM() ->
        [macos] Or choose image files
       *[other] Or browse image files
    }
pdfjs-editor-add-signature-description-label = Description (alt text)
pdfjs-editor-add-signature-description-input =
    .title = Description (alt text)
pdfjs-editor-add-signature-description-default-when-drawing = Signature
pdfjs-editor-add-signature-clear-button-label = Clear signature
pdfjs-editor-add-signature-clear-button =
    .title = Clear signature
pdfjs-editor-add-signature-save-checkbox = Save signature
pdfjs-editor-add-signature-save-warning-message = You’ve reached the limit of 5 saved signatures. Remove one to save more.
pdfjs-editor-add-signature-image-upload-error-title = Couldn’t upload image
pdfjs-editor-add-signature-image-upload-error-description = Check your network connection or try another image.
pdfjs-editor-add-signature-image-no-data-error-title = Can’t convert this image into a signature
pdfjs-editor-add-signature-image-no-data-error-description = Please try uploading a different image.
pdfjs-editor-add-signature-error-close-button = Close
pdfjs-editor-add-signature-cancel-button = Cancel
pdfjs-editor-add-signature-add-button = Add
pdfjs-editor-delete-signature-button1 =
    .title = Remove saved signature
pdfjs-editor-delete-signature-button-label1 = Remove saved signature
pdfjs-editor-add-signature-edit-button-label = Edit description
pdfjs-editor-edit-signature-dialog-title = Edit description
pdfjs-editor-edit-signature-update-button = Update
pdfjs-show-comment-button =
    .title = Show comment
pdfjs-editor-edit-comment-popup-button-label = Edit comment
pdfjs-editor-edit-comment-popup-button =
    .title = Edit comment
pdfjs-editor-delete-comment-popup-button-label = Remove comment
pdfjs-editor-delete-comment-popup-button =
    .title = Remove comment
pdfjs-editor-edit-comment-dialog-title-when-editing = Edit comment
pdfjs-editor-edit-comment-dialog-save-button-when-editing = Update
pdfjs-editor-edit-comment-dialog-title-when-adding = Add comment
pdfjs-editor-edit-comment-dialog-save-button-when-adding = Add
pdfjs-editor-edit-comment-dialog-text-input =
    .placeholder = Start typing…
pdfjs-editor-edit-comment-dialog-cancel-button = Cancel
pdfjs-editor-add-comment-button =
    .title = Add comment
pdfjs-toggle-views-manager-button1 =
    .title = Manage pages
pdfjs-toggle-views-manager-notification-button =
    .title = Toggle Sidebar (document contains thumbnails/outline/attachments/layers)
pdfjs-toggle-views-manager-button1-label = Manage pages
pdfjs-views-manager-sidebar =
    .aria-label = Sidebar
pdfjs-views-manager-sidebar-resizer =
    .aria-label = Sidebar resizer
pdfjs-views-manager-view-selector-button =
    .title = Views
pdfjs-views-manager-view-selector-button-label = Views
pdfjs-views-manager-pages-title = Pages
pdfjs-views-manager-outlines-title = Document outline
pdfjs-views-manager-attachments-title = Attachments
pdfjs-views-manager-layers-title = Layers
pdfjs-views-manager-pages-option-label = Pages
pdfjs-views-manager-outlines-option-label = Document outline
pdfjs-views-manager-attachments-option-label = Attachments
pdfjs-views-manager-layers-option-label = Layers
pdfjs-views-manager-add-file-button =
    .title = Add file
pdfjs-views-manager-add-file-button-label = Add file
pdfjs-views-manager-pages-status-action-label =
    { $count ->
        [one] { $count } selected
        *[other] { $count } selected
    }
pdfjs-views-manager-pages-status-none-action-label = Select pages
pdfjs-views-manager-pages-status-action-button-label = Manage
pdfjs-views-manager-pages-status-copy-button-label = Copy
pdfjs-views-manager-pages-status-cut-button-label = Cut
pdfjs-views-manager-pages-status-delete-button-label = Delete
pdfjs-views-manager-pages-status-save-as-button-label = Save as…
pdfjs-views-manager-status-undo-cut-label =
    { $count ->
        [one] 1 page cut
        *[other] { $count } pages cut
    }
pdfjs-views-manager-pages-status-undo-copy-label =
    { $count ->
        [one] 1 page copied
        *[other] { $count } pages copied
    }
pdfjs-views-manager-pages-status-undo-delete-label =
    { $count ->
        [one] 1 page deleted
        *[other] { $count } pages deleted
    }
pdfjs-views-manager-pages-status-waiting-ready-label = Getting your file ready…
pdfjs-views-manager-pages-status-waiting-uploading-label = Uploading file…
pdfjs-views-manager-status-warning-cut-label = Couldn’t cut. Refresh page and try again.
pdfjs-views-manager-status-warning-copy-label = Couldn’t copy. Refresh page and try again.
pdfjs-views-manager-status-warning-delete-label = Couldn’t delete. Refresh page and try again.
pdfjs-views-manager-status-warning-save-label = Couldn’t save. Refresh page and try again.
pdfjs-views-manager-status-undo-button-label = Undo
pdfjs-views-manager-status-close-button =
    .title = Close
pdfjs-views-manager-status-close-button-label = Close
pdfjs-views-manager-paste-button-label = Paste`);
}, "#createBundleFallback"), p(Fe, te), d(Fe, "genericl10n_GenericL10n");
let ai = Fe;
const sd = 1e3, rd = 50, ad = 1e3;
function es() {
  return document.location.hash;
}
d(es, "getCurrentHash");
var $e, T, Ee, vn, yn, ci, xn, Rs, eo, to, Ls, io, no;
const Lr = class Lr {
  constructor({
    linkService: e,
    eventBus: t
  }) {
    p(this, T);
    p(this, $e, null);
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
    this._fingerprint = e, this._updateUrl = i === !0, this._initialized = !0, f(this, T, io).call(this);
    const s = window.history.state;
    if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = es(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !f(this, T, ci).call(this, s, !0) || t) {
      const {
        hash: l,
        page: h,
        rotation: c
      } = f(this, T, Rs).call(this, !0);
      if (!l || n || t) {
        f(this, T, Ee).call(this, null, !0);
        return;
      }
      f(this, T, Ee).call(this, {
        hash: l,
        page: h,
        rotation: c
      }, !0);
      return;
    }
    const r = s.destination;
    f(this, T, xn).call(this, r, s.uid, !0), r.rotation !== void 0 && (this._initialRotation = r.rotation), r.dest ? (this._initialBookmark = JSON.stringify(r.dest), this._destination.page = null) : r.hash ? this._initialBookmark = r.hash : r.page && (this._initialBookmark = `page=${r.page}`);
  }
  reset() {
    this._initialized && (f(this, T, Ls).call(this), this._initialized = !1, f(this, T, no).call(this)), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
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
      if (!f(this, T, yn).call(this, i) && (i !== null || this._destination)) {
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
    if (this._destination && (od(this._destination.hash, n) || ld(this._destination.dest, t))) {
      if (this._destination.page)
        return;
      s = !0;
    }
    this._popStateInProgress && !s || (f(this, T, Ee).call(this, {
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
      if (!f(this, T, yn).call(this, e)) {
        console.error(`PDFHistory.pushPage: "${e}" is not a valid page number.`);
        return;
      }
      this._destination?.page !== e && (this._popStateInProgress || (f(this, T, Ee).call(this, {
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
    !this._initialized || this._popStateInProgress || f(this, T, vn).call(this);
  }
  back() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    f(this, T, ci).call(this, e) && e.uid > 0 && window.history.back();
  }
  forward() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    f(this, T, ci).call(this, e) && e.uid < this._maxUid && window.history.forward();
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
$e = new WeakMap(), T = new WeakSet(), Ee = /* @__PURE__ */ d(function(e, t = !1) {
  const i = t || !this._destination, n = {
    fingerprint: this._fingerprint,
    uid: i ? this._uid : this._uid + 1,
    destination: e
  };
  f(this, T, xn).call(this, e, n.uid);
  let s;
  if (this._updateUrl && e?.hash) {
    const {
      href: r,
      protocol: l
    } = document.location;
    l !== "file:" && (s = Fo(r, e.hash));
  }
  i ? window.history.replaceState(n, "", s) : window.history.pushState(n, "", s);
}, "#pushOrReplaceState"), vn = /* @__PURE__ */ d(function(e = !1) {
  if (!this._position)
    return;
  let t = this._position;
  if (e && (t = Object.assign(/* @__PURE__ */ Object.create(null), this._position), t.temporary = !0), !this._destination) {
    f(this, T, Ee).call(this, t);
    return;
  }
  if (this._destination.temporary) {
    f(this, T, Ee).call(this, t, !0);
    return;
  }
  if (this._destination.hash === t.hash || !this._destination.page && this._numPositionUpdates <= rd)
    return;
  let i = !1;
  if (this._destination.page >= t.first && this._destination.page <= t.page) {
    if (this._destination.dest !== void 0 || !this._destination.first)
      return;
    i = !0;
  }
  f(this, T, Ee).call(this, t, i);
}, "#tryPushCurrentPosition"), yn = /* @__PURE__ */ d(function(e) {
  return Number.isInteger(e) && e > 0 && e <= this.linkService.pagesCount;
}, "#isValidPage"), ci = /* @__PURE__ */ d(function(e, t = !1) {
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
}, "#isValidState"), xn = /* @__PURE__ */ d(function(e, t, i = !1) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), i && e?.temporary && delete e.temporary, this._destination = e, this._uid = t, this._maxUid = Math.max(this._maxUid, t), this._numPositionUpdates = 0;
}, "#updateInternalState"), Rs = /* @__PURE__ */ d(function(e = !1) {
  const t = unescape(es()).substring(1), i = zn(t), n = i.get("nameddest") || "";
  let s = i.get("page") | 0;
  return (!f(this, T, yn).call(this, s) || e && n.length > 0) && (s = null), {
    hash: t,
    page: s,
    rotation: this.linkService.rotation
  };
}, "#parseCurrentHash"), eo = /* @__PURE__ */ d(function({
  location: e
}) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
    hash: e.pdfOpenParams.substring(1),
    page: this.linkService.page,
    first: e.pageNumber,
    rotation: e.rotation
  }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
    this._popStateInProgress || f(this, T, vn).call(this, !0), this._updateViewareaTimeout = null;
  }, ad));
}, "#updateViewarea"), to = /* @__PURE__ */ d(function({
  state: e
}) {
  const t = es(), i = this._currentHash !== t;
  if (this._currentHash = t, !e) {
    this._uid++;
    const {
      hash: s,
      page: r,
      rotation: l
    } = f(this, T, Rs).call(this);
    f(this, T, Ee).call(this, {
      hash: s,
      page: r,
      rotation: l
    }, !0);
    return;
  }
  if (!f(this, T, ci).call(this, e))
    return;
  this._popStateInProgress = !0, i && (this._blockHashChange++, ml({
    target: window,
    name: "hashchange",
    delay: sd
  }).then(() => {
    this._blockHashChange--;
  }));
  const n = e.destination;
  f(this, T, xn).call(this, n, e.uid, !0), ja(n.rotation) && (this.linkService.rotation = n.rotation), n.dest ? this.linkService.goToDestination(n.dest) : n.hash ? this.linkService.setHash(n.hash) : n.page && (this.linkService.page = n.page), Promise.resolve().then(() => {
    this._popStateInProgress = !1;
  });
}, "#popState"), Ls = /* @__PURE__ */ d(function() {
  (!this._destination || this._destination.temporary) && f(this, T, vn).call(this);
}, "#pageHide"), io = /* @__PURE__ */ d(function() {
  if (a(this, $e))
    return;
  u(this, $e, new AbortController());
  const {
    signal: e
  } = a(this, $e);
  this.eventBus._on("updateviewarea", f(this, T, eo).bind(this), {
    signal: e
  }), window.addEventListener("popstate", f(this, T, to).bind(this), {
    signal: e
  }), window.addEventListener("pagehide", f(this, T, Ls).bind(this), {
    signal: e
  });
}, "#bindEvents"), no = /* @__PURE__ */ d(function() {
  a(this, $e)?.abort(), u(this, $e, null);
}, "#unbindEvents"), d(Lr, "PDFHistory");
let As = Lr;
function od(o, e) {
  return typeof o != "string" || typeof e != "string" ? !1 : o === e || zn(o).get("nameddest") === e;
}
d(od, "isDestHashesEqual");
function ld(o, e) {
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
  if (d(t, "isEntryEqual"), !(Array.isArray(o) && Array.isArray(e)) || o.length !== e.length)
    return !1;
  for (let i = 0, n = o.length; i < n; i++)
    if (!t(o[i], e[i]))
      return !1;
  return !0;
}
d(ld, "isDestArraysEqual");
var Ri, Li, Ti, Ni, Mi, Ft, Vt;
const Tr = class Tr {
  constructor(e) {
    p(this, Ri, null);
    p(this, Li, null);
    p(this, Ti, null);
    p(this, Ni, null);
    p(this, Mi, null);
    p(this, Ft);
    p(this, Vt, null);
    this.pageIndex = e.pageIndex, this.accessibilityManager = e.accessibilityManager, this.l10n = e.l10n, this.l10n ||= new ai(), this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, u(this, Ft, e.uiManager), u(this, Ri, e.annotationLayer || null), u(this, Mi, e.textLayer || null), u(this, Li, e.drawLayer || null), u(this, Ti, e.onAppend || null), u(this, Ni, e.structTreeLayer || null), u(this, Vt, e.clonedFrom || null);
  }
  updatePageIndex(e) {
    this.pageIndex = e, this.annotationEditorLayer?.updatePageIndex(e);
  }
  async render({
    viewport: e,
    intent: t = "display"
  }) {
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
    n.className = "annotationEditorLayer", n.hidden = !0, n.dir = a(this, Ft).direction, (r = a(this, Ti)) == null || r.call(this, n), this.annotationEditorLayer = new Io({
      uiManager: a(this, Ft),
      div: n,
      structTreeLayer: a(this, Ni),
      accessibilityManager: this.accessibilityManager,
      pageIndex: this.pageIndex,
      l10n: this.l10n,
      viewport: i,
      annotationLayer: a(this, Ri),
      textLayer: a(this, Mi),
      drawLayer: a(this, Li)
    }), this.annotationEditorLayer.setClonedFrom(a(this, Vt)?.annotationEditorLayer), u(this, Vt, null);
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
Ri = new WeakMap(), Li = new WeakMap(), Ti = new WeakMap(), Ni = new WeakMap(), Mi = new WeakMap(), Ft = new WeakMap(), Vt = new WeakMap(), d(Tr, "AnnotationEditorLayerBuilder");
let Ts = Tr;
{
  var Ns = /* @__PURE__ */ new Map();
  const {
    maxTouchPoints: o,
    platform: e,
    userAgent: t
  } = navigator, i = /Android/.test(t);
  (/\b(iPad|iPhone|iPod)(?=;)/.test(t) || e === "MacIntel" && o > 1 || i) && Ns.set("maxCanvasPixels", 5242880), i && Ns.set("useSystemFonts", !1);
}
const b = {
  BROWSER: 1,
  VIEWER: 2,
  API: 4,
  WORKER: 8,
  EVENT_DISPATCH: 16,
  PREFERENCE: 128
}, Ms = {
  BOOLEAN: 1,
  NUMBER: 2,
  OBJECT: 4,
  STRING: 8,
  UNDEFINED: 16
}, je = {
  allowedGlobalEvents: {
    value: null,
    kind: b.BROWSER
  },
  canvasMaxAreaInBytes: {
    value: -1,
    kind: b.BROWSER + b.API
  },
  isInAutomation: {
    value: !1,
    kind: b.BROWSER
  },
  localeProperties: {
    value: {
      lang: navigator.language || "en-US"
    },
    kind: b.BROWSER
  },
  maxCanvasDim: {
    value: 32767,
    kind: b.BROWSER + b.VIEWER
  },
  nimbusDataStr: {
    value: "",
    kind: b.BROWSER
  },
  supportsCaretBrowsingMode: {
    value: !1,
    kind: b.BROWSER
  },
  supportsDocumentFonts: {
    value: !0,
    kind: b.BROWSER
  },
  supportsIntegratedFind: {
    value: !1,
    kind: b.BROWSER
  },
  supportsMouseWheelZoomCtrlKey: {
    value: !0,
    kind: b.BROWSER
  },
  supportsMouseWheelZoomMetaKey: {
    value: !0,
    kind: b.BROWSER
  },
  supportsPinchToZoom: {
    value: !0,
    kind: b.BROWSER
  },
  supportsPrinting: {
    value: !0,
    kind: b.BROWSER
  },
  toolbarDensity: {
    value: 0,
    kind: b.BROWSER + b.EVENT_DISPATCH
  },
  altTextLearnMoreUrl: {
    value: "",
    kind: b.VIEWER + b.PREFERENCE
  },
  annotationEditorMode: {
    value: 0,
    kind: b.VIEWER + b.PREFERENCE
  },
  annotationMode: {
    value: 2,
    kind: b.VIEWER + b.PREFERENCE
  },
  capCanvasAreaFactor: {
    value: 200,
    kind: b.VIEWER + b.PREFERENCE
  },
  commentLearnMoreUrl: {
    value: "",
    kind: b.VIEWER + b.PREFERENCE
  },
  cursorToolOnLoad: {
    value: 0,
    kind: b.VIEWER + b.PREFERENCE
  },
  debuggerSrc: {
    value: "./debugger.mjs",
    kind: b.VIEWER
  },
  defaultZoomDelay: {
    value: 400,
    kind: b.VIEWER + b.PREFERENCE
  },
  defaultZoomValue: {
    value: "",
    kind: b.VIEWER + b.PREFERENCE
  },
  disableHistory: {
    value: !1,
    kind: b.VIEWER
  },
  disablePageLabels: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableAltText: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableAltTextModelDownload: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE + b.EVENT_DISPATCH
  },
  enableAutoLinking: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableComment: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableDetailCanvas: {
    value: !0,
    kind: b.VIEWER
  },
  enableGuessAltText: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE + b.EVENT_DISPATCH
  },
  enableHighlightFloatingButton: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableNewAltTextWhenAddingImage: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableOptimizedPartialRendering: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enablePermissions: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableScripting: {
    value: !0,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableSignatureEditor: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableSplitMerge: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  enableUpdatedAddImage: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: b.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: b.VIEWER + b.PREFERENCE
  },
  highlightEditorColors: {
    value: "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F,yellow_HCM=#FFFFCC,green_HCM=#53FFBC,blue_HCM=#80EBFF,pink_HCM=#F6B8FF,red_HCM=#C50043",
    kind: b.VIEWER + b.PREFERENCE
  },
  historyUpdateUrl: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: b.VIEWER
  },
  maxCanvasPixels: {
    value: 2 ** 25,
    kind: b.VIEWER
  },
  minDurationToUpdateCanvas: {
    value: 500,
    kind: b.VIEWER
  },
  forcePageColors: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  pageColorsBackground: {
    value: "Canvas",
    kind: b.VIEWER + b.PREFERENCE
  },
  pageColorsForeground: {
    value: "CanvasText",
    kind: b.VIEWER + b.PREFERENCE
  },
  pdfBugEnabled: {
    value: !1,
    kind: b.VIEWER + b.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: b.VIEWER
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: b.VIEWER + b.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: b.VIEWER + b.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: b.VIEWER + b.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: b.VIEWER + b.PREFERENCE
  },
  viewerCssTheme: {
    value: 0,
    kind: b.VIEWER + b.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: b.VIEWER + b.PREFERENCE
  },
  cMapPacked: {
    value: !0,
    kind: b.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: b.API
  },
  disableAutoFetch: {
    value: !1,
    kind: b.API + b.PREFERENCE
  },
  disableFontFace: {
    value: !1,
    kind: b.API + b.PREFERENCE
  },
  disableRange: {
    value: !1,
    kind: b.API + b.PREFERENCE
  },
  disableStream: {
    value: !1,
    kind: b.API + b.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: b.API
  },
  enableHWA: {
    value: !0,
    kind: b.API + b.VIEWER + b.PREFERENCE
  },
  enableXfa: {
    value: !0,
    kind: b.API + b.PREFERENCE
  },
  fontExtraProperties: {
    value: !1,
    kind: b.API
  },
  iccUrl: {
    value: "../web/iccs/",
    kind: b.API
  },
  isEvalSupported: {
    value: !0,
    kind: b.API
  },
  isOffscreenCanvasSupported: {
    value: !0,
    kind: b.API
  },
  maxImageSize: {
    value: -1,
    kind: b.API
  },
  pdfBug: {
    value: !1,
    kind: b.API
  },
  standardFontDataUrl: {
    value: "../web/standard_fonts/",
    kind: b.API
  },
  useSystemFonts: {
    value: void 0,
    kind: b.API,
    type: Ms.BOOLEAN + Ms.UNDEFINED
  },
  verbosity: {
    value: 1,
    kind: b.API
  },
  wasmUrl: {
    value: "../web/wasm/",
    kind: b.API
  },
  workerPort: {
    value: null,
    kind: b.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.mjs",
    kind: b.WORKER
  }
};
je.defaultUrl = {
  value: "compressed.tracemonkey-pldi-09.pdf",
  kind: b.VIEWER
}, je.sandboxBundleSrc = {
  value: "../build/pdf.sandbox.mjs",
  kind: b.VIEWER
}, je.enableFakeMLManager = {
  value: !0,
  kind: b.VIEWER
};
je.disablePreferences = {
  value: !1,
  kind: b.VIEWER
};
var ze;
const oe = class oe {
  static get(e) {
    return a(this, ze).get(e);
  }
  static getAll(e = null, t = !1) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const n in je) {
      const s = je[n];
      e && !(e & s.kind) || (i[n] = t ? s.value : a(this, ze).get(n));
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
      const s = je[n], r = e[n];
      if (!s || !(typeof r == typeof s.value || Ms[(typeof r).toUpperCase()] & s.type))
        continue;
      const {
        kind: l
      } = s;
      t && !(l & b.BROWSER || l & b.PREFERENCE) || (this.eventBus && l & b.EVENT_DISPATCH && (i ||= /* @__PURE__ */ new Map()).set(n, r), a(this, ze).set(n, r));
    }
    if (i)
      for (const [n, s] of i)
        this.eventBus.dispatch(n.toLowerCase(), {
          source: this,
          value: s
        });
  }
};
ze = new WeakMap(), d(oe, "AppOptions"), Z(oe, "eventBus"), p(oe, ze, /* @__PURE__ */ new Map()), (() => {
  for (const e in je)
    a(oe, ze).set(e, je[e].value);
  for (const [e, t] of Ns)
    a(oe, ze).set(e, t);
  oe._hasInvokedSet = !1, oe._checkDisablePreferences = () => oe.get("disablePreferences") ? !0 : (oe._hasInvokedSet && console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.'), !1);
})();
let bi = oe;
function xa({
  width: o,
  height: e,
  left: t,
  top: i
}, n) {
  if (o === 0 || e === 0)
    return null;
  const s = n.textLayer.div.getBoundingClientRect(), r = n.getPagePoint(t - s.left, i - s.top), l = n.getPagePoint(t - s.left + o, i - s.top + e);
  return hr.normalizeRect([r[0], r[1], l[0], l[1]]);
}
d(xa, "DOMRectToPDF");
function dd(o, e) {
  const t = o.getClientRects();
  if (t.length === 1)
    return {
      rect: xa(t[0], e)
    };
  const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0], n = [];
  let s = 0;
  for (const r of t) {
    const l = xa(r, e);
    l !== null && (n[s] = n[s + 4] = l[0], n[s + 1] = n[s + 3] = l[3], n[s + 2] = n[s + 6] = l[2], n[s + 5] = n[s + 7] = l[1], hr.rectBoundingBox(...l, i), s += 8);
  }
  return {
    quadPoints: n,
    rect: i
  };
}
d(dd, "calculateLinkPosition");
function Pa(o, e) {
  let t = o;
  do {
    if (t.nodeType === Node.TEXT_NODE) {
      const i = t.textContent.length;
      if (e <= i)
        return [t, e];
      e -= i;
    } else if (t.firstChild) {
      t = t.firstChild;
      continue;
    }
    for (; !t.nextSibling && t !== o; )
      t = t.parentNode;
    t !== o && (t = t.nextSibling);
  } while (t !== o);
  throw new Error("Offset is bigger than container's contents length.");
}
d(Pa, "textPosition");
function hd({
  url: o,
  index: e,
  length: t
}, i, n) {
  const s = i._textHighlighter, [{
    begin: r,
    end: l
  }] = s._convertMatches([e], [t]), h = new Range();
  return h.setStart(...Pa(s.textDivs[r.divIdx], r.offset)), h.setEnd(...Pa(s.textDivs[l.divIdx], l.offset)), {
    id: `inferred_link_${n}`,
    unsafeUrl: o,
    url: o,
    annotationType: Ia.LINK,
    rotation: 0,
    ...dd(h, i),
    borderStyle: null
  };
}
d(hd, "createLinkAnnotation");
var Un, ji, ki;
const Nt = class Nt {
  static findLinks(e) {
    a(this, ji) ?? u(this, ji, new RegExp("\\b(?:https?:\\/\\/|mailto:|www\\.)(?:[\\S--[\\p{P}<>]]|\\/|[\\S--[\\[\\]]]+[\\S--[\\p{P}<>]])+|(?=\\p{L})[\\S--[@\\p{Ps}\\p{Pe}<>]]+@([\\S--[[\\p{P}--\\-]<>]]+(?:\\.[\\S--[[\\p{P}--\\-]<>]]+)+)", "gmv"));
    const [t, i] = bn(e, {
      ignoreDashEOL: !0
    }), n = t.matchAll(a(this, ji)), s = [];
    for (const r of n) {
      const [l, h] = r;
      let c;
      if (l.startsWith("www.") || l.startsWith("http://") || l.startsWith("https://"))
        c = l;
      else if (h) {
        const w = URL.parse(`http://${h}`)?.hostname;
        if (!w || (a(this, ki) ?? u(this, ki, /\.\d+$/), a(this, ki).test(w)))
          continue;
      }
      c ??= l.startsWith("mailto:") ? l : `mailto:${l}`;
      const m = Aa(c, null, {
        addDefaultProtocol: !0
      });
      if (m) {
        const [w, g] = ka(i, r.index, l.length);
        s.push({
          url: m.href,
          index: w,
          length: g
        });
      }
    }
    return s;
  }
  static processLinks(e) {
    return this.findLinks(e._textHighlighter.textContentItemsStr.join(`
`)).map((t) => hd(t, e, Xn(this, Un)._++));
  }
};
Un = new WeakMap(), ji = new WeakMap(), ki = new WeakMap(), d(Nt, "Autolinker"), p(Nt, Un, 0), p(Nt, ji), p(Nt, ki);
let js = Nt;
const D = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
}, Nr = class Nr {
  renderingId = "";
  renderTask = null;
  resume = null;
  get renderingState() {
    throw new Error("Abstract getter `renderingState` accessed");
  }
  set renderingState(e) {
    throw new Error("Abstract setter `renderingState` accessed");
  }
  async draw() {
    throw new Error("Not implemented: draw");
  }
};
d(Nr, "RenderableView");
let ks = Nr;
var Ge, Ut, Bt, xe, Xe, Pe, Bn, Di, Ds;
const Mr = class Mr extends ks {
  constructor(t) {
    super();
    p(this, Di);
    p(this, Ge, null);
    p(this, Ut, null);
    p(this, Bt, D.INITIAL);
    p(this, xe, null);
    p(this, Xe, 0);
    p(this, Pe, null);
    Z(this, "canvas", null);
    Z(this, "div", null);
    Z(this, "enableOptimizedPartialRendering", !1);
    Z(this, "eventBus", null);
    Z(this, "id", null);
    Z(this, "pageColors", null);
    Z(this, "recordedBBoxes", null);
    Z(this, "renderingQueue", null);
    p(this, Bn, /* @__PURE__ */ d((t) => {
      var i;
      if ((i = a(this, xe)) == null || i.call(this, !1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = D.PAUSED, this.resume = () => {
          this.renderingState = D.RUNNING, t();
        };
        return;
      }
      t();
    }, "#renderContinueCallback"));
    this.eventBus = t.eventBus, this.id = t.id, this.pageColors = t.pageColors || null, this.renderingQueue = t.renderingQueue, this.enableOptimizedPartialRendering = t.enableOptimizedPartialRendering ?? !1, this.minDurationToUpdateCanvas = t.minDurationToUpdateCanvas ?? 500;
  }
  get renderingState() {
    return a(this, Bt);
  }
  set renderingState(t) {
    var i;
    if (t !== a(this, Bt))
      switch (u(this, Bt, t), a(this, Ge) && (clearTimeout(a(this, Ge)), u(this, Ge, null)), t) {
        case D.PAUSED:
          this.div.classList.remove("loading"), u(this, Xe, 0), (i = a(this, xe)) == null || i.call(this, !1);
          break;
        case D.RUNNING:
          this.div.classList.add("loadingIcon"), u(this, Ge, setTimeout(() => {
            this.div.classList.add("loading"), u(this, Ge, null);
          }, 0)), u(this, Xe, Date.now());
          break;
        case D.INITIAL:
        case D.FINISHED:
          this.div.classList.remove("loadingIcon", "loading"), u(this, Xe, 0);
          break;
      }
  }
  _createCanvas(t, i = !1) {
    const {
      pageColors: n
    } = this, s = !!(n?.background && n?.foreground), r = this.canvas, l = !r && !s && !i;
    let h = this.canvas = document.createElement("canvas");
    return u(this, xe, (c) => {
      if (l) {
        let m = a(this, Pe);
        if (!c && this.minDurationToUpdateCanvas > 0) {
          if (Date.now() - a(this, Xe) < this.minDurationToUpdateCanvas)
            return;
          m || (m = u(this, Pe, h), h = this.canvas = h.cloneNode(!1), t(h));
        }
        if (m) {
          h.getContext("2d", {
            alpha: !1
          }).drawImage(m, 0, 0), c ? f(this, Di, Ds).call(this) : u(this, Xe, Date.now());
          return;
        }
        t(h), u(this, xe, null);
        return;
      }
      c && (r ? (r.replaceWith(h), r.width = r.height = 0) : t(h));
    }), {
      canvas: h,
      prevCanvas: r
    };
  }
  _resetCanvas() {
    const {
      canvas: t
    } = this;
    t && (t.remove(), t.width = t.height = 0, this.canvas = null, f(this, Di, Ds).call(this));
  }
  async _drawCanvas(t, i, n) {
    var l, h;
    const s = this.renderTask = this.pdfPage.render(t);
    s.onContinue = a(this, Bn), s.onError = (c) => {
      c instanceof ts && (i(), u(this, Ut, null));
    };
    let r = null;
    try {
      await s.promise, (l = a(this, xe)) == null || l.call(this, !0);
    } catch (c) {
      if (c instanceof ts)
        return;
      r = c, (h = a(this, xe)) == null || h.call(this, !0);
    } finally {
      u(this, Ut, r), s === this.renderTask && (this.renderTask = null, this.enableOptimizedPartialRendering && (this.recordedBBoxes ??= s.recordedBBoxes));
    }
    if (this.renderingState = D.FINISHED, n(s), r)
      throw r;
  }
  cancelRendering({
    cancelExtraDelay: t = 0
  } = {}) {
    this.renderTask && (this.renderTask.cancel(t), this.renderTask = null), this.resume = null;
  }
  dispatchPageRender() {
    this.eventBus.dispatch("pagerender", {
      source: this,
      pageNumber: this.id
    });
  }
  dispatchPageRendered(t, i) {
    this.eventBus.dispatch("pagerendered", {
      source: this,
      pageNumber: this.id,
      cssTransform: t,
      isDetailView: i,
      timestamp: performance.now(),
      error: a(this, Ut)
    });
  }
};
Ge = new WeakMap(), Ut = new WeakMap(), Bt = new WeakMap(), xe = new WeakMap(), Xe = new WeakMap(), Pe = new WeakMap(), Bn = new WeakMap(), Di = new WeakSet(), Ds = /* @__PURE__ */ d(function() {
  a(this, Pe) && (a(this, Pe).width = a(this, Pe).height = 0, u(this, Pe, null));
}, "#resetTempCanvas"), d(Mr, "BasePDFPageView");
let Nn = Mr;
var ue;
const jr = class jr {
  constructor() {
    p(this, ue, null);
  }
  async render({
    intent: e = "display"
  }) {
    e !== "display" || a(this, ue) || this._cancelled || u(this, ue, new Lo());
  }
  cancel() {
    this._cancelled = !0, a(this, ue) && (a(this, ue).destroy(), u(this, ue, null));
  }
  setParent(e) {
    a(this, ue)?.setParent(e);
  }
  getDrawLayer() {
    return a(this, ue);
  }
};
ue = new WeakMap(), d(jr, "DrawLayerBuilder");
let Os = jr;
var ie, Hn, so;
const kr = class kr extends Nn {
  constructor({
    pageView: t
  }) {
    super(t);
    p(this, Hn);
    p(this, ie, null);
    Z(this, "renderingCancelled", !1);
    this.pageView = t, this.renderingId = "detail" + this.id, this.div = t.div;
  }
  setPdfPage(t) {
    this.pageView.setPdfPage(t);
  }
  get pdfPage() {
    return this.pageView.pdfPage;
  }
  get renderingState() {
    return super.renderingState;
  }
  set renderingState(t) {
    this.renderingCancelled = !1, super.renderingState = t;
  }
  reset({
    keepCanvas: t = !1
  } = {}) {
    const i = this.renderingCancelled || this.renderingState === D.RUNNING || this.renderingState === D.PAUSED;
    this.cancelRendering(), this.renderingState = D.INITIAL, this.renderingCancelled = i, t || this._resetCanvas();
  }
  update({
    visibleArea: t = null,
    underlyingViewUpdated: i = !1
  } = {}) {
    if (i) {
      this.cancelRendering(), this.renderingState = D.INITIAL;
      return;
    }
    if (!f(this, Hn, so).call(this, t))
      return;
    const {
      viewport: n,
      maxCanvasPixels: s,
      capCanvasAreaFactor: r
    } = this.pageView, l = t.maxX - t.minX, h = t.maxY - t.minY, c = l * h * mn.pixelRatio ** 2, w = (Math.sqrt(mn.capPixels(s, r) / c) - 1) / 2;
    let g = Math.min(1, w);
    g < 0 && (g = 0);
    const v = l * g, C = h * g, R = Math.max(0, t.minX - v), L = Math.min(n.width, t.maxX + v), M = Math.max(0, t.minY - C), A = Math.min(n.height, t.maxY + C), P = L - R, y = A - M;
    u(this, ie, {
      minX: R,
      minY: M,
      width: P,
      height: y,
      scale: n.scale
    }), this.reset({
      keepCanvas: !0
    });
  }
  _getRenderingContext(t, i) {
    const n = this.pageView._getRenderingContext(t, i, !1), s = this.pdfPage.recordedBBoxes;
    if (!s || !this.enableOptimizedPartialRendering)
      return n;
    const {
      viewport: {
        width: r,
        height: l
      }
    } = this.pageView, {
      width: h,
      height: c,
      minX: m,
      minY: w
    } = a(this, ie), g = m / r, v = w / l, C = (m + h) / r, R = (w + c) / l;
    return {
      ...n,
      operationsFilter(L) {
        return s.isEmpty(L) ? !1 : s.minX(L) <= C && s.maxX(L) >= g && s.minY(L) <= R && s.maxY(L) >= v;
      }
    };
  }
  async draw() {
    if (this.pageView.detailView !== this)
      return;
    const t = this.pageView.renderingState === D.FINISHED || this.renderingState === D.FINISHED;
    this.renderingState !== D.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: i,
      pdfPage: n,
      viewport: s
    } = this.pageView;
    if (!n)
      throw this.renderingState = D.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = D.RUNNING;
    const r = this.pageView._ensureCanvasWrapper(), {
      canvas: l,
      prevCanvas: h
    } = this._createCanvas((L) => {
      r.firstElementChild?.tagName === "CANVAS" ? r.firstElementChild.after(L) : r.prepend(L);
    }, t);
    l.ariaHidden = !0, this.enableOptimizedPartialRendering && (l.className = "detailView");
    const {
      width: c,
      height: m
    } = s, w = a(this, ie), {
      pixelRatio: g
    } = mn, v = [g, 0, 0, g, -w.minX * g, -w.minY * g];
    l.width = w.width * g, l.height = w.height * g;
    const {
      style: C
    } = l;
    C.width = `${w.width * 100 / c}%`, C.height = `${w.height * 100 / m}%`, C.top = `${w.minY * 100 / m}%`, C.left = `${w.minX * 100 / c}%`;
    const R = this._drawCanvas(this._getRenderingContext(l, v), () => {
      this.canvas?.remove(), this.canvas = h;
    }, () => {
      this.dispatchPageRendered(!1, !0);
    });
    return i.setAttribute("data-loaded", !0), this.dispatchPageRender(), R;
  }
};
ie = new WeakMap(), Hn = new WeakSet(), so = /* @__PURE__ */ d(function(t) {
  if (!a(this, ie))
    return !0;
  const i = a(this, ie).minX, n = a(this, ie).minY, s = a(this, ie).width + i, r = a(this, ie).height + n;
  if (t.minX < i || t.minY < n || t.maxX > s || t.maxY > r)
    return !0;
  const {
    width: l,
    height: h,
    scale: c
  } = this.pageView.viewport;
  if (a(this, ie).scale !== c)
    return !0;
  const m = t.minX - i, w = s - t.maxX, g = t.minY - n, v = r - t.maxY, C = 0.5, R = (1 + C) / C;
  return i > 0 && w / m > R || s < l && m / w > R || n > 0 && v / g > R || r < h && g / v > R;
}, "#shouldRenderDifferentArea"), d(kr, "PDFPageDetailView");
let Fs = kr;
const _a = {
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
  THead: "rowgroup",
  TBody: "rowgroup",
  TFoot: null,
  Caption: null,
  Figure: "figure",
  Formula: null,
  Artifact: null
}, ro = /* @__PURE__ */ new Set(["math", "merror", "mfrac", "mi", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mprescripts", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msubsup", "msup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "semantics"]), Mn = "http://www.w3.org/1998/Math/MathML", Dr = class Dr {
  static get sanitizer() {
    return Ei(this, "sanitizer", Ra.isSanitizerSupported ? new Sanitizer({
      elements: [...ro].map((e) => ({
        name: e,
        namespace: Mn
      })),
      replaceWithChildrenElements: [{
        name: "maction",
        namespace: Mn
      }],
      attributes: ["dir", "displaystyle", "mathbackground", "mathcolor", "mathsize", "scriptlevel", "encoding", "display", "linethickness", "intent", "arg", "form", "fence", "separator", "lspace", "rspace", "stretchy", "symmetric", "maxsize", "minsize", "largeop", "movablelimits", "width", "height", "depth", "voffset", "accent", "accentunder", "columnspan", "rowspan"],
      comments: !1
    }) : null);
  }
};
d(Dr, "MathMLSanitizer");
let jn = Dr;
const ud = /^H(\d+)$/;
var Ht, le, Wt, Oi, $t, Ke, Ye, ce, we, Vs, ao, Us;
const Or = class Or {
  constructor(e, t) {
    p(this, we);
    p(this, Ht);
    p(this, le, null);
    p(this, Wt);
    p(this, Oi, /* @__PURE__ */ new Map());
    p(this, $t);
    p(this, Ke, null);
    p(this, Ye, null);
    p(this, ce, null);
    u(this, Ht, e.getStructTree()), u(this, $t, t);
  }
  async render() {
    if (a(this, Wt))
      return a(this, Wt);
    const {
      promise: e,
      resolve: t,
      reject: i
    } = Promise.withResolvers();
    u(this, Wt, e);
    try {
      u(this, le, f(this, we, Us).call(this, await a(this, Ht)));
    } catch (n) {
      i(n);
    }
    return u(this, Ht, null), a(this, le)?.classList.add("structTree"), t(a(this, le)), e;
  }
  async getAriaAttributes(e) {
    try {
      return await this.render(), a(this, Oi).get(e);
    } catch {
    }
    return null;
  }
  hide() {
    a(this, le) && !a(this, le).hidden && (a(this, le).hidden = !0);
  }
  show() {
    a(this, le)?.hidden && (a(this, le).hidden = !1);
  }
  updateTextLayer() {
    if (a(this, Ke)) {
      for (const [e, t] of a(this, Ke))
        document.getElementById(e)?.append(t);
      a(this, Ke).clear(), u(this, Ke, null);
    }
    if (a(this, Ye)) {
      for (const e of a(this, Ye)) {
        const t = document.getElementById(e);
        t && (t.ariaHidden = !0);
      }
      a(this, Ye).length = 0, u(this, Ye, null);
    }
    if (a(this, ce)) {
      for (let e = 0, t = a(this, ce).length; e < t; e += 2) {
        const i = a(this, ce)[e], n = a(this, ce)[e + 1];
        let s = "";
        for (const r of n) {
          const l = document.getElementById(r);
          l && (s += l.textContent.trim() || "", l.ariaHidden = "true");
        }
        s && (i.textContent = s);
      }
      a(this, ce).length = 0, u(this, ce, null);
    }
  }
};
Ht = new WeakMap(), le = new WeakMap(), Wt = new WeakMap(), Oi = new WeakMap(), $t = new WeakMap(), Ke = new WeakMap(), Ye = new WeakMap(), ce = new WeakMap(), we = new WeakSet(), Vs = /* @__PURE__ */ d(function(e, t) {
  const {
    alt: i,
    id: n,
    lang: s
  } = e;
  if (i !== void 0) {
    let r = !1;
    const l = mi(i);
    for (const h of e.children)
      h.type === "annotation" && (a(this, Oi).getOrInsertComputed(h.id, ko).set("aria-label", l), r = !0);
    r || t.setAttribute("aria-label", l);
  }
  n !== void 0 && t.setAttribute("aria-owns", n), s !== void 0 && t.setAttribute("lang", mi(s, !0));
}, "#setAttributes"), ao = /* @__PURE__ */ d(function(e, t) {
  const {
    alt: i,
    bbox: n,
    children: s
  } = e, r = s?.[0];
  if (!a(this, $t) || !i || !n || r?.type !== "content")
    return !1;
  const {
    id: l
  } = r;
  if (!l)
    return !1;
  t.setAttribute("aria-owns", l);
  const h = document.createElement("span");
  (a(this, Ke) || u(this, Ke, /* @__PURE__ */ new Map())).set(l, h), h.setAttribute("role", "img"), h.setAttribute("aria-label", mi(i));
  const {
    pageHeight: c,
    pageX: m,
    pageY: w
  } = a(this, $t), g = "calc(var(--total-scale-factor) *", {
    style: v
  } = h;
  return v.width = `${g}${n[2] - n[0]}px)`, v.height = `${g}${n[3] - n[1]}px)`, v.left = `${g}${n[0] - m}px)`, v.top = `${g}${c - n[3] + w}px)`, !0;
}, "#addImageInTextLayer"), Us = /* @__PURE__ */ d(function(e, t = []) {
  if (!e)
    return null;
  let i;
  if ("role" in e) {
    const {
      role: n
    } = e;
    if (ro.has(n)) {
      i = document.createElementNS(Mn, n);
      const r = [];
      (a(this, ce) || u(this, ce, [])).push(i, r);
      for (const {
        type: l,
        id: h
      } of e.children || [])
        l === "content" && h && r.push(h);
    } else
      i = document.createElement("span");
    const s = n.match(ud);
    if (s ? (i.setAttribute("role", "heading"), i.setAttribute("aria-level", s[1])) : _a[n] && i.setAttribute("role", n === "TH" && t.at(-1)?.role === "TR" && t.at(-2)?.role === "TBody" ? "rowheader" : _a[n]), n === "Figure" && f(this, we, ao).call(this, e, i))
      return i;
    if (n === "Formula") {
      if (e.mathML && jn.sanitizer) {
        i.setHTML(e.mathML, {
          sanitizer: jn.sanitizer
        });
        for (const {
          id: r
        } of e.children || [])
          r && (a(this, Ye) || u(this, Ye, [])).push(r);
        delete e.alt;
      }
      !e.mathML && e.children.length === 1 && e.children[0].role !== "math" && (i = document.createElementNS(Mn, "math"), delete e.alt);
    }
  }
  if (i ||= document.createElement("span"), f(this, we, Vs).call(this, e, i), e.children)
    if (e.children.length === 1 && "id" in e.children[0])
      f(this, we, Vs).call(this, e.children[0], i);
    else {
      t.push(e);
      for (const n of e.children)
        i.append(f(this, we, Us).call(this, n, t));
      t.pop();
    }
  return i;
}, "#walk"), d(Or, "StructTreeLayerBuilder");
let kn = Or;
var _e, ne, Se, Ze, zt, Pn, Fi, Hs;
const lt = class lt {
  constructor() {
    p(this, Fi);
    p(this, _e, !1);
    p(this, ne, null);
    p(this, Se, /* @__PURE__ */ new Map());
    p(this, Ze, /* @__PURE__ */ new Map());
  }
  setTextMapping(e) {
    u(this, ne, e);
  }
  enable() {
    if (a(this, _e))
      throw new Error("TextAccessibilityManager is already enabled.");
    if (!a(this, ne))
      throw new Error("Text divs and strings have not been set.");
    if (u(this, _e, !0), u(this, ne, a(this, ne).slice()), a(this, ne).sort(f(lt, zt, Pn)), a(this, Se).size > 0) {
      const e = a(this, ne);
      for (const [t, i] of a(this, Se)) {
        if (!document.getElementById(t)) {
          a(this, Se).delete(t);
          continue;
        }
        f(this, Fi, Hs).call(this, t, e[i]);
      }
    }
    for (const [e, t] of a(this, Ze))
      this.addPointerInTextLayer(e, t);
    a(this, Ze).clear();
  }
  disable() {
    a(this, _e) && (a(this, Ze).clear(), u(this, ne, null), u(this, _e, !1));
  }
  removePointerInTextLayer(e) {
    if (!a(this, _e)) {
      a(this, Ze).delete(e);
      return;
    }
    const t = a(this, ne);
    if (!t || t.length === 0)
      return;
    const {
      id: i
    } = e, n = a(this, Se).get(i);
    if (n === void 0)
      return;
    const s = t[n];
    a(this, Se).delete(i);
    let r = s.getAttribute("aria-owns");
    r?.includes(i) && (r = r.split(" ").filter((l) => l !== i).join(" "), r ? s.setAttribute("aria-owns", r) : (s.removeAttribute("aria-owns"), s.setAttribute("role", "presentation")));
  }
  addPointerInTextLayer(e, t) {
    const {
      id: i
    } = e;
    if (!i)
      return null;
    if (!a(this, _e))
      return a(this, Ze).set(e, t), null;
    t && this.removePointerInTextLayer(e);
    const n = a(this, ne);
    if (!n || n.length === 0)
      return null;
    const s = vi(n, (c) => {
      var m;
      return f(m = lt, zt, Pn).call(m, e, c) < 0;
    }), r = Math.max(0, s - 1), l = n[r];
    f(this, Fi, Hs).call(this, i, l), a(this, Se).set(i, r);
    const h = l.parentNode;
    return h?.classList.contains("markedContent") ? h.id : null;
  }
  moveElementInDOM(e, t, i, n) {
    const s = this.addPointerInTextLayer(i, n);
    if (!e.hasChildNodes())
      return e.append(t), s;
    const r = Array.from(e.childNodes).filter((h) => h !== t);
    if (r.length === 0)
      return s;
    const l = vi(r, (h) => {
      var c;
      return f(c = lt, zt, Pn).call(c, t, h) < 0;
    });
    return l === 0 ? r[0].before(t) : r[l - 1].after(t), s;
  }
};
_e = new WeakMap(), ne = new WeakMap(), Se = new WeakMap(), Ze = new WeakMap(), zt = new WeakSet(), Pn = /* @__PURE__ */ d(function(e, t) {
  const i = e.getBoundingClientRect(), n = t.getBoundingClientRect();
  if (i.width === 0 && i.height === 0)
    return 1;
  if (n.width === 0 && n.height === 0)
    return -1;
  const s = i.y, r = i.y + i.height, l = i.y + i.height / 2, h = n.y, c = n.y + n.height, m = n.y + n.height / 2;
  if (l <= h && m >= r)
    return -1;
  if (m <= s && l >= c)
    return 1;
  const w = i.x + i.width / 2, g = n.x + n.width / 2;
  return w - g;
}, "#compareElementPositions"), Fi = new WeakSet(), Hs = /* @__PURE__ */ d(function(e, t) {
  const i = t.getAttribute("aria-owns");
  i?.includes(e) || t.setAttribute("aria-owns", i ? `${i} ${e}` : e), t.removeAttribute("role");
}, "#addIdToAriaOwns"), p(lt, zt), d(lt, "TextAccessibilityManager");
let Bs = lt;
var Qe;
const Fr = class Fr {
  constructor({
    findController: e,
    eventBus: t,
    pageIndex: i
  }) {
    p(this, Qe, null);
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
    this.enabled = !0, a(this, Qe) || (u(this, Qe, new AbortController()), this.eventBus._on("updatetextlayermatches", (e) => {
      (e.pageIndex === this.pageIdx || e.pageIndex === -1) && this._updateMatches();
    }, {
      signal: a(this, Qe).signal
    })), this._updateMatches();
  }
  disable() {
    this.enabled && (this.enabled = !1, a(this, Qe)?.abort(), u(this, Qe, null), this._updateMatches(!0));
  }
  _convertMatches(e, t) {
    if (!e)
      return [];
    const {
      textContentItemsStr: i
    } = this;
    let n = 0, s = 0;
    const r = i.length - 1, l = [];
    for (let h = 0, c = e.length; h < c; h++) {
      let m = e[h];
      for (; n !== r && m >= s + i[n].length; )
        s += i[n].length, n++;
      n === i.length && console.error("Could not find a matching mapping");
      const w = {
        begin: {
          divIdx: n,
          offset: m - s
        }
      };
      for (m += t[h]; n !== r && m > s + i[n].length; )
        s += i[n].length, n++;
      w.end = {
        divIdx: n,
        offset: m - s
      }, l.push(w);
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
    } = this, r = i === t.selected.pageIdx, l = t.selected.matchIdx, h = t.state.highlightAll;
    let c = null;
    const m = {
      offset: void 0
    };
    function w(M, A) {
      const P = M.divIdx;
      return s[P].textContent = "", g(P, 0, M.offset, A);
    }
    d(w, "beginText");
    function g(M, A, P, y) {
      let I = s[M];
      if (I.nodeType === Node.TEXT_NODE) {
        const F = document.createElement("span");
        I.before(F), F.append(I), s[M] = F, I = F;
      }
      const k = n[M].substring(A, P), V = document.createTextNode(k);
      if (y) {
        const F = document.createElement("span");
        if (F.className = `${y} appended`, F.append(V), I.append(F), y.includes("selected")) {
          const {
            left: E
          } = F.getClientRects()[0], _ = I.getBoundingClientRect().left;
          return E - _;
        }
        return 0;
      }
      return I.append(V), 0;
    }
    d(g, "appendTextToDiv");
    let v = l, C = v + 1;
    if (h)
      v = 0, C = e.length;
    else if (!r)
      return;
    let R = -1, L = -1;
    for (let M = v; M < C; M++) {
      const A = e[M], P = A.begin;
      if (P.divIdx === R && P.offset === L)
        continue;
      R = P.divIdx, L = P.offset;
      const y = A.end, I = r && M === l, k = I ? " selected" : "";
      let V = 0;
      if (!c || P.divIdx !== c.divIdx ? (c !== null && g(c.divIdx, c.offset, m.offset), w(P)) : g(c.divIdx, c.offset, P.offset), P.divIdx === y.divIdx)
        V = g(P.divIdx, P.offset, y.offset, "highlight" + k);
      else {
        V = g(P.divIdx, P.offset, m.offset, "highlight begin" + k);
        for (let F = P.divIdx + 1, E = y.divIdx; F < E; F++)
          s[F].className = "highlight middle" + k;
        w(y, "highlight end" + k);
      }
      c = y, I && t.scrollMatchIntoView({
        element: s[P.divIdx],
        selectedLeft: V,
        pageIndex: i,
        matchIndex: l
      });
    }
    c && g(c.divIdx, c.offset, m.offset);
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
    for (const m of i) {
      const w = Math.max(l, m.begin.divIdx);
      for (let g = w, v = m.end.divIdx; g <= v; g++) {
        const C = r[g];
        C.textContent = s[g], C.className = "";
      }
      l = m.end.divIdx + 1;
    }
    if (!t?.highlightMatches || e)
      return;
    const h = t.pageMatches[n] || null, c = t.pageMatchesLength[n] || null;
    this.matches = this._convertMatches(h, c), this._renderMatches(this.matches);
  }
};
Qe = new WeakMap(), d(Fr, "TextHighlighter");
let Ws = Fr;
var Vi, Ui, ft, fe, q, Je, Wn, oo, li, lo, ho;
const ve = class ve {
  constructor({
    pdfPage: e,
    highlighter: t = null,
    accessibilityManager: i = null,
    enablePermissions: n = !1,
    onAppend: s = null
  }) {
    p(this, Wn);
    p(this, Vi, !1);
    p(this, Ui, null);
    p(this, ft, !1);
    p(this, fe, null);
    this.pdfPage = e, this.highlighter = t, this.accessibilityManager = i, u(this, Vi, n === !0), u(this, Ui, s), this.div = document.createElement("div"), this.div.tabIndex = 0, this.div.className = "textLayer";
  }
  async render({
    viewport: e,
    textContentParams: t = null
  }) {
    var r;
    if (a(this, ft) && a(this, fe)) {
      a(this, fe).update({
        viewport: e,
        onBefore: this.hide.bind(this)
      }), this.show();
      return;
    }
    this.cancel(), u(this, fe, new Oo({
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
    } = a(this, fe);
    this.highlighter?.setTextMapping(i, n), this.accessibilityManager?.setTextMapping(i), await a(this, fe).render(), u(this, ft, !0);
    const s = document.createElement("div");
    s.className = "endOfContent", this.div.append(s), f(this, Wn, oo).call(this, s), (r = a(this, Ui)) == null || r.call(this, this.div), this.highlighter?.enable(), this.accessibilityManager?.enable();
  }
  hide() {
    !this.div.hidden && a(this, ft) && (this.highlighter?.disable(), this.div.hidden = !0);
  }
  show() {
    this.div.hidden && a(this, ft) && (this.div.hidden = !1, this.highlighter?.enable());
  }
  cancel() {
    var e;
    a(this, fe)?.cancel(), u(this, fe, null), this.highlighter?.disable(), this.accessibilityManager?.disable(), f(e = ve, li, lo).call(e, this.div);
  }
};
Vi = new WeakMap(), Ui = new WeakMap(), ft = new WeakMap(), fe = new WeakMap(), q = new WeakMap(), Je = new WeakMap(), Wn = new WeakSet(), oo = /* @__PURE__ */ d(function(e) {
  var i;
  const {
    div: t
  } = this;
  t.addEventListener("mousedown", () => {
    t.classList.add("selecting");
  }), t.addEventListener("copy", (n) => {
    if (!a(this, Vi)) {
      const s = document.getSelection();
      n.clipboardData.setData("text/plain", mi(Do(s.toString())));
    }
    is(n);
  }), a(ve, q).set(t, e), f(i = ve, li, ho).call(i);
}, "#bindMouse"), li = new WeakSet(), lo = /* @__PURE__ */ d(function(e) {
  a(this, q).delete(e), a(this, q).size === 0 && (a(this, Je)?.abort(), u(this, Je, null));
}, "#removeGlobalSelectionListener"), ho = /* @__PURE__ */ d(function() {
  if (a(this, Je))
    return;
  u(this, Je, new AbortController());
  const {
    signal: e
  } = a(this, Je), t = /* @__PURE__ */ d((r, l) => {
    l.append(r), r.style.width = "", r.style.height = "", l.classList.remove("selecting");
  }, "reset");
  let i = !1;
  document.addEventListener("pointerdown", () => {
    i = !0;
  }, {
    signal: e
  }), document.addEventListener("pointerup", () => {
    i = !1, a(this, q).forEach(t);
  }, {
    signal: e
  }), window.addEventListener("blur", () => {
    i = !1, a(this, q).forEach(t);
  }, {
    signal: e
  }), document.addEventListener("keyup", () => {
    i || a(this, q).forEach(t);
  }, {
    signal: e
  });
  var n, s;
  document.addEventListener("selectionchange", () => {
    const r = document.getSelection();
    if (r.rangeCount === 0) {
      a(this, q).forEach(t);
      return;
    }
    const l = /* @__PURE__ */ new Set();
    for (let v = 0; v < r.rangeCount; v++) {
      const C = r.getRangeAt(v);
      for (const R of a(this, q).keys())
        !l.has(R) && C.intersectsNode(R) && l.add(R);
    }
    for (const [v, C] of a(this, q))
      l.has(v) ? v.classList.add("selecting") : t(C, v);
    if (n ??= getComputedStyle(a(this, q).values().next().value).getPropertyValue("-moz-user-select") === "none", n)
      return;
    const h = r.getRangeAt(0), c = s && (h.compareBoundaryPoints(Range.END_TO_END, s) === 0 || h.compareBoundaryPoints(Range.START_TO_END, s) === 0);
    let m = c ? h.startContainer : h.endContainer;
    if (m.nodeType === Node.TEXT_NODE && (m = m.parentNode), m.classList?.contains("highlight") && (m = m.parentNode), !c && h.endOffset === 0)
      do {
        for (; !m.previousSibling; )
          m = m.parentNode;
        m = m.previousSibling;
      } while (!m.childNodes.length);
    const w = m.parentElement?.closest(".textLayer"), g = a(this, q).get(w);
    g && (g.style.width = w.style.width, g.style.height = w.style.height, g.style.userSelect = "text", m.parentElement.insertBefore(g, c ? m : m.nextSibling)), s = h.cloneRange();
  }, {
    signal: e
  });
}, "#enableGlobalSelectionListener"), p(ve, li), d(ve, "TextLayerBuilder"), p(ve, q, /* @__PURE__ */ new Map()), p(ve, Je, null);
let Dn = ve;
const Vr = class Vr {
  constructor({
    pdfPage: e,
    annotationStorage: t = null,
    linkService: i,
    xfaHtml: n = null
  }) {
    this.pdfPage = e, this.annotationStorage = t, this.linkService = i, this.xfaHtml = n, this.div = null, this._cancelled = !1;
  }
  async render({
    viewport: e,
    intent: t = "display"
  }) {
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
      return this.div = document.createElement("div"), s.div = this.div, Kn.render(s);
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
    return this.div ? Kn.update(n) : (this.div = document.createElement("div"), n.div = this.div, Kn.render(n));
  }
  cancel() {
    this._cancelled = !0;
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
};
d(Vr, "XfaLayerBuilder");
let On = Vr;
const cd = {
  annotationEditorUIManager: null,
  annotationStorage: null,
  downloadManager: null,
  enableScripting: !1,
  fieldObjectsPromise: null,
  findController: null,
  hasJSActionsPromise: null,
  get linkService() {
    return new yi();
  }
}, fd = /* @__PURE__ */ new Map([["canvasWrapper", 0], ["textLayer", 1], ["annotationLayer", 2], ["annotationEditorLayer", 3], ["xfaLayer", 3]]);
var Ce, qe, Gt, Xt, Kt, Bi, ge, Ie, Yt, Hi, Wi, $i, gt, zi, Ae, et, Zt, N, Lt, _n, fi, $s, zs, Gs, Xs, Ks, uo, co, fo, Ys;
const $n = class $n extends Nn {
  constructor(t) {
    super(t);
    p(this, N);
    p(this, Ce, be.ENABLE_FORMS);
    p(this, qe, null);
    p(this, Gt, null);
    p(this, Xt, !0);
    p(this, Kt, !1);
    p(this, Bi, !1);
    p(this, ge, null);
    p(this, Ie, !1);
    p(this, Yt, null);
    p(this, Hi, null);
    p(this, Wi, 1);
    p(this, $i, 1);
    p(this, gt, me.ENABLE);
    p(this, zi, 1);
    p(this, Ae, {
      directDrawing: !0,
      initialOptionalContent: !0,
      regularAnnotations: !0
    });
    p(this, et, [null, null, null, null]);
    p(this, Zt, null);
    const {
      container: i,
      defaultViewport: n
    } = t;
    this.renderingId = "page" + this.id, u(this, ge, t.layerProperties || cd), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = t.scale || Na, this.viewport = n, this.pdfPageRotate = n.rotation, this._optionalContentConfigPromise = t.optionalContentConfigPromise || null, u(this, gt, t.textLayerMode ?? me.ENABLE), u(this, Ce, t.annotationMode ?? be.ENABLE_FORMS), this.imageResourcesPath = t.imageResourcesPath || "", this.enableDetailCanvas = t.enableDetailCanvas ?? !0, this.maxCanvasPixels = t.maxCanvasPixels ?? bi.get("maxCanvasPixels"), this.maxCanvasDim = t.maxCanvasDim || bi.get("maxCanvasDim"), this.capCanvasAreaFactor = t.capCanvasAreaFactor ?? bi.get("capCanvasAreaFactor"), u(this, Xt, t.enableAutoLinking !== !1), u(this, Gt, t.commentManager || null), u(this, Zt, t.clonedFrom || null), this.l10n = t.l10n, this.l10n ||= new ai(), this._isStandalone = !this.renderingQueue?.hasViewer(), this._container = i, this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.xfaLayer = null, this.structTreeLayer = null, this.drawLayer = null, this.detailView = null;
    const s = document.createElement("div");
    if (s.className = "page", s.setAttribute("data-page-number", this.id), s.setAttribute("role", "region"), s.setAttribute("data-l10n-id", "pdfjs-page-landmark"), s.setAttribute("data-l10n-args", JSON.stringify({
      page: this.id
    })), this.div = s, f(this, N, _n).call(this), i?.append(s), this._isStandalone) {
      i?.style.setProperty("--scale-factor", this.scale * ye.PDF_TO_CSS_UNITS), this.pageColors?.background && i?.style.setProperty("--page-bg-color", this.pageColors.background);
      const {
        optionalContentConfigPromise: r
      } = t;
      r && r.then((l) => {
        r === this._optionalContentConfigPromise && (a(this, Ae).initialOptionalContent = l.hasInitialVisibility);
      }), t.l10n || this.l10n.translate(this.div);
    }
  }
  clone(t) {
    const i = new $n({
      container: null,
      eventBus: this.eventBus,
      pagesColors: this.pageColors,
      renderingQueue: this.renderingQueue,
      enableOptimizedPartialRendering: this.enableOptimizedPartialRendering,
      minDurationToUpdateCanvas: this.minDurationToUpdateCanvas,
      defaultViewport: this.viewport,
      id: t,
      layerProperties: a(this, ge),
      scale: this.scale,
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      textLayerMode: a(this, gt),
      annotationMode: a(this, Ce),
      imageResourcesPath: this.imageResourcesPath,
      enableDetailCanvas: this.enableDetailCanvas,
      maxCanvasPixels: this.maxCanvasPixels,
      maxCanvasDim: this.maxCanvasDim,
      capCanvasAreaFactor: this.capCanvasAreaFactor,
      enableAutoLinking: a(this, Xt),
      commentManager: a(this, Gt),
      l10n: this.l10n,
      clonedFrom: this
    });
    return i.setPdfPage(this.pdfPage), i;
  }
  updatePageNumber(t) {
    if (this.id === t)
      return;
    this.id = t, this.renderingId = `page${t}`, this.pdfPage && (this.pdfPage.pageNumber = t), this.setPageLabel(this.pageLabel);
    const {
      div: i
    } = this;
    i.setAttribute("data-page-number", t), i.setAttribute("data-l10n-args", JSON.stringify({
      page: t
    })), this._textHighlighter.pageIdx = t - 1, this.annotationEditorLayer?.updatePageIndex(t - 1);
  }
  setPdfPage(t) {
    this._isStandalone && (this.pageColors?.foreground === "CanvasText" || this.pageColors?.background === "Canvas") && (this._container?.style.setProperty("--hcm-highlight-filter", t.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), this._container?.style.setProperty("--hcm-highlight-selected-filter", t.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = t, this.pdfPageRotate = t.rotate;
    const i = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = t.getViewport({
      scale: this.scale * ye.PDF_TO_CSS_UNITS,
      rotation: i
    }), f(this, N, _n).call(this), this.reset();
  }
  destroy() {
    this.reset(), this.pdfPage?.cleanup();
  }
  deleteMe(t) {
    if (t) {
      this.div.remove();
      return;
    }
    this.destroy(), a(this, ge).annotationEditorUIManager?.deletePage(this.id);
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  get _textHighlighter() {
    return Ei(this, "_textHighlighter", new Ws({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: a(this, ge).findController
    }));
  }
  _resetCanvas() {
    super._resetCanvas(), u(this, Yt, null);
  }
  reset({
    keepAnnotationLayer: t = !1,
    keepAnnotationEditorLayer: i = !1,
    keepXfaLayer: n = !1,
    keepTextLayer: s = !1,
    keepCanvasWrapper: r = !1,
    preserveDetailViewState: l = !1
  } = {}) {
    const h = this.pdfPage?._pdfBug ?? !1;
    this.cancelRendering({
      keepAnnotationLayer: t,
      keepAnnotationEditorLayer: i,
      keepXfaLayer: n,
      keepTextLayer: s
    }), this.renderingState = D.INITIAL;
    const c = this.div, m = c.childNodes, w = t && this.annotationLayer?.div || null, g = i && this.annotationEditorLayer?.div || null, v = n && this.xfaLayer?.div || null, C = s && this.textLayer?.div || null, R = r && a(this, qe) || null;
    for (let L = m.length - 1; L >= 0; L--) {
      const M = m[L];
      switch (M) {
        case w:
        case g:
        case v:
        case C:
        case R:
          continue;
      }
      if (h && M.classList.contains("pdfBugGroupsLayer"))
        continue;
      M.remove();
      const A = a(this, et).indexOf(M);
      A >= 0 && (a(this, et)[A] = null);
    }
    c.removeAttribute("data-loaded"), w && this.annotationLayer.hide(), g && this.annotationEditorLayer.hide(), v && this.xfaLayer.hide(), C && this.textLayer.hide(), this.structTreeLayer?.hide(), !r && a(this, qe) && (u(this, qe, null), this._resetCanvas()), l || (this.detailView?.reset({
      keepCanvas: r
    }), r || (this.detailView = null));
  }
  toggleEditingMode(t) {
    u(this, Bi, t), this.hasEditableAnnotations() && this.reset({
      keepAnnotationLayer: !0,
      keepAnnotationEditorLayer: !0,
      keepXfaLayer: !0,
      keepTextLayer: !0,
      keepCanvasWrapper: !0
    });
  }
  updateVisibleArea(t) {
    this.enableDetailCanvas && (a(this, Ie) && this.maxCanvasPixels > 0 && t ? (this.detailView ??= new Fs({
      pageView: this,
      enableOptimizedPartialRendering: this.enableOptimizedPartialRendering
    }), this.detailView.update({
      visibleArea: t
    })) : this.detailView && (this.detailView.reset(), this.detailView = null));
  }
  update({
    scale: t = 0,
    rotation: i = null,
    optionalContentConfigPromise: n = null,
    drawingDelay: s = -1
  }) {
    this.scale = t || this.scale, typeof i == "number" && (this.rotation = i), n instanceof Promise && (this._optionalContentConfigPromise = n, n.then((l) => {
      n === this._optionalContentConfigPromise && (a(this, Ae).initialOptionalContent = l.hasInitialVisibility);
    })), a(this, Ae).directDrawing = !0;
    const r = (this.rotation + this.pdfPageRotate) % 360;
    if (this.viewport = this.viewport.clone({
      scale: this.scale * ye.PDF_TO_CSS_UNITS,
      rotation: r
    }), f(this, N, _n).call(this), this._isStandalone && this._container?.style.setProperty("--scale-factor", this.viewport.scale), f(this, N, Ys).call(this), this.canvas) {
      const l = a(this, Kt) && a(this, Ie), h = s >= 0 && s < 1e3;
      if (h || l) {
        h && !l && this.renderingState !== D.FINISHED && (this.cancelRendering({
          keepAnnotationLayer: !0,
          keepAnnotationEditorLayer: !0,
          keepXfaLayer: !0,
          keepTextLayer: !0,
          cancelExtraDelay: s
        }), this.renderingState = D.FINISHED, a(this, Ae).directDrawing = !1), this.cssTransform({
          redrawAnnotationLayer: !0,
          redrawAnnotationEditorLayer: !0,
          redrawXfaLayer: !0,
          redrawTextLayer: !h,
          hideTextLayer: h
        }), h || (this.detailView?.update({
          underlyingViewUpdated: !0
        }), this.dispatchPageRendered(!0, !1));
        return;
      }
    }
    this.cssTransform({}), this.reset({
      keepAnnotationLayer: !0,
      keepAnnotationEditorLayer: !0,
      keepXfaLayer: !0,
      keepTextLayer: !0,
      keepCanvasWrapper: !0,
      preserveDetailViewState: !0
    }), this.detailView?.update({
      underlyingViewUpdated: !0
    });
  }
  cancelRendering({
    keepAnnotationLayer: t = !1,
    keepAnnotationEditorLayer: i = !1,
    keepXfaLayer: n = !1,
    keepTextLayer: s = !1,
    cancelExtraDelay: r = 0
  } = {}) {
    super.cancelRendering({
      cancelExtraDelay: r
    }), this.textLayer && (!s || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.annotationLayer && (!t || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationEditorLayer && (!i || !this.annotationEditorLayer.div) && (this.drawLayer && (this.drawLayer.cancel(), this.drawLayer = null), this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!n || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, this._textHighlighter?.disable());
  }
  cssTransform({
    redrawAnnotationLayer: t = !1,
    redrawAnnotationEditorLayer: i = !1,
    redrawXfaLayer: n = !1,
    redrawTextLayer: s = !1,
    hideTextLayer: r = !1
  }) {
    const {
      canvas: l
    } = this;
    if (!l)
      return;
    const h = a(this, Yt);
    if (this.viewport !== h) {
      const c = (360 + this.viewport.rotation - h.rotation) % 360;
      if (c === 90 || c === 270) {
        const {
          width: m,
          height: w
        } = this.viewport, g = w / m, v = m / w;
        l.style.transform = `rotate(${c}deg) scale(${g},${v})`;
      } else
        l.style.transform = c === 0 ? "" : `rotate(${c}deg)`;
    }
    t && this.annotationLayer && f(this, N, $s).call(this), i && this.annotationEditorLayer && (this.drawLayer && f(this, N, Gs).call(this), f(this, N, zs).call(this)), n && this.xfaLayer && f(this, N, Xs).call(this), this.textLayer && (r ? (this.textLayer.hide(), this.structTreeLayer?.hide()) : s && f(this, N, Ks).call(this));
  }
  get width() {
    return this.viewport.width;
  }
  get height() {
    return this.viewport.height;
  }
  getPagePoint(t, i) {
    return this.viewport.convertToPdfPoint(t, i);
  }
  _ensureCanvasWrapper() {
    let t = a(this, qe);
    return t || (t = u(this, qe, document.createElement("div")), t.classList.add("canvasWrapper"), f(this, N, Lt).call(this, t, "canvasWrapper")), t;
  }
  _getRenderingContext(t, i, n) {
    return {
      canvas: t,
      transform: i,
      viewport: this.viewport,
      annotationMode: a(this, Ce),
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors: this.pageColors,
      isEditing: a(this, Bi),
      recordOperations: n
    };
  }
  async draw() {
    this.renderingState !== D.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: t,
      l10n: i,
      pdfPage: n,
      viewport: s
    } = this;
    if (!n)
      throw this.renderingState = D.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = D.RUNNING;
    const r = this._ensureCanvasWrapper();
    if (!this.textLayer && a(this, gt) !== me.DISABLE && !n.isPureXfa && (this._accessibilityManager ||= new Bs(), this.textLayer = new Dn({
      pdfPage: n,
      highlighter: this._textHighlighter,
      accessibilityManager: this._accessibilityManager,
      enablePermissions: a(this, gt) === me.ENABLE_PERMISSIONS,
      onAppend: /* @__PURE__ */ d((I) => {
        this.l10n.pause(), f(this, N, Lt).call(this, I, "textLayer"), this.l10n.resume();
      }, "onAppend")
    })), !this.annotationLayer && a(this, Ce) !== be.DISABLE) {
      const {
        annotationStorage: I,
        annotationEditorUIManager: k,
        downloadManager: V,
        enableComment: F,
        enableScripting: E,
        fieldObjectsPromise: _,
        hasJSActionsPromise: O,
        linkService: B
      } = a(this, ge);
      this._annotationCanvasMap ||= /* @__PURE__ */ new Map(), this.annotationLayer = new Rn({
        pdfPage: n,
        annotationStorage: I,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: a(this, Ce) === be.ENABLE_FORMS,
        linkService: B,
        downloadManager: V,
        enableComment: F,
        enableScripting: E,
        hasJSActionsPromise: O,
        fieldObjectsPromise: _,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager,
        annotationEditorUIManager: k,
        commentManager: a(this, Gt),
        onAppend: /* @__PURE__ */ d((U) => {
          f(this, N, Lt).call(this, U, "annotationLayer");
        }, "onAppend")
      });
    }
    const {
      width: l,
      height: h
    } = s;
    u(this, Yt, s);
    const {
      canvas: c,
      prevCanvas: m
    } = this._createCanvas((I) => {
      r.prepend(I);
    });
    c.setAttribute("role", "presentation"), this.outputScale || f(this, N, Ys).call(this);
    const {
      outputScale: w
    } = this;
    u(this, Kt, a(this, Ie));
    const g = ia(w.sx), v = ia(w.sy), C = c.width = un(cn(l * w.sx), g[0]), R = c.height = un(cn(h * w.sy), v[0]), L = un(cn(l), g[1]), M = un(cn(h), v[1]);
    w.sx = C / L, w.sy = R / M, a(this, Wi) !== g[1] && (t.style.setProperty("--scale-round-x", `${g[1]}px`), u(this, Wi, g[1])), a(this, $i) !== v[1] && (t.style.setProperty("--scale-round-y", `${v[1]}px`), u(this, $i, v[1]));
    const A = this.enableOptimizedPartialRendering && a(this, Kt) && !this.recordedBBoxes, P = w.scaled ? [w.sx, 0, 0, w.sy, 0, 0] : null, y = this._drawCanvas(this._getRenderingContext(c, P, A), () => {
      m?.remove(), this._resetCanvas();
    }, (I) => {
      a(this, Ae).regularAnnotations = !I.separateAnnots, this.dispatchPageRendered(!1, !1);
    }).then(async () => {
      if (this.renderingState !== D.FINISHED)
        return;
      this.structTreeLayer ||= new kn(n, s.rawDims);
      const I = f(this, N, Ks).call(this);
      this.annotationLayer && (await f(this, N, $s).call(this), a(this, Xt) && this.annotationLayer && this.textLayer && await f(this, N, fo).call(this, I));
      const {
        annotationEditorUIManager: k
      } = a(this, ge);
      k && (this.drawLayer ||= new Os(), await f(this, N, Gs).call(this), this.drawLayer.setParent(r), (this.annotationLayer || a(this, Ce) === be.DISABLE) && (this.annotationEditorLayer ||= new Ts({
        uiManager: k,
        pageIndex: this.id - 1,
        l10n: i,
        structTreeLayer: this.structTreeLayer,
        accessibilityManager: this._accessibilityManager,
        annotationLayer: this.annotationLayer?.annotationLayer,
        textLayer: this.textLayer,
        drawLayer: this.drawLayer.getDrawLayer(),
        clonedFrom: a(this, Zt)?.annotationEditorLayer,
        onAppend: /* @__PURE__ */ d((V) => {
          f(this, N, Lt).call(this, V, "annotationEditorLayer");
        }, "onAppend")
      }), u(this, Zt, null), f(this, N, zs).call(this)));
    });
    if (n.isPureXfa) {
      if (!this.xfaLayer) {
        const {
          annotationStorage: I,
          linkService: k
        } = a(this, ge);
        this.xfaLayer = new On({
          pdfPage: n,
          annotationStorage: I,
          linkService: k
        });
      }
      f(this, N, Xs).call(this);
    }
    return t.setAttribute("data-loaded", !0), this.dispatchPageRender(), y;
  }
  setPageLabel(t) {
    this.pageLabel = typeof t == "string" ? t : null, this.div.setAttribute("data-l10n-args", JSON.stringify({
      page: this.pageLabel ?? this.id
    })), this.pageLabel !== null ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label");
  }
  get thumbnailCanvas() {
    const {
      directDrawing: t,
      initialOptionalContent: i,
      regularAnnotations: n
    } = a(this, Ae);
    return t && i && n ? this.canvas : null;
  }
};
Ce = new WeakMap(), qe = new WeakMap(), Gt = new WeakMap(), Xt = new WeakMap(), Kt = new WeakMap(), Bi = new WeakMap(), ge = new WeakMap(), Ie = new WeakMap(), Yt = new WeakMap(), Hi = new WeakMap(), Wi = new WeakMap(), $i = new WeakMap(), gt = new WeakMap(), zi = new WeakMap(), Ae = new WeakMap(), et = new WeakMap(), Zt = new WeakMap(), N = new WeakSet(), Lt = /* @__PURE__ */ d(function(t, i) {
  const n = fd.get(i), s = a(this, et)[n];
  if (a(this, et)[n] = t, s) {
    s.replaceWith(t);
    return;
  }
  for (let r = n - 1; r >= 0; r--) {
    const l = a(this, et)[r];
    if (l) {
      l.after(t);
      return;
    }
  }
  this.div.prepend(t);
}, "#addLayer"), _n = /* @__PURE__ */ d(function() {
  const {
    div: t,
    viewport: i
  } = this;
  if (i.userUnit !== a(this, zi) && (i.userUnit !== 1 ? t.style.setProperty("--user-unit", i.userUnit) : t.style.removeProperty("--user-unit"), u(this, zi, i.userUnit)), this.pdfPage) {
    if (a(this, Hi) === i.rotation)
      return;
    u(this, Hi, i.rotation);
  }
  Ta(t, i, !0, !1);
}, "#setDimensions"), fi = /* @__PURE__ */ d(function(t, i) {
  this.eventBus.dispatch(t, {
    source: this,
    pageNumber: this.id,
    error: i
  });
}, "#dispatchLayerRendered"), $s = /* @__PURE__ */ d(async function() {
  let t = null;
  try {
    await this.annotationLayer.render({
      viewport: this.viewport,
      intent: "display",
      structTreeLayer: this.structTreeLayer
    });
  } catch (i) {
    console.error("#renderAnnotationLayer:", i), t = i;
  } finally {
    f(this, N, fi).call(this, "annotationlayerrendered", t);
  }
}, "#renderAnnotationLayer"), zs = /* @__PURE__ */ d(async function() {
  let t = null;
  try {
    await this.annotationEditorLayer.render({
      viewport: this.viewport,
      intent: "display"
    });
  } catch (i) {
    console.error("#renderAnnotationEditorLayer:", i), t = i;
  } finally {
    f(this, N, fi).call(this, "annotationeditorlayerrendered", t);
  }
}, "#renderAnnotationEditorLayer"), Gs = /* @__PURE__ */ d(async function() {
  try {
    await this.drawLayer.render({
      intent: "display"
    });
  } catch (t) {
    console.error("#renderDrawLayer:", t);
  }
}, "#renderDrawLayer"), Xs = /* @__PURE__ */ d(async function() {
  let t = null;
  try {
    const i = await this.xfaLayer.render({
      viewport: this.viewport,
      intent: "display"
    });
    i?.textDivs && this._textHighlighter && f(this, N, co).call(this, i.textDivs);
  } catch (i) {
    console.error("#renderXfaLayer:", i), t = i;
  } finally {
    this.xfaLayer?.div && (this.l10n.pause(), f(this, N, Lt).call(this, this.xfaLayer.div, "xfaLayer"), this.l10n.resume()), f(this, N, fi).call(this, "xfalayerrendered", t);
  }
}, "#renderXfaLayer"), Ks = /* @__PURE__ */ d(async function() {
  if (!this.textLayer)
    return;
  let t = null;
  try {
    await this.textLayer.render({
      viewport: this.viewport
    });
  } catch (i) {
    if (i instanceof Co)
      return;
    console.error("#renderTextLayer:", i), t = i;
  }
  f(this, N, fi).call(this, "textlayerrendered", t), f(this, N, uo).call(this);
}, "#renderTextLayer"), uo = /* @__PURE__ */ d(async function() {
  if (!this.textLayer)
    return;
  const t = await this.structTreeLayer?.render();
  t && (this.l10n.pause(), this.structTreeLayer?.updateTextLayer(), this.canvas && t.parentNode !== this.canvas && this.canvas.append(t), this.l10n.resume()), this.structTreeLayer?.show();
}, "#renderStructTreeLayer"), co = /* @__PURE__ */ d(async function(t) {
  const i = await this.pdfPage.getTextContent(), n = [];
  for (const s of i.items)
    n.push(s.str);
  this._textHighlighter.setTextMapping(t, n), this._textHighlighter.enable();
}, "#buildXfaTextContentItems"), fo = /* @__PURE__ */ d(async function(t) {
  try {
    if (await t, !this.annotationLayer)
      return;
    await this.annotationLayer.injectLinkAnnotations(js.processLinks(this));
  } catch (i) {
    console.error("#injectLinkAnnotations:", i);
  }
}, "#injectLinkAnnotations"), Ys = /* @__PURE__ */ d(function() {
  const {
    width: t,
    height: i
  } = this.viewport, n = this.outputScale = new mn();
  if (this.maxCanvasPixels === 0) {
    const s = 1 / this.scale;
    n.sx *= s, n.sy *= s, u(this, Ie, !0);
  } else if (u(this, Ie, n.limitCanvas(t, i, this.maxCanvasPixels, this.maxCanvasDim, this.capCanvasAreaFactor)), a(this, Ie) && this.enableDetailCanvas) {
    const s = this.enableOptimizedPartialRendering ? 4 : 2;
    n.sx /= s, n.sy /= s;
  }
}, "#computeScale"), d($n, "PDFPageView");
let Fn = $n;
async function gd(o) {
  const {
    info: i,
    metadata: n,
    contentDispositionFilename: s,
    contentLength: r
  } = await o.getMetadata();
  return {
    ...i,
    baseURL: "",
    filesize: r || (await o.getDownloadInfo()).length,
    filename: s || To(""),
    metadata: n?.getRaw(),
    authors: n?.get("dc:creator"),
    numPages: o.numPages,
    URL: ""
  };
}
d(gd, "docProperties");
const Ur = class Ur {
  constructor(e) {
    this._ready = new Promise((t, i) => {
      import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL(
          /*webpackIgnore: true*/
          /*@vite-ignore*/
          e,
          typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? new URL(WEAVY_IMPORT_URL, globalThis.location.href) : import.meta.url
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
d(Ur, "GenericScripting");
let Zs = Ur;
var pe, pt, Gi, mt, bt, Xi, Y, Re, Qt, z, se, G, go, Sn, Js, po, gi;
const Br = class Br {
  constructor({
    eventBus: e,
    externalServices: t = null,
    docProperties: i = null
  }) {
    p(this, G);
    p(this, pe, null);
    p(this, pt, null);
    p(this, Gi, null);
    p(this, mt, null);
    p(this, bt, null);
    p(this, Xi, null);
    p(this, Y, null);
    p(this, Re, null);
    p(this, Qt, !1);
    p(this, z, null);
    p(this, se, null);
    u(this, bt, e), u(this, Xi, t), u(this, Gi, i);
  }
  setViewer(e) {
    u(this, Re, e);
  }
  async setDocument(e) {
    if (a(this, Y) && await f(this, G, gi).call(this), u(this, Y, e), !e)
      return;
    const [t, i, n] = await Promise.all([e.getFieldObjects(), e.getCalculationOrderIds(), e.getJSActions()]);
    if (!t && !n) {
      await f(this, G, gi).call(this);
      return;
    }
    if (e !== a(this, Y))
      return;
    try {
      u(this, z, f(this, G, po).call(this));
    } catch (l) {
      console.error("setDocument:", l), await f(this, G, gi).call(this);
      return;
    }
    const s = a(this, bt);
    u(this, mt, new AbortController());
    const {
      signal: r
    } = a(this, mt);
    s._on("updatefromsandbox", (l) => {
      l?.source === window && f(this, G, go).call(this, l.detail);
    }, {
      signal: r
    }), s._on("dispatcheventinsandbox", (l) => {
      a(this, z)?.dispatchEventInSandbox(l.detail);
    }, {
      signal: r
    }), s._on("pagechanging", ({
      pageNumber: l,
      previous: h
    }) => {
      l !== h && (f(this, G, Js).call(this, h), f(this, G, Sn).call(this, l));
    }, {
      signal: r
    }), s._on("pagerendered", ({
      pageNumber: l
    }) => {
      this._pageOpenPending.has(l) && l === a(this, Re).currentPageNumber && f(this, G, Sn).call(this, l);
    }, {
      signal: r
    }), s._on("pagesdestroy", async () => {
      await f(this, G, Js).call(this, a(this, Re).currentPageNumber), await a(this, z)?.dispatchEventInSandbox({
        id: "doc",
        name: "WillClose"
      }), a(this, pe)?.resolve();
    }, {
      signal: r
    });
    try {
      const l = await a(this, Gi).call(this, e);
      if (e !== a(this, Y))
        return;
      await a(this, z).createSandbox({
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
      console.error("setDocument:", l), await f(this, G, gi).call(this);
      return;
    }
    await a(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "Open"
    }), await f(this, G, Sn).call(this, a(this, Re).currentPageNumber, !0), Promise.resolve().then(() => {
      e === a(this, Y) && u(this, Qt, !0);
    });
  }
  async dispatchWillSave() {
    return a(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "WillSave"
    });
  }
  async dispatchDidSave() {
    return a(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidSave"
    });
  }
  async dispatchWillPrint() {
    if (a(this, z)) {
      await a(this, se)?.promise, u(this, se, Promise.withResolvers());
      try {
        await a(this, z).dispatchEventInSandbox({
          id: "doc",
          name: "WillPrint"
        });
      } catch (e) {
        throw a(this, se).resolve(), u(this, se, null), e;
      }
      await a(this, se).promise;
    }
  }
  async dispatchDidPrint() {
    return a(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });
  }
  get destroyPromise() {
    return a(this, pt)?.promise || null;
  }
  get ready() {
    return a(this, Qt);
  }
  get _pageOpenPending() {
    return Ei(this, "_pageOpenPending", /* @__PURE__ */ new Set());
  }
  get _visitedPages() {
    return Ei(this, "_visitedPages", /* @__PURE__ */ new Map());
  }
};
pe = new WeakMap(), pt = new WeakMap(), Gi = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), Xi = new WeakMap(), Y = new WeakMap(), Re = new WeakMap(), Qt = new WeakMap(), z = new WeakMap(), se = new WeakMap(), G = new WeakSet(), go = /* @__PURE__ */ d(async function(e) {
  const t = a(this, Re), i = t.isInPresentationMode || t.isChangingPresentationMode, {
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
          const c = Yo(l);
          t.spreadMode = c.spreadMode;
        }
        break;
      case "page-num":
        t.currentPageNumber = l + 1;
        break;
      case "print":
        await t.pagesPromise, a(this, bt).dispatch("print", {
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
        a(this, bt).dispatch("download", {
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
        a(this, se)?.resolve(), u(this, se, null);
        break;
    }
    return;
  }
  if (i && e.focus)
    return;
  delete e.id, delete e.siblings;
  const h = s ? [n, ...s] : [n];
  for (const c of h) {
    const m = document.querySelector(`[data-element-id="${c}"]`);
    m ? m.dispatchEvent(new CustomEvent("updatefromsandbox", {
      detail: e
    })) : a(this, Y)?.annotationStorage.setValue(c, e);
  }
}, "#updateFromSandbox"), Sn = /* @__PURE__ */ d(async function(e, t = !1) {
  const i = a(this, Y), n = this._visitedPages;
  if (t && u(this, pe, Promise.withResolvers()), !a(this, pe))
    return;
  const s = a(this, Re).getPageView(e - 1);
  if (s?.renderingState !== D.FINISHED) {
    this._pageOpenPending.add(e);
    return;
  }
  this._pageOpenPending.delete(e);
  const r = (async () => {
    const l = await (n.has(e) ? null : s.pdfPage?.getJSActions());
    i === a(this, Y) && await a(this, z)?.dispatchEventInSandbox({
      id: "page",
      name: "PageOpen",
      pageNumber: e,
      actions: l
    });
  })();
  n.set(e, r);
}, "#dispatchPageOpen"), Js = /* @__PURE__ */ d(async function(e) {
  const t = a(this, Y), i = this._visitedPages;
  if (!a(this, pe) || this._pageOpenPending.has(e))
    return;
  const n = i.get(e);
  n && (i.set(e, null), await n, t === a(this, Y) && await a(this, z)?.dispatchEventInSandbox({
    id: "page",
    name: "PageClose",
    pageNumber: e
  }));
}, "#dispatchPageClose"), po = /* @__PURE__ */ d(function() {
  if (u(this, pt, Promise.withResolvers()), a(this, z))
    throw new Error("#initScripting: Scripting already exists.");
  return a(this, Xi).createScripting();
}, "#initScripting"), gi = /* @__PURE__ */ d(async function() {
  if (!a(this, z)) {
    u(this, Y, null), a(this, pt)?.resolve();
    return;
  }
  a(this, pe) && (await Promise.race([a(this, pe).promise, new Promise((e) => {
    setTimeout(e, 1e3);
  })]).catch(() => {
  }), u(this, pe, null)), u(this, Y, null);
  try {
    await a(this, z).destroySandbox();
  } catch {
  }
  a(this, se)?.reject(new Error("Scripting destroyed.")), u(this, se, null), a(this, mt)?.abort(), u(this, mt, null), this._pageOpenPending.clear(), this._visitedPages.clear(), u(this, z, null), u(this, Qt, !1), a(this, pt)?.resolve();
}, "#destroyScripting"), d(Br, "PDFScriptingManager");
let Qs = Br;
const Hr = class Hr extends Qs {
  constructor(e) {
    e.externalServices || window.addEventListener("updatefromsandbox", (t) => {
      e.eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: t.detail
      });
    }), e.externalServices ||= {
      createScripting: /* @__PURE__ */ d(() => new Zs(e.sandboxBundleSrc), "createScripting")
    }, e.docProperties ||= (t) => gd(t), super(e);
  }
};
d(Hr, "PDFScriptingManagerComponents");
let qs = Hr;
const pd = 3e4;
var wt, Et, Ki, Jt;
const Wr = class Wr {
  constructor() {
    p(this, wt, null);
    p(this, Et, null);
    p(this, Ki, null);
    p(this, Jt, null);
    Z(this, "isThumbnailViewEnabled", !1);
    Z(this, "onIdle", null);
    Z(this, "printing", !1);
    Object.defineProperty(this, "hasViewer", {
      value: /* @__PURE__ */ d(() => !!a(this, Jt), "value")
    });
  }
  setViewer(e) {
    u(this, Jt, e);
  }
  setThumbnailViewer(e) {
    u(this, Ki, e);
  }
  isHighestPriority(e) {
    return a(this, wt) === e.renderingId;
  }
  renderHighestPriority(e) {
    a(this, Et) && (clearTimeout(a(this, Et)), u(this, Et, null)), !a(this, Jt).forceRendering(e) && (this.isThumbnailViewEnabled && a(this, Ki)?.forceRendering() || this.printing || this.onIdle && u(this, Et, setTimeout(this.onIdle.bind(this), pd)));
  }
  getHighestPriority(e, t, i, n = !1, s = !1) {
    const r = e.views, l = r.length;
    if (l === 0)
      return null;
    for (let g = 0; g < l; g++) {
      const v = r[g].view;
      if (!this.isViewFinished(v))
        return v;
    }
    if (!s)
      for (let g = 0; g < l; g++) {
        const {
          detailView: v
        } = r[g].view;
        if (v && !this.isViewFinished(v))
          return v;
      }
    const h = e.first.id, c = e.last.id;
    if (c - h + 1 > l) {
      const g = e.ids;
      for (let v = 1, C = c - h; v < C; v++) {
        const R = i ? h + v : c - v;
        if (g.has(R))
          continue;
        const L = t[R - 1];
        if (!this.isViewFinished(L))
          return L;
      }
    }
    let m = i ? c : h - 2, w = t[m];
    return w && !this.isViewFinished(w) || n && (m += i ? 1 : -1, w = t[m], w && !this.isViewFinished(w)) ? w : null;
  }
  isViewFinished(e) {
    return e.renderingState === D.FINISHED;
  }
  renderView(e) {
    switch (e.renderingState) {
      case D.FINISHED:
        return !1;
      case D.PAUSED:
        u(this, wt, e.renderingId), e.resume();
        break;
      case D.RUNNING:
        u(this, wt, e.renderingId);
        break;
      case D.INITIAL:
        u(this, wt, e.renderingId), e.draw().finally(() => {
          this.renderHighestPriority();
        }).catch((t) => {
          t instanceof ts || console.error("renderView:", t);
        });
        break;
    }
    return !0;
  }
};
wt = new WeakMap(), Et = new WeakMap(), Ki = new WeakMap(), Jt = new WeakMap(), d(Wr, "PDFRenderingQueue");
let er = Wr;
const Sa = 10, pn = {
  FORCE_SCROLL_MODE_PAGE: 1e4,
  FORCE_LAZY_PAGE_INIT: 5e3,
  PAUSE_EAGER_PAGE_INIT: 250
};
function Ca(o) {
  return Object.values(Q).includes(o) && o !== Q.DISABLE;
}
d(Ca, "isValidAnnotationEditorMode");
var Le, vt, Yi, ir;
const $r = class $r {
  constructor(e) {
    p(this, Yi);
    p(this, Le, /* @__PURE__ */ new Set());
    p(this, vt, 0);
    u(this, vt, e);
  }
  push(e) {
    const t = a(this, Le);
    t.has(e) && t.delete(e), t.add(e), t.size > a(this, vt) && f(this, Yi, ir).call(this);
  }
  resize(e, t = null) {
    u(this, vt, e);
    const i = a(this, Le);
    if (t) {
      const n = i.size;
      let s = 1;
      for (const r of i)
        if (t.has(r.id) && (i.delete(r), i.add(r)), ++s > n)
          break;
    }
    for (; i.size > a(this, vt); )
      f(this, Yi, ir).call(this);
  }
  has(e) {
    return a(this, Le).has(e);
  }
  [Symbol.iterator]() {
    return a(this, Le).keys();
  }
};
Le = new WeakMap(), vt = new WeakMap(), Yi = new WeakSet(), ir = /* @__PURE__ */ d(function() {
  const e = a(this, Le).keys().next().value;
  e?.destroy(), a(this, Le).delete(e);
}, "#destroyFirstView"), d($r, "PDFPageViewBuffer");
let tr = $r;
var Te, Zi, Qi, re, ee, yt, xt, Ji, qi, en, tn, nn, sn, rn, an, tt, on, qt, Ne, de, Pt, _t, ei, it, ti, ln, ii, St, Me, ni, dn, si, hn, Ct, S, mo, bo, wo, pi, Cn, Eo, nr, vo, Oe, sr, yo, xo, Po, rr, ar, _o, or, In, lr;
const zr = class zr {
  constructor(e) {
    p(this, S);
    p(this, Te, null);
    p(this, Zi, null);
    p(this, Qi, null);
    p(this, re, Q.NONE);
    p(this, ee, null);
    p(this, yt, be.ENABLE_FORMS);
    p(this, xt, null);
    p(this, Ji, null);
    p(this, qi, null);
    p(this, en, !1);
    p(this, tn, !1);
    p(this, nn, !1);
    p(this, sn, !1);
    p(this, rn, !1);
    p(this, an, !0);
    p(this, tt, null);
    p(this, on, 0);
    p(this, qt, null);
    p(this, Ne, !0);
    p(this, de, null);
    p(this, Pt, null);
    p(this, _t, null);
    p(this, ei, !1);
    p(this, it, null);
    p(this, ti, !1);
    p(this, ln, 0);
    p(this, ii, new ResizeObserver(f(this, S, _o).bind(this)));
    p(this, St, null);
    p(this, Me, null);
    p(this, ni, null);
    p(this, dn, !0);
    p(this, si, me.ENABLE);
    p(this, hn, null);
    p(this, Ct, null);
    const t = "5.5.207";
    if (Qr !== t)
      throw new Error(`The API version "${Qr}" does not match the Viewer version "${t}".`);
    if (this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, u(this, hn, e.viewerAlert || null), this.container?.tagName !== "DIV" || this.viewer?.tagName !== "DIV")
      throw new Error("Invalid `container` and/or `viewer` option.");
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
      throw new Error("The `container` must be absolutely positioned.");
    a(this, ii).observe(this.container), this.eventBus = e.eventBus, this.linkService = e.linkService || new yi(), this.downloadManager = e.downloadManager || null, this.findController = e.findController || null, u(this, Zi, e.altTextManager || null), u(this, xt, e.commentManager || null), u(this, ni, e.signatureManager || null), u(this, qi, e.editorUndoBar || null), this.findController && (this.findController.onIsPageVisible = (n) => this._getVisiblePages().ids.has(n)), this._scriptingManager = e.scriptingManager || null, u(this, si, e.textLayerMode ?? me.ENABLE), u(this, yt, e.annotationMode ?? be.ENABLE_FORMS), u(this, re, e.annotationEditorMode ?? Q.NONE), u(this, Qi, e.annotationEditorHighlightColors || null), u(this, tn, e.enableHighlightFloatingButton === !0), u(this, sn, e.enableUpdatedAddImage === !0), u(this, rn, e.enableNewAltTextWhenAddingImage === !0), this.imageResourcesPath = e.imageResourcesPath || "", this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.removePageBorders = e.removePageBorders || !1, this.maxCanvasPixels = e.maxCanvasPixels, this.maxCanvasDim = e.maxCanvasDim, this.capCanvasAreaFactor = e.capCanvasAreaFactor, this.enableDetailCanvas = e.enableDetailCanvas ?? !0, this.enableOptimizedPartialRendering = e.enableOptimizedPartialRendering ?? !1, this.l10n = e.l10n, this.l10n ||= new ai(), u(this, nn, e.enablePermissions || !1), this.pageColors = e.pageColors || null, u(this, qt, e.mlManager || null), u(this, en, e.enableHWA || !1), u(this, dn, e.supportsPinchToZoom !== !1), u(this, an, e.enableAutoLinking !== !1), u(this, on, e.minDurationToUpdateCanvas ?? 500), this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new er(), this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue;
    const {
      abortSignal: i
    } = e;
    i?.addEventListener("abort", () => {
      a(this, ii).disconnect(), u(this, ii, null);
    }, {
      once: !0
    }), this.scroll = Wo(this.container, this._scrollUpdate.bind(this), i), this.presentationModeState = Mt.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), f(this, S, ar).call(this), this.eventBus._on("thumbnailrendered", ({
      pageNumber: n,
      pdfPage: s
    }) => {
      const r = this._pages[n - 1];
      a(this, Te).has(r) || s?.cleanup();
    }), e.l10n || this.l10n.translate(this.container);
  }
  get printingAllowed() {
    return a(this, Ne);
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(e) {
    return this._pages[e];
  }
  getCachedPageViews() {
    return new Set(a(this, Te));
  }
  get pageViewsReady() {
    return this._pages.every((e) => e?.pdfPage);
  }
  get renderForms() {
    return a(this, yt) === be.ENABLE_FORMS;
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
      return t && f(this, S, sr).call(this), !0;
    if (!(0 < e && e <= this.pagesCount))
      return !1;
    const i = this._currentPageNumber;
    return this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: e,
      pageLabel: this._pageLabels?.[e - 1] ?? null,
      previous: i
    }), t && f(this, S, sr).call(this), !0;
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
    return this._currentScale !== Yn ? this._currentScale : Na;
  }
  set currentScale(e) {
    if (isNaN(e))
      throw new Error("Invalid numeric scale.");
    this.pdfDocument && f(this, S, Oe).call(this, e, {
      noScroll: !1
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(e) {
    this.pdfDocument && f(this, S, Oe).call(this, e, {
      noScroll: !1
    });
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(e) {
    if (!ja(e))
      throw new Error("Invalid pages rotation angle.");
    if (!this.pdfDocument || (e %= 360, e < 0 && (e += 360), this._pagesRotation === e))
      return;
    this._pagesRotation = e;
    const t = this._currentPageNumber;
    this.refresh(!0, {
      rotation: e
    }), this._currentScaleValue && f(this, S, Oe).call(this, this._currentScaleValue, {
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
    return Ei(this, "_layerProperties", {
      get annotationEditorUIManager() {
        return a(e, ee);
      },
      get annotationStorage() {
        return e.pdfDocument?.annotationStorage;
      },
      get downloadManager() {
        return e.downloadManager;
      },
      get enableComment() {
        return !!a(e, xt);
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
      if (a(this, ti))
        return null;
      t.length = 0;
      const s = await this.pdfDocument.getPage(i), {
        items: r
      } = await s.getTextContent();
      for (const l of r)
        l.str && t.push(l.str), l.hasEOL && t.push(`
`);
      e.push(mi(t.join("")));
    }
    return e.join(`
`);
  }
  setDocument(e) {
    if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
      source: this
    }), this._cancelRendering(), this._resetView(), this.findController?.setDocument(null), this._scriptingManager?.setDocument(null), a(this, ee)?.destroy(), u(this, ee, null), u(this, re, Q.NONE), u(this, Ne, !0)), this.pdfDocument = e, !e)
      return;
    const t = e.numPages, i = e.getPage(1), n = e.getOptionalContentConfig({
      intent: "display"
    }), s = a(this, nn) ? e.getPermissions() : Promise.resolve(), {
      eventBus: r,
      pageColors: l,
      viewer: h
    } = this;
    u(this, tt, new AbortController());
    const {
      signal: c
    } = a(this, tt);
    if (t > pn.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const g = this._scrollMode = j.PAGE;
      r.dispatch("scrollmodechanged", {
        source: this,
        mode: g
      });
    }
    this._pagesCapability.promise.then(() => {
      r.dispatch("pagesloaded", {
        source: this,
        pagesCount: t
      });
    }, () => {
    });
    const m = /* @__PURE__ */ d((g) => {
      const v = this._pages[g.pageNumber - 1];
      v && a(this, Te).push(v);
    }, "onBeforeDraw");
    r._on("pagerender", m, {
      signal: c
    });
    const w = /* @__PURE__ */ d((g) => {
      g.cssTransform || g.isDetailView || (this._onePageRenderedCapability.resolve({
        timestamp: g.timestamp
      }), r._off("pagerendered", w));
    }, "onAfterDraw");
    r._on("pagerendered", w, {
      signal: c
    }), Promise.all([i, s]).then(([g, v]) => {
      if (e !== this.pdfDocument)
        return;
      this._firstPageCapability.resolve(g), this._optionalContentConfigPromise = n;
      const {
        annotationEditorMode: C,
        annotationMode: R,
        textLayerMode: L
      } = f(this, S, mo).call(this, v);
      if (L !== me.DISABLE) {
        const y = u(this, it, document.createElement("div"));
        y.id = "hiddenCopyElement", h.before(y);
      }
      if (C !== Q.DISABLE) {
        const y = C;
        e.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : Ca(y) ? (u(this, ee, new Ao(this.container, h, a(this, hn), a(this, Zi), a(this, xt), a(this, ni), r, e, l, a(this, Qi), a(this, tn), a(this, sn), a(this, rn), a(this, qt), a(this, qi), a(this, dn))), r.dispatch("annotationeditoruimanager", {
          source: this,
          uiManager: a(this, ee)
        }), y !== Q.NONE && (f(this, S, lr).call(this, y), a(this, ee).updateMode(y))) : console.error(`Invalid AnnotationEditor mode: ${y}`);
      }
      const M = this._scrollMode === j.PAGE ? null : h, A = this.currentScale, P = g.getViewport({
        scale: A * ye.PDF_TO_CSS_UNITS
      });
      h.style.setProperty("--scale-factor", P.scale), l?.background && h.style.setProperty("--page-bg-color", l.background), (l?.foreground === "CanvasText" || l?.background === "Canvas") && (h.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), h.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "ButtonText")));
      for (let y = 1; y <= t; ++y) {
        const I = new Fn({
          container: M,
          eventBus: r,
          id: y,
          scale: A,
          defaultViewport: P.clone(),
          optionalContentConfigPromise: n,
          renderingQueue: this.renderingQueue,
          textLayerMode: L,
          annotationMode: R,
          imageResourcesPath: this.imageResourcesPath,
          maxCanvasPixels: this.maxCanvasPixels,
          maxCanvasDim: this.maxCanvasDim,
          capCanvasAreaFactor: this.capCanvasAreaFactor,
          enableDetailCanvas: this.enableDetailCanvas,
          enableOptimizedPartialRendering: this.enableOptimizedPartialRendering,
          pageColors: l,
          l10n: this.l10n,
          layerProperties: this._layerProperties,
          enableHWA: a(this, en),
          enableAutoLinking: a(this, an),
          minDurationToUpdateCanvas: a(this, on),
          commentManager: a(this, xt)
        });
        this._pages.push(I);
      }
      this._pages[0]?.setPdfPage(g), this._scrollMode === j.PAGE ? f(this, S, pi).call(this) : this._spreadMode !== K.NONE && this._updateSpreadMode(), r._on("annotationeditorlayerrendered", (y) => {
        a(this, ee) && r.dispatch("annotationeditormodechanged", {
          source: this,
          mode: a(this, re)
        });
      }, {
        once: !0,
        signal: c
      }), f(this, S, bo).call(this, c).then(async () => {
        if (e !== this.pdfDocument)
          return;
        if (this.findController?.setDocument(e), this._scriptingManager?.setDocument(e), a(this, it) && document.addEventListener("copy", f(this, S, wo).bind(this, L), {
          signal: c
        }), e.loadingParams.disableAutoFetch || t > pn.FORCE_LAZY_PAGE_INIT) {
          this._pagesCapability.resolve();
          return;
        }
        let y = t - 1;
        if (y <= 0) {
          this._pagesCapability.resolve();
          return;
        }
        for (let I = 2; I <= t; ++I) {
          const k = e.getPage(I).then((V) => {
            const F = this._pages[I - 1];
            F.pdfPage || F.setPdfPage(V), --y === 0 && this._pagesCapability.resolve();
          }, (V) => {
            console.error(`Unable to get page ${I} to initialize viewer`, V), --y === 0 && this._pagesCapability.resolve();
          });
          I % pn.PAUSE_EAGER_PAGE_INIT === 0 && await k;
        }
      }), r.dispatch("pagesinit", {
        source: this
      }), e.getMetadata().then(({
        info: y
      }) => {
        e === this.pdfDocument && y.Language && (h.lang = y.Language);
      }), this.defaultRenderingQueue && this.update();
    }).catch((g) => {
      console.error("Unable to initialize viewer", g), this._pagesCapability.reject(g);
    });
  }
  onPagesEdited({
    pagesMapper: e,
    type: t,
    hasBeenCut: i,
    pageNumbers: n
  }) {
    if (t === "copy") {
      u(this, Ct, /* @__PURE__ */ new Map());
      for (const c of n)
        a(this, Ct).set(c, this._pages[c - 1]);
      return;
    }
    const s = t === "cut";
    if (s || t === "delete")
      for (const c of n)
        this._pages[c - 1].deleteMe(s);
    this._currentPageNumber = 0;
    const r = this._pages, l = this._pages = [];
    for (let c = 1, m = e.pagesNumber; c <= m; c++) {
      const w = e.getPrevPageNumber(c);
      if (w < 0) {
        let v = a(this, Ct).get(-w);
        i ? v.updatePageNumber(c) : v = v.clone(c), l.push(v);
        continue;
      }
      const g = r[w - 1];
      l.push(g), g.updatePageNumber(c);
    }
    s || u(this, Ct, null);
    const h = this._scrollMode === j.PAGE ? null : this.viewer;
    if (h) {
      h.replaceChildren();
      const c = document.createDocumentFragment();
      for (let m = 0, w = e.pagesNumber; m < w; m++) {
        const {
          div: g
        } = l[m];
        g.setAttribute("data-page-number", m + 1), c.append(g);
      }
      h.append(c);
    }
    setTimeout(() => {
      this.forceRendering();
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
    this._pages = [], this._currentPageNumber = 1, this._currentScale = Yn, this._currentScaleValue = null, this._pageLabels = null, u(this, Te, new tr(Sa)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = Promise.withResolvers(), this._onePageRenderedCapability = Promise.withResolvers(), this._pagesCapability = Promise.withResolvers(), this._scrollMode = j.VERTICAL, this._previousScrollMode = j.UNKNOWN, this._spreadMode = K.NONE, u(this, St, {
      previousPageNumber: 1,
      scrollDown: !0,
      pages: []
    }), a(this, tt)?.abort(), u(this, tt, null), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), a(this, it)?.remove(), u(this, it, null), f(this, S, or).call(this), f(this, S, In).call(this);
  }
  _scrollUpdate() {
    this.pagesCount !== 0 && (a(this, de) && clearTimeout(a(this, de)), u(this, de, setTimeout(() => {
      u(this, de, null), this.update();
    }, 100)), this.update());
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
    ignoreDestinationZoom: n = !1,
    center: s = null
  }) {
    if (!this.pdfDocument)
      return;
    const r = Number.isInteger(e) && this._pages[e - 1];
    if (!r) {
      console.error(`scrollPageIntoView: "${e}" is not a valid pageNumber parameter.`);
      return;
    }
    if (this.isInPresentationMode || !t) {
      this._setCurrentPageNumber(e, !0);
      return;
    }
    let l = 0, h = 0, c = 0, m = 0, w, g;
    const v = r.rotation % 180 !== 0, C = (v ? r.height : r.width) / r.scale / ye.PDF_TO_CSS_UNITS, R = (v ? r.width : r.height) / r.scale / ye.PDF_TO_CSS_UNITS;
    let L = 0;
    switch (t[1].name) {
      case "XYZ":
        l = t[2], h = t[3], L = t[4], l = l !== null ? l : 0, h = h !== null ? h : R;
        break;
      case "Fit":
      case "FitB":
        L = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        h = t[2], L = "page-width", h === null && this._location ? (l = this._location.left, h = this._location.top) : (typeof h != "number" || h < 0) && (h = R);
        break;
      case "FitV":
      case "FitBV":
        l = t[2], c = C, m = R, L = "page-height";
        break;
      case "FitR":
        l = t[2], h = t[3], c = t[4] - l, m = t[5] - h;
        let y = qr, I = ea;
        this.removePageBorders && (y = I = 0), w = (this.container.clientWidth - y) / c / ye.PDF_TO_CSS_UNITS, g = (this.container.clientHeight - I) / m / ye.PDF_TO_CSS_UNITS, L = Math.min(Math.abs(w), Math.abs(g));
        break;
      default:
        console.error(`scrollPageIntoView: "${t[1].name}" is not a valid destination type.`);
        return;
    }
    if (n || (L && L !== this._currentScale ? this.currentScaleValue = L : this._currentScale === Yn && (this.currentScaleValue = Vo)), L === "page-fit" && !t[4]) {
      f(this, S, Cn).call(this, r);
      return;
    }
    const M = [r.viewport.convertToViewportPoint(l, h), r.viewport.convertToViewportPoint(l + c, h + m)];
    let A = Math.min(M[0][0], M[1][0]), P = Math.min(M[0][1], M[1][1]);
    s ? ((s === "both" || s === "vertical") && (P -= (this.container.clientHeight - Math.abs(M[1][1] - M[0][1])) / 2), (s === "both" || s === "horizontal") && (A -= (this.container.clientWidth - Math.abs(M[1][0] - M[0][0])) / 2)) : i || (A = Math.max(A, 0), P = Math.max(P, 0)), f(this, S, Cn).call(this, r, {
      left: A,
      top: P
    });
  }
  _updateLocation(e) {
    const t = this._currentScale, i = this._currentScaleValue, n = parseFloat(i) === t ? Math.round(t * 1e4) / 100 : i, s = e.id, r = this._pages[s - 1], l = this.container, h = r.getPagePoint(l.scrollLeft - e.x, l.scrollTop - e.y), c = Math.round(h[0]), m = Math.round(h[1]);
    let w = `#page=${s}`;
    this.isInPresentationMode || (w += `&zoom=${n},${c},${m}`), this._location = {
      pageNumber: s,
      scale: n,
      top: m,
      left: c,
      rotation: this._pagesRotation,
      pdfOpenParams: w
    };
  }
  update() {
    const e = this._getVisiblePages(), t = e.views, i = t.length;
    if (i === 0)
      return;
    const n = Math.max(Sa, 2 * i + 1);
    a(this, Te).resize(n, e.ids);
    for (const {
      view: h,
      visibleArea: c
    } of t)
      h.updateVisibleArea(c);
    for (const h of a(this, Te))
      e.ids.has(h.id) || h.updateVisibleArea(null);
    this.renderingQueue.renderHighestPriority(e);
    const s = this._spreadMode === K.NONE && (this._scrollMode === j.PAGE || this._scrollMode === j.VERTICAL), r = this._currentPageNumber;
    let l = !1;
    for (const h of t) {
      if (h.percent < 100)
        break;
      if (h.id === r && s) {
        l = !0;
        break;
      }
    }
    this._setCurrentPageNumber(l ? this._currentPageNumber : t[0].id), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
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
    return this.presentationModeState === Mt.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === Mt.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const e = this._scrollMode === j.PAGE ? a(this, St).pages : this._pages, t = this._scrollMode === j.HORIZONTAL, i = t && this._isContainerRtl;
    return zo({
      scrollEl: this.container,
      views: e,
      sortByVisibility: !0,
      horizontal: t,
      rtl: i
    });
  }
  cleanup() {
    for (const e of this._pages)
      e.renderingState !== D.FINISHED && e.reset();
  }
  _cancelRendering() {
    for (const e of this._pages)
      e.cancelRendering();
  }
  forceRendering(e) {
    const t = e || this._getVisiblePages(), i = f(this, S, Po).call(this, t), n = this._spreadMode !== K.NONE && this._scrollMode !== j.HORIZONTAL, s = a(this, Me) !== null || a(this, de) !== null && t.views.some((l) => l.detailView?.renderingCancelled), r = this.renderingQueue.getHighestPriority(t, this._pages, i, n, s);
    return r ? (f(this, S, xo).call(this, r).then(() => {
      this.renderingQueue.renderView(r);
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
      }), n = na(i);
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
      if (!Go(e))
        throw new Error(`Invalid scroll mode: ${e}`);
      this.pagesCount > pn.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = e, this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: e
      }), this._updateScrollMode(this._currentPageNumber));
    }
  }
  _updateScrollMode(e = null) {
    const t = this._scrollMode, i = this.viewer;
    i.classList.toggle("scrollHorizontal", t === j.HORIZONTAL), i.classList.toggle("scrollWrapped", t === j.WRAPPED), !(!this.pdfDocument || !e) && (t === j.PAGE ? f(this, S, pi).call(this) : this._previousScrollMode === j.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && f(this, S, Oe).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  get spreadMode() {
    return this._spreadMode;
  }
  set spreadMode(e) {
    if (this._spreadMode !== e) {
      if (!Xo(e))
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
    if (this._scrollMode === j.PAGE)
      f(this, S, pi).call(this);
    else if (t.textContent = "", this._spreadMode === K.NONE)
      for (const n of this._pages)
        t.append(n.div);
    else {
      const n = this._spreadMode - 1;
      let s = null;
      for (let r = 0, l = i.length; r < l; ++r)
        s === null ? (s = document.createElement("div"), s.className = "spread", t.append(s)) : r % 2 === n && (s = s.cloneNode(!1), t.append(s)), s.append(i[r].div);
    }
    e && (this._currentScaleValue && isNaN(this._currentScaleValue) && f(this, S, Oe).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  nextPage() {
    const e = this._currentPageNumber, t = this.pagesCount;
    if (e >= t)
      return !1;
    const i = f(this, S, rr).call(this, e, !1) || 1;
    return this.currentPageNumber = Math.min(e + i, t), !0;
  }
  previousPage() {
    const e = this._currentPageNumber;
    if (e <= 1)
      return !1;
    const t = f(this, S, rr).call(this, e, !0) || 1;
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
      const r = i > 0 ? Jr : 1 / Jr, l = i > 0 ? Math.ceil : Math.floor;
      i = Math.abs(i);
      do
        s = l((s * r).toFixed(2) * 10) / 10;
      while (--i > 0);
    }
    s = La(s, Uo, Bo), f(this, S, Oe).call(this, s, {
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
    return a(this, Ji) || u(this, Ji, [this.container.offsetTop, this.container.offsetLeft]);
  }
  get annotationEditorMode() {
    return a(this, ee) ? a(this, re) : Q.DISABLE;
  }
  set annotationEditorMode({
    mode: e,
    editId: t = null,
    isFromKeyboard: i = !1,
    mustEnterInEditMode: n = !1,
    editComment: s = !1
  }) {
    if (!a(this, ee))
      throw new Error("The AnnotationEditor is not enabled.");
    if (a(this, re) === e)
      return;
    if (!Ca(e))
      throw new Error(`Invalid AnnotationEditor mode: ${e}`);
    if (!this.pdfDocument)
      return;
    f(this, S, lr).call(this, e);
    const {
      eventBus: r,
      pdfDocument: l
    } = this, h = /* @__PURE__ */ d(async () => {
      f(this, S, In).call(this), u(this, re, e), await a(this, ee).updateMode(e, t, !0, i, n, s), !(e !== a(this, re) || l !== this.pdfDocument) && r.dispatch("annotationeditormodechanged", {
        source: this,
        mode: e
      });
    }, "updater");
    if (e === Q.NONE || a(this, re) === Q.NONE) {
      const c = e !== Q.NONE;
      c || this.pdfDocument.annotationStorage.resetModifiedIds(), this.cleanup();
      for (const w of this._pages)
        w.toggleEditingMode(c);
      const m = f(this, S, yo).call(this);
      if (c && m) {
        f(this, S, In).call(this), u(this, Pt, new AbortController());
        const w = AbortSignal.any([a(this, tt).signal, a(this, Pt).signal]);
        r._on("pagerendered", ({
          pageNumber: g
        }) => {
          m.delete(g), m.size === 0 && u(this, _t, setTimeout(h, 0));
        }, {
          signal: w
        });
        return;
      }
    }
    h();
  }
  refresh(e = !1, t = /* @__PURE__ */ Object.create(null)) {
    if (this.pdfDocument) {
      for (const i of this._pages)
        i.update(t);
      f(this, S, or).call(this), e || this.update();
    }
  }
};
Te = new WeakMap(), Zi = new WeakMap(), Qi = new WeakMap(), re = new WeakMap(), ee = new WeakMap(), yt = new WeakMap(), xt = new WeakMap(), Ji = new WeakMap(), qi = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), tt = new WeakMap(), on = new WeakMap(), qt = new WeakMap(), Ne = new WeakMap(), de = new WeakMap(), Pt = new WeakMap(), _t = new WeakMap(), ei = new WeakMap(), it = new WeakMap(), ti = new WeakMap(), ln = new WeakMap(), ii = new WeakMap(), St = new WeakMap(), Me = new WeakMap(), ni = new WeakMap(), dn = new WeakMap(), si = new WeakMap(), hn = new WeakMap(), Ct = new WeakMap(), S = new WeakSet(), mo = /* @__PURE__ */ d(function(e) {
  const t = {
    annotationEditorMode: a(this, re),
    annotationMode: a(this, yt),
    textLayerMode: a(this, si)
  };
  return e ? (u(this, Ne, e.includes(At.PRINT_HIGH_QUALITY) || e.includes(At.PRINT)), this.eventBus.dispatch("printingallowed", {
    source: this,
    isAllowed: a(this, Ne)
  }), !e.includes(At.COPY) && a(this, si) === me.ENABLE && (t.textLayerMode = me.ENABLE_PERMISSIONS), e.includes(At.MODIFY_CONTENTS) || (t.annotationEditorMode = Q.DISABLE), !e.includes(At.MODIFY_ANNOTATIONS) && !e.includes(At.FILL_INTERACTIVE_FORMS) && a(this, yt) === be.ENABLE_FORMS && (t.annotationMode = be.ENABLE), t) : (u(this, Ne, !0), this.eventBus.dispatch("printingallowed", {
    source: this,
    isAllowed: a(this, Ne)
  }), t);
}, "#initializePermissions"), bo = /* @__PURE__ */ d(async function(e) {
  if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
    return;
  const t = Promise.withResolvers(), i = new AbortController();
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && t.resolve();
  }, {
    signal: AbortSignal.any([e, i.signal])
  }), await Promise.race([this._onePageRenderedCapability.promise, t.promise]), i.abort();
}, "#onePageRenderedOrForceFetch"), wo = /* @__PURE__ */ d(function(e, t) {
  const i = document.getSelection(), {
    focusNode: n,
    anchorNode: s
  } = i;
  if (s && n && i.containsNode(a(this, it))) {
    if (a(this, ei) || e === me.ENABLE_PERMISSIONS) {
      is(t);
      return;
    }
    u(this, ei, !0);
    const {
      classList: r
    } = this.viewer;
    r.add("copyAll");
    const l = new AbortController();
    window.addEventListener("keydown", (h) => u(this, ti, h.key === "Escape"), {
      signal: l.signal
    }), this.getAllText().then(async (h) => {
      h !== null && await navigator.clipboard.writeText(h);
    }).catch((h) => {
      console.warn(`Something goes wrong when extracting the text: ${h.message}`);
    }).finally(() => {
      u(this, ei, !1), u(this, ti, !1), l.abort(), r.remove("copyAll");
    }), is(t);
  }
}, "#copyCallback"), pi = /* @__PURE__ */ d(function() {
  if (this._scrollMode !== j.PAGE)
    throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
  const e = this._currentPageNumber, t = a(this, St), i = this.viewer;
  if (i.textContent = "", t.pages.length = 0, this._spreadMode === K.NONE && !this.isInPresentationMode) {
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
      const h = this._pages[l];
      h && (r.append(h.div), t.pages.push(h));
    }
    i.append(r);
  }
  t.scrollDown = e >= t.previousPageNumber, t.previousPageNumber = e;
}, "#ensurePageViewVisible"), Cn = /* @__PURE__ */ d(function(e, t = null) {
  const {
    div: i,
    id: n
  } = e;
  if (this._currentPageNumber !== n && this._setCurrentPageNumber(n), this._scrollMode === j.PAGE && (f(this, S, pi).call(this), this.update()), !t && !this.isInPresentationMode) {
    const s = i.offsetLeft + i.clientLeft, r = s + i.clientWidth, {
      scrollLeft: l,
      clientWidth: h
    } = this.container;
    (this._scrollMode === j.HORIZONTAL || s < l || r > l + h) && (t = {
      left: 0,
      top: 0
    });
  }
  Ma(i, t), !this._currentScaleValue && this._location && (this._location = null);
}, "#scrollIntoView"), Eo = /* @__PURE__ */ d(function(e) {
  return e === this._currentScale || Math.abs(e - this._currentScale) < 1e-15;
}, "#isSameScale"), nr = /* @__PURE__ */ d(function(e, t, {
  noScroll: i = !1,
  preset: n = !1,
  drawingDelay: s = -1,
  origin: r = null
}) {
  if (this._currentScaleValue = t.toString(), f(this, S, Eo).call(this, e)) {
    n && this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: e,
      presetValue: t
    });
    return;
  }
  this.viewer.style.setProperty("--scale-factor", e * ye.PDF_TO_CSS_UNITS);
  const l = s >= 0 && s < 1e3;
  this.refresh(!0, {
    scale: e,
    drawingDelay: l ? s : -1
  }), l && u(this, Me, setTimeout(() => {
    u(this, Me, null), this.refresh();
  }, s));
  const h = this._currentScale;
  if (this._currentScale = e, !i) {
    let c = this._currentPageNumber, m;
    if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (c = this._location.pageNumber, m = [null, {
      name: "XYZ"
    }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
      pageNumber: c,
      destArray: m,
      allowNegativeOffset: !0
    }), Array.isArray(r)) {
      const w = e / h - 1, [g, v] = this.containerTopLeft;
      this.container.scrollLeft += (r[0] - v) * w, this.container.scrollTop += (r[1] - g) * w;
    }
  }
  this.eventBus.dispatch("scalechanging", {
    source: this,
    scale: e,
    presetValue: n ? t : void 0
  }), this.defaultRenderingQueue && this.update();
}, "#setScaleUpdatePages"), vo = /* @__PURE__ */ d(function() {
  return this._spreadMode !== K.NONE && this._scrollMode !== j.HORIZONTAL ? 2 : 1;
}, "#pageWidthScaleFactor"), Oe = /* @__PURE__ */ d(function(e, t) {
  let i = parseFloat(e);
  if (i > 0)
    t.preset = !1, f(this, S, nr).call(this, i, e, t);
  else {
    const n = this._pages[this._currentPageNumber - 1];
    if (!n)
      return;
    let s = qr, r = ea;
    this.isInPresentationMode ? (s = r = 4, this._spreadMode !== K.NONE && (s *= 2)) : this.removePageBorders ? s = r = 0 : this._scrollMode === j.HORIZONTAL && ([s, r] = [r, s]);
    const l = (this.container.clientWidth - s) / n.width * n.scale / a(this, S, vo), h = (this.container.clientHeight - r) / n.height * n.scale;
    switch (e) {
      case "page-actual":
        i = 1;
        break;
      case "page-width":
        i = l;
        break;
      case "page-height":
        i = h;
        break;
      case "page-fit":
        i = Math.min(l, h);
        break;
      case "auto":
        const c = na(n) ? l : Math.min(h, l);
        i = Math.min(Ho, c);
        break;
      default:
        console.error(`#setScale: "${e}" is an unknown zoom value.`);
        return;
    }
    t.preset = !0, f(this, S, nr).call(this, i, e, t);
  }
}, "#setScale"), sr = /* @__PURE__ */ d(function() {
  const e = this._pages[this._currentPageNumber - 1];
  this.isInPresentationMode && f(this, S, Oe).call(this, this._currentScaleValue, {
    noScroll: !0
  }), f(this, S, Cn).call(this, e);
}, "#resetCurrentPageView"), yo = /* @__PURE__ */ d(function() {
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
}, "#switchToEditAnnotationMode"), xo = /* @__PURE__ */ d(async function(e) {
  if (e.pdfPage)
    return e.pdfPage;
  try {
    const t = await this.pdfDocument.getPage(e.id);
    return e.pdfPage || e.setPdfPage(t), t;
  } catch (t) {
    return console.error("Unable to get page for page view", t), null;
  }
}, "#ensurePdfPageLoaded"), Po = /* @__PURE__ */ d(function(e) {
  if (e.first?.id === 1)
    return !0;
  if (e.last?.id === this.pagesCount)
    return !1;
  switch (this._scrollMode) {
    case j.PAGE:
      return a(this, St).scrollDown;
    case j.HORIZONTAL:
      return this.scroll.right;
  }
  return this.scroll.down;
}, "#getScrollAhead"), rr = /* @__PURE__ */ d(function(e, t = !1) {
  switch (this._scrollMode) {
    case j.WRAPPED: {
      const {
        views: i
      } = this._getVisiblePages(), n = /* @__PURE__ */ new Map();
      for (const {
        id: s,
        y: r,
        percent: l,
        widthPercent: h
      } of i)
        l === 0 || h < 100 || n.getOrInsertComputed(r, jo).push(s);
      for (const s of n.values()) {
        const r = s.indexOf(e);
        if (r === -1)
          continue;
        const l = s.length;
        if (l === 1)
          break;
        if (t)
          for (let h = r - 1, c = 0; h >= c; h--) {
            const m = s[h], w = s[h + 1] - 1;
            if (m < w)
              return e - w;
          }
        else
          for (let h = r + 1, c = l; h < c; h++) {
            const m = s[h], w = s[h - 1] + 1;
            if (m > w)
              return w - e;
          }
        if (t) {
          const h = s[0];
          if (h < e)
            return e - h + 1;
        } else {
          const h = s[l - 1];
          if (h > e)
            return h - e + 1;
        }
        break;
      }
      break;
    }
    case j.HORIZONTAL:
      break;
    case j.PAGE:
    case j.VERTICAL: {
      if (this._spreadMode === K.NONE)
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
        widthPercent: h
      } of n)
        if (r === s) {
          if (l > 0 && h === 100)
            return 2;
          break;
        }
      break;
    }
  }
  return 1;
}, "#getPageAdvance"), ar = /* @__PURE__ */ d(function(e = this.container.clientHeight) {
  e !== a(this, ln) && (u(this, ln, e), Ko.setProperty("--viewer-container-height", `${e}px`));
}, "#updateContainerHeightCss"), _o = /* @__PURE__ */ d(function(e) {
  for (const t of e)
    if (t.target === this.container) {
      f(this, S, ar).call(this, Math.floor(t.borderBoxSize[0].blockSize)), u(this, Ji, null);
      break;
    }
}, "#resizeObserverCallback"), or = /* @__PURE__ */ d(function() {
  a(this, Me) !== null && (clearTimeout(a(this, Me)), u(this, Me, null)), a(this, de) !== null && (clearTimeout(a(this, de)), u(this, de, null));
}, "#cleanupTimeouts"), In = /* @__PURE__ */ d(function() {
  a(this, Pt)?.abort(), u(this, Pt, null), a(this, _t) !== null && (clearTimeout(a(this, _t)), u(this, _t, null));
}, "#cleanupSwitchAnnotationEditorMode"), lr = /* @__PURE__ */ d(function(e) {
  switch (e) {
    case Q.STAMP:
      a(this, qt)?.loadModel("altText");
      break;
    case Q.SIGNATURE:
      a(this, ni)?.loadSignatures();
      break;
  }
}, "#preloadEditingData"), d(zr, "PDFViewer");
let Vn = zr;
const Gr = class Gr extends Vn {
  _resetView() {
    super._resetView(), this._scrollMode = j.PAGE, this._spreadMode = K.NONE;
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
d(Gr, "PDFSinglePageViewer");
let dr = Gr;
globalThis.pdfjsViewer = {
  AnnotationLayerBuilder: Rn,
  DownloadManager: ps,
  EventBus: Ln,
  FindState: De,
  GenericL10n: ai,
  LinkTarget: at,
  parseQueryString: zn,
  PDFFindController: ss,
  PDFHistory: As,
  PDFLinkService: An,
  PDFPageView: Fn,
  PDFScriptingManager: qs,
  PDFSinglePageViewer: dr,
  PDFViewer: Vn,
  ProgressBar: ns,
  RenderingStates: D,
  ScrollMode: j,
  SimpleLinkService: yi,
  SpreadMode: K,
  StructTreeLayerBuilder: kn,
  TextLayerBuilder: Dn,
  XfaLayerBuilder: On
};
export {
  Rn as AnnotationLayerBuilder,
  ps as DownloadManager,
  Ln as EventBus,
  De as FindState,
  ai as GenericL10n,
  at as LinkTarget,
  ss as PDFFindController,
  As as PDFHistory,
  An as PDFLinkService,
  Fn as PDFPageView,
  qs as PDFScriptingManager,
  dr as PDFSinglePageViewer,
  Vn as PDFViewer,
  ns as ProgressBar,
  D as RenderingStates,
  j as ScrollMode,
  yi as SimpleLinkService,
  K as SpreadMode,
  kn as StructTreeLayerBuilder,
  Dn as TextLayerBuilder,
  On as XfaLayerBuilder,
  zn as parseQueryString
};
