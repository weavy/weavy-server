var VA = Object.defineProperty;
var WA = (g) => {
  throw TypeError(g);
};
var v0 = (g, t, e) => t in g ? VA(g, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[t] = e;
var f = (g, t) => VA(g, "name", { value: t, configurable: !0 });
var M = (g, t, e) => v0(g, typeof t != "symbol" ? t + "" : t, e), ep = (g, t, e) => t.has(g) || WA("Cannot " + e);
var i = (g, t, e) => (ep(g, t, "read from private field"), e ? e.call(g) : t.get(g)), m = (g, t, e) => t.has(g) ? WA("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(g) : t.set(g, e), u = (g, t, e, s) => (ep(g, t, "write to private field"), s ? s.call(g, e) : t.set(g, e), e), b = (g, t, e) => (ep(g, t, "access private method"), e);
var qt = (g, t, e, s) => ({
  set _(n) {
    u(g, t, n, e);
  },
  get _() {
    return i(g, t, s);
  }
});
const hp = [1e-3, 0, 0, 1e-3, 0, 0], sp = 1.35, ls = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, xn = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, kl = "pdfjs_internal_editor_", G = {
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
}, S0 = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, lp = {
  TRIANGLES: 1,
  LATTICE: 2
}, Qt = {
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
}, qa = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Wf = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, Ml = {
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
}, Xh = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
}, E0 = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Xf = Wf.WARNINGS;
function C0(g) {
  Number.isInteger(g) && (Xf = g);
}
f(C0, "setVerbosityLevel");
function T0() {
  return Xf;
}
f(T0, "getVerbosityLevel");
function Yf(g) {
  Xf >= Wf.INFOS && console.info(`Info: ${g}`);
}
f(Yf, "info");
function V(g) {
  Xf >= Wf.WARNINGS && console.warn(`Warning: ${g}`);
}
f(V, "warn");
function nt(g) {
  throw new Error(g);
}
f(nt, "unreachable");
function it(g, t) {
  g || nt(t);
}
f(it, "assert");
function x0(g) {
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
f(x0, "_isValidProtocol");
function py(g, t = null, e = null) {
  if (!g)
    return null;
  if (e && typeof g == "string" && (e.addDefaultProtocol && g.startsWith("www.") && g.match(/\./g)?.length >= 2 && (g = `http://${g}`), e.tryConvertEncoding))
    try {
      g = I0(g);
    } catch {
    }
  const s = t ? URL.parse(g, t) : URL.parse(g);
  return x0(s) ? s : null;
}
f(py, "createValidAbsoluteUrl");
function gy(g, t, e = !1) {
  const s = URL.parse(g);
  return s ? (s.hash = t, s.href) : e && py(g, "http://example.com") ? g.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
f(gy, "updateUrlHash");
function cp(g) {
  return g.substring(g.lastIndexOf("/") + 1);
}
f(cp, "stripPath");
function z(g, t, e, s = !1) {
  return Object.defineProperty(g, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
f(z, "shadow");
const Ya = (/* @__PURE__ */ f(function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return f(t, "BaseException"), t.prototype = new Error(), t.constructor = t, t;
}, "BaseExceptionClosure"))(), Xm = class Xm extends Ya {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
};
f(Xm, "PasswordException");
let Uu = Xm;
const Ym = class Ym extends Ya {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
};
f(Ym, "UnknownErrorException");
let wl = Ym;
const Km = class Km extends Ya {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
};
f(Km, "InvalidPDFException");
let Pl = Km;
const qm = class qm extends Ya {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
};
f(qm, "ResponseException");
let Hh = qm;
const Qm = class Qm extends Ya {
  constructor(t) {
    super(t, "FormatError");
  }
};
f(Qm, "FormatError");
let dp = Qm;
const Jm = class Jm extends Ya {
  constructor(t) {
    super(t, "AbortException");
  }
};
f(Jm, "AbortException");
let gn = Jm;
function _0(g) {
  (typeof g != "object" || g?.length === void 0) && nt("Invalid argument for bytesToString");
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
f(_0, "bytesToString");
function Kf(g) {
  typeof g != "string" && nt("Invalid argument for stringToBytes");
  const t = g.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = g.charCodeAt(s) & 255;
  return e;
}
f(Kf, "stringToBytes");
function k0(g) {
  return String.fromCharCode(g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, g & 255);
}
f(k0, "string32");
function M0() {
  const g = new Uint8Array(4);
  return g[0] = 1, new Uint32Array(g.buffer, 0, 1)[0] === 1;
}
f(M0, "isLittleEndian");
function P0() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
f(P0, "isEvalSupported");
const Zm = class Zm {
  static get isLittleEndian() {
    return z(this, "isLittleEndian", M0());
  }
  static get isEvalSupported() {
    return z(this, "isEvalSupported", P0());
  }
  static get isOffscreenCanvasSupported() {
    return z(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return z(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get isFloat16ArraySupported() {
    return z(this, "isFloat16ArraySupported", typeof Float16Array < "u");
  }
  static get isSanitizerSupported() {
    return z(this, "isSanitizerSupported", typeof Sanitizer < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return z(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return z(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
};
f(Zm, "FeatureTest");
let Ht = Zm;
const ip = Array.from(Array(256).keys(), (g) => g.toString(16).padStart(2, "0"));
var un, iu, up;
const mf = class mf {
  static makeHexColor(t, e, s) {
    return `#${ip[t]}${ip[e]}${ip[s]}`;
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
    const n = e[0], r = e[1], a = e[2], o = e[3], h = e[4], l = e[5], c = t[0], d = t[1], p = t[2], A = t[3];
    let w = n * c + h, y = w, S = n * p + h, v = S, C = o * d + l, E = C, T = o * A + l, x = T;
    if (r !== 0 || a !== 0) {
      const _ = r * c, k = r * p, P = a * d, I = a * A;
      w += P, v += P, S += I, y += I, C += _, x += _, T += k, E += k;
    }
    s[0] = Math.min(s[0], w, S, y, v), s[1] = Math.min(s[1], C, T, E, x), s[2] = Math.max(s[2], w, S, y, v), s[3] = Math.max(s[3], C, T, E, x);
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
    l[0] = Math.min(l[0], t, o), l[1] = Math.min(l[1], e, h), l[2] = Math.max(l[2], t, o), l[3] = Math.max(l[3], e, h), b(this, un, up).call(this, t, s, r, o, e, n, a, h, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), l), b(this, un, up).call(this, t, s, r, o, e, n, a, h, 3 * (-e + 3 * (n - a) + h), 6 * (e - 2 * n + a), 3 * (n - e), l);
  }
};
un = new WeakSet(), iu = /* @__PURE__ */ f(function(t, e, s, n, r, a, o, h, l, c) {
  if (l <= 0 || l >= 1)
    return;
  const d = 1 - l, p = l * l, A = p * l, w = d * (d * (d * t + 3 * l * e) + 3 * p * s) + A * n, y = d * (d * (d * r + 3 * l * a) + 3 * p * o) + A * h;
  c[0] = Math.min(c[0], w), c[1] = Math.min(c[1], y), c[2] = Math.max(c[2], w), c[3] = Math.max(c[3], y);
}, "#getExtremumOnCurve"), up = /* @__PURE__ */ f(function(t, e, s, n, r, a, o, h, l, c, d, p) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, un, iu).call(this, t, e, s, n, r, a, o, h, -d / c, p);
    return;
  }
  const A = c ** 2 - 4 * d * l;
  if (A < 0)
    return;
  const w = Math.sqrt(A), y = 2 * l;
  b(this, un, iu).call(this, t, e, s, n, r, a, o, h, (-c + w) / y, p), b(this, un, iu).call(this, t, e, s, n, r, a, o, h, (-c - w) / y, p);
}, "#getExtremum"), m(mf, un), f(mf, "Util");
let R = mf;
function I0(g) {
  return decodeURIComponent(escape(g));
}
f(I0, "stringToUTF8String");
let np = null, XA = null;
function L0(g) {
  return np || (np = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, XA = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), g.replaceAll(np, (t, e, s) => e ? e.normalize("NFKC") : XA.get(s));
}
f(L0, "normalizeUnicode");
function my() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const g = new Uint8Array(32);
  return crypto.getRandomValues(g), _0(g);
}
f(my, "getUuid");
const no = "pdfjs_internal_id_";
function D0(g, t, e) {
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
f(D0, "_isValidExplicitDest");
const by = /* @__PURE__ */ f(() => [], "makeArr"), Gm = /* @__PURE__ */ f(() => /* @__PURE__ */ new Map(), "makeMap"), fp = /* @__PURE__ */ f(() => /* @__PURE__ */ Object.create(null), "makeObj");
function he(g, t, e) {
  return Math.min(Math.max(g, t), e);
}
f(he, "MathClamp");
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(g) {
  return g.reduce((t, e) => t + e, 0);
});
const bf = class bf {
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
      else if (bf.shouldBuildText(o))
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
f(bf, "XfaText");
let Il = bf;
const tb = class tb {
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
        a.append(d), o && Il.shouldBuildText(n.name) && l.push(d);
      }
      return {
        textDivs: l
      };
    }
    const c = [[n, -1, a]];
    for (; c.length > 0; ) {
      const [d, p, A] = c.at(-1);
      if (p + 1 === d.children.length) {
        c.pop();
        continue;
      }
      const w = d.children[++c.at(-1)[1]];
      if (w === null)
        continue;
      const {
        name: y
      } = w;
      if (y === "#text") {
        const v = document.createTextNode(w.value);
        l.push(v), A.append(v);
        continue;
      }
      const S = w?.attributes?.xmlns ? document.createElementNS(w.attributes.xmlns, y) : document.createElement(y);
      if (A.append(S), w.attributes && this.setAttributes({
        html: S,
        element: w,
        storage: e,
        intent: r,
        linkService: s
      }), w.children?.length > 0)
        c.push([w, -1, S]);
      else if (w.value) {
        const v = document.createTextNode(w.value);
        o && Il.shouldBuildText(y) && l.push(v), S.append(v);
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
f(tb, "XfaLayer");
let Hu = tb;
const ki = "http://www.w3.org/2000/svg", En = class En {
};
f(En, "PixelsPerInch"), M(En, "CSS", 96), M(En, "PDF", 72), M(En, "PDF_TO_CSS_UNITS", En.CSS / En.PDF);
let vr = En;
async function Wd(g, t = "text") {
  if (Qh(g, document.baseURI)) {
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
f(Wd, "fetchData");
const Af = class Af {
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
    let c, d, p, A;
    switch (n %= 360, n < 0 && (n += 360), n) {
      case 180:
        c = -1, d = 0, p = 0, A = 1;
        break;
      case 90:
        c = 0, d = 1, p = 1, A = 0;
        break;
      case 270:
        c = 0, d = -1, p = -1, A = 0;
        break;
      case 0:
        c = 1, d = 0, p = 0, A = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, A = -A);
    let w, y, S, v;
    c === 0 ? (w = Math.abs(l - t[1]) * s + r, y = Math.abs(h - t[0]) * s + a, S = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (w = Math.abs(h - t[0]) * s + r, y = Math.abs(l - t[1]) * s + a, S = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, d * s, p * s, A * s, w - c * s * h - p * s * l, y - d * s * h - A * s * l], this.width = S, this.height = v;
  }
  get rawDims() {
    const t = this.viewBox;
    return z(this, "rawDims", {
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
    return new Af({
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
    return R.applyTransform(s, this.transform), s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    R.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    return R.applyTransform(s, this.transform), [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return R.applyInverseTransform(s, this.transform), s;
  }
};
f(Af, "PageViewport");
let Ll = Af;
const eb = class eb extends Ya {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
};
f(eb, "RenderingCancelledException");
let Dl = eb;
function qf(g) {
  const t = g.length;
  let e = 0;
  for (; e < t && g[e].trim() === ""; )
    e++;
  return g.substring(e, e + 5).toLowerCase() === "data:";
}
f(qf, "isDataScheme");
function Vm(g) {
  return typeof g == "string" && /\.pdf$/i.test(g);
}
f(Vm, "isPdfFile");
function R0(g) {
  return [g] = g.split(/[#?]/, 1), cp(g);
}
f(R0, "getFilenameFromUrl");
function N0(g, t = "document.pdf") {
  if (typeof g != "string")
    return t;
  if (qf(g))
    return V('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
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
      return h.includes("/") && (h = cp(h), /^\.pdf$/i.test(h)) ? o : h;
    } catch {
      return o;
    }
  }, "decode"), r = /\.pdf$/i, a = cp(s.pathname);
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
f(N0, "getPdfFilenameFromUrl");
const sb = class sb {
  started = /* @__PURE__ */ Object.create(null);
  times = [];
  time(t) {
    t in this.started && V(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || V(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: s
    } of this.times)
      e = Math.max(s.length, e);
    for (const {
      name: s,
      start: n,
      end: r
    } of this.times)
      t.push(`${s.padEnd(e)} ${r - n}ms
`);
    return t.join("");
  }
};
f(sb, "StatTimer");
let $u = sb;
function Qh(g, t) {
  const e = t ? URL.parse(g, t) : URL.parse(g);
  return /https?:/.test(e?.protocol ?? "");
}
f(Qh, "isValidFetchUrl");
function Ds(g) {
  g.preventDefault();
}
f(Ds, "noContextMenu");
function Ft(g) {
  g.preventDefault(), g.stopPropagation();
}
f(Ft, "stopEvent");
function Ay(g) {
  console.log("Deprecated API usage: " + g);
}
f(Ay, "deprecated");
var Kl;
const yf = class yf {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    i(this, Kl) || u(this, Kl, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = i(this, Kl).exec(t);
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
Kl = new WeakMap(), f(yf, "PDFDateString"), m(yf, Kl);
let Rl = yf;
function O0(g, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: n
  } = g.attributes.style, r = [0, 0, parseInt(s), parseInt(n)];
  return new Ll({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
f(O0, "getXfaPageViewport");
function Xd(g) {
  if (g.startsWith("#")) {
    const t = parseInt(g.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return g.startsWith("rgb(") ? g.slice(4, -1).split(",").map((t) => parseInt(t)) : g.startsWith("rgba(") ? g.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (V(`Not a valid color format: "${g}"`), [0, 0, 0]);
}
f(Xd, "getRGB");
function F0(g) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of g.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    g.set(e, Xd(s));
  }
  t.remove();
}
f(F0, "getColorValues");
function Pt(g) {
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
f(Pt, "getCurrentTransform");
function qs(g) {
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
f(qs, "getCurrentTransformInverse");
function ja(g, t, e = !1, s = !0) {
  if (t instanceof Ll) {
    const {
      pageWidth: n,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = g, o = Ht.isCSSRoundSupported, h = `var(--total-scale-factor) * ${n}px`, l = `var(--total-scale-factor) * ${r}px`, c = o ? `round(down, ${h}, var(--scale-round-x))` : `calc(${h})`, d = o ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = d) : (a.width = d, a.height = c);
  }
  s && g.setAttribute("data-main-rotation", t.rotation);
}
f(ja, "setLayerDimensions");
const Sl = class Sl {
  constructor() {
    const {
      pixelRatio: t
    } = Sl;
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
    s = Sl.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), n !== -1 && (o = n / t, h = n / e);
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
f(Sl, "OutputScale");
let mn = Sl;
const pp = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"], ib = class ib {
  static get isDarkMode() {
    return z(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
};
f(ib, "ColorScheme");
let gp = ib;
const nb = class nb {
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
    return t.remove(), z(this, "commentForegroundColor", Xd(s));
  }
};
f(nb, "CSSConstants");
let mp = nb;
function B0(g, t, e, s) {
  s = he(s ?? 1, 0, 1);
  const n = 255 * (1 - s);
  return g = Math.round(g * s + n), t = Math.round(t * s + n), e = Math.round(e * s + n), [g, t, e];
}
f(B0, "applyOpacity");
function YA(g, t) {
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
f(YA, "RGBToHSL");
function bp(g, t) {
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
f(bp, "HSLToRGB");
function KA(g) {
  return g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4;
}
f(KA, "computeLuminance");
function qA(g, t, e) {
  bp(g, e), e.map(KA);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  bp(t, e), e.map(KA);
  const n = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return s > n ? (s + 0.05) / (n + 0.05) : (n + 0.05) / (s + 0.05);
}
f(qA, "contrastRatio");
const QA = /* @__PURE__ */ new Map();
function U0(g, t) {
  const e = g[0] + g[1] * 256 + g[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = QA.get(e);
  if (s)
    return s;
  const n = new Float32Array(9), r = n.subarray(0, 3), a = n.subarray(3, 6);
  YA(g, a);
  const o = n.subarray(6, 9);
  YA(t, o);
  const h = o[2] < 0.5, l = h ? 12 : 4.5;
  if (a[2] = h ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), qA(a, o, r) < l) {
    let c, d;
    h ? (c = a[2], d = 1) : (c = 0, d = a[2]);
    const p = 5e-3;
    for (; d - c > p; ) {
      const A = a[2] = (c + d) / 2;
      h === qA(a, o, r) < l ? c = A : d = A;
    }
    a[2] = h ? d : c;
  }
  return bp(a, r), s = R.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), QA.set(e, s), s;
}
f(U0, "findContrastColor");
function yy({
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
    Hu.render({
      xfaHtml: g,
      div: n,
      intent: "richText"
    });
  n.firstElementChild.classList.add("richText", e), s.append(n);
}
f(yy, "renderRichText");
function wy(g) {
  const t = new Path2D();
  if (!g)
    return t;
  for (let e = 0, s = g.length; e < s; )
    switch (g[e++]) {
      case Xh.moveTo:
        t.moveTo(g[e++], g[e++]);
        break;
      case Xh.lineTo:
        t.lineTo(g[e++], g[e++]);
        break;
      case Xh.curveTo:
        t.bezierCurveTo(g[e++], g[e++], g[e++], g[e++], g[e++], g[e++]);
        break;
      case Xh.quadraticCurveTo:
        t.quadraticCurveTo(g[e++], g[e++], g[e++], g[e++]);
        break;
      case Xh.closePath:
        t.closePath();
        break;
      default:
        V(`Unrecognized drawing path operator: ${g[e - 1]}`);
        break;
    }
  return t;
}
f(wy, "makePathFromDrawOPS");
var bs, le, lo, ei, Lr, co, ql, Ct, yp, Jh, Er, nu, ru;
const rb = class rb {
  constructor() {
    m(this, Ct);
    m(this, bs, null);
    m(this, le, null);
    m(this, lo, null);
    m(this, ei, 0);
    m(this, Lr, []);
    m(this, co, null);
    m(this, ql, null);
  }
  get pagesNumber() {
    return i(this, ei);
  }
  set pagesNumber(t) {
    i(this, ei) !== t && (u(this, ei, t), b(this, Ct, yp).call(this));
  }
  addListener(t) {
    i(this, Lr).push(t);
  }
  removeListener(t) {
    const e = i(this, Lr).indexOf(t);
    e >= 0 && i(this, Lr).splice(e, 1);
  }
  movePages(t, e, s) {
    b(this, Ct, Er).call(this, !0);
    const n = i(this, le), r = i(this, bs), a = e.length, o = new Uint32Array(a);
    let h = 0;
    for (let p = 0; p < a; p++) {
      const A = e[p] - 1;
      o[p] = n[A], A < s && (h += 1);
    }
    const l = i(this, ei);
    let c = s - h;
    const d = l - a;
    c = he(c, 0, d);
    for (let p = 0, A = 0; p < l; p++)
      t.has(p + 1) || (n[A++] = n[p]);
    n.copyWithin(c + a, c, d), n.set(o, c), b(this, Ct, ru).call(this, r, null), b(this, Ct, nu).call(this), b(this, Ct, Jh).call(this, {
      type: "move"
    }), n.every((p, A) => p === A + 1) && b(this, Ct, yp).call(this);
  }
  deletePages(t) {
    b(this, Ct, Er).call(this, !0);
    const e = i(this, le), s = i(this, bs);
    this.pagesNumber -= t.length, b(this, Ct, Er).call(this, !1);
    const n = i(this, le);
    let r = 0, a = 0;
    for (const o of t) {
      const h = o - 1;
      h !== r && (n.set(e.subarray(r, h), a), a += h - r), r = h + 1;
    }
    r < e.length && n.set(e.subarray(r), a), b(this, Ct, ru).call(this, s, null), b(this, Ct, nu).call(this), b(this, Ct, Jh).call(this, {
      type: "delete",
      pageNumbers: t
    });
  }
  copyPages(t) {
    b(this, Ct, Er).call(this, !0), u(this, ql, t), u(this, co, t.map((e) => i(this, le)[e - 1])), b(this, Ct, Jh).call(this, {
      type: "copy",
      pageNumbers: t
    });
  }
  pastePages(t) {
    b(this, Ct, Er).call(this, !0);
    const e = i(this, le), s = i(this, bs), n = i(this, ql), r = /* @__PURE__ */ new Map();
    let a = t;
    for (const h of n)
      r.set(++a, h);
    this.pagesNumber += n.length, b(this, Ct, Er).call(this, !1);
    const o = i(this, le);
    o.set(e.subarray(0, t), 0), o.set(i(this, co), t), o.set(e.subarray(t), t + n.length), b(this, Ct, ru).call(this, s, r), b(this, Ct, nu).call(this), b(this, Ct, Jh).call(this, {
      type: "paste"
    }), u(this, co, null);
  }
  hasBeenAltered() {
    return i(this, le) !== null;
  }
  getPageMappingForSaving() {
    const t = i(this, bs);
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
  getPrevPageNumber(t) {
    return i(this, lo)[t - 1] ?? 0;
  }
  getPageNumber(t) {
    return i(this, bs) ? i(this, bs).get(t)?.[0] ?? 0 : t;
  }
  getPageId(t) {
    return i(this, le)?.[t - 1] ?? t;
  }
  getMapping() {
    return i(this, le).subarray(0, this.pagesNumber);
  }
};
bs = new WeakMap(), le = new WeakMap(), lo = new WeakMap(), ei = new WeakMap(), Lr = new WeakMap(), co = new WeakMap(), ql = new WeakMap(), Ct = new WeakSet(), yp = /* @__PURE__ */ f(function() {
  u(this, le, null), u(this, bs, null);
}, "#reset"), Jh = /* @__PURE__ */ f(function(t) {
  for (const e of i(this, Lr))
    e(t);
}, "#updateListeners"), Er = /* @__PURE__ */ f(function(t) {
  if (i(this, le))
    return;
  const e = i(this, ei), s = u(this, le, new Uint32Array(e));
  u(this, lo, new Int32Array(s));
  const n = u(this, bs, /* @__PURE__ */ new Map());
  if (t)
    for (let r = 1; r <= e; r++)
      s[r - 1] = r, n.set(r, [r]);
}, "#init"), nu = /* @__PURE__ */ f(function() {
  const t = i(this, bs), e = i(this, le);
  t.clear();
  for (let s = 0, n = i(this, ei); s < n; s++) {
    const r = e[s], a = t.get(r);
    a ? a.push(s + 1) : t.set(r, [s + 1]);
  }
}, "#updateIdToPageNumber"), ru = /* @__PURE__ */ f(function(t, e) {
  const s = i(this, lo), n = i(this, le), r = /* @__PURE__ */ new Map();
  for (let a = 0, o = i(this, ei); a < o; a++) {
    const h = e?.get(a + 1);
    if (h) {
      s[a] = -h;
      continue;
    }
    const l = n[a], c = r.get(l) || 0;
    s[a] = t.get(l)?.[c], r.set(l, c + 1);
  }
}, "#setPrevPageNumbers"), f(rb, "PagesMapper");
let Ap = rb;
var kn, Mn, As, ys, Ql, Pn, uo, fo, Jl, wf, vy, be, Sy, Ey, Qa, Zh;
const Zs = class Zs {
  constructor(t) {
    m(this, be);
    m(this, kn, null);
    m(this, Mn, null);
    m(this, As);
    m(this, ys, null);
    m(this, Ql, null);
    m(this, Pn, null);
    m(this, uo, null);
    m(this, fo, null);
    u(this, As, t), i(Zs, Jl) || u(Zs, Jl, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = u(this, kn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = i(this, As)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Ds, {
      signal: e
    }), t.addEventListener("pointerdown", b(Zs, wf, vy), {
      signal: e
    }));
    const s = u(this, ys, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const n = i(this, As).toolbarPosition;
    if (n) {
      const {
        style: r
      } = t, a = i(this, As)._uiManager.direction === "ltr" ? 1 - n[0] : n[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return i(this, kn);
  }
  hide() {
    i(this, kn).classList.add("hidden"), i(this, Mn)?.hideDropdown();
  }
  show() {
    i(this, kn).classList.remove("hidden"), i(this, Ql)?.shown(), i(this, Pn)?.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = i(this, As), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", i(Zs, Jl)[t]), b(this, be, Qa).call(this, s) && s.addEventListener("click", (n) => {
      e.delete();
    }, {
      signal: e._signal
    }), i(this, ys).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, be, Qa).call(this, e), i(this, ys).append(e, i(this, be, Zh)), u(this, Ql, t);
  }
  addComment(t, e = null) {
    if (i(this, Pn))
      return;
    const s = t.renderForToolbar();
    if (!s)
      return;
    b(this, be, Qa).call(this, s);
    const n = u(this, uo, i(this, be, Zh));
    e ? (i(this, ys).insertBefore(s, e), i(this, ys).insertBefore(n, e)) : i(this, ys).append(s, n), u(this, Pn, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (i(this, Mn))
      return;
    u(this, Mn, t);
    const e = t.renderButton();
    b(this, be, Qa).call(this, e), i(this, ys).append(e, i(this, be, Zh));
  }
  async addEditSignatureButton(t) {
    const e = u(this, fo, await t.renderEditButton(i(this, As)));
    b(this, be, Qa).call(this, e), i(this, ys).append(e, i(this, be, Zh));
  }
  removeButton(t) {
    switch (t) {
      case "comment":
        i(this, Pn)?.removeToolbarCommentButton(), u(this, Pn, null), i(this, uo)?.remove(), u(this, uo, null);
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
    const n = i(this, ys).querySelector(s);
    n && t === "comment" && this.addComment(e, n);
  }
  updateEditSignatureButton(t) {
    i(this, fo) && (i(this, fo).title = t);
  }
  remove() {
    i(this, kn).remove(), i(this, Mn)?.destroy(), u(this, Mn, null);
  }
};
kn = new WeakMap(), Mn = new WeakMap(), As = new WeakMap(), ys = new WeakMap(), Ql = new WeakMap(), Pn = new WeakMap(), uo = new WeakMap(), fo = new WeakMap(), Jl = new WeakMap(), wf = new WeakSet(), vy = /* @__PURE__ */ f(function(t) {
  t.stopPropagation();
}, "#pointerDown"), be = new WeakSet(), Sy = /* @__PURE__ */ f(function(t) {
  i(this, As)._focusEventsAllowed = !1, Ft(t);
}, "#focusIn"), Ey = /* @__PURE__ */ f(function(t) {
  i(this, As)._focusEventsAllowed = !0, Ft(t);
}, "#focusOut"), Qa = /* @__PURE__ */ f(function(t) {
  const e = i(this, As)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", b(this, be, Sy).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, be, Ey).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Ds, {
    signal: e
  }), !0);
}, "#addListenersToElement"), Zh = /* @__PURE__ */ f(function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, "#divider"), m(Zs, wf), f(Zs, "EditorToolbar"), m(Zs, Jl, null);
let wp = Zs;
var Zl, Dr, Ii, An, Cy, Ty, Sp;
const ab = class ab {
  constructor(t) {
    m(this, An);
    m(this, Zl, null);
    m(this, Dr, null);
    m(this, Ii);
    u(this, Ii, t);
  }
  show(t, e, s) {
    const [n, r] = b(this, An, Ty).call(this, e, s), {
      style: a
    } = i(this, Dr) || u(this, Dr, b(this, An, Cy).call(this));
    t.append(i(this, Dr)), a.insetInlineEnd = `${100 * n}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    i(this, Dr).remove();
  }
};
Zl = new WeakMap(), Dr = new WeakMap(), Ii = new WeakMap(), An = new WeakSet(), Cy = /* @__PURE__ */ f(function() {
  const t = u(this, Dr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = i(this, Ii)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Ds, {
    signal: e
  });
  const s = u(this, Zl, document.createElement("div"));
  return s.className = "buttons", t.append(s), i(this, Ii).hasCommentManager() && b(this, An, Sp).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    i(this, Ii).commentSelection("floating_button");
  }), b(this, An, Sp).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    i(this, Ii).highlightSelection("floating_button");
  }), t;
}, "#render"), Ty = /* @__PURE__ */ f(function(t, e) {
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
}, "#getLastPoint"), Sp = /* @__PURE__ */ f(function(t, e, s, n) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = i(this, Ii)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", Ds, {
    signal: o
  }), r.addEventListener("click", n, {
    signal: o
  })), i(this, Zl).append(r);
}, "#makeButton"), f(ab, "FloatingToolbar");
let vp = ab;
function xy(g, t, e) {
  for (const s of e)
    t.addEventListener(s, g[s].bind(g));
}
f(xy, "bindEvents");
var Rr, Nr, po, Or;
const ht = class ht {
  static initializeAndAddPointerId(t) {
    (i(ht, Nr) || u(ht, Nr, /* @__PURE__ */ new Set())).add(t);
  }
  static setPointer(t, e) {
    i(ht, Rr) || u(ht, Rr, e), i(ht, Or) ?? u(ht, Or, t);
  }
  static setTimeStamp(t) {
    u(ht, po, t);
  }
  static isSamePointerId(t) {
    return i(ht, Rr) === t;
  }
  static isSamePointerIdOrRemove(t) {
    return i(ht, Rr) === t ? !0 : (i(ht, Nr)?.delete(t), !1);
  }
  static isSamePointerType(t) {
    return i(ht, Or) === t;
  }
  static isInitializedAndDifferentPointerType(t) {
    return i(ht, Or) !== null && !ht.isSamePointerType(t);
  }
  static isSameTimeStamp(t) {
    return i(ht, po) === t;
  }
  static isUsingMultiplePointers() {
    return i(ht, Nr)?.size >= 1;
  }
  static clearPointerType() {
    u(ht, Or, null);
  }
  static clearPointerIds() {
    u(ht, Rr, NaN), u(ht, Nr, null);
  }
  static clearTimeStamp() {
    u(ht, po, NaN);
  }
};
Rr = new WeakMap(), Nr = new WeakMap(), po = new WeakMap(), Or = new WeakMap(), f(ht, "CurrentPointers"), m(ht, Rr, NaN), m(ht, Nr, null), m(ht, po, NaN), m(ht, Or, null);
let ye = ht;
var vf;
const ob = class ob {
  constructor() {
    m(this, vf, 0);
  }
  get id() {
    return `${kl}${qt(this, vf)._++}`;
  }
};
vf = new WeakMap(), f(ob, "IdManager");
let Ep = ob;
var go, tc, we, mo, au;
const Sf = class Sf {
  constructor() {
    m(this, mo);
    m(this, go, my());
    m(this, tc, 0);
    m(this, we, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), n = new Image();
    n.src = t;
    const r = n.decode().then(() => (s.drawImage(n, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return z(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: n,
      type: r
    } = t;
    return b(this, mo, au).call(this, `${e}_${s}_${n}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, mo, au).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, mo, au).call(this, t, s);
  }
  async getFromId(t) {
    i(this, we) || u(this, we, /* @__PURE__ */ new Map());
    const e = i(this, we).get(t);
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
    i(this, we) || u(this, we, /* @__PURE__ */ new Map());
    let s = i(this, we).get(t);
    if (s?.bitmap)
      return s.refCounter += 1, s;
    const n = new OffscreenCanvas(e.width, e.height);
    return n.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: n.transferToImageBitmap(),
      id: `image_${i(this, go)}_${qt(this, tc)._++}`,
      refCounter: 1,
      isSvg: !1
    }, i(this, we).set(t, s), i(this, we).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = i(this, we).get(t);
    return e?.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    i(this, we) || u(this, we, /* @__PURE__ */ new Map());
    const e = i(this, we).get(t);
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
    return t.startsWith(`image_${i(this, go)}_`);
  }
};
go = new WeakMap(), tc = new WeakMap(), we = new WeakMap(), mo = new WeakSet(), au = /* @__PURE__ */ f(async function(t, e) {
  i(this, we) || u(this, we, /* @__PURE__ */ new Map());
  let s = i(this, we).get(t);
  if (s === null)
    return null;
  if (s?.bitmap)
    return s.refCounter += 1, s;
  try {
    s ||= {
      bitmap: null,
      id: `image_${i(this, go)}_${qt(this, tc)._++}`,
      refCounter: 0,
      isSvg: !1
    };
    let n;
    if (typeof e == "string" ? (s.url = e, n = await Wd(e, "blob")) : e instanceof File ? n = s.file = e : e instanceof Blob && (n = e), n.type === "image/svg+xml") {
      const r = Sf._isSVGFittingCanvas, a = new FileReader(), o = new Image(), h = new Promise((l, c) => {
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
    V(n), s = null;
  }
  return i(this, we).set(t, s), s && i(this, we).set(s.id, s), s;
}, "#get"), f(Sf, "ImageManager");
let Cp = Sf;
var Bt, In, ec, Mt;
const hb = class hb {
  constructor(t = 128) {
    m(this, Bt, []);
    m(this, In, !1);
    m(this, ec);
    m(this, Mt, -1);
    u(this, ec, t);
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
    if (n && t(), i(this, In))
      return;
    const h = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (i(this, Mt) === -1) {
      i(this, Bt).length > 0 && (i(this, Bt).length = 0), u(this, Mt, 0), i(this, Bt).push(h);
      return;
    }
    if (a && i(this, Bt)[i(this, Mt)].type === r) {
      o && (h.undo = i(this, Bt)[i(this, Mt)].undo), i(this, Bt)[i(this, Mt)] = h;
      return;
    }
    const l = i(this, Mt) + 1;
    l === i(this, ec) ? i(this, Bt).splice(0, 1) : (u(this, Mt, l), l < i(this, Bt).length && i(this, Bt).splice(l)), i(this, Bt).push(h);
  }
  undo() {
    if (i(this, Mt) === -1)
      return;
    u(this, In, !0);
    const {
      undo: t,
      post: e
    } = i(this, Bt)[i(this, Mt)];
    t(), e?.(), u(this, In, !1), u(this, Mt, i(this, Mt) - 1);
  }
  redo() {
    if (i(this, Mt) < i(this, Bt).length - 1) {
      u(this, Mt, i(this, Mt) + 1), u(this, In, !0);
      const {
        cmd: t,
        post: e
      } = i(this, Bt)[i(this, Mt)];
      t(), e?.(), u(this, In, !1);
    }
  }
  hasSomethingToUndo() {
    return i(this, Mt) !== -1;
  }
  hasSomethingToRedo() {
    return i(this, Mt) < i(this, Bt).length - 1;
  }
  cleanType(t) {
    if (i(this, Mt) !== -1) {
      for (let e = i(this, Mt); e >= 0; e--)
        if (i(this, Bt)[e].type !== t) {
          i(this, Bt).splice(e + 1, i(this, Mt) - e), u(this, Mt, e);
          return;
        }
      i(this, Bt).length = 0, u(this, Mt, -1);
    }
  }
  destroy() {
    u(this, Bt, null);
  }
};
Bt = new WeakMap(), In = new WeakMap(), ec = new WeakMap(), Mt = new WeakMap(), f(hb, "CommandManager");
let Tp = hb;
var Ef, _y;
const lb = class lb {
  constructor(t) {
    m(this, Ef);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Ht.platform;
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
    const s = this.callbacks.get(b(this, Ef, _y).call(this, e));
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
    o && !o(t, e) || (n.bind(t, ...a, e)(), r || Ft(e));
  }
};
Ef = new WeakSet(), _y = /* @__PURE__ */ f(function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
}, "#serialize"), f(lb, "KeyboardManager");
let Ga = lb;
const El = class El {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return F0(t), z(this, "_colors", t);
  }
  convert(t) {
    const e = Xd(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, n] of this._colors)
      if (n.every((r, a) => r === e[a]))
        return El._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? R.makeHexColor(...e) : t;
  }
};
f(El, "ColorManager"), M(El, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let xp = El;
var bo, Ve, Ao, Lt, Xt, yo, ws, wo, vs, ve, Ln, Dn, Rn, Nn, si, Ss, Fr, sc, ic, vo, nc, ii, On, So, Fn, ni, Cf, Bn, Eo, rc, Un, Br, Co, Hn, ac, Yt, lt, Li, $n, zn, oc, To, hc, jn, ri, Di, lc, cc, Es, D, ou, _p, ky, My, Py, tl, Iy, Ly, Dy, kp, Ry, Ny, Oy, Fy, Te, Mi, By, Uy, Mp, Hy, el, Pp;
const _r = class _r {
  constructor(t, e, s, n, r, a, o, h, l, c, d, p, A, w, y, S) {
    m(this, D);
    m(this, bo, new AbortController());
    m(this, Ve, null);
    m(this, Ao, null);
    m(this, Lt, /* @__PURE__ */ new Map());
    m(this, Xt, /* @__PURE__ */ new Map());
    m(this, yo, null);
    m(this, ws, null);
    m(this, wo, null);
    m(this, vs, new Tp());
    m(this, ve, null);
    m(this, Ln, null);
    m(this, Dn, null);
    m(this, Rn, 0);
    m(this, Nn, /* @__PURE__ */ new Set());
    m(this, si, null);
    m(this, Ss, null);
    m(this, Fr, /* @__PURE__ */ new Set());
    M(this, "_editorUndoBar", null);
    m(this, sc, !1);
    m(this, ic, !1);
    m(this, vo, !1);
    m(this, nc, null);
    m(this, ii, null);
    m(this, On, null);
    m(this, So, null);
    m(this, Fn, !1);
    m(this, ni, null);
    m(this, Cf, new Ep());
    m(this, Bn, !1);
    m(this, Eo, !1);
    m(this, rc, !1);
    m(this, Un, null);
    m(this, Br, null);
    m(this, Co, null);
    m(this, Hn, null);
    m(this, ac, null);
    m(this, Yt, G.NONE);
    m(this, lt, /* @__PURE__ */ new Set());
    m(this, Li, null);
    m(this, $n, null);
    m(this, zn, null);
    m(this, oc, null);
    m(this, To, null);
    m(this, hc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, jn, [0, 0]);
    m(this, ri, null);
    m(this, Di, null);
    m(this, lc, null);
    m(this, cc, null);
    m(this, Es, null);
    const v = this._signal = i(this, bo).signal;
    u(this, Di, t), u(this, lc, e), u(this, cc, s), u(this, yo, n), u(this, ve, r), u(this, $n, a), u(this, To, h), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: v
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: v
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: v
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: v
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: v
    }), o._on("switchannotationeditorparams", (C) => this.updateParams(C.type, C.value), {
      signal: v
    }), window.addEventListener("pointerdown", () => {
      u(this, Eo, !0);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("pointerup", () => {
      u(this, Eo, !1);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("beforeunload", b(this, D, ky).bind(this), {
      capture: !0,
      signal: v
    }), b(this, D, Iy).call(this), b(this, D, Fy).call(this), b(this, D, kp).call(this), u(this, ws, h.annotationStorage), u(this, nc, h.filterFactory), u(this, zn, l), u(this, So, c || null), u(this, sc, d), u(this, ic, p), u(this, vo, A), u(this, ac, w || null), this.viewParameters = {
      realScale: vr.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = y || null, this._supportsPinchToZoom = S !== !1, r?.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = _r.prototype, e = /* @__PURE__ */ f((a) => i(a, Di).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), "arrowChecker"), s = /* @__PURE__ */ f((a, {
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
    return z(this, "_keyboardManager", new Ga([[["ctrl+a", "mac+meta+a"], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && i(a, Di).contains(o) && !a.isEnterHandled, "checker")
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: /* @__PURE__ */ f((a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && i(a, Di).contains(document.activeElement), "checker")
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
    i(this, Es)?.resolve(), u(this, Es, null), i(this, bo)?.abort(), u(this, bo, null), this._signal = null;
    for (const t of i(this, Xt).values())
      t.destroy();
    i(this, Xt).clear(), i(this, Lt).clear(), i(this, Fr).clear(), i(this, Hn)?.clear(), u(this, Ve, null), i(this, lt).clear(), i(this, vs).destroy(), i(this, yo)?.destroy(), i(this, ve)?.destroy(), i(this, $n)?.destroy(), i(this, ni)?.hide(), u(this, ni, null), i(this, Co)?.destroy(), u(this, Co, null), u(this, Ao, null), i(this, ii) && (clearTimeout(i(this, ii)), u(this, ii, null)), i(this, ri) && (clearTimeout(i(this, ri)), u(this, ri, null)), this._editorUndoBar?.destroy(), u(this, To, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return i(this, ac);
  }
  get useNewAltTextFlow() {
    return i(this, ic);
  }
  get useNewAltTextWhenAddingImage() {
    return i(this, vo);
  }
  get hcmFilter() {
    return z(this, "hcmFilter", i(this, zn) ? i(this, nc).addHCMFilter(i(this, zn).foreground, i(this, zn).background) : "none");
  }
  get direction() {
    return z(this, "direction", getComputedStyle(i(this, Di)).direction);
  }
  get _highlightColors() {
    return z(this, "_highlightColors", i(this, So) ? new Map(i(this, So).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return z(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!i(this, zn);
    for (const [n, r] of t) {
      const a = n.endsWith("_HCM");
      if (s && a) {
        e.set(n.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(n, r);
    }
    return z(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return z(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
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
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), u(this, Dn, t);
  }
  setMainHighlightColorPicker(t) {
    u(this, Co, t);
  }
  editAltText(t, e = !1) {
    i(this, yo)?.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!i(this, ve);
  }
  editComment(t, e, s, n) {
    i(this, ve)?.showDialog(this, t, e, s, n);
  }
  selectComment(t, e) {
    i(this, Xt).get(t)?.getEditorByUID(e)?.toggleComment(!0, !0);
  }
  updateComment(t) {
    i(this, ve)?.updateComment(t.getData());
  }
  updatePopupColor(t) {
    i(this, ve)?.updatePopupColor(t);
  }
  removeComment(t) {
    i(this, ve)?.removeComments([t.uid]);
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
    i(this, ve)?.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    return t && i(this, ve)?.makeCommentColor(t, e) || null;
  }
  getCommentDialogElement() {
    return i(this, ve)?.dialogElement || null;
  }
  async waitForEditorsRendered(t) {
    if (i(this, Xt).has(t - 1))
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
        u(this, vo, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    u(this, Rn, t - 1);
  }
  deletePage(t) {
    for (const e of this.getEditors(t))
      e.remove();
    i(this, Xt).delete(t), i(this, Rn) === t && u(this, Rn, 0);
  }
  focusMainContainer() {
    i(this, Di).focus();
  }
  findParent(t, e) {
    for (const s of i(this, Xt).values()) {
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
    i(this, lc).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    i(this, Fr).add(t);
  }
  removeShouldRescale(t) {
    i(this, Fr).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * vr.PDF_TO_CSS_UNITS;
    for (const e of i(this, Fr))
      e.onScaleChanging();
    i(this, Dn)?.onScaleChanging();
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
    } = s, h = s.toString(), c = b(this, D, ou).call(this, s).closest(".textLayer"), d = this.getSelectionBoxes(c);
    if (!d)
      return;
    s.empty();
    const p = b(this, D, _p).call(this, c), A = i(this, Yt) === G.NONE, w = /* @__PURE__ */ f(() => {
      const y = p?.createAndAddNewEditor({
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
      A && this.showAllEditors("highlight", !0, !0), e && y?.editComment();
    }, "callback");
    if (A) {
      this.switchToMode(G.HIGHLIGHT, w);
      return;
    }
    w();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!i(this, ws))
      return null;
    const e = `${kl}${t}`, s = i(this, ws).getRawValue(e);
    return s && i(this, ws).remove(e), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && i(this, ws) && !i(this, ws).has(t.id) && i(this, ws).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = i(this, cc);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, i(this, Fn) && (u(this, Fn, !1), b(this, D, tl).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of i(this, lt))
      if (e.div.contains(t)) {
        u(this, Br, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!i(this, Br))
      return;
    const [t, e] = i(this, Br);
    u(this, Br, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, D, kp).call(this), this.setEditingState(!0);
  }
  removeEditListeners() {
    b(this, D, Ry).call(this), this.setEditingState(!1);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of i(this, Ss))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of i(this, Ss))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    if (t.preventDefault(), i(this, Ve)?.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const s of i(this, lt)) {
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
      for (const a of i(this, Ss))
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
      V(`paste: "${r.message}".`);
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
          b(this, D, Mp).call(this, h);
        b(this, D, Pp).call(this, r);
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
      V(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), i(this, Yt) !== G.NONE && !this.isEditorHandlingKeyboard && _r._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, i(this, Fn) && (u(this, Fn, !1), b(this, D, tl).call(this, "main_toolbar")));
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
  setEditingState(t) {
    t ? (b(this, D, Ly).call(this), b(this, D, Ny).call(this), b(this, D, Te).call(this, {
      isEditing: i(this, Yt) !== G.NONE,
      isEmpty: b(this, D, el).call(this),
      hasSomethingToUndo: i(this, vs).hasSomethingToUndo(),
      hasSomethingToRedo: i(this, vs).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, D, Dy).call(this), b(this, D, Oy).call(this), b(this, D, Te).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!i(this, Ss)) {
      u(this, Ss, t);
      for (const e of i(this, Ss))
        b(this, D, Mi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return i(this, Cf).id;
  }
  get currentLayer() {
    return i(this, Xt).get(i(this, Rn));
  }
  getLayer(t) {
    return i(this, Xt).get(t);
  }
  get currentPageIndex() {
    return i(this, Rn);
  }
  addLayer(t) {
    i(this, Xt).set(t.pageIndex, t), i(this, Bn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    i(this, Xt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, n = !1, r = !1, a = !1) {
    if (i(this, Yt) !== t && !(i(this, Es) && (await i(this, Es).promise, !i(this, Es)))) {
      if (u(this, Es, Promise.withResolvers()), i(this, Dn)?.commitOrRemove(), i(this, Yt) === G.POPUP && i(this, ve)?.hideSidebar(), i(this, ve)?.destroyPopup(), u(this, Yt, t), t === G.NONE) {
        this.setEditingState(!1), b(this, D, Uy).call(this);
        for (const o of i(this, Lt).values())
          o.hideStandaloneCommentButton();
        this._editorUndoBar?.hide(), this.toggleComment(null), i(this, Es).resolve();
        return;
      }
      for (const o of i(this, Lt).values())
        o.addStandaloneCommentButton();
      t === G.SIGNATURE && await i(this, $n)?.loadSignatures(), s && ye.clearPointerType(), this.setEditingState(!0), await b(this, D, By).call(this), this.unselectAll();
      for (const o of i(this, Xt).values())
        o.updateMode(t);
      if (t === G.POPUP) {
        i(this, Ao) || u(this, Ao, await i(this, To).getAnnotationsByType(new Set(i(this, Ss).map((l) => l._editorType))));
        const o = /* @__PURE__ */ new Set(), h = [];
        for (const l of i(this, Lt).values()) {
          const {
            annotationElementId: c,
            hasComment: d,
            deleted: p
          } = l;
          c && o.add(c), d && !p && h.push(l.getData());
        }
        for (const l of i(this, Ao)) {
          const {
            id: c,
            popupRef: d,
            contentsObj: p
          } = l;
          d && p?.str && !o.has(c) && !i(this, Nn).has(c) && h.push(l);
        }
        i(this, ve)?.showSidebar(h);
      }
      if (!e) {
        n && this.addNewEditorFromKeyboard(), i(this, Es).resolve();
        return;
      }
      for (const o of i(this, Lt).values())
        o.uid === e ? (this.setSelected(o), a ? o.editComment() : r ? o.enterInEditMode() : o.focus()) : o.unselect();
      i(this, Es).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== i(this, Yt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (i(this, Ss)) {
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
          }), (i(this, oc) || u(this, oc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of i(this, lt))
          s.updateParams(t, e);
      else
        for (const s of i(this, Ss))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    for (const r of i(this, Lt).values())
      r.editorType === t && r.show(e);
    (i(this, oc)?.get(Z.HIGHLIGHT_SHOW_ALL) ?? !0) !== e && b(this, D, Mi).call(this, [[Z.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (i(this, rc) !== t) {
      u(this, rc, t);
      for (const e of i(this, Xt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of i(this, Lt).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return i(this, Lt).get(t);
  }
  addEditor(t) {
    i(this, Lt).set(t.id, t);
  }
  removeEditor(t) {
    t.div.contains(document.activeElement) && (i(this, ii) && clearTimeout(i(this, ii)), u(this, ii, setTimeout(() => {
      this.focusMainContainer(), u(this, ii, null);
    }, 0))), i(this, Lt).delete(t.id), t.annotationElementId && i(this, Hn)?.delete(t.annotationElementId), this.unselect(t), (!t.annotationElementId || !i(this, Nn).has(t.annotationElementId)) && i(this, ws)?.remove(t.id);
  }
  addDeletedAnnotationElement(t) {
    i(this, Nn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return i(this, Nn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    i(this, Nn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    i(this, Ve) !== t && (u(this, Ve, t), t && b(this, D, Mi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    i(this, D, Hy) === t && b(this, D, Mi).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, D, Mi).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (i(this, lt).has(t)) {
      i(this, lt).delete(t), t.unselect(), b(this, D, Te).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    i(this, lt).add(t), t.select(), b(this, D, Mi).call(this, t.propertiesToUpdate), b(this, D, Te).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    this.updateToolbar({
      mode: t.mode,
      editId: t.uid
    }), i(this, Dn)?.commitOrRemove();
    for (const e of i(this, lt))
      e !== t && e.unselect();
    i(this, lt).clear(), i(this, lt).add(t), t.select(), b(this, D, Mi).call(this, t.propertiesToUpdate), b(this, D, Te).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return i(this, lt).has(t);
  }
  get firstSelectedEditor() {
    return i(this, lt).values().next().value;
  }
  unselect(t) {
    t.unselect(), i(this, lt).delete(t), b(this, D, Te).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return i(this, lt).size !== 0;
  }
  get isEnterHandled() {
    return i(this, lt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    i(this, vs).undo(), b(this, D, Te).call(this, {
      hasSomethingToUndo: i(this, vs).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, D, el).call(this)
    }), this._editorUndoBar?.hide();
  }
  redo() {
    i(this, vs).redo(), b(this, D, Te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: i(this, vs).hasSomethingToRedo(),
      isEmpty: b(this, D, el).call(this)
    });
  }
  addCommands(t) {
    i(this, vs).add(t), b(this, D, Te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, D, el).call(this)
    });
  }
  cleanUndoStack(t) {
    i(this, vs).cleanType(t);
  }
  delete() {
    this.commitOrRemove();
    const t = this.currentLayer?.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...i(this, lt)], s = /* @__PURE__ */ f(() => {
      this._editorUndoBar?.show(n, e.length === 1 ? e[0].editorType : e.length);
      for (const r of e)
        r.remove();
    }, "cmd"), n = /* @__PURE__ */ f(() => {
      for (const r of e)
        b(this, D, Mp).call(this, r);
    }, "undo");
    this.addCommands({
      cmd: s,
      undo: n,
      mustExec: !0
    });
  }
  commitOrRemove() {
    i(this, Ve)?.commitOrRemove();
  }
  hasSomethingToControl() {
    return i(this, Ve) || this.hasSelection;
  }
  selectAll() {
    for (const t of i(this, lt))
      t.commit();
    b(this, D, Pp).call(this, i(this, Lt).values());
  }
  unselectAll() {
    if (!(i(this, Ve) && (i(this, Ve).commitOrRemove(), i(this, Yt) !== G.NONE)) && !i(this, Dn)?.commitOrRemove() && this.hasSelection) {
      for (const t of i(this, lt))
        t.unselect();
      i(this, lt).clear(), b(this, D, Te).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    i(this, jn)[0] += t, i(this, jn)[1] += e;
    const [n, r] = i(this, jn), a = [...i(this, lt)], o = 1e3;
    i(this, ri) && clearTimeout(i(this, ri)), u(this, ri, setTimeout(() => {
      u(this, ri, null), i(this, jn)[0] = i(this, jn)[1] = 0, this.addCommands({
        cmd: /* @__PURE__ */ f(() => {
          for (const h of a)
            i(this, Lt).has(h.id) && (h.translateInPage(n, r), h.translationDone());
        }, "cmd"),
        undo: /* @__PURE__ */ f(() => {
          for (const h of a)
            i(this, Lt).has(h.id) && (h.translateInPage(-n, -r), h.translationDone());
        }, "undo"),
        mustExec: !1
      });
    }, o));
    for (const h of a)
      h.translateInPage(t, e), h.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), u(this, si, /* @__PURE__ */ new Map());
      for (const t of i(this, lt))
        i(this, si).set(t, {
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
    if (!i(this, si))
      return !1;
    this.disableUserSelect(!1);
    const t = i(this, si);
    u(this, si, null);
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
      if (i(this, Lt).has(n.id)) {
        const h = i(this, Xt).get(o);
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
    if (i(this, si))
      for (const s of i(this, si).keys())
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
    return this.getActive()?.shouldGetKeyboardEvents() || i(this, lt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return i(this, Ve) === t;
  }
  getActive() {
    return i(this, Ve);
  }
  getMode() {
    return i(this, Yt);
  }
  isEditingMode() {
    return i(this, Yt) !== G.NONE;
  }
  get imageManager() {
    return z(this, "imageManager", new Cp());
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
          y: A,
          width: w,
          height: y
        } of d.getClientRects())
          w === 0 || y === 0 || h.push(o(p, A, w, y));
    }
    return h.length === 0 ? null : h;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (i(this, wo) || u(this, wo, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    i(this, wo)?.delete(t);
  }
  renderAnnotationElement(t) {
    const e = i(this, wo)?.get(t.data.id);
    if (!e)
      return;
    const s = i(this, ws).getRawValue(e);
    s && (i(this, Yt) === G.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    const n = i(this, Hn)?.get(t);
    n && (n.setCanvas(e, s), i(this, Hn).delete(t));
  }
  addMissingCanvas(t, e) {
    (i(this, Hn) || u(this, Hn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
bo = new WeakMap(), Ve = new WeakMap(), Ao = new WeakMap(), Lt = new WeakMap(), Xt = new WeakMap(), yo = new WeakMap(), ws = new WeakMap(), wo = new WeakMap(), vs = new WeakMap(), ve = new WeakMap(), Ln = new WeakMap(), Dn = new WeakMap(), Rn = new WeakMap(), Nn = new WeakMap(), si = new WeakMap(), Ss = new WeakMap(), Fr = new WeakMap(), sc = new WeakMap(), ic = new WeakMap(), vo = new WeakMap(), nc = new WeakMap(), ii = new WeakMap(), On = new WeakMap(), So = new WeakMap(), Fn = new WeakMap(), ni = new WeakMap(), Cf = new WeakMap(), Bn = new WeakMap(), Eo = new WeakMap(), rc = new WeakMap(), Un = new WeakMap(), Br = new WeakMap(), Co = new WeakMap(), Hn = new WeakMap(), ac = new WeakMap(), Yt = new WeakMap(), lt = new WeakMap(), Li = new WeakMap(), $n = new WeakMap(), zn = new WeakMap(), oc = new WeakMap(), To = new WeakMap(), hc = new WeakMap(), jn = new WeakMap(), ri = new WeakMap(), Di = new WeakMap(), lc = new WeakMap(), cc = new WeakMap(), Es = new WeakMap(), D = new WeakSet(), ou = /* @__PURE__ */ f(function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, "#getAnchorElementForSelection"), _p = /* @__PURE__ */ f(function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of i(this, Xt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, "#getLayerForTextLayer"), ky = /* @__PURE__ */ f(function(t) {
  this.commitOrRemove(), this.currentLayer?.endDrawingSession(!1);
}, "#beforeUnload"), My = /* @__PURE__ */ f(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, D, ou).call(this, t).closest(".textLayer"), n = this.getSelectionBoxes(s);
  n && (i(this, ni) || u(this, ni, new vp(this)), i(this, ni).show(s, n, this.direction === "ltr"));
}, "#displayFloatingToolbar"), Py = /* @__PURE__ */ f(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    i(this, Li) && (i(this, ni)?.hide(), u(this, Li, null), b(this, D, Te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === i(this, Li))
    return;
  const n = b(this, D, ou).call(this, t).closest(".textLayer");
  if (!n) {
    i(this, Li) && (i(this, ni)?.hide(), u(this, Li, null), b(this, D, Te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if (i(this, ni)?.hide(), u(this, Li, e), b(this, D, Te).call(this, {
    hasSelectedText: !0
  }), !(i(this, Yt) !== G.HIGHLIGHT && i(this, Yt) !== G.NONE) && (i(this, Yt) === G.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), u(this, Fn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const r = i(this, Yt) === G.HIGHLIGHT ? b(this, D, _p).call(this, n) : null;
    if (r?.toggleDrawing(), i(this, Eo)) {
      const a = new AbortController(), o = this.combinedSignal(a), h = /* @__PURE__ */ f((l) => {
        l.type === "pointerup" && l.button !== 0 || (a.abort(), r?.toggleDrawing(!0), l.type === "pointerup" && b(this, D, tl).call(this, "main_toolbar"));
      }, "pointerup");
      window.addEventListener("pointerup", h, {
        signal: o
      }), window.addEventListener("blur", h, {
        signal: o
      });
    } else
      r?.toggleDrawing(!0), b(this, D, tl).call(this, "main_toolbar");
  }
}, "#selectionChange"), tl = /* @__PURE__ */ f(function(t = "") {
  i(this, Yt) === G.HIGHLIGHT ? this.highlightSelection(t) : i(this, sc) && b(this, D, My).call(this);
}, "#onSelectEnd"), Iy = /* @__PURE__ */ f(function() {
  document.addEventListener("selectionchange", b(this, D, Py).bind(this), {
    signal: this._signal
  });
}, "#addSelectionListener"), Ly = /* @__PURE__ */ f(function() {
  if (i(this, On))
    return;
  u(this, On, new AbortController());
  const t = this.combinedSignal(i(this, On));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, "#addFocusManager"), Dy = /* @__PURE__ */ f(function() {
  i(this, On)?.abort(), u(this, On, null);
}, "#removeFocusManager"), kp = /* @__PURE__ */ f(function() {
  if (i(this, Un))
    return;
  u(this, Un, new AbortController());
  const t = this.combinedSignal(i(this, Un));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, "#addKeyboardManager"), Ry = /* @__PURE__ */ f(function() {
  i(this, Un)?.abort(), u(this, Un, null);
}, "#removeKeyboardManager"), Ny = /* @__PURE__ */ f(function() {
  if (i(this, Ln))
    return;
  u(this, Ln, new AbortController());
  const t = this.combinedSignal(i(this, Ln));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, "#addCopyPasteListeners"), Oy = /* @__PURE__ */ f(function() {
  i(this, Ln)?.abort(), u(this, Ln, null);
}, "#removeCopyPasteListeners"), Fy = /* @__PURE__ */ f(function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, "#addDragAndDropListeners"), Te = /* @__PURE__ */ f(function(t) {
  Object.entries(t).some(([s, n]) => i(this, hc)[s] !== n) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(i(this, hc), t)
  }), i(this, Yt) === G.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, D, Mi).call(this, [[Z.HIGHLIGHT_FREE, !0]]));
}, "#dispatchUpdateStates"), Mi = /* @__PURE__ */ f(function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, "#dispatchUpdateUI"), By = /* @__PURE__ */ f(async function() {
  if (!i(this, Bn)) {
    u(this, Bn, !0);
    const t = [];
    for (const e of i(this, Xt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of i(this, Lt).values())
      e.enable();
  }
}, "#enableAll"), Uy = /* @__PURE__ */ f(function() {
  if (this.unselectAll(), i(this, Bn)) {
    u(this, Bn, !1);
    for (const t of i(this, Xt).values())
      t.disable();
    for (const t of i(this, Lt).values())
      t.disable();
  }
}, "#disableAll"), Mp = /* @__PURE__ */ f(function(t) {
  const e = i(this, Xt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, "#addEditorToLayer"), Hy = /* @__PURE__ */ f(function() {
  let t = null;
  for (t of i(this, lt))
    ;
  return t;
}, "#lastSelectedEditor"), el = /* @__PURE__ */ f(function() {
  if (i(this, Lt).size === 0)
    return !0;
  if (i(this, Lt).size === 1)
    for (const t of i(this, Lt).values())
      return t.isEmpty();
  return !1;
}, "#isEmpty"), Pp = /* @__PURE__ */ f(function(t) {
  for (const e of i(this, lt))
    e.unselect();
  i(this, lt).clear();
  for (const e of t)
    e.isEmpty() || (i(this, lt).add(e), e.select());
  b(this, D, Te).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, "#selectEditors"), f(_r, "AnnotationEditorUIManager"), M(_r, "TRANSLATE_SMALL", 1), M(_r, "TRANSLATE_BIG", 10);
let Va = _r;
var ee, ai, Os, xo, oi, We, _o, hi, Ne, Ri, Ur, li, Gn, Ys, sl, hu;
const De = class De {
  constructor(t) {
    m(this, Ys);
    m(this, ee, null);
    m(this, ai, !1);
    m(this, Os, null);
    m(this, xo, null);
    m(this, oi, null);
    m(this, We, null);
    m(this, _o, !1);
    m(this, hi, null);
    m(this, Ne, null);
    m(this, Ri, null);
    m(this, Ur, null);
    m(this, li, !1);
    u(this, Ne, t), u(this, li, t._uiManager.useNewAltTextFlow), i(De, Gn) || u(De, Gn, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    De._l10n ??= t;
  }
  async render() {
    const t = u(this, Os, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = u(this, xo, document.createElement("span"));
    t.append(e), i(this, li) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", i(De, Gn).missing), e.setAttribute("data-l10n-id", i(De, Gn)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = i(this, Ne)._uiManager._signal;
    t.addEventListener("contextmenu", Ds, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const n = /* @__PURE__ */ f((r) => {
      r.preventDefault(), i(this, Ne)._uiManager.editAltText(i(this, Ne)), i(this, li) && i(this, Ne)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: i(this, Ys, sl)
        }
      });
    }, "onClick");
    return t.addEventListener("click", n, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (u(this, _o, !0), n(r));
    }, {
      signal: s
    }), await b(this, Ys, hu).call(this), t;
  }
  finish() {
    i(this, Os) && (i(this, Os).focus({
      focusVisible: i(this, _o)
    }), u(this, _o, !1));
  }
  isEmpty() {
    return i(this, li) ? i(this, ee) === null : !i(this, ee) && !i(this, ai);
  }
  hasData() {
    return i(this, li) ? i(this, ee) !== null || !!i(this, Ri) : this.isEmpty();
  }
  get guessedText() {
    return i(this, Ri);
  }
  async setGuessedText(t) {
    i(this, ee) === null && (u(this, Ri, t), u(this, Ur, await De._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, Ys, hu).call(this));
  }
  toggleAltTextBadge(t = !1) {
    if (!i(this, li) || i(this, ee)) {
      i(this, hi)?.remove(), u(this, hi, null);
      return;
    }
    if (!i(this, hi)) {
      const e = u(this, hi, document.createElement("div"));
      e.className = "noAltTextBadge", i(this, Ne).div.append(e);
    }
    i(this, hi).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = i(this, ee);
    return !t && i(this, Ri) === e && (e = i(this, Ur)), {
      altText: e,
      decorative: i(this, ai),
      guessedText: i(this, Ri),
      textWithDisclaimer: i(this, Ur)
    };
  }
  get data() {
    return {
      altText: i(this, ee),
      decorative: i(this, ai)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: n,
    cancel: r = !1
  }) {
    s && (u(this, Ri, s), u(this, Ur, n)), !(i(this, ee) === t && i(this, ai) === e) && (r || (u(this, ee, t), u(this, ai, e)), b(this, Ys, hu).call(this));
  }
  toggle(t = !1) {
    i(this, Os) && (!t && i(this, We) && (clearTimeout(i(this, We)), u(this, We, null)), i(this, Os).disabled = !t);
  }
  shown() {
    i(this, Ne)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: i(this, Ys, sl)
      }
    });
  }
  destroy() {
    i(this, Os)?.remove(), u(this, Os, null), u(this, xo, null), u(this, oi, null), i(this, hi)?.remove(), u(this, hi, null);
  }
};
ee = new WeakMap(), ai = new WeakMap(), Os = new WeakMap(), xo = new WeakMap(), oi = new WeakMap(), We = new WeakMap(), _o = new WeakMap(), hi = new WeakMap(), Ne = new WeakMap(), Ri = new WeakMap(), Ur = new WeakMap(), li = new WeakMap(), Gn = new WeakMap(), Ys = new WeakSet(), sl = /* @__PURE__ */ f(function() {
  return i(this, ee) && "added" || i(this, ee) === null && this.guessedText && "review" || "missing";
}, "#label"), hu = /* @__PURE__ */ f(async function() {
  const t = i(this, Os);
  if (!t)
    return;
  if (i(this, li)) {
    if (t.classList.toggle("done", !!i(this, ee)), t.setAttribute("data-l10n-id", i(De, Gn)[i(this, Ys, sl)]), i(this, xo)?.setAttribute("data-l10n-id", i(De, Gn)[`${i(this, Ys, sl)}-label`]), !i(this, ee)) {
      i(this, oi)?.remove();
      return;
    }
  } else {
    if (!i(this, ee) && !i(this, ai)) {
      t.classList.remove("done"), i(this, oi)?.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = i(this, oi);
  if (!e) {
    u(this, oi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${i(this, Ne).id}`;
    const n = 100, r = i(this, Ne)._uiManager._signal;
    r.addEventListener("abort", () => {
      clearTimeout(i(this, We)), u(this, We, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      u(this, We, setTimeout(() => {
        u(this, We, null), i(this, oi).classList.add("show"), i(this, Ne)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, n));
    }, {
      signal: r
    }), t.addEventListener("mouseleave", () => {
      i(this, We) && (clearTimeout(i(this, We)), u(this, We, null)), i(this, oi)?.classList.remove("show");
    }, {
      signal: r
    });
  }
  i(this, ai) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = i(this, ee)), e.parentNode || t.append(e), i(this, Ne).getElementForAltText()?.setAttribute("aria-describedby", e.id);
}, "#setState"), f(De, "AltText"), m(De, Gn, null), M(De, "_l10n", null);
let zu = De;
var ce, Cs, Hr, vt, dc, Vn, Ts, Wn, Xn, $r, uc, Ip;
const cb = class cb {
  constructor(t) {
    m(this, uc);
    m(this, ce, null);
    m(this, Cs, null);
    m(this, Hr, !1);
    m(this, vt, null);
    m(this, dc, null);
    m(this, Vn, null);
    m(this, Ts, null);
    m(this, Wn, null);
    m(this, Xn, !1);
    m(this, $r, null);
    u(this, vt, t);
  }
  renderForToolbar() {
    const t = u(this, Cs, document.createElement("button"));
    return t.className = "comment", b(this, uc, Ip).call(this, t, !1);
  }
  renderForStandalone() {
    const t = u(this, ce, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = i(this, vt).commentButtonPosition;
    if (e) {
      const {
        style: s
      } = t;
      s.insetInlineEnd = `calc(${100 * (i(this, vt)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const n = i(this, vt).commentButtonColor;
      n && (s.backgroundColor = n);
    }
    return b(this, uc, Ip).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      (i(this, ce) ?? i(this, Cs))?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!i(this, ce))
      return;
    const t = i(this, vt).commentButtonColor;
    t && (i(this, ce).style.backgroundColor = t), i(this, vt)._uiManager.updatePopupColor(i(this, vt));
  }
  get commentButtonWidth() {
    return (i(this, ce)?.getBoundingClientRect().width ?? 0) / i(this, vt).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (i(this, $r))
      return i(this, $r);
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
    } = i(this, vt).parent.boundingClientRect;
    return [(t - n) / a, (e + s - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    u(this, $r, t);
  }
  hasDefaultPopupPosition() {
    return i(this, $r) === null;
  }
  removeStandaloneCommentButton() {
    i(this, ce)?.remove(), u(this, ce, null);
  }
  removeToolbarCommentButton() {
    i(this, Cs)?.remove(), u(this, Cs, null);
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
      [s, n] = i(this, vt).commentButtonPosition;
      const {
        width: c,
        height: d,
        x: p,
        y: A
      } = i(this, vt);
      s = p + s * c, n = A + n * d;
    }
    const r = i(this, vt).parent.boundingClientRect, {
      x: a,
      y: o,
      width: h,
      height: l
    } = r;
    i(this, vt)._uiManager.editComment(i(this, vt), a + s * h, o + n * l, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    i(this, Cs) && (i(this, Cs).focus({
      focusVisible: i(this, Hr)
    }), u(this, Hr, !1));
  }
  isDeleted() {
    return i(this, Xn) || i(this, Ts) === "";
  }
  isEmpty() {
    return i(this, Ts) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || i(this, Ts) !== i(this, dc);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: i(this, Ts),
      richText: i(this, Vn),
      date: i(this, Wn),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== i(this, Ts) && u(this, Vn, null), t === null) {
      u(this, Ts, ""), u(this, Xn, !0);
      return;
    }
    u(this, Ts, t), u(this, Wn, /* @__PURE__ */ new Date()), u(this, Xn, !1);
  }
  restoreData({
    text: t,
    richText: e,
    date: s
  }) {
    u(this, Ts, t), u(this, Vn, e), u(this, Wn, s), u(this, Xn, !1);
  }
  setInitialText(t, e = null) {
    u(this, dc, t), this.data = t, u(this, Wn, null), u(this, Vn, e);
  }
  shown() {
  }
  destroy() {
    i(this, Cs)?.remove(), u(this, Cs, null), i(this, ce)?.remove(), u(this, ce, null), u(this, Ts, ""), u(this, Vn, null), u(this, Wn, null), u(this, vt, null), u(this, Hr, !1), u(this, Xn, !1);
  }
};
ce = new WeakMap(), Cs = new WeakMap(), Hr = new WeakMap(), vt = new WeakMap(), dc = new WeakMap(), Vn = new WeakMap(), Ts = new WeakMap(), Wn = new WeakMap(), Xn = new WeakMap(), $r = new WeakMap(), uc = new WeakSet(), Ip = /* @__PURE__ */ f(function(t, e) {
  if (!i(this, vt)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [i(this, vt)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
  const s = i(this, vt)._uiManager._signal;
  if (!(s instanceof AbortSignal) || s.aborted)
    return t;
  t.addEventListener("contextmenu", Ds, {
    signal: s
  }), e && (t.addEventListener("focusin", (r) => {
    i(this, vt)._focusEventsAllowed = !1, Ft(r);
  }, {
    capture: !0,
    signal: s
  }), t.addEventListener("focusout", (r) => {
    i(this, vt)._focusEventsAllowed = !0, Ft(r);
  }, {
    capture: !0,
    signal: s
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: s
  });
  const n = /* @__PURE__ */ f((r) => {
    r.preventDefault(), t === i(this, Cs) ? this.edit() : i(this, vt).toggleComment(!0);
  }, "onClick");
  return t.addEventListener("click", n, {
    capture: !0,
    signal: s
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (u(this, Hr, !0), n(r));
  }, {
    signal: s
  }), t.addEventListener("pointerenter", () => {
    i(this, vt).toggleComment(!1, !0);
  }, {
    signal: s
  }), t.addEventListener("pointerleave", () => {
    i(this, vt).toggleComment(!1, !1);
  }, {
    signal: s
  }), t;
}, "#render"), f(cb, "Comment");
let ro = cb;
var ko, zr, fc, pc, gc, mc, bc, Ni, jr, Oi, Gr, Fi, Sr, $y, zy, jy;
const Tf = class Tf {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: n = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    m(this, Sr);
    m(this, ko);
    m(this, zr, !1);
    m(this, fc, null);
    m(this, pc);
    m(this, gc);
    m(this, mc);
    m(this, bc);
    m(this, Ni, null);
    m(this, jr);
    m(this, Oi, null);
    m(this, Gr);
    m(this, Fi, null);
    u(this, ko, t), u(this, fc, s), u(this, pc, e), u(this, gc, n), u(this, mc, r), u(this, bc, a), u(this, Gr, new AbortController()), u(this, jr, AbortSignal.any([o, i(this, Gr).signal])), t.addEventListener("touchstart", b(this, Sr, $y).bind(this), {
      passive: !1,
      signal: i(this, jr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / mn.pixelRatio;
  }
  destroy() {
    i(this, Gr)?.abort(), u(this, Gr, null), i(this, Ni)?.abort(), u(this, Ni, null);
  }
};
ko = new WeakMap(), zr = new WeakMap(), fc = new WeakMap(), pc = new WeakMap(), gc = new WeakMap(), mc = new WeakMap(), bc = new WeakMap(), Ni = new WeakMap(), jr = new WeakMap(), Oi = new WeakMap(), Gr = new WeakMap(), Fi = new WeakMap(), Sr = new WeakSet(), $y = /* @__PURE__ */ f(function(t) {
  var n, r, a;
  if ((n = i(this, pc)) != null && n.call(this))
    return;
  if (t.touches.length === 1) {
    if (i(this, Ni))
      return;
    const o = u(this, Ni, new AbortController()), h = AbortSignal.any([i(this, jr), o.signal]), l = i(this, ko), c = {
      capture: !0,
      signal: h,
      passive: !1
    }, d = /* @__PURE__ */ f((p) => {
      p.pointerType === "touch" && (i(this, Ni)?.abort(), u(this, Ni, null));
    }, "cancelPointerDown");
    l.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Ft(p), d(p));
    }, c), l.addEventListener("pointerup", d, c), l.addEventListener("pointercancel", d, c);
    return;
  }
  if (!i(this, Fi)) {
    u(this, Fi, new AbortController());
    const o = AbortSignal.any([i(this, jr), i(this, Fi).signal]), h = i(this, ko), l = {
      signal: o,
      capture: !1,
      passive: !1
    };
    h.addEventListener("touchmove", b(this, Sr, zy).bind(this), l);
    const c = b(this, Sr, jy).bind(this);
    h.addEventListener("touchend", c, l), h.addEventListener("touchcancel", c, l), l.capture = !0, h.addEventListener("pointerdown", Ft, l), h.addEventListener("pointermove", Ft, l), h.addEventListener("pointercancel", Ft, l), h.addEventListener("pointerup", Ft, l), (r = i(this, gc)) == null || r.call(this);
  }
  if (Ft(t), t.touches.length !== 2 || (a = i(this, fc)) != null && a.call(this)) {
    u(this, Oi, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), u(this, Oi, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, "#onTouchStart"), zy = /* @__PURE__ */ f(function(t) {
  var T;
  if (!i(this, Oi) || t.touches.length !== 2)
    return;
  Ft(t);
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: n,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, h = i(this, Oi), {
    touch0X: l,
    touch0Y: c,
    touch1X: d,
    touch1Y: p
  } = h, A = d - l, w = p - c, y = a - n, S = o - r, v = Math.hypot(y, S) || 1, C = Math.hypot(A, w) || 1;
  if (!i(this, zr) && Math.abs(C - v) <= Tf.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (h.touch0X = n, h.touch0Y = r, h.touch1X = a, h.touch1Y = o, !i(this, zr)) {
    u(this, zr, !0);
    return;
  }
  const E = [(n + a) / 2, (r + o) / 2];
  (T = i(this, mc)) == null || T.call(this, E, C, v);
}, "#onTouchMove"), jy = /* @__PURE__ */ f(function(t) {
  var e;
  t.touches.length >= 2 || (i(this, Fi) && (i(this, Fi).abort(), u(this, Fi, null), (e = i(this, bc)) == null || e.call(this)), i(this, Oi) && (Ft(t), u(this, Oi, null), u(this, zr, !1)));
}, "#onTouchEnd"), f(Tf, "TouchManager");
let ju = Tf;
var Vr, Fs, _t, ct, Bi, Mo, Yn, Ac, de, Wr, Ui, xs, Kn, yc, Xr, Xe, wc, Yr, Hi, ci, Po, Io, _s, Kr, vc, xf, $, Lp, Sc, Dp, lu, Gy, Vy, Rp, cu, Np, Wy, Xy, Yy, Op, Ky, Fp, qy, Qy, Jy, Bp, il;
const K = class K {
  constructor(t) {
    m(this, $);
    m(this, Vr, null);
    m(this, Fs, null);
    m(this, _t, null);
    m(this, ct, null);
    m(this, Bi, null);
    m(this, Mo, !1);
    m(this, Yn, null);
    m(this, Ac, "");
    m(this, de, null);
    m(this, Wr, null);
    m(this, Ui, null);
    m(this, xs, null);
    m(this, Kn, null);
    m(this, yc, "");
    m(this, Xr, !1);
    m(this, Xe, null);
    m(this, wc, !1);
    m(this, Yr, !1);
    m(this, Hi, !1);
    m(this, ci, null);
    m(this, Po, 0);
    m(this, Io, 0);
    m(this, _s, null);
    m(this, Kr, null);
    M(this, "isSelected", !1);
    M(this, "_isCopy", !1);
    M(this, "_editToolbar", null);
    M(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    M(this, "_initialData", null);
    M(this, "_isVisible", !0);
    M(this, "_uiManager", null);
    M(this, "_focusEventsAllowed", !0);
    m(this, vc, !1);
    m(this, xf, K._zIndex++);
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
    const t = K.prototype._resizeWithKeyboard, e = Va.TRANSLATE_SMALL, s = Va.TRANSLATE_BIG;
    return z(this, "_resizerKeyboardManager", new Ga([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    return z(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new Up({
      id: t.parent.getNextId(),
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
    nt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return i(this, vc);
  }
  set _isDraggable(t) {
    u(this, vc, t), this.div?.classList.toggle("draggable", t);
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
    this.div.style.zIndex = i(this, xf);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (b(this, $, il).call(this), i(this, xs)?.remove(), u(this, xs, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (i(this, Xr) ? u(this, Xr, !1) : this.parent.setSelected(this));
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
    const [s, n] = this.parentDimensions;
    this.setAt(t * s, e * n, this.width * s, this.height * n), this._onTranslated();
  }
  translate(t, e) {
    b(this, $, Lp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    i(this, Xe) || u(this, Xe, [this.x, this.y, this.width, this.height]), b(this, $, Lp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    i(this, Xe) || u(this, Xe, [this.x, this.y, this.width, this.height]);
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
    return !!i(this, Xe) && (i(this, Xe)[0] !== this.x || i(this, Xe)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!i(this, Xe) && (i(this, Xe)[2] !== this.width || i(this, Xe)[3] !== this.height);
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
    return b(s = K, Sc, Dp).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = K, Sc, Dp).call(s, t, e, 360 - this.parentRotation);
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
    i(this, _t)?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || i(this, Yr))
      return this._editToolbar;
    this._editToolbar = new wp(this), this.div.append(this._editToolbar.render());
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
    this._editToolbar?.remove(), this._editToolbar = null, i(this, _t)?.destroy();
  }
  addContainer(t) {
    const e = this._editToolbar?.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return i(this, _t) || (zu.initialize(K._l10n), u(this, _t, new zu(this)), i(this, Vr) && (i(this, _t).data = i(this, Vr), u(this, Vr, null))), i(this, _t);
  }
  get altTextData() {
    return i(this, _t)?.data;
  }
  set altTextData(t) {
    i(this, _t) && (i(this, _t).data = t);
  }
  get guessedAltText() {
    return i(this, _t)?.guessedText;
  }
  async setGuessedAltText(t) {
    await i(this, _t)?.setGuessedText(t);
  }
  serializeAltText(t) {
    return i(this, _t)?.serialize(t);
  }
  hasAltText() {
    return !!i(this, _t) && !i(this, _t).isEmpty();
  }
  hasAltTextData() {
    return i(this, _t)?.hasData() ?? !1;
  }
  focusCommentButton() {
    i(this, ct)?.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? i(this, ct) || u(this, ct, new ro(this)) : null;
  }
  addStandaloneCommentButton() {
    if (this._uiManager.hasCommentManager()) {
      if (i(this, Bi)) {
        this._uiManager.isEditingMode() && i(this, Bi).classList.remove("hidden");
        return;
      }
      this.hasComment && (u(this, Bi, i(this, ct).renderForStandalone()), this.div.append(i(this, Bi)));
    }
  }
  removeStandaloneCommentButton() {
    i(this, ct).removeStandaloneCommentButton(), u(this, Bi, null);
  }
  hideStandaloneCommentButton() {
    i(this, Bi)?.classList.add("hidden");
  }
  get comment() {
    if (!i(this, ct))
      return null;
    const {
      data: {
        richText: t,
        text: e,
        date: s,
        deleted: n
      }
    } = i(this, ct);
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
    i(this, ct) || u(this, ct, new ro(this)), typeof t == "object" && t !== null ? i(this, ct).restoreData(t) : i(this, ct).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: s
  }) {
    if (!e || (i(this, ct) || u(this, ct, new ro(this)), i(this, ct).setInitialText(t, s), !this.annotationElementId))
      return;
    const n = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    n && this.updateFromAnnotationLayer(n);
  }
  get hasEditedComment() {
    return i(this, ct)?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return i(this, ct)?.isDeleted();
  }
  get hasComment() {
    return !!i(this, ct) && !i(this, ct).isEmpty() && !i(this, ct).isDeleted();
  }
  async editComment(t) {
    i(this, ct) || u(this, ct, new ro(this)), i(this, ct).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    i(this, ct).setSelectedButton(t);
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
    i(this, ct).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = i(this, Mo) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, $, Fp).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [n, r] = this.getInitialTranslation();
    return this.translate(n, r), xy(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (i(this, Kr) || u(this, Kr, new ju({
      container: t,
      isPinchingDisabled: /* @__PURE__ */ f(() => !this.isSelected, "isPinchingDisabled"),
      onPinchStart: b(this, $, Wy).bind(this),
      onPinching: b(this, $, Xy).bind(this),
      onPinchEnd: b(this, $, Yy).bind(this),
      signal: this._uiManager._signal
    }))), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Ht.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (u(this, Xr, !0), this._isDraggable) {
      b(this, $, Ky).call(this, t);
      return;
    }
    b(this, $, Op).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    i(this, ci) && clearTimeout(i(this, ci)), u(this, ci, setTimeout(() => {
      u(this, ci, null), this.parent?.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const n = this.parentScale, [r, a] = this.pageDimensions, [o, h] = this.pageTranslation, l = t / n, c = e / n, d = this.x * r, p = this.y * a, A = this.width * r, w = this.height * a;
    switch (s) {
      case 0:
        return [d + l + o, a - p - c - w + h, d + l + A + o, a - p - c + h];
      case 90:
        return [d + c + o, a - p + l + h, d + c + w + o, a - p + l + A + h];
      case 180:
        return [d - l - A + o, a - p + c + h, d - l + o, a - p + c + w + h];
      case 270:
        return [d - c - w + o, a - p - l - A + h, d - c + o, a - p - l + h];
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
    i(this, ct)?.onUpdatedColor();
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
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), u(this, Yr, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), u(this, Yr, !1), !0) : !1;
  }
  isInEditMode() {
    return i(this, Yr);
  }
  shouldGetKeyboardEvents() {
    return i(this, Hi);
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
    b(this, $, Fp).call(this);
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
      id: e.getNextId(),
      uiManager: s,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    n.rotation = t.rotation, u(n, Vr, t.accessibilityData), n._isCopy = t.isCopy || !1;
    const [r, a] = n.pageDimensions, [o, h, l, c] = n.getRectInCurrentCoords(t.rect, a);
    return n.x = o / r, n.y = h / a, n.width = l / r, n.height = c / a, n;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (i(this, Kn)?.abort(), u(this, Kn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), i(this, ci) && (clearTimeout(i(this, ci)), u(this, ci, null)), b(this, $, il).call(this), this.removeEditToolbar(), i(this, _s)) {
      for (const t of i(this, _s).values())
        clearTimeout(t);
      u(this, _s, null);
    }
    this.parent = null, i(this, Kr)?.destroy(), u(this, Kr, null), i(this, xs)?.remove(), u(this, xs, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, $, Gy).call(this), i(this, de).classList.remove("hidden"));
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
    return i(this, ct).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    i(this, ct).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return i(this, ct).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return i(this, ct).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    i(this, ct)?.setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), u(this, Ui, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = i(this, de).children;
    if (!i(this, Fs)) {
      u(this, Fs, Array.from(e));
      const a = b(this, $, qy).bind(this), o = b(this, $, Qy).bind(this), h = this._uiManager._signal;
      for (const l of i(this, Fs)) {
        const c = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", a, {
          signal: h
        }), l.addEventListener("blur", o, {
          signal: h
        }), l.addEventListener("focus", b(this, $, Jy).bind(this, c), {
          signal: h
        }), l.setAttribute("data-l10n-id", K._l10nResizer[c]);
      }
    }
    const s = i(this, Fs)[0];
    let n = 0;
    for (const a of e) {
      if (a === s)
        break;
      n++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (i(this, Fs).length / 4);
    if (r !== n) {
      if (r < n)
        for (let o = 0; o < n - r; o++)
          i(this, de).append(i(this, de).firstElementChild);
      else if (r > n)
        for (let o = 0; o < r - n; o++)
          i(this, de).firstElementChild.before(i(this, de).lastElementChild);
      let a = 0;
      for (const o of e) {
        const l = i(this, Fs)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", K._l10nResizer[l]);
      }
    }
    b(this, $, Bp).call(this, 0), u(this, Hi, !0), i(this, de).firstElementChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    i(this, Hi) && b(this, $, Np).call(this, i(this, yc), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, $, il).call(this), this.div.focus();
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
    this._editToolbar?.show(), i(this, _t)?.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({
      preventScroll: !0
    }), 0);
  }
  unselect() {
    this.isSelected && (this.isSelected = !1, i(this, de)?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), this._editToolbar?.hide(), i(this, _t)?.toggleAltTextBadge(!0), this.hideCommentPopup());
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
    return i(this, wc);
  }
  set isEditing(t) {
    u(this, wc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
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
      i(this, _s) || u(this, _s, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let n = i(this, _s).get(s);
      n && clearTimeout(n), n = setTimeout(() => {
        this._reportTelemetry(t), i(this, _s).delete(s), i(this, _s).size === 0 && u(this, _s, null);
      }, K._telemetryTimeout), i(this, _s).set(s, n);
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
    this.div && (this.div.tabIndex = 0), u(this, Mo, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), u(this, Mo, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!i(this, xs) && !this.deleted) {
      u(this, xs, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      i(this, xs).remove(), u(this, xs, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && i(this, xs).updateEdited({
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
Vr = new WeakMap(), Fs = new WeakMap(), _t = new WeakMap(), ct = new WeakMap(), Bi = new WeakMap(), Mo = new WeakMap(), Yn = new WeakMap(), Ac = new WeakMap(), de = new WeakMap(), Wr = new WeakMap(), Ui = new WeakMap(), xs = new WeakMap(), Kn = new WeakMap(), yc = new WeakMap(), Xr = new WeakMap(), Xe = new WeakMap(), wc = new WeakMap(), Yr = new WeakMap(), Hi = new WeakMap(), ci = new WeakMap(), Po = new WeakMap(), Io = new WeakMap(), _s = new WeakMap(), Kr = new WeakMap(), vc = new WeakMap(), xf = new WeakMap(), $ = new WeakSet(), Lp = /* @__PURE__ */ f(function([t, e], s, n) {
  [s, n] = this.screenToPageTranslation(s, n), this.x += s / t, this.y += n / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, "#translate"), Sc = new WeakSet(), Dp = /* @__PURE__ */ f(function(t, e, s) {
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
}, "#rotatePoint"), lu = /* @__PURE__ */ f(function(t) {
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
}, "#getRotationMatrix"), Gy = /* @__PURE__ */ f(function() {
  if (i(this, de))
    return;
  u(this, de, document.createElement("div")), i(this, de).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const n = document.createElement("div");
    i(this, de).append(n), n.classList.add("resizer", s), n.setAttribute("data-resizer-name", s), n.addEventListener("pointerdown", b(this, $, Vy).bind(this, s), {
      signal: e
    }), n.addEventListener("contextmenu", Ds, {
      signal: e
    }), n.tabIndex = -1;
  }
  this.div.prepend(i(this, de));
}, "#createResizers"), Vy = /* @__PURE__ */ f(function(t, e) {
  e.preventDefault();
  const {
    isMac: s
  } = Ht.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  i(this, _t)?.toggle(!1);
  const n = this._isDraggable;
  this._isDraggable = !1, u(this, Wr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, $, Np).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Ft, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Ds, {
    signal: a
  }), u(this, Ui, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, h = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const l = /* @__PURE__ */ f(() => {
    r.abort(), this.parent.togglePointerEvents(!0), i(this, _t)?.toggle(!0), this._isDraggable = n, this.parent.div.style.cursor = o, this.div.style.cursor = h, b(this, $, cu).call(this);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", l, {
    signal: a
  }), window.addEventListener("blur", l, {
    signal: a
  });
}, "#resizerPointerdown"), Rp = /* @__PURE__ */ f(function(t, e, s, n) {
  this.width = s, this.height = n, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, "#resize"), cu = /* @__PURE__ */ f(function() {
  if (!i(this, Ui))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: n
  } = i(this, Ui);
  u(this, Ui, null);
  const r = this.x, a = this.y, o = this.width, h = this.height;
  r === t && a === e && o === s && h === n || this.addCommands({
    cmd: b(this, $, Rp).bind(this, r, a, o, h),
    undo: b(this, $, Rp).bind(this, t, e, s, n),
    mustExec: !0
  });
}, "#addResizeToUndoStack"), Np = /* @__PURE__ */ f(function(t, e) {
  const [s, n] = this.parentDimensions, r = this.x, a = this.y, o = this.width, h = this.height, l = K.MIN_SIZE / s, c = K.MIN_SIZE / n, d = b(this, $, lu).call(this, this.rotation), p = /* @__PURE__ */ f((U, H) => [d[0] * U + d[2] * H, d[1] * U + d[3] * H], "transf"), A = b(this, $, lu).call(this, 360 - this.rotation), w = /* @__PURE__ */ f((U, H) => [A[0] * U + A[2] * H, A[1] * U + A[3] * H], "invTransf");
  let y, S, v = !1, C = !1;
  switch (t) {
    case "topLeft":
      v = !0, y = /* @__PURE__ */ f((U, H) => [0, 0], "getPoint"), S = /* @__PURE__ */ f((U, H) => [U, H], "getOpposite");
      break;
    case "topMiddle":
      y = /* @__PURE__ */ f((U, H) => [U / 2, 0], "getPoint"), S = /* @__PURE__ */ f((U, H) => [U / 2, H], "getOpposite");
      break;
    case "topRight":
      v = !0, y = /* @__PURE__ */ f((U, H) => [U, 0], "getPoint"), S = /* @__PURE__ */ f((U, H) => [0, H], "getOpposite");
      break;
    case "middleRight":
      C = !0, y = /* @__PURE__ */ f((U, H) => [U, H / 2], "getPoint"), S = /* @__PURE__ */ f((U, H) => [0, H / 2], "getOpposite");
      break;
    case "bottomRight":
      v = !0, y = /* @__PURE__ */ f((U, H) => [U, H], "getPoint"), S = /* @__PURE__ */ f((U, H) => [0, 0], "getOpposite");
      break;
    case "bottomMiddle":
      y = /* @__PURE__ */ f((U, H) => [U / 2, H], "getPoint"), S = /* @__PURE__ */ f((U, H) => [U / 2, 0], "getOpposite");
      break;
    case "bottomLeft":
      v = !0, y = /* @__PURE__ */ f((U, H) => [0, H], "getPoint"), S = /* @__PURE__ */ f((U, H) => [U, 0], "getOpposite");
      break;
    case "middleLeft":
      C = !0, y = /* @__PURE__ */ f((U, H) => [0, H / 2], "getPoint"), S = /* @__PURE__ */ f((U, H) => [U, H / 2], "getOpposite");
      break;
  }
  const E = y(o, h), T = S(o, h);
  let x = p(...T);
  const _ = K._round(r + x[0]), k = K._round(a + x[1]);
  let P = 1, I = 1, N, L;
  if (e.fromKeyboard)
    ({
      deltaX: N,
      deltaY: L
    } = e);
  else {
    const {
      screenX: U,
      screenY: H
    } = e, [rt, Ge] = i(this, Wr);
    [N, L] = this.screenToPageTranslation(U - rt, H - Ge), i(this, Wr)[0] = U, i(this, Wr)[1] = H;
  }
  if ([N, L] = w(N / s, L / n), v) {
    const U = Math.hypot(o, h);
    P = I = Math.max(Math.min(Math.hypot(T[0] - E[0] - N, T[1] - E[1] - L) / U, 1 / o, 1 / h), l / o, c / h);
  } else C ? P = he(Math.abs(T[0] - E[0] - N), l, 1) / o : I = he(Math.abs(T[1] - E[1] - L), c, 1) / h;
  const st = K._round(o * P), J = K._round(h * I);
  x = p(...S(st, J));
  const W = _ - x[0], $t = k - x[1];
  i(this, Xe) || u(this, Xe, [this.x, this.y, this.width, this.height]), this.width = st, this.height = J, this.x = W, this.y = $t, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, "#resizerPointermove"), Wy = /* @__PURE__ */ f(function() {
  u(this, Ui, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), i(this, _t)?.toggle(!1), this.parent.togglePointerEvents(!1);
}, "#touchPinchStartCallback"), Xy = /* @__PURE__ */ f(function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, $, lu).call(this, this.rotation), o = /* @__PURE__ */ f((_, k) => [a[0] * _ + a[2] * k, a[1] * _ + a[3] * k], "transf"), [h, l] = this.parentDimensions, c = this.x, d = this.y, p = this.width, A = this.height, w = K.MIN_SIZE / h, y = K.MIN_SIZE / l;
  r = Math.max(Math.min(r, 1 / p, 1 / A), w / p, y / A);
  const S = K._round(p * r), v = K._round(A * r);
  if (S === p && v === A)
    return;
  i(this, Xe) || u(this, Xe, [c, d, p, A]);
  const C = o(p / 2, A / 2), E = K._round(c + C[0]), T = K._round(d + C[1]), x = o(S / 2, v / 2);
  this.x = E - x[0], this.y = T - x[1], this.width = S, this.height = v, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, "#touchPinchCallback"), Yy = /* @__PURE__ */ f(function() {
  i(this, _t)?.toggle(!0), this.parent.togglePointerEvents(!0), b(this, $, cu).call(this);
}, "#touchPinchEndCallback"), Op = /* @__PURE__ */ f(function(t) {
  const {
    isMac: e
  } = Ht.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, "#selectOnPointerEvent"), Ky = /* @__PURE__ */ f(function(t) {
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
    n.abort(), u(this, Yn, null), u(this, Xr, !1), this._uiManager.endDragSession() || b(this, $, Op).call(this, l), s && this._onStopDragging();
  }, "cancelDrag");
  e && (u(this, Po, t.clientX), u(this, Io, t.clientY), u(this, Yn, t.pointerId), u(this, Ac, t.pointerType), window.addEventListener("pointermove", (l) => {
    s || (s = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: c,
      clientY: d,
      pointerId: p
    } = l;
    if (p !== i(this, Yn)) {
      Ft(l);
      return;
    }
    const [A, w] = this.screenToPageTranslation(c - i(this, Po), d - i(this, Io));
    u(this, Po, c), u(this, Io, d), this._uiManager.dragSelectedEditors(A, w);
  }, a), window.addEventListener("touchmove", Ft, a), window.addEventListener("pointerdown", (l) => {
    l.pointerType === i(this, Ac) && (i(this, Kr) || l.isPrimary) && o(l), Ft(l);
  }, a));
  const h = /* @__PURE__ */ f((l) => {
    if (!i(this, Yn) || i(this, Yn) === l.pointerId) {
      o(l);
      return;
    }
    Ft(l);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", h, {
    signal: r
  }), window.addEventListener("blur", h, {
    signal: r
  });
}, "#setUpDragSession"), Fp = /* @__PURE__ */ f(function() {
  if (i(this, Kn) || !this.div)
    return;
  u(this, Kn, new AbortController());
  const t = this._uiManager.combinedSignal(i(this, Kn));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, "#addFocusListeners"), qy = /* @__PURE__ */ f(function(t) {
  K._resizerKeyboardManager.exec(this, t);
}, "#resizerKeydown"), Qy = /* @__PURE__ */ f(function(t) {
  i(this, Hi) && t.relatedTarget?.parentNode !== i(this, de) && b(this, $, il).call(this);
}, "#resizerBlur"), Jy = /* @__PURE__ */ f(function(t) {
  u(this, yc, i(this, Hi) ? t : "");
}, "#resizerFocus"), Bp = /* @__PURE__ */ f(function(t) {
  if (i(this, Fs))
    for (const e of i(this, Fs))
      e.tabIndex = t;
}, "#setResizerTabIndex"), il = /* @__PURE__ */ f(function() {
  u(this, Hi, !1), b(this, $, Bp).call(this, -1), b(this, $, cu).call(this);
}, "#stopResizing"), m(K, Sc), f(K, "AnnotationEditor"), M(K, "_l10n", null), M(K, "_l10nResizer", null), M(K, "_borderLineWidth", -1), M(K, "_colorManager", new xp()), M(K, "_zIndex", 1), M(K, "_telemetryTimeout", 1e3);
let St = K;
const db = class db extends St {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
};
f(db, "FakeEditor");
let Up = db;
const JA = 3285377520, ps = 4294901760, Qs = 65535, ub = class ub {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : JA, this.h2 = t ? t & 4294967295 : JA;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let y = 0, S = t.length; y < S; y++) {
        const v = t.charCodeAt(y);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const n = s >> 2, r = s - n * 4, a = new Uint32Array(e.buffer, 0, n);
    let o = 0, h = 0, l = this.h1, c = this.h2;
    const d = 3432918353, p = 461845907, A = d & Qs, w = p & Qs;
    for (let y = 0; y < n; y++)
      y & 1 ? (o = a[y], o = o * d & ps | o * A & Qs, o = o << 15 | o >>> 17, o = o * p & ps | o * w & Qs, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (h = a[y], h = h * d & ps | h * A & Qs, h = h << 15 | h >>> 17, h = h * p & ps | h * w & Qs, c ^= h, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[n * 4 + 2] << 16;
      case 2:
        o ^= e[n * 4 + 1] << 8;
      case 1:
        o ^= e[n * 4], o = o * d & ps | o * A & Qs, o = o << 15 | o >>> 17, o = o * p & ps | o * w & Qs, n & 1 ? l ^= o : c ^= o;
    }
    this.h1 = l, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ps | t * 36045 & Qs, e = e * 4283543511 & ps | ((e << 16 | t >>> 16) * 2950163797 & ps) >>> 16, t ^= e >>> 1, t = t * 444984403 & ps | t * 60499 & Qs, e = e * 3301882366 & ps | ((e << 16 | t >>> 16) * 3120437893 & ps) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
};
f(ub, "MurmurHash3_64");
let Gu = ub;
const Nl = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var qr, Qr, $i, ue, _f, Zy;
const fb = class fb {
  constructor() {
    m(this, _f);
    m(this, qr, !1);
    m(this, Qr, null);
    m(this, $i, null);
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
    if (e !== void 0 && (e instanceof St && i(this, $i).delete(e.annotationElementId), i(this, ue).delete(t), i(this, ue).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
      for (const s of i(this, ue).values())
        if (s instanceof St)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = i(this, ue).get(t);
    let n = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (n = !0, s[r] = a);
    else
      n = !0, i(this, ue).set(t, e);
    n && b(this, _f, Zy).call(this), e instanceof St && ((i(this, $i) || u(this, $i, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return i(this, ue).has(t);
  }
  get size() {
    return i(this, ue).size;
  }
  resetModified() {
    i(this, qr) && (u(this, qr, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Vu(this);
  }
  get serializable() {
    if (i(this, ue).size === 0)
      return Nl;
    const t = /* @__PURE__ */ new Map(), e = new Gu(), s = [], n = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of i(this, ue)) {
      const h = o instanceof St ? o.serialize(!1, n) : o;
      o.page && (o.pageIndex = o.page._pageIndex, delete o.page), h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), r ||= !!h.bitmap);
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : Nl;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let s = 0, n = 0;
    for (const r of i(this, ue).values()) {
      if (!(r instanceof St)) {
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
        const d = h.getOrInsertComputed(l, Gm);
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
    u(this, Qr, null);
  }
  updateEditor(t, e) {
    const s = i(this, $i)?.get(t);
    return s ? (s.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    return i(this, $i)?.get(t) || null;
  }
  get modifiedIds() {
    if (i(this, Qr))
      return i(this, Qr);
    const t = [];
    if (i(this, $i))
      for (const e of i(this, $i).values())
        e.serialize() && t.push(e.annotationElementId);
    return u(this, Qr, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return i(this, ue).entries();
  }
};
qr = new WeakMap(), Qr = new WeakMap(), $i = new WeakMap(), ue = new WeakMap(), _f = new WeakSet(), Zy = /* @__PURE__ */ f(function() {
  i(this, qr) || (u(this, qr, !0), typeof this.onSetModified == "function" && this.onSetModified());
}, "#setModified"), f(fb, "AnnotationStorage");
let Ol = fb;
var Ec;
const pb = class pb extends Ol {
  constructor(e) {
    super();
    m(this, Ec, Nl);
    const {
      serializable: s
    } = e;
    if (s === Nl)
      return;
    const {
      map: n,
      hash: r,
      transfer: a
    } = s, o = structuredClone(n, a ? {
      transfer: a
    } : null);
    u(this, Ec, {
      map: o,
      hash: r,
      transfer: []
    });
  }
  get print() {
    nt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return i(this, Ec);
  }
  get modifiedIds() {
    return z(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
};
Ec = new WeakMap(), f(pb, "PrintAnnotationStorage");
let Vu = pb;
var Lo;
const gb = class gb {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Lo, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), i(this, Lo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || i(this, Lo).has(t.loadedName))) {
      if (it(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: r,
          style: a
        } = t, o = new FontFace(n, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), i(this, Lo).add(n), s?.(t);
        } catch {
          V(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      nt("Not implemented: loadSystemFont without the Font Loading API.");
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
          throw V(`Failed to load font '${s.family}': '${n}'.`), t.disableFontFace = !0, n;
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
    return z(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return z(this, "isSyncFontLoadingSupported", Ht.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (it(!n.done, "completeRequest() cannot be called twice."), n.done = !0; s.length > 0 && s[0].done; ) {
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
    return z(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(T, x) {
      return T.charCodeAt(x) << 24 | T.charCodeAt(x + 1) << 16 | T.charCodeAt(x + 2) << 8 | T.charCodeAt(x + 3) & 255;
    }
    f(s, "int32");
    function n(T, x, _, k) {
      const P = T.substring(0, x), I = T.substring(x + _);
      return P + k + I;
    }
    f(n, "spliceString");
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const h = o.getContext("2d");
    let l = 0;
    function c(T, x) {
      if (++l > 30) {
        V("Load test font never loaded."), x();
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
    const w = 16, y = 1482184792;
    let S = s(p, w);
    for (r = 0, a = d.length - 3; r < a; r += 4)
      S = S - y + s(d, r) | 0;
    r < d.length && (S = S - y + s(d + "XXX", r) | 0), p = n(p, w, 4, k0(S));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, C = `@font-face {font-family:"${d}";src:${v}}`;
    this.insertRule(C);
    const E = this._document.createElement("div");
    E.style.visibility = "hidden", E.style.width = E.style.height = "10px", E.style.position = "absolute", E.style.top = E.style.left = "0px";
    for (const T of [t.loadedName, d]) {
      const x = this._document.createElement("span");
      x.textContent = "Hi", x.style.fontFamily = T, E.append(x);
    }
    this._document.body.append(E), c(d, () => {
      E.remove(), e.complete();
    });
  }
};
Lo = new WeakMap(), f(gb, "FontLoader");
let Hp = gb;
var ft;
const mb = class mb {
  constructor(t, e = null, s, n) {
    m(this, ft);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), u(this, ft, t), this._inspectFont = e, s && Object.assign(this, s), n && (this.charProcOperatorList = n);
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
      V(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = wy(n?.path);
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
  get black() {
    return i(this, ft).black;
  }
  get bold() {
    return i(this, ft).bold;
  }
  get disableFontFace() {
    return i(this, ft).disableFontFace ?? !1;
  }
  set disableFontFace(t) {
    z(this, "disableFontFace", !!t);
  }
  get fontExtraProperties() {
    return i(this, ft).fontExtraProperties ?? !1;
  }
  get isInvalidPDFjsFont() {
    return i(this, ft).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return i(this, ft).isType3Font;
  }
  get italic() {
    return i(this, ft).italic;
  }
  get missingFile() {
    return i(this, ft).missingFile;
  }
  get remeasure() {
    return i(this, ft).remeasure;
  }
  get vertical() {
    return i(this, ft).vertical;
  }
  get ascent() {
    return i(this, ft).ascent;
  }
  get defaultWidth() {
    return i(this, ft).defaultWidth;
  }
  get descent() {
    return i(this, ft).descent;
  }
  get bbox() {
    return i(this, ft).bbox;
  }
  set bbox(t) {
    z(this, "bbox", t);
  }
  get fontMatrix() {
    return i(this, ft).fontMatrix;
  }
  get fallbackName() {
    return i(this, ft).fallbackName;
  }
  get loadedName() {
    return i(this, ft).loadedName;
  }
  get mimetype() {
    return i(this, ft).mimetype;
  }
  get name() {
    return i(this, ft).name;
  }
  get data() {
    return i(this, ft).data;
  }
  clearData() {
    i(this, ft).clearData();
  }
  get cssFontInfo() {
    return i(this, ft).cssFontInfo;
  }
  get systemFontInfo() {
    return i(this, ft).systemFontInfo;
  }
  get defaultVMetrics() {
    return i(this, ft).defaultVMetrics;
  }
};
ft = new WeakMap(), f(mb, "FontFaceObject");
let $p = mb;
var Do, Ro, Cc, No, du;
const kr = class kr {
  constructor(t) {
    m(this, No);
    m(this, Do);
    m(this, Ro);
    m(this, Cc);
    u(this, Do, t), u(this, Ro, new DataView(i(this, Do))), u(this, Cc, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let n = 0;
    for (const l of kr.strings) {
      const c = e.encode(t[l]);
      s[l] = c, n += 4 + c.length;
    }
    const r = new ArrayBuffer(n), a = new Uint8Array(r), o = new DataView(r);
    let h = 0;
    for (const l of kr.strings) {
      const c = s[l], d = c.length;
      o.setUint32(h, d), a.set(c, h + 4), h += 4 + d;
    }
    return it(h === r.byteLength, "CssFontInfo.write: Buffer overflow"), r;
  }
  get fontFamily() {
    return b(this, No, du).call(this, 0);
  }
  get fontWeight() {
    return b(this, No, du).call(this, 1);
  }
  get italicAngle() {
    return b(this, No, du).call(this, 2);
  }
};
Do = new WeakMap(), Ro = new WeakMap(), Cc = new WeakMap(), No = new WeakSet(), du = /* @__PURE__ */ f(function(t) {
  it(t < kr.strings.length, "Invalid string index");
  let e = 0;
  for (let n = 0; n < t; n++)
    e += i(this, Ro).getUint32(e) + 4;
  const s = i(this, Ro).getUint32(e);
  return i(this, Cc).decode(new Uint8Array(i(this, Do), e + 4, s));
}, "#readString"), f(kr, "CssFontInfo"), M(kr, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let Wu = kr;
var qn, di, Jr, Zr, nl;
const Mr = class Mr {
  constructor(t) {
    m(this, Zr);
    m(this, qn);
    m(this, di);
    m(this, Jr);
    u(this, qn, t), u(this, di, new DataView(i(this, qn))), u(this, Jr, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), s = {};
    let n = 0;
    for (const p of Mr.strings) {
      const A = e.encode(t[p]);
      s[p] = A, n += 4 + A.length;
    }
    n += 4;
    let r, a, o = 1 + n;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const h = new ArrayBuffer(o), l = new Uint8Array(h), c = new DataView(h);
    let d = 0;
    c.setUint8(d++, t.guessFallback ? 1 : 0), c.setUint32(d, 0), d += 4, n = 0;
    for (const p of Mr.strings) {
      const A = s[p], w = A.length;
      n += 4 + w, c.setUint32(d, w), l.set(A, d + 4), d += 4 + w;
    }
    return c.setUint32(d - n - 4, n), t.style && (c.setUint32(d, r.length), l.set(r, d + 4), d += 4 + r.length, c.setUint32(d, a.length), l.set(a, d + 4), d += 4 + a.length), it(d <= h.byteLength, "SubstitionInfo.write: Buffer overflow"), h.transferToFixedLength(d);
  }
  get guessFallback() {
    return i(this, di).getUint8(0) !== 0;
  }
  get css() {
    return b(this, Zr, nl).call(this, 0);
  }
  get loadedName() {
    return b(this, Zr, nl).call(this, 1);
  }
  get baseFontName() {
    return b(this, Zr, nl).call(this, 2);
  }
  get src() {
    return b(this, Zr, nl).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + i(this, di).getUint32(t);
    const e = i(this, di).getUint32(t), s = i(this, Jr).decode(new Uint8Array(i(this, qn), t + 4, e));
    t += 4 + e;
    const n = i(this, di).getUint32(t), r = i(this, Jr).decode(new Uint8Array(i(this, qn), t + 4, n));
    return {
      style: s,
      weight: r
    };
  }
};
qn = new WeakMap(), di = new WeakMap(), Jr = new WeakMap(), Zr = new WeakSet(), nl = /* @__PURE__ */ f(function(t) {
  it(t < Mr.strings.length, "Invalid string index");
  let e = 5;
  for (let n = 0; n < t; n++)
    e += i(this, di).getUint32(e) + 4;
  const s = i(this, di).getUint32(e);
  return i(this, Jr).decode(new Uint8Array(i(this, qn), e + 4, s));
}, "#readString"), f(Mr, "SystemFontInfo"), M(Mr, "strings", ["css", "loadedName", "baseFontName", "src"]);
let Xu = Mr;
var Oo, Fo, Bo, Uo, Ye, ui, Tc, pt, Ot, Ns, uu, rl;
const j = class j {
  constructor({
    data: t,
    extra: e
  }) {
    m(this, Ot);
    m(this, ui);
    m(this, Tc);
    m(this, pt);
    u(this, ui, t), u(this, Tc, new TextDecoder()), u(this, pt, new DataView(i(this, ui))), e && Object.assign(this, e);
  }
  get black() {
    return b(this, Ot, Ns).call(this, 0);
  }
  get bold() {
    return b(this, Ot, Ns).call(this, 1);
  }
  get disableFontFace() {
    return b(this, Ot, Ns).call(this, 2);
  }
  get fontExtraProperties() {
    return b(this, Ot, Ns).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return b(this, Ot, Ns).call(this, 4);
  }
  get isType3Font() {
    return b(this, Ot, Ns).call(this, 5);
  }
  get italic() {
    return b(this, Ot, Ns).call(this, 6);
  }
  get missingFile() {
    return b(this, Ot, Ns).call(this, 7);
  }
  get remeasure() {
    return b(this, Ot, Ns).call(this, 8);
  }
  get vertical() {
    return b(this, Ot, Ns).call(this, 9);
  }
  get ascent() {
    return b(this, Ot, uu).call(this, 0);
  }
  get defaultWidth() {
    return b(this, Ot, uu).call(this, 1);
  }
  get descent() {
    return b(this, Ot, uu).call(this, 2);
  }
  get bbox() {
    let t = i(j, Fo);
    if (i(this, pt).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let n = 0; n < 4; n++)
      s.push(i(this, pt).getInt16(t, !0)), t += 2;
    return s;
  }
  get fontMatrix() {
    let t = i(j, Bo);
    if (i(this, pt).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let n = 0; n < 6; n++)
      s.push(i(this, pt).getFloat64(t, !0)), t += 8;
    return s;
  }
  get defaultVMetrics() {
    let t = i(j, Uo);
    if (i(this, pt).getUint8(t) === 0)
      return;
    t += 1;
    const s = [];
    for (let n = 0; n < 3; n++)
      s.push(i(this, pt).getInt16(t, !0)), t += 2;
    return s;
  }
  get fallbackName() {
    return b(this, Ot, rl).call(this, 0);
  }
  get loadedName() {
    return b(this, Ot, rl).call(this, 1);
  }
  get mimetype() {
    return b(this, Ot, rl).call(this, 2);
  }
  get name() {
    return b(this, Ot, rl).call(this, 3);
  }
  get data() {
    let t = i(j, Ye);
    const e = i(this, pt).getUint32(t);
    t += 4 + e;
    const s = i(this, pt).getUint32(t);
    t += 4 + s;
    const n = i(this, pt).getUint32(t);
    t += 4 + n;
    const r = i(this, pt).getUint32(t);
    if (r !== 0)
      return new Uint8Array(i(this, ui), t + 4, r);
  }
  clearData() {
    let t = i(j, Ye);
    const e = i(this, pt).getUint32(t);
    t += 4 + e;
    const s = i(this, pt).getUint32(t);
    t += 4 + s;
    const n = i(this, pt).getUint32(t);
    t += 4 + n;
    const r = i(this, pt).getUint32(t);
    new Uint8Array(i(this, ui), t + 4, r).fill(0), i(this, pt).setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = i(j, Ye);
    const e = i(this, pt).getUint32(t);
    t += 4 + e;
    const s = i(this, pt).getUint32(t);
    t += 4 + s;
    const n = i(this, pt).getUint32(t);
    if (n === 0)
      return null;
    const r = new Uint8Array(n);
    return r.set(new Uint8Array(i(this, ui), t + 4, n)), new Wu(r.buffer);
  }
  get systemFontInfo() {
    let t = i(j, Ye);
    const e = i(this, pt).getUint32(t);
    t += 4 + e;
    const s = i(this, pt).getUint32(t);
    if (s === 0)
      return null;
    const n = new Uint8Array(s);
    return n.set(new Uint8Array(i(this, ui), t + 4, s)), new Xu(n.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? Xu.write(t.systemFontInfo) : null, s = t.cssFontInfo ? Wu.write(t.cssFontInfo) : null, n = new TextEncoder(), r = {};
    let a = 0;
    for (const y of j.strings)
      r[y] = n.encode(t[y]), a += 4 + r[y].length;
    const o = i(j, Ye) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (s ? s.byteLength : 0) + 4 + (t.data ? t.data.length : 0), h = new ArrayBuffer(o), l = new Uint8Array(h), c = new DataView(h);
    let d = 0;
    const p = j.bools.length;
    let A = 0, w = 0;
    for (let y = 0; y < p; y++) {
      const S = t[j.bools[y]];
      A |= (S === void 0 ? 0 : S ? 2 : 1) << w, w += 2, (w === 8 || y === p - 1) && (c.setUint8(d++, A), A = 0, w = 0);
    }
    it(d === i(j, Oo), "FontInfo.write: Boolean properties offset mismatch");
    for (const y of j.numbers)
      c.setFloat64(d, t[y]), d += 8;
    if (it(d === i(j, Fo), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
      c.setUint8(d++, 4);
      for (const y of t.bbox)
        c.setInt16(d, y, !0), d += 2;
    } else
      c.setUint8(d++, 0), d += 8;
    if (it(d === i(j, Bo), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
      c.setUint8(d++, 6);
      for (const y of t.fontMatrix)
        c.setFloat64(d, y, !0), d += 8;
    } else
      c.setUint8(d++, 0), d += 48;
    if (it(d === i(j, Uo), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
      c.setUint8(d++, 1);
      for (const y of t.defaultVMetrics)
        c.setInt16(d, y, !0), d += 2;
    } else
      c.setUint8(d++, 0), d += 6;
    it(d === i(j, Ye), "FontInfo.write: DefaultVMetrics properties offset mismatch"), c.setUint32(i(j, Ye), 0), d += 4;
    for (const y of j.strings) {
      const S = r[y], v = S.length;
      c.setUint32(d, v), l.set(S, d + 4), d += 4 + v;
    }
    if (c.setUint32(i(j, Ye), d - i(j, Ye) - 4), !e)
      c.setUint32(d, 0), d += 4;
    else {
      const y = e.byteLength;
      c.setUint32(d, y), it(d + 4 + y <= h.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), l.set(new Uint8Array(e), d + 4), d += 4 + y;
    }
    if (!s)
      c.setUint32(d, 0), d += 4;
    else {
      const y = s.byteLength;
      c.setUint32(d, y), it(d + 4 + y <= h.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), l.set(new Uint8Array(s), d + 4), d += 4 + y;
    }
    return t.data === void 0 ? (c.setUint32(d, 0), d += 4) : (c.setUint32(d, t.data.length), l.set(t.data, d + 4), d += 4 + t.data.length), it(d <= h.byteLength, "FontInfo.write: Buffer overflow"), h.transferToFixedLength(d);
  }
};
Oo = new WeakMap(), Fo = new WeakMap(), Bo = new WeakMap(), Uo = new WeakMap(), Ye = new WeakMap(), ui = new WeakMap(), Tc = new WeakMap(), pt = new WeakMap(), Ot = new WeakSet(), Ns = /* @__PURE__ */ f(function(t) {
  it(t < j.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), s = t * 2 % 8, n = i(this, pt).getUint8(e) >> s & 3;
  return n === 0 ? void 0 : n === 2;
}, "#readBoolean"), uu = /* @__PURE__ */ f(function(t) {
  return it(t < j.numbers.length, "Invalid number index"), i(this, pt).getFloat64(i(j, Oo) + t * 8);
}, "#readNumber"), rl = /* @__PURE__ */ f(function(t) {
  it(t < j.strings.length, "Invalid string index");
  let e = i(j, Ye) + 4;
  for (let r = 0; r < t; r++)
    e += i(this, pt).getUint32(e) + 4;
  const s = i(this, pt).getUint32(e), n = new Uint8Array(s);
  return n.set(new Uint8Array(i(this, ui), e + 4, s)), i(this, Tc).decode(n);
}, "#readString"), f(j, "FontInfo"), M(j, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), M(j, "numbers", ["ascent", "defaultWidth", "descent"]), M(j, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), m(j, Oo, Math.ceil(j.bools.length * 2 / 8)), m(j, Fo, i(j, Oo) + j.numbers.length * 8), m(j, Bo, i(j, Fo) + 1 + 8), m(j, Uo, i(j, Bo) + 1 + 48), m(j, Ye, i(j, Uo) + 1 + 6);
let zp = j;
var xc, _c, kc, Mc, Pc, Ic, Lc, Dc;
const At = class At {
  constructor(t) {
    this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
  }
  static write(t) {
    let e, s = null, n = [], r = [], a = [], o = [], h = null, l = null;
    switch (t[0]) {
      case "RadialAxial":
        e = t[1] === "axial" ? 1 : 2, s = t[2], a = t[3], e === 1 ? n.push(...t[4], ...t[5]) : n.push(t[4][0], t[4][1], t[6], t[5][0], t[5][1], t[7]);
        break;
      case "Mesh":
        e = 3, h = t[1], n = t[2], r = t[3], o = t[4] || [], s = t[6], l = t[7];
        break;
      default:
        throw new Error(`Unsupported pattern type: ${t[0]}`);
    }
    const c = Math.floor(n.length / 2), d = Math.floor(r.length / 3), p = a.length, A = o.length;
    let w = 0;
    for (const x of o)
      w += 1, w = Math.ceil(w / 4) * 4, w += 4 + x.coords.length * 4, w += 4 + x.colors.length * 4, x.verticesPerRow !== void 0 && (w += 4);
    const y = 20 + c * 8 + d * 3 + p * 8 + (s ? 16 : 0) + (l ? 3 : 0) + w, S = new ArrayBuffer(y), v = new DataView(S), C = new Uint8Array(S);
    v.setUint8(i(At, xc), e), v.setUint8(i(At, _c), s ? 1 : 0), v.setUint8(i(At, kc), l ? 1 : 0), v.setUint8(i(At, Mc), h), v.setUint32(i(At, Pc), c, !0), v.setUint32(i(At, Ic), d, !0), v.setUint32(i(At, Lc), p, !0), v.setUint32(i(At, Dc), A, !0);
    let E = 20;
    new Float32Array(S, E, c * 2).set(n), E += c * 8, C.set(r, E), E += d * 3;
    for (const [x, _] of a)
      v.setFloat32(E, x, !0), E += 4, v.setUint32(E, parseInt(_.slice(1), 16), !0), E += 4;
    if (s)
      for (const x of s)
        v.setFloat32(E, x, !0), E += 4;
    l && (C.set(l, E), E += 3);
    for (let x = 0; x < o.length; x++) {
      const _ = o[x];
      v.setUint8(E, _.type), E += 1, E = Math.ceil(E / 4) * 4, v.setUint32(E, _.coords.length, !0), E += 4, new Int32Array(S, E, _.coords.length).set(_.coords), E += _.coords.length * 4, v.setUint32(E, _.colors.length, !0), E += 4, new Int32Array(S, E, _.colors.length).set(_.colors), E += _.colors.length * 4, _.verticesPerRow !== void 0 && (v.setUint32(E, _.verticesPerRow, !0), E += 4);
    }
    return S;
  }
  getIR() {
    const t = this.view, e = this.data[i(At, xc)], s = !!this.data[i(At, _c)], n = !!this.data[i(At, kc)], r = t.getUint32(i(At, Pc), !0), a = t.getUint32(i(At, Ic), !0), o = t.getUint32(i(At, Lc), !0), h = t.getUint32(i(At, Dc), !0);
    let l = 20;
    const c = new Float32Array(this.buffer, l, r * 2);
    l += r * 8;
    const d = new Uint8Array(this.buffer, l, a * 3);
    l += a * 3;
    const p = [];
    for (let S = 0; S < o; ++S) {
      const v = t.getFloat32(l, !0);
      l += 4;
      const C = t.getUint32(l, !0);
      l += 4, p.push([v, `#${C.toString(16).padStart(6, "0")}`]);
    }
    let A = null;
    if (s) {
      A = [];
      for (let S = 0; S < 4; ++S)
        A.push(t.getFloat32(l, !0)), l += 4;
    }
    let w = null;
    n && (w = new Uint8Array(this.buffer, l, 3), l += 3);
    const y = [];
    for (let S = 0; S < h; ++S) {
      const v = t.getUint8(l);
      l += 1, l = Math.ceil(l / 4) * 4;
      const C = t.getUint32(l, !0);
      l += 4;
      const E = new Int32Array(this.buffer, l, C);
      l += C * 4;
      const T = t.getUint32(l, !0);
      l += 4;
      const x = new Int32Array(this.buffer, l, T);
      l += T * 4;
      const _ = {
        type: v,
        coords: E,
        colors: x
      };
      v === lp.LATTICE && (_.verticesPerRow = t.getUint32(l, !0), l += 4), y.push(_);
    }
    if (e === 1)
      return ["RadialAxial", "axial", A, p, Array.from(c.slice(0, 2)), Array.from(c.slice(2, 4)), null, null];
    if (e === 2)
      return ["RadialAxial", "radial", A, p, [c[0], c[1]], [c[3], c[4]], c[2], c[5]];
    if (e === 3) {
      const S = this.data[i(At, Mc)];
      let v = null;
      if (c.length > 0) {
        let C = c[0], E = c[0], T = c[1], x = c[1];
        for (let _ = 0; _ < c.length; _ += 2) {
          const k = c[_], P = c[_ + 1];
          C = C > k ? k : C, T = T > P ? P : T, E = E < k ? k : E, x = x < P ? P : x;
        }
        v = [C, T, E, x];
      }
      return ["Mesh", S, c, d, y, v, A, w];
    }
    throw new Error(`Unsupported pattern kind: ${e}`);
  }
};
xc = new WeakMap(), _c = new WeakMap(), kc = new WeakMap(), Mc = new WeakMap(), Pc = new WeakMap(), Ic = new WeakMap(), Lc = new WeakMap(), Dc = new WeakMap(), f(At, "PatternInfo"), m(At, xc, 0), m(At, _c, 1), m(At, kc, 2), m(At, Mc, 3), m(At, Pc, 4), m(At, Ic, 8), m(At, Lc, 12), m(At, Dc, 16);
let jp = At;
var Ho;
const bb = class bb {
  constructor(t) {
    m(this, Ho);
    u(this, Ho, t);
  }
  static write(t) {
    let e, s;
    return Ht.isFloat16ArraySupported ? (s = new ArrayBuffer(t.length * 2), e = new Float16Array(s)) : (s = new ArrayBuffer(t.length * 4), e = new Float32Array(s)), e.set(t), s;
  }
  get path() {
    return Ht.isFloat16ArraySupported ? new Float16Array(i(this, Ho)) : new Float32Array(i(this, Ho));
  }
};
Ho = new WeakMap(), f(bb, "FontPathInfo");
let Gp = bb;
function H0(g) {
  if (g instanceof URL)
    return g;
  if (typeof g == "string") {
    const t = URL.parse(g, window.location);
    if (t)
      return t;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
f(H0, "getUrlProp");
function $0(g) {
  if (g instanceof Uint8Array && g.byteLength === g.buffer.byteLength)
    return g;
  if (typeof g == "string")
    return Kf(g);
  if (g instanceof ArrayBuffer || ArrayBuffer.isView(g) || typeof g == "object" && !isNaN(g?.length))
    return new Uint8Array(g);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
f($0, "getDataProp");
function Yd(g) {
  if (typeof g != "string")
    return null;
  if (g.endsWith("/"))
    return g;
  throw new Error(`Invalid factory url: "${g}" must include trailing slash.`);
}
f(Yd, "getFactoryUrlProp");
const Vp = /* @__PURE__ */ f((g) => typeof g == "object" && Number.isInteger(g?.num) && g.num >= 0 && Number.isInteger(g?.gen) && g.gen >= 0, "isRefProxy"), z0 = /* @__PURE__ */ f((g) => typeof g == "object" && typeof g?.name == "string", "isNameProxy"), j0 = D0.bind(null, Vp, z0);
var zi, kf;
const Ab = class Ab {
  constructor() {
    m(this, zi, /* @__PURE__ */ new Map());
    m(this, kf, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    i(this, kf).then(() => {
      for (const [n] of i(this, zi))
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
        V("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = /* @__PURE__ */ f(() => this.removeEventListener(t, e), "onAbort");
      n = /* @__PURE__ */ f(() => r.removeEventListener("abort", a), "rmAbort"), r.addEventListener("abort", a);
    }
    i(this, zi).set(e, n);
  }
  removeEventListener(t, e) {
    i(this, zi).get(e)?.(), i(this, zi).delete(e);
  }
  terminate() {
    for (const [, t] of i(this, zi))
      t?.();
    i(this, zi).clear();
  }
};
zi = new WeakMap(), kf = new WeakMap(), f(Ab, "LoopbackPort");
let Wp = Ab;
const Kd = {
  DATA: 1,
  ERROR: 2
}, Gt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function ZA() {
}
f(ZA, "onFn");
function Le(g) {
  if (g instanceof gn || g instanceof Pl || g instanceof Uu || g instanceof Hh || g instanceof wl)
    return g;
  switch (g instanceof Error || typeof g == "object" && g !== null || nt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), g.name) {
    case "AbortException":
      return new gn(g.message);
    case "InvalidPDFException":
      return new Pl(g.message);
    case "PasswordException":
      return new Uu(g.message, g.code);
    case "ResponseException":
      return new Hh(g.message, g.status, g.missing);
    case "UnknownErrorException":
      return new wl(g.message, g.details);
  }
  return new wl(g.message, g.toString());
}
f(Le, "wrapReason");
var $o, Ls, tw, ew, sw, fu;
const yb = class yb {
  constructor(t, e, s) {
    m(this, Ls);
    m(this, $o, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, Ls, tw).bind(this), {
      signal: i(this, $o).signal
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
          stream: Gt.PULL,
          streamId: r,
          desiredSize: l.desiredSize
        }), c.promise;
      }, "pull"),
      cancel: /* @__PURE__ */ f((l) => {
        it(l instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: Gt.CANCEL,
          streamId: r,
          reason: Le(l)
        }), c.promise;
      }, "cancel")
    }, s);
  }
  destroy() {
    i(this, $o)?.abort(), u(this, $o, null);
  }
};
$o = new WeakMap(), Ls = new WeakSet(), tw = /* @__PURE__ */ f(function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, Ls, sw).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, n = this.callbackCapabilities[s];
    if (!n)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Kd.DATA)
      n.resolve(t.data);
    else if (t.callback === Kd.ERROR)
      n.reject(Le(t.reason));
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
        callback: Kd.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: n,
        callback: Kd.ERROR,
        callbackId: t.callbackId,
        reason: Le(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, Ls, ew).call(this, t);
    return;
  }
  e(t.data);
}, "#onMessage"), ew = /* @__PURE__ */ f(function(t) {
  const e = t.streamId, s = this.sourceName, n = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], h = {
    enqueue(l, c = 1, d) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: n,
        stream: Gt.ENQUEUE,
        streamId: e,
        chunk: l
      }, d);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: n,
        stream: Gt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(l) {
      it(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: n,
        stream: Gt.ERROR,
        streamId: e,
        reason: Le(l)
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
      stream: Gt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(l) {
    r.postMessage({
      sourceName: s,
      targetName: n,
      stream: Gt.START_COMPLETE,
      streamId: e,
      reason: Le(l)
    });
  });
}, "#createStreamSink"), sw = /* @__PURE__ */ f(function(t) {
  const e = t.streamId, s = this.sourceName, n = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Gt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Le(t.reason));
      break;
    case Gt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Le(t.reason));
      break;
    case Gt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: Gt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || ZA).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: Gt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: Gt.PULL_COMPLETE,
          streamId: e,
          reason: Le(l)
        });
      });
      break;
    case Gt.ENQUEUE:
      if (it(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Gt.CLOSE:
      if (it(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, Ls, fu).call(this, a, e);
      break;
    case Gt.ERROR:
      it(a, "error should have stream controller"), a.controller.error(Le(t.reason)), b(this, Ls, fu).call(this, a, e);
      break;
    case Gt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Le(t.reason)), b(this, Ls, fu).call(this, a, e);
      break;
    case Gt.CANCEL:
      if (!o)
        break;
      const h = Le(t.reason);
      Promise.try(o.onCancel || ZA, h).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: Gt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: n,
          stream: Gt.CANCEL_COMPLETE,
          streamId: e,
          reason: Le(l)
        });
      }), o.sinkCapability.reject(h), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, "#processStreamMessage"), fu = /* @__PURE__ */ f(async function(t, e) {
  await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[e];
}, "#deleteStreamController"), f(yb, "MessageHandler");
let Ir = yb;
var Rc;
const wb = class wb {
  constructor({
    enableHWA: t = !1
  }) {
    m(this, Rc, !1);
    u(this, Rc, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !i(this, Rc)
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    nt("Abstract method `_createCanvas` called.");
  }
};
Rc = new WeakMap(), f(wb, "BaseCanvasFactory");
let Xp = wb;
const vb = class vb extends Xp {
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
f(vb, "DOMCanvasFactory");
let Yp = vb;
const Sb = class Sb {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((s) => ({
      cMapData: s,
      isCompressed: this.isCompressed
    })).catch((s) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    nt("Abstract method `_fetch` called.");
  }
};
f(Sb, "BaseCMapReaderFactory");
let Kp = Sb;
const Eb = class Eb extends Kp {
  async _fetch(t) {
    const e = await Wd(t, this.isCompressed ? "bytes" : "text");
    return e instanceof Uint8Array ? e : Kf(e);
  }
};
f(Eb, "DOMCMapReaderFactory");
let Yu = Eb;
const Cb = class Cb {
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
f(Cb, "BaseFilterFactory");
let qp = Cb;
var ta, zo, ji, Gi, Se, ea, sa, F, Ae, al, Ja, pu, Za, iw, Jp, to, ol, hl, Zp, ll;
const Tb = class Tb extends qp {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    m(this, F);
    m(this, ta);
    m(this, zo);
    m(this, ji);
    m(this, Gi);
    m(this, Se);
    m(this, ea);
    m(this, sa, 0);
    u(this, Gi, e), u(this, Se, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = i(this, F, Ae).get(e);
    if (s)
      return s;
    const [n, r, a] = b(this, F, pu).call(this, e), o = e.length === 1 ? n : `${n}${r}${a}`;
    if (s = i(this, F, Ae).get(o), s)
      return i(this, F, Ae).set(e, s), s;
    const h = `g_${i(this, Gi)}_transfer_map_${qt(this, sa)._++}`, l = b(this, F, Za).call(this, h);
    i(this, F, Ae).set(e, l), i(this, F, Ae).set(o, l);
    const c = b(this, F, to).call(this, h);
    return b(this, F, hl).call(this, n, r, a, c), l;
  }
  addHCMFilter(e, s) {
    const n = `${e}-${s}`, r = "base";
    let a = i(this, F, al).get(r);
    if (a?.key === n || (a ? (a.filter?.remove(), a.key = n, a.url = "none", a.filter = null) : (a = {
      key: n,
      url: "none",
      filter: null
    }, i(this, F, al).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, F, ll).call(this, e);
    e = R.makeHexColor(...o);
    const h = b(this, F, ll).call(this, s);
    if (s = R.makeHexColor(...h), i(this, F, Ja).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const l = new Array(256);
    for (let w = 0; w <= 255; w++) {
      const y = w / 255;
      l[w] = y <= 0.03928 ? y / 12.92 : ((y + 0.055) / 1.055) ** 2.4;
    }
    const c = l.join(","), d = `g_${i(this, Gi)}_hcm_filter`, p = a.filter = b(this, F, to).call(this, d);
    b(this, F, hl).call(this, c, c, c, p), b(this, F, Jp).call(this, p);
    const A = /* @__PURE__ */ f((w, y) => {
      const S = o[w] / 255, v = h[w] / 255, C = new Array(y + 1);
      for (let E = 0; E <= y; E++)
        C[E] = S + E / y * (v - S);
      return C.join(",");
    }, "getSteps");
    return b(this, F, hl).call(this, A(0, 5), A(1, 5), A(2, 5), p), a.url = b(this, F, Za).call(this, d), a.url;
  }
  addAlphaFilter(e) {
    let s = i(this, F, Ae).get(e);
    if (s)
      return s;
    const [n] = b(this, F, pu).call(this, [e]), r = `alpha_${n}`;
    if (s = i(this, F, Ae).get(r), s)
      return i(this, F, Ae).set(e, s), s;
    const a = `g_${i(this, Gi)}_alpha_map_${qt(this, sa)._++}`, o = b(this, F, Za).call(this, a);
    i(this, F, Ae).set(e, o), i(this, F, Ae).set(r, o);
    const h = b(this, F, to).call(this, a);
    return b(this, F, Zp).call(this, n, h), o;
  }
  addLuminosityFilter(e) {
    let s = i(this, F, Ae).get(e || "luminosity");
    if (s)
      return s;
    let n, r;
    if (e ? ([n] = b(this, F, pu).call(this, [e]), r = `luminosity_${n}`) : r = "luminosity", s = i(this, F, Ae).get(r), s)
      return i(this, F, Ae).set(e, s), s;
    const a = `g_${i(this, Gi)}_luminosity_map_${qt(this, sa)._++}`, o = b(this, F, Za).call(this, a);
    i(this, F, Ae).set(e, o), i(this, F, Ae).set(r, o);
    const h = b(this, F, to).call(this, a);
    return b(this, F, iw).call(this, h), e && b(this, F, Zp).call(this, n, h), o;
  }
  addHighlightHCMFilter(e, s, n, r, a) {
    const o = `${s}-${n}-${r}-${a}`;
    let h = i(this, F, al).get(e);
    if (h?.key === o || (h ? (h.filter?.remove(), h.key = o, h.url = "none", h.filter = null) : (h = {
      key: o,
      url: "none",
      filter: null
    }, i(this, F, al).set(e, h)), !s || !n))
      return h.url;
    const [l, c] = [s, n].map(b(this, F, ll).bind(this));
    let d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [A, w] = [r, a].map(b(this, F, ll).bind(this));
    p < d && ([d, p, A, w] = [p, d, w, A]), i(this, F, Ja).style.color = "";
    const y = /* @__PURE__ */ f((C, E, T) => {
      const x = new Array(256), _ = (p - d) / T, k = C / 255, P = (E - C) / (255 * T);
      let I = 0;
      for (let N = 0; N <= T; N++) {
        const L = Math.round(d + N * _), st = k + N * P;
        for (let J = I; J <= L; J++)
          x[J] = st;
        I = L + 1;
      }
      for (let N = I; N < 256; N++)
        x[N] = x[I - 1];
      return x.join(",");
    }, "getSteps"), S = `g_${i(this, Gi)}_hcm_${e}_filter`, v = h.filter = b(this, F, to).call(this, S);
    return b(this, F, Jp).call(this, v), b(this, F, hl).call(this, y(A[0], w[0], 5), y(A[1], w[1], 5), y(A[2], w[2], 5), v), h.url = b(this, F, Za).call(this, S), h.url;
  }
  destroy(e = !1) {
    e && i(this, ea)?.size || (i(this, ji)?.parentNode.parentNode.remove(), u(this, ji, null), i(this, zo)?.clear(), u(this, zo, null), i(this, ea)?.clear(), u(this, ea, null), u(this, sa, 0));
  }
};
ta = new WeakMap(), zo = new WeakMap(), ji = new WeakMap(), Gi = new WeakMap(), Se = new WeakMap(), ea = new WeakMap(), sa = new WeakMap(), F = new WeakSet(), Ae = /* @__PURE__ */ f(function() {
  return i(this, zo) || u(this, zo, /* @__PURE__ */ new Map());
}, "#cache"), al = /* @__PURE__ */ f(function() {
  return i(this, ea) || u(this, ea, /* @__PURE__ */ new Map());
}, "#hcmCache"), Ja = /* @__PURE__ */ f(function() {
  if (!i(this, ji)) {
    const e = i(this, Se).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const n = i(this, Se).createElementNS(ki, "svg");
    n.setAttribute("width", 0), n.setAttribute("height", 0), u(this, ji, i(this, Se).createElementNS(ki, "defs")), e.append(n), n.append(i(this, ji)), i(this, Se).body.append(e);
  }
  return i(this, ji);
}, "#defs"), pu = /* @__PURE__ */ f(function(e) {
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
}, "#createTables"), Za = /* @__PURE__ */ f(function(e) {
  if (i(this, ta) === void 0) {
    u(this, ta, "");
    const s = i(this, Se).URL;
    s !== i(this, Se).baseURI && (qf(s) ? V('#createUrl: ignore "data:"-URL for performance reasons.') : u(this, ta, gy(s, "")));
  }
  return `url(${i(this, ta)}#${e})`;
}, "#createUrl"), iw = /* @__PURE__ */ f(function(e) {
  const s = i(this, Se).createElementNS(ki, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, "#addLuminosityConversion"), Jp = /* @__PURE__ */ f(function(e) {
  const s = i(this, Se).createElementNS(ki, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, "#addGrayConversion"), to = /* @__PURE__ */ f(function(e) {
  const s = i(this, Se).createElementNS(ki, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), i(this, F, Ja).append(s), s;
}, "#createFilter"), ol = /* @__PURE__ */ f(function(e, s, n) {
  const r = i(this, Se).createElementNS(ki, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", n), e.append(r);
}, "#appendFeFunc"), hl = /* @__PURE__ */ f(function(e, s, n, r) {
  const a = i(this, Se).createElementNS(ki, "feComponentTransfer");
  r.append(a), b(this, F, ol).call(this, a, "feFuncR", e), b(this, F, ol).call(this, a, "feFuncG", s), b(this, F, ol).call(this, a, "feFuncB", n);
}, "#addTransferMapConversion"), Zp = /* @__PURE__ */ f(function(e, s) {
  const n = i(this, Se).createElementNS(ki, "feComponentTransfer");
  s.append(n), b(this, F, ol).call(this, n, "feFuncA", e);
}, "#addTransferMapAlphaConversion"), ll = /* @__PURE__ */ f(function(e) {
  return i(this, F, Ja).style.color = e, Xd(getComputedStyle(i(this, F, Ja)).getPropertyValue("color"));
}, "#getRGB"), f(Tb, "DOMFilterFactory");
let Qp = Tb;
const xb = class xb {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    nt("Abstract method `_fetch` called.");
  }
};
f(xb, "BaseStandardFontDataFactory");
let tg = xb;
const _b = class _b extends tg {
  async _fetch(t) {
    return Wd(t, "bytes");
  }
};
f(_b, "DOMStandardFontDataFactory");
let Ku = _b;
const kb = class kb {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t)
      throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((s) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    nt("Abstract method `_fetch` called.");
  }
};
f(kb, "BaseWasmFactory");
let eg = kb;
const Mb = class Mb extends eg {
  async _fetch(t) {
    return Wd(t, "bytes");
  }
};
f(Mb, "DOMWasmFactory");
let qu = Mb;
const Ka = "__forcedDependency", {
  floor: ty,
  ceil: ey
} = Math;
function qd(g, t, e, s, n, r) {
  g[t * 4 + 0] = Math.min(g[t * 4 + 0], e), g[t * 4 + 1] = Math.min(g[t * 4 + 1], s), g[t * 4 + 2] = Math.max(g[t * 4 + 2], n), g[t * 4 + 3] = Math.max(g[t * 4 + 3], r);
}
f(qd, "expandBBox");
const sg = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var jo, Qn;
const Pb = class Pb {
  constructor(t, e) {
    m(this, jo);
    m(this, Qn);
    u(this, jo, t), u(this, Qn, e);
  }
  get length() {
    return i(this, jo).length;
  }
  isEmpty(t) {
    return i(this, jo)[t] === sg;
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
jo = new WeakMap(), Qn = new WeakMap(), f(Pb, "BBoxReader");
let ig = Pb;
const Qd = /* @__PURE__ */ f((g, t) => g?.getOrInsertComputed(t, () => ({
  dependencies: /* @__PURE__ */ new Set(),
  isRenderingOperation: !1
})), "ensureDebugMetadata");
var Oe, Fe, ia, Bs, na, Vi, dt, gt, Wi, Be, Nc, Go, ra, aa, Xi, Ee, fi, Oc, rg;
const Ib = class Ib {
  constructor(t, e, s = !1) {
    m(this, Oc);
    m(this, Oe, {
      __proto__: null
    });
    m(this, Fe, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [Ka]: []
    });
    m(this, ia, /* @__PURE__ */ new Map());
    m(this, Bs, []);
    m(this, na, []);
    m(this, Vi, [[1, 0, 0, 1, 0, 0]]);
    m(this, dt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    m(this, gt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    m(this, Wi, -1);
    m(this, Be, /* @__PURE__ */ new Set());
    m(this, Nc, /* @__PURE__ */ new Map());
    m(this, Go, /* @__PURE__ */ new Map());
    m(this, ra);
    m(this, aa);
    m(this, Xi);
    m(this, Ee);
    m(this, fi);
    u(this, ra, t.width), u(this, aa, t.height), b(this, Oc, rg).call(this, e), s && u(this, fi, /* @__PURE__ */ new Map());
  }
  growOperationsCount(t) {
    t >= i(this, Ee).length && b(this, Oc, rg).call(this, t, i(this, Ee));
  }
  save(t) {
    return u(this, Oe, {
      __proto__: i(this, Oe)
    }), u(this, Fe, {
      __proto__: i(this, Fe),
      transform: {
        __proto__: i(this, Fe).transform
      },
      moveText: {
        __proto__: i(this, Fe).moveText
      },
      sameLineText: {
        __proto__: i(this, Fe).sameLineText
      },
      [Ka]: {
        __proto__: i(this, Fe)[Ka]
      }
    }), u(this, dt, {
      __proto__: i(this, dt)
    }), i(this, Bs).push(t), this;
  }
  restore(t) {
    const e = Object.getPrototypeOf(i(this, Oe));
    if (e === null)
      return this;
    u(this, Oe, e), u(this, Fe, Object.getPrototypeOf(i(this, Fe))), u(this, dt, Object.getPrototypeOf(i(this, dt)));
    const s = i(this, Bs).pop();
    return s !== void 0 && (Qd(i(this, fi), t)?.dependencies.add(s), i(this, Ee)[t] = i(this, Ee)[s]), this;
  }
  recordOpenMarker(t) {
    return i(this, Bs).push(t), this;
  }
  getOpenMarker() {
    return i(this, Bs).length === 0 ? null : i(this, Bs).at(-1);
  }
  recordCloseMarker(t) {
    const e = i(this, Bs).pop();
    return e !== void 0 && (Qd(i(this, fi), t)?.dependencies.add(e), i(this, Ee)[t] = i(this, Ee)[e]), this;
  }
  beginMarkedContent(t) {
    return i(this, na).push(t), this;
  }
  endMarkedContent(t) {
    const e = i(this, na).pop();
    return e !== void 0 && (Qd(i(this, fi), t)?.dependencies.add(e), i(this, Ee)[t] = i(this, Ee)[e]), this;
  }
  pushBaseTransform(t) {
    return i(this, Vi).push(R.multiplyByDOMMatrix(i(this, Vi).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return i(this, Vi).length > 1 && i(this, Vi).pop(), this;
  }
  recordSimpleData(t, e) {
    return i(this, Oe)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return i(this, Fe)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return i(this, Fe)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return i(this, ia).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    i(this, Oe)[t] = i(this, ia).get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(Ka, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in i(this, Oe) && this.recordFutureForcedDependency(e, i(this, Oe)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of i(this, Be))
      this.recordFutureForcedDependency(Ka, t);
    return this;
  }
  resetBBox(t) {
    return i(this, Wi) !== t && (u(this, Wi, t), i(this, gt)[0] = 1 / 0, i(this, gt)[1] = 1 / 0, i(this, gt)[2] = -1 / 0, i(this, gt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, s, n, r, a) {
    const o = R.multiplyByDOMMatrix(i(this, Vi).at(-1), e.getTransform()), h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    R.axialAlignedBoundingBox([s, r, n, a], o, h);
    const l = R.intersect(i(this, dt), h);
    return l ? (i(this, dt)[0] = l[0], i(this, dt)[1] = l[1], i(this, dt)[2] = l[2], i(this, dt)[3] = l[3]) : (i(this, dt)[0] = i(this, dt)[1] = 1 / 0, i(this, dt)[2] = i(this, dt)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, n, r, a) {
    const o = i(this, dt);
    if (o[0] === 1 / 0)
      return this;
    const h = R.multiplyByDOMMatrix(i(this, Vi).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return R.axialAlignedBoundingBox([s, r, n, a], h, i(this, gt)), this;
    const l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return R.axialAlignedBoundingBox([s, r, n, a], h, l), i(this, gt)[0] = Math.min(i(this, gt)[0], Math.max(l[0], o[0])), i(this, gt)[1] = Math.min(i(this, gt)[1], Math.max(l[1], o[1])), i(this, gt)[2] = Math.max(i(this, gt)[2], Math.min(l[2], o[2])), i(this, gt)[3] = Math.max(i(this, gt)[3], Math.min(l[3], o[3])), this;
  }
  recordCharacterBBox(t, e, s, n = 1, r = 0, a = 0, o) {
    const h = s.bbox;
    let l, c;
    if (h && (l = h[2] !== h[0] && h[3] !== h[1] && i(this, Go).get(s), l !== !1 && (c = [0, 0, 0, 0], R.axialAlignedBoundingBox(h, s.fontMatrix, c), (n !== 1 || r !== 0 || a !== 0) && R.scaleMinMax([n, 0, 0, -n, r, a], c), l)))
      return this.recordBBox(t, e, c[0], c[2], c[1], c[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const d = o();
    return h && c && l === void 0 && (l = c[0] <= r - d.actualBoundingBoxLeft && c[2] >= r + d.actualBoundingBoxRight && c[1] <= a - d.actualBoundingBoxAscent && c[3] >= a + d.actualBoundingBoxDescent, i(this, Go).set(s, l), l) ? this.recordBBox(t, e, c[0], c[2], c[1], c[3]) : this.recordBBox(t, e, r - d.actualBoundingBoxLeft, r + d.actualBoundingBoxRight, a - d.actualBoundingBoxAscent, a + d.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return i(this, gt)[0] = Math.max(0, i(this, dt)[0]), i(this, gt)[1] = Math.max(0, i(this, dt)[1]), i(this, gt)[2] = Math.min(i(this, ra), i(this, dt)[2]), i(this, gt)[3] = Math.min(i(this, aa), i(this, dt)[3]), this;
  }
  getSimpleIndex(t) {
    return i(this, Oe)[t];
  }
  recordDependencies(t, e) {
    const s = i(this, Be), n = i(this, Oe), r = i(this, Fe);
    for (const a of e)
      a in i(this, Oe) ? s.add(n[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, e) {
    return i(this, ia).has(e) && i(this, Be).add(i(this, ia).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [Ka]), i(this, fi)) {
      const s = Qd(i(this, fi), t), {
        dependencies: n
      } = s;
      i(this, Be).forEach(n.add, n), i(this, Bs).forEach(n.add, n), i(this, na).forEach(n.add, n), n.delete(t), s.isRenderingOperation = !0;
    }
    if (i(this, Wi) === t) {
      const s = ty(i(this, gt)[0] * 256 / i(this, ra)), n = ty(i(this, gt)[1] * 256 / i(this, aa)), r = ey(i(this, gt)[2] * 256 / i(this, ra)), a = ey(i(this, gt)[3] * 256 / i(this, aa));
      qd(i(this, Xi), t, s, n, r, a);
      for (const o of i(this, Be))
        o !== t && qd(i(this, Xi), o, s, n, r, a);
      for (const o of i(this, Bs))
        o !== t && qd(i(this, Xi), o, s, n, r, a);
      for (const o of i(this, na))
        o !== t && qd(i(this, Xi), o, s, n, r, a);
      e || (i(this, Be).clear(), u(this, Wi, -1));
    }
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    const s = Array.from(i(this, Be));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const n of s)
      this.recordIncrementalData("sameLineText", n);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    return i(this, Wi) === t && (u(this, Wi, -1), i(this, dt)[0] = Math.max(i(this, dt)[0], i(this, gt)[0]), i(this, dt)[1] = Math.max(i(this, dt)[1], i(this, gt)[1]), i(this, dt)[2] = Math.min(i(this, dt)[2], i(this, gt)[2]), i(this, dt)[3] = Math.min(i(this, dt)[3], i(this, gt)[3]), e || i(this, Be).clear()), this;
  }
  _takePendingDependencies() {
    const t = i(this, Be);
    return u(this, Be, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = i(this, Nc).get(t);
    return i(this, Nc).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t)
      i(this, Be).add(e);
  }
  take() {
    return i(this, Go).clear(), new ig(i(this, Ee), i(this, Xi));
  }
  takeDebugMetadata() {
    return i(this, fi);
  }
};
Oe = new WeakMap(), Fe = new WeakMap(), ia = new WeakMap(), Bs = new WeakMap(), na = new WeakMap(), Vi = new WeakMap(), dt = new WeakMap(), gt = new WeakMap(), Wi = new WeakMap(), Be = new WeakMap(), Nc = new WeakMap(), Go = new WeakMap(), ra = new WeakMap(), aa = new WeakMap(), Xi = new WeakMap(), Ee = new WeakMap(), fi = new WeakMap(), Oc = new WeakSet(), rg = /* @__PURE__ */ f(function(t, e) {
  const s = new ArrayBuffer(t * 4);
  u(this, Xi, new Uint8ClampedArray(s)), u(this, Ee, new Uint32Array(s)), e && e.length > 0 ? (i(this, Ee).set(e), i(this, Ee).fill(sg, e.length)) : i(this, Ee).fill(sg);
}, "#initializeBBoxes"), f(Ib, "CanvasDependencyTracker");
let ng = Ib;
var yt, Dt, Us, Vo, Wo;
const Mf = class Mf {
  constructor(t, e, s) {
    m(this, yt);
    m(this, Dt);
    m(this, Us);
    m(this, Vo, 0);
    m(this, Wo, 0);
    if (t instanceof Mf && i(t, Us) === !!s)
      return t;
    u(this, yt, t), u(this, Dt, e), u(this, Us, !!s);
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return qt(this, Wo)._++, i(this, yt).save(i(this, Dt)), this;
  }
  restore(t) {
    return i(this, Wo) > 0 && (i(this, yt).restore(i(this, Dt)), qt(this, Wo)._--), this;
  }
  recordOpenMarker(t) {
    return qt(this, Vo)._++, this;
  }
  getOpenMarker() {
    return i(this, Vo) > 0 ? i(this, Dt) : i(this, yt).getOpenMarker();
  }
  recordCloseMarker(t) {
    return qt(this, Vo)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return i(this, yt).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return i(this, yt).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return i(this, yt).recordSimpleData(t, i(this, Dt)), this;
  }
  recordIncrementalData(t, e) {
    return i(this, yt).recordIncrementalData(t, i(this, Dt)), this;
  }
  resetIncrementalData(t, e) {
    return i(this, yt).resetIncrementalData(t, i(this, Dt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return i(this, yt).recordSimpleDataFromNamed(t, e, i(this, Dt)), this;
  }
  recordFutureForcedDependency(t, e) {
    return i(this, yt).recordFutureForcedDependency(t, i(this, Dt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return i(this, yt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return i(this, yt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return i(this, Us) || i(this, yt).resetBBox(i(this, Dt)), this;
  }
  recordClipBox(t, e, s, n, r, a) {
    return i(this, Us) || i(this, yt).recordClipBox(i(this, Dt), e, s, n, r, a), this;
  }
  recordBBox(t, e, s, n, r, a) {
    return i(this, Us) || i(this, yt).recordBBox(i(this, Dt), e, s, n, r, a), this;
  }
  recordCharacterBBox(t, e, s, n, r, a, o) {
    return i(this, Us) || i(this, yt).recordCharacterBBox(i(this, Dt), e, s, n, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return i(this, Us) || i(this, yt).recordFullPageBBox(i(this, Dt)), this;
  }
  getSimpleIndex(t) {
    return i(this, yt).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return i(this, yt).recordDependencies(i(this, Dt), e), this;
  }
  recordNamedDependency(t, e) {
    return i(this, yt).recordNamedDependency(i(this, Dt), e), this;
  }
  recordOperation(t) {
    return i(this, yt).recordOperation(i(this, Dt), !0), this;
  }
  recordShowTextOperation(t) {
    return i(this, yt).recordShowTextOperation(i(this, Dt), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return i(this, Us) || i(this, yt).bboxToClipBoxDropOperation(i(this, Dt), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
yt = new WeakMap(), Dt = new WeakMap(), Us = new WeakMap(), Vo = new WeakMap(), Wo = new WeakMap(), f(Mf, "CanvasNestedDependencyTracker");
let Qu = Mf;
const gs = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
}, ge = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function ag(g, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], n = new Path2D();
  n.rect(t[0], t[1], e, s), g.clip(n);
}
f(ag, "applyBoundingBox");
const Lb = class Lb {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    nt("Abstract method `getPattern` called.");
  }
};
f(Lb, "BaseShadingPattern");
let Fl = Lb;
const Db = class Db extends Fl {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  isOriginBased() {
    return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
  }
  isRadial() {
    return this._type === "radial";
  }
  _createGradient(t, e = null) {
    let s, n = this._p0, r = this._p1;
    if (e && (n = n.slice(), r = r.slice(), R.applyTransform(n, e), R.applyTransform(r, e)), this._type === "axial")
      s = t.createLinearGradient(n[0], n[1], r[0], r[1]);
    else if (this._type === "radial") {
      let a = this._r0, o = this._r1;
      if (e) {
        const h = new Float32Array(2);
        R.singularValueDecompose2dScale(e, h), a *= h[0], o *= h[0];
      }
      s = t.createRadialGradient(n[0], n[1], a, r[0], r[1], o);
    }
    for (const a of this._colorStops)
      s.addColorStop(a[0], a[1]);
    return s;
  }
  getPattern(t, e, s, n) {
    let r;
    if (n === ge.STROKE || n === ge.FILL) {
      if (this.isOriginBased()) {
        let p = R.transform(s, e.baseTransform);
        this.matrix && (p = R.transform(p, this.matrix));
        const A = 1e-3, w = Math.hypot(p[0], p[1]), y = Math.hypot(p[2], p[3]), S = (p[0] * p[2] + p[1] * p[3]) / (w * y);
        if (Math.abs(S) < A)
          if (this.isRadial()) {
            if (Math.abs(w - y) < A)
              return this._createGradient(t, p);
          } else
            return this._createGradient(t, p);
      }
      const a = e.current.getClippedPathBoundingBox(n, Pt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, h = Math.ceil(a[3] - a[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", o, h), c = l.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = R.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), ag(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(l.canvas, "no-repeat");
      const d = new DOMMatrix(s);
      r.setTransform(d);
    } else
      ag(t, this._bbox), r = this._createGradient(t);
    return r;
  }
};
f(Db, "RadialAxialShadingPattern");
let og = Db;
function rp(g, t, e, s, n, r, a, o) {
  const h = t.coords, l = t.colors, c = g.data, d = g.width * 4;
  let p;
  h[e + 1] > h[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), h[s + 1] > h[n + 1] && (p = s, s = n, n = p, p = a, a = o, o = p), h[e + 1] > h[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const A = (h[e] + t.offsetX) * t.scaleX, w = (h[e + 1] + t.offsetY) * t.scaleY, y = (h[s] + t.offsetX) * t.scaleX, S = (h[s + 1] + t.offsetY) * t.scaleY, v = (h[n] + t.offsetX) * t.scaleX, C = (h[n + 1] + t.offsetY) * t.scaleY;
  if (w >= C)
    return;
  const E = l[r], T = l[r + 1], x = l[r + 2], _ = l[a], k = l[a + 1], P = l[a + 2], I = l[o], N = l[o + 1], L = l[o + 2], st = Math.round(w), J = Math.round(C);
  let W, $t, U, H, rt, Ge, _i, zt;
  for (let Et = st; Et <= J; Et++) {
    if (Et < S) {
      const jt = Et < w ? 0 : (w - Et) / (w - S);
      W = A - (A - y) * jt, $t = E - (E - _) * jt, U = T - (T - k) * jt, H = x - (x - P) * jt;
    } else {
      let jt;
      Et > C ? jt = 1 : S === C ? jt = 0 : jt = (S - Et) / (S - C), W = y - (y - v) * jt, $t = _ - (_ - I) * jt, U = k - (k - N) * jt, H = P - (P - L) * jt;
    }
    let Tt;
    Et < w ? Tt = 0 : Et > C ? Tt = 1 : Tt = (w - Et) / (w - C), rt = A - (A - v) * Tt, Ge = E - (E - I) * Tt, _i = T - (T - N) * Tt, zt = x - (x - L) * Tt;
    const vn = Math.round(Math.min(W, rt)), Gh = Math.round(Math.max(W, rt));
    let Rs = d * Et + vn * 4;
    for (let jt = vn; jt <= Gh; jt++)
      Tt = (W - jt) / (W - rt), Tt < 0 ? Tt = 0 : Tt > 1 && (Tt = 1), c[Rs++] = $t - ($t - Ge) * Tt | 0, c[Rs++] = U - (U - _i) * Tt | 0, c[Rs++] = H - (H - zt) * Tt | 0, c[Rs++] = 255;
  }
}
f(rp, "drawTriangle");
function G0(g, t, e) {
  const s = t.coords, n = t.colors;
  let r, a;
  switch (t.type) {
    case lp.LATTICE:
      const o = t.verticesPerRow, h = Math.floor(s.length / o) - 1, l = o - 1;
      for (r = 0; r < h; r++) {
        let c = r * o;
        for (let d = 0; d < l; d++, c++)
          rp(g, e, s[c], s[c + 1], s[c + o], n[c], n[c + 1], n[c + o]), rp(g, e, s[c + o + 1], s[c + 1], s[c + o], n[c + o + 1], n[c + 1], n[c + o]);
      }
      break;
    case lp.TRIANGLES:
      for (r = 0, a = s.length; r < a; r += 3)
        rp(g, e, s[r], s[r + 1], s[r + 2], n[r], n[r + 1], n[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
f(G0, "drawFigure");
const Rb = class Rb extends Fl {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - h, d = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), A = l / d, w = c / p, y = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -h,
      scaleX: 1 / A,
      scaleY: 1 / w
    }, S = d + 4, v = p + 4, C = s.getCanvas("mesh", S, v), E = C.context, T = E.createImageData(d, p);
    if (e) {
      const _ = T.data;
      for (let k = 0, P = _.length; k < P; k += 4)
        _[k] = e[0], _[k + 1] = e[1], _[k + 2] = e[2], _[k + 3] = 255;
    }
    for (const _ of this._figures)
      G0(T, _, y);
    return E.putImageData(T, 2, 2), {
      canvas: C.canvas,
      offsetX: o - 2 * A,
      offsetY: h - 2 * w,
      scaleX: A,
      scaleY: w
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, n) {
    ag(t, this._bbox);
    const r = new Float32Array(2);
    if (n === ge.SHADING)
      R.singularValueDecompose2dScale(Pt(t), r);
    else if (this.matrix) {
      R.singularValueDecompose2dScale(this.matrix, r);
      const [o, h] = r;
      R.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= h;
    } else
      R.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, n === ge.SHADING ? null : this._background, e.cachedCanvases);
    return n !== ge.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
};
f(Rb, "MeshShadingPattern");
let hg = Rb;
const Nb = class Nb extends Fl {
  getPattern() {
    return "hotpink";
  }
};
f(Nb, "DummyShadingPattern");
let lg = Nb;
function V0(g) {
  switch (g[0]) {
    case "RadialAxial":
      return new og(g);
    case "Mesh":
      return new hg(g);
    case "Dummy":
      return new lg();
  }
  throw new Error(`Unknown IR type: ${g[0]}`);
}
f(V0, "getShadingPattern");
const sy = {
  COLORED: 1,
  UNCOLORED: 2
}, Cl = class Cl {
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
    l = Math.abs(l), c = Math.abs(c), Yf("TilingType: " + a);
    const d = s[0], p = s[1], A = s[2], w = s[3], y = A - d, S = w - p, v = new Float32Array(2);
    R.singularValueDecompose2dScale(this.matrix, v);
    const [C, E] = v;
    R.singularValueDecompose2dScale(this.baseTransform, v);
    const T = C * v[0], x = E * v[1];
    let _ = y, k = S, P = !1, I = !1;
    const N = Math.ceil(l * T), L = Math.ceil(c * x), st = Math.ceil(y * T), J = Math.ceil(S * x);
    N >= st ? _ = l : P = !0, L >= J ? k = c : I = !0;
    const W = this.getSizeAndScale(_, this.ctx.canvas.width, T), $t = this.getSizeAndScale(k, this.ctx.canvas.height, x), U = t.cachedCanvases.getCanvas("pattern", W.size, $t.size), H = U.context, rt = h.createCanvasGraphics(H, e);
    if (rt.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(rt, r, o), H.translate(-W.scale * d, -$t.scale * p), rt.transform(0, W.scale, 0, 0, $t.scale, 0, 0), H.save(), rt.dependencyTracker?.save(), this.clipBbox(rt, d, p, A, w), rt.baseTransform = Pt(rt.ctx), rt.executeOperatorList(n), rt.endDrawing(), rt.dependencyTracker?.restore(), H.restore(), P || I) {
      const Ge = U.canvas;
      P && (_ = l), I && (k = c);
      const _i = this.getSizeAndScale(_, this.ctx.canvas.width, T), zt = this.getSizeAndScale(k, this.ctx.canvas.height, x), Et = _i.size, Tt = zt.size, vn = t.cachedCanvases.getCanvas("pattern-workaround", Et, Tt), Gh = vn.context, Rs = P ? Math.floor(y / l) : 0, jt = I ? Math.floor(S / c) : 0;
      for (let Vh = 0; Vh <= Rs; Vh++)
        for (let Wh = 0; Wh <= jt; Wh++)
          Gh.drawImage(Ge, Et * Vh, Tt * Wh, Et, Tt, 0, 0, Et, Tt);
      return {
        canvas: vn.canvas,
        scaleX: _i.scale,
        scaleY: zt.scale,
        offsetX: d,
        offsetY: p
      };
    }
    return {
      canvas: U.canvas,
      scaleX: W.scale,
      scaleY: $t.scale,
      offsetX: d,
      offsetY: p
    };
  }
  getSizeAndScale(t, e, s) {
    const n = Math.max(Cl.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= n ? r = n : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, n, r) {
    const a = n - e, o = r - s;
    t.ctx.rect(e, s, a, o), R.axialAlignedBoundingBox([e, s, n, r], Pt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const n = t.ctx, r = t.current;
    switch (e) {
      case sy.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        n.fillStyle = r.fillColor = a, n.strokeStyle = r.strokeColor = o;
        break;
      case sy.UNCOLORED:
        n.fillStyle = n.strokeStyle = s, r.fillColor = r.strokeColor = s;
        break;
      default:
        throw new dp(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, n, r) {
    let a = s;
    n !== ge.SHADING && (a = R.transform(a, e.baseTransform), this.matrix && (a = R.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let h = new DOMMatrix(a);
    h = h.translate(o.offsetX, o.offsetY), h = h.scale(1 / o.scaleX, 1 / o.scaleY);
    const l = t.createPattern(o.canvas, "repeat");
    return l.setTransform(h), l;
  }
};
f(Cl, "TilingPattern"), M(Cl, "MAX_PATTERN_SIZE", 3e3);
let cg = Cl;
function W0({
  src: g,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: n,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = Ht.isLittleEndian ? 4278190080 : 255, [h, l] = a ? [r, o] : [o, r], c = s >> 3, d = s & 7, p = h ^ l, A = g.length;
  e = new Uint32Array(e.buffer);
  let w = 0;
  for (let y = 0; y < n; ++y) {
    for (const v = t + c; t < v; ++t, w += 8) {
      const C = g[t];
      e[w] = h ^ -(C >> 7 & 1) & p, e[w + 1] = h ^ -(C >> 6 & 1) & p, e[w + 2] = h ^ -(C >> 5 & 1) & p, e[w + 3] = h ^ -(C >> 4 & 1) & p, e[w + 4] = h ^ -(C >> 3 & 1) & p, e[w + 5] = h ^ -(C >> 2 & 1) & p, e[w + 6] = h ^ -(C >> 1 & 1) & p, e[w + 7] = h ^ -(C & 1) & p;
    }
    if (d === 0)
      continue;
    const S = t < A ? g[t++] : 255;
    for (let v = 0; v < d; ++v, ++w)
      e[w] = h ^ -(S >> 7 - v & 1) & p;
  }
  return {
    srcPos: t,
    destPos: w
  };
}
f(W0, "convertBlackAndWhiteToRGBA");
const iy = 16, ny = 100, X0 = 15, ry = 10, je = 16, ap = new DOMMatrix(), cs = new Float32Array(2), ao = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Y0(g, t) {
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
f(Y0, "mirrorContextOperations");
const Ob = class Ob {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let n;
    return this.cache[t] !== void 0 ? (n = this.cache[t], this.canvasFactory.reset(n, e, s)) : (n = this.canvasFactory.create(e, s), this.cache[t] = n), n;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
};
f(Ob, "CachedCanvases");
let dg = Ob;
function Jd(g, t, e, s, n, r, a, o, h, l) {
  const [c, d, p, A, w, y] = Pt(g);
  if (d === 0 && p === 0) {
    const C = a * c + w, E = Math.round(C), T = o * A + y, x = Math.round(T), _ = (a + h) * c + w, k = Math.abs(Math.round(_) - E) || 1, P = (o + l) * A + y, I = Math.abs(Math.round(P) - x) || 1;
    return g.setTransform(Math.sign(c), 0, 0, Math.sign(A), E, x), g.drawImage(t, e, s, n, r, 0, 0, k, I), g.setTransform(c, d, p, A, w, y), [k, I];
  }
  if (c === 0 && A === 0) {
    const C = o * p + w, E = Math.round(C), T = a * d + y, x = Math.round(T), _ = (o + l) * p + w, k = Math.abs(Math.round(_) - E) || 1, P = (a + h) * d + y, I = Math.abs(Math.round(P) - x) || 1;
    return g.setTransform(0, Math.sign(d), Math.sign(p), 0, E, x), g.drawImage(t, e, s, n, r, 0, 0, I, k), g.setTransform(c, d, p, A, w, y), [I, k];
  }
  g.drawImage(t, e, s, n, r, a, o, h, l);
  const S = Math.hypot(c, d), v = Math.hypot(p, A);
  return [S * h, v * l];
}
f(Jd, "drawImageAtIntegerCoords");
const Fb = class Fb {
  alphaIsShape = !1;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = hp;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = Qt.FILL;
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
  constructor(t, e, s) {
    s?.(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = ao.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = ge.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === ge.STROKE) {
      e || nt("Stroke bounding box must include transform."), R.singularValueDecompose2dScale(e, cs);
      const n = cs[0] * this.lineWidth / 2, r = cs[1] * this.lineWidth / 2;
      s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = R.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(ao, 0);
  }
  getClippedPathBoundingBox(t = ge.FILL, e = null) {
    return R.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
};
f(Fb, "CanvasExtraState");
let Ju = Fb;
function ay(g, t) {
  if (t instanceof ImageData) {
    g.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, n = e % je, r = (e - n) / je, a = n === 0 ? r : r + 1, o = g.createImageData(s, je);
  let h = 0, l;
  const c = t.data, d = o.data;
  let p, A, w, y;
  if (t.kind === su.GRAYSCALE_1BPP) {
    const S = c.byteLength, v = new Uint32Array(d.buffer, 0, d.byteLength >> 2), C = v.length, E = s + 7 >> 3, T = 4294967295, x = Ht.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (w = p < r ? je : n, l = 0, A = 0; A < w; A++) {
        const _ = S - h;
        let k = 0;
        const P = _ > E ? s : _ * 8 - 7, I = P & -8;
        let N = 0, L = 0;
        for (; k < I; k += 8)
          L = c[h++], v[l++] = L & 128 ? T : x, v[l++] = L & 64 ? T : x, v[l++] = L & 32 ? T : x, v[l++] = L & 16 ? T : x, v[l++] = L & 8 ? T : x, v[l++] = L & 4 ? T : x, v[l++] = L & 2 ? T : x, v[l++] = L & 1 ? T : x;
        for (; k < P; k++)
          N === 0 && (L = c[h++], N = 128), v[l++] = L & N ? T : x, N >>= 1;
      }
      for (; l < C; )
        v[l++] = 0;
      g.putImageData(o, 0, p * je);
    }
  } else if (t.kind === su.RGBA_32BPP) {
    for (A = 0, y = s * je * 4, p = 0; p < r; p++)
      d.set(c.subarray(h, h + y)), h += y, g.putImageData(o, 0, A), A += je;
    p < a && (y = s * n * 4, d.set(c.subarray(h, h + y)), g.putImageData(o, 0, A));
  } else if (t.kind === su.RGB_24BPP)
    for (w = je, y = s * w, p = 0; p < a; p++) {
      for (p >= r && (w = n, y = s * w), l = 0, A = y; A--; )
        d[l++] = c[h++], d[l++] = c[h++], d[l++] = c[h++], d[l++] = 255;
      g.putImageData(o, 0, p * je);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
f(ay, "putBinaryImageData");
function oy(g, t) {
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
    } = W0({
      src: l,
      srcPos: h,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), g.putImageData(o, 0, d * je);
  }
}
f(oy, "putBinaryImageMask");
function Yh(g, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    g[s] !== void 0 && (t[s] = g[s]);
  g.setLineDash !== void 0 && (t.setLineDash(g.getLineDash()), t.lineDashOffset = g.lineDashOffset);
}
f(Yh, "copyCtxState");
function Zd(g) {
  g.strokeStyle = g.fillStyle = "#000000", g.fillRule = "nonzero", g.globalAlpha = 1, g.lineWidth = 1, g.lineCap = "butt", g.lineJoin = "miter", g.miterLimit = 10, g.globalCompositeOperation = "source-over", g.font = "10px sans-serif", g.setLineDash !== void 0 && (g.setLineDash([]), g.lineDashOffset = 0);
  const {
    filter: t
  } = g;
  t !== "none" && t !== "" && (g.filter = "none");
}
f(Zd, "resetCtxToDefault");
function hy(g, t) {
  if (t)
    return !0;
  R.singularValueDecompose2dScale(g, cs);
  const e = Math.fround(mn.pixelRatio * vr.PDF_TO_CSS_UNITS);
  return cs[0] <= e && cs[1] <= e;
}
f(hy, "getImageSmoothingEnabled");
const K0 = ["butt", "round", "square"], q0 = ["miter", "round", "bevel"], Q0 = {}, ly = {};
var Ks, ug, fg, pg;
const Pf = class Pf {
  constructor(t, e, s, n, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, h, l, c) {
    m(this, Ks);
    this.ctx = t, this.current = new Ju(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.commonObjs = e, this.objs = s, this.canvasFactory = n, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new dg(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = c ?? null;
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
      const h = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...Pt(this.compositeCtx));
    }
    this.ctx.save(), Zd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Pt(this.ctx);
  }
  executeOperatorList(t, e, s, n, r) {
    const a = t.argsArray, o = t.fnArray;
    let h = e || 0;
    const l = a.length;
    if (l === h)
      return h;
    const c = l - h > ry && typeof s == "function", d = c ? Date.now() + X0 : 0;
    let p = 0;
    const A = this.commonObjs, w = this.objs;
    let y, S;
    for (; ; ) {
      if (n !== void 0 && h === n.nextBreakPoint)
        return n.breakIt(h, s), h;
      if (!r || r(h))
        if (y = o[h], S = a[h] ?? null, y !== Ml.dependency)
          S === null ? this[y](h) : this[y](h, ...S);
        else
          for (const v of S) {
            this.dependencyTracker?.recordNamedData(v, h);
            const C = v.startsWith("g_") ? A : w;
            if (!C.has(v))
              return C.get(v, s), h;
          }
      if (h++, h === l)
        return h;
      if (c && ++p > ry) {
        if (Date.now() > d)
          return s(), h;
        p = 0;
      }
    }
  }
  endDrawing() {
    b(this, Ks, ug).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, Ks, fg).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, n = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, h = n, l = "prescale1", c, d;
    for (; r > 2 && o > 1 || a > 2 && h > 1; ) {
      let p = o, A = h;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && h > 1 && (A = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, a /= h / A), c = this.cachedCanvases.getCanvas(l, p, A), d = c.context, d.clearRect(0, 0, p, A), d.drawImage(t, 0, 0, o, h, 0, 0, p, A), t = c.canvas, o = p, h = A, l = l === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: h
    };
  }
  _createMaskCanvas(t, e) {
    const s = this.ctx, {
      width: n,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, h = Pt(s);
    let l, c, d, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const N = e.bitmap || e.data.buffer;
      c = JSON.stringify(o ? h : [h.slice(0, 4), a]), l = this._cachedBitmapsMap.getOrInsertComputed(N, Gm);
      const L = l.get(c);
      if (L && !o) {
        const st = Math.round(Math.min(h[0], h[2]) + h[4]), J = Math.round(Math.min(h[1], h[3]) + h[5]);
        return this.dependencyTracker?.recordDependencies(t, gs.transformAndFill), {
          canvas: L,
          offsetX: st,
          offsetY: J
        };
      }
      d = L;
    }
    d || (p = this.cachedCanvases.getCanvas("maskCanvas", n, r), oy(p.context, e));
    let A = R.transform(h, [1 / n, 0, 0, -1 / r, 0, 0]);
    A = R.transform(A, [1, 0, 0, 1, 0, -r]);
    const w = ao.slice();
    R.axialAlignedBoundingBox([0, 0, n, r], A, w);
    const [y, S, v, C] = w, E = Math.round(v - y) || 1, T = Math.round(C - S) || 1, x = this.cachedCanvases.getCanvas("fillCanvas", E, T), _ = x.context, k = y, P = S;
    _.translate(-k, -P), _.transform(...A), d || (d = this._scaleImage(p.canvas, qs(_)), d = d.img, l && o && l.set(c, d)), _.imageSmoothingEnabled = hy(Pt(_), e.interpolate), Jd(_, d, 0, 0, d.width, d.height, 0, 0, n, r), _.globalCompositeOperation = "source-in";
    const I = R.transform(qs(_), [1, 0, 0, 1, -k, -P]);
    return _.fillStyle = o ? a.getPattern(s, this, I, ge.FILL, t) : a, _.fillRect(0, 0, n, r), l && !o && (this.cachedCanvases.delete("fillCanvas"), l.set(c, x.canvas)), this.dependencyTracker?.recordDependencies(t, gs.transformAndFill), {
      canvas: x.canvas,
      offsetX: Math.round(k),
      offsetY: Math.round(P)
    };
  }
  setLineWidth(t, e) {
    this.dependencyTracker?.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    this.dependencyTracker?.recordSimpleData("lineCap", t), this.ctx.lineCap = K0[e];
  }
  setLineJoin(t, e) {
    this.dependencyTracker?.recordSimpleData("lineJoin", t), this.ctx.lineJoin = q0[e];
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
    const e = this.ctx.canvas.width, s = this.ctx.canvas.height, n = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(n, e, s);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), Yh(this.suspendedCtx, a), Y0(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Yh(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
    let p = t.canvas, A = h - c, w = l - d;
    if (a)
      if (A < 0 || w < 0 || A + s > p.width || w + n > p.height) {
        const S = this.cachedCanvases.getCanvas("maskExtension", s, n), v = S.context;
        v.drawImage(p, -A, -w), v.globalCompositeOperation = "destination-atop", v.fillStyle = a, v.fillRect(0, 0, s, n), v.globalCompositeOperation = "source-over", p = S.canvas, A = w = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const S = new Path2D();
        S.rect(A, w, s, n), t.clip(S), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(A, w, s, n), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const y = new Path2D();
    y.rect(h, l, s, n), e.clip(y), e.globalCompositeOperation = "destination-in", e.drawImage(p, A, w, s, n, h, l, s, n), e.restore();
  }
  save(t) {
    this.inSMaskMode && Yh(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), this.dependencyTracker?.save(t);
  }
  restore(t) {
    if (this.dependencyTracker?.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Yh(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
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
      const a = e === Ml.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, n[0] - a, n[2] + a, n[1] - a, n[3] + a).recordDependencies(t, ["transform"]);
    }
    r instanceof Path2D || (r = s[0] = wy(r)), R.axialAlignedBoundingBox(n, Pt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = !0) {
    const n = this.ctx, r = this.current.strokeColor;
    if (n.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && r?.getPattern) {
        const a = r.isModifyingCurrentTransform() ? n.getTransform() : null;
        if (n.save(), n.strokeStyle = r.getPattern(n, this, qs(n), ge.STROKE, t), a) {
          const o = new Path2D();
          o.addPath(e, n.getTransform().invertSelf().multiplySelf(a)), e = o;
        }
        this.rescaleAndStroke(e, !1), n.restore();
      } else
        this.rescaleAndStroke(e, !0);
    this.dependencyTracker?.recordDependencies(t, gs.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(ge.STROKE, Pt(this.ctx))), n.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = !0) {
    const n = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const l = r.isModifyingCurrentTransform() ? n.getTransform() : null;
      if (this.dependencyTracker?.save(t), n.save(), n.fillStyle = r.getPattern(n, this, qs(n), ge.FILL, t), l) {
        const c = new Path2D();
        c.addPath(e, n.getTransform().invertSelf().multiplySelf(l)), e = c;
      }
      o = !0;
    }
    const h = this.current.getClippedPathBoundingBox();
    this.contentVisible && h !== null && (this.pendingEOFill ? (n.fill(e, "evenodd"), this.pendingEOFill = !1) : n.fill(e)), this.dependencyTracker?.recordDependencies(t, gs.fill), o && (n.restore(), this.dependencyTracker?.restore(t)), s && this.consumePath(t, e, h);
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
    this.ctx.fill(e), this.dependencyTracker?.recordDependencies(t, gs.rawFillPath).recordOperation(t);
  }
  clip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = Q0;
  }
  eoClip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t), this.pendingClip = ly;
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
    if (r.fontMatrix = n.fontMatrix || hp, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && V("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = n, this.current.fontSize = s, n.isType3Font)
      return;
    const a = n.loadedName || "sans-serif", o = n.systemFontInfo?.css || `"${a}", ${n.fallbackName}`;
    let h = "normal";
    n.black ? h = "900" : n.bold && (h = "bold");
    const l = n.italic ? "italic" : "normal";
    let c = s;
    s < iy ? c = iy : s > ny && (c = ny), this.current.fontSizeScale = s / c, this.ctx.font = `${l} ${h} ${c}px ${o}`;
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
    const o = this.ctx, h = this.current, l = h.font, c = h.textRenderingMode, d = h.fontSize / h.fontSizeScale, p = c & Qt.FILL_STROKE_MASK, A = !!(c & Qt.ADD_TO_PATH_FLAG), w = h.patternFill && !l.missingFile, y = h.patternStroke && !l.missingFile;
    let S;
    if ((l.disableFontFace || A || w || y) && !l.missingFile && (S = l.getPathGenerator(this.commonObjs, e)), S && (l.disableFontFace || w || y)) {
      o.save(), o.translate(s, n), o.scale(d, -d), this.dependencyTracker?.recordCharacterBBox(t, o, l);
      let v;
      if (p === Qt.FILL || p === Qt.FILL_STROKE)
        if (r) {
          v = o.getTransform(), o.setTransform(...r);
          const C = b(this, Ks, pg).call(this, S, v, r);
          o.fill(C);
        } else
          o.fill(S);
      if (p === Qt.STROKE || p === Qt.FILL_STROKE)
        if (a) {
          v ||= o.getTransform(), o.setTransform(...a);
          const {
            a: C,
            b: E,
            c: T,
            d: x
          } = v, _ = R.inverseTransform(a), k = R.transform([C, E, T, x, 0, 0], _);
          R.singularValueDecompose2dScale(k, cs), o.lineWidth *= Math.max(cs[0], cs[1]) / d, o.stroke(b(this, Ks, pg).call(this, S, v, a));
        } else
          o.lineWidth /= d, o.stroke(S);
      o.restore();
    } else
      (p === Qt.FILL || p === Qt.FILL_STROKE) && (o.fillText(e, s, n), this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n, () => o.measureText(e))), (p === Qt.STROKE || p === Qt.FILL_STROKE) && (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n, () => o.measureText(e)).recordDependencies(t, gs.stroke), o.strokeText(e, s, n));
    A && ((this.pendingTextPaths ||= []).push({
      transform: Pt(o),
      x: s,
      y: n,
      fontSize: d,
      path: S
    }), this.dependencyTracker?.recordCharacterBBox(t, o, l, d, s, n));
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let n = 3; n < e.length; n += 4)
      if (e[n] > 0 && e[n] < 255) {
        s = !0;
        break;
      }
    return z(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t, e) {
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, gs.showText).resetBBox(t), this.current.textRenderingMode & Qt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
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
    const a = this.ctx, o = s.fontSizeScale, h = s.charSpacing, l = s.wordSpacing, c = s.fontDirection, d = s.textHScale * c, p = e.length, A = n.vertical, w = A ? 1 : -1, y = n.defaultVMetrics, S = r * s.fontMatrix[0], v = s.textRenderingMode === Qt.FILL && !n.disableFontFace && !s.patternFill;
    a.save(), s.textMatrix && a.transform(...s.textMatrix), a.translate(s.x, s.y + s.textRise), c > 0 ? a.scale(d, -1) : a.scale(d, 1);
    let C, E;
    const T = s.textRenderingMode & Qt.FILL_STROKE_MASK, x = T === Qt.FILL || T === Qt.FILL_STROKE, _ = T === Qt.STROKE || T === Qt.FILL_STROKE;
    if (x && s.patternFill) {
      a.save();
      const L = s.fillColor.getPattern(a, this, qs(a), ge.FILL, t);
      C = Pt(a), a.restore(), a.fillStyle = L;
    }
    if (_ && s.patternStroke) {
      a.save();
      const L = s.strokeColor.getPattern(a, this, qs(a), ge.STROKE, t);
      E = Pt(a), a.restore(), a.strokeStyle = L;
    }
    let k = s.lineWidth;
    const P = s.textMatrixScale;
    if (P === 0 || k === 0 ? _ && (k = this.getSinglePixelWidth()) : k /= P, o !== 1 && (a.scale(o, o), k /= o), a.lineWidth = k, n.isInvalidPDFjsFont) {
      const L = [];
      let st = 0;
      for (const W of e)
        L.push(W.unicode), st += W.width;
      const J = L.join("");
      if (a.fillText(J, 0, 0), this.dependencyTracker !== null) {
        const W = a.measureText(J);
        this.dependencyTracker.recordBBox(t, this.ctx, -W.actualBoundingBoxLeft, W.actualBoundingBoxRight, -W.actualBoundingBoxAscent, W.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += st * S * d, a.restore(), this.compose();
      return;
    }
    let I = 0, N;
    for (N = 0; N < p; ++N) {
      const L = e[N];
      if (typeof L == "number") {
        I += w * L * r / 1e3;
        continue;
      }
      let st = !1;
      const J = (L.isSpace ? l : 0) + h, W = L.fontChar, $t = L.accent;
      let U, H, rt = L.width;
      if (A) {
        const zt = L.vmetric || y, Et = -(L.vmetric ? zt[1] : rt * 0.5) * S, Tt = zt[2] * S;
        rt = zt ? -zt[0] : rt, U = Et / o, H = (I + Tt) / o;
      } else
        U = I / o, H = 0;
      let Ge;
      if (n.remeasure && rt > 0) {
        Ge = a.measureText(W);
        const zt = Ge.width * 1e3 / r * o;
        if (rt < zt && this.isFontSubpixelAAEnabled) {
          const Et = rt / zt;
          st = !0, a.save(), a.scale(Et, 1), U /= Et;
        } else rt !== zt && (U += (rt - zt) / 2e3 * r / o);
      }
      if (this.contentVisible && (L.isInFont || n.missingFile)) {
        if (v && !$t)
          a.fillText(W, U, H), this.dependencyTracker?.recordCharacterBBox(t, a, Ge ? {
            bbox: null
          } : n, r / o, U, H, () => Ge ?? a.measureText(W));
        else if (this.paintChar(t, W, U, H, C, E), $t) {
          const zt = U + r * $t.offset.x / o, Et = H - r * $t.offset.y / o;
          this.paintChar(t, $t.fontChar, zt, Et, C, E);
        }
      }
      const _i = A ? rt * S - J * c : rt * S + J * c;
      I += _i, st && a.restore();
    }
    A ? s.y -= I : s.x += I * d, a.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const s = this.ctx, n = this.current, r = n.font, a = n.fontSize, o = n.fontDirection, h = r.vertical ? 1 : -1, l = n.charSpacing, c = n.wordSpacing, d = n.textHScale * o, p = n.fontMatrix || hp, A = e.length, w = n.textRenderingMode === Qt.INVISIBLE;
    let y, S, v, C;
    if (w || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, s.save(), n.textMatrix && s.transform(...n.textMatrix), s.translate(n.x, n.y + n.textRise), s.scale(d, o);
    const E = this.dependencyTracker;
    for (this.dependencyTracker = E ? new Qu(E, t) : null, y = 0; y < A; ++y) {
      if (S = e[y], typeof S == "number") {
        C = h * S * a / 1e3, this.ctx.translate(C, 0), n.x += C * d;
        continue;
      }
      const T = (S.isSpace ? c : 0) + l, x = r.charProcOperatorList[S.operatorListId];
      x ? this.contentVisible && (this.save(), s.scale(a, a), s.transform(...p), this.executeOperatorList(x), this.restore()) : V(`Type3 character "${S.operatorListId}" is not available.`);
      const _ = [S.width, 0];
      R.applyTransform(_, p), v = _[0] * a + T, s.translate(v, 0), n.x += v * d;
    }
    s.restore(), E && (this.dependencyTracker = E);
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
      const n = this.baseTransform || Pt(this.ctx), r = {
        createCanvasGraphics: /* @__PURE__ */ f((a, o) => new Pf(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new Qu(this.dependencyTracker, o, !0) : null), "createCanvasGraphics")
      };
      s = new cg(e, this.ctx, r, n);
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
    return this.cachedPatterns.has(e) ? n = this.cachedPatterns.get(e) : (n = V0(this.getObject(t, e)), this.cachedPatterns.set(e, n)), s && (n.matrix = s), n;
  }
  shadingFill(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    this.save(t);
    const n = this._getPattern(t, e);
    s.fillStyle = n.getPattern(s, this, qs(s), ge.SHADING, t);
    const r = qs(s);
    if (r) {
      const {
        width: a,
        height: o
      } = s.canvas, h = ao.slice();
      R.axialAlignedBoundingBox([0, 0, a, o], r, h);
      const [l, c, d, p] = h;
      this.ctx.fillRect(l, c, d - l, p - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, gs.transform).recordDependencies(t, gs.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    nt("Should not call beginInlineImage");
  }
  beginImageData() {
    nt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Pt(this.ctx), s)) {
      R.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
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
    e.isolated || Yf("TODO: Support non-isolated groups."), e.knockout && V("Knockout groups not supported.");
    const n = Pt(s);
    if (e.matrix && s.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let r = ao.slice();
    R.axialAlignedBoundingBox(e.bbox, Pt(s), r);
    const a = [0, 0, s.canvas.width, s.canvas.height];
    r = R.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), h = Math.floor(r[1]), l = Math.max(Math.ceil(r[2]) - o, 1), c = Math.max(Math.ceil(r[3]) - h, 1);
    this.current.startNewPathAndClipBox([0, 0, l, c]);
    let d = "groupAt" + this.groupLevel;
    e.smask && (d += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(d, l, c), A = p.context;
    A.translate(-o, -h), A.transform(...n);
    let w = new Path2D();
    const [y, S, v, C] = e.bbox;
    if (w.rect(y, S, v - y, C - S), e.matrix) {
      const E = new Path2D();
      E.addPath(w, new DOMMatrix(e.matrix)), w = E;
    }
    A.clip(w), e.smask && this.smaskStack.push({
      canvas: p.canvas,
      context: A,
      offsetX: o,
      offsetY: h,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (s.setTransform(1, 0, 0, 1, 0, 0), s.translate(o, h), s.save()), Yh(s, A), this.ctx = A, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]), this.groupStack.push(s), this.groupLevel++;
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
      const r = Pt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...r);
      const a = ao.slice();
      R.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], r, a), this.ctx.drawImage(s.canvas, 0, 0), this.ctx.restore(), this.compose(a);
    }
  }
  beginAnnotation(t, e, s, n, r, a) {
    if (b(this, Ks, ug).call(this), Zd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const o = s[2] - s[0], h = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= s[0], n[5] -= s[1], s = s.slice(), s[0] = s[1] = 0, s[2] = o, s[3] = h, R.singularValueDecompose2dScale(Pt(this.ctx), cs);
        const {
          viewportScale: l
        } = this, c = Math.ceil(o * this.outputScaleX * l), d = Math.ceil(h * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(c, d);
        const {
          canvas: p,
          context: A
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = A, this.ctx.save(), this.ctx.setTransform(cs[0], 0, 0, -cs[1], 0, h * cs[1]), Zd(this.ctx);
      } else {
        Zd(this.ctx), this.endPath(t);
        const l = new Path2D();
        l.rect(s[0], s[1], o, h), this.ctx.clip(l);
      }
    }
    this.current = new Ju(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...n), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), b(this, Ks, fg).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const n = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, r.offsetX, r.offsetY), this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), n.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, n = 0, r = 0, a, o) {
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const h = this.ctx;
    h.save();
    const l = Pt(h);
    h.transform(s, n, r, a, 0, 0);
    const c = this._createMaskCanvas(t, e);
    h.setTransform(1, 0, 0, 1, c.offsetX - l[4], c.offsetY - l[5]), this.dependencyTracker?.resetBBox(t);
    for (let d = 0, p = o.length; d < p; d += 2) {
      const A = R.transform(l, [s, n, r, a, o[d], o[d + 1]]);
      h.drawImage(c.canvas, A[4], A[5]), this.dependencyTracker?.recordBBox(t, this.ctx, A[4], A[4] + c.canvas.width, A[5], A[5] + c.canvas.height);
    }
    h.restore(), this.compose(), this.dependencyTracker?.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx, n = this.current.fillColor, r = this.current.patternFill;
    this.dependencyTracker?.resetBBox(t).recordDependencies(t, gs.transformAndFill);
    for (const a of e) {
      const {
        data: o,
        width: h,
        height: l,
        transform: c
      } = a, d = this.cachedCanvases.getCanvas("maskCanvas", h, l), p = d.context;
      p.save();
      const A = this.getObject(t, o, a);
      oy(p, A), p.globalCompositeOperation = "source-in", p.fillStyle = r ? n.getPattern(p, this, qs(s), ge.FILL, t) : n, p.fillRect(0, 0, h, l), p.restore(), s.save(), s.transform(...c), s.scale(1, -1), Jd(s, d.canvas, 0, 0, h, l, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t, s, 0, h, 0, l), s.restore();
    }
    this.compose(), this.dependencyTracker?.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, e);
    if (!s) {
      V("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, n, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      V("Dependent image isn't ready yet");
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
      return t.bitmap;
    const {
      bitmap: e,
      width: s,
      height: n
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, n), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
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
    let o;
    if (e.bitmap)
      o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", s, n).context;
      ay(c, e), o = this.applyTransferMapsToCanvas(c);
    }
    const h = this._scaleImage(o, qs(r));
    r.imageSmoothingEnabled = hy(Pt(r), e.interpolate), this.dependencyTracker?.resetBBox(t).recordBBox(t, r, 0, s, -n, 0).recordDependencies(t, gs.imageXObject).recordOperation(t), Jd(r, h.img, 0, 0, h.paintWidth, h.paintHeight, 0, -n, s, n), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    if (!this.contentVisible)
      return;
    const n = this.ctx;
    let r;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const a = e.width, o = e.height, l = this.cachedCanvases.getCanvas("inlineImage", a, o).context;
      ay(l, e), r = this.applyTransferMapsToCanvas(l);
    }
    this.dependencyTracker?.resetBBox(t);
    for (const a of s)
      n.save(), n.transform(...a.transform), n.scale(1, -1), Jd(n, r, a.x, a.y, a.w, a.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t, n, 0, 1, -1, 0), n.restore();
    this.dependencyTracker?.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    this.contentVisible && (this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, gs.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
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
    this.pendingClip ? (n || (this.pendingClip === ly ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : this.dependencyTracker?.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Pt(this.ctx);
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
    e && s.save(), s.scale(r, a), ap.a = 1 / r, ap.d = 1 / a;
    const h = new Path2D();
    if (h.addPath(t, ap), o.length > 0) {
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
Ks = new WeakSet(), ug = /* @__PURE__ */ f(function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, "#restoreInitialState"), fg = /* @__PURE__ */ f(function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, "#drawFilter"), pg = /* @__PURE__ */ f(function(t, e, s) {
  const n = new Path2D();
  return n.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), n;
}, "#getScaledPath"), f(Pf, "CanvasGraphics");
let ho = Pf;
for (const g in Ml)
  ho.prototype[g] !== void 0 && (ho.prototype[Ml[g]] = ho.prototype[g]);
var Fc, Bc;
const Tl = class Tl {
  static get workerPort() {
    return i(this, Fc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    u(this, Fc, t);
  }
  static get workerSrc() {
    return i(this, Bc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    u(this, Bc, t);
  }
};
Fc = new WeakMap(), Bc = new WeakMap(), f(Tl, "GlobalWorkerOptions"), m(Tl, Fc, null), m(Tl, Bc, "");
let $h = Tl;
var Xo, Uc;
const Bb = class Bb {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, Xo);
    m(this, Uc);
    u(this, Xo, t), u(this, Uc, e);
  }
  getRaw() {
    return i(this, Uc);
  }
  get(t) {
    return i(this, Xo).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return i(this, Xo).entries();
  }
};
Xo = new WeakMap(), Uc = new WeakMap(), f(Bb, "Metadata");
let gg = Bb;
const eo = Symbol("INTERNAL");
var Hc, $c, zc, Yo;
const Ub = class Ub {
  constructor(t, {
    name: e,
    intent: s,
    usage: n,
    rbGroups: r
  }) {
    m(this, Hc, !1);
    m(this, $c, !1);
    m(this, zc, !1);
    m(this, Yo, !0);
    u(this, Hc, !!(t & ls.DISPLAY)), u(this, $c, !!(t & ls.PRINT)), this.name = e, this.intent = s, this.usage = n, this.rbGroups = r;
  }
  get visible() {
    if (i(this, zc))
      return i(this, Yo);
    if (!i(this, Yo))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return i(this, Hc) ? e?.viewState !== "OFF" : i(this, $c) ? t?.printState !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== eo && nt("Internal method `_setVisible` called."), u(this, zc, s), u(this, Yo, e);
  }
};
Hc = new WeakMap(), $c = new WeakMap(), zc = new WeakMap(), Yo = new WeakMap(), f(Ub, "OptionalContentGroup");
let mg = Ub;
var Jn, mt, Ko, qo, jc, Ag;
const Hb = class Hb {
  constructor(t, e = ls.DISPLAY) {
    m(this, jc);
    m(this, Jn, null);
    m(this, mt, /* @__PURE__ */ new Map());
    m(this, Ko, null);
    m(this, qo, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, u(this, qo, t.order);
      for (const s of t.groups)
        i(this, mt).set(s.id, new mg(e, s));
      if (t.baseState === "OFF")
        for (const s of i(this, mt).values())
          s._setVisible(eo, !1);
      for (const s of t.on)
        i(this, mt).get(s)._setVisible(eo, !0);
      for (const s of t.off)
        i(this, mt).get(s)._setVisible(eo, !1);
      u(this, Ko, this.getHash());
    }
  }
  isVisible(t) {
    if (i(this, mt).size === 0)
      return !0;
    if (!t)
      return Yf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return i(this, mt).has(t.id) ? i(this, mt).get(t.id).visible : (V(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, jc, Ag).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!i(this, mt).has(e))
            return V(`Optional content group not found: ${e}`), !0;
          if (i(this, mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!i(this, mt).has(e))
            return V(`Optional content group not found: ${e}`), !0;
          if (!i(this, mt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!i(this, mt).has(e))
            return V(`Optional content group not found: ${e}`), !0;
          if (!i(this, mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!i(this, mt).has(e))
            return V(`Optional content group not found: ${e}`), !0;
          if (i(this, mt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return V(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return V(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    const n = i(this, mt).get(t);
    if (!n) {
      V(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && n.rbGroups.length)
      for (const r of n.rbGroups)
        for (const a of r)
          a !== t && i(this, mt).get(a)?._setVisible(eo, !1, !0);
    n._setVisible(eo, !!e, !0), u(this, Jn, null);
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
      const r = i(this, mt).get(n);
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
    u(this, Jn, null);
  }
  get hasInitialVisibility() {
    return i(this, Ko) === null || this.getHash() === i(this, Ko);
  }
  getOrder() {
    return i(this, mt).size ? i(this, qo) ? i(this, qo).slice() : [...i(this, mt).keys()] : null;
  }
  getGroup(t) {
    return i(this, mt).get(t) || null;
  }
  getHash() {
    if (i(this, Jn) !== null)
      return i(this, Jn);
    const t = new Gu();
    for (const [e, s] of i(this, mt))
      t.update(`${e}:${s.visible}`);
    return u(this, Jn, t.hexdigest());
  }
  [Symbol.iterator]() {
    return i(this, mt).entries();
  }
};
Jn = new WeakMap(), mt = new WeakMap(), Ko = new WeakMap(), qo = new WeakMap(), jc = new WeakSet(), Ag = /* @__PURE__ */ f(function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let n = 1; n < e; n++) {
    const r = t[n];
    let a;
    if (Array.isArray(r))
      a = b(this, jc, Ag).call(this, r);
    else if (i(this, mt).has(r))
      a = i(this, mt).get(r).visible;
    else
      return V(`Optional content group not found: ${r}`), !0;
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
}, "#evaluateVisibilityExpression"), f(Hb, "OptionalContentConfig");
let bg = Hb;
var Gc, Vc;
const $b = class $b {
  constructor(t, e, s) {
    m(this, Gc, null);
    m(this, Vc, null);
    M(this, "_fullReader", null);
    M(this, "_rangeReaders", /* @__PURE__ */ new Set());
    M(this, "_source", null);
    this._source = t, u(this, Gc, e), u(this, Vc, s);
  }
  get _progressiveDataLength() {
    return this._fullReader?._loaded ?? 0;
  }
  getFullReader() {
    return it(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new (i(this, Gc))(this);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new (i(this, Vc))(this, t, e);
    return this._rangeReaders.add(s), s;
  }
  cancelAllRequests(t) {
    this._fullReader?.cancel(t);
    for (const e of new Set(this._rangeReaders))
      e.cancel(t);
  }
};
Gc = new WeakMap(), Vc = new WeakMap(), f($b, "BasePDFStream");
let Bl = $b;
const zb = class zb {
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
    nt("Abstract method `read` called");
  }
  cancel(t) {
    nt("Abstract method `cancel` called");
  }
};
f(zb, "BasePDFStreamReader");
let Ul = zb;
const jb = class jb {
  _stream = null;
  constructor(t, e, s) {
    this._stream = t;
  }
  async read() {
    nt("Abstract method `read` called");
  }
  cancel(t) {
    nt("Abstract method `cancel` called");
  }
};
f(jb, "BasePDFStreamRangeReader");
let Hl = jb;
function cy(g) {
  return g instanceof Uint8Array && g.byteLength === g.buffer.byteLength ? g.buffer : new Uint8Array(g).buffer;
}
f(cy, "getArrayBuffer");
function Qf() {
  for (const g of this._requests)
    g.resolve({
      value: void 0,
      done: !0
    });
  this._requests.length = 0;
}
f(Qf, "endRequests");
var Wc, wg;
const Gb = class Gb extends Bl {
  constructor(e) {
    super(e, vg, Sg);
    m(this, Wc);
    M(this, "_progressiveDone", !1);
    M(this, "_queuedChunks", []);
    const {
      pdfDataRangeTransport: s
    } = e, {
      initialData: n,
      progressiveDone: r
    } = s;
    if (n?.length > 0) {
      const a = cy(n);
      this._queuedChunks.push(a);
    }
    this._progressiveDone = r, s.addRangeListener((a, o) => {
      b(this, Wc, wg).call(this, a, o);
    }), s.addProgressiveReadListener((a) => {
      b(this, Wc, wg).call(this, void 0, a);
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
Wc = new WeakSet(), wg = /* @__PURE__ */ f(function(e, s) {
  const n = cy(s);
  if (e === void 0)
    this._fullReader ? this._fullReader._enqueue(n) : this._queuedChunks.push(n);
  else {
    const r = this._rangeReaders.keys().find((a) => a._begin === e);
    it(r, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), r._enqueue(n);
  }
}, "#onReceiveData"), f(Gb, "PDFDataTransportStream");
let yg = Gb;
var Xc;
const Vb = class Vb extends Ul {
  constructor(e) {
    super(e);
    m(this, Xc, Qf.bind(this));
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
    this._done = e._progressiveDone, this._contentLength = a, this._isStreamingSupported = !r, this._isRangeSupported = !n, Vm(o) && (this._filename = o), this._headersCapability.resolve();
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
    this._done = !0, i(this, Xc).call(this);
  }
  progressiveDone() {
    this._done ||= !0, this._queuedChunks.length === 0 && i(this, Xc).call(this);
  }
};
Xc = new WeakMap(), f(Vb, "PDFDataTransportStreamReader");
let vg = Vb;
var Yc;
const Wb = class Wb extends Hl {
  constructor(e, s, n) {
    super(e, s, n);
    m(this, Yc, Qf.bind(this));
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
    }), i(this, Yc).call(this)), this._done = !0, this.onDone?.());
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
    this._done = !0, i(this, Yc).call(this), this.onDone?.();
  }
};
Yc = new WeakMap(), f(Wb, "PDFDataTransportStreamRangeReader");
let Sg = Wb;
function J0(g) {
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
        }), A = Kf(d);
        d = p.decode(A), t = !1;
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
    const A = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = A.exec(c)) !== null; ) {
      let [, y, S, v] = p;
      if (y = parseInt(y, 10), y in d) {
        if (y === 0)
          break;
        continue;
      }
      d[y] = [S, v];
    }
    const w = [];
    for (let y = 0; y < d.length && y in d; ++y) {
      let [S, v] = d[y];
      v = o(v), S && (v = unescape(v), y === 0 && (v = h(v))), w.push(v);
    }
    return w.join("");
  }
  f(a, "rfc2231getparam");
  function o(c) {
    if (c.startsWith('"')) {
      const d = c.slice(1).split('\\"');
      for (let p = 0; p < d.length; ++p) {
        const A = d[p].indexOf('"');
        A !== -1 && (d[p] = d[p].slice(0, A), d.length = p + 1), d[p] = d[p].replaceAll(/\\(.)/g, "$1");
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
    const p = c.slice(0, d), w = c.slice(d + 1).replace(/^[^']*'/, "");
    return n(p, w);
  }
  f(h, "rfc5987decode");
  function l(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(d, p, A, w) {
      if (A === "q" || A === "Q")
        return w = w.replaceAll("_", " "), w = w.replaceAll(/=([0-9a-fA-F]{2})/g, function(y, S) {
          return String.fromCharCode(parseInt(S, 16));
        }), n(p, w);
      try {
        w = atob(w);
      } catch {
      }
      return n(p, w);
    });
  }
  return f(l, "rfc2047decode"), "";
}
f(J0, "getFilenameFromContentDispositionHeader");
function nw(g, t) {
  const e = new Headers();
  if (!g || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const n = t[s];
    n !== void 0 && e.append(s, n);
  }
  return e;
}
f(nw, "createHeaders");
function Jf(g) {
  return URL.parse(g)?.origin ?? null;
}
f(Jf, "getResponseOrigin");
function rw({
  responseHeaders: g,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const n = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(g.get("Content-Length"), 10);
  return !Number.isInteger(r) || (n.suggestedLength = r, r <= 2 * e) || s || !t || g.get("Accept-Ranges") !== "bytes" || (g.get("Content-Encoding") || "identity") !== "identity" || (n.allowRangeRequests = !0), n;
}
f(rw, "validateRangeRequestCapabilities");
function aw(g) {
  const t = g.get("Content-Disposition");
  if (t) {
    let e = J0(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Vm(e))
      return e;
  }
  return null;
}
f(aw, "extractFilenameFromHeader");
function Wm(g, t) {
  return new Hh(`Unexpected server response (${g}) while retrieving PDF "${t.href}".`, g, g === 404 || g === 0 && t.protocol === "file:");
}
f(Wm, "createResponseError");
function ow(g, t) {
  if (g !== t)
    throw new Error(`Expected range response-origin "${g}" to match "${t}".`);
}
f(ow, "ensureResponseOrigin");
function hw(g, t, e, s) {
  return fetch(g, {
    method: "GET",
    headers: t,
    signal: s.signal,
    mode: "cors",
    credentials: e ? "include" : "same-origin",
    redirect: "follow"
  });
}
f(hw, "fetchUrl");
function lw(g, t) {
  if (g !== 200 && g !== 206)
    throw Wm(g, t);
}
f(lw, "ensureResponseStatus");
function cw(g) {
  if (g instanceof Uint8Array)
    return g.buffer;
  if (g instanceof ArrayBuffer)
    return g;
  throw new Error(`getArrayBuffer - unexpected data: ${g}`);
}
f(cw, "fetch_stream_getArrayBuffer");
const Xb = class Xb extends Bl {
  _responseOrigin = null;
  constructor(t) {
    super(t, Cg, Tg);
    const {
      httpHeaders: e,
      url: s
    } = t;
    it(/https?:/.test(s.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = nw(!0, e);
  }
};
f(Xb, "PDFFetchStream");
let Eg = Xb;
const Yb = class Yb extends Ul {
  _abortController = new AbortController();
  _reader = null;
  constructor(t) {
    super(t);
    const {
      disableRange: e,
      disableStream: s,
      length: n,
      rangeChunkSize: r,
      url: a,
      withCredentials: o
    } = t._source;
    this._contentLength = n, this._isStreamingSupported = !s, this._isRangeSupported = !e;
    const h = new Headers(t.headers);
    hw(a, h, o, this._abortController).then((l) => {
      t._responseOrigin = Jf(l.url), lw(l.status, a), this._reader = l.body.getReader();
      const c = l.headers, {
        allowRangeRequests: d,
        suggestedLength: p
      } = rw({
        responseHeaders: c,
        isHttp: !0,
        rangeChunkSize: r,
        disableRange: e
      });
      this._isRangeSupported = d, this._contentLength = p || this._contentLength, this._filename = aw(c), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new gn("Streaming is disabled.")), this._headersCapability.resolve();
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
      value: cw(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
f(Yb, "PDFFetchStreamReader");
let Cg = Yb;
const Kb = class Kb extends Hl {
  _abortController = new AbortController();
  _readCapability = Promise.withResolvers();
  _reader = null;
  constructor(t, e, s) {
    super(t, e, s);
    const {
      url: n,
      withCredentials: r
    } = t._source, a = new Headers(t.headers);
    a.append("Range", `bytes=${e}-${s - 1}`), hw(n, a, r, this._abortController).then((o) => {
      const h = Jf(o.url);
      ow(h, t._responseOrigin), lw(o.status, n), this._reader = o.body.getReader(), this._readCapability.resolve();
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
      value: cw(t),
      done: !1
    };
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
f(Kb, "PDFFetchStreamRangeReader");
let Tg = Kb;
const op = 200, dy = 206;
function Z0(g) {
  return typeof g != "string" ? g : Kf(g).buffer;
}
f(Z0, "network_getArrayBuffer");
var pi, jh, dw, uw;
const qb = class qb extends Bl {
  constructor(e) {
    super(e, _g, kg);
    m(this, jh);
    m(this, pi, /* @__PURE__ */ new WeakMap());
    M(this, "_responseOrigin", null);
    const {
      httpHeaders: s,
      url: n
    } = e;
    this.url = n, this.isHttp = /https?:/.test(n.protocol), this.headers = nw(this.isHttp, s);
  }
  _request(e) {
    const s = new XMLHttpRequest(), n = {
      validateStatus: null,
      onHeadersReceived: e.onHeadersReceived,
      onDone: e.onDone,
      onError: e.onError,
      onProgress: e.onProgress
    };
    i(this, pi).set(s, n), s.open("GET", this.url), s.withCredentials = this._source.withCredentials;
    for (const [r, a] of this.headers)
      s.setRequestHeader(r, a);
    return this.isHttp && "begin" in e && "end" in e ? (s.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), n.validateStatus = (r) => r === dy || r === op) : n.validateStatus = (r) => r === op, s.responseType = "arraybuffer", it(e.onError, "Expected `onError` callback to be provided."), s.onerror = () => e.onError(s.status), s.onreadystatechange = b(this, jh, uw).bind(this, s), s.onprogress = b(this, jh, dw).bind(this, s), s.send(null), s;
  }
  _abortRequest(e) {
    i(this, pi).has(e) && (i(this, pi).delete(e), e.abort());
  }
  getRangeReader(e, s) {
    const n = super.getRangeReader(e, s);
    return n && (n.onClosed = () => this._rangeReaders.delete(n)), n;
  }
};
pi = new WeakMap(), jh = new WeakSet(), dw = /* @__PURE__ */ f(function(e, s) {
  i(this, pi).get(e)?.onProgress?.(s);
}, "#onProgress"), uw = /* @__PURE__ */ f(function(e, s) {
  const n = i(this, pi).get(e);
  if (!n || (e.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), e.readyState !== 4) || !i(this, pi).has(e))
    return;
  if (i(this, pi).delete(e), e.status === 0 && this.isHttp) {
    n.onError(e.status);
    return;
  }
  const r = e.status || op;
  if (!n.validateStatus(r)) {
    n.onError(e.status);
    return;
  }
  const a = Z0(e.response);
  if (r === dy) {
    const o = e.getResponseHeader("Content-Range");
    /bytes (\d+)-(\d+)\/(\d+)/.test(o) ? n.onDone(a) : (V('Missing or invalid "Content-Range" header.'), n.onError(0));
  } else a ? n.onDone(a) : n.onError(e.status);
}, "#onStateChange"), f(qb, "PDFNetworkStream");
let xg = qb;
var Kc, Ti, fw, pw, gw, mw;
const Qb = class Qb extends Ul {
  constructor(e) {
    super(e);
    m(this, Ti);
    m(this, Kc, Qf.bind(this));
    M(this, "_cachedChunks", []);
    M(this, "_done", !1);
    M(this, "_requests", []);
    M(this, "_storedError", null);
    const {
      length: s
    } = e._source;
    this._contentLength = s, this._fullRequestXhr = e._request({
      onHeadersReceived: b(this, Ti, fw).bind(this),
      onDone: b(this, Ti, pw).bind(this),
      onError: b(this, Ti, gw).bind(this),
      onProgress: b(this, Ti, mw).bind(this)
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
    this._done = !0, this._headersCapability.reject(e), i(this, Kc).call(this), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
  }
};
Kc = new WeakMap(), Ti = new WeakSet(), fw = /* @__PURE__ */ f(function() {
  const e = this._stream, {
    disableRange: s,
    rangeChunkSize: n
  } = e._source, r = this._fullRequestXhr;
  e._responseOrigin = Jf(r.responseURL);
  const a = r.getAllResponseHeaders(), o = new Headers(a ? a.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((c) => {
    const [d, ...p] = c.split(": ");
    return [d, p.join(": ")];
  }) : []), {
    allowRangeRequests: h,
    suggestedLength: l
  } = rw({
    responseHeaders: o,
    isHttp: e.isHttp,
    rangeChunkSize: n,
    disableRange: s
  });
  h && (this._isRangeSupported = !0), this._contentLength = l || this._contentLength, this._filename = aw(o), this._isRangeSupported && e._abortRequest(r), this._headersCapability.resolve();
}, "#onHeadersReceived"), pw = /* @__PURE__ */ f(function(e) {
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._cachedChunks.push(e), this._done = !0, this._cachedChunks.length === 0 && i(this, Kc).call(this);
}, "#onDone"), gw = /* @__PURE__ */ f(function(e) {
  this._storedError = Wm(e, this._stream.url), this._headersCapability.reject(this._storedError);
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._cachedChunks.length = 0;
}, "#onError"), mw = /* @__PURE__ */ f(function(e) {
  this.onProgress?.({
    loaded: e.loaded,
    total: e.lengthComputable ? e.total : this._contentLength
  });
}, "#onProgress"), f(Qb, "PDFNetworkStreamReader");
let _g = Qb;
var qc, yn, bw, Aw, Mg;
const Jb = class Jb extends Hl {
  constructor(e, s, n) {
    super(e, s, n);
    m(this, yn);
    m(this, qc, Qf.bind(this));
    M(this, "onClosed", null);
    M(this, "_done", !1);
    M(this, "_queuedChunk", null);
    M(this, "_requests", []);
    M(this, "_storedError", null);
    this._requestXhr = e._request({
      begin: s,
      end: n,
      onHeadersReceived: b(this, yn, bw).bind(this),
      onDone: b(this, yn, Aw).bind(this),
      onError: b(this, yn, Mg).bind(this),
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
    this._done = !0, i(this, qc).call(this), this._stream._abortRequest(this._requestXhr), this.onClosed?.();
  }
};
qc = new WeakMap(), yn = new WeakSet(), bw = /* @__PURE__ */ f(function() {
  const e = Jf(this._requestXhr?.responseURL);
  try {
    ow(e, this._stream._responseOrigin);
  } catch (s) {
    this._storedError = s, b(this, yn, Mg).call(this, 0);
  }
}, "#onHeadersReceived"), Aw = /* @__PURE__ */ f(function(e) {
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._queuedChunk = e, this._done = !0, i(this, qc).call(this), this.onClosed?.();
}, "#onDone"), Mg = /* @__PURE__ */ f(function(e) {
  this._storedError ??= Wm(e, this._stream.url);
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._queuedChunk = null;
}, "#onError"), f(Jb, "PDFNetworkStreamRangeReader");
let kg = Jb;
const cl = Symbol("INITIAL_DATA"), tv = /* @__PURE__ */ f(() => ({
  ...Promise.withResolvers(),
  data: cl
}), "dataObj");
var Hs, Qc, Pg;
const Zb = class Zb {
  constructor() {
    m(this, Qc);
    m(this, Hs, /* @__PURE__ */ new Map());
  }
  get(t, e = null) {
    if (e) {
      const n = b(this, Qc, Pg).call(this, t);
      return n.promise.then(() => e(n.data)), null;
    }
    const s = i(this, Hs).get(t);
    if (!s || s.data === cl)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = i(this, Hs).get(t);
    return !!e && e.data !== cl;
  }
  delete(t) {
    const e = i(this, Hs).get(t);
    return !e || e.data === cl ? !1 : (i(this, Hs).delete(t), !0);
  }
  resolve(t, e = null) {
    const s = b(this, Qc, Pg).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    for (const {
      data: t
    } of i(this, Hs).values())
      t?.bitmap?.close();
    i(this, Hs).clear();
  }
  *[Symbol.iterator]() {
    for (const [t, {
      data: e
    }] of i(this, Hs))
      e !== cl && (yield [t, e]);
  }
};
Hs = new WeakMap(), Qc = new WeakSet(), Pg = /* @__PURE__ */ f(function(t) {
  return i(this, Hs).getOrInsertComputed(t, tv);
}, "#ensureObj"), f(Zb, "PDFObjects");
let Zu = Zb;
const ev = 1e5, uy = 30;
var Zn, Ue, Jc, Zc, oa, Yi, td, ed, ha, sd, Qo, tr, Jo, id, Zo, la, nd, rd, th, ca, ad, eh, sh, wn, yw, ww, Ig, fs, gu, Lg, vw, Sw;
const te = class te {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    m(this, wn);
    m(this, Zn, Promise.withResolvers());
    m(this, Ue, null);
    m(this, Jc, !1);
    m(this, Zc, !!globalThis.FontInspector?.enabled);
    m(this, oa, null);
    m(this, Yi, null);
    m(this, td, 0);
    m(this, ed, 0);
    m(this, ha, null);
    m(this, sd, null);
    m(this, Qo, 0);
    m(this, tr, 0);
    m(this, Jo, /* @__PURE__ */ Object.create(null));
    m(this, id, []);
    m(this, Zo, null);
    m(this, la, []);
    m(this, nd, /* @__PURE__ */ new WeakMap());
    m(this, rd, null);
    var h;
    if (t instanceof ReadableStream)
      u(this, Zo, t);
    else if (typeof t == "object")
      u(this, Zo, new ReadableStream({
        start(l) {
          l.enqueue(t), l.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    u(this, Ue, u(this, sd, e)), u(this, tr, s.scale * mn.pixelRatio), u(this, Qo, s.rotation), u(this, Yi, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: n,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = s.rawDims;
    u(this, rd, [1, 0, 0, -1, -a, o + r]), u(this, ed, n), u(this, td, r), b(h = te, fs, vw).call(h), e.style.setProperty("--min-font-size", i(te, eh)), ja(e, s), i(this, Zn).promise.finally(() => {
      i(te, sh).delete(this), u(this, Yi, null), u(this, Jo, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = Ht.platform;
    return z(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = /* @__PURE__ */ f(() => {
      i(this, ha).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          i(this, Zn).resolve();
          return;
        }
        i(this, oa) ?? u(this, oa, e.lang), Object.assign(i(this, Jo), e.styles), b(this, wn, yw).call(this, e.items), t();
      }, i(this, Zn).reject);
    }, "pump");
    return u(this, ha, i(this, Zo).getReader()), i(te, sh).add(this), t(), i(this, Zn).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * mn.pixelRatio, n = t.rotation;
    if (n !== i(this, Qo) && (e?.(), u(this, Qo, n), ja(i(this, sd), {
      rotation: n
    })), s !== i(this, tr)) {
      e?.(), u(this, tr, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = te, fs, gu).call(r, i(this, oa))
      };
      for (const o of i(this, la))
        a.properties = i(this, nd).get(o), a.div = o, b(this, wn, Ig).call(this, a);
    }
  }
  cancel() {
    const t = new gn("TextLayer task cancelled.");
    i(this, ha)?.cancel(t).catch(() => {
    }), u(this, ha, null), i(this, Zn).reject(t);
  }
  get textDivs() {
    return i(this, la);
  }
  get textContentItemsStr() {
    return i(this, id);
  }
  static cleanup() {
    if (!(i(this, sh).size > 0)) {
      i(this, th).clear();
      for (const {
        canvas: t
      } of i(this, ca).values())
        t.remove();
      i(this, ca).clear();
    }
  }
};
Zn = new WeakMap(), Ue = new WeakMap(), Jc = new WeakMap(), Zc = new WeakMap(), oa = new WeakMap(), Yi = new WeakMap(), td = new WeakMap(), ed = new WeakMap(), ha = new WeakMap(), sd = new WeakMap(), Qo = new WeakMap(), tr = new WeakMap(), Jo = new WeakMap(), id = new WeakMap(), Zo = new WeakMap(), la = new WeakMap(), nd = new WeakMap(), rd = new WeakMap(), th = new WeakMap(), ca = new WeakMap(), ad = new WeakMap(), eh = new WeakMap(), sh = new WeakMap(), wn = new WeakSet(), yw = /* @__PURE__ */ f(function(t) {
  var n;
  if (i(this, Jc))
    return;
  i(this, Yi).ctx ??= b(n = te, fs, gu).call(n, i(this, oa));
  const e = i(this, la), s = i(this, id);
  for (const r of t) {
    if (e.length > ev) {
      V("Ignoring additional textDivs for performance reasons."), u(this, Jc, !0);
      return;
    }
    if (r.str === void 0) {
      if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
        const a = i(this, Ue);
        u(this, Ue, document.createElement("span")), i(this, Ue).classList.add("markedContent"), r.id && i(this, Ue).setAttribute("id", `${r.id}`), r.tag === "Artifact" && (i(this, Ue).ariaHidden = !0), a.append(i(this, Ue));
      } else r.type === "endMarkedContent" && u(this, Ue, i(this, Ue).parentNode);
      continue;
    }
    s.push(r.str), b(this, wn, ww).call(this, r);
  }
}, "#processItems"), ww = /* @__PURE__ */ f(function(t) {
  var w;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  i(this, la).push(e);
  const n = R.transform(i(this, rd), t.transform);
  let r = Math.atan2(n[1], n[0]);
  const a = i(this, Jo)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = i(this, Zc) && a.fontSubstitution || a.fontFamily;
  o = te.fontFamilyMap.get(o) || o;
  const h = Math.hypot(n[2], n[3]), l = h * b(w = te, fs, Sw).call(w, o, a, i(this, oa));
  let c, d;
  r === 0 ? (c = n[4], d = n[5] - l) : (c = n[4] + l * Math.sin(r), d = n[5] - l * Math.cos(r));
  const p = e.style;
  p.left = `${(100 * c / i(this, ed)).toFixed(2)}%`, p.top = `${(100 * d / i(this, td)).toFixed(2)}%`, p.setProperty("--font-height", `${h.toFixed(2)}px`), p.fontFamily = o, s.fontSize = h, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, i(this, Zc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let A = !1;
  if (t.str.length > 1)
    A = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const y = Math.abs(t.transform[0]), S = Math.abs(t.transform[3]);
    y !== S && Math.max(y, S) / Math.min(y, S) > 1.5 && (A = !0);
  }
  if (A && (s.canvasWidth = a.vertical ? t.height : t.width), i(this, nd).set(e, s), i(this, Yi).div = e, i(this, Yi).properties = s, b(this, wn, Ig).call(this, i(this, Yi)), s.hasText && i(this, Ue).append(e), s.hasEOL) {
    const y = document.createElement("br");
    y.setAttribute("role", "presentation"), i(this, Ue).append(y);
  }
}, "#appendText"), Ig = /* @__PURE__ */ f(function(t) {
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
    b(a = te, fs, Lg).call(a, n, l * i(this, tr), o);
    const {
      width: c
    } = n.measureText(e.textContent);
    c > 0 && r.setProperty("--scale-x", h * i(this, tr) / c);
  }
  s.angle !== 0 && r.setProperty("--rotate", `${s.angle}deg`);
}, "#layout"), fs = new WeakSet(), gu = /* @__PURE__ */ f(function(t = null) {
  let e = i(this, ca).get(t ||= "");
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), i(this, ca).set(t, e), i(this, ad).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, "#getCtx"), Lg = /* @__PURE__ */ f(function(t, e, s) {
  const n = i(this, ad).get(t);
  e === n.size && s === n.family || (t.font = `${e}px ${s}`, n.size = e, n.family = s);
}, "#ensureCtxFont"), vw = /* @__PURE__ */ f(function() {
  if (i(this, eh) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), u(this, eh, t.getBoundingClientRect().height), t.remove();
}, "#ensureMinFontSizeComputed"), Sw = /* @__PURE__ */ f(function(t, e, s) {
  const n = i(this, th).get(t);
  if (n)
    return n;
  const r = b(this, fs, gu).call(this, s);
  r.canvas.width = r.canvas.height = uy, b(this, fs, Lg).call(this, r, uy, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, h = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let l = 0.8;
  return o ? l = o / (o + h) : (Ht.platform.isFirefox && V("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), i(this, th).set(t, l), l;
}, "#getAscent"), m(te, fs), f(te, "TextLayer"), m(te, th, /* @__PURE__ */ new Map()), m(te, ca, /* @__PURE__ */ new Map()), m(te, ad, /* @__PURE__ */ new WeakMap()), m(te, eh, null), m(te, sh, /* @__PURE__ */ new Set());
let $l = te;
const sv = 100;
function iv(g = {}) {
  typeof g == "string" || g instanceof URL ? g = {
    url: g
  } : (g instanceof ArrayBuffer || ArrayBuffer.isView(g)) && (g = {
    data: g
  });
  const t = new Dg(), {
    docId: e
  } = t, s = g.url ? H0(g.url) : null, n = g.data ? $0(g.data) : null, r = g.httpHeaders || null, a = g.withCredentials === !0, o = g.password ?? null, h = g.range instanceof tf ? g.range : null, l = Number.isInteger(g.rangeChunkSize) && g.rangeChunkSize > 0 ? g.rangeChunkSize : 2 ** 16;
  let c = g.worker instanceof zl ? g.worker : null;
  const d = g.verbosity, p = typeof g.docBaseUrl == "string" && !qf(g.docBaseUrl) ? g.docBaseUrl : null, A = Yd(g.cMapUrl), w = g.cMapPacked !== !1, y = g.CMapReaderFactory || Yu, S = Yd(g.iccUrl), v = Yd(g.standardFontDataUrl), C = g.StandardFontDataFactory || Ku, E = Yd(g.wasmUrl), T = g.WasmFactory || qu, x = g.stopAtErrors !== !0, _ = Number.isInteger(g.maxImageSize) && g.maxImageSize > -1 ? g.maxImageSize : -1, k = g.isEvalSupported !== !1, P = typeof g.isOffscreenCanvasSupported == "boolean" ? g.isOffscreenCanvasSupported : !0, I = typeof g.isImageDecoderSupported == "boolean" ? g.isImageDecoderSupported : Ht.platform.isFirefox || !globalThis.chrome, N = Number.isInteger(g.canvasMaxAreaInBytes) ? g.canvasMaxAreaInBytes : -1, L = typeof g.disableFontFace == "boolean" ? g.disableFontFace : !1, st = g.fontExtraProperties === !0, J = g.enableXfa === !0, W = g.ownerDocument || globalThis.document, $t = g.disableRange === !0, U = g.disableStream === !0, H = g.disableAutoFetch === !0, rt = g.pdfBug === !0, Ge = g.CanvasFactory || Yp, _i = g.FilterFactory || Qp, zt = g.enableHWA === !0, Et = g.useWasm !== !1, Tt = g.pagesMapper || new Ap(), vn = h ? h.length : g.length ?? NaN, Gh = typeof g.useSystemFonts == "boolean" ? g.useSystemFonts : !L, Rs = typeof g.useWorkerFetch == "boolean" ? g.useWorkerFetch : !!(y === Yu && C === Ku && T === qu && A && v && E && Qh(A, document.baseURI) && Qh(v, document.baseURI) && Qh(E, document.baseURI)), jt = null;
  C0(d);
  const Vh = {
    canvasFactory: new Ge({
      ownerDocument: W,
      enableHWA: zt
    }),
    filterFactory: new _i({
      docId: e,
      ownerDocument: W
    }),
    cMapReaderFactory: Rs ? null : new y({
      baseUrl: A,
      isCompressed: w
    }),
    standardFontDataFactory: Rs ? null : new C({
      baseUrl: v
    }),
    wasmFactory: Rs ? null : new T({
      baseUrl: E
    })
  };
  c || (c = zl.create({
    verbosity: d,
    port: $h.workerPort
  }), t._worker = c);
  const Wh = {
    docId: e,
    apiVersion: "5.5.207",
    data: n,
    password: o,
    disableAutoFetch: H,
    rangeChunkSize: l,
    length: vn,
    docBaseUrl: p,
    enableXfa: J,
    evaluatorOptions: {
      maxImageSize: _,
      disableFontFace: L,
      ignoreErrors: x,
      isEvalSupported: k,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: I,
      canvasMaxAreaInBytes: N,
      fontExtraProperties: st,
      useSystemFonts: Gh,
      useWasm: Et,
      useWorkerFetch: Rs,
      cMapUrl: A,
      iccUrl: S,
      standardFontDataUrl: v,
      wasmUrl: E
    }
  }, A0 = {
    ownerDocument: W,
    pdfBug: rt,
    styleElement: jt,
    enableHWA: zt,
    loadingParams: {
      disableAutoFetch: H,
      enableXfa: J
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const y0 = c.messageHandler.sendWithPromise("GetDocRequest", Wh, n ? [n.buffer] : null);
    let Zf;
    if (h)
      Zf = new yg({
        pdfDataRangeTransport: h,
        disableRange: $t,
        disableStream: U
      });
    else if (!n) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      const tp = Qh(s) ? Eg : xg;
      Zf = new tp({
        url: s,
        length: vn,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: l,
        disableRange: $t,
        disableStream: U
      });
    }
    return y0.then((tp) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const GA = new Ir(e, tp, c.port), w0 = new Og(GA, t, Zf, A0, Vh, Tt);
      t._transport = w0, GA.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
f(iv, "getDocument");
var If;
const xl = class xl {
  _capability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${qt(xl, If)._++}`;
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
If = new WeakMap(), f(xl, "PDFDocumentLoadingTask"), m(xl, If, 0);
let Dg = xl;
var ih, od, hd, ld;
const tA = class tA {
  constructor(t, e, s = !1, n = null) {
    m(this, ih, Promise.withResolvers());
    m(this, od, []);
    m(this, hd, []);
    m(this, ld, []);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = n, Object.defineProperty(this, "onDataProgress", {
      value: /* @__PURE__ */ f(() => {
        Ay("`PDFDataRangeTransport.prototype.onDataProgress` - method was removed, since loading progress is now reported automatically through the `PDFDataTransportStream` class (and related code).");
      }, "value")
    });
  }
  addRangeListener(t) {
    i(this, ld).push(t);
  }
  addProgressiveReadListener(t) {
    i(this, hd).push(t);
  }
  addProgressiveDoneListener(t) {
    i(this, od).push(t);
  }
  onDataRange(t, e) {
    for (const s of i(this, ld))
      s(t, e);
  }
  onDataProgressiveRead(t) {
    i(this, ih).promise.then(() => {
      for (const e of i(this, hd))
        e(t);
    });
  }
  onDataProgressiveDone() {
    i(this, ih).promise.then(() => {
      for (const t of i(this, od))
        t();
    });
  }
  transportReady() {
    i(this, ih).resolve();
  }
  requestDataRange(t, e) {
    nt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
ih = new WeakMap(), od = new WeakMap(), hd = new WeakMap(), ld = new WeakMap(), f(tA, "PDFDataRangeTransport");
let tf = tA;
const eA = class eA {
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
    return z(this, "isPureXfa", !!this._transport._htmlForXfa);
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
f(eA, "PDFDocumentProxy");
let Rg = eA;
var Ki, nh, da, dl;
const sA = class sA {
  constructor(t, e, s, n, r = !1) {
    m(this, da);
    m(this, Ki, !1);
    m(this, nh, null);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = r ? new $u() : null, this._pdfBug = r, this.commonObjs = s.commonObjs, this.objs = new Zu(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null, u(this, nh, n);
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  set pageNumber(t) {
    this._pageIndex = t - 1;
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
    return new Ll({
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
    return z(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: s,
    intent: n = "display",
    annotationMode: r = xn.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: h = null,
    annotationCanvasMap: l = null,
    pageColors: c = null,
    printAnnotationStorage: d = null,
    isEditing: p = !1,
    recordOperations: A = !1,
    operationsFilter: w = null
  }) {
    this._stats?.time("Overall");
    const y = this._transport.getRenderingIntent(n, r, d, p), {
      renderingIntent: S,
      cacheKey: v
    } = y;
    u(this, Ki, !1), h ||= this._transport.getOptionalContentConfig(S);
    const C = this._intentStates.getOrInsertComputed(v, fp);
    C.streamReaderCancelTimeout && (clearTimeout(C.streamReaderCancelTimeout), C.streamReaderCancelTimeout = null);
    const E = !!(S & ls.PRINT);
    C.displayReadyCapability || (C.displayReadyCapability = Promise.withResolvers(), C.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(y));
    const T = !!(this._pdfBug && globalThis.StepperManager?.enabled), x = !this.recordedBBoxes && (A || T), _ = /* @__PURE__ */ f((I) => {
      if (C.renderTasks.delete(k), x) {
        const N = k.gfx?.dependencyTracker.take();
        N && (k.stepper && k.stepper.setOperatorBBoxes(N, k.gfx.dependencyTracker.takeDebugMetadata()), A && (this.recordedBBoxes = N));
      }
      E && u(this, Ki, !0), b(this, da, dl).call(this), I ? (k.capability.reject(I), this._abortOperatorList({
        intentState: C,
        reason: I instanceof Error ? I : new Error(I)
      })) : k.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, "complete"), k = new Bg({
      callback: _,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: x ? new ng(e, C.operatorList.length, T) : null,
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
      useRequestAnimationFrame: !E,
      pdfBug: this._pdfBug,
      pageColors: c,
      enableHWA: this._transport.enableHWA,
      operationsFilter: w
    });
    (C.renderTasks ||= /* @__PURE__ */ new Set()).add(k);
    const P = k.task;
    return Promise.all([C.displayReadyCapability.promise, h]).then(([I, N]) => {
      if (this.destroyed) {
        _();
        return;
      }
      if (this._stats?.time("Rendering"), !(N.renderingIntent & S))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      k.initializeGraphics({
        transparency: I,
        optionalContentConfig: N
      }), k.operatorListChanged();
    }).catch(_), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = xn.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: n = !1
  } = {}) {
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(h));
    }
    f(r, "operatorListChanged");
    const a = this._transport.getRenderingIntent(t, e, s, n, !0), o = this._intentStates.getOrInsertComputed(a.cacheKey, fp);
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
      pageId: i(this, nh).getPageId(this._pageIndex + 1) - 1,
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
      return this.getXfa().then((n) => Il.textContent(n));
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
    return this.objs.clear(), u(this, Ki, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    u(this, Ki, !0);
    const e = b(this, da, dl).call(this);
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
    t.lastChunk && b(this, da, dl).call(this);
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
      pageId: i(this, nh).getPageId(this._pageIndex + 1) - 1,
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
            b(this, da, dl).call(this);
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
        if (e instanceof Dl) {
          let n = sv;
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
      if (t.streamReader.cancel(new gn(e.message)).catch(() => {
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
Ki = new WeakMap(), nh = new WeakMap(), da = new WeakSet(), dl = /* @__PURE__ */ f(function() {
  if (!i(this, Ki) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), u(this, Ki, !1), !0;
}, "#tryCleanup"), f(sA, "PDFPageProxy");
let Ng = sA;
var er, $s, qi, ua, Lf, rh, fa, Pe, mu, Ew, Cw, ul, ah, bu;
const xt = class xt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = T0()
  } = {}) {
    m(this, Pe);
    m(this, er, Promise.withResolvers());
    m(this, $s, null);
    m(this, qi, null);
    m(this, ua, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (i(xt, fa).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      i(xt, fa).set(e, this), b(this, Pe, Ew).call(this, e);
    } else
      b(this, Pe, Cw).call(this);
  }
  get promise() {
    return i(this, er).promise;
  }
  get port() {
    return i(this, qi);
  }
  get messageHandler() {
    return i(this, $s);
  }
  destroy() {
    this.destroyed = !0, i(this, ua)?.terminate(), u(this, ua, null), i(xt, fa).delete(i(this, qi)), u(this, qi, null), i(this, $s)?.destroy(), u(this, $s, null);
  }
  static create(t) {
    const e = i(this, fa).get(t?.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new xt(t);
  }
  static get workerSrc() {
    if ($h.workerSrc)
      return $h.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return z(this, "_setupFakeWorkerGlobal", (/* @__PURE__ */ f(async () => i(this, ah, bu) ? i(this, ah, bu) : (await import(
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
er = new WeakMap(), $s = new WeakMap(), qi = new WeakMap(), ua = new WeakMap(), Lf = new WeakMap(), rh = new WeakMap(), fa = new WeakMap(), Pe = new WeakSet(), mu = /* @__PURE__ */ f(function() {
  i(this, er).resolve(), i(this, $s).send("configure", {
    verbosity: this.verbosity
  });
}, "#resolve"), Ew = /* @__PURE__ */ f(function(t) {
  u(this, qi, t), u(this, $s, new Ir("main", "worker", t)), i(this, $s).on("ready", () => {
  }), b(this, Pe, mu).call(this);
}, "#initializeFromPort"), Cw = /* @__PURE__ */ f(function() {
  if (i(xt, rh) || i(xt, ah, bu)) {
    b(this, Pe, ul).call(this);
    return;
  }
  let {
    workerSrc: t
  } = xt;
  try {
    xt._isSameOrigin(window.location, t) || (t = xt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new Ir("main", "worker", e), n = /* @__PURE__ */ f(() => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? i(this, er).reject(new Error("Worker was destroyed")) : b(this, Pe, ul).call(this);
    }, "terminateEarly"), r = new AbortController();
    e.addEventListener("error", () => {
      i(this, ua) || n();
    }, {
      signal: r.signal
    }), s.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        n();
        return;
      }
      u(this, $s, s), u(this, qi, e), u(this, ua, e), b(this, Pe, mu).call(this);
    }), s.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        n();
        return;
      }
      try {
        a();
      } catch {
        b(this, Pe, ul).call(this);
      }
    });
    const a = /* @__PURE__ */ f(() => {
      const o = new Uint8Array();
      s.send("test", o, [o.buffer]);
    }, "sendTest");
    a();
    return;
  } catch {
    Yf("The worker has been disabled.");
  }
  b(this, Pe, ul).call(this);
}, "#initialize"), ul = /* @__PURE__ */ f(function() {
  i(xt, rh) || (V("Setting up fake worker."), u(xt, rh, !0)), xt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      i(this, er).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new Wp();
    u(this, qi, e);
    const s = `fake${qt(xt, Lf)._++}`, n = new Ir(s + "_worker", s, e);
    t.setup(n, e), u(this, $s, new Ir(s, s + "_worker", e)), b(this, Pe, mu).call(this);
  }).catch((t) => {
    i(this, er).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, "#setupFakeWorker"), ah = new WeakSet(), bu = /* @__PURE__ */ f(function() {
  try {
    return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
}, "#mainThreadWorkerMessageHandler"), m(xt, ah), f(xt, "PDFWorker"), m(xt, Lf, 0), m(xt, rh, !1), m(xt, fa, /* @__PURE__ */ new WeakMap()), xt._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!s?.origin || s.origin === "null")
    return !1;
  const n = new URL(e, s);
  return s.origin === n.origin;
}, xt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, xt.fromPort = (t) => {
  if (Ay("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !t?.port)
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return xt.create(t);
};
let zl = xt;
var Ke, pa, Qi, He, gi, oh, Ji, hh, us, Tw, fl, Au;
const iA = class iA {
  constructor(t, e, s, n, r, a) {
    m(this, us);
    M(this, "downloadInfoCapability", Promise.withResolvers());
    m(this, Ke, null);
    m(this, pa, /* @__PURE__ */ new Map());
    m(this, Qi, null);
    m(this, He, /* @__PURE__ */ new Map());
    m(this, gi, /* @__PURE__ */ new Map());
    m(this, oh, /* @__PURE__ */ new Map());
    m(this, Ji, null);
    m(this, hh, null);
    this.messageHandler = t, this.loadingTask = e, u(this, Qi, s), this.commonObjs = new Zu(), this.fontLoader = new Hp({
      ownerDocument: n.ownerDocument,
      styleElement: n.styleElement
    }), this.enableHWA = n.enableHWA, this.loadingParams = n.loadingParams, this._params = n, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this.setupMessageHandler(), this.pagesMapper = a, this.pagesMapper.addListener(b(this, us, Tw).bind(this));
  }
  get annotationStorage() {
    return z(this, "annotationStorage", new Ol());
  }
  getRenderingIntent(t, e = xn.ENABLE, s = null, n = !1, r = !1) {
    let a = ls.DISPLAY, o = Nl;
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
        V(`getRenderingIntent - invalid intent: ${t}`);
    }
    const h = a & ls.PRINT && s instanceof Vu ? s : this.annotationStorage;
    switch (e) {
      case xn.DISABLE:
        a += ls.ANNOTATIONS_DISABLE;
        break;
      case xn.ENABLE:
        break;
      case xn.ENABLE_FORMS:
        a += ls.ANNOTATIONS_FORMS;
        break;
      case xn.ENABLE_STORAGE:
        a += ls.ANNOTATIONS_STORAGE, o = h.serializable;
        break;
      default:
        V(`getRenderingIntent - invalid annotationMode: ${e}`);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), i(this, Ji)?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of i(this, He).values())
      t.push(s._destroy());
    i(this, He).clear(), i(this, gi).clear(), i(this, oh).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      this.commonObjs.clear(), this.fontLoader.clear(), i(this, pa).clear(), this.filterFactory.destroy(), $l.cleanup(), i(this, Qi)?.cancelAllRequests(new gn("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, n) => {
      it(i(this, Qi), "GetReader - no `BasePDFStream` instance available."), u(this, Ke, i(this, Qi).getFullReader()), i(this, Ke).onProgress = (r) => b(this, us, Au).call(this, r), n.onPull = () => {
        i(this, Ke).read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            n.close();
            return;
          }
          it(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(r), 1, [r]);
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
      it(i(this, Qi), "GetRangeReader - no `BasePDFStream` instance available.");
      const r = i(this, Qi).getRangeReader(s.begin, s.end);
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
          it(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), n.enqueue(new Uint8Array(a), 1, [a]);
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
      this.pagesMapper.pagesNumber = s.numPages, this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Rg(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Le(s));
    }), t.on("PasswordRequest", (s) => {
      u(this, Ji, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Le(s);
        const n = /* @__PURE__ */ f((r) => {
          r instanceof Error ? i(this, Ji).reject(r) : i(this, Ji).resolve({
            password: r
          });
        }, "updatePassword");
        e.onPassword(n, s.code);
      } catch (n) {
        i(this, Ji).reject(n);
      }
      return i(this, Ji).promise;
    }), t.on("DataLoaded", (s) => {
      b(this, us, Au).call(this, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      i(this, He).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, n, r]) => {
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (n) {
        case "Font":
          if ("error" in r) {
            const d = r.error;
            V(`Error during font loading: ${d}`), this.commonObjs.resolve(s, d);
            break;
          }
          const a = new zp(r), o = this._params.pdfBug && globalThis.FontInspector?.enabled ? (d, p) => globalThis.FontInspector.fontAdded(d, p) : null, h = new $p(a, o, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !h.fontExtraProperties && h.data && h.clearData(), this.commonObjs.resolve(s, h);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: l
          } = r;
          it(l, "The imageRef must be defined.");
          for (const d of i(this, He).values())
            for (const [, p] of d.objs)
              if (p?.ref === l)
                return p.dataLen ? (this.commonObjs.resolve(s, structuredClone(p)), p.dataLen) : null;
          break;
        case "FontPath":
          this.commonObjs.resolve(s, new Gp(r));
          break;
        case "Image":
          this.commonObjs.resolve(s, r);
          break;
        case "Pattern":
          const c = new jp(r);
          this.commonObjs.resolve(s, c.getIR());
          break;
        default:
          throw new Error(`Got unknown common object type ${n}`);
      }
      return null;
    }), t.on("obj", ([s, n, r, a]) => {
      if (this.destroyed)
        return;
      const o = i(this, He).get(n);
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
      this.destroyed || b(this, us, Au).call(this, s);
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      const n = this[s.type];
      if (!n)
        throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return n.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    this.annotationStorage.size <= 0 && V("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
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
    return this.messageHandler.sendWithPromise("ExtractPages", {
      pageInfos: t
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = this.pagesMapper.getPageId(t) - 1, n = i(this, gi).get(e);
    if (n)
      return n;
    const r = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: s
    }).then((a) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      a.refStr && i(this, oh).set(a.refStr, s);
      const o = new Ng(e, a, this, this.pagesMapper, this._params.pdfBug);
      return i(this, He).set(e, o), o;
    });
    return i(this, gi).set(e, r), r;
  }
  async getPageIndex(t) {
    if (!Vp(t))
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
    return b(this, us, fl).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, us, fl).call(this, "HasJSActions");
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
    return b(this, us, fl).call(this, "GetDocJSActions");
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
    return b(this, us, fl).call(this, "GetOptionalContentConfig").then((e) => new bg(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata";
    return i(this, pa).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((e) => ({
      info: e[0],
      metadata: e[1] ? new gg(e[1]) : null,
      contentDispositionFilename: i(this, Ke)?.filename ?? null,
      contentLength: i(this, Ke)?.contentLength ?? null,
      hasStructTree: e[2]
    })));
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of i(this, He).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), i(this, pa).clear(), this.filterFactory.destroy(!0), $l.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Vp(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, s = i(this, oh).get(e);
    if (s >= 0) {
      const n = this.pagesMapper.getPageNumber(s + 1);
      if (n !== 0)
        return n;
    }
    return null;
  }
};
Ke = new WeakMap(), pa = new WeakMap(), Qi = new WeakMap(), He = new WeakMap(), gi = new WeakMap(), oh = new WeakMap(), Ji = new WeakMap(), hh = new WeakMap(), us = new WeakSet(), Tw = /* @__PURE__ */ f(function({
  type: t,
  pageNumbers: e
}) {
  if (t === "copy") {
    u(this, hh, /* @__PURE__ */ new Map());
    for (const a of e)
      i(this, hh).set(a, {
        proxy: i(this, He).get(a - 1) || null,
        promise: i(this, gi).get(a - 1) || null
      });
    return;
  }
  if (t === "delete")
    for (const a of e)
      i(this, He).delete(a - 1), i(this, gi).delete(a - 1);
  const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), {
    pagesMapper: r
  } = this;
  for (let a = 0, o = r.pagesNumber; a < o; a++) {
    const h = r.getPrevPageNumber(a + 1);
    if (h < 0) {
      const {
        proxy: p,
        promise: A
      } = i(this, hh)?.get(-h) || {};
      p && s.set(a, p), A && n.set(a, A);
      continue;
    }
    const l = h - 1, c = i(this, He).get(l);
    c && s.set(a, c);
    const d = i(this, gi).get(l);
    d && n.set(a, d);
  }
  u(this, He, s), u(this, gi, n);
}, "#updateCaches"), fl = /* @__PURE__ */ f(function(t, e = null) {
  return i(this, pa).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e));
}, "#cacheSimpleMethod"), Au = /* @__PURE__ */ f(function({
  loaded: t,
  total: e
}) {
  this.loadingTask.onProgress?.({
    loaded: t,
    total: e,
    percent: he(Math.round(t / e * 100), 0, 100)
  });
}, "#onProgress"), f(iA, "WorkerTransport");
let Og = iA;
const nA = class nA {
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
};
f(nA, "RenderTask");
let Fg = nA;
var sr, ga;
const Cn = class Cn {
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
    enableHWA: A = !1,
    operationsFilter: w = null
  }) {
    m(this, sr, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = n, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = d, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Fg(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = A, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = w;
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
      if (i(Cn, ga).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      i(Cn, ga).add(this._canvas);
    }
    this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: n,
      background: r,
      dependencyTracker: a
    } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new ho(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: n,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
  }
  cancel(t = null, e = 0) {
    this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), i(this, sr) && (window.cancelAnimationFrame(i(this, sr)), u(this, sr, null)), i(Cn, ga).delete(this._canvas), t ||= new Dl(`Rendering cancelled, page ${this._pageIndex + 1}`, e), this.callback(t), this.task.onError?.(t);
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
    this._useRequestAnimationFrame ? u(this, sr, window.requestAnimationFrame(() => {
      u(this, sr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), i(Cn, ga).delete(this._canvas), this.callback())));
  }
};
sr = new WeakMap(), ga = new WeakMap(), f(Cn, "InternalRenderTask"), m(Cn, ga, /* @__PURE__ */ new WeakSet());
let Bg = Cn;
const nv = "5.5.207", rv = "527964698";
var qe, ma, lh, Jt, cd, ch, Zi, dd, ir, zs, ud, bt, Ug, Hg, $g, Cr, xw, Sn;
const xe = class xe {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, bt);
    m(this, qe, null);
    m(this, ma, null);
    m(this, lh);
    m(this, Jt, null);
    m(this, cd, !1);
    m(this, ch, !1);
    m(this, Zi, null);
    m(this, dd);
    m(this, ir, null);
    m(this, zs, null);
    t ? (u(this, ch, !1), u(this, Zi, t)) : u(this, ch, !0), u(this, zs, t?._uiManager || e), u(this, dd, i(this, zs)._eventBus), u(this, lh, t?.color?.toUpperCase() || i(this, zs)?.highlightColors.values().next().value || "#FFFF98"), i(xe, ud) || u(xe, ud, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return z(this, "_keyboardManager", new Ga([[["Escape", "mac+Escape"], xe.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], xe.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], xe.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], xe.prototype._moveToPrevious], [["Home", "mac+Home"], xe.prototype._moveToBeginning], [["End", "mac+End"], xe.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = u(this, qe, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", i(this, Zi) && (t.ariaControls = `${i(this, Zi).id}_colorpicker_dropdown`);
    const e = i(this, zs)._signal;
    t.addEventListener("click", b(this, bt, Cr).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, bt, $g).bind(this), {
      signal: e
    });
    const s = u(this, ma, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = i(this, lh), t.append(s), t;
  }
  renderMainDropdown() {
    const t = u(this, Jt, b(this, bt, Ug).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === i(this, qe)) {
      b(this, bt, Cr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, bt, Hg).call(this, e, t);
  }
  _moveToNext(t) {
    if (!i(this, bt, Sn)) {
      b(this, bt, Cr).call(this, t);
      return;
    }
    if (t.target === i(this, qe)) {
      i(this, Jt).firstElementChild?.focus();
      return;
    }
    t.target.nextSibling?.focus();
  }
  _moveToPrevious(t) {
    if (t.target === i(this, Jt)?.firstElementChild || t.target === i(this, qe)) {
      i(this, bt, Sn) && this._hideDropdownFromKeyboard();
      return;
    }
    i(this, bt, Sn) || b(this, bt, Cr).call(this, t), t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (!i(this, bt, Sn)) {
      b(this, bt, Cr).call(this, t);
      return;
    }
    i(this, Jt).firstElementChild?.focus();
  }
  _moveToEnd(t) {
    if (!i(this, bt, Sn)) {
      b(this, bt, Cr).call(this, t);
      return;
    }
    i(this, Jt).lastElementChild?.focus();
  }
  hideDropdown() {
    i(this, Jt)?.classList.add("hidden"), i(this, qe).ariaExpanded = "false", i(this, ir)?.abort(), u(this, ir, null);
  }
  _hideDropdownFromKeyboard() {
    if (!i(this, ch)) {
      if (!i(this, bt, Sn)) {
        i(this, Zi)?.unselect();
        return;
      }
      this.hideDropdown(), i(this, qe).focus({
        preventScroll: !0,
        focusVisible: i(this, cd)
      });
    }
  }
  updateColor(t) {
    if (i(this, ma) && (i(this, ma).style.backgroundColor = t), !i(this, Jt))
      return;
    const e = i(this, zs).highlightColors.values();
    for (const s of i(this, Jt).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    i(this, qe)?.remove(), u(this, qe, null), u(this, ma, null), i(this, Jt)?.remove(), u(this, Jt, null);
  }
};
qe = new WeakMap(), ma = new WeakMap(), lh = new WeakMap(), Jt = new WeakMap(), cd = new WeakMap(), ch = new WeakMap(), Zi = new WeakMap(), dd = new WeakMap(), ir = new WeakMap(), zs = new WeakMap(), ud = new WeakMap(), bt = new WeakSet(), Ug = /* @__PURE__ */ f(function() {
  const t = document.createElement("div"), e = i(this, zs)._signal;
  t.addEventListener("contextmenu", Ds, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), i(this, Zi) && (t.id = `${i(this, Zi).id}_colorpicker_dropdown`);
  for (const [s, n] of i(this, zs).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", n), r.title = s, r.setAttribute("data-l10n-id", i(xe, ud)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = n, r.ariaSelected = n === i(this, lh), r.addEventListener("click", b(this, bt, Hg).bind(this, n), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, bt, $g).bind(this), {
    signal: e
  }), t;
}, "#getDropdownRoot"), Hg = /* @__PURE__ */ f(function(t, e) {
  e.stopPropagation(), i(this, dd).dispatch("switchannotationeditorparams", {
    source: this,
    type: Z.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, "#colorSelect"), $g = /* @__PURE__ */ f(function(t) {
  xe._keyboardManager.exec(this, t);
}, "#keyDown"), Cr = /* @__PURE__ */ f(function(t) {
  if (i(this, bt, Sn)) {
    this.hideDropdown();
    return;
  }
  if (u(this, cd, t.detail === 0), i(this, ir) || (u(this, ir, new AbortController()), window.addEventListener("pointerdown", b(this, bt, xw).bind(this), {
    signal: i(this, zs).combinedSignal(i(this, ir))
  })), i(this, qe).ariaExpanded = "true", i(this, Jt)) {
    i(this, Jt).classList.remove("hidden");
    return;
  }
  const e = u(this, Jt, b(this, bt, Ug).call(this));
  i(this, qe).append(e);
}, "#openDropdown"), xw = /* @__PURE__ */ f(function(t) {
  i(this, Jt)?.contains(t.target) || this.hideDropdown();
}, "#pointerDown"), Sn = /* @__PURE__ */ f(function() {
  return i(this, Jt) && !i(this, Jt).classList.contains("hidden");
}, "#isDropdownVisible"), f(xe, "ColorPicker"), m(xe, ud, null);
let ef = xe;
var mi, fd, dh, pd;
const Tn = class Tn {
  constructor(t) {
    m(this, mi, null);
    m(this, fd, null);
    m(this, dh, null);
    u(this, fd, t), u(this, dh, t._uiManager), i(Tn, pd) || u(Tn, pd, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (i(this, mi))
      return i(this, mi);
    const {
      editorType: t,
      colorType: e,
      color: s
    } = i(this, fd), n = u(this, mi, document.createElement("input"));
    return n.type = "color", n.value = s || "#000000", n.className = "basicColorPicker", n.tabIndex = 0, n.setAttribute("data-l10n-id", i(Tn, pd)[t]), n.addEventListener("input", () => {
      i(this, dh).updateParams(e, n.value);
    }, {
      signal: i(this, dh)._signal
    }), n;
  }
  update(t) {
    i(this, mi) && (i(this, mi).value = t);
  }
  destroy() {
    i(this, mi)?.remove(), u(this, mi, null);
  }
  hideDropdown() {
  }
};
mi = new WeakMap(), fd = new WeakMap(), dh = new WeakMap(), pd = new WeakMap(), f(Tn, "BasicColorPicker"), m(Tn, pd, null);
let sf = Tn;
function fy(g) {
  return Math.floor(Math.max(0, Math.min(1, g)) * 255).toString(16).padStart(2, "0");
}
f(fy, "makeColorComp");
function Kh(g) {
  return Math.max(0, Math.min(255, 255 * g));
}
f(Kh, "scaleAndClamp");
const rA = class rA {
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
    return t = Kh(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = fy(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Kh);
  }
  static RGB_HTML(t) {
    return `#${t.map(fy).join("")}`;
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
    return [Kh(1 - Math.min(1, t + n)), Kh(1 - Math.min(1, s + n)), Kh(1 - Math.min(1, e + n))];
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
f(rA, "ColorConverters");
let nf = rA;
const aA = class aA {
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
    nt("Abstract method `_createSVG` called.");
  }
};
f(aA, "BaseSVGFactory");
let zg = aA;
const oA = class oA extends zg {
  _createSVG(t) {
    return document.createElementNS(ki, t);
  }
};
f(oA, "DOMSVGFactory");
let zh = oA;
const av = 9, Wa = /* @__PURE__ */ new WeakSet(), ov = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3, hA = class hA {
  static create(t) {
    switch (t.data.annotationType) {
      case Vt.LINK:
        return new jl(t);
      case Vt.TEXT:
        return new Vg(t);
      case Vt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Wg(t);
          case "Btn":
            return t.data.radioButton ? new rf(t) : t.data.checkBox ? new Yg(t) : new Kg(t);
          case "Ch":
            return new qg(t);
          case "Sig":
            return new Xg(t);
        }
        return new bn(t);
      case Vt.POPUP:
        return new Gl(t);
      case Vt.FREETEXT:
        return new af(t);
      case Vt.LINE:
        return new nm(t);
      case Vt.SQUARE:
        return new rm(t);
      case Vt.CIRCLE:
        return new am(t);
      case Vt.POLYLINE:
        return new of(t);
      case Vt.CARET:
        return new hm(t);
      case Vt.INK:
        return new Vl(t);
      case Vt.POLYGON:
        return new om(t);
      case Vt.HIGHLIGHT:
        return new hf(t);
      case Vt.UNDERLINE:
        return new cm(t);
      case Vt.SQUIGGLY:
        return new dm(t);
      case Vt.STRIKEOUT:
        return new um(t);
      case Vt.STAMP:
        return new lf(t);
      case Vt.FILEATTACHMENT:
        return new fm(t);
      default:
        return new It(t);
    }
  }
};
f(hA, "AnnotationElementFactory");
let vl = hA;
var ba, uh, ks, gd, jg;
const Df = class Df {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: n = !1
  } = {}) {
    m(this, gd);
    m(this, ba, null);
    m(this, uh, !1);
    m(this, ks, null);
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
    return Df._hasPopupData(this.data) || this.enableComment && !!this.commentText;
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
    return this.annotationStorage.getRawValue(`${kl}${t.id}`)?.popup?.contents || t.contentsObj?.str || "";
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
    }) || this.annotationStorage.setValue(`${kl}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      page: this.parent.page,
      popup: s,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    (i(this, ks)?.popup || this.popup)?.remove(), u(this, ks, this.popup = null);
  }
  updateEdited(t) {
    if (!this.container)
      return;
    t.rect && (i(this, ba) || u(this, ba, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && b(this, gd, jg).call(this, e);
    let n = i(this, ks)?.popup || this.popup;
    !n && s?.text && (this._createPopup(s), n = i(this, ks).popup), n && (n.updateEdited(t), s?.deleted && (n.remove(), u(this, ks, null), this.popup = null));
  }
  resetEdited() {
    i(this, ba) && (b(this, gd, jg).call(this, i(this, ba).rect), i(this, ks)?.popup.resetEdited(), u(this, ba, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: n
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof bn) && !(this instanceof jl) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Gl) {
      const {
        rotation: y
      } = e;
      return !e.hasOwnCanvas && y !== 0 && this.setRotation(y, r), r;
    }
    const {
      width: o,
      height: h
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const y = e.borderStyle.horizontalCornerRadius, S = e.borderStyle.verticalCornerRadius;
      if (y > 0 || S > 0) {
        const C = `calc(${y}px * var(--total-scale-factor)) / calc(${S}px * var(--total-scale-factor))`;
        a.borderRadius = C;
      } else if (this instanceof rf) {
        const C = `calc(${o}px * var(--total-scale-factor)) / calc(${h}px * var(--total-scale-factor))`;
        a.borderRadius = C;
      }
      switch (e.borderStyle.style) {
        case qa.SOLID:
          a.borderStyle = "solid";
          break;
        case qa.DASHED:
          a.borderStyle = "dashed";
          break;
        case qa.BEVELED:
          V("Unimplemented border style: beveled");
          break;
        case qa.INSET:
          V("Unimplemented border style: inset");
          break;
        case qa.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (u(this, uh, !0), a.borderColor = R.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const l = R.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: d,
      pageX: p,
      pageY: A
    } = n.rawDims;
    a.left = `${100 * (l[0] - p) / c}%`, a.top = `${100 * (l[1] - A) / d}%`;
    const {
      rotation: w
    } = e;
    return e.hasOwnCanvas || w === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * h / d}%`) : this.setRotation(w, r), r;
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
      n.target.style[s] = nf[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: nf[`${a}_rgb`](o)
      });
    }, "setColor");
    return z(this, "_commonActions", {
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
    const [e, s, n, r] = this.data.rect.map((y) => Math.fround(y));
    if (t.length === 8) {
      const [y, S, v, C] = t.subarray(2, 6);
      if (n === y && r === S && e === v && s === C)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (i(this, uh)) {
      const {
        borderColor: y,
        borderWidth: S
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${y}" stroke-width="${S}">`], this.container.classList.add("hasBorder");
    }
    const h = n - e, l = r - s, {
      svgFactory: c
    } = this, d = c.createElement("svg");
    d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0), d.role = "none";
    const p = c.createElement("defs");
    d.append(p);
    const A = c.createElement("clipPath"), w = `clippath_${this.data.id}`;
    A.setAttribute("id", w), A.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(A);
    for (let y = 2, S = t.length; y < S; y += 8) {
      const v = t[y], C = t[y + 1], E = t[y + 2], T = t[y + 3], x = c.createElement("rect"), _ = (E - e) / h, k = (r - C) / l, P = (v - E) / h, I = (C - T) / l;
      x.setAttribute("x", _), x.setAttribute("y", k), x.setAttribute("width", P), x.setAttribute("height", I), A.append(x), o?.push(`<rect vector-effect="non-scaling-stroke" x="${_}" y="${k}" width="${P}" height="${I}"/>`);
    }
    i(this, uh) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(d), this.container.style.clipPath = `url(#${w})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, n;
    t ? (s = {
      str: t.text
    }, n = t.date) : (s = e.contentsObj, n = e.modificationDate), u(this, ks, new Gl({
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
    return !!(i(this, ks) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return i(this, ks);
  }
  render() {
    nt("Abstract method `AnnotationElement.render` called");
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
          if (l && !Wa.has(l)) {
            V(`_getElementsByName - element not allowed: ${a}`);
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
      a !== e && Wa.has(n) && s.push({
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
ba = new WeakMap(), uh = new WeakMap(), ks = new WeakMap(), gd = new WeakSet(), jg = /* @__PURE__ */ f(function(t) {
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
}, "#setRectEdited"), f(Df, "AnnotationElement");
let It = Df;
const lA = class lA extends It {
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
f(lA, "EditorAnnotationElement");
let Gg = lA;
var ds, Tr, _w, kw;
const cA = class cA extends It {
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
    return e.url ? (s.addLinkAttributes(n, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(n, e.action, e.overlaidText), r = !0) : e.attachment ? (b(this, ds, _w).call(this, n, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, ds, kw).call(this, n, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(n, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, e), r = !0), e.resetForm ? (this._bindResetFormAction(n, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(n, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && (this.contentElement = n, this.container.append(n)), this.container;
  }
  _bindLink(e, s, n = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, ds, Tr).call(this), n && (e.title = n);
  }
  _bindNamedAction(e, s, n = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), n && (e.title = n), b(this, ds, Tr).call(this);
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
    s.overlaidText && (e.title = s.overlaidText), e.onclick || (e.onclick = () => !1), b(this, ds, Tr).call(this);
  }
  _bindResetFormAction(e, s) {
    const n = e.onclick;
    if (n || (e.href = this.linkService.getAnchorUrl("")), b(this, ds, Tr).call(this), !this._fieldObjects) {
      V('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n || (e.onclick = () => !1);
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
          const A = this._fieldObjects[p] || [];
          for (const {
            id: w
          } of A)
            d.add(w);
        }
        for (const p of Object.values(this._fieldObjects))
          for (const A of p)
            d.has(A.id) === o && h.push(A);
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
            const w = d.defaultValue || "";
            l.setValue(p, {
              value: w
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const w = d.defaultValue === d.exportValues;
            l.setValue(p, {
              value: w
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const w = d.defaultValue || "";
            l.setValue(p, {
              value: w
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${p}"]`);
        if (A) {
          if (!Wa.has(A)) {
            V(`_bindResetFormAction - element not allowed: ${p}`);
            continue;
          }
        } else continue;
        A.dispatchEvent(new Event("resetform"));
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
ds = new WeakSet(), Tr = /* @__PURE__ */ f(function() {
  this.container.setAttribute("data-internal-link", "");
}, "#setInternalLink"), _w = /* @__PURE__ */ f(function(e, s, n = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description ? e.title = s.description : n && (e.title = n), e.onclick = () => (this.downloadManager?.openOrDownloadData(s.content, s.filename, r), !1), b(this, ds, Tr).call(this);
}, "#bindAttachment"), kw = /* @__PURE__ */ f(function(e, s, n = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), n && (e.title = n), b(this, ds, Tr).call(this);
}, "#bindSetOCGState"), f(cA, "LinkAnnotationElement");
let jl = cA;
const dA = class dA extends It {
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
f(dA, "TextAnnotationElement");
let Vg = dA;
const uA = class uA extends It {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    this.data.hasOwnCanvas && (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Ht.platform.isMac ? t.metaKey : t.ctrlKey;
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
    t.style.backgroundColor = e === null ? "transparent" : R.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, n = this.data.defaultAppearanceData.fontSize || av, r = t.style;
    let a;
    const o = 2, h = /* @__PURE__ */ f((l) => Math.round(10 * l) / 10, "roundToOneDecimal");
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(l / (sp * n)) || 1, d = l / c;
      a = Math.min(n, h(d / sp));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(n, h(l / sp));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = R.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
};
f(uA, "WidgetAnnotationElement");
let bn = uA;
const fA = class fA extends bn {
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
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = o ?? r, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", o ?? r), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), Wa.add(s), this.contentElement = s, s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: l,
        datetimeType: c,
        timeStep: d
      } = this.data, p = !!c && this.enableScripting;
      l && (s.title = l), this._setRequired(s, this.data.required), a && (s.maxLength = a), s.addEventListener("input", (w) => {
        t.setValue(e, {
          value: w.target.value
        }), this.setPropertyOnSiblings(s, "value", w.target.value, "value"), h.formattedValue = null;
      }), s.addEventListener("resetform", (w) => {
        const y = this.data.defaultFieldValue ?? "";
        s.value = h.userValue = y, h.formattedValue = null;
      });
      let A = /* @__PURE__ */ f((w) => {
        const {
          formattedValue: y
        } = h;
        y != null && (w.target.value = y), w.target.scrollLeft = 0;
      }, "blurListener");
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (y) => {
          if (h.focused)
            return;
          const {
            target: S
          } = y;
          if (p && (S.type = c, d && (S.step = d)), h.userValue) {
            const v = h.userValue;
            if (p)
              if (c === "time") {
                const C = new Date(v), E = [C.getHours(), C.getMinutes(), C.getSeconds()];
                S.value = E.map((T) => T.toString().padStart(2, "0")).join(":");
              } else
                S.value = new Date(v - ov).toISOString().split(c === "date" ? "T" : ".", 1)[0];
            else
              S.value = v;
          }
          h.lastCommittedValue = S.value, h.commitKey = 1, this.data.actions?.Focus || (h.focused = !0);
        }), s.addEventListener("updatefromsandbox", (y) => {
          this.showElementAndHideCanvas(y.target);
          const S = {
            value(v) {
              h.userValue = v.detail.value ?? "", p || t.setValue(e, {
                value: h.userValue.toString()
              }), v.target.value = h.userValue;
            },
            formattedValue(v) {
              const {
                formattedValue: C
              } = v.detail;
              h.formattedValue = C, C != null && v.target !== document.activeElement && (v.target.value = C);
              const E = {
                formattedValue: C
              };
              p && (E.value = C), t.setValue(e, E);
            },
            selRange(v) {
              v.target.setSelectionRange(...v.detail.selRange);
            },
            charLimit: /* @__PURE__ */ f((v) => {
              const {
                charLimit: C
              } = v.detail, {
                target: E
              } = v;
              if (C === 0) {
                E.removeAttribute("maxLength");
                return;
              }
              E.setAttribute("maxLength", C);
              let T = h.userValue;
              !T || T.length <= C || (T = T.slice(0, C), E.value = h.userValue = T, t.setValue(e, {
                value: T
              }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: T,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: E.selectionStart,
                  selEnd: E.selectionEnd
                }
              }));
            }, "charLimit")
          };
          this._dispatchEventFromSandbox(S, y);
        }), s.addEventListener("keydown", (y) => {
          h.commitKey = 1;
          let S = -1;
          if (y.key === "Escape" ? S = 0 : y.key === "Enter" && !this.data.multiLine ? S = 2 : y.key === "Tab" && (h.commitKey = 3), S === -1)
            return;
          const {
            value: v
          } = y.target;
          h.lastCommittedValue !== v && (h.lastCommittedValue = v, h.userValue = v, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: v,
              willCommit: !0,
              commitKey: S,
              selStart: y.target.selectionStart,
              selEnd: y.target.selectionEnd
            }
          }));
        });
        const w = A;
        A = null, s.addEventListener("blur", (y) => {
          if (!h.focused || !y.relatedTarget)
            return;
          this.data.actions?.Blur || (h.focused = !1);
          const {
            target: S
          } = y;
          let {
            value: v
          } = S;
          if (p) {
            if (v && c === "time") {
              const C = v.split(":").map((E) => parseInt(E, 10));
              v = new Date(2e3, 0, 1, C[0], C[1], C[2] || 0).valueOf(), S.step = "";
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
              selStart: y.target.selectionStart,
              selEnd: y.target.selectionEnd
            }
          }), w(y);
        }), this.data.actions?.Keystroke && s.addEventListener("beforeinput", (y) => {
          h.lastCommittedValue = null;
          const {
            data: S,
            target: v
          } = y, {
            value: C,
            selectionStart: E,
            selectionEnd: T
          } = v;
          let x = E, _ = T;
          switch (y.inputType) {
            case "deleteWordBackward": {
              const k = C.substring(0, E).match(/\w*[^\w]*$/);
              k && (x -= k[0].length);
              break;
            }
            case "deleteWordForward": {
              const k = C.substring(E).match(/^[^\w]*\w*/);
              k && (_ += k[0].length);
              break;
            }
            case "deleteContentBackward":
              E === T && (x -= 1);
              break;
            case "deleteContentForward":
              E === T && (_ += 1);
              break;
          }
          y.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: C,
              change: S || "",
              willCommit: !1,
              selStart: x,
              selEnd: _
            }
          });
        }), this._setEventListeners(s, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (y) => y.target.value);
      }
      if (A && s.addEventListener("blur", A), this.data.comb) {
        const y = (this.data.rect[2] - this.data.rect[0]) / a;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${y}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
};
f(fA, "TextWidgetAnnotationElement");
let Wg = fA;
const pA = class pA extends bn {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
};
f(pA, "SignatureWidgetAnnotationElement");
let Xg = pA;
const gA = class gA extends bn {
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
    return Wa.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, n && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
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
f(gA, "CheckboxWidgetAnnotationElement");
let Yg = gA;
const mA = class mA extends bn {
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
    if (Wa.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, n && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
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
f(mA, "RadioButtonWidgetAnnotationElement");
let rf = mA;
const bA = class bA extends jl {
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
f(bA, "PushButtonWidgetAnnotationElement");
let Kg = bA;
const AA = class AA extends bn {
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
    Wa.add(n), n.setAttribute("data-element-id", e), n.disabled = this.data.readOnly, this._setRequired(n, this.data.required), n.name = this.data.fieldName, n.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (n.size = this.data.options.length, this.data.multiSelect && (n.multiple = !0)), n.addEventListener("resetform", (c) => {
      const d = this.data.defaultFieldValue;
      for (const p of n.options)
        p.selected = p.value === d;
    });
    for (const c of this.data.options) {
      const d = document.createElement("option");
      d.textContent = c.displayValue, d.value = c.exportValue, s.value.includes(c.exportValue) && (d.setAttribute("selected", !0), r = !1), n.append(d);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), n.prepend(c), a = /* @__PURE__ */ f(() => {
        c.remove(), n.removeEventListener("input", a), a = null;
      }, "removeEmptyEntry"), n.addEventListener("input", a);
    }
    const o = /* @__PURE__ */ f((c) => {
      const d = c ? "value" : "textContent", {
        options: p,
        multiple: A
      } = n;
      return A ? Array.prototype.filter.call(p, (w) => w.selected).map((w) => w[d]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][d];
    }, "getValue");
    let h = o(!1);
    const l = /* @__PURE__ */ f((c) => {
      const d = c.target.options;
      return Array.prototype.map.call(d, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    }, "getItems");
    return this.enableScripting && this.hasJSActions ? (n.addEventListener("updatefromsandbox", (c) => {
      const d = {
        value(p) {
          a?.();
          const A = p.detail.value, w = new Set(Array.isArray(A) ? A : [A]);
          for (const y of n.options)
            y.selected = w.has(y.value);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        multipleSelection(p) {
          n.multiple = !0;
        },
        remove(p) {
          const A = n.options, w = p.detail.remove;
          A[w].selected = !1, n.remove(w), A.length > 0 && Array.prototype.findIndex.call(A, (S) => S.selected) === -1 && (A[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        clear(p) {
          for (; n.length !== 0; )
            n.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), h = o(!1);
        },
        insert(p) {
          const {
            index: A,
            displayValue: w,
            exportValue: y
          } = p.detail.insert, S = n.children[A], v = document.createElement("option");
          v.textContent = w, v.value = y, S ? S.before(v) : n.append(v), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        items(p) {
          const {
            items: A
          } = p.detail;
          for (; n.length !== 0; )
            n.remove(0);
          for (const w of A) {
            const {
              displayValue: y,
              exportValue: S
            } = w, v = document.createElement("option");
            v.textContent = y, v.value = S, n.append(v);
          }
          n.options.length > 0 && (n.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        indices(p) {
          const A = new Set(p.detail.indices);
          for (const w of p.target.options)
            w.selected = A.has(w.index);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(d, c);
    }), n.addEventListener("input", (c) => {
      const d = o(!0), p = o(!1);
      t.setValue(e, {
        value: d
      }), c.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: h,
          change: p,
          changeEx: d,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(n, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : n.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
};
f(AA, "ChoiceWidgetAnnotationElement");
let qg = AA;
var md, Qg;
const yA = class yA extends It {
  constructor(e) {
    const {
      data: s,
      elements: n,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && It._hasPopupData(s)
    });
    m(this, md);
    if (this.elements = n, a && It._hasPopupData(s)) {
      const o = this.popup = b(this, md, Qg).call(this);
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
    const s = this.popup = b(this, md, Qg).call(this), n = [];
    for (const r of this.elements)
      r.popup = s, r.container.ariaHasPopup = "dialog", n.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", n.map((r) => `${no}${r}`).join(",")), this.container;
  }
};
md = new WeakSet(), Qg = /* @__PURE__ */ f(function() {
  return new Jg({
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
}, "#createPopup"), f(yA, "PopupAnnotationElement");
let Gl = yA;
var Qe, nr, Rf, Nf, fh, ph, Rt, bi, rr, Aa, gh, mh, Ai, Je, tn, en, Nt, sn, ar, bd, nn, bh, ya, or, se, hr, Y, yu, Zg, tm, em, wu, sm, Mw, Pw, Iw, Lw, vu, Su, im;
const wA = class wA {
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
    m(this, nr, b(this, Y, Iw).bind(this));
    m(this, Rf, b(this, Y, im).bind(this));
    m(this, Nf, b(this, Y, Su).bind(this));
    m(this, fh, b(this, Y, vu).bind(this));
    m(this, ph, null);
    m(this, Rt, null);
    m(this, bi, null);
    m(this, rr, null);
    m(this, Aa, null);
    m(this, gh, null);
    m(this, mh, null);
    m(this, Ai, !1);
    m(this, Je, null);
    m(this, tn, null);
    m(this, en, null);
    m(this, Nt, null);
    m(this, sn, null);
    m(this, ar, null);
    m(this, bd, null);
    m(this, nn, null);
    m(this, bh, null);
    m(this, ya, null);
    m(this, or, !1);
    m(this, se, null);
    m(this, hr, null);
    u(this, Rt, t), u(this, bh, n), u(this, bi, a), u(this, nn, o), u(this, gh, h), u(this, ph, e), u(this, bd, l), u(this, mh, c), u(this, Aa, s), u(this, Qe, p), u(this, se, s[0]), u(this, rr, Rl.toDateObject(r)), this.trigger = s.flatMap((A) => A.getElementsToTriggerPopup()), p || (b(this, Y, yu).call(this), i(this, Rt).hidden = !0, d && b(this, Y, vu).call(this));
  }
  renderCommentButton() {
    if (i(this, Nt)) {
      i(this, Nt).parentNode || i(this, se).container.after(i(this, Nt));
      return;
    }
    if (i(this, sn) || b(this, Y, Zg).call(this), !i(this, sn))
      return;
    const {
      signal: t
    } = u(this, tn, new AbortController()), e = i(this, se).hasOwnCommentButton, s = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !0, void 0, !e);
    }, "togglePopup"), n = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !1, !0, !e);
    }, "showPopup"), r = /* @__PURE__ */ f(() => {
      i(this, Qe).toggleCommentPopup(this, !1, !1);
    }, "hidePopup");
    if (e) {
      u(this, Nt, i(this, se).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", i(this, nr), {
          signal: t
        }), a.addEventListener("click", s, {
          signal: t
        }), a.addEventListener("pointerenter", n, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = u(this, Nt, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = i(this, se).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), b(this, Y, em).call(this), b(this, Y, tm).call(this), a.addEventListener("keydown", i(this, nr), {
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
    return t ? i(this, gh)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      i(this, Nt)?.focus();
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
    return i(this, Nt);
  }
  get comment() {
    return i(this, hr) || u(this, hr, i(this, se).commentText), i(this, hr);
  }
  set comment(t) {
    t !== this.comment && (i(this, se).commentText = u(this, hr, t));
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
    i(this, Nt) && (i(this, Nt).classList.toggle("selected", t), i(this, Nt).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    i(this, Nt).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (i(this, ar))
      return i(this, ar);
    const {
      x: t,
      y: e,
      height: s
    } = i(this, Nt).getBoundingClientRect(), {
      x: n,
      y: r,
      width: a,
      height: o
    } = i(this, se).layer.getBoundingClientRect();
    return [(t - n) / a, (e + s - r) / o];
  }
  set commentPopupPosition(t) {
    u(this, ar, t);
  }
  hasDefaultPopupPosition() {
    return i(this, ar) === null;
  }
  get commentButtonPosition() {
    return i(this, sn);
  }
  get commentButtonWidth() {
    return i(this, Nt).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = i(this, ar) || this.commentButtonPosition.map((l) => l / 100), n = this.parentBoundingClientRect, {
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
    if (t.className = "popup", i(this, ph)) {
      const s = t.style.outlineColor = R.makeHexColor(...i(this, ph));
      t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", i(this, bh)?.str) {
      const s = document.createElement("span");
      s.className = "title", e.append(s), {
        dir: s.dir,
        str: s.textContent
      } = i(this, bh);
    }
    if (t.append(e), i(this, rr)) {
      const s = document.createElement("time");
      s.className = "popupDate", s.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), s.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: i(this, rr).valueOf()
      })), s.dateTime = i(this, rr).toISOString(), e.append(s);
    }
    yy({
      html: i(this, Y, wu) || i(this, bi).str,
      dir: i(this, bi)?.dir,
      className: "popupContent"
    }, t), i(this, Rt).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }) {
    if (i(this, Qe)) {
      s ? (this.remove(), u(this, hr, null)) : e && (e.deleted ? this.remove() : (b(this, Y, em).call(this), u(this, hr, e.text))), t && (u(this, sn, null), b(this, Y, Zg).call(this), b(this, Y, tm).call(this));
      return;
    }
    if (s || e?.deleted) {
      this.remove();
      return;
    }
    b(this, Y, yu).call(this), i(this, ya) || u(this, ya, {
      contentsObj: i(this, bi),
      richText: i(this, nn)
    }), t && u(this, en, null), e && e.text && (u(this, nn, b(this, Y, Pw).call(this, e.text)), u(this, rr, Rl.toDateObject(e.date)), u(this, bi, null)), i(this, Je)?.remove(), u(this, Je, null);
  }
  resetEdited() {
    i(this, ya) && ({
      contentsObj: qt(this, bi)._,
      richText: qt(this, nn)._
    } = i(this, ya), u(this, ya, null), i(this, Je)?.remove(), u(this, Je, null), u(this, en, null));
  }
  remove() {
    if (i(this, tn)?.abort(), u(this, tn, null), i(this, Je)?.remove(), u(this, Je, null), u(this, or, !1), u(this, Ai, !1), i(this, Nt)?.remove(), u(this, Nt, null), this.trigger)
      for (const t of this.trigger)
        t.classList.remove("popupTriggerArea");
  }
  forceHide() {
    u(this, or, this.isVisible), i(this, or) && (i(this, Rt).hidden = !0);
  }
  maybeShow() {
    i(this, Qe) || (b(this, Y, yu).call(this), i(this, or) && (i(this, Je) || b(this, Y, Su).call(this), u(this, or, !1), i(this, Rt).hidden = !1));
  }
  get isVisible() {
    return i(this, Qe) ? !1 : i(this, Rt).hidden === !1;
  }
};
Qe = new WeakMap(), nr = new WeakMap(), Rf = new WeakMap(), Nf = new WeakMap(), fh = new WeakMap(), ph = new WeakMap(), Rt = new WeakMap(), bi = new WeakMap(), rr = new WeakMap(), Aa = new WeakMap(), gh = new WeakMap(), mh = new WeakMap(), Ai = new WeakMap(), Je = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), Nt = new WeakMap(), sn = new WeakMap(), ar = new WeakMap(), bd = new WeakMap(), nn = new WeakMap(), bh = new WeakMap(), ya = new WeakMap(), or = new WeakMap(), se = new WeakMap(), hr = new WeakMap(), Y = new WeakSet(), yu = /* @__PURE__ */ f(function() {
  if (i(this, tn))
    return;
  u(this, tn, new AbortController());
  const {
    signal: t
  } = i(this, tn);
  for (const e of this.trigger)
    e.addEventListener("click", i(this, fh), {
      signal: t
    }), e.addEventListener("pointerenter", i(this, Nf), {
      signal: t
    }), e.addEventListener("pointerleave", i(this, Rf), {
      signal: t
    }), e.classList.add("popupTriggerArea");
  for (const e of i(this, Aa))
    e.container?.addEventListener("keydown", i(this, nr), {
      signal: t
    });
}, "#addEventListeners"), Zg = /* @__PURE__ */ f(function() {
  const t = i(this, Aa).find((e) => e.hasCommentButton);
  t && u(this, sn, t._normalizePoint(t.commentButtonPosition));
}, "#setCommentButtonPosition"), tm = /* @__PURE__ */ f(function() {
  if (i(this, se).extraPopupElement && !i(this, se).editor)
    return;
  i(this, Nt) || this.renderCommentButton();
  const [t, e] = i(this, sn), {
    style: s
  } = i(this, Nt);
  s.left = `calc(${t}%)`, s.top = `calc(${e}% - var(--comment-button-dim))`;
}, "#updateCommentButtonPosition"), em = /* @__PURE__ */ f(function() {
  i(this, se).extraPopupElement || (i(this, Nt) || this.renderCommentButton(), i(this, Nt).style.backgroundColor = this.commentButtonColor || "");
}, "#updateColor"), wu = /* @__PURE__ */ f(function() {
  const t = i(this, nn), e = i(this, bi);
  return t?.str && (!e?.str || e.str === t.str) && i(this, nn).html || null;
}, "#html"), sm = /* @__PURE__ */ f(function() {
  return i(this, Y, wu)?.attributes?.style?.fontSize || 0;
}, "#fontSize"), Mw = /* @__PURE__ */ f(function() {
  return i(this, Y, wu)?.attributes?.style?.color || null;
}, "#fontColor"), Pw = /* @__PURE__ */ f(function(t) {
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
      color: i(this, Y, Mw),
      fontSize: i(this, Y, sm) ? `calc(${i(this, Y, sm)}px * var(--total-scale-factor))` : ""
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
}, "#makePopupContent"), Iw = /* @__PURE__ */ f(function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && i(this, Ai)) && b(this, Y, vu).call(this);
}, "#keyDown"), Lw = /* @__PURE__ */ f(function() {
  if (i(this, en) !== null)
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
  } = i(this, gh);
  let a = !!i(this, mh), o = a ? i(this, mh) : i(this, bd);
  for (const w of i(this, Aa))
    if (!o || R.intersect(w.data.rect, o) !== null) {
      o = w.data.rect, a = !0;
      break;
    }
  const h = R.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, d = h[0] + c, p = h[1];
  u(this, en, [100 * (d - n) / e, 100 * (p - r) / s]);
  const {
    style: A
  } = i(this, Rt);
  A.left = `${i(this, en)[0]}%`, A.top = `${i(this, en)[1]}%`;
}, "#setPosition"), vu = /* @__PURE__ */ f(function() {
  if (i(this, Qe)) {
    i(this, Qe).toggleCommentPopup(this, !1);
    return;
  }
  u(this, Ai, !i(this, Ai)), i(this, Ai) ? (b(this, Y, Su).call(this), i(this, Rt).addEventListener("click", i(this, fh)), i(this, Rt).addEventListener("keydown", i(this, nr))) : (b(this, Y, im).call(this), i(this, Rt).removeEventListener("click", i(this, fh)), i(this, Rt).removeEventListener("keydown", i(this, nr)));
}, "#toggle"), Su = /* @__PURE__ */ f(function() {
  i(this, Je) || this.render(), this.isVisible ? i(this, Ai) && i(this, Rt).classList.add("focused") : (b(this, Y, Lw).call(this), i(this, Rt).hidden = !1, i(this, Rt).style.zIndex = parseInt(i(this, Rt).style.zIndex) + 1e3);
}, "#show"), im = /* @__PURE__ */ f(function() {
  i(this, Rt).classList.remove("focused"), !(i(this, Ai) || !this.isVisible) && (i(this, Rt).hidden = !0, i(this, Rt).style.zIndex = parseInt(i(this, Rt).style.zIndex) - 1e3);
}, "#hide"), f(wA, "PopupElement");
let Jg = wA;
const vA = class vA extends It {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = G.FREETEXT;
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
f(vA, "FreeTextAnnotationElement");
let af = vA;
var Ad;
const SA = class SA extends It {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Ad, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: n
    } = this, r = this.svgFactory.create(s, n, !0), a = u(this, Ad, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, Ad);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
Ad = new WeakMap(), f(SA, "LineAnnotationElement");
let nm = SA;
var yd;
const EA = class EA extends It {
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
yd = new WeakMap(), f(EA, "SquareAnnotationElement");
let rm = EA;
var wd;
const CA = class CA extends It {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, wd, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: n
    } = this, r = this.svgFactory.create(s, n, !0), a = e.borderStyle.width, o = u(this, wd, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", n / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", n / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, wd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
wd = new WeakMap(), f(CA, "CircleAnnotationElement");
let am = CA;
var vd;
const TA = class TA extends It {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, vd, null);
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
      const A = s[d] - e[0], w = e[3] - s[d + 1];
      l.push(`${A},${w}`);
    }
    l = l.join(" ");
    const c = u(this, vd, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", l), c.setAttribute("stroke-width", n.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), h.append(c), this.container.append(h), !r && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return i(this, vd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
vd = new WeakMap(), f(TA, "PolylineAnnotationElement");
let of = TA;
const xA = class xA extends of {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
};
f(xA, "PolygonAnnotationElement");
let om = xA;
const _A = class _A extends It {
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
f(_A, "CaretAnnotationElement");
let hm = _A;
var Sd, wa, Ed, lm;
const kA = class kA extends It {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, Ed);
    m(this, Sd, null);
    m(this, wa, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? G.HIGHLIGHT : G.INK;
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
    } = b(this, Ed, lm).call(this, s, e), c = this.svgFactory.create(h, l, !0), d = u(this, Sd, this.svgFactory.createElement("svg:g"));
    c.append(d), d.setAttribute("stroke-width", r.width || 1), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.setAttribute("stroke-miterlimit", 10), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), d.setAttribute("transform", o);
    for (let p = 0, A = n.length; p < A; p++) {
      const w = this.svgFactory.createElement(this.svgElementName);
      i(this, wa).push(w), w.setAttribute("points", n[p].join(",")), d.append(w);
    }
    return !a && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: n,
      rect: r
    } = e, a = i(this, Sd);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), n)
      for (let o = 0, h = i(this, wa).length; o < h; o++)
        i(this, wa)[o].setAttribute("points", n[o].join(","));
    if (r) {
      const {
        transform: o,
        width: h,
        height: l
      } = b(this, Ed, lm).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${h} ${l}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return i(this, wa);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
Sd = new WeakMap(), wa = new WeakMap(), Ed = new WeakSet(), lm = /* @__PURE__ */ f(function(e, s) {
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
}, "#getTransform"), f(kA, "InkAnnotationElement");
let Vl = kA;
const MA = class MA extends It {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = G.HIGHLIGHT;
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
f(MA, "HighlightAnnotationElement");
let hf = MA;
const PA = class PA extends It {
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
f(PA, "UnderlineAnnotationElement");
let cm = PA;
const IA = class IA extends It {
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
f(IA, "SquigglyAnnotationElement");
let dm = IA;
const LA = class LA extends It {
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
f(LA, "StrikeOutAnnotationElement");
let um = LA;
const DA = class DA extends It {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = G.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
};
f(DA, "StampAnnotationElement");
let lf = DA;
var Cd, Td, pm;
const RA = class RA extends It {
  constructor(e) {
    super(e, {
      isRenderable: !0
    });
    m(this, Td);
    m(this, Cd, null);
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
    s.hasAppearance || s.fillAlpha === 0 ? n = document.createElement("div") : (n = document.createElement("img"), n.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (n.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), n.addEventListener("dblclick", b(this, Td, pm).bind(this)), u(this, Cd, n);
    const {
      isMac: r
    } = Ht.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Td, pm).call(this);
    }), !s.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = !0, this._createPopup()) : n.classList.add("popupTriggerArea"), e.append(n), e;
  }
  getElementsToTriggerPopup() {
    return i(this, Cd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
Cd = new WeakMap(), Td = new WeakSet(), pm = /* @__PURE__ */ f(function() {
  this.downloadManager?.openOrDownloadData(this.content, this.filename);
}, "#download"), f(RA, "FileAttachmentAnnotationElement");
let fm = RA;
var va, Sa, Ah, lr, xd, Ea, Ze, _d, fn, Eu, mm;
const Of = class Of {
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
    m(this, fn);
    m(this, va, null);
    m(this, Sa, null);
    m(this, Ah, null);
    m(this, lr, /* @__PURE__ */ new Map());
    m(this, xd, null);
    m(this, Ea, null);
    m(this, Ze, []);
    m(this, _d, !1);
    this.div = t, u(this, va, e), u(this, Sa, s), u(this, xd, o || null), u(this, Ea, l || null), u(this, Ah, c || new Ol()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = n, this._commentManager = h || null;
  }
  hasEditableAnnotations() {
    return i(this, lr).size > 0;
  }
  async render(t) {
    const {
      annotations: e
    } = t, s = this.div;
    ja(s, this.viewport);
    const n = /* @__PURE__ */ new Map(), r = [], a = {
      data: null,
      layer: s,
      linkService: i(this, Ea),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new zh(),
      annotationStorage: i(this, Ah),
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
      const l = vl.create(a);
      if (!l.isRenderable)
        continue;
      h || (i(this, Ze).push(l), o.popupRef && n.getOrInsertComputed(o.popupRef, by).push(l));
      const c = l.render();
      o.hidden && (c.style.visibility = "hidden"), l._isEditable && (i(this, lr).set(l.data.id, l), this._annotationEditorUIManager?.renderAnnotationElement(l));
    }
    await b(this, fn, Eu).call(this);
    for (const o of r) {
      const h = a.elements = n.get(o.id);
      a.data = o;
      const l = vl.create(a);
      if (!l.isRenderable)
        continue;
      const c = l.render();
      l.contentElement.id = `${no}${o.id}`, o.hidden && (c.style.visibility = "hidden"), h.at(-1).container.after(c);
    }
    b(this, fn, mm).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: i(this, Ea),
      svgFactory: new zh(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle ||= Of._defaultBorderStyle, e.data = s;
      const n = vl.create(e);
      n.isRenderable && (n.render(), n.contentElement.id = `${no}${s.id}`, i(this, Ze).push(n));
    }
    await b(this, fn, Eu).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, ja(e, {
      rotation: t.rotation
    }), b(this, fn, mm).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(i(this, lr).values());
  }
  getEditableAnnotation(t) {
    return i(this, lr).get(t);
  }
  addFakeAnnotation(t) {
    const {
      div: e
    } = this, {
      id: s,
      rotation: n
    } = t, r = new Gg({
      data: {
        id: s,
        rect: t.getPDFRect(),
        rotation: n
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: i(this, Ea),
      annotationStorage: i(this, Ah)
    });
    return r.render(), r.contentElement.id = `${no}${s}`, r.createOrUpdatePopup(), i(this, Ze).push(r), r;
  }
  removeAnnotation(t) {
    const e = i(this, Ze).findIndex((n) => n.data.id === t);
    if (e < 0)
      return;
    const [s] = i(this, Ze).splice(e, 1);
    i(this, va)?.removePointerInTextLayer(s.contentElement);
  }
  updateFakeAnnotations(t) {
    if (t.length !== 0) {
      for (const e of t)
        e.updateFakeAnnotationElement(this);
      b(this, fn, Eu).call(this);
    }
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  static get _defaultBorderStyle() {
    return z(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: qa.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
va = new WeakMap(), Sa = new WeakMap(), Ah = new WeakMap(), lr = new WeakMap(), xd = new WeakMap(), Ea = new WeakMap(), Ze = new WeakMap(), _d = new WeakMap(), fn = new WeakSet(), Eu = /* @__PURE__ */ f(async function() {
  if (i(this, Ze).length === 0)
    return;
  this.div.replaceChildren();
  const t = [];
  if (!i(this, _d)) {
    u(this, _d, !0);
    for (const {
      contentElement: s,
      data: {
        id: n
      }
    } of i(this, Ze)) {
      const r = s.id = `${no}${n}`;
      t.push(i(this, xd)?.getAriaAttributes(r).then((a) => {
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
    const d = a, p = n, A = (n + a) / 2, w = c, y = h, S = (h + c) / 2;
    if (A >= w && S <= p)
      return -1;
    if (S >= d && A <= y)
      return 1;
    const v = (s + r) / 2, C = (o + l) / 2;
    return v - C;
  });
  const e = document.createDocumentFragment();
  for (const s of i(this, Ze))
    e.append(s.container), this._commentManager ? (s.extraPopupElement?.popup || s.popup)?.renderCommentButton() : s.extraPopupElement && e.append(s.extraPopupElement.render());
  if (this.div.append(e), await Promise.all(t), i(this, va))
    for (const s of i(this, Ze))
      i(this, va).addPointerInTextLayer(s.contentElement, !1);
}, "#addElementsToDOM"), mm = /* @__PURE__ */ f(function() {
  if (!i(this, Sa))
    return;
  const t = this.div;
  for (const [e, s] of i(this, Sa)) {
    const n = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!n)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: r
    } = n;
    r ? r.nodeName === "CANVAS" ? r.replaceWith(s) : r.classList.contains("annotationContent") ? r.after(s) : r.before(s) : n.append(s);
    const a = i(this, lr).get(e);
    a && (a._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e, n.id, s), a._hasNoCanvas = !1) : a.canvas = s);
  }
  i(this, Sa).clear();
}, "#setAnnotationCanvasMap"), f(Of, "AnnotationLayer");
let gm = Of;
const tu = /\r\n?|\n/g;
var ts, kd, Ca, es, Kt, Dw, Rw, Nw, Cu, pn, Tu, xu, Ow, Am, Fw;
const wt = class wt extends St {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, Kt);
    m(this, ts, "");
    m(this, kd, `${this.id}-editor`);
    m(this, Ca, null);
    m(this, es);
    M(this, "_colorPicker", null);
    this.color = e.color || wt._defaultColor || St._defaultLineColor, u(this, es, e.fontSize || wt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert"), this.canAddComment = !1;
  }
  static get _keyboardManager() {
    const e = wt.prototype, s = /* @__PURE__ */ f((a) => a.isEmpty(), "arrowChecker"), n = Va.TRANSLATE_SMALL, r = Va.TRANSLATE_BIG;
    return z(this, "_keyboardManager", new Ga([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
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
    St.initialize(e, s);
    const n = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(n.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Z.FREETEXT_SIZE:
        wt._defaultFontSize = s;
        break;
      case Z.FREETEXT_COLOR:
        wt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case Z.FREETEXT_SIZE:
        b(this, Kt, Dw).call(this, s);
        break;
      case Z.FREETEXT_COLOR:
        b(this, Kt, Rw).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Z.FREETEXT_SIZE, wt._defaultFontSize], [Z.FREETEXT_COLOR, wt._defaultColor || St._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[Z.FREETEXT_SIZE, i(this, es)], [Z.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker ||= new sf(this), [["colorPicker", this._colorPicker]];
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
    return [-wt._internalPadding * e, -(wt._internalPadding + i(this, es)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), u(this, Ca, new AbortController());
    const e = this._uiManager.combinedSignal(i(this, Ca));
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
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", i(this, kd)), this._isDraggable = !0, i(this, Ca)?.abort(), u(this, Ca, null), this.div.focus({
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
    const e = i(this, ts), s = u(this, ts, b(this, Kt, Nw).call(this).trimEnd());
    if (e === s)
      return;
    const n = /* @__PURE__ */ f((r) => {
      if (u(this, ts, r), !r) {
        this.remove();
        return;
      }
      b(this, Kt, xu).call(this), this._uiManager.rebuild(this), b(this, Kt, Cu).call(this);
    }, "setText");
    this.addCommands({
      cmd: /* @__PURE__ */ f(() => {
        n(s);
      }, "cmd"),
      undo: /* @__PURE__ */ f(() => {
        n(e);
      }, "undo"),
      mustExec: !1
    }), b(this, Kt, Cu).call(this);
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
    wt._keyboardManager.exec(this, e);
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
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", i(this, kd)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
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
        const [c, d] = this.pageDimensions, [p, A] = this.pageTranslation;
        let w, y;
        switch (this.rotation) {
          case 0:
            w = e + (o[0] - p) / c, y = s + this.height - (o[1] - A) / d;
            break;
          case 90:
            w = e + (o[0] - p) / c, y = s - (o[1] - A) / d, [h, l] = [l, -h];
            break;
          case 180:
            w = e - this.width + (o[0] - p) / c, y = s - (o[1] - A) / d, [h, l] = [-h, -l];
            break;
          case 270:
            w = e + (o[0] - p - this.height * d) / c, y = s + (o[1] - A - this.width * c) / d, [h, l] = [-l, h];
            break;
        }
        this.setAt(w * r, y * a, h, l);
      } else
        this._moveAfterPaste(e, s);
      b(this, Kt, xu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var w, y, S;
    const s = e.clipboardData || window.clipboardData, {
      types: n
    } = s;
    if (n.length === 1 && n[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(w = wt, pn, Am).call(w, s.getData("text") || "").replaceAll(tu, `
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
      if (d.push(h.nodeValue.slice(l).replaceAll(tu, "")), v !== this.editorDiv) {
        let C = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            C = d;
            continue;
          }
          C.push(b(y = wt, pn, Tu).call(y, E));
        }
      }
      c.push(h.nodeValue.slice(0, l).replaceAll(tu, ""));
    } else if (h === this.editorDiv) {
      let v = c, C = 0;
      for (const E of this.editorDiv.childNodes)
        C++ === l && (v = d), v.push(b(S = wt, pn, Tu).call(S, E));
    }
    u(this, ts, `${c.join(`
`)}${r}${d.join(`
`)}`), b(this, Kt, xu).call(this);
    const p = new Range();
    let A = Math.sumPrecise(c.map((v) => v.length));
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const C = v.nodeValue.length;
        if (A <= C) {
          p.setStart(v, A), p.setEnd(v, A);
          break;
        }
        A -= C;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = wt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, n) {
    var o;
    let r = null;
    if (e instanceof af) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: h,
            fontColor: l
          },
          rect: c,
          rotation: d,
          id: p,
          popupRef: A,
          richText: w,
          contentsObj: y,
          creationDate: S,
          modificationDate: v
        },
        textContent: C,
        textPosition: E,
        parent: {
          page: {
            pageNumber: T
          }
        }
      } = e;
      if (!C || C.length === 0)
        return null;
      r = e = {
        annotationType: G.FREETEXT,
        color: Array.from(l),
        fontSize: h,
        value: C.join(`
`),
        position: E,
        pageIndex: T - 1,
        rect: c.slice(0),
        rotation: d,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: A,
        comment: y?.str || null,
        richText: w,
        creationDate: S,
        modificationDate: v
      };
    }
    const a = await super.deserialize(e, s, n);
    return u(a, es, e.fontSize), a.color = R.makeHexColor(...e.color), u(a, ts, b(o = wt, pn, Am).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = St._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), n = Object.assign(super.serialize(e), {
      color: s,
      fontSize: i(this, es),
      value: b(this, Kt, Ow).call(this)
    });
    return this.addComment(n), e ? (n.isCopy = !0, n) : this.annotationElementId && !b(this, Kt, Fw).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
ts = new WeakMap(), kd = new WeakMap(), Ca = new WeakMap(), es = new WeakMap(), Kt = new WeakSet(), Dw = /* @__PURE__ */ f(function(e) {
  const s = /* @__PURE__ */ f((r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - i(this, es)) * this.parentScale), u(this, es, r), b(this, Kt, Cu).call(this);
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
}, "#updateFontSize"), Rw = /* @__PURE__ */ f(function(e) {
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
}, "#updateColor"), Nw = /* @__PURE__ */ f(function() {
  var n;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    s?.nodeType === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(n = wt, pn, Tu).call(n, r)), s = r);
  return e.join(`
`);
}, "#extractText"), Cu = /* @__PURE__ */ f(function() {
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
}, "#setEditorDimensions"), pn = new WeakSet(), Tu = /* @__PURE__ */ f(function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(tu, "");
}, "#getNodeContent"), xu = /* @__PURE__ */ f(function() {
  if (this.editorDiv.replaceChildren(), !!i(this, ts))
    for (const e of i(this, ts).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, "#setContent"), Ow = /* @__PURE__ */ f(function() {
  return i(this, ts).replaceAll(" ", " ");
}, "#serializeContent"), Am = /* @__PURE__ */ f(function(e) {
  return e.replaceAll(" ", " ");
}, "#deserializeContent"), Fw = /* @__PURE__ */ f(function(e) {
  const {
    value: s,
    fontSize: n,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== n || e.color.some((o, h) => o !== r[h]) || e.pageIndex !== a;
}, "#hasElementChanged"), m(wt, pn), f(wt, "FreeTextEditor"), M(wt, "_freeTextDefaultContent", ""), M(wt, "_internalPadding", 0), M(wt, "_defaultColor", null), M(wt, "_defaultFontSize", 10), M(wt, "_type", "freetext"), M(wt, "_editorType", G.FREETEXT);
let bm = wt;
const Ff = class Ff {
  toSVGPath() {
    nt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    nt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    nt("Abstract method `serialize` must be implemented.");
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
f(Ff, "Outline"), M(Ff, "PRECISION", 1e-4);
let O = Ff;
var ss, js, yh, wh, yi, q, Ta, xa, Md, Pd, vh, Sh, cr, Id, Bf, Uf, Zt, pl, Bw, Uw, Hw, $w, zw, jw;
const ti = class ti {
  constructor({
    x: t,
    y: e
  }, s, n, r, a, o = 0) {
    m(this, Zt);
    m(this, ss);
    m(this, js, []);
    m(this, yh);
    m(this, wh);
    m(this, yi, []);
    m(this, q, new Float32Array(18));
    m(this, Ta);
    m(this, xa);
    m(this, Md);
    m(this, Pd);
    m(this, vh);
    m(this, Sh);
    m(this, cr, []);
    u(this, ss, s), u(this, Sh, r * n), u(this, wh, a), i(this, q).set([NaN, NaN, NaN, NaN, t, e], 6), u(this, yh, o), u(this, Pd, i(ti, Id) * n), u(this, Md, i(ti, Uf) * n), u(this, vh, n), i(this, cr).push(t, e);
  }
  isEmpty() {
    return isNaN(i(this, q)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    u(this, Ta, t), u(this, xa, e);
    const [s, n, r, a] = i(this, ss);
    let [o, h, l, c] = i(this, q).subarray(8, 12);
    const d = t - l, p = e - c, A = Math.hypot(d, p);
    if (A < i(this, Md))
      return !1;
    const w = A - i(this, Pd), y = w / A, S = y * d, v = y * p;
    let C = o, E = h;
    o = l, h = c, l += S, c += v, i(this, cr)?.push(t, e);
    const T = -v / w, x = S / w, _ = T * i(this, Sh), k = x * i(this, Sh);
    return i(this, q).set(i(this, q).subarray(2, 8), 0), i(this, q).set([l + _, c + k], 4), i(this, q).set(i(this, q).subarray(14, 18), 12), i(this, q).set([l - _, c - k], 16), isNaN(i(this, q)[6]) ? (i(this, yi).length === 0 && (i(this, q).set([o + _, h + k], 2), i(this, yi).push(NaN, NaN, NaN, NaN, (o + _ - s) / r, (h + k - n) / a), i(this, q).set([o - _, h - k], 14), i(this, js).push(NaN, NaN, NaN, NaN, (o - _ - s) / r, (h - k - n) / a)), i(this, q).set([C, E, o, h, l, c], 6), !this.isEmpty()) : (i(this, q).set([C, E, o, h, l, c], 6), Math.abs(Math.atan2(E - h, C - o) - Math.atan2(v, S)) < Math.PI / 2 ? ([o, h, l, c] = i(this, q).subarray(2, 6), i(this, yi).push(NaN, NaN, NaN, NaN, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), [o, h, C, E] = i(this, q).subarray(14, 18), i(this, js).push(NaN, NaN, NaN, NaN, ((C + o) / 2 - s) / r, ((E + h) / 2 - n) / a), !0) : ([C, E, o, h, l, c] = i(this, q).subarray(0, 6), i(this, yi).push(((C + 5 * o) / 6 - s) / r, ((E + 5 * h) / 6 - n) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - n) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), [l, c, o, h, C, E] = i(this, q).subarray(12, 18), i(this, js).push(((C + 5 * o) / 6 - s) / r, ((E + 5 * h) / 6 - n) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - n) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - n) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = i(this, yi), e = i(this, js);
    if (isNaN(i(this, q)[6]) && !this.isEmpty())
      return b(this, Zt, Bw).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let n = 6; n < t.length; n += 6)
      isNaN(t[n]) ? s.push(`L${t[n + 4]} ${t[n + 5]}`) : s.push(`C${t[n]} ${t[n + 1]} ${t[n + 2]} ${t[n + 3]} ${t[n + 4]} ${t[n + 5]}`);
    b(this, Zt, Hw).call(this, s);
    for (let n = e.length - 6; n >= 6; n -= 6)
      isNaN(e[n]) ? s.push(`L${e[n + 4]} ${e[n + 5]}`) : s.push(`C${e[n]} ${e[n + 1]} ${e[n + 2]} ${e[n + 3]} ${e[n + 4]} ${e[n + 5]}`);
    return b(this, Zt, Uw).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, n, r, a) {
    return new df(t, e, s, n, r, a);
  }
  getOutlines() {
    const t = i(this, yi), e = i(this, js), s = i(this, q), [n, r, a, o] = i(this, ss), h = new Float32Array((i(this, cr)?.length ?? 0) + 2);
    for (let d = 0, p = h.length - 2; d < p; d += 2)
      h[d] = (i(this, cr)[d] - n) / a, h[d + 1] = (i(this, cr)[d + 1] - r) / o;
    if (h[h.length - 2] = (i(this, Ta) - n) / a, h[h.length - 1] = (i(this, xa) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, Zt, $w).call(this, h);
    const l = new Float32Array(i(this, yi).length + 24 + i(this, js).length);
    let c = t.length;
    for (let d = 0; d < c; d += 2) {
      if (isNaN(t[d])) {
        l[d] = l[d + 1] = NaN;
        continue;
      }
      l[d] = t[d], l[d + 1] = t[d + 1];
    }
    c = b(this, Zt, jw).call(this, l, c);
    for (let d = e.length - 6; d >= 6; d -= 6)
      for (let p = 0; p < 6; p += 2) {
        if (isNaN(e[d + p])) {
          l[c] = l[c + 1] = NaN, c += 2;
          continue;
        }
        l[c] = e[d + p], l[c + 1] = e[d + p + 1], c += 2;
      }
    return b(this, Zt, zw).call(this, l, c), this.newFreeDrawOutline(l, h, i(this, ss), i(this, vh), i(this, yh), i(this, wh));
  }
};
ss = new WeakMap(), js = new WeakMap(), yh = new WeakMap(), wh = new WeakMap(), yi = new WeakMap(), q = new WeakMap(), Ta = new WeakMap(), xa = new WeakMap(), Md = new WeakMap(), Pd = new WeakMap(), vh = new WeakMap(), Sh = new WeakMap(), cr = new WeakMap(), Id = new WeakMap(), Bf = new WeakMap(), Uf = new WeakMap(), Zt = new WeakSet(), pl = /* @__PURE__ */ f(function() {
  const t = i(this, q).subarray(4, 6), e = i(this, q).subarray(16, 18), [s, n, r, a] = i(this, ss);
  return [(i(this, Ta) + (t[0] - e[0]) / 2 - s) / r, (i(this, xa) + (t[1] - e[1]) / 2 - n) / a, (i(this, Ta) + (e[0] - t[0]) / 2 - s) / r, (i(this, xa) + (e[1] - t[1]) / 2 - n) / a];
}, "#getLastCoords"), Bw = /* @__PURE__ */ f(function() {
  const [t, e, s, n] = i(this, ss), [r, a, o, h] = b(this, Zt, pl).call(this);
  return `M${(i(this, q)[2] - t) / s} ${(i(this, q)[3] - e) / n} L${(i(this, q)[4] - t) / s} ${(i(this, q)[5] - e) / n} L${r} ${a} L${o} ${h} L${(i(this, q)[16] - t) / s} ${(i(this, q)[17] - e) / n} L${(i(this, q)[14] - t) / s} ${(i(this, q)[15] - e) / n} Z`;
}, "#toSVGPathTwoPoints"), Uw = /* @__PURE__ */ f(function(t) {
  const e = i(this, js);
  t.push(`L${e[4]} ${e[5]} Z`);
}, "#toSVGPathStart"), Hw = /* @__PURE__ */ f(function(t) {
  const [e, s, n, r] = i(this, ss), a = i(this, q).subarray(4, 6), o = i(this, q).subarray(16, 18), [h, l, c, d] = b(this, Zt, pl).call(this);
  t.push(`L${(a[0] - e) / n} ${(a[1] - s) / r} L${h} ${l} L${c} ${d} L${(o[0] - e) / n} ${(o[1] - s) / r}`);
}, "#toSVGPathEnd"), $w = /* @__PURE__ */ f(function(t) {
  const e = i(this, q), [s, n, r, a] = i(this, ss), [o, h, l, c] = b(this, Zt, pl).call(this), d = new Float32Array(36);
  return d.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - n) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - n) / a, NaN, NaN, NaN, NaN, o, h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - n) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - n) / a], 0), this.newFreeDrawOutline(d, t, i(this, ss), i(this, vh), i(this, yh), i(this, wh));
}, "#getOutlineTwoPoints"), zw = /* @__PURE__ */ f(function(t, e) {
  const s = i(this, js);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, "#getOutlineStart"), jw = /* @__PURE__ */ f(function(t, e) {
  const s = i(this, q).subarray(4, 6), n = i(this, q).subarray(16, 18), [r, a, o, h] = i(this, ss), [l, c, d, p] = b(this, Zt, pl).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, d, p, NaN, NaN, NaN, NaN, (n[0] - r) / o, (n[1] - a) / h], e), e += 24;
}, "#getOutlineEnd"), f(ti, "FreeDrawOutliner"), m(ti, Id, 8), m(ti, Bf, 2), m(ti, Uf, i(ti, Id) + i(ti, Bf));
let cf = ti;
var Eh, _a, rn, Ld, is, Dd, Ut, Hf, Gw;
const NA = class NA extends O {
  constructor(e, s, n, r, a, o) {
    super();
    m(this, Hf);
    m(this, Eh);
    m(this, _a, new Float32Array(4));
    m(this, rn);
    m(this, Ld);
    m(this, is);
    m(this, Dd);
    m(this, Ut);
    u(this, Ut, e), u(this, is, s), u(this, Eh, n), u(this, Dd, r), u(this, rn, a), u(this, Ld, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], b(this, Hf, Gw).call(this, o);
    const [h, l, c, d] = i(this, _a);
    for (let p = 0, A = e.length; p < A; p += 2)
      e[p] = (e[p] - h) / c, e[p + 1] = (e[p + 1] - l) / d;
    for (let p = 0, A = s.length; p < A; p += 2)
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
        l = O._rescale(i(this, Ut), e, r, o, -h), c = O._rescale(i(this, is), e, r, o, -h);
        break;
      case 90:
        l = O._rescaleAndSwap(i(this, Ut), e, s, o, h), c = O._rescaleAndSwap(i(this, is), e, s, o, h);
        break;
      case 180:
        l = O._rescale(i(this, Ut), n, s, -o, h), c = O._rescale(i(this, is), n, s, -o, h);
        break;
      case 270:
        l = O._rescaleAndSwap(i(this, Ut), n, r, -o, -h), c = O._rescaleAndSwap(i(this, is), n, r, -o, -h);
        break;
    }
    return {
      outline: Array.from(l),
      points: [Array.from(c)]
    };
  }
  get box() {
    return i(this, _a);
  }
  newOutliner(e, s, n, r, a, o = 0) {
    return new cf(e, s, n, r, a, o);
  }
  getNewOutline(e, s) {
    const [n, r, a, o] = i(this, _a), [h, l, c, d] = i(this, Eh), p = a * c, A = o * d, w = n * c + h, y = r * d + l, S = this.newOutliner({
      x: i(this, is)[0] * p + w,
      y: i(this, is)[1] * A + y
    }, i(this, Eh), i(this, Dd), e, i(this, Ld), s ?? i(this, rn));
    for (let v = 2; v < i(this, is).length; v += 2)
      S.add({
        x: i(this, is)[v] * p + w,
        y: i(this, is)[v + 1] * A + y
      });
    return S.getOutlines();
  }
};
Eh = new WeakMap(), _a = new WeakMap(), rn = new WeakMap(), Ld = new WeakMap(), is = new WeakMap(), Dd = new WeakMap(), Ut = new WeakMap(), Hf = new WeakSet(), Gw = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ut);
  let n = s[4], r = s[5];
  const a = [n, r, n, r];
  let o = n, h = r, l = n, c = r;
  const d = e ? Math.max : Math.min, p = new Float32Array(4);
  for (let w = 6, y = s.length; w < y; w += 6) {
    const S = s[w + 4], v = s[w + 5];
    isNaN(s[w]) ? (R.pointBoundingBox(S, v, a), h > v ? (o = S, h = v) : h === v && (o = d(o, S)), c < v ? (l = S, c = v) : c === v && (l = d(l, S))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, R.bezierBoundingBox(n, r, ...s.slice(w, w + 6), p), R.rectBoundingBox(p[0], p[1], p[2], p[3], a), h > p[1] ? (o = p[0], h = p[1]) : h === p[1] && (o = d(o, p[0])), c < p[3] ? (l = p[2], c = p[3]) : c === p[3] && (l = d(l, p[2]))), n = S, r = v;
  }
  const A = i(this, _a);
  A[0] = a[0] - i(this, rn), A[1] = a[1] - i(this, rn), A[2] = a[2] - a[0] + 2 * i(this, rn), A[3] = a[3] - a[1] + 2 * i(this, rn), this.firstPoint = [o, h], this.lastPoint = [l, c];
}, "#computeMinMax"), f(NA, "FreeDrawOutline");
let df = NA;
var Rd, Nd, Od, dr, Gs, Ie, Vw, _u, Ww, Xw, ym;
const OA = class OA {
  constructor(t, e = 0, s = 0, n = !0) {
    m(this, Ie);
    m(this, Rd);
    m(this, Nd);
    m(this, Od);
    m(this, dr, []);
    m(this, Gs, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: y,
      y: S,
      width: v,
      height: C
    } of t) {
      const E = Math.floor((y - e) / a) * a, T = Math.ceil((y + v + e) / a) * a, x = Math.floor((S - e) / a) * a, _ = Math.ceil((S + C + e) / a) * a, k = [E, x, _, !0], P = [T, x, _, !1];
      i(this, dr).push(k, P), R.rectBoundingBox(E, x, T, _, r);
    }
    const o = r[2] - r[0] + 2 * s, h = r[3] - r[1] + 2 * s, l = r[0] - s, c = r[1] - s;
    let d = n ? -1 / 0 : 1 / 0, p = 1 / 0;
    const A = i(this, dr).at(n ? -1 : -2), w = [A[0], A[2]];
    for (const y of i(this, dr)) {
      const [S, v, C, E] = y;
      !E && n ? v < p ? (p = v, d = S) : v === p && (d = Math.max(d, S)) : E && !n && (v < p ? (p = v, d = S) : v === p && (d = Math.min(d, S))), y[0] = (S - l) / o, y[1] = (v - c) / h, y[2] = (C - c) / h;
    }
    u(this, Rd, new Float32Array([l, c, o, h])), u(this, Nd, [d, p]), u(this, Od, w);
  }
  getOutlines() {
    i(this, dr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of i(this, dr))
      e[3] ? (t.push(...b(this, Ie, ym).call(this, e)), b(this, Ie, Ww).call(this, e)) : (b(this, Ie, Xw).call(this, e), t.push(...b(this, Ie, ym).call(this, e)));
    return b(this, Ie, Vw).call(this, t);
  }
};
Rd = new WeakMap(), Nd = new WeakMap(), Od = new WeakMap(), dr = new WeakMap(), Gs = new WeakMap(), Ie = new WeakSet(), Vw = /* @__PURE__ */ f(function(t) {
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
    let p = o, A = h;
    for (r = [o, l], n.push(r); ; ) {
      let w;
      if (s.has(c))
        w = c;
      else if (s.has(d))
        w = d;
      else
        break;
      s.delete(w), [o, h, l, c, d] = w, p !== o && (r.push(p, A, o, A === h ? h : l), p = o), A = A === h ? l : h;
    }
    r.push(p, A);
  }
  return new wm(n, i(this, Rd), i(this, Nd), i(this, Od));
}, "#getOutlines"), _u = /* @__PURE__ */ f(function(t) {
  const e = i(this, Gs);
  let s = 0, n = e.length - 1;
  for (; s <= n; ) {
    const r = s + n >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : n = r - 1;
  }
  return n + 1;
}, "#binarySearch"), Ww = /* @__PURE__ */ f(function([, t, e]) {
  const s = b(this, Ie, _u).call(this, t);
  i(this, Gs).splice(s, 0, [t, e]);
}, "#insert"), Xw = /* @__PURE__ */ f(function([, t, e]) {
  const s = b(this, Ie, _u).call(this, t);
  for (let n = s; n < i(this, Gs).length; n++) {
    const [r, a] = i(this, Gs)[n];
    if (r !== t)
      break;
    if (r === t && a === e) {
      i(this, Gs).splice(n, 1);
      return;
    }
  }
  for (let n = s - 1; n >= 0; n--) {
    const [r, a] = i(this, Gs)[n];
    if (r !== t)
      break;
    if (r === t && a === e) {
      i(this, Gs).splice(n, 1);
      return;
    }
  }
}, "#remove"), ym = /* @__PURE__ */ f(function(t) {
  const [e, s, n] = t, r = [[e, s, n]], a = b(this, Ie, _u).call(this, n);
  for (let o = 0; o < a; o++) {
    const [h, l] = i(this, Gs)[o];
    for (let c = 0, d = r.length; c < d; c++) {
      const [, p, A] = r[c];
      if (!(l <= p || A <= h)) {
        if (p >= h) {
          if (A > l)
            r[c][1] = l;
          else {
            if (d === 1)
              return [];
            r.splice(c, 1), c--, d--;
          }
          continue;
        }
        r[c][2] = h, A > l && r.push([e, l, A]);
      }
    }
  }
  return r;
}, "#breakEdge"), f(OA, "HighlightOutliner");
let Wl = OA;
var Fd, Ch;
const FA = class FA extends O {
  constructor(e, s, n, r) {
    super();
    m(this, Fd);
    m(this, Ch);
    u(this, Ch, e), u(this, Fd, s), this.firstPoint = n, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const s of i(this, Ch)) {
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
    for (const c of i(this, Ch)) {
      const d = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        d[p] = e + c[p] * h, d[p + 1] = r - c[p + 1] * l;
      o.push(d);
    }
    return o;
  }
  get box() {
    return i(this, Fd);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
};
Fd = new WeakMap(), Ch = new WeakMap(), f(FA, "HighlightOutline");
let wm = FA;
const BA = class BA extends cf {
  newFreeDrawOutline(t, e, s, n, r, a) {
    return new vm(t, e, s, n, r, a);
  }
};
f(BA, "FreeHighlightOutliner");
let Xl = BA;
const UA = class UA extends df {
  newOutliner(t, e, s, n, r, a = 0) {
    return new Xl(t, e, s, n, r, a);
  }
};
f(UA, "FreeHighlightOutline");
let vm = UA;
var Th, Bd, an, ka, Ud, $e, Hd, $d, Ma, ns, rs, fe, xh, _h, Ce, kh, Ms, zd, X, Sm, ku, Yw, Kw, qw, Em, xr, Is, so, Qw, Mu, Pu, Jw, Zw, t0, e0, s0;
const at = class at extends St {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, X);
    m(this, Th, null);
    m(this, Bd, 0);
    m(this, an);
    m(this, ka, null);
    m(this, Ud, null);
    m(this, $e, null);
    m(this, Hd, null);
    m(this, $d, 0);
    m(this, Ma, null);
    m(this, ns, null);
    m(this, rs, null);
    m(this, fe, !1);
    m(this, xh, null);
    m(this, _h, null);
    m(this, Ce, null);
    m(this, kh, "");
    m(this, Ms);
    m(this, zd, "");
    this.color = e.color || at._defaultColor, u(this, Ms, e.thickness || at._defaultThickness), this.opacity = e.opacity || at._defaultOpacity, u(this, an, e.boxes || null), u(this, zd, e.methodOfCreation || ""), u(this, kh, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (u(this, fe, !0), b(this, X, ku).call(this, e), b(this, X, xr).call(this)) : i(this, an) && (u(this, Th, e.anchorNode), u(this, Bd, e.anchorOffset), u(this, Hd, e.focusNode), u(this, $d, e.focusOffset), b(this, X, Sm).call(this), b(this, X, xr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = at.prototype;
    return z(this, "_keyboardManager", new Ga([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: i(this, fe) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: i(this, Ms),
      methodOfCreation: i(this, zd)
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
    St.initialize(e, s), at._defaultColor ||= s.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case Z.HIGHLIGHT_COLOR:
        at._defaultColor = s;
        break;
      case Z.HIGHLIGHT_THICKNESS:
        at._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return i(this, _h);
  }
  get commentButtonPosition() {
    return i(this, xh);
  }
  updateParams(e, s) {
    switch (e) {
      case Z.HIGHLIGHT_COLOR:
        b(this, X, Yw).call(this, s);
        break;
      case Z.HIGHLIGHT_THICKNESS:
        b(this, X, Kw).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[Z.HIGHLIGHT_COLOR, at._defaultColor], [Z.HIGHLIGHT_THICKNESS, at._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[Z.HIGHLIGHT_COLOR, this.color || at._defaultColor], [Z.HIGHLIGHT_THICKNESS, i(this, Ms) || at._defaultThickness], [Z.HIGHLIGHT_FREE, i(this, fe)]];
  }
  onUpdatedColor() {
    this.parent?.drawLayer.updateProperties(i(this, rs), {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    }), i(this, Ud)?.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", u(this, Ud, new ef({
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
    return super.fixAndSetPosition(b(this, X, Pu).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, X, Pu).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, X, Em).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, X, xr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? b(this, X, Em).call(this) : e && (b(this, X, xr).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let n;
    i(this, fe) ? (e = (e - this.rotation + 360) % 360, n = b(r = at, Is, so).call(r, i(this, ns).box, e)) : n = b(a = at, Is, so).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(i(this, rs), {
      bbox: n,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(i(this, Ce), {
      bbox: b(o = at, Is, so).call(o, i(this, $e).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    i(this, kh) && (e.setAttribute("aria-label", i(this, kh)), e.setAttribute("role", "mark")), i(this, fe) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, X, Qw).bind(this), {
      signal: this._uiManager._signal
    });
    const s = u(this, Ma, document.createElement("div"));
    return e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = i(this, ka), this.setDims(), xy(this, i(this, Ma), ["pointerover", "pointerleave"]), this.enableEditing(), e;
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
        b(this, X, Mu).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, X, Mu).call(this, !1);
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
    }), i(this, fe) || b(this, X, Mu).call(this, !1));
  }
  get _mustFixPosition() {
    return !i(this, fe);
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
    } = n.getBoundingClientRect(), d = new AbortController(), p = e.combinedSignal(d), A = /* @__PURE__ */ f((w) => {
      d.abort(), b(this, Is, e0).call(this, e, w);
    }, "pointerUpCallback");
    window.addEventListener("blur", A, {
      signal: p
    }), window.addEventListener("pointerup", A, {
      signal: p
    }), window.addEventListener("pointerdown", Ft, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", Ds, {
      signal: p
    }), n.addEventListener("pointermove", b(this, Is, t0).bind(this, e), {
      signal: p
    }), this._freeHighlight = new Xl({
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
    var y, S, v, C;
    let r = null;
    if (e instanceof hf) {
      const {
        data: {
          quadPoints: E,
          rect: T,
          rotation: x,
          id: _,
          color: k,
          opacity: P,
          popupRef: I,
          richText: N,
          contentsObj: L,
          creationDate: st,
          modificationDate: J
        },
        parent: {
          page: {
            pageNumber: W
          }
        }
      } = e;
      r = e = {
        annotationType: G.HIGHLIGHT,
        color: Array.from(k),
        opacity: P,
        quadPoints: E,
        boxes: null,
        pageIndex: W - 1,
        rect: T.slice(0),
        rotation: x,
        annotationElementId: _,
        id: _,
        deleted: !1,
        popupRef: I,
        richText: N,
        comment: L?.str || null,
        creationDate: st,
        modificationDate: J
      };
    } else if (e instanceof Vl) {
      const {
        data: {
          inkLists: E,
          rect: T,
          rotation: x,
          id: _,
          color: k,
          borderStyle: {
            rawWidth: P
          },
          popupRef: I,
          richText: N,
          contentsObj: L,
          creationDate: st,
          modificationDate: J
        },
        parent: {
          page: {
            pageNumber: W
          }
        }
      } = e;
      r = e = {
        annotationType: G.HIGHLIGHT,
        color: Array.from(k),
        thickness: P,
        inkLists: E,
        boxes: null,
        pageIndex: W - 1,
        rect: T.slice(0),
        rotation: x,
        annotationElementId: _,
        id: _,
        deleted: !1,
        popupRef: I,
        richText: N,
        comment: L?.str || null,
        creationDate: st,
        modificationDate: J
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: h,
      opacity: l
    } = e, c = await super.deserialize(e, s, n);
    c.color = R.makeHexColor(...a), c.opacity = l || 1, h && u(c, Ms, e.thickness), c._initialData = r, e.comment && c.setCommentData(e);
    const [d, p] = c.pageDimensions, [A, w] = c.pageTranslation;
    if (o) {
      const E = u(c, an, []);
      for (let T = 0; T < o.length; T += 8)
        E.push({
          x: (o[T] - A) / d,
          y: 1 - (o[T + 1] - w) / p,
          width: (o[T + 2] - o[T]) / d,
          height: (o[T + 1] - o[T + 5]) / p
        });
      b(y = c, X, Sm).call(y), b(S = c, X, xr).call(S), c.rotate(c.rotation);
    } else if (h) {
      u(c, fe, !0);
      const E = h[0], T = {
        x: E[0] - A,
        y: p - (E[1] - w)
      }, x = new Xl(T, [0, 0, d, p], 1, i(c, Ms) / 2, !0, 1e-3);
      for (let P = 0, I = E.length; P < I; P += 2)
        T.x = E[P] - A, T.y = p - (E[P + 1] - w), x.add(T);
      const {
        id: _,
        clipPathId: k
      } = s.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: c.color,
          "fill-opacity": c._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: x.toSVGPath()
        }
      }, !0, !0);
      b(v = c, X, ku).call(v, {
        highlightOutlines: x.getOutlines(),
        highlightId: _,
        clipPathId: k
      }), b(C = c, X, xr).call(C), c.rotate(c.parentRotation);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = St._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), n = super.serialize(e);
    return Object.assign(n, {
      color: s,
      opacity: this.opacity,
      thickness: i(this, Ms),
      quadPoints: b(this, X, Jw).call(this),
      outlines: b(this, X, Zw).call(this, n.rect)
    }), this.addComment(n), this.annotationElementId && !b(this, X, s0).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
Th = new WeakMap(), Bd = new WeakMap(), an = new WeakMap(), ka = new WeakMap(), Ud = new WeakMap(), $e = new WeakMap(), Hd = new WeakMap(), $d = new WeakMap(), Ma = new WeakMap(), ns = new WeakMap(), rs = new WeakMap(), fe = new WeakMap(), xh = new WeakMap(), _h = new WeakMap(), Ce = new WeakMap(), kh = new WeakMap(), Ms = new WeakMap(), zd = new WeakMap(), X = new WeakSet(), Sm = /* @__PURE__ */ f(function() {
  const e = new Wl(i(this, an), 1e-3);
  u(this, ns, e.getOutlines()), [this.x, this.y, this.width, this.height] = i(this, ns).box;
  const s = new Wl(i(this, an), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  u(this, $e, s.getOutlines());
  const {
    firstPoint: n
  } = i(this, ns);
  u(this, xh, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height]);
  const {
    lastPoint: r
  } = i(this, $e);
  u(this, _h, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, "#createOutlines"), ku = /* @__PURE__ */ f(function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: n
}) {
  var p, A;
  if (u(this, ns, e), u(this, $e, e.getNewOutline(i(this, Ms) / 2 + 1.5, 25e-4)), s >= 0)
    u(this, rs, s), u(this, ka, n), this.parent.drawLayer.finalizeDraw(s, {
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
    const w = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(i(this, rs), {
      bbox: b(p = at, Is, so).call(p, i(this, ns).box, (w - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(i(this, Ce), {
      bbox: b(A = at, Is, so).call(A, i(this, $e).box, w),
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
      const [w, y] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = h * y / w, this.height = l * w / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = h, this.height = l;
      break;
    case 270: {
      const [w, y] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = h * y / w, this.height = l * w / y;
      break;
    }
  }
  const {
    firstPoint: c
  } = e;
  u(this, xh, [(c[0] - a) / h, (c[1] - o) / l]);
  const {
    lastPoint: d
  } = i(this, $e);
  u(this, _h, [(d[0] - a) / h, (d[1] - o) / l]);
}, "#createFreeOutlines"), Yw = /* @__PURE__ */ f(function(e) {
  const s = /* @__PURE__ */ f((a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, "setColorAndOpacity"), n = this.color, r = this.opacity;
  this.addCommands({
    cmd: s.bind(this, e, at._defaultOpacity),
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
}, "#updateColor"), Kw = /* @__PURE__ */ f(function(e) {
  const s = i(this, Ms), n = /* @__PURE__ */ f((r) => {
    u(this, Ms, r), b(this, X, qw).call(this, r);
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
}, "#updateThickness"), qw = /* @__PURE__ */ f(function(e) {
  i(this, fe) && (b(this, X, ku).call(this, {
    highlightOutlines: i(this, ns).getNewOutline(e / 2)
  }), this.fixAndSetPosition(), this.setDims());
}, "#changeThickness"), Em = /* @__PURE__ */ f(function() {
  i(this, rs) === null || !this.parent || (this.parent.drawLayer.remove(i(this, rs)), u(this, rs, null), this.parent.drawLayer.remove(i(this, Ce)), u(this, Ce, null));
}, "#cleanDrawLayer"), xr = /* @__PURE__ */ f(function(e = this.parent) {
  i(this, rs) === null && ({
    id: qt(this, rs)._,
    clipPathId: qt(this, ka)._
  } = e.drawLayer.draw({
    bbox: i(this, ns).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": this.opacity
    },
    rootClass: {
      highlight: !0,
      free: i(this, fe)
    },
    path: {
      d: i(this, ns).toSVGPath()
    }
  }, !1, !0), u(this, Ce, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: i(this, fe)
    },
    bbox: i(this, $e).box,
    path: {
      d: i(this, $e).toSVGPath()
    }
  }, i(this, fe))), i(this, Ma) && (i(this, Ma).style.clipPath = i(this, ka)));
}, "#addToDrawLayer"), Is = new WeakSet(), so = /* @__PURE__ */ f(function([e, s, n, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, n];
    case 180:
      return [1 - e - n, 1 - s - r, n, r];
    case 270:
      return [s, 1 - e - n, r, n];
  }
  return [e, s, n, r];
}, "#rotateBbox"), Qw = /* @__PURE__ */ f(function(e) {
  at._keyboardManager.exec(this, e);
}, "#keydown"), Mu = /* @__PURE__ */ f(function(e) {
  if (!i(this, Th))
    return;
  const s = window.getSelection();
  e ? s.setPosition(i(this, Th), i(this, Bd)) : s.setPosition(i(this, Hd), i(this, $d));
}, "#setCaret"), Pu = /* @__PURE__ */ f(function() {
  return i(this, fe) ? this.rotation : 0;
}, "#getRotation"), Jw = /* @__PURE__ */ f(function() {
  if (i(this, fe))
    return null;
  const [e, s] = this.pageDimensions, [n, r] = this.pageTranslation, a = i(this, an), o = new Float32Array(a.length * 8);
  let h = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: p
  } of a) {
    const A = l * e + n, w = (1 - c) * s + r;
    o[h] = o[h + 4] = A, o[h + 1] = o[h + 3] = w, o[h + 2] = o[h + 6] = A + d * e, o[h + 5] = o[h + 7] = w - p * s, h += 8;
  }
  return o;
}, "#serializeBoxes"), Zw = /* @__PURE__ */ f(function(e) {
  return i(this, ns).serialize(e, b(this, X, Pu).call(this));
}, "#serializeOutlines"), t0 = /* @__PURE__ */ f(function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, "#highlightMove"), e0 = /* @__PURE__ */ f(function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, "#endHighlight"), s0 = /* @__PURE__ */ f(function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((n, r) => n !== s[r]);
}, "#hasElementChanged"), m(at, Is), f(at, "HighlightEditor"), M(at, "_defaultColor", null), M(at, "_defaultOpacity", 1), M(at, "_defaultThickness", 12), M(at, "_type", "highlight"), M(at, "_editorType", G.HIGHLIGHT), M(at, "_freeHighlightId", -1), M(at, "_freeHighlight", null), M(at, "_freeHighlightClipId", "");
let uf = at;
var Pa;
const HA = class HA {
  constructor() {
    m(this, Pa, /* @__PURE__ */ Object.create(null));
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
    i(this, Pa)[t] = e;
  }
  toSVGProperties() {
    const t = i(this, Pa);
    return u(this, Pa, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    u(this, Pa, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    nt("Not implemented");
  }
};
Pa = new WeakMap(), f(HA, "DrawingOptions");
let ff = HA;
var as, Mh, ie, Ia, La, tt, Cm, Tm, xm, gl, i0, Iu, ml, io;
const Q = class Q extends St {
  constructor(e) {
    super(e);
    m(this, tt);
    m(this, as, null);
    m(this, Mh);
    M(this, "_colorPicker", null);
    M(this, "_drawId", null);
    u(this, Mh, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, tt, Cm).call(this, e), b(this, tt, gl).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const n = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      n.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    nt("Not implemented");
  }
  static get typesMap() {
    nt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, s) {
    const n = this.typesMap.get(e);
    n && this._defaultDrawingOptions.updateProperty(n, s), this._currentParent && (i(Q, ie).updateProperty(n, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      l && b(this, tt, ml).call(this, l), this.parent?.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
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
    this.parent?.drawLayer.updateProperties(this._drawId, Q._mergeSVGProperties(i(this, as).getPathResizingSVGProperties(b(this, tt, Iu).call(this)), {
      bbox: b(this, tt, io).call(this)
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, Q._mergeSVGProperties(i(this, as).getPathResizedSVGProperties(b(this, tt, Iu).call(this)), {
      bbox: b(this, tt, io).call(this)
    }));
  }
  _onTranslating(e, s) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, tt, io).call(this)
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, Q._mergeSVGProperties(i(this, as).getPathTranslatedSVGProperties(b(this, tt, Iu).call(this), this.parentDimensions), {
      bbox: b(this, tt, io).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, i(this, Mh) && (u(this, Mh, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, tt, xm).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, tt, gl).call(this), b(this, tt, ml).call(this, i(this, as).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, tt, xm).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, tt, gl).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, Q._mergeSVGProperties({
      bbox: b(this, tt, io).call(this)
    }, i(this, as).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, tt, ml).call(this, i(this, as).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
    nt("Not implemented");
  }
  static startDrawing(e, s, n, r) {
    const {
      target: a,
      offsetX: o,
      offsetY: h,
      pointerId: l,
      pointerType: c
    } = r;
    if (ye.isInitializedAndDifferentPointerType(c))
      return;
    const {
      viewport: {
        rotation: d
      }
    } = e, {
      width: p,
      height: A
    } = a.getBoundingClientRect(), w = u(Q, Ia, new AbortController()), y = e.combinedSignal(w);
    if (ye.setPointer(c, l), window.addEventListener("pointerup", (S) => {
      ye.isSamePointerIdOrRemove(S.pointerId) && this._endDraw(S);
    }, {
      signal: y
    }), window.addEventListener("pointercancel", (S) => {
      ye.isSamePointerIdOrRemove(S.pointerId) && this._currentParent.endDrawingSession();
    }, {
      signal: y
    }), window.addEventListener("pointerdown", (S) => {
      ye.isSamePointerType(S.pointerType) && (ye.initializeAndAddPointerId(S.pointerId), i(Q, ie).isCancellable() && (i(Q, ie).removeLastElement(), i(Q, ie).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: y
    }), window.addEventListener("contextmenu", Ds, {
      signal: y
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: y
    }), a.addEventListener("touchmove", (S) => {
      ye.isSameTimeStamp(S.timeStamp) && Ft(S);
    }, {
      signal: y
    }), e.toggleDrawing(), s._editorUndoBar?.hide(), i(Q, ie)) {
      e.drawLayer.updateProperties(this._currentDrawId, i(Q, ie).startNew(o, h, p, A, d));
      return;
    }
    s.updateUIForDefaultProperties(this), u(Q, ie, this.createDrawerInstance(o, h, p, A, d)), u(Q, La, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(i(Q, La).toSVGProperties(), i(Q, ie).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    if (ye.isSameTimeStamp(e.timeStamp), !i(Q, ie))
      return;
    const {
      offsetX: s,
      offsetY: n,
      pointerId: r
    } = e;
    if (ye.isSamePointerId(r)) {
      if (ye.isUsingMultiplePointers()) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, i(Q, ie).add(s, n)), ye.setTimeStamp(e.timeStamp), Ft(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, u(Q, ie, null), u(Q, La, null), ye.clearTimeStamp()), i(Q, Ia) && (i(Q, Ia).abort(), u(Q, Ia, null), ye.clearPointerIds());
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e?.target === s.div && s.drawLayer.updateProperties(this._currentDrawId, i(Q, ie).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const n = i(Q, ie), r = this._currentDrawId, a = n.getLastElement();
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
    if (s.toggleDrawing(!0), s.cleanUndoStack(Z.DRAW_STEP), !i(Q, ie).isEmpty()) {
      const {
        pageDimensions: [n, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: i(Q, ie).getOutlines(n * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: i(Q, La),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, n, r, a, o) {
    nt("Not implemented");
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
    return c.createDrawingOptions(e), b(d = c, tt, Cm).call(d, {
      drawOutlines: l
    }), b(p = c, tt, gl).call(p), c.onScaleChanging(), c.rotate(), c;
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
as = new WeakMap(), Mh = new WeakMap(), ie = new WeakMap(), Ia = new WeakMap(), La = new WeakMap(), tt = new WeakSet(), Cm = /* @__PURE__ */ f(function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: n
}) {
  u(this, as, e), this._drawingOptions ||= n, this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, tt, Tm).call(this, e, this.parent), b(this, tt, ml).call(this, e.box);
}, "#createDrawOutlines"), Tm = /* @__PURE__ */ f(function(e, s) {
  const {
    id: n
  } = s.drawLayer.draw(Q._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return n;
}, "#createDrawing"), xm = /* @__PURE__ */ f(function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, "#cleanDrawLayer"), gl = /* @__PURE__ */ f(function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, tt, Tm).call(this, i(this, as), e);
  }
}, "#addToDrawLayer"), i0 = /* @__PURE__ */ f(function([e, s, n, r]) {
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
}, "#convertToParentSpace"), Iu = /* @__PURE__ */ f(function() {
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
}, "#convertToDrawSpace"), ml = /* @__PURE__ */ f(function(e) {
  [this.x, this.y, this.width, this.height] = b(this, tt, i0).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, "#updateBbox"), io = /* @__PURE__ */ f(function() {
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
}, "#rotateBox"), f(Q, "DrawingEditor"), M(Q, "_currentDrawId", -1), M(Q, "_currentParent", null), m(Q, ie, null), m(Q, Ia, null), m(Q, La, null), M(Q, "_INNER_MARGIN", 3);
let pf = Q;
var wi, ne, re, Da, Ph, _e, pe, Ps, Ra, Na, Oa, Ih, Lu;
const $A = class $A {
  constructor(t, e, s, n, r, a) {
    m(this, Ih);
    m(this, wi, new Float64Array(6));
    m(this, ne);
    m(this, re);
    m(this, Da);
    m(this, Ph);
    m(this, _e);
    m(this, pe, "");
    m(this, Ps, 0);
    m(this, Ra, new Xa());
    m(this, Na);
    m(this, Oa);
    u(this, Na, s), u(this, Oa, n), u(this, Da, r), u(this, Ph, a), [t, e] = b(this, Ih, Lu).call(this, t, e);
    const o = u(this, ne, [NaN, NaN, NaN, NaN, t, e]);
    u(this, _e, [t, e]), u(this, re, [{
      line: o,
      points: i(this, _e)
    }]), i(this, wi).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && u(this, Ph, e);
  }
  isEmpty() {
    return !i(this, re) || i(this, re).length === 0;
  }
  isCancellable() {
    return i(this, _e).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, Ih, Lu).call(this, t, e);
    const [s, n, r, a] = i(this, wi).subarray(2, 6), o = t - r, h = e - a;
    return Math.hypot(i(this, Na) * o, i(this, Oa) * h) <= 2 ? null : (i(this, _e).push(t, e), isNaN(s) ? (i(this, wi).set([r, a, t, e], 2), i(this, ne).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(i(this, wi)[0]) && i(this, ne).splice(6, 6), i(this, wi).set([s, n, r, a, t, e], 0), i(this, ne).push(...O.createBezierPoints(s, n, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (i(this, _e).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, n, r) {
    u(this, Na, s), u(this, Oa, n), u(this, Da, r), [t, e] = b(this, Ih, Lu).call(this, t, e);
    const a = u(this, ne, [NaN, NaN, NaN, NaN, t, e]);
    u(this, _e, [t, e]);
    const o = i(this, re).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), i(this, re).push({
      line: a,
      points: i(this, _e)
    }), i(this, wi).set(a, 0), u(this, Ps, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return i(this, re).at(-1);
  }
  setLastElement(t) {
    return i(this, re) ? (i(this, re).push(t), u(this, ne, t.line), u(this, _e, t.points), u(this, Ps, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : i(this, Ra).setLastElement(t);
  }
  removeLastElement() {
    if (!i(this, re))
      return i(this, Ra).removeLastElement();
    i(this, re).pop(), u(this, pe, "");
    for (let t = 0, e = i(this, re).length; t < e; t++) {
      const {
        line: s,
        points: n
      } = i(this, re)[t];
      u(this, ne, s), u(this, _e, n), u(this, Ps, 0), this.toSVGPath();
    }
    return {
      path: {
        d: i(this, pe)
      }
    };
  }
  toSVGPath() {
    const t = O.svgRound(i(this, ne)[4]), e = O.svgRound(i(this, ne)[5]);
    if (i(this, _e).length === 2)
      return u(this, pe, `${i(this, pe)} M ${t} ${e} Z`), i(this, pe);
    if (i(this, _e).length <= 6) {
      const n = i(this, pe).lastIndexOf("M");
      u(this, pe, `${i(this, pe).slice(0, n)} M ${t} ${e}`), u(this, Ps, 6);
    }
    if (i(this, _e).length === 4) {
      const n = O.svgRound(i(this, ne)[10]), r = O.svgRound(i(this, ne)[11]);
      return u(this, pe, `${i(this, pe)} L ${n} ${r}`), u(this, Ps, 12), i(this, pe);
    }
    const s = [];
    i(this, Ps) === 0 && (s.push(`M ${t} ${e}`), u(this, Ps, 6));
    for (let n = i(this, Ps), r = i(this, ne).length; n < r; n += 6) {
      const [a, o, h, l, c, d] = i(this, ne).slice(n, n + 6).map(O.svgRound);
      s.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
    }
    return u(this, pe, i(this, pe) + s.join(" ")), u(this, Ps, i(this, ne).length), i(this, pe);
  }
  getOutlines(t, e, s, n) {
    const r = i(this, re).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), i(this, Ra).build(i(this, re), t, e, s, i(this, Da), i(this, Ph), n), u(this, wi, null), u(this, ne, null), u(this, re, null), u(this, pe, null), i(this, Ra);
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
wi = new WeakMap(), ne = new WeakMap(), re = new WeakMap(), Da = new WeakMap(), Ph = new WeakMap(), _e = new WeakMap(), pe = new WeakMap(), Ps = new WeakMap(), Ra = new WeakMap(), Na = new WeakMap(), Oa = new WeakMap(), Ih = new WeakSet(), Lu = /* @__PURE__ */ f(function(t, e) {
  return O._normalizePoint(t, e, i(this, Na), i(this, Oa), i(this, Da));
}, "#normalizePoint"), f($A, "InkDrawOutliner");
let _m = $A;
var ke, jd, Gd, os, vi, Si, Lh, Dh, Fa, me, Pi, n0, r0, a0;
const zA = class zA extends O {
  constructor() {
    super(...arguments);
    m(this, me);
    m(this, ke);
    m(this, jd, 0);
    m(this, Gd);
    m(this, os);
    m(this, vi);
    m(this, Si);
    m(this, Lh);
    m(this, Dh);
    m(this, Fa);
  }
  build(e, s, n, r, a, o, h) {
    u(this, vi, s), u(this, Si, n), u(this, Lh, r), u(this, Dh, a), u(this, Fa, o), u(this, Gd, h ?? 0), u(this, os, e), b(this, me, r0).call(this);
  }
  get thickness() {
    return i(this, Fa);
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
      if (e.push(`M${O.svgRound(s[4])} ${O.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${O.svgRound(s[10])} ${O.svgRound(s[11])}`);
        continue;
      }
      for (let n = 6, r = s.length; n < r; n += 6) {
        const [a, o, h, l, c, d] = s.subarray(n, n + 6).map(O.svgRound);
        e.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, n, r], a) {
    const o = [], h = [], [l, c, d, p] = b(this, me, n0).call(this);
    let A, w, y, S, v, C, E, T, x;
    switch (i(this, Dh)) {
      case 0:
        x = O._rescale, A = e, w = s + r, y = n, S = -r, v = e + l * n, C = s + (1 - c - p) * r, E = e + (l + d) * n, T = s + (1 - c) * r;
        break;
      case 90:
        x = O._rescaleAndSwap, A = e, w = s, y = n, S = r, v = e + c * n, C = s + l * r, E = e + (c + p) * n, T = s + (l + d) * r;
        break;
      case 180:
        x = O._rescale, A = e + n, w = s, y = -n, S = r, v = e + (1 - l - d) * n, C = s + c * r, E = e + (1 - l) * n, T = s + (c + p) * r;
        break;
      case 270:
        x = O._rescaleAndSwap, A = e + n, w = s + r, y = -n, S = -r, v = e + (1 - c - p) * n, C = s + (1 - l - d) * r, E = e + (1 - c) * n, T = s + (1 - l) * r;
        break;
    }
    for (const {
      line: _,
      points: k
    } of i(this, os))
      o.push(x(_, A, w, y, S, a ? new Array(_.length) : null)), h.push(x(k, A, w, y, S, a ? new Array(k.length) : null));
    return {
      lines: o,
      points: h,
      rect: [v, C, E, T]
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
    let p, A, w, y, S;
    switch (l) {
      case 0:
        S = O._rescale, p = -e / n, A = s / r + 1, w = 1 / n, y = -1 / r;
        break;
      case 90:
        S = O._rescaleAndSwap, p = -s / r, A = -e / n, w = 1 / r, y = 1 / n;
        break;
      case 180:
        S = O._rescale, p = e / n + 1, A = -s / r, w = -1 / n, y = 1 / r;
        break;
      case 270:
        S = O._rescaleAndSwap, p = s / r + 1, A = e / n + 1, w = -1 / r, y = -1 / n;
        break;
    }
    if (!o) {
      o = [];
      for (const C of h) {
        const E = C.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, C[0], C[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, C[0], C[1], NaN, NaN, NaN, NaN, C[2], C[3]]));
          continue;
        }
        const T = new Float32Array(3 * (E - 2));
        o.push(T);
        let [x, _, k, P] = C.subarray(0, 4);
        T.set([NaN, NaN, NaN, NaN, x, _], 0);
        for (let I = 4; I < E; I += 2) {
          const N = C[I], L = C[I + 1];
          T.set(O.createBezierPoints(x, _, k, P, N, L), (I - 2) * 3), [x, _, k, P] = [k, P, N, L];
        }
      }
    }
    for (let C = 0, E = o.length; C < E; C++)
      d.push({
        line: S(o[C].map((T) => T ?? NaN), p, A, w, y),
        points: S(h[C].map((T) => T ?? NaN), p, A, w, y)
      });
    const v = new this.prototype.constructor();
    return v.build(d, n, r, 1, l, c, a), v;
  }
  get box() {
    return i(this, ke);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, me, a0).call(this, s) : null;
  }
  updateParentDimensions([e, s], n) {
    const [r, a] = b(this, me, Pi).call(this);
    u(this, vi, e), u(this, Si, s), u(this, Lh, n);
    const [o, h] = b(this, me, Pi).call(this), l = o - r, c = h - a, d = i(this, ke);
    return d[0] -= l, d[1] -= c, d[2] += 2 * l, d[3] += 2 * c, d;
  }
  updateRotation(e) {
    return u(this, jd, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return i(this, ke).map(O.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = i(this, ke);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = i(this, ke);
    let n = 0, r = 0, a = 0, o = 0, h = 0, l = 0;
    switch (i(this, jd)) {
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
    return `matrix(${n} ${r} ${a} ${o} ${O.svgRound(h)} ${O.svgRound(l)})`;
  }
  getPathResizingSVGProperties([e, s, n, r]) {
    const [a, o] = b(this, me, Pi).call(this), [h, l, c, d] = i(this, ke);
    if (Math.abs(c - a) <= O.PRECISION || Math.abs(d - o) <= O.PRECISION) {
      const S = e + n / 2 - (h + c / 2), v = s + r / 2 - (l + d / 2);
      return {
        path: {
          "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${S} ${v})`
        }
      };
    }
    const p = (n - 2 * a) / (c - 2 * a), A = (r - 2 * o) / (d - 2 * o), w = c / n, y = d / r;
    return {
      path: {
        "transform-origin": `${O.svgRound(h)} ${O.svgRound(l)}`,
        transform: `${this.rotationTransform} scale(${w} ${y}) translate(${O.svgRound(a)} ${O.svgRound(o)}) scale(${p} ${A}) translate(${O.svgRound(-a)} ${O.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, n, r]) {
    const [a, o] = b(this, me, Pi).call(this), h = i(this, ke), [l, c, d, p] = h;
    if (h[0] = e, h[1] = s, h[2] = n, h[3] = r, Math.abs(d - a) <= O.PRECISION || Math.abs(p - o) <= O.PRECISION) {
      const v = e + n / 2 - (l + d / 2), C = s + r / 2 - (c + p / 2);
      for (const {
        line: E,
        points: T
      } of i(this, os))
        O._translate(E, v, C, E), O._translate(T, v, C, T);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const A = (n - 2 * a) / (d - 2 * a), w = (r - 2 * o) / (p - 2 * o), y = -A * (l + a) + e + a, S = -w * (c + o) + s + o;
    if (A !== 1 || w !== 1 || y !== 0 || S !== 0)
      for (const {
        line: v,
        points: C
      } of i(this, os))
        O._rescale(v, y, S, A, w, v), O._rescale(C, y, S, A, w, C);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], n) {
    const [r, a] = n, o = i(this, ke), h = e - o[0], l = s - o[1];
    if (i(this, vi) === r && i(this, Si) === a)
      for (const {
        line: c,
        points: d
      } of i(this, os))
        O._translate(c, h, l, c), O._translate(d, h, l, d);
    else {
      const c = i(this, vi) / r, d = i(this, Si) / a;
      u(this, vi, r), u(this, Si, a);
      for (const {
        line: p,
        points: A
      } of i(this, os))
        O._rescale(p, h, l, c, d, p), O._rescale(A, h, l, c, d, A);
      o[2] *= c, o[3] *= d;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = i(this, ke);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${O.svgRound(e[0])} ${O.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
ke = new WeakMap(), jd = new WeakMap(), Gd = new WeakMap(), os = new WeakMap(), vi = new WeakMap(), Si = new WeakMap(), Lh = new WeakMap(), Dh = new WeakMap(), Fa = new WeakMap(), me = new WeakSet(), Pi = /* @__PURE__ */ f(function(e = i(this, Fa)) {
  const s = i(this, Gd) + e / 2 * i(this, Lh);
  return i(this, Dh) % 180 === 0 ? [s / i(this, vi), s / i(this, Si)] : [s / i(this, Si), s / i(this, vi)];
}, "#getMarginComponents"), n0 = /* @__PURE__ */ f(function() {
  const [e, s, n, r] = i(this, ke), [a, o] = b(this, me, Pi).call(this, 0);
  return [e + a, s + o, n - 2 * a, r - 2 * o];
}, "#getBBoxWithNoMargin"), r0 = /* @__PURE__ */ f(function() {
  const e = u(this, ke, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of i(this, os)) {
    if (r.length <= 12) {
      for (let h = 4, l = r.length; h < l; h += 6)
        R.pointBoundingBox(r[h], r[h + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let h = 6, l = r.length; h < l; h += 6) {
      const [c, d, p, A, w, y] = r.subarray(h, h + 6);
      R.bezierBoundingBox(a, o, c, d, p, A, w, y, e), a = w, o = y;
    }
  }
  const [s, n] = b(this, me, Pi).call(this);
  e[0] = he(e[0] - s, 0, 1), e[1] = he(e[1] - n, 0, 1), e[2] = he(e[2] + s, 0, 1), e[3] = he(e[3] + n, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, "#computeBbox"), a0 = /* @__PURE__ */ f(function(e) {
  const [s, n] = b(this, me, Pi).call(this);
  u(this, Fa, e);
  const [r, a] = b(this, me, Pi).call(this), [o, h] = [r - s, a - n], l = i(this, ke);
  return l[0] -= o, l[1] -= h, l[2] += 2 * o, l[3] += 2 * h, l;
}, "#updateThickness"), f(zA, "InkDrawOutline");
let Xa = zA;
const $f = class $f extends ff {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: St._defaultLineColor,
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
    const t = new $f(this._viewParameters);
    return t.updateAll(this), t;
  }
};
f($f, "InkDrawingOptions");
let gf = $f;
var zf, o0;
const Pr = class Pr extends pf {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, zf);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    St.initialize(e, s), this._defaultDrawingOptions = new gf(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return z(this, "typesMap", /* @__PURE__ */ new Map([[Z.INK_THICKNESS, "stroke-width"], [Z.INK_COLOR, "stroke"], [Z.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, n, r, a) {
    return new _m(e, s, n, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, n, r, a, o) {
    return Xa.deserialize(e, s, n, r, a, o);
  }
  static async deserialize(e, s, n) {
    let r = null;
    if (e instanceof Vl) {
      const {
        data: {
          inkLists: o,
          rect: h,
          rotation: l,
          id: c,
          color: d,
          opacity: p,
          borderStyle: {
            rawWidth: A
          },
          popupRef: w,
          richText: y,
          contentsObj: S,
          creationDate: v,
          modificationDate: C
        },
        parent: {
          page: {
            pageNumber: E
          }
        }
      } = e;
      r = e = {
        annotationType: G.INK,
        color: Array.from(d),
        thickness: A,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: E - 1,
        rect: h.slice(0),
        rotation: l,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: w,
        richText: y,
        comment: S?.str || null,
        creationDate: v,
        modificationDate: C
      };
    }
    const a = await super.deserialize(e, s, n);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker ||= new sf(this), [["colorPicker", this._colorPicker]];
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
    this._drawingOptions = Pr.getDefaultDrawingOptions({
      stroke: R.makeHexColor(...e),
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
      color: St._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: s,
        points: n
      }
    });
    return this.addComment(h), e ? (h.isCopy = !0, h) : this.annotationElementId && !b(this, zf, o0).call(this, h) ? null : (h.id = this.annotationElementId, h);
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
zf = new WeakSet(), o0 = /* @__PURE__ */ f(function(e) {
  const {
    color: s,
    thickness: n,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, h) => o !== s[h]) || e.thickness !== n || e.opacity !== r || e.pageIndex !== a;
}, "#hasElementChanged"), f(Pr, "InkEditor"), M(Pr, "_type", "ink"), M(Pr, "_editorType", G.INK), M(Pr, "_defaultDrawingOptions", null);
let km = Pr;
const jA = class jA extends Xa {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
};
f(jA, "ContourDrawOutline");
let Yl = jA;
const eu = 8, qh = 3;
var Ba, ot, Mm, Vs, h0, l0, Pm, Du, c0, d0, u0, Im, Lm, f0;
const oo = class oo {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: n
  }, r, a, o, h) {
    let l = new OffscreenCanvas(1, 1), c = l.getContext("2d", {
      alpha: !1
    });
    const d = 200, p = c.font = `${s} ${n} ${d}px ${e}`, {
      actualBoundingBoxLeft: A,
      actualBoundingBoxRight: w,
      actualBoundingBoxAscent: y,
      actualBoundingBoxDescent: S,
      fontBoundingBoxAscent: v,
      fontBoundingBoxDescent: C,
      width: E
    } = c.measureText(t), T = 1.5, x = Math.ceil(Math.max(Math.abs(A) + Math.abs(w) || 0, E) * T), _ = Math.ceil(Math.max(Math.abs(y) + Math.abs(S) || d, Math.abs(v) + Math.abs(C) || d) * T);
    l = new OffscreenCanvas(x, _), c = l.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = p, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, x, _), c.fillStyle = "black", c.fillText(t, x * (T - 1) / 2, _ * (3 - T) / 2);
    const k = b(this, ot, Im).call(this, c.getImageData(0, 0, x, _).data), P = b(this, ot, u0).call(this, k), I = b(this, ot, Lm).call(this, P), N = b(this, ot, Pm).call(this, k, x, _, I);
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
    const [a, o, h] = b(this, ot, f0).call(this, t), [l, c] = b(this, ot, d0).call(this, a, o, h, Math.hypot(o, h) * i(this, Ba).sigmaSFactor, i(this, Ba).sigmaR, i(this, Ba).kernelSize), d = b(this, ot, Lm).call(this, c), p = b(this, ot, Pm).call(this, l, o, h, d);
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
    } = t, d = t.thickness ?? 0, p = [], A = Math.min(e / l, s / c), w = A / e, y = A / s, S = [];
    for (const {
      points: C
    } of h) {
      const E = a ? b(this, ot, c0).call(this, C) : C;
      if (!E)
        continue;
      S.push(E);
      const T = E.length, x = new Float32Array(T), _ = new Float32Array(3 * (T === 2 ? 2 : T - 2));
      if (p.push({
        line: _,
        points: x
      }), T === 2) {
        x[0] = E[0] * w, x[1] = E[1] * y, _.set([NaN, NaN, NaN, NaN, x[0], x[1]], 0);
        continue;
      }
      let [k, P, I, N] = E;
      k *= w, P *= y, I *= w, N *= y, x.set([k, P, I, N], 0), _.set([NaN, NaN, NaN, NaN, k, P], 0);
      for (let L = 4; L < T; L += 2) {
        const st = x[L] = E[L] * w, J = x[L + 1] = E[L + 1] * y;
        _.set(O.createBezierPoints(k, P, I, N, st, J), (L - 2) * 3), [k, P, I, N] = [I, N, st, J];
      }
    }
    if (p.length === 0)
      return null;
    const v = o ? new Yl() : new Xa();
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
      for (let T = 2, x = E.length; T < x; T++) {
        const _ = E[T] - E[T - 2];
        a = Math.min(a, _), o = Math.max(o, _);
      }
    }
    let l;
    a >= -128 && o <= 127 ? l = Int8Array : a >= -32768 && o <= 32767 ? l = Int16Array : l = Int32Array;
    const c = t.length, d = eu + qh * c, p = new Uint32Array(d);
    let A = 0;
    p[A++] = d * Uint32Array.BYTES_PER_ELEMENT + (h - 2 * c) * l.BYTES_PER_ELEMENT, p[A++] = 0, p[A++] = n, p[A++] = r, p[A++] = e ? 0 : 1, p[A++] = Math.max(0, Math.floor(s ?? 0)), p[A++] = c, p[A++] = l.BYTES_PER_ELEMENT;
    for (const E of t)
      p[A++] = E.length - 2, p[A++] = E[0], p[A++] = E[1];
    const w = new CompressionStream("deflate-raw"), y = w.writable.getWriter();
    await y.ready, y.write(p);
    const S = l.prototype.constructor;
    for (const E of t) {
      const T = new S(E.length - 2);
      for (let x = 2, _ = E.length; x < _; x++)
        T[x - 2] = E[x] - E[x - 2];
      y.write(T);
    }
    y.close();
    const v = await new Response(w.readable).arrayBuffer();
    return new Uint8Array(v).toBase64();
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
      for await (const E of s)
        a ||= new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0]), a.set(E, o), o += E.length;
      const h = new Uint32Array(a.buffer, 0, a.length >> 2), l = h[1];
      if (l !== 0)
        throw new Error(`Invalid version: ${l}`);
      const c = h[2], d = h[3], p = h[4] === 0, A = h[5], w = h[6], y = h[7], S = [], v = (eu + qh * w) * Uint32Array.BYTES_PER_ELEMENT;
      let C;
      switch (y) {
        case Int8Array.BYTES_PER_ELEMENT:
          C = new Int8Array(a.buffer, v);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          C = new Int16Array(a.buffer, v);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          C = new Int32Array(a.buffer, v);
          break;
      }
      o = 0;
      for (let E = 0; E < w; E++) {
        const T = h[qh * E + eu], x = new Float32Array(T + 2);
        S.push(x);
        for (let _ = 0; _ < qh - 1; _++)
          x[_] = h[qh * E + eu + _ + 1];
        for (let _ = 0; _ < T; _++)
          x[_ + 2] = x[_] + C[o++];
      }
      return {
        areContours: p,
        thickness: A,
        outlines: S,
        width: c,
        height: d
      };
    } catch (e) {
      return V(`decompressSignature: ${e}`), null;
    }
  }
};
Ba = new WeakMap(), ot = new WeakSet(), Mm = /* @__PURE__ */ f(function(t, e, s, n) {
  return s -= t, n -= e, s === 0 ? n > 0 ? 0 : 4 : s === 1 ? n + 6 : 2 - n;
}, "#neighborIndexToId"), Vs = new WeakMap(), h0 = /* @__PURE__ */ f(function(t, e, s, n, r, a, o) {
  const h = b(this, ot, Mm).call(this, s, n, r, a);
  for (let l = 0; l < 8; l++) {
    const c = (-l + h - o + 16) % 8, d = i(this, Vs)[2 * c], p = i(this, Vs)[2 * c + 1];
    if (t[(s + d) * e + (n + p)] !== 0)
      return c;
  }
  return -1;
}, "#clockwiseNonZero"), l0 = /* @__PURE__ */ f(function(t, e, s, n, r, a, o) {
  const h = b(this, ot, Mm).call(this, s, n, r, a);
  for (let l = 0; l < 8; l++) {
    const c = (l + h + o + 16) % 8, d = i(this, Vs)[2 * c], p = i(this, Vs)[2 * c + 1];
    if (t[(s + d) * e + (n + p)] !== 0)
      return c;
  }
  return -1;
}, "#counterClockwiseNonZero"), Pm = /* @__PURE__ */ f(function(t, e, s, n) {
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
      const p = c * e + d, A = a[p];
      if (A === 0)
        continue;
      let w = c, y = d;
      if (A === 1 && a[p - 1] === 0)
        o += 1, y -= 1;
      else if (A >= 1 && a[p + 1] === 0)
        o += 1, y += 1, A > 1 && (h = A);
      else {
        A !== 1 && (h = Math.abs(A));
        continue;
      }
      const S = [d, c], v = y === d + 1, C = {
        isHole: v,
        points: S,
        id: o,
        parent: 0
      };
      l.push(C);
      let E;
      for (const L of l)
        if (L.id === h) {
          E = L;
          break;
        }
      E ? E.isHole ? C.parent = v ? E.parent : h : C.parent = v ? h : E.parent : C.parent = v ? h : 0;
      const T = b(this, ot, h0).call(this, a, e, c, d, w, y, 0);
      if (T === -1) {
        a[p] = -o, a[p] !== 1 && (h = Math.abs(a[p]));
        continue;
      }
      let x = i(this, Vs)[2 * T], _ = i(this, Vs)[2 * T + 1];
      const k = c + x, P = d + _;
      w = k, y = P;
      let I = c, N = d;
      for (; ; ) {
        const L = b(this, ot, l0).call(this, a, e, I, N, w, y, 1);
        x = i(this, Vs)[2 * L], _ = i(this, Vs)[2 * L + 1];
        const st = I + x, J = N + _;
        S.push(J, st);
        const W = I * e + N;
        if (a[W + 1] === 0 ? a[W] = -o : a[W] === 1 && (a[W] = o), st === c && J === d && I === k && N === P) {
          a[p] !== 1 && (h = Math.abs(a[p]));
          break;
        } else
          w = I, y = N, I = st, N = J;
      }
    }
  }
  return l;
}, "#findContours"), Du = /* @__PURE__ */ f(function(t, e, s, n) {
  if (s - e <= 4) {
    for (let k = e; k < s - 2; k += 2)
      n.push(t[k], t[k + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, h = t[s - 3] - a, l = Math.hypot(o, h), c = o / l, d = h / l, p = c * a - d * r, A = h / o, w = 1 / l, y = Math.atan(A), S = Math.cos(y), v = Math.sin(y), C = w * (Math.abs(S) + Math.abs(v)), E = w * (1 - C + C ** 2), T = Math.max(Math.atan(Math.abs(v + S) * E), Math.atan(Math.abs(v - S) * E));
  let x = 0, _ = e;
  for (let k = e + 2; k < s - 2; k += 2) {
    const P = Math.abs(p - c * t[k + 1] + d * t[k]);
    P > x && (_ = k, x = P);
  }
  x > (l * T) ** 2 ? (b(this, ot, Du).call(this, t, e, _ + 2, n), b(this, ot, Du).call(this, t, _, s, n)) : n.push(r, a);
}, "#douglasPeuckerHelper"), c0 = /* @__PURE__ */ f(function(t) {
  const e = [], s = t.length;
  return b(this, ot, Du).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, "#douglasPeucker"), d0 = /* @__PURE__ */ f(function(t, e, s, n, r, a) {
  const o = new Float32Array(a ** 2), h = -2 * n ** 2, l = a >> 1;
  for (let y = 0; y < a; y++) {
    const S = (y - l) ** 2;
    for (let v = 0; v < a; v++)
      o[y * a + v] = Math.exp((S + (v - l) ** 2) / h);
  }
  const c = new Float32Array(256), d = -2 * r ** 2;
  for (let y = 0; y < 256; y++)
    c[y] = Math.exp(y ** 2 / d);
  const p = t.length, A = new Uint8Array(p), w = new Uint32Array(256);
  for (let y = 0; y < s; y++)
    for (let S = 0; S < e; S++) {
      const v = y * e + S, C = t[v];
      let E = 0, T = 0;
      for (let _ = 0; _ < a; _++) {
        const k = y + _ - l;
        if (!(k < 0 || k >= s))
          for (let P = 0; P < a; P++) {
            const I = S + P - l;
            if (I < 0 || I >= e)
              continue;
            const N = t[k * e + I], L = o[_ * a + P] * c[Math.abs(N - C)];
            E += N * L, T += L;
          }
      }
      const x = A[v] = Math.round(E / T);
      w[x]++;
    }
  return [A, w];
}, "#bilateralFilter"), u0 = /* @__PURE__ */ f(function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, "#getHistogram"), Im = /* @__PURE__ */ f(function(t) {
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
}, "#toUint8"), Lm = /* @__PURE__ */ f(function(t) {
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
}, "#guessThreshold"), f0 = /* @__PURE__ */ f(function(t) {
  const e = t, {
    width: s,
    height: n
  } = t, {
    maxDim: r
  } = i(this, Ba);
  let a = s, o = n;
  if (s > r || n > r) {
    let p = s, A = n, w = Math.log2(Math.max(s, n) / r);
    const y = Math.floor(w);
    w = w === y ? y - 1 : y;
    for (let v = 0; v < w; v++) {
      a = Math.ceil(p / 2), o = Math.ceil(A / 2);
      const C = new OffscreenCanvas(a, o);
      C.getContext("2d").drawImage(t, 0, 0, p, A, 0, 0, a, o), p = a, A = o, t !== e && t.close(), t = C.transferToImageBitmap();
    }
    const S = Math.min(r / a, r / o);
    a = Math.round(a * S), o = Math.round(o * S);
  }
  const l = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  l.fillStyle = "white", l.fillRect(0, 0, a, o), l.filter = "grayscale(1)", l.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = l.getImageData(0, 0, a, o).data;
  return [b(this, ot, Im).call(this, c), a, o];
}, "#getGrayPixels"), m(oo, ot), f(oo, "SignatureExtractor"), m(oo, Ba, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), m(oo, Vs, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
let _n = oo;
const jf = class jf extends ff {
  constructor() {
    super(), super.updateProperties({
      fill: St._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new jf();
    return t.updateAll(this), t;
  }
};
f(jf, "SignatureOptions");
let Dm = jf;
const Gf = class Gf extends gf {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: St._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Gf(this._viewParameters);
    return t.updateAll(this), t;
  }
};
f(Gf, "DrawnSignatureOptions");
let Rm = Gf;
var ur, Ei, fr, Ua;
const Re = class Re extends pf {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    m(this, ur, !1);
    m(this, Ei, null);
    m(this, fr, null);
    m(this, Ua, null);
    this._willKeepAspectRatio = !0, u(this, fr, e.signatureData || null), u(this, Ei, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    St.initialize(e, s), this._defaultDrawingOptions = new Dm(), this._defaultDrawnSignatureOptions = new Rm(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return z(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!i(this, Ei)
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
      if (i(this, fr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: h,
          uuid: l,
          heightInPage: c
        } = i(this, fr), {
          rawDims: {
            pageWidth: d,
            pageHeight: p
          },
          rotation: A
        } = this.parent.viewport, w = _n.processDrawnLines({
          lines: r,
          pageWidth: d,
          pageHeight: p,
          rotation: A,
          innerMargin: Re._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(w, c, h, l);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: i(this, Ei) || ""
      }));
    return n && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    u(this, Ua, e), this.addEditToolbar();
  }
  getUuid() {
    return i(this, Ua);
  }
  get description() {
    return i(this, Ei);
  }
  set description(e) {
    u(this, Ei, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
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
    } = i(this, fr), o = Math.max(r, a), h = _n.processDrawnLines({
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
    } = u(this, fr, e);
    u(this, ur, h instanceof Yl), this.description = n;
    let l;
    i(this, ur) ? l = Re.getDefaultDrawingOptions() : (l = Re._defaultDrawnSignatureOptions.clone(), l.updateProperties({
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
    return _n.process(e, s, n, r, Re._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return _n.extractContoursFromText(e, s, n, r, a, Re._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: n
      },
      rotation: r
    } = this.parent.viewport;
    return _n.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: n,
      rotation: r,
      innerMargin: Re._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = Re.getDefaultDrawingOptions() : (this._drawingOptions = Re._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
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
      areContours: i(this, ur),
      color: [0, 0, 0],
      thickness: i(this, ur) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: s,
      points: n
    }, a.uuid = i(this, Ua), a.isCopy = !0) : a.lines = s, i(this, Ei) && (a.accessibilityData = {
      type: "Figure",
      alt: i(this, Ei)
    }), a;
  }
  static deserializeDraw(e, s, n, r, a, o) {
    return o.areContours ? Yl.deserialize(e, s, n, r, a, o) : Xa.deserialize(e, s, n, r, a, o);
  }
  static async deserialize(e, s, n) {
    const r = await super.deserialize(e, s, n);
    return u(r, ur, e.areContours), r.description = e.accessibilityData?.alt || "", u(r, Ua, e.uuid), r;
  }
};
ur = new WeakMap(), Ei = new WeakMap(), fr = new WeakMap(), Ua = new WeakMap(), f(Re, "SignatureEditor"), M(Re, "_type", "signature"), M(Re, "_editorType", G.SIGNATURE), M(Re, "_defaultDrawingOptions", null);
let Nm = Re;
var kt, ae, pr, on, gr, Rh, hn, Ha, Ci, hs, Nh, et, bl, Al, Ru, Nu, Ou, Fm, Fu, p0;
const _l = class _l extends St {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, et);
    m(this, kt, null);
    m(this, ae, null);
    m(this, pr, null);
    m(this, on, null);
    m(this, gr, null);
    m(this, Rh, "");
    m(this, hn, null);
    m(this, Ha, !1);
    m(this, Ci, null);
    m(this, hs, !1);
    m(this, Nh, !1);
    u(this, on, e.bitmapUrl), u(this, gr, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    St.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return pp.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: G.STAMP
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
    i(this, ae) && (u(this, kt, null), this._uiManager.imageManager.deleteId(i(this, ae)), i(this, hn)?.remove(), u(this, hn, null), i(this, Ci) && (clearTimeout(i(this, Ci)), u(this, Ci, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      i(this, ae) && b(this, et, Ru).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (i(this, ae) && i(this, hn) === null && b(this, et, Ru).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(i(this, pr) || i(this, kt) || i(this, on) || i(this, gr) || i(this, ae) || i(this, Ha));
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
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), i(this, Ha) || (i(this, kt) ? b(this, et, Nu).call(this) : b(this, et, Ru).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: n,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), n && this._uiManager.imageManager.isValidId(n) && (u(this, ae, n), r && u(this, kt, r), u(this, Ha, !1), b(this, et, Nu).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    i(this, Ci) !== null && clearTimeout(i(this, Ci)), u(this, Ci, setTimeout(() => {
      u(this, Ci, null), b(this, et, Fm).call(this);
    }, 200));
  }
  copyCanvas(e, s, n = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = i(this, kt), o = new mn();
    let h = i(this, kt), l = r, c = a, d = null;
    if (s) {
      if (r > s || a > s) {
        const k = Math.min(s / r, s / a);
        l = Math.floor(r * k), c = Math.floor(a * k);
      }
      d = document.createElement("canvas");
      const A = d.width = Math.ceil(l * o.sx), w = d.height = Math.ceil(c * o.sy);
      i(this, hs) || (h = b(this, et, Ou).call(this, A, w));
      const y = d.getContext("2d");
      y.filter = this._uiManager.hcmFilter;
      let S = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : gp.isDarkMode && (S = "#8f8f9d", v = "#42414d");
      const C = 15, E = C * o.sx, T = C * o.sy, x = new OffscreenCanvas(E * 2, T * 2), _ = x.getContext("2d");
      _.fillStyle = S, _.fillRect(0, 0, E * 2, T * 2), _.fillStyle = v, _.fillRect(0, 0, E, T), _.fillRect(E, T, E, T), y.fillStyle = y.createPattern(x, "repeat"), y.fillRect(0, 0, A, w), y.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, w);
    }
    let p = null;
    if (n) {
      let A, w;
      if (o.symmetric && h.width < e && h.height < e)
        A = h.width, w = h.height;
      else if (h = i(this, kt), r > e || a > e) {
        const v = Math.min(e / r, e / a);
        A = Math.floor(r * v), w = Math.floor(a * v), i(this, hs) || (h = b(this, et, Ou).call(this, A, w));
      }
      const S = new OffscreenCanvas(A, w).getContext("2d", {
        willReadFrequently: !0
      });
      S.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, w), p = {
        width: A,
        height: w,
        data: S.getImageData(0, 0, A, w).data
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
    if (e instanceof lf) {
      const {
        data: {
          rect: S,
          rotation: v,
          id: C,
          structParent: E,
          popupRef: T,
          richText: x,
          contentsObj: _,
          creationDate: k,
          modificationDate: P
        },
        container: I,
        parent: {
          page: {
            pageNumber: N
          }
        },
        canvas: L
      } = e;
      let st, J;
      L ? (delete e.canvas, {
        id: st,
        bitmap: J
      } = n.imageManager.getFromCanvas(I.id, L), L.remove()) : (a = !0, e._hasNoCanvas = !0);
      const W = (await s._structTree.getAriaAttributes(`${no}${C}`))?.get("aria-label") || "";
      r = e = {
        annotationType: G.STAMP,
        bitmapId: st,
        bitmap: J,
        pageIndex: N - 1,
        rect: S.slice(0),
        rotation: v,
        annotationElementId: C,
        id: C,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: W
        },
        isSvg: !1,
        structParent: E,
        popupRef: T,
        richText: x,
        comment: _?.str || null,
        creationDate: k,
        modificationDate: P
      };
    }
    const o = await super.deserialize(e, s, n), {
      rect: h,
      bitmap: l,
      bitmapUrl: c,
      bitmapId: d,
      isSvg: p,
      accessibilityData: A
    } = e;
    a ? (n.addMissingCanvas(e.id, o), u(o, Ha, !0)) : d && n.imageManager.isValidId(d) ? (u(o, ae, d), l && u(o, kt, l)) : u(o, on, c), u(o, hs, p);
    const [w, y] = o.pageDimensions;
    return o.width = (h[2] - h[0]) / w, o.height = (h[3] - h[1]) / y, A && (o.altTextData = A), o._initialData = r, e.comment && o.setCommentData(e), u(o, Nh, !!r), o;
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
      return n.bitmapUrl = b(this, et, Fu).call(this, !0), n.accessibilityData = this.serializeAltText(!0), n.isCopy = !0, n;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (n.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const h = b(this, et, p0).call(this, n);
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
      }), n.bitmap = b(this, et, Fu).call(this, !1);
    else if (i(this, hs)) {
      const h = s.stamps.get(i(this, ae));
      o > h.area && (h.area = o, h.serialized.bitmap.close(), h.serialized.bitmap = b(this, et, Fu).call(this, !1));
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
kt = new WeakMap(), ae = new WeakMap(), pr = new WeakMap(), on = new WeakMap(), gr = new WeakMap(), Rh = new WeakMap(), hn = new WeakMap(), Ha = new WeakMap(), Ci = new WeakMap(), hs = new WeakMap(), Nh = new WeakMap(), et = new WeakSet(), bl = /* @__PURE__ */ f(function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  u(this, kt, e.bitmap), s || (u(this, ae, e.id), u(this, hs, e.isSvg)), e.file && u(this, Rh, e.file.name), b(this, et, Nu).call(this);
}, "#getBitmapFetched"), Al = /* @__PURE__ */ f(function() {
  if (u(this, pr, null), this._uiManager.enableWaiting(!1), !!i(this, hn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && i(this, kt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && i(this, kt)) {
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
}, "#getBitmapDone"), Ru = /* @__PURE__ */ f(function() {
  if (i(this, ae)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(i(this, ae)).then((n) => b(this, et, bl).call(this, n, !0)).finally(() => b(this, et, Al).call(this));
    return;
  }
  if (i(this, on)) {
    const n = i(this, on);
    u(this, on, null), this._uiManager.enableWaiting(!0), u(this, pr, this._uiManager.imageManager.getFromUrl(n).then((r) => b(this, et, bl).call(this, r)).finally(() => b(this, et, Al).call(this)));
    return;
  }
  if (i(this, gr)) {
    const n = i(this, gr);
    u(this, gr, null), this._uiManager.enableWaiting(!0), u(this, pr, this._uiManager.imageManager.getFromFile(n).then((r) => b(this, et, bl).call(this, r)).finally(() => b(this, et, Al).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = pp.join(",");
  const s = this._uiManager._signal;
  u(this, pr, new Promise((n) => {
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
        }), b(this, et, bl).call(this, r);
      }
      n();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), n();
    }, {
      signal: s
    });
  }).finally(() => b(this, et, Al).call(this))), e.click();
}, "#getBitmap"), Nu = /* @__PURE__ */ f(function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: n
  } = i(this, kt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, n = this.height * a;
  else if (s > o * r || n > o * a) {
    const l = Math.min(o * r / s, o * a / n);
    s *= l, n *= l;
  }
  this._uiManager.enableWaiting(!1);
  const h = u(this, hn, document.createElement("canvas"));
  h.setAttribute("role", "img"), this.addContainer(h), this.width = s / r, this.height = n / a, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, et, Fm).call(this), i(this, Nh) || (this.parent.addUndoableEditor(this), u(this, Nh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), i(this, Rh) && this.div.setAttribute("aria-description", i(this, Rh)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, "#createCanvas"), Ou = /* @__PURE__ */ f(function(e, s) {
  const {
    width: n,
    height: r
  } = i(this, kt);
  let a = n, o = r, h = i(this, kt);
  for (; a > 2 * e || o > 2 * s; ) {
    const l = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const d = new OffscreenCanvas(a, o);
    d.getContext("2d").drawImage(h, 0, 0, l, c, 0, 0, a, o), h = d.transferToImageBitmap();
  }
  return h;
}, "#scaleBitmap"), Fm = /* @__PURE__ */ f(function() {
  const [e, s] = this.parentDimensions, {
    width: n,
    height: r
  } = this, a = new mn(), o = Math.ceil(n * e * a.sx), h = Math.ceil(r * s * a.sy), l = i(this, hn);
  if (!l || l.width === o && l.height === h)
    return;
  l.width = o, l.height = h;
  const c = i(this, hs) ? i(this, kt) : b(this, et, Ou).call(this, o, h), d = l.getContext("2d");
  d.filter = this._uiManager.hcmFilter, d.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, h);
}, "#drawBitmap"), Fu = /* @__PURE__ */ f(function(e) {
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
    } = i(this, kt), s.getContext("2d").drawImage(i(this, kt), 0, 0), s.toDataURL();
  }
  if (i(this, hs)) {
    const [s, n] = this.pageDimensions, r = Math.round(this.width * s * vr.PDF_TO_CSS_UNITS), a = Math.round(this.height * n * vr.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(i(this, kt), 0, 0, i(this, kt).width, i(this, kt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(i(this, kt));
}, "#serializeBitmap"), p0 = /* @__PURE__ */ f(function(e) {
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
}, "#hasElementChanged"), f(_l, "StampEditor"), M(_l, "_type", "stamp"), M(_l, "_editorType", G.STAMP);
let Om = _l;
var $a, Oh, mr, br, ln, ze, Ar, Fh, Bh, Ws, cn, oe, dn, yr, Uh, B, wr, ut, yl, g0, Js, Um, Hm, Bu;
const ms = class ms {
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
    m(this, ut);
    m(this, $a);
    m(this, Oh, !1);
    m(this, mr, null);
    m(this, br, null);
    m(this, ln, null);
    m(this, ze, /* @__PURE__ */ new Map());
    m(this, Ar, !1);
    m(this, Fh, !1);
    m(this, Bh, !1);
    m(this, Ws, null);
    m(this, cn, null);
    m(this, oe, null);
    m(this, dn, null);
    m(this, yr, null);
    m(this, Uh, -1);
    m(this, B);
    const d = [...i(ms, wr).values()];
    if (!ms._initialized) {
      ms._initialized = !0;
      for (const p of d)
        p.initialize(c, t);
    }
    t.registerEditorTypes(d), u(this, B, t), this.pageIndex = e, this.div = s, u(this, $a, r), u(this, mr, a), this.viewport = l, u(this, oe, h), this.drawLayer = o, this._structTree = n, i(this, B).addLayer(this);
  }
  updatePageIndex(t) {
    for (const e of i(this, ut, yl))
      e.updatePageIndex(t);
    this.pageIndex = t, i(this, B).addLayer(this);
  }
  async setClonedFrom(t) {
    if (!t)
      return;
    const e = [];
    for (const s of i(t, ut, yl)) {
      const n = s.serialize(!0);
      n && (n.isCopy = !1, e.push(this.deserialize(n).then((r) => {
        r && this.addOrRebuild(r);
      })));
    }
    await Promise.all(e);
  }
  get isEmpty() {
    return i(this, ze).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && i(this, B).getMode() === G.NONE;
  }
  updateToolbar(t) {
    i(this, B).updateToolbar(t);
  }
  updateMode(t = i(this, B).getMode()) {
    switch (b(this, ut, Bu).call(this), t) {
      case G.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case G.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case G.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === G.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const s of i(ms, wr).values())
        e.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    return t === i(this, oe)?.div;
  }
  setEditingState(t) {
    i(this, B).setEditingState(t);
  }
  addCommands(t) {
    i(this, B).addCommands(t);
  }
  cleanUndoStack(t) {
    i(this, B).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    i(this, mr)?.togglePointerEvents(t);
  }
  async enable() {
    u(this, Bh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), i(this, yr)?.abort(), u(this, yr, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of i(this, ut, yl))
      s.enableEditing(), s.show(!0), s.annotationElementId && (i(this, B).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = i(this, mr);
    if (e)
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), i(this, B).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
          continue;
        const n = await this.deserialize(s);
        n && (this.addOrRebuild(n), n.enableEditing());
      }
    u(this, Bh, !1), i(this, B)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    if (u(this, Fh, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), i(this, oe) && !i(this, yr)) {
      u(this, yr, new AbortController());
      const n = i(this, B).combinedSignal(i(this, yr));
      i(this, oe).div.addEventListener("pointerdown", (r) => {
        const {
          clientX: o,
          clientY: h,
          timeStamp: l
        } = r, c = i(this, Uh);
        if (l - c > 500) {
          u(this, Uh, l);
          return;
        }
        u(this, Uh, -1);
        const {
          classList: d
        } = this.div;
        d.toggle("getElements", !0);
        const p = document.elementsFromPoint(o, h);
        if (d.toggle("getElements", !1), !this.div.contains(p[0]))
          return;
        let A;
        const w = new RegExp(`^${kl}[0-9]+$`);
        for (const S of p)
          if (w.test(S.id)) {
            A = S.id;
            break;
          }
        if (!A)
          return;
        const y = i(this, ze).get(A);
        y?.annotationElementId === null && (r.stopPropagation(), r.preventDefault(), y.dblclick(r));
      }, {
        signal: n,
        capture: !0
      });
    }
    const t = i(this, mr), e = [];
    if (t) {
      const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const o of i(this, ut, yl)) {
        if (o.disableEditing(), !o.annotationElementId) {
          e.push(o);
          continue;
        }
        if (o.serialize() !== null) {
          n.set(o.annotationElementId, o);
          continue;
        } else
          r.set(o.annotationElementId, o);
        this.getEditableAnnotation(o.annotationElementId)?.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: h
        } = o.data;
        if (i(this, B).isDeletedAnnotationElement(h)) {
          o.updateEdited({
            deleted: !0
          });
          continue;
        }
        let l = r.get(h);
        if (l) {
          l.resetAnnotationElement(o), l.show(!1), o.show();
          continue;
        }
        l = n.get(h), l && (i(this, B).addChangedExistingAnnotation(l), l.renderAnnotationElement(o) && l.show(!1)), o.show();
      }
    }
    b(this, ut, Bu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const n of i(ms, wr).values())
      s.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), t?.updateFakeAnnotations(e), u(this, Fh, !1);
  }
  getEditableAnnotation(t) {
    return i(this, mr)?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    i(this, B).getActive() !== t && i(this, B).setActiveEditor(t);
  }
  enableTextSelection() {
    if (this.div.tabIndex = -1, i(this, oe)?.div && !i(this, dn)) {
      u(this, dn, new AbortController());
      const t = i(this, B).combinedSignal(i(this, dn));
      i(this, oe).div.addEventListener("pointerdown", b(this, ut, g0).bind(this), {
        signal: t
      }), i(this, oe).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0, i(this, oe)?.div && i(this, dn) && (i(this, dn).abort(), u(this, dn, null), i(this, oe).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (i(this, br))
      return;
    u(this, br, new AbortController());
    const t = i(this, B).combinedSignal(i(this, br));
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
    i(this, br)?.abort(), u(this, br, null);
  }
  attach(t) {
    i(this, ze).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && i(this, B).isDeletedAnnotationElement(e) && i(this, B).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    i(this, ze).delete(t.id), i(this, $a)?.removePointerInTextLayer(t.contentDiv), !i(this, Fh) && t.annotationElementId && i(this, B).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), i(this, B).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    t.parent !== this && (t.parent && t.annotationElementId && (i(this, B).addDeletedAnnotationElement(t), St.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), i(this, B).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!i(this, Bh)), i(this, B).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !i(this, ln) && (t._focusEventsAllowed = !1, u(this, ln, setTimeout(() => {
      u(this, ln, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: i(this, B)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = i(this, $a)?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
  getNextId() {
    return i(this, B).getId();
  }
  combinedSignal(t) {
    return i(this, B).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    return i(this, ut, Js)?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await i(this, B).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: n
    } = b(this, ut, Hm).call(this), r = this.getNextId(), a = b(this, ut, Um).call(this, {
      parent: this,
      id: r,
      x: s,
      y: n,
      uiManager: i(this, B),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    return await i(ms, wr).get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, i(this, B)) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const n = this.getNextId(), r = b(this, ut, Um).call(this, {
      parent: this,
      id: n,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: i(this, B),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(b(this, ut, Hm).call(this), !0, t);
  }
  setSelected(t) {
    i(this, B).setSelected(t);
  }
  toggleSelected(t) {
    i(this, B).toggleSelected(t);
  }
  unselect(t) {
    i(this, B).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Ht.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !i(this, Ar) || (u(this, Ar, !1), i(this, ut, Js)?.isDrawer && i(this, ut, Js).supportMultipleDrawings))
      return;
    if (!i(this, Oh)) {
      u(this, Oh, !0);
      return;
    }
    const s = i(this, B).getMode();
    if (s === G.STAMP || s === G.SIGNATURE) {
      i(this, B).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    if (i(this, B).getMode() === G.HIGHLIGHT && this.enableTextSelection(), i(this, Ar)) {
      u(this, Ar, !1);
      return;
    }
    const {
      isMac: e
    } = Ht.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (u(this, Ar, !0), i(this, ut, Js)?.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = i(this, B).getActive();
    u(this, Oh, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), i(this, Ws)) {
      i(this, ut, Js).startDrawing(this, i(this, B), !1, t);
      return;
    }
    i(this, B).setCurrentDrawingSession(this), u(this, Ws, new AbortController());
    const e = i(this, B).combinedSignal(i(this, Ws));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (u(this, cn, null), this.commitOrRemove());
    }, {
      signal: e
    }), i(this, ut, Js).startDrawing(this, i(this, B), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && u(this, cn, e);
      return;
    }
    i(this, cn) && setTimeout(() => {
      i(this, cn)?.focus(), u(this, cn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return i(this, Ws) ? (i(this, B).setCurrentDrawingSession(null), i(this, Ws).abort(), u(this, Ws, null), u(this, cn, null), i(this, ut, Js).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const n = i(this, B).findParent(e, s);
    return n === null || n === this ? !1 : (n.changeParent(t), !0);
  }
  commitOrRemove() {
    return i(this, Ws) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    i(this, Ws) && i(this, ut, Js).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove(), i(this, B).getActive()?.parent === this && (i(this, B).commitOrRemove(), i(this, B).setActiveEditor(null)), i(this, ln) && (clearTimeout(i(this, ln)), u(this, ln, null));
    for (const t of i(this, ze).values())
      i(this, $a)?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
    this.div = null, i(this, ze).clear(), i(this, B).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, ja(this.div, t);
    for (const e of i(this, B).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    i(this, B).commitOrRemove(), b(this, ut, Bu).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, ja(this.div, {
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
    return i(this, B).viewParameters.realScale;
  }
};
$a = new WeakMap(), Oh = new WeakMap(), mr = new WeakMap(), br = new WeakMap(), ln = new WeakMap(), ze = new WeakMap(), Ar = new WeakMap(), Fh = new WeakMap(), Bh = new WeakMap(), Ws = new WeakMap(), cn = new WeakMap(), oe = new WeakMap(), dn = new WeakMap(), yr = new WeakMap(), Uh = new WeakMap(), B = new WeakMap(), wr = new WeakMap(), ut = new WeakSet(), yl = /* @__PURE__ */ f(function() {
  return i(this, ze).size !== 0 ? i(this, ze).values() : i(this, B).getEditors(this.pageIndex);
}, "#allEditorsIterator"), g0 = /* @__PURE__ */ f(function(t) {
  i(this, B).unselectAll();
  const {
    target: e
  } = t;
  if (e === i(this, oe).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && i(this, oe).div.contains(e)) {
    const {
      isMac: s
    } = Ht.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    i(this, B).showAllEditors("highlight", !0, !0), i(this, oe).div.classList.add("free"), this.toggleDrawing(), uf.startHighlighting(this, i(this, B).direction === "ltr", {
      target: i(this, oe).div,
      x: t.x,
      y: t.y
    }), i(this, oe).div.addEventListener("pointerup", () => {
      i(this, oe).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: i(this, B)._signal
    }), t.preventDefault();
  }
}, "#textLayerPointerDown"), Js = /* @__PURE__ */ f(function() {
  return i(ms, wr).get(i(this, B).getMode());
}, "#currentEditorType"), Um = /* @__PURE__ */ f(function(t) {
  const e = i(this, ut, Js);
  return e ? new e.prototype.constructor(t) : null;
}, "#createNewEditor"), Hm = /* @__PURE__ */ f(function() {
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
}, "#getCenterPoint"), Bu = /* @__PURE__ */ f(function() {
  for (const t of i(this, ze).values())
    t.isEmpty() && t.remove();
}, "#cleanup"), f(ms, "AnnotationEditorLayer"), M(ms, "_initialized", !1), m(ms, wr, new Map([bm, km, Om, uf, Nm].map((t) => [t._editorType, t])));
let Bm = ms;
var Xs, Me, za, Vd, Vf, m0, xi, zm, b0, jm;
const Wt = class Wt {
  constructor() {
    m(this, xi);
    m(this, Xs, null);
    m(this, Me, /* @__PURE__ */ new Map());
    m(this, za, /* @__PURE__ */ new Map());
  }
  setParent(t) {
    if (!i(this, Xs)) {
      u(this, Xs, t);
      return;
    }
    if (i(this, Xs) !== t) {
      if (i(this, Me).size > 0)
        for (const e of i(this, Me).values())
          e.remove(), t.append(e);
      u(this, Xs, t);
    }
  }
  static get _svgFactory() {
    return z(this, "_svgFactory", new zh());
  }
  draw(t, e = !1, s = !1) {
    const n = qt(Wt, Vd)._++, r = b(this, xi, zm).call(this), a = Wt._svgFactory.createElement("defs");
    r.append(a);
    const o = Wt._svgFactory.createElement("path");
    a.append(o);
    const h = `path_${n}`;
    o.setAttribute("id", h), o.setAttribute("vector-effect", "non-scaling-stroke"), e && i(this, za).set(n, o);
    const l = s ? b(this, xi, b0).call(this, a, h) : null, c = Wt._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${h}`), this.updateProperties(r, t), i(this, Me).set(n, r), {
      id: n,
      clipPathId: `url(#${l})`
    };
  }
  drawOutline(t, e) {
    const s = qt(Wt, Vd)._++, n = b(this, xi, zm).call(this), r = Wt._svgFactory.createElement("defs");
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
      const A = Wt._svgFactory.createElement("use");
      d.append(A), A.setAttribute("href", `#${o}`), A.setAttribute("stroke", "none"), A.setAttribute("fill", "black"), A.setAttribute("fill-rule", "nonzero"), A.classList.add("mask");
    }
    const l = Wt._svgFactory.createElement("use");
    n.append(l), l.setAttribute("href", `#${o}`), h && l.setAttribute("mask", `url(#${h})`);
    const c = l.cloneNode();
    return n.append(c), l.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(n, t), i(this, Me).set(s, n), s;
  }
  finalizeDraw(t, e) {
    i(this, za).delete(t), this.updateProperties(t, e);
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
    } = e, o = typeof t == "number" ? i(this, Me).get(t) : t;
    if (o) {
      if (s && b(this, xi, jm).call(this, o, s), n && b(h = Wt, Vf, m0).call(h, o, n), r) {
        const {
          classList: l
        } = o;
        for (const [c, d] of Object.entries(r))
          l.toggle(c, d);
      }
      if (a) {
        const c = o.firstElementChild.firstElementChild;
        b(this, xi, jm).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = i(this, Me).get(t);
    s && (i(e, Xs).append(s), i(this, Me).delete(t), i(e, Me).set(t, s));
  }
  remove(t) {
    i(this, za).delete(t), i(this, Xs) !== null && (i(this, Me).get(t).remove(), i(this, Me).delete(t));
  }
  destroy() {
    u(this, Xs, null);
    for (const t of i(this, Me).values())
      t.remove();
    i(this, Me).clear(), i(this, za).clear();
  }
};
Xs = new WeakMap(), Me = new WeakMap(), za = new WeakMap(), Vd = new WeakMap(), Vf = new WeakSet(), m0 = /* @__PURE__ */ f(function(t, [e, s, n, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * n}%`, a.height = `${100 * r}%`;
}, "#setBox"), xi = new WeakSet(), zm = /* @__PURE__ */ f(function() {
  const t = Wt._svgFactory.create(1, 1, !0);
  return i(this, Xs).append(t), t.setAttribute("aria-hidden", !0), t;
}, "#createSVG"), b0 = /* @__PURE__ */ f(function(t, e) {
  const s = Wt._svgFactory.createElement("clipPath");
  t.append(s);
  const n = `clip_${e}`;
  s.setAttribute("id", n), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Wt._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), n;
}, "#createClipPath"), jm = /* @__PURE__ */ f(function(t, e) {
  for (const [s, n] of Object.entries(e))
    n === null ? t.removeAttribute(s) : t.setAttribute(s, n);
}, "#updateProperties"), m(Wt, Vf), f(Wt, "DrawLayer"), m(Wt, Vd, 0);
let $m = Wt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Wl
};
globalThis.pdfjsLib = {
  AbortException: gn,
  AnnotationEditorLayer: Bm,
  AnnotationEditorParamsType: Z,
  AnnotationEditorType: G,
  AnnotationEditorUIManager: Va,
  AnnotationLayer: gm,
  AnnotationMode: xn,
  AnnotationType: Vt,
  applyOpacity: B0,
  build: rv,
  ColorPicker: ef,
  createValidAbsoluteUrl: py,
  CSSConstants: mp,
  DOMSVGFactory: zh,
  DrawLayer: $m,
  FeatureTest: Ht,
  fetchData: Wd,
  findContrastColor: U0,
  getDocument: iv,
  getFilenameFromUrl: R0,
  getPdfFilenameFromUrl: N0,
  getRGB: Xd,
  getUuid: my,
  getXfaPageViewport: O0,
  GlobalWorkerOptions: $h,
  ImageKind: su,
  InvalidPDFException: Pl,
  isDataScheme: qf,
  isPdfFile: Vm,
  isValidExplicitDest: j0,
  makeArr: by,
  makeMap: Gm,
  makeObj: fp,
  MathClamp: he,
  noContextMenu: Ds,
  normalizeUnicode: L0,
  OPS: Ml,
  OutputScale: mn,
  PasswordResponses: E0,
  PDFDataRangeTransport: tf,
  PDFDateString: Rl,
  PDFWorker: zl,
  PermissionFlag: S0,
  PixelsPerInch: vr,
  RenderingCancelledException: Dl,
  renderRichText: yy,
  ResponseException: Hh,
  setLayerDimensions: ja,
  shadow: z,
  SignatureExtractor: _n,
  stopEvent: Ft,
  SupportedImageMimeTypes: pp,
  TextLayer: $l,
  TouchManager: ju,
  updateUrlHash: gy,
  Util: R,
  VerbosityLevel: Wf,
  version: nv,
  XfaLayer: Hu
};
export {
  gn as AbortException,
  Bm as AnnotationEditorLayer,
  Z as AnnotationEditorParamsType,
  G as AnnotationEditorType,
  Va as AnnotationEditorUIManager,
  gm as AnnotationLayer,
  xn as AnnotationMode,
  Vt as AnnotationType,
  mp as CSSConstants,
  ef as ColorPicker,
  zh as DOMSVGFactory,
  $m as DrawLayer,
  Ht as FeatureTest,
  $h as GlobalWorkerOptions,
  su as ImageKind,
  Pl as InvalidPDFException,
  he as MathClamp,
  Ml as OPS,
  mn as OutputScale,
  tf as PDFDataRangeTransport,
  Rl as PDFDateString,
  zl as PDFWorker,
  E0 as PasswordResponses,
  S0 as PermissionFlag,
  vr as PixelsPerInch,
  Dl as RenderingCancelledException,
  Hh as ResponseException,
  _n as SignatureExtractor,
  pp as SupportedImageMimeTypes,
  $l as TextLayer,
  ju as TouchManager,
  R as Util,
  Wf as VerbosityLevel,
  Hu as XfaLayer,
  B0 as applyOpacity,
  rv as build,
  py as createValidAbsoluteUrl,
  Wd as fetchData,
  U0 as findContrastColor,
  iv as getDocument,
  R0 as getFilenameFromUrl,
  N0 as getPdfFilenameFromUrl,
  Xd as getRGB,
  my as getUuid,
  O0 as getXfaPageViewport,
  qf as isDataScheme,
  Vm as isPdfFile,
  j0 as isValidExplicitDest,
  by as makeArr,
  Gm as makeMap,
  fp as makeObj,
  Ds as noContextMenu,
  L0 as normalizeUnicode,
  yy as renderRichText,
  ja as setLayerDimensions,
  z as shadow,
  Ft as stopEvent,
  gy as updateUrlHash,
  nv as version
};
