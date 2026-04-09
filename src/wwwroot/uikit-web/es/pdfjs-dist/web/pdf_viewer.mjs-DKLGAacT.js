var Zr = Object.defineProperty;
var Qr = (l) => {
  throw TypeError(l);
};
var Co = (l, e, t) => e in l ? Zr(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var d = (l, e) => Zr(l, "name", { value: e, configurable: !0 });
var Y = (l, e, t) => Co(l, typeof e != "symbol" ? e + "" : e, t), Kn = (l, e, t) => e.has(l) || Qr("Cannot " + t);
var r = (l, e, t) => (Kn(l, e, "read from private field"), t ? t.call(l) : e.get(l)), p = (l, e, t) => e.has(l) ? Qr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(l) : e.set(l, t), u = (l, e, t, i) => (Kn(l, e, "write to private field"), i ? i.call(l, t) : e.set(l, t), t), f = (l, e, t) => (Kn(l, e, "access private method"), t);
var Yn = (l, e, t, i) => ({
  set _(n) {
    u(l, e, n, t);
  },
  get _() {
    return r(l, e, i);
  }
});
const {
  AbortException: Io,
  AnnotationEditorLayer: Ro,
  AnnotationEditorParamsType: vd,
  AnnotationEditorType: J,
  AnnotationEditorUIManager: Ao,
  AnnotationLayer: To,
  AnnotationMode: ve,
  AnnotationType: Aa,
  applyOpacity: yd,
  build: Pd,
  ColorPicker: xd,
  createValidAbsoluteUrl: Ta,
  CSSConstants: _d,
  DOMSVGFactory: Sd,
  DrawLayer: Lo,
  FeatureTest: La,
  fetchData: Jr,
  findContrastColor: Cd,
  getDocument: Id,
  getFilenameFromUrl: Rd,
  getPdfFilenameFromUrl: No,
  getRGB: Ad,
  getUuid: Td,
  getXfaPageViewport: Ld,
  GlobalWorkerOptions: Nd,
  ImageKind: Md,
  InvalidPDFException: kd,
  isDataScheme: Dd,
  isPdfFile: Mo,
  isValidExplicitDest: ko,
  makeArr: Do,
  makeMap: jo,
  makeObj: jd,
  MathClamp: Oo,
  noContextMenu: Od,
  normalizeUnicode: Fo,
  OPS: Fd,
  OutputScale: wn,
  PasswordResponses: Vd,
  PDFDataRangeTransport: Ud,
  PDFDateString: Bd,
  PDFWorker: Hd,
  PermissionFlag: Nt,
  PixelsPerInch: xe,
  RenderingCancelledException: ns,
  renderRichText: $d,
  ResponseException: Wd,
  setLayerDimensions: Na,
  shadow: vi,
  SignatureExtractor: zd,
  stopEvent: ss,
  SupportedImageMimeTypes: Gd,
  TextLayer: Vo,
  TextLayerImages: Uo,
  TouchManager: Xd,
  updateUrlHash: Bo,
  Util: ur,
  VerbosityLevel: Kd,
  version: qr,
  XfaLayer: Zn
} = globalThis.pdfjsLib, le = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
function Ho(l) {
  return l < 11904;
}
d(Ho, "isAlphabeticalScript");
function $o(l) {
  return (l & 65408) === 0;
}
d($o, "isAscii");
function Wo(l) {
  return l >= 97 && l <= 122 || l >= 65 && l <= 90;
}
d(Wo, "isAsciiAlpha");
function zo(l) {
  return l >= 48 && l <= 57;
}
d(zo, "isAsciiDigit");
function Go(l) {
  return l === 32 || l === 9 || l === 13 || l === 10;
}
d(Go, "isAsciiSpace");
function Xo(l) {
  return l >= 13312 && l <= 40959 || l >= 63744 && l <= 64255;
}
d(Xo, "isHan");
function Ko(l) {
  return l >= 12448 && l <= 12543;
}
d(Ko, "isKatakana");
function Yo(l) {
  return l >= 12352 && l <= 12447;
}
d(Yo, "isHiragana");
function Zo(l) {
  return l >= 65376 && l <= 65439;
}
d(Zo, "isHalfwidthKatakana");
function Qo(l) {
  return (l & 65408) === 3584;
}
d(Qo, "isThai");
function fn(l) {
  return Ho(l) ? $o(l) ? Go(l) ? le.SPACE : Wo(l) || zo(l) || l === 95 ? le.ALPHA_LETTER : le.PUNCT : Qo(l) ? le.THAI_LETTER : l === 160 ? le.SPACE : le.ALPHA_LETTER : Xo(l) ? le.HAN_LETTER : Ko(l) ? le.KATAKANA_LETTER : Yo(l) ? le.HIRAGANA_LETTER : Zo(l) ? le.HALFWIDTH_KATAKANA_LETTER : le.ALPHA_LETTER;
}
d(fn, "getCharacterType");
let ht;
function Jo() {
  if (!ht) {
    const l = [], e = [], t = new RegExp("^\\p{M}$", "u");
    for (let n = 0; n < 65536; n++) {
      if (n >= 55296 && n <= 57343)
        continue;
      const s = String.fromCharCode(n);
      if (s.normalize("NFKC") !== s && !t.test(s)) {
        if (e.length !== 2) {
          e[0] = e[1] = n;
          continue;
        }
        e[1] + 1 !== n ? (e[0] === e[1] ? l.push(String.fromCharCode(e[0])) : l.push(`${String.fromCharCode(e[0])}-${String.fromCharCode(e[1])}`), e[0] = e[1] = n) : e[1] = n;
      }
    }
    const i = l.join("");
    if (!ht)
      ht = i;
    else if (i !== ht) {
      for (let n = 1; n < i.length; n++)
        if (i[n] !== ht[n]) {
          console.log(`Difference at index ${n}: U+${i.charCodeAt(n).toString(16).toUpperCase().padStart(4, "0")}!== U+${ht.charCodeAt(n).toString(16).toUpperCase().padStart(4, "0")}`);
          break;
        }
      throw new Error("getNormalizeWithNFKC - update the `NormalizeWithNFKC` string.");
    }
  }
  return ht;
}
d(Jo, "getNormalizeWithNFKC");
const qo = "auto", Ma = 1, ea = 1.1, el = 0.1, tl = 25, Qn = 0, il = 1.25, ta = 40, ia = 5, jt = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
}, Ee = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_PERMISSIONS: 2
}, D = {
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
function nl(l, e) {
  let t = l.offsetParent;
  if (!t) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }
  let i = l.offsetTop + l.clientTop, n = l.offsetLeft + l.clientLeft;
  for (; t.clientHeight === t.scrollHeight && t.clientWidth === t.scrollWidth; )
    if (i += t.offsetTop, n += t.offsetLeft, t = t.offsetParent, !t)
      return;
  e && (e.top !== void 0 && (i += e.top), e.left !== void 0 && (n += e.left, t.scrollLeft = n)), t.scrollTop = i;
}
d(nl, "scrollIntoView");
function sl(l, e, t = void 0) {
  const i = /* @__PURE__ */ d(function(a) {
    s || (s = window.requestAnimationFrame(/* @__PURE__ */ d(function() {
      s = null;
      const h = l.scrollLeft, c = n.lastX;
      h !== c && (n.right = h > c), n.lastX = h;
      const w = l.scrollTop, m = n.lastY;
      w !== m && (n.down = w > m), n.lastY = w, e(n);
    }, "viewAreaElementScrolled")));
  }, "debounceScroll"), n = {
    right: !0,
    down: !0,
    lastX: l.scrollLeft,
    lastY: l.scrollTop,
    _eventHandler: i
  };
  let s = null;
  return l.addEventListener("scroll", i, {
    useCapture: !0,
    signal: t
  }), t?.addEventListener("abort", () => window.cancelAnimationFrame(s), {
    once: !0
  }), n;
}
d(sl, "watchScroll");
function Xn(l) {
  const e = /* @__PURE__ */ new Map();
  for (const [t, i] of new URLSearchParams(l))
    e.set(t.toLowerCase(), i);
  return e;
}
d(Xn, "parseQueryString");
const na = /[\x00-\x1F]/g;
function bi(l, e = !1) {
  return na.test(l) ? e ? l.replaceAll(na, (t) => t === "\0" ? "" : " ") : l.replaceAll("\0", "") : l;
}
d(bi, "removeNullCharacters");
function yi(l, e, t = 0) {
  let i = t, n = l.length - 1;
  if (n < 0 || !e(l[n]))
    return l.length;
  if (e(l[i]))
    return i;
  for (; i < n; ) {
    const s = i + n >> 1, a = l[s];
    e(a) ? n = s : i = s + 1;
  }
  return i;
}
d(yi, "binarySearchFirstItem");
function sa(l) {
  if (Math.floor(l) === l)
    return [l, 1];
  const e = 1 / l, t = 8;
  if (e > t)
    return [1, t];
  if (Math.floor(e) === e)
    return [1, e];
  const i = l > 1 ? e : l;
  let n = 0, s = 1, a = 1, o = 1;
  for (; ; ) {
    const c = n + a, w = s + o;
    if (w > t)
      break;
    i <= c / w ? (a = c, o = w) : (n = c, s = w);
  }
  let h;
  return i - n / s < a / o - i ? h = i === l ? [n, s] : [s, n] : h = i === l ? [a, o] : [o, a], h;
}
d(sa, "approximateFraction");
function gn(l, e) {
  return l - l % e;
}
d(gn, "floorToDivide");
function rl(l, e, t) {
  if (l < 2)
    return l;
  let i = e[l].div, n = i.offsetTop + i.clientTop;
  n >= t && (i = e[l - 1].div, n = i.offsetTop + i.clientTop);
  for (let s = l - 2; s >= 0 && (i = e[s].div, !(i.offsetTop + i.clientTop + i.clientHeight <= n)); --s)
    l = s;
  return l;
}
d(rl, "backtrackBeforeAllVisibleElements");
function al({
  scrollEl: l,
  views: e,
  sortByVisibility: t = !1,
  horizontal: i = !1,
  rtl: n = !1
}) {
  const s = l.scrollTop, a = s + l.clientHeight, o = l.scrollLeft, h = o + l.clientWidth;
  function c(A) {
    const _ = A.div;
    return _.offsetTop + _.clientTop + _.clientHeight > s;
  }
  d(c, "isElementBottomAfterViewTop");
  function w(A) {
    const _ = A.div, P = _.offsetLeft + _.clientLeft, M = P + _.clientWidth;
    return n ? P < h : M > o;
  }
  d(w, "isElementNextAfterViewHorizontally");
  const m = [], g = /* @__PURE__ */ new Set(), E = e.length;
  let y = yi(e, i ? w : c);
  y > 0 && y < E && !i && (y = rl(y, e, s));
  let R = i ? h : -1;
  for (let A = y; A < E; A++) {
    const _ = e[A], P = _.div, M = P.offsetLeft + P.clientLeft, k = P.offsetTop + P.clientTop, j = P.clientWidth, O = P.clientHeight, v = M + j, S = k + O;
    if (R === -1)
      S >= a && (R = S);
    else if ((i ? M : k) > R)
      break;
    if (S <= s || k >= a || v <= o || M >= h)
      continue;
    const V = Math.max(0, s - k), H = Math.max(0, o - M), U = V + Math.max(0, S - a), B = H + Math.max(0, v - h), K = (O - U) / O, dt = (j - B) / j, Yr = K * dt * 100 | 0;
    m.push({
      id: _.id,
      x: M,
      y: k,
      visibleArea: Yr === 100 ? null : {
        minX: H,
        minY: V,
        maxX: Math.min(v, h) - M,
        maxY: Math.min(S, a) - k
      },
      view: _,
      percent: Yr,
      widthPercent: dt * 100 | 0
    }), g.add(_.id);
  }
  const I = m[0], N = m.at(-1);
  return t && m.sort(function(A, _) {
    const P = A.percent - _.percent;
    return Math.abs(P) > 1e-3 ? -P : A.id - _.id;
  }), {
    first: I,
    last: N,
    views: m,
    ids: g
  };
}
d(al, "getVisibleElements");
function ka(l) {
  return Number.isInteger(l) && l % 90 === 0;
}
d(ka, "isValidRotation");
function ol(l) {
  return Number.isInteger(l) && Object.values(D).includes(l) && l !== D.UNKNOWN;
}
d(ol, "isValidScrollMode");
function ll(l) {
  return Number.isInteger(l) && Object.values(Z).includes(l) && l !== Z.UNKNOWN;
}
d(ll, "isValidSpreadMode");
function ra(l) {
  return l.width <= l.height;
}
d(ra, "isPortraitOrientation");
new Promise(function(l) {
  window.requestAnimationFrame(l);
});
const dl = document.documentElement.style;
var $e, pt, We, Ot, mt;
const fr = class fr {
  constructor(e) {
    p(this, $e, null);
    p(this, pt, null);
    p(this, We, 0);
    p(this, Ot, null);
    p(this, mt, !0);
    u(this, $e, e.classList), u(this, Ot, e.style);
  }
  get percent() {
    return r(this, We);
  }
  set percent(e) {
    if (u(this, We, e), isNaN(e)) {
      r(this, $e).add("indeterminate");
      return;
    }
    r(this, $e).remove("indeterminate"), r(this, Ot).setProperty("--progressBar-percent", `${r(this, We)}%`);
  }
  setWidth(e) {
    if (!e)
      return;
    const i = e.parentNode.offsetWidth - e.offsetWidth;
    i > 0 && r(this, Ot).setProperty("--progressBar-end-offset", `${i}px`);
  }
  setDisableAutoFetch(e = 5e3) {
    r(this, We) === 100 || isNaN(r(this, We)) || (r(this, pt) && clearTimeout(r(this, pt)), this.show(), u(this, pt, setTimeout(() => {
      u(this, pt, null), this.hide();
    }, e)));
  }
  hide() {
    r(this, mt) && (u(this, mt, !1), r(this, $e).add("hidden"));
  }
  show() {
    r(this, mt) || (u(this, mt, !0), r(this, $e).remove("hidden"));
  }
};
$e = new WeakMap(), pt = new WeakMap(), We = new WeakMap(), Ot = new WeakMap(), mt = new WeakMap(), d(fr, "ProgressBar");
let rs = fr;
function hl(l) {
  let e = D.VERTICAL, t = Z.NONE;
  switch (l) {
    case "SinglePage":
      e = D.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      e = D.PAGE;
    case "TwoColumnLeft":
      t = Z.ODD;
      break;
    case "TwoPageRight":
      e = D.PAGE;
    case "TwoColumnRight":
      t = Z.EVEN;
      break;
  }
  return {
    scrollMode: e,
    spreadMode: t
  };
}
d(hl, "apiPageLayoutToViewerModes");
const pn = (function() {
  const l = document.createElement("div");
  return l.style.width = "round(down, calc(1.6666666666666665 * 792px), 1px)", l.style.width === "calc(1320px)" ? Math.fround : (e) => e;
})(), Ue = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
}, cl = 250, aa = {
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
}, oa = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
let la;
const ul = new RegExp("\\p{M}+", "gu"), fl = new RegExp("([+^$|])|(\\p{P}+)|(\\s+)|(\\p{M})|(\\p{L})", "gu"), gl = new RegExp("([^\\p{M}])\\p{M}*$", "u"), pl = new RegExp("^\\p{M}*([^\\p{M}])", "u"), ml = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, da = /* @__PURE__ */ new Map(), bl = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", ha = /* @__PURE__ */ new Map();
let Jn = null, qn = null;
function En(l, e = {}) {
  const t = [];
  let i;
  for (; (i = ml.exec(l)) !== null; ) {
    let {
      index: A
    } = i;
    for (const _ of i[0]) {
      let P = da.get(_);
      P || (P = _.normalize("NFD").length, da.set(_, P)), t.push([P, A++]);
    }
  }
  const n = t.length > 0, s = e.ignoreDashEOL ?? !1;
  let a;
  if (!n && Jn)
    a = Jn;
  else if (n && qn)
    a = qn;
  else {
    const A = Object.keys(aa).join(""), _ = Jo(), j = [`[${A}]`, `[${_}]`, "(?:゙|゚)\\n", "\\p{M}+(?:-\\n)?", "\\p{Ll}-\\n(?=\\p{Ll})|\\p{Lu}-\\n(?=\\p{L})", "\\S-\\n", "(?:\\p{Ideographic}|[぀-ヿ])\\n", "\\n", n ? bl : "\\u0000"];
    a = new RegExp(j.map((O) => `(${O})`).join("|"), "gum"), n ? qn = a : Jn = a;
  }
  const o = [];
  for (; (i = ul.exec(l)) !== null; )
    o.push([i[0].length, i.index]);
  let h = l.normalize("NFD");
  const c = [0, 0];
  let w = 0, m = 0, g = 0, E = 0, y = 0, R = !1;
  h = h.replace(a, (A, _, P, M, k, j, O, v, S, V, H) => {
    if (H -= E, _) {
      const U = aa[_], B = U.length;
      for (let K = 1; K < B; K++)
        c.push(H - g + K, g - K);
      return g -= B - 1, U;
    }
    if (P) {
      let U = ha.get(P);
      U || (U = P.normalize("NFKC"), ha.set(P, U));
      const B = U.length;
      for (let K = 1; K < B; K++)
        c.push(H - g + K, g - K);
      return g -= B - 1, U;
    }
    if (M)
      return R = !0, H + y === o[w]?.[1] ? ++w : (c.push(H - 1 - g + 1, g - 1), g -= 1, E += 1), c.push(H - g + 1, g), E += 1, y += 1, M.charAt(0);
    if (k) {
      const U = k.endsWith(`
`), B = U ? k.length - 2 : k.length;
      R = !0;
      let K = B;
      H + y === o[w]?.[1] && (K -= o[w][0], ++w);
      for (let dt = 1; dt <= K; dt++)
        c.push(H - 1 - g + dt, g - dt);
      return g -= K, E += K, U ? (H += B - 1, c.push(H - g + 1, 1 + g), g += 1, E += 1, y += 1, k.slice(0, B)) : k;
    }
    if (j) {
      if (s)
        return E += 1, y += 1, j.slice(0, -1);
      const U = j.length - 2;
      return c.push(H - g + U, 1 + g), g += 1, E += 1, y += 1, j.slice(0, -2);
    }
    if (O)
      return E += 1, y += 1, O.slice(0, -1);
    if (v) {
      const U = v.length - 1;
      return c.push(H - g + U, g), E += 1, y += 1, v.slice(0, -1);
    }
    if (S)
      return c.push(H - g + 1, g - 1), g -= 1, E += 1, y += 1, " ";
    if (H + y === t[m]?.[1]) {
      const U = t[m][0] - 1;
      ++m;
      for (let B = 1; B <= U; B++)
        c.push(H - (g - B), g - B);
      g -= U, E += U;
    }
    return V;
  }), c.push(h.length, g);
  const I = new Uint32Array(c.length >> 1), N = new Int32Array(c.length >> 1);
  for (let A = 0, _ = c.length; A < _; A += 2)
    I[A >> 1] = c[A], N[A >> 1] = c[A + 1];
  return [h, [I, N], R];
}
d(En, "normalize");
function Da(l, e, t) {
  if (!l)
    return [e, t];
  const [i, n] = l, s = e, a = e + t - 1;
  let o = yi(i, (g) => g >= s);
  i[o] > s && --o;
  let h = yi(i, (g) => g >= a, o);
  i[h] > a && --h;
  const c = s + n[o], m = a + n[h] + 1 - c;
  return [c, m];
}
d(Da, "getOriginalIndex");
var W, Ft, bt, ge, _e, x, ja, os, ls, Oa, Fa, ds, Va, Ua, vn, ci, ct, Ba, hs, cs, yn, Ha, $a, us, fs, ui;
const gr = class gr {
  constructor({
    linkService: e,
    eventBus: t,
    updateMatchesCountOnProgress: i = !0
  }) {
    p(this, x);
    p(this, W, null);
    p(this, Ft, !0);
    p(this, bt, 0);
    p(this, ge, null);
    p(this, _e, null);
    this._linkService = e, this._eventBus = t, u(this, Ft, i), this.onIsPageVisible = null, f(this, x, os).call(this), t._on("find", f(this, x, ja).bind(this)), t._on("findbarclose", f(this, x, $a).bind(this)), t._on("pagesedited", f(this, x, Ha).bind(this));
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
    return r(this, W);
  }
  setDocument(e) {
    this._pdfDocument && f(this, x, os).call(this), e && (this._pdfDocument = e, this._firstPageCapability.resolve());
  }
  scrollMatchIntoView({
    element: e = null,
    pageIndex: t = -1,
    matchIndex: i = -1
  }) {
    if (!(!this._scrollMatches || !e)) {
      {
        if (i === -1 || i !== this._selected.matchIdx)
          return;
        if (t === -1 || t !== this._selected.pageIdx)
          return;
      }
      this._scrollMatches = !1, e.scrollIntoView({
        block: "start",
        inline: "center"
      });
    }
  }
  match(e, t, i) {
    const n = this._hasDiacritics[i];
    let s = !1;
    if (typeof e == "string" ? [s, e] = f(this, x, ds).call(this, e, n) : e = e.sort().reverse().map((m) => {
      const [g, E] = f(this, x, ds).call(this, m, n);
      return s ||= g, `(${E})`;
    }).join("|"), !e)
      return;
    const {
      caseSensitive: a,
      entireWord: o
    } = r(this, W), h = `g${s ? "u" : ""}${a ? "" : "i"}`;
    e = new RegExp(e, h);
    const c = [];
    let w;
    for (; (w = e.exec(t)) !== null; )
      o && !f(this, x, Fa).call(this, t, w.index, w[0].length) || c.push({
        index: w.index,
        length: w[0].length
      });
    return c;
  }
};
W = new WeakMap(), Ft = new WeakMap(), bt = new WeakMap(), ge = new WeakMap(), _e = new WeakMap(), x = new WeakSet(), ja = /* @__PURE__ */ d(function(e) {
  if (!e)
    return;
  const t = this._pdfDocument, {
    type: i
  } = e;
  (r(this, W) === null || f(this, x, Oa).call(this, e)) && (this._dirtyMatch = !0), u(this, W, e), i !== "highlightallchange" && f(this, x, ui).call(this, Ue.PENDING), this._firstPageCapability.promise.then(() => {
    if (!this._pdfDocument || t && this._pdfDocument !== t)
      return;
    f(this, x, Ua).call(this);
    const n = !this._highlightMatches, s = !!this._findTimeout;
    this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), i ? this._dirtyMatch ? f(this, x, ct).call(this) : i === "again" ? (f(this, x, ct).call(this), n && r(this, W).highlightAll && f(this, x, ci).call(this)) : i === "highlightallchange" ? (s ? f(this, x, ct).call(this) : this._highlightMatches = !0, f(this, x, ci).call(this)) : f(this, x, ct).call(this) : this._findTimeout = setTimeout(() => {
      f(this, x, ct).call(this), this._findTimeout = null;
    }, cl);
  });
}, "#onFind"), os = /* @__PURE__ */ d(function() {
  this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], u(this, bt, 0), u(this, W, null), this._selected = {
    pageIdx: -1,
    matchIdx: -1
  }, this._offset = {
    pageIdx: null,
    matchIdx: null,
    wrapped: !1
  }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, u(this, ge, null), this._firstPageCapability = Promise.withResolvers();
}, "#reset"), ls = /* @__PURE__ */ d(function() {
  const {
    query: e
  } = r(this, W);
  return typeof e == "string" ? (e !== this._rawQuery && (this._rawQuery = e, [this._normalizedQuery] = En(e)), this._normalizedQuery) : (e || []).filter((t) => !!t).map((t) => En(t)[0]);
}, "#query"), Oa = /* @__PURE__ */ d(function(e) {
  const t = e.query, i = r(this, W).query, n = typeof t;
  if (n !== typeof i)
    return !0;
  if (n === "string") {
    if (t !== i)
      return !0;
  } else if (JSON.stringify(t) !== JSON.stringify(i))
    return !0;
  switch (e.type) {
    case "again":
      const a = this._selected.pageIdx + 1, o = this._linkService;
      return a >= 1 && a <= o.pagesCount && a !== o.page && !(this.onIsPageVisible?.(a) ?? !0);
    case "highlightallchange":
      return !1;
  }
  return !0;
}, "#shouldDirtyMatch"), Fa = /* @__PURE__ */ d(function(e, t, i) {
  let n = e.slice(0, t).match(gl);
  if (n) {
    const s = e.charCodeAt(t), a = n[1].charCodeAt(0);
    if (fn(s) === fn(a))
      return !1;
  }
  if (n = e.slice(t + i).match(pl), n) {
    const s = e.charCodeAt(t + i - 1), a = n[1].charCodeAt(0);
    if (fn(s) === fn(a))
      return !1;
  }
  return !0;
}, "#isEntireWord"), ds = /* @__PURE__ */ d(function(e, t) {
  const {
    matchDiacritics: i
  } = r(this, W);
  let n = !1;
  const s = /* @__PURE__ */ d((o, h) => o === e ? h : e.startsWith(o) ? `${h}[ ]*` : e.endsWith(o) ? `[ ]*${h}` : `[ ]*${h}[ ]*`, "addExtraWhitespaces");
  e = e.replaceAll(fl, (o, h, c, w, m, g) => h ? s(h, RegExp.escape(h)) : c ? s(c, RegExp.escape(c)) : w ? "[ ]+" : i ? m || g : m ? oa.has(m.charCodeAt(0)) ? m : "" : t ? (n = !0, `${g}\\p{M}*`) : g);
  const a = "[ ]*";
  return e.endsWith(a) && (e = e.slice(0, e.length - a.length)), i && t && (la ||= String.fromCharCode(...oa), n = !0, e = `${e}(?=[${la}]|[^\\p{M}]|$)`), [n, e];
}, "#convertToRegExpString"), Va = /* @__PURE__ */ d(function(e) {
  if (!r(this, W))
    return;
  const t = r(this, x, ls);
  if (t.length === 0)
    return;
  const i = this._pageContents[e], n = this.match(t, i, e), s = this._pageMatches[e] = [], a = this._pageMatchesLength[e] = [], o = this._pageDiffs[e];
  n?.forEach(({
    index: c,
    length: w
  }) => {
    const [m, g] = Da(o, c, w);
    g && (s.push(m), a.push(g));
  }), r(this, W).highlightAll && f(this, x, vn).call(this, e), this._resumePageIdx === e && (this._resumePageIdx = null, f(this, x, hs).call(this));
  const h = s.length;
  this._matchesCountTotal += h, r(this, Ft) ? h > 0 && f(this, x, fs).call(this) : ++Yn(this, bt)._ === this._linkService.pagesCount && f(this, x, fs).call(this);
}, "#calculateMatch"), Ua = /* @__PURE__ */ d(function() {
  if (this._extractTextPromises.length > 0)
    return;
  let e = Promise.resolve();
  const t = {
    disableNormalization: !0
  }, i = this._pdfDocument;
  for (let n = 0, s = this._linkService.pagesCount; n < s; n++) {
    const {
      promise: a,
      resolve: o
    } = Promise.withResolvers();
    this._extractTextPromises[n] = a, e = e.then(async () => {
      if (i !== this._pdfDocument) {
        o();
        return;
      }
      await i.getPage(n + 1).then((h) => h.getTextContent(t)).then((h) => {
        const c = [];
        for (const w of h.items)
          c.push(w.str), w.hasEOL && c.push(`
`);
        [this._pageContents[n], this._pageDiffs[n], this._hasDiacritics[n]] = En(c.join("")), o();
      }, (h) => {
        console.error(`Unable to get text content for page ${n + 1}`, h), this._pageContents[n] = "", this._pageDiffs[n] = null, this._hasDiacritics[n] = !1, o();
      });
    });
  }
}, "#extractText"), vn = /* @__PURE__ */ d(function(e) {
  this._scrollMatches && this._selected.pageIdx === e && (this._linkService.page = e + 1), this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: e
  });
}, "#updatePage"), ci = /* @__PURE__ */ d(function() {
  this._eventBus.dispatch("updatetextlayermatches", {
    source: this,
    pageIndex: -1
  });
}, "#updateAllPages"), ct = /* @__PURE__ */ d(function() {
  const e = r(this, W).findPrevious, t = this._linkService.page - 1, i = this._linkService.pagesCount;
  if (this._highlightMatches = !0, this._dirtyMatch) {
    this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = t, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, u(this, bt, 0), this._matchesCountTotal = 0, f(this, x, ci).call(this);
    for (let a = 0; a < i; a++)
      this._pendingFindMatches.has(a) || (this._pendingFindMatches.add(a), this._extractTextPromises[a].then(() => {
        this._pendingFindMatches.delete(a), f(this, x, Va).call(this, a);
      }));
  }
  if (r(this, x, ls).length === 0) {
    f(this, x, ui).call(this, Ue.FOUND);
    return;
  }
  if (this._resumePageIdx)
    return;
  const s = this._offset;
  if (this._pagesToSearch = i, s.matchIdx !== null) {
    const a = this._pageMatches[s.pageIdx].length;
    if (!e && s.matchIdx + 1 < a || e && s.matchIdx > 0) {
      s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, f(this, x, yn).call(this, !0);
      return;
    }
    f(this, x, cs).call(this, e);
  }
  f(this, x, hs).call(this);
}, "#nextMatch"), Ba = /* @__PURE__ */ d(function(e) {
  const t = this._offset, i = e.length, n = r(this, W).findPrevious;
  return i ? (t.matchIdx = n ? i - 1 : 0, f(this, x, yn).call(this, !0), !0) : (f(this, x, cs).call(this, n), t.wrapped && (t.matchIdx = null, this._pagesToSearch < 0) ? (f(this, x, yn).call(this, !1), !0) : !1);
}, "#matchesReady"), hs = /* @__PURE__ */ d(function() {
  this._resumePageIdx !== null && console.error("There can only be one pending page.");
  let e = null;
  do {
    const t = this._offset.pageIdx;
    if (e = this._pageMatches[t], !e) {
      this._resumePageIdx = t;
      break;
    }
  } while (!f(this, x, Ba).call(this, e));
}, "#nextPageMatch"), cs = /* @__PURE__ */ d(function(e) {
  const t = this._offset, i = this._linkService.pagesCount;
  t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this._pagesToSearch--, (t.pageIdx >= i || t.pageIdx < 0) && (t.pageIdx = e ? i - 1 : 0, t.wrapped = !0);
}, "#advanceOffsetPage"), yn = /* @__PURE__ */ d(function(e = !1) {
  let t = Ue.NOT_FOUND;
  const i = this._offset.wrapped;
  if (this._offset.wrapped = !1, e) {
    const n = this._selected.pageIdx;
    this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, t = i ? Ue.WRAPPED : Ue.FOUND, n !== -1 && n !== this._selected.pageIdx && f(this, x, vn).call(this, n);
  }
  f(this, x, ui).call(this, t, r(this, W).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, f(this, x, vn).call(this, this._selected.pageIdx));
}, "#updateMatch"), Ha = /* @__PURE__ */ d(function({
  pagesMapper: e,
  type: t,
  pageNumbers: i
}) {
  if (this._extractTextPromises.length === 0)
    return;
  if (t === "copy") {
    const g = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
    for (const I of i)
      g.set(I, this._extractTextPromises[I - 1]), E.set(I, this._pageContents[I - 1]), y.set(I, this._pageDiffs[I - 1]), R.set(I, this._hasDiacritics[I - 1]);
    u(this, ge, {
      promises: g,
      contents: E,
      diffs: y,
      diacritics: R
    });
    return;
  }
  if (t === "cancelCopy") {
    u(this, ge, null);
    return;
  }
  if (t === "delete" && u(this, _e, {
    promises: this._extractTextPromises,
    contents: this._pageContents,
    diffs: this._pageDiffs,
    diacritics: this._hasDiacritics
  }), t === "cancelDelete") {
    this._extractTextPromises = r(this, _e).promises, this._pageContents = r(this, _e).contents, this._pageDiffs = r(this, _e).diffs, this._hasDiacritics = r(this, _e).diacritics;
    return;
  }
  if (t === "cleanSavedData") {
    u(this, _e, null);
    return;
  }
  this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx = null, this._dirtyMatch = !0;
  const n = this._extractTextPromises, s = this._pageContents, a = this._pageDiffs, o = this._hasDiacritics, h = this._extractTextPromises = [], c = this._pageContents = [], w = this._pageDiffs = [], m = this._hasDiacritics = [];
  for (let g = 1, E = e.pagesNumber; g <= E; g++) {
    const y = e.getPrevPageNumber(g);
    if (y < 0) {
      const R = -y;
      h.push(r(this, ge)?.promises.get(R) || Promise.resolve()), c.push(r(this, ge)?.contents.get(R) ?? ""), w.push(r(this, ge)?.diffs.get(R) ?? null), m.push(r(this, ge)?.diacritics.get(R) ?? !1);
      continue;
    }
    h.push(n[y - 1] || Promise.resolve()), c.push(s[y - 1] ?? ""), w.push(a[y - 1] ?? null), m.push(o[y - 1] ?? !1);
  }
  r(this, W) && f(this, x, ct).call(this);
}, "#onPagesEdited"), $a = /* @__PURE__ */ d(function(e) {
  const t = this._pdfDocument;
  this._firstPageCapability.promise.then(() => {
    !this._pdfDocument || t && this._pdfDocument !== t || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), f(this, x, ui).call(this, Ue.FOUND), this._highlightMatches = !1, f(this, x, ci).call(this));
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
}, "#requestMatchesCount"), fs = /* @__PURE__ */ d(function() {
  this._eventBus.dispatch("updatefindmatchescount", {
    source: this,
    matchesCount: f(this, x, us).call(this)
  });
}, "#updateUIResultsCount"), ui = /* @__PURE__ */ d(function(e, t = !1) {
  !r(this, Ft) && (r(this, bt) !== this._linkService.pagesCount || e === Ue.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
    source: this,
    state: e,
    previous: t,
    entireWord: r(this, W)?.entireWord ?? null,
    matchesCount: f(this, x, us).call(this),
    rawQuery: r(this, W)?.query ?? null
  });
}, "#updateUIState"), d(gr, "PDFFindController");
let as = gr;
const wl = "noopener noreferrer nofollow", ut = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
}, pr = class pr {
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
    const a = new AbortController();
    this.eventBus._on("textlayerrendered", (o) => {
      o.pageNumber === n && (o.source.textLayer.div.focus(), a.abort());
    }, {
      signal: a.signal
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
    const n = i ? ut.BLANK : this.externalLinkTarget, s = this.externalLinkRel;
    this.externalLinkEnabled ? e.href = e.title = t : (e.href = "", e.title = `Disabled: ${t}`, e.onclick = () => !1);
    let a = "";
    switch (n) {
      case ut.NONE:
        break;
      case ut.SELF:
        a = "_self";
        break;
      case ut.BLANK:
        a = "_blank";
        break;
      case ut.PARENT:
        a = "_parent";
        break;
      case ut.TOP:
        a = "_top";
        break;
    }
    e.target = a, e.rel = typeof s == "string" ? s : wl;
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
      const n = Xn(e);
      if (n.has("search")) {
        const s = n.get("search").replaceAll('"', ""), a = n.get("phrase") === "true";
        this.eventBus.dispatch("findfromurlhash", {
          source: this,
          query: a ? s : s.match(/\S+/g)
        });
      }
      if (n.has("page") && (t = n.get("page") | 0 || 1), n.has("zoom")) {
        const s = n.get("zoom").split(","), a = s[0], o = parseFloat(a);
        a.includes("Fit") ? a === "Fit" || a === "FitB" ? i = [null, {
          name: a
        }] : a === "FitH" || a === "FitBH" || a === "FitV" || a === "FitBV" ? i = [null, {
          name: a
        }, s.length > 1 ? s[1] | 0 : null] : a === "FitR" ? s.length !== 5 ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : i = [null, {
          name: a
        }, s[1] | 0, s[2] | 0, s[3] | 0, s[4] | 0] : console.error(`PDFLinkService.setHash: "${a}" is not a valid zoom value.`) : i = [null, {
          name: "XYZ"
        }, s.length > 1 ? s[1] | 0 : null, s.length > 2 ? s[2] | 0 : null, o ? o / 100 : a];
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
    if (typeof i == "string" || ko(i)) {
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
d(pr, "PDFLinkService");
let Tn = pr;
const mr = class mr extends Tn {
  setDocument(e, t = null) {
  }
};
d(mr, "SimpleLinkService");
let Pi = mr;
var ze, _i, Si, Ci, Ge, Ii, Ve, Wa, gs, za;
const br = class br {
  constructor({
    pdfPage: e,
    linkService: t,
    downloadManager: i,
    annotationStorage: n = null,
    imageResourcesPath: s = "",
    renderForms: a = !0,
    enableComment: o = !1,
    commentManager: h = null,
    enableScripting: c = !1,
    hasJSActionsPromise: w = null,
    fieldObjectsPromise: m = null,
    annotationCanvasMap: g = null,
    accessibilityManager: E = null,
    annotationEditorUIManager: y = null,
    onAppend: R = null
  }) {
    p(this, Ve);
    p(this, ze, null);
    p(this, _i, null);
    p(this, Si, !1);
    p(this, Ci, null);
    p(this, Ge, null);
    p(this, Ii, !1);
    this.pdfPage = e, this.linkService = t, this.downloadManager = i, this.imageResourcesPath = s, this.renderForms = a, this.annotationStorage = n, this.enableComment = o, u(this, _i, h), this.enableScripting = c, this._hasJSActionsPromise = w || Promise.resolve(!1), this._fieldObjectsPromise = m || Promise.resolve(null), this._annotationCanvasMap = g, this._accessibilityManager = E, this._annotationEditorUIManager = y, u(this, Ci, R), this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = t.eventBus;
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
    const [n, s, a] = await Promise.all([this.pdfPage.getAnnotations({
      intent: t
    }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
    if (this._cancelled)
      return;
    const o = this.div = document.createElement("div");
    if (o.className = "annotationLayer", (h = r(this, Ci)) == null || h.call(this, o), f(this, Ve, Wa).call(this, e, i), n.length === 0) {
      u(this, ze, n), Na(this.div, e);
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
      fieldObjects: a
    }), u(this, ze, n), this.linkService.isInPresentationMode && f(this, Ve, gs).call(this, jt.FULLSCREEN), r(this, Ge) || (u(this, Ge, new AbortController()), this._eventBus?._on("presentationmodechanged", (c) => {
      f(this, Ve, gs).call(this, c.state);
    }, {
      signal: r(this, Ge).signal
    }));
  }
  cancel() {
    this._cancelled = !0, r(this, Ge)?.abort(), u(this, Ge, null);
  }
  hide(e = !1) {
    u(this, Si, !e), this.div && (this.div.hidden = !0);
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  async injectLinkAnnotations(e) {
    if (r(this, ze) === null)
      throw new Error("`render` method must be called before `injectLinkAnnotations`.");
    if (this._cancelled || r(this, Ii))
      return;
    u(this, Ii, !0);
    const t = r(this, ze).length ? f(this, Ve, za).call(this, e) : e;
    t.length && (await this.annotationLayer.addLinkAnnotations(t), r(this, Si) || (this.div.hidden = !1));
  }
};
ze = new WeakMap(), _i = new WeakMap(), Si = new WeakMap(), Ci = new WeakMap(), Ge = new WeakMap(), Ii = new WeakMap(), Ve = new WeakSet(), Wa = /* @__PURE__ */ d(function(e, t) {
  this.annotationLayer = new To({
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
    commentManager: r(this, _i),
    linkService: this.linkService
  });
}, "#initAnnotationLayer"), gs = /* @__PURE__ */ d(function(e) {
  if (!this.div)
    return;
  let t = !1;
  switch (e) {
    case jt.FULLSCREEN:
      t = !0;
      break;
    case jt.NORMAL:
      break;
    default:
      return;
  }
  for (const i of this.div.childNodes)
    i.hasAttribute("data-internal-link") || (i.inert = t);
}, "#updatePresentationModeState"), za = /* @__PURE__ */ d(function(e) {
  function t(s) {
    if (!s.quadPoints)
      return [s.rect];
    const a = [];
    for (let o = 2, h = s.quadPoints.length; o < h; o += 8) {
      const c = s.quadPoints[o], w = s.quadPoints[o + 1], m = s.quadPoints[o + 2], g = s.quadPoints[o + 3];
      a.push([m, g, c, w]);
    }
    return a;
  }
  d(t, "annotationRects");
  function i(s, a) {
    const o = [], h = t(s), c = t(a);
    for (const w of h)
      for (const m of c) {
        const g = ur.intersect(w, m);
        g && o.push(g);
      }
    return o;
  }
  d(i, "intersectAnnotations");
  function n(s) {
    let a = 0;
    for (const o of s)
      a += Math.abs((o[2] - o[0]) * (o[3] - o[1]));
    return a;
  }
  return d(n, "areaRects"), e.filter((s) => {
    let a;
    for (const o of r(this, ze)) {
      if (o.annotationType !== Aa.LINK || !o.url)
        continue;
      const h = i(o, s);
      if (h.length !== 0 && (a ??= n(t(s)), n(h) / a > 0.5))
        return !1;
    }
    return !0;
  });
}, "#checkInferredLinks"), d(br, "AnnotationLayerBuilder");
let Ln = br;
var Ri;
const wr = class wr {
  constructor() {
    p(this, Ri, /* @__PURE__ */ new WeakMap());
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
    const n = Mo(t), s = n ? "application/pdf" : "";
    if (n) {
      const a = r(this, Ri).getOrInsertComputed(e, () => URL.createObjectURL(new Blob([e], {
        type: s
      })));
      try {
        const o = this._getOpenDataUrl(a, t, i);
        return window.open(o), !0;
      } catch (o) {
        console.error("openOrDownloadData:", o), URL.revokeObjectURL(a), r(this, Ri).delete(e);
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
Ri = new WeakMap(), d(wr, "BaseDownloadManager");
let ps = wr;
const Er = class Er extends ps {
  _triggerDownload(e, t, i, n = !1) {
    if (!e && !n) {
      if (!Ta(t, "http://example.com"))
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
d(Er, "DownloadManager");
let ms = Er;
const ca = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
async function El({
  target: l,
  name: e,
  delay: t = 0
}) {
  if (typeof l != "object" || !(Number.isInteger(t) && t >= 0))
    throw new Error("waitOnEventOrTimeout - invalid parameters.");
  const {
    promise: i,
    resolve: n
  } = Promise.withResolvers(), s = new AbortController();
  function a(c) {
    s.abort(), clearTimeout(h), n(c);
  }
  d(a, "handler");
  const o = l instanceof Nn ? "_on" : "addEventListener";
  l[o](e, a.bind(null, ca.EVENT), {
    signal: s.signal
  });
  const h = setTimeout(a.bind(null, ca.TIMEOUT), t);
  return i;
}
d(El, "waitOnEventOrTimeout");
var Vt;
const vr = class vr {
  constructor() {
    p(this, Vt, /* @__PURE__ */ Object.create(null));
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
    const i = r(this, Vt)[e];
    if (!i || i.length === 0)
      return;
    let n;
    for (const {
      listener: s,
      external: a,
      once: o
    } of i.slice(0)) {
      if (o && this._off(e, s), a) {
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
        signal: a
      } = i;
      if (a.aborted) {
        console.error("Cannot use an `aborted` signal.");
        return;
      }
      const o = /* @__PURE__ */ d(() => this._off(e, t), "onAbort");
      n = /* @__PURE__ */ d(() => a.removeEventListener("abort", o), "rmAbort"), a.addEventListener("abort", o);
    }
    (r(this, Vt)[e] ||= []).push({
      listener: t,
      external: i?.external === !0,
      once: i?.once === !0,
      rmAbort: n
    });
  }
  _off(e, t, i = null) {
    const n = r(this, Vt)[e];
    if (n)
      for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        if (o.listener === t) {
          o.rmAbort?.(), n.splice(s, 1);
          return;
        }
      }
  }
};
Vt = new WeakMap(), d(vr, "EventBus");
let Nn = vr;
const yr = class yr {
  constructor(e) {
    this.value = e;
  }
  valueOf() {
    return this.value;
  }
};
d(yr, "FluentType");
let lt = yr;
const Pr = class Pr extends lt {
  constructor(e = "???") {
    super(e);
  }
  toString(e) {
    return `{${this.value}}`;
  }
};
d(Pr, "FluentNone");
let $ = Pr;
const xr = class xr extends lt {
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
d(xr, "FluentNumber");
let fe = xr;
const Ei = class Ei extends lt {
  static supportsValue(e) {
    if (typeof e == "number" || e instanceof Date) return !0;
    if (e instanceof lt) return Ei.supportsValue(e.valueOf());
    if ("Temporal" in globalThis) {
      const t = globalThis.Temporal;
      if (e instanceof t.Instant || e instanceof t.PlainDateTime || e instanceof t.PlainDate || e instanceof t.PlainMonthDay || e instanceof t.PlainTime || e instanceof t.PlainYearMonth)
        return !0;
    }
    return !1;
  }
  constructor(e, t = {}) {
    e instanceof Ei ? (t = {
      ...e.opts,
      ...t
    }, e = e.value) : e instanceof lt && (e = e.valueOf()), typeof e == "object" && "calendarId" in e && t.calendar === void 0 && (t = {
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
d(Ei, "FluentDateTime");
let Lt = Ei;
const ua = 100, vl = "⁨", yl = "⁩";
function Pl(l, e, t) {
  if (t === e || t instanceof fe && e instanceof fe && t.value === e.value)
    return !0;
  if (e instanceof fe && typeof t == "string") {
    let i = l.memoizeIntlObject(Intl.PluralRules, e.opts).select(e.value);
    if (t === i)
      return !0;
  }
  return !1;
}
d(Pl, "match");
function fa(l, e, t) {
  return e[t] ? ai(l, e[t].value) : (l.reportError(new RangeError("No default")), new $());
}
d(fa, "getDefault");
function bs(l, e) {
  const t = [], i = /* @__PURE__ */ Object.create(null);
  for (const n of e)
    n.type === "narg" ? i[n.name] = xi(l, n.value) : t.push(xi(l, n));
  return {
    positional: t,
    named: i
  };
}
d(bs, "getArguments");
function xi(l, e) {
  switch (e.type) {
    case "str":
      return e.value;
    case "num":
      return new fe(e.value, {
        minimumFractionDigits: e.precision
      });
    case "var":
      return xl(l, e);
    case "mesg":
      return _l(l, e);
    case "term":
      return Sl(l, e);
    case "func":
      return Cl(l, e);
    case "select":
      return Il(l, e);
    default:
      return new $();
  }
}
d(xi, "resolveExpression");
function xl(l, {
  name: e
}) {
  let t;
  if (l.params)
    if (Object.prototype.hasOwnProperty.call(l.params, e))
      t = l.params[e];
    else
      return new $(`$${e}`);
  else if (l.args && Object.prototype.hasOwnProperty.call(l.args, e))
    t = l.args[e];
  else
    return l.reportError(new ReferenceError(`Unknown variable: $${e}`)), new $(`$${e}`);
  if (t instanceof lt)
    return t;
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return new fe(t);
    case "object":
      if (Lt.supportsValue(t))
        return new Lt(t);
    default:
      return l.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof t}`)), new $(`$${e}`);
  }
}
d(xl, "resolveVariableReference");
function _l(l, {
  name: e,
  attr: t
}) {
  const i = l.bundle._messages.get(e);
  if (!i)
    return l.reportError(new ReferenceError(`Unknown message: ${e}`)), new $(e);
  if (t) {
    const n = i.attributes[t];
    return n ? ai(l, n) : (l.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new $(`${e}.${t}`));
  }
  return i.value ? ai(l, i.value) : (l.reportError(new ReferenceError(`No value: ${e}`)), new $(e));
}
d(_l, "resolveMessageReference");
function Sl(l, {
  name: e,
  attr: t,
  args: i
}) {
  const n = `-${e}`, s = l.bundle._terms.get(n);
  if (!s)
    return l.reportError(new ReferenceError(`Unknown term: ${n}`)), new $(n);
  if (t) {
    const o = s.attributes[t];
    if (o) {
      l.params = bs(l, i).named;
      const h = ai(l, o);
      return l.params = null, h;
    }
    return l.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new $(`${n}.${t}`);
  }
  l.params = bs(l, i).named;
  const a = ai(l, s.value);
  return l.params = null, a;
}
d(Sl, "resolveTermReference");
function Cl(l, {
  name: e,
  args: t
}) {
  let i = l.bundle._functions[e];
  if (!i)
    return l.reportError(new ReferenceError(`Unknown function: ${e}()`)), new $(`${e}()`);
  if (typeof i != "function")
    return l.reportError(new TypeError(`Function ${e}() is not callable`)), new $(`${e}()`);
  try {
    let n = bs(l, t);
    return i(n.positional, n.named);
  } catch (n) {
    return l.reportError(n), new $(`${e}()`);
  }
}
d(Cl, "resolveFunctionReference");
function Il(l, {
  selector: e,
  variants: t,
  star: i
}) {
  let n = xi(l, e);
  if (n instanceof $)
    return fa(l, t, i);
  for (const s of t) {
    const a = xi(l, s.key);
    if (Pl(l, n, a))
      return ai(l, s.value);
  }
  return fa(l, t, i);
}
d(Il, "resolveSelectExpression");
function Ga(l, e) {
  if (l.dirty.has(e))
    return l.reportError(new RangeError("Cyclic reference")), new $();
  l.dirty.add(e);
  const t = [], i = l.bundle._useIsolating && e.length > 1;
  for (const n of e) {
    if (typeof n == "string") {
      t.push(l.bundle._transform(n));
      continue;
    }
    if (l.placeables++, l.placeables > ua)
      throw l.dirty.delete(e), new RangeError(`Too many placeables expanded: ${l.placeables}, max allowed is ${ua}`);
    i && t.push(vl), t.push(xi(l, n).toString(l)), i && t.push(yl);
  }
  return l.dirty.delete(e), t.join("");
}
d(Ga, "resolveComplexPattern");
function ai(l, e) {
  return typeof e == "string" ? l.bundle._transform(e) : Ga(l, e);
}
d(ai, "resolvePattern");
const _r = class _r {
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
d(_r, "Scope");
let ws = _r;
function Es(l, e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [i, n] of Object.entries(l))
    e.includes(i) && (t[i] = n.valueOf());
  return t;
}
d(Es, "values");
const ga = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
function Rl(l, e) {
  let t = l[0];
  if (t instanceof $)
    return new $(`NUMBER(${t.valueOf()})`);
  if (t instanceof fe)
    return new fe(t.valueOf(), {
      ...t.opts,
      ...Es(e, ga)
    });
  if (t instanceof Lt)
    return new fe(t.toNumber(), {
      ...Es(e, ga)
    });
  throw new TypeError("Invalid argument to NUMBER");
}
d(Rl, "NUMBER");
const Al = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
function Tl(l, e) {
  let t = l[0];
  if (t instanceof $)
    return new $(`DATETIME(${t.valueOf()})`);
  if (t instanceof Lt || t instanceof fe)
    return new Lt(t, Es(e, Al));
  throw new TypeError("Invalid argument to DATETIME");
}
d(Tl, "DATETIME");
const pa = /* @__PURE__ */ new Map();
function Ll(l) {
  const e = Array.isArray(l) ? l.join(" ") : l;
  let t = pa.get(e);
  return t === void 0 && (t = /* @__PURE__ */ new Map(), pa.set(e, t)), t;
}
d(Ll, "getMemoizerForLocale");
const Sr = class Sr {
  constructor(e, {
    functions: t,
    useIsolating: i = !0,
    transform: n = /* @__PURE__ */ d((s) => s, "transform")
  } = {}) {
    this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
      NUMBER: Rl,
      DATETIME: Tl,
      ...t
    }, this._useIsolating = i, this._transform = n, this._intls = Ll(e);
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
    let n = new ws(this, i, t);
    try {
      return Ga(n, e).toString(n);
    } catch (s) {
      if (n.errors && s instanceof Error)
        return n.errors.push(s), new $().toString(n);
      throw s;
    }
  }
};
d(Sr, "FluentBundle");
let vs = Sr;
const es = /^(-?[a-zA-Z][\w-]*) *= */gm, ma = /\.([a-zA-Z][\w-]*) *= */y, Nl = /\*?\[/y, ts = /(-?[0-9]+(?:\.([0-9]+))?)/y, Ml = /([a-zA-Z][\w-]*)/y, ba = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y, kl = /^[A-Z][A-Z0-9_-]*$/, mn = /([^{}\n\r]+)/y, Dl = /([^\\"\n\r]*)/y, wa = /\\([\\"])/y, Ea = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y, jl = /^\n+/, va = / +$/, Ol = / *\r?\n/g, Fl = /( *)$/, Vl = /{\s*/y, ya = /\s*}/y, Ul = /\[\s*/y, Bl = /\s*] */y, Hl = /\s*\(\s*/y, $l = /\s*->\s*/y, Wl = /\s*:\s*/y, zl = /\s*,?\s*/y, Gl = /\s+/y, Cr = class Cr {
  constructor(e) {
    this.body = [], es.lastIndex = 0;
    let t = 0;
    for (; ; ) {
      let v = es.exec(e);
      if (v === null)
        break;
      t = es.lastIndex;
      try {
        this.body.push(h(v[1]));
      } catch (S) {
        if (S instanceof SyntaxError)
          continue;
        throw S;
      }
    }
    function i(v) {
      return v.lastIndex = t, v.test(e);
    }
    d(i, "test");
    function n(v, S) {
      if (e[t] === v)
        return t++, !0;
      if (S)
        throw new S(`Expected ${v}`);
      return !1;
    }
    d(n, "consumeChar");
    function s(v, S) {
      if (i(v))
        return t = v.lastIndex, !0;
      if (S)
        throw new S(`Expected ${v.toString()}`);
      return !1;
    }
    d(s, "consumeToken");
    function a(v) {
      v.lastIndex = t;
      let S = v.exec(e);
      if (S === null)
        throw new SyntaxError(`Expected ${v.toString()}`);
      return t = v.lastIndex, S;
    }
    d(a, "match");
    function o(v) {
      return a(v)[1];
    }
    d(o, "match1");
    function h(v) {
      let S = w(), V = c();
      if (S === null && Object.keys(V).length === 0)
        throw new SyntaxError("Expected message value or attributes");
      return {
        id: v,
        value: S,
        attributes: V
      };
    }
    d(h, "parseMessage");
    function c() {
      let v = /* @__PURE__ */ Object.create(null);
      for (; i(ma); ) {
        let S = o(ma), V = w();
        if (V === null)
          throw new SyntaxError("Expected attribute value");
        v[S] = V;
      }
      return v;
    }
    d(c, "parseAttributes");
    function w() {
      let v;
      if (i(mn) && (v = o(mn)), e[t] === "{" || e[t] === "}")
        return m(v ? [v] : [], 1 / 0);
      let S = k();
      return S ? v ? m([v, S], S.length) : (S.value = j(S.value, jl), m([S], S.length)) : v ? j(v, va) : null;
    }
    d(w, "parsePattern");
    function m(v = [], S) {
      for (; ; ) {
        if (i(mn)) {
          v.push(o(mn));
          continue;
        }
        if (e[t] === "{") {
          v.push(g());
          continue;
        }
        if (e[t] === "}")
          throw new SyntaxError("Unbalanced closing brace");
        let B = k();
        if (B) {
          v.push(B), S = Math.min(S, B.length);
          continue;
        }
        break;
      }
      let V = v.length - 1, H = v[V];
      typeof H == "string" && (v[V] = j(H, va));
      let U = [];
      for (let B of v)
        B instanceof Mn && (B = B.value.slice(0, B.value.length - S)), B && U.push(B);
      return U;
    }
    d(m, "parsePatternElements");
    function g() {
      s(Vl, SyntaxError);
      let v = E();
      if (s(ya))
        return v;
      if (s($l)) {
        let S = I();
        return s(ya, SyntaxError), {
          type: "select",
          selector: v,
          ...S
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    d(g, "parsePlaceable");
    function E() {
      if (e[t] === "{")
        return g();
      if (i(ba)) {
        let [, v, S, V = null] = a(ba);
        if (v === "$")
          return {
            type: "var",
            name: S
          };
        if (s(Hl)) {
          let H = y();
          if (v === "-")
            return {
              type: "term",
              name: S,
              attr: V,
              args: H
            };
          if (kl.test(S))
            return {
              type: "func",
              name: S,
              args: H
            };
          throw new SyntaxError("Function names must be all upper-case");
        }
        return v === "-" ? {
          type: "term",
          name: S,
          attr: V,
          args: []
        } : {
          type: "mesg",
          name: S,
          attr: V
        };
      }
      return A();
    }
    d(E, "parseInlineExpression");
    function y() {
      let v = [];
      for (; ; ) {
        switch (e[t]) {
          case ")":
            return t++, v;
          case void 0:
            throw new SyntaxError("Unclosed argument list");
        }
        v.push(R()), s(zl);
      }
    }
    d(y, "parseArguments");
    function R() {
      let v = E();
      return v.type !== "mesg" ? v : s(Wl) ? {
        type: "narg",
        name: v.name,
        value: A()
      } : v;
    }
    d(R, "parseArgument");
    function I() {
      let v = [], S = 0, V;
      for (; i(Nl); ) {
        n("*") && (V = S);
        let H = N(), U = w();
        if (U === null)
          throw new SyntaxError("Expected variant value");
        v[S++] = {
          key: H,
          value: U
        };
      }
      if (S === 0)
        return null;
      if (V === void 0)
        throw new SyntaxError("Expected default variant");
      return {
        variants: v,
        star: V
      };
    }
    d(I, "parseVariants");
    function N() {
      s(Ul, SyntaxError);
      let v;
      return i(ts) ? v = _() : v = {
        type: "str",
        value: o(Ml)
      }, s(Bl, SyntaxError), v;
    }
    d(N, "parseVariantKey");
    function A() {
      if (i(ts))
        return _();
      if (e[t] === '"')
        return P();
      throw new SyntaxError("Invalid expression");
    }
    d(A, "parseLiteral");
    function _() {
      let [, v, S = ""] = a(ts), V = S.length;
      return {
        type: "num",
        value: parseFloat(v),
        precision: V
      };
    }
    d(_, "parseNumberLiteral");
    function P() {
      n('"', SyntaxError);
      let v = "";
      for (; ; ) {
        if (v += o(Dl), e[t] === "\\") {
          v += M();
          continue;
        }
        if (n('"'))
          return {
            type: "str",
            value: v
          };
        throw new SyntaxError("Unclosed string literal");
      }
    }
    d(P, "parseStringLiteral");
    function M() {
      if (i(wa))
        return o(wa);
      if (i(Ea)) {
        let [, v, S] = a(Ea), V = parseInt(v || S, 16);
        return V <= 55295 || 57344 <= V ? String.fromCodePoint(V) : "�";
      }
      throw new SyntaxError("Unknown escape sequence");
    }
    d(M, "parseEscapeSequence");
    function k() {
      let v = t;
      switch (s(Gl), e[t]) {
        case ".":
        case "[":
        case "*":
        case "}":
        case void 0:
          return !1;
        case "{":
          return O(e.slice(v, t));
      }
      return e[t - 1] === " " ? O(e.slice(v, t)) : !1;
    }
    d(k, "parseIndent");
    function j(v, S) {
      return v.replace(S, "");
    }
    d(j, "trim");
    function O(v) {
      let S = v.replace(Ol, `
`), V = Fl.exec(v)[1].length;
      return new Mn(S, V);
    }
    d(O, "makeIndent");
  }
};
d(Cr, "FluentResource");
let ys = Cr;
const Ir = class Ir {
  constructor(e, t) {
    this.value = e, this.length = t;
  }
};
d(Ir, "Indent");
let Mn = Ir;
const Xl = /<|&#?\w+;/, Kl = {
  "http://www.w3.org/1999/xhtml": ["em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "bdi", "bdo", "span", "br", "wbr"]
}, Yl = {
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
function Zl(l, e) {
  const {
    value: t
  } = e;
  if (typeof t == "string")
    if (l.localName === "title" && l.namespaceURI === "http://www.w3.org/1999/xhtml")
      l.textContent = t;
    else if (!Xl.test(t))
      l.textContent = t;
    else {
      const i = l.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "template");
      i.innerHTML = t, Ql(i.content, l);
    }
  Xa(e, l);
}
d(Zl, "translateElement");
function Ql(l, e) {
  for (const t of l.childNodes)
    if (t.nodeType !== t.TEXT_NODE) {
      if (t.hasAttribute("data-l10n-name")) {
        const i = ql(e, t);
        l.replaceChild(i, t);
        continue;
      }
      if (td(t)) {
        const i = ed(t);
        l.replaceChild(i, t);
        continue;
      }
      console.warn(`An element of forbidden type "${t.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`), l.replaceChild(Ps(t), t);
    }
  e.textContent = "", e.appendChild(l);
}
d(Ql, "overlayChildNodes");
function Jl(l, e) {
  if (!l)
    return !1;
  for (let t of l)
    if (t.name === e)
      return !0;
  return !1;
}
d(Jl, "hasAttribute");
function Xa(l, e) {
  const t = e.hasAttribute("data-l10n-attrs") ? e.getAttribute("data-l10n-attrs").split(",").map((i) => i.trim()) : null;
  for (const i of Array.from(e.attributes))
    Pa(i.name, e, t) && !Jl(l.attributes, i.name) && e.removeAttribute(i.name);
  if (l.attributes)
    for (const i of Array.from(l.attributes))
      Pa(i.name, e, t) && e.getAttribute(i.name) !== i.value && e.setAttribute(i.name, i.value);
}
d(Xa, "overlayAttributes");
function ql(l, e) {
  const t = e.getAttribute("data-l10n-name"), i = l.querySelector(`[data-l10n-name="${t}"]`);
  if (!i)
    return console.warn(`An element named "${t}" wasn't found in the source.`), Ps(e);
  if (i.localName !== e.localName)
    return console.warn(`An element named "${t}" was found in the translation but its type ${e.localName} didn't match the element found in the source (${i.localName}).`), Ps(e);
  l.removeChild(i);
  const n = i.cloneNode(!1);
  return Ka(e, n);
}
d(ql, "getNodeForNamedElement");
function ed(l) {
  const e = l.ownerDocument.createElement(l.localName);
  return Ka(l, e);
}
d(ed, "createSanitizedElement");
function Ps(l) {
  return l.ownerDocument.createTextNode(l.textContent);
}
d(Ps, "createTextNodeFromTextContent");
function td(l) {
  const e = Kl[l.namespaceURI];
  return e && e.includes(l.localName);
}
d(td, "isElementAllowed");
function Pa(l, e, t = null) {
  if (t && t.includes(l))
    return !0;
  const i = Yl[e.namespaceURI];
  if (!i)
    return !1;
  const n = l.toLowerCase(), s = e.localName;
  if (i.global.includes(n))
    return !0;
  if (!i[s])
    return !1;
  if (i[s].includes(n))
    return !0;
  if (e.namespaceURI === "http://www.w3.org/1999/xhtml" && s === "input" && n === "value") {
    const a = e.type.toLowerCase();
    if (a === "submit" || a === "button" || a === "reset")
      return !0;
  }
  return !1;
}
d(Pa, "isAttrNameLocalizable");
function Ka(l, e) {
  return e.textContent = l.textContent, Xa(l, e), e;
}
d(Ka, "shallowPopulateUsing");
const Rr = class Rr extends Array {
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
};
d(Rr, "CachedIterable");
let xs = Rr;
const Ar = class Ar extends xs {
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
d(Ar, "CachedAsyncIterable");
let _s = Ar;
const Tr = class Tr {
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
      const a = sd(t, s, e, i);
      if (a.size === 0)
        break;
      if (typeof console < "u") {
        const o = s.locales[0], h = Array.from(a).join(", ");
        console.warn(`[fluent] Missing translations in ${o}: ${h}`);
      }
    }
    return !n && typeof console < "u" && console.warn(`[fluent] Request for keys failed because no resource bundles got generated.
  keys: ${JSON.stringify(e)}.
  resourceIds: ${JSON.stringify(this.resourceIds)}.`), i;
  }
  formatMessages(e) {
    return this.formatWithFallback(e, nd);
  }
  formatValues(e) {
    return this.formatWithFallback(e, id);
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
    this.bundles = _s.from(this.generateBundles(this.resourceIds)), e && this.bundles.touchNext(2);
  }
};
d(Tr, "Localization");
let Ss = Tr;
function id(l, e, t, i) {
  return t.value ? l.formatPattern(t.value, i, e) : null;
}
d(id, "valueFromBundle");
function nd(l, e, t, i) {
  const n = {
    value: null,
    attributes: null
  };
  t.value && (n.value = l.formatPattern(t.value, i, e));
  let s = Object.keys(t.attributes);
  if (s.length > 0) {
    n.attributes = new Array(s.length);
    for (let [a, o] of s.entries()) {
      let h = l.formatPattern(t.attributes[o], i, e);
      n.attributes[a] = {
        name: o,
        value: h
      };
    }
  }
  return n;
}
d(nd, "messageFromBundle");
function sd(l, e, t, i) {
  const n = [], s = /* @__PURE__ */ new Set();
  return t.forEach(({
    id: a,
    args: o
  }, h) => {
    if (i[h] !== void 0)
      return;
    let c = e.getMessage(a);
    if (c) {
      if (n.length = 0, i[h] = l(e, n, c, o), n.length > 0 && typeof console < "u") {
        const w = e.locales[0], m = n.join(", ");
        console.warn(`[fluent][resolver] errors in ${w}/${a}: ${m}.`);
      }
    } else
      s.add(a);
  }), s;
}
d(sd, "keysFromBundle");
const ft = "data-l10n-id", hi = "data-l10n-args", rd = `[${ft}]`, Lr = class Lr extends Ss {
  constructor(e, t) {
    super(e, t), this.roots = /* @__PURE__ */ new Set(), this.pendingrAF = null, this.pendingElements = /* @__PURE__ */ new Set(), this.windowElement = null, this.mutationObserver = null, this.observerConfig = {
      attributes: !0,
      characterData: !1,
      childList: !0,
      subtree: !0,
      attributeFilter: [ft, hi]
    };
  }
  onChange(e = !1) {
    super.onChange(e), this.roots && this.translateRoots();
  }
  setAttributes(e, t, i) {
    return e.setAttribute(ft, t), i ? e.setAttribute(hi, JSON.stringify(i)) : e.removeAttribute(hi), e;
  }
  getAttributes(e) {
    return {
      id: e.getAttribute(ft),
      args: JSON.parse(e.getAttribute(hi) || null)
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
              else i.hasAttribute(ft) && this.pendingElements.add(i);
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
      t[i] !== void 0 && Zl(e[i], t[i]);
    this.resumeObserving();
  }
  getTranslatables(e) {
    const t = Array.from(e.querySelectorAll(rd));
    return typeof e.hasAttribute == "function" && e.hasAttribute(ft) && t.push(e), t;
  }
  getKeysForElement(e) {
    return {
      id: e.getAttribute(ft),
      args: JSON.parse(e.getAttribute(hi) || null)
    };
  }
};
d(Lr, "DOMLocalization");
let Cs = Lr;
var Ai, Xe, Ut, q, li, Ya, Za;
const kt = class kt {
  constructor({
    lang: e,
    isRTL: t
  }, i = null) {
    p(this, Ai);
    p(this, Xe);
    p(this, Ut);
    p(this, q);
    var n, s;
    u(this, Ut, f(n = kt, li, Ya).call(n, e)), u(this, q, i), u(this, Ai, t ?? f(s = kt, li, Za).call(s, r(this, Ut)) ? "rtl" : "ltr");
  }
  _setL10n(e) {
    u(this, q, e);
  }
  getLanguage() {
    return r(this, Ut);
  }
  getDirection() {
    return r(this, Ai);
  }
  async get(e, t = null, i) {
    return Array.isArray(e) ? (e = e.map((a) => ({
      id: a
    })), (await r(this, q).formatMessages(e)).map((a) => a.value)) : (await r(this, q).formatMessages([{
      id: e,
      args: t
    }]))[0]?.value || i;
  }
  async translate(e) {
    (r(this, Xe) || u(this, Xe, /* @__PURE__ */ new Set())).add(e);
    try {
      r(this, q).connectRoot(e), await r(this, q).translateRoots();
    } catch {
    }
  }
  async translateOnce(e) {
    try {
      await r(this, q).translateElements([e]);
    } catch (t) {
      console.error("translateOnce:", t);
    }
  }
  async destroy() {
    if (r(this, Xe)) {
      for (const e of r(this, Xe))
        r(this, q).disconnectRoot(e);
      r(this, Xe).clear(), u(this, Xe, null);
    }
    r(this, q).pauseObserving();
  }
  pause() {
    r(this, q).pauseObserving();
  }
  resume() {
    r(this, q).resumeObserving();
  }
};
Ai = new WeakMap(), Xe = new WeakMap(), Ut = new WeakMap(), q = new WeakMap(), li = new WeakSet(), Ya = /* @__PURE__ */ d(function(e) {
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
}, "#fixupLangCode"), Za = /* @__PURE__ */ d(function(e) {
  const t = e.split("-", 1)[0];
  return ["ar", "he", "fa", "ps", "ur"].includes(t);
}, "#isRTL"), p(kt, li), d(kt, "L10n");
let Is = kt;
function ad() {
  const {
    isAndroid: l,
    isLinux: e,
    isMac: t,
    isWindows: i
  } = La.platform;
  return e ? "linux" : i ? "windows" : t ? "macos" : l ? "android" : "other";
}
d(ad, "PLATFORM");
function xa(l, e) {
  const t = new ys(e), i = new vs(l, {
    functions: {
      PLATFORM: ad
    }
  }), n = i.addResource(t);
  return n.length && console.error("L10n errors", n), i;
}
d(xa, "createBundle");
var te, Qa, Ja, qa, eo, Rs;
const He = class He extends Is {
  constructor(e) {
    super({
      lang: e
    });
    const t = e ? f(He, te, Qa).bind(He, "en-us", this.getLanguage()) : f(He, te, eo).bind(He, this.getLanguage());
    this._setL10n(new Cs([], t));
  }
};
te = new WeakSet(), Qa = /* @__PURE__ */ d(async function* (e, t) {
  const {
    baseURL: i,
    paths: n
  } = await f(this, te, qa).call(this), s = [t];
  if (e !== t) {
    const o = t.split("-", 1)[0];
    o !== t && s.push(o), s.push(e);
  }
  const a = s.map((o) => [o, f(this, te, Ja).call(this, o, i, n)]);
  for (const [o, h] of a) {
    const c = await h;
    c ? yield c : o === "en-us" && (yield f(this, te, Rs).call(this, o));
  }
}, "#generateBundles"), Ja = /* @__PURE__ */ d(async function(e, t, i) {
  const n = i[e];
  if (!n)
    return null;
  const s = new URL(n, t), a = await Jr(s, "text");
  return xa(e, a);
}, "#createBundle"), qa = /* @__PURE__ */ d(async function() {
  try {
    const {
      href: e
    } = document.querySelector('link[type="application/l10n"]'), t = await Jr(e, "json");
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
}, "#getPaths"), eo = /* @__PURE__ */ d(async function* (e) {
  yield f(this, te, Rs).call(this, e);
}, "#generateBundlesFallback"), Rs = /* @__PURE__ */ d(async function(e) {
  return xa(e, `pdfjs-previous-button =
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
pdfjs-views-manager-outlines-title1 = Document outline
    .title = Document outline (double-click to expand/collapse all items)
pdfjs-views-manager-attachments-title = Attachments
pdfjs-views-manager-layers-title1 = Layers
    .title = Layers (double-click to reset all layers to the default state)
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
pdfjs-views-manager-pages-status-export-selected-button-label = Export selected…
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
pdfjs-views-manager-status-done-button-label = Done
pdfjs-views-manager-status-close-button =
    .title = Close
pdfjs-views-manager-status-close-button-label = Close
pdfjs-views-manager-paste-button-label = Paste
pdfjs-views-manager-paste-button-before =
    .title = Paste before the first page
pdfjs-views-manager-paste-button-after =
    .title = Paste after page { $page }
pdfjs-new-badge-content = NEW`);
}, "#createBundleFallback"), p(He, te), d(He, "genericl10n_GenericL10n");
let oi = He;
const od = 1e3, ld = 50, dd = 1e3;
function is() {
  return document.location.hash;
}
d(is, "getCurrentHash");
var Ke, T, ye, Pn, xn, fi, _n, Ts, to, io, Ls, no, so;
const Nr = class Nr {
  constructor({
    linkService: e,
    eventBus: t
  }) {
    p(this, T);
    p(this, Ke, null);
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
    this._fingerprint = e, this._updateUrl = i === !0, this._initialized = !0, f(this, T, no).call(this);
    const s = window.history.state;
    if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = is(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !f(this, T, fi).call(this, s, !0) || t) {
      const {
        hash: o,
        page: h,
        rotation: c
      } = f(this, T, Ts).call(this, !0);
      if (!o || n || t) {
        f(this, T, ye).call(this, null, !0);
        return;
      }
      f(this, T, ye).call(this, {
        hash: o,
        page: h,
        rotation: c
      }, !0);
      return;
    }
    const a = s.destination;
    f(this, T, _n).call(this, a, s.uid, !0), a.rotation !== void 0 && (this._initialRotation = a.rotation), a.dest ? (this._initialBookmark = JSON.stringify(a.dest), this._destination.page = null) : a.hash ? this._initialBookmark = a.hash : a.page && (this._initialBookmark = `page=${a.page}`);
  }
  reset() {
    this._initialized && (f(this, T, Ls).call(this), this._initialized = !1, f(this, T, so).call(this)), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
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
      if (!f(this, T, xn).call(this, i) && (i !== null || this._destination)) {
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
    if (this._destination && (hd(this._destination.hash, n) || cd(this._destination.dest, t))) {
      if (this._destination.page)
        return;
      s = !0;
    }
    this._popStateInProgress && !s || (f(this, T, ye).call(this, {
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
      if (!f(this, T, xn).call(this, e)) {
        console.error(`PDFHistory.pushPage: "${e}" is not a valid page number.`);
        return;
      }
      this._destination?.page !== e && (this._popStateInProgress || (f(this, T, ye).call(this, {
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
    !this._initialized || this._popStateInProgress || f(this, T, Pn).call(this);
  }
  back() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    f(this, T, fi).call(this, e) && e.uid > 0 && window.history.back();
  }
  forward() {
    if (!this._initialized || this._popStateInProgress)
      return;
    const e = window.history.state;
    f(this, T, fi).call(this, e) && e.uid < this._maxUid && window.history.forward();
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
Ke = new WeakMap(), T = new WeakSet(), ye = /* @__PURE__ */ d(function(e, t = !1) {
  const i = t || !this._destination, n = {
    fingerprint: this._fingerprint,
    uid: i ? this._uid : this._uid + 1,
    destination: e
  };
  f(this, T, _n).call(this, e, n.uid);
  let s;
  if (this._updateUrl && e?.hash) {
    const {
      href: a,
      protocol: o
    } = document.location;
    o !== "file:" && (s = Bo(a, e.hash));
  }
  i ? window.history.replaceState(n, "", s) : window.history.pushState(n, "", s);
}, "#pushOrReplaceState"), Pn = /* @__PURE__ */ d(function(e = !1) {
  if (!this._position)
    return;
  let t = this._position;
  if (e && (t = Object.assign(/* @__PURE__ */ Object.create(null), this._position), t.temporary = !0), !this._destination) {
    f(this, T, ye).call(this, t);
    return;
  }
  if (this._destination.temporary) {
    f(this, T, ye).call(this, t, !0);
    return;
  }
  if (this._destination.hash === t.hash || !this._destination.page && this._numPositionUpdates <= ld)
    return;
  let i = !1;
  if (this._destination.page >= t.first && this._destination.page <= t.page) {
    if (this._destination.dest !== void 0 || !this._destination.first)
      return;
    i = !0;
  }
  f(this, T, ye).call(this, t, i);
}, "#tryPushCurrentPosition"), xn = /* @__PURE__ */ d(function(e) {
  return Number.isInteger(e) && e > 0 && e <= this.linkService.pagesCount;
}, "#isValidPage"), fi = /* @__PURE__ */ d(function(e, t = !1) {
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
}, "#isValidState"), _n = /* @__PURE__ */ d(function(e, t, i = !1) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), i && e?.temporary && delete e.temporary, this._destination = e, this._uid = t, this._maxUid = Math.max(this._maxUid, t), this._numPositionUpdates = 0;
}, "#updateInternalState"), Ts = /* @__PURE__ */ d(function(e = !1) {
  const t = unescape(is()).substring(1), i = Xn(t), n = i.get("nameddest") || "";
  let s = i.get("page") | 0;
  return (!f(this, T, xn).call(this, s) || e && n.length > 0) && (s = null), {
    hash: t,
    page: s,
    rotation: this.linkService.rotation
  };
}, "#parseCurrentHash"), to = /* @__PURE__ */ d(function({
  location: e
}) {
  this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
    hash: e.pdfOpenParams.substring(1),
    page: this.linkService.page,
    first: e.pageNumber,
    rotation: e.rotation
  }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
    this._popStateInProgress || f(this, T, Pn).call(this, !0), this._updateViewareaTimeout = null;
  }, dd));
}, "#updateViewarea"), io = /* @__PURE__ */ d(function({
  state: e
}) {
  const t = is(), i = this._currentHash !== t;
  if (this._currentHash = t, !e) {
    this._uid++;
    const {
      hash: s,
      page: a,
      rotation: o
    } = f(this, T, Ts).call(this);
    f(this, T, ye).call(this, {
      hash: s,
      page: a,
      rotation: o
    }, !0);
    return;
  }
  if (!f(this, T, fi).call(this, e))
    return;
  this._popStateInProgress = !0, i && (this._blockHashChange++, El({
    target: window,
    name: "hashchange",
    delay: od
  }).then(() => {
    this._blockHashChange--;
  }));
  const n = e.destination;
  f(this, T, _n).call(this, n, e.uid, !0), ka(n.rotation) && (this.linkService.rotation = n.rotation), n.dest ? this.linkService.goToDestination(n.dest) : n.hash ? this.linkService.setHash(n.hash) : n.page && (this.linkService.page = n.page), Promise.resolve().then(() => {
    this._popStateInProgress = !1;
  });
}, "#popState"), Ls = /* @__PURE__ */ d(function() {
  (!this._destination || this._destination.temporary) && f(this, T, Pn).call(this);
}, "#pageHide"), no = /* @__PURE__ */ d(function() {
  if (r(this, Ke))
    return;
  u(this, Ke, new AbortController());
  const {
    signal: e
  } = r(this, Ke);
  this.eventBus._on("updateviewarea", f(this, T, to).bind(this), {
    signal: e
  }), window.addEventListener("popstate", f(this, T, io).bind(this), {
    signal: e
  }), window.addEventListener("pagehide", f(this, T, Ls).bind(this), {
    signal: e
  });
}, "#bindEvents"), so = /* @__PURE__ */ d(function() {
  r(this, Ke)?.abort(), u(this, Ke, null);
}, "#unbindEvents"), d(Nr, "PDFHistory");
let As = Nr;
function hd(l, e) {
  return typeof l != "string" || typeof e != "string" ? !1 : l === e || Xn(l).get("nameddest") === e;
}
d(hd, "isDestHashesEqual");
function cd(l, e) {
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
  if (d(t, "isEntryEqual"), !(Array.isArray(l) && Array.isArray(e)) || l.length !== e.length)
    return !1;
  for (let i = 0, n = l.length; i < n; i++)
    if (!t(l[i], e[i]))
      return !1;
  return !0;
}
d(cd, "isDestArraysEqual");
var Ti, Li, Ni, Mi, ki, Bt;
const Mr = class Mr {
  constructor(e) {
    p(this, Ti, null);
    p(this, Li, null);
    p(this, Ni, null);
    p(this, Mi, null);
    p(this, ki, null);
    p(this, Bt);
    this.pageIndex = e.pageIndex, this.accessibilityManager = e.accessibilityManager, this.l10n = e.l10n, this.l10n ||= new oi(), this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, u(this, Bt, e.uiManager), u(this, Ti, e.annotationLayer || null), u(this, ki, e.textLayer || null), u(this, Li, e.drawLayer || null), u(this, Ni, e.onAppend || null), u(this, Mi, e.structTreeLayer || null);
  }
  updatePageIndex(e) {
    this.pageIndex = e, this.annotationEditorLayer?.updatePageIndex(e);
  }
  async render({
    viewport: e,
    intent: t = "display"
  }) {
    var a;
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
    n.className = "annotationEditorLayer", n.hidden = !0, n.dir = r(this, Bt).direction, (a = r(this, Ni)) == null || a.call(this, n), this.annotationEditorLayer = new Ro({
      uiManager: r(this, Bt),
      div: n,
      structTreeLayer: r(this, Mi),
      accessibilityManager: this.accessibilityManager,
      pageIndex: this.pageIndex,
      l10n: this.l10n,
      viewport: i,
      annotationLayer: r(this, Ti),
      textLayer: r(this, ki),
      drawLayer: r(this, Li)
    });
    const s = {
      viewport: i,
      div: n,
      annotations: null,
      intent: t
    };
    await this.annotationEditorLayer.render(s), this.show();
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
Ti = new WeakMap(), Li = new WeakMap(), Ni = new WeakMap(), Mi = new WeakMap(), ki = new WeakMap(), Bt = new WeakMap(), d(Mr, "AnnotationEditorLayerBuilder");
let Ns = Mr;
{
  var Ms = /* @__PURE__ */ new Map();
  const {
    maxTouchPoints: l,
    platform: e,
    userAgent: t
  } = navigator, i = /Android/.test(t);
  (/\b(iPad|iPhone|iPod)(?=;)/.test(t) || e === "MacIntel" && l > 1 || i) && Ms.set("maxCanvasPixels", 5242880), i && Ms.set("useSystemFonts", !1);
}
const b = {
  BROWSER: 1,
  VIEWER: 2,
  API: 4,
  WORKER: 8,
  EVENT_DISPATCH: 16,
  PREFERENCE: 128
}, ks = {
  BOOLEAN: 1,
  NUMBER: 2,
  OBJECT: 4,
  STRING: 8,
  UNDEFINED: 16
}, Fe = {
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
  enableNewBadge: {
    value: !1,
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
  imagesRightClickMinSize: {
    value: -1,
    kind: b.VIEWER + b.PREFERENCE
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
    kind: b.API + b.PREFERENCE
  },
  enableWebGPU: {
    value: !0,
    kind: b.API + b.PREFERENCE
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
    type: ks.BOOLEAN + ks.UNDEFINED
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
Fe.defaultUrl = {
  value: "compressed.tracemonkey-pldi-09.pdf",
  kind: b.VIEWER
}, Fe.sandboxBundleSrc = {
  value: "../build/pdf.sandbox.mjs",
  kind: b.VIEWER
}, Fe.enableFakeMLManager = {
  value: !0,
  kind: b.VIEWER
};
Fe.disablePreferences = {
  value: !1,
  kind: b.VIEWER
};
var Ye;
const de = class de {
  static get(e) {
    return r(this, Ye).get(e);
  }
  static getAll(e = null, t = !1) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const n in Fe) {
      const s = Fe[n];
      e && !(e & s.kind) || (i[n] = t ? s.value : r(this, Ye).get(n));
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
      const s = Fe[n], a = e[n];
      if (!s || !(typeof a == typeof s.value || ks[(typeof a).toUpperCase()] & s.type))
        continue;
      const {
        kind: o
      } = s;
      t && !(o & b.BROWSER || o & b.PREFERENCE) || (this.eventBus && o & b.EVENT_DISPATCH && (i ||= /* @__PURE__ */ new Map()).set(n, a), r(this, Ye).set(n, a));
    }
    if (i)
      for (const [n, s] of i)
        this.eventBus.dispatch(n.toLowerCase(), {
          source: this,
          value: s
        });
  }
};
Ye = new WeakMap(), d(de, "AppOptions"), Y(de, "eventBus"), p(de, Ye, /* @__PURE__ */ new Map()), (() => {
  for (const e in Fe)
    r(de, Ye).set(e, Fe[e].value);
  for (const [e, t] of Ms)
    r(de, Ye).set(e, t);
  de._hasInvokedSet = !1, de._checkDisablePreferences = () => de.get("disablePreferences") ? !0 : (de._hasInvokedSet && console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.'), !1);
})();
let wi = de;
function _a({
  width: l,
  height: e,
  left: t,
  top: i
}, n) {
  if (l === 0 || e === 0)
    return null;
  const s = n.textLayer.div.getBoundingClientRect(), a = n.getPagePoint(t - s.left, i - s.top), o = n.getPagePoint(t - s.left + l, i - s.top + e);
  return ur.normalizeRect([a[0], a[1], o[0], o[1]]);
}
d(_a, "DOMRectToPDF");
function ud(l, e) {
  const t = l.getClientRects();
  if (t.length === 1)
    return {
      rect: _a(t[0], e)
    };
  const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0], n = [];
  let s = 0;
  for (const a of t) {
    const o = _a(a, e);
    o !== null && (n[s] = n[s + 4] = o[0], n[s + 1] = n[s + 3] = o[3], n[s + 2] = n[s + 6] = o[2], n[s + 5] = n[s + 7] = o[1], ur.rectBoundingBox(...o, i), s += 8);
  }
  return {
    quadPoints: n,
    rect: i
  };
}
d(ud, "calculateLinkPosition");
function Sa(l, e) {
  let t = l;
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
    for (; !t.nextSibling && t !== l; )
      t = t.parentNode;
    t !== l && (t = t.nextSibling);
  } while (t !== l);
  throw new Error("Offset is bigger than container's contents length.");
}
d(Sa, "textPosition");
function fd({
  url: l,
  index: e,
  length: t
}, i, n) {
  const s = i._textHighlighter, [{
    begin: a,
    end: o
  }] = s._convertMatches([e], [t]), h = new Range();
  return h.setStart(...Sa(s.textDivs[a.divIdx], a.offset)), h.setEnd(...Sa(s.textDivs[o.divIdx], o.offset)), {
    id: `inferred_link_${n}`,
    unsafeUrl: l,
    url: l,
    annotationType: Aa.LINK,
    rotation: 0,
    ...ud(h, i),
    borderStyle: null
  };
}
d(fd, "createLinkAnnotation");
var Hn, Di, ji;
const Dt = class Dt {
  static findLinks(e) {
    r(this, Di) ?? u(this, Di, new RegExp("\\b(?:https?:\\/\\/|mailto:|www\\.)(?:[\\S--[\\p{P}<>]]|\\/|[\\S--[\\[\\]]]+[\\S--[\\p{P}<>]])+|(?=\\p{L})[\\S--[@\\p{Ps}\\p{Pe}<>]]+@([\\S--[[\\p{P}--\\-]<>]]+(?:\\.[\\S--[[\\p{P}--\\-]<>]]+)+)", "gmv"));
    const [t, i] = En(e, {
      ignoreDashEOL: !0
    }), n = t.matchAll(r(this, Di)), s = [];
    for (const a of n) {
      const [o, h] = a;
      let c;
      if (o.startsWith("www.") || o.startsWith("http://") || o.startsWith("https://"))
        c = o;
      else if (h) {
        const m = URL.parse(`http://${h}`)?.hostname;
        if (!m || (r(this, ji) ?? u(this, ji, /\.\d+$/), r(this, ji).test(m)))
          continue;
      }
      c ??= o.startsWith("mailto:") ? o : `mailto:${o}`;
      const w = Ta(c, null, {
        addDefaultProtocol: !0
      });
      if (w) {
        const [m, g] = Da(i, a.index, o.length);
        s.push({
          url: w.href,
          index: m,
          length: g
        });
      }
    }
    return s;
  }
  static processLinks(e) {
    return this.findLinks(e._textHighlighter.textContentItemsStr.join(`
`)).map((t) => fd(t, e, Yn(this, Hn)._++));
  }
};
Hn = new WeakMap(), Di = new WeakMap(), ji = new WeakMap(), d(Dt, "Autolinker"), p(Dt, Hn, 0), p(Dt, Di), p(Dt, ji);
let Ds = Dt;
const F = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
}, kr = class kr {
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
d(kr, "RenderableView");
let js = kr;
var Ze, Ht, $t, Se, Qe, Ce, $n, Oi, Os;
const Dr = class Dr extends js {
  constructor(t) {
    super();
    p(this, Oi);
    p(this, Ze, null);
    p(this, Ht, null);
    p(this, $t, F.INITIAL);
    p(this, Se, null);
    p(this, Qe, 0);
    p(this, Ce, null);
    Y(this, "canvas", null);
    Y(this, "div", null);
    Y(this, "enableOptimizedPartialRendering", !1);
    Y(this, "imagesRightClickMinSize", -1);
    Y(this, "eventBus", null);
    Y(this, "id", null);
    Y(this, "imageCoordinates", null);
    Y(this, "pageColors", null);
    Y(this, "recordedBBoxes", null);
    Y(this, "renderingQueue", null);
    p(this, $n, /* @__PURE__ */ d((t) => {
      var i;
      if ((i = r(this, Se)) == null || i.call(this, !1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = F.PAUSED, this.resume = () => {
          this.renderingState = F.RUNNING, t();
        };
        return;
      }
      t();
    }, "#renderContinueCallback"));
    this.eventBus = t.eventBus, this.id = t.id, this.pageColors = t.pageColors || null, this.renderingQueue = t.renderingQueue, this.enableOptimizedPartialRendering = t.enableOptimizedPartialRendering ?? !1, this.imagesRightClickMinSize = t.imagesRightClickMinSize ?? -1, this.minDurationToUpdateCanvas = t.minDurationToUpdateCanvas ?? 500;
  }
  get renderingState() {
    return r(this, $t);
  }
  set renderingState(t) {
    var i;
    if (t !== r(this, $t))
      switch (u(this, $t, t), r(this, Ze) && (clearTimeout(r(this, Ze)), u(this, Ze, null)), t) {
        case F.PAUSED:
          this.div.classList.remove("loading"), u(this, Qe, 0), (i = r(this, Se)) == null || i.call(this, !1);
          break;
        case F.RUNNING:
          this.div.classList.add("loadingIcon"), u(this, Ze, setTimeout(() => {
            this.div.classList.add("loading"), u(this, Ze, null);
          }, 0)), u(this, Qe, Date.now());
          break;
        case F.INITIAL:
        case F.FINISHED:
          this.div.classList.remove("loadingIcon", "loading"), u(this, Qe, 0);
          break;
      }
  }
  _createCanvas(t, i = !1) {
    const {
      pageColors: n
    } = this, s = !!(n?.background && n?.foreground), a = this.canvas, o = !a && !s && !i;
    let h = this.canvas = document.createElement("canvas");
    return u(this, Se, (c) => {
      if (o) {
        let w = r(this, Ce);
        if (!c && this.minDurationToUpdateCanvas > 0) {
          if (Date.now() - r(this, Qe) < this.minDurationToUpdateCanvas)
            return;
          w || (w = u(this, Ce, h), h = this.canvas = h.cloneNode(!1), t(h));
        }
        if (w) {
          h.getContext("2d", {
            alpha: !1
          }).drawImage(w, 0, 0), c ? f(this, Oi, Os).call(this) : u(this, Qe, Date.now());
          return;
        }
        t(h), u(this, Se, null);
        return;
      }
      c && (a ? (a.replaceWith(h), a.width = a.height = 0) : t(h));
    }), {
      canvas: h,
      prevCanvas: a
    };
  }
  _resetCanvas() {
    const {
      canvas: t
    } = this;
    t && (t.remove(), t.width = t.height = 0, this.canvas = null, f(this, Oi, Os).call(this));
  }
  async _drawCanvas(t, i, n) {
    var o, h;
    const s = this.renderTask = this.pdfPage.render(t);
    s.onContinue = r(this, $n), s.onError = (c) => {
      c instanceof ns && (i(), u(this, Ht, null));
    };
    let a = null;
    try {
      await s.promise, (o = r(this, Se)) == null || o.call(this, !0);
    } catch (c) {
      if (c instanceof ns)
        return;
      a = c, (h = r(this, Se)) == null || h.call(this, !0);
    } finally {
      u(this, Ht, a), s === this.renderTask && (this.renderTask = null, this.enableOptimizedPartialRendering && (this.recordedBBoxes ??= s.recordedBBoxes), this.imagesRightClickMinSize !== -1 && (this.imageCoordinates ??= this.pdfPage.imageCoordinates));
    }
    if (this.renderingState = F.FINISHED, n(s), a)
      throw a;
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
      error: r(this, Ht)
    });
  }
};
Ze = new WeakMap(), Ht = new WeakMap(), $t = new WeakMap(), Se = new WeakMap(), Qe = new WeakMap(), Ce = new WeakMap(), $n = new WeakMap(), Oi = new WeakSet(), Os = /* @__PURE__ */ d(function() {
  r(this, Ce) && (r(this, Ce).width = r(this, Ce).height = 0, u(this, Ce, null));
}, "#resetTempCanvas"), d(Dr, "BasePDFPageView");
let kn = Dr;
var pe;
const jr = class jr {
  constructor() {
    p(this, pe, null);
  }
  async render({
    intent: e = "display"
  }) {
    e !== "display" || r(this, pe) || this._cancelled || u(this, pe, new Lo());
  }
  cancel() {
    this._cancelled = !0, r(this, pe) && (r(this, pe).destroy(), u(this, pe, null));
  }
  setParent(e) {
    r(this, pe)?.setParent(e);
  }
  getDrawLayer() {
    return r(this, pe);
  }
};
pe = new WeakMap(), d(jr, "DrawLayerBuilder");
let Fs = jr;
var ne, Wn, ro;
const Or = class Or extends kn {
  constructor({
    pageView: t
  }) {
    super(t);
    p(this, Wn);
    p(this, ne, null);
    Y(this, "renderingCancelled", !1);
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
    const i = this.renderingCancelled || this.renderingState === F.RUNNING || this.renderingState === F.PAUSED;
    this.cancelRendering(), this.renderingState = F.INITIAL, this.renderingCancelled = i, t || this._resetCanvas();
  }
  update({
    visibleArea: t = null,
    underlyingViewUpdated: i = !1
  } = {}) {
    if (i) {
      this.cancelRendering(), this.renderingState = F.INITIAL;
      return;
    }
    if (!f(this, Wn, ro).call(this, t))
      return;
    const {
      viewport: n,
      maxCanvasPixels: s,
      capCanvasAreaFactor: a
    } = this.pageView, o = t.maxX - t.minX, h = t.maxY - t.minY, c = o * h * wn.pixelRatio ** 2, m = (Math.sqrt(wn.capPixels(s, a) / c) - 1) / 2;
    let g = Math.min(1, m);
    g < 0 && (g = 0);
    const E = o * g, y = h * g, R = Math.max(0, t.minX - E), I = Math.min(n.width, t.maxX + E), N = Math.max(0, t.minY - y), A = Math.min(n.height, t.maxY + y), _ = I - R, P = A - N;
    u(this, ne, {
      minX: R,
      minY: N,
      width: _,
      height: P,
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
        width: a,
        height: o
      }
    } = this.pageView, {
      width: h,
      height: c,
      minX: w,
      minY: m
    } = r(this, ne), g = w / a, E = m / o, y = (w + h) / a, R = (m + c) / o;
    return {
      ...n,
      operationsFilter(I) {
        return s.isEmpty(I) ? !1 : s.minX(I) <= y && s.maxX(I) >= g && s.minY(I) <= R && s.maxY(I) >= E;
      }
    };
  }
  async draw() {
    if (this.pageView.detailView !== this)
      return;
    const t = this.pageView.renderingState === F.FINISHED || this.renderingState === F.FINISHED;
    this.renderingState !== F.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: i,
      pdfPage: n,
      viewport: s
    } = this.pageView;
    if (!n)
      throw this.renderingState = F.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = F.RUNNING;
    const a = this.pageView._ensureCanvasWrapper(), {
      canvas: o,
      prevCanvas: h
    } = this._createCanvas((I) => {
      a.firstElementChild?.tagName === "CANVAS" ? a.firstElementChild.after(I) : a.prepend(I);
    }, t);
    o.ariaHidden = !0, this.enableOptimizedPartialRendering && (o.className = "detailView");
    const {
      width: c,
      height: w
    } = s, m = r(this, ne), {
      pixelRatio: g
    } = wn, E = [g, 0, 0, g, -m.minX * g, -m.minY * g];
    o.width = m.width * g, o.height = m.height * g;
    const {
      style: y
    } = o;
    y.width = `${m.width * 100 / c}%`, y.height = `${m.height * 100 / w}%`, y.top = `${m.minY * 100 / w}%`, y.left = `${m.minX * 100 / c}%`;
    const R = this._drawCanvas(this._getRenderingContext(o, E), () => {
      this.canvas?.remove(), this.canvas = h;
    }, () => {
      this.dispatchPageRendered(!1, !0);
    });
    return i.setAttribute("data-loaded", !0), this.dispatchPageRender(), R;
  }
};
ne = new WeakMap(), Wn = new WeakSet(), ro = /* @__PURE__ */ d(function(t) {
  if (!r(this, ne))
    return !0;
  const i = r(this, ne).minX, n = r(this, ne).minY, s = r(this, ne).width + i, a = r(this, ne).height + n;
  if (t.minX < i || t.minY < n || t.maxX > s || t.maxY > a)
    return !0;
  const {
    width: o,
    height: h,
    scale: c
  } = this.pageView.viewport;
  if (r(this, ne).scale !== c)
    return !0;
  const w = t.minX - i, m = s - t.maxX, g = t.minY - n, E = a - t.maxY, y = 0.5, R = (1 + y) / y;
  return i > 0 && m / w > R || s < o && w / m > R || n > 0 && E / g > R || a < h && g / E > R;
}, "#shouldRenderDifferentArea"), d(Or, "PDFPageDetailView");
let Vs = Or;
const Ca = {
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
}, ao = /* @__PURE__ */ new Set(["math", "merror", "mfrac", "mi", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mprescripts", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msubsup", "msup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "semantics"]), Dn = "http://www.w3.org/1998/Math/MathML", Fr = class Fr {
  static get sanitizer() {
    return vi(this, "sanitizer", La.isSanitizerSupported ? new Sanitizer({
      elements: [...ao].map((e) => ({
        name: e,
        namespace: Dn
      })),
      replaceWithChildrenElements: [{
        name: "maction",
        namespace: Dn
      }],
      attributes: ["dir", "displaystyle", "mathbackground", "mathcolor", "mathsize", "scriptlevel", "encoding", "display", "linethickness", "intent", "arg", "form", "fence", "separator", "lspace", "rspace", "stretchy", "symmetric", "maxsize", "minsize", "largeop", "movablelimits", "width", "height", "depth", "voffset", "accent", "accentunder", "columnspan", "rowspan"],
      comments: !1
    }) : null);
  }
};
d(Fr, "MathMLSanitizer");
let jn = Fr;
const gd = /^H(\d+)$/;
var Wt, he, zt, Fi, Gt, Je, qe, me, ie, Us, oo, Bs, Hs;
const Vr = class Vr {
  constructor(e, t) {
    p(this, ie);
    p(this, Wt);
    p(this, he, null);
    p(this, zt);
    p(this, Fi, /* @__PURE__ */ new Map());
    p(this, Gt);
    p(this, Je, null);
    p(this, qe, null);
    p(this, me, null);
    u(this, Wt, e.getStructTree()), u(this, Gt, t);
  }
  async render() {
    if (r(this, zt))
      return r(this, zt);
    const {
      promise: e,
      resolve: t,
      reject: i
    } = Promise.withResolvers();
    u(this, zt, e);
    try {
      u(this, he, f(this, ie, Hs).call(this, await r(this, Wt)));
    } catch (n) {
      i(n);
    }
    return u(this, Wt, null), r(this, he)?.classList.add("structTree"), t(r(this, he)), e;
  }
  async getAriaAttributes(e) {
    try {
      return await this.render(), r(this, Fi).get(e);
    } catch {
    }
    return null;
  }
  hide() {
    r(this, he) && !r(this, he).hidden && (r(this, he).hidden = !0);
  }
  show() {
    r(this, he)?.hidden && (r(this, he).hidden = !1);
  }
  updateTextLayer() {
    if (r(this, Je)) {
      for (const [e, t] of r(this, Je))
        document.getElementById(e)?.append(t);
      r(this, Je).clear(), u(this, Je, null);
    }
    if (r(this, qe)) {
      for (const e of r(this, qe)) {
        const t = document.getElementById(e);
        t && (t.ariaHidden = !0);
      }
      r(this, qe).length = 0, u(this, qe, null);
    }
    if (r(this, me)) {
      for (let e = 0, t = r(this, me).length; e < t; e += 2) {
        const i = r(this, me)[e], n = r(this, me)[e + 1];
        let s = "";
        for (const a of n) {
          const o = document.getElementById(a);
          o && (s += o.textContent.trim() || "", o.ariaHidden = "true");
        }
        s && (i.textContent = s);
      }
      r(this, me).length = 0, u(this, me, null);
    }
  }
};
Wt = new WeakMap(), he = new WeakMap(), zt = new WeakMap(), Fi = new WeakMap(), Gt = new WeakMap(), Je = new WeakMap(), qe = new WeakMap(), me = new WeakMap(), ie = new WeakSet(), Us = /* @__PURE__ */ d(function(e, t) {
  const {
    alt: i,
    id: n,
    lang: s
  } = e;
  if (i !== void 0) {
    let a = !1;
    const o = bi(i);
    for (const h of e.children)
      h.type === "annotation" && (r(this, Fi).getOrInsertComputed(h.id, jo).set("aria-label", o), a = !0);
    a || t.setAttribute("aria-label", o);
  }
  n !== void 0 && t.setAttribute("aria-owns", n), s !== void 0 && t.setAttribute("lang", bi(s, !0));
}, "#setAttributes"), oo = /* @__PURE__ */ d(function(e, t) {
  const {
    alt: i,
    bbox: n,
    children: s
  } = e, a = s?.[0];
  if (!r(this, Gt) || !i || !n || a?.type !== "content")
    return !1;
  const {
    id: o
  } = a;
  if (!o)
    return !1;
  t.setAttribute("aria-owns", o);
  const h = document.createElement("span");
  (r(this, Je) || u(this, Je, /* @__PURE__ */ new Map())).set(o, h), h.setAttribute("role", "img"), h.setAttribute("aria-label", bi(i));
  const {
    pageHeight: c,
    pageX: w,
    pageY: m
  } = r(this, Gt), g = "calc(var(--total-scale-factor) *", {
    style: E
  } = h;
  return E.width = `${g}${n[2] - n[0]}px)`, E.height = `${g}${n[3] - n[1]}px)`, E.left = `${g}${n[0] - w}px)`, E.top = `${g}${c - n[3] + m}px)`, !0;
}, "#addImageInTextLayer"), Bs = /* @__PURE__ */ d(function(e, t) {
  if (e) {
    "id" in e && t.push(e.id);
    for (const i of e.children || [])
      f(this, ie, Bs).call(this, i, t);
  }
}, "#collectIds"), Hs = /* @__PURE__ */ d(function(e, t = []) {
  if (!e)
    return null;
  let i, n = !0;
  if ("role" in e) {
    const {
      role: s
    } = e;
    if (ao.has(s)) {
      i = document.createElementNS(Dn, s);
      const o = [];
      (r(this, me) || u(this, me, [])).push(i, o);
      for (const {
        type: h,
        id: c
      } of e.children || [])
        h === "content" && c && o.push(c);
    } else
      i = document.createElement("span");
    const a = s.match(gd);
    if (a ? (i.setAttribute("role", "heading"), i.setAttribute("aria-level", a[1])) : Ca[s] && i.setAttribute("role", s === "TH" && t.at(-1)?.role === "TR" && t.at(-2)?.role === "TBody" ? "rowheader" : Ca[s]), s === "Figure" && f(this, ie, oo).call(this, e, i))
      return i;
    s === "Formula" && (e.mathML && jn.sanitizer && (n = !1, i.setHTML(e.mathML, {
      sanitizer: jn.sanitizer
    }), f(this, ie, Bs).call(this, e, r(this, qe) || u(this, qe, [])), delete e.alt), !e.mathML && e.children.length === 1 && e.children[0].role !== "math" && (i = document.createElementNS(Dn, "math"), delete e.alt));
  }
  if (i ||= document.createElement("span"), f(this, ie, Us).call(this, e, i), e.children) {
    if (e.children.length === 1 && "id" in e.children[0])
      f(this, ie, Us).call(this, e.children[0], i);
    else if (n) {
      t.push(e);
      for (const s of e.children)
        i.append(f(this, ie, Hs).call(this, s, t));
      t.pop();
    }
  }
  return i;
}, "#walk"), d(Vr, "StructTreeLayerBuilder");
let On = Vr;
var Ie, se, Re, et, Xt, Sn, Vi, Ws;
const gt = class gt {
  constructor() {
    p(this, Vi);
    p(this, Ie, !1);
    p(this, se, null);
    p(this, Re, /* @__PURE__ */ new Map());
    p(this, et, /* @__PURE__ */ new Map());
  }
  setTextMapping(e) {
    u(this, se, e);
  }
  enable() {
    if (r(this, Ie))
      throw new Error("TextAccessibilityManager is already enabled.");
    if (!r(this, se))
      throw new Error("Text divs and strings have not been set.");
    if (u(this, Ie, !0), u(this, se, r(this, se).slice()), r(this, se).sort(f(gt, Xt, Sn)), r(this, Re).size > 0) {
      const e = r(this, se);
      for (const [t, i] of r(this, Re)) {
        if (!document.getElementById(t)) {
          r(this, Re).delete(t);
          continue;
        }
        f(this, Vi, Ws).call(this, t, e[i]);
      }
    }
    for (const [e, t] of r(this, et))
      this.addPointerInTextLayer(e, t);
    r(this, et).clear();
  }
  disable() {
    r(this, Ie) && (r(this, et).clear(), u(this, se, null), u(this, Ie, !1));
  }
  removePointerInTextLayer(e) {
    if (!r(this, Ie)) {
      r(this, et).delete(e);
      return;
    }
    const t = r(this, se);
    if (!t || t.length === 0)
      return;
    const {
      id: i
    } = e, n = r(this, Re).get(i);
    if (n === void 0)
      return;
    const s = t[n];
    r(this, Re).delete(i);
    let a = s.getAttribute("aria-owns");
    a?.includes(i) && (a = a.split(" ").filter((o) => o !== i).join(" "), a ? s.setAttribute("aria-owns", a) : (s.removeAttribute("aria-owns"), s.setAttribute("role", "presentation")));
  }
  addPointerInTextLayer(e, t) {
    const {
      id: i
    } = e;
    if (!i)
      return null;
    if (!r(this, Ie))
      return r(this, et).set(e, t), null;
    t && this.removePointerInTextLayer(e);
    const n = r(this, se);
    if (!n || n.length === 0)
      return null;
    const s = yi(n, (c) => {
      var w;
      return f(w = gt, Xt, Sn).call(w, e, c) < 0;
    }), a = Math.max(0, s - 1), o = n[a];
    f(this, Vi, Ws).call(this, i, o), r(this, Re).set(i, a);
    const h = o.parentNode;
    return h?.classList.contains("markedContent") ? h.id : null;
  }
  moveElementInDOM(e, t, i, n) {
    const s = this.addPointerInTextLayer(i, n);
    if (!e.hasChildNodes())
      return e.append(t), s;
    const a = Array.from(e.childNodes).filter((h) => h !== t);
    if (a.length === 0)
      return s;
    const o = yi(a, (h) => {
      var c;
      return f(c = gt, Xt, Sn).call(c, t, h) < 0;
    });
    return o === 0 ? a[0].before(t) : a[o - 1].after(t), s;
  }
};
Ie = new WeakMap(), se = new WeakMap(), Re = new WeakMap(), et = new WeakMap(), Xt = new WeakSet(), Sn = /* @__PURE__ */ d(function(e, t) {
  const i = e.getBoundingClientRect(), n = t.getBoundingClientRect();
  if (i.width === 0 && i.height === 0)
    return 1;
  if (n.width === 0 && n.height === 0)
    return -1;
  const s = i.y, a = i.y + i.height, o = i.y + i.height / 2, h = n.y, c = n.y + n.height, w = n.y + n.height / 2;
  if (o <= h && w >= a)
    return -1;
  if (w <= s && o >= c)
    return 1;
  const m = i.x + i.width / 2, g = n.x + n.width / 2;
  return m - g;
}, "#compareElementPositions"), Vi = new WeakSet(), Ws = /* @__PURE__ */ d(function(e, t) {
  const i = t.getAttribute("aria-owns");
  i?.includes(e) || t.setAttribute("aria-owns", i ? `${i} ${e}` : e), t.removeAttribute("role");
}, "#addIdToAriaOwns"), p(gt, Xt), d(gt, "TextAccessibilityManager");
let $s = gt;
var tt;
const Ur = class Ur {
  constructor({
    findController: e,
    eventBus: t,
    pageIndex: i
  }) {
    p(this, tt, null);
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
    this.enabled = !0, r(this, tt) || (u(this, tt, new AbortController()), this.eventBus._on("updatetextlayermatches", (e) => {
      (e.pageIndex === this.pageIdx || e.pageIndex === -1) && this._updateMatches();
    }, {
      signal: r(this, tt).signal
    })), this._updateMatches();
  }
  disable() {
    this.enabled && (this.enabled = !1, r(this, tt)?.abort(), u(this, tt, null), this._updateMatches(!0));
  }
  _convertMatches(e, t) {
    if (!e)
      return [];
    const {
      textContentItemsStr: i
    } = this;
    let n = 0, s = 0;
    const a = i.length - 1, o = [];
    for (let h = 0, c = e.length; h < c; h++) {
      let w = e[h];
      for (; n !== a && w >= s + i[n].length; )
        s += i[n].length, n++;
      n === i.length && console.error("Could not find a matching mapping");
      const m = {
        begin: {
          divIdx: n,
          offset: w - s
        }
      };
      for (w += t[h]; n !== a && w > s + i[n].length; )
        s += i[n].length, n++;
      m.end = {
        divIdx: n,
        offset: w - s
      }, o.push(m);
    }
    return o;
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
    } = this, a = i === t.selected.pageIdx, o = t.selected.matchIdx, h = t.state.highlightAll;
    let c = null;
    const w = {
      offset: void 0
    };
    function m(N, A) {
      const _ = N.divIdx;
      return s[_].textContent = "", g(_, 0, N.offset, A);
    }
    d(m, "beginText");
    function g(N, A, _, P) {
      let M = s[N];
      if (M.nodeType === Node.TEXT_NODE) {
        const O = document.createElement("span");
        M.before(O), O.append(M), s[N] = O, M = O;
      }
      const k = n[N].substring(A, _), j = document.createTextNode(k);
      if (P) {
        const O = document.createElement("span");
        return O.className = `${P} appended`, O.append(j), M.append(O), P.includes("selected") ? O : null;
      }
      return M.append(j), 0;
    }
    d(g, "appendTextToDiv");
    let E = o, y = E + 1;
    if (h)
      E = 0, y = e.length;
    else if (!a)
      return;
    let R = -1, I = -1;
    for (let N = E; N < y; N++) {
      const A = e[N], _ = A.begin;
      if (_.divIdx === R && _.offset === I)
        continue;
      R = _.divIdx, I = _.offset;
      const P = A.end, M = a && N === o, k = M ? " selected" : "";
      let j = null;
      if (!c || _.divIdx !== c.divIdx ? (c !== null && g(c.divIdx, c.offset, w.offset), m(_)) : g(c.divIdx, c.offset, _.offset), _.divIdx === P.divIdx)
        j = g(_.divIdx, _.offset, P.offset, "highlight" + k);
      else {
        j = g(_.divIdx, _.offset, w.offset, "highlight begin" + k);
        for (let O = _.divIdx + 1, v = P.divIdx; O < v; O++)
          s[O].className = "highlight middle" + k;
        m(P, "highlight end" + k);
      }
      c = P, M && t.scrollMatchIntoView({
        element: j,
        pageIndex: i,
        matchIndex: o
      });
    }
    c && g(c.divIdx, c.offset, w.offset);
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
      textDivs: a
    } = this;
    let o = -1;
    for (const w of i) {
      const m = Math.max(o, w.begin.divIdx);
      for (let g = m, E = w.end.divIdx; g <= E; g++) {
        const y = a[g];
        y.textContent = s[g], y.className = "";
      }
      o = w.end.divIdx + 1;
    }
    if (!t?.highlightMatches || e)
      return;
    const h = t.pageMatches[n] || null, c = t.pageMatchesLength[n] || null;
    this.matches = this._convertMatches(h, c), this._renderMatches(this.matches);
  }
};
tt = new WeakMap(), d(Ur, "TextHighlighter");
let zs = Ur;
var Ui, Bi, Hi, wt, be, ee, Ae, zn, lo, di, ho, co;
const Pe = class Pe {
  constructor({
    pdfPage: e,
    highlighter: t = null,
    accessibilityManager: i = null,
    enablePermissions: n = !1,
    onAppend: s = null,
    abortSignal: a = null
  }) {
    p(this, zn);
    p(this, Ui, null);
    p(this, Bi, !1);
    p(this, Hi, null);
    p(this, wt, !1);
    p(this, be, null);
    this.pdfPage = e, this.highlighter = t, this.accessibilityManager = i, u(this, Bi, n === !0), u(this, Hi, s), u(this, Ui, a), this.div = document.createElement("div"), this.div.tabIndex = 0, this.div.className = "textLayer";
  }
  async render({
    viewport: e,
    images: t,
    textContentParams: i = null
  }) {
    var o;
    if (r(this, wt) && r(this, be)) {
      r(this, be).update({
        viewport: e,
        onBefore: this.hide.bind(this)
      }), this.show();
      return;
    }
    this.cancel(), u(this, be, new Vo({
      textContentSource: this.pdfPage.streamTextContent(i || {
        includeMarkedContent: !0,
        disableNormalization: !0
      }),
      images: t,
      container: this.div,
      viewport: e
    }));
    const {
      textDivs: n,
      textContentItemsStr: s
    } = r(this, be);
    this.highlighter?.setTextMapping(n, s), this.accessibilityManager?.setTextMapping(n), await r(this, be).render(), u(this, wt, !0);
    const a = document.createElement("div");
    a.className = "endOfContent", this.div.append(a), f(this, zn, lo).call(this, a), (o = r(this, Hi)) == null || o.call(this, this.div), this.highlighter?.enable(), this.accessibilityManager?.enable();
  }
  hide() {
    !this.div.hidden && r(this, wt) && (this.highlighter?.disable(), this.div.hidden = !0);
  }
  show() {
    this.div.hidden && r(this, wt) && (this.div.hidden = !1, this.highlighter?.enable());
  }
  cancel() {
    var e;
    r(this, be)?.cancel(), u(this, be, null), this.highlighter?.disable(), this.accessibilityManager?.disable(), f(e = Pe, di, ho).call(e, this.div);
  }
};
Ui = new WeakMap(), Bi = new WeakMap(), Hi = new WeakMap(), wt = new WeakMap(), be = new WeakMap(), ee = new WeakMap(), Ae = new WeakMap(), zn = new WeakSet(), lo = /* @__PURE__ */ d(function(e) {
  var s;
  const {
    div: t
  } = this, i = r(this, Ui), n = i ? {
    signal: i
  } : null;
  t.addEventListener("mousedown", () => {
    t.classList.add("selecting");
  }, n), t.addEventListener("copy", (a) => {
    if (!r(this, Bi)) {
      const o = document.getSelection();
      a.clipboardData.setData("text/plain", bi(Fo(o.toString())));
    }
    ss(a);
  }, n), r(Pe, ee).set(t, e), f(s = Pe, di, co).call(s, i);
}, "#bindMouse"), di = new WeakSet(), ho = /* @__PURE__ */ d(function(e) {
  r(this, ee).delete(e), r(this, ee).size === 0 && (r(this, Ae)?.abort(), u(this, Ae, null));
}, "#removeGlobalSelectionListener"), co = /* @__PURE__ */ d(function(e) {
  if (r(this, Ae))
    return;
  u(this, Ae, new AbortController());
  const t = e ? AbortSignal.any([r(this, Ae).signal, e]) : r(this, Ae).signal, i = /* @__PURE__ */ d((o, h) => {
    h.append(o), o.style.width = "", o.style.height = "", h.classList.remove("selecting");
  }, "reset");
  let n = !1;
  document.addEventListener("pointerdown", () => {
    n = !0;
  }, {
    signal: t
  }), document.addEventListener("pointerup", () => {
    n = !1, r(this, ee).forEach(i);
  }, {
    signal: t
  }), window.addEventListener("blur", () => {
    n = !1, r(this, ee).forEach(i);
  }, {
    signal: t
  }), document.addEventListener("keyup", () => {
    n || r(this, ee).forEach(i);
  }, {
    signal: t
  });
  var s, a;
  document.addEventListener("selectionchange", () => {
    const o = document.getSelection();
    if (o.rangeCount === 0) {
      r(this, ee).forEach(i);
      return;
    }
    const h = /* @__PURE__ */ new Set();
    for (let y = 0; y < o.rangeCount; y++) {
      const R = o.getRangeAt(y);
      for (const I of r(this, ee).keys())
        !h.has(I) && R.intersectsNode(I) && h.add(I);
    }
    for (const [y, R] of r(this, ee))
      h.has(y) ? y.classList.add("selecting") : i(R, y);
    if (s ??= getComputedStyle(r(this, ee).values().next().value).getPropertyValue("-moz-user-select") === "none", s)
      return;
    const c = o.getRangeAt(0), w = a && (c.compareBoundaryPoints(Range.END_TO_END, a) === 0 || c.compareBoundaryPoints(Range.START_TO_END, a) === 0);
    let m = w ? c.startContainer : c.endContainer;
    if (m.nodeType === Node.TEXT_NODE && (m = m.parentNode), m.classList?.contains("highlight") && (m = m.parentNode), !w && c.endOffset === 0)
      do {
        for (; !m.previousSibling; )
          m = m.parentNode;
        m = m.previousSibling;
      } while (!m.childNodes.length);
    const g = m.parentElement?.closest(".textLayer"), E = r(this, ee).get(g);
    E && (E.style.width = g.style.width, E.style.height = g.style.height, E.style.userSelect = "text", m.parentElement.insertBefore(E, w ? m : m.nextSibling)), a = c.cloneRange();
  }, {
    signal: t
  });
}, "#enableGlobalSelectionListener"), p(Pe, di), d(Pe, "TextLayerBuilder"), p(Pe, ee, /* @__PURE__ */ new Map()), p(Pe, Ae, null);
let Fn = Pe;
const Br = class Br {
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
      return this.div = document.createElement("div"), s.div = this.div, Zn.render(s);
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
    return this.div ? Zn.update(n) : (this.div = document.createElement("div"), n.div = this.div, Zn.render(n));
  }
  cancel() {
    this._cancelled = !0;
  }
  hide() {
    this.div && (this.div.hidden = !0);
  }
};
d(Br, "XfaLayerBuilder");
let Vn = Br;
const pd = {
  annotationEditorUIManager: null,
  annotationStorage: null,
  downloadManager: null,
  enableScripting: !1,
  fieldObjectsPromise: null,
  findController: null,
  hasJSActionsPromise: null,
  get linkService() {
    return new Pi();
  }
}, md = /* @__PURE__ */ new Map([["canvasWrapper", 0], ["textLayer", 1], ["annotationLayer", 2], ["annotationEditorLayer", 3], ["xfaLayer", 3]]);
var Kt, Te, it, Yt, Zt, Qt, $i, ce, Le, Jt, Wi, zi, Gi, Et, Xi, Ne, nt, L, Mt, Cn, gi, Gs, Xs, Ks, Ys, Zs, uo, fo, go, Qs;
const Gn = class Gn extends kn {
  constructor(t) {
    super(t);
    p(this, L);
    p(this, Kt, null);
    p(this, Te, ve.ENABLE_FORMS);
    p(this, it, null);
    p(this, Yt, null);
    p(this, Zt, !0);
    p(this, Qt, !1);
    p(this, $i, !1);
    p(this, ce, null);
    p(this, Le, !1);
    p(this, Jt, null);
    p(this, Wi, null);
    p(this, zi, 1);
    p(this, Gi, 1);
    p(this, Et, Ee.ENABLE);
    p(this, Xi, 1);
    p(this, Ne, {
      directDrawing: !0,
      initialOptionalContent: !0,
      regularAnnotations: !0
    });
    p(this, nt, [null, null, null, null]);
    const {
      container: i,
      defaultViewport: n
    } = t;
    this.renderingId = "page" + this.id, u(this, ce, t.layerProperties || pd), u(this, Kt, t.abortSignal || null), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = t.scale || Ma, this.viewport = n, this.pdfPageRotate = n.rotation, this._optionalContentConfigPromise = t.optionalContentConfigPromise || null, u(this, Et, t.textLayerMode ?? Ee.ENABLE), u(this, Te, t.annotationMode ?? ve.ENABLE_FORMS), this.imageResourcesPath = t.imageResourcesPath || "", this.enableDetailCanvas = t.enableDetailCanvas ?? !0, this.maxCanvasPixels = t.maxCanvasPixels ?? wi.get("maxCanvasPixels"), this.maxCanvasDim = t.maxCanvasDim || wi.get("maxCanvasDim"), this.capCanvasAreaFactor = t.capCanvasAreaFactor ?? wi.get("capCanvasAreaFactor"), u(this, Zt, t.enableAutoLinking !== !1), u(this, Yt, t.commentManager || null), this.l10n = t.l10n, this.l10n ||= new oi(), this._isStandalone = !this.renderingQueue?.hasViewer(), this._container = i, this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.xfaLayer = null, this.structTreeLayer = null, this.drawLayer = null, this.detailView = null;
    const s = document.createElement("div");
    if (s.className = "page", s.setAttribute("data-page-number", this.id), s.setAttribute("role", "region"), s.setAttribute("data-l10n-id", "pdfjs-page-landmark"), s.setAttribute("data-l10n-args", JSON.stringify({
      page: this.id
    })), this.div = s, f(this, L, Cn).call(this), i?.append(s), this._isStandalone) {
      i?.style.setProperty("--scale-factor", this.scale * xe.PDF_TO_CSS_UNITS), this.pageColors?.background && i?.style.setProperty("--page-bg-color", this.pageColors.background);
      const {
        optionalContentConfigPromise: a
      } = t;
      a && a.then((o) => {
        a === this._optionalContentConfigPromise && (r(this, Ne).initialOptionalContent = o.hasInitialVisibility);
      }), t.l10n || this.l10n.translate(this.div);
    }
  }
  clone(t) {
    const i = new Gn({
      container: null,
      eventBus: this.eventBus,
      pagesColors: this.pageColors,
      renderingQueue: this.renderingQueue,
      enableOptimizedPartialRendering: this.enableOptimizedPartialRendering,
      minDurationToUpdateCanvas: this.minDurationToUpdateCanvas,
      defaultViewport: this.viewport,
      id: t,
      layerProperties: r(this, ce),
      abortSignal: r(this, Kt),
      scale: this.scale,
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      textLayerMode: r(this, Et),
      annotationMode: r(this, Te),
      imageResourcesPath: this.imageResourcesPath,
      enableDetailCanvas: this.enableDetailCanvas,
      maxCanvasPixels: this.maxCanvasPixels,
      maxCanvasDim: this.maxCanvasDim,
      capCanvasAreaFactor: this.capCanvasAreaFactor,
      enableAutoLinking: r(this, Zt),
      commentManager: r(this, Yt),
      l10n: this.l10n
    });
    return i.setPdfPage(this.pdfPage.clone(t - 1)), i;
  }
  updatePageNumber(t) {
    if (this.id === t)
      return;
    const i = this.id;
    this.id = t, this.renderingId = `page${t}`, this.pdfPage && (this.pdfPage.pageNumber = t), this.setPageLabel(this.pageLabel);
    const {
      div: n
    } = this;
    n.setAttribute("data-page-number", t), n.setAttribute("data-l10n-args", JSON.stringify({
      page: t
    })), this._textHighlighter.pageIdx = t - 1, r(this, ce).annotationEditorUIManager?.updatePageIndex(i - 1, t - 1);
  }
  setPdfPage(t) {
    this._isStandalone && (this.pageColors?.foreground === "CanvasText" || this.pageColors?.background === "Canvas") && (this._container?.style.setProperty("--hcm-highlight-filter", t.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), this._container?.style.setProperty("--hcm-highlight-selected-filter", t.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = t, this.pdfPageRotate = t.rotate;
    const i = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = t.getViewport({
      scale: this.scale * xe.PDF_TO_CSS_UNITS,
      rotation: i
    }), f(this, L, Cn).call(this), this.reset();
  }
  destroy() {
    this.reset(), this.pdfPage?.cleanup();
  }
  deleteMe(t) {
    if (t) {
      this.div.remove();
      return;
    }
    this.destroy(), r(this, ce).annotationEditorUIManager?.deletePage(this.id);
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  get _textHighlighter() {
    return vi(this, "_textHighlighter", new zs({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: r(this, ce).findController
    }));
  }
  _resetCanvas() {
    super._resetCanvas(), u(this, Jt, null);
  }
  reset({
    keepAnnotationLayer: t = !1,
    keepAnnotationEditorLayer: i = !1,
    keepXfaLayer: n = !1,
    keepTextLayer: s = !1,
    keepCanvasWrapper: a = !1,
    preserveDetailViewState: o = !1
  } = {}) {
    const h = this.pdfPage?._pdfBug ?? !1;
    this.cancelRendering({
      keepAnnotationLayer: t,
      keepAnnotationEditorLayer: i,
      keepXfaLayer: n,
      keepTextLayer: s
    }), this.renderingState = F.INITIAL;
    const c = this.div, w = c.childNodes, m = t && this.annotationLayer?.div || null, g = i && this.annotationEditorLayer?.div || null, E = n && this.xfaLayer?.div || null, y = s && this.textLayer?.div || null, R = a && r(this, it) || null;
    for (let I = w.length - 1; I >= 0; I--) {
      const N = w[I];
      switch (N) {
        case m:
        case g:
        case E:
        case y:
        case R:
          continue;
      }
      if (h && N.classList.contains("pdfBugGroupsLayer"))
        continue;
      N.remove();
      const A = r(this, nt).indexOf(N);
      A >= 0 && (r(this, nt)[A] = null);
    }
    c.removeAttribute("data-loaded"), m && this.annotationLayer.hide(), g && this.annotationEditorLayer.hide(), E && this.xfaLayer.hide(), y && this.textLayer.hide(), this.structTreeLayer?.hide(), !a && r(this, it) && (u(this, it, null), this._resetCanvas()), o || (this.detailView?.reset({
      keepCanvas: a
    }), a || (this.detailView = null));
  }
  toggleEditingMode(t) {
    u(this, $i, t), this.hasEditableAnnotations() && this.reset({
      keepAnnotationLayer: !0,
      keepAnnotationEditorLayer: !0,
      keepXfaLayer: !0,
      keepTextLayer: !0,
      keepCanvasWrapper: !0
    });
  }
  updateVisibleArea(t) {
    this.enableDetailCanvas && (r(this, Le) && this.maxCanvasPixels > 0 && t ? (this.detailView ??= new Vs({
      pageView: this,
      enableOptimizedPartialRendering: this.enableOptimizedPartialRendering,
      imagesRightClickMinSize: -1
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
    this.scale = t || this.scale, typeof i == "number" && (this.rotation = i), n instanceof Promise && (this._optionalContentConfigPromise = n, n.then((o) => {
      n === this._optionalContentConfigPromise && (r(this, Ne).initialOptionalContent = o.hasInitialVisibility);
    })), r(this, Ne).directDrawing = !0;
    const a = (this.rotation + this.pdfPageRotate) % 360;
    if (this.viewport = this.viewport.clone({
      scale: this.scale * xe.PDF_TO_CSS_UNITS,
      rotation: a
    }), f(this, L, Cn).call(this), this._isStandalone && this._container?.style.setProperty("--scale-factor", this.viewport.scale), f(this, L, Qs).call(this), this.canvas) {
      const o = r(this, Qt) && r(this, Le), h = s >= 0 && s < 1e3;
      if (h || o) {
        h && !o && this.renderingState !== F.FINISHED && (this.cancelRendering({
          keepAnnotationLayer: !0,
          keepAnnotationEditorLayer: !0,
          keepXfaLayer: !0,
          keepTextLayer: !0,
          cancelExtraDelay: s
        }), this.renderingState = F.FINISHED, r(this, Ne).directDrawing = !1), this.cssTransform({
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
    cancelExtraDelay: a = 0
  } = {}) {
    super.cancelRendering({
      cancelExtraDelay: a
    }), this.textLayer && (!s || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.annotationLayer && (!t || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationEditorLayer && (!i || !this.annotationEditorLayer.div) && (this.drawLayer && (this.drawLayer.cancel(), this.drawLayer = null), this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!n || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, this._textHighlighter?.disable());
  }
  cssTransform({
    redrawAnnotationLayer: t = !1,
    redrawAnnotationEditorLayer: i = !1,
    redrawXfaLayer: n = !1,
    redrawTextLayer: s = !1,
    hideTextLayer: a = !1
  }) {
    const {
      canvas: o
    } = this;
    if (!o)
      return;
    const h = r(this, Jt);
    if (this.viewport !== h) {
      const c = (360 + this.viewport.rotation - h.rotation) % 360;
      if (c === 90 || c === 270) {
        const {
          width: w,
          height: m
        } = this.viewport, g = m / w, E = w / m;
        o.style.transform = `rotate(${c}deg) scale(${g},${E})`;
      } else
        o.style.transform = c === 0 ? "" : `rotate(${c}deg)`;
    }
    t && this.annotationLayer && f(this, L, Gs).call(this), i && this.annotationEditorLayer && (this.drawLayer && f(this, L, Ks).call(this), f(this, L, Xs).call(this)), n && this.xfaLayer && f(this, L, Ys).call(this), this.textLayer && (a ? (this.textLayer.hide(), this.structTreeLayer?.hide()) : s && f(this, L, Zs).call(this));
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
    let t = r(this, it);
    return t || (t = u(this, it, document.createElement("div")), t.classList.add("canvasWrapper"), f(this, L, Mt).call(this, t, "canvasWrapper")), t;
  }
  _getRenderingContext(t, i, n, s) {
    return {
      canvas: t,
      transform: i,
      viewport: this.viewport,
      annotationMode: r(this, Te),
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors: this.pageColors,
      isEditing: r(this, $i),
      recordOperations: n,
      recordImages: s
    };
  }
  async draw() {
    this.renderingState !== F.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
    const {
      div: t,
      l10n: i,
      pdfPage: n,
      viewport: s
    } = this;
    if (!n)
      throw this.renderingState = F.FINISHED, new Error("pdfPage is not loaded");
    this.renderingState = F.RUNNING;
    const a = this._ensureCanvasWrapper();
    if (!this.textLayer && r(this, Et) !== Ee.DISABLE && !n.isPureXfa && (this._accessibilityManager ||= new $s(), this.textLayer = new Fn({
      pdfPage: n,
      highlighter: this._textHighlighter,
      accessibilityManager: this._accessibilityManager,
      enablePermissions: r(this, Et) === Ee.ENABLE_PERMISSIONS,
      onAppend: /* @__PURE__ */ d((k) => {
        this.l10n.pause(), f(this, L, Mt).call(this, k, "textLayer"), this.l10n.resume();
      }, "onAppend"),
      abortSignal: r(this, Kt)
    })), !this.annotationLayer && r(this, Te) !== ve.DISABLE) {
      const {
        annotationStorage: k,
        annotationEditorUIManager: j,
        downloadManager: O,
        enableComment: v,
        enableScripting: S,
        fieldObjectsPromise: V,
        hasJSActionsPromise: H,
        linkService: U
      } = r(this, ce);
      this._annotationCanvasMap ||= /* @__PURE__ */ new Map(), this.annotationLayer = new Ln({
        pdfPage: n,
        annotationStorage: k,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: r(this, Te) === ve.ENABLE_FORMS,
        linkService: U,
        downloadManager: O,
        enableComment: v,
        enableScripting: S,
        hasJSActionsPromise: H,
        fieldObjectsPromise: V,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager,
        annotationEditorUIManager: j,
        commentManager: r(this, Yt),
        onAppend: /* @__PURE__ */ d((B) => {
          f(this, L, Mt).call(this, B, "annotationLayer");
        }, "onAppend")
      });
    }
    const {
      width: o,
      height: h
    } = s;
    u(this, Jt, s);
    const {
      canvas: c,
      prevCanvas: w
    } = this._createCanvas((k) => {
      a.prepend(k);
    });
    c.setAttribute("role", "presentation"), this.outputScale || f(this, L, Qs).call(this);
    const {
      outputScale: m
    } = this;
    u(this, Qt, r(this, Le));
    const g = sa(m.sx), E = sa(m.sy), y = c.width = gn(pn(o * m.sx), g[0]), R = c.height = gn(pn(h * m.sy), E[0]), I = gn(pn(o), g[1]), N = gn(pn(h), E[1]);
    m.sx = y / I, m.sy = R / N, r(this, zi) !== g[1] && (t.style.setProperty("--scale-round-x", `${g[1]}px`), u(this, zi, g[1])), r(this, Gi) !== E[1] && (t.style.setProperty("--scale-round-y", `${E[1]}px`), u(this, Gi, E[1]));
    const A = this.enableOptimizedPartialRendering && r(this, Qt) && !this.recordedBBoxes, _ = this.imagesRightClickMinSize !== -1 && !this.imageCoordinates, P = m.scaled ? [m.sx, 0, 0, m.sy, 0, 0] : null, M = this._drawCanvas(this._getRenderingContext(c, P, A, _), () => {
      w?.remove(), this._resetCanvas();
    }, (k) => {
      r(this, Ne).regularAnnotations = !k.separateAnnots, this.dispatchPageRendered(!1, !1);
    }).then(async () => {
      if (this.renderingState !== F.FINISHED)
        return;
      this.structTreeLayer ||= new On(n, s.rawDims);
      const k = f(this, L, Zs).call(this);
      this.annotationLayer && (await f(this, L, Gs).call(this), r(this, Zt) && this.annotationLayer && this.textLayer && await f(this, L, go).call(this, k));
      const {
        annotationEditorUIManager: j
      } = r(this, ce);
      j && (this.drawLayer ||= new Fs(), await f(this, L, Ks).call(this), this.drawLayer.setParent(a), (this.annotationLayer || r(this, Te) === ve.DISABLE) && (this.annotationEditorLayer ||= new Ns({
        uiManager: j,
        pageIndex: this.id - 1,
        l10n: i,
        structTreeLayer: this.structTreeLayer,
        accessibilityManager: this._accessibilityManager,
        annotationLayer: this.annotationLayer?.annotationLayer,
        textLayer: this.textLayer,
        drawLayer: this.drawLayer.getDrawLayer(),
        onAppend: /* @__PURE__ */ d((O) => {
          f(this, L, Mt).call(this, O, "annotationEditorLayer");
        }, "onAppend")
      }), f(this, L, Xs).call(this)));
    });
    if (n.isPureXfa) {
      if (!this.xfaLayer) {
        const {
          annotationStorage: k,
          linkService: j
        } = r(this, ce);
        this.xfaLayer = new Vn({
          pdfPage: n,
          annotationStorage: k,
          linkService: j
        });
      }
      f(this, L, Ys).call(this);
    }
    return t.setAttribute("data-loaded", !0), this.dispatchPageRender(), M;
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
    } = r(this, Ne);
    return t && i && n ? this.canvas : null;
  }
};
Kt = new WeakMap(), Te = new WeakMap(), it = new WeakMap(), Yt = new WeakMap(), Zt = new WeakMap(), Qt = new WeakMap(), $i = new WeakMap(), ce = new WeakMap(), Le = new WeakMap(), Jt = new WeakMap(), Wi = new WeakMap(), zi = new WeakMap(), Gi = new WeakMap(), Et = new WeakMap(), Xi = new WeakMap(), Ne = new WeakMap(), nt = new WeakMap(), L = new WeakSet(), Mt = /* @__PURE__ */ d(function(t, i) {
  const n = md.get(i), s = r(this, nt)[n];
  if (r(this, nt)[n] = t, s) {
    s.replaceWith(t);
    return;
  }
  for (let a = n - 1; a >= 0; a--) {
    const o = r(this, nt)[a];
    if (o) {
      o.after(t);
      return;
    }
  }
  this.div.prepend(t);
}, "#addLayer"), Cn = /* @__PURE__ */ d(function() {
  const {
    div: t,
    viewport: i
  } = this;
  if (i.userUnit !== r(this, Xi) && (i.userUnit !== 1 ? t.style.setProperty("--user-unit", i.userUnit) : t.style.removeProperty("--user-unit"), u(this, Xi, i.userUnit)), this.pdfPage) {
    if (r(this, Wi) === i.rotation)
      return;
    u(this, Wi, i.rotation);
  }
  Na(t, i, !0, !1);
}, "#setDimensions"), gi = /* @__PURE__ */ d(function(t, i) {
  this.eventBus.dispatch(t, {
    source: this,
    pageNumber: this.id,
    error: i
  });
}, "#dispatchLayerRendered"), Gs = /* @__PURE__ */ d(async function() {
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
    f(this, L, gi).call(this, "annotationlayerrendered", t);
  }
}, "#renderAnnotationLayer"), Xs = /* @__PURE__ */ d(async function() {
  let t = null;
  try {
    await this.annotationEditorLayer.render({
      viewport: this.viewport,
      intent: "display"
    });
  } catch (i) {
    console.error("#renderAnnotationEditorLayer:", i), t = i;
  } finally {
    f(this, L, gi).call(this, "annotationeditorlayerrendered", t);
  }
}, "#renderAnnotationEditorLayer"), Ks = /* @__PURE__ */ d(async function() {
  try {
    await this.drawLayer.render({
      intent: "display"
    });
  } catch (t) {
    console.error("#renderDrawLayer:", t);
  }
}, "#renderDrawLayer"), Ys = /* @__PURE__ */ d(async function() {
  let t = null;
  try {
    const i = await this.xfaLayer.render({
      viewport: this.viewport,
      intent: "display"
    });
    i?.textDivs && this._textHighlighter && f(this, L, fo).call(this, i.textDivs);
  } catch (i) {
    console.error("#renderXfaLayer:", i), t = i;
  } finally {
    this.xfaLayer?.div && (this.l10n.pause(), f(this, L, Mt).call(this, this.xfaLayer.div, "xfaLayer"), this.l10n.resume()), f(this, L, gi).call(this, "xfalayerrendered", t);
  }
}, "#renderXfaLayer"), Zs = /* @__PURE__ */ d(async function() {
  if (!this.textLayer)
    return;
  let t = null;
  try {
    await this.textLayer.render({
      viewport: this.viewport,
      images: this.imageCoordinates ? new Uo(this.imagesRightClickMinSize, this.imageCoordinates, this.viewport, () => this.canvas) : null
    });
  } catch (i) {
    if (i instanceof Io)
      return;
    console.error("#renderTextLayer:", i), t = i;
  }
  f(this, L, gi).call(this, "textlayerrendered", t), f(this, L, uo).call(this);
}, "#renderTextLayer"), uo = /* @__PURE__ */ d(async function() {
  if (!this.textLayer)
    return;
  const t = await this.structTreeLayer?.render();
  t && (this.l10n.pause(), this.structTreeLayer?.updateTextLayer(), this.canvas && t.parentNode !== this.canvas && this.canvas.append(t), this.l10n.resume()), this.structTreeLayer?.show();
}, "#renderStructTreeLayer"), fo = /* @__PURE__ */ d(async function(t) {
  const i = await this.pdfPage.getTextContent(), n = [];
  for (const s of i.items)
    n.push(s.str);
  this._textHighlighter.setTextMapping(t, n), this._textHighlighter.enable();
}, "#buildXfaTextContentItems"), go = /* @__PURE__ */ d(async function(t) {
  try {
    if (await t, !this.annotationLayer)
      return;
    await this.annotationLayer.injectLinkAnnotations(Ds.processLinks(this));
  } catch (i) {
    console.error("#injectLinkAnnotations:", i);
  }
}, "#injectLinkAnnotations"), Qs = /* @__PURE__ */ d(function() {
  const {
    width: t,
    height: i
  } = this.viewport, n = this.outputScale = new wn();
  if (this.maxCanvasPixels === 0) {
    const s = 1 / this.scale;
    n.sx *= s, n.sy *= s, u(this, Le, !0);
  } else if (u(this, Le, n.limitCanvas(t, i, this.maxCanvasPixels, this.maxCanvasDim, this.capCanvasAreaFactor)), r(this, Le) && this.enableDetailCanvas) {
    const s = this.enableOptimizedPartialRendering ? 4 : 2;
    n.sx /= s, n.sy /= s;
  }
}, "#computeScale"), d(Gn, "PDFPageView");
let Un = Gn;
async function bd(l) {
  const {
    info: i,
    metadata: n,
    contentDispositionFilename: s,
    contentLength: a
  } = await l.getMetadata();
  return {
    ...i,
    baseURL: "",
    filesize: a || (await l.getDownloadInfo()).length,
    filename: s || No(""),
    metadata: n?.getRaw(),
    authors: n?.get("dc:creator"),
    numPages: l.numPages,
    URL: ""
  };
}
d(bd, "docProperties");
const Hr = class Hr {
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
d(Hr, "GenericScripting");
let Js = Hr;
var we, vt, Ki, yt, Pt, Yi, Q, Me, qt, z, re, X, po, In, er, mo, pi;
const $r = class $r {
  constructor({
    eventBus: e,
    externalServices: t = null,
    docProperties: i = null
  }) {
    p(this, X);
    p(this, we, null);
    p(this, vt, null);
    p(this, Ki, null);
    p(this, yt, null);
    p(this, Pt, null);
    p(this, Yi, null);
    p(this, Q, null);
    p(this, Me, null);
    p(this, qt, !1);
    p(this, z, null);
    p(this, re, null);
    u(this, Pt, e), u(this, Yi, t), u(this, Ki, i);
  }
  setViewer(e) {
    u(this, Me, e);
  }
  async setDocument(e) {
    if (r(this, Q) && await f(this, X, pi).call(this), u(this, Q, e), !e)
      return;
    const [t, i, n] = await Promise.all([e.getFieldObjects(), e.getCalculationOrderIds(), e.getJSActions()]);
    if (!t && !n) {
      await f(this, X, pi).call(this);
      return;
    }
    if (e !== r(this, Q))
      return;
    try {
      u(this, z, f(this, X, mo).call(this));
    } catch (o) {
      console.error("setDocument:", o), await f(this, X, pi).call(this);
      return;
    }
    const s = r(this, Pt);
    u(this, yt, new AbortController());
    const {
      signal: a
    } = r(this, yt);
    s._on("updatefromsandbox", (o) => {
      o?.source === window && f(this, X, po).call(this, o.detail);
    }, {
      signal: a
    }), s._on("dispatcheventinsandbox", (o) => {
      r(this, z)?.dispatchEventInSandbox(o.detail);
    }, {
      signal: a
    }), s._on("pagechanging", ({
      pageNumber: o,
      previous: h
    }) => {
      o !== h && (f(this, X, er).call(this, h), f(this, X, In).call(this, o));
    }, {
      signal: a
    }), s._on("pagerendered", ({
      pageNumber: o
    }) => {
      this._pageOpenPending.has(o) && o === r(this, Me).currentPageNumber && f(this, X, In).call(this, o);
    }, {
      signal: a
    }), s._on("pagesdestroy", async () => {
      await f(this, X, er).call(this, r(this, Me).currentPageNumber), await r(this, z)?.dispatchEventInSandbox({
        id: "doc",
        name: "WillClose"
      }), r(this, we)?.resolve();
    }, {
      signal: a
    });
    try {
      const o = await r(this, Ki).call(this, e);
      if (e !== r(this, Q))
        return;
      await r(this, z).createSandbox({
        objects: t,
        calculationOrder: i,
        appInfo: {
          platform: navigator.platform,
          language: navigator.language
        },
        docInfo: {
          ...o,
          actions: n
        }
      }), s.dispatch("sandboxcreated", {
        source: this
      });
    } catch (o) {
      console.error("setDocument:", o), await f(this, X, pi).call(this);
      return;
    }
    await r(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "Open"
    }), await f(this, X, In).call(this, r(this, Me).currentPageNumber, !0), Promise.resolve().then(() => {
      e === r(this, Q) && u(this, qt, !0);
    });
  }
  async dispatchWillSave() {
    return r(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "WillSave"
    });
  }
  async dispatchDidSave() {
    return r(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidSave"
    });
  }
  async dispatchWillPrint() {
    if (r(this, z)) {
      await r(this, re)?.promise, u(this, re, Promise.withResolvers());
      try {
        await r(this, z).dispatchEventInSandbox({
          id: "doc",
          name: "WillPrint"
        });
      } catch (e) {
        throw r(this, re).resolve(), u(this, re, null), e;
      }
      await r(this, re).promise;
    }
  }
  async dispatchDidPrint() {
    return r(this, z)?.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });
  }
  get destroyPromise() {
    return r(this, vt)?.promise || null;
  }
  get ready() {
    return r(this, qt);
  }
  get _pageOpenPending() {
    return vi(this, "_pageOpenPending", /* @__PURE__ */ new Set());
  }
  get _visitedPages() {
    return vi(this, "_visitedPages", /* @__PURE__ */ new Map());
  }
};
we = new WeakMap(), vt = new WeakMap(), Ki = new WeakMap(), yt = new WeakMap(), Pt = new WeakMap(), Yi = new WeakMap(), Q = new WeakMap(), Me = new WeakMap(), qt = new WeakMap(), z = new WeakMap(), re = new WeakMap(), X = new WeakSet(), po = /* @__PURE__ */ d(async function(e) {
  const t = r(this, Me), i = t.isInPresentationMode || t.isChangingPresentationMode, {
    id: n,
    siblings: s,
    command: a,
    value: o
  } = e;
  if (!n) {
    switch (a) {
      case "clear":
        console.clear();
        break;
      case "error":
        console.error(o);
        break;
      case "layout":
        if (!i) {
          const c = hl(o);
          t.spreadMode = c.spreadMode;
        }
        break;
      case "page-num":
        t.currentPageNumber = o + 1;
        break;
      case "print":
        await t.pagesPromise, r(this, Pt).dispatch("print", {
          source: this
        });
        break;
      case "println":
        console.log(o);
        break;
      case "zoom":
        i || (t.currentScaleValue = o);
        break;
      case "SaveAs":
        r(this, Pt).dispatch("download", {
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
        r(this, re)?.resolve(), u(this, re, null);
        break;
    }
    return;
  }
  if (i && e.focus)
    return;
  delete e.id, delete e.siblings;
  const h = s ? [n, ...s] : [n];
  for (const c of h) {
    const w = document.querySelector(`[data-element-id="${c}"]`);
    w ? w.dispatchEvent(new CustomEvent("updatefromsandbox", {
      detail: e
    })) : r(this, Q)?.annotationStorage.setValue(c, e);
  }
}, "#updateFromSandbox"), In = /* @__PURE__ */ d(async function(e, t = !1) {
  const i = r(this, Q), n = this._visitedPages;
  if (t && u(this, we, Promise.withResolvers()), !r(this, we))
    return;
  const s = r(this, Me).getPageView(e - 1);
  if (s?.renderingState !== F.FINISHED) {
    this._pageOpenPending.add(e);
    return;
  }
  this._pageOpenPending.delete(e);
  const a = (async () => {
    const o = await (n.has(e) ? null : s.pdfPage?.getJSActions());
    i === r(this, Q) && await r(this, z)?.dispatchEventInSandbox({
      id: "page",
      name: "PageOpen",
      pageNumber: e,
      actions: o
    });
  })();
  n.set(e, a);
}, "#dispatchPageOpen"), er = /* @__PURE__ */ d(async function(e) {
  const t = r(this, Q), i = this._visitedPages;
  if (!r(this, we) || this._pageOpenPending.has(e))
    return;
  const n = i.get(e);
  n && (i.set(e, null), await n, t === r(this, Q) && await r(this, z)?.dispatchEventInSandbox({
    id: "page",
    name: "PageClose",
    pageNumber: e
  }));
}, "#dispatchPageClose"), mo = /* @__PURE__ */ d(function() {
  if (u(this, vt, Promise.withResolvers()), r(this, z))
    throw new Error("#initScripting: Scripting already exists.");
  return r(this, Yi).createScripting();
}, "#initScripting"), pi = /* @__PURE__ */ d(async function() {
  if (!r(this, z)) {
    u(this, Q, null), r(this, vt)?.resolve();
    return;
  }
  r(this, we) && (await Promise.race([r(this, we).promise, new Promise((e) => {
    setTimeout(e, 1e3);
  })]).catch(() => {
  }), u(this, we, null)), u(this, Q, null);
  try {
    await r(this, z).destroySandbox();
  } catch {
  }
  r(this, re)?.reject(new Error("Scripting destroyed.")), u(this, re, null), r(this, yt)?.abort(), u(this, yt, null), this._pageOpenPending.clear(), this._visitedPages.clear(), u(this, z, null), u(this, qt, !1), r(this, vt)?.resolve();
}, "#destroyScripting"), d($r, "PDFScriptingManager");
let qs = $r;
const Wr = class Wr extends qs {
  constructor(e) {
    e.externalServices || window.addEventListener("updatefromsandbox", (t) => {
      e.eventBus.dispatch("updatefromsandbox", {
        source: window,
        detail: t.detail
      });
    }), e.externalServices ||= {
      createScripting: /* @__PURE__ */ d(() => new Js(e.sandboxBundleSrc), "createScripting")
    }, e.docProperties ||= (t) => bd(t), super(e);
  }
};
d(Wr, "PDFScriptingManagerComponents");
let tr = Wr;
const wd = 3e4;
var xt, _t, Zi, ei;
const zr = class zr {
  constructor() {
    p(this, xt, null);
    p(this, _t, null);
    p(this, Zi, null);
    p(this, ei, null);
    Y(this, "isThumbnailViewEnabled", !1);
    Y(this, "onIdle", null);
    Y(this, "printing", !1);
    Object.defineProperty(this, "hasViewer", {
      value: /* @__PURE__ */ d(() => !!r(this, ei), "value")
    });
  }
  setViewer(e) {
    u(this, ei, e);
  }
  setThumbnailViewer(e) {
    u(this, Zi, e);
  }
  isHighestPriority(e) {
    return r(this, xt) === e.renderingId;
  }
  renderHighestPriority(e) {
    r(this, _t) && (clearTimeout(r(this, _t)), u(this, _t, null)), !r(this, ei).forceRendering(e) && (this.isThumbnailViewEnabled && r(this, Zi)?.forceRendering() || this.printing || this.onIdle && u(this, _t, setTimeout(this.onIdle.bind(this), wd)));
  }
  getHighestPriority(e, t, i, n = !1, s = !1) {
    const a = e.views, o = a.length;
    if (o === 0)
      return null;
    for (let g = 0; g < o; g++) {
      const E = a[g].view;
      if (!this.isViewFinished(E))
        return E;
    }
    if (!s)
      for (let g = 0; g < o; g++) {
        const {
          detailView: E
        } = a[g].view;
        if (E && !this.isViewFinished(E))
          return E;
      }
    const h = e.first.id, c = e.last.id;
    if (c - h + 1 > o) {
      const g = e.ids;
      for (let E = 1, y = c - h; E < y; E++) {
        const R = i ? h + E : c - E;
        if (g.has(R))
          continue;
        const I = t[R - 1];
        if (!this.isViewFinished(I))
          return I;
      }
    }
    let w = i ? c : h - 2, m = t[w];
    return m && !this.isViewFinished(m) || n && (w += i ? 1 : -1, m = t[w], m && !this.isViewFinished(m)) ? m : null;
  }
  isViewFinished(e) {
    return e.renderingState === F.FINISHED;
  }
  renderView(e) {
    switch (e.renderingState) {
      case F.FINISHED:
        return !1;
      case F.PAUSED:
        u(this, xt, e.renderingId), e.resume();
        break;
      case F.RUNNING:
        u(this, xt, e.renderingId);
        break;
      case F.INITIAL:
        u(this, xt, e.renderingId), e.draw().finally(() => {
          this.renderHighestPriority();
        }).catch((t) => {
          t instanceof ns || console.error("renderView:", t);
        });
        break;
    }
    return !0;
  }
};
xt = new WeakMap(), _t = new WeakMap(), Zi = new WeakMap(), ei = new WeakMap(), d(zr, "PDFRenderingQueue");
let ir = zr;
const Ia = 10, bn = {
  FORCE_SCROLL_MODE_PAGE: 1e4,
  FORCE_LAZY_PAGE_INIT: 5e3,
  PAUSE_EAGER_PAGE_INIT: 250
};
function Ra(l) {
  return Object.values(J).includes(l) && l !== J.DISABLE;
}
d(Ra, "isValidAnnotationEditorMode");
var ke, St, Qi, sr;
const Gr = class Gr {
  constructor(e) {
    p(this, Qi);
    p(this, ke, /* @__PURE__ */ new Set());
    p(this, St, 0);
    u(this, St, e);
  }
  push(e) {
    const t = r(this, ke);
    t.has(e) && t.delete(e), t.add(e), t.size > r(this, St) && f(this, Qi, sr).call(this);
  }
  resize(e, t = null) {
    u(this, St, e);
    const i = r(this, ke);
    if (t) {
      const n = i.size;
      let s = 1;
      for (const a of i)
        if (t.has(a.id) && (i.delete(a), i.add(a)), ++s > n)
          break;
    }
    for (; i.size > r(this, St); )
      f(this, Qi, sr).call(this);
  }
  has(e) {
    return r(this, ke).has(e);
  }
  [Symbol.iterator]() {
    return r(this, ke).keys();
  }
};
ke = new WeakMap(), St = new WeakMap(), Qi = new WeakSet(), sr = /* @__PURE__ */ d(function() {
  const e = r(this, ke).keys().next().value;
  e?.destroy(), r(this, ke).delete(e);
}, "#destroyFirstView"), d(Gr, "PDFPageViewBuffer");
let nr = Gr;
var De, Ji, qi, ae, G, Ct, It, en, tn, nn, sn, rn, an, on, ln, st, dn, ti, je, ue, Rt, At, ii, rt, hn, ni, Tt, Oe, si, cn, ri, un, at, oe, ot, C, bo, wo, Eo, mi, Rn, vo, rr, yo, Be, ar, Po, xo, _o, or, lr, So, dr, An, hr;
const Xr = class Xr {
  constructor(e) {
    p(this, C);
    p(this, De, null);
    p(this, Ji, null);
    p(this, qi, null);
    p(this, ae, J.NONE);
    p(this, G, null);
    p(this, Ct, ve.ENABLE_FORMS);
    p(this, It, null);
    p(this, en, null);
    p(this, tn, null);
    p(this, nn, !1);
    p(this, sn, !1);
    p(this, rn, !1);
    p(this, an, !1);
    p(this, on, !0);
    p(this, ln, null);
    p(this, st, null);
    p(this, dn, 0);
    p(this, ti, null);
    p(this, je, !0);
    p(this, ue, null);
    p(this, Rt, null);
    p(this, At, null);
    p(this, ii, !1);
    p(this, rt, null);
    p(this, hn, 0);
    p(this, ni, new ResizeObserver(f(this, C, So).bind(this)));
    p(this, Tt, null);
    p(this, Oe, null);
    p(this, si, null);
    p(this, cn, !0);
    p(this, ri, Ee.ENABLE);
    p(this, un, null);
    p(this, at, null);
    p(this, oe, null);
    p(this, ot, null);
    const t = "5.6.205";
    if (qr !== t)
      throw new Error(`The API version "${qr}" does not match the Viewer version "${t}".`);
    if (this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, u(this, un, e.viewerAlert || null), this.container?.tagName !== "DIV" || this.viewer?.tagName !== "DIV")
      throw new Error("Invalid `container` and/or `viewer` option.");
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
      throw new Error("The `container` must be absolutely positioned.");
    r(this, ni).observe(this.container), this.eventBus = e.eventBus, this.linkService = e.linkService || new Pi(), this.downloadManager = e.downloadManager || null, this.findController = e.findController || null, u(this, Ji, e.altTextManager || null), u(this, It, e.commentManager || null), u(this, si, e.signatureManager || null), u(this, tn, e.editorUndoBar || null), this.findController && (this.findController.onIsPageVisible = (n) => this._getVisiblePages().ids.has(n)), this._scriptingManager = e.scriptingManager || null, u(this, ri, e.textLayerMode ?? Ee.ENABLE), u(this, Ct, e.annotationMode ?? ve.ENABLE_FORMS), u(this, ae, e.annotationEditorMode ?? J.NONE), u(this, qi, e.annotationEditorHighlightColors || null), u(this, nn, e.enableHighlightFloatingButton === !0), u(this, rn, e.enableUpdatedAddImage === !0), u(this, an, e.enableNewAltTextWhenAddingImage === !0), this.imageResourcesPath = e.imageResourcesPath || "", this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.removePageBorders = e.removePageBorders || !1, this.maxCanvasPixels = e.maxCanvasPixels, this.maxCanvasDim = e.maxCanvasDim, this.capCanvasAreaFactor = e.capCanvasAreaFactor, this.enableDetailCanvas = e.enableDetailCanvas ?? !0, this.enableOptimizedPartialRendering = e.enableOptimizedPartialRendering ?? !1, this.imagesRightClickMinSize = e.imagesRightClickMinSize ?? -1, this.l10n = e.l10n, this.l10n ||= new oi(), u(this, sn, e.enablePermissions || !1), this.pageColors = e.pageColors || null, u(this, ti, e.mlManager || null), u(this, cn, e.supportsPinchToZoom !== !1), u(this, on, e.enableAutoLinking !== !1), u(this, dn, e.minDurationToUpdateCanvas ?? 500), this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new ir(), this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue;
    const {
      abortSignal: i
    } = e;
    u(this, ln, i || null), i?.addEventListener("abort", () => {
      r(this, ni).disconnect(), u(this, ni, null);
    }, {
      once: !0
    }), this.scroll = sl(this.container, this._scrollUpdate.bind(this), i), this.presentationModeState = jt.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), f(this, C, lr).call(this), this.eventBus._on("thumbnailrendered", ({
      pageNumber: n,
      pdfPage: s
    }) => {
      const a = this._pages[n - 1];
      r(this, De).has(a) || s?.cleanup();
    }), e.l10n || this.l10n.translate(this.container);
  }
  get printingAllowed() {
    return r(this, je);
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(e) {
    return this._pages[e];
  }
  getCachedPageViews() {
    return new Set(r(this, De));
  }
  get pageViewsReady() {
    return this._pages.every((e) => e?.pdfPage);
  }
  get renderForms() {
    return r(this, Ct) === ve.ENABLE_FORMS;
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
      return t && f(this, C, ar).call(this), !0;
    if (!(0 < e && e <= this.pagesCount))
      return !1;
    const i = this._currentPageNumber;
    return this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: e,
      pageLabel: this._pageLabels?.[e - 1] ?? null,
      previous: i
    }), t && f(this, C, ar).call(this), !0;
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
    return this._currentScale !== Qn ? this._currentScale : Ma;
  }
  set currentScale(e) {
    if (isNaN(e))
      throw new Error("Invalid numeric scale.");
    this.pdfDocument && f(this, C, Be).call(this, e, {
      noScroll: !1
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(e) {
    this.pdfDocument && f(this, C, Be).call(this, e, {
      noScroll: !1
    });
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(e) {
    if (!ka(e))
      throw new Error("Invalid pages rotation angle.");
    if (!this.pdfDocument || (e %= 360, e < 0 && (e += 360), this._pagesRotation === e))
      return;
    this._pagesRotation = e;
    const t = this._currentPageNumber;
    this.refresh(!0, {
      rotation: e
    }), this._currentScaleValue && f(this, C, Be).call(this, this._currentScaleValue, {
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
    return vi(this, "_layerProperties", {
      get annotationEditorUIManager() {
        return r(e, G);
      },
      get annotationStorage() {
        return e.pdfDocument?.annotationStorage;
      },
      get downloadManager() {
        return e.downloadManager;
      },
      get enableComment() {
        return !!r(e, It);
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
  async getAllText(e = null) {
    const t = [], i = [];
    for (let n = 1, s = this.pdfDocument.numPages; n <= s; ++n) {
      if (e?.aborted)
        return null;
      i.length = 0;
      const a = await this.pdfDocument.getPage(n), {
        items: o
      } = await a.getTextContent();
      for (const h of o)
        h.str && i.push(h.str), h.hasEOL && i.push(`
`);
      t.push(bi(i.join("")));
    }
    return t.join(`
`);
  }
  setDocument(e) {
    if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
      source: this
    }), this._cancelRendering(), this._resetView(), this.findController?.setDocument(null), this._scriptingManager?.setDocument(null), r(this, G)?.destroy(), u(this, G, null), u(this, ae, J.NONE), u(this, je, !0)), this.pdfDocument = e, !e)
      return;
    const t = e.numPages, i = e.getPage(1), n = e.getOptionalContentConfig({
      intent: "display"
    }), s = r(this, sn) ? e.getPermissions() : Promise.resolve(), {
      eventBus: a,
      pageColors: o,
      viewer: h
    } = this;
    u(this, st, new AbortController());
    const {
      signal: c
    } = r(this, st);
    if (t > bn.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const g = this._scrollMode = D.PAGE;
      a.dispatch("scrollmodechanged", {
        source: this,
        mode: g
      });
    }
    this._pagesCapability.promise.then(() => {
      a.dispatch("pagesloaded", {
        source: this,
        pagesCount: t
      });
    }, () => {
    });
    const w = /* @__PURE__ */ d((g) => {
      const E = this._pages[g.pageNumber - 1];
      E && r(this, De).push(E);
    }, "onBeforeDraw");
    a._on("pagerender", w, {
      signal: c
    });
    const m = /* @__PURE__ */ d((g) => {
      g.cssTransform || g.isDetailView || (this._onePageRenderedCapability.resolve({
        timestamp: g.timestamp
      }), a._off("pagerendered", m));
    }, "onAfterDraw");
    a._on("pagerendered", m, {
      signal: c
    }), Promise.all([i, s]).then(([g, E]) => {
      if (e !== this.pdfDocument)
        return;
      this._firstPageCapability.resolve(g), this._optionalContentConfigPromise = n;
      const {
        annotationEditorMode: y,
        annotationMode: R,
        textLayerMode: I
      } = f(this, C, bo).call(this, E);
      if (I !== Ee.DISABLE) {
        const P = u(this, rt, document.createElement("div"));
        P.id = "hiddenCopyElement", h.before(P);
      }
      if (y !== J.DISABLE) {
        const P = y;
        e.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : Ra(P) ? (u(this, G, new Ao(this.container, h, r(this, un), r(this, Ji), r(this, It), r(this, si), a, e, o, r(this, qi), r(this, nn), r(this, rn), r(this, an), r(this, ti), r(this, tn), r(this, cn))), a.dispatch("annotationeditoruimanager", {
          source: this,
          uiManager: r(this, G)
        }), P !== J.NONE && (f(this, C, hr).call(this, P), r(this, G).updateMode(P))) : console.error(`Invalid AnnotationEditor mode: ${P}`);
      }
      const N = this._scrollMode === D.PAGE ? null : h, A = this.currentScale, _ = g.getViewport({
        scale: A * xe.PDF_TO_CSS_UNITS
      });
      h.style.setProperty("--scale-factor", _.scale), o?.background && h.style.setProperty("--page-bg-color", o.background), (o?.foreground === "CanvasText" || o?.background === "Canvas") && (h.style.setProperty("--hcm-highlight-filter", e.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight")), h.style.setProperty("--hcm-highlight-selected-filter", e.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "ButtonText")));
      for (let P = 1; P <= t; ++P) {
        const M = new Un({
          container: N,
          eventBus: a,
          id: P,
          scale: A,
          defaultViewport: _.clone(),
          optionalContentConfigPromise: n,
          renderingQueue: this.renderingQueue,
          textLayerMode: I,
          annotationMode: R,
          imageResourcesPath: this.imageResourcesPath,
          maxCanvasPixels: this.maxCanvasPixels,
          maxCanvasDim: this.maxCanvasDim,
          capCanvasAreaFactor: this.capCanvasAreaFactor,
          enableDetailCanvas: this.enableDetailCanvas,
          enableOptimizedPartialRendering: this.enableOptimizedPartialRendering,
          imagesRightClickMinSize: this.imagesRightClickMinSize,
          pageColors: o,
          l10n: this.l10n,
          layerProperties: this._layerProperties,
          enableAutoLinking: r(this, on),
          minDurationToUpdateCanvas: r(this, dn),
          commentManager: r(this, It),
          abortSignal: r(this, ln)
        });
        this._pages.push(M);
      }
      this._pages[0]?.setPdfPage(g), this._scrollMode === D.PAGE ? f(this, C, mi).call(this) : this._spreadMode !== Z.NONE && this._updateSpreadMode(), a._on("annotationeditorlayerrendered", (P) => {
        r(this, G) && a.dispatch("annotationeditormodechanged", {
          source: this,
          mode: r(this, ae)
        });
      }, {
        once: !0,
        signal: c
      }), f(this, C, wo).call(this, c).then(async () => {
        if (e !== this.pdfDocument)
          return;
        if (this.findController?.setDocument(e), this._scriptingManager?.setDocument(e), r(this, rt) && document.addEventListener("copy", f(this, C, Eo).bind(this, I), {
          signal: c
        }), e.loadingParams.disableAutoFetch || t > bn.FORCE_LAZY_PAGE_INIT) {
          this._pagesCapability.resolve();
          return;
        }
        let P = t - 1;
        if (P <= 0) {
          this._pagesCapability.resolve();
          return;
        }
        for (let M = 2; M <= t; ++M) {
          const k = e.getPage(M).then((j) => {
            const O = this._pages[M - 1];
            O.pdfPage || O.setPdfPage(j), --P === 0 && this._pagesCapability.resolve();
          }, (j) => {
            console.error(`Unable to get page ${M} to initialize viewer`, j), --P === 0 && this._pagesCapability.resolve();
          });
          M % bn.PAUSE_EAGER_PAGE_INIT === 0 && await k;
        }
      }), a.dispatch("pagesinit", {
        source: this
      }), e.getMetadata().then(({
        info: P
      }) => {
        e === this.pdfDocument && P.Language && (h.lang = P.Language);
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
      u(this, at, /* @__PURE__ */ new Map());
      for (const c of n)
        r(this, at).set(c, this._pages[c - 1]);
      return;
    }
    if (t === "cancelCopy") {
      u(this, at, null);
      return;
    }
    if ((t === "cut" || t === "delete") && (u(this, oe, this._pages), u(this, ot, n)), t === "cancelDelete") {
      if (u(this, ot, null), !r(this, oe))
        return;
      const c = this._scrollMode === D.PAGE ? null : this.viewer;
      if (c) {
        r(this, G)?.startUpdatePages();
        const w = document.createDocumentFragment();
        for (let m = 0, g = r(this, oe).length; m < g; m++) {
          const E = r(this, oe)[m];
          E.updatePageNumber(m + 1), w.append(E.div);
        }
        c.replaceChildren(w), r(this, G)?.endUpdatePages();
      }
      this._pages = r(this, oe), u(this, oe, null);
      return;
    }
    if (t === "cleanSavedData") {
      if (r(this, ot)) {
        if (r(this, oe)) {
          for (const c of r(this, ot))
            r(this, oe)[c - 1].deleteMe();
          u(this, oe, null);
        }
        u(this, ot, null);
      }
      return;
    }
    this._currentPageNumber = 0;
    const a = this._pages, o = this._pages = [];
    r(this, G)?.startUpdatePages();
    for (let c = 1, w = e.pagesNumber; c <= w; c++) {
      const m = e.getPrevPageNumber(c);
      if (m < 0) {
        let E = r(this, at).get(-m);
        i ? E.updatePageNumber(c) : (r(this, G)?.clonePage(-m - 1, c - 1), E = E.clone(c)), o.push(E);
        continue;
      }
      const g = a[m - 1];
      o.push(g), g.updatePageNumber(c);
    }
    r(this, G)?.endUpdatePages(), t === "paste" && u(this, at, null);
    const h = this._scrollMode === D.PAGE ? null : this.viewer;
    if (h) {
      const c = document.createDocumentFragment();
      for (const {
        div: w
      } of o)
        c.append(w);
      h.replaceChildren(c);
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
    this._pages = [], this._currentPageNumber = 1, this._currentScale = Qn, this._currentScaleValue = null, this._pageLabels = null, u(this, De, new nr(Ia)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = Promise.withResolvers(), this._onePageRenderedCapability = Promise.withResolvers(), this._pagesCapability = Promise.withResolvers(), this._scrollMode = D.VERTICAL, this._previousScrollMode = D.UNKNOWN, this._spreadMode = Z.NONE, u(this, Tt, {
      previousPageNumber: 1,
      scrollDown: !0,
      pages: []
    }), r(this, st)?.abort(), u(this, st, null), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), r(this, rt)?.remove(), u(this, rt, null), f(this, C, dr).call(this), f(this, C, An).call(this);
  }
  _scrollUpdate() {
    this.pagesCount !== 0 && (r(this, ue) && clearTimeout(r(this, ue)), u(this, ue, setTimeout(() => {
      u(this, ue, null), this.update();
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
    const a = Number.isInteger(e) && this._pages[e - 1];
    if (!a) {
      console.error(`scrollPageIntoView: "${e}" is not a valid pageNumber parameter.`);
      return;
    }
    if (this.isInPresentationMode || !t) {
      this._setCurrentPageNumber(e, !0);
      return;
    }
    let o = 0, h = 0, c = 0, w = 0, m, g;
    const E = a.rotation % 180 !== 0, y = (E ? a.height : a.width) / a.scale / xe.PDF_TO_CSS_UNITS, R = (E ? a.width : a.height) / a.scale / xe.PDF_TO_CSS_UNITS;
    let I = 0;
    switch (t[1].name) {
      case "XYZ":
        o = t[2], h = t[3], I = t[4], o = o !== null ? o : 0, h = h !== null ? h : R;
        break;
      case "Fit":
      case "FitB":
        I = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        h = t[2], I = "page-width", h === null && this._location ? (o = this._location.left, h = this._location.top) : (typeof h != "number" || h < 0) && (h = R);
        break;
      case "FitV":
      case "FitBV":
        o = t[2], c = y, w = R, I = "page-height";
        break;
      case "FitR":
        o = t[2], h = t[3], c = t[4] - o, w = t[5] - h;
        let P = ta, M = ia;
        this.removePageBorders && (P = M = 0), m = (this.container.clientWidth - P) / c / xe.PDF_TO_CSS_UNITS, g = (this.container.clientHeight - M) / w / xe.PDF_TO_CSS_UNITS, I = Math.min(Math.abs(m), Math.abs(g));
        break;
      default:
        console.error(`scrollPageIntoView: "${t[1].name}" is not a valid destination type.`);
        return;
    }
    if (n || (I && I !== this._currentScale ? this.currentScaleValue = I : this._currentScale === Qn && (this.currentScaleValue = qo)), I === "page-fit" && !t[4]) {
      f(this, C, Rn).call(this, a);
      return;
    }
    const N = [a.viewport.convertToViewportPoint(o, h), a.viewport.convertToViewportPoint(o + c, h + w)];
    let A = Math.min(N[0][0], N[1][0]), _ = Math.min(N[0][1], N[1][1]);
    s ? ((s === "both" || s === "vertical") && (_ -= (this.container.clientHeight - Math.abs(N[1][1] - N[0][1])) / 2), (s === "both" || s === "horizontal") && (A -= (this.container.clientWidth - Math.abs(N[1][0] - N[0][0])) / 2)) : i || (A = Math.max(A, 0), _ = Math.max(_, 0)), f(this, C, Rn).call(this, a, {
      left: A,
      top: _
    });
  }
  _updateLocation(e) {
    const t = this._currentScale, i = this._currentScaleValue, n = parseFloat(i) === t ? Math.round(t * 1e4) / 100 : i, s = e.id, a = this._pages[s - 1], o = this.container, h = a.getPagePoint(o.scrollLeft - e.x, o.scrollTop - e.y), c = Math.round(h[0]), w = Math.round(h[1]);
    let m = `#page=${s}`;
    this.isInPresentationMode || (m += `&zoom=${n},${c},${w}`), this._location = {
      pageNumber: s,
      scale: n,
      top: w,
      left: c,
      rotation: this._pagesRotation,
      pdfOpenParams: m
    };
  }
  update() {
    const e = this._getVisiblePages(), t = e.views, i = t.length;
    if (i === 0)
      return;
    const n = Math.max(Ia, 2 * i + 1);
    r(this, De).resize(n, e.ids);
    for (const {
      view: h,
      visibleArea: c
    } of t)
      h.updateVisibleArea(c);
    for (const h of r(this, De))
      e.ids.has(h.id) || h.updateVisibleArea(null);
    this.renderingQueue.renderHighestPriority(e);
    const s = this._spreadMode === Z.NONE && (this._scrollMode === D.PAGE || this._scrollMode === D.VERTICAL), a = this._currentPageNumber;
    let o = !1;
    for (const h of t) {
      if (h.percent < 100)
        break;
      if (h.id === a && s) {
        o = !0;
        break;
      }
    }
    this._setCurrentPageNumber(o ? this._currentPageNumber : t[0].id), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
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
    return this.presentationModeState === jt.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === jt.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? !1 : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const e = this._scrollMode === D.PAGE ? r(this, Tt).pages : this._pages, t = this._scrollMode === D.HORIZONTAL, i = t && this._isContainerRtl;
    return al({
      scrollEl: this.container,
      views: e,
      sortByVisibility: !0,
      horizontal: t,
      rtl: i
    });
  }
  cleanup() {
    for (const e of this._pages)
      e.renderingState !== F.FINISHED && e.reset();
  }
  _cancelRendering() {
    for (const e of this._pages)
      e.cancelRendering();
  }
  forceRendering(e) {
    const t = e || this._getVisiblePages(), i = f(this, C, _o).call(this, t), n = this._spreadMode !== Z.NONE && this._scrollMode !== D.HORIZONTAL, s = r(this, Oe) !== null || r(this, ue) !== null && t.views.some((o) => o.detailView?.renderingCancelled), a = this.renderingQueue.getHighestPriority(t, this._pages, i, n, s);
    return a ? (f(this, C, xo).call(this, a).then(() => {
      this.renderingQueue.renderView(a);
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
      }), n = ra(i);
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
      if (!ol(e))
        throw new Error(`Invalid scroll mode: ${e}`);
      this.pagesCount > bn.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = e, this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: e
      }), this._updateScrollMode(this._currentPageNumber));
    }
  }
  _updateScrollMode(e = null) {
    const t = this._scrollMode, i = this.viewer;
    i.classList.toggle("scrollHorizontal", t === D.HORIZONTAL), i.classList.toggle("scrollWrapped", t === D.WRAPPED), !(!this.pdfDocument || !e) && (t === D.PAGE ? f(this, C, mi).call(this) : this._previousScrollMode === D.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && f(this, C, Be).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  get spreadMode() {
    return this._spreadMode;
  }
  set spreadMode(e) {
    if (this._spreadMode !== e) {
      if (!ll(e))
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
      f(this, C, mi).call(this);
    else if (t.textContent = "", this._spreadMode === Z.NONE)
      for (const n of this._pages)
        t.append(n.div);
    else {
      const n = this._spreadMode - 1;
      let s = null;
      for (let a = 0, o = i.length; a < o; ++a)
        s === null ? (s = document.createElement("div"), s.className = "spread", t.append(s)) : a % 2 === n && (s = s.cloneNode(!1), t.append(s)), s.append(i[a].div);
    }
    e && (this._currentScaleValue && isNaN(this._currentScaleValue) && f(this, C, Be).call(this, this._currentScaleValue, {
      noScroll: !0
    }), this._setCurrentPageNumber(e, !0), this.update());
  }
  nextPage() {
    const e = this._currentPageNumber, t = this.pagesCount;
    if (e >= t)
      return !1;
    const i = f(this, C, or).call(this, e, !1) || 1;
    return this.currentPageNumber = Math.min(e + i, t), !0;
  }
  previousPage() {
    const e = this._currentPageNumber;
    if (e <= 1)
      return !1;
    const t = f(this, C, or).call(this, e, !0) || 1;
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
      const a = i > 0 ? ea : 1 / ea, o = i > 0 ? Math.ceil : Math.floor;
      i = Math.abs(i);
      do
        s = o((s * a).toFixed(2) * 10) / 10;
      while (--i > 0);
    }
    s = Oo(s, el, tl), f(this, C, Be).call(this, s, {
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
    return r(this, en) || u(this, en, [this.container.offsetTop, this.container.offsetLeft]);
  }
  get annotationEditorMode() {
    return r(this, G) ? r(this, ae) : J.DISABLE;
  }
  set annotationEditorMode({
    mode: e,
    editId: t = null,
    isFromKeyboard: i = !1,
    mustEnterInEditMode: n = !1,
    editComment: s = !1
  }) {
    if (!r(this, G))
      throw new Error("The AnnotationEditor is not enabled.");
    if (r(this, ae) === e)
      return;
    if (!Ra(e))
      throw new Error(`Invalid AnnotationEditor mode: ${e}`);
    if (!this.pdfDocument)
      return;
    f(this, C, hr).call(this, e);
    const {
      eventBus: a,
      pdfDocument: o
    } = this, h = /* @__PURE__ */ d(async () => {
      f(this, C, An).call(this), u(this, ae, e), await r(this, G).updateMode(e, t, !0, i, n, s), !(e !== r(this, ae) || o !== this.pdfDocument) && a.dispatch("annotationeditormodechanged", {
        source: this,
        mode: e
      });
    }, "updater");
    if (e === J.NONE || r(this, ae) === J.NONE) {
      const c = e !== J.NONE;
      c || this.pdfDocument.annotationStorage.resetModifiedIds(), this.cleanup();
      for (const m of this._pages)
        m.toggleEditingMode(c);
      const w = f(this, C, Po).call(this);
      if (c && w) {
        f(this, C, An).call(this), u(this, Rt, new AbortController());
        const m = AbortSignal.any([r(this, st).signal, r(this, Rt).signal]);
        a._on("pagerendered", ({
          pageNumber: g
        }) => {
          w.delete(g), w.size === 0 && u(this, At, setTimeout(h, 0));
        }, {
          signal: m
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
      f(this, C, dr).call(this), e || this.update();
    }
  }
};
De = new WeakMap(), Ji = new WeakMap(), qi = new WeakMap(), ae = new WeakMap(), G = new WeakMap(), Ct = new WeakMap(), It = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), st = new WeakMap(), dn = new WeakMap(), ti = new WeakMap(), je = new WeakMap(), ue = new WeakMap(), Rt = new WeakMap(), At = new WeakMap(), ii = new WeakMap(), rt = new WeakMap(), hn = new WeakMap(), ni = new WeakMap(), Tt = new WeakMap(), Oe = new WeakMap(), si = new WeakMap(), cn = new WeakMap(), ri = new WeakMap(), un = new WeakMap(), at = new WeakMap(), oe = new WeakMap(), ot = new WeakMap(), C = new WeakSet(), bo = /* @__PURE__ */ d(function(e) {
  const t = {
    annotationEditorMode: r(this, ae),
    annotationMode: r(this, Ct),
    textLayerMode: r(this, ri)
  };
  return e ? (u(this, je, e.includes(Nt.PRINT_HIGH_QUALITY) || e.includes(Nt.PRINT)), this.eventBus.dispatch("printingallowed", {
    source: this,
    isAllowed: r(this, je)
  }), !e.includes(Nt.COPY) && r(this, ri) === Ee.ENABLE && (t.textLayerMode = Ee.ENABLE_PERMISSIONS), e.includes(Nt.MODIFY_CONTENTS) || (t.annotationEditorMode = J.DISABLE), !e.includes(Nt.MODIFY_ANNOTATIONS) && !e.includes(Nt.FILL_INTERACTIVE_FORMS) && r(this, Ct) === ve.ENABLE_FORMS && (t.annotationMode = ve.ENABLE), t) : (u(this, je, !0), this.eventBus.dispatch("printingallowed", {
    source: this,
    isAllowed: r(this, je)
  }), t);
}, "#initializePermissions"), wo = /* @__PURE__ */ d(async function(e) {
  if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
    return;
  const t = Promise.withResolvers(), i = new AbortController();
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && t.resolve();
  }, {
    signal: AbortSignal.any([e, i.signal])
  }), await Promise.race([this._onePageRenderedCapability.promise, t.promise]), i.abort();
}, "#onePageRenderedOrForceFetch"), Eo = /* @__PURE__ */ d(function(e, t) {
  const i = document.getSelection(), {
    focusNode: n,
    anchorNode: s
  } = i;
  if (s && n && i.containsNode(r(this, rt))) {
    if (r(this, ii) || e === Ee.ENABLE_PERMISSIONS) {
      ss(t);
      return;
    }
    u(this, ii, !0);
    const {
      classList: a
    } = this.viewer;
    a.add("copyAll");
    const o = new AbortController(), h = new AbortController();
    window.addEventListener("keydown", (c) => {
      c.key === "Escape" && h.abort();
    }, {
      signal: o.signal
    }), this.getAllText(h.signal).then(async (c) => {
      c !== null && await navigator.clipboard.writeText(c);
    }).catch((c) => {
      console.warn(`Something goes wrong when extracting the text: ${c.message}`);
    }).finally(() => {
      u(this, ii, !1), o.abort(), a.remove("copyAll");
    }), ss(t);
  }
}, "#copyCallback"), mi = /* @__PURE__ */ d(function() {
  if (this._scrollMode !== D.PAGE)
    throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
  const e = this._currentPageNumber, t = r(this, Tt), i = this.viewer;
  if (i.textContent = "", t.pages.length = 0, this._spreadMode === Z.NONE && !this.isInPresentationMode) {
    const n = this._pages[e - 1];
    i.append(n.div), t.pages.push(n);
  } else {
    const n = /* @__PURE__ */ new Set(), s = this._spreadMode - 1;
    s === -1 ? n.add(e - 1) : e % 2 !== s ? (n.add(e - 1), n.add(e)) : (n.add(e - 2), n.add(e - 1));
    const a = document.createElement("div");
    if (a.className = "spread", this.isInPresentationMode) {
      const o = document.createElement("div");
      o.className = "dummyPage", a.append(o);
    }
    for (const o of n) {
      const h = this._pages[o];
      h && (a.append(h.div), t.pages.push(h));
    }
    i.append(a);
  }
  t.scrollDown = e >= t.previousPageNumber, t.previousPageNumber = e;
}, "#ensurePageViewVisible"), Rn = /* @__PURE__ */ d(function(e, t = null) {
  const {
    div: i,
    id: n
  } = e;
  if (this._currentPageNumber !== n && this._setCurrentPageNumber(n), this._scrollMode === D.PAGE && (f(this, C, mi).call(this), this.update()), !t && !this.isInPresentationMode) {
    const s = i.offsetLeft + i.clientLeft, a = s + i.clientWidth, {
      scrollLeft: o,
      clientWidth: h
    } = this.container;
    (this._scrollMode === D.HORIZONTAL || s < o || a > o + h) && (t = {
      left: 0,
      top: 0
    });
  }
  nl(i, t), !this._currentScaleValue && this._location && (this._location = null);
}, "#scrollIntoView"), vo = /* @__PURE__ */ d(function(e) {
  return e === this._currentScale || Math.abs(e - this._currentScale) < 1e-15;
}, "#isSameScale"), rr = /* @__PURE__ */ d(function(e, t, {
  noScroll: i = !1,
  preset: n = !1,
  drawingDelay: s = -1,
  origin: a = null
}) {
  if (this._currentScaleValue = t.toString(), f(this, C, vo).call(this, e)) {
    n && this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: e,
      presetValue: t
    });
    return;
  }
  this.viewer.style.setProperty("--scale-factor", e * xe.PDF_TO_CSS_UNITS);
  const o = s >= 0 && s < 1e3;
  this.refresh(!0, {
    scale: e,
    drawingDelay: o ? s : -1
  }), o && u(this, Oe, setTimeout(() => {
    u(this, Oe, null), this.refresh();
  }, s));
  const h = this._currentScale;
  if (this._currentScale = e, !i) {
    let c = this._currentPageNumber, w;
    if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (c = this._location.pageNumber, w = [null, {
      name: "XYZ"
    }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
      pageNumber: c,
      destArray: w,
      allowNegativeOffset: !0
    }), Array.isArray(a)) {
      const m = e / h - 1, [g, E] = this.containerTopLeft;
      this.container.scrollLeft += (a[0] - E) * m, this.container.scrollTop += (a[1] - g) * m;
    }
  }
  this.eventBus.dispatch("scalechanging", {
    source: this,
    scale: e,
    presetValue: n ? t : void 0
  }), this.defaultRenderingQueue && this.update();
}, "#setScaleUpdatePages"), yo = /* @__PURE__ */ d(function() {
  return this._spreadMode !== Z.NONE && this._scrollMode !== D.HORIZONTAL ? 2 : 1;
}, "#pageWidthScaleFactor"), Be = /* @__PURE__ */ d(function(e, t) {
  let i = parseFloat(e);
  if (i > 0)
    t.preset = !1, f(this, C, rr).call(this, i, e, t);
  else {
    const n = this._pages[this._currentPageNumber - 1];
    if (!n)
      return;
    let s = ta, a = ia;
    this.isInPresentationMode ? (s = a = 4, this._spreadMode !== Z.NONE && (s *= 2)) : this.removePageBorders ? s = a = 0 : this._scrollMode === D.HORIZONTAL && ([s, a] = [a, s]);
    const o = (this.container.clientWidth - s) / n.width * n.scale / r(this, C, yo), h = (this.container.clientHeight - a) / n.height * n.scale;
    switch (e) {
      case "page-actual":
        i = 1;
        break;
      case "page-width":
        i = o;
        break;
      case "page-height":
        i = h;
        break;
      case "page-fit":
        i = Math.min(o, h);
        break;
      case "auto":
        const c = ra(n) ? o : Math.min(h, o);
        i = Math.min(il, c);
        break;
      default:
        console.error(`#setScale: "${e}" is an unknown zoom value.`);
        return;
    }
    t.preset = !0, f(this, C, rr).call(this, i, e, t);
  }
}, "#setScale"), ar = /* @__PURE__ */ d(function() {
  const e = this._pages[this._currentPageNumber - 1];
  this.isInPresentationMode && f(this, C, Be).call(this, this._currentScaleValue, {
    noScroll: !0
  }), f(this, C, Rn).call(this, e);
}, "#resetCurrentPageView"), Po = /* @__PURE__ */ d(function() {
  const e = this._getVisiblePages(), t = [], {
    ids: i,
    views: n
  } = e;
  for (const s of n) {
    const {
      view: a
    } = s;
    if (!a.hasEditableAnnotations()) {
      i.delete(a.id);
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
}, "#ensurePdfPageLoaded"), _o = /* @__PURE__ */ d(function(e) {
  if (e.first?.id === 1)
    return !0;
  if (e.last?.id === this.pagesCount)
    return !1;
  switch (this._scrollMode) {
    case D.PAGE:
      return r(this, Tt).scrollDown;
    case D.HORIZONTAL:
      return this.scroll.right;
  }
  return this.scroll.down;
}, "#getScrollAhead"), or = /* @__PURE__ */ d(function(e, t = !1) {
  switch (this._scrollMode) {
    case D.WRAPPED: {
      const {
        views: i
      } = this._getVisiblePages(), n = /* @__PURE__ */ new Map();
      for (const {
        id: s,
        y: a,
        percent: o,
        widthPercent: h
      } of i)
        o === 0 || h < 100 || n.getOrInsertComputed(a, Do).push(s);
      for (const s of n.values()) {
        const a = s.indexOf(e);
        if (a === -1)
          continue;
        const o = s.length;
        if (o === 1)
          break;
        if (t)
          for (let h = a - 1, c = 0; h >= c; h--) {
            const w = s[h], m = s[h + 1] - 1;
            if (w < m)
              return e - m;
          }
        else
          for (let h = a + 1, c = o; h < c; h++) {
            const w = s[h], m = s[h - 1] + 1;
            if (w > m)
              return m - e;
          }
        if (t) {
          const h = s[0];
          if (h < e)
            return e - h + 1;
        } else {
          const h = s[o - 1];
          if (h > e)
            return h - e + 1;
        }
        break;
      }
      break;
    }
    case D.HORIZONTAL:
      break;
    case D.PAGE:
    case D.VERTICAL: {
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
        id: a,
        percent: o,
        widthPercent: h
      } of n)
        if (a === s) {
          if (o > 0 && h === 100)
            return 2;
          break;
        }
      break;
    }
  }
  return 1;
}, "#getPageAdvance"), lr = /* @__PURE__ */ d(function(e = this.container.clientHeight) {
  e !== r(this, hn) && (u(this, hn, e), dl.setProperty("--viewer-container-height", `${e}px`));
}, "#updateContainerHeightCss"), So = /* @__PURE__ */ d(function(e) {
  for (const t of e)
    if (t.target === this.container) {
      f(this, C, lr).call(this, Math.floor(t.borderBoxSize[0].blockSize)), u(this, en, null);
      break;
    }
}, "#resizeObserverCallback"), dr = /* @__PURE__ */ d(function() {
  r(this, Oe) !== null && (clearTimeout(r(this, Oe)), u(this, Oe, null)), r(this, ue) !== null && (clearTimeout(r(this, ue)), u(this, ue, null));
}, "#cleanupTimeouts"), An = /* @__PURE__ */ d(function() {
  r(this, Rt)?.abort(), u(this, Rt, null), r(this, At) !== null && (clearTimeout(r(this, At)), u(this, At, null));
}, "#cleanupSwitchAnnotationEditorMode"), hr = /* @__PURE__ */ d(function(e) {
  switch (e) {
    case J.STAMP:
      r(this, ti)?.loadModel("altText");
      break;
    case J.SIGNATURE:
      r(this, si)?.loadSignatures();
      break;
  }
}, "#preloadEditingData"), d(Xr, "PDFViewer");
let Bn = Xr;
const Kr = class Kr extends Bn {
  _resetView() {
    super._resetView(), this._scrollMode = D.PAGE, this._spreadMode = Z.NONE;
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
d(Kr, "PDFSinglePageViewer");
let cr = Kr;
globalThis.pdfjsViewer = {
  AnnotationLayerBuilder: Ln,
  DownloadManager: ms,
  EventBus: Nn,
  FindState: Ue,
  GenericL10n: oi,
  LinkTarget: ut,
  parseQueryString: Xn,
  PDFFindController: as,
  PDFHistory: As,
  PDFLinkService: Tn,
  PDFPageView: Un,
  PDFScriptingManager: tr,
  PDFSinglePageViewer: cr,
  PDFViewer: Bn,
  ProgressBar: rs,
  RenderingStates: F,
  ScrollMode: D,
  SimpleLinkService: Pi,
  SpreadMode: Z,
  StructTreeLayerBuilder: On,
  TextLayerBuilder: Fn,
  XfaLayerBuilder: Vn
};
export {
  Ln as AnnotationLayerBuilder,
  ms as DownloadManager,
  Nn as EventBus,
  Ue as FindState,
  oi as GenericL10n,
  ut as LinkTarget,
  as as PDFFindController,
  As as PDFHistory,
  Tn as PDFLinkService,
  Un as PDFPageView,
  tr as PDFScriptingManager,
  cr as PDFSinglePageViewer,
  Bn as PDFViewer,
  rs as ProgressBar,
  F as RenderingStates,
  D as ScrollMode,
  Pi as SimpleLinkService,
  Z as SpreadMode,
  On as StructTreeLayerBuilder,
  Fn as TextLayerBuilder,
  Vn as XfaLayerBuilder,
  Xn as parseQueryString
};
