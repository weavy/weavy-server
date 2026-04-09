var eA = Object.defineProperty;
var sA = (g) => {
  throw TypeError(g);
};
var Dw = (g, t, e) => t in g ? eA(g, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[t] = e;
var f = (g, t) => eA(g, "name", { value: t, configurable: !0 });
var M = (g, t, e) => Dw(g, typeof t != "symbol" ? t + "" : t, e), rp = (g, t, e) => t.has(g) || sA("Cannot " + e);
var i = (g, t, e) => (rp(g, t, "read from private field"), e ? e.call(g) : t.get(g)), m = (g, t, e) => t.has(g) ? sA("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(g) : t.set(g, e), u = (g, t, e, s) => (rp(g, t, "write to private field"), s ? s.call(g, e) : t.set(g, e), e), b = (g, t, e) => (rp(g, t, "access private method"), e);
var zt = (g, t, e, s) => ({
  set _(n) {
    u(g, t, n, e);
  },
  get _() {
    return i(g, t, s);
  }
});
const up = [1e-3, 0, 0, 1e-3, 0, 0], ap = 1.35, ls = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, _n = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Fl = "pdfjs_internal_editor_", z = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, Z = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, Lw = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Pr = {
  TRIANGLES: 1,
  LATTICE: 2
}, qt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, su = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Vt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, io = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, qf = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Ol = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, il = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
}, Rw = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Qf = qf.WARNINGS;
function Nw(g) {
  Number.isInteger(g) && (Qf = g);
}
f(Nw, "setVerbosityLevel");
function Bw() {
  return Qf;
}
f(Bw, "getVerbosityLevel");
function Jf(g) {
  Qf >= qf.INFOS && console.info(`Info: ${g}`);
}
f(Jf, "info");
function W(g) {
  Qf >= qf.WARNINGS && console.warn(`Warning: ${g}`);
}
f(W, "warn");
function rt(g) {
  throw new Error(g);
}
f(rt, "unreachable");
function Bt(g, t) {
  g || rt(t);
}
f(Bt, "assert");
function Fw(g) {
  switch (g?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
f(Fw, "_isValidProtocol");
function _A(g, t = null, e = null) {
  if (!g)
    return null;
  if (e && typeof g == "string" && (e.addDefaultProtocol && g.startsWith("www.") && g.match(/\./g)?.length >= 2 && (g = `http://${g}`), e.tryConvertEncoding))
    try {
      g = $w(g);
    } catch {
    }
  const s = t ? URL.parse(g, t) : URL.parse(g);
  return Fw(s) ? s : null;
}
f(_A, "createValidAbsoluteUrl");
function kA(g, t, e = !1) {
  const s = URL.parse(g);
  return s ? (s.hash = t, s.href) : e && _A(g, "http://example.com") ? g.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
f(kA, "updateUrlHash");
function fp(g) {
  return g.substring(g.lastIndexOf("/") + 1);
}
f(fp, "stripPath");
function V(g, t, e, s = !1) {
  return Object.defineProperty(g, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
f(V, "shadow");
const eo = (/* @__PURE__ */ f(function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return f(t, "BaseException"), t.prototype = new Error(), t.constructor = t, t;
}, "BaseExceptionClosure"))(), ib = class ib extends eo {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
};
f(ib, "PasswordException");
let Uu = ib;
const nb = class nb extends eo {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
};
f(nb, "UnknownErrorException");
let kl = nb;
const rb = class rb extends eo {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
};
f(rb, "InvalidPDFException");
let Hl = rb;
const ab = class ab extends eo {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
};
f(ab, "ResponseException");
let Kh = ab;
const ob = class ob extends eo {
  constructor(t) {
    super(t, "FormatError");
  }
};
f(ob, "FormatError");
let pp = ob;
const hb = class hb extends eo {
  constructor(t) {
    super(t, "AbortException");
  }
};
f(hb, "AbortException");
let mn = hb;
function Ow(g) {
  (typeof g != "object" || g?.length === void 0) && rt("Invalid argument for bytesToString");
  const t = g.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, g);
  const s = [];
  for (let n = 0; n < t; n += e) {
    const r = Math.min(n + e, t), a = g.subarray(n, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
f(Ow, "bytesToString");
function Zf(g) {
  typeof g != "string" && rt("Invalid argument for stringToBytes");
  const t = g.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = g.charCodeAt(s) & 255;
  return e;
}
f(Zf, "stringToBytes");
function Hw(g) {
  return String.fromCharCode(g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, g & 255);
}
f(Hw, "string32");
function Uw() {
  const g = new Uint8Array(4);
  return g[0] = 1, new Uint32Array(g.buffer, 0, 1)[0] === 1;
}
f(Uw, "isLittleEndian");
function Gw() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
f(Gw, "isEvalSupported");
const lb = class lb {
  static get isLittleEndian() {
    return V(this, "isLittleEndian", Uw());
  }
  static get isEvalSupported() {
    return V(this, "isEvalSupported", Gw());
  }
  static get isOffscreenCanvasSupported() {
    return V(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return V(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get isFloat16ArraySupported() {
    return V(this, "isFloat16ArraySupported", typeof Float16Array < "u");
  }
  static get isSanitizerSupported() {
    return V(this, "isSanitizerSupported", typeof Sanitizer < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return V(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return V(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
};
f(lb, "FeatureTest");
let Gt = lb;
const op = Array.from(Array(256).keys(), (g) => g.toString(16).padStart(2, "0"));
var fn, iu, gp;
const ff = class ff {
  static makeHexColor(t, e, s) {
    return `#${op[t]}${op[e]}${op[s]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const n = t[s], r = t[s + 1];
    t[s] = n * e[0] + r * e[2] + e[4], t[s + 1] = n * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const n = e[0], r = e[1], a = e[2], o = e[3], h = e[4], l = e[5];
    for (let c = 0; c < 6; c += 2) {
      const d = t[s + c], p = t[s + c + 1];
      t[s + c] = d * n + p * a + h, t[s + c + 1] = d * r + p * o + l;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], n = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - n * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + n * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const n = e[0], r = e[1], a = e[2], o = e[3], h = e[4], l = e[5], c = t[0], d = t[1], p = t[2], y = t[3];
    let A = n * c + h, w = A, S = n * p + h, v = S, E = o * d + l, C = E, T = o * y + l, x = T;
    if (r !== 0 || a !== 0) {
      const _ = r * c, k = r * p, R = a * d, I = a * y;
      A += R, v += R, S += I, w += I, E += _, x += _, T += k, C += k;
    }
    s[0] = Math.min(s[0], A, S, w, v), s[1] = Math.min(s[1], E, T, C, x), s[2] = Math.max(s[2], A, S, w, v), s[3] = Math.max(s[3], E, T, C, x);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], n = t[1], r = t[2], a = t[3], o = s ** 2 + n ** 2, h = s * r + n * a, l = r ** 2 + a ** 2, c = (o + l) / 2, d = Math.sqrt(c ** 2 - (o * l - h ** 2));
    e[0] = Math.sqrt(c + d || 1), e[1] = Math.sqrt(c - d || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), n = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > n)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, n, a];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, n, r) {
    r[0] = Math.min(r[0], t, s), r[1] = Math.min(r[1], e, n), r[2] = Math.max(r[2], t, s), r[3] = Math.max(r[3], e, n);
  }
  static bezierBoundingBox(t, e, s, n, r, a, o, h, l) {
    l[0] = Math.min(l[0], t, o), l[1] = Math.min(l[1], e, h), l[2] = Math.max(l[2], t, o), l[3] = Math.max(l[3], e, h), b(this, fn, gp).call(this, t, s, r, o, e, n, a, h, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), l), b(this, fn, gp).call(this, t, s, r, o, e, n, a, h, 3 * (-e + 3 * (n - a) + h), 6 * (e - 2 * n + a), 3 * (n - e), l);
  }
};
fn = new WeakSet(), iu = /* @__PURE__ */ f(function(t, e, s, n, r, a, o, h, l, c) {
  if (l <= 0 || l >= 1)
    return;
  const d = 1 - l, p = l * l, y = p * l, A = d * (d * (d * t + 3 * l * e) + 3 * p * s) + y * n, w = d * (d * (d * r + 3 * l * a) + 3 * p * o) + y * h;
  c[0] = Math.min(c[0], A), c[1] = Math.min(c[1], w), c[2] = Math.max(c[2], A), c[3] = Math.max(c[3], w);
}, "#getExtremumOnCurve"), gp = /* @__PURE__ */ f(function(t, e, s, n, r, a, o, h, l, c, d, p) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, fn, iu).call(this, t, e, s, n, r, a, o, h, -d / c, p);
    return;
  }
  const y = c ** 2 - 4 * d * l;
  if (y < 0)
    return;
  const A = Math.sqrt(y), w = 2 * l;
  b(this, fn, iu).call(this, t, e, s, n, r, a, o, h, (-c + A) / w, p), b(this, fn, iu).call(this, t, e, s, n, r, a, o, h, (-c - A) / w, p);
}, "#getExtremum"), m(ff, fn), f(ff, "Util");
let D = ff;
function $w(g) {
  return decodeURIComponent(escape(g));
}
f($w, "stringToUTF8String");
let hp = null, iA = null;
function zw(g) {
  return hp || (hp = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, iA = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), g.replaceAll(hp, (t, e, s) => e ? e.normalize("NFKC") : iA.get(s));
}
f(zw, "normalizeUnicode");
function MA() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const g = new Uint8Array(32);
  return crypto.getRandomValues(g), Ow(g);
}
f(MA, "getUuid");
const fo = "pdfjs_internal_id_";
function jw(g, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [s, n, ...r] = e;
  if (!g(s) && !Number.isInteger(s) || !t(n))
    return !1;
  const a = r.length;
  let o = !0;
  switch (n.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const h of r)
    if (!(typeof h == "number" || o && h === null))
      return !1;
  return !0;
}
f(jw, "_isValidExplicitDest");
const Qm = /* @__PURE__ */ f(() => [], "makeArr"), Jm = /* @__PURE__ */ f(() => /* @__PURE__ */ new Map(), "makeMap"), mp = /* @__PURE__ */ f(() => /* @__PURE__ */ Object.create(null), "makeObj");
function he(g, t, e) {
  return Math.min(Math.max(g, t), e);
}
f(he, "MathClamp");
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(g) {
  return g.reduce((t, e) => t + e, 0);
});
const pf = class pf {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function n(r) {
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (pf.shouldBuildText(o))
        r?.attributes?.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          n(h);
    }
    return f(n, "walk"), n(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
};
f(pf, "XfaText");
let Ul = pf;
const cb = class cb {
  static setupStorage(t, e, s, n, r) {
    const a = n.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          n.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            n.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            n.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const h = o.target.options, l = h.selectedIndex === -1 ? "" : h[h.selectedIndex].value;
          n.setValue(e, {
            value: l
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: n,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${n}`);
    for (const [h, l] of Object.entries(a))
      if (l != null)
        switch (h) {
          case "class":
            l.length && t.setAttribute(h, l.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", l);
            break;
          case "style":
            Object.assign(t.style, l);
            break;
          case "textContent":
            t.textContent = l;
            break;
          default:
            (!o || h !== "href" && h !== "newWindow") && t.setAttribute(h, l);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    const e = t.annotationStorage, s = t.linkService, n = t.xfaHtml, r = t.intent || "display", a = document.createElement(n.name);
    n.attributes && this.setAttributes({
      html: a,
      element: n,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", h = t.div;
    if (h.append(a), t.viewport) {
      const d = `matrix(${t.viewport.transform.join(",")})`;
      h.style.transform = d;
    }
    o && h.setAttribute("class", "xfaLayer xfaFont");
    const l = [];
    if (n.children.length === 0) {
      if (n.value) {
        const d = document.createTextNode(n.value);
        a.append(d), o && Ul.shouldBuildText(n.name) && l.push(d);
      }
      return {
        textDivs: l
      };
    }
    const c = [[n, -1, a]];
    for (; c.length > 0; ) {
      const [d, p, y] = c.at(-1);
      if (p + 1 === d.children.length) {
        c.pop();
        continue;
      }
      const A = d.children[++c.at(-1)[1]];
      if (A === null)
        continue;
      const {
        name: w
      } = A;
      if (w === "#text") {
        const v = document.createTextNode(A.value);
        l.push(v), y.append(v);
        continue;
      }
      const S = A?.attributes?.xmlns ? document.createElementNS(A.attributes.xmlns, w) : document.createElement(w);
      if (y.append(S), A.attributes && this.setAttributes({
        html: S,
        element: A,
        storage: e,
        intent: r,
        linkService: s
      }), A.children?.length > 0)
        c.push([A, -1, S]);
      else if (A.value) {
        const v = document.createTextNode(A.value);
        o && Ul.shouldBuildText(w) && l.push(v), S.append(v);
      }
    }
    for (const d of h.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      d.setAttribute("readOnly", !0);
    return {
      textDivs: l
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
};
f(cb, "XfaLayer");
let Gu = cb;
const Pi = "http://www.w3.org/2000/svg", Cn = class Cn {
};
f(Cn, "PixelsPerInch"), M(Cn, "CSS", 96), M(Cn, "PDF", 72), M(Cn, "PDF_TO_CSS_UNITS", Cn.CSS / Cn.PDF);
let Er = Cn;
async function Zm(g, t = "text") {
  if (Ml(g, document.baseURI)) {
    const e = await fetch(g);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "blob":
        return e.blob();
      case "bytes":
        return e.bytes();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const n = new XMLHttpRequest();
    n.open("GET", g, !0), n.responseType = t === "bytes" ? "arraybuffer" : t, n.onreadystatechange = () => {
      if (n.readyState === XMLHttpRequest.DONE) {
        if (n.status === 200 || n.status === 0) {
          switch (t) {
            case "bytes":
              e(new Uint8Array(n.response));
              return;
            case "blob":
            case "json":
              e(n.response);
              return;
          }
          e(n.responseText);
          return;
        }
        s(new Error(n.statusText));
      }
    }, n.send(null);
  });
}
f(Zm, "fetchData");
const gf = class gf {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: n,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = n, this.offsetX = r, this.offsetY = a, s *= e;
    const h = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
    let c, d, p, y;
    switch (n %= 360, n < 0 && (n += 360), n) {
      case 180:
        c = -1, d = 0, p = 0, y = 1;
        break;
      case 90:
        c = 0, d = 1, p = 1, y = 0;
        break;
      case 270:
        c = 0, d = -1, p = -1, y = 0;
        break;
      case 0:
        c = 1, d = 0, p = 0, y = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, y = -y);
    let A, w, S, v;
    c === 0 ? (A = Math.abs(l - t[1]) * s + r, w = Math.abs(h - t[0]) * s + a, S = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (A = Math.abs(h - t[0]) * s + r, w = Math.abs(l - t[1]) * s + a, S = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, d * s, p * s, y * s, A - c * s * h - p * s * l, w - d * s * h - y * s * l], this.width = S, this.height = v;
  }
  get rawDims() {
    const t = this.viewBox;
    return V(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: n = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new gf({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: n,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    return D.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    D.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return D.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return D.applyInverseTransform(s, this.transform), s;
  }
};
f(gf, "PageViewport");
let Gl = gf;
const db = class db extends eo {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
};
f(db, "RenderingCancelledException");
let $l = db;
function tp(g) {
  const t = g.length;
  let e = 0;
  for (; e < t && g[e].trim() === ""; )
    e++;
  return g.substring(e, e + 5).toLowerCase() === "data:";
}
f(tp, "isDataScheme");
function tb(g) {
  return typeof g == "string" && /\.pdf$/i.test(g);
}
f(tb, "isPdfFile");
function Vw(g) {
  return [g] = g.split(/[#?]/, 1), fp(g);
}
f(Vw, "getFilenameFromUrl");
function Ww(g, t = "document.pdf") {
  if (typeof g != "string")
    return t;
  if (tp(g))
    return W('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = (/* @__PURE__ */ f((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  }, "getURL"))(g);
  if (!s)
    return t;
  const n = /* @__PURE__ */ f((o) => {
    try {
      let h = decodeURIComponent(o);
      return h.includes("/") && (h = fp(h), /^\.pdf$/i.test(h)) ? o : h;
    } catch {
      return o;
    }
  }, "decode"), r = /\.pdf$/i, a = fp(s.pathname);
  if (r.test(a))
    return n(a);
  if (s.searchParams.size > 0) {
    const o = /* @__PURE__ */ f((l) => [...l].findLast((c) => r.test(c)), "getLast"), h = o(s.searchParams.values()) ?? o(s.searchParams.keys());
    if (h)
      return n(h);
  }
  if (s.hash) {
    const h = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);
    if (h)
      return n(h[0]);
  }
  return t;
}
f(Ww, "getPdfFilenameFromUrl");
var Mn;
const ub = class ub {
  constructor() {
    m(this, Mn, /* @__PURE__ */ new Map());
    M(this, "times", []);
  }
  time(t) {
    i(this, Mn).has(t) && W(`Timer is already running for ${t}`), i(this, Mn).set(t, Date.now());
  }
  timeEnd(t) {
    i(this, Mn).has(t) || W(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: i(this, Mn).get(t),
      end: Date.now()
    }), i(this, Mn).delete(t);
  }
  toString() {
    const t = Math.max(...this.times.map((e) => e.name.length));
    return this.times.map((e) => `${e.name.padEnd(t)} ${e.end - e.start}ms
`).join("");
  }
};
Mn = new WeakMap(), f(ub, "StatTimer");
let $u = ub;
function Ml(g, t) {
  const e = t ? URL.parse(g, t) : URL.parse(g);
  return /https?:/.test(e?.protocol ?? "");
}
f(Ml, "isValidFetchUrl");
function Is(g) {
  g.preventDefault();
}
f(Is, "noContextMenu");
function Nt(g) {
  g.preventDefault(), g.stopPropagation();
}
f(Nt, "stopEvent");
function Xw(g) {
  console.log("Deprecated API usage: " + g);
}
f(Xw, "deprecated");
var nc;
const mf = class mf {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    i(this, nc) || u(this, nc, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = i(this, nc).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let n = parseInt(e[2], 10);
    n = n >= 1 && n <= 12 ? n - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let h = parseInt(e[6], 10);
    h = h >= 0 && h <= 59 ? h : 0;
    const l = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let d = parseInt(e[9], 10) || 0;
    return d = d >= 0 && d <= 59 ? d : 0, l === "-" ? (a += c, o += d) : l === "+" && (a -= c, o -= d), new Date(Date.UTC(s, n, r, a, o, h));
  }
};
nc = new WeakMap(), f(mf, "PDFDateString"), m(mf, nc);
let zl = mf;
function Yw(g, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: n
  } = g.attributes.style, r = [0, 0, parseInt(s), parseInt(n)];
  return new Gl({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
f(Yw, "getXfaPageViewport");
function Yd(g) {
  if (g.startsWith("#")) {
    const t = parseInt(g.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return g.startsWith("rgb(") ? g.slice(4, -1).split(",").map((t) => parseInt(t)) : g.startsWith("rgba(") ? g.slice(5, -1).split(",", 3).map((t) => parseInt(t)) : (W(`Not a valid color format: "${g}"`), [0, 0, 0]);
}
f(Yd, "getRGB");
function Kw(g) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of g.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    g.set(e, Yd(s));
  }
  t.remove();
}
f(Kw, "getColorValues");
function kt(g) {
  const {
    a: t,
    b: e,
    c: s,
    d: n,
    e: r,
    f: a
  } = g.getTransform();
  return [t, e, s, n, r, a];
}
f(kt, "getCurrentTransform");
function Qs(g) {
  const {
    a: t,
    b: e,
    c: s,
    d: n,
    e: r,
    f: a
  } = g.getTransform().invertSelf();
  return [t, e, s, n, r, a];
}
f(Qs, "getCurrentTransformInverse");
function qa(g, t, e = !1, s = !0) {
  if (t instanceof Gl) {
    const {
      pageWidth: n,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = g, o = Gt.isCSSRoundSupported, h = `var(--total-scale-factor) * ${n}px`, l = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${h}, var(--scale-round-x))` : `calc(${h})`, d = o ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = d) : (a.width = d, a.height = c);
  }
  s && g.setAttribute("data-main-rotation", t.rotation);
}
f(qa, "setLayerDimensions");
const Il = class Il {
  constructor() {
    const {
      pixelRatio: t
    } = Il;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, n, r = -1) {
    let a = 1 / 0, o = 1 / 0, h = 1 / 0;
    s = Il.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), n !== -1 && (o = n / t, h = n / e);
    const l = Math.min(a, o, h);
    return this.sx > l || this.sy > l ? (this.sx = l, this.sy = l, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
};
f(Il, "OutputScale");
let bn = Il;
const bp = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"], fb = class fb {
  static get isDarkMode() {
    return V(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
};
f(fb, "ColorScheme");
let yp = fb;
const pb = class pb {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: e
    } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: s
    } = window.getComputedStyle(t);
    return t.remove(), V(this, "commentForegroundColor", Yd(s));
  }
};
f(pb, "CSSConstants");
let Ap = pb;
function qw(g, t) {
  t = he(t ?? 1, 0, 1);
  const e = 255 * (1 - t);
  return g.map((s) => Math.round(s * t + e));
}
f(qw, "applyOpacity");
function nA(g, t) {
  const e = g[0] / 255, s = g[1] / 255, n = g[2] / 255, r = Math.max(e, s, n), a = Math.min(e, s, n), o = (r + a) / 2;
  if (r === a)
    t[0] = t[1] = 0;
  else {
    const h = r - a;
    switch (t[1] = o < 0.5 ? h / (r + a) : h / (2 - r - a), r) {
      case e:
        t[0] = ((s - n) / h + (s < n ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((n - e) / h + 2) * 60;
        break;
      case n:
        t[0] = ((e - s) / h + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
f(nA, "RGBToHSL");
function wp(g, t) {
  const e = g[0], s = g[1], n = g[2], r = (1 - Math.abs(2 * n - 1)) * s, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = n - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
f(wp, "HSLToRGB");
function rA(g) {
  return g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4;
}
f(rA, "computeLuminance");
function aA(g, t, e) {
  wp(g, e), e.map(rA);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  wp(t, e), e.map(rA);
  const n = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return s > n ? (s + 0.05) / (n + 0.05) : (n + 0.05) / (s + 0.05);
}
f(aA, "contrastRatio");
const oA = /* @__PURE__ */ new Map();
function Qw(g, t) {
  const e = g[0] + g[1] * 256 + g[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = oA.get(e);
  if (s)
    return s;
  const n = new Float32Array(9), r = n.subarray(0, 3), a = n.subarray(3, 6);
  nA(g, a);
  const o = n.subarray(6, 9);
  nA(t, o);
  const h = o[2] < 0.5, l = h ? 12 : 4.5;
  if (a[2] = h ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), aA(a, o, r) < l) {
    let c, d;
    h ? (c = a[2], d = 1) : (c = 0, d = a[2]);
    const p = 5e-3;
    for (; d - c > p; ) {
      const y = a[2] = (c + d) / 2;
      h === aA(a, o, r) < l ? c = y : d = y;
    }
    a[2] = h ? d : c;
  }
  return wp(a, r), s = D.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), oA.set(e, s), s;
}
f(Qw, "findContrastColor");
function PA({
  html: g,
  dir: t,
  className: e
}, s) {
  const n = document.createDocumentFragment();
  if (typeof g == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = g.split(/(?:\r\n?|\n)/);
    for (let o = 0, h = a.length; o < h; ++o) {
      const l = a[o];
      r.append(document.createTextNode(l)), o < h - 1 && r.append(document.createElement("br"));
    }
    n.append(r);
  } else
    Gu.render({
      xfaHtml: g,
      div: n,
      intent: "richText"
    });
  n.firstElementChild.classList.add("richText", e), s.append(n);
}
f(PA, "renderRichText");
function IA(g) {
  const t = new Path2D();
  if (!g)
    return t;
  for (let e = 0, s = g.length; e < s; )
    switch (g[e++]) {
      case il.moveTo:
        t.moveTo(g[e++], g[e++]);
        break;
      case il.lineTo:
        t.lineTo(g[e++], g[e++]);
        break;
      case il.curveTo:
        t.bezierCurveTo(g[e++], g[e++], g[e++], g[e++], g[e++], g[e++]);
        break;
      case il.quadraticCurveTo:
        t.quadraticCurveTo(g[e++], g[e++], g[e++], g[e++]);
        break;
      case il.closePath:
        t.closePath();
        break;
      default:
        W(`Unrecognized drawing path operator: ${g[e - 1]}`);
        break;
    }
  return t;
}
f(IA, "makePathFromDrawOPS");
var Pn, In, ms, bs, rc, Dn, wo, vo, ac, bf, DA, ye, LA, RA, no, ol;
const ei = class ei {
  constructor(t) {
    m(this, ye);
    m(this, Pn, null);
    m(this, In, null);
    m(this, ms);
    m(this, bs, null);
    m(this, rc, null);
    m(this, Dn, null);
    m(this, wo, null);
    m(this, vo, null);
    u(this, ms, t), i(ei, ac) || u(ei, ac, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = u(this, Pn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = i(this, ms)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Is, {
      signal: e
    }), t.addEventListener("pointerdown", b(ei, bf, DA), {
      signal: e
    }));
    const s = u(this, bs, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const n = i(this, ms).toolbarPosition;
    if (n) {
      const {
        style: r
      } = t, a = i(this, ms)._uiManager.direction === "ltr" ? 1 - n[0] : n[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return i(this, Pn);
  }
  hide() {
    i(this, Pn).classList.add("hidden"), i(this, In)?.hideDropdown();
  }
  show() {
    i(this, Pn).classList.remove("hidden"), i(this, rc)?.shown(), i(this, Dn)?.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = i(this, ms), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", i(ei, ac)[t]), b(this, ye, no).call(this, s) && s.addEventListener("click", (n) => {
      e.delete();
    }, {
      signal: e._signal
    }), i(this, bs).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, ye, no).call(this, e), i(this, bs).append(e, i(this, ye, ol)), u(this, rc, t);
  }
  addComment(t, e = null) {
    if (i(this, Dn))
      return;
    const s = t.renderForToolbar();
    if (!s)
      return;
    b(this, ye, no).call(this, s);
    const n = u(this, wo, i(this, ye, ol));
    e ? (i(this, bs).insertBefore(s, e), i(this, bs).insertBefore(n, e)) : i(this, bs).append(s, n), u(this, Dn, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (i(this, In))
      return;
    u(this, In, t);
    const e = t.renderButton();
    b(this, ye, no).call(this, e), i(this, bs).append(e, i(this, ye, ol));
  }
  async addEditSignatureButton(t) {
    const e = u(this, vo, await t.renderEditButton(i(this, ms)));
    b(this, ye, no).call(this, e), i(this, bs).append(e, i(this, ye, ol));
  }
  removeButton(t) {
    switch (t) {
      case "comment":
        i(this, Dn)?.removeToolbarCommentButton(), u(this, Dn, null), i(this, wo)?.remove(), u(this, wo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        e && this.addColorPicker(e);
        break;
      case "altText":
        e && await this.addAltText(e);
        break;
      case "editSignature":
        e && await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        e && this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, s) {
    if (!e && t === "comment")
      return;
    const n = i(this, bs).querySelector(s);
    n && t === "comment" && this.addComment(e, n);
  }
  updateEditSignatureButton(t) {
    i(this, vo) && (i(this, vo).title = t);
  }
  remove() {
    i(this, Pn).remove(), i(this, In)?.destroy(), u(this, In, null);
  }
};
Pn = new WeakMap(), In = new WeakMap(), ms = new WeakMap(), bs = new WeakMap(), rc = new WeakMap(), Dn = new WeakMap(), wo = new WeakMap(), vo = new WeakMap(), ac = new WeakMap(), bf = new WeakSet(), DA = /* @__PURE__ */ f(function(t) {
  t.stopPropagation();
}, "#pointerDown"), ye = new WeakSet(), LA = /* @__PURE__ */ f(function(t) {
  i(this, ms)._focusEventsAllowed = !1, Nt(t);
}, "#focusIn"), RA = /* @__PURE__ */ f(function(t) {
  i(this, ms)._focusEventsAllowed = !0, Nt(t);
}, "#focusOut"), no = /* @__PURE__ */ f(function(t) {
  const e = i(this, ms)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", b(this, ye, LA).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, ye, RA).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Is, {
    signal: e
  }), !0);
}, "#addListenersToElement"), ol = /* @__PURE__ */ f(function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, "#divider"), m(ei, bf), f(ei, "EditorToolbar"), m(ei, ac, null);
let vp = ei;
var oc, Dr, Li, An, NA, BA, Ep;
const gb = class gb {
  constructor(t) {
    m(this, An);
    m(this, oc, null);
    m(this, Dr, null);
    m(this, Li);
    u(this, Li, t);
  }
  show(t, e, s) {
    const [n, r] = b(this, An, BA).call(this, e, s), {
      style: a
    } = i(this, Dr) || u(this, Dr, b(this, An, NA).call(this));
    t.append(i(this, Dr)), a.insetInlineEnd = `${100 * n}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    i(this, Dr).remove();
  }
};
oc = new WeakMap(), Dr = new WeakMap(), Li = new WeakMap(), An = new WeakSet(), NA = /* @__PURE__ */ f(function() {
  const t = u(this, Dr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = i(this, Li)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Is, {
    signal: e
  });
  const s = u(this, oc, document.createElement("div"));
  return s.className = "buttons", t.append(s), i(this, Li).hasCommentManager() && b(this, An, Ep).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    i(this, Li).commentSelection("floating_button");
  }), b(this, An, Ep).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    i(this, Li).highlightSelection("floating_button");
  }), t;
}, "#render"), BA = /* @__PURE__ */ f(function(t, e) {
  let s = 0, n = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      n = o, s = a;
      continue;
    }
    e ? o > n && (n = o) : o < n && (n = o);
  }
  return [e ? 1 - n : n, s];
}, "#getLastPoint"), Ep = /* @__PURE__ */ f(function(t, e, s, n) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = i(this, Li)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", Is, {
    signal: o
  }), r.addEventListener("click", n, {
    signal: o
  })), i(this, oc).append(r);
}, "#makeButton"), f(gb, "FloatingToolbar");
let Sp = gb;
function FA(g, t, e) {
  for (const s of e)
    t.addEventListener(s, g[s].bind(g));
}
f(FA, "bindEvents");
var Lr, Rr, So, Nr;
const ot = class ot {
  static initializeAndAddPointerId(t) {
    (i(ot, Rr) || u(ot, Rr, /* @__PURE__ */ new Set())).add(t);
  }
  static setPointer(t, e) {
    i(ot, Lr) || u(ot, Lr, e), i(ot, Nr) ?? u(ot, Nr, t);
  }
  static setTimeStamp(t) {
    u(ot, So, t);
  }
  static isSamePointerId(t) {
    return i(ot, Lr) === t;
  }
  static isSamePointerIdOrRemove(t) {
    return i(ot, Lr) === t ? !0 : (i(ot, Rr)?.delete(t), !1);
  }
  static isSamePointerType(t) {
    return i(ot, Nr) === t;
  }
  static isInitializedAndDifferentPointerType(t) {
    return i(ot, Nr) !== null && !ot.isSamePointerType(t);
  }
  static isSameTimeStamp(t) {
    return i(ot, So) === t;
  }
  static isUsingMultiplePointers() {
    return i(ot, Rr)?.size >= 1;
  }
  static clearPointerType() {
    u(ot, Nr, null);
  }
  static clearPointerIds() {
    u(ot, Lr, NaN), u(ot, Rr, null);
  }
  static clearTimeStamp() {
    u(ot, So, NaN);
  }
};
Lr = new WeakMap(), Rr = new WeakMap(), So = new WeakMap(), Nr = new WeakMap(), f(ot, "CurrentPointers"), m(ot, Lr, NaN), m(ot, Rr, null), m(ot, So, NaN), m(ot, Nr, null);
let we = ot;
var yf;
const mb = class mb {
  constructor() {
    m(this, yf, 0);
  }
  get id() {
    return `${Fl}${zt(this, yf)._++}`;
  }
};
yf = new WeakMap(), f(mb, "IdManager");
let Cp = mb;
var Eo, hc, ve, Co, nu;
const Af = class Af {
  constructor() {
    m(this, Co);
    m(this, Eo, MA());
    m(this, hc, 0);
    m(this, ve, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), n = new Image();
    n.src = t;
    const r = n.decode().then(() => (s.drawImage(n, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return V(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: n,
      type: r
    } = t;
    return b(this, Co, nu).call(this, `${e}_${s}_${n}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, Co, nu).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, Co, nu).call(this, t, s);
  }
  async getFromId(t) {
    i(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    const e = i(this, ve).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    i(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    let s = i(this, ve).get(t);
    if (s?.bitmap)
      return s.refCounter += 1, s;
    const n = new OffscreenCanvas(e.width, e.height);
    return n.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: n.transferToImageBitmap(),
      id: `image_${i(this, Eo)}_${zt(this, hc)._++}`,
      refCounter: 1,
      isSvg: !1
    }, i(this, ve).set(t, s), i(this, ve).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = i(this, ve).get(t);
    return e?.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    i(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    const e = i(this, ve).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const n = new OffscreenCanvas(s.width, s.height);
      n.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = n.convertToBlob();
    }
    s.close?.(), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${i(this, Eo)}_`);
  }
};
Eo = new WeakMap(), hc = new WeakMap(), ve = new WeakMap(), Co = new WeakSet(), nu = /* @__PURE__ */ f(async function(t, e) {
  i(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
  let s = i(this, ve).get(t);
  if (s === null)
    return null;
  if (s?.bitmap)
    return s.refCounter += 1, s;
  try {
    s ||= {
      bitmap: null,
      id: `image_${i(this, Eo)}_${zt(this, hc)._++}`,
      refCounter: 0,
      isSvg: !1
    };
    let n;
    if (typeof e == "string" ? (s.url = e, n = await Zm(e, "blob")) : e instanceof File ? n = s.file = e : e instanceof Blob && (n = e), n.type === "image/svg+xml") {
      const r = Af._isSVGFittingCanvas, a = new FileReader(), o = new Image(), h = new Promise((l, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, l();
        }, a.onload = async () => {
          const d = s.svgUrl = a.result;
          o.src = await r ? `${d}#svgView(preserveAspectRatio(none))` : d;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(n), await h;
    } else
      s.bitmap = await createImageBitmap(n);
    s.refCounter = 1;
  } catch (n) {
    W(n), s = null;
  }
  return i(this, ve).set(t, s), s && i(this, ve).set(s.id, s), s;
}, "#get"), f(Af, "ImageManager");
let Tp = Af;
var Ft, Ln, lc, xt;
const bb = class bb {
  constructor(t = 128) {
    m(this, Ft, []);
    m(this, Ln, !1);
    m(this, lc);
    m(this, xt, -1);
    u(this, lc, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: n,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (n && t(), i(this, Ln))
      return;
    const h = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (i(this, xt) === -1) {
      i(this, Ft).length > 0 && (i(this, Ft).length = 0), u(this, xt, 0), i(this, Ft).push(h);
      return;
    }
    if (a && i(this, Ft)[i(this, xt)].type === r) {
      o && (h.undo = i(this, Ft)[i(this, xt)].undo), i(this, Ft)[i(this, xt)] = h;
      return;
    }
    const l = i(this, xt) + 1;
    l === i(this, lc) ? i(this, Ft).splice(0, 1) : (u(this, xt, l), l < i(this, Ft).length && i(this, Ft).splice(l)), i(this, Ft).push(h);
  }
  undo() {
    if (i(this, xt) === -1)
      return;
    u(this, Ln, !0);
    const {
      undo: t,
      post: e
    } = i(this, Ft)[i(this, xt)];
    t(), e?.(), u(this, Ln, !1), u(this, xt, i(this, xt) - 1);
  }
  redo() {
    if (i(this, xt) < i(this, Ft).length - 1) {
      u(this, xt, i(this, xt) + 1), u(this, Ln, !0);
      const {
        cmd: t,
        post: e
      } = i(this, Ft)[i(this, xt)];
      t(), e?.(), u(this, Ln, !1);
    }
  }
  hasSomethingToUndo() {
    return i(this, xt) !== -1;
  }
  hasSomethingToRedo() {
    return i(this, xt) < i(this, Ft).length - 1;
  }
  cleanType(t) {
    if (i(this, xt) !== -1) {
      for (let e = i(this, xt); e >= 0; e--)
        if (i(this, Ft)[e].type !== t) {
          i(this, Ft).splice(e + 1, i(this, xt) - e), u(this, xt, e);
          return;
        }
      i(this, Ft).length = 0, u(this, xt, -1);
    }
  }
  destroy() {
    u(this, Ft, null);
  }
};
Ft = new WeakMap(), Ln = new WeakMap(), lc = new WeakMap(), xt = new WeakMap(), f(bb, "CommandManager");
let xp = bb;
var wf, OA;
const yb = class yb {
  constructor(t) {
    m(this, wf);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Gt.platform;
    for (const [s, n, r = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: n,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: n,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(b(this, wf, OA).call(this, e));
    if (!s)
      return;
    const {
      callback: n,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (n.bind(t, ...a, e)(), r || Nt(e));
  }
};
wf = new WeakSet(), OA = /* @__PURE__ */ f(function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
}, "#serialize"), f(yb, "KeyboardManager");
let Qa = yb;
const Dl = class Dl {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Kw(t), V(this, "_colors", t);
  }
  convert(t) {
    const e = Yd(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, n] of this._colors)
      if (n.every((r, a) => r === e[a]))
        return Dl._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? D.makeHexColor(...e) : t;
  }
};
f(Dl, "ColorManager"), M(Dl, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let _p = Dl;
var To, We, xo, It, _t, _o, ko, ke, Mo, ys, te, Rn, Nn, Bn, Fn, ii, As, Br, cc, dc, Po, uc, ni, On, Io, Hn, ri, vf, Ri, Do, fc, Un, Fr, Lo, Gn, pc, Xt, ht, Ni, $n, zn, gc, Ro, mc, jn, ai, Bi, bc, yc, ws, L, ru, kp, HA, UA, GA, hl, $A, zA, jA, Mp, VA, WA, XA, YA, xe, Ii, KA, qA, Pp, QA, ll, Ip;
const kr = class kr {
  constructor(t, e, s, n, r, a, o, h, l, c, d, p, y, A, w, S) {
    m(this, L);
    m(this, To, new AbortController());
    m(this, We, null);
    m(this, xo, null);
    m(this, It, /* @__PURE__ */ new Map());
    m(this, _t, /* @__PURE__ */ new Map());
    m(this, _o, null);
    m(this, ko, null);
    m(this, ke, null);
    m(this, Mo, null);
    m(this, ys, new xp());
    m(this, te, null);
    m(this, Rn, null);
    m(this, Nn, null);
    m(this, Bn, 0);
    m(this, Fn, /* @__PURE__ */ new Set());
    m(this, ii, null);
    m(this, As, null);
    m(this, Br, /* @__PURE__ */ new Set());
    M(this, "_editorUndoBar", null);
    m(this, cc, !1);
    m(this, dc, !1);
    m(this, Po, !1);
    m(this, uc, null);
    m(this, ni, null);
    m(this, On, null);
    m(this, Io, null);
    m(this, Hn, !1);
    m(this, ri, null);
    m(this, vf, new Cp());
    m(this, Ri, !1);
    m(this, Do, !1);
    m(this, fc, !1);
    m(this, Un, null);
    m(this, Fr, null);
    m(this, Lo, null);
    m(this, Gn, null);
    m(this, pc, null);
    m(this, Xt, z.NONE);
    m(this, ht, /* @__PURE__ */ new Set());
    m(this, Ni, null);
    m(this, $n, null);
    m(this, zn, null);
    m(this, gc, null);
    m(this, Ro, null);
    m(this, mc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, jn, [0, 0]);
    m(this, ai, null);
    m(this, Bi, null);
    m(this, bc, null);
    m(this, yc, null);
    m(this, ws, null);
    const v = this._signal = i(this, To).signal;
    u(this, Bi, t), u(this, bc, e), u(this, yc, s), u(this, ko, n), u(this, te, r), u(this, $n, a), u(this, Ro, h), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: v
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: v
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: v
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: v
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: v
    }), o._on("switchannotationeditorparams", (E) => this.updateParams(E.type, E.value), {
      signal: v
    }), window.addEventListener("pointerdown", () => {
      u(this, Do, !0);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("pointerup", () => {
      u(this, Do, !1);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("beforeunload", b(this, L, HA).bind(this), {
      capture: !0,
      signal: v
    }), b(this, L, $A).call(this), b(this, L, YA).call(this), b(this, L, Mp).call(this), u(this, ke, h.annotationStorage), u(this, uc, h.filterFactory), u(this, zn, l), u(this, Io, c || null), u(this, cc, d), u(this, dc, p), u(this, Po, y), u(this, pc, A || null), this.viewParameters = {
      realScale: Er.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = w || null, this._supportsPinchToZoom = S !== !1, r?.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = kr.prototype, e = /* @__PURE__ */ f((a) => i(a, Bi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), "arrowChecker"), s = /* @__PURE__ */ f((a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: h
        } = o;
        return h !== "text" && h !== "number";
      }
      return !0;
    }, "textInputChecker"), n = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return V(this, "_keyboardManager", new Qa([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: /* @__PURE__ */ f((a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && i(a, Bi).contains(o) && !a.isEnterHandled, "checker")
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: /* @__PURE__ */ f((a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && i(a, Bi).contains(document.activeElement), "checker")
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, n],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    i(this, ws)?.resolve(), u(this, ws, null), i(this, To)?.abort(), u(this, To, null), this._signal = null;
    for (const t of i(this, _t).values())
      t.destroy();
    i(this, _t).clear(), i(this, It).clear(), i(this, Br).clear(), i(this, Gn)?.clear(), u(this, We, null), i(this, ht).clear(), i(this, ys).destroy(), i(this, ko)?.destroy(), i(this, te)?.destroy(), i(this, $n)?.destroy(), i(this, ri)?.hide(), u(this, ri, null), i(this, Lo)?.destroy(), u(this, Lo, null), u(this, xo, null), i(this, ni) && (clearTimeout(i(this, ni)), u(this, ni, null)), i(this, ai) && (clearTimeout(i(this, ai)), u(this, ai, null)), this._editorUndoBar?.destroy(), u(this, Ro, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return i(this, pc);
  }
  get useNewAltTextFlow() {
    return i(this, dc);
  }
  get useNewAltTextWhenAddingImage() {
    return i(this, Po);
  }
  get hcmFilter() {
    return V(this, "hcmFilter", i(this, zn) ? i(this, uc).addHCMFilter(i(this, zn).foreground, i(this, zn).background) : "none");
  }
  get direction() {
    return V(this, "direction", getComputedStyle(i(this, Bi)).direction);
  }
  get _highlightColors() {
    return V(this, "_highlightColors", i(this, Io) ? new Map(i(this, Io).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return V(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!i(this, zn);
    for (const [n, r] of t) {
      const a = n.endsWith("_HCM");
      if (s && a) {
        e.set(n.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(n, r);
    }
    return V(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return V(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), u(this, Nn, t);
  }
  setMainHighlightColorPicker(t) {
    u(this, Lo, t);
  }
  editAltText(t, e = !1) {
    i(this, ko)?.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!i(this, te);
  }
  editComment(t, e, s, n) {
    i(this, te)?.showDialog(this, t, e, s, n);
  }
  selectComment(t, e) {
    i(this, _t).get(t)?.getEditorByUID(e)?.toggleComment(!0, !0);
  }
  updateComment(t) {
    i(this, te)?.updateComment(t.getData());
  }
  updatePopupColor(t) {
    i(this, te)?.updatePopupColor(t);
  }
  removeComment(t) {
    i(this, te)?.removeComments([t.uid]);
  }
  deleteComment(t, e) {
    const s = /* @__PURE__ */ f(() => {
      t.comment = e;
    }, "undo"), n = /* @__PURE__ */ f(() => {
      this._editorUndoBar?.show(s, "comment"), this.toggleComment(null), t.comment = null;
    }, "cmd");
    this.addCommands({
      cmd: n,
      undo: s,
      mustExec: !0
    });
  }
  toggleComment(t, e, s = void 0) {
    i(this, te)?.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    return t && i(this, te)?.makeCommentColor(t, e) || null;
  }
  getCommentDialogElement() {
    return i(this, te)?.dialogElement || null;
  }
  async waitForEditorsRendered(t) {
    if (i(this, _t).has(t - 1))
      return;
    const {
      resolve: e,
      promise: s
    } = Promise.withResolvers(), n = /* @__PURE__ */ f((r) => {
      r.pageNumber === t && (this._eventBus._off("editorsrendered", n), e());
    }, "onEditorsRendered");
    this._eventBus.on("editorsrendered", n), await s;
  }
  getSignature(t) {
    i(this, $n)?.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return i(this, $n);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        u(this, Po, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    u(this, Bn, t - 1);
  }
  deletePage(t) {
    for (const e of this.getEditors(t))
      e.remove();
    i(this, _t).delete(t), i(this, Bn) === t && u(this, Bn, 0);
  }
  focusMainContainer() {
    i(this, Bi).focus();
  }
  findParent(t, e) {
    for (const s of i(this, _t).values()) {
      const {
        x: n,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= n && t <= n + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    i(this, bc).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    i(this, Br).add(t);
  }
  removeShouldRescale(t) {
    i(this, Br).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * Er.PDF_TO_CSS_UNITS;
    for (const e of i(this, Br))
      e.onScaleChanging();
    i(this, Nn)?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const s = document.getSelection();
    if (!s || s.isCollapsed)
      return;
    const {
      anchorNode: n,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = s, h = s.toString(), c = b(this, L, ru).call(this, s).closest(".textLayer"), d = this.getSelectionBoxes(c);
    if (!d)
      return;
    s.empty();
    const p = b(this, L, kp).call(this, c), y = i(this, Xt) === z.NONE, A = /* @__PURE__ */ f(() => {
      const w = p?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: d,
        anchorNode: n,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: h
      });
      y && this.showAllEditors("highlight", !0, !0), e && w?.editComment();
    }, "callback");
    if (y) {
      this.switchToMode(z.HIGHLIGHT, A);
      return;
    }
    A();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!i(this, ke))
      return null;
    const e = `${Fl}${t}`, s = i(this, ke).getRawValue(e);
    return s && i(this, ke).remove(e), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && i(this, ke) && !i(this, ke).has(t.id) && i(this, ke).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = i(this, yc);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, i(this, Hn) && (u(this, Hn, !1), b(this, L, hl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of i(this, ht))
      if (e.div.contains(t)) {
        u(this, Fr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!i(this, Fr))
      return;
    const [t, e] = i(this, Fr);
    u(this, Fr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, L, Mp).call(this), this.setEditingState(!0);
  }
  removeEditListeners() {
    b(this, L, VA).call(this), this.setEditingState(!1);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of i(this, As))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of i(this, As))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    if (t.preventDefault(), i(this, We)?.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const s of i(this, ht)) {
      const n = s.serialize(!0);
      n && e.push(n);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of i(this, As))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      W(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const n = this.currentLayer;
    try {
      const r = [];
      for (const h of s) {
        const l = await n.deserialize(h);
        if (!l)
          return;
        r.push(l);
      }
      const a = /* @__PURE__ */ f(() => {
        for (const h of r)
          b(this, L, Pp).call(this, h);
        b(this, L, Ip).call(this, r);
      }, "cmd"), o = /* @__PURE__ */ f(() => {
        for (const h of r)
          h.remove();
      }, "undo");
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      W(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), i(this, Xt) !== z.NONE && !this.isEditorHandlingKeyboard && kr._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, i(this, Hn) && (u(this, Hn, !1), b(this, L, hl).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  updatePageIndex(t, e) {
    for (const n of this.getEditors(t))
      n.pageIndex = e;
    const s = i(this, _o).get(t);
    s && (s.pageIndex = e, i(this, _t).set(e, s), i(this, Ri) ? s.enable() : s.disable());
  }
  startUpdatePages() {
    u(this, _o, new Map(i(this, _t))), i(this, _t).clear();
  }
  endUpdatePages() {
    u(this, _o, null);
  }
  clonePage(t, e) {
    for (const s of this.getEditors(t)) {
      const n = s.serialize(s.mode !== z.HIGHLIGHT);
      n && (n.pageIndex = e, n.id = this.getId(), n.isClone = !0, delete n.popupRef, i(this, ke).setValue(n.id, n));
    }
  }
  findClonesForPage(t) {
    const e = [], {
      pageIndex: s
    } = t;
    for (const [n, r] of i(this, ke))
      r.pageIndex === s && r.isClone && (i(this, ke).remove(n), e.push(t.deserialize(r).then((a) => {
        a && (a.isClone = !0, t.addOrRebuild(a));
      })));
    return Promise.all(e);
  }
  setEditingState(t) {
    t ? (b(this, L, zA).call(this), b(this, L, WA).call(this), b(this, L, xe).call(this, {
      isEditing: i(this, Xt) !== z.NONE,
      isEmpty: b(this, L, ll).call(this),
      hasSomethingToUndo: i(this, ys).hasSomethingToUndo(),
      hasSomethingToRedo: i(this, ys).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, L, jA).call(this), b(this, L, XA).call(this), b(this, L, xe).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!i(this, As)) {
      u(this, As, t);
      for (const e of i(this, As))
        b(this, L, Ii).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return i(this, vf).id;
  }
  get currentLayer() {
    return i(this, _t).get(i(this, Bn));
  }
  getLayer(t) {
    return i(this, _t).get(t);
  }
  get currentPageIndex() {
    return i(this, Bn);
  }
  addLayer(t) {
    i(this, _t).set(t.pageIndex, t), i(this, Ri) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    i(this, _t).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, n = !1, r = !1, a = !1) {
    if (i(this, Xt) !== t && !(i(this, ws) && (await i(this, ws).promise, !i(this, ws)))) {
      if (u(this, ws, Promise.withResolvers()), i(this, Nn)?.commitOrRemove(), i(this, Xt) === z.POPUP && i(this, te)?.hideSidebar(), i(this, te)?.destroyPopup(), u(this, Xt, t), t === z.NONE) {
        this.setEditingState(!1), b(this, L, qA).call(this);
        for (const o of i(this, It).values())
          o.hideStandaloneCommentButton();
        this._editorUndoBar?.hide(), this.toggleComment(null), i(this, ws).resolve();
        return;
      }
      for (const o of i(this, It).values())
        o.addStandaloneCommentButton();
      t === z.SIGNATURE && await i(this, $n)?.loadSignatures(), s && we.clearPointerType(), this.setEditingState(!0), await b(this, L, KA).call(this), this.unselectAll();
      for (const o of i(this, _t).values())
        o.updateMode(t);
      if (t === z.POPUP) {
        i(this, xo) || u(this, xo, await i(this, Ro).getAnnotationsByType(new Set(i(this, As).map((l) => l._editorType))));
        const o = /* @__PURE__ */ new Set(), h = [];
        for (const l of i(this, It).values()) {
          const {
            annotationElementId: c,
            hasComment: d,
            deleted: p
          } = l;
          c && o.add(c), d && !p && h.push(l.getData());
        }
        for (const l of i(this, xo)) {
          const {
            id: c,
            popupRef: d,
            contentsObj: p
          } = l;
          d && p?.str && !o.has(c) && !i(this, Fn).has(c) && h.push(l);
        }
        i(this, te)?.showSidebar(h);
      }
      if (!e) {
        n && this.addNewEditorFromKeyboard(), i(this, ws).resolve();
        return;
      }
      for (const o of i(this, It).values())
        o.uid === e ? (this.setSelected(o), a ? o.editComment() : r ? o.enterInEditMode() : o.focus()) : o.unselect();
      i(this, ws).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== i(this, Xt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (i(this, As)) {
      switch (t) {
        case Z.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case Z.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (i(this, gc) || u(this, gc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of i(this, ht))
          s.updateParams(t, e);
      else
        for (const s of i(this, As))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    for (const r of i(this, It).values())
      r.editorType === t && r.show(e);
    (i(this, gc)?.get(Z.HIGHLIGHT_SHOW_ALL) ?? !0) !== e && b(this, L, Ii).call(this, [[Z.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (i(this, fc) !== t) {
      u(this, fc, t);
      for (const e of i(this, _t).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of i(this, It).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return i(this, It).get(t);
  }
  addEditor(t) {
    i(this, It).set(t.id, t);
  }
  removeEditor(t) {
    t.div.contains(document.activeElement) && (i(this, ni) && clearTimeout(i(this, ni)), u(this, ni, setTimeout(() => {
      this.focusMainContainer(), u(this, ni, null);
    }, 0))), i(this, It).delete(t.id), t.annotationElementId && i(this, Gn)?.delete(t.annotationElementId), this.unselect(t), (!t.annotationElementId || !i(this, Fn).has(t.annotationElementId)) && i(this, ke)?.remove(t.id);
  }
  addDeletedAnnotationElement(t) {
    i(this, Fn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return i(this, Fn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    i(this, Fn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    i(this, We) !== t && (u(this, We, t), t && b(this, L, Ii).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    i(this, L, QA) === t && b(this, L, Ii).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, L, Ii).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (i(this, ht).has(t)) {
      i(this, ht).delete(t), t.unselect(), b(this, L, xe).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    i(this, ht).add(t), t.select(), b(this, L, Ii).call(this, t.propertiesToUpdate), b(this, L, xe).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    this.updateToolbar({
      mode: t.mode,
      editId: t.uid
    }), i(this, Nn)?.commitOrRemove();
    for (const e of i(this, ht))
      e !== t && e.unselect();
    i(this, te)?.destroyPopup(), i(this, ht).clear(), i(this, ht).add(t), t.select(), b(this, L, Ii).call(this, t.propertiesToUpdate), b(this, L, xe).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return i(this, ht).has(t);
  }
  get firstSelectedEditor() {
    return i(this, ht).values().next().value;
  }
  unselect(t) {
    t.unselect(), i(this, ht).delete(t), b(this, L, xe).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return i(this, ht).size !== 0;
  }
  get isEnterHandled() {
    return i(this, ht).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    i(this, ys).undo(), b(this, L, xe).call(this, {
      hasSomethingToUndo: i(this, ys).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, L, ll).call(this)
    }), this._editorUndoBar?.hide();
  }
  redo() {
    i(this, ys).redo(), b(this, L, xe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: i(this, ys).hasSomethingToRedo(),
      isEmpty: b(this, L, ll).call(this)
    });
  }
  addCommands(t) {
    i(this, ys).add(t), b(this, L, xe).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, L, ll).call(this)
    });
  }
  cleanUndoStack(t) {
    i(this, ys).cleanType(t);
  }
  delete() {
    this.commitOrRemove();
    const t = this.currentLayer?.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...i(this, ht)], s = /* @__PURE__ */ f(() => {
      this._editorUndoBar?.show(n, e.length === 1 ? e[0].editorType : e.length);
      for (const r of e)
        r.remove();
    }, "cmd"), n = /* @__PURE__ */ f(() => {
      for (const r of e)
        b(this, L, Pp).call(this, r);
    }, "undo");
    this.addCommands({
      cmd: s,
      undo: n,
      mustExec: !0
    });
  }
  commitOrRemove() {
    i(this, We)?.commitOrRemove();
  }
  hasSomethingToControl() {
    return i(this, We) || this.hasSelection;
  }
  selectAll() {
    for (const t of i(this, ht))
      t.commit();
    b(this, L, Ip).call(this, i(this, It).values());
  }
  unselectAll() {
    if (!(i(this, We) && (i(this, We).commitOrRemove(), i(this, Xt) !== z.NONE)) && !i(this, Nn)?.commitOrRemove() && (i(this, te)?.destroyPopup(), !!this.hasSelection)) {
      for (const t of i(this, ht))
        t.unselect();
      i(this, ht).clear(), b(this, L, xe).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    i(this, jn)[0] += t, i(this, jn)[1] += e;
    const [n, r] = i(this, jn), a = [...i(this, ht)], o = 1e3;
    i(this, ai) && clearTimeout(i(this, ai)), u(this, ai, setTimeout(() => {
      u(this, ai, null), i(this, jn)[0] = i(this, jn)[1] = 0, this.addCommands({
        cmd: /* @__PURE__ */ f(() => {
          for (const h of a)
            i(this, It).has(h.id) && (h.translateInPage(n, r), h.translationDone());
        }, "cmd"),
        undo: /* @__PURE__ */ f(() => {
          for (const h of a)
            i(this, It).has(h.id) && (h.translateInPage(-n, -r), h.translationDone());
        }, "undo"),
        mustExec: !1
      });
    }, o));
    for (const h of a)
      h.translateInPage(t, e), h.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), u(this, ii, /* @__PURE__ */ new Map());
      for (const t of i(this, ht))
        i(this, ii).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!i(this, ii))
      return !1;
    this.disableUserSelect(!1);
    const t = i(this, ii);
    u(this, ii, null);
    let e = !1;
    for (const [{
      x: n,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = n, o.newY = r, o.newPageIndex = a, e ||= n !== o.savedX || r !== o.savedY || a !== o.savedPageIndex;
    if (!e)
      return !1;
    const s = /* @__PURE__ */ f((n, r, a, o) => {
      if (i(this, It).has(n.id)) {
        const h = i(this, _t).get(o);
        h ? n._setParentAndPosition(h, r, a) : (n.pageIndex = o, n.x = r, n.y = a);
      }
    }, "move");
    return this.addCommands({
      cmd: /* @__PURE__ */ f(() => {
        for (const [n, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(n, r, a, o);
      }, "cmd"),
      undo: /* @__PURE__ */ f(() => {
        for (const [n, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(n, r, a, o);
      }, "undo"),
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (i(this, ii))
      for (const s of i(this, ii).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || i(this, ht).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return i(this, We) === t;
  }
  getActive() {
    return i(this, We);
  }
  getMode() {
    return i(this, Xt);
  }
  isEditingMode() {
    return i(this, Xt) !== z.NONE;
  }
  get imageManager() {
    return V(this, "imageManager", new Tp());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let l = 0, c = e.rangeCount; l < c; l++)
      if (!t.contains(e.getRangeAt(l).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: n,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = /* @__PURE__ */ f((l, c, d, p) => ({
          x: (c - n) / a,
          y: 1 - (l + d - s) / r,
          width: p / a,
          height: d / r
        }), "rotator");
        break;
      case "180":
        o = /* @__PURE__ */ f((l, c, d, p) => ({
          x: 1 - (l + d - s) / r,
          y: 1 - (c + p - n) / a,
          width: d / r,
          height: p / a
        }), "rotator");
        break;
      case "270":
        o = /* @__PURE__ */ f((l, c, d, p) => ({
          x: 1 - (c + p - n) / a,
          y: (l - s) / r,
          width: p / a,
          height: d / r
        }), "rotator");
        break;
      default:
        o = /* @__PURE__ */ f((l, c, d, p) => ({
          x: (l - s) / r,
          y: (c - n) / a,
          width: d / r,
          height: p / a
        }), "rotator");
        break;
    }
    const h = [];
    for (let l = 0, c = e.rangeCount; l < c; l++) {
      const d = e.getRangeAt(l);
      if (!d.collapsed)
        for (const {
          x: p,
          y,
          width: A,
          height: w
        } of d.getClientRects())
          A === 0 || w === 0 || h.push(o(p, y, A, w));
    }
    return h.length === 0 ? null : h;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (i(this, Mo) || u(this, Mo, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    i(this, Mo)?.delete(t);
  }
  renderAnnotationElement(t) {
    const e = i(this, Mo)?.get(t.data.id);
    if (!e)
      return;
    const s = i(this, ke).getRawValue(e);
    s && (i(this, Xt) === z.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    const n = i(this, Gn)?.get(t);
    n && (n.setCanvas(e, s), i(this, Gn).delete(t));
  }
  addMissingCanvas(t, e) {
    (i(this, Gn) || u(this, Gn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
To = new WeakMap(), We = new WeakMap(), xo = new WeakMap(), It = new WeakMap(), _t = new WeakMap(), _o = new WeakMap(), ko = new WeakMap(), ke = new WeakMap(), Mo = new WeakMap(), ys = new WeakMap(), te = new WeakMap(), Rn = new WeakMap(), Nn = new WeakMap(), Bn = new WeakMap(), Fn = new WeakMap(), ii = new WeakMap(), As = new WeakMap(), Br = new WeakMap(), cc = new WeakMap(), dc = new WeakMap(), Po = new WeakMap(), uc = new WeakMap(), ni = new WeakMap(), On = new WeakMap(), Io = new WeakMap(), Hn = new WeakMap(), ri = new WeakMap(), vf = new WeakMap(), Ri = new WeakMap(), Do = new WeakMap(), fc = new WeakMap(), Un = new WeakMap(), Fr = new WeakMap(), Lo = new WeakMap(), Gn = new WeakMap(), pc = new WeakMap(), Xt = new WeakMap(), ht = new WeakMap(), Ni = new WeakMap(), $n = new WeakMap(), zn = new WeakMap(), gc = new WeakMap(), Ro = new WeakMap(), mc = new WeakMap(), jn = new WeakMap(), ai = new WeakMap(), Bi = new WeakMap(), bc = new WeakMap(), yc = new WeakMap(), ws = new WeakMap(), L = new WeakSet(), ru = /* @__PURE__ */ f(function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, "#getAnchorElementForSelection"), kp = /* @__PURE__ */ f(function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of i(this, _t).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, "#getLayerForTextLayer"), HA = /* @__PURE__ */ f(function(t) {
  this.commitOrRemove(), this.currentLayer?.endDrawingSession(!1);
}, "#beforeUnload"), UA = /* @__PURE__ */ f(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, L, ru).call(this, t).closest(".textLayer"), n = this.getSelectionBoxes(s);
  n && (i(this, ri) || u(this, ri, new Sp(this)), i(this, ri).show(s, n, this.direction === "ltr"));
}, "#displayFloatingToolbar"), GA = /* @__PURE__ */ f(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    i(this, Ni) && (i(this, ri)?.hide(), u(this, Ni, null), b(this, L, xe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === i(this, Ni))
    return;
  const n = b(this, L, ru).call(this, t).closest(".textLayer");
  if (!n) {
    i(this, Ni) && (i(this, ri)?.hide(), u(this, Ni, null), b(this, L, xe).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if (i(this, ri)?.hide(), u(this, Ni, e), b(this, L, xe).call(this, {
    hasSelectedText: !0
  }), !(i(this, Xt) !== z.HIGHLIGHT && i(this, Xt) !== z.NONE) && (i(this, Xt) === z.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), u(this, Hn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const r = i(this, Xt) === z.HIGHLIGHT ? b(this, L, kp).call(this, n) : null;
    if (r?.toggleDrawing(), i(this, Do)) {
      const a = new AbortController(), o = this.combinedSignal(a), h = /* @__PURE__ */ f((l) => {
        l.type === "pointerup" && l.button !== 0 || (a.abort(), r?.toggleDrawing(!0), l.type === "pointerup" && b(this, L, hl).call(this, "main_toolbar"));
      }, "pointerup");
      window.addEventListener("pointerup", h, {
        signal: o
      }), window.addEventListener("blur", h, {
        signal: o
      });
    } else
      r?.toggleDrawing(!0), b(this, L, hl).call(this, "main_toolbar");
  }
}, "#selectionChange"), hl = /* @__PURE__ */ f(function(t = "") {
  i(this, Xt) === z.HIGHLIGHT ? this.highlightSelection(t) : i(this, cc) && b(this, L, UA).call(this);
}, "#onSelectEnd"), $A = /* @__PURE__ */ f(function() {
  document.addEventListener("selectionchange", b(this, L, GA).bind(this), {
    signal: this._signal
  });
}, "#addSelectionListener"), zA = /* @__PURE__ */ f(function() {
  if (i(this, On))
    return;
  u(this, On, new AbortController());
  const t = this.combinedSignal(i(this, On));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, "#addFocusManager"), jA = /* @__PURE__ */ f(function() {
  i(this, On)?.abort(), u(this, On, null);
}, "#removeFocusManager"), Mp = /* @__PURE__ */ f(function() {
  if (i(this, Un))
    return;
  u(this, Un, new AbortController());
  const t = this.combinedSignal(i(this, Un));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, "#addKeyboardManager"), VA = /* @__PURE__ */ f(function() {
  i(this, Un)?.abort(), u(this, Un, null);
}, "#removeKeyboardManager"), WA = /* @__PURE__ */ f(function() {
  if (i(this, Rn))
    return;
  u(this, Rn, new AbortController());
  const t = this.combinedSignal(i(this, Rn));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, "#addCopyPasteListeners"), XA = /* @__PURE__ */ f(function() {
  i(this, Rn)?.abort(), u(this, Rn, null);
}, "#removeCopyPasteListeners"), YA = /* @__PURE__ */ f(function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, "#addDragAndDropListeners"), xe = /* @__PURE__ */ f(function(t) {
  Object.entries(t).some(([s, n]) => i(this, mc)[s] !== n) && (this._eventBus.dispatch("editingstateschanged", {
    source: this,
    details: Object.assign(i(this, mc), t)
  }), i(this, Xt) === z.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, L, Ii).call(this, [[Z.HIGHLIGHT_FREE, !0]]));
}, "#dispatchUpdateStates"), Ii = /* @__PURE__ */ f(function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, "#dispatchUpdateUI"), KA = /* @__PURE__ */ f(async function() {
  if (!i(this, Ri)) {
    u(this, Ri, !0);
    const t = [];
    for (const e of i(this, _t).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of i(this, It).values())
      e.enable();
  }
}, "#enableAll"), qA = /* @__PURE__ */ f(function() {
  if (this.unselectAll(), i(this, Ri)) {
    u(this, Ri, !1);
    for (const t of i(this, _t).values())
      t.disable();
    for (const t of i(this, It).values())
      t.disable();
  }
}, "#disableAll"), Pp = /* @__PURE__ */ f(function(t) {
  const e = i(this, _t).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, "#addEditorToLayer"), QA = /* @__PURE__ */ f(function() {
  let t = null;
  for (t of i(this, ht))
    ;
  return t;
}, "#lastSelectedEditor"), ll = /* @__PURE__ */ f(function() {
  if (i(this, It).size === 0)
    return !0;
  if (i(this, It).size === 1)
    for (const t of i(this, It).values())
      return t.isEmpty();
  return !1;
}, "#isEmpty"), Ip = /* @__PURE__ */ f(function(t) {
  for (const e of i(this, ht))
    e.unselect();
  i(this, ht).clear();
  for (const e of t)
    e.isEmpty() || (i(this, ht).add(e), e.select());
  b(this, L, xe).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, "#selectEditors"), f(kr, "AnnotationEditorUIManager"), M(kr, "TRANSLATE_SMALL", 1), M(kr, "TRANSLATE_BIG", 10);
let Ja = kr;
var ee, oi, Rs, No, hi, Xe, Bo, li, He, Fi, Or, ci, Vn, Ys, cl, au;
const Fe = class Fe {
  constructor(t) {
    m(this, Ys);
    m(this, ee, null);
    m(this, oi, !1);
    m(this, Rs, null);
    m(this, No, null);
    m(this, hi, null);
    m(this, Xe, null);
    m(this, Bo, !1);
    m(this, li, null);
    m(this, He, null);
    m(this, Fi, null);
    m(this, Or, null);
    m(this, ci, !1);
    u(this, He, t), u(this, ci, t._uiManager.useNewAltTextFlow), i(Fe, Vn) || u(Fe, Vn, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Fe._l10n ??= t;
  }
  async render() {
    const t = u(this, Rs, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = u(this, No, document.createElement("span"));
    t.append(e), i(this, ci) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", i(Fe, Vn).missing), e.setAttribute("data-l10n-id", i(Fe, Vn)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = i(this, He)._uiManager._signal;
    t.addEventListener("contextmenu", Is, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const n = /* @__PURE__ */ f((r) => {
      r.preventDefault(), i(this, He)._uiManager.editAltText(i(this, He)), i(this, ci) && i(this, He)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: i(this, Ys, cl)
        }
      });
    }, "onClick");
    return t.addEventListener("click", n, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (u(this, Bo, !0), n(r));
    }, {
      signal: s
    }), await b(this, Ys, au).call(this), t;
  }
  finish() {
    i(this, Rs) && (i(this, Rs).focus({
      focusVisible: i(this, Bo)
    }), u(this, Bo, !1));
  }
  isEmpty() {
    return i(this, ci) ? i(this, ee) === null : !i(this, ee) && !i(this, oi);
  }
  hasData() {
    return i(this, ci) ? i(this, ee) !== null || !!i(this, Fi) : this.isEmpty();
  }
  get guessedText() {
    return i(this, Fi);
  }
  async setGuessedText(t) {
    i(this, ee) === null && (u(this, Fi, t), u(this, Or, await Fe._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, Ys, au).call(this));
  }
  toggleAltTextBadge(t = !1) {
    if (!i(this, ci) || i(this, ee)) {
      i(this, li)?.remove(), u(this, li, null);
      return;
    }
    if (!i(this, li)) {
      const e = u(this, li, document.createElement("div"));
      e.className = "noAltTextBadge", i(this, He).div.append(e);
    }
    i(this, li).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = i(this, ee);
    return !t && i(this, Fi) === e && (e = i(this, Or)), {
      altText: e,
      decorative: i(this, oi),
      guessedText: i(this, Fi),
      textWithDisclaimer: i(this, Or)
    };
  }
  get data() {
    return {
      altText: i(this, ee),
      decorative: i(this, oi)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: n,
    cancel: r = !1
  }) {
    s && (u(this, Fi, s), u(this, Or, n)), !(i(this, ee) === t && i(this, oi) === e) && (r || (u(this, ee, t), u(this, oi, e)), b(this, Ys, au).call(this));
  }
  toggle(t = !1) {
    i(this, Rs) && (!t && i(this, Xe) && (clearTimeout(i(this, Xe)), u(this, Xe, null)), i(this, Rs).disabled = !t);
  }
  shown() {
    i(this, He)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: i(this, Ys, cl)
      }
    });
  }
  destroy() {
    i(this, Rs)?.remove(), u(this, Rs, null), u(this, No, null), u(this, hi, null), i(this, li)?.remove(), u(this, li, null);
  }
};
ee = new WeakMap(), oi = new WeakMap(), Rs = new WeakMap(), No = new WeakMap(), hi = new WeakMap(), Xe = new WeakMap(), Bo = new WeakMap(), li = new WeakMap(), He = new WeakMap(), Fi = new WeakMap(), Or = new WeakMap(), ci = new WeakMap(), Vn = new WeakMap(), Ys = new WeakSet(), cl = /* @__PURE__ */ f(function() {
  return i(this, ee) && "added" || i(this, ee) === null && this.guessedText && "review" || "missing";
}, "#label"), au = /* @__PURE__ */ f(async function() {
  const t = i(this, Rs);
  if (!t)
    return;
  if (i(this, ci)) {
    if (t.classList.toggle("done", !!i(this, ee)), t.setAttribute("data-l10n-id", i(Fe, Vn)[i(this, Ys, cl)]), i(this, No)?.setAttribute("data-l10n-id", i(Fe, Vn)[`${i(this, Ys, cl)}-label`]), !i(this, ee)) {
      i(this, hi)?.remove();
      return;
    }
  } else {
    if (!i(this, ee) && !i(this, oi)) {
      t.classList.remove("done"), i(this, hi)?.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = i(this, hi);
  if (!e) {
    u(this, hi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${i(this, He).id}`;
    const n = 100, r = i(this, He)._uiManager._signal;
    r.addEventListener("abort", () => {
      clearTimeout(i(this, Xe)), u(this, Xe, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      u(this, Xe, setTimeout(() => {
        u(this, Xe, null), i(this, hi).classList.add("show"), i(this, He)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, n));
    }, {
      signal: r
    }), t.addEventListener("mouseleave", () => {
      i(this, Xe) && (clearTimeout(i(this, Xe)), u(this, Xe, null)), i(this, hi)?.classList.remove("show");
    }, {
      signal: r
    });
  }
  i(this, oi) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = i(this, ee)), e.parentNode || t.append(e), i(this, He).getElementForAltText()?.setAttribute("aria-describedby", e.id);
}, "#setState"), f(Fe, "AltText"), m(Fe, Vn, null), M(Fe, "_l10n", null);
let zu = Fe;
var ce, vs, Hr, At, Ac, Wn, Ss, Xn, Yn, Ur, wc, Dp;
const Ab = class Ab {
  constructor(t) {
    m(this, wc);
    m(this, ce, null);
    m(this, vs, null);
    m(this, Hr, !1);
    m(this, At, null);
    m(this, Ac, null);
    m(this, Wn, null);
    m(this, Ss, null);
    m(this, Xn, null);
    m(this, Yn, !1);
    m(this, Ur, null);
    u(this, At, t);
  }
  renderForToolbar() {
    const t = u(this, vs, document.createElement("button"));
    return t.className = "comment", b(this, wc, Dp).call(this, t, !1);
  }
  renderForStandalone() {
    const t = u(this, ce, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = i(this, At).commentButtonPosition;
    if (e) {
      const {
        style: s
      } = t;
      s.insetInlineEnd = `calc(${100 * (i(this, At)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const n = i(this, At).commentButtonColor;
      n && (s.backgroundColor = n);
    }
    return b(this, wc, Dp).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      (i(this, ce) ?? i(this, vs))?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!i(this, ce))
      return;
    const t = i(this, At).commentButtonColor;
    t && (i(this, ce).style.backgroundColor = t), i(this, At)._uiManager.updatePopupColor(i(this, At));
  }
  get commentButtonWidth() {
    return (i(this, ce)?.getBoundingClientRect().width ?? 0) / i(this, At).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (i(this, Ur))
      return i(this, Ur);
    if (!i(this, ce))
      return null;
    const {
      x: t,
      y: e,
      height: s
    } = i(this, ce).getBoundingClientRect(), {
      x: n,
      y: r,
      width: a,
      height: o
    } = i(this, At).parent.boundingClientRect;
    return [(t - n) / a, (e + s - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    u(this, Ur, t);
  }
  hasDefaultPopupPosition() {
    return i(this, Ur) === null;
  }
  removeStandaloneCommentButton() {
    i(this, ce)?.remove(), u(this, ce, null);
  }
  removeToolbarCommentButton() {
    i(this, vs)?.remove(), u(this, vs, null);
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    i(this, ce) && (i(this, ce).classList.toggle("selected", t), i(this, ce).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let s, n;
    if (e)
      [s, n] = e;
    else {
      [s, n] = i(this, At).commentButtonPosition;
      const {
        width: c,
        height: d,
        x: p,
        y
      } = i(this, At);
      s = p + s * c, n = y + n * d;
    }
    const r = i(this, At).parent.boundingClientRect, {
      x: a,
      y: o,
      width: h,
      height: l
    } = r;
    i(this, At)._uiManager.editComment(i(this, At), a + s * h, o + n * l, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    i(this, vs) && (i(this, vs).focus({
      focusVisible: i(this, Hr)
    }), u(this, Hr, !1));
  }
  isDeleted() {
    return i(this, Yn) || i(this, Ss) === "";
  }
  isEmpty() {
    return i(this, Ss) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || i(this, Ss) !== i(this, Ac);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: i(this, Ss),
      richText: i(this, Wn),
      date: i(this, Xn),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== i(this, Ss) && u(this, Wn, null), t === null) {
      u(this, Ss, ""), u(this, Yn, !0);
      return;
    }
    u(this, Ss, t), u(this, Xn, /* @__PURE__ */ new Date()), u(this, Yn, !1);
  }
  restoreData({
    text: t,
    richText: e,
    date: s
  }) {
    u(this, Ss, t), u(this, Wn, e), u(this, Xn, s), u(this, Yn, !1);
  }
  setInitialText(t, e = null) {
    u(this, Ac, t), this.data = t, u(this, Xn, null), u(this, Wn, e);
  }
  shown() {
  }
  destroy() {
    i(this, vs)?.remove(), u(this, vs, null), i(this, ce)?.remove(), u(this, ce, null), u(this, Ss, ""), u(this, Wn, null), u(this, Xn, null), u(this, At, null), u(this, Hr, !1), u(this, Yn, !1);
  }
};
ce = new WeakMap(), vs = new WeakMap(), Hr = new WeakMap(), At = new WeakMap(), Ac = new WeakMap(), Wn = new WeakMap(), Ss = new WeakMap(), Xn = new WeakMap(), Yn = new WeakMap(), Ur = new WeakMap(), wc = new WeakSet(), Dp = /* @__PURE__ */ f(function(t, e) {
  if (!i(this, At)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [i(this, At)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
  const s = i(this, At)._uiManager._signal;
  if (!(s instanceof AbortSignal) || s.aborted)
    return t;
  t.addEventListener("contextmenu", Is, {
    signal: s
  }), e && (t.addEventListener("focusin", (r) => {
    i(this, At)._focusEventsAllowed = !1, Nt(r);
  }, {
    capture: !0,
    signal: s
  }), t.addEventListener("focusout", (r) => {
    i(this, At)._focusEventsAllowed = !0, Nt(r);
  }, {
    capture: !0,
    signal: s
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: s
  });
  const n = /* @__PURE__ */ f((r) => {
    r.preventDefault(), t === i(this, vs) ? this.edit() : i(this, At).toggleComment(!0);
  }, "onClick");
  return t.addEventListener("click", n, {
    capture: !0,
    signal: s
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (u(this, Hr, !0), n(r));
  }, {
    signal: s
  }), t.addEventListener("pointerenter", () => {
    i(this, At).toggleComment(!1, !0);
  }, {
    signal: s
  }), t.addEventListener("pointerleave", () => {
    i(this, At).toggleComment(!1, !1);
  }, {
    signal: s
  }), t;
}, "#render"), f(Ab, "Comment");
let po = Ab;
var Fo, Gr, vc, Sc, Ec, Cc, Tc, Oi, $r, Hi, zr, Ui, Cr, JA, ZA, t0;
const Sf = class Sf {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: n = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    m(this, Cr);
    m(this, Fo);
    m(this, Gr, !1);
    m(this, vc, null);
    m(this, Sc);
    m(this, Ec);
    m(this, Cc);
    m(this, Tc);
    m(this, Oi, null);
    m(this, $r);
    m(this, Hi, null);
    m(this, zr);
    m(this, Ui, null);
    u(this, Fo, t), u(this, vc, s), u(this, Sc, e), u(this, Ec, n), u(this, Cc, r), u(this, Tc, a), u(this, zr, new AbortController()), u(this, $r, AbortSignal.any([o, i(this, zr).signal])), t.addEventListener("touchstart", b(this, Cr, JA).bind(this), {
      passive: !1,
      signal: i(this, $r)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / bn.pixelRatio;
  }
  destroy() {
    i(this, zr)?.abort(), u(this, zr, null), i(this, Oi)?.abort(), u(this, Oi, null);
  }
};
Fo = new WeakMap(), Gr = new WeakMap(), vc = new WeakMap(), Sc = new WeakMap(), Ec = new WeakMap(), Cc = new WeakMap(), Tc = new WeakMap(), Oi = new WeakMap(), $r = new WeakMap(), Hi = new WeakMap(), zr = new WeakMap(), Ui = new WeakMap(), Cr = new WeakSet(), JA = /* @__PURE__ */ f(function(t) {
  var n, r, a;
  if ((n = i(this, Sc)) != null && n.call(this))
    return;
  if (t.touches.length === 1) {
    if (i(this, Oi))
      return;
    const o = u(this, Oi, new AbortController()), h = AbortSignal.any([i(this, $r), o.signal]), l = i(this, Fo), c = {
      capture: !0,
      signal: h,
      passive: !1
    }, d = /* @__PURE__ */ f((p) => {
      p.pointerType === "touch" && (i(this, Oi)?.abort(), u(this, Oi, null));
    }, "cancelPointerDown");
    l.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Nt(p), d(p));
    }, c), l.addEventListener("pointerup", d, c), l.addEventListener("pointercancel", d, c);
    return;
  }
  if (!i(this, Ui)) {
    u(this, Ui, new AbortController());
    const o = AbortSignal.any([i(this, $r), i(this, Ui).signal]), h = i(this, Fo), l = {
      signal: o,
      capture: !1,
      passive: !1
    };
    h.addEventListener("touchmove", b(this, Cr, ZA).bind(this), l);
    const c = b(this, Cr, t0).bind(this);
    h.addEventListener("touchend", c, l), h.addEventListener("touchcancel", c, l), l.capture = !0, h.addEventListener("pointerdown", Nt, l), h.addEventListener("pointermove", Nt, l), h.addEventListener("pointercancel", Nt, l), h.addEventListener("pointerup", Nt, l), (r = i(this, Ec)) == null || r.call(this);
  }
  if (Nt(t), t.touches.length !== 2 || (a = i(this, vc)) != null && a.call(this)) {
    u(this, Hi, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), u(this, Hi, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, "#onTouchStart"), ZA = /* @__PURE__ */ f(function(t) {
  var T;
  if (!i(this, Hi) || t.touches.length !== 2)
    return;
  Nt(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: n,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, h = i(this, Hi), {
    touch0X: l,
    touch0Y: c,
    touch1X: d,
    touch1Y: p
  } = h, y = d - l, A = p - c, w = a - n, S = o - r, v = Math.hypot(w, S) || 1, E = Math.hypot(y, A) || 1;
  if (!i(this, Gr) && Math.abs(E - v) <= Sf.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (h.touch0X = n, h.touch0Y = r, h.touch1X = a, h.touch1Y = o, !i(this, Gr)) {
    u(this, Gr, !0);
    return;
  }
  const C = [(n + a) / 2, (r + o) / 2];
  (T = i(this, Cc)) == null || T.call(this, C, E, v);
}, "#onTouchMove"), t0 = /* @__PURE__ */ f(function(t) {
  var e;
  t.touches.length >= 2 || (i(this, Ui) && (i(this, Ui).abort(), u(this, Ui, null), (e = i(this, Tc)) == null || e.call(this)), i(this, Hi) && (Nt(t), u(this, Hi, null), u(this, Gr, !1)));
}, "#onTouchEnd"), f(Sf, "TouchManager");
let ju = Sf;
var jr, Ns, Et, lt, Gi, Oo, Kn, xc, de, Vr, $i, Es, qn, _c, Wr, Ye, kc, Xr, zi, di, Ho, Uo, Cs, Yr, Mc, Ef, G, Lp, Pc, Rp, ou, e0, s0, Np, hu, Bp, i0, n0, r0, Fp, a0, Op, o0, h0, l0, Hp, dl;
const K = class K {
  constructor(t) {
    m(this, G);
    m(this, jr, null);
    m(this, Ns, null);
    m(this, Et, null);
    m(this, lt, null);
    m(this, Gi, null);
    m(this, Oo, !1);
    m(this, Kn, null);
    m(this, xc, "");
    m(this, de, null);
    m(this, Vr, null);
    m(this, $i, null);
    m(this, Es, null);
    m(this, qn, null);
    m(this, _c, "");
    m(this, Wr, !1);
    m(this, Ye, null);
    m(this, kc, !1);
    m(this, Xr, !1);
    m(this, zi, !1);
    m(this, di, null);
    m(this, Ho, 0);
    m(this, Uo, 0);
    m(this, Cs, null);
    m(this, Yr, null);
    M(this, "isSelected", !1);
    M(this, "_isCopy", !1);
    M(this, "_editToolbar", null);
    M(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    M(this, "_initialData", null);
    M(this, "_isVisible", !0);
    M(this, "_uiManager", null);
    M(this, "_focusEventsAllowed", !0);
    m(this, Mc, !1);
    m(this, Ef, K._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null, this.canAddComment = !0;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: n,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, n], this.pageTranslation = [r, a];
    const [o, h] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / h, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = K.prototype._resizeWithKeyboard, e = Ja.TRANSLATE_SMALL, s = Ja.TRANSLATE_BIG;
    return V(this, "_resizerKeyboardManager", new Qa([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], K.prototype._stopResizingWithKeyboard]]));
  }
  updatePageIndex(t) {
    this.pageIndex = t;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return V(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Up({
      id: t._uiManager.getId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (K._l10n ??= t, K._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    }), K._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    K._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    rt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return i(this, Mc);
  }
  set _isDraggable(t) {
    u(this, Mc, t), this.div?.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = i(this, Ef);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (b(this, G, dl).call(this), i(this, Es)?.remove(), u(this, Es, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (i(this, Wr) ? u(this, Wr, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    !this._focusEventsAllowed || !this.isAttachedToDOM || t.relatedTarget?.closest(`#${this.id}`) || (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, n) {
    const [r, a] = this.parentDimensions;
    [s, n] = this.screenToPageTranslation(s, n), this.x = (t + s) / r, this.y = (e + n) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    if (this.isClone) {
      delete this.isClone;
      return;
    }
    const [s, n] = this.parentDimensions;
    this.setAt(t * s, e * n, this.width * s, this.height * n), this._onTranslated();
  }
  translate(t, e) {
    b(this, G, Lp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    i(this, Ye) || u(this, Ye, [this.x, this.y, this.width, this.height]), b(this, G, Lp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    i(this, Ye) || u(this, Ye, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [n, r]
    } = this;
    if (this.x += t / n, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: d,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, d, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [h, l] = this.getBaseTranslation();
    a += h, o += l;
    const {
      style: c
    } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), s.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!i(this, Ye) && (i(this, Ye)[0] !== this.x || i(this, Ye)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!i(this, Ye) && (i(this, Ye)[2] !== this.width || i(this, Ye)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = K, n = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-n, r];
      case 180:
        return [n, r];
      case 270:
        return [n, -r];
      default:
        return [-n, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, n]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: h
    } = this;
    if (o *= s, h *= n, r *= s, a *= n, this._mustFixPosition)
      switch (t) {
        case 0:
          r = he(r, 0, s - o), a = he(a, 0, n - h);
          break;
        case 90:
          r = he(r, 0, s - h), a = he(a, o, n);
          break;
        case 180:
          r = he(r, o, s), a = he(a, h, n);
          break;
        case 270:
          r = he(r, h, s), a = he(a, 0, n - o);
          break;
      }
    this.x = r /= s, this.y = a /= n;
    const [l, c] = this.getBaseTranslation();
    r += l, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = K, Pc, Rp).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = K, Pc, Rp).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: e,
      height: s
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * s).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    i(this, Et)?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || i(this, Xr))
      return this._editToolbar;
    this._editToolbar = new vp(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, s] of t)
        await this._editToolbar.addButton(e, s);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove(), this._editToolbar = null, i(this, Et)?.destroy();
  }
  addContainer(t) {
    const e = this._editToolbar?.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return i(this, Et) || (zu.initialize(K._l10n), u(this, Et, new zu(this)), i(this, jr) && (i(this, Et).data = i(this, jr), u(this, jr, null))), i(this, Et);
  }
  get altTextData() {
    return i(this, Et)?.data;
  }
  set altTextData(t) {
    i(this, Et) && (i(this, Et).data = t);
  }
  get guessedAltText() {
    return i(this, Et)?.guessedText;
  }
  async setGuessedAltText(t) {
    await i(this, Et)?.setGuessedText(t);
  }
  serializeAltText(t) {
    return i(this, Et)?.serialize(t);
  }
  hasAltText() {
    return !!i(this, Et) && !i(this, Et).isEmpty();
  }
  hasAltTextData() {
    return i(this, Et)?.hasData() ?? !1;
  }
  focusCommentButton() {
    i(this, lt)?.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? i(this, lt) || u(this, lt, new po(this)) : null;
  }
  addStandaloneCommentButton() {
    if (this._uiManager.hasCommentManager()) {
      if (i(this, Gi)) {
        this._uiManager.isEditingMode() && i(this, Gi).classList.remove("hidden");
        return;
      }
      this.hasComment && (u(this, Gi, i(this, lt).renderForStandalone()), this.div.append(i(this, Gi)));
    }
  }
  removeStandaloneCommentButton() {
    i(this, lt).removeStandaloneCommentButton(), u(this, Gi, null);
  }
  hideStandaloneCommentButton() {
    i(this, Gi)?.classList.add("hidden");
  }
  get comment() {
    if (!i(this, lt))
      return null;
    const {
      data: {
        richText: t,
        text: e,
        date: s,
        deleted: n
      }
    } = i(this, lt);
    return {
      text: e,
      richText: t,
      date: s,
      deleted: n,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    i(this, lt) || u(this, lt, new po(this)), typeof t == "object" && t !== null ? i(this, lt).restoreData(t) : i(this, lt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: s
  }) {
    if (!e || (i(this, lt) || u(this, lt, new po(this)), i(this, lt).setInitialText(t, s), !this.annotationElementId))
      return;
    const n = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    n && this.updateFromAnnotationLayer(n);
  }
  get hasEditedComment() {
    return i(this, lt)?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return i(this, lt)?.isDeleted();
  }
  get hasComment() {
    return !!i(this, lt) && !i(this, lt).isEmpty() && !i(this, lt).isDeleted();
  }
  async editComment(t) {
    i(this, lt) || u(this, lt, new po(this)), i(this, lt).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    i(this, lt).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , n] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, h = n - 100, l = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, h, l, n]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }) {
    i(this, lt).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = i(this, Oo) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, G, Op).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [n, r] = this.getInitialTranslation();
    return this.translate(n, r), FA(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (i(this, Yr) || u(this, Yr, new ju({
      container: t,
      isPinchingDisabled: /* @__PURE__ */ f(() => !this.isSelected, "isPinchingDisabled"),
      onPinchStart: b(this, G, i0).bind(this),
      onPinching: b(this, G, n0).bind(this),
      onPinchEnd: b(this, G, r0).bind(this),
      signal: this._uiManager._signal
    }))), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Gt.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (u(this, Wr, !0), this._isDraggable) {
      b(this, G, a0).call(this, t);
      return;
    }
    b(this, G, Fp).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    i(this, di) && clearTimeout(i(this, di)), u(this, di, setTimeout(() => {
      u(this, di, null), this.parent?.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const n = this.parentScale, [r, a] = this.pageDimensions, [o, h] = this.pageTranslation, l = t / n, c = e / n, d = this.x * r, p = this.y * a, y = this.width * r, A = this.height * a;
    switch (s) {
      case 0:
        return [d + l + o, a - p - c - A + h, d + l + y + o, a - p - c + h];
      case 90:
        return [d + c + o, a - p + l + h, d + c + A + o, a - p + l + y + h];
      case 180:
        return [d - l - y + o, a - p + c + h, d - l + o, a - p + c + A + h];
      case 270:
        return [d - c - A + o, a - p - l - y + h, d - c + o, a - p - l + h];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, n, r, a] = t, o = r - s, h = a - n;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, h];
      case 90:
        return [s, e - n, h, o];
      case 180:
        return [r, e - n, o, h];
      case 270:
        return [r, e - a, h, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && K._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    i(this, lt)?.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: s,
        opacity: n,
        deleted: r,
        richText: a
      },
      uid: o,
      pageIndex: h,
      creationDate: l,
      modificationDate: c
    } = this;
    return {
      id: o,
      pageIndex: h,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t
      },
      creationDate: l,
      modificationDate: s || c,
      popupRef: !r,
      color: e,
      opacity: n
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), u(this, Xr, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), u(this, Xr, !1), !0) : !1;
  }
  isInEditMode() {
    return i(this, Xr);
  }
  shouldGetKeyboardEvents() {
    return i(this, zi);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: n
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && n > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, G, Op).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(t = !1, e = null) {
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  static async deserialize(t, e, s) {
    const n = new this.prototype.constructor({
      parent: e,
      id: s.getId(),
      uiManager: s,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    n.rotation = t.rotation, u(n, jr, t.accessibilityData), n._isCopy = t.isCopy || !1;
    const [r, a] = n.pageDimensions, [o, h, l, c] = n.getRectInCurrentCoords(t.rect, a);
    return n.x = o / r, n.y = h / a, n.width = l / r, n.height = c / a, n;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (i(this, qn)?.abort(), u(this, qn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), i(this, di) && (clearTimeout(i(this, di)), u(this, di, null)), b(this, G, dl).call(this), this.removeEditToolbar(), i(this, Cs)) {
      for (const t of i(this, Cs).values())
        clearTimeout(t);
      u(this, Cs, null);
    }
    this.parent = null, i(this, Yr)?.destroy(), u(this, Yr, null), i(this, Es)?.remove(), u(this, Es, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, G, e0).call(this), i(this, de).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this, [s, n, r, a] = this.getPDFRect();
    return [K._round(s + (r - s) * t), K._round(n + (a - n) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return i(this, lt).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    i(this, lt).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return i(this, lt).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return i(this, lt).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    i(this, lt)?.setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), u(this, $i, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = i(this, de).children;
    if (!i(this, Ns)) {
      u(this, Ns, Array.from(e));
      const a = b(this, G, o0).bind(this), o = b(this, G, h0).bind(this), h = this._uiManager._signal;
      for (const l of i(this, Ns)) {
        const c = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", a, {
          signal: h
        }), l.addEventListener("blur", o, {
          signal: h
        }), l.addEventListener("focus", b(this, G, l0).bind(this, c), {
          signal: h
        }), l.setAttribute("data-l10n-id", K._l10nResizer[c]);
      }
    }
    const s = i(this, Ns)[0];
    let n = 0;
    for (const a of e) {
      if (a === s)
        break;
      n++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (i(this, Ns).length / 4);
    if (r !== n) {
      if (r < n)
        for (let o = 0; o < n - r; o++)
          i(this, de).append(i(this, de).firstElementChild);
      else if (r > n)
        for (let o = 0; o < r - n; o++)
          i(this, de).firstElementChild.before(i(this, de).lastElementChild);
      let a = 0;
      for (const o of e) {
        const l = i(this, Ns)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", K._l10nResizer[l]);
      }
    }
    b(this, G, Hp).call(this, 0), u(this, zi, !0), i(this, de).firstElementChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    i(this, zi) && b(this, G, Bp).call(this, i(this, _c), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, G, dl).call(this), this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), this.div?.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      });
      return;
    }
    this._editToolbar?.show(), i(this, Et)?.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({
      preventScroll: !0
    }), 0);
  }
  unselect() {
    this.isSelected && (this.isSelected = !1, i(this, de)?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), this._editToolbar?.hide(), i(this, Et)?.toggleAltTextBadge(!0), this.hideCommentPopup());
  }
  hideCommentPopup() {
    this.hasComment && this._uiManager.toggleComment(null);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.uid
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return i(this, kc);
  }
  set isEditing(t) {
    u(this, kc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      i(this, Cs) || u(this, Cs, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let n = i(this, Cs).get(s);
      n && clearTimeout(n), n = setTimeout(() => {
        this._reportTelemetry(t), i(this, Cs).delete(s), i(this, Cs).size === 0 && u(this, Cs, null);
      }, K._telemetryTimeout), i(this, Cs).set(s, n);
      return;
    }
    t.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), u(this, Oo, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), u(this, Oo, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!i(this, Es) && !this.deleted) {
      u(this, Es, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      i(this, Es).remove(), u(this, Es, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && i(this, Es).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstElementChild: e
    } = t.container;
    e?.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
jr = new WeakMap(), Ns = new WeakMap(), Et = new WeakMap(), lt = new WeakMap(), Gi = new WeakMap(), Oo = new WeakMap(), Kn = new WeakMap(), xc = new WeakMap(), de = new WeakMap(), Vr = new WeakMap(), $i = new WeakMap(), Es = new WeakMap(), qn = new WeakMap(), _c = new WeakMap(), Wr = new WeakMap(), Ye = new WeakMap(), kc = new WeakMap(), Xr = new WeakMap(), zi = new WeakMap(), di = new WeakMap(), Ho = new WeakMap(), Uo = new WeakMap(), Cs = new WeakMap(), Yr = new WeakMap(), Mc = new WeakMap(), Ef = new WeakMap(), G = new WeakSet(), Lp = /* @__PURE__ */ f(function([t, e], s, n) {
  [s, n] = this.screenToPageTranslation(s, n), this.x += s / t, this.y += n / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, "#translate"), Pc = new WeakSet(), Rp = /* @__PURE__ */ f(function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, "#rotatePoint"), ou = /* @__PURE__ */ f(function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, "#getRotationMatrix"), e0 = /* @__PURE__ */ f(function() {
  if (i(this, de))
    return;
  u(this, de, document.createElement("div")), i(this, de).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const n = document.createElement("div");
    i(this, de).append(n), n.classList.add("resizer", s), n.setAttribute("data-resizer-name", s), n.addEventListener("pointerdown", b(this, G, s0).bind(this, s), {
      signal: e
    }), n.addEventListener("contextmenu", Is, {
      signal: e
    }), n.tabIndex = -1;
  }
  this.div.prepend(i(this, de));
}, "#createResizers"), s0 = /* @__PURE__ */ f(function(t, e) {
  e.preventDefault();
  const {
    isMac: s
  } = Gt.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  i(this, Et)?.toggle(!1);
  const n = this._isDraggable;
  this._isDraggable = !1, u(this, Vr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, G, Bp).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Nt, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Is, {
    signal: a
  }), u(this, $i, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, h = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const l = /* @__PURE__ */ f(() => {
    r.abort(), this.parent.togglePointerEvents(!0), i(this, Et)?.toggle(!0), this._isDraggable = n, this.parent.div.style.cursor = o, this.div.style.cursor = h, b(this, G, hu).call(this);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", l, {
    signal: a
  }), window.addEventListener("blur", l, {
    signal: a
  });
}, "#resizerPointerdown"), Np = /* @__PURE__ */ f(function(t, e, s, n) {
  this.width = s, this.height = n, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, "#resize"), hu = /* @__PURE__ */ f(function() {
  if (!i(this, $i))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: n
  } = i(this, $i);
  u(this, $i, null);
  const r = this.x, a = this.y, o = this.width, h = this.height;
  r === t && a === e && o === s && h === n || this.addCommands({
    cmd: b(this, G, Np).bind(this, r, a, o, h),
    undo: b(this, G, Np).bind(this, t, e, s, n),
    mustExec: !0
  });
}, "#addResizeToUndoStack"), Bp = /* @__PURE__ */ f(function(t, e) {
  const [s, n] = this.parentDimensions, r = this.x, a = this.y, o = this.width, h = this.height, l = K.MIN_SIZE / s, c = K.MIN_SIZE / n, d = b(this, G, ou).call(this, this.rotation), p = /* @__PURE__ */ f((H, U) => [d[0] * H + d[2] * U, d[1] * H + d[3] * U], "transf"), y = b(this, G, ou).call(this, 360 - this.rotation), A = /* @__PURE__ */ f((H, U) => [y[0] * H + y[2] * U, y[1] * H + y[3] * U], "invTransf");
  let w, S, v = !1, E = !1;
  switch (t) {
    case "topLeft":
      v = !0, w = /* @__PURE__ */ f((H, U) => [0, 0], "getPoint"), S = /* @__PURE__ */ f((H, U) => [H, U], "getOpposite");
      break;
    case "topMiddle":
      w = /* @__PURE__ */ f((H, U) => [H / 2, 0], "getPoint"), S = /* @__PURE__ */ f((H, U) => [H / 2, U], "getOpposite");
      break;
    case "topRight":
      v = !0, w = /* @__PURE__ */ f((H, U) => [H, 0], "getPoint"), S = /* @__PURE__ */ f((H, U) => [0, U], "getOpposite");
      break;
    case "middleRight":
      E = !0, w = /* @__PURE__ */ f((H, U) => [H, U / 2], "getPoint"), S = /* @__PURE__ */ f((H, U) => [0, U / 2], "getOpposite");
      break;
    case "bottomRight":
      v = !0, w = /* @__PURE__ */ f((H, U) => [H, U], "getPoint"), S = /* @__PURE__ */ f((H, U) => [0, 0], "getOpposite");
      break;
    case "bottomMiddle":
      w = /* @__PURE__ */ f((H, U) => [H / 2, U], "getPoint"), S = /* @__PURE__ */ f((H, U) => [H / 2, 0], "getOpposite");
      break;
    case "bottomLeft":
      v = !0, w = /* @__PURE__ */ f((H, U) => [0, U], "getPoint"), S = /* @__PURE__ */ f((H, U) => [H, 0], "getOpposite");
      break;
    case "middleLeft":
      E = !0, w = /* @__PURE__ */ f((H, U) => [0, U / 2], "getPoint"), S = /* @__PURE__ */ f((H, U) => [H, U / 2], "getOpposite");
      break;
  }
  const C = w(o, h), T = S(o, h);
  let x = p(...T);
  const _ = K._round(r + x[0]), k = K._round(a + x[1]);
  let R = 1, I = 1, N, P;
  if (e.fromKeyboard)
    ({
      deltaX: N,
      deltaY: P
    } = e);
  else {
    const {
      screenX: H,
      screenY: U
    } = e, [st, Ne] = i(this, Vr);
    [N, P] = this.screenToPageTranslation(H - st, U - Ne), i(this, Vr)[0] = H, i(this, Vr)[1] = U;
  }
  if ([N, P] = A(N / s, P / n), v) {
    const H = Math.hypot(o, h);
    R = I = Math.max(Math.min(Math.hypot(T[0] - C[0] - N, T[1] - C[1] - P) / H, 1 / o, 1 / h), l / o, c / h);
  } else E ? R = he(Math.abs(T[0] - C[0] - N), l, 1) / o : I = he(Math.abs(T[1] - C[1] - P), c, 1) / h;
  const Q = K._round(o * R), j = K._round(h * I);
  x = p(...S(Q, j));
  const $ = _ - x[0], Tt = k - x[1];
  i(this, Ye) || u(this, Ye, [this.x, this.y, this.width, this.height]), this.width = Q, this.height = j, this.x = $, this.y = Tt, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, "#resizerPointermove"), i0 = /* @__PURE__ */ f(function() {
  u(this, $i, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), i(this, Et)?.toggle(!1), this.parent.togglePointerEvents(!1);
}, "#touchPinchStartCallback"), n0 = /* @__PURE__ */ f(function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, G, ou).call(this, this.rotation), o = /* @__PURE__ */ f((_, k) => [a[0] * _ + a[2] * k, a[1] * _ + a[3] * k], "transf"), [h, l] = this.parentDimensions, c = this.x, d = this.y, p = this.width, y = this.height, A = K.MIN_SIZE / h, w = K.MIN_SIZE / l;
  r = Math.max(Math.min(r, 1 / p, 1 / y), A / p, w / y);
  const S = K._round(p * r), v = K._round(y * r);
  if (S === p && v === y)
    return;
  i(this, Ye) || u(this, Ye, [c, d, p, y]);
  const E = o(p / 2, y / 2), C = K._round(c + E[0]), T = K._round(d + E[1]), x = o(S / 2, v / 2);
  this.x = C - x[0], this.y = T - x[1], this.width = S, this.height = v, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, "#touchPinchCallback"), r0 = /* @__PURE__ */ f(function() {
  i(this, Et)?.toggle(!0), this.parent.togglePointerEvents(!0), b(this, G, hu).call(this);
}, "#touchPinchEndCallback"), Fp = /* @__PURE__ */ f(function(t) {
  const {
    isMac: e
  } = Gt.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, "#selectOnPointerEvent"), a0 = /* @__PURE__ */ f(function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const n = new AbortController(), r = this._uiManager.combinedSignal(n), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = /* @__PURE__ */ f((l) => {
    n.abort(), u(this, Kn, null), u(this, Wr, !1), this._uiManager.endDragSession() || b(this, G, Fp).call(this, l), s && this._onStopDragging();
  }, "cancelDrag");
  e && (u(this, Ho, t.clientX), u(this, Uo, t.clientY), u(this, Kn, t.pointerId), u(this, xc, t.pointerType), window.addEventListener("pointermove", (l) => {
    s || (s = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: c,
      clientY: d,
      pointerId: p
    } = l;
    if (p !== i(this, Kn)) {
      Nt(l);
      return;
    }
    const [y, A] = this.screenToPageTranslation(c - i(this, Ho), d - i(this, Uo));
    u(this, Ho, c), u(this, Uo, d), this._uiManager.dragSelectedEditors(y, A);
  }, a), window.addEventListener("touchmove", Nt, a), window.addEventListener("pointerdown", (l) => {
    l.pointerType === i(this, xc) && (i(this, Yr) || l.isPrimary) && o(l), Nt(l);
  }, a));
  const h = /* @__PURE__ */ f((l) => {
    if (!i(this, Kn) || i(this, Kn) === l.pointerId) {
      o(l);
      return;
    }
    Nt(l);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", h, {
    signal: r
  }), window.addEventListener("blur", h, {
    signal: r
  });
}, "#setUpDragSession"), Op = /* @__PURE__ */ f(function() {
  if (i(this, qn) || !this.div)
    return;
  u(this, qn, new AbortController());
  const t = this._uiManager.combinedSignal(i(this, qn));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, "#addFocusListeners"), o0 = /* @__PURE__ */ f(function(t) {
  K._resizerKeyboardManager.exec(this, t);
}, "#resizerKeydown"), h0 = /* @__PURE__ */ f(function(t) {
  i(this, zi) && t.relatedTarget?.parentNode !== i(this, de) && b(this, G, dl).call(this);
}, "#resizerBlur"), l0 = /* @__PURE__ */ f(function(t) {
  u(this, _c, i(this, zi) ? t : "");
}, "#resizerFocus"), Hp = /* @__PURE__ */ f(function(t) {
  if (i(this, Ns))
    for (const e of i(this, Ns))
      e.tabIndex = t;
}, "#setResizerTabIndex"), dl = /* @__PURE__ */ f(function() {
  u(this, zi, !1), b(this, G, Hp).call(this, -1), b(this, G, hu).call(this);
}, "#stopResizing"), m(K, Pc), f(K, "AnnotationEditor"), M(K, "_l10n", null), M(K, "_l10nResizer", null), M(K, "_borderLineWidth", -1), M(K, "_colorManager", new _p()), M(K, "_zIndex", 1), M(K, "_telemetryTimeout", 1e3);
let wt = K;
const wb = class wb extends wt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
};
f(wb, "FakeEditor");
let Up = wb;
const hA = 3285377520, fs = 4294901760, Js = 65535, vb = class vb {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : hA, this.h2 = t ? t & 4294967295 : hA;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let w = 0, S = t.length; w < S; w++) {
        const v = t.charCodeAt(w);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const n = s >> 2, r = s - n * 4, a = new Uint32Array(e.buffer, 0, n);
    let o = 0, h = 0, l = this.h1, c = this.h2;
    const d = 3432918353, p = 461845907, y = d & Js, A = p & Js;
    for (let w = 0; w < n; w++)
      w & 1 ? (o = a[w], o = o * d & fs | o * y & Js, o = o << 15 | o >>> 17, o = o * p & fs | o * A & Js, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (h = a[w], h = h * d & fs | h * y & Js, h = h << 15 | h >>> 17, h = h * p & fs | h * A & Js, c ^= h, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[n * 4 + 2] << 16;
      case 2:
        o ^= e[n * 4 + 1] << 8;
      case 1:
        o ^= e[n * 4], o = o * d & fs | o * y & Js, o = o << 15 | o >>> 17, o = o * p & fs | o * A & Js, n & 1 ? l ^= o : c ^= o;
    }
    this.h1 = l, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & fs | t * 36045 & Js, e = e * 4283543511 & fs | ((e << 16 | t >>> 16) * 2950163797 & fs) >>> 16, t ^= e >>> 1, t = t * 444984403 & fs | t * 60499 & Js, e = e * 3301882366 & fs | ((e << 16 | t >>> 16) * 3120437893 & fs) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
};
f(vb, "MurmurHash3_64");
let Vu = vb;
const jl = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Kr, qr, ji, ue, Cf, c0;
const Sb = class Sb {
  constructor() {
    m(this, Cf);
    m(this, Kr, !1);
    m(this, qr, null);
    m(this, ji, null);
    m(this, ue, /* @__PURE__ */ new Map());
    M(this, "onSetModified", null);
    M(this, "onResetModified", null);
    M(this, "onAnnotationEditor", null);
  }
  getValue(t, e) {
    const s = i(this, ue).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return i(this, ue).get(t);
  }
  remove(t) {
    const e = i(this, ue).get(t);
    e !== void 0 && (e instanceof wt && i(this, ji).delete(e.annotationElementId), i(this, ue).delete(t), i(this, ue).size === 0 && this.resetModified(), !i(this, ue).values().some((s) => s instanceof wt) && this.onAnnotationEditor?.(null));
  }
  setValue(t, e) {
    const s = i(this, ue).get(t);
    let n = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (n = !0, s[r] = a);
    else
      n = !0, i(this, ue).set(t, e);
    n && b(this, Cf, c0).call(this), e instanceof wt && ((i(this, ji) || u(this, ji, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), this.onAnnotationEditor?.(e.constructor._type));
  }
  has(t) {
    return i(this, ue).has(t);
  }
  get size() {
    return i(this, ue).size;
  }
  resetModified() {
    i(this, Kr) && (u(this, Kr, !1), this.onResetModified?.());
  }
  get print() {
    return new Wu(this);
  }
  get serializable() {
    if (i(this, ue).size === 0)
      return jl;
    const t = /* @__PURE__ */ new Map(), e = new Vu(), s = [], n = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of i(this, ue)) {
      const h = o instanceof wt ? o.serialize(!1, n) : o;
      o.page && (o.pageIndex = o.page._pageIndex, delete o.page), h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), r ||= !!h.bitmap);
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : jl;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let s = 0, n = 0;
    for (const r of i(this, ue).values()) {
      if (!(r instanceof wt)) {
        r.popup && (r.popup.deleted ? n += 1 : s += 1);
        continue;
      }
      r.isCommentDeleted ? n += 1 : r.hasEditedComment && (s += 1);
      const a = r.telemetryFinalData;
      if (!a)
        continue;
      const {
        type: o
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t ||= /* @__PURE__ */ Object.create(null);
      const h = t[o] ||= /* @__PURE__ */ new Map();
      for (const [l, c] of Object.entries(a)) {
        if (l === "type")
          continue;
        const d = h.getOrInsertComputed(l, Jm);
        d.set(c, (d.get(c) ?? 0) + 1);
      }
    }
    if ((n > 0 || s > 0) && (t ||= /* @__PURE__ */ Object.create(null), t.comments = {
      deleted: n,
      edited: s
    }), !t)
      return null;
    for (const [r, a] of e)
      t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    u(this, qr, null);
  }
  updateEditor(t, e) {
    const s = i(this, ji)?.get(t);
    return s ? (s.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    return i(this, ji)?.get(t) || null;
  }
  get modifiedIds() {
    if (i(this, qr))
      return i(this, qr);
    const t = [];
    if (i(this, ji))
      for (const e of i(this, ji).values())
        e.serialize() && t.push(e.annotationElementId);
    return u(this, qr, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return i(this, ue).entries();
  }
};
Kr = new WeakMap(), qr = new WeakMap(), ji = new WeakMap(), ue = new WeakMap(), Cf = new WeakSet(), c0 = /* @__PURE__ */ f(function() {
  i(this, Kr) || (u(this, Kr, !0), this.onSetModified?.());
}, "#setModified"), f(Sb, "AnnotationStorage");
let Vl = Sb;
var Ic;
const Eb = class Eb extends Vl {
  constructor(e) {
    super();
    m(this, Ic, jl);
    const {
      serializable: s
    } = e;
    if (s === jl)
      return;
    const {
      map: n,
      hash: r,
      transfer: a
    } = s, o = structuredClone(n, a ? {
      transfer: a
    } : null);
    u(this, Ic, {
      map: o,
      hash: r,
      transfer: []
    });
  }
  get print() {
    rt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return i(this, Ic);
  }
  get modifiedIds() {
    return V(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
};
Ic = new WeakMap(), f(Eb, "PrintAnnotationStorage");
let Wu = Eb;
const so = "__forcedDependency", {
  floor: lA,
  ceil: cA
} = Math;
function dA(g, t, e, s, n, r) {
  g[t * 4 + 0] = Math.min(g[t * 4 + 0], e), g[t * 4 + 1] = Math.min(g[t * 4 + 1], s), g[t * 4 + 2] = Math.max(g[t * 4 + 2], n), g[t * 4 + 3] = Math.max(g[t * 4 + 3], r);
}
f(dA, "expandBBox");
const Gp = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var Go, Qn;
const Cb = class Cb {
  constructor(t, e) {
    m(this, Go);
    m(this, Qn);
    u(this, Go, t), u(this, Qn, e);
  }
  get length() {
    return i(this, Go).length;
  }
  isEmpty(t) {
    return i(this, Go)[t] === Gp;
  }
  minX(t) {
    return i(this, Qn)[t * 4 + 0] / 256;
  }
  minY(t) {
    return i(this, Qn)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (i(this, Qn)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (i(this, Qn)[t * 4 + 3] + 1) / 256;
  }
};
Go = new WeakMap(), Qn = new WeakMap(), f(Cb, "BBoxReader");
let $p = Cb;
const uA = /* @__PURE__ */ f((g, t) => g?.getOrInsertComputed(t, () => ({
  dependencies: /* @__PURE__ */ new Set(),
  isRenderingOperation: !1
})), "ensureDebugMetadata");
var Vi, nt, dt, Qr, Jr, Zr, Se, Dc, jp;
const Tb = class Tb {
  constructor(t, e) {
    m(this, Dc);
    m(this, Vi, [[1, 0, 0, 1, 0, 0]]);
    m(this, nt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    m(this, dt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    M(this, "_pendingBBoxIdx", -1);
    m(this, Qr);
    m(this, Jr);
    m(this, Zr);
    m(this, Se);
    M(this, "_savesStack", []);
    M(this, "_markedContentStack", []);
    u(this, Qr, t.width), u(this, Jr, t.height), b(this, Dc, jp).call(this, e);
  }
  growOperationsCount(t) {
    t >= i(this, Se).length && b(this, Dc, jp).call(this, t, i(this, Se));
  }
  get clipBox() {
    return i(this, nt);
  }
  save(t) {
    return u(this, nt, {
      __proto__: i(this, nt)
    }), this._savesStack.push(t), this;
  }
  restore(t, e) {
    const s = Object.getPrototypeOf(i(this, nt));
    if (s === null)
      return this;
    u(this, nt, s);
    const n = this._savesStack.pop();
    return n !== void 0 && (e?.(n, t), i(this, Se)[t] = i(this, Se)[n]), this;
  }
  recordOpenMarker(t) {
    return this._savesStack.push(t), this;
  }
  getOpenMarker() {
    return this._savesStack.length === 0 ? null : this._savesStack.at(-1);
  }
  recordCloseMarker(t, e) {
    const s = this._savesStack.pop();
    return s !== void 0 && (e?.(s, t), i(this, Se)[t] = i(this, Se)[s]), this;
  }
  beginMarkedContent(t) {
    return this._markedContentStack.push(t), this;
  }
  endMarkedContent(t, e) {
    const s = this._markedContentStack.pop();
    return s !== void 0 && (e?.(s, t), i(this, Se)[t] = i(this, Se)[s]), this;
  }
  pushBaseTransform(t) {
    return i(this, Vi).push(D.multiplyByDOMMatrix(i(this, Vi).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return i(this, Vi).length > 1 && i(this, Vi).pop(), this;
  }
  resetBBox(t) {
    return this._pendingBBoxIdx !== t && (this._pendingBBoxIdx = t, i(this, dt)[0] = 1 / 0, i(this, dt)[1] = 1 / 0, i(this, dt)[2] = -1 / 0, i(this, dt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, s, n, r, a) {
    const o = D.multiplyByDOMMatrix(i(this, Vi).at(-1), e.getTransform()), h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    D.axialAlignedBoundingBox([s, r, n, a], o, h);
    const l = D.intersect(i(this, nt), h);
    return l ? (i(this, nt)[0] = l[0], i(this, nt)[1] = l[1], i(this, nt)[2] = l[2], i(this, nt)[3] = l[3]) : (i(this, nt)[0] = i(this, nt)[1] = 1 / 0, i(this, nt)[2] = i(this, nt)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, n, r, a) {
    const o = i(this, nt);
    if (o[0] === 1 / 0)
      return this;
    const h = D.multiplyByDOMMatrix(i(this, Vi).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return D.axialAlignedBoundingBox([s, r, n, a], h, i(this, dt)), this;
    const l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return D.axialAlignedBoundingBox([s, r, n, a], h, l), i(this, dt)[0] = Math.min(i(this, dt)[0], Math.max(l[0], o[0])), i(this, dt)[1] = Math.min(i(this, dt)[1], Math.max(l[1], o[1])), i(this, dt)[2] = Math.max(i(this, dt)[2], Math.min(l[2], o[2])), i(this, dt)[3] = Math.max(i(this, dt)[3], Math.min(l[3], o[3])), this;
  }
  recordFullPageBBox(t) {
    return i(this, dt)[0] = Math.max(0, i(this, nt)[0]), i(this, dt)[1] = Math.max(0, i(this, nt)[1]), i(this, dt)[2] = Math.min(i(this, Qr), i(this, nt)[2]), i(this, dt)[3] = Math.min(i(this, Jr), i(this, nt)[3]), this;
  }
  recordOperation(t, e = !1, s) {
    if (this._pendingBBoxIdx !== t)
      return this;
    const n = lA(i(this, dt)[0] * 256 / i(this, Qr)), r = lA(i(this, dt)[1] * 256 / i(this, Jr)), a = cA(i(this, dt)[2] * 256 / i(this, Qr)), o = cA(i(this, dt)[3] * 256 / i(this, Jr));
    if (dA(i(this, Zr), t, n, r, a, o), s)
      for (const h of s)
        for (const l of h)
          l !== t && dA(i(this, Zr), l, n, r, a, o);
    return e || (this._pendingBBoxIdx = -1), this;
  }
  bboxToClipBoxDropOperation(t) {
    return this._pendingBBoxIdx === t && (this._pendingBBoxIdx = -1, i(this, nt)[0] = Math.max(i(this, nt)[0], i(this, dt)[0]), i(this, nt)[1] = Math.max(i(this, nt)[1], i(this, dt)[1]), i(this, nt)[2] = Math.min(i(this, nt)[2], i(this, dt)[2]), i(this, nt)[3] = Math.min(i(this, nt)[3], i(this, dt)[3])), this;
  }
  take() {
    return new $p(i(this, Se), i(this, Zr));
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
  recordSimpleData(t, e) {
    return this;
  }
  recordIncrementalData(t, e) {
    return this;
  }
  resetIncrementalData(t, e) {
    return this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return this;
  }
  recordFutureForcedDependency(t, e) {
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return this;
  }
  recordCharacterBBox(t, e, s, n = 1, r = 0, a = 0, o) {
    return this;
  }
  getSimpleIndex(t) {
  }
  recordDependencies(t, e) {
    return this;
  }
  recordNamedDependency(t, e) {
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    return this;
  }
};
Vi = new WeakMap(), nt = new WeakMap(), dt = new WeakMap(), Qr = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), Se = new WeakMap(), Dc = new WeakSet(), jp = /* @__PURE__ */ f(function(t, e) {
  const s = new ArrayBuffer(t * 4);
  u(this, Zr, new Uint8ClampedArray(s)), u(this, Se, new Uint32Array(s)), e && e.length > 0 ? (i(this, Se).set(e), i(this, Se).fill(Gp, e.length)) : i(this, Se).fill(Gp);
}, "#initializeBBoxes"), f(Tb, "CanvasBBoxTracker");
let zp = Tb;
var Ue, Ge, ta, Bs, $o, Jn, Zn, ut;
const xb = class xb {
  constructor(t, e = !1) {
    m(this, Ue, {
      __proto__: null
    });
    m(this, Ge, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [so]: []
    });
    m(this, ta, /* @__PURE__ */ new Map());
    m(this, Bs, /* @__PURE__ */ new Set());
    m(this, $o, /* @__PURE__ */ new Map());
    m(this, Jn);
    m(this, Zn);
    m(this, ut);
    u(this, ut, t), e && (u(this, Jn, /* @__PURE__ */ new Map()), u(this, Zn, (s, n) => {
      uA(i(this, Jn), n).dependencies.add(s);
    }));
  }
  get clipBox() {
    return i(this, ut).clipBox;
  }
  growOperationsCount(t) {
    i(this, ut).growOperationsCount(t);
  }
  save(t) {
    return u(this, Ue, {
      __proto__: i(this, Ue)
    }), u(this, Ge, {
      __proto__: i(this, Ge),
      transform: {
        __proto__: i(this, Ge).transform
      },
      moveText: {
        __proto__: i(this, Ge).moveText
      },
      sameLineText: {
        __proto__: i(this, Ge).sameLineText
      },
      [so]: {
        __proto__: i(this, Ge)[so]
      }
    }), i(this, ut).save(t), this;
  }
  restore(t) {
    i(this, ut).restore(t, i(this, Zn));
    const e = Object.getPrototypeOf(i(this, Ue));
    return e === null ? this : (u(this, Ue, e), u(this, Ge, Object.getPrototypeOf(i(this, Ge))), this);
  }
  recordOpenMarker(t) {
    return i(this, ut).recordOpenMarker(t, i(this, Zn)), this;
  }
  getOpenMarker() {
    return i(this, ut).getOpenMarker();
  }
  recordCloseMarker(t) {
    return i(this, ut).recordCloseMarker(t, i(this, Zn)), this;
  }
  beginMarkedContent(t) {
    return i(this, ut).beginMarkedContent(t), this;
  }
  endMarkedContent(t) {
    return i(this, ut).endMarkedContent(t, i(this, Zn)), this;
  }
  pushBaseTransform(t) {
    return i(this, ut).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return i(this, ut).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return i(this, Ue)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return i(this, Ge)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return i(this, Ge)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return i(this, ta).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    i(this, Ue)[t] = i(this, ta).get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(so, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in i(this, Ue) && this.recordFutureForcedDependency(e, i(this, Ue)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of i(this, Bs))
      this.recordFutureForcedDependency(so, t);
    return this;
  }
  resetBBox(t) {
    return i(this, ut).resetBBox(t), this;
  }
  recordClipBox(t, e, s, n, r, a) {
    return i(this, ut).recordClipBox(t, e, s, n, r, a), this;
  }
  recordBBox(t, e, s, n, r, a) {
    return i(this, ut).recordBBox(t, e, s, n, r, a), this;
  }
  recordCharacterBBox(t, e, s, n = 1, r = 0, a = 0, o) {
    const h = s.bbox;
    let l, c;
    if (h && (l = h[2] !== h[0] && h[3] !== h[1] && i(this, $o).get(s), l !== !1 && (c = [0, 0, 0, 0], D.axialAlignedBoundingBox(h, s.fontMatrix, c), (n !== 1 || r !== 0 || a !== 0) && D.scaleMinMax([n, 0, 0, -n, r, a], c), l)))
      return this.recordBBox(t, e, c[0], c[2], c[1], c[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const d = o();
    return h && c && l === void 0 && (l = c[0] <= r - d.actualBoundingBoxLeft && c[2] >= r + d.actualBoundingBoxRight && c[1] <= a - d.actualBoundingBoxAscent && c[3] >= a + d.actualBoundingBoxDescent, i(this, $o).set(s, l), l) ? this.recordBBox(t, e, c[0], c[2], c[1], c[3]) : this.recordBBox(t, e, r - d.actualBoundingBoxLeft, r + d.actualBoundingBoxRight, a - d.actualBoundingBoxAscent, a + d.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return i(this, ut).recordFullPageBBox(t), this;
  }
  getSimpleIndex(t) {
    return i(this, Ue)[t];
  }
  recordDependencies(t, e) {
    const s = i(this, Bs), n = i(this, Ue), r = i(this, Ge);
    for (const a of e)
      a in i(this, Ue) ? s.add(n[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, e) {
    return i(this, ta).has(e) && i(this, Bs).add(i(this, ta).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [so]), i(this, Jn)) {
      const n = uA(i(this, Jn), t), {
        dependencies: r
      } = n;
      i(this, Bs).forEach(r.add, r), i(this, ut)._savesStack.forEach(r.add, r), i(this, ut)._markedContentStack.forEach(r.add, r), r.delete(t), n.isRenderingOperation = !0;
    }
    const s = !e && t === i(this, ut)._pendingBBoxIdx;
    return i(this, ut).recordOperation(t, e, [i(this, Bs), i(this, ut)._savesStack, i(this, ut)._markedContentStack]), s && i(this, Bs).clear(), this;
  }
  recordShowTextOperation(t, e = !1) {
    const s = Array.from(i(this, Bs));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const n of s)
      this.recordIncrementalData("sameLineText", n);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    const s = !e && t === i(this, ut)._pendingBBoxIdx;
    return i(this, ut).bboxToClipBoxDropOperation(t), s && i(this, Bs).clear(), this;
  }
  take() {
    return i(this, $o).clear(), i(this, ut).take();
  }
  takeDebugMetadata() {
    return i(this, Jn);
  }
};
Ue = new WeakMap(), Ge = new WeakMap(), ta = new WeakMap(), Bs = new WeakMap(), $o = new WeakMap(), Jn = new WeakMap(), Zn = new WeakMap(), ut = new WeakMap(), f(xb, "CanvasDependencyTracker");
let Vp = xb;
var ft, Dt, Fs, zo, jo;
const Tf = class Tf {
  constructor(t, e, s) {
    m(this, ft);
    m(this, Dt);
    m(this, Fs);
    m(this, zo, 0);
    m(this, jo, 0);
    if (t instanceof Tf && i(t, Fs) === !!s)
      return t;
    u(this, ft, t), u(this, Dt, e), u(this, Fs, !!s);
  }
  get clipBox() {
    return i(this, ft).clipBox;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return zt(this, jo)._++, i(this, ft).save(i(this, Dt)), this;
  }
  restore(t) {
    return i(this, jo) > 0 && (i(this, ft).restore(i(this, Dt)), zt(this, jo)._--), this;
  }
  recordOpenMarker(t) {
    return zt(this, zo)._++, this;
  }
  getOpenMarker() {
    return i(this, zo) > 0 ? i(this, Dt) : i(this, ft).getOpenMarker();
  }
  recordCloseMarker(t) {
    return zt(this, zo)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return i(this, ft).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return i(this, ft).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return i(this, ft).recordSimpleData(t, i(this, Dt)), this;
  }
  recordIncrementalData(t, e) {
    return i(this, ft).recordIncrementalData(t, i(this, Dt)), this;
  }
  resetIncrementalData(t, e) {
    return i(this, ft).resetIncrementalData(t, i(this, Dt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return i(this, ft).recordSimpleDataFromNamed(t, e, i(this, Dt)), this;
  }
  recordFutureForcedDependency(t, e) {
    return i(this, ft).recordFutureForcedDependency(t, i(this, Dt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return i(this, ft).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return i(this, ft).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return i(this, Fs) || i(this, ft).resetBBox(i(this, Dt)), this;
  }
  recordClipBox(t, e, s, n, r, a) {
    return i(this, Fs) || i(this, ft).recordClipBox(i(this, Dt), e, s, n, r, a), this;
  }
  recordBBox(t, e, s, n, r, a) {
    return i(this, Fs) || i(this, ft).recordBBox(i(this, Dt), e, s, n, r, a), this;
  }
  recordCharacterBBox(t, e, s, n, r, a, o) {
    return i(this, Fs) || i(this, ft).recordCharacterBBox(i(this, Dt), e, s, n, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return i(this, Fs) || i(this, ft).recordFullPageBBox(i(this, Dt)), this;
  }
  getSimpleIndex(t) {
    return i(this, ft).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return i(this, ft).recordDependencies(i(this, Dt), e), this;
  }
  recordNamedDependency(t, e) {
    return i(this, ft).recordNamedDependency(i(this, Dt), e), this;
  }
  recordOperation(t) {
    return i(this, ft).recordOperation(i(this, Dt), !0), this;
  }
  recordShowTextOperation(t) {
    return i(this, ft).recordShowTextOperation(i(this, Dt), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return i(this, Fs) || i(this, ft).bboxToClipBoxDropOperation(i(this, Dt), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
ft = new WeakMap(), Dt = new WeakMap(), Fs = new WeakMap(), zo = new WeakMap(), jo = new WeakMap(), f(Tf, "CanvasNestedDependencyTracker");
let Xu = Tf;
const ps = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
};
var ea, sa, ia, na, ra, Lc;
const mo = class mo {
  constructor(t) {
    m(this, ea);
    m(this, sa);
    m(this, ia, 4);
    m(this, na, 0);
    m(this, ra, new (i(mo, Lc))(i(this, ia) * 6));
    u(this, ea, t.width), u(this, sa, t.height);
  }
  record(t, e, s, n) {
    if (i(this, na) === i(this, ia)) {
      u(this, ia, i(this, ia) * 2);
      const o = new (i(mo, Lc))(i(this, ia) * 6);
      o.set(i(this, ra)), u(this, ra, o);
    }
    const r = D.domMatrixToTransform(t.getTransform());
    let a;
    if (n[0] !== 1 / 0) {
      const o = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      D.axialAlignedBoundingBox([0, -s, e, 0], r, o);
      const h = D.intersect(n, o);
      if (!h)
        return;
      const [l, c, d, p] = h;
      if (l !== o[0] || c !== o[1] || d !== o[2] || p !== o[3]) {
        const y = Math.atan2(r[1], r[0]), A = Math.abs(Math.sin(y)), w = Math.abs(Math.cos(y));
        if (A < 1e-6 || w < 1e-6 || Math.abs(A - w) < 1e-6)
          a = [l, c, l, p, d, c];
        else {
          const S = d - l, v = p - c, E = A * A, C = w * w, T = w * A, x = C - E, _ = (v * C - S * T) / x, k = (v * T - S * E) / x;
          a = [l + k, c, l, c + _, d, p - _];
        }
      }
    }
    a || (a = [0, -s, 0, 0, e, -s], D.applyTransform(a, r, 0), D.applyTransform(a, r, 2), D.applyTransform(a, r, 4)), a[0] /= i(this, ea), a[1] /= i(this, sa), a[2] /= i(this, ea), a[3] /= i(this, sa), a[4] /= i(this, ea), a[5] /= i(this, sa), i(this, ra).set(a, i(this, na) * 6), zt(this, na)._++;
  }
  take() {
    return i(this, ra).subarray(0, i(this, na) * 6);
  }
};
ea = new WeakMap(), sa = new WeakMap(), ia = new WeakMap(), na = new WeakMap(), ra = new WeakMap(), Lc = new WeakMap(), f(mo, "CanvasImagesTracker"), m(mo, Lc, Gt.isFloat16ArraySupported ? Float16Array : Float32Array);
let Wp = mo;
var Vo;
const _b = class _b {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Vo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), i(this, Vo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || i(this, Vo).has(t.loadedName))) {
      if (Bt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: r,
          style: a
        } = t, o = new FontFace(n, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), i(this, Vo).add(n), s?.(t);
        } catch {
          W(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      rt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (n) {
          throw W(`Failed to load font '${s.family}': '${n}'.`), t.disableFontFace = !0, n;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const n = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, n);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const t = !!this._document?.fonts;
    return V(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return V(this, "isSyncFontLoadingSupported", Gt.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Bt(!n.done, "completeRequest() cannot be called twice."), n.done = !0; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    f(e, "completeRequest");
    const {
      loadingRequests: s
    } = this, n = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(n), n;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return V(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(T, x) {
      return T.charCodeAt(x) << 24 | T.charCodeAt(x + 1) << 16 | T.charCodeAt(x + 2) << 8 | T.charCodeAt(x + 3) & 255;
    }
    f(s, "int32");
    function n(T, x, _, k) {
      const R = T.substring(0, x), I = T.substring(x + _);
      return R + k + I;
    }
    f(n, "spliceString");
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const h = o.getContext("2d");
    let l = 0;
    function c(T, x) {
      if (++l > 30) {
        W("Load test font never loaded."), x();
        return;
      }
      if (h.font = "30px " + T, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
        x();
        return;
      }
      setTimeout(c.bind(null, T, x));
    }
    f(c, "isFontReady");
    const d = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = n(p, 976, d.length, d);
    const A = 16, w = 1482184792;
    let S = s(p, A);
    for (r = 0, a = d.length - 3; r < a; r += 4)
      S = S - w + s(d, r) | 0;
    r < d.length && (S = S - w + s(d + "XXX", r) | 0), p = n(p, A, 4, Hw(S));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, E = `@font-face {font-family:"${d}";src:${v}}`;
    this.insertRule(E);
    const C = this._document.createElement("div");
    C.style.visibility = "hidden", C.style.width = C.style.height = "10px", C.style.position = "absolute", C.style.top = C.style.left = "0px";
    for (const T of [t.loadedName, d]) {
      const x = this._document.createElement("span");
      x.textContent = "Hi", x.style.fontFamily = T, C.append(x);
    }
    this._document.body.append(C), c(d, () => {
      C.remove(), e.complete();
    });
  }
};
Vo = new WeakMap(), f(_b, "FontLoader");
let Xp = _b;
var pt;
const kb = class kb {
  constructor(t, e = null, s, n) {
    M(this, "compiledGlyphs", /* @__PURE__ */ Object.create(null));
    m(this, pt);
    u(this, pt, t), this._inspectFont = e, s && (this.charProcOperatorList = s), n && Object.assign(this, n);
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const e = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
    }
    return this._inspectFont?.(this), t;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${this.data.toBase64()});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    return this._inspectFont?.(this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const s = this.loadedName + "_path_" + e;
    let n;
    try {
      n = t.get(s);
    } catch (a) {
      W(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = IA(n?.path);
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
  get black() {
    return i(this, pt).black;
  }
  get bold() {
    return i(this, pt).bold;
  }
  get disableFontFace() {
    return i(this, pt).disableFontFace;
  }
  set disableFontFace(t) {
    V(this, "disableFontFace", !!t);
  }
  get fontExtraProperties() {
    return i(this, pt).fontExtraProperties;
  }
  get isInvalidPDFjsFont() {
    return i(this, pt).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return i(this, pt).isType3Font;
  }
  get italic() {
    return i(this, pt).italic;
  }
  get missingFile() {
    return i(this, pt).missingFile;
  }
  get remeasure() {
    return i(this, pt).remeasure;
  }
  get vertical() {
    return i(this, pt).vertical;
  }
  get ascent() {
    return i(this, pt).ascent;
  }
  get defaultWidth() {
    return i(this, pt).defaultWidth;
  }
  get descent() {
    return i(this, pt).descent;
  }
  get bbox() {
    return i(this, pt).bbox;
  }
  get fontMatrix() {
    return i(this, pt).fontMatrix;
  }
  get fallbackName() {
    return i(this, pt).fallbackName;
  }
  get loadedName() {
    return i(this, pt).loadedName;
  }
  get mimetype() {
    return i(this, pt).mimetype;
  }
  get name() {
    return i(this, pt).name;
  }
  get data() {
    return i(this, pt).data;
  }
  clearData() {
    i(this, pt).clearData();
  }
  get cssFontInfo() {
    return i(this, pt).cssFontInfo;
  }
  get systemFontInfo() {
    return i(this, pt).systemFontInfo;
  }
  get defaultVMetrics() {
    return i(this, pt).defaultVMetrics;
  }
};
pt = new WeakMap(), f(kb, "FontFaceObject");
let Yp = kb;
const xf = class xf {
};
f(xf, "CSS_FONT_INFO"), M(xf, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let Kp = xf;
const _f = class _f {
};
f(_f, "SYSTEM_FONT_INFO"), M(_f, "strings", ["css", "loadedName", "baseFontName", "src"]);
let qp = _f;
const le = class le {
};
f(le, "FONT_INFO"), M(le, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), M(le, "numbers", ["ascent", "defaultWidth", "descent"]), M(le, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), M(le, "OFFSET_NUMBERS", Math.ceil(le.bools.length * 2 / 8)), M(le, "OFFSET_BBOX", le.OFFSET_NUMBERS + le.numbers.length * 8), M(le, "OFFSET_FONT_MATRIX", le.OFFSET_BBOX + 1 + 8), M(le, "OFFSET_DEFAULT_VMETRICS", le.OFFSET_FONT_MATRIX + 1 + 48), M(le, "OFFSET_STRINGS", le.OFFSET_DEFAULT_VMETRICS + 1 + 6);
let Ve = le;
const Ls = class Ls {
};
f(Ls, "PATTERN_INFO"), M(Ls, "KIND", 0), M(Ls, "HAS_BBOX", 1), M(Ls, "HAS_BACKGROUND", 2), M(Ls, "SHADING_TYPE", 3), M(Ls, "N_COORD", 4), M(Ls, "N_COLOR", 8), M(Ls, "N_STOP", 12), M(Ls, "N_FIGURES", 16);
let ti = Ls;
var Rc, kf, Wo, Xo, lu;
const Mb = class Mb {
  constructor(t) {
    m(this, Xo);
    m(this, Rc);
    m(this, kf, new TextDecoder());
    m(this, Wo);
    u(this, Rc, t), u(this, Wo, new DataView(t));
  }
  get fontFamily() {
    return b(this, Xo, lu).call(this, 0);
  }
  get fontWeight() {
    return b(this, Xo, lu).call(this, 1);
  }
  get italicAngle() {
    return b(this, Xo, lu).call(this, 2);
  }
};
Rc = new WeakMap(), kf = new WeakMap(), Wo = new WeakMap(), Xo = new WeakSet(), lu = /* @__PURE__ */ f(function(t) {
  Bt(t < Kp.strings.length, "Invalid string index");
  let e = 0;
  for (let n = 0; n < t; n++)
    e += i(this, Wo).getUint32(e) + 4;
  const s = i(this, Wo).getUint32(e);
  return i(this, kf).decode(new Uint8Array(i(this, Rc), e + 4, s));
}, "#readString"), f(Mb, "CssFontInfo");
let Qp = Mb;
var aa, Yo, ui, oa, ul;
const Pb = class Pb {
  constructor(t) {
    m(this, oa);
    m(this, aa);
    m(this, Yo, new TextDecoder());
    m(this, ui);
    u(this, aa, t), u(this, ui, new DataView(t));
  }
  get guessFallback() {
    return i(this, ui).getUint8(0) !== 0;
  }
  get css() {
    return b(this, oa, ul).call(this, 0);
  }
  get loadedName() {
    return b(this, oa, ul).call(this, 1);
  }
  get baseFontName() {
    return b(this, oa, ul).call(this, 2);
  }
  get src() {
    return b(this, oa, ul).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + i(this, ui).getUint32(t);
    const e = i(this, ui).getUint32(t), s = i(this, Yo).decode(new Uint8Array(i(this, aa), t + 4, e));
    t += 4 + e;
    const n = i(this, ui).getUint32(t), r = i(this, Yo).decode(new Uint8Array(i(this, aa), t + 4, n));
    return {
      style: s,
      weight: r
    };
  }
};
aa = new WeakMap(), Yo = new WeakMap(), ui = new WeakMap(), oa = new WeakSet(), ul = /* @__PURE__ */ f(function(t) {
  Bt(t < qp.strings.length, "Invalid string index");
  let e = 5;
  for (let n = 0; n < t; n++)
    e += i(this, ui).getUint32(e) + 4;
  const s = i(this, ui).getUint32(e);
  return i(this, Yo).decode(new Uint8Array(i(this, aa), e + 4, s));
}, "#readString"), f(Pb, "SystemFontInfo");
let Jp = Pb;
var Os, Mf, Ot, ct, Ds, cu, du, fl, tg;
const Ib = class Ib {
  constructor({
    buffer: t,
    extra: e
  }) {
    m(this, ct);
    m(this, Os);
    m(this, Mf, new TextDecoder());
    m(this, Ot);
    u(this, Os, t), u(this, Ot, new DataView(t)), e && Object.assign(this, e);
  }
  get black() {
    return b(this, ct, Ds).call(this, 0);
  }
  get bold() {
    return b(this, ct, Ds).call(this, 1);
  }
  get disableFontFace() {
    return b(this, ct, Ds).call(this, 2);
  }
  get fontExtraProperties() {
    return b(this, ct, Ds).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return b(this, ct, Ds).call(this, 4);
  }
  get isType3Font() {
    return b(this, ct, Ds).call(this, 5);
  }
  get italic() {
    return b(this, ct, Ds).call(this, 6);
  }
  get missingFile() {
    return b(this, ct, Ds).call(this, 7);
  }
  get remeasure() {
    return b(this, ct, Ds).call(this, 8);
  }
  get vertical() {
    return b(this, ct, Ds).call(this, 9);
  }
  get ascent() {
    return b(this, ct, cu).call(this, 0);
  }
  get defaultWidth() {
    return b(this, ct, cu).call(this, 1);
  }
  get descent() {
    return b(this, ct, cu).call(this, 2);
  }
  get bbox() {
    return b(this, ct, du).call(this, Ve.OFFSET_BBOX, 4, "getInt16", 2);
  }
  get fontMatrix() {
    return b(this, ct, du).call(this, Ve.OFFSET_FONT_MATRIX, 6, "getFloat64", 8);
  }
  get defaultVMetrics() {
    return b(this, ct, du).call(this, Ve.OFFSET_DEFAULT_VMETRICS, 3, "getInt16", 2);
  }
  get fallbackName() {
    return b(this, ct, fl).call(this, 0);
  }
  get loadedName() {
    return b(this, ct, fl).call(this, 1);
  }
  get mimetype() {
    return b(this, ct, fl).call(this, 2);
  }
  get name() {
    return b(this, ct, fl).call(this, 3);
  }
  get data() {
    const {
      offset: t,
      length: e
    } = b(this, ct, tg).call(this);
    return e === 0 ? void 0 : new Uint8Array(i(this, Os), t + 4, e);
  }
  clearData() {
    const {
      offset: t,
      length: e
    } = b(this, ct, tg).call(this);
    e !== 0 && (i(this, Ot).setUint32(t, 0), u(this, Os, new Uint8Array(i(this, Os), 0, t + 4).slice().buffer), u(this, Ot, new DataView(i(this, Os))));
  }
  get cssFontInfo() {
    let t = Ve.OFFSET_STRINGS;
    const e = i(this, Ot).getUint32(t);
    t += 4 + e;
    const s = i(this, Ot).getUint32(t);
    t += 4 + s;
    const n = i(this, Ot).getUint32(t);
    if (n === 0)
      return null;
    const r = new Uint8Array(n);
    return r.set(new Uint8Array(i(this, Os), t + 4, n)), new Qp(r.buffer);
  }
  get systemFontInfo() {
    let t = Ve.OFFSET_STRINGS;
    const e = i(this, Ot).getUint32(t);
    t += 4 + e;
    const s = i(this, Ot).getUint32(t);
    if (s === 0)
      return null;
    const n = new Uint8Array(s);
    return n.set(new Uint8Array(i(this, Os), t + 4, s)), new Jp(n.buffer);
  }
};
Os = new WeakMap(), Mf = new WeakMap(), Ot = new WeakMap(), ct = new WeakSet(), Ds = /* @__PURE__ */ f(function(t) {
  Bt(t < Ve.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), s = t * 2 % 8, n = i(this, Ot).getUint8(e) >> s & 3;
  return n === 0 ? void 0 : n === 2;
}, "#readBoolean"), cu = /* @__PURE__ */ f(function(t) {
  return Bt(t < Ve.numbers.length, "Invalid number index"), i(this, Ot).getFloat64(Ve.OFFSET_NUMBERS + t * 8);
}, "#readNumber"), du = /* @__PURE__ */ f(function(t, e, s, n) {
  const r = i(this, Ot).getUint8(t);
  if (r === 0)
    return;
  Bt(r === e, "Invalid array length."), t += 1;
  const a = new Array(r);
  for (let o = 0; o < r; o++)
    a[o] = i(this, Ot)[s](t, !0), t += n;
  return a;
}, "#readArray"), fl = /* @__PURE__ */ f(function(t) {
  Bt(t < Ve.strings.length, "Invalid string index");
  let e = Ve.OFFSET_STRINGS + 4;
  for (let n = 0; n < t; n++)
    e += i(this, Ot).getUint32(e) + 4;
  const s = i(this, Ot).getUint32(e);
  return i(this, Mf).decode(new Uint8Array(i(this, Os), e + 4, s));
}, "#readString"), tg = /* @__PURE__ */ f(function() {
  let t = Ve.OFFSET_STRINGS;
  const e = i(this, Ot).getUint32(t);
  t += 4 + e;
  const s = i(this, Ot).getUint32(t);
  t += 4 + s;
  const n = i(this, Ot).getUint32(t);
  t += 4 + n;
  const r = i(this, Ot).getUint32(t);
  return {
    offset: t,
    length: r
  };
}, "#getDataOffsets"), f(Ib, "FontInfo");
let Zp = Ib;
const Db = class Db {
  constructor(t) {
    this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
  }
  getIR() {
    const t = this.view, e = this.data[ti.KIND], s = !!this.data[ti.HAS_BBOX], n = !!this.data[ti.HAS_BACKGROUND], r = t.getUint32(ti.N_COORD, !0), a = t.getUint32(ti.N_COLOR, !0), o = t.getUint32(ti.N_STOP, !0), h = t.getUint32(ti.N_FIGURES, !0);
    let l = 20;
    const c = new Float32Array(this.buffer, l, r * 2);
    l += r * 8;
    const d = new Uint8Array(this.buffer, l, a * 3);
    l += a * 3;
    const p = [];
    for (let S = 0; S < o; ++S) {
      const v = t.getFloat32(l, !0);
      l += 4;
      const E = t.getUint32(l, !0);
      l += 4, p.push([v, `#${E.toString(16).padStart(6, "0")}`]);
    }
    let y = null;
    if (s) {
      y = [];
      for (let S = 0; S < 4; ++S)
        y.push(t.getFloat32(l, !0)), l += 4;
    }
    let A = null;
    n && (A = new Uint8Array(this.buffer, l, 3), l += 3);
    const w = [];
    for (let S = 0; S < h; ++S) {
      const v = t.getUint8(l);
      l += 1, l = Math.ceil(l / 4) * 4;
      const E = t.getUint32(l, !0);
      l += 4;
      const C = new Int32Array(this.buffer, l, E);
      l += E * 4;
      const T = t.getUint32(l, !0);
      l += 4;
      const x = new Int32Array(this.buffer, l, T);
      l += T * 4;
      const _ = {
        type: v,
        coords: C,
        colors: x
      };
      v === Pr.LATTICE && (_.verticesPerRow = t.getUint32(l, !0), l += 4), w.push(_);
    }
    if (e === 1)
      return ["RadialAxial", "axial", y, p, Array.from(c.slice(0, 2)), Array.from(c.slice(2, 4)), null, null];
    if (e === 2)
      return ["RadialAxial", "radial", y, p, [c[0], c[1]], [c[3], c[4]], c[2], c[5]];
    if (e === 3) {
      const S = this.data[ti.SHADING_TYPE];
      let v = null;
      if (c.length > 0) {
        v = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
        for (let E = 0, C = c.length; E < C; E += 2)
          D.pointBoundingBox(c[E], c[E + 1], v);
      }
      return ["Mesh", S, c, d, w, v, y, A];
    }
    throw new Error(`Unsupported pattern kind: ${e}`);
  }
};
f(Db, "PatternInfo");
let eg = Db;
var Ko;
const Lb = class Lb {
  constructor(t) {
    m(this, Ko);
    u(this, Ko, t);
  }
  get path() {
    return Gt.isFloat16ArraySupported ? new Float16Array(i(this, Ko)) : new Float32Array(i(this, Ko));
  }
};
Ko = new WeakMap(), f(Lb, "FontPathInfo");
let sg = Lb;
function Jw(g) {
  if (g instanceof URL)
    return g;
  if (typeof g == "string") {
    const t = URL.parse(g, window.location);
    if (t)
      return t;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
f(Jw, "getUrlProp");
function Zw(g) {
  if (g instanceof Uint8Array && g.byteLength === g.buffer.byteLength)
    return g;
  if (typeof g == "string")
    return Zf(g);
  if (g instanceof ArrayBuffer || ArrayBuffer.isView(g) || typeof g == "object" && !isNaN(g?.length))
    return new Uint8Array(g);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
f(Zw, "getDataProp");
function Kd(g) {
  if (typeof g != "string")
    return null;
  if (g.endsWith("/"))
    return g;
  throw new Error(`Invalid factory url: "${g}" must include trailing slash.`);
}
f(Kd, "getFactoryUrlProp");
const ig = /* @__PURE__ */ f((g) => typeof g == "object" && Number.isInteger(g?.num) && g.num >= 0 && Number.isInteger(g?.gen) && g.gen >= 0, "isRefProxy"), tv = /* @__PURE__ */ f((g) => typeof g == "object" && typeof g?.name == "string", "isNameProxy"), ev = jw.bind(null, ig, tv);
var Wi, Pf;
const Rb = class Rb {
  constructor() {
    m(this, Wi, /* @__PURE__ */ new Map());
    m(this, Pf, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    i(this, Pf).then(() => {
      for (const [n] of i(this, Wi))
        n.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let n = null;
    if (s?.signal instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        W("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = /* @__PURE__ */ f(() => this.removeEventListener(t, e), "onAbort");
      n = /* @__PURE__ */ f(() => r.removeEventListener("abort", a), "rmAbort"), r.addEventListener("abort", a);
    }
    i(this, Wi).set(e, n);
  }
  removeEventListener(t, e) {
    i(this, Wi).get(e)?.(), i(this, Wi).delete(e);
  }
  terminate() {
    for (const [, t] of i(this, Wi))
      t?.();
    i(this, Wi).clear();
  }
};
Wi = new WeakMap(), Pf = new WeakMap(), f(Rb, "LoopbackPort");
let ng = Rb;
const qd = {
  DATA: 1,
  ERROR: 2
}, jt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function fA() {
}
f(fA, "onFn");
function Be(g) {
  if (g instanceof mn || g instanceof Hl || g instanceof Uu || g instanceof Kh || g instanceof kl)
    return g;
  switch (g instanceof Error || typeof g == "object" && g !== null || rt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), g.name) {
    case "AbortException":
      return new mn(g.message);
    case "InvalidPDFException":
      return new Hl(g.message);
    case "PasswordException":
      return new Uu(g.message, g.code);
    case "ResponseException":
      return new Kh(g.message, g.status, g.missing);
    case "UnknownErrorException":
      return new kl(g.message, g.details);
  }
  return new kl(g.message, g.toString());
}
f(Be, "wrapReason");
var qo, Ps, d0, u0, f0, uu;
const Nb = class Nb {
  constructor(t, e, s) {
    m(this, Ps);
    m(this, qo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, Ps, d0).bind(this), {
      signal: i(this, qo).signal
    });
  }
  on(t, e) {
    const s = this.actionHandler;
    if (s[t])
      throw new Error(`There is already an actionName called "${t}"`);
    s[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const n = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[n] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: n,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, n) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, h = this.comObj;
    return new ReadableStream({
      start: /* @__PURE__ */ f((l) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: l,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, h.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: l.desiredSize
        }, n), c.promise;
      }, "start"),
      pull: /* @__PURE__ */ f((l) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r].pullCall = c, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: jt.PULL,
          streamId: r,
          desiredSize: l.desiredSize
        }), c.promise;
      }, "pull"),
      cancel: /* @__PURE__ */ f((l) => {
        Bt(l instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: jt.CANCEL,
          streamId: r,
          reason: Be(l)
        }), c.promise;
      }, "cancel")
    }, s);
  }
  destroy() {
    i(this, qo)?.abort(), u(this, qo, null);
  }
};
qo = new WeakMap(), Ps = new WeakSet(), d0 = /* @__PURE__ */ f(function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, Ps, f0).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, n = this.callbackCapabilities[s];
    if (!n)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === qd.DATA)
      n.resolve(t.data);
    else if (t.callback === qd.ERROR)
      n.reject(Be(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, n = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: s,
        targetName: n,
        callback: qd.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: n,
        callback: qd.ERROR,
        callbackId: t.callbackId,
        reason: Be(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, Ps, u0).call(this, t);
    return;
  }
  e(t.data);
}, "#onMessage"), u0 = /* @__PURE__ */ f(function(t) {
  const e = t.streamId, s = this.sourceName, n = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], h = {
    enqueue(l, c = 1, d) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: n,
        stream: jt.ENQUEUE,
        streamId: e,
        chunk: l
      }, d);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: n,
        stream: jt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(l) {
      Bt(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: n,
        stream: jt.ERROR,
        streamId: e,
        reason: Be(l)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  h.sinkCapability.resolve(), h.ready = h.sinkCapability.promise, this.streamSinks[e] = h, Promise.try(o, t.data, h).then(function() {
    r.postMessage({
      sourceName: s,
      targetName: n,
      stream: jt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(l) {
    r.postMessage({
      sourceName: s,
      targetName: n,
      stream: jt.START_COMPLETE,
      streamId: e,
      reason: Be(l)
    });
  });
}, "#createStreamSink"), f0 = /* @__PURE__ */ f(function(t) {
  const e = t.streamId, s = this.sourceName, n = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case jt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Be(t.reason));
      break;
    case jt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Be(t.reason));
      break;
    case jt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: jt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || fA).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: jt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: jt.PULL_COMPLETE,
          streamId: e,
          reason: Be(l)
        });
      });
      break;
    case jt.ENQUEUE:
      if (Bt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case jt.CLOSE:
      if (Bt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, Ps, uu).call(this, a, e);
      break;
    case jt.ERROR:
      Bt(a, "error should have stream controller"), a.controller.error(Be(t.reason)), b(this, Ps, uu).call(this, a, e);
      break;
    case jt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Be(t.reason)), b(this, Ps, uu).call(this, a, e);
      break;
    case jt.CANCEL:
      if (!o)
        break;
      const h = Be(t.reason);
      Promise.try(o.onCancel || fA, h).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: jt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: jt.CANCEL_COMPLETE,
          streamId: e,
          reason: Be(l)
        });
      }), o.sinkCapability.reject(h), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, "#processStreamMessage"), uu = /* @__PURE__ */ f(async function(t, e) {
  await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[e];
}, "#deleteStreamController"), f(Nb, "MessageHandler");
let Ir = Nb;
var If;
const Bb = class Bb {
  constructor({
    cMapUrl: t = null,
    standardFontDataUrl: e = null,
    wasmUrl: s = null
  }) {
    m(this, If, Object.freeze({
      cMapUrl: "CMap",
      standardFontDataUrl: "font",
      wasmUrl: "wasm"
    }));
    this.cMapUrl = t, this.standardFontDataUrl = e, this.wasmUrl = s;
  }
  async fetch({
    kind: t,
    filename: e
  }) {
    switch (t) {
      case "cMapUrl":
      case "standardFontDataUrl":
      case "wasmUrl":
        break;
      default:
        rt(`Not implemented: ${t}`);
    }
    const s = this[t];
    if (!s)
      throw new Error(`Ensure that the \`${t}\` API parameter is provided.`);
    const n = `${s}${e}`;
    return this._fetch(n, t).catch((r) => {
      throw new Error(`Unable to load ${i(this, If)[t]} data at: ${n}`);
    });
  }
  async _fetch(t, e) {
    rt("Abstract method `_fetch` called.");
  }
};
If = new WeakMap(), f(Bb, "BaseBinaryDataFactory");
let rg = Bb;
const Fb = class Fb extends rg {
  async _fetch(t, e) {
    const s = e === "cMapUrl" && !t.endsWith(".bcmap") ? "text" : "bytes", n = await Zm(t, s);
    return n instanceof Uint8Array ? n : Zf(n);
  }
};
f(Fb, "DOMBinaryDataFactory");
let Yu = Fb;
var Nc;
const Ob = class Ob {
  constructor({
    enableHWA: t = !1
  }) {
    m(this, Nc, !1);
    u(this, Nc, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !i(this, Nc)
      })
    };
  }
  reset({
    canvas: t
  }, e, s) {
    if (!t)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.width = e, t.height = s;
  }
  destroy(t) {
    const {
      canvas: e
    } = t;
    if (!e)
      throw new Error("Canvas is not specified");
    e.width = e.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    rt("Abstract method `_createCanvas` called.");
  }
};
Nc = new WeakMap(), f(Ob, "BaseCanvasFactory");
let ag = Ob;
const Hb = class Hb extends ag {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
};
f(Hb, "DOMCanvasFactory");
let og = Hb;
const Ub = class Ub {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, n, r) {
    return "none";
  }
  destroy(t = !1) {
  }
};
f(Ub, "BaseFilterFactory");
let hg = Ub;
var ha, Qo, Xi, Yi, Ee, la, ca, F, Ae, pl, ro, fu, ao, p0, cg, oo, gl, ml, dg, bl;
const Gb = class Gb extends hg {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    m(this, F);
    m(this, ha);
    m(this, Qo);
    m(this, Xi);
    m(this, Yi);
    m(this, Ee);
    m(this, la);
    m(this, ca, 0);
    u(this, Yi, e), u(this, Ee, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = i(this, F, Ae).get(e);
    if (s)
      return s;
    const [n, r, a] = b(this, F, fu).call(this, e), o = e.length === 1 ? n : `${n}${r}${a}`;
    if (s = i(this, F, Ae).get(o), s)
      return i(this, F, Ae).set(e, s), s;
    const h = `g_${i(this, Yi)}_transfer_map_${zt(this, ca)._++}`, l = b(this, F, ao).call(this, h);
    i(this, F, Ae).set(e, l), i(this, F, Ae).set(o, l);
    const c = b(this, F, oo).call(this, h);
    return b(this, F, ml).call(this, n, r, a, c), l;
  }
  addHCMFilter(e, s) {
    const n = `${e}-${s}`, r = "base";
    let a = i(this, F, pl).get(r);
    if (a?.key === n || (a ? (a.filter?.remove(), a.key = n, a.url = "none", a.filter = null) : (a = {
      key: n,
      url: "none",
      filter: null
    }, i(this, F, pl).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, F, bl).call(this, e);
    e = D.makeHexColor(...o);
    const h = b(this, F, bl).call(this, s);
    if (s = D.makeHexColor(...h), i(this, F, ro).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const l = new Array(256);
    for (let A = 0; A <= 255; A++) {
      const w = A / 255;
      l[A] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = l.join(","), d = `g_${i(this, Yi)}_hcm_filter`, p = a.filter = b(this, F, oo).call(this, d);
    b(this, F, ml).call(this, c, c, c, p), b(this, F, cg).call(this, p);
    const y = /* @__PURE__ */ f((A, w) => {
      const S = o[A] / 255, v = h[A] / 255, E = new Array(w + 1);
      for (let C = 0; C <= w; C++)
        E[C] = S + C / w * (v - S);
      return E.join(",");
    }, "getSteps");
    return b(this, F, ml).call(this, y(0, 5), y(1, 5), y(2, 5), p), a.url = b(this, F, ao).call(this, d), a.url;
  }
  addAlphaFilter(e) {
    let s = i(this, F, Ae).get(e);
    if (s)
      return s;
    const [n] = b(this, F, fu).call(this, [e]), r = `alpha_${n}`;
    if (s = i(this, F, Ae).get(r), s)
      return i(this, F, Ae).set(e, s), s;
    const a = `g_${i(this, Yi)}_alpha_map_${zt(this, ca)._++}`, o = b(this, F, ao).call(this, a);
    i(this, F, Ae).set(e, o), i(this, F, Ae).set(r, o);
    const h = b(this, F, oo).call(this, a);
    return b(this, F, dg).call(this, n, h), o;
  }
  addLuminosityFilter(e) {
    let s = i(this, F, Ae).get(e || "luminosity");
    if (s)
      return s;
    let n, r;
    if (e ? ([n] = b(this, F, fu).call(this, [e]), r = `luminosity_${n}`) : r = "luminosity", s = i(this, F, Ae).get(r), s)
      return i(this, F, Ae).set(e, s), s;
    const a = `g_${i(this, Yi)}_luminosity_map_${zt(this, ca)._++}`, o = b(this, F, ao).call(this, a);
    i(this, F, Ae).set(e, o), i(this, F, Ae).set(r, o);
    const h = b(this, F, oo).call(this, a);
    return b(this, F, p0).call(this, h), e && b(this, F, dg).call(this, n, h), o;
  }
  addHighlightHCMFilter(e, s, n, r, a) {
    const o = `${s}-${n}-${r}-${a}`;
    let h = i(this, F, pl).get(e);
    if (h?.key === o || (h ? (h.filter?.remove(), h.key = o, h.url = "none", h.filter = null) : (h = {
      key: o,
      url: "none",
      filter: null
    }, i(this, F, pl).set(e, h)), !s || !n))
      return h.url;
    const [l, c] = [s, n].map(b(this, F, bl).bind(this));
    let d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [y, A] = [r, a].map(b(this, F, bl).bind(this));
    p < d && ([d, p, y, A] = [p, d, A, y]), i(this, F, ro).style.color = "";
    const w = /* @__PURE__ */ f((E, C, T) => {
      const x = new Array(256), _ = (p - d) / T, k = E / 255, R = (C - E) / (255 * T);
      let I = 0;
      for (let N = 0; N <= T; N++) {
        const P = Math.round(d + N * _), Q = k + N * R;
        for (let j = I; j <= P; j++)
          x[j] = Q;
        I = P + 1;
      }
      for (let N = I; N < 256; N++)
        x[N] = x[I - 1];
      return x.join(",");
    }, "getSteps"), S = `g_${i(this, Yi)}_hcm_${e}_filter`, v = h.filter = b(this, F, oo).call(this, S);
    return b(this, F, cg).call(this, v), b(this, F, ml).call(this, w(y[0], A[0], 5), w(y[1], A[1], 5), w(y[2], A[2], 5), v), h.url = b(this, F, ao).call(this, S), h.url;
  }
  destroy(e = !1) {
    e && i(this, la)?.size || (i(this, Xi)?.parentNode.parentNode.remove(), u(this, Xi, null), i(this, Qo)?.clear(), u(this, Qo, null), i(this, la)?.clear(), u(this, la, null), u(this, ca, 0));
  }
};
ha = new WeakMap(), Qo = new WeakMap(), Xi = new WeakMap(), Yi = new WeakMap(), Ee = new WeakMap(), la = new WeakMap(), ca = new WeakMap(), F = new WeakSet(), Ae = /* @__PURE__ */ f(function() {
  return i(this, Qo) || u(this, Qo, /* @__PURE__ */ new Map());
}, "#cache"), pl = /* @__PURE__ */ f(function() {
  return i(this, la) || u(this, la, /* @__PURE__ */ new Map());
}, "#hcmCache"), ro = /* @__PURE__ */ f(function() {
  if (!i(this, Xi)) {
    const e = i(this, Ee).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const n = i(this, Ee).createElementNS(Pi, "svg");
    n.setAttribute("width", 0), n.setAttribute("height", 0), u(this, Xi, i(this, Ee).createElementNS(Pi, "defs")), e.append(n), n.append(i(this, Xi)), i(this, Ee).body.append(e);
  }
  return i(this, Xi);
}, "#defs"), fu = /* @__PURE__ */ f(function(e) {
  if (e.length === 1) {
    const l = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++)
      c[p] = l[p] / 255;
    const d = c.join(",");
    return [d, d, d];
  }
  const [s, n, r] = e, a = new Array(256), o = new Array(256), h = new Array(256);
  for (let l = 0; l < 256; l++)
    a[l] = s[l] / 255, o[l] = n[l] / 255, h[l] = r[l] / 255;
  return [a.join(","), o.join(","), h.join(",")];
}, "#createTables"), ao = /* @__PURE__ */ f(function(e) {
  if (i(this, ha) === void 0) {
    u(this, ha, "");
    const s = i(this, Ee).URL;
    s !== i(this, Ee).baseURI && (tp(s) ? W('#createUrl: ignore "data:"-URL for performance reasons.') : u(this, ha, kA(s, "")));
  }
  return `url(${i(this, ha)}#${e})`;
}, "#createUrl"), p0 = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ee).createElementNS(Pi, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, "#addLuminosityConversion"), cg = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ee).createElementNS(Pi, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, "#addGrayConversion"), oo = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ee).createElementNS(Pi, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), i(this, F, ro).append(s), s;
}, "#createFilter"), gl = /* @__PURE__ */ f(function(e, s, n) {
  const r = i(this, Ee).createElementNS(Pi, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", n), e.append(r);
}, "#appendFeFunc"), ml = /* @__PURE__ */ f(function(e, s, n, r) {
  const a = i(this, Ee).createElementNS(Pi, "feComponentTransfer");
  r.append(a), b(this, F, gl).call(this, a, "feFuncR", e), b(this, F, gl).call(this, a, "feFuncG", s), b(this, F, gl).call(this, a, "feFuncB", n);
}, "#addTransferMapConversion"), dg = /* @__PURE__ */ f(function(e, s) {
  const n = i(this, Ee).createElementNS(Pi, "feComponentTransfer");
  s.append(n), b(this, F, gl).call(this, n, "feFuncA", e);
}, "#addTransferMapAlphaConversion"), bl = /* @__PURE__ */ f(function(e) {
  return i(this, F, ro).style.color = e, Yd(getComputedStyle(i(this, F, ro)).getPropertyValue("color"));
}, "#getRGB"), f(Gb, "DOMFilterFactory");
let lg = Gb;
const sv = `
struct Uniforms {
  offsetX      : f32,
  offsetY      : f32,
  scaleX       : f32,
  scaleY       : f32,
  paddedWidth  : f32,
  paddedHeight : f32,
  borderSize   : f32,
  _pad         : f32,
};

@group(0) @binding(0) var<uniform> u : Uniforms;

struct VertexInput {
  @location(0) position : vec2<f32>,
  @location(1) color    : vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)       color    : vec3<f32>,
};

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let cx = (in.position.x + u.offsetX) * u.scaleX;
  let cy = (in.position.y + u.offsetY) * u.scaleY;
  out.position = vec4<f32>(
    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,
    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,
    0.0,
    1.0
  );
  out.color = in.color.rgb;
  return out;
}

@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  return vec4<f32>(in.color, 1.0);
}
`;
var Bc, Jo, Zo, th, Jh, g0, m0;
const $b = class $b {
  constructor() {
    m(this, Jh);
    m(this, Bc, null);
    m(this, Jo, null);
    m(this, Zo, null);
    m(this, th, null);
  }
  init() {
    i(this, Bc) === null && u(this, Bc, b(this, Jh, g0).call(this));
  }
  get isReady() {
    return i(this, Jo) !== null;
  }
  draw(t, e, s, n, r, a) {
    const o = i(this, Jo), {
      offsetX: h,
      offsetY: l,
      scaleX: c,
      scaleY: d
    } = e, {
      posData: p,
      colData: y,
      vertexCount: A
    } = b(this, Jh, m0).call(this, t, e), w = o.createBuffer({
      size: Math.max(p.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    p.byteLength > 0 && o.queue.writeBuffer(w, 0, p);
    const S = o.createBuffer({
      size: Math.max(y.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    y.byteLength > 0 && o.queue.writeBuffer(S, 0, y);
    const v = o.createBuffer({
      size: 32,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    o.queue.writeBuffer(v, 0, new Float32Array([h, l, c, d, n, r, a, 0]));
    const E = o.createBindGroup({
      layout: i(this, Zo).getBindGroupLayout(0),
      entries: [{
        binding: 0,
        resource: {
          buffer: v
        }
      }]
    }), C = new OffscreenCanvas(n, r), T = C.getContext("webgpu");
    T.configure({
      device: o,
      format: i(this, th),
      alphaMode: s ? "opaque" : "premultiplied"
    });
    const x = s ? {
      r: s[0] / 255,
      g: s[1] / 255,
      b: s[2] / 255,
      a: 1
    } : {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    }, _ = o.createCommandEncoder(), k = _.beginRenderPass({
      colorAttachments: [{
        view: T.getCurrentTexture().createView(),
        clearValue: x,
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    return A > 0 && (k.setPipeline(i(this, Zo)), k.setBindGroup(0, E), k.setVertexBuffer(0, w), k.setVertexBuffer(1, S), k.draw(A)), k.end(), o.queue.submit([_.finish()]), w.destroy(), S.destroy(), v.destroy(), C.transferToImageBitmap();
  }
};
Bc = new WeakMap(), Jo = new WeakMap(), Zo = new WeakMap(), th = new WeakMap(), Jh = new WeakSet(), g0 = /* @__PURE__ */ f(async function() {
  if (!globalThis.navigator?.gpu)
    return !1;
  try {
    const t = await navigator.gpu.requestAdapter();
    if (!t)
      return !1;
    u(this, th, navigator.gpu.getPreferredCanvasFormat());
    const e = u(this, Jo, await t.requestDevice()), s = e.createShaderModule({
      code: sv
    });
    return u(this, Zo, e.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: s,
        entryPoint: "vs_main",
        buffers: [{
          arrayStride: 8,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: "float32x2"
          }]
        }, {
          arrayStride: 4,
          attributes: [{
            shaderLocation: 1,
            offset: 0,
            format: "unorm8x4"
          }]
        }]
      },
      fragment: {
        module: s,
        entryPoint: "fs_main",
        targets: [{
          format: i(this, th)
        }]
      },
      primitive: {
        topology: "triangle-list"
      }
    })), !0;
  } catch {
    return !1;
  }
}, "#initGPU"), m0 = /* @__PURE__ */ f(function(t, e) {
  const {
    coords: s,
    colors: n
  } = e;
  let r = 0;
  for (const d of t) {
    const p = d.coords;
    if (d.type === Pr.TRIANGLES)
      r += p.length;
    else if (d.type === Pr.LATTICE) {
      const y = d.verticesPerRow;
      r += (Math.floor(p.length / y) - 1) * (y - 1) * 6;
    }
  }
  const a = new Float32Array(r * 2), o = new Uint8Array(r * 4);
  let h = 0, l = 0;
  const c = /* @__PURE__ */ f((d, p) => {
    a[h++] = s[d * 2], a[h++] = s[d * 2 + 1], o[l++] = n[p * 4], o[l++] = n[p * 4 + 1], o[l++] = n[p * 4 + 2], l++;
  }, "addVertex");
  for (const d of t) {
    const p = d.coords, y = d.colors;
    if (d.type === Pr.TRIANGLES)
      for (let A = 0, w = p.length; A < w; A += 3)
        c(p[A], y[A]), c(p[A + 1], y[A + 1]), c(p[A + 2], y[A + 2]);
    else if (d.type === Pr.LATTICE) {
      const A = d.verticesPerRow, w = Math.floor(p.length / A) - 1, S = A - 1;
      for (let v = 0; v < w; v++) {
        let E = v * A;
        for (let C = 0; C < S; C++, E++)
          c(p[E], y[E]), c(p[E + 1], y[E + 1]), c(p[E + A], y[E + A]), c(p[E + A + 1], y[E + A + 1]), c(p[E + 1], y[E + 1]), c(p[E + A], y[E + A]);
      }
    }
  }
  return {
    posData: a,
    colData: o,
    vertexCount: r
  };
}, "#buildVertexStreams"), f($b, "WebGPUMesh");
let ug = $b;
const eb = new ug();
function iv() {
  eb.init();
}
f(iv, "initWebGPUMesh");
function nv() {
  return eb.isReady;
}
f(nv, "isWebGPUMeshReady");
function rv(g, t, e, s, n, r) {
  return eb.draw(g, t, e, s, n, r);
}
f(rv, "drawMeshWithGPU");
const me = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function pu(g, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], n = new Path2D();
  n.rect(t[0], t[1], e, s), g.clip(n);
}
f(pu, "applyBoundingBox");
const zb = class zb {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    rt("Abstract method `getPattern` called.");
  }
};
f(zb, "BaseShadingPattern");
let Wl = zb;
const jb = class jb extends Wl {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  isOriginBased() {
    return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
  }
  isRadial() {
    return this._type === "radial";
  }
  _isCircleCenterOutside() {
    return !this.isRadial() || this._r0 > this._r1 ? !1 : Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]) > this._r1;
  }
  _createGradient(t, e = null) {
    let s, n = this._p0, r = this._p1;
    if (e && (n = n.slice(), r = r.slice(), D.applyTransform(n, e), D.applyTransform(r, e)), this._type === "axial")
      s = t.createLinearGradient(n[0], n[1], r[0], r[1]);
    else if (this._type === "radial") {
      let a = this._r0, o = this._r1;
      if (e) {
        const h = new Float32Array(2);
        D.singularValueDecompose2dScale(e, h), a *= h[0], o *= h[0];
      }
      s = t.createRadialGradient(n[0], n[1], a, r[0], r[1], o);
    }
    for (const a of this._colorStops)
      s.addColorStop(a[0], a[1]);
    return s;
  }
  _createReversedGradient(t, e = null) {
    let s = this._p1, n = this._p0;
    e && (s = s.slice(), n = n.slice(), D.applyTransform(s, e), D.applyTransform(n, e));
    let r = this._r1, a = this._r0;
    if (e) {
      const l = new Float32Array(2);
      D.singularValueDecompose2dScale(e, l), r *= l[0], a *= l[0];
    }
    const o = t.createRadialGradient(s[0], s[1], r, n[0], n[1], a), h = this._colorStops.map(([l, c]) => [1 - l, c]).reverse();
    for (const [l, c] of h)
      o.addColorStop(l, c);
    return o;
  }
  getPattern(t, e, s, n) {
    let r;
    if (n === me.STROKE || n === me.FILL) {
      if (this.isOriginBased()) {
        let p = D.transform(s, e.baseTransform);
        this.matrix && (p = D.transform(p, this.matrix));
        const y = 1e-3, A = Math.hypot(p[0], p[1]), w = Math.hypot(p[2], p[3]), S = (p[0] * p[2] + p[1] * p[3]) / (A * w);
        if (Math.abs(S) < y)
          if (this.isRadial()) {
            if (Math.abs(A - w) < y)
              return this._createGradient(t, p);
          } else
            return this._createGradient(t, p);
      }
      const a = e.current.getClippedPathBoundingBox(n, kt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, h = Math.ceil(a[3] - a[1]) || 1, l = e.canvasFactory.create(o, h), c = l.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = D.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), pu(c, this._bbox), this._isCircleCenterOutside() && (c.fillStyle = this._createReversedGradient(c), c.fill()), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(l.canvas, "no-repeat"), e.canvasFactory.destroy(l);
      const d = new DOMMatrix(s);
      r.setTransform(d);
    } else
      this._isCircleCenterOutside() && (t.save(), pu(t, this._bbox), t.fillStyle = this._createReversedGradient(t), t.fillRect(-1e10, -1e10, 2e10, 2e10), t.restore()), pu(t, this._bbox), r = this._createGradient(t);
    return r;
  }
};
f(jb, "RadialAxialShadingPattern");
let fg = jb;
function lp(g, t, e, s, n, r, a, o) {
  const h = t.coords, l = t.colors, c = g.data, d = g.width * 4;
  let p;
  h[e * 2 + 1] > h[s * 2 + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), h[s * 2 + 1] > h[n * 2 + 1] && (p = s, s = n, n = p, p = a, a = o, o = p), h[e * 2 + 1] > h[s * 2 + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const y = (h[e * 2] + t.offsetX) * t.scaleX, A = (h[e * 2 + 1] + t.offsetY) * t.scaleY, w = (h[s * 2] + t.offsetX) * t.scaleX, S = (h[s * 2 + 1] + t.offsetY) * t.scaleY, v = (h[n * 2] + t.offsetX) * t.scaleX, E = (h[n * 2 + 1] + t.offsetY) * t.scaleY;
  if (A >= E)
    return;
  const C = l[r * 4], T = l[r * 4 + 1], x = l[r * 4 + 2], _ = l[a * 4], k = l[a * 4 + 1], R = l[a * 4 + 2], I = l[o * 4], N = l[o * 4 + 1], P = l[o * 4 + 2], Q = Math.round(A), j = Math.round(E);
  let $, Tt, H, U, st, Ne, ki, Kt;
  for (let vt = Q; vt <= j; vt++) {
    if (vt < S) {
      const $t = vt < A ? 0 : (A - vt) / (A - S);
      $ = y - (y - w) * $t, Tt = C - (C - _) * $t, H = T - (T - k) * $t, U = x - (x - R) * $t;
    } else {
      let $t;
      vt > E ? $t = 1 : S === E ? $t = 0 : $t = (S - vt) / (S - E), $ = w - (w - v) * $t, Tt = _ - (_ - I) * $t, H = k - (k - N) * $t, U = R - (R - P) * $t;
    }
    let St;
    vt < A ? St = 0 : vt > E ? St = 1 : St = (A - vt) / (A - E), st = y - (y - v) * St, Ne = C - (C - I) * St, ki = T - (T - N) * St, Kt = x - (x - P) * St;
    const Mi = Math.round(Math.min($, st)), tl = Math.round(Math.max($, st));
    let Sn = d * vt + Mi * 4;
    for (let $t = Mi; $t <= tl; $t++)
      St = ($ - $t) / ($ - st), St < 0 ? St = 0 : St > 1 && (St = 1), c[Sn++] = Tt - (Tt - Ne) * St | 0, c[Sn++] = H - (H - ki) * St | 0, c[Sn++] = U - (U - Kt) * St | 0, c[Sn++] = 255;
  }
}
f(lp, "drawTriangle");
function av(g, t, e) {
  const s = t.coords, n = t.colors;
  let r, a;
  switch (t.type) {
    case Pr.LATTICE:
      const o = t.verticesPerRow, h = Math.floor(s.length / o) - 1, l = o - 1;
      for (r = 0; r < h; r++) {
        let c = r * o;
        for (let d = 0; d < l; d++, c++)
          lp(g, e, s[c], s[c + 1], s[c + o], n[c], n[c + 1], n[c + o]), lp(g, e, s[c + o + 1], s[c + 1], s[c + o], n[c + o + 1], n[c + 1], n[c + o]);
      }
      break;
    case Pr.TRIANGLES:
      for (r = 0, a = s.length; r < a; r += 3)
        lp(g, e, s[r], s[r + 1], s[r + 2], n[r], n[r + 1], n[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
f(av, "drawFigure");
const Vb = class Vb extends Wl {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - h, d = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3) || 1, p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3) || 1, y = l ? l / d : 1, A = c ? c / p : 1, w = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -h,
      scaleX: 1 / y,
      scaleY: 1 / A
    }, S = d + 4, v = p + 4, E = s.create(S, v);
    if (nv())
      E.context.drawImage(rv(this._figures, w, e, S, v, 2), 0, 0);
    else {
      const C = E.context.createImageData(d, p);
      if (e) {
        const T = C.data;
        for (let x = 0, _ = T.length; x < _; x += 4)
          T[x] = e[0], T[x + 1] = e[1], T[x + 2] = e[2], T[x + 3] = 255;
      }
      for (const T of this._figures)
        av(C, T, w);
      E.context.putImageData(C, 2, 2);
    }
    return {
      canvas: E.canvas,
      offsetX: o - 2 * y,
      offsetY: h - 2 * A,
      scaleX: y,
      scaleY: A
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, n) {
    pu(t, this._bbox);
    const r = new Float32Array(2);
    if (n === me.SHADING)
      D.singularValueDecompose2dScale(kt(t), r);
    else if (this.matrix) {
      D.singularValueDecompose2dScale(this.matrix, r);
      const [h, l] = r;
      D.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= h, r[1] *= l;
    } else
      D.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, n === me.SHADING ? null : this._background, e.canvasFactory);
    n !== me.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY);
    const o = t.createPattern(a.canvas, "no-repeat");
    return e.canvasFactory.destroy(a), o;
  }
};
f(Vb, "MeshShadingPattern");
let pg = Vb;
const Wb = class Wb extends Wl {
  getPattern() {
    return "hotpink";
  }
};
f(Wb, "DummyShadingPattern");
let gg = Wb;
function ov(g) {
  switch (g[0]) {
    case "RadialAxial":
      return new fg(g);
    case "Mesh":
      return new pg(g);
    case "Dummy":
      return new gg();
  }
  throw new Error(`Unknown IR type: ${g[0]}`);
}
f(ov, "getShadingPattern");
const pA = {
  COLORED: 1,
  UNCOLORED: 2
}, Ll = class Ll {
  constructor(t, e, s, n) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = n;
  }
  createPatternCanvas(t, e) {
    const {
      bbox: s,
      operatorList: n,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: h
    } = this;
    let {
      xstep: l,
      ystep: c
    } = this;
    l = Math.abs(l), c = Math.abs(c), Jf("TilingType: " + a);
    const d = s[0], p = s[1], y = s[2], A = s[3], w = y - d, S = A - p, v = new Float32Array(2);
    D.singularValueDecompose2dScale(this.matrix, v);
    const [E, C] = v;
    D.singularValueDecompose2dScale(this.baseTransform, v);
    const T = E * v[0], x = C * v[1];
    let _ = w, k = S, R = !1, I = !1;
    const N = Math.ceil(l * T), P = Math.ceil(c * x), Q = Math.ceil(w * T), j = Math.ceil(S * x);
    N >= Q ? _ = l : R = !0, P >= j ? k = c : I = !0;
    const $ = this.getSizeAndScale(_, this.ctx.canvas.width, T), Tt = this.getSizeAndScale(k, this.ctx.canvas.height, x), H = t.canvasFactory.create($.size, Tt.size), U = H.context, st = h.createCanvasGraphics(U, e);
    if (st.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(st, r, o), U.translate(-$.scale * d, -Tt.scale * p), st.transform(0, $.scale, 0, 0, Tt.scale, 0, 0), U.save(), st.dependencyTracker?.save(), this.clipBbox(st, d, p, y, A), st.baseTransform = kt(st.ctx), st.executeOperatorList(n), st.endDrawing(), st.dependencyTracker?.restore(), U.restore(), R || I) {
      const Ne = H.canvas;
      R && (_ = l), I && (k = c);
      const ki = this.getSizeAndScale(_, this.ctx.canvas.width, T), Kt = this.getSizeAndScale(k, this.ctx.canvas.height, x), vt = ki.size, St = Kt.size, Mi = t.canvasFactory.create(vt, St), tl = Mi.context, Sn = R ? Math.floor(w / l) : 0, $t = I ? Math.floor(S / c) : 0;
      for (let el = 0; el <= Sn; el++)
        for (let sl = 0; sl <= $t; sl++)
          tl.drawImage(Ne, vt * el, St * sl, vt, St, 0, 0, vt, St);
      return t.canvasFactory.destroy(H), {
        canvas: Mi.canvas,
        canvasEntry: Mi,
        scaleX: ki.scale,
        scaleY: Kt.scale,
        offsetX: d,
        offsetY: p
      };
    }
    return {
      canvas: H.canvas,
      canvasEntry: H,
      scaleX: $.scale,
      scaleY: Tt.scale,
      offsetX: d,
      offsetY: p
    };
  }
  getSizeAndScale(t, e, s) {
    const n = Math.max(Ll.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= n ? r = n : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, n, r) {
    const a = n - e, o = r - s;
    t.ctx.rect(e, s, a, o), D.axialAlignedBoundingBox([e, s, n, r], kt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const n = t.ctx, r = t.current;
    switch (e) {
      case pA.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        n.fillStyle = r.fillColor = a, n.strokeStyle = r.strokeColor = o;
        break;
      case pA.UNCOLORED:
        n.fillStyle = n.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new pp(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, n, r) {
    let a = s;
    n !== me.SHADING && (a = D.transform(a, e.baseTransform), this.matrix && (a = D.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let h = new DOMMatrix(a);
    h = h.translate(o.offsetX, o.offsetY), h = h.scale(1 / o.scaleX, 1 / o.scaleY);
    const l = t.createPattern(o.canvas, "repeat");
    return e.canvasFactory.destroy(o.canvasEntry), l.setTransform(h), l;
  }
};
f(Ll, "TilingPattern"), M(Ll, "MAX_PATTERN_SIZE", 3e3);
let mg = Ll;
function hv({
  src: g,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: n,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = Gt.isLittleEndian ? 4278190080 : 255, [h, l] = a ? [r, o] : [o, r], c = s >> 3, d = s & 7, p = h ^ l, y = g.length;
  e = new Uint32Array(e.buffer);
  let A = 0;
  for (let w = 0; w < n; ++w) {
    for (const v = t + c; t < v; ++t, A += 8) {
      const E = g[t];
      e[A] = h ^ -(E >> 7 & 1) & p, e[A + 1] = h ^ -(E >> 6 & 1) & p, e[A + 2] = h ^ -(E >> 5 & 1) & p, e[A + 3] = h ^ -(E >> 4 & 1) & p, e[A + 4] = h ^ -(E >> 3 & 1) & p, e[A + 5] = h ^ -(E >> 2 & 1) & p, e[A + 6] = h ^ -(E >> 1 & 1) & p, e[A + 7] = h ^ -(E & 1) & p;
    }
    if (d === 0)
      continue;
    const S = t < y ? g[t++] : 255;
    for (let v = 0; v < d; ++v, ++A)
      e[A] = h ^ -(S >> 7 - v & 1) & p;
  }
  return {
    srcPos: t,
    destPos: A
  };
}
f(hv, "convertBlackAndWhiteToRGBA");
const gA = 16, mA = 100, lv = 15, bA = 10, je = 16, cp = new DOMMatrix(), cs = new Float32Array(2), go = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function cv(g, t) {
  if (g._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  g.__originalSave = g.save, g.__originalRestore = g.restore, g.__originalRotate = g.rotate, g.__originalScale = g.scale, g.__originalTranslate = g.translate, g.__originalTransform = g.transform, g.__originalSetTransform = g.setTransform, g.__originalResetTransform = g.resetTransform, g.__originalClip = g.clip, g.__originalMoveTo = g.moveTo, g.__originalLineTo = g.lineTo, g.__originalBezierCurveTo = g.bezierCurveTo, g.__originalRect = g.rect, g.__originalClosePath = g.closePath, g.__originalBeginPath = g.beginPath, g._removeMirroring = () => {
    g.save = g.__originalSave, g.restore = g.__originalRestore, g.rotate = g.__originalRotate, g.scale = g.__originalScale, g.translate = g.__originalTranslate, g.transform = g.__originalTransform, g.setTransform = g.__originalSetTransform, g.resetTransform = g.__originalResetTransform, g.clip = g.__originalClip, g.moveTo = g.__originalMoveTo, g.lineTo = g.__originalLineTo, g.bezierCurveTo = g.__originalBezierCurveTo, g.rect = g.__originalRect, g.closePath = g.__originalClosePath, g.beginPath = g.__originalBeginPath, delete g._removeMirroring;
  }, g.save = function() {
    t.save(), this.__originalSave();
  }, g.restore = function() {
    t.restore(), this.__originalRestore();
  }, g.translate = function(e, s) {
    t.translate(e, s), this.__originalTranslate(e, s);
  }, g.scale = function(e, s) {
    t.scale(e, s), this.__originalScale(e, s);
  }, g.transform = function(e, s, n, r, a, o) {
    t.transform(e, s, n, r, a, o), this.__originalTransform(e, s, n, r, a, o);
  }, g.setTransform = function(e, s, n, r, a, o) {
    t.setTransform(e, s, n, r, a, o), this.__originalSetTransform(e, s, n, r, a, o);
  }, g.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, g.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, g.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, g.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, g.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, g.bezierCurveTo = function(e, s, n, r, a, o) {
    t.bezierCurveTo(e, s, n, r, a, o), this.__originalBezierCurveTo(e, s, n, r, a, o);
  }, g.rect = function(e, s, n, r) {
    t.rect(e, s, n, r), this.__originalRect(e, s, n, r);
  }, g.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, g.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
f(cv, "mirrorContextOperations");
function Qd(g, t, e, s, n, r, a, o, h, l) {
  const [c, d, p, y, A, w] = kt(g);
  if (d === 0 && p === 0) {
    const E = a * c + A, C = Math.round(E), T = o * y + w, x = Math.round(T), _ = (a + h) * c + A, k = Math.abs(Math.round(_) - C) || 1, R = (o + l) * y + w, I = Math.abs(Math.round(R) - x) || 1;
    return g.setTransform(Math.sign(c), 0, 0, Math.sign(y), C, x), g.drawImage(t, e, s, n, r, 0, 0, k, I), g.setTransform(c, d, p, y, A, w), [k, I];
  }
  if (c === 0 && y === 0) {
    const E = o * p + A, C = Math.round(E), T = a * d + w, x = Math.round(T), _ = (o + l) * p + A, k = Math.abs(Math.round(_) - C) || 1, R = (a + h) * d + w, I = Math.abs(Math.round(R) - x) || 1;
    return g.setTransform(0, Math.sign(d), Math.sign(p), 0, C, x), g.drawImage(t, e, s, n, r, 0, 0, I, k), g.setTransform(c, d, p, y, A, w), [I, k];
  }
  g.drawImage(t, e, s, n, r, a, o, h, l);
  const S = Math.hypot(c, d), v = Math.hypot(p, y);
  return [S * h, v * l];
}
f(Qd, "drawImageAtIntegerCoords");
const Xb = class Xb {
  alphaIsShape = !1;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = up;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = qt.FILL;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  patternFill = !1;
  patternStroke = !1;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  minMax = go.slice();
  constructor(t, e) {
    this.clipBox = new Float32Array([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = me.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === me.STROKE) {
      e || rt("Stroke bounding box must include transform."), D.singularValueDecompose2dScale(e, cs);
      const n = cs[0] * this.lineWidth / 2, r = cs[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = D.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(go, 0);
  }
  getClippedPathBoundingBox(t = me.FILL, e = null) {
    return D.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
};
f(Xb, "CanvasExtraState");
let Ku = Xb;
function yA(g, t) {
  if (t instanceof ImageData) {
    g.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, n = e % je, r = (e - n) / je, a = n === 0 ? r : r + 1, o = g.createImageData(s, je);
  let h = 0, l;
  const c = t.data, d = o.data;
  let p, y, A, w;
  if (t.kind === su.GRAYSCALE_1BPP) {
    const S = c.byteLength, v = new Uint32Array(d.buffer, 0, d.byteLength >> 2), E = v.length, C = s + 7 >> 3, T = 4294967295, x = Gt.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (A = p < r ? je : n, l = 0, y = 0; y < A; y++) {
        const _ = S - h;
        let k = 0;
        const R = _ > C ? s : _ * 8 - 7, I = R & -8;
        let N = 0, P = 0;
        for (; k < I; k += 8)
          P = c[h++], v[l++] = P & 128 ? T : x, v[l++] = P & 64 ? T : x, v[l++] = P & 32 ? T : x, v[l++] = P & 16 ? T : x, v[l++] = P & 8 ? T : x, v[l++] = P & 4 ? T : x, v[l++] = P & 2 ? T : x, v[l++] = P & 1 ? T : x;
        for (; k < R; k++)
          N === 0 && (P = c[h++], N = 128), v[l++] = P & N ? T : x, N >>= 1;
      }
      for (; l < E; )
        v[l++] = 0;
      g.putImageData(o, 0, p * je);
    }
  } else if (t.kind === su.RGBA_32BPP) {
    for (y = 0, w = s * je * 4, p = 0; p < r; p++)
      d.set(c.subarray(h, h + w)), h += w, g.putImageData(o, 0, y), y += je;
    p < a && (w = s * n * 4, d.set(c.subarray(h, h + w)), g.putImageData(o, 0, y));
  } else if (t.kind === su.RGB_24BPP)
    for (A = je, w = s * A, p = 0; p < a; p++) {
      for (p >= r && (A = n, w = s * A), l = 0, y = w; y--; )
        d[l++] = c[h++], d[l++] = c[h++], d[l++] = c[h++], d[l++] = 255;
      g.putImageData(o, 0, p * je);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
f(yA, "putBinaryImageData");
function AA(g, t) {
  if (t.bitmap) {
    g.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, n = e % je, r = (e - n) / je, a = n === 0 ? r : r + 1, o = g.createImageData(s, je);
  let h = 0;
  const l = t.data, c = o.data;
  for (let d = 0; d < a; d++) {
    const p = d < r ? je : n;
    ({
      srcPos: h
    } = hv({
      src: l,
      srcPos: h,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), g.putImageData(o, 0, d * je);
  }
}
f(AA, "putBinaryImageMask");
function nl(g, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    g[s] !== void 0 && (t[s] = g[s]);
  g.setLineDash !== void 0 && (t.setLineDash(g.getLineDash()), t.lineDashOffset = g.lineDashOffset);
}
f(nl, "copyCtxState");
function Jd(g) {
  g.strokeStyle = g.fillStyle = "#000000", g.fillRule = "nonzero", g.globalAlpha = 1, g.lineWidth = 1, g.lineCap = "butt", g.lineJoin = "miter", g.miterLimit = 10, g.globalCompositeOperation = "source-over", g.font = "10px sans-serif", g.setLineDash !== void 0 && (g.setLineDash([]), g.lineDashOffset = 0);
  const {
    filter: t
  } = g;
  t !== "none" && t !== "" && (g.filter = "none");
}
f(Jd, "resetCtxToDefault");
function wA(g, t) {
  if (t)
    return !0;
  D.singularValueDecompose2dScale(g, cs);
  const e = Math.fround(bn.pixelRatio * Er.PDF_TO_CSS_UNITS);
  return cs[0] <= e && cs[1] <= e;
}
f(wA, "getImageSmoothingEnabled");
const dv = ["butt", "round", "square"], uv = ["miter", "round", "bevel"], fv = {}, vA = {};
var qs, bg, yg, Ag;
const Df = class Df {
  constructor(t, e, s, n, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, h, l, c, d) {
    m(this, qs);
    this.ctx = t, this.current = new Ku(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.commonObjs = e, this.objs = s, this.canvasFactory = n, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.smaskGroupCanvases = [], this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = c ?? null, this.imagesTracker = d ?? null;
  }
  getObject(t, e, s = null) {
    return typeof e == "string" ? (this.dependencyTracker?.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: n = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = n || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const h = this.transparentCanvasEntry = this.canvasFactory.create(r, a);
      this.compositeCtx = this.ctx, {
        canvas: this.transparentCanvas,
        context: this.ctx
      } = h, this.ctx.save(), this.ctx.transform(...kt(this.compositeCtx));
    }
    this.ctx.save(), Jd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = kt(this.ctx);
  }
  executeOperatorList(t, e, s, n, r) {
    const a = t.argsArray, o = t.fnArray;
    let h = e || 0;
    const l = a.length;
    if (l === h)
      return h;
    const c = l - h > bA && typeof s == "function", d = c ? Date.now() + lv : 0;
    let p = 0;
    const y = this.commonObjs, A = this.objs;
    let w, S;
    for (; ; ) {
      if (n !== void 0) {
        if (h === n.nextBreakPoint)
          return n.breakIt(h, s), h;
        if (n.shouldSkip(h)) {
          if (++h === l)
            return h;
          continue;
        }
      }
      if (!r || r(h))
        if (w = o[h], S = a[h] ?? null, w !== Ol.dependency)
          S === null ? this[w](h) : this[w](h, ...S);
        else
          for (const v of S) {
            this.dependencyTracker?.recordNamedData(v, h);
            const E = v.startsWith("g_") ? y : A;
            if (!E.has(v))
              return E.get(v, s), h;
          }
      if (h++, h === l)
        return h;
      if (c && ++p > bA) {
        if (Date.now() > d)
          return s(), h;
        p = 0;
      }
    }
  }
  endDrawing() {
    b(this, qs, bg).call(this);
    for (const t of this.smaskGroupCanvases)
      this.canvasFactory.destroy(t);
    this.smaskGroupCanvases.length = 0, this.tempSMask = null, this.smaskStack.length = 0, this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, qs, yg).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, n = t.height ?? t.displayHeight, r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = [];
    let h = r, l = a, c = s, d = n;
    for (; h > 2 && c > 1 || l > 2 && d > 1; ) {
      let v = c, E = d;
      h > 2 && c > 1 && (v = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c / 2), h /= c / v), l > 2 && d > 1 && (E = d >= 16384 ? Math.floor(d / 2) - 1 || 1 : Math.ceil(d) / 2, l /= d / E), o.push({
        newWidth: v,
        newHeight: E
      }), c = v, d = E;
    }
    if (o.length === 0)
      return {
        img: t,
        paintWidth: s,
        paintHeight: n,
        tmpCanvas: null
      };
    if (o.length === 1) {
      const {
        newWidth: v,
        newHeight: E
      } = o[0], C = this.canvasFactory.create(v, E);
      return C.context.drawImage(t, 0, 0, s, n, 0, 0, v, E), {
        img: C.canvas,
        paintWidth: v,
        paintHeight: E,
        tmpCanvas: C
      };
    }
    let p = this.canvasFactory.create(1, 1), y = this.canvasFactory.create(1, 1), A = s, w = n, S = t;
    for (const {
      newWidth: v,
      newHeight: E
    } of o)
      this.canvasFactory.reset(y, v, E), y.context.drawImage(S, 0, 0, A, w, 0, 0, v, E), [p, y] = [y, p], S = p.canvas, A = v, w = E;
    return this.canvasFactory.destroy(y), {
      img: p.canvas,
      paintWidth: A,
      paintHeight: w,
      tmpCanvas: p
    };
  }
  _createMaskCanvas(t, e) {
    const s = this.ctx, {
      width: n,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, h = kt(s);
    let l, c, d, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const P = e.bitmap || e.data.buffer;
      c = JSON.stringify(o ? h : [h.slice(0, 4), a]), l = this._cachedBitmapsMap.getOrInsertComputed(P, Jm);
      const Q = l.get(c);
      if (Q && !o) {
        const j = Math.round(Math.min(h[0], h[2]) + h[4]), $ = Math.round(Math.min(h[1], h[3]) + h[5]);
        return this.dependencyTracker?.recordDependencies(t, ps.transformAndFill), {
          canvas: Q,
          offsetX: j,
          offsetY: $
        };
      }
      d = Q;
    }
    d || (p = this.canvasFactory.create(n, r), AA(p.context, e));
    let y = D.transform(h, [1 / n, 0, 0, -1 / r, 0, 0]);
    y = D.transform(y, [1, 0, 0, 1, 0, -r]);
    const A = go.slice();
    D.axialAlignedBoundingBox([0, 0, n, r], y, A);
    const [w, S, v, E] = A, C = Math.round(v - w) || 1, T = Math.round(E - S) || 1, x = this.canvasFactory.create(C, T), _ = x.context, k = w, R = S;
    _.translate(-k, -R), _.transform(...y);
    let I = null;
    if (!d) {
      const P = this._scaleImage(p.canvas, Qs(_));
      d = P.img, I = P.tmpCanvas, d !== p.canvas && (this.canvasFactory.destroy(p), p = null), l && o && (l.set(c, d), I = null, p = null);
    }
    _.imageSmoothingEnabled = wA(kt(_), e.interpolate), Qd(_, d, 0, 0, d.width, d.height, 0, 0, n, r), I && this.canvasFactory.destroy(I), p && this.canvasFactory.destroy(p), _.globalCompositeOperation = "source-in";
    const N = D.transform(Qs(_), [1, 0, 0, 1, -k, -R]);
    return _.fillStyle = o ? a.getPattern(s, this, N, me.FILL, t) : a, _.fillRect(0, 0, n, r), l && !o && l.set(c, x.canvas), this.dependencyTracker?.recordDependencies(t, ps.transformAndFill), {
      canvas: x.canvas,
      canvasEntry: l && !o ? null : x,
      offsetX: Math.round(k),
      offsetY: Math.round(R)
    };
  }
  setLineWidth(t, e) {
    this.dependencyTracker?.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    this.dependencyTracker?.recordSimpleData("lineCap", t), this.ctx.lineCap = dv[e];
  }
  setLineJoin(t, e) {
    this.dependencyTracker?.recordSimpleData("lineJoin", t), this.ctx.lineJoin = uv[e];
  }
  setMiterLimit(t, e) {
    this.dependencyTracker?.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    this.dependencyTracker?.recordSimpleData("dash", t);
    const n = this.ctx;
    n.setLineDash !== void 0 && (n.setLineDash(e), n.lineDashOffset = s);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    for (const [s, n] of e)
      switch (s) {
        case "LW":
          this.setLineWidth(t, n);
          break;
        case "LC":
          this.setLineCap(t, n);
          break;
        case "LJ":
          this.setLineJoin(t, n);
          break;
        case "ML":
          this.setMiterLimit(t, n);
          break;
        case "D":
          this.setDash(t, n[0], n[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, n);
          break;
        case "FL":
          this.setFlatness(t, n);
          break;
        case "Font":
          this.setFont(t, n[0], n[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = n;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = n;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = n;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t), this.current.activeSMask = n ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(n);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, s = this.ctx.canvas.height, n = this.canvasFactory.create(e, s);
    this.smaskScratchCanvas = n, this.suspendedCtx = this.ctx;
    const r = this.ctx = n.context;
    r.setTransform(this.suspendedCtx.getTransform()), nl(this.suspendedCtx, r), cv(r, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), nl(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null, this.canvasFactory.destroy(this.smaskScratchCanvas), this.smaskScratchCanvas = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, n) {
    const r = n[0], a = n[1], o = n[2] - r, h = n[3] - a;
    o === 0 || h === 0 || (this.genericComposeSMask(e.context, s, o, h, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, n, r, a, o, h, l, c, d) {
    let p = t.canvas, y = h - c, A = l - d, w = null;
    if (a)
      if (y < 0 || A < 0 || y + s > p.width || A + n > p.height) {
        w = this.canvasFactory.create(s, n);
        const v = w.context;
        v.drawImage(p, -y, -A), v.globalCompositeOperation = "destination-atop", v.fillStyle = a, v.fillRect(0, 0, s, n), v.globalCompositeOperation = "source-over", p = w.canvas, y = A = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(y, A, s, n), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(y, A, s, n), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const S = new Path2D();
    S.rect(h, l, s, n), e.clip(S), e.globalCompositeOperation = "destination-in", e.drawImage(p, y, A, s, n, h, l, s, n), e.restore(), w && this.canvasFactory.destroy(w);
  }
  save(t) {
    this.inSMaskMode && nl(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), this.dependencyTracker?.save(t);
  }
  restore(t) {
    if (this.dependencyTracker?.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && nl(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, n, r, a, o) {
    this.dependencyTracker?.recordIncrementalData("transform", t), this.ctx.transform(e, s, n, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s, n) {
    let [r] = s;
    if (!n) {
      r ||= s[0] = new Path2D(), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === Ol.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, n[0] - a, n[2] + a, n[1] - a, n[3] + a).recordDependencies(t, ["transform"]);
    }
    r instanceof Path2D || (r = s[0] = IA(r)), D.axialAlignedBoundingBox(n, kt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = !0) {
    const n = this.ctx, r = this.current.strokeColor;
    if (n.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && r?.getPattern) {
        const a = r.isModifyingCurrentTransform() ? n.getTransform() : null;
        if (n.save(), n.strokeStyle = r.getPattern(n, this, Qs(n), me.STROKE, t), a) {
          const o = new Path2D();
          o.addPath(e, n.getTransform().invertSelf().multiplySelf(a)), e = o;
        }
        this.rescaleAndStroke(e, !1), n.restore();
      } else
        this.rescaleAndStroke(e, !0);
    this.dependencyTracker?.recordDependencies(t, ps.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(me.STROKE, kt(this.ctx))), n.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = !0) {
    const n = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const l = r.isModifyingCurrentTransform() ? n.getTransform() : null;
      if (this.dependencyTracker?.save(t), n.save(), n.fillStyle = r.getPattern(n, this, Qs(n), me.FILL, t), l) {
        const c = new Path2D();
        c.addPath(e, n.getTransform().invertSelf().multiplySelf(l)), e = c;
      }
      o = !0;
    }
    const h = this.current.getClippedPathBoundingBox();
    this.contentVisible && h !== null && (this.pendingEOFill ? (n.fill(e, "evenodd"), this.pendingEOFill = !1) : n.fill(e)), this.dependencyTracker?.recordDependencies(t, ps.fill), o && (n.restore(), this.dependencyTracker?.restore(t)), s && this.consumePath(t, e, h);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    this.ctx.fill(e), this.dependencyTracker?.recordDependencies(t, ps.rawFillPath).recordOperation(t);
  }
  clip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = fv;
  }
  eoClip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = vA;
  }
  beginText(t) {
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.dependencyTracker?.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: n
      } = this;
      e !== void 0 && n.recordFutureForcedDependency("textClip", n.getOpenMarker()).recordFutureForcedDependency("textClip", t), n.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const n = new Path2D(), r = s.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: h,
        fontSize: l,
        path: c
      } of e)
        c && n.addPath(c, new DOMMatrix(a).preMultiplySelf(r).translate(o, h).scale(l, -l));
      s.clip(n);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    this.dependencyTracker?.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    this.dependencyTracker?.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    this.dependencyTracker?.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    this.dependencyTracker?.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, s) {
    this.dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const n = this.commonObjs.get(e), r = this.current;
    if (!n)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = n.fontMatrix || up, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && W("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = n, this.current.fontSize = s, n.isType3Font)
      return;
    const a = n.loadedName || "sans-serif", o = n.systemFontInfo?.css || `"${a}", ${n.fallbackName}`;
    let h = "normal";
    n.black ? h = "900" : n.bold && (h = "bold");
    const l = n.italic ? "italic" : "normal";
    let c = s;
    s < gA ? c = gA : s > mA && (c = mA), this.current.fontSizeScale = s / c, this.ctx.font = `${l} ${h} ${c}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    this.dependencyTracker?.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    this.dependencyTracker?.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, s) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s), this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
    const {
      current: s
    } = this;
    s.textMatrix = e, s.textMatrixScale = Math.hypot(e[0], e[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    this.moveText(t, 0, this.current.leading), this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, s, n, r, a) {
    const o = this.ctx, h = this.current, l = h.font, c = h.textRenderingMode, d = h.fontSize / h.fontSizeScale, p = c & qt.FILL_STROKE_MASK, y = !!(c & qt.ADD_TO_PATH_FLAG), A = h.patternFill && !l.missingFile, w = h.patternStroke && !l.missingFile;
    let S;
    if ((l.disableFontFace || y || A || w) && !l.missingFile && (S = l.getPathGenerator(this.commonObjs, e)), S && (l.disableFontFace || A || w)) {
      o.save(), o.translate(s, n), o.scale(d, -d), this.dependencyTracker?.recordCharacterBBox(t, o, l);
      let v;
      if (p === qt.FILL || p === qt.FILL_STROKE)
        if (r) {
          v = o.getTransform(), o.setTransform(...r);
          const E = b(this, qs, Ag).call(this, S, v, r);
          o.fill(E);
        } else
          o.fill(S);
      if (p === qt.STROKE || p === qt.FILL_STROKE)
        if (a) {
          v ||= o.getTransform(), o.setTransform(...a);
          const {
            a: E,
            b: C,
            c: T,
            d: x
          } = v, _ = D.inverseTransform(a), k = D.transform([E, C, T, x, 0, 0], _);
          D.singularValueDecompose2dScale(k, cs), o.lineWidth *= Math.max(cs[0], cs[1]) / d, o.stroke(b(this, qs, Ag).call(this, S, v, a));
        } else
          o.lineWidth /= d, o.stroke(S);
      o.restore();
    } else
      (p === qt.FILL || p === qt.FILL_STROKE) && (o.fillText(e, s, n), this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n, () => o.measureText(e))), (p === qt.STROKE || p === qt.FILL_STROKE) && (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n, () => o.measureText(e)).recordDependencies(t, ps.stroke), o.strokeText(e, s, n));
    y && ((this.pendingTextPaths ||= []).push({
      transform: kt(o),
      x: s,
      y: n,
      fontSize: d,
      path: S
    }), this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n));
  }
  get isFontSubpixelAAEnabled() {
    const t = this.canvasFactory.create(10, 10), e = t.context;
    e.scale(1.5, 1), e.fillText("I", 0, 10);
    const s = e.getImageData(0, 0, 10, 10).data;
    this.canvasFactory.destroy(t);
    let n = !1;
    for (let r = 3; r < s.length; r += 4)
      if (s[r] > 0 && s[r] < 255) {
        n = !0;
        break;
      }
    return V(this, "isFontSubpixelAAEnabled", n);
  }
  showText(t, e) {
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, ps.showText).resetBBox(t), this.current.textRenderingMode & qt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, n = s.font;
    if (n.isType3Font) {
      this.showType3Text(t, e), this.dependencyTracker?.recordShowTextOperation(t);
      return;
    }
    const r = s.fontSize;
    if (r === 0) {
      this.dependencyTracker?.recordOperation(t);
      return;
    }
    const a = this.ctx, o = s.fontSizeScale, h = s.charSpacing, l = s.wordSpacing, c = s.fontDirection, d = s.textHScale * c, p = e.length, y = n.vertical, A = y ? 1 : -1, w = n.defaultVMetrics, S = r * s.fontMatrix[0], v = s.textRenderingMode === qt.FILL && !n.disableFontFace && !s.patternFill;
    a.save(), s.textMatrix && a.transform(...s.textMatrix), a.translate(s.x, s.y + s.textRise), c > 0 ? a.scale(d, -1) : a.scale(d, 1);
    let E, C;
    const T = s.textRenderingMode & qt.FILL_STROKE_MASK, x = T === qt.FILL || T === qt.FILL_STROKE, _ = T === qt.STROKE || T === qt.FILL_STROKE;
    if (x && s.patternFill) {
      a.save();
      const P = s.fillColor.getPattern(a, this, Qs(a), me.FILL, t);
      E = kt(a), a.restore(), a.fillStyle = P;
    }
    if (_ && s.patternStroke) {
      a.save();
      const P = s.strokeColor.getPattern(a, this, Qs(a), me.STROKE, t);
      C = kt(a), a.restore(), a.strokeStyle = P;
    }
    let k = s.lineWidth;
    const R = s.textMatrixScale;
    if (R === 0 || k === 0 ? _ && (k = this.getSinglePixelWidth()) : k /= R, o !== 1 && (a.scale(o, o), k /= o), a.lineWidth = k, n.isInvalidPDFjsFont) {
      const P = [];
      let Q = 0;
      for (const $ of e)
        P.push($.unicode), Q += $.width;
      const j = P.join("");
      if (a.fillText(j, 0, 0), this.dependencyTracker !== null) {
        const $ = a.measureText(j);
        this.dependencyTracker.recordBBox(t, this.ctx, -$.actualBoundingBoxLeft, $.actualBoundingBoxRight, -$.actualBoundingBoxAscent, $.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += Q * S * d, a.restore(), this.compose();
      return;
    }
    let I = 0, N;
    for (N = 0; N < p; ++N) {
      const P = e[N];
      if (typeof P == "number") {
        I += A * P * r / 1e3;
        continue;
      }
      let Q = !1;
      const j = (P.isSpace ? l : 0) + h, $ = P.fontChar, Tt = P.accent;
      let H, U, st = P.width;
      if (y) {
        const Kt = P.vmetric || w, vt = -(P.vmetric ? Kt[1] : st * 0.5) * S, St = Kt[2] * S;
        st = Kt ? -Kt[0] : st, H = vt / o, U = (I + St) / o;
      } else
        H = I / o, U = 0;
      let Ne;
      if (n.remeasure && st > 0) {
        Ne = a.measureText($);
        const Kt = Ne.width * 1e3 / r * o;
        if (st < Kt && this.isFontSubpixelAAEnabled) {
          const vt = st / Kt;
          Q = !0, a.save(), a.scale(vt, 1), H /= vt;
        } else st !== Kt && (H += (st - Kt) / 2e3 * r / o);
      }
      if (this.contentVisible && (P.isInFont || n.missingFile)) {
        if (v && !Tt)
          a.fillText($, H, U), this.dependencyTracker?.recordCharacterBBox(t, a, Ne ? {
            bbox: null
          } : n, r / o, H, U, () => Ne ?? a.measureText($));
        else if (this.paintChar(t, $, H, U, E, C), Tt) {
          const Kt = H + r * Tt.offset.x / o, vt = U - r * Tt.offset.y / o;
          this.paintChar(t, Tt.fontChar, Kt, vt, E, C);
        }
      }
      const ki = y ? st * S - j * c : st * S + j * c;
      I += ki, Q && a.restore();
    }
    y ? s.y -= I : s.x += I * d, a.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const s = this.ctx, n = this.current, r = n.font, a = n.fontSize, o = n.fontDirection, h = r.vertical ? 1 : -1, l = n.charSpacing, c = n.wordSpacing, d = n.textHScale * o, p = n.fontMatrix || up, y = e.length, A = n.textRenderingMode === qt.INVISIBLE;
    let w, S, v, E;
    if (A || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), n.textMatrix && s.transform(...n.textMatrix), s.translate(n.x, n.y + n.textRise), s.scale(d, o);
    const C = this.dependencyTracker;
    for (this.dependencyTracker = C ? new Xu(C, t) : null, w = 0; w < y; ++w) {
      if (S = e[w], typeof S == "number") {
        E = h * S * a / 1e3, this.ctx.translate(E, 0), n.x += E * d;
        continue;
      }
      const T = (S.isSpace ? c : 0) + l, x = r.charProcOperatorList[S.operatorListId];
      x ? this.contentVisible && (this.save(), s.scale(a, a), s.transform(...p), this.executeOperatorList(x), this.restore()) : W(`Type3 character "${S.operatorListId}" is not available.`);
      const _ = [S.width, 0];
      D.applyTransform(_, p), v = _[0] * a + T, s.translate(v, 0), n.x += v * d;
    }
    s.restore(), C && (this.dependencyTracker = C);
  }
  setCharWidth(t, e, s) {
  }
  setCharWidthAndBounds(t, e, s, n, r, a, o) {
    const h = new Path2D();
    h.rect(n, r, a - n, o - r), this.ctx.clip(h), this.dependencyTracker?.recordBBox(t, this.ctx, n, a, r, o).recordClipBox(t, this.ctx, n, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const n = this.baseTransform || kt(this.ctx), r = {
        createCanvasGraphics: /* @__PURE__ */ f((a, o) => new Df(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new Xu(this.dependencyTracker, o, !0) : null), "createCanvasGraphics")
      };
      s = new mg(e, this.ctx, r, n);
    } else
      s = this._getPattern(t, e[1], e[2]);
    return s;
  }
  setStrokeColorN(t, ...e) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    this.dependencyTracker?.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }
  setFillTransparent(t) {
    this.dependencyTracker?.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e, s = null) {
    let n;
    return this.cachedPatterns.has(e) ? n = this.cachedPatterns.get(e) : (n = ov(this.getObject(t, e)), this.cachedPatterns.set(e, n)), s && (n.matrix = s), n;
  }
  shadingFill(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    this.save(t);
    const n = this._getPattern(t, e);
    s.fillStyle = n.getPattern(s, this, Qs(s), me.SHADING, t);
    const r = Qs(s);
    if (r) {
      const {
        width: a,
        height: o
      } = s.canvas, h = go.slice();
      D.axialAlignedBoundingBox([0, 0, a, o], r, h);
      const [l, c, d, p] = h;
      this.ctx.fillRect(l, c, d - l, p - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, ps.transform).recordDependencies(t, ps.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    rt("Should not call beginInlineImage");
  }
  beginImageData() {
    rt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = kt(this.ctx), s)) {
      D.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [n, r, a, o] = s, h = new Path2D();
      h.rect(n, r, a - n, o - r), this.ctx.clip(h), this.dependencyTracker?.recordClipBox(t, this.ctx, n, a, r, o), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    if (!this.contentVisible)
      return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const s = this.ctx;
    e.isolated || Jf("TODO: Support non-isolated groups."), e.knockout && W("Knockout groups not supported.");
    const n = kt(s);
    e.matrix && s.transform(...e.matrix);
    const r = [0, 0, s.canvas.width, s.canvas.height];
    let a;
    e.bbox ? (a = go.slice(), D.axialAlignedBoundingBox(e.bbox, kt(s), a), a = D.intersect(a, r) || [0, 0, 0, 0]) : a = r;
    const o = Math.floor(a[0]), h = Math.floor(a[1]), l = Math.max(Math.ceil(a[2]) - o, 1), c = Math.max(Math.ceil(a[3]) - h, 1);
    this.current.startNewPathAndClipBox([0, 0, l, c]), e.smask && this.smaskCounter++;
    const d = this.canvasFactory.create(l, c);
    e.smask && this.smaskGroupCanvases.push(d);
    const p = d.context;
    if (p.translate(-o, -h), p.transform(...n), e.bbox) {
      let y = new Path2D();
      const [A, w, S, v] = e.bbox;
      if (y.rect(A, w, S - A, v - w), e.matrix) {
        const E = new Path2D();
        E.addPath(y, new DOMMatrix(e.matrix)), y = E;
      }
      p.clip(y);
    }
    e.smask && this.smaskStack.push({
      canvas: d.canvas,
      context: p,
      offsetX: o,
      offsetY: h,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, h), s.save()), nl(s, p), this.ctx = p, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]), this.groupStack.push(s), this.groupLevel++;
  }
  endGroup(t, e) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const s = this.ctx, n = this.groupStack.pop();
    if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, this.dependencyTracker?.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const r = kt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...r);
      const a = go.slice();
      D.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], r, a), this.ctx.drawImage(s.canvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy({
        canvas: s.canvas,
        context: s
      }), this.compose(a);
    }
  }
  beginAnnotation(t, e, s, n, r, a) {
    if (b(this, qs, bg).call(this), Jd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const o = s[2] - s[0], h = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= s[0], n[5] -= s[1], s = s.slice(), s[0] = s[1] = 0, s[2] = o, s[3] = h, D.singularValueDecompose2dScale(kt(this.ctx), cs);
        const {
          viewportScale: l
        } = this, c = Math.ceil(o * this.outputScaleX * l), d = Math.ceil(h * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(c, d);
        const {
          canvas: p,
          context: y
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(cs[0], 0, 0, -cs[1], 0, h * cs[1]), Jd(this.ctx);
      } else {
        Jd(this.ctx), this.endPath(t);
        const l = new Path2D();
        l.rect(s[0], s[1], o, h), this.ctx.clip(l);
      }
    }
    this.current = new Ku(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...n), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), b(this, qs, yg).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const n = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, r.offsetX, r.offsetY), this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), n.restore(), r.canvasEntry && this.canvasFactory.destroy(r.canvasEntry), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, n = 0, r = 0, a, o) {
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const h = this.ctx;
    h.save();
    const l = kt(h);
    h.transform(s, n, r, a, 0, 0);
    const c = this._createMaskCanvas(t, e);
    h.setTransform(1, 0, 0, 1, c.offsetX - l[4], c.offsetY - l[5]), this.dependencyTracker?.resetBBox(t);
    for (let d = 0, p = o.length; d < p; d += 2) {
      const y = D.transform(l, [s, n, r, a, o[d], o[d + 1]]);
      h.drawImage(c.canvas, y[4], y[5]), this.dependencyTracker?.recordBBox(t, this.ctx, y[4], y[4] + c.canvas.width, y[5], y[5] + c.canvas.height);
    }
    h.restore(), c.canvasEntry && this.canvasFactory.destroy(c.canvasEntry), this.compose(), this.dependencyTracker?.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx, n = this.current.fillColor, r = this.current.patternFill;
    this.dependencyTracker?.resetBBox(t).recordDependencies(t, ps.transformAndFill);
    for (const a of e) {
      const {
        data: o,
        width: h,
        height: l,
        transform: c
      } = a, d = this.canvasFactory.create(h, l), p = d.context;
      p.save();
      const y = this.getObject(t, o, a);
      AA(p, y), p.globalCompositeOperation = "source-in", p.fillStyle = r ? n.getPattern(p, this, Qs(s), me.FILL, t) : n, p.fillRect(0, 0, h, l), p.restore(), s.save(), s.transform(...c), s.scale(1, -1), Qd(s, d.canvas, 0, 0, h, l, 0, -1, 1, 1), this.canvasFactory.destroy(d), this.dependencyTracker?.recordBBox(t, s, 0, h, 0, l), s.restore();
    }
    this.compose(), this.dependencyTracker?.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, e);
    if (!s) {
      W("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, n, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      W("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, h = a.height, l = [];
    for (let c = 0, d = r.length; c < d; c += 2)
      l.push({
        transform: [s, 0, 0, n, r[c], r[c + 1]],
        x: 0,
        y: 0,
        w: o,
        h
      });
    this.paintInlineImageXObjectGroup(t, a, l);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return {
        img: t.bitmap,
        canvasEntry: null
      };
    const {
      bitmap: e,
      width: s,
      height: n
    } = t, r = this.canvasFactory.create(s, n), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", {
      img: r.canvas,
      canvasEntry: r
    };
  }
  paintInlineImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = e.width, n = e.height, r = this.ctx;
    this.save(t);
    const {
      filter: a
    } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / s, -1 / n);
    let o, h = null;
    if (e.bitmap) {
      const c = this.applyTransferMapsToBitmap(e);
      o = c.img, h = c.canvasEntry;
    } else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const c = this.canvasFactory.create(s, n);
      yA(c.context, e), o = this.applyTransferMapsToCanvas(c.context), h = c;
    }
    const l = this._scaleImage(o, Qs(r));
    r.imageSmoothingEnabled = wA(kt(r), e.interpolate), this.dependencyTracker && (this.dependencyTracker.resetBBox(t).recordBBox(t, r, 0, s, -n, 0).recordDependencies(t, ps.imageXObject).recordOperation(t), this.imagesTracker?.record(r, s, n, this.dependencyTracker.clipBox)), Qd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -n, s, n), l.tmpCanvas && this.canvasFactory.destroy(l.tmpCanvas), h && this.canvasFactory.destroy(h), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    if (!this.contentVisible)
      return;
    const n = this.ctx;
    let r, a = null;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const o = e.width, h = e.height, l = this.canvasFactory.create(o, h);
      yA(l.context, e), r = this.applyTransferMapsToCanvas(l.context), a = l;
    }
    this.dependencyTracker?.resetBBox(t);
    for (const o of s)
      n.save(), n.transform(...o.transform), n.scale(1, -1), Qd(n, r, o.x, o.y, o.w, o.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t, n, 0, 1, -1, 0), n.restore();
    a && this.canvasFactory.destroy(a), this.dependencyTracker?.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    this.contentVisible && (this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, ps.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, s) {
  }
  beginMarkedContent(t, e) {
    this.dependencyTracker?.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, s) {
    this.dependencyTracker?.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(s)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    this.dependencyTracker?.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, s) {
    const n = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const r = this.ctx;
    this.pendingClip ? (n || (this.pendingClip === vA ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : this.dependencyTracker?.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = kt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), n = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, n) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: n,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && n === 0) {
        const h = Math.abs(e), l = Math.abs(r);
        if (h === l)
          if (t === 0)
            a = o = 1 / h;
          else {
            const c = h * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / h, o = 1 / l;
        else {
          const c = h * t, d = l * t;
          a = c < 1 ? 1 / c : 1, o = d < 1 ? 1 / d : 1;
        }
      } else {
        const h = Math.abs(e * r - s * n), l = Math.hypot(e, s), c = Math.hypot(n, r);
        if (t === 0)
          a = c / h, o = l / h;
        else {
          const d = t * h;
          a = c > d ? c / d : 1, o = l > d ? l / d : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: s,
      current: {
        lineWidth: n
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      s.lineWidth = (n || 1) * r, s.stroke(t);
      return;
    }
    const o = s.getLineDash();
    e && s.save(), s.scale(r, a), cp.a = 1 / r, cp.d = 1 / a;
    const h = new Path2D();
    if (h.addPath(t, cp), o.length > 0) {
      const l = Math.max(r, a);
      s.setLineDash(o.map((c) => c / l)), s.lineDashOffset /= l;
    }
    s.lineWidth = n || 1, s.stroke(h), e && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
qs = new WeakSet(), bg = /* @__PURE__ */ f(function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(this.transparentCanvasEntry), this.transparentCanvas = null, this.transparentCanvasEntry = null);
}, "#restoreInitialState"), yg = /* @__PURE__ */ f(function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, "#drawFilter"), Ag = /* @__PURE__ */ f(function(t, e, s) {
  const n = new Path2D();
  return n.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), n;
}, "#getScaledPath"), f(Df, "CanvasGraphics");
let Ao = Df;
for (const g in Ol)
  Ao.prototype[g] !== void 0 && (Ao.prototype[Ol[g]] = Ao.prototype[g]);
var Fc, Oc;
const Yb = class Yb {
  constructor(t, e, s) {
    m(this, Fc, null);
    m(this, Oc, null);
    M(this, "_fullReader", null);
    M(this, "_rangeReaders", /* @__PURE__ */ new Set());
    M(this, "_source", null);
    this._source = t, u(this, Fc, e), u(this, Oc, s);
  }
  get _progressiveDataLength() {
    return this._fullReader?._loaded ?? 0;
  }
  getFullReader() {
    return Bt(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new (i(this, Fc))(this);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new (i(this, Oc))(this, t, e);
    return this._rangeReaders.add(s), s;
  }
  cancelAllRequests(t) {
    this._fullReader?.cancel(t);
    for (const e of new Set(this._rangeReaders))
      e.cancel(t);
  }
};
Fc = new WeakMap(), Oc = new WeakMap(), f(Yb, "BasePDFStream");
let Xl = Yb;
const Kb = class Kb {
  onProgress = null;
  _contentLength = 0;
  _filename = null;
  _headersCapability = Promise.withResolvers();
  _isRangeSupported = !1;
  _isStreamingSupported = !1;
  _loaded = 0;
  _stream = null;
  constructor(t) {
    this._stream = t;
  }
  _callOnProgress() {
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    rt("Abstract method `read` called");
  }
  cancel(t) {
    rt("Abstract method `cancel` called");
  }
};
f(Kb, "BasePDFStreamReader");
let Yl = Kb;
const qb = class qb {
  _stream = null;
  constructor(t, e, s) {
    this._stream = t;
  }
  async read() {
    rt("Abstract method `read` called");
  }
  cancel(t) {
    rt("Abstract method `cancel` called");
  }
};
f(qb, "BasePDFStreamRangeReader");
let Kl = qb;
function pv(g) {
  let t = !0, e = s("filename\\*", "i").exec(g);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = h(c), c = l(c), r(c);
  }
  if (e = a(g), e) {
    const c = l(e);
    return r(c);
  }
  if (e = s("filename", "i").exec(g), e) {
    e = e[1];
    let c = o(e);
    return c = l(c), r(c);
  }
  function s(c, d) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', d);
  }
  f(s, "toParamRegExp");
  function n(c, d) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(d))
        return d;
      try {
        const p = new TextDecoder(c, {
          fatal: !0
        }), y = Zf(d);
        d = p.decode(y), t = !1;
      } catch {
      }
    }
    return d;
  }
  f(n, "textdecode");
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = n("utf-8", c), t && (c = n("iso-8859-1", c))), c;
  }
  f(r, "fixupEncoding");
  function a(c) {
    const d = [];
    let p;
    const y = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = y.exec(c)) !== null; ) {
      let [, w, S, v] = p;
      if (w = parseInt(w, 10), w in d) {
        if (w === 0)
          break;
        continue;
      }
      d[w] = [S, v];
    }
    const A = [];
    for (let w = 0; w < d.length && w in d; ++w) {
      let [S, v] = d[w];
      v = o(v), S && (v = unescape(v), w === 0 && (v = h(v))), A.push(v);
    }
    return A.join("");
  }
  f(a, "rfc2231getparam");
  function o(c) {
    if (c.startsWith('"')) {
      const d = c.slice(1).split('\\"');
      for (let p = 0; p < d.length; ++p) {
        const y = d[p].indexOf('"');
        y !== -1 && (d[p] = d[p].slice(0, y), d.length = p + 1), d[p] = d[p].replaceAll(/\\(.)/g, "$1");
      }
      c = d.join('"');
    }
    return c;
  }
  f(o, "rfc2616unquote");
  function h(c) {
    const d = c.indexOf("'");
    if (d === -1)
      return c;
    const p = c.slice(0, d), A = c.slice(d + 1).replace(/^[^']*'/, "");
    return n(p, A);
  }
  f(h, "rfc5987decode");
  function l(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(d, p, y, A) {
      if (y === "q" || y === "Q")
        return A = A.replaceAll("_", " "), A = A.replaceAll(/=([0-9a-fA-F]{2})/g, function(w, S) {
          return String.fromCharCode(parseInt(S, 16));
        }), n(p, A);
      try {
        A = atob(A);
      } catch {
      }
      return n(p, A);
    });
  }
  return f(l, "rfc2047decode"), "";
}
f(pv, "getFilenameFromContentDispositionHeader");
function b0(g, t) {
  const e = new Headers();
  if (!g || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const n = t[s];
    n !== void 0 && e.append(s, n);
  }
  return e;
}
f(b0, "createHeaders");
function ep(g) {
  return URL.parse(g)?.origin ?? null;
}
f(ep, "getResponseOrigin");
function y0({
  responseHeaders: g,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const n = {
    contentLength: 0,
    isRangeSupported: !1
  }, r = parseInt(g.get("Content-Length"), 10);
  return !Number.isInteger(r) || (n.contentLength = r, r <= 2 * e) || s || !t || g.get("Accept-Ranges") !== "bytes" || (g.get("Content-Encoding") || "identity") === "identity" && (n.isRangeSupported = !0), n;
}
f(y0, "validateRangeRequestCapabilities");
function A0(g) {
  const t = g.get("Content-Disposition");
  if (t) {
    let e = pv(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (tb(e))
      return e;
  }
  return null;
}
f(A0, "extractFilenameFromHeader");
function sb(g, t) {
  return new Kh(`Unexpected server response (${g}) while retrieving PDF "${t.href}".`, g, g === 404 || g === 0 && t.protocol === "file:");
}
f(sb, "createResponseError");
function w0(g, t) {
  if (g !== t)
    throw new Error(`Expected range response-origin "${g}" to match "${t}".`);
}
f(w0, "ensureResponseOrigin");
function v0(g, t, e, s) {
  return fetch(g, {
    method: "GET",
    headers: t,
    signal: s.signal,
    mode: "cors",
    credentials: e ? "include" : "same-origin",
    redirect: "follow"
  });
}
f(v0, "fetchUrl");
function S0(g, t) {
  if (g !== 200 && g !== 206)
    throw sb(g, t);
}
f(S0, "ensureResponseStatus");
function E0(g) {
  if (g instanceof Uint8Array)
    return g.buffer;
  if (g instanceof ArrayBuffer)
    return g;
  throw new Error(`getArrayBuffer - unexpected data: ${g}`);
}
f(E0, "getArrayBuffer");
const Qb = class Qb extends Xl {
  _responseOrigin = null;
  constructor(t) {
    super(t, vg, Sg);
    const {
      httpHeaders: e,
      url: s
    } = t;
    Bt(/https?:/.test(s.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = b0(!0, e);
  }
};
f(Qb, "PDFFetchStream");
let wg = Qb;
const Jb = class Jb extends Yl {
  _abortController = new AbortController();
  _reader = null;
  constructor(t) {
    super(t);
    const {
      disableRange: e,
      disableStream: s,
      rangeChunkSize: n,
      url: r,
      withCredentials: a
    } = t._source;
    this._isStreamingSupported = !s;
    const o = new Headers(t.headers);
    v0(r, o, a, this._abortController).then((h) => {
      t._responseOrigin = ep(h.url), S0(h.status, r), this._reader = h.body.getReader();
      const l = h.headers, {
        contentLength: c,
        isRangeSupported: d
      } = y0({
        responseHeaders: l,
        isHttp: !0,
        rangeChunkSize: n,
        disableRange: e
      });
      this._contentLength = c, this._isRangeSupported = d, this._filename = A0(l), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new mn("Streaming is disabled.")), this._headersCapability.resolve();
    }).catch(this._headersCapability.reject);
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, this._callOnProgress(), {
      value: E0(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
f(Jb, "PDFFetchStreamReader");
let vg = Jb;
const Zb = class Zb extends Kl {
  _abortController = new AbortController();
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(t, e, s) {
    super(t, e, s);
    const {
      url: n,
      withCredentials: r
    } = t._source, a = new Headers(t.headers);
    a.append("Range", `bytes=${e}-${s - 1}`), v0(n, a, r, this._abortController).then((o) => {
      const h = ep(o.url);
      w0(h, t._responseOrigin), S0(o.status, n), this._reader = o.body.getReader(), this._readCapability.resolve();
    }).catch(this._readCapability.reject);
  }
  async read() {
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : {
      value: E0(t),
      done: !1
    };
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
f(Zb, "PDFFetchStreamRangeReader");
let Sg = Zb;
function SA(g) {
  return g instanceof Uint8Array && g.byteLength === g.buffer.byteLength ? g.buffer : new Uint8Array(g).buffer;
}
f(SA, "transport_stream_getArrayBuffer");
function sp() {
  for (const g of this._requests)
    g.resolve({
      value: void 0,
      done: !0
    });
  this._requests.length = 0;
}
f(sp, "endRequests");
var Hc, Cg;
const ty = class ty extends Xl {
  constructor(e) {
    super(e, Tg, xg);
    m(this, Hc);
    M(this, "_progressiveDone", !1);
    M(this, "_queuedChunks", []);
    const {
      pdfDataRangeTransport: s
    } = e, {
      initialData: n,
      progressiveDone: r
    } = s;
    if (n?.length > 0) {
      const a = SA(n);
      this._queuedChunks.push(a);
    }
    this._progressiveDone = r, s.addRangeListener((a, o) => {
      b(this, Hc, Cg).call(this, a, o);
    }), s.addProgressiveReadListener((a) => {
      b(this, Hc, Cg).call(this, void 0, a);
    }), s.addProgressiveDoneListener(() => {
      this._fullReader?.progressiveDone(), this._progressiveDone = !0;
    }), s.transportReady();
  }
  getFullReader() {
    const e = super.getFullReader();
    return this._queuedChunks = null, e;
  }
  getRangeReader(e, s) {
    const n = super.getRangeReader(e, s);
    return n && (n.onDone = () => this._rangeReaders.delete(n), this._source.pdfDataRangeTransport.requestDataRange(e, s)), n;
  }
  cancelAllRequests(e) {
    super.cancelAllRequests(e), this._source.pdfDataRangeTransport.abort();
  }
};
Hc = new WeakSet(), Cg = /* @__PURE__ */ f(function(e, s) {
  const n = SA(s);
  if (e === void 0)
    this._fullReader ? this._fullReader._enqueue(n) : this._queuedChunks.push(n);
  else {
    const r = this._rangeReaders.keys().find((a) => a._begin === e);
    Bt(r, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), r._enqueue(n);
  }
}, "#onReceiveData"), f(ty, "PDFDataTransportStream");
let Eg = ty;
var Uc;
const ey = class ey extends Yl {
  constructor(e) {
    super(e);
    m(this, Uc, sp.bind(this));
    M(this, "_done", !1);
    M(this, "_queuedChunks", null);
    M(this, "_requests", []);
    const {
      pdfDataRangeTransport: s,
      disableRange: n,
      disableStream: r
    } = e._source, {
      length: a,
      contentDispositionFilename: o
    } = s;
    this._queuedChunks = e._queuedChunks || [];
    for (const l of this._queuedChunks)
      this._loaded += l.byteLength;
    this._done = e._progressiveDone, this._contentLength = a, this._isStreamingSupported = !r, this._isRangeSupported = !n, tb(o) && (this._filename = o), this._headersCapability.resolve();
    const h = this._loaded;
    Promise.resolve().then(() => {
      h > 0 && this._loaded === h && this._callOnProgress();
    });
  }
  _enqueue(e) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunks.push(e), this._loaded += e.byteLength, this._callOnProgress());
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, i(this, Uc).call(this);
  }
  progressiveDone() {
    this._done ||= !0, this._queuedChunks.length === 0 && i(this, Uc).call(this);
  }
};
Uc = new WeakMap(), f(ey, "PDFDataTransportStreamReader");
let Tg = ey;
var Gc;
const sy = class sy extends Kl {
  constructor(e, s, n) {
    super(e, s, n);
    m(this, Gc, sp.bind(this));
    M(this, "onDone", null);
    M(this, "_begin", -1);
    M(this, "_done", !1);
    M(this, "_queuedChunk", null);
    M(this, "_requests", []);
    this._begin = s;
  }
  _enqueue(e) {
    this._done || (this._requests.length === 0 ? this._queuedChunk = e : (this._requests.shift().resolve({
      value: e,
      done: !1
    }), i(this, Gc).call(this)), this._done = !0, this.onDone?.());
  }
  async read() {
    if (this._queuedChunk) {
      const s = this._queuedChunk;
      return this._queuedChunk = null, {
        value: s,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, i(this, Gc).call(this), this.onDone?.();
  }
};
Gc = new WeakMap(), f(sy, "PDFDataTransportStreamRangeReader");
let xg = sy;
const dp = 200, EA = 206;
function gv(g) {
  return typeof g != "string" ? g : Zf(g).buffer;
}
f(gv, "network_getArrayBuffer");
var fi, Zh, C0, T0;
const iy = class iy extends Xl {
  constructor(e) {
    super(e, kg, Mg);
    m(this, Zh);
    m(this, fi, /* @__PURE__ */ new WeakMap());
    M(this, "_responseOrigin", null);
    const {
      httpHeaders: s,
      url: n
    } = e;
    this.url = n, this.isHttp = /https?:/.test(n.protocol), this.headers = b0(this.isHttp, s);
  }
  _request(e) {
    const s = new XMLHttpRequest(), n = {
      validateStatus: null,
      onHeadersReceived: e.onHeadersReceived,
      onDone: e.onDone,
      onError: e.onError,
      onProgress: e.onProgress
    };
    i(this, fi).set(s, n), s.open("GET", this.url), s.withCredentials = this._source.withCredentials;
    for (const [r, a] of this.headers)
      s.setRequestHeader(r, a);
    return this.isHttp && "begin" in e && "end" in e ? (s.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), n.validateStatus = (r) => r === EA || r === dp) : n.validateStatus = (r) => r === dp, s.responseType = "arraybuffer", Bt(e.onError, "Expected `onError` callback to be provided."), s.onerror = () => e.onError(s.status), s.onreadystatechange = b(this, Zh, T0).bind(this, s), s.onprogress = b(this, Zh, C0).bind(this, s), s.send(null), s;
  }
  _abortRequest(e) {
    i(this, fi).has(e) && (i(this, fi).delete(e), e.abort());
  }
  getRangeReader(e, s) {
    const n = super.getRangeReader(e, s);
    return n && (n.onClosed = () => this._rangeReaders.delete(n)), n;
  }
};
fi = new WeakMap(), Zh = new WeakSet(), C0 = /* @__PURE__ */ f(function(e, s) {
  i(this, fi).get(e)?.onProgress?.(s);
}, "#onProgress"), T0 = /* @__PURE__ */ f(function(e, s) {
  const n = i(this, fi).get(e);
  if (!n || (e.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), e.readyState !== 4) || !i(this, fi).has(e))
    return;
  if (i(this, fi).delete(e), e.status === 0 && this.isHttp) {
    n.onError(e.status);
    return;
  }
  const r = e.status || dp;
  if (!n.validateStatus(r)) {
    n.onError(e.status);
    return;
  }
  const a = gv(e.response);
  if (r === EA) {
    const o = e.getResponseHeader("Content-Range");
    /bytes (\d+)-(\d+)\/(\d+)/.test(o) ? n.onDone(a) : (W('Missing or invalid "Content-Range" header.'), n.onError(0));
  } else a ? n.onDone(a) : n.onError(e.status);
}, "#onStateChange"), f(iy, "PDFNetworkStream");
let _g = iy;
var $c, xi, x0, _0, k0, M0;
const ny = class ny extends Yl {
  constructor(e) {
    super(e);
    m(this, xi);
    m(this, $c, sp.bind(this));
    M(this, "_cachedChunks", []);
    M(this, "_done", !1);
    M(this, "_requests", []);
    M(this, "_storedError", null);
    this._fullRequestXhr = e._request({
      onHeadersReceived: b(this, xi, x0).bind(this),
      onDone: b(this, xi, _0).bind(this),
      onError: b(this, xi, k0).bind(this),
      onProgress: b(this, xi, M0).bind(this)
    });
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, this._headersCapability.reject(e), i(this, $c).call(this), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
  }
};
$c = new WeakMap(), xi = new WeakSet(), x0 = /* @__PURE__ */ f(function() {
  const e = this._stream, {
    disableRange: s,
    rangeChunkSize: n
  } = e._source, r = this._fullRequestXhr;
  e._responseOrigin = ep(r.responseURL);
  const a = r.getAllResponseHeaders(), o = new Headers(a ? a.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((c) => {
    const [d, ...p] = c.split(": ");
    return [d, p.join(": ")];
  }) : []), {
    contentLength: h,
    isRangeSupported: l
  } = y0({
    responseHeaders: o,
    isHttp: e.isHttp,
    rangeChunkSize: n,
    disableRange: s
  });
  this._contentLength = h, this._isRangeSupported = l, this._filename = A0(o), this._isRangeSupported && e._abortRequest(r), this._headersCapability.resolve();
}, "#onHeadersReceived"), _0 = /* @__PURE__ */ f(function(e) {
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._cachedChunks.push(e), this._done = !0, this._cachedChunks.length === 0 && i(this, $c).call(this);
}, "#onDone"), k0 = /* @__PURE__ */ f(function(e) {
  this._storedError = sb(e, this._stream.url), this._headersCapability.reject(this._storedError);
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._cachedChunks.length = 0;
}, "#onError"), M0 = /* @__PURE__ */ f(function(e) {
  this.onProgress?.({
    loaded: e.loaded,
    total: e.lengthComputable ? e.total : this._contentLength
  });
}, "#onProgress"), f(ny, "PDFNetworkStreamReader");
let kg = ny;
var zc, wn, P0, I0, Pg;
const ry = class ry extends Kl {
  constructor(e, s, n) {
    super(e, s, n);
    m(this, wn);
    m(this, zc, sp.bind(this));
    M(this, "onClosed", null);
    M(this, "_done", !1);
    M(this, "_queuedChunk", null);
    M(this, "_requests", []);
    M(this, "_storedError", null);
    this._requestXhr = e._request({
      begin: s,
      end: n,
      onHeadersReceived: b(this, wn, P0).bind(this),
      onDone: b(this, wn, I0).bind(this),
      onError: b(this, wn, Pg).bind(this),
      onProgress: null
    });
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const s = this._queuedChunk;
      return this._queuedChunk = null, {
        value: s,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, i(this, zc).call(this), this._stream._abortRequest(this._requestXhr), this.onClosed?.();
  }
};
zc = new WeakMap(), wn = new WeakSet(), P0 = /* @__PURE__ */ f(function() {
  const e = ep(this._requestXhr?.responseURL);
  try {
    w0(e, this._stream._responseOrigin);
  } catch (s) {
    this._storedError = s, b(this, wn, Pg).call(this, 0);
  }
}, "#onHeadersReceived"), I0 = /* @__PURE__ */ f(function(e) {
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._queuedChunk = e, this._done = !0, i(this, zc).call(this), this.onClosed?.();
}, "#onDone"), Pg = /* @__PURE__ */ f(function(e) {
  this._storedError ??= sb(e, this._stream.url);
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._queuedChunk = null;
}, "#onError"), f(ry, "PDFNetworkStreamRangeReader");
let Mg = ry;
function mv(g) {
  return Ml(g) ? wg : _g;
}
f(mv, "getNetworkStream");
var jc, Vc;
const Rl = class Rl {
  static get workerPort() {
    return i(this, jc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    u(this, jc, t);
  }
  static get workerSrc() {
    return i(this, Vc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    u(this, Vc, t);
  }
};
jc = new WeakMap(), Vc = new WeakMap(), f(Rl, "GlobalWorkerOptions"), m(Rl, jc, null), m(Rl, Vc, "");
let qh = Rl;
var eh, Wc;
const ay = class ay {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, eh);
    m(this, Wc);
    u(this, eh, t), u(this, Wc, e);
  }
  getRaw() {
    return i(this, Wc);
  }
  get(t) {
    return i(this, eh).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return i(this, eh).entries();
  }
};
eh = new WeakMap(), Wc = new WeakMap(), f(ay, "Metadata");
let Ig = ay;
const ho = Symbol("INTERNAL");
var Xc, Yc, Kc, sh;
const oy = class oy {
  constructor(t, {
    name: e,
    intent: s,
    usage: n,
    rbGroups: r
  }) {
    m(this, Xc, !1);
    m(this, Yc, !1);
    m(this, Kc, !1);
    m(this, sh, !0);
    u(this, Xc, !!(t & ls.DISPLAY)), u(this, Yc, !!(t & ls.PRINT)), this.name = e, this.intent = s, this.usage = n, this.rbGroups = r;
  }
  get visible() {
    if (i(this, Kc))
      return i(this, sh);
    if (!i(this, sh))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return i(this, Xc) ? e?.viewState !== "OFF" : i(this, Yc) ? t?.printState !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== ho && rt("Internal method `_setVisible` called."), u(this, Kc, s), u(this, sh, e);
  }
};
Xc = new WeakMap(), Yc = new WeakMap(), Kc = new WeakMap(), sh = new WeakMap(), f(oy, "OptionalContentGroup");
let Dg = oy;
var tr, gt, ih, nh, qc, Rg;
const hy = class hy {
  constructor(t, e = ls.DISPLAY) {
    m(this, qc);
    m(this, tr, null);
    m(this, gt, /* @__PURE__ */ new Map());
    m(this, ih, null);
    m(this, nh, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, u(this, nh, t.order);
      for (const s of t.groups)
        i(this, gt).set(s.id, new Dg(e, s));
      if (t.baseState === "OFF")
        for (const s of i(this, gt).values())
          s._setVisible(ho, !1);
      for (const s of t.on)
        i(this, gt).get(s)._setVisible(ho, !0);
      for (const s of t.off)
        i(this, gt).get(s)._setVisible(ho, !1);
      u(this, ih, this.getHash());
    }
  }
  isVisible(t) {
    if (i(this, gt).size === 0)
      return !0;
    if (!t)
      return Jf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return i(this, gt).has(t.id) ? i(this, gt).get(t.id).visible : (W(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, qc, Rg).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!i(this, gt).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (i(this, gt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!i(this, gt).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!i(this, gt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!i(this, gt).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!i(this, gt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!i(this, gt).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (i(this, gt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return W(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return W(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    const n = i(this, gt).get(t);
    if (!n) {
      W(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && n.rbGroups.length)
      for (const r of n.rbGroups)
        for (const a of r)
          a !== t && i(this, gt).get(a)?._setVisible(ho, !1, !0);
    n._setVisible(ho, !!e, !0), u(this, tr, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const n of t) {
      switch (n) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = n;
          continue;
      }
      const r = i(this, gt).get(n);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(n, !0, e);
            break;
          case "OFF":
            this.setVisibility(n, !1, e);
            break;
          case "Toggle":
            this.setVisibility(n, !r.visible, e);
            break;
        }
    }
    u(this, tr, null);
  }
  get hasInitialVisibility() {
    return i(this, ih) === null || this.getHash() === i(this, ih);
  }
  getOrder() {
    return i(this, gt).size ? i(this, nh) ? i(this, nh).slice() : [...i(this, gt).keys()] : null;
  }
  getGroup(t) {
    return i(this, gt).get(t) || null;
  }
  getHash() {
    if (i(this, tr) !== null)
      return i(this, tr);
    const t = new Vu();
    for (const [e, s] of i(this, gt))
      t.update(`${e}:${s.visible}`);
    return u(this, tr, t.hexdigest());
  }
  [Symbol.iterator]() {
    return i(this, gt).entries();
  }
};
tr = new WeakMap(), gt = new WeakMap(), ih = new WeakMap(), nh = new WeakMap(), qc = new WeakSet(), Rg = /* @__PURE__ */ f(function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let n = 1; n < e; n++) {
    const r = t[n];
    let a;
    if (Array.isArray(r))
      a = b(this, qc, Rg).call(this, r);
    else if (i(this, gt).has(r))
      a = i(this, gt).get(r).visible;
    else
      return W(`Optional content group not found: ${r}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
}, "#evaluateVisibilityExpression"), f(hy, "OptionalContentConfig");
let Lg = hy;
var Ht, Hs, fe, da, pi, Te, yl, Al, gu;
const ly = class ly {
  constructor() {
    m(this, Te);
    m(this, Ht, null);
    m(this, Hs, null);
    m(this, fe, 0);
    m(this, da, null);
    m(this, pi, null);
  }
  get pagesNumber() {
    return i(this, fe);
  }
  set pagesNumber(t) {
    i(this, fe) !== t && (u(this, fe, t), u(this, Ht, null), u(this, Hs, null));
  }
  movePages(t, e, s) {
    b(this, Te, yl).call(this);
    const n = i(this, Ht), r = b(this, Te, Al).call(this), a = e.length, o = new Uint32Array(a);
    let h = 0;
    for (let p = 0; p < a; p++) {
      const y = e[p] - 1;
      o[p] = n[y], y < s && h++;
    }
    const l = i(this, fe), c = l - a, d = he(s - h, 0, c);
    for (let p = 0, y = 0; p < l; p++)
      t.has(p + 1) || (n[y++] = n[p]);
    n.copyWithin(d + a, d, c), n.set(o, d), b(this, Te, gu).call(this, r), n.every((p, y) => p === y + 1) && u(this, Ht, null);
  }
  deletePages(t) {
    b(this, Te, yl).call(this);
    const e = i(this, Ht), s = b(this, Te, Al).call(this);
    u(this, pi, {
      pageNumberToId: e.slice(),
      pagesNumber: i(this, fe),
      prevPageNumbers: i(this, Hs).slice()
    });
    const n = i(this, fe) - t.length;
    u(this, fe, n);
    const r = u(this, Ht, new Uint32Array(n));
    u(this, Hs, new Int32Array(n));
    let a = 0, o = 0;
    for (const h of t) {
      const l = h - 1;
      l !== a && (r.set(e.subarray(a, l), o), o += l - a), a = l + 1;
    }
    a < e.length && r.set(e.subarray(a), o), b(this, Te, gu).call(this, s, new Set(t));
  }
  cancelDelete() {
    i(this, pi) && (u(this, Ht, i(this, pi).pageNumberToId), u(this, fe, i(this, pi).pagesNumber), u(this, Hs, i(this, pi).prevPageNumbers), u(this, pi, null));
  }
  cleanSavedData() {
    u(this, pi, null);
  }
  copyPages(t) {
    b(this, Te, yl).call(this), u(this, da, {
      pageNumbers: t,
      pageIds: t.map((e) => i(this, Ht)[e - 1])
    });
  }
  cancelCopy() {
    u(this, da, null);
  }
  pastePages(t) {
    b(this, Te, yl).call(this);
    const e = i(this, Ht), s = b(this, Te, Al).call(this), {
      pageNumbers: n,
      pageIds: r
    } = i(this, da), a = i(this, fe) + n.length;
    u(this, fe, a);
    const o = u(this, Ht, new Uint32Array(a));
    u(this, Hs, new Int32Array(a)), o.set(e.subarray(0, t), 0), o.set(r, t), o.set(e.subarray(t), t + n.length), b(this, Te, gu).call(this, s, null, t, n), u(this, da, null);
  }
  hasBeenAltered() {
    return i(this, Ht) !== null;
  }
  getPageMappingForSaving(t = null) {
    t ??= b(this, Te, Al).call(this);
    let e = 0;
    for (const n of t.values())
      e = Math.max(e, n.length);
    const s = new Array(e);
    for (let n = 0; n < e; n++)
      s[n] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
    for (const [n, r] of t)
      for (let a = 0, o = r.length; a < o; a++)
        s[a].includePages.push([n - 1, r[a] - 1]);
    for (const {
      includePages: n,
      pageIndices: r
    } of s) {
      n.sort((a, o) => a[0] - o[0]);
      for (let a = 0, o = n.length; a < o; a++)
        r.push(n[a][1]), n[a] = n[a][0];
    }
    return s;
  }
  extractPages(t) {
    t = Array.from(t).sort((s, n) => s - n);
    const e = /* @__PURE__ */ new Map();
    for (let s = 0, n = t.length; s < n; s++) {
      const r = this.getPageId(t[s]);
      e.getOrInsertComputed(r, Qm).push(s + 1);
    }
    return this.getPageMappingForSaving(e);
  }
  getPrevPageNumber(t) {
    return i(this, Hs)?.[t - 1] ?? 0;
  }
  getPageNumber(t) {
    if (!i(this, Ht))
      return t;
    const e = i(this, Ht);
    for (let s = 0, n = i(this, fe); s < n; s++)
      if (e[s] === t)
        return s + 1;
    return 0;
  }
  getPageId(t) {
    return i(this, Ht)?.[t - 1] ?? t;
  }
  getMapping() {
    return i(this, Ht)?.subarray(0, this.pagesNumber);
  }
};
Ht = new WeakMap(), Hs = new WeakMap(), fe = new WeakMap(), da = new WeakMap(), pi = new WeakMap(), Te = new WeakSet(), yl = /* @__PURE__ */ f(function() {
  if (i(this, Ht))
    return;
  const t = i(this, fe), e = u(this, Ht, new Uint32Array(t));
  for (let s = 0; s < t; s++)
    e[s] = s + 1;
  u(this, Hs, new Int32Array(e));
}, "#ensureInit"), Al = /* @__PURE__ */ f(function() {
  const t = /* @__PURE__ */ new Map(), e = i(this, Ht);
  for (let s = 0, n = i(this, fe); s < n; s++) {
    const r = e[s], a = t.get(r);
    a ? a.push(s + 1) : t.set(r, [s + 1]);
  }
  return t;
}, "#buildIdToPageNumber"), gu = /* @__PURE__ */ f(function(t, e = null, s = -1, n = null) {
  const r = i(this, Hs), a = i(this, Ht), o = s + (n?.length ?? 0), h = /* @__PURE__ */ new Map();
  for (let l = 0, c = i(this, fe); l < c; l++) {
    if (l >= s && l < o) {
      r[l] = -n[l - s];
      continue;
    }
    const d = a[l], p = t.get(d);
    let y = h.get(d) || 0;
    if (e && p)
      for (; y < p.length && e.has(p[y]); )
        y++;
    r[l] = p?.[y], h.set(d, y + 1);
  }
}, "#updatePrevPageNumbers"), f(ly, "PagesMapper");
let Ng = ly;
const lo = Symbol("INITIAL_DATA"), CA = /* @__PURE__ */ f(() => ({
  ...Promise.withResolvers(),
  data: lo
}), "dataObj");
var Ts;
const cy = class cy {
  constructor() {
    m(this, Ts, /* @__PURE__ */ new Map());
  }
  get(t, e = null) {
    if (e) {
      const n = i(this, Ts).getOrInsertComputed(t, CA);
      return n.promise.then(() => e(n.data)), null;
    }
    const s = i(this, Ts).get(t);
    if (!s || s.data === lo)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = i(this, Ts).get(t);
    return !!e && e.data !== lo;
  }
  delete(t) {
    const e = i(this, Ts).get(t);
    return !e || e.data === lo ? !1 : (i(this, Ts).delete(t), !0);
  }
  resolve(t, e = null) {
    const s = i(this, Ts).getOrInsertComputed(t, CA);
    if (s.data !== lo)
      throw new Error(`Object already resolved ${t}.`);
    s.data = e, s.resolve();
  }
  clear() {
    for (const {
      data: t
    } of i(this, Ts).values())
      t?.bitmap?.close();
    i(this, Ts).clear();
  }
  *[Symbol.iterator]() {
    for (const [t, {
      data: e
    }] of i(this, Ts))
      e !== lo && (yield [t, e]);
  }
};
Ts = new WeakMap(), f(cy, "PDFObjects");
let qu = cy;
const bv = 1e5, TA = 30;
var er, Me, Qc, Jc, rh, ua, Ki, Zc, td, fa, ed, ah, sr, oh, sd, hh, pa, id, nd, lh, ga, rd, ch, dh, vn, D0, L0, Bg, us, mu, Fg, R0, N0;
const Zt = class Zt {
  constructor({
    textContentSource: t,
    images: e,
    container: s,
    viewport: n
  }) {
    m(this, vn);
    m(this, er, Promise.withResolvers());
    m(this, Me, null);
    m(this, Qc, !1);
    m(this, Jc, !!globalThis.FontInspector?.enabled);
    m(this, rh, null);
    m(this, ua, null);
    m(this, Ki, null);
    m(this, Zc, 0);
    m(this, td, 0);
    m(this, fa, null);
    m(this, ed, null);
    m(this, ah, 0);
    m(this, sr, 0);
    m(this, oh, /* @__PURE__ */ Object.create(null));
    m(this, sd, []);
    m(this, hh, null);
    m(this, pa, []);
    m(this, id, /* @__PURE__ */ new WeakMap());
    m(this, nd, null);
    var l;
    if (t instanceof ReadableStream)
      u(this, hh, t);
    else if (typeof t == "object")
      u(this, hh, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    u(this, Me, u(this, ed, s)), u(this, rh, e), u(this, sr, n.scale * bn.pixelRatio), u(this, ah, n.rotation), u(this, Ki, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: r,
      pageHeight: a,
      pageX: o,
      pageY: h
    } = n.rawDims;
    u(this, nd, [1, 0, 0, -1, -o, h + a]), u(this, td, r), u(this, Zc, a), b(l = Zt, us, R0).call(l), s.style.setProperty("--min-font-size", i(Zt, ch)), qa(s, n), i(this, er).promise.finally(() => {
      i(Zt, dh).delete(this), u(this, Ki, null), u(this, oh, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = Gt.platform;
    return V(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    i(this, rh) && i(this, Me).append(i(this, rh).render());
    const t = /* @__PURE__ */ f(() => {
      i(this, fa).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          i(this, er).resolve();
          return;
        }
        i(this, ua) ?? u(this, ua, e.lang), Object.assign(i(this, oh), e.styles), b(this, vn, D0).call(this, e.items), t();
      }, i(this, er).reject);
    }, "pump");
    return u(this, fa, i(this, hh).getReader()), i(Zt, dh).add(this), t(), i(this, er).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * bn.pixelRatio, n = t.rotation;
    if (n !== i(this, ah) && (e?.(), u(this, ah, n), qa(i(this, ed), {
      rotation: n
    })), s !== i(this, sr)) {
      e?.(), u(this, sr, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = Zt, us, mu).call(r, i(this, ua))
      };
      for (const o of i(this, pa))
        a.properties = i(this, id).get(o), a.div = o, b(this, vn, Bg).call(this, a);
    }
  }
  cancel() {
    const t = new mn("TextLayer task cancelled.");
    i(this, fa)?.cancel(t).catch(() => {
    }), u(this, fa, null), i(this, er).reject(t);
  }
  get textDivs() {
    return i(this, pa);
  }
  get textContentItemsStr() {
    return i(this, sd);
  }
  static cleanup() {
    if (!(i(this, dh).size > 0)) {
      i(this, lh).clear();
      for (const {
        canvas: t
      } of i(this, ga).values())
        t.remove();
      i(this, ga).clear();
    }
  }
};
er = new WeakMap(), Me = new WeakMap(), Qc = new WeakMap(), Jc = new WeakMap(), rh = new WeakMap(), ua = new WeakMap(), Ki = new WeakMap(), Zc = new WeakMap(), td = new WeakMap(), fa = new WeakMap(), ed = new WeakMap(), ah = new WeakMap(), sr = new WeakMap(), oh = new WeakMap(), sd = new WeakMap(), hh = new WeakMap(), pa = new WeakMap(), id = new WeakMap(), nd = new WeakMap(), lh = new WeakMap(), ga = new WeakMap(), rd = new WeakMap(), ch = new WeakMap(), dh = new WeakMap(), vn = new WeakSet(), D0 = /* @__PURE__ */ f(function(t) {
  var n;
  if (i(this, Qc))
    return;
  i(this, Ki).ctx ??= b(n = Zt, us, mu).call(n, i(this, ua));
  const e = i(this, pa), s = i(this, sd);
  for (const r of t) {
    if (e.length > bv) {
      W("Ignoring additional textDivs for performance reasons."), u(this, Qc, !0);
      return;
    }
    if (r.str === void 0) {
      if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
        const a = i(this, Me);
        u(this, Me, document.createElement("span")), i(this, Me).classList.add("markedContent"), r.id && i(this, Me).setAttribute("id", `${r.id}`), r.tag === "Artifact" && (i(this, Me).ariaHidden = !0), a.append(i(this, Me));
      } else r.type === "endMarkedContent" && u(this, Me, i(this, Me).parentNode);
      continue;
    }
    s.push(r.str), b(this, vn, L0).call(this, r);
  }
}, "#processItems"), L0 = /* @__PURE__ */ f(function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  i(this, pa).push(e);
  const n = D.transform(i(this, nd), t.transform);
  let r = Math.atan2(n[1], n[0]);
  const a = i(this, oh)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = i(this, Jc) && a.fontSubstitution || a.fontFamily;
  o = Zt.fontFamilyMap.get(o) || o;
  const h = Math.hypot(n[2], n[3]), l = h * b(A = Zt, us, N0).call(A, o, a, i(this, ua));
  let c, d;
  r === 0 ? (c = n[4], d = n[5] - l) : (c = n[4] + l * Math.sin(r), d = n[5] - l * Math.cos(r));
  const p = e.style;
  p.left = `${(100 * c / i(this, td)).toFixed(2)}%`, p.top = `${(100 * d / i(this, Zc)).toFixed(2)}%`, p.setProperty("--font-height", `${h.toFixed(2)}px`), p.fontFamily = o, s.fontSize = h, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, i(this, Jc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), S = Math.abs(t.transform[3]);
    w !== S && Math.max(w, S) / Math.min(w, S) > 1.5 && (y = !0);
  }
  if (y && (s.canvasWidth = a.vertical ? t.height : t.width), i(this, id).set(e, s), i(this, Ki).div = e, i(this, Ki).properties = s, b(this, vn, Bg).call(this, i(this, Ki)), s.hasText && i(this, Me).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), i(this, Me).append(w);
  }
}, "#appendText"), Bg = /* @__PURE__ */ f(function(t) {
  var a;
  const {
    div: e,
    properties: s,
    ctx: n
  } = t, {
    style: r
  } = e;
  if (s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: o
    } = r, {
      canvasWidth: h,
      fontSize: l
    } = s;
    b(a = Zt, us, Fg).call(a, n, l * i(this, sr), o);
    const {
      width: c
    } = n.measureText(e.textContent);
    c > 0 && r.setProperty("--scale-x", h * i(this, sr) / c);
  }
  s.angle !== 0 && r.setProperty("--rotate", `${s.angle}deg`);
}, "#layout"), us = new WeakSet(), mu = /* @__PURE__ */ f(function(t = null) {
  let e = i(this, ga).get(t ||= "");
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), i(this, ga).set(t, e), i(this, rd).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, "#getCtx"), Fg = /* @__PURE__ */ f(function(t, e, s) {
  const n = i(this, rd).get(t);
  e === n.size && s === n.family || (t.font = `${e}px ${s}`, n.size = e, n.family = s);
}, "#ensureCtxFont"), R0 = /* @__PURE__ */ f(function() {
  if (i(this, ch) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), u(this, ch, t.getBoundingClientRect().height), t.remove();
}, "#ensureMinFontSizeComputed"), N0 = /* @__PURE__ */ f(function(t, e, s) {
  const n = i(this, lh).get(t);
  if (n)
    return n;
  const r = b(this, us, mu).call(this, s);
  r.canvas.width = r.canvas.height = TA, b(this, us, Fg).call(this, r, TA, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, h = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let l = 0.8;
  return o ? l = o / (o + h) : (Gt.platform.isFirefox && W("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), i(this, lh).set(t, l), l;
}, "#getAscent"), m(Zt, us), f(Zt, "TextLayer"), m(Zt, lh, /* @__PURE__ */ new Map()), m(Zt, ga, /* @__PURE__ */ new Map()), m(Zt, rd, /* @__PURE__ */ new WeakMap()), m(Zt, ch, null), m(Zt, dh, /* @__PURE__ */ new Set());
let ql = Zt;
const yv = 100;
function Av(g = {}) {
  typeof g == "string" || g instanceof URL ? g = {
    url: g
  } : (g instanceof ArrayBuffer || ArrayBuffer.isView(g)) && (g = {
    data: g
  });
  const t = new Og(), {
    docId: e
  } = t, s = g.url ? Jw(g.url) : null, n = g.data ? Zw(g.data) : null, r = g.httpHeaders || null, a = g.withCredentials === !0, o = g.password ?? null, h = g.range instanceof Qu ? g.range : null, l = Number.isInteger(g.rangeChunkSize) && g.rangeChunkSize > 0 ? g.rangeChunkSize : 2 ** 16;
  let c = g.worker instanceof Ql ? g.worker : null;
  const d = g.verbosity, p = typeof g.docBaseUrl == "string" && !tp(g.docBaseUrl) ? g.docBaseUrl : null, y = Kd(g.cMapUrl), A = g.cMapPacked !== !1, w = Kd(g.iccUrl), S = Kd(g.standardFontDataUrl), v = Kd(g.wasmUrl), E = g.stopAtErrors !== !0, C = Number.isInteger(g.maxImageSize) && g.maxImageSize > -1 ? g.maxImageSize : -1, T = g.isEvalSupported !== !1, x = typeof g.isOffscreenCanvasSupported == "boolean" ? g.isOffscreenCanvasSupported : !0, _ = typeof g.isImageDecoderSupported == "boolean" ? g.isImageDecoderSupported : Gt.platform.isFirefox || !globalThis.chrome, k = Number.isInteger(g.canvasMaxAreaInBytes) ? g.canvasMaxAreaInBytes : -1, R = typeof g.disableFontFace == "boolean" ? g.disableFontFace : !1, I = g.fontExtraProperties === !0, N = g.enableXfa === !0, P = g.ownerDocument || globalThis.document, Q = g.disableRange === !0, j = g.disableStream === !0, $ = g.disableAutoFetch === !0, Tt = g.pdfBug === !0, H = g.CanvasFactory || og, U = g.FilterFactory || lg, st = g.BinaryDataFactory || Yu, Ne = g.enableHWA === !0, ki = g.enableWebGPU === !0, Kt = g.useWasm !== !1, vt = g.pagesMapper || new Ng(), St = typeof g.useSystemFonts == "boolean" ? g.useSystemFonts : !R, Mi = typeof g.useWorkerFetch == "boolean" ? g.useWorkerFetch : !!(st === Yu && y && A && S && v && Ml(y, document.baseURI) && Ml(S, document.baseURI) && Ml(v, document.baseURI)), tl = null;
  Nw(d);
  const Sn = {
    canvasFactory: new H({
      ownerDocument: P,
      enableHWA: Ne
    }),
    filterFactory: new U({
      docId: e,
      ownerDocument: P
    }),
    binaryDataFactory: Mi ? null : new st({
      cMapUrl: y,
      standardFontDataUrl: S,
      wasmUrl: v
    })
  };
  c || (c = Ql.create({
    verbosity: d,
    port: qh.workerPort
  }), t._worker = c);
  const $t = {
    docId: e,
    apiVersion: "5.6.205",
    data: n,
    password: o,
    disableAutoFetch: $,
    rangeChunkSize: l,
    docBaseUrl: p,
    enableXfa: N,
    evaluatorOptions: {
      maxImageSize: C,
      disableFontFace: R,
      ignoreErrors: E,
      isEvalSupported: T,
      isOffscreenCanvasSupported: x,
      isImageDecoderSupported: _,
      canvasMaxAreaInBytes: k,
      fontExtraProperties: I,
      useSystemFonts: St,
      useWasm: Kt,
      useWorkerFetch: Mi,
      cMapUrl: y,
      cMapPacked: A,
      iccUrl: w,
      standardFontDataUrl: S,
      wasmUrl: v,
      enableWebGPU: ki
    }
  }, el = {
    ownerDocument: P,
    pdfBug: Tt,
    styleElement: tl,
    enableHWA: Ne,
    loadingParams: {
      disableAutoFetch: $,
      enableXfa: N
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const sl = c.messageHandler.sendWithPromise("GetDocRequest", $t, n ? [n.buffer] : null);
    let ip;
    if (!n) if (h)
      ip = new Eg({
        pdfDataRangeTransport: h,
        disableRange: Q,
        disableStream: j
      });
    else if (s) {
      const np = mv(s);
      ip = new np({
        url: s,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: l,
        disableRange: Q,
        disableStream: j
      });
    } else
      throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
    return sl.then((np) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const tA = new Ir(e, np, c.port), Iw = new Gg(tA, t, ip, el, Sn, vt);
      t._transport = Iw, tA.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
f(Av, "getDocument");
var Lf;
const Nl = class Nl {
  _capability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${zt(Nl, Lf)._++}`;
  destroyed = !1;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = !0;
    try {
      this._worker?.port && (this._worker._pendingDestroy = !0), await this._transport?.destroy();
    } catch (t) {
      throw this._worker?.port && delete this._worker._pendingDestroy, t;
    }
    this._transport = null, this._worker?.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Lf = new WeakMap(), f(Nl, "PDFDocumentLoadingTask"), m(Nl, Lf, 0);
let Og = Nl;
var uh, ad, od, hd;
const dy = class dy {
  constructor(t, e, s = !1, n = null) {
    m(this, uh, Promise.withResolvers());
    m(this, ad, []);
    m(this, od, []);
    m(this, hd, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = n, Object.defineProperty(this, "onDataProgress", {
      value: /* @__PURE__ */ f(() => {
        Xw("`PDFDataRangeTransport.prototype.onDataProgress` - method was removed, since loading progress is now reported automatically through the `PDFDataTransportStream` class (and related code).");
      }, "value")
    });
  }
  addRangeListener(t) {
    i(this, hd).push(t);
  }
  addProgressiveReadListener(t) {
    i(this, od).push(t);
  }
  addProgressiveDoneListener(t) {
    i(this, ad).push(t);
  }
  onDataRange(t, e) {
    for (const s of i(this, hd))
      s(t, e);
  }
  onDataProgressiveRead(t) {
    i(this, uh).promise.then(() => {
      for (const e of i(this, od))
        e(t);
    });
  }
  onDataProgressiveDone() {
    i(this, uh).promise.then(() => {
      for (const t of i(this, ad))
        t();
    });
  }
  transportReady() {
    i(this, uh).resolve();
  }
  requestDataRange(t, e) {
    rt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
uh = new WeakMap(), ad = new WeakMap(), od = new WeakMap(), hd = new WeakMap(), f(dy, "PDFDataRangeTransport");
let Qu = dy;
const uy = class uy {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get pagesMapper() {
    return this._transport.pagesMapper;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return V(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  extractPages(t) {
    return this._transport.extractPages(t);
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  getRawData(t) {
    return this._transport.getRawData(t);
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
};
f(uy, "PDFDocumentProxy");
let Hg = uy;
var qi, ma, ba, wl;
const Rf = class Rf {
  constructor(t, e, s, n, r = !1) {
    m(this, ba);
    m(this, qi, !1);
    m(this, ma, null);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = r ? new $u() : null, this._pdfBug = r, this.commonObjs = s.commonObjs, this.objs = new qu(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null, u(this, ma, n), this.imageCoordinates = null;
  }
  clone(t) {
    const e = new Rf(t, this._pageInfo, this._transport, i(this, ma), this._pdfBug);
    return e.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex, this._transport.updatePage(e), e;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  set pageNumber(t) {
    this._pageIndex = t - 1, this._transport.updatePage(this);
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: n = 0,
    dontFlip: r = !1
  } = {}) {
    return new Gl({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: n,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return V(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: s,
    intent: n = "display",
    annotationMode: r = _n.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: h = null,
    annotationCanvasMap: l = null,
    pageColors: c = null,
    printAnnotationStorage: d = null,
    isEditing: p = !1,
    recordImages: y = !1,
    recordOperations: A = !1,
    operationsFilter: w = null
  }) {
    this._stats?.time("Overall");
    const S = this._transport.getRenderingIntent(n, r, d, p), {
      renderingIntent: v,
      cacheKey: E
    } = S;
    u(this, qi, !1), h ||= this._transport.getOptionalContentConfig(v);
    const C = this._intentStates.getOrInsertComputed(E, mp);
    C.streamReaderCancelTimeout && (clearTimeout(C.streamReaderCancelTimeout), C.streamReaderCancelTimeout = null);
    const T = !!(v & ls.PRINT);
    C.displayReadyCapability || (C.displayReadyCapability = Promise.withResolvers(), C.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(S));
    const x = !!(this._pdfBug && globalThis.StepperManager?.enabled), _ = !!e && !this.recordedBBoxes && (A || x), k = !!e && !this.imageCoordinates && y, R = /* @__PURE__ */ f((j) => {
      if (C.renderTasks.delete(P), _) {
        const $ = P.gfx?.dependencyTracker.take();
        $ && (P.stepper?.setOperatorBBoxes($, P.gfx.dependencyTracker.takeDebugMetadata()), A && (this.recordedBBoxes = $));
      }
      k && !j && (this.imageCoordinates = P.gfx?.imagesTracker.take()), T && u(this, qi, !0), b(this, ba, wl).call(this), j ? (P.capability.reject(j), this._abortOperatorList({
        intentState: C,
        reason: j instanceof Error ? j : new Error(j)
      })) : P.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, "complete");
    let I = null, N = null;
    (_ || k) && (N = new zp(e, C.operatorList.length)), _ && (I = new Vp(N, x));
    const P = new zg({
      callback: R,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: I ?? N,
        imagesTracker: k ? new Wp(e) : null,
        viewport: s,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: l,
      operatorList: C.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !T,
      pdfBug: this._pdfBug,
      pageColors: c,
      enableHWA: this._transport.enableHWA,
      operationsFilter: w
    });
    (C.renderTasks ||= /* @__PURE__ */ new Set()).add(P);
    const Q = P.task;
    return Promise.all([C.displayReadyCapability.promise, h]).then(([j, $]) => {
      if (this.destroyed) {
        R();
        return;
      }
      if (this._stats?.time("Rendering"), !($.renderingIntent & v))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      P.initializeGraphics({
        transparency: j,
        optionalContentConfig: $
      }), P.operatorListChanged();
    }).catch(R), Q;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = _n.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: n = !1
  } = {}) {
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(h));
    }
    f(r, "operatorListChanged");
    const a = this._transport.getRenderingIntent(t, e, s, n, !0), o = this._intentStates.getOrInsertComputed(a.cacheKey, mp);
    let h;
    return o.opListReadCapability || (h = /* @__PURE__ */ Object.create(null), h.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks ||= /* @__PURE__ */ new Set()).add(h), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageId: i(this, ma).getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(n) {
        return n.items.length;
      }
    });
  }
  async getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((n) => Ul.textContent(n));
    const e = this.streamTextContent(t), s = {
      items: [],
      styles: /* @__PURE__ */ Object.create(null),
      lang: null
    };
    for await (const n of e)
      s.lang ??= n.lang, Object.assign(s.styles, n.styles), s.items.push(...n.items);
    return s;
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), u(this, qi, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    u(this, qi, !0);
    const e = b(this, ba, wl).call(this);
    return t && e && (this._stats &&= new $u()), e;
  }
  _startRenderPage(t, e) {
    const s = this._intentStates.get(e);
    s && (this._stats?.timeEnd("Page Request"), s.displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, n = t.length; s < n; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, ba, wl).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: n
  }) {
    const {
      map: r,
      transfer: a
    } = s, h = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageId: i(this, ma).getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: n
    }, void 0, a).getReader(), l = this._intentStates.get(e);
    l.streamReader = h;
    const c = /* @__PURE__ */ f(() => {
      h.read().then(({
        value: d,
        done: p
      }) => {
        if (p) {
          l.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(d, l), c());
      }, (d) => {
        if (l.streamReader = null, !this._transport.destroyed) {
          if (l.operatorList) {
            l.operatorList.lastChunk = !0;
            for (const p of l.renderTasks)
              p.operatorListChanged();
            b(this, ba, wl).call(this);
          }
          if (l.displayReadyCapability)
            l.displayReadyCapability.reject(d);
          else if (l.opListReadCapability)
            l.opListReadCapability.reject(d);
          else
            throw d;
        }
      });
    }, "pump");
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof $l) {
          let n = yv;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (n += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, n);
          return;
        }
      }
      if (t.streamReader.cancel(new mn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [n, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(n);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
};
qi = new WeakMap(), ma = new WeakMap(), ba = new WeakSet(), wl = /* @__PURE__ */ f(function() {
  if (!i(this, qi) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), u(this, qi, !1), !0;
}, "#tryCleanup"), f(Rf, "PDFPageProxy");
let Ug = Rf;
var ir, Us, Qi, ya, Nf, fh, Aa, Le, bu, B0, F0, vl, ph, yu;
const Pt = class Pt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = Bw()
  } = {}) {
    m(this, Le);
    m(this, ir, Promise.withResolvers());
    m(this, Us, null);
    m(this, Qi, null);
    m(this, ya, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (i(Pt, Aa).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      i(Pt, Aa).set(e, this), b(this, Le, B0).call(this, e);
    } else
      b(this, Le, F0).call(this);
  }
  get promise() {
    return i(this, ir).promise;
  }
  get port() {
    return i(this, Qi);
  }
  get messageHandler() {
    return i(this, Us);
  }
  destroy() {
    this.destroyed = !0, i(this, ya)?.terminate(), u(this, ya, null), i(Pt, Aa).delete(i(this, Qi)), u(this, Qi, null), i(this, Us)?.destroy(), u(this, Us, null);
  }
  static create(t) {
    const e = i(this, Aa).get(t?.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Pt(t);
  }
  static get workerSrc() {
    if (qh.workerSrc)
      return qh.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return V(this, "_setupFakeWorkerGlobal", (/* @__PURE__ */ f(async () => i(this, ph, yu) ? i(this, ph, yu) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      new URL(
        /*webpackIgnore: true*/
        /*@vite-ignore*/
        this.workerSrc,
        typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? new URL(WEAVY_IMPORT_URL, globalThis.location.href) : import.meta.url
      ).href
    )).WorkerMessageHandler, "loader"))());
  }
};
ir = new WeakMap(), Us = new WeakMap(), Qi = new WeakMap(), ya = new WeakMap(), Nf = new WeakMap(), fh = new WeakMap(), Aa = new WeakMap(), Le = new WeakSet(), bu = /* @__PURE__ */ f(function() {
  i(this, ir).resolve(), i(this, Us).send("configure", {
    verbosity: this.verbosity
  });
}, "#resolve"), B0 = /* @__PURE__ */ f(function(t) {
  u(this, Qi, t), u(this, Us, new Ir("main", "worker", t)), i(this, Us).on("ready", () => {
  }), b(this, Le, bu).call(this);
}, "#initializeFromPort"), F0 = /* @__PURE__ */ f(function() {
  if (i(Pt, fh) || i(Pt, ph, yu)) {
    b(this, Le, vl).call(this);
    return;
  }
  let {
    workerSrc: t
  } = Pt;
  try {
    Pt._isSameOrigin(window.location, t) || (t = Pt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new Ir("main", "worker", e), n = /* @__PURE__ */ f(() => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? i(this, ir).reject(new Error("Worker was destroyed")) : b(this, Le, vl).call(this);
    }, "terminateEarly"), r = new AbortController();
    e.addEventListener("error", () => {
      i(this, ya) || n();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        n();
        return;
      }
      u(this, Us, s), u(this, Qi, e), u(this, ya, e), b(this, Le, bu).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        n();
        return;
      }
      try {
        a();
      } catch {
        b(this, Le, vl).call(this);
      }
    });
    const a = /* @__PURE__ */ f(() => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    }, "sendTest");
    a();
    return;
  } catch {
    Jf("The worker has been disabled.");
  }
  b(this, Le, vl).call(this);
}, "#initialize"), vl = /* @__PURE__ */ f(function() {
  i(Pt, fh) || (W("Setting up fake worker."), u(Pt, fh, !0)), Pt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      i(this, ir).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new ng();
    u(this, Qi, e);
    const s = `fake${zt(Pt, Nf)._++}`, n = new Ir(s + "_worker", s, e);
    t.setup(n, e), u(this, Us, new Ir(s, s + "_worker", e)), b(this, Le, bu).call(this);
  }).catch((t) => {
    i(this, ir).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, "#setupFakeWorker"), ph = new WeakSet(), yu = /* @__PURE__ */ f(function() {
  try {
    return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
}, "#mainThreadWorkerMessageHandler"), m(Pt, ph), f(Pt, "PDFWorker"), m(Pt, Nf, 0), m(Pt, fh, !1), m(Pt, Aa, /* @__PURE__ */ new WeakMap()), Pt._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!s?.origin || s.origin === "null")
    return !1;
  const n = new URL(e, s);
  return s.origin === n.origin;
}, Pt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let Ql = Pt;
var Ke, wa, Ji, Gs, va, gh, Zi, Ks, Sl, Au;
const fy = class fy {
  constructor(t, e, s, n, r, a) {
    m(this, Ks);
    M(this, "downloadInfoCapability", Promise.withResolvers());
    m(this, Ke, null);
    m(this, wa, /* @__PURE__ */ new Map());
    m(this, Ji, null);
    m(this, Gs, /* @__PURE__ */ new Map());
    m(this, va, /* @__PURE__ */ new Map());
    m(this, gh, /* @__PURE__ */ new Map());
    m(this, Zi, null);
    this.messageHandler = t, this.loadingTask = e, u(this, Ji, s), this.commonObjs = new qu(), this.fontLoader = new Xp({
      ownerDocument: n.ownerDocument,
      styleElement: n.styleElement
    }), this.enableHWA = n.enableHWA, this.loadingParams = n.loadingParams, this._params = n, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.binaryDataFactory = r.binaryDataFactory, this.pagesMapper = a, this.destroyed = !1, this.destroyCapability = null, this.setupMessageHandler();
  }
  updatePage(t) {
    const {
      _pageIndex: e
    } = t;
    i(this, Gs).set(e, t), i(this, va).set(e, Promise.resolve(t));
  }
  get annotationStorage() {
    return V(this, "annotationStorage", new Vl());
  }
  getRenderingIntent(t, e = _n.ENABLE, s = null, n = !1, r = !1) {
    let a = ls.DISPLAY, o = jl;
    switch (t) {
      case "any":
        a = ls.ANY;
        break;
      case "display":
        break;
      case "print":
        a = ls.PRINT;
        break;
      default:
        W(`getRenderingIntent - invalid intent: ${t}`);
    }
    const h = a & ls.PRINT && s instanceof Wu ? s : this.annotationStorage;
    switch (e) {
      case _n.DISABLE:
        a += ls.ANNOTATIONS_DISABLE;
        break;
      case _n.ENABLE:
        break;
      case _n.ENABLE_FORMS:
        a += ls.ANNOTATIONS_FORMS;
        break;
      case _n.ENABLE_STORAGE:
        a += ls.ANNOTATIONS_STORAGE, o = h.serializable;
        break;
      default:
        W(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    n && (a += ls.IS_EDITING), r && (a += ls.OPLIST);
    const {
      ids: l,
      hash: c
    } = h.modifiedIds, d = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: d.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: l
    };
  }
  destroy() {
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), i(this, Zi)?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of i(this, Gs).values())
      t.push(s._destroy());
    i(this, Gs).clear(), i(this, va).clear(), i(this, gh).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      this.commonObjs.clear(), this.fontLoader.clear(), i(this, wa).clear(), this.filterFactory.destroy(), ql.cleanup(), i(this, Ji)?.cancelAllRequests(new mn("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, n) => {
      Bt(i(this, Ji), "GetReader - no `BasePDFStream` instance available."), u(this, Ke, i(this, Ji).getFullReader()), i(this, Ke).onProgress = (r) => b(this, Ks, Au).call(this, r), n.onPull = () => {
        i(this, Ke).read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            n.close();
            return;
          }
          Bt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          n.error(r);
        });
      }, n.onCancel = (r) => {
        i(this, Ke).cancel(r), n.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      await i(this, Ke).headersReady;
      const {
        isStreamingSupported: n,
        isRangeSupported: r,
        contentLength: a
      } = i(this, Ke);
      return n && r && (i(this, Ke).onProgress = null), {
        isStreamingSupported: n,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, n) => {
      Bt(i(this, Ji), "GetRangeReader - no `BasePDFStream` instance available.");
      const r = i(this, Ji).getRangeReader(s.begin, s.end);
      if (!r) {
        n.close();
        return;
      }
      n.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            n.close();
            return;
          }
          Bt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          n.error(a);
        });
      }, n.onCancel = (a) => {
        r.cancel(a), n.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this.pagesMapper.pagesNumber = s.numPages, this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Hg(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Be(s));
    }), t.on("PasswordRequest", (s) => {
      u(this, Zi, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Be(s);
        const n = /* @__PURE__ */ f((r) => {
          r instanceof Error ? i(this, Zi).reject(r) : i(this, Zi).resolve({
            password: r
          });
        }, "updatePassword");
        e.onPassword(n, s.code);
      } catch (n) {
        i(this, Zi).reject(n);
      }
      return i(this, Zi).promise;
    }), t.on("DataLoaded", (s) => {
      b(this, Ks, Au).call(this, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      i(this, Gs).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, n, r]) => {
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (n) {
        case "Font":
          if ("error" in r) {
            const d = r.error;
            W(`Error during font loading: ${d}`), this.commonObjs.resolve(s, d);
            break;
          }
          const a = new Zp(r), o = this._params.pdfBug && globalThis.FontInspector?.enabled ? (d, p) => globalThis.FontInspector.fontAdded(d, p) : null, h = new Yp(a, o, r.charProcOperatorList, r.extra);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            h.fontExtraProperties || h.clearData(), this.commonObjs.resolve(s, h);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: l
          } = r;
          Bt(l, "The imageRef must be defined.");
          for (const d of i(this, Gs).values())
            for (const [, p] of d.objs)
              if (p?.ref === l)
                return p.dataLen ? (this.commonObjs.resolve(s, structuredClone(p)), p.dataLen) : null;
          break;
        case "FontPath":
          this.commonObjs.resolve(s, new sg(r));
          break;
        case "Image":
          this.commonObjs.resolve(s, r);
          break;
        case "Pattern":
          const c = new eg(r);
          this.commonObjs.resolve(s, c.getIR());
          break;
        default:
          throw new Error(`Got unknown common object type ${n}`);
      }
      return null;
    }), t.on("obj", ([s, n, r, a]) => {
      if (this.destroyed)
        return;
      const o = i(this, Gs).get(n);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          a?.bitmap?.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      this.destroyed || b(this, Ks, Au).call(this, s);
    }), t.on("PrepareWebGPU", () => {
      this.destroyed || iv();
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.binaryDataFactory)
        throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
      return this.binaryDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    this.annotationStorage.size <= 0 && W("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: i(this, Ke)?.filename ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  extractPages(t) {
    const e = {
      pageInfos: t
    };
    let s;
    if (this.annotationStorage.size > 0) {
      const {
        map: n,
        transfer: r
      } = this.annotationStorage.serializable;
      e.annotationStorage = n, s = r;
    }
    return this.messageHandler.sendWithPromise("ExtractPages", e, s).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = this.pagesMapper.getPageId(t) - 1, n = i(this, va).get(e);
    if (n)
      return n;
    const r = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: s
    }).then((a) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      a.refStr && i(this, gh).set(a.refStr, s);
      const o = new Ug(e, a, this, this.pagesMapper, this._params.pdfBug);
      return i(this, Gs).set(e, o), o;
    });
    return i(this, va).set(e, r), r;
  }
  async getPageIndex(t) {
    if (!ig(t))
      throw new Error("Invalid pageIndex request.");
    const e = await this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }), s = this.pagesMapper.getPageNumber(e + 1);
    if (s === 0)
      throw new Error("GetPageIndex: page has been removed.");
    return s - 1;
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, Ks, Sl).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, Ks, Sl).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return b(this, Ks, Sl).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, Ks, Sl).call(this, "GetOptionalContentConfig").then((e) => new Lg(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata";
    return i(this, wa).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((e) => ({
      info: e[0],
      metadata: e[1] ? new Ig(e[1]) : null,
      contentDispositionFilename: i(this, Ke)?.filename ?? null,
      contentLength: i(this, Ke)?.contentLength ?? null,
      hasStructTree: e[2]
    })));
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  getRawData(t) {
    return this.messageHandler.sendWithPromise("GetRawData", t);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of i(this, Gs).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), i(this, wa).clear(), this.filterFactory.destroy(!0), ql.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!ig(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, s = i(this, gh).get(e);
    if (s >= 0) {
      const n = this.pagesMapper.getPageNumber(s + 1);
      if (n !== 0)
        return n;
    }
    return null;
  }
};
Ke = new WeakMap(), wa = new WeakMap(), Ji = new WeakMap(), Gs = new WeakMap(), va = new WeakMap(), gh = new WeakMap(), Zi = new WeakMap(), Ks = new WeakSet(), Sl = /* @__PURE__ */ f(function(t, e = null) {
  return i(this, wa).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e));
}, "#cacheSimpleMethod"), Au = /* @__PURE__ */ f(function({
  loaded: t,
  total: e
}) {
  this.loadingTask.onProgress?.({
    loaded: t,
    total: e,
    percent: e ? he(Math.round(t / e * 100), 0, 100) : NaN
  });
}, "#onProgress"), f(fy, "WorkerTransport");
let Gg = fy;
const py = class py {
  _internalRenderTask = null;
  onContinue = null;
  onError = null;
  constructor(t) {
    this._internalRenderTask = t;
  }
  get promise() {
    return this._internalRenderTask.capability.promise;
  }
  cancel(t = 0) {
    this._internalRenderTask.cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = this._internalRenderTask.operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = this._internalRenderTask;
    return t.form || t.canvas && e?.size > 0;
  }
  get imageCoordinates() {
    return this._internalRenderTask.imageCoordinates || null;
  }
};
f(py, "RenderTask");
let $g = py;
var nr, Sa;
const Tn = class Tn {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: n,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: h,
    filterFactory: l,
    useRequestAnimationFrame: c = !1,
    pdfBug: d = !1,
    pageColors: p = null,
    enableHWA: y = !1,
    operationsFilter: A = null
  }) {
    m(this, nr, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = n, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = d, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new $g(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = y, this._dependencyTracker = e.dependencyTracker, this._imagesTracker = e.imagesTracker, this._operationsFilter = A;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (i(Tn, Sa).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      i(Tn, Sa).add(this._canvas);
    }
    this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: n,
      background: r,
      dependencyTracker: a,
      imagesTracker: o
    } = this.params, h = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new Ao(h, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a, o), this.gfx.beginDrawing({
      transform: n,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
  }
  cancel(t = null, e = 0) {
    this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), i(this, nr) && (window.cancelAnimationFrame(i(this, nr)), u(this, nr, null)), i(Tn, Sa).delete(this._canvas), t ||= new $l(`Rendering cancelled, page ${this._pageIndex + 1}`, e), this.callback(t), this.task.onError?.(t);
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length), this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? u(this, nr, window.requestAnimationFrame(() => {
      u(this, nr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), i(Tn, Sa).delete(this._canvas), this.callback())));
  }
};
nr = new WeakMap(), Sa = new WeakMap(), f(Tn, "InternalRenderTask"), m(Tn, Sa, /* @__PURE__ */ new WeakSet());
let zg = Tn;
const wv = "5.6.205", vv = "ada343803";
var qe, Ea, mh, Qt, ld, bh, tn, cd, rr, $s, dd, mt, jg, Vg, Wg, Tr, O0, En;
const _e = class _e {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, mt);
    m(this, qe, null);
    m(this, Ea, null);
    m(this, mh);
    m(this, Qt, null);
    m(this, ld, !1);
    m(this, bh, !1);
    m(this, tn, null);
    m(this, cd);
    m(this, rr, null);
    m(this, $s, null);
    t ? (u(this, bh, !1), u(this, tn, t)) : u(this, bh, !0), u(this, $s, t?._uiManager || e), u(this, cd, i(this, $s)._eventBus), u(this, mh, t?.color?.toUpperCase() || i(this, $s)?.highlightColors.values().next().value || "#FFFF98"), i(_e, dd) || u(_e, dd, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return V(this, "_keyboardManager", new Qa([[["Escape", "mac+Escape"], _e.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], _e.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], _e.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], _e.prototype._moveToPrevious], [["Home", "mac+Home"], _e.prototype._moveToBeginning], [["End", "mac+End"], _e.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = u(this, qe, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", i(this, tn) && (t.ariaControls = `${i(this, tn).id}_colorpicker_dropdown`);
    const e = i(this, $s)._signal;
    t.addEventListener("click", b(this, mt, Tr).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, mt, Wg).bind(this), {
      signal: e
    });
    const s = u(this, Ea, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = i(this, mh), t.append(s), t;
  }
  renderMainDropdown() {
    const t = u(this, Qt, b(this, mt, jg).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === i(this, qe)) {
      b(this, mt, Tr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, mt, Vg).call(this, e, t);
  }
  _moveToNext(t) {
    if (!i(this, mt, En)) {
      b(this, mt, Tr).call(this, t);
      return;
    }
    if (t.target === i(this, qe)) {
      i(this, Qt).firstElementChild?.focus();
      return;
    }
    t.target.nextSibling?.focus();
  }
  _moveToPrevious(t) {
    if (t.target === i(this, Qt)?.firstElementChild || t.target === i(this, qe)) {
      i(this, mt, En) && this._hideDropdownFromKeyboard();
      return;
    }
    i(this, mt, En) || b(this, mt, Tr).call(this, t), t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (!i(this, mt, En)) {
      b(this, mt, Tr).call(this, t);
      return;
    }
    i(this, Qt).firstElementChild?.focus();
  }
  _moveToEnd(t) {
    if (!i(this, mt, En)) {
      b(this, mt, Tr).call(this, t);
      return;
    }
    i(this, Qt).lastElementChild?.focus();
  }
  hideDropdown() {
    i(this, Qt)?.classList.add("hidden"), i(this, qe).ariaExpanded = "false", i(this, rr)?.abort(), u(this, rr, null);
  }
  _hideDropdownFromKeyboard() {
    if (!i(this, bh)) {
      if (!i(this, mt, En)) {
        i(this, tn)?.unselect();
        return;
      }
      this.hideDropdown(), i(this, qe).focus({
        preventScroll: !0,
        focusVisible: i(this, ld)
      });
    }
  }
  updateColor(t) {
    if (i(this, Ea) && (i(this, Ea).style.backgroundColor = t), !i(this, Qt))
      return;
    const e = i(this, $s).highlightColors.values();
    for (const s of i(this, Qt).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    i(this, qe)?.remove(), u(this, qe, null), u(this, Ea, null), i(this, Qt)?.remove(), u(this, Qt, null);
  }
};
qe = new WeakMap(), Ea = new WeakMap(), mh = new WeakMap(), Qt = new WeakMap(), ld = new WeakMap(), bh = new WeakMap(), tn = new WeakMap(), cd = new WeakMap(), rr = new WeakMap(), $s = new WeakMap(), dd = new WeakMap(), mt = new WeakSet(), jg = /* @__PURE__ */ f(function() {
  const t = document.createElement("div"), e = i(this, $s)._signal;
  t.addEventListener("contextmenu", Is, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), i(this, tn) && (t.id = `${i(this, tn).id}_colorpicker_dropdown`);
  for (const [s, n] of i(this, $s).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", n), r.title = s, r.setAttribute("data-l10n-id", i(_e, dd)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = n, r.ariaSelected = n === i(this, mh), r.addEventListener("click", b(this, mt, Vg).bind(this, n), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, mt, Wg).bind(this), {
    signal: e
  }), t;
}, "#getDropdownRoot"), Vg = /* @__PURE__ */ f(function(t, e) {
  e.stopPropagation(), i(this, cd).dispatch("switchannotationeditorparams", {
    source: this,
    type: Z.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, "#colorSelect"), Wg = /* @__PURE__ */ f(function(t) {
  _e._keyboardManager.exec(this, t);
}, "#keyDown"), Tr = /* @__PURE__ */ f(function(t) {
  if (i(this, mt, En)) {
    this.hideDropdown();
    return;
  }
  if (u(this, ld, t.detail === 0), i(this, rr) || (u(this, rr, new AbortController()), window.addEventListener("pointerdown", b(this, mt, O0).bind(this), {
    signal: i(this, $s).combinedSignal(i(this, rr))
  })), i(this, qe).ariaExpanded = "true", i(this, Qt)) {
    i(this, Qt).classList.remove("hidden");
    return;
  }
  const e = u(this, Qt, b(this, mt, jg).call(this));
  i(this, qe).append(e);
}, "#openDropdown"), O0 = /* @__PURE__ */ f(function(t) {
  i(this, Qt)?.contains(t.target) || this.hideDropdown();
}, "#pointerDown"), En = /* @__PURE__ */ f(function() {
  return i(this, Qt) && !i(this, Qt).classList.contains("hidden");
}, "#isDropdownVisible"), f(_e, "ColorPicker"), m(_e, dd, null);
let Ju = _e;
var gi, ud, yh, fd;
const xn = class xn {
  constructor(t) {
    m(this, gi, null);
    m(this, ud, null);
    m(this, yh, null);
    u(this, ud, t), u(this, yh, t._uiManager), i(xn, fd) || u(xn, fd, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (i(this, gi))
      return i(this, gi);
    const {
      editorType: t,
      colorType: e,
      color: s
    } = i(this, ud), n = u(this, gi, document.createElement("input"));
    return n.type = "color", n.value = s || "#000000", n.className = "basicColorPicker", n.tabIndex = 0, n.setAttribute("data-l10n-id", i(xn, fd)[t]), n.addEventListener("input", () => {
      i(this, yh).updateParams(e, n.value);
    }, {
      signal: i(this, yh)._signal
    }), n;
  }
  update(t) {
    i(this, gi) && (i(this, gi).value = t);
  }
  destroy() {
    i(this, gi)?.remove(), u(this, gi, null);
  }
  hideDropdown() {
  }
};
gi = new WeakMap(), ud = new WeakMap(), yh = new WeakMap(), fd = new WeakMap(), f(xn, "BasicColorPicker"), m(xn, fd, null);
let Zu = xn;
function xA(g) {
  return Math.floor(Math.max(0, Math.min(1, g)) * 255).toString(16).padStart(2, "0");
}
f(xA, "makeColorComp");
function rl(g) {
  return Math.max(0, Math.min(255, 255 * g));
}
f(rl, "scaleAndClamp");
const gy = class gy {
  static CMYK_G([t, e, s, n]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + n)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = rl(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = xA(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(rl);
  }
  static RGB_HTML(t) {
    return `#${t.map(xA).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, n]) {
    return ["RGB", 1 - Math.min(1, t + n), 1 - Math.min(1, s + n), 1 - Math.min(1, e + n)];
  }
  static CMYK_rgb([t, e, s, n]) {
    return [rl(1 - Math.min(1, t + n)), rl(1 - Math.min(1, s + n)), rl(1 - Math.min(1, e + n))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const n = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(n, r, a);
    return ["CMYK", n, r, a, o];
  }
};
f(gy, "ColorConverters");
let tf = gy;
const my = class my {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const n = this._createSVG("svg:svg");
    return n.setAttribute("version", "1.1"), s || (n.setAttribute("width", `${t}px`), n.setAttribute("height", `${e}px`)), n.setAttribute("preserveAspectRatio", "none"), n.setAttribute("viewBox", `0 0 ${t} ${e}`), n;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    rt("Abstract method `_createSVG` called.");
  }
};
f(my, "BaseSVGFactory");
let Xg = my;
const by = class by extends Xg {
  _createSVG(t) {
    return document.createElementNS(Pi, t);
  }
};
f(by, "DOMSVGFactory");
let Qh = by;
const Sv = 9, Za = /* @__PURE__ */ new WeakSet(), Ev = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3, yy = class yy {
  static create(t) {
    switch (t.data.annotationType) {
      case Vt.LINK:
        return new Jl(t);
      case Vt.TEXT:
        return new qg(t);
      case Vt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Qg(t);
          case "Btn":
            return t.data.radioButton ? new ef(t) : t.data.checkBox ? new Zg(t) : new tm(t);
          case "Ch":
            return new em(t);
          case "Sig":
            return new Jg(t);
        }
        return new yn(t);
      case Vt.POPUP:
        return new Zl(t);
      case Vt.FREETEXT:
        return new sf(t);
      case Vt.LINE:
        return new lm(t);
      case Vt.SQUARE:
        return new cm(t);
      case Vt.CIRCLE:
        return new dm(t);
      case Vt.POLYLINE:
        return new nf(t);
      case Vt.CARET:
        return new fm(t);
      case Vt.INK:
        return new tc(t);
      case Vt.POLYGON:
        return new um(t);
      case Vt.HIGHLIGHT:
        return new rf(t);
      case Vt.UNDERLINE:
        return new gm(t);
      case Vt.SQUIGGLY:
        return new mm(t);
      case Vt.STRIKEOUT:
        return new bm(t);
      case Vt.STAMP:
        return new af(t);
      case Vt.FILEATTACHMENT:
        return new ym(t);
      default:
        return new Mt(t);
    }
  }
};
f(yy, "AnnotationElementFactory");
let Pl = yy;
var Ca, Ah, xs, pd, Yg;
const Bf = class Bf {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: n = !1
  } = {}) {
    m(this, pd);
    m(this, Ca, null);
    m(this, Ah, !1);
    m(this, xs, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, this.hasOwnCommentButton = !1, e && (this.contentElement = this.container = this._createContainer(s)), n && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t?.str || e?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Bf._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    const {
      data: t
    } = this, e = this.annotationStorage?.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const t = this.annotationStorage?.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: s,
      rect: n
    } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if (e?.length >= 8) {
      for (let o = 0; o < e.length; o += 8)
        e[o + 1] > a ? (a = e[o + 1], r = e[o + 2]) : e[o + 1] === a && (r = Math.max(r, e[o + 2]));
      return [r, a];
    }
    if (s?.length >= 1) {
      for (const o of s)
        for (let h = 0, l = o.length; h < l; h += 2)
          o[h + 1] > a ? (a = o[h + 1], r = o[h]) : o[h + 1] === a && (r = Math.max(r, o[h]));
      if (r !== 1 / 0)
        return [r, a];
    }
    return n ? [n[2], n[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: n,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / s, t[1] = 100 * (t[1] - a) / n, t;
  }
  get commentText() {
    const {
      data: t
    } = this;
    return this.annotationStorage.getRawValue(`${Fl}${t.id}`)?.popup?.contents || t.contentsObj?.str || "";
  }
  set commentText(t) {
    const {
      data: e
    } = this, s = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(e.id, {
      popup: s
    }) || this.annotationStorage.setValue(`${Fl}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      page: this.parent.page,
      popup: s,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    (i(this, xs)?.popup || this.popup)?.remove(), u(this, xs, this.popup = null);
  }
  updateEdited(t) {
    if (!this.container)
      return;
    t.rect && (i(this, Ca) || u(this, Ca, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && b(this, pd, Yg).call(this, e);
    let n = i(this, xs)?.popup || this.popup;
    !n && s?.text && (this._createPopup(s), n = i(this, xs).popup), n && (n.updateEdited(t), s?.deleted && (n.remove(), u(this, xs, null), this.popup = null));
  }
  resetEdited() {
    i(this, Ca) && (b(this, pd, Yg).call(this, i(this, Ca).rect), i(this, xs)?.popup.resetEdited(), u(this, Ca, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: n
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof yn) && !(this instanceof Jl) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Zl) {
      const {
        rotation: w
      } = e;
      return !e.hasOwnCanvas && w !== 0 && this.setRotation(w, r), r;
    }
    const {
      width: o,
      height: h
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const w = e.borderStyle.horizontalCornerRadius, S = e.borderStyle.verticalCornerRadius;
      if (w > 0 || S > 0) {
        const E = `calc(${w}px * var(--total-scale-factor)) / calc(${S}px * var(--total-scale-factor))`;
        a.borderRadius = E;
      } else if (this instanceof ef) {
        const E = `calc(${o}px * var(--total-scale-factor)) / calc(${h}px * var(--total-scale-factor))`;
        a.borderRadius = E;
      }
      switch (e.borderStyle.style) {
        case io.SOLID:
          a.borderStyle = "solid";
          break;
        case io.DASHED:
          a.borderStyle = "dashed";
          break;
        case io.BEVELED:
          W("Unimplemented border style: beveled");
          break;
        case io.INSET:
          W("Unimplemented border style: inset");
          break;
        case io.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (u(this, Ah, !0), a.borderColor = D.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const l = D.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: d,
      pageX: p,
      pageY: y
    } = n.rawDims;
    a.left = `${100 * (l[0] - p) / c}%`, a.top = `${100 * (l[1] - y) / d}%`;
    const {
      rotation: A
    } = e;
    return e.hasOwnCanvas || A === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * h / d}%`) : this.setRotation(A, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: n
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / s}%`, e.style.height = `${100 * a / n}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = /* @__PURE__ */ f((e, s, n) => {
      const r = n.detail[e], a = r[0], o = r.slice(1);
      n.target.style[s] = tf[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: tf[`${a}_rgb`](o)
      });
    }, "setColor");
    return V(this, "_commonActions", {
      display: /* @__PURE__ */ f((e) => {
        const {
          display: s
        } = e.detail, n = s % 2 === 1;
        this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: n,
          noPrint: s === 1 || s === 2
        });
      }, "display"),
      print: /* @__PURE__ */ f((e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      }, "print"),
      hidden: /* @__PURE__ */ f((e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      }, "hidden"),
      focus: /* @__PURE__ */ f((e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      }, "focus"),
      userName: /* @__PURE__ */ f((e) => {
        e.target.title = e.detail.userName;
      }, "userName"),
      readonly: /* @__PURE__ */ f((e) => {
        e.target.disabled = e.detail.readonly;
      }, "readonly"),
      required: /* @__PURE__ */ f((e) => {
        this._setRequired(e.target, e.detail.required);
      }, "required"),
      bgColor: /* @__PURE__ */ f((e) => {
        t("bgColor", "backgroundColor", e);
      }, "bgColor"),
      fillColor: /* @__PURE__ */ f((e) => {
        t("fillColor", "backgroundColor", e);
      }, "fillColor"),
      fgColor: /* @__PURE__ */ f((e) => {
        t("fgColor", "color", e);
      }, "fgColor"),
      textColor: /* @__PURE__ */ f((e) => {
        t("textColor", "color", e);
      }, "textColor"),
      borderColor: /* @__PURE__ */ f((e) => {
        t("borderColor", "borderColor", e);
      }, "borderColor"),
      strokeColor: /* @__PURE__ */ f((e) => {
        t("strokeColor", "borderColor", e);
      }, "strokeColor"),
      rotation: /* @__PURE__ */ f((e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }, "rotation")
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const n of Object.keys(e.detail))
      (t[n] || s[n])?.(e);
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [n, r] of Object.entries(e)) {
      const a = s[n];
      if (a) {
        const o = {
          detail: {
            [n]: r
          },
          target: t
        };
        a(o), delete e[n];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, n, r] = this.data.rect.map((w) => Math.fround(w));
    if (t.length === 8) {
      const [w, S, v, E] = t.subarray(2, 6);
      if (n === w && r === S && e === v && s === E)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (i(this, Ah)) {
      const {
        borderColor: w,
        borderWidth: S
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${w}" stroke-width="${S}">`], this.container.classList.add("hasBorder");
    }
    const h = n - e, l = r - s, {
      svgFactory: c
    } = this, d = c.createElement("svg");
    d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0), d.role = "none";
    const p = c.createElement("defs");
    d.append(p);
    const y = c.createElement("clipPath"), A = `clippath_${this.data.id}`;
    y.setAttribute("id", A), y.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(y);
    for (let w = 2, S = t.length; w < S; w += 8) {
      const v = t[w], E = t[w + 1], C = t[w + 2], T = t[w + 3], x = c.createElement("rect"), _ = (C - e) / h, k = (r - E) / l, R = (v - C) / h, I = (E - T) / l;
      x.setAttribute("x", _), x.setAttribute("y", k), x.setAttribute("width", R), x.setAttribute("height", I), y.append(x), o?.push(`<rect vector-effect="non-scaling-stroke" x="${_}" y="${k}" width="${R}" height="${I}"/>`);
    }
    i(this, Ah) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(d), this.container.style.clipPath = `url(#${A})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, n;
    t ? (s = {
      str: t.text
    }, n = t.date) : (s = e.contentsObj, n = e.modificationDate), u(this, xs, new Zl({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: n,
        contentsObj: s,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
  }
  get hasPopupElement() {
    return !!(i(this, xs) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return i(this, xs);
  }
  render() {
    rt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const n = this._fieldObjects[t];
      if (n)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of n) {
          if (r === -1 || a === e)
            continue;
          const h = typeof o == "string" ? o : null, l = document.querySelector(`[data-element-id="${a}"]`);
          if (l && !Za.has(l)) {
            W(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          s.push({
            id: a,
            exportValue: h,
            domElement: l
          });
        }
      return s;
    }
    for (const n of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = n, a = n.getAttribute("data-element-id");
      a !== e && Za.has(n) && s.push({
        id: a,
        exportValue: r,
        domElement: n
      });
    }
    return s;
  }
  show() {
    this.container && (this.container.hidden = !1), this.popup?.maybeShow();
  }
  hide() {
    this.container && (this.container.hidden = !0), this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Ca = new WeakMap(), Ah = new WeakMap(), xs = new WeakMap(), pd = new WeakSet(), Yg = /* @__PURE__ */ f(function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: n
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: h
        }
      }
    }
  } = this;
  s?.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + h) / a}%`, n === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(n);
}, "#setRectEdited"), f(Bf, "AnnotationElement");
let Mt = Bf;
const Ay = class Ay extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && this._createPopup(t.comment);
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.parent.removeAnnotation(this.data.id), this.container.remove(), this.container = null, this.removePopup();
  }
};
f(Ay, "EditorAnnotationElement");
let Kg = Ay;
var ds, xr, H0, U0;
const wy = class wy extends Mt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!s?.ignoreBorder,
      createQuadrilaterals: !0
    });
    m(this, ds);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, n = document.createElement("a");
    n.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(n, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(n, e.action, e.overlaidText), r = !0) : e.attachment ? (b(this, ds, H0).call(this, n, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, ds, U0).call(this, n, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(n, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, e), r = !0), e.resetForm ? (this._bindResetFormAction(n, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(n, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && (this.contentElement = n, this.container.append(n)), this.container;
  }
  _bindLink(e, s, n = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, ds, xr).call(this), n && (e.title = n);
  }
  _bindNamedAction(e, s, n = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), n && (e.title = n), b(this, ds, xr).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const n = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = n.get(r);
      a && (e[a] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: s.id,
          name: r
        }
      }), !1));
    }
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => !1), b(this, ds, xr).call(this);
  }
  _bindResetFormAction(e, s) {
    const n = e.onclick;
    if (n || (e.href = this.linkService.getAnchorUrl("")), b(this, ds, xr).call(this), !this._fieldObjects) {
      W('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      n?.();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, h = [];
      if (r.length !== 0 || a.length !== 0) {
        const d = new Set(a);
        for (const p of r) {
          const y = this._fieldObjects[p] || [];
          for (const {
            id: A
          } of y)
            d.add(A);
        }
        for (const p of Object.values(this._fieldObjects))
          for (const y of p)
            d.has(y.id) === o && h.push(y);
      } else
        for (const d of Object.values(this._fieldObjects))
          h.push(...d);
      const l = this.annotationStorage, c = [];
      for (const d of h) {
        const {
          id: p
        } = d;
        switch (c.push(p), d.type) {
          case "text": {
            const A = d.defaultValue || "";
            l.setValue(p, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = d.defaultValue === d.exportValues;
            l.setValue(p, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = d.defaultValue || "";
            l.setValue(p, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${p}"]`);
        if (y) {
          if (!Za.has(y)) {
            W(`_bindResetFormAction - element not allowed: ${p}`);
            continue;
          }
        } else continue;
        y.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      }), !1;
    };
  }
};
ds = new WeakSet(), xr = /* @__PURE__ */ f(function() {
  this.container.setAttribute("data-internal-link", "");
}, "#setInternalLink"), H0 = /* @__PURE__ */ f(function(e, s, n = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : n && (e.title = n), e.onclick = () => (this.downloadManager?.openOrDownloadData(s.content, s.filename, r), !1), b(this, ds, xr).call(this);
}, "#bindAttachment"), U0 = /* @__PURE__ */ f(function(e, s, n = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), n && (e.title = n), b(this, ds, xr).call(this);
}, "#bindSetOCGState"), f(wy, "LinkAnnotationElement");
let Jl = wy;
const vy = class vy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(t), this.container;
  }
};
f(vy, "TextAnnotationElement");
let qg = vy;
const Sy = class Sy extends Mt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    this.data.hasOwnCanvas && (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Gt.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, n, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: n,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: n,
          value: r(a)
        }
      });
    });
  }
  _setEventListeners(t, e, s, n) {
    for (const [r, a] of s)
      (a === "Action" || this.data.actions?.[a]) && ((a === "Focus" || a === "Blur") && (e ||= {
        focused: !1
      }), this._setEventListener(t, e, r, a, n), a === "Focus" && !this.data.actions?.Blur ? this._setEventListener(t, e, "blur", "Blur", null) : a === "Blur" && !this.data.actions?.Focus && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : D.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, n = this.data.defaultAppearanceData.fontSize || Sv, r = t.style;
    let a;
    const o = 2, h = /* @__PURE__ */ f((l) => Math.round(10 * l) / 10, "roundToOneDecimal");
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(l / (ap * n)) || 1, d = l / c;
      a = Math.min(n, h(d / ap));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(n, h(l / ap));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = D.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
};
f(Sy, "WidgetAnnotationElement");
let yn = Sy;
const Ey = class Ey extends yn {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, n) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [n]: s
      });
  }
  render() {
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const n = t.getValue(e, {
        value: this.data.fieldValue
      });
      let r = n.value || "";
      const a = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      a && r.length > a && (r = r.slice(0, a));
      let o = n.formattedValue || this.data.textContent?.join(`
`) || null;
      o && this.data.comb && (o = o.replaceAll(/\s+/g, ""));
      const h = {
        userValue: r,
        formattedValue: o,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = o ?? r, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", o ?? r), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Za.add(s), this.contentElement = s, s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: l,
        datetimeType: c,
        timeStep: d
      } = this.data, p = !!c && this.enableScripting;
      l && (s.title = l), this._setRequired(s, this.data.required), a && (s.maxLength = a), s.addEventListener("input", (A) => {
        t.setValue(e, {
          value: A.target.value
        }), this.setPropertyOnSiblings(s, "value", A.target.value, "value"), h.formattedValue = null;
      }), s.addEventListener("resetform", (A) => {
        const w = this.data.defaultFieldValue ?? "";
        s.value = h.userValue = w, h.formattedValue = null;
      });
      let y = /* @__PURE__ */ f((A) => {
        const {
          formattedValue: w
        } = h;
        w != null && (A.target.value = w), A.target.scrollLeft = 0;
      }, "blurListener");
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (w) => {
          if (h.focused)
            return;
          const {
            target: S
          } = w;
          if (p && (S.type = c, d && (S.step = d)), h.userValue) {
            const v = h.userValue;
            if (p)
              if (c === "time") {
                const E = new Date(v), C = [E.getHours(), E.getMinutes(), E.getSeconds()];
                S.value = C.map((T) => T.toString().padStart(2, "0")).join(":");
              } else
                S.value = new Date(v - Ev).toISOString().split(c === "date" ? "T" : ".", 1)[0];
            else
              S.value = v;
          }
          h.lastCommittedValue = S.value, h.commitKey = 1, this.data.actions?.Focus || (h.focused = !0);
        }), s.addEventListener("updatefromsandbox", (w) => {
          this.showElementAndHideCanvas(w.target);
          const S = {
            value(v) {
              h.userValue = v.detail.value ?? "", p || t.setValue(e, {
                value: h.userValue.toString()
              }), v.target.value = h.userValue;
            },
            formattedValue(v) {
              const {
                formattedValue: E
              } = v.detail;
              h.formattedValue = E, E != null && v.target !== document.activeElement && (v.target.value = E);
              const C = {
                formattedValue: E
              };
              p && (C.value = E), t.setValue(e, C);
            },
            selRange(v) {
              v.target.setSelectionRange(...v.detail.selRange);
            },
            charLimit: /* @__PURE__ */ f((v) => {
              const {
                charLimit: E
              } = v.detail, {
                target: C
              } = v;
              if (E === 0) {
                C.removeAttribute("maxLength");
                return;
              }
              C.setAttribute("maxLength", E);
              let T = h.userValue;
              !T || T.length <= E || (T = T.slice(0, E), C.value = h.userValue = T, t.setValue(e, {
                value: T
              }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: T,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: C.selectionStart,
                  selEnd: C.selectionEnd
                }
              }));
            }, "charLimit")
          };
          this._dispatchEventFromSandbox(S, w);
        }), s.addEventListener("keydown", (w) => {
          h.commitKey = 1;
          let S = -1;
          if (w.key === "Escape" ? S = 0 : w.key === "Enter" && !this.data.multiLine ? S = 2 : w.key === "Tab" && (h.commitKey = 3), S === -1)
            return;
          const {
            value: v
          } = w.target;
          h.lastCommittedValue !== v && (h.lastCommittedValue = v, h.userValue = v, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: v,
              willCommit: !0,
              commitKey: S,
              selStart: w.target.selectionStart,
              selEnd: w.target.selectionEnd
            }
          }));
        });
        const A = y;
        y = null, s.addEventListener("blur", (w) => {
          if (!h.focused || !w.relatedTarget)
            return;
          this.data.actions?.Blur || (h.focused = !1);
          const {
            target: S
          } = w;
          let {
            value: v
          } = S;
          if (p) {
            if (v && c === "time") {
              const E = v.split(":").map((C) => parseInt(C, 10));
              v = new Date(2e3, 0, 1, E[0], E[1], E[2] || 0).valueOf(), S.step = "";
            } else
              v.includes("T") || (v = `${v}T00:00`), v = new Date(v).valueOf();
            S.type = "text";
          }
          h.userValue = v, h.lastCommittedValue !== v && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: v,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: w.target.selectionStart,
              selEnd: w.target.selectionEnd
            }
          }), A(w);
        }), this.data.actions?.Keystroke && s.addEventListener("beforeinput", (w) => {
          h.lastCommittedValue = null;
          const {
            data: S,
            target: v
          } = w, {
            value: E,
            selectionStart: C,
            selectionEnd: T
          } = v;
          let x = C, _ = T;
          switch (w.inputType) {
            case "deleteWordBackward": {
              const k = E.substring(0, C).match(/\w*[^\w]*$/);
              k && (x -= k[0].length);
              break;
            }
            case "deleteWordForward": {
              const k = E.substring(C).match(/^[^\w]*\w*/);
              k && (_ += k[0].length);
              break;
            }
            case "deleteContentBackward":
              C === T && (x -= 1);
              break;
            case "deleteContentForward":
              C === T && (_ += 1);
              break;
          }
          w.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: E,
              change: S || "",
              willCommit: !1,
              selStart: x,
              selEnd: _
            }
          });
        }), this._setEventListeners(s, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (w) => w.target.value);
      }
      if (y && s.addEventListener("blur", y), this.data.comb) {
        const w = (this.data.rect[2] - this.data.rect[0]) / a;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${w}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
};
f(Ey, "TextWidgetAnnotationElement");
let Qg = Ey;
const Cy = class Cy extends yn {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
};
f(Cy, "SignatureWidgetAnnotationElement");
let Jg = Cy;
const Ty = class Ty extends yn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let n = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof n == "string" && (n = n !== "Off", t.setValue(s, {
      value: n
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return Za.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, n && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: h
      } = a.target;
      for (const l of this._getElementsByName(o, s)) {
        const c = h && l.exportValue === e.exportValue;
        l.domElement && (l.domElement.checked = c), t.setValue(l.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: h
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(h) {
          h.target.checked = h.detail.value !== "Off", t.setValue(s, {
            value: h.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
};
f(Ty, "CheckboxWidgetAnnotationElement");
let Zg = Ty;
const xy = class xy extends yn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let n = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof n == "string" && (n = n !== e.buttonValue, t.setValue(s, {
      value: n
    })), n)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (Za.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, n && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: h
      } = a.target;
      for (const l of this._getElementsByName(o, s))
        t.setValue(l.id, {
          value: !1
        });
      t.setValue(s, {
        value: h
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const h = {
          value: /* @__PURE__ */ f((l) => {
            const c = a === l.detail.value;
            for (const d of this._getElementsByName(l.target.name)) {
              const p = c && d.id === s;
              d.domElement && (d.domElement.checked = p), t.setValue(d.id, {
                value: p
              });
            }
          }, "value")
        };
        this._dispatchEventFromSandbox(h, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
};
f(xy, "RadioButtonWidgetAnnotationElement");
let ef = xy;
const _y = class _y extends Jl {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
};
f(_y, "PushButtonWidgetAnnotationElement");
let tm = _y;
const ky = class ky extends yn {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), n = document.createElement("select");
    Za.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, this._setRequired(n, this.data.required), n.name = this.data.fieldName, n.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (n.size = this.data.options.length, this.data.multiSelect && (n.multiple = !0)), n.addEventListener("resetform", (d) => {
      const p = this.data.defaultFieldValue;
      for (const y of n.options)
        y.selected = y.value === p;
    });
    const a = /* @__PURE__ */ f((d, p) => {
      const y = p.replaceAll(" ", " ");
      d.textContent = y, y !== p && d.setAttribute("display-value", p);
    }, "fixDisplayValue");
    for (const d of this.data.options) {
      const p = document.createElement("option");
      a(p, d.displayValue), p.value = d.exportValue, s.value.includes(d.exportValue) && (p.setAttribute("selected", !0), r = !1), n.append(p);
    }
    let o = null;
    if (r) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), n.prepend(d), o = /* @__PURE__ */ f(() => {
        d.remove(), n.removeEventListener("input", o), o = null;
      }, "removeEmptyEntry"), n.addEventListener("input", o);
    }
    const h = /* @__PURE__ */ f((d) => {
      const p = d ? "value" : "textContent", {
        options: y,
        multiple: A
      } = n;
      return A ? Array.prototype.filter.call(y, (w) => w.selected).map((w) => w[p]) : y.selectedIndex === -1 ? null : y[y.selectedIndex][p];
    }, "getValue");
    let l = h(!1);
    const c = /* @__PURE__ */ f((d) => {
      const p = d.target.options;
      return Array.prototype.map.call(p, (y) => ({
        displayValue: y.getAttribute("display-value") || y.textContent,
        exportValue: y.value
      }));
    }, "getItems");
    return this.enableScripting && this.hasJSActions ? (n.addEventListener("updatefromsandbox", (d) => {
      const p = {
        value(y) {
          o?.();
          const A = y.detail.value, w = new Set(Array.isArray(A) ? A : [A]);
          for (const S of n.options)
            S.selected = w.has(S.value);
          t.setValue(e, {
            value: h(!0)
          }), l = h(!1);
        },
        multipleSelection(y) {
          n.multiple = !0;
        },
        remove(y) {
          const A = n.options, w = y.detail.remove;
          A[w].selected = !1, n.remove(w), A.length > 0 && Array.prototype.findIndex.call(A, (v) => v.selected) === -1 && (A[0].selected = !0), t.setValue(e, {
            value: h(!0),
            items: c(y)
          }), l = h(!1);
        },
        clear(y) {
          for (; n.length !== 0; )
            n.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = h(!1);
        },
        insert(y) {
          const {
            index: A,
            displayValue: w,
            exportValue: S
          } = y.detail.insert, v = n.children[A], E = document.createElement("option");
          a(E, w), E.value = S, v ? v.before(E) : n.append(E), t.setValue(e, {
            value: h(!0),
            items: c(y)
          }), l = h(!1);
        },
        items(y) {
          const {
            items: A
          } = y.detail;
          for (; n.length !== 0; )
            n.remove(0);
          for (const w of A) {
            const {
              displayValue: S,
              exportValue: v
            } = w, E = document.createElement("option");
            a(E, S), E.value = v, n.append(E);
          }
          n.options.length > 0 && (n.options[0].selected = !0), t.setValue(e, {
            value: h(!0),
            items: c(y)
          }), l = h(!1);
        },
        indices(y) {
          const A = new Set(y.detail.indices);
          for (const w of y.target.options)
            w.selected = A.has(w.index);
          t.setValue(e, {
            value: h(!0)
          }), l = h(!1);
        },
        editable(y) {
          y.target.disabled = !y.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(p, d);
    }), n.addEventListener("input", (d) => {
      const p = h(!0), y = h(!1);
      t.setValue(e, {
        value: p
      }), d.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: y,
          changeEx: p,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(n, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : n.addEventListener("input", function(d) {
      t.setValue(e, {
        value: h(!0)
      });
    }), this.data.combo && this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
};
f(ky, "ChoiceWidgetAnnotationElement");
let em = ky;
var gd, sm;
const My = class My extends Mt {
  constructor(e) {
    const {
      data: s,
      elements: n,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Mt._hasPopupData(s)
    });
    m(this, gd);
    if (this.elements = n, a && Mt._hasPopupData(s)) {
      const o = this.popup = b(this, gd, sm).call(this);
      for (const h of n)
        h.popup = o;
    } else
      this.popup = null;
  }
  render() {
    const {
      container: e
    } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const s = this.popup = b(this, gd, sm).call(this), n = [];
    for (const r of this.elements)
      r.popup = s, r.container.ariaHasPopup = "dialog", n.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", n.map((r) => `${fo}${r}`).join(",")), this.container;
  }
};
gd = new WeakSet(), sm = /* @__PURE__ */ f(function() {
  return new im({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager
  });
}, "#createPopup"), f(My, "PopupAnnotationElement");
let Zl = My;
var Qe, ar, Ff, Of, wh, vh, Lt, mi, or, Ta, Sh, Eh, bi, Je, en, sn, Rt, nn, hr, md, rn, Ch, xa, lr, se, cr, Y, wu, nm, rm, am, vu, om, G0, $0, z0, j0, Su, Eu, hm;
const Py = class Py {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: n,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: h,
    rect: l,
    parentRect: c,
    open: d,
    commentManager: p = null
  }) {
    m(this, Y);
    m(this, Qe, null);
    m(this, ar, b(this, Y, z0).bind(this));
    m(this, Ff, b(this, Y, hm).bind(this));
    m(this, Of, b(this, Y, Eu).bind(this));
    m(this, wh, b(this, Y, Su).bind(this));
    m(this, vh, null);
    m(this, Lt, null);
    m(this, mi, null);
    m(this, or, null);
    m(this, Ta, null);
    m(this, Sh, null);
    m(this, Eh, null);
    m(this, bi, !1);
    m(this, Je, null);
    m(this, en, null);
    m(this, sn, null);
    m(this, Rt, null);
    m(this, nn, null);
    m(this, hr, null);
    m(this, md, null);
    m(this, rn, null);
    m(this, Ch, null);
    m(this, xa, null);
    m(this, lr, !1);
    m(this, se, null);
    m(this, cr, null);
    u(this, Lt, t), u(this, Ch, n), u(this, mi, a), u(this, rn, o), u(this, Sh, h), u(this, vh, e), u(this, md, l), u(this, Eh, c), u(this, Ta, s), u(this, Qe, p), u(this, se, s[0]), u(this, or, zl.toDateObject(r)), this.trigger = s.flatMap((y) => y.getElementsToTriggerPopup()), p || (b(this, Y, wu).call(this), i(this, Lt).hidden = !0, d && b(this, Y, Su).call(this));
  }
  renderCommentButton() {
    if (i(this, Rt)) {
      i(this, Rt).parentNode || i(this, se).container.after(i(this, Rt));
      return;
    }
    if (i(this, nn) || b(this, Y, nm).call(this), !i(this, nn))
      return;
    const {
      signal: t
    } = u(this, en, new AbortController()), e = i(this, se).hasOwnCommentButton, s = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !0, void 0, !e);
    }, "togglePopup"), n = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !1, !0, !e);
    }, "showPopup"), r = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !1, !1);
    }, "hidePopup");
    if (e) {
      u(this, Rt, i(this, se).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", i(this, ar), {
          signal: t
        }), a.addEventListener("click", s, {
          signal: t
        }), a.addEventListener("pointerenter", n, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = u(this, Rt, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = i(this, se).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), b(this, Y, am).call(this), b(this, Y, rm).call(this), a.addEventListener("keydown", i(this, ar), {
        signal: t
      }), a.addEventListener("click", s, {
        signal: t
      }), a.addEventListener("pointerenter", n, {
        signal: t
      }), a.addEventListener("pointerleave", r, {
        signal: t
      }), o.after(a);
    }
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: e
    } = i(this, se).commentData;
    return t ? i(this, Sh)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      i(this, Rt)?.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: e,
      opacity: s,
      creationDate: n,
      modificationDate: r
    } = i(this, se).commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: e,
      opacity: s,
      creationDate: n,
      modificationDate: r
    };
  }
  get elementBeforePopup() {
    return i(this, Rt);
  }
  get comment() {
    return i(this, cr) || u(this, cr, i(this, se).commentText), i(this, cr);
  }
  set comment(t) {
    t !== this.comment && (i(this, se).commentText = u(this, cr, t));
  }
  focus() {
    i(this, se).container?.focus();
  }
  get parentBoundingClientRect() {
    return i(this, se).layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    i(this, Rt) && (i(this, Rt).classList.toggle("selected", t), i(this, Rt).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    i(this, Rt).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (i(this, hr))
      return i(this, hr);
    const {
      x: t,
      y: e,
      height: s
    } = i(this, Rt).getBoundingClientRect(), {
      x: n,
      y: r,
      width: a,
      height: o
    } = i(this, se).layer.getBoundingClientRect();
    return [(t - n) / a, (e + s - r) / o];
  }
  set commentPopupPosition(t) {
    u(this, hr, t);
  }
  hasDefaultPopupPosition() {
    return i(this, hr) === null;
  }
  get commentButtonPosition() {
    return i(this, nn);
  }
  get commentButtonWidth() {
    return i(this, Rt).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = i(this, hr) || this.commentButtonPosition.map((l) => l / 100), n = this.parentBoundingClientRect, {
      x: r,
      y: a,
      width: o,
      height: h
    } = n;
    i(this, Qe).showDialog(null, this, r + e * o, a + s * h, {
      ...t,
      parentDimensions: n
    });
  }
  render() {
    if (i(this, Je))
      return;
    const t = u(this, Je, document.createElement("div"));
    if (t.className = "popup", i(this, vh)) {
      const s = t.style.outlineColor = D.makeHexColor(...i(this, vh));
      t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", i(this, Ch)?.str) {
      const s = document.createElement("span");
      s.className = "title", e.append(s), {
        dir: s.dir,
        str: s.textContent
      } = i(this, Ch);
    }
    if (t.append(e), i(this, or)) {
      const s = document.createElement("time");
      s.className = "popupDate", s.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: i(this, or).valueOf()
      })), s.dateTime = i(this, or).toISOString(), e.append(s);
    }
    PA({
      html: i(this, Y, vu) || i(this, mi).str,
      dir: i(this, mi)?.dir,
      className: "popupContent"
    }, t), i(this, Lt).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }) {
    if (i(this, Qe)) {
      s ? (this.remove(), u(this, cr, null)) : e && (e.deleted ? this.remove() : (b(this, Y, am).call(this), u(this, cr, e.text))), t && (u(this, nn, null), b(this, Y, nm).call(this), b(this, Y, rm).call(this));
      return;
    }
    if (s || e?.deleted) {
      this.remove();
      return;
    }
    b(this, Y, wu).call(this), i(this, xa) || u(this, xa, {
      contentsObj: i(this, mi),
      richText: i(this, rn)
    }), t && u(this, sn, null), e && e.text && (u(this, rn, b(this, Y, $0).call(this, e.text)), u(this, or, zl.toDateObject(e.date)), u(this, mi, null)), i(this, Je)?.remove(), u(this, Je, null);
  }
  resetEdited() {
    i(this, xa) && ({
      contentsObj: zt(this, mi)._,
      richText: zt(this, rn)._
    } = i(this, xa), u(this, xa, null), i(this, Je)?.remove(), u(this, Je, null), u(this, sn, null));
  }
  remove() {
    if (i(this, en)?.abort(), u(this, en, null), i(this, Je)?.remove(), u(this, Je, null), u(this, lr, !1), u(this, bi, !1), i(this, Rt)?.remove(), u(this, Rt, null), this.trigger)
      for (const t of this.trigger)
        t.classList.remove("popupTriggerArea");
  }
  forceHide() {
    u(this, lr, this.isVisible), i(this, lr) && (i(this, Lt).hidden = !0);
  }
  maybeShow() {
    i(this, Qe) || (b(this, Y, wu).call(this), i(this, lr) && (i(this, Je) || b(this, Y, Eu).call(this), u(this, lr, !1), i(this, Lt).hidden = !1));
  }
  get isVisible() {
    return i(this, Qe) ? !1 : i(this, Lt).hidden === !1;
  }
};
Qe = new WeakMap(), ar = new WeakMap(), Ff = new WeakMap(), Of = new WeakMap(), wh = new WeakMap(), vh = new WeakMap(), Lt = new WeakMap(), mi = new WeakMap(), or = new WeakMap(), Ta = new WeakMap(), Sh = new WeakMap(), Eh = new WeakMap(), bi = new WeakMap(), Je = new WeakMap(), en = new WeakMap(), sn = new WeakMap(), Rt = new WeakMap(), nn = new WeakMap(), hr = new WeakMap(), md = new WeakMap(), rn = new WeakMap(), Ch = new WeakMap(), xa = new WeakMap(), lr = new WeakMap(), se = new WeakMap(), cr = new WeakMap(), Y = new WeakSet(), wu = /* @__PURE__ */ f(function() {
  if (i(this, en))
    return;
  u(this, en, new AbortController());
  const {
    signal: t
  } = i(this, en);
  for (const e of this.trigger)
    e.addEventListener("click", i(this, wh), {
      signal: t
    }), e.addEventListener("pointerenter", i(this, Of), {
      signal: t
    }), e.addEventListener("pointerleave", i(this, Ff), {
      signal: t
    }), e.classList.add("popupTriggerArea");
  for (const e of i(this, Ta))
    e.container?.addEventListener("keydown", i(this, ar), {
      signal: t
    });
}, "#addEventListeners"), nm = /* @__PURE__ */ f(function() {
  const t = i(this, Ta).find((e) => e.hasCommentButton);
  t && u(this, nn, t._normalizePoint(t.commentButtonPosition));
}, "#setCommentButtonPosition"), rm = /* @__PURE__ */ f(function() {
  if (i(this, se).extraPopupElement && !i(this, se).editor)
    return;
  i(this, Rt) || this.renderCommentButton();
  const [t, e] = i(this, nn), {
    style: s
  } = i(this, Rt);
  s.left = `calc(${t}%)`, s.top = `calc(${e}% - var(--comment-button-dim))`;
}, "#updateCommentButtonPosition"), am = /* @__PURE__ */ f(function() {
  i(this, se).extraPopupElement || (i(this, Rt) || this.renderCommentButton(), i(this, Rt).style.backgroundColor = this.commentButtonColor || "");
}, "#updateColor"), vu = /* @__PURE__ */ f(function() {
  const t = i(this, rn), e = i(this, mi);
  return t?.str && (!e?.str || e.str === t.str) && i(this, rn).html || null;
}, "#html"), om = /* @__PURE__ */ f(function() {
  return i(this, Y, vu)?.attributes?.style?.fontSize || 0;
}, "#fontSize"), G0 = /* @__PURE__ */ f(function() {
  return i(this, Y, vu)?.attributes?.style?.color || null;
}, "#fontColor"), $0 = /* @__PURE__ */ f(function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, n = {
    style: {
      color: i(this, Y, G0),
      fontSize: i(this, Y, om) ? `calc(${i(this, Y, om)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: n
    });
  return s;
}, "#makePopupContent"), z0 = /* @__PURE__ */ f(function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && i(this, bi)) && b(this, Y, Su).call(this);
}, "#keyDown"), j0 = /* @__PURE__ */ f(function() {
  if (i(this, sn) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: n,
        pageY: r
      }
    }
  } = i(this, Sh);
  let a = !!i(this, Eh), o = a ? i(this, Eh) : i(this, md);
  for (const A of i(this, Ta))
    if (!o || D.intersect(A.data.rect, o) !== null) {
      o = A.data.rect, a = !0;
      break;
    }
  const h = D.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, d = h[0] + c, p = h[1];
  u(this, sn, [100 * (d - n) / e, 100 * (p - r) / s]);
  const {
    style: y
  } = i(this, Lt);
  y.left = `${i(this, sn)[0]}%`, y.top = `${i(this, sn)[1]}%`;
}, "#setPosition"), Su = /* @__PURE__ */ f(function() {
  if (i(this, Qe)) {
    i(this, Qe).toggleCommentPopup(this, !1);
    return;
  }
  u(this, bi, !i(this, bi)), i(this, bi) ? (b(this, Y, Eu).call(this), i(this, Lt).addEventListener("click", i(this, wh)), i(this, Lt).addEventListener("keydown", i(this, ar))) : (b(this, Y, hm).call(this), i(this, Lt).removeEventListener("click", i(this, wh)), i(this, Lt).removeEventListener("keydown", i(this, ar)));
}, "#toggle"), Eu = /* @__PURE__ */ f(function() {
  i(this, Je) || this.render(), this.isVisible ? i(this, bi) && i(this, Lt).classList.add("focused") : (b(this, Y, j0).call(this), i(this, Lt).hidden = !1, i(this, Lt).style.zIndex = parseInt(i(this, Lt).style.zIndex) + 1e3);
}, "#show"), hm = /* @__PURE__ */ f(function() {
  i(this, Lt).classList.remove("focused"), !(i(this, bi) || !this.isVisible) && (i(this, Lt).hidden = !0, i(this, Lt).style.zIndex = parseInt(i(this, Lt).style.zIndex) - 1e3);
}, "#hide"), f(Py, "PopupElement");
let im = Py;
const Iy = class Iy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = z.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = this.contentElement = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
};
f(Iy, "FreeTextAnnotationElement");
let sf = Iy;
var bd;
const Dy = class Dy extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, bd, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: n
    } = this, r = this.svgFactory.create(s, n, !0), a = u(this, bd, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, bd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
bd = new WeakMap(), f(Dy, "LineAnnotationElement");
let lm = Dy;
var yd;
const Ly = class Ly extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, yd, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: n
    } = this, r = this.svgFactory.create(s, n, !0), a = e.borderStyle.width, o = u(this, yd, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", n - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, yd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
yd = new WeakMap(), f(Ly, "SquareAnnotationElement");
let cm = Ly;
var Ad;
const Ry = class Ry extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Ad, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: n
    } = this, r = this.svgFactory.create(s, n, !0), a = e.borderStyle.width, o = u(this, Ad, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", n / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", n / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, Ad);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
Ad = new WeakMap(), f(Ry, "CircleAnnotationElement");
let dm = Ry;
var wd;
const Ny = class Ny extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, wd, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: n,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!s)
      return this.container;
    const h = this.svgFactory.create(a, o, !0);
    let l = [];
    for (let d = 0, p = s.length; d < p; d += 2) {
      const y = s[d] - e[0], A = e[3] - s[d + 1];
      l.push(`${y},${A}`);
    }
    l = l.join(" ");
    const c = u(this, wd, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", l), c.setAttribute("stroke-width", n.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), h.append(c), this.container.append(h), !r && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, wd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
wd = new WeakMap(), f(Ny, "PolylineAnnotationElement");
let nf = Ny;
const By = class By extends nf {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
};
f(By, "PolygonAnnotationElement");
let um = By;
const Fy = class Fy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
};
f(Fy, "CaretAnnotationElement");
let fm = Fy;
var vd, _a, Sd, pm;
const Oy = class Oy extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Sd);
    m(this, vd, null);
    m(this, _a, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? z.HIGHLIGHT : z.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: n,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: h,
      height: l
    } = b(this, Sd, pm).call(this, s, e), c = this.svgFactory.create(h, l, !0), d = u(this, vd, this.svgFactory.createElement("svg:g"));
    c.append(d), d.setAttribute("stroke-width", r.width || 1), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.setAttribute("stroke-miterlimit", 10), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), d.setAttribute("transform", o);
    for (let p = 0, y = n.length; p < y; p++) {
      const A = this.svgFactory.createElement(this.svgElementName);
      i(this, _a).push(A), A.setAttribute("points", n[p].join(",")), d.append(A);
    }
    return !a && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: n,
      rect: r
    } = e, a = i(this, vd);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), n)
      for (let o = 0, h = i(this, _a).length; o < h; o++)
        i(this, _a)[o].setAttribute("points", n[o].join(","));
    if (r) {
      const {
        transform: o,
        width: h,
        height: l
      } = b(this, Sd, pm).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${h} ${l}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return i(this, _a);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
vd = new WeakMap(), _a = new WeakMap(), Sd = new WeakSet(), pm = /* @__PURE__ */ f(function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
}, "#getTransform"), f(Oy, "InkAnnotationElement");
let tc = Oy;
const Hy = class Hy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = z.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
};
f(Hy, "HighlightAnnotationElement");
let rf = Hy;
const Uy = class Uy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
};
f(Uy, "UnderlineAnnotationElement");
let gm = Uy;
const Gy = class Gy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
};
f(Gy, "SquigglyAnnotationElement");
let mm = Gy;
const $y = class $y extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
};
f($y, "StrikeOutAnnotationElement");
let bm = $y;
const zy = class zy extends Mt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = z.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
};
f(zy, "StampAnnotationElement");
let af = zy;
var Ed, Cd, Am;
const jy = class jy extends Mt {
  constructor(e) {
    super(e, {
      isRenderable: !0
    });
    m(this, Cd);
    m(this, Ed, null);
    const {
      file: s
    } = this.data;
    this.filename = s.filename, this.content = s.content, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...s
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let n;
    s.hasAppearance || s.fillAlpha === 0 ? n = document.createElement("div") : (n = document.createElement("img"), n.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (n.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), n.addEventListener("dblclick", b(this, Cd, Am).bind(this)), u(this, Ed, n);
    const {
      isMac: r
    } = Gt.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Cd, Am).call(this);
    }), !s.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = !0, this._createPopup()) : n.classList.add("popupTriggerArea"), e.append(n), e;
  }
  getElementsToTriggerPopup() {
    return i(this, Ed);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
Ed = new WeakMap(), Cd = new WeakSet(), Am = /* @__PURE__ */ f(function() {
  this.downloadManager?.openOrDownloadData(this.content, this.filename);
}, "#download"), f(jy, "FileAttachmentAnnotationElement");
let ym = jy;
var ka, Ma, Th, dr, Td, Pa, Ze, xd, pn, Cu, vm;
const Hf = class Hf {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: n,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: h,
    linkService: l,
    annotationStorage: c
  }) {
    m(this, pn);
    m(this, ka, null);
    m(this, Ma, null);
    m(this, Th, null);
    m(this, dr, /* @__PURE__ */ new Map());
    m(this, Td, null);
    m(this, Pa, null);
    m(this, Ze, []);
    m(this, xd, !1);
    this.div = t, u(this, ka, e), u(this, Ma, s), u(this, Td, o || null), u(this, Pa, l || null), u(this, Th, c || new Vl()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = n, this._commentManager = h || null;
  }
  hasEditableAnnotations() {
    return i(this, dr).size > 0;
  }
  async render(t) {
    const {
      annotations: e
    } = t, s = this.div;
    qa(s, this.viewport);
    const n = /* @__PURE__ */ new Map(), r = [], a = {
      data: null,
      layer: s,
      linkService: i(this, Pa),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Qh(),
      annotationStorage: i(this, Th),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const o of e) {
      if (o.noHTML)
        continue;
      const h = o.annotationType === Vt.POPUP;
      if (h) {
        const d = n.get(o.id);
        if (!d)
          continue;
        if (!this._commentManager) {
          r.push(o);
          continue;
        }
        a.elements = d;
      } else if (o.rect[2] === o.rect[0] || o.rect[3] === o.rect[1])
        continue;
      a.data = o;
      const l = Pl.create(a);
      if (!l.isRenderable)
        continue;
      h || (i(this, Ze).push(l), o.popupRef && n.getOrInsertComputed(o.popupRef, Qm).push(l));
      const c = l.render();
      o.hidden && (c.style.visibility = "hidden"), l._isEditable && (i(this, dr).set(l.data.id, l), this._annotationEditorUIManager?.renderAnnotationElement(l));
    }
    await b(this, pn, Cu).call(this);
    for (const o of r) {
      const h = a.elements = n.get(o.id);
      a.data = o;
      const l = Pl.create(a);
      if (!l.isRenderable)
        continue;
      const c = l.render();
      l.contentElement.id = `${fo}${o.id}`, o.hidden && (c.style.visibility = "hidden"), h.at(-1).container.after(c);
    }
    b(this, pn, vm).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: i(this, Pa),
      svgFactory: new Qh(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle ||= Hf._defaultBorderStyle, e.data = s;
      const n = Pl.create(e);
      n.isRenderable && (n.render(), n.contentElement.id = `${fo}${s.id}`, i(this, Ze).push(n));
    }
    await b(this, pn, Cu).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, qa(e, {
      rotation: t.rotation
    }), b(this, pn, vm).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return i(this, dr).values();
  }
  getEditableAnnotation(t) {
    return i(this, dr).get(t);
  }
  addFakeAnnotation(t) {
    const {
      div: e
    } = this, {
      id: s,
      rotation: n
    } = t, r = new Kg({
      data: {
        id: s,
        rect: t.getPDFRect(),
        rotation: n
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: i(this, Pa),
      annotationStorage: i(this, Th)
    });
    return r.render(), r.contentElement.id = `${fo}${s}`, r.createOrUpdatePopup(), i(this, Ze).push(r), r;
  }
  removeAnnotation(t) {
    const e = i(this, Ze).findIndex((n) => n.data.id === t);
    if (e < 0)
      return;
    const [s] = i(this, Ze).splice(e, 1);
    i(this, ka)?.removePointerInTextLayer(s.contentElement);
  }
  updateFakeAnnotations(t) {
    if (t.length !== 0) {
      for (const e of t)
        e.updateFakeAnnotationElement(this);
      b(this, pn, Cu).call(this);
    }
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  static get _defaultBorderStyle() {
    return V(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: io.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
ka = new WeakMap(), Ma = new WeakMap(), Th = new WeakMap(), dr = new WeakMap(), Td = new WeakMap(), Pa = new WeakMap(), Ze = new WeakMap(), xd = new WeakMap(), pn = new WeakSet(), Cu = /* @__PURE__ */ f(async function() {
  if (i(this, Ze).length === 0)
    return;
  this.div.replaceChildren();
  const t = [];
  if (!i(this, xd)) {
    u(this, xd, !0);
    for (const {
      contentElement: s,
      data: {
        id: n
      }
    } of i(this, Ze)) {
      const r = s.id = `${fo}${n}`;
      t.push(i(this, Td)?.getAriaAttributes(r).then((a) => {
        if (a)
          for (const [o, h] of a)
            s.setAttribute(o, h);
      }));
    }
  }
  i(this, Ze).sort(({
    data: {
      rect: [s, n, r, a]
    }
  }, {
    data: {
      rect: [o, h, l, c]
    }
  }) => {
    if (s === r && n === a)
      return 1;
    if (o === l && h === c)
      return -1;
    const d = a, p = n, y = (n + a) / 2, A = c, w = h, S = (h + c) / 2;
    if (y >= A && S <= p)
      return -1;
    if (S >= d && y <= w)
      return 1;
    const v = (s + r) / 2, E = (o + l) / 2;
    return v - E;
  });
  const e = document.createDocumentFragment();
  for (const s of i(this, Ze))
    e.append(s.container), this._commentManager ? (s.extraPopupElement?.popup || s.popup)?.renderCommentButton() : s.extraPopupElement && e.append(s.extraPopupElement.render());
  if (this.div.append(e), await Promise.all(t), i(this, ka))
    for (const s of i(this, Ze))
      i(this, ka).addPointerInTextLayer(s.contentElement, !1);
}, "#addElementsToDOM"), vm = /* @__PURE__ */ f(function() {
  if (!i(this, Ma))
    return;
  const t = this.div;
  for (const [e, s] of i(this, Ma)) {
    const n = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!n)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: r
    } = n;
    r ? r.nodeName === "CANVAS" ? r.replaceWith(s) : r.classList.contains("annotationContent") ? r.after(s) : r.before(s) : n.append(s);
    const a = i(this, dr).get(e);
    a && (a._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e, n.id, s), a._hasNoCanvas = !1) : a.canvas = s);
  }
  i(this, Ma).clear();
}, "#setAnnotationCanvasMap"), f(Hf, "AnnotationLayer");
let wm = Hf;
const Zd = /\r\n?|\n/g;
var ts, _d, Ia, es, Yt, V0, W0, X0, Tu, gn, xu, _u, Y0, Em, K0;
const yt = class yt extends wt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, Yt);
    m(this, ts, "");
    m(this, _d, `${this.id}-editor`);
    m(this, Ia, null);
    m(this, es);
    M(this, "_colorPicker", null);
    this.color = e.color || yt._defaultColor || wt._defaultLineColor, u(this, es, e.fontSize || yt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert"), this.canAddComment = !1;
  }
  static get _keyboardManager() {
    const e = yt.prototype, s = /* @__PURE__ */ f((a) => a.isEmpty(), "arrowChecker"), n = Ja.TRANSLATE_SMALL, r = Ja.TRANSLATE_BIG;
    return V(this, "_keyboardManager", new Qa([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-n, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [n, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -n],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, n],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    wt.initialize(e, s);
    const n = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(n.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Z.FREETEXT_SIZE:
        yt._defaultFontSize = s;
        break;
      case Z.FREETEXT_COLOR:
        yt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case Z.FREETEXT_SIZE:
        b(this, Yt, V0).call(this, s);
        break;
      case Z.FREETEXT_COLOR:
        b(this, Yt, W0).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Z.FREETEXT_SIZE, yt._defaultFontSize], [Z.FREETEXT_COLOR, yt._defaultColor || wt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[Z.FREETEXT_SIZE, i(this, es)], [Z.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker ||= new Zu(this), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Z.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    this.editorDiv.style.color = this.color, this._colorPicker?.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-yt._internalPadding * e, -(yt._internalPadding + i(this, es)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), u(this, Ia, new AbortController());
    const e = this._uiManager.combinedSignal(i(this, Ia));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", i(this, _d)), this._isDraggable = !0, i(this, Ia)?.abort(), u(this, Ia, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = i(this, ts), s = u(this, ts, b(this, Yt, X0).call(this).trimEnd());
    if (e === s)
      return;
    const n = /* @__PURE__ */ f((r) => {
      if (u(this, ts, r), !r) {
        this.remove();
        return;
      }
      b(this, Yt, _u).call(this), this._uiManager.rebuild(this), b(this, Yt, Tu).call(this);
    }, "setText");
    this.addCommands({
      cmd: /* @__PURE__ */ f(() => {
        n(s);
      }, "cmd"),
      undo: /* @__PURE__ */ f(() => {
        n(e);
      }, "undo"),
      mustExec: !1
    }), b(this, Yt, Tu).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    yt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", i(this, _d)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: n
    } = this.editorDiv;
    if (n.fontSize = `calc(${i(this, es)}px * var(--total-scale-factor))`, n.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [h, l] = this.getInitialTranslation();
        [h, l] = this.pageTranslationToScreen(h, l);
        const [c, d] = this.pageDimensions, [p, y] = this.pageTranslation;
        let A, w;
        switch (this.rotation) {
          case 0:
            A = e + (o[0] - p) / c, w = s + this.height - (o[1] - y) / d;
            break;
          case 90:
            A = e + (o[0] - p) / c, w = s - (o[1] - y) / d, [h, l] = [l, -h];
            break;
          case 180:
            A = e - this.width + (o[0] - p) / c, w = s - (o[1] - y) / d, [h, l] = [-h, -l];
            break;
          case 270:
            A = e + (o[0] - p - this.height * d) / c, w = s + (o[1] - y - this.width * c) / d, [h, l] = [-l, h];
            break;
        }
        this.setAt(A * r, w * a, h, l);
      } else
        this._moveAfterPaste(e, s);
      b(this, Yt, _u).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var A, w, S;
    const s = e.clipboardData || window.clipboardData, {
      types: n
    } = s;
    if (n.length === 1 && n[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(A = yt, gn, Em).call(A, s.getData("text") || "").replaceAll(Zd, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: h,
      startOffset: l
    } = o, c = [], d = [];
    if (h.nodeType === Node.TEXT_NODE) {
      const v = h.parentElement;
      if (d.push(h.nodeValue.slice(l).replaceAll(Zd, "")), v !== this.editorDiv) {
        let E = c;
        for (const C of this.editorDiv.childNodes) {
          if (C === v) {
            E = d;
            continue;
          }
          E.push(b(w = yt, gn, xu).call(w, C));
        }
      }
      c.push(h.nodeValue.slice(0, l).replaceAll(Zd, ""));
    } else if (h === this.editorDiv) {
      let v = c, E = 0;
      for (const C of this.editorDiv.childNodes)
        E++ === l && (v = d), v.push(b(S = yt, gn, xu).call(S, C));
    }
    u(this, ts, `${c.join(`
`)}${r}${d.join(`
`)}`), b(this, Yt, _u).call(this);
    const p = new Range();
    let y = Math.sumPrecise(c.map((v) => v.length));
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const E = v.nodeValue.length;
        if (y <= E) {
          p.setStart(v, y), p.setEnd(v, y);
          break;
        }
        y -= E;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = yt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, n) {
    var o;
    let r = null;
    if (e instanceof sf) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: h,
            fontColor: l
          },
          rect: c,
          rotation: d,
          id: p,
          popupRef: y,
          richText: A,
          contentsObj: w,
          creationDate: S,
          modificationDate: v
        },
        textContent: E,
        textPosition: C,
        parent: {
          page: {
            pageNumber: T
          }
        }
      } = e;
      if (!E || E.length === 0)
        return null;
      r = e = {
        annotationType: z.FREETEXT,
        color: Array.from(l),
        fontSize: h,
        value: E.join(`
`),
        position: C,
        pageIndex: T - 1,
        rect: c.slice(0),
        rotation: d,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: y,
        comment: w?.str || null,
        richText: A,
        creationDate: S,
        modificationDate: v
      };
    }
    const a = await super.deserialize(e, s, n);
    return u(a, es, e.fontSize), a.color = D.makeHexColor(...e.color), u(a, ts, b(o = yt, gn, Em).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = wt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), n = Object.assign(super.serialize(e), {
      color: s,
      fontSize: i(this, es),
      value: b(this, Yt, Y0).call(this)
    });
    return this.addComment(n), e ? (n.isCopy = !0, n) : this.annotationElementId && !b(this, Yt, K0).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (!s)
      return null;
    const {
      style: n
    } = s;
    n.fontSize = `calc(${i(this, es)}px * var(--total-scale-factor))`, n.color = this.color, s.replaceChildren();
    for (const r of i(this, ts).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: i(this, ts)
      }
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
ts = new WeakMap(), _d = new WeakMap(), Ia = new WeakMap(), es = new WeakMap(), Yt = new WeakSet(), V0 = /* @__PURE__ */ f(function(e) {
  const s = /* @__PURE__ */ f((r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - i(this, es)) * this.parentScale), u(this, es, r), b(this, Yt, Tu).call(this);
  }, "setFontsize"), n = i(this, es);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Z.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, "#updateFontSize"), W0 = /* @__PURE__ */ f(function(e) {
  const s = /* @__PURE__ */ f((r) => {
    this.color = r, this.onUpdatedColor();
  }, "setColor"), n = this.color;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Z.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, "#updateColor"), X0 = /* @__PURE__ */ f(function() {
  var n;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    s?.nodeType === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(n = yt, gn, xu).call(n, r)), s = r);
  return e.join(`
`);
}, "#extractText"), Tu = /* @__PURE__ */ f(function() {
  const [e, s] = this.parentDimensions;
  let n;
  if (this.isAttachedToDOM)
    n = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, h = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), n = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", h);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = n.width / e, this.height = n.height / s) : (this.width = n.height / e, this.height = n.width / s), this.fixAndSetPosition();
}, "#setEditorDimensions"), gn = new WeakSet(), xu = /* @__PURE__ */ f(function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Zd, "");
}, "#getNodeContent"), _u = /* @__PURE__ */ f(function() {
  if (this.editorDiv.replaceChildren(), !!i(this, ts))
    for (const e of i(this, ts).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, "#setContent"), Y0 = /* @__PURE__ */ f(function() {
  return i(this, ts).replaceAll(" ", " ");
}, "#serializeContent"), Em = /* @__PURE__ */ f(function(e) {
  return e.replaceAll(" ", " ");
}, "#deserializeContent"), K0 = /* @__PURE__ */ f(function(e) {
  const {
    value: s,
    fontSize: n,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== n || e.color.some((o, h) => o !== r[h]) || e.pageIndex !== a;
}, "#hasElementChanged"), m(yt, gn), f(yt, "FreeTextEditor"), M(yt, "_freeTextDefaultContent", ""), M(yt, "_internalPadding", 0), M(yt, "_defaultColor", null), M(yt, "_defaultFontSize", 10), M(yt, "_type", "freetext"), M(yt, "_editorType", z.FREETEXT);
let Sm = yt;
const Uf = class Uf {
  toSVGPath() {
    rt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    rt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    rt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, n, r, a) {
    a ||= new Float32Array(t.length);
    for (let o = 0, h = t.length; o < h; o += 2)
      a[o] = e + t[o] * n, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, n, r, a) {
    a ||= new Float32Array(t.length);
    for (let o = 0, h = t.length; o < h; o += 2)
      a[o] = e + t[o + 1] * n, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, n) {
    n ||= new Float32Array(t.length);
    for (let r = 0, a = t.length; r < a; r += 2)
      n[r] = e + t[r], n[r + 1] = s + t[r + 1];
    return n;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, n, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / n];
      case 180:
        return [1 - t / s, 1 - e / n];
      case 270:
        return [e / s, 1 - t / n];
      default:
        return [t / s, e / n];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, n, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * n) / 6, (5 * s + r) / 6, (5 * n + a) / 6, (s + r) / 2, (n + a) / 2];
  }
};
f(Uf, "Outline"), M(Uf, "PRECISION", 1e-4);
let B = Uf;
var ss, zs, xh, _h, yi, q, Da, La, kd, Md, kh, Mh, ur, Pd, Gf, $f, Jt, El, q0, Q0, J0, Z0, tw, ew;
const si = class si {
  constructor({
    x: t,
    y: e
  }, s, n, r, a, o = 0) {
    m(this, Jt);
    m(this, ss);
    m(this, zs, []);
    m(this, xh);
    m(this, _h);
    m(this, yi, []);
    m(this, q, new Float32Array(18));
    m(this, Da);
    m(this, La);
    m(this, kd);
    m(this, Md);
    m(this, kh);
    m(this, Mh);
    m(this, ur, []);
    u(this, ss, s), u(this, Mh, r * n), u(this, _h, a), i(this, q).set([NaN, NaN, NaN, NaN, t, e], 6), u(this, xh, o), u(this, Md, i(si, Pd) * n), u(this, kd, i(si, $f) * n), u(this, kh, n), i(this, ur).push(t, e);
  }
  isEmpty() {
    return isNaN(i(this, q)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    u(this, Da, t), u(this, La, e);
    const [s, n, r, a] = i(this, ss);
    let [o, h, l, c] = i(this, q).subarray(8, 12);
    const d = t - l, p = e - c, y = Math.hypot(d, p);
    if (y < i(this, kd))
      return !1;
    const A = y - i(this, Md), w = A / y, S = w * d, v = w * p;
    let E = o, C = h;
    o = l, h = c, l += S, c += v, i(this, ur)?.push(t, e);
    const T = -v / A, x = S / A, _ = T * i(this, Mh), k = x * i(this, Mh);
    return i(this, q).set(i(this, q).subarray(2, 8), 0), i(this, q).set([l + _, c + k], 4), i(this, q).set(i(this, q).subarray(14, 18), 12), i(this, q).set([l - _, c - k], 16), isNaN(i(this, q)[6]) ? (i(this, yi).length === 0 && (i(this, q).set([o + _, h + k], 2), i(this, yi).push(NaN, NaN, NaN, NaN, (o + _ - s) / r, (h + k - n) / a), i(this, q).set([o - _, h - k], 14), i(this, zs).push(NaN, NaN, NaN, NaN, (o - _ - s) / r, (h - k - n) / a)), i(this, q).set([E, C, o, h, l, c], 6), !this.isEmpty()) : (i(this, q).set([E, C, o, h, l, c], 6), Math.abs(Math.atan2(C - h, E - o) - Math.atan2(v, S)) < Math.PI / 2 ? ([o, h, l, c] = i(this, q).subarray(2, 6), i(this, yi).push(NaN, NaN, NaN, NaN, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), [o, h, E, C] = i(this, q).subarray(14, 18), i(this, zs).push(NaN, NaN, NaN, NaN, ((E + o) / 2 - s) / r, ((C + h) / 2 - n) / a), !0) : ([E, C, o, h, l, c] = i(this, q).subarray(0, 6), i(this, yi).push(((E + 5 * o) / 6 - s) / r, ((C + 5 * h) / 6 - n) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - n) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), [l, c, o, h, E, C] = i(this, q).subarray(12, 18), i(this, zs).push(((E + 5 * o) / 6 - s) / r, ((C + 5 * h) / 6 - n) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - n) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = i(this, yi), e = i(this, zs);
    if (isNaN(i(this, q)[6]) && !this.isEmpty())
      return b(this, Jt, q0).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let n = 6; n < t.length; n += 6)
      isNaN(t[n]) ? s.push(`L${t[n + 4]} ${t[n + 5]}`) : s.push(`C${t[n]} ${t[n + 1]} ${t[n + 2]} ${t[n + 3]} ${t[n + 4]} ${t[n + 5]}`);
    b(this, Jt, J0).call(this, s);
    for (let n = e.length - 6; n >= 6; n -= 6)
      isNaN(e[n]) ? s.push(`L${e[n + 4]} ${e[n + 5]}`) : s.push(`C${e[n]} ${e[n + 1]} ${e[n + 2]} ${e[n + 3]} ${e[n + 4]} ${e[n + 5]}`);
    return b(this, Jt, Q0).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, n, r, a) {
    return new hf(t, e, s, n, r, a);
  }
  getOutlines() {
    const t = i(this, yi), e = i(this, zs), s = i(this, q), [n, r, a, o] = i(this, ss), h = new Float32Array((i(this, ur)?.length ?? 0) + 2);
    for (let d = 0, p = h.length - 2; d < p; d += 2)
      h[d] = (i(this, ur)[d] - n) / a, h[d + 1] = (i(this, ur)[d + 1] - r) / o;
    if (h[h.length - 2] = (i(this, Da) - n) / a, h[h.length - 1] = (i(this, La) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, Jt, Z0).call(this, h);
    const l = new Float32Array(i(this, yi).length + 24 + i(this, zs).length);
    let c = t.length;
    for (let d = 0; d < c; d += 2) {
      if (isNaN(t[d])) {
        l[d] = l[d + 1] = NaN;
        continue;
      }
      l[d] = t[d], l[d + 1] = t[d + 1];
    }
    c = b(this, Jt, ew).call(this, l, c);
    for (let d = e.length - 6; d >= 6; d -= 6)
      for (let p = 0; p < 6; p += 2) {
        if (isNaN(e[d + p])) {
          l[c] = l[c + 1] = NaN, c += 2;
          continue;
        }
        l[c] = e[d + p], l[c + 1] = e[d + p + 1], c += 2;
      }
    return b(this, Jt, tw).call(this, l, c), this.newFreeDrawOutline(l, h, i(this, ss), i(this, kh), i(this, xh), i(this, _h));
  }
};
ss = new WeakMap(), zs = new WeakMap(), xh = new WeakMap(), _h = new WeakMap(), yi = new WeakMap(), q = new WeakMap(), Da = new WeakMap(), La = new WeakMap(), kd = new WeakMap(), Md = new WeakMap(), kh = new WeakMap(), Mh = new WeakMap(), ur = new WeakMap(), Pd = new WeakMap(), Gf = new WeakMap(), $f = new WeakMap(), Jt = new WeakSet(), El = /* @__PURE__ */ f(function() {
  const t = i(this, q).subarray(4, 6), e = i(this, q).subarray(16, 18), [s, n, r, a] = i(this, ss);
  return [(i(this, Da) + (t[0] - e[0]) / 2 - s) / r, (i(this, La) + (t[1] - e[1]) / 2 - n) / a, (i(this, Da) + (e[0] - t[0]) / 2 - s) / r, (i(this, La) + (e[1] - t[1]) / 2 - n) / a];
}, "#getLastCoords"), q0 = /* @__PURE__ */ f(function() {
  const [t, e, s, n] = i(this, ss), [r, a, o, h] = b(this, Jt, El).call(this);
  return `M${(i(this, q)[2] - t) / s} ${(i(this, q)[3] - e) / n} L${(i(this, q)[4] - t) / s} ${(i(this, q)[5] - e) / n} L${r} ${a} L${o} ${h} L${(i(this, q)[16] - t) / s} ${(i(this, q)[17] - e) / n} L${(i(this, q)[14] - t) / s} ${(i(this, q)[15] - e) / n} Z`;
}, "#toSVGPathTwoPoints"), Q0 = /* @__PURE__ */ f(function(t) {
  const e = i(this, zs);
  t.push(`L${e[4]} ${e[5]} Z`);
}, "#toSVGPathStart"), J0 = /* @__PURE__ */ f(function(t) {
  const [e, s, n, r] = i(this, ss), a = i(this, q).subarray(4, 6), o = i(this, q).subarray(16, 18), [h, l, c, d] = b(this, Jt, El).call(this);
  t.push(`L${(a[0] - e) / n} ${(a[1] - s) / r} L${h} ${l} L${c} ${d} L${(o[0] - e) / n} ${(o[1] - s) / r}`);
}, "#toSVGPathEnd"), Z0 = /* @__PURE__ */ f(function(t) {
  const e = i(this, q), [s, n, r, a] = i(this, ss), [o, h, l, c] = b(this, Jt, El).call(this), d = new Float32Array(36);
  return d.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - n) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - n) / a, NaN, NaN, NaN, NaN, o, h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - n) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - n) / a], 0), this.newFreeDrawOutline(d, t, i(this, ss), i(this, kh), i(this, xh), i(this, _h));
}, "#getOutlineTwoPoints"), tw = /* @__PURE__ */ f(function(t, e) {
  const s = i(this, zs);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, "#getOutlineStart"), ew = /* @__PURE__ */ f(function(t, e) {
  const s = i(this, q).subarray(4, 6), n = i(this, q).subarray(16, 18), [r, a, o, h] = i(this, ss), [l, c, d, p] = b(this, Jt, El).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, d, p, NaN, NaN, NaN, NaN, (n[0] - r) / o, (n[1] - a) / h], e), e += 24;
}, "#getOutlineEnd"), f(si, "FreeDrawOutliner"), m(si, Pd, 8), m(si, Gf, 2), m(si, $f, i(si, Pd) + i(si, Gf));
let of = si;
var Ph, Ra, an, Id, is, Dd, Ut, zf, sw;
const Vy = class Vy extends B {
  constructor(e, s, n, r, a, o) {
    super();
    m(this, zf);
    m(this, Ph);
    m(this, Ra, new Float32Array(4));
    m(this, an);
    m(this, Id);
    m(this, is);
    m(this, Dd);
    m(this, Ut);
    u(this, Ut, e), u(this, is, s), u(this, Ph, n), u(this, Dd, r), u(this, an, a), u(this, Id, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], b(this, zf, sw).call(this, o);
    const [h, l, c, d] = i(this, Ra);
    for (let p = 0, y = e.length; p < y; p += 2)
      e[p] = (e[p] - h) / c, e[p + 1] = (e[p + 1] - l) / d;
    for (let p = 0, y = s.length; p < y; p += 2)
      s[p] = (s[p] - h) / c, s[p + 1] = (s[p + 1] - l) / d;
  }
  toSVGPath() {
    const e = [`M${i(this, Ut)[4]} ${i(this, Ut)[5]}`];
    for (let s = 6, n = i(this, Ut).length; s < n; s += 6) {
      if (isNaN(i(this, Ut)[s])) {
        e.push(`L${i(this, Ut)[s + 4]} ${i(this, Ut)[s + 5]}`);
        continue;
      }
      e.push(`C${i(this, Ut)[s]} ${i(this, Ut)[s + 1]} ${i(this, Ut)[s + 2]} ${i(this, Ut)[s + 3]} ${i(this, Ut)[s + 4]} ${i(this, Ut)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, n, r], a) {
    const o = n - e, h = r - s;
    let l, c;
    switch (a) {
      case 0:
        l = B._rescale(i(this, Ut), e, r, o, -h), c = B._rescale(i(this, is), e, r, o, -h);
        break;
      case 90:
        l = B._rescaleAndSwap(i(this, Ut), e, s, o, h), c = B._rescaleAndSwap(i(this, is), e, s, o, h);
        break;
      case 180:
        l = B._rescale(i(this, Ut), n, s, -o, h), c = B._rescale(i(this, is), n, s, -o, h);
        break;
      case 270:
        l = B._rescaleAndSwap(i(this, Ut), n, r, -o, -h), c = B._rescaleAndSwap(i(this, is), n, r, -o, -h);
        break;
    }
    return {
      outline: Array.from(l),
      points: [Array.from(c)]
    };
  }
  get box() {
    return i(this, Ra);
  }
  newOutliner(e, s, n, r, a, o = 0) {
    return new of(e, s, n, r, a, o);
  }
  getNewOutline(e, s) {
    const [n, r, a, o] = i(this, Ra), [h, l, c, d] = i(this, Ph), p = a * c, y = o * d, A = n * c + h, w = r * d + l, S = this.newOutliner({
      x: i(this, is)[0] * p + A,
      y: i(this, is)[1] * y + w
    }, i(this, Ph), i(this, Dd), e, i(this, Id), s ?? i(this, an));
    for (let v = 2; v < i(this, is).length; v += 2)
      S.add({
        x: i(this, is)[v] * p + A,
        y: i(this, is)[v + 1] * y + w
      });
    return S.getOutlines();
  }
};
Ph = new WeakMap(), Ra = new WeakMap(), an = new WeakMap(), Id = new WeakMap(), is = new WeakMap(), Dd = new WeakMap(), Ut = new WeakMap(), zf = new WeakSet(), sw = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ut);
  let n = s[4], r = s[5];
  const a = [n, r, n, r];
  let o = n, h = r, l = n, c = r;
  const d = e ? Math.max : Math.min, p = new Float32Array(4);
  for (let A = 6, w = s.length; A < w; A += 6) {
    const S = s[A + 4], v = s[A + 5];
    isNaN(s[A]) ? (D.pointBoundingBox(S, v, a), h > v ? (o = S, h = v) : h === v && (o = d(o, S)), c < v ? (l = S, c = v) : c === v && (l = d(l, S))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, D.bezierBoundingBox(n, r, ...s.slice(A, A + 6), p), D.rectBoundingBox(p[0], p[1], p[2], p[3], a), h > p[1] ? (o = p[0], h = p[1]) : h === p[1] && (o = d(o, p[0])), c < p[3] ? (l = p[2], c = p[3]) : c === p[3] && (l = d(l, p[2]))), n = S, r = v;
  }
  const y = i(this, Ra);
  y[0] = a[0] - i(this, an), y[1] = a[1] - i(this, an), y[2] = a[2] - a[0] + 2 * i(this, an), y[3] = a[3] - a[1] + 2 * i(this, an), this.firstPoint = [o, h], this.lastPoint = [l, c];
}, "#computeMinMax"), f(Vy, "FreeDrawOutline");
let hf = Vy;
var Ld, Rd, Nd, fr, js, Re, iw, ku, nw, rw, Cm;
const Wy = class Wy {
  constructor(t, e = 0, s = 0, n = !0) {
    m(this, Re);
    m(this, Ld);
    m(this, Rd);
    m(this, Nd);
    m(this, fr, []);
    m(this, js, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: w,
      y: S,
      width: v,
      height: E
    } of t) {
      const C = Math.floor((w - e) / a) * a, T = Math.ceil((w + v + e) / a) * a, x = Math.floor((S - e) / a) * a, _ = Math.ceil((S + E + e) / a) * a, k = [C, x, _, !0], R = [T, x, _, !1];
      i(this, fr).push(k, R), D.rectBoundingBox(C, x, T, _, r);
    }
    const o = r[2] - r[0] + 2 * s, h = r[3] - r[1] + 2 * s, l = r[0] - s, c = r[1] - s;
    let d = n ? -1 / 0 : 1 / 0, p = 1 / 0;
    const y = i(this, fr).at(n ? -1 : -2), A = [y[0], y[2]];
    for (const w of i(this, fr)) {
      const [S, v, E, C] = w;
      !C && n ? v < p ? (p = v, d = S) : v === p && (d = Math.max(d, S)) : C && !n && (v < p ? (p = v, d = S) : v === p && (d = Math.min(d, S))), w[0] = (S - l) / o, w[1] = (v - c) / h, w[2] = (E - c) / h;
    }
    u(this, Ld, new Float32Array([l, c, o, h])), u(this, Rd, [d, p]), u(this, Nd, A);
  }
  getOutlines() {
    i(this, fr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of i(this, fr))
      e[3] ? (t.push(...b(this, Re, Cm).call(this, e)), b(this, Re, nw).call(this, e)) : (b(this, Re, rw).call(this, e), t.push(...b(this, Re, Cm).call(this, e)));
    return b(this, Re, iw).call(this, t);
  }
};
Ld = new WeakMap(), Rd = new WeakMap(), Nd = new WeakMap(), fr = new WeakMap(), js = new WeakMap(), Re = new WeakSet(), iw = /* @__PURE__ */ f(function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, h, l] = a;
    e.push([o, h, a], [o, l, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const h = e[a][2], l = e[a + 1][2];
    h.push(l), l.push(h), s.add(h), s.add(l);
  }
  const n = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, h, l, c, d] = a;
    s.delete(a);
    let p = o, y = h;
    for (r = [o, l], n.push(r); ; ) {
      let A;
      if (s.has(c))
        A = c;
      else if (s.has(d))
        A = d;
      else
        break;
      s.delete(A), [o, h, l, c, d] = A, p !== o && (r.push(p, y, o, y === h ? h : l), p = o), y = y === h ? l : h;
    }
    r.push(p, y);
  }
  return new Tm(n, i(this, Ld), i(this, Rd), i(this, Nd));
}, "#getOutlines"), ku = /* @__PURE__ */ f(function(t) {
  const e = i(this, js);
  let s = 0, n = e.length - 1;
  for (; s <= n; ) {
    const r = s + n >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : n = r - 1;
  }
  return n + 1;
}, "#binarySearch"), nw = /* @__PURE__ */ f(function([, t, e]) {
  const s = b(this, Re, ku).call(this, t);
  i(this, js).splice(s, 0, [t, e]);
}, "#insert"), rw = /* @__PURE__ */ f(function([, t, e]) {
  const s = b(this, Re, ku).call(this, t);
  for (let n = s; n < i(this, js).length; n++) {
    const [r, a] = i(this, js)[n];
    if (r !== t)
      break;
    if (r === t && a === e) {
      i(this, js).splice(n, 1);
      return;
    }
  }
  for (let n = s - 1; n >= 0; n--) {
    const [r, a] = i(this, js)[n];
    if (r !== t)
      break;
    if (r === t && a === e) {
      i(this, js).splice(n, 1);
      return;
    }
  }
}, "#remove"), Cm = /* @__PURE__ */ f(function(t) {
  const [e, s, n] = t, r = [[e, s, n]], a = b(this, Re, ku).call(this, n);
  for (let o = 0; o < a; o++) {
    const [h, l] = i(this, js)[o];
    for (let c = 0, d = r.length; c < d; c++) {
      const [, p, y] = r[c];
      if (!(l <= p || y <= h)) {
        if (p >= h) {
          if (y > l)
            r[c][1] = l;
          else {
            if (d === 1)
              return [];
            r.splice(c, 1), c--, d--;
          }
          continue;
        }
        r[c][2] = h, y > l && r.push([e, l, y]);
      }
    }
  }
  return r;
}, "#breakEdge"), f(Wy, "HighlightOutliner");
let ec = Wy;
var Bd, Ih;
const Xy = class Xy extends B {
  constructor(e, s, n, r) {
    super();
    m(this, Bd);
    m(this, Ih);
    u(this, Ih, e), u(this, Bd, s), this.firstPoint = n, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const s of i(this, Ih)) {
      let [n, r] = s;
      e.push(`M${n} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], h = s[a + 1];
        o === n ? (e.push(`V${h}`), r = h) : h === r && (e.push(`H${o}`), n = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, n, r], a) {
    const o = [], h = n - e, l = r - s;
    for (const c of i(this, Ih)) {
      const d = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        d[p] = e + c[p] * h, d[p + 1] = r - c[p + 1] * l;
      o.push(d);
    }
    return o;
  }
  get box() {
    return i(this, Bd);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
};
Bd = new WeakMap(), Ih = new WeakMap(), f(Xy, "HighlightOutline");
let Tm = Xy;
const Yy = class Yy extends of {
  newFreeDrawOutline(t, e, s, n, r, a) {
    return new xm(t, e, s, n, r, a);
  }
};
f(Yy, "FreeHighlightOutliner");
let sc = Yy;
const Ky = class Ky extends hf {
  newOutliner(t, e, s, n, r, a = 0) {
    return new sc(t, e, s, n, r, a);
  }
};
f(Ky, "FreeHighlightOutline");
let xm = Ky;
var Dh, Fd, on, Na, Od, $e, Hd, Ud, Ba, ns, rs, pe, Lh, Rh, Ce, Nh, _s, Gd, X, _m, Mu, aw, ow, hw, km, _r, Ms, co, lw, Pu, Iu, cw, dw, uw, fw, pw;
const it = class it extends wt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, X);
    m(this, Dh, null);
    m(this, Fd, 0);
    m(this, on);
    m(this, Na, null);
    m(this, Od, null);
    m(this, $e, null);
    m(this, Hd, null);
    m(this, Ud, 0);
    m(this, Ba, null);
    m(this, ns, null);
    m(this, rs, null);
    m(this, pe, !1);
    m(this, Lh, null);
    m(this, Rh, null);
    m(this, Ce, null);
    m(this, Nh, "");
    m(this, _s);
    m(this, Gd, "");
    this.color = e.color || it._defaultColor, u(this, _s, e.thickness || it._defaultThickness), this.opacity = e.opacity || it._defaultOpacity, u(this, on, e.boxes || null), u(this, Gd, e.methodOfCreation || ""), u(this, Nh, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (u(this, pe, !0), b(this, X, Mu).call(this, e), b(this, X, _r).call(this)) : i(this, on) && (u(this, Dh, e.anchorNode), u(this, Fd, e.anchorOffset), u(this, Hd, e.focusNode), u(this, Ud, e.focusOffset), b(this, X, _m).call(this), b(this, X, _r).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = it.prototype;
    return V(this, "_keyboardManager", new Qa([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: i(this, pe) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: i(this, _s),
      methodOfCreation: i(this, Gd)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    wt.initialize(e, s), it._defaultColor ||= s.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Z.HIGHLIGHT_COLOR:
        it._defaultColor = s;
        break;
      case Z.HIGHLIGHT_THICKNESS:
        it._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return i(this, Rh);
  }
  get commentButtonPosition() {
    return i(this, Lh);
  }
  updateParams(e, s) {
    switch (e) {
      case Z.HIGHLIGHT_COLOR:
        b(this, X, aw).call(this, s);
        break;
      case Z.HIGHLIGHT_THICKNESS:
        b(this, X, ow).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Z.HIGHLIGHT_COLOR, it._defaultColor], [Z.HIGHLIGHT_THICKNESS, it._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[Z.HIGHLIGHT_COLOR, this.color || it._defaultColor], [Z.HIGHLIGHT_THICKNESS, i(this, _s) || it._defaultThickness], [Z.HIGHLIGHT_FREE, i(this, pe)]];
  }
  onUpdatedColor() {
    this.parent?.drawLayer.updateProperties(i(this, rs), {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    }), i(this, Od)?.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", u(this, Od, new Ju({
      editor: this
    }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, X, Iu).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, X, Iu).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, X, km).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, X, _r).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? b(this, X, km).call(this) : e && (b(this, X, _r).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let n;
    i(this, pe) ? (e = (e - this.rotation + 360) % 360, n = b(r = it, Ms, co).call(r, i(this, ns).box, e)) : n = b(a = it, Ms, co).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(i(this, rs), {
      bbox: n,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(i(this, Ce), {
      bbox: b(o = it, Ms, co).call(o, i(this, $e).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    i(this, Nh) && (e.setAttribute("aria-label", i(this, Nh)), e.setAttribute("role", "mark")), i(this, pe) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, X, lw).bind(this), {
      signal: this._uiManager._signal
    });
    const s = u(this, Ba, document.createElement("div"));
    return e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = i(this, Na), this.setDims(), FA(this, i(this, Ba), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.isSelected || this.parent?.drawLayer.updateProperties(i(this, Ce), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    this.isSelected || this.parent?.drawLayer.updateProperties(i(this, Ce), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, X, Pu).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, X, Pu).call(this, !1);
        break;
    }
  }
  select() {
    super.select(), i(this, Ce) && this.parent?.drawLayer.updateProperties(i(this, Ce), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    });
  }
  unselect() {
    super.unselect(), i(this, Ce) && (this.parent?.drawLayer.updateProperties(i(this, Ce), {
      rootClass: {
        selected: !1
      }
    }), i(this, pe) || b(this, X, Pu).call(this, !1));
  }
  get _mustFixPosition() {
    return !i(this, pe);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(i(this, rs), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(i(this, Ce), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: n,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: h,
      width: l,
      height: c
    } = n.getBoundingClientRect(), d = new AbortController(), p = e.combinedSignal(d), y = /* @__PURE__ */ f((A) => {
      d.abort(), b(this, Ms, fw).call(this, e, A);
    }, "pointerUpCallback");
    window.addEventListener("blur", y, {
      signal: p
    }), window.addEventListener("pointerup", y, {
      signal: p
    }), window.addEventListener("pointerdown", Nt, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", Is, {
      signal: p
    }), n.addEventListener("pointermove", b(this, Ms, uw).bind(this, e), {
      signal: p
    }), this._freeHighlight = new sc({
      x: r,
      y: a
    }, [o, h, l, c], e.scale, this._defaultThickness / 2, s, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, s, n) {
    var S, v, E, C;
    let r = null;
    if (e instanceof rf) {
      const {
        data: {
          quadPoints: T,
          rect: x,
          rotation: _,
          id: k,
          color: R,
          opacity: I,
          popupRef: N,
          richText: P,
          contentsObj: Q,
          creationDate: j,
          modificationDate: $
        },
        parent: {
          page: {
            pageNumber: Tt
          }
        }
      } = e;
      r = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(R),
        opacity: I,
        quadPoints: T,
        boxes: null,
        pageIndex: Tt - 1,
        rect: x.slice(0),
        rotation: _,
        annotationElementId: k,
        id: k,
        deleted: !1,
        popupRef: N,
        richText: P,
        comment: Q?.str || null,
        creationDate: j,
        modificationDate: $
      };
    } else if (e instanceof tc) {
      const {
        data: {
          inkLists: T,
          rect: x,
          rotation: _,
          id: k,
          color: R,
          borderStyle: {
            rawWidth: I
          },
          popupRef: N,
          richText: P,
          contentsObj: Q,
          creationDate: j,
          modificationDate: $
        },
        parent: {
          page: {
            pageNumber: Tt
          }
        }
      } = e;
      r = e = {
        annotationType: z.HIGHLIGHT,
        color: Array.from(R),
        thickness: I,
        inkLists: T,
        boxes: null,
        pageIndex: Tt - 1,
        rect: x.slice(0),
        rotation: _,
        annotationElementId: k,
        id: k,
        deleted: !1,
        popupRef: N,
        richText: P,
        comment: Q?.str || null,
        creationDate: j,
        modificationDate: $
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: h,
      outlines: l,
      opacity: c
    } = e, d = await super.deserialize(e, s, n);
    d.color = D.makeHexColor(...a), d.opacity = c || 1, h && u(d, _s, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [p, y] = d.pageDimensions, [A, w] = d.pageTranslation;
    if (o) {
      const T = u(d, on, []);
      for (let x = 0; x < o.length; x += 8)
        T.push({
          x: (o[x] - A) / p,
          y: 1 - (o[x + 1] - w) / y,
          width: (o[x + 2] - o[x]) / p,
          height: (o[x + 1] - o[x + 5]) / y
        });
      b(S = d, X, _m).call(S), b(v = d, X, _r).call(v), d.rotate(d.rotation);
    } else if (h || l) {
      u(d, pe, !0);
      const T = (h || l.points)[0], x = {
        x: T[0] - A,
        y: y - (T[1] - w)
      }, _ = new sc(x, [0, 0, p, y], 1, i(d, _s) / 2, !0, 1e-3);
      for (let I = 0, N = T.length; I < N; I += 2)
        x.x = T[I] - A, x.y = y - (T[I + 1] - w), _.add(x);
      const {
        id: k,
        clipPathId: R
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: d.color,
          "fill-opacity": d._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: _.toSVGPath()
        }
      }, !0, !0);
      b(E = d, X, Mu).call(E, {
        highlightOutlines: _.getOutlines(),
        highlightId: k,
        clipPathId: R
      }), b(C = d, X, _r).call(C), d.rotate(d.parentRotation);
    }
    return d;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = wt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), n = super.serialize(e);
    return Object.assign(n, {
      color: s,
      opacity: this.opacity,
      thickness: i(this, _s),
      quadPoints: b(this, X, cw).call(this),
      outlines: b(this, X, dw).call(this, n.rect)
    }), this.addComment(n), this.annotationElementId && !b(this, X, pw).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Dh = new WeakMap(), Fd = new WeakMap(), on = new WeakMap(), Na = new WeakMap(), Od = new WeakMap(), $e = new WeakMap(), Hd = new WeakMap(), Ud = new WeakMap(), Ba = new WeakMap(), ns = new WeakMap(), rs = new WeakMap(), pe = new WeakMap(), Lh = new WeakMap(), Rh = new WeakMap(), Ce = new WeakMap(), Nh = new WeakMap(), _s = new WeakMap(), Gd = new WeakMap(), X = new WeakSet(), _m = /* @__PURE__ */ f(function() {
  const e = new ec(i(this, on), 1e-3);
  u(this, ns, e.getOutlines()), [this.x, this.y, this.width, this.height] = i(this, ns).box;
  const s = new ec(i(this, on), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  u(this, $e, s.getOutlines());
  const {
    firstPoint: n
  } = i(this, ns);
  u(this, Lh, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height]);
  const {
    lastPoint: r
  } = i(this, $e);
  u(this, Rh, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, "#createOutlines"), Mu = /* @__PURE__ */ f(function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: n
}) {
  var p, y;
  if (u(this, ns, e), u(this, $e, e.getNewOutline(i(this, _s) / 2 + 1.5, 25e-4)), s >= 0)
    u(this, rs, s), u(this, Na, n), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), u(this, Ce, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: i(this, $e).box,
      path: {
        d: i(this, $e).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const A = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(i(this, rs), {
      bbox: b(p = it, Ms, co).call(p, i(this, ns).box, (A - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(i(this, Ce), {
      bbox: b(y = it, Ms, co).call(y, i(this, $e).box, A),
      path: {
        d: i(this, $e).toSVGPath()
      }
    });
  }
  const [a, o, h, l] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = h, this.height = l;
      break;
    case 90: {
      const [A, w] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = h * w / A, this.height = l * A / w;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = h, this.height = l;
      break;
    case 270: {
      const [A, w] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = h * w / A, this.height = l * A / w;
      break;
    }
  }
  const {
    firstPoint: c
  } = e;
  u(this, Lh, [(c[0] - a) / h, (c[1] - o) / l]);
  const {
    lastPoint: d
  } = i(this, $e);
  u(this, Rh, [(d[0] - a) / h, (d[1] - o) / l]);
}, "#createFreeOutlines"), aw = /* @__PURE__ */ f(function(e) {
  const s = /* @__PURE__ */ f((a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, "setColorAndOpacity"), n = this.color, r = this.opacity;
  this.addCommands({
    cmd: s.bind(this, e, it._defaultOpacity),
    undo: s.bind(this, n, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Z.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, "#updateColor"), ow = /* @__PURE__ */ f(function(e) {
  const s = i(this, _s), n = /* @__PURE__ */ f((r) => {
    u(this, _s, r), b(this, X, hw).call(this, r);
  }, "setThickness");
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: Z.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, "#updateThickness"), hw = /* @__PURE__ */ f(function(e) {
  i(this, pe) && (b(this, X, Mu).call(this, {
    highlightOutlines: i(this, ns).getNewOutline(e / 2)
  }), this.fixAndSetPosition(), this.setDims());
}, "#changeThickness"), km = /* @__PURE__ */ f(function() {
  i(this, rs) === null || !this.parent || (this.parent.drawLayer.remove(i(this, rs)), u(this, rs, null), this.parent.drawLayer.remove(i(this, Ce)), u(this, Ce, null));
}, "#cleanDrawLayer"), _r = /* @__PURE__ */ f(function(e = this.parent) {
  i(this, rs) === null && ({
    id: zt(this, rs)._,
    clipPathId: zt(this, Na)._
  } = e.drawLayer.draw({
    bbox: i(this, ns).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": this.opacity
    },
    rootClass: {
      highlight: !0,
      free: i(this, pe)
    },
    path: {
      d: i(this, ns).toSVGPath()
    }
  }, !1, !0), u(this, Ce, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: i(this, pe)
    },
    bbox: i(this, $e).box,
    path: {
      d: i(this, $e).toSVGPath()
    }
  }, i(this, pe))), i(this, Ba) && (i(this, Ba).style.clipPath = i(this, Na)));
}, "#addToDrawLayer"), Ms = new WeakSet(), co = /* @__PURE__ */ f(function([e, s, n, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, n];
    case 180:
      return [1 - e - n, 1 - s - r, n, r];
    case 270:
      return [s, 1 - e - n, r, n];
  }
  return [e, s, n, r];
}, "#rotateBbox"), lw = /* @__PURE__ */ f(function(e) {
  it._keyboardManager.exec(this, e);
}, "#keydown"), Pu = /* @__PURE__ */ f(function(e) {
  if (!i(this, Dh))
    return;
  const s = window.getSelection();
  e ? s.setPosition(i(this, Dh), i(this, Fd)) : s.setPosition(i(this, Hd), i(this, Ud));
}, "#setCaret"), Iu = /* @__PURE__ */ f(function() {
  return i(this, pe) ? this.rotation : 0;
}, "#getRotation"), cw = /* @__PURE__ */ f(function() {
  if (i(this, pe))
    return null;
  const [e, s] = this.pageDimensions, [n, r] = this.pageTranslation, a = i(this, on), o = new Float32Array(a.length * 8);
  let h = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: p
  } of a) {
    const y = l * e + n, A = (1 - c) * s + r;
    o[h] = o[h + 4] = y, o[h + 1] = o[h + 3] = A, o[h + 2] = o[h + 6] = y + d * e, o[h + 5] = o[h + 7] = A - p * s, h += 8;
  }
  return o;
}, "#serializeBoxes"), dw = /* @__PURE__ */ f(function(e) {
  return i(this, ns).serialize(e, b(this, X, Iu).call(this));
}, "#serializeOutlines"), uw = /* @__PURE__ */ f(function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, "#highlightMove"), fw = /* @__PURE__ */ f(function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, "#endHighlight"), pw = /* @__PURE__ */ f(function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((n, r) => n !== s[r]);
}, "#hasElementChanged"), m(it, Ms), f(it, "HighlightEditor"), M(it, "_defaultColor", null), M(it, "_defaultOpacity", 1), M(it, "_defaultThickness", 12), M(it, "_type", "highlight"), M(it, "_editorType", z.HIGHLIGHT), M(it, "_freeHighlightId", -1), M(it, "_freeHighlight", null), M(it, "_freeHighlightClipId", "");
let lf = it;
var Fa;
const qy = class qy {
  constructor() {
    m(this, Fa, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    i(this, Fa)[t] = e;
  }
  toSVGProperties() {
    const t = i(this, Fa);
    return u(this, Fa, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    u(this, Fa, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    rt("Not implemented");
  }
};
Fa = new WeakMap(), f(qy, "DrawingOptions");
let cf = qy;
var as, Bh, ie, Oa, Ha, tt, Mm, Pm, Im, Cl, gw, Du, Tl, uo;
const J = class J extends wt {
  constructor(e) {
    super(e);
    m(this, tt);
    m(this, as, null);
    m(this, Bh);
    M(this, "_colorPicker", null);
    M(this, "_drawId", null);
    u(this, Bh, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, tt, Mm).call(this, e), b(this, tt, Cl).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const n = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      n.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    rt("Not implemented");
  }
  static get typesMap() {
    rt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const n = this.typesMap.get(e);
    n && this._defaultDrawingOptions.updateProperty(n, s), this._currentParent && (i(J, ie).updateProperty(n, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const n = this.constructor.typesMap.get(e);
    n && this._updateProperty(e, n, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [n, r] of this.typesMap)
      e.push([n, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [n, r] of this.constructor.typesMap)
      e.push([n, s[r]]);
    return e;
  }
  _updateProperty(e, s, n) {
    const r = this._drawingOptions, a = r[s], o = /* @__PURE__ */ f((h) => {
      r.updateProperty(s, h);
      const l = i(this, as).updateProperty(s, h);
      l && b(this, tt, Tl).call(this, l), this.parent?.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
    }, "setter");
    this.addCommands({
      cmd: o.bind(this, n),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(i(this, as).getPathResizingSVGProperties(b(this, tt, Du).call(this)), {
      bbox: b(this, tt, uo).call(this)
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(i(this, as).getPathResizedSVGProperties(b(this, tt, Du).call(this)), {
      bbox: b(this, tt, uo).call(this)
    }));
  }
  _onTranslating(e, s) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, tt, uo).call(this)
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties(i(this, as).getPathTranslatedSVGProperties(b(this, tt, Du).call(this), this.parentDimensions), {
      bbox: b(this, tt, uo).call(this)
    }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, i(this, Bh) && (u(this, Bh, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, tt, Im).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, tt, Cl).call(this), b(this, tt, Tl).call(this, i(this, as).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, tt, Im).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, tt, Cl).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, J._mergeSVGProperties({
      bbox: b(this, tt, uo).call(this)
    }, i(this, as).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, tt, Tl).call(this, i(this, as).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this._isCopy && (e = this.x, s = this.y);
    const n = super.render();
    n.classList.add("draw");
    const r = document.createElement("div");
    return n.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, s), n;
  }
  static createDrawerInstance(e, s, n, r, a) {
    rt("Not implemented");
  }
  static startDrawing(e, s, n, r) {
    const {
      target: a,
      offsetX: o,
      offsetY: h,
      pointerId: l,
      pointerType: c
    } = r;
    if (we.isInitializedAndDifferentPointerType(c))
      return;
    const {
      viewport: {
        rotation: d
      }
    } = e, {
      width: p,
      height: y
    } = a.getBoundingClientRect(), A = u(J, Oa, new AbortController()), w = e.combinedSignal(A);
    if (we.setPointer(c, l), window.addEventListener("pointerup", (S) => {
      we.isSamePointerIdOrRemove(S.pointerId) && this._endDraw(S);
    }, {
      signal: w
    }), window.addEventListener("pointercancel", (S) => {
      we.isSamePointerIdOrRemove(S.pointerId) && this._currentParent.endDrawingSession();
    }, {
      signal: w
    }), window.addEventListener("pointerdown", (S) => {
      we.isSamePointerType(S.pointerType) && (we.initializeAndAddPointerId(S.pointerId), i(J, ie).isCancellable() && (i(J, ie).removeLastElement(), i(J, ie).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: w
    }), window.addEventListener("contextmenu", Is, {
      signal: w
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: w
    }), a.addEventListener("touchmove", (S) => {
      we.isSameTimeStamp(S.timeStamp) && Nt(S);
    }, {
      signal: w
    }), e.toggleDrawing(), s._editorUndoBar?.hide(), i(J, ie)) {
      e.drawLayer.updateProperties(this._currentDrawId, i(J, ie).startNew(o, h, p, y, d));
      return;
    }
    s.updateUIForDefaultProperties(this), u(J, ie, this.createDrawerInstance(o, h, p, y, d)), u(J, Ha, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(i(J, Ha).toSVGProperties(), i(J, ie).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    if (we.isSameTimeStamp(e.timeStamp), !i(J, ie))
      return;
    const {
      offsetX: s,
      offsetY: n,
      pointerId: r
    } = e;
    if (we.isSamePointerId(r)) {
      if (we.isUsingMultiplePointers()) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, i(J, ie).add(s, n)), we.setTimeStamp(e.timeStamp), Nt(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, u(J, ie, null), u(J, Ha, null), we.clearTimeStamp()), i(J, Oa) && (i(J, Oa).abort(), u(J, Oa, null), we.clearPointerIds());
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e?.target === s.div && s.drawLayer.updateProperties(this._currentDrawId, i(J, ie).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const n = i(J, ie), r = this._currentDrawId, a = n.getLastElement();
        s.addCommands({
          cmd: /* @__PURE__ */ f(() => {
            s.drawLayer.updateProperties(r, n.setLastElement(a));
          }, "cmd"),
          undo: /* @__PURE__ */ f(() => {
            s.drawLayer.updateProperties(r, n.removeLastElement());
          }, "undo"),
          mustExec: !1,
          type: Z.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(Z.DRAW_STEP), !i(J, ie).isEmpty()) {
      const {
        pageDimensions: [n, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: i(J, ie).getOutlines(n * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: i(J, Ha),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, n, r, a, o) {
    rt("Not implemented");
  }
  static async deserialize(e, s, n) {
    var d, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: h
      }
    } = s.viewport, l = this.deserializeDraw(o, h, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, n);
    return c.createDrawingOptions(e), b(d = c, tt, Mm).call(d, {
      drawOutlines: l
    }), b(p = c, tt, Cl).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, n] = this.pageTranslation, [r, a] = this.pageDimensions;
    return i(this, as).serialize([s, n, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
as = new WeakMap(), Bh = new WeakMap(), ie = new WeakMap(), Oa = new WeakMap(), Ha = new WeakMap(), tt = new WeakSet(), Mm = /* @__PURE__ */ f(function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: n
}) {
  u(this, as, e), this._drawingOptions ||= n, this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, tt, Pm).call(this, e, this.parent), b(this, tt, Tl).call(this, e.box);
}, "#createDrawOutlines"), Pm = /* @__PURE__ */ f(function(e, s) {
  const {
    id: n
  } = s.drawLayer.draw(J._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return n;
}, "#createDrawing"), Im = /* @__PURE__ */ f(function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, "#cleanDrawLayer"), Cl = /* @__PURE__ */ f(function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, tt, Pm).call(this, i(this, as), e);
  }
}, "#addToDrawLayer"), gw = /* @__PURE__ */ f(function([e, s, n, r]) {
  const {
    parentDimensions: [a, o],
    rotation: h
  } = this;
  switch (h) {
    case 90:
      return [s, 1 - e, n * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, n, r];
    case 270:
      return [1 - s, e, n * (o / a), r * (a / o)];
    default:
      return [e, s, n, r];
  }
}, "#convertToParentSpace"), Du = /* @__PURE__ */ f(function() {
  const {
    x: e,
    y: s,
    width: n,
    height: r,
    parentDimensions: [a, o],
    rotation: h
  } = this;
  switch (h) {
    case 90:
      return [1 - s, e, n * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, n, r];
    case 270:
      return [s, 1 - e, n * (a / o), r * (o / a)];
    default:
      return [e, s, n, r];
  }
}, "#convertToDrawSpace"), Tl = /* @__PURE__ */ f(function(e) {
  [this.x, this.y, this.width, this.height] = b(this, tt, gw).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, "#updateBbox"), uo = /* @__PURE__ */ f(function() {
  const {
    x: e,
    y: s,
    width: n,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [h, l]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, n];
    case 2:
      return [1 - e - n, 1 - s - r, n, r];
    case 3:
      return [s, 1 - e - n, r, n];
    case 4:
      return [e, s - n * (h / l), r * (l / h), n * (h / l)];
    case 5:
      return [1 - s, e, n * (h / l), r * (l / h)];
    case 6:
      return [1 - e - r * (l / h), 1 - s, r * (l / h), n * (h / l)];
    case 7:
      return [s - n * (h / l), 1 - e - r * (l / h), n * (h / l), r * (l / h)];
    case 8:
      return [e - n, s - r, n, r];
    case 9:
      return [1 - s, e - n, r, n];
    case 10:
      return [1 - e, 1 - s, n, r];
    case 11:
      return [s - r, 1 - e, r, n];
    case 12:
      return [e - r * (l / h), s, r * (l / h), n * (h / l)];
    case 13:
      return [1 - s - n * (h / l), e - r * (l / h), n * (h / l), r * (l / h)];
    case 14:
      return [1 - e, 1 - s - n * (h / l), r * (l / h), n * (h / l)];
    case 15:
      return [s, 1 - e, n * (h / l), r * (l / h)];
    default:
      return [e, s, n, r];
  }
}, "#rotateBox"), f(J, "DrawingEditor"), M(J, "_currentDrawId", -1), M(J, "_currentParent", null), m(J, ie, null), m(J, Oa, null), m(J, Ha, null), M(J, "_INNER_MARGIN", 3);
let df = J;
var Ai, ne, re, Ua, Fh, Pe, ge, ks, Ga, $a, za, Oh, Lu;
const Qy = class Qy {
  constructor(t, e, s, n, r, a) {
    m(this, Oh);
    m(this, Ai, new Float64Array(6));
    m(this, ne);
    m(this, re);
    m(this, Ua);
    m(this, Fh);
    m(this, Pe);
    m(this, ge, "");
    m(this, ks, 0);
    m(this, Ga, new to());
    m(this, $a);
    m(this, za);
    u(this, $a, s), u(this, za, n), u(this, Ua, r), u(this, Fh, a), [t, e] = b(this, Oh, Lu).call(this, t, e);
    const o = u(this, ne, [NaN, NaN, NaN, NaN, t, e]);
    u(this, Pe, [t, e]), u(this, re, [{
      line: o,
      points: i(this, Pe)
    }]), i(this, Ai).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && u(this, Fh, e);
  }
  isEmpty() {
    return !i(this, re) || i(this, re).length === 0;
  }
  isCancellable() {
    return i(this, Pe).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Oh, Lu).call(this, t, e);
    const [s, n, r, a] = i(this, Ai).subarray(2, 6), o = t - r, h = e - a;
    return Math.hypot(i(this, $a) * o, i(this, za) * h) <= 2 ? null : (i(this, Pe).push(t, e), isNaN(s) ? (i(this, Ai).set([r, a, t, e], 2), i(this, ne).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(i(this, Ai)[0]) && i(this, ne).splice(6, 6), i(this, Ai).set([s, n, r, a, t, e], 0), i(this, ne).push(...B.createBezierPoints(s, n, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (i(this, Pe).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, n, r) {
    u(this, $a, s), u(this, za, n), u(this, Ua, r), [t, e] = b(this, Oh, Lu).call(this, t, e);
    const a = u(this, ne, [NaN, NaN, NaN, NaN, t, e]);
    u(this, Pe, [t, e]);
    const o = i(this, re).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), i(this, re).push({
      line: a,
      points: i(this, Pe)
    }), i(this, Ai).set(a, 0), u(this, ks, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return i(this, re).at(-1);
  }
  setLastElement(t) {
    return i(this, re) ? (i(this, re).push(t), u(this, ne, t.line), u(this, Pe, t.points), u(this, ks, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : i(this, Ga).setLastElement(t);
  }
  removeLastElement() {
    if (!i(this, re))
      return i(this, Ga).removeLastElement();
    i(this, re).pop(), u(this, ge, "");
    for (let t = 0, e = i(this, re).length; t < e; t++) {
      const {
        line: s,
        points: n
      } = i(this, re)[t];
      u(this, ne, s), u(this, Pe, n), u(this, ks, 0), this.toSVGPath();
    }
    return {
      path: {
        d: i(this, ge)
      }
    };
  }
  toSVGPath() {
    const t = B.svgRound(i(this, ne)[4]), e = B.svgRound(i(this, ne)[5]);
    if (i(this, Pe).length === 2)
      return u(this, ge, `${i(this, ge)} M ${t} ${e} Z`), i(this, ge);
    if (i(this, Pe).length <= 6) {
      const n = i(this, ge).lastIndexOf("M");
      u(this, ge, `${i(this, ge).slice(0, n)} M ${t} ${e}`), u(this, ks, 6);
    }
    if (i(this, Pe).length === 4) {
      const n = B.svgRound(i(this, ne)[10]), r = B.svgRound(i(this, ne)[11]);
      return u(this, ge, `${i(this, ge)} L ${n} ${r}`), u(this, ks, 12), i(this, ge);
    }
    const s = [];
    i(this, ks) === 0 && (s.push(`M ${t} ${e}`), u(this, ks, 6));
    for (let n = i(this, ks), r = i(this, ne).length; n < r; n += 6) {
      const [a, o, h, l, c, d] = i(this, ne).slice(n, n + 6).map(B.svgRound);
      s.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
    }
    return u(this, ge, i(this, ge) + s.join(" ")), u(this, ks, i(this, ne).length), i(this, ge);
  }
  getOutlines(t, e, s, n) {
    const r = i(this, re).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), i(this, Ga).build(i(this, re), t, e, s, i(this, Ua), i(this, Fh), n), u(this, Ai, null), u(this, ne, null), u(this, re, null), u(this, ge, null), i(this, Ga);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
};
Ai = new WeakMap(), ne = new WeakMap(), re = new WeakMap(), Ua = new WeakMap(), Fh = new WeakMap(), Pe = new WeakMap(), ge = new WeakMap(), ks = new WeakMap(), Ga = new WeakMap(), $a = new WeakMap(), za = new WeakMap(), Oh = new WeakSet(), Lu = /* @__PURE__ */ f(function(t, e) {
  return B._normalizePoint(t, e, i(this, $a), i(this, za), i(this, Ua));
}, "#normalizePoint"), f(Qy, "InkDrawOutliner");
let Dm = Qy;
var Ie, $d, zd, os, wi, vi, Hh, Uh, ja, be, Di, mw, bw, yw;
const Jy = class Jy extends B {
  constructor() {
    super(...arguments);
    m(this, be);
    m(this, Ie);
    m(this, $d, 0);
    m(this, zd);
    m(this, os);
    m(this, wi);
    m(this, vi);
    m(this, Hh);
    m(this, Uh);
    m(this, ja);
  }
  build(e, s, n, r, a, o, h) {
    u(this, wi, s), u(this, vi, n), u(this, Hh, r), u(this, Uh, a), u(this, ja, o), u(this, zd, h ?? 0), u(this, os, e), b(this, be, bw).call(this);
  }
  get thickness() {
    return i(this, ja);
  }
  setLastElement(e) {
    return i(this, os).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return i(this, os).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of i(this, os)) {
      if (e.push(`M${B.svgRound(s[4])} ${B.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${B.svgRound(s[10])} ${B.svgRound(s[11])}`);
        continue;
      }
      for (let n = 6, r = s.length; n < r; n += 6) {
        const [a, o, h, l, c, d] = s.subarray(n, n + 6).map(B.svgRound);
        e.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, n, r], a) {
    const o = [], h = [], [l, c, d, p] = b(this, be, mw).call(this);
    let y, A, w, S, v, E, C, T, x;
    switch (i(this, Uh)) {
      case 0:
        x = B._rescale, y = e, A = s + r, w = n, S = -r, v = e + l * n, E = s + (1 - c - p) * r, C = e + (l + d) * n, T = s + (1 - c) * r;
        break;
      case 90:
        x = B._rescaleAndSwap, y = e, A = s, w = n, S = r, v = e + c * n, E = s + l * r, C = e + (c + p) * n, T = s + (l + d) * r;
        break;
      case 180:
        x = B._rescale, y = e + n, A = s, w = -n, S = r, v = e + (1 - l - d) * n, E = s + c * r, C = e + (1 - l) * n, T = s + (c + p) * r;
        break;
      case 270:
        x = B._rescaleAndSwap, y = e + n, A = s + r, w = -n, S = -r, v = e + (1 - c - p) * n, E = s + (1 - l - d) * r, C = e + (1 - c) * n, T = s + (1 - l) * r;
        break;
    }
    for (const {
      line: _,
      points: k
    } of i(this, os))
      o.push(x(_, y, A, w, S, a ? new Array(_.length) : null)), h.push(x(k, y, A, w, S, a ? new Array(k.length) : null));
    return {
      lines: o,
      points: h,
      rect: [v, E, C, T]
    };
  }
  static deserialize(e, s, n, r, a, {
    paths: {
      lines: o,
      points: h
    },
    rotation: l,
    thickness: c
  }) {
    const d = [];
    let p, y, A, w, S;
    switch (l) {
      case 0:
        S = B._rescale, p = -e / n, y = s / r + 1, A = 1 / n, w = -1 / r;
        break;
      case 90:
        S = B._rescaleAndSwap, p = -s / r, y = -e / n, A = 1 / r, w = 1 / n;
        break;
      case 180:
        S = B._rescale, p = e / n + 1, y = -s / r, A = -1 / n, w = 1 / r;
        break;
      case 270:
        S = B._rescaleAndSwap, p = s / r + 1, y = e / n + 1, A = -1 / r, w = -1 / n;
        break;
    }
    if (!o) {
      o = [];
      for (const E of h) {
        const C = E.length;
        if (C === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, E[0], E[1]]));
          continue;
        }
        if (C === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, E[0], E[1], NaN, NaN, NaN, NaN, E[2], E[3]]));
          continue;
        }
        const T = new Float32Array(3 * (C - 2));
        o.push(T);
        let [x, _, k, R] = E.subarray(0, 4);
        T.set([NaN, NaN, NaN, NaN, x, _], 0);
        for (let I = 4; I < C; I += 2) {
          const N = E[I], P = E[I + 1];
          T.set(B.createBezierPoints(x, _, k, R, N, P), (I - 2) * 3), [x, _, k, R] = [k, R, N, P];
        }
      }
    }
    for (let E = 0, C = o.length; E < C; E++)
      d.push({
        line: S(o[E].map((T) => T ?? NaN), p, y, A, w),
        points: S(h[E].map((T) => T ?? NaN), p, y, A, w)
      });
    const v = new this.prototype.constructor();
    return v.build(d, n, r, 1, l, c, a), v;
  }
  get box() {
    return i(this, Ie);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, be, yw).call(this, s) : null;
  }
  updateParentDimensions([e, s], n) {
    const [r, a] = b(this, be, Di).call(this);
    u(this, wi, e), u(this, vi, s), u(this, Hh, n);
    const [o, h] = b(this, be, Di).call(this), l = o - r, c = h - a, d = i(this, Ie);
    return d[0] -= l, d[1] -= c, d[2] += 2 * l, d[3] += 2 * c, d;
  }
  updateRotation(e) {
    return u(this, $d, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return i(this, Ie).map(B.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = i(this, Ie);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${B.svgRound(e)} ${B.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = i(this, Ie);
    let n = 0, r = 0, a = 0, o = 0, h = 0, l = 0;
    switch (i(this, $d)) {
      case 90:
        r = s / e, a = -e / s, h = e;
        break;
      case 180:
        n = -1, o = -1, h = e, l = s;
        break;
      case 270:
        r = -s / e, a = e / s, l = s;
        break;
      default:
        return "";
    }
    return `matrix(${n} ${r} ${a} ${o} ${B.svgRound(h)} ${B.svgRound(l)})`;
  }
  getPathResizingSVGProperties([e, s, n, r]) {
    const [a, o] = b(this, be, Di).call(this), [h, l, c, d] = i(this, Ie);
    if (Math.abs(c - a) <= B.PRECISION || Math.abs(d - o) <= B.PRECISION) {
      const S = e + n / 2 - (h + c / 2), v = s + r / 2 - (l + d / 2);
      return {
        path: {
          "transform-origin": `${B.svgRound(e)} ${B.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${S} ${v})`
        }
      };
    }
    const p = (n - 2 * a) / (c - 2 * a), y = (r - 2 * o) / (d - 2 * o), A = c / n, w = d / r;
    return {
      path: {
        "transform-origin": `${B.svgRound(h)} ${B.svgRound(l)}`,
        transform: `${this.rotationTransform} scale(${A} ${w}) translate(${B.svgRound(a)} ${B.svgRound(o)}) scale(${p} ${y}) translate(${B.svgRound(-a)} ${B.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, n, r]) {
    const [a, o] = b(this, be, Di).call(this), h = i(this, Ie), [l, c, d, p] = h;
    if (h[0] = e, h[1] = s, h[2] = n, h[3] = r, Math.abs(d - a) <= B.PRECISION || Math.abs(p - o) <= B.PRECISION) {
      const v = e + n / 2 - (l + d / 2), E = s + r / 2 - (c + p / 2);
      for (const {
        line: C,
        points: T
      } of i(this, os))
        B._translate(C, v, E, C), B._translate(T, v, E, T);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${B.svgRound(e)} ${B.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const y = (n - 2 * a) / (d - 2 * a), A = (r - 2 * o) / (p - 2 * o), w = -y * (l + a) + e + a, S = -A * (c + o) + s + o;
    if (y !== 1 || A !== 1 || w !== 0 || S !== 0)
      for (const {
        line: v,
        points: E
      } of i(this, os))
        B._rescale(v, w, S, y, A, v), B._rescale(E, w, S, y, A, E);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${B.svgRound(e)} ${B.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], n) {
    const [r, a] = n, o = i(this, Ie), h = e - o[0], l = s - o[1];
    if (i(this, wi) === r && i(this, vi) === a)
      for (const {
        line: c,
        points: d
      } of i(this, os))
        B._translate(c, h, l, c), B._translate(d, h, l, d);
    else {
      const c = i(this, wi) / r, d = i(this, vi) / a;
      u(this, wi, r), u(this, vi, a);
      for (const {
        line: p,
        points: y
      } of i(this, os))
        B._rescale(p, h, l, c, d, p), B._rescale(y, h, l, c, d, y);
      o[2] *= c, o[3] *= d;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${B.svgRound(e)} ${B.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = i(this, Ie);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${B.svgRound(e[0])} ${B.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
Ie = new WeakMap(), $d = new WeakMap(), zd = new WeakMap(), os = new WeakMap(), wi = new WeakMap(), vi = new WeakMap(), Hh = new WeakMap(), Uh = new WeakMap(), ja = new WeakMap(), be = new WeakSet(), Di = /* @__PURE__ */ f(function(e = i(this, ja)) {
  const s = i(this, zd) + e / 2 * i(this, Hh);
  return i(this, Uh) % 180 === 0 ? [s / i(this, wi), s / i(this, vi)] : [s / i(this, vi), s / i(this, wi)];
}, "#getMarginComponents"), mw = /* @__PURE__ */ f(function() {
  const [e, s, n, r] = i(this, Ie), [a, o] = b(this, be, Di).call(this, 0);
  return [e + a, s + o, n - 2 * a, r - 2 * o];
}, "#getBBoxWithNoMargin"), bw = /* @__PURE__ */ f(function() {
  const e = u(this, Ie, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of i(this, os)) {
    if (r.length <= 12) {
      for (let h = 4, l = r.length; h < l; h += 6)
        D.pointBoundingBox(r[h], r[h + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let h = 6, l = r.length; h < l; h += 6) {
      const [c, d, p, y, A, w] = r.subarray(h, h + 6);
      D.bezierBoundingBox(a, o, c, d, p, y, A, w, e), a = A, o = w;
    }
  }
  const [s, n] = b(this, be, Di).call(this);
  e[0] = he(e[0] - s, 0, 1), e[1] = he(e[1] - n, 0, 1), e[2] = he(e[2] + s, 0, 1), e[3] = he(e[3] + n, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, "#computeBbox"), yw = /* @__PURE__ */ f(function(e) {
  const [s, n] = b(this, be, Di).call(this);
  u(this, ja, e);
  const [r, a] = b(this, be, Di).call(this), [o, h] = [r - s, a - n], l = i(this, Ie);
  return l[0] -= o, l[1] -= h, l[2] += 2 * o, l[3] += 2 * h, l;
}, "#updateThickness"), f(Jy, "InkDrawOutline");
let to = Jy;
const jf = class jf extends cf {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: wt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ??= this["stroke-width"], e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new jf(this._viewParameters);
    return t.updateAll(this), t;
  }
};
f(jf, "InkDrawingOptions");
let uf = jf;
var Vf, Aw;
const Mr = class Mr extends df {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, Vf);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    wt.initialize(e, s), this._defaultDrawingOptions = new uf(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return V(this, "typesMap", /* @__PURE__ */ new Map([[Z.INK_THICKNESS, "stroke-width"], [Z.INK_COLOR, "stroke"], [Z.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, n, r, a) {
    return new Dm(e, s, n, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, n, r, a, o) {
    return to.deserialize(e, s, n, r, a, o);
  }
  static async deserialize(e, s, n) {
    let r = null;
    if (e instanceof tc) {
      const {
        data: {
          inkLists: o,
          rect: h,
          rotation: l,
          id: c,
          color: d,
          opacity: p,
          borderStyle: {
            rawWidth: y
          },
          popupRef: A,
          richText: w,
          contentsObj: S,
          creationDate: v,
          modificationDate: E
        },
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = e;
      r = e = {
        annotationType: z.INK,
        color: Array.from(d),
        thickness: y,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: C - 1,
        rect: h.slice(0),
        rotation: l,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: A,
        richText: w,
        comment: S?.str || null,
        creationDate: v,
        modificationDate: E
      };
    }
    const a = await super.deserialize(e, s, n);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker ||= new Zu(this), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return Z.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: n
    } = this;
    s.updateSVGProperty("stroke-width"), n.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: n
  }) {
    this._drawingOptions = Mr.getDefaultDrawingOptions({
      stroke: D.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": n
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: n
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": a,
        "stroke-width": o
      }
    } = this, h = Object.assign(super.serialize(e), {
      color: wt._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: s,
        points: n
      }
    });
    return this.addComment(h), e ? (h.isCopy = !0, h) : this.annotationElementId && !b(this, Vf, Aw).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: s,
      rect: n
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: n,
      thickness: this._drawingOptions["stroke-width"],
      points: s,
      popup: this.comment
    }), null;
  }
};
Vf = new WeakSet(), Aw = /* @__PURE__ */ f(function(e) {
  const {
    color: s,
    thickness: n,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, h) => o !== s[h]) || e.thickness !== n || e.opacity !== r || e.pageIndex !== a;
}, "#hasElementChanged"), f(Mr, "InkEditor"), M(Mr, "_type", "ink"), M(Mr, "_editorType", z.INK), M(Mr, "_defaultDrawingOptions", null);
let Lm = Mr;
const Zy = class Zy extends to {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
};
f(Zy, "ContourDrawOutline");
let ic = Zy;
const tu = 8, al = 3;
var Va, at, Rm, Vs, ww, vw, Nm, Ru, Sw, Ew, Cw, Bm, Fm, Tw;
const bo = class bo {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: n
  }, r, a, o, h) {
    let l = new OffscreenCanvas(1, 1), c = l.getContext("2d", {
      alpha: !1
    });
    const d = 200, p = c.font = `${s} ${n} ${d}px ${e}`, {
      actualBoundingBoxLeft: y,
      actualBoundingBoxRight: A,
      actualBoundingBoxAscent: w,
      actualBoundingBoxDescent: S,
      fontBoundingBoxAscent: v,
      fontBoundingBoxDescent: E,
      width: C
    } = c.measureText(t), T = 1.5, x = Math.ceil(Math.max(Math.abs(y) + Math.abs(A) || 0, C) * T), _ = Math.ceil(Math.max(Math.abs(w) + Math.abs(S) || d, Math.abs(v) + Math.abs(E) || d) * T);
    l = new OffscreenCanvas(x, _), c = l.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, x, _), c.fillStyle = "black", c.fillText(t, x * (T - 1) / 2, _ * (3 - T) / 2);
    const k = b(this, at, Bm).call(this, c.getImageData(0, 0, x, _).data), R = b(this, at, Cw).call(this, k), I = b(this, at, Fm).call(this, R), N = b(this, at, Nm).call(this, k, x, _, I);
    return this.processDrawnLines({
      lines: {
        curves: N,
        width: x,
        height: _
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: h,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, s, n, r) {
    const [a, o, h] = b(this, at, Tw).call(this, t), [l, c] = b(this, at, Ew).call(this, a, o, h, Math.hypot(o, h) * i(this, Va).sigmaSFactor, i(this, Va).sigmaR, i(this, Va).kernelSize), d = b(this, at, Fm).call(this, c), p = b(this, at, Nm).call(this, l, o, h, d);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: h
      },
      pageWidth: e,
      pageHeight: s,
      rotation: n,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: s,
    rotation: n,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    n % 180 !== 0 && ([e, s] = [s, e]);
    const {
      curves: h,
      width: l,
      height: c
    } = t, d = t.thickness ?? 0, p = [], y = Math.min(e / l, s / c), A = y / e, w = y / s, S = [];
    for (const {
      points: E
    } of h) {
      const C = a ? b(this, at, Sw).call(this, E) : E;
      if (!C)
        continue;
      S.push(C);
      const T = C.length, x = new Float32Array(T), _ = new Float32Array(3 * (T === 2 ? 2 : T - 2));
      if (p.push({
        line: _,
        points: x
      }), T === 2) {
        x[0] = C[0] * A, x[1] = C[1] * w, _.set([NaN, NaN, NaN, NaN, x[0], x[1]], 0);
        continue;
      }
      let [k, R, I, N] = C;
      k *= A, R *= w, I *= A, N *= w, x.set([k, R, I, N], 0), _.set([NaN, NaN, NaN, NaN, k, R], 0);
      for (let P = 4; P < T; P += 2) {
        const Q = x[P] = C[P] * A, j = x[P + 1] = C[P + 1] * w;
        _.set(B.createBezierPoints(k, R, I, N, Q, j), (P - 2) * 3), [k, R, I, N] = [I, N, Q, j];
      }
    }
    if (p.length === 0)
      return null;
    const v = o ? new ic() : new to();
    return v.build(p, e, s, 1, n, o ? 0 : d, r), {
      outline: v,
      newCurves: S,
      areContours: o,
      thickness: d,
      width: l,
      height: c
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: s,
    width: n,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, h = 0;
    for (const E of t) {
      h += E.length;
      for (let C = 2, T = E.length; C < T; C++) {
        const x = E[C] - E[C - 2];
        a = Math.min(a, x), o = Math.max(o, x);
      }
    }
    let l;
    a >= -128 && o <= 127 ? l = Int8Array : a >= -32768 && o <= 32767 ? l = Int16Array : l = Int32Array;
    const c = t.length, d = tu + al * c, p = new Uint32Array(d);
    let y = 0;
    p[y++] = d * Uint32Array.BYTES_PER_ELEMENT + (h - 2 * c) * l.BYTES_PER_ELEMENT, p[y++] = 0, p[y++] = n, p[y++] = r, p[y++] = e ? 0 : 1, p[y++] = Math.max(0, Math.floor(s ?? 0)), p[y++] = c, p[y++] = l.BYTES_PER_ELEMENT;
    for (const E of t)
      p[y++] = E.length - 2, p[y++] = E[0], p[y++] = E[1];
    const A = new CompressionStream("deflate-raw"), w = A.writable.getWriter();
    await w.ready, w.write(p);
    const S = l.prototype.constructor;
    for (const E of t) {
      const C = new S(E.length - 2);
      for (let T = 2, x = E.length; T < x; T++)
        C[T - 2] = E[T] - E[T - 2];
      w.write(C);
    }
    return w.close(), (await new Response(A.readable).bytes()).toBase64();
  }
  static async decompressSignature(t) {
    try {
      const e = Uint8Array.fromBase64(t), {
        readable: s,
        writable: n
      } = new DecompressionStream("deflate-raw"), r = n.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const C of s)
        a ||= new Uint8Array(new Uint32Array(C.buffer, 0, 4)[0]), a.set(C, o), o += C.length;
      const h = new Uint32Array(a.buffer, 0, a.length >> 2), l = h[1];
      if (l !== 0)
        throw new Error(`Invalid version: ${l}`);
      const c = h[2], d = h[3], p = h[4] === 0, y = h[5], A = h[6], w = h[7], S = [], v = (tu + al * A) * Uint32Array.BYTES_PER_ELEMENT;
      let E;
      switch (w) {
        case Int8Array.BYTES_PER_ELEMENT:
          E = new Int8Array(a.buffer, v);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          E = new Int16Array(a.buffer, v);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          E = new Int32Array(a.buffer, v);
          break;
      }
      o = 0;
      for (let C = 0; C < A; C++) {
        const T = h[al * C + tu], x = new Float32Array(T + 2);
        S.push(x);
        for (let _ = 0; _ < al - 1; _++)
          x[_] = h[al * C + tu + _ + 1];
        for (let _ = 0; _ < T; _++)
          x[_ + 2] = x[_] + E[o++];
      }
      return {
        areContours: p,
        thickness: y,
        outlines: S,
        width: c,
        height: d
      };
    } catch (e) {
      return W(`decompressSignature: ${e}`), null;
    }
  }
};
Va = new WeakMap(), at = new WeakSet(), Rm = /* @__PURE__ */ f(function(t, e, s, n) {
  return s -= t, n -= e, s === 0 ? n > 0 ? 0 : 4 : s === 1 ? n + 6 : 2 - n;
}, "#neighborIndexToId"), Vs = new WeakMap(), ww = /* @__PURE__ */ f(function(t, e, s, n, r, a, o) {
  const h = b(this, at, Rm).call(this, s, n, r, a);
  for (let l = 0; l < 8; l++) {
    const c = (-l + h - o + 16) % 8, d = i(this, Vs)[2 * c], p = i(this, Vs)[2 * c + 1];
    if (t[(s + d) * e + (n + p)] !== 0)
      return c;
  }
  return -1;
}, "#clockwiseNonZero"), vw = /* @__PURE__ */ f(function(t, e, s, n, r, a, o) {
  const h = b(this, at, Rm).call(this, s, n, r, a);
  for (let l = 0; l < 8; l++) {
    const c = (l + h + o + 16) % 8, d = i(this, Vs)[2 * c], p = i(this, Vs)[2 * c + 1];
    if (t[(s + d) * e + (n + p)] !== 0)
      return c;
  }
  return -1;
}, "#counterClockwiseNonZero"), Nm = /* @__PURE__ */ f(function(t, e, s, n) {
  const r = t.length, a = new Int32Array(r);
  for (let c = 0; c < r; c++)
    a[c] = t[c] <= n ? 1 : 0;
  for (let c = 1; c < s - 1; c++)
    a[c * e] = a[c * e + e - 1] = 0;
  for (let c = 0; c < e; c++)
    a[c] = a[e * s - 1 - c] = 0;
  let o = 1, h;
  const l = [];
  for (let c = 1; c < s - 1; c++) {
    h = 1;
    for (let d = 1; d < e - 1; d++) {
      const p = c * e + d, y = a[p];
      if (y === 0)
        continue;
      let A = c, w = d;
      if (y === 1 && a[p - 1] === 0)
        o += 1, w -= 1;
      else if (y >= 1 && a[p + 1] === 0)
        o += 1, w += 1, y > 1 && (h = y);
      else {
        y !== 1 && (h = Math.abs(y));
        continue;
      }
      const S = [d, c], v = w === d + 1, E = {
        isHole: v,
        points: S,
        id: o,
        parent: 0
      };
      l.push(E);
      let C;
      for (const P of l)
        if (P.id === h) {
          C = P;
          break;
        }
      C ? C.isHole ? E.parent = v ? C.parent : h : E.parent = v ? h : C.parent : E.parent = v ? h : 0;
      const T = b(this, at, ww).call(this, a, e, c, d, A, w, 0);
      if (T === -1) {
        a[p] = -o, a[p] !== 1 && (h = Math.abs(a[p]));
        continue;
      }
      let x = i(this, Vs)[2 * T], _ = i(this, Vs)[2 * T + 1];
      const k = c + x, R = d + _;
      A = k, w = R;
      let I = c, N = d;
      for (; ; ) {
        const P = b(this, at, vw).call(this, a, e, I, N, A, w, 1);
        x = i(this, Vs)[2 * P], _ = i(this, Vs)[2 * P + 1];
        const Q = I + x, j = N + _;
        S.push(j, Q);
        const $ = I * e + N;
        if (a[$ + 1] === 0 ? a[$] = -o : a[$] === 1 && (a[$] = o), Q === c && j === d && I === k && N === R) {
          a[p] !== 1 && (h = Math.abs(a[p]));
          break;
        } else
          A = I, w = N, I = Q, N = j;
      }
    }
  }
  return l;
}, "#findContours"), Ru = /* @__PURE__ */ f(function(t, e, s, n) {
  if (s - e <= 4) {
    for (let k = e; k < s - 2; k += 2)
      n.push(t[k], t[k + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, h = t[s - 3] - a, l = Math.hypot(o, h), c = o / l, d = h / l, p = c * a - d * r, y = h / o, A = 1 / l, w = Math.atan(y), S = Math.cos(w), v = Math.sin(w), E = A * (Math.abs(S) + Math.abs(v)), C = A * (1 - E + E ** 2), T = Math.max(Math.atan(Math.abs(v + S) * C), Math.atan(Math.abs(v - S) * C));
  let x = 0, _ = e;
  for (let k = e + 2; k < s - 2; k += 2) {
    const R = Math.abs(p - c * t[k + 1] + d * t[k]);
    R > x && (_ = k, x = R);
  }
  x > (l * T) ** 2 ? (b(this, at, Ru).call(this, t, e, _ + 2, n), b(this, at, Ru).call(this, t, _, s, n)) : n.push(r, a);
}, "#douglasPeuckerHelper"), Sw = /* @__PURE__ */ f(function(t) {
  const e = [], s = t.length;
  return b(this, at, Ru).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, "#douglasPeucker"), Ew = /* @__PURE__ */ f(function(t, e, s, n, r, a) {
  const o = new Float32Array(a ** 2), h = -2 * n ** 2, l = a >> 1;
  for (let w = 0; w < a; w++) {
    const S = (w - l) ** 2;
    for (let v = 0; v < a; v++)
      o[w * a + v] = Math.exp((S + (v - l) ** 2) / h);
  }
  const c = new Float32Array(256), d = -2 * r ** 2;
  for (let w = 0; w < 256; w++)
    c[w] = Math.exp(w ** 2 / d);
  const p = t.length, y = new Uint8Array(p), A = new Uint32Array(256);
  for (let w = 0; w < s; w++)
    for (let S = 0; S < e; S++) {
      const v = w * e + S, E = t[v];
      let C = 0, T = 0;
      for (let _ = 0; _ < a; _++) {
        const k = w + _ - l;
        if (!(k < 0 || k >= s))
          for (let R = 0; R < a; R++) {
            const I = S + R - l;
            if (I < 0 || I >= e)
              continue;
            const N = t[k * e + I], P = o[_ * a + R] * c[Math.abs(N - E)];
            C += N * P, T += P;
          }
      }
      const x = y[v] = Math.round(C / T);
      A[x]++;
    }
  return [y, A];
}, "#bilateralFilter"), Cw = /* @__PURE__ */ f(function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, "#getHistogram"), Bm = /* @__PURE__ */ f(function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let n = -1 / 0, r = 1 / 0;
  for (let o = 0, h = s.length; o < h; o++) {
    const l = s[o] = t[o << 2];
    n = Math.max(n, l), r = Math.min(r, l);
  }
  const a = 255 / (n - r);
  for (let o = 0, h = s.length; o < h; o++)
    s[o] = (s[o] - r) * a;
  return s;
}, "#toUint8"), Fm = /* @__PURE__ */ f(function(t) {
  let e, s = -1 / 0, n = -1 / 0;
  const r = t.findIndex((h) => h !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const h = t[e];
    h > s && (e - a > n && (n = e - a, o = e - 1), s = h, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, "#guessThreshold"), Tw = /* @__PURE__ */ f(function(t) {
  const e = t, {
    width: s,
    height: n
  } = t, {
    maxDim: r
  } = i(this, Va);
  let a = s, o = n;
  if (s > r || n > r) {
    let p = s, y = n, A = Math.log2(Math.max(s, n) / r);
    const w = Math.floor(A);
    A = A === w ? w - 1 : w;
    for (let v = 0; v < A; v++) {
      a = Math.ceil(p / 2), o = Math.ceil(y / 2);
      const E = new OffscreenCanvas(a, o);
      E.getContext("2d").drawImage(t, 0, 0, p, y, 0, 0, a, o), p = a, y = o, t !== e && t.close(), t = E.transferToImageBitmap();
    }
    const S = Math.min(r / a, r / o);
    a = Math.round(a * S), o = Math.round(o * S);
  }
  const l = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  l.fillStyle = "white", l.fillRect(0, 0, a, o), l.filter = "grayscale(1)", l.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = l.getImageData(0, 0, a, o).data;
  return [b(this, at, Bm).call(this, c), a, o];
}, "#getGrayPixels"), m(bo, at), f(bo, "SignatureExtractor"), m(bo, Va, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), m(bo, Vs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
let kn = bo;
const Wf = class Wf extends cf {
  constructor() {
    super(), super.updateProperties({
      fill: wt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new Wf();
    return t.updateAll(this), t;
  }
};
f(Wf, "SignatureOptions");
let Om = Wf;
const Xf = class Xf extends uf {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: wt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Xf(this._viewParameters);
    return t.updateAll(this), t;
  }
};
f(Xf, "DrawnSignatureOptions");
let Hm = Xf;
var pr, Si, gr, Wa;
const Oe = class Oe extends df {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    m(this, pr, !1);
    m(this, Si, null);
    m(this, gr, null);
    m(this, Wa, null);
    this._willKeepAspectRatio = !0, u(this, gr, e.signatureData || null), u(this, Si, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    wt.initialize(e, s), this._defaultDrawingOptions = new Om(), this._defaultDrawnSignatureOptions = new Hm(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return V(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!i(this, Si)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasDescription");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    const {
      _isCopy: n
    } = this;
    if (n && (this._isCopy = !1, e = this.x, s = this.y), super.render(), this._drawId === null)
      if (i(this, gr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: h,
          uuid: l,
          heightInPage: c
        } = i(this, gr), {
          rawDims: {
            pageWidth: d,
            pageHeight: p
          },
          rotation: y
        } = this.parent.viewport, A = kn.processDrawnLines({
          lines: r,
          pageWidth: d,
          pageHeight: p,
          rotation: y,
          innerMargin: Oe._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(A, c, h, l);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: i(this, Si) || ""
      }));
    return n && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    u(this, Wa, e), this.addEditToolbar();
  }
  getUuid() {
    return i(this, Wa);
  }
  get description() {
    return i(this, Si);
  }
  set description(e) {
    u(this, Si, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((s) => {
      s?.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: s,
      thickness: n,
      width: r,
      height: a
    } = i(this, gr), o = Math.max(r, a), h = kn.processDrawnLines({
      lines: {
        curves: e.map((l) => ({
          points: l
        })),
        thickness: n,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: s
    });
    return {
      areContours: s,
      outline: h.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, s, n, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: h
    } = u(this, gr, e);
    u(this, pr, h instanceof ic), this.description = n;
    let l;
    i(this, pr) ? l = Oe.getDefaultDrawingOptions() : (l = Oe._defaultDrawnSignatureOptions.clone(), l.updateProperties({
      "stroke-width": h.thickness
    })), this._addOutlines({
      drawOutlines: h,
      drawingOptions: l
    });
    const [, c] = this.pageDimensions;
    let d = s / c;
    d = d >= 1 ? 0.5 : d, this.width *= d / this.height, this.width >= 1 && (d *= 0.9 / this.width, this.width = 0.9), this.height = d, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!n
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: n
      },
      rotation: r
    } = this.parent.viewport;
    return kn.process(e, s, n, r, Oe._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return kn.extractContoursFromText(e, s, n, r, a, Oe._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: n
      },
      rotation: r
    } = this.parent.viewport;
    return kn.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: n,
      rotation: r,
      innerMargin: Oe._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = Oe.getDefaultDrawingOptions() : (this._drawingOptions = Oe._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": s
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: s,
      points: n
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, a = Object.assign(super.serialize(e), {
      isSignature: !0,
      areContours: i(this, pr),
      color: [0, 0, 0],
      thickness: i(this, pr) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: s,
      points: n
    }, a.uuid = i(this, Wa), a.isCopy = !0) : a.lines = s, i(this, Si) && (a.accessibilityData = {
      type: "Figure",
      alt: i(this, Si)
    }), a;
  }
  static deserializeDraw(e, s, n, r, a, o) {
    return o.areContours ? ic.deserialize(e, s, n, r, a, o) : to.deserialize(e, s, n, r, a, o);
  }
  static async deserialize(e, s, n) {
    const r = await super.deserialize(e, s, n);
    return u(r, pr, e.areContours), r.description = e.accessibilityData?.alt || "", u(r, Wa, e.uuid), r;
  }
};
pr = new WeakMap(), Si = new WeakMap(), gr = new WeakMap(), Wa = new WeakMap(), f(Oe, "SignatureEditor"), M(Oe, "_type", "signature"), M(Oe, "_editorType", z.SIGNATURE), M(Oe, "_defaultDrawingOptions", null);
let Um = Oe;
var Ct, ae, mr, hn, br, Gh, ln, Xa, Ei, hs, $h, et, xl, _l, Nu, Bu, Fu, $m, Ou, xw;
const Bl = class Bl extends wt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, et);
    m(this, Ct, null);
    m(this, ae, null);
    m(this, mr, null);
    m(this, hn, null);
    m(this, br, null);
    m(this, Gh, "");
    m(this, ln, null);
    m(this, Xa, !1);
    m(this, Ei, null);
    m(this, hs, !1);
    m(this, $h, !1);
    u(this, hn, e.bitmapUrl), u(this, br, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    wt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return bp.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: z.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: n
    } = this._uiManager;
    if (!n)
      throw new Error("No ML.");
    if (!await n.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, h = await n.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!h)
      throw new Error("No response from the AI service.");
    if (h.error)
      throw new Error("Error from the AI service.");
    if (h.cancel)
      return null;
    if (!h.output)
      throw new Error("No valid response from the AI service.");
    const l = h.output;
    return await this.setGuessedAltText(l), s && !this.hasAltTextData() && (this.altTextData = {
      alt: l,
      decorative: !1
    }), l;
  }
  remove() {
    i(this, ae) && (u(this, Ct, null), this._uiManager.imageManager.deleteId(i(this, ae)), i(this, ln)?.remove(), u(this, ln, null), i(this, Ei) && (clearTimeout(i(this, Ei)), u(this, Ei, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      i(this, ae) && b(this, et, Nu).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (i(this, ae) && i(this, ln) === null && b(this, et, Nu).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(i(this, mr) || i(this, Ct) || i(this, hn) || i(this, br) || i(this, ae) || i(this, Xa));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), i(this, Xa) || (i(this, Ct) ? b(this, et, Bu).call(this) : b(this, et, Nu).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: n,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), n && this._uiManager.imageManager.isValidId(n) && (u(this, ae, n), r && u(this, Ct, r), u(this, Xa, !1), b(this, et, Bu).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    i(this, Ei) !== null && clearTimeout(i(this, Ei)), u(this, Ei, setTimeout(() => {
      u(this, Ei, null), b(this, et, $m).call(this);
    }, 200));
  }
  copyCanvas(e, s, n = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = i(this, Ct), o = new bn();
    let h = i(this, Ct), l = r, c = a, d = null;
    if (s) {
      if (r > s || a > s) {
        const k = Math.min(s / r, s / a);
        l = Math.floor(r * k), c = Math.floor(a * k);
      }
      d = document.createElement("canvas");
      const y = d.width = Math.ceil(l * o.sx), A = d.height = Math.ceil(c * o.sy);
      i(this, hs) || (h = b(this, et, Fu).call(this, y, A));
      const w = d.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let S = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : yp.isDarkMode && (S = "#8f8f9d", v = "#42414d");
      const E = 15, C = E * o.sx, T = E * o.sy, x = new OffscreenCanvas(C * 2, T * 2), _ = x.getContext("2d");
      _.fillStyle = S, _.fillRect(0, 0, C * 2, T * 2), _.fillStyle = v, _.fillRect(0, 0, C, T), _.fillRect(C, T, C, T), w.fillStyle = w.createPattern(x, "repeat"), w.fillRect(0, 0, y, A), w.drawImage(h, 0, 0, h.width, h.height, 0, 0, y, A);
    }
    let p = null;
    if (n) {
      let y, A;
      if (o.symmetric && h.width < e && h.height < e)
        y = h.width, A = h.height;
      else if (h = i(this, Ct), r > e || a > e) {
        const v = Math.min(e / r, e / a);
        y = Math.floor(r * v), A = Math.floor(a * v), i(this, hs) || (h = b(this, et, Fu).call(this, y, A));
      }
      const S = new OffscreenCanvas(y, A).getContext("2d", {
        willReadFrequently: !0
      });
      S.drawImage(h, 0, 0, h.width, h.height, 0, 0, y, A), p = {
        width: y,
        height: A,
        data: S.getImageData(0, 0, y, A).data
      };
    }
    return {
      canvas: d,
      width: l,
      height: c,
      imageData: p
    };
  }
  static async deserialize(e, s, n) {
    let r = null, a = !1;
    if (e instanceof af) {
      const {
        data: {
          rect: S,
          rotation: v,
          id: E,
          structParent: C,
          popupRef: T,
          richText: x,
          contentsObj: _,
          creationDate: k,
          modificationDate: R
        },
        container: I,
        parent: {
          page: {
            pageNumber: N
          }
        },
        canvas: P
      } = e;
      let Q, j;
      P ? (delete e.canvas, {
        id: Q,
        bitmap: j
      } = n.imageManager.getFromCanvas(I.id, P), P.remove()) : (a = !0, e._hasNoCanvas = !0);
      const $ = (await s._structTree.getAriaAttributes(`${fo}${E}`))?.get("aria-label") || "";
      r = e = {
        annotationType: z.STAMP,
        bitmapId: Q,
        bitmap: j,
        pageIndex: N - 1,
        rect: S.slice(0),
        rotation: v,
        annotationElementId: E,
        id: E,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: $
        },
        isSvg: !1,
        structParent: C,
        popupRef: T,
        richText: x,
        comment: _?.str || null,
        creationDate: k,
        modificationDate: R
      };
    }
    const o = await super.deserialize(e, s, n), {
      rect: h,
      bitmap: l,
      bitmapUrl: c,
      bitmapId: d,
      isSvg: p,
      accessibilityData: y
    } = e;
    a ? (n.addMissingCanvas(e.id, o), u(o, Xa, !0)) : d && n.imageManager.isValidId(d) ? (u(o, ae, d), l && u(o, Ct, l)) : u(o, hn, c), u(o, hs, p);
    const [A, w] = o.pageDimensions;
    return o.width = (h[2] - h[0]) / A, o.height = (h[3] - h[1]) / w, y && (o.altTextData = y), o._initialData = r, e.comment && o.setCommentData(e), u(o, $h, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const n = Object.assign(super.serialize(e), {
      bitmapId: i(this, ae),
      isSvg: i(this, hs)
    });
    if (this.addComment(n), e)
      return n.bitmapUrl = b(this, et, Ou).call(this, !0), n.accessibilityData = this.serializeAltText(!0), n.isCopy = !0, n;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (n.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const h = b(this, et, xw).call(this, n);
      return h.isSame ? null : (h.isSameAltText ? delete n.accessibilityData : n.accessibilityData.structParent = this._initialData.structParent ?? -1, n.id = this.annotationElementId, delete n.bitmapId, n);
    }
    if (s === null)
      return n;
    s.stamps ||= /* @__PURE__ */ new Map();
    const o = i(this, hs) ? (n.rect[2] - n.rect[0]) * (n.rect[3] - n.rect[1]) : null;
    if (!s.stamps.has(i(this, ae)))
      s.stamps.set(i(this, ae), {
        area: o,
        serialized: n
      }), n.bitmap = b(this, et, Ou).call(this, !1);
    else if (i(this, hs)) {
      const h = s.stamps.get(i(this, ae));
      o > h.area && (h.area = o, h.serialized.bitmap.close(), h.serialized.bitmap = b(this, et, Ou).call(this, !1));
    }
    return n;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
};
Ct = new WeakMap(), ae = new WeakMap(), mr = new WeakMap(), hn = new WeakMap(), br = new WeakMap(), Gh = new WeakMap(), ln = new WeakMap(), Xa = new WeakMap(), Ei = new WeakMap(), hs = new WeakMap(), $h = new WeakMap(), et = new WeakSet(), xl = /* @__PURE__ */ f(function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  u(this, Ct, e.bitmap), s || (u(this, ae, e.id), u(this, hs, e.isSvg)), e.file && u(this, Gh, e.file.name), b(this, et, Bu).call(this);
}, "#getBitmapFetched"), _l = /* @__PURE__ */ f(function() {
  if (u(this, mr, null), this._uiManager.enableWaiting(!1), !!i(this, ln)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && i(this, Ct)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && i(this, Ct)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, "#getBitmapDone"), Nu = /* @__PURE__ */ f(function() {
  if (i(this, ae)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(i(this, ae)).then((n) => b(this, et, xl).call(this, n, !0)).finally(() => b(this, et, _l).call(this));
    return;
  }
  if (i(this, hn)) {
    const n = i(this, hn);
    u(this, hn, null), this._uiManager.enableWaiting(!0), u(this, mr, this._uiManager.imageManager.getFromUrl(n).then((r) => b(this, et, xl).call(this, r)).finally(() => b(this, et, _l).call(this)));
    return;
  }
  if (i(this, br)) {
    const n = i(this, br);
    u(this, br, null), this._uiManager.enableWaiting(!0), u(this, mr, this._uiManager.imageManager.getFromFile(n).then((r) => b(this, et, xl).call(this, r)).finally(() => b(this, et, _l).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = bp.join(",");
  const s = this._uiManager._signal;
  u(this, mr, new Promise((n) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), b(this, et, xl).call(this, r);
      }
      n();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), n();
    }, {
      signal: s
    });
  }).finally(() => b(this, et, _l).call(this))), e.click();
}, "#getBitmap"), Bu = /* @__PURE__ */ f(function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: n
  } = i(this, Ct);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, n = this.height * a;
  else if (s > o * r || n > o * a) {
    const l = Math.min(o * r / s, o * a / n);
    s *= l, n *= l;
  }
  this._uiManager.enableWaiting(!1);
  const h = u(this, ln, document.createElement("canvas"));
  h.setAttribute("role", "img"), this.addContainer(h), this.width = s / r, this.height = n / a, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, et, $m).call(this), i(this, $h) || (this.parent.addUndoableEditor(this), u(this, $h, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), i(this, Gh) && this.div.setAttribute("aria-description", i(this, Gh)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, "#createCanvas"), Fu = /* @__PURE__ */ f(function(e, s) {
  const {
    width: n,
    height: r
  } = i(this, Ct);
  let a = n, o = r, h = i(this, Ct);
  for (; a > 2 * e || o > 2 * s; ) {
    const l = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const d = new OffscreenCanvas(a, o);
    d.getContext("2d").drawImage(h, 0, 0, l, c, 0, 0, a, o), h = d.transferToImageBitmap();
  }
  return h;
}, "#scaleBitmap"), $m = /* @__PURE__ */ f(function() {
  const [e, s] = this.parentDimensions, {
    width: n,
    height: r
  } = this, a = new bn(), o = Math.ceil(n * e * a.sx), h = Math.ceil(r * s * a.sy), l = i(this, ln);
  if (!l || l.width === o && l.height === h)
    return;
  l.width = o, l.height = h;
  const c = i(this, hs) ? i(this, Ct) : b(this, et, Fu).call(this, o, h), d = l.getContext("2d");
  d.filter = this._uiManager.hcmFilter, d.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, h);
}, "#drawBitmap"), Ou = /* @__PURE__ */ f(function(e) {
  if (e) {
    if (i(this, hs)) {
      const r = this._uiManager.imageManager.getSvgUrl(i(this, ae));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = i(this, Ct), s.getContext("2d").drawImage(i(this, Ct), 0, 0), s.toDataURL();
  }
  if (i(this, hs)) {
    const [s, n] = this.pageDimensions, r = Math.round(this.width * s * Er.PDF_TO_CSS_UNITS), a = Math.round(this.height * n * Er.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(i(this, Ct), 0, 0, i(this, Ct).width, i(this, Ct).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(i(this, Ct));
}, "#serializeBitmap"), xw = /* @__PURE__ */ f(function(e) {
  const {
    pageIndex: s,
    accessibilityData: {
      altText: n
    }
  } = this._initialData, r = e.pageIndex === s, a = (e.accessibilityData?.alt || "") === n;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, "#hasElementChanged"), f(Bl, "StampEditor"), M(Bl, "_type", "stamp"), M(Bl, "_editorType", z.STAMP);
let Gm = Bl;
var Ya, zh, yr, Ar, cn, ze, wr, jh, Vh, Ws, dn, oe, un, vr, Wh, O, Sr, bt, jm, _w, Zs, Vm, Wm, Hu;
const gs = class gs {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: n,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: h,
    viewport: l,
    l10n: c
  }) {
    m(this, bt);
    m(this, Ya);
    m(this, zh, !1);
    m(this, yr, null);
    m(this, Ar, null);
    m(this, cn, null);
    m(this, ze, /* @__PURE__ */ new Map());
    m(this, wr, !1);
    m(this, jh, !1);
    m(this, Vh, !1);
    m(this, Ws, null);
    m(this, dn, null);
    m(this, oe, null);
    m(this, un, null);
    m(this, vr, null);
    m(this, Wh, -1);
    m(this, O);
    const d = [...i(gs, Sr).values()];
    if (!gs._initialized) {
      gs._initialized = !0;
      for (const p of d)
        p.initialize(c, t);
    }
    t.registerEditorTypes(d), u(this, O, t), this.pageIndex = e, this.div = s, u(this, Ya, r), u(this, yr, a), this.viewport = l, u(this, oe, h), this.drawLayer = o, this._structTree = n, i(this, O).addLayer(this);
  }
  get isEmpty() {
    return i(this, ze).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && i(this, O).getMode() === z.NONE;
  }
  updateToolbar(t) {
    i(this, O).updateToolbar(t);
  }
  updateMode(t = i(this, O).getMode()) {
    switch (b(this, bt, Hu).call(this), t) {
      case z.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case z.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case z.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === z.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const s of i(gs, Sr).values())
        e.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    return t === i(this, oe)?.div;
  }
  setEditingState(t) {
    i(this, O).setEditingState(t);
  }
  addCommands(t) {
    i(this, O).addCommands(t);
  }
  cleanUndoStack(t) {
    i(this, O).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    i(this, yr)?.togglePointerEvents(t);
  }
  async enable() {
    u(this, Vh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), i(this, vr)?.abort(), u(this, vr, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of i(this, bt, jm))
      s.enableEditing(), s.show(!0), s.annotationElementId && (i(this, O).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = i(this, yr);
    if (e)
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), i(this, O).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
          continue;
        const n = await this.deserialize(s);
        n && (this.addOrRebuild(n), n.enableEditing());
      }
    u(this, Vh, !1), i(this, O)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    if (u(this, jh, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), i(this, oe) && !i(this, vr)) {
      u(this, vr, new AbortController());
      const n = i(this, O).combinedSignal(i(this, vr));
      i(this, oe).div.addEventListener("pointerdown", (r) => {
        const {
          clientX: o,
          clientY: h,
          timeStamp: l
        } = r, c = i(this, Wh);
        if (l - c > 500) {
          u(this, Wh, l);
          return;
        }
        u(this, Wh, -1);
        const {
          classList: d
        } = this.div;
        d.toggle("getElements", !0);
        const p = document.elementsFromPoint(o, h);
        if (d.toggle("getElements", !1), !this.div.contains(p[0]))
          return;
        let y;
        const A = new RegExp(`^${Fl}[0-9]+$`);
        for (const S of p)
          if (A.test(S.id)) {
            y = S.id;
            break;
          }
        if (!y)
          return;
        const w = i(this, ze).get(y);
        w?.annotationElementId === null && (r.stopPropagation(), r.preventDefault(), w.dblclick(r));
      }, {
        signal: n,
        capture: !0
      });
    }
    const t = i(this, yr), e = [];
    if (t) {
      const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const a of i(this, bt, jm)) {
        if (a.disableEditing(), !a.annotationElementId) {
          e.push(a);
          continue;
        }
        if (a.serialize() !== null) {
          n.set(a.annotationElementId, a);
          continue;
        } else
          r.set(a.annotationElementId, a);
        this.getEditableAnnotation(a.annotationElementId)?.show(), a.remove();
      }
      for (const a of t.getEditableAnnotations()) {
        const {
          id: o
        } = a.data;
        if (i(this, O).isDeletedAnnotationElement(o)) {
          a.updateEdited({
            deleted: !0
          });
          continue;
        }
        let h = r.get(o);
        if (h) {
          h.resetAnnotationElement(a), h.show(!1), a.show();
          continue;
        }
        h = n.get(o), h && (i(this, O).addChangedExistingAnnotation(h), h.renderAnnotationElement(a) && h.show(!1)), a.show();
      }
    }
    b(this, bt, Hu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of i(gs, Sr).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), t?.updateFakeAnnotations(e), u(this, jh, !1);
  }
  getEditableAnnotation(t) {
    return i(this, yr)?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    i(this, O).getActive() !== t && i(this, O).setActiveEditor(t);
  }
  enableTextSelection() {
    if (this.div.tabIndex = -1, i(this, oe)?.div && !i(this, un)) {
      u(this, un, new AbortController());
      const t = i(this, O).combinedSignal(i(this, un));
      i(this, oe).div.addEventListener("pointerdown", b(this, bt, _w).bind(this), {
        signal: t
      }), i(this, oe).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0, i(this, oe)?.div && i(this, un) && (i(this, un).abort(), u(this, un, null), i(this, oe).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (i(this, Ar))
      return;
    u(this, Ar, new AbortController());
    const t = i(this, O).combinedSignal(i(this, Ar));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    i(this, Ar)?.abort(), u(this, Ar, null);
  }
  attach(t) {
    i(this, ze).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && i(this, O).isDeletedAnnotationElement(e) && i(this, O).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    i(this, ze).delete(t.id), i(this, Ya)?.removePointerInTextLayer(t.contentDiv), !i(this, jh) && t.annotationElementId && i(this, O).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), i(this, O).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    t.parent !== this && (t.parent && t.annotationElementId && (i(this, O).addDeletedAnnotationElement(t), wt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), i(this, O).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!i(this, Vh)), i(this, O).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !i(this, cn) && (t._focusEventsAllowed = !1, u(this, cn, setTimeout(() => {
      u(this, cn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: i(this, O)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = i(this, Ya)?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent ||= this, t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = /* @__PURE__ */ f(() => t._uiManager.rebuild(t), "cmd"), s = /* @__PURE__ */ f(() => {
      t.remove();
    }, "undo");
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const e of i(this, ze).values())
      if (e.uid === t)
        return e;
    return null;
  }
  combinedSignal(t) {
    return i(this, O).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    return i(this, bt, Zs)?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await i(this, O).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: n
    } = b(this, bt, Wm).call(this), r = i(this, O).getId(), a = b(this, bt, Vm).call(this, {
      parent: this,
      id: r,
      x: s,
      y: n,
      uiManager: i(this, O),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    return await i(gs, Sr).get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, i(this, O)) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const n = i(this, O).getId(), r = b(this, bt, Vm).call(this, {
      parent: this,
      id: n,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: i(this, O),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(b(this, bt, Wm).call(this), !0, t);
  }
  setSelected(t) {
    i(this, O).setSelected(t);
  }
  toggleSelected(t) {
    i(this, O).toggleSelected(t);
  }
  unselect(t) {
    i(this, O).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Gt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !i(this, wr) || (u(this, wr, !1), i(this, bt, Zs)?.isDrawer && i(this, bt, Zs).supportMultipleDrawings))
      return;
    if (!i(this, zh)) {
      u(this, zh, !0);
      return;
    }
    const s = i(this, O).getMode();
    if (s === z.STAMP || s === z.POPUP || s === z.SIGNATURE) {
      i(this, O).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    if (i(this, O).getMode() === z.HIGHLIGHT && this.enableTextSelection(), i(this, wr)) {
      u(this, wr, !1);
      return;
    }
    const {
      isMac: e
    } = Gt.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (u(this, wr, !0), i(this, bt, Zs)?.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = i(this, O).getActive();
    u(this, zh, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), i(this, Ws)) {
      i(this, bt, Zs).startDrawing(this, i(this, O), !1, t);
      return;
    }
    i(this, O).setCurrentDrawingSession(this), u(this, Ws, new AbortController());
    const e = i(this, O).combinedSignal(i(this, Ws));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (u(this, dn, null), this.commitOrRemove());
    }, {
      signal: e
    }), i(this, bt, Zs).startDrawing(this, i(this, O), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && u(this, dn, e);
      return;
    }
    i(this, dn) && setTimeout(() => {
      i(this, dn)?.focus(), u(this, dn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return i(this, Ws) ? (i(this, O).setCurrentDrawingSession(null), i(this, Ws).abort(), u(this, Ws, null), u(this, dn, null), i(this, bt, Zs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const n = i(this, O).findParent(e, s);
    return n === null || n === this ? !1 : (n.changeParent(t), !0);
  }
  commitOrRemove() {
    return i(this, Ws) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    i(this, Ws) && i(this, bt, Zs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove(), i(this, O).getActive()?.parent === this && (i(this, O).commitOrRemove(), i(this, O).setActiveEditor(null)), i(this, cn) && (clearTimeout(i(this, cn)), u(this, cn, null));
    for (const t of i(this, ze).values())
      i(this, Ya)?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
    this.div = null, i(this, ze).clear(), i(this, O).removeLayer(this);
  }
  async render({
    viewport: t
  }) {
    this.viewport = t, qa(this.div, t);
    for (const e of i(this, O).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    await i(this, O).findClonesForPage(this), this.div.hidden = this.isEmpty, this.updateMode();
  }
  update({
    viewport: t
  }) {
    i(this, O).commitOrRemove(), b(this, bt, Hu).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, qa(this.div, {
      rotation: s
    }), e !== s)
      for (const n of i(this, ze).values())
        n.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return i(this, O).viewParameters.realScale;
  }
};
Ya = new WeakMap(), zh = new WeakMap(), yr = new WeakMap(), Ar = new WeakMap(), cn = new WeakMap(), ze = new WeakMap(), wr = new WeakMap(), jh = new WeakMap(), Vh = new WeakMap(), Ws = new WeakMap(), dn = new WeakMap(), oe = new WeakMap(), un = new WeakMap(), vr = new WeakMap(), Wh = new WeakMap(), O = new WeakMap(), Sr = new WeakMap(), bt = new WeakSet(), jm = /* @__PURE__ */ f(function() {
  return i(this, ze).size !== 0 ? i(this, ze).values() : i(this, O).getEditors(this.pageIndex);
}, "#allEditorsIterator"), _w = /* @__PURE__ */ f(function(t) {
  i(this, O).unselectAll();
  const {
    target: e
  } = t;
  if (e === i(this, oe).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && i(this, oe).div.contains(e)) {
    const {
      isMac: s
    } = Gt.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    i(this, O).showAllEditors("highlight", !0, !0), i(this, oe).div.classList.add("free"), this.toggleDrawing(), lf.startHighlighting(this, i(this, O).direction === "ltr", {
      target: i(this, oe).div,
      x: t.x,
      y: t.y
    }), i(this, oe).div.addEventListener("pointerup", () => {
      i(this, oe).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: i(this, O)._signal
    }), t.preventDefault();
  }
}, "#textLayerPointerDown"), Zs = /* @__PURE__ */ f(function() {
  return i(gs, Sr).get(i(this, O).getMode());
}, "#currentEditorType"), Vm = /* @__PURE__ */ f(function(t) {
  const e = i(this, bt, Zs);
  return e ? new e.prototype.constructor(t) : null;
}, "#createNewEditor"), Wm = /* @__PURE__ */ f(function() {
  const {
    x: t,
    y: e,
    width: s,
    height: n
  } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), h = Math.min(window.innerHeight, e + n), l = (r + o) / 2 - t, c = (a + h) / 2 - e, [d, p] = this.viewport.rotation % 180 === 0 ? [l, c] : [c, l];
  return {
    offsetX: d,
    offsetY: p
  };
}, "#getCenterPoint"), Hu = /* @__PURE__ */ f(function() {
  for (const t of i(this, ze).values())
    t.isEmpty() && t.remove();
}, "#cleanup"), f(gs, "AnnotationEditorLayer"), M(gs, "_initialized", !1), m(gs, Sr, new Map([Sm, Lm, Gm, lf, Um].map((t) => [t._editorType, t])));
let zm = gs;
var Xs, De, Ka, jd, Yf, kw, _i, Ym, Mw, Km;
const Wt = class Wt {
  constructor() {
    m(this, _i);
    m(this, Xs, null);
    m(this, De, /* @__PURE__ */ new Map());
    m(this, Ka, /* @__PURE__ */ new Map());
  }
  setParent(t) {
    if (!i(this, Xs)) {
      u(this, Xs, t);
      return;
    }
    if (i(this, Xs) !== t) {
      if (i(this, De).size > 0)
        for (const e of i(this, De).values())
          e.remove(), t.append(e);
      u(this, Xs, t);
    }
  }
  static get _svgFactory() {
    return V(this, "_svgFactory", new Qh());
  }
  draw(t, e = !1, s = !1) {
    const n = zt(Wt, jd)._++, r = b(this, _i, Ym).call(this), a = Wt._svgFactory.createElement("defs");
    r.append(a);
    const o = Wt._svgFactory.createElement("path");
    a.append(o);
    const h = `path_${n}`;
    o.setAttribute("id", h), o.setAttribute("vector-effect", "non-scaling-stroke"), e && i(this, Ka).set(n, o);
    const l = s ? b(this, _i, Mw).call(this, a, h) : null, c = Wt._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${h}`), this.updateProperties(r, t), i(this, De).set(n, r), {
      id: n,
      clipPathId: `url(#${l})`
    };
  }
  drawOutline(t, e) {
    const s = zt(Wt, jd)._++, n = b(this, _i, Ym).call(this), r = Wt._svgFactory.createElement("defs");
    n.append(r);
    const a = Wt._svgFactory.createElement("path");
    r.append(a);
    const o = `path_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let h;
    if (e) {
      const d = Wt._svgFactory.createElement("mask");
      r.append(d), h = `mask_${s}`, d.setAttribute("id", h), d.setAttribute("maskUnits", "objectBoundingBox");
      const p = Wt._svgFactory.createElement("rect");
      d.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const y = Wt._svgFactory.createElement("use");
      d.append(y), y.setAttribute("href", `#${o}`), y.setAttribute("stroke", "none"), y.setAttribute("fill", "black"), y.setAttribute("fill-rule", "nonzero"), y.classList.add("mask");
    }
    const l = Wt._svgFactory.createElement("use");
    n.append(l), l.setAttribute("href", `#${o}`), h && l.setAttribute("mask", `url(#${h})`);
    const c = l.cloneNode();
    return n.append(c), l.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(n, t), i(this, De).set(s, n), s;
  }
  finalizeDraw(t, e) {
    i(this, Ka).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var h;
    if (!e)
      return;
    const {
      root: s,
      bbox: n,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? i(this, De).get(t) : t;
    if (o) {
      if (s && b(this, _i, Km).call(this, o, s), n && b(h = Wt, Yf, kw).call(h, o, n), r) {
        const {
          classList: l
        } = o;
        for (const [c, d] of Object.entries(r))
          l.toggle(c, d);
      }
      if (a) {
        const c = o.firstElementChild.firstElementChild;
        b(this, _i, Km).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = i(this, De).get(t);
    s && (i(e, Xs).append(s), i(this, De).delete(t), i(e, De).set(t, s));
  }
  remove(t) {
    i(this, Ka).delete(t), i(this, Xs) !== null && (i(this, De).get(t).remove(), i(this, De).delete(t));
  }
  destroy() {
    u(this, Xs, null);
    for (const t of i(this, De).values())
      t.remove();
    i(this, De).clear(), i(this, Ka).clear();
  }
};
Xs = new WeakMap(), De = new WeakMap(), Ka = new WeakMap(), jd = new WeakMap(), Yf = new WeakSet(), kw = /* @__PURE__ */ f(function(t, [e, s, n, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * n}%`, a.height = `${100 * r}%`;
}, "#setBox"), _i = new WeakSet(), Ym = /* @__PURE__ */ f(function() {
  const t = Wt._svgFactory.create(1, 1, !0);
  return i(this, Xs).append(t), t.setAttribute("aria-hidden", !0), t;
}, "#createSVG"), Mw = /* @__PURE__ */ f(function(t, e) {
  const s = Wt._svgFactory.createElement("clipPath");
  t.append(s);
  const n = `clip_${e}`;
  s.setAttribute("id", n), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Wt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), n;
}, "#createClipPath"), Km = /* @__PURE__ */ f(function(t, e) {
  for (const [s, n] of Object.entries(e))
    n === null ? t.removeAttribute(s) : t.setAttribute(s, n);
}, "#updateProperties"), m(Wt, Yf), f(Wt, "DrawLayer"), m(Wt, jd, 0);
let Xm = Wt;
function eu(g) {
  return `${(g * 100).toFixed(2)}%`;
}
f(eu, "percentage");
var Xh, Vd, Wd, Yh, Ci, Ti, Xd, Kf, Pw;
const yo = class yo {
  constructor(t, e, s, n) {
    m(this, Kf);
    m(this, Xh, []);
    m(this, Vd, /* @__PURE__ */ new Map());
    m(this, Wd, null);
    m(this, Yh, 0);
    m(this, Ci, 0);
    m(this, Ti, 0);
    u(this, Yh, t), u(this, Xh, e), u(this, Ci, s.rawDims.pageWidth), u(this, Ti, s.rawDims.pageHeight), u(this, Wd, n);
  }
  render() {
    const t = document.createElement("div");
    t.className = "textLayerImages";
    for (let e = 0; e < i(this, Xh).length; e += 6) {
      const s = b(this, Kf, Pw).call(this, i(this, Xh).subarray(e, e + 6));
      s && t.append(s);
    }
    return t.addEventListener("contextmenu", (e) => {
      if (!(e.target instanceof HTMLCanvasElement))
        return;
      const s = e.target, n = i(this, Vd).get(s);
      if (!n)
        return;
      const r = i(yo, Xd)?.deref();
      if (r === s)
        return;
      r && (r.width = 0, r.height = 0), u(yo, Xd, new WeakRef(s));
      const {
        inverseTransform: a,
        x1: o,
        y1: h,
        width: l,
        height: c
      } = n, d = i(this, Wd).call(this), p = Math.ceil(o * d.width), y = Math.ceil(h * d.height), A = Math.floor((o + l / i(this, Ci)) * d.width), w = Math.floor((h + c / i(this, Ti)) * d.height);
      s.width = A - p, s.height = w - y;
      const S = s.getContext("2d");
      S.setTransform(...a), S.translate(-p, -y), S.drawImage(d, 0, 0);
    }), t;
  }
};
Xh = new WeakMap(), Vd = new WeakMap(), Wd = new WeakMap(), Yh = new WeakMap(), Ci = new WeakMap(), Ti = new WeakMap(), Xd = new WeakMap(), Kf = new WeakSet(), Pw = /* @__PURE__ */ f(function([t, e, s, n, r, a]) {
  const o = Math.hypot((r - t) * i(this, Ci), (a - e) * i(this, Ti)), h = Math.hypot((s - t) * i(this, Ci), (n - e) * i(this, Ti));
  if (o < i(this, Yh) || h < i(this, Yh))
    return null;
  const l = [(r - t) * i(this, Ci) / o, (a - e) * i(this, Ti) / o, (s - t) * i(this, Ci) / h, (n - e) * i(this, Ti) / h, 0, 0], c = D.inverseTransform(l), d = document.createElement("canvas");
  return d.className = "textLayerImagePlaceholder", d.width = 0, d.height = 0, Object.assign(d.style, {
    opacity: 0,
    position: "absolute",
    left: eu(t),
    top: eu(e),
    width: eu(o / i(this, Ci)),
    height: eu(h / i(this, Ti)),
    transformOrigin: "0% 0%",
    transform: `matrix(${l.join(",")})`
  }), i(this, Vd).set(d, {
    inverseTransform: c,
    width: o,
    height: h,
    x1: t,
    y1: e
  }), d;
}, "#createImagePlaceholder"), f(yo, "TextLayerImages"), m(yo, Xd, null);
let qm = yo;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: ec
};
globalThis.pdfjsLib = {
  AbortException: mn,
  AnnotationEditorLayer: zm,
  AnnotationEditorParamsType: Z,
  AnnotationEditorType: z,
  AnnotationEditorUIManager: Ja,
  AnnotationLayer: wm,
  AnnotationMode: _n,
  AnnotationType: Vt,
  applyOpacity: qw,
  build: vv,
  ColorPicker: Ju,
  createValidAbsoluteUrl: _A,
  CSSConstants: Ap,
  DOMSVGFactory: Qh,
  DrawLayer: Xm,
  FeatureTest: Gt,
  fetchData: Zm,
  findContrastColor: Qw,
  getDocument: Av,
  getFilenameFromUrl: Vw,
  getPdfFilenameFromUrl: Ww,
  getRGB: Yd,
  getUuid: MA,
  getXfaPageViewport: Yw,
  GlobalWorkerOptions: qh,
  ImageKind: su,
  InvalidPDFException: Hl,
  isDataScheme: tp,
  isPdfFile: tb,
  isValidExplicitDest: ev,
  makeArr: Qm,
  makeMap: Jm,
  makeObj: mp,
  MathClamp: he,
  noContextMenu: Is,
  normalizeUnicode: zw,
  OPS: Ol,
  OutputScale: bn,
  PasswordResponses: Rw,
  PDFDataRangeTransport: Qu,
  PDFDateString: zl,
  PDFWorker: Ql,
  PermissionFlag: Lw,
  PixelsPerInch: Er,
  RenderingCancelledException: $l,
  renderRichText: PA,
  ResponseException: Kh,
  setLayerDimensions: qa,
  shadow: V,
  SignatureExtractor: kn,
  stopEvent: Nt,
  SupportedImageMimeTypes: bp,
  TextLayer: ql,
  TextLayerImages: qm,
  TouchManager: ju,
  updateUrlHash: kA,
  Util: D,
  VerbosityLevel: qf,
  version: wv,
  XfaLayer: Gu
};
export {
  mn as AbortException,
  zm as AnnotationEditorLayer,
  Z as AnnotationEditorParamsType,
  z as AnnotationEditorType,
  Ja as AnnotationEditorUIManager,
  wm as AnnotationLayer,
  _n as AnnotationMode,
  Vt as AnnotationType,
  Ap as CSSConstants,
  Ju as ColorPicker,
  Qh as DOMSVGFactory,
  Xm as DrawLayer,
  Gt as FeatureTest,
  qh as GlobalWorkerOptions,
  su as ImageKind,
  Hl as InvalidPDFException,
  he as MathClamp,
  Ol as OPS,
  bn as OutputScale,
  Qu as PDFDataRangeTransport,
  zl as PDFDateString,
  Ql as PDFWorker,
  Rw as PasswordResponses,
  Lw as PermissionFlag,
  Er as PixelsPerInch,
  $l as RenderingCancelledException,
  Kh as ResponseException,
  kn as SignatureExtractor,
  bp as SupportedImageMimeTypes,
  ql as TextLayer,
  qm as TextLayerImages,
  ju as TouchManager,
  D as Util,
  qf as VerbosityLevel,
  Gu as XfaLayer,
  qw as applyOpacity,
  vv as build,
  _A as createValidAbsoluteUrl,
  Zm as fetchData,
  Qw as findContrastColor,
  Av as getDocument,
  Vw as getFilenameFromUrl,
  Ww as getPdfFilenameFromUrl,
  Yd as getRGB,
  MA as getUuid,
  Yw as getXfaPageViewport,
  tp as isDataScheme,
  tb as isPdfFile,
  ev as isValidExplicitDest,
  Qm as makeArr,
  Jm as makeMap,
  mp as makeObj,
  Is as noContextMenu,
  zw as normalizeUnicode,
  PA as renderRichText,
  qa as setLayerDimensions,
  V as shadow,
  Nt as stopEvent,
  kA as updateUrlHash,
  wv as version
};
