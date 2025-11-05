var Up = Object.defineProperty;
var Vp = (g) => {
  throw TypeError(g);
};
var $m = (g, t, e) => t in g ? Up(g, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[t] = e;
var u = (g, t) => Up(g, "name", { value: t, configurable: !0 });
var $ = (g, t, e) => $m(g, typeof t != "symbol" ? t + "" : t, e), Rc = (g, t, e) => t.has(g) || Vp("Cannot " + e);
var n = (g, t, e) => (Rc(g, t, "read from private field"), e ? e.call(g) : t.get(g)), m = (g, t, e) => t.has(g) ? Vp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(g) : t.set(g, e), f = (g, t, e, s) => (Rc(g, t, "write to private field"), s ? s.call(g, e) : t.set(g, e), e), b = (g, t, e) => (Rc(g, t, "access private method"), e);
var Zt = (g, t, e, s) => ({
  set _(i) {
    f(g, t, i, e);
  },
  get _() {
    return n(g, t, s);
  }
});
var Ka = {};
Ka.d = (g, t) => {
  for (var e in t)
    Ka.o(t, e) && !Ka.o(g, e) && Object.defineProperty(g, e, { enumerable: !0, get: t[e] });
};
Ka.o = (g, t) => Object.prototype.hasOwnProperty.call(g, t);
var G = globalThis.pdfjsLib = {};
Ka.d(G, {
  AbortException: /* @__PURE__ */ u(() => (
    /* reexport */
    hi
  ), "AbortException"),
  AnnotationEditorLayer: /* @__PURE__ */ u(() => (
    /* reexport */
    ju
  ), "AnnotationEditorLayer"),
  AnnotationEditorParamsType: /* @__PURE__ */ u(() => (
    /* reexport */
    K
  ), "AnnotationEditorParamsType"),
  AnnotationEditorType: /* @__PURE__ */ u(() => (
    /* reexport */
    j
  ), "AnnotationEditorType"),
  AnnotationEditorUIManager: /* @__PURE__ */ u(() => (
    /* reexport */
    hr
  ), "AnnotationEditorUIManager"),
  AnnotationLayer: /* @__PURE__ */ u(() => (
    /* reexport */
    _u
  ), "AnnotationLayer"),
  AnnotationMode: /* @__PURE__ */ u(() => (
    /* reexport */
    gi
  ), "AnnotationMode"),
  ColorPicker: /* @__PURE__ */ u(() => (
    /* reexport */
    Xl
  ), "ColorPicker"),
  DOMSVGFactory: /* @__PURE__ */ u(() => (
    /* reexport */
    co
  ), "DOMSVGFactory"),
  DrawLayer: /* @__PURE__ */ u(() => (
    /* reexport */
    qu
  ), "DrawLayer"),
  FeatureTest: /* @__PURE__ */ u(() => (
    /* reexport */
    Ut
  ), "FeatureTest"),
  GlobalWorkerOptions: /* @__PURE__ */ u(() => (
    /* reexport */
    Pa
  ), "GlobalWorkerOptions"),
  ImageKind: /* @__PURE__ */ u(() => (
    /* reexport */
    Xh
  ), "ImageKind"),
  InvalidPDFException: /* @__PURE__ */ u(() => (
    /* reexport */
    so
  ), "InvalidPDFException"),
  MissingPDFException: /* @__PURE__ */ u(() => (
    /* reexport */
    ka
  ), "MissingPDFException"),
  OPS: /* @__PURE__ */ u(() => (
    /* reexport */
    je
  ), "OPS"),
  OutputScale: /* @__PURE__ */ u(() => (
    /* reexport */
    ro
  ), "OutputScale"),
  PDFDataRangeTransport: /* @__PURE__ */ u(() => (
    /* reexport */
    Nl
  ), "PDFDataRangeTransport"),
  PDFDateString: /* @__PURE__ */ u(() => (
    /* reexport */
    Cl
  ), "PDFDateString"),
  PDFWorker: /* @__PURE__ */ u(() => (
    /* reexport */
    vr
  ), "PDFWorker"),
  PasswordResponses: /* @__PURE__ */ u(() => (
    /* reexport */
    Vm
  ), "PasswordResponses"),
  PermissionFlag: /* @__PURE__ */ u(() => (
    /* reexport */
    Um
  ), "PermissionFlag"),
  PixelsPerInch: /* @__PURE__ */ u(() => (
    /* reexport */
    Xi
  ), "PixelsPerInch"),
  RenderingCancelledException: /* @__PURE__ */ u(() => (
    /* reexport */
    no
  ), "RenderingCancelledException"),
  TextLayer: /* @__PURE__ */ u(() => (
    /* reexport */
    ho
  ), "TextLayer"),
  TouchManager: /* @__PURE__ */ u(() => (
    /* reexport */
    Ml
  ), "TouchManager"),
  UnexpectedResponseException: /* @__PURE__ */ u(() => (
    /* reexport */
    Ma
  ), "UnexpectedResponseException"),
  Util: /* @__PURE__ */ u(() => (
    /* reexport */
    N
  ), "Util"),
  VerbosityLevel: /* @__PURE__ */ u(() => (
    /* reexport */
    Sc
  ), "VerbosityLevel"),
  XfaLayer: /* @__PURE__ */ u(() => (
    /* reexport */
    Hl
  ), "XfaLayer"),
  build: /* @__PURE__ */ u(() => (
    /* reexport */
    Pb
  ), "build"),
  createValidAbsoluteUrl: /* @__PURE__ */ u(() => (
    /* reexport */
    qm
  ), "createValidAbsoluteUrl"),
  fetchData: /* @__PURE__ */ u(() => (
    /* reexport */
    Tc
  ), "fetchData"),
  getDocument: /* @__PURE__ */ u(() => (
    /* reexport */
    Cb
  ), "getDocument"),
  getFilenameFromUrl: /* @__PURE__ */ u(() => (
    /* reexport */
    sb
  ), "getFilenameFromUrl"),
  getPdfFilenameFromUrl: /* @__PURE__ */ u(() => (
    /* reexport */
    ib
  ), "getPdfFilenameFromUrl"),
  getXfaPageViewport: /* @__PURE__ */ u(() => (
    /* reexport */
    nb
  ), "getXfaPageViewport"),
  isDataScheme: /* @__PURE__ */ u(() => (
    /* reexport */
    kc
  ), "isDataScheme"),
  isPdfFile: /* @__PURE__ */ u(() => (
    /* reexport */
    Zu
  ), "isPdfFile"),
  noContextMenu: /* @__PURE__ */ u(() => (
    /* reexport */
    rs
  ), "noContextMenu"),
  normalizeUnicode: /* @__PURE__ */ u(() => (
    /* reexport */
    Zm
  ), "normalizeUnicode"),
  setLayerDimensions: /* @__PURE__ */ u(() => (
    /* reexport */
    ar
  ), "setLayerDimensions"),
  shadow: /* @__PURE__ */ u(() => (
    /* reexport */
    q
  ), "shadow"),
  stopEvent: /* @__PURE__ */ u(() => (
    /* reexport */
    Pe
  ), "stopEvent"),
  version: /* @__PURE__ */ u(() => (
    /* reexport */
    Mb
  ), "version")
});
const jp = !1, ag = [1, 0, 0, 1, 0, 0], Hc = [1e-3, 0, 0, 1e-3, 0, 0], Gm = 1e7, Lc = 1.35, ke = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, gi = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, zm = "pdfjs_internal_editor_", j = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, K = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
}, Um = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, jt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Xh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, xt = {
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
  WIDGET: 20
}, La = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Sc = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, je = {
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
  setFillTransparent: 93
}, Vm = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Ec = Sc.WARNINGS;
function jm(g) {
  Number.isInteger(g) && (Ec = g);
}
u(jm, "setVerbosityLevel");
function Wm() {
  return Ec;
}
u(Wm, "getVerbosityLevel");
function xc(g) {
  Ec >= Sc.INFOS && console.log(`Info: ${g}`);
}
u(xc, "info");
function W(g) {
  Ec >= Sc.WARNINGS && console.log(`Warning: ${g}`);
}
u(W, "warn");
function rt(g) {
  throw new Error(g);
}
u(rt, "unreachable");
function Nt(g, t) {
  g || rt(t);
}
u(Nt, "assert");
function Xm(g) {
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
u(Xm, "_isValidProtocol");
function qm(g, t = null, e = null) {
  if (!g)
    return null;
  try {
    if (e && typeof g == "string" && (e.addDefaultProtocol && g.startsWith("www.") && g.match(/\./g)?.length >= 2 && (g = `http://${g}`), e.tryConvertEncoding))
      try {
        g = Jm(g);
      } catch {
      }
    const s = t ? new URL(g, t) : new URL(g);
    if (Xm(s))
      return s;
  } catch {
  }
  return null;
}
u(qm, "createValidAbsoluteUrl");
function q(g, t, e, s = !1) {
  return Object.defineProperty(g, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
u(q, "shadow");
const Yi = (/* @__PURE__ */ u(function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return u(t, "BaseException"), t.prototype = new Error(), t.constructor = t, t;
}, "BaseExceptionClosure"))(), ef = class ef extends Yi {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
};
u(ef, "PasswordException");
let El = ef;
const sf = class sf extends Yi {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
};
u(sf, "UnknownErrorException");
let Qa = sf;
const nf = class nf extends Yi {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
};
u(nf, "InvalidPDFException");
let so = nf;
const rf = class rf extends Yi {
  constructor(t) {
    super(t, "MissingPDFException");
  }
};
u(rf, "MissingPDFException");
let ka = rf;
const af = class af extends Yi {
  constructor(t, e) {
    super(t, "UnexpectedResponseException"), this.status = e;
  }
};
u(af, "UnexpectedResponseException");
let Ma = af;
const of = class of extends Yi {
  constructor(t) {
    super(t, "FormatError");
  }
};
u(of, "FormatError");
let Bc = of;
const hf = class hf extends Yi {
  constructor(t) {
    super(t, "AbortException");
  }
};
u(hf, "AbortException");
let hi = hf;
function og(g) {
  (typeof g != "object" || g?.length === void 0) && rt("Invalid argument for bytesToString");
  const t = g.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, g);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = g.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
u(og, "bytesToString");
function Cc(g) {
  typeof g != "string" && rt("Invalid argument for stringToBytes");
  const t = g.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = g.charCodeAt(s) & 255;
  return e;
}
u(Cc, "stringToBytes");
function Ym(g) {
  return String.fromCharCode(g >> 24 & 255, g >> 16 & 255, g >> 8 & 255, g & 255);
}
u(Ym, "string32");
function Qu(g) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const [e, s] of g)
    t[e] = s;
  return t;
}
u(Qu, "objectFromMap");
function Km() {
  const g = new Uint8Array(4);
  return g[0] = 1, new Uint32Array(g.buffer, 0, 1)[0] === 1;
}
u(Km, "isLittleEndian");
function Qm() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
u(Qm, "isEvalSupported");
const lf = class lf {
  static get isLittleEndian() {
    return q(this, "isLittleEndian", Km());
  }
  static get isEvalSupported() {
    return q(this, "isEvalSupported", Qm());
  }
  static get isOffscreenCanvasSupported() {
    return q(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return q(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof navigator?.platform == "string" ? q(this, "platform", {
      isMac: navigator.platform.includes("Mac"),
      isWindows: navigator.platform.includes("Win"),
      isFirefox: typeof navigator?.userAgent == "string" && navigator.userAgent.includes("Firefox")
    }) : q(this, "platform", {
      isMac: !1,
      isWindows: !1,
      isFirefox: !1
    });
  }
  static get isCSSRoundSupported() {
    return q(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
};
u(lf, "util_FeatureTest");
let Ut = lf;
const Ic = Array.from(Array(256).keys(), (g) => g.toString(16).padStart(2, "0"));
var ai, qh, $c;
const Kl = class Kl {
  static makeHexColor(t, e, s) {
    return `#${Ic[t]}${Ic[e]}${Ic[s]}`;
  }
  static scaleMinMax(t, e) {
    let s;
    t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static applyTransform(t, e) {
    const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
    return [s, i];
  }
  static applyInverseTransform(t, e) {
    const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, r = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
    return [i, r];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), r = this.applyTransform([t[0], t[3]], e), a = this.applyTransform([t[2], t[1]], e);
    return [Math.min(s[0], i[0], r[0], a[0]), Math.min(s[1], i[1], r[1], a[1]), Math.max(s[0], i[0], r[0], a[0]), Math.max(s[1], i[1], r[1], a[1])];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], r = t[2] * e[0] + t[3] * e[2], a = t[2] * e[1] + t[3] * e[3], o = (s + a) / 2, h = Math.sqrt((s + a) ** 2 - 4 * (s * a - r * i)) / 2, l = o + h || 1, c = o - h || 1;
    return [Math.sqrt(l), Math.sqrt(c)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, h, l) {
    return l ? (l[0] = Math.min(l[0], t, o), l[1] = Math.min(l[1], e, h), l[2] = Math.max(l[2], t, o), l[3] = Math.max(l[3], e, h)) : l = [Math.min(t, o), Math.min(e, h), Math.max(t, o), Math.max(e, h)], b(this, ai, $c).call(this, t, s, r, o, e, i, a, h, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), l), b(this, ai, $c).call(this, t, s, r, o, e, i, a, h, 3 * (-e + 3 * (i - a) + h), 6 * (e - 2 * i + a), 3 * (i - e), l), l;
  }
};
ai = new WeakSet(), qh = /* @__PURE__ */ u(function(t, e, s, i, r, a, o, h, l, c) {
  if (l <= 0 || l >= 1)
    return;
  const d = 1 - l, p = l * l, A = p * l, y = d * (d * (d * t + 3 * l * e) + 3 * p * s) + A * i, w = d * (d * (d * r + 3 * l * a) + 3 * p * o) + A * h;
  c[0] = Math.min(c[0], y), c[1] = Math.min(c[1], w), c[2] = Math.max(c[2], y), c[3] = Math.max(c[3], w);
}, "#getExtremumOnCurve"), $c = /* @__PURE__ */ u(function(t, e, s, i, r, a, o, h, l, c, d, p) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, ai, qh).call(this, t, e, s, i, r, a, o, h, -d / c, p);
    return;
  }
  const A = c ** 2 - 4 * d * l;
  if (A < 0)
    return;
  const y = Math.sqrt(A), w = 2 * l;
  b(this, ai, qh).call(this, t, e, s, i, r, a, o, h, (-c + y) / w, p), b(this, ai, qh).call(this, t, e, s, i, r, a, o, h, (-c - y) / w, p);
}, "#getExtremum"), m(Kl, ai), u(Kl, "Util");
let N = Kl;
function Jm(g) {
  return decodeURIComponent(escape(g));
}
u(Jm, "stringToUTF8String");
let Dc = null, Wp = null;
function Zm(g) {
  return Dc || (Dc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Wp = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), g.replaceAll(Dc, (t, e, s) => e ? e.normalize("NFKC") : Wp.get(s));
}
u(Zm, "normalizeUnicode");
function tb() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const g = new Uint8Array(32);
  return crypto.getRandomValues(g), og(g);
}
u(tb, "getUuid");
const Ju = "pdfjs_internal_id_";
function eb(g) {
  return Uint8Array.prototype.toBase64 ? g.toBase64() : btoa(og(g));
}
u(eb, "toBase64Util");
typeof Promise.try != "function" && (Promise.try = function(g, ...t) {
  return new Promise((e) => {
    e(g(...t));
  });
});
const Ls = "http://www.w3.org/2000/svg", fi = class fi {
};
u(fi, "PixelsPerInch"), $(fi, "CSS", 96), $(fi, "PDF", 72), $(fi, "PDF_TO_CSS_UNITS", fi.CSS / fi.PDF);
let Xi = fi;
async function Tc(g, t = "text") {
  if (Yh(g, document.baseURI)) {
    const e = await fetch(g);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", g, !0), i.responseType = t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
u(Tc, "fetchData");
const Ql = class Ql {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const h = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
    let c, d, p, A;
    switch (i %= 360, i < 0 && (i += 360), i) {
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
    let y, w, _, v;
    c === 0 ? (y = Math.abs(l - t[1]) * s + r, w = Math.abs(h - t[0]) * s + a, _ = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (y = Math.abs(h - t[0]) * s + r, w = Math.abs(l - t[1]) * s + a, _ = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, d * s, p * s, A * s, y - c * s * h - p * s * l, w - d * s * h - A * s * l], this.width = _, this.height = v;
  }
  get rawDims() {
    const {
      userUnit: t,
      viewBox: e
    } = this, s = e.map((i) => i * t);
    return q(this, "rawDims", {
      pageWidth: s[2] - s[0],
      pageHeight: s[3] - s[1],
      pageX: s[0],
      pageY: s[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new Ql({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    return N.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = N.applyTransform([t[0], t[1]], this.transform), s = N.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    return N.applyInverseTransform([t, e], this.transform);
  }
};
u(Ql, "PageViewport");
let io = Ql;
const cf = class cf extends Yi {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
};
u(cf, "RenderingCancelledException");
let no = cf;
function kc(g) {
  const t = g.length;
  let e = 0;
  for (; e < t && g[e].trim() === ""; )
    e++;
  return g.substring(e, e + 5).toLowerCase() === "data:";
}
u(kc, "isDataScheme");
function Zu(g) {
  return typeof g == "string" && /\.pdf$/i.test(g);
}
u(Zu, "isPdfFile");
function sb(g) {
  return [g] = g.split(/[#?]/, 1), g.substring(g.lastIndexOf("/") + 1);
}
u(sb, "getFilenameFromUrl");
function ib(g, t = "document.pdf") {
  if (typeof g != "string")
    return t;
  if (kc(g))
    return W('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(g);
  let r = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
  if (r && (r = r[0], r.includes("%")))
    try {
      r = s.exec(decodeURIComponent(r))[0];
    } catch {
    }
  return r || t;
}
u(ib, "getPdfFilenameFromUrl");
const df = class df {
  started = /* @__PURE__ */ Object.create(null);
  times = [];
  time(t) {
    t in this.started && W(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || W(`Timer has not been started for ${t}`), this.times.push({
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
      start: i,
      end: r
    } of this.times)
      t.push(`${s.padEnd(e)} ${r - i}ms
`);
    return t.join("");
  }
};
u(df, "StatTimer");
let xl = df;
function Yh(g, t) {
  try {
    const {
      protocol: e
    } = t ? new URL(g, t) : new URL(g);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
u(Yh, "isValidFetchUrl");
function rs(g) {
  g.preventDefault();
}
u(rs, "noContextMenu");
function Pe(g) {
  g.preventDefault(), g.stopPropagation();
}
u(Pe, "stopEvent");
var mo;
const Jl = class Jl {
  static toDateObject(t) {
    if (!t || typeof t != "string")
      return null;
    n(this, mo) || f(this, mo, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, mo).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
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
    return d = d >= 0 && d <= 59 ? d : 0, l === "-" ? (a += c, o += d) : l === "+" && (a -= c, o -= d), new Date(Date.UTC(s, i, r, a, o, h));
  }
};
mo = new WeakMap(), u(Jl, "PDFDateString"), m(Jl, mo);
let Cl = Jl;
function nb(g, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: s,
    height: i
  } = g.attributes.style, r = [0, 0, parseInt(s), parseInt(i)];
  return new io({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
u(nb, "getXfaPageViewport");
function tf(g) {
  if (g.startsWith("#")) {
    const t = parseInt(g.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return g.startsWith("rgb(") ? g.slice(4, -1).split(",").map((t) => parseInt(t)) : g.startsWith("rgba(") ? g.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (W(`Not a valid color format: "${g}"`), [0, 0, 0]);
}
u(tf, "getRGB");
function rb(g) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", document.body.append(t);
  for (const e of g.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    g.set(e, tf(s));
  }
  t.remove();
}
u(rb, "getColorValues");
function ct(g) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = g.getTransform();
  return [t, e, s, i, r, a];
}
u(ct, "getCurrentTransform");
function hs(g) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = g.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
u(hs, "getCurrentTransformInverse");
function ar(g, t, e = !1, s = !0) {
  if (t instanceof io) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = g, o = Ut.isCSSRoundSupported, h = `var(--scale-factor) * ${i}px`, l = `var(--scale-factor) * ${r}px`, c = o ? `round(down, ${h}, var(--scale-round-x, 1px))` : `calc(${h})`, d = o ? `round(down, ${l}, var(--scale-round-y, 1px))` : `calc(${l})`;
    !e || t.rotation % 180 === 0 ? (a.width = c, a.height = d) : (a.width = d, a.height = c);
  }
  s && g.setAttribute("data-main-rotation", t.rotation);
}
u(ar, "setLayerDimensions");
const uf = class uf {
  constructor() {
    const t = window.devicePixelRatio || 1;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
};
u(uf, "OutputScale");
let ro = uf;
var mi, sn, We, nn, bo, Ao, Zl, hg, re, lg, cg, Kh, dg, zc;
const ds = class ds {
  constructor(t) {
    m(this, re);
    m(this, mi, null);
    m(this, sn, null);
    m(this, We);
    m(this, nn, null);
    m(this, bo, null);
    f(this, We, t), n(ds, Ao) || f(ds, Ao, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const t = f(this, mi, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, We)._uiManager._signal;
    t.addEventListener("contextmenu", rs, {
      signal: e
    }), t.addEventListener("pointerdown", b(ds, Zl, hg), {
      signal: e
    });
    const s = f(this, nn, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, We).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, We)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return b(this, re, dg).call(this), t;
  }
  get div() {
    return n(this, mi);
  }
  hide() {
    n(this, mi).classList.add("hidden"), n(this, sn)?.hideDropdown();
  }
  show() {
    n(this, mi).classList.remove("hidden"), n(this, bo)?.shown();
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, re, Kh).call(this, e), n(this, nn).prepend(e, n(this, re, zc)), f(this, bo, t);
  }
  addColorPicker(t) {
    f(this, sn, t);
    const e = t.renderButton();
    b(this, re, Kh).call(this, e), n(this, nn).prepend(e, n(this, re, zc));
  }
  remove() {
    n(this, mi).remove(), n(this, sn)?.destroy(), f(this, sn, null);
  }
};
mi = new WeakMap(), sn = new WeakMap(), We = new WeakMap(), nn = new WeakMap(), bo = new WeakMap(), Ao = new WeakMap(), Zl = new WeakSet(), hg = /* @__PURE__ */ u(function(t) {
  t.stopPropagation();
}, "#pointerDown"), re = new WeakSet(), lg = /* @__PURE__ */ u(function(t) {
  n(this, We)._focusEventsAllowed = !1, Pe(t);
}, "#focusIn"), cg = /* @__PURE__ */ u(function(t) {
  n(this, We)._focusEventsAllowed = !0, Pe(t);
}, "#focusOut"), Kh = /* @__PURE__ */ u(function(t) {
  const e = n(this, We)._uiManager._signal;
  t.addEventListener("focusin", b(this, re, lg).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, re, cg).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", rs, {
    signal: e
  });
}, "#addListenersToElement"), dg = /* @__PURE__ */ u(function() {
  const {
    editorType: t,
    _uiManager: e
  } = n(this, We), s = document.createElement("button");
  s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", n(ds, Ao)[t]), b(this, re, Kh).call(this, s), s.addEventListener("click", (i) => {
    e.delete();
  }, {
    signal: e._signal
  }), n(this, nn).append(s);
}, "#addDeleteButton"), zc = /* @__PURE__ */ u(function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, "#divider"), m(ds, Zl), u(ds, "EditorToolbar"), m(ds, Ao, null);
let Gc = ds;
var yo, rn, an, qi, ug, fg, pg;
const ff = class ff {
  constructor(t) {
    m(this, qi);
    m(this, yo, null);
    m(this, rn, null);
    m(this, an);
    f(this, an, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, qi, fg).call(this, e, s), {
      style: a
    } = n(this, rn) || f(this, rn, b(this, qi, ug).call(this));
    t.append(n(this, rn)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, rn).remove();
  }
};
yo = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), qi = new WeakSet(), ug = /* @__PURE__ */ u(function() {
  const t = f(this, rn, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", rs, {
    signal: n(this, an)._signal
  });
  const e = f(this, yo, document.createElement("div"));
  return e.className = "buttons", t.append(e), b(this, qi, pg).call(this), t;
}, "#render"), fg = /* @__PURE__ */ u(function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, "#getLastPoint"), pg = /* @__PURE__ */ u(function() {
  const t = document.createElement("button");
  t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const s = n(this, an)._signal;
  t.addEventListener("contextmenu", rs, {
    signal: s
  }), t.addEventListener("click", () => {
    n(this, an).highlightSelection("floating_button");
  }, {
    signal: s
  }), n(this, yo).append(t);
}, "#addHighlightButton"), u(ff, "HighlightToolbar");
let Uc = ff;
function Tl(g, t, e) {
  for (const s of e)
    t.addEventListener(s, g[s].bind(g));
}
u(Tl, "bindEvents");
var tc;
const pf = class pf {
  constructor() {
    m(this, tc, 0);
  }
  get id() {
    return `${zm}${Zt(this, tc)._++}`;
  }
};
tc = new WeakMap(), u(pf, "IdManager");
let Vc = pf;
var _r, wo, Xt, Sr, Qh;
const ec = class ec {
  constructor() {
    m(this, Sr);
    m(this, _r, tb());
    m(this, wo, 0);
    m(this, Xt, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return q(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return b(this, Sr, Qh).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, Sr, Qh).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, Sr, Qh).call(this, t, s);
  }
  async getFromId(t) {
    n(this, Xt) || f(this, Xt, /* @__PURE__ */ new Map());
    const e = n(this, Xt).get(t);
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
    n(this, Xt) || f(this, Xt, /* @__PURE__ */ new Map());
    let s = n(this, Xt).get(t);
    if (s?.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, _r)}_${Zt(this, wo)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Xt).set(t, s), n(this, Xt).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, Xt).get(t);
    return e?.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    n(this, Xt) || f(this, Xt, /* @__PURE__ */ new Map());
    const e = n(this, Xt).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const i = new OffscreenCanvas(s.width, s.height);
      i.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = i.convertToBlob();
    }
    s.close?.(), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, _r)}_`);
  }
};
_r = new WeakMap(), wo = new WeakMap(), Xt = new WeakMap(), Sr = new WeakSet(), Qh = /* @__PURE__ */ u(async function(t, e) {
  n(this, Xt) || f(this, Xt, /* @__PURE__ */ new Map());
  let s = n(this, Xt).get(t);
  if (s === null)
    return null;
  if (s?.bitmap)
    return s.refCounter += 1, s;
  try {
    s ||= {
      bitmap: null,
      id: `image_${n(this, _r)}_${Zt(this, wo)._++}`,
      refCounter: 0,
      isSvg: !1
    };
    let i;
    if (typeof e == "string" ? (s.url = e, i = await Tc(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = ec._isSVGFittingCanvas, a = new FileReader(), o = new Image(), h = new Promise((l, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, l();
        }, a.onload = async () => {
          const d = s.svgUrl = a.result;
          o.src = await r ? `${d}#svgView(preserveAspectRatio(none))` : d;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await h;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    W(i), s = null;
  }
  return n(this, Xt).set(t, s), s && n(this, Xt).set(s.id, s), s;
}, "#get"), u(ec, "ImageManager");
let jc = ec;
var At, bi, vo, pt;
const gf = class gf {
  constructor(t = 128) {
    m(this, At, []);
    m(this, bi, !1);
    m(this, vo);
    m(this, pt, -1);
    f(this, vo, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), n(this, bi))
      return;
    const h = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, pt) === -1) {
      n(this, At).length > 0 && (n(this, At).length = 0), f(this, pt, 0), n(this, At).push(h);
      return;
    }
    if (a && n(this, At)[n(this, pt)].type === r) {
      o && (h.undo = n(this, At)[n(this, pt)].undo), n(this, At)[n(this, pt)] = h;
      return;
    }
    const l = n(this, pt) + 1;
    l === n(this, vo) ? n(this, At).splice(0, 1) : (f(this, pt, l), l < n(this, At).length && n(this, At).splice(l)), n(this, At).push(h);
  }
  undo() {
    if (n(this, pt) === -1)
      return;
    f(this, bi, !0);
    const {
      undo: t,
      post: e
    } = n(this, At)[n(this, pt)];
    t(), e?.(), f(this, bi, !1), f(this, pt, n(this, pt) - 1);
  }
  redo() {
    if (n(this, pt) < n(this, At).length - 1) {
      f(this, pt, n(this, pt) + 1), f(this, bi, !0);
      const {
        cmd: t,
        post: e
      } = n(this, At)[n(this, pt)];
      t(), e?.(), f(this, bi, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, pt) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, pt) < n(this, At).length - 1;
  }
  cleanType(t) {
    if (n(this, pt) !== -1) {
      for (let e = n(this, pt); e >= 0; e--)
        if (n(this, At)[e].type !== t) {
          n(this, At).splice(e + 1, n(this, pt) - e), f(this, pt, e);
          return;
        }
      n(this, At).length = 0, f(this, pt, -1);
    }
  }
  destroy() {
    f(this, At, null);
  }
};
At = new WeakMap(), bi = new WeakMap(), vo = new WeakMap(), pt = new WeakMap(), u(gf, "CommandManager");
let Wc = gf;
var sc, gg;
const mf = class mf {
  constructor(t) {
    m(this, sc);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = Ut.platform;
    for (const [s, i, r = {}] of t)
      for (const a of s) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: i,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const s = this.callbacks.get(b(this, sc, gg).call(this, e));
    if (!s)
      return;
    const {
      callback: i,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = s;
    o && !o(t, e) || (i.bind(t, ...a, e)(), r || Pe(e));
  }
};
sc = new WeakSet(), gg = /* @__PURE__ */ u(function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
}, "#serialize"), u(mf, "KeyboardManager");
let or = mf;
const Ja = class Ja {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return rb(t), q(this, "_colors", t);
  }
  convert(t) {
    const e = tf(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Ja._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? N.makeHexColor(...e) : t;
  }
};
u(Ja, "ColorManager"), $(Ja, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Xc = Ja;
var Er, me, Ct, Ot, xr, Ns, Cr, Ne, Ai, on, Tr, hn, fs, Xe, ln, _o, So, kr, Eo, ps, yi, Mr, wi, gs, ic, vi, xo, _i, cn, Co, To, Mt, tt, Fs, dn, ko, Mo, Si, ms, Os, Po, Fe, M, Jh, qc, mg, bg, Zh, Ag, yg, wg, Yc, vg, Kc, Qc, _g, te, Is, Sg, Eg, Jc, xg, Fa, Zc;
const Zi = class Zi {
  constructor(t, e, s, i, r, a, o, h, l, c, d, p, A) {
    m(this, M);
    m(this, Er, new AbortController());
    m(this, me, null);
    m(this, Ct, /* @__PURE__ */ new Map());
    m(this, Ot, /* @__PURE__ */ new Map());
    m(this, xr, null);
    m(this, Ns, null);
    m(this, Cr, null);
    m(this, Ne, new Wc());
    m(this, Ai, null);
    m(this, on, null);
    m(this, Tr, 0);
    m(this, hn, /* @__PURE__ */ new Set());
    m(this, fs, null);
    m(this, Xe, null);
    m(this, ln, /* @__PURE__ */ new Set());
    $(this, "_editorUndoBar", null);
    m(this, _o, !1);
    m(this, So, !1);
    m(this, kr, !1);
    m(this, Eo, null);
    m(this, ps, null);
    m(this, yi, null);
    m(this, Mr, null);
    m(this, wi, !1);
    m(this, gs, null);
    m(this, ic, new Vc());
    m(this, vi, !1);
    m(this, xo, !1);
    m(this, _i, null);
    m(this, cn, null);
    m(this, Co, null);
    m(this, To, null);
    m(this, Mt, j.NONE);
    m(this, tt, /* @__PURE__ */ new Set());
    m(this, Fs, null);
    m(this, dn, null);
    m(this, ko, null);
    m(this, Mo, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, Si, [0, 0]);
    m(this, ms, null);
    m(this, Os, null);
    m(this, Po, null);
    m(this, Fe, null);
    const y = this._signal = n(this, Er).signal;
    f(this, Os, t), f(this, Po, e), f(this, xr, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
      signal: y
    }), i._on("pagechanging", this.onPageChanging.bind(this), {
      signal: y
    }), i._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: y
    }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: y
    }), i._on("setpreference", this.onSetPreference.bind(this), {
      signal: y
    }), i._on("switchannotationeditorparams", (w) => this.updateParams(w.type, w.value), {
      signal: y
    }), b(this, M, Ag).call(this), b(this, M, _g).call(this), b(this, M, Yc).call(this), f(this, Ns, r.annotationStorage), f(this, Eo, r.filterFactory), f(this, dn, a), f(this, Mr, o || null), f(this, _o, h), f(this, So, l), f(this, kr, c), f(this, To, d || null), this.viewParameters = {
      realScale: Xi.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = p || null, this._supportsPinchToZoom = A !== !1;
  }
  static get _keyboardManager() {
    const t = Zi.prototype, e = /* @__PURE__ */ u((a) => n(a, Os).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), "arrowChecker"), s = /* @__PURE__ */ u((a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: h
        } = o;
        return h !== "text" && h !== "number";
      }
      return !0;
    }, "textInputChecker"), i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return q(this, "_keyboardManager", new or([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: /* @__PURE__ */ u((a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Os).contains(o) && !a.isEnterHandled, "checker")
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: /* @__PURE__ */ u((a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Os).contains(document.activeElement), "checker")
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    n(this, Fe)?.resolve(), f(this, Fe, null), n(this, Er)?.abort(), f(this, Er, null), this._signal = null;
    for (const t of n(this, Ot).values())
      t.destroy();
    n(this, Ot).clear(), n(this, Ct).clear(), n(this, ln).clear(), f(this, me, null), n(this, tt).clear(), n(this, Ne).destroy(), n(this, xr)?.destroy(), n(this, gs)?.hide(), f(this, gs, null), n(this, ps) && (clearTimeout(n(this, ps)), f(this, ps, null)), n(this, ms) && (clearTimeout(n(this, ms)), f(this, ms, null)), this._editorUndoBar?.destroy();
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, To);
  }
  get useNewAltTextFlow() {
    return n(this, So);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, kr);
  }
  get hcmFilter() {
    return q(this, "hcmFilter", n(this, dn) ? n(this, Eo).addHCMFilter(n(this, dn).foreground, n(this, dn).background) : "none");
  }
  get direction() {
    return q(this, "direction", getComputedStyle(n(this, Os)).direction);
  }
  get highlightColors() {
    return q(this, "highlightColors", n(this, Mr) ? new Map(n(this, Mr).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return q(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), f(this, on, t);
  }
  setMainHighlightColorPicker(t) {
    f(this, Co, t);
  }
  editAltText(t, e = !1) {
    n(this, xr)?.editAltText(this, t, e);
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
        f(this, kr, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    f(this, Tr, t - 1);
  }
  focusMainContainer() {
    n(this, Os).focus();
  }
  findParent(t, e) {
    for (const s of n(this, Ot).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, Po).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, ln).add(t);
  }
  removeShouldRescale(t) {
    n(this, ln).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = t * Xi.PDF_TO_CSS_UNITS;
    for (const e of n(this, ln))
      e.onScaleChanging();
    n(this, on)?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: i,
      focusNode: r,
      focusOffset: a
    } = e, o = e.toString(), l = b(this, M, Jh).call(this, e).closest(".textLayer"), c = this.getSelectionBoxes(l);
    if (!c)
      return;
    e.empty();
    const d = b(this, M, qc).call(this, l), p = n(this, Mt) === j.NONE, A = /* @__PURE__ */ u(() => {
      d?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: c,
        anchorNode: s,
        anchorOffset: i,
        focusNode: r,
        focusOffset: a,
        text: o
      }), p && this.showAllEditors("highlight", !0, !0);
    }, "callback");
    if (p) {
      this.switchToMode(j.HIGHLIGHT, A);
      return;
    }
    A();
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Ns) && !n(this, Ns).has(t.id) && n(this, Ns).setValue(t.id, t);
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, wi) && (f(this, wi, !1), b(this, M, Zh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, tt))
      if (e.div.contains(t)) {
        f(this, cn, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, cn))
      return;
    const [t, e] = n(this, cn);
    f(this, cn, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, M, Yc).call(this), b(this, M, Kc).call(this);
  }
  removeEditListeners() {
    b(this, M, vg).call(this), b(this, M, Qc).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, Xe))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, Xe))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    if (t.preventDefault(), n(this, me)?.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const s of n(this, tt)) {
      const i = s.serialize(!0);
      i && e.push(i);
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
      for (const a of n(this, Xe))
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
    const i = this.currentLayer;
    try {
      const r = [];
      for (const h of s) {
        const l = await i.deserialize(h);
        if (!l)
          return;
        r.push(l);
      }
      const a = /* @__PURE__ */ u(() => {
        for (const h of r)
          b(this, M, Jc).call(this, h);
        b(this, M, Zc).call(this, r);
      }, "cmd"), o = /* @__PURE__ */ u(() => {
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
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, Mt) !== j.NONE && !this.isEditorHandlingKeyboard && Zi._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, wi) && (f(this, wi, !1), b(this, M, Zh).call(this, "main_toolbar")));
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
    }
  }
  setEditingState(t) {
    t ? (b(this, M, yg).call(this), b(this, M, Kc).call(this), b(this, M, te).call(this, {
      isEditing: n(this, Mt) !== j.NONE,
      isEmpty: b(this, M, Fa).call(this),
      hasSomethingToUndo: n(this, Ne).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Ne).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, M, wg).call(this), b(this, M, Qc).call(this), b(this, M, te).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Xe)) {
      f(this, Xe, t);
      for (const e of n(this, Xe))
        b(this, M, Is).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, ic).id;
  }
  get currentLayer() {
    return n(this, Ot).get(n(this, Tr));
  }
  getLayer(t) {
    return n(this, Ot).get(t);
  }
  get currentPageIndex() {
    return n(this, Tr);
  }
  addLayer(t) {
    n(this, Ot).set(t.pageIndex, t), n(this, vi) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Ot).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1) {
    if (n(this, Mt) !== t && !(n(this, Fe) && (await n(this, Fe).promise, !n(this, Fe)))) {
      if (f(this, Fe, Promise.withResolvers()), f(this, Mt, t), t === j.NONE) {
        this.setEditingState(!1), b(this, M, Eg).call(this), this._editorUndoBar?.hide(), n(this, Fe).resolve();
        return;
      }
      this.setEditingState(!0), await b(this, M, Sg).call(this), this.unselectAll();
      for (const i of n(this, Ot).values())
        i.updateMode(t);
      if (!e) {
        s && this.addNewEditorFromKeyboard(), n(this, Fe).resolve();
        return;
      }
      for (const i of n(this, Ct).values())
        i.annotationElementId === e ? (this.setSelected(i), i.enterInEditMode()) : i.unselect();
      n(this, Fe).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== n(this, Mt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: t
    });
  }
  updateParams(t, e) {
    if (n(this, Xe)) {
      switch (t) {
        case K.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case K.HIGHLIGHT_DEFAULT_COLOR:
          n(this, Co)?.updateColor(e);
          break;
        case K.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, ko) || f(this, ko, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const s of n(this, tt))
        s.updateParams(t, e);
      for (const s of n(this, Xe))
        s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    for (const r of n(this, Ct).values())
      r.editorType === t && r.show(e);
    (n(this, ko)?.get(K.HIGHLIGHT_SHOW_ALL) ?? !0) !== e && b(this, M, Is).call(this, [[K.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, xo) !== t) {
      f(this, xo, t);
      for (const e of n(this, Ot).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  getEditors(t) {
    const e = [];
    for (const s of n(this, Ct).values())
      s.pageIndex === t && e.push(s);
    return e;
  }
  getEditor(t) {
    return n(this, Ct).get(t);
  }
  addEditor(t) {
    n(this, Ct).set(t.id, t);
  }
  removeEditor(t) {
    t.div.contains(document.activeElement) && (n(this, ps) && clearTimeout(n(this, ps)), f(this, ps, setTimeout(() => {
      this.focusMainContainer(), f(this, ps, null);
    }, 0))), n(this, Ct).delete(t.id), this.unselect(t), (!t.annotationElementId || !n(this, hn).has(t.annotationElementId)) && n(this, Ns)?.remove(t.id);
  }
  addDeletedAnnotationElement(t) {
    n(this, hn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, hn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, hn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, me) !== t && (f(this, me, t), t && b(this, M, Is).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, M, xg) === t && b(this, M, Is).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, M, Is).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, tt).has(t)) {
      n(this, tt).delete(t), t.unselect(), b(this, M, te).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, tt).add(t), t.select(), b(this, M, Is).call(this, t.propertiesToUpdate), b(this, M, te).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    n(this, on)?.commitOrRemove();
    for (const e of n(this, tt))
      e !== t && e.unselect();
    n(this, tt).clear(), n(this, tt).add(t), t.select(), b(this, M, Is).call(this, t.propertiesToUpdate), b(this, M, te).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, tt).has(t);
  }
  get firstSelectedEditor() {
    return n(this, tt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, tt).delete(t), b(this, M, te).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, tt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, tt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    n(this, Ne).undo(), b(this, M, te).call(this, {
      hasSomethingToUndo: n(this, Ne).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, M, Fa).call(this)
    }), this._editorUndoBar?.hide();
  }
  redo() {
    n(this, Ne).redo(), b(this, M, te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Ne).hasSomethingToRedo(),
      isEmpty: b(this, M, Fa).call(this)
    });
  }
  addCommands(t) {
    n(this, Ne).add(t), b(this, M, te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, M, Fa).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Ne).cleanType(t);
  }
  delete() {
    this.commitOrRemove();
    const t = this.currentLayer?.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, tt)], s = /* @__PURE__ */ u(() => {
      this._editorUndoBar?.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const r of e)
        r.remove();
    }, "cmd"), i = /* @__PURE__ */ u(() => {
      for (const r of e)
        b(this, M, Jc).call(this, r);
    }, "undo");
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    n(this, me)?.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, me) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, tt))
      t.commit();
    b(this, M, Zc).call(this, n(this, Ct).values());
  }
  unselectAll() {
    if (!(n(this, me) && (n(this, me).commitOrRemove(), n(this, Mt) !== j.NONE)) && !n(this, on)?.commitOrRemove() && this.hasSelection) {
      for (const t of n(this, tt))
        t.unselect();
      n(this, tt).clear(), b(this, M, te).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, Si)[0] += t, n(this, Si)[1] += e;
    const [i, r] = n(this, Si), a = [...n(this, tt)], o = 1e3;
    n(this, ms) && clearTimeout(n(this, ms)), f(this, ms, setTimeout(() => {
      f(this, ms, null), n(this, Si)[0] = n(this, Si)[1] = 0, this.addCommands({
        cmd: /* @__PURE__ */ u(() => {
          for (const h of a)
            n(this, Ct).has(h.id) && h.translateInPage(i, r);
        }, "cmd"),
        undo: /* @__PURE__ */ u(() => {
          for (const h of a)
            n(this, Ct).has(h.id) && h.translateInPage(-i, -r);
        }, "undo"),
        mustExec: !1
      });
    }, o));
    for (const h of a)
      h.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), f(this, fs, /* @__PURE__ */ new Map());
      for (const t of n(this, tt))
        n(this, fs).set(t, {
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
    if (!n(this, fs))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, fs);
    f(this, fs, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = r, o.newPageIndex = a, e ||= i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex;
    if (!e)
      return !1;
    const s = /* @__PURE__ */ u((i, r, a, o) => {
      if (n(this, Ct).has(i.id)) {
        const h = n(this, Ot).get(o);
        h ? i._setParentAndPosition(h, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    }, "move");
    return this.addCommands({
      cmd: /* @__PURE__ */ u(() => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, r, a, o);
      }, "cmd"),
      undo: /* @__PURE__ */ u(() => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, r, a, o);
      }, "undo"),
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, fs))
      for (const s of n(this, fs).keys())
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
    return this.getActive()?.shouldGetKeyboardEvents() || n(this, tt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, me) === t;
  }
  getActive() {
    return n(this, me);
  }
  getMode() {
    return n(this, Mt);
  }
  get imageManager() {
    return q(this, "imageManager", new jc());
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
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = /* @__PURE__ */ u((l, c, d, p) => ({
          x: (c - i) / a,
          y: 1 - (l + d - s) / r,
          width: p / a,
          height: d / r
        }), "rotator");
        break;
      case "180":
        o = /* @__PURE__ */ u((l, c, d, p) => ({
          x: 1 - (l + d - s) / r,
          y: 1 - (c + p - i) / a,
          width: d / r,
          height: p / a
        }), "rotator");
        break;
      case "270":
        o = /* @__PURE__ */ u((l, c, d, p) => ({
          x: 1 - (c + p - i) / a,
          y: (l - s) / r,
          width: p / a,
          height: d / r
        }), "rotator");
        break;
      default:
        o = /* @__PURE__ */ u((l, c, d, p) => ({
          x: (l - s) / r,
          y: (c - i) / a,
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
          width: y,
          height: w
        } of d.getClientRects())
          y === 0 || w === 0 || h.push(o(p, A, y, w));
    }
    return h.length === 0 ? null : h;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Cr) || f(this, Cr, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    n(this, Cr)?.delete(t);
  }
  renderAnnotationElement(t) {
    const e = n(this, Cr)?.get(t.data.id);
    if (!e)
      return;
    const s = n(this, Ns).getRawValue(e);
    s && (n(this, Mt) === j.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
};
Er = new WeakMap(), me = new WeakMap(), Ct = new WeakMap(), Ot = new WeakMap(), xr = new WeakMap(), Ns = new WeakMap(), Cr = new WeakMap(), Ne = new WeakMap(), Ai = new WeakMap(), on = new WeakMap(), Tr = new WeakMap(), hn = new WeakMap(), fs = new WeakMap(), Xe = new WeakMap(), ln = new WeakMap(), _o = new WeakMap(), So = new WeakMap(), kr = new WeakMap(), Eo = new WeakMap(), ps = new WeakMap(), yi = new WeakMap(), Mr = new WeakMap(), wi = new WeakMap(), gs = new WeakMap(), ic = new WeakMap(), vi = new WeakMap(), xo = new WeakMap(), _i = new WeakMap(), cn = new WeakMap(), Co = new WeakMap(), To = new WeakMap(), Mt = new WeakMap(), tt = new WeakMap(), Fs = new WeakMap(), dn = new WeakMap(), ko = new WeakMap(), Mo = new WeakMap(), Si = new WeakMap(), ms = new WeakMap(), Os = new WeakMap(), Po = new WeakMap(), Fe = new WeakMap(), M = new WeakSet(), Jh = /* @__PURE__ */ u(function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, "#getAnchorElementForSelection"), qc = /* @__PURE__ */ u(function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, Ot).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, "#getLayerForTextLayer"), mg = /* @__PURE__ */ u(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, M, Jh).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, gs) || f(this, gs, new Uc(this)), n(this, gs).show(s, i, this.direction === "ltr"));
}, "#displayHighlightToolbar"), bg = /* @__PURE__ */ u(function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Fs) && (n(this, gs)?.hide(), f(this, Fs, null), b(this, M, te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, Fs))
    return;
  const i = b(this, M, Jh).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, Fs) && (n(this, gs)?.hide(), f(this, Fs, null), b(this, M, te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if (n(this, gs)?.hide(), f(this, Fs, e), b(this, M, te).call(this, {
    hasSelectedText: !0
  }), !(n(this, Mt) !== j.HIGHLIGHT && n(this, Mt) !== j.NONE) && (n(this, Mt) === j.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), f(this, wi, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const r = n(this, Mt) === j.HIGHLIGHT ? b(this, M, qc).call(this, i) : null;
    r?.toggleDrawing();
    const a = new AbortController(), o = this.combinedSignal(a), h = /* @__PURE__ */ u((l) => {
      l.type === "pointerup" && l.button !== 0 || (a.abort(), r?.toggleDrawing(!0), l.type === "pointerup" && b(this, M, Zh).call(this, "main_toolbar"));
    }, "pointerup");
    window.addEventListener("pointerup", h, {
      signal: o
    }), window.addEventListener("blur", h, {
      signal: o
    });
  }
}, "#selectionChange"), Zh = /* @__PURE__ */ u(function(t = "") {
  n(this, Mt) === j.HIGHLIGHT ? this.highlightSelection(t) : n(this, _o) && b(this, M, mg).call(this);
}, "#onSelectEnd"), Ag = /* @__PURE__ */ u(function() {
  document.addEventListener("selectionchange", b(this, M, bg).bind(this), {
    signal: this._signal
  });
}, "#addSelectionListener"), yg = /* @__PURE__ */ u(function() {
  if (n(this, yi))
    return;
  f(this, yi, new AbortController());
  const t = this.combinedSignal(n(this, yi));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, "#addFocusManager"), wg = /* @__PURE__ */ u(function() {
  n(this, yi)?.abort(), f(this, yi, null);
}, "#removeFocusManager"), Yc = /* @__PURE__ */ u(function() {
  if (n(this, _i))
    return;
  f(this, _i, new AbortController());
  const t = this.combinedSignal(n(this, _i));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, "#addKeyboardManager"), vg = /* @__PURE__ */ u(function() {
  n(this, _i)?.abort(), f(this, _i, null);
}, "#removeKeyboardManager"), Kc = /* @__PURE__ */ u(function() {
  if (n(this, Ai))
    return;
  f(this, Ai, new AbortController());
  const t = this.combinedSignal(n(this, Ai));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, "#addCopyPasteListeners"), Qc = /* @__PURE__ */ u(function() {
  n(this, Ai)?.abort(), f(this, Ai, null);
}, "#removeCopyPasteListeners"), _g = /* @__PURE__ */ u(function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, "#addDragAndDropListeners"), te = /* @__PURE__ */ u(function(t) {
  Object.entries(t).some(([s, i]) => n(this, Mo)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, Mo), t)
  }), n(this, Mt) === j.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, M, Is).call(this, [[K.HIGHLIGHT_FREE, !0]]));
}, "#dispatchUpdateStates"), Is = /* @__PURE__ */ u(function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, "#dispatchUpdateUI"), Sg = /* @__PURE__ */ u(async function() {
  if (!n(this, vi)) {
    f(this, vi, !0);
    const t = [];
    for (const e of n(this, Ot).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Ct).values())
      e.enable();
  }
}, "#enableAll"), Eg = /* @__PURE__ */ u(function() {
  if (this.unselectAll(), n(this, vi)) {
    f(this, vi, !1);
    for (const t of n(this, Ot).values())
      t.disable();
    for (const t of n(this, Ct).values())
      t.disable();
  }
}, "#disableAll"), Jc = /* @__PURE__ */ u(function(t) {
  const e = n(this, Ot).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, "#addEditorToLayer"), xg = /* @__PURE__ */ u(function() {
  let t = null;
  for (t of n(this, tt))
    ;
  return t;
}, "#lastSelectedEditor"), Fa = /* @__PURE__ */ u(function() {
  if (n(this, Ct).size === 0)
    return !0;
  if (n(this, Ct).size === 1)
    for (const t of n(this, Ct).values())
      return t.isEmpty();
  return !1;
}, "#isEmpty"), Zc = /* @__PURE__ */ u(function(t) {
  for (const e of n(this, tt))
    e.unselect();
  n(this, tt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, tt).add(e), e.select());
  b(this, M, te).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, "#selectEditors"), u(Zi, "AnnotationEditorUIManager"), $(Zi, "TRANSLATE_SMALL", 1), $(Zi, "TRANSLATE_BIG", 10);
let hr = Zi;
var Pt, bs, qe, Pr, As, be, Rr, ys, de, Hs, un, ws, Ei, ns, Oa, tl;
const ce = class ce {
  constructor(t) {
    m(this, ns);
    m(this, Pt, null);
    m(this, bs, !1);
    m(this, qe, null);
    m(this, Pr, null);
    m(this, As, null);
    m(this, be, null);
    m(this, Rr, !1);
    m(this, ys, null);
    m(this, de, null);
    m(this, Hs, null);
    m(this, un, null);
    m(this, ws, !1);
    f(this, de, t), f(this, ws, t._uiManager.useNewAltTextFlow), n(ce, Ei) || f(ce, Ei, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    ce._l10n ??= t;
  }
  async render() {
    const t = f(this, qe, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = f(this, Pr, document.createElement("span"));
    t.append(e), n(this, ws) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(ce, Ei).missing), e.setAttribute("data-l10n-id", n(ce, Ei)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, de)._uiManager._signal;
    t.addEventListener("contextmenu", rs, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = /* @__PURE__ */ u((r) => {
      r.preventDefault(), n(this, de)._uiManager.editAltText(n(this, de)), n(this, ws) && n(this, de)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ns, Oa)
        }
      });
    }, "onClick");
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (f(this, Rr, !0), i(r));
    }, {
      signal: s
    }), await b(this, ns, tl).call(this), t;
  }
  finish() {
    n(this, qe) && (n(this, qe).focus({
      focusVisible: n(this, Rr)
    }), f(this, Rr, !1));
  }
  isEmpty() {
    return n(this, ws) ? n(this, Pt) === null : !n(this, Pt) && !n(this, bs);
  }
  hasData() {
    return n(this, ws) ? n(this, Pt) !== null || !!n(this, Hs) : this.isEmpty();
  }
  get guessedText() {
    return n(this, Hs);
  }
  async setGuessedText(t) {
    n(this, Pt) === null && (f(this, Hs, t), f(this, un, await ce._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, ns, tl).call(this));
  }
  toggleAltTextBadge(t = !1) {
    if (!n(this, ws) || n(this, Pt)) {
      n(this, ys)?.remove(), f(this, ys, null);
      return;
    }
    if (!n(this, ys)) {
      const e = f(this, ys, document.createElement("div"));
      e.className = "noAltTextBadge", n(this, de).div.append(e);
    }
    n(this, ys).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, Pt);
    return !t && n(this, Hs) === e && (e = n(this, un)), {
      altText: e,
      decorative: n(this, bs),
      guessedText: n(this, Hs),
      textWithDisclaimer: n(this, un)
    };
  }
  get data() {
    return {
      altText: n(this, Pt),
      decorative: n(this, bs)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (f(this, Hs, s), f(this, un, i)), !(n(this, Pt) === t && n(this, bs) === e) && (r || (f(this, Pt, t), f(this, bs, e)), b(this, ns, tl).call(this));
  }
  toggle(t = !1) {
    n(this, qe) && (!t && n(this, be) && (clearTimeout(n(this, be)), f(this, be, null)), n(this, qe).disabled = !t);
  }
  shown() {
    n(this, de)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ns, Oa)
      }
    });
  }
  destroy() {
    n(this, qe)?.remove(), f(this, qe, null), f(this, Pr, null), f(this, As, null), n(this, ys)?.remove(), f(this, ys, null);
  }
};
Pt = new WeakMap(), bs = new WeakMap(), qe = new WeakMap(), Pr = new WeakMap(), As = new WeakMap(), be = new WeakMap(), Rr = new WeakMap(), ys = new WeakMap(), de = new WeakMap(), Hs = new WeakMap(), un = new WeakMap(), ws = new WeakMap(), Ei = new WeakMap(), ns = new WeakSet(), Oa = /* @__PURE__ */ u(function() {
  return n(this, Pt) && "added" || n(this, Pt) === null && this.guessedText && "review" || "missing";
}, "#label"), tl = /* @__PURE__ */ u(async function() {
  const t = n(this, qe);
  if (!t)
    return;
  if (n(this, ws)) {
    if (t.classList.toggle("done", !!n(this, Pt)), t.setAttribute("data-l10n-id", n(ce, Ei)[n(this, ns, Oa)]), n(this, Pr)?.setAttribute("data-l10n-id", n(ce, Ei)[`${n(this, ns, Oa)}-label`]), !n(this, Pt)) {
      n(this, As)?.remove();
      return;
    }
  } else {
    if (!n(this, Pt) && !n(this, bs)) {
      t.classList.remove("done"), n(this, As)?.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, As);
  if (!e) {
    f(this, As, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, de).id}`;
    const i = 100, r = n(this, de)._uiManager._signal;
    r.addEventListener("abort", () => {
      clearTimeout(n(this, be)), f(this, be, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      f(this, be, setTimeout(() => {
        f(this, be, null), n(this, As).classList.add("show"), n(this, de)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, i));
    }, {
      signal: r
    }), t.addEventListener("mouseleave", () => {
      n(this, be) && (clearTimeout(n(this, be)), f(this, be, null)), n(this, As)?.classList.remove("show");
    }, {
      signal: r
    });
  }
  n(this, bs) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, Pt)), e.parentNode || t.append(e), n(this, de).getImageForAltText()?.setAttribute("aria-describedby", e.id);
}, "#setState"), u(ce, "AltText"), m(ce, Ei, null), $(ce, "_l10n", null);
let kl = ce;
var Ro, fn, Lo, Io, Do, No, Fo, Lr, Bs, pn, xi, ci, Cg, Tg, td;
const nc = class nc {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    m(this, ci);
    m(this, Ro);
    m(this, fn, !1);
    m(this, Lo, null);
    m(this, Io);
    m(this, Do);
    m(this, No);
    m(this, Fo);
    m(this, Lr);
    m(this, Bs, null);
    m(this, pn);
    m(this, xi, null);
    f(this, Ro, t), f(this, Lo, s), f(this, Io, e), f(this, Do, i), f(this, No, r), f(this, Fo, a), f(this, pn, new AbortController()), f(this, Lr, AbortSignal.any([o, n(this, pn).signal])), t.addEventListener("touchstart", b(this, ci, Cg).bind(this), {
      passive: !1,
      signal: n(this, Lr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return q(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    n(this, pn)?.abort(), f(this, pn, null);
  }
};
Ro = new WeakMap(), fn = new WeakMap(), Lo = new WeakMap(), Io = new WeakMap(), Do = new WeakMap(), No = new WeakMap(), Fo = new WeakMap(), Lr = new WeakMap(), Bs = new WeakMap(), pn = new WeakMap(), xi = new WeakMap(), ci = new WeakSet(), Cg = /* @__PURE__ */ u(function(t) {
  var i, r, a;
  if ((i = n(this, Io)) != null && i.call(this) || t.touches.length < 2)
    return;
  if (!n(this, xi)) {
    f(this, xi, new AbortController());
    const o = AbortSignal.any([n(this, Lr), n(this, xi).signal]), h = n(this, Ro), l = {
      signal: o,
      passive: !1
    };
    h.addEventListener("touchmove", b(this, ci, Tg).bind(this), l), h.addEventListener("touchend", b(this, ci, td).bind(this), l), h.addEventListener("touchcancel", b(this, ci, td).bind(this), l), (r = n(this, Do)) == null || r.call(this);
  }
  if (Pe(t), t.touches.length !== 2 || (a = n(this, Lo)) != null && a.call(this)) {
    f(this, Bs, null);
    return;
  }
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]), f(this, Bs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: s.screenX,
    touch1Y: s.screenY
  });
}, "#onTouchStart"), Tg = /* @__PURE__ */ u(function(t) {
  var E;
  if (!n(this, Bs) || t.touches.length !== 2)
    return;
  let [e, s] = t.touches;
  e.identifier > s.identifier && ([e, s] = [s, e]);
  const {
    screenX: i,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = s, h = n(this, Bs), {
    touch0X: l,
    touch0Y: c,
    touch1X: d,
    touch1Y: p
  } = h, A = d - l, y = p - c, w = a - i, _ = o - r, v = Math.hypot(w, _) || 1, S = Math.hypot(A, y) || 1;
  if (!n(this, fn) && Math.abs(S - v) <= nc.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (h.touch0X = i, h.touch0Y = r, h.touch1X = a, h.touch1Y = o, t.preventDefault(), !n(this, fn)) {
    f(this, fn, !0);
    return;
  }
  const x = [(i + a) / 2, (r + o) / 2];
  (E = n(this, No)) == null || E.call(this, x, S, v);
}, "#onTouchMove"), td = /* @__PURE__ */ u(function(t) {
  var e;
  n(this, xi).abort(), f(this, xi, null), (e = n(this, Fo)) == null || e.call(this), n(this, Bs) && (t.preventDefault(), f(this, Bs, null), f(this, fn, !1));
}, "#onTouchEnd"), u(nc, "TouchManager");
let Ml = nc;
var gn, Ye, ot, Ir, Ci, Oo, mn, Ht, bn, $s, Ti, Ho, An, Ae, Bo, yn, Gs, vs, Dr, Nr, Oe, wn, $o, rc, H, ed, Go, sd, el, kg, Mg, id, sl, nd, Pg, Rg, Lg, rd, Ig, ad, Dg, Ng, Fg, od, Ha;
const Y = class Y {
  constructor(t) {
    m(this, H);
    m(this, gn, null);
    m(this, Ye, null);
    m(this, ot, null);
    m(this, Ir, !1);
    m(this, Ci, null);
    m(this, Oo, "");
    m(this, mn, !1);
    m(this, Ht, null);
    m(this, bn, null);
    m(this, $s, null);
    m(this, Ti, null);
    m(this, Ho, "");
    m(this, An, !1);
    m(this, Ae, null);
    m(this, Bo, !1);
    m(this, yn, !1);
    m(this, Gs, !1);
    m(this, vs, null);
    m(this, Dr, 0);
    m(this, Nr, 0);
    m(this, Oe, null);
    m(this, wn, null);
    $(this, "_editToolbar", null);
    $(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    $(this, "_initialData", null);
    $(this, "_isVisible", !0);
    $(this, "_uiManager", null);
    $(this, "_focusEventsAllowed", !0);
    m(this, $o, !1);
    m(this, rc, Y._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, h] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / h, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Y.prototype._resizeWithKeyboard, e = hr.TRANSLATE_SMALL, s = hr.TRANSLATE_BIG;
    return q(this, "_resizerKeyboardManager", new or([[["ArrowLeft", "mac+ArrowLeft"], t, {
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
    }], [["Escape", "mac+Escape"], Y.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return q(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new hd({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (Y._l10n ??= t, Y._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    }), Y._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    Y._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
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
    return n(this, $o);
  }
  set _isDraggable(t) {
    f(this, $o, t), this.div?.classList.toggle("draggable", t);
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
    this.div.style.zIndex = n(this, rc);
  }
  setParent(t) {
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : b(this, H, Ha).call(this), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, An) ? f(this, An, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    !this._focusEventsAllowed || !this.isAttachedToDOM || t.relatedTarget?.closest(`#${this.id}`) || (t.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  translate(t, e) {
    b(this, H, ed).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]), b(this, H, ed).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(t, e) {
    n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
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
    return !!n(this, Ae) && (n(this, Ae)[0] !== this.x || n(this, Ae)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, Ae) && (n(this, Ae)[2] !== this.width || n(this, Ae)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = Y, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
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
      pageDimensions: [s, i]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: h
    } = this;
    if (o *= s, h *= i, r *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          r = Math.max(0, Math.min(s - o, r)), a = Math.max(0, Math.min(i - h, a));
          break;
        case 90:
          r = Math.max(0, Math.min(s - h, r)), a = Math.min(i, Math.max(o, a));
          break;
        case 180:
          r = Math.min(s, Math.max(o, r)), a = Math.min(i, Math.max(h, a));
          break;
        case 270:
          r = Math.min(s, Math.max(h, r)), a = Math.max(0, Math.min(i - o, a));
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [l, c] = this.getBaseTranslation();
    r += l, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = Y, Go, sd).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = Y, Go, sd).call(s, t, e, 360 - this.parentRotation);
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
  setDims(t, e) {
    const [s, i] = this.parentDimensions, {
      style: r
    } = this.div;
    r.width = `${(100 * t / s).toFixed(2)}%`, n(this, mn) || (r.height = `${(100 * e / i).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: t
    } = this.div, {
      height: e,
      width: s
    } = t, i = s.endsWith("%"), r = !n(this, mn) && e.endsWith("%");
    if (i && r)
      return;
    const [a, o] = this.parentDimensions;
    i || (t.width = `${(100 * parseFloat(s) / a).toFixed(2)}%`), !n(this, mn) && !r && (t.height = `${(100 * parseFloat(e) / o).toFixed(2)}%`);
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
    n(this, ot)?.finish();
  }
  async addEditToolbar() {
    return this._editToolbar || n(this, yn) ? this._editToolbar : (this._editToolbar = new Gc(this), this.div.append(this._editToolbar.render()), n(this, ot) && await this._editToolbar.addAltText(n(this, ot)), this._editToolbar);
  }
  removeEditToolbar() {
    this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, n(this, ot)?.destroy());
  }
  addContainer(t) {
    const e = this._editToolbar?.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    n(this, ot) || (kl.initialize(Y._l10n), f(this, ot, new kl(this)), n(this, gn) && (n(this, ot).data = n(this, gn), f(this, gn, null)), await this.addEditToolbar());
  }
  get altTextData() {
    return n(this, ot)?.data;
  }
  set altTextData(t) {
    n(this, ot) && (n(this, ot).data = t);
  }
  get guessedAltText() {
    return n(this, ot)?.guessedText;
  }
  async setGuessedAltText(t) {
    await n(this, ot)?.setGuessedText(t);
  }
  serializeAltText(t) {
    return n(this, ot)?.serialize(t);
  }
  hasAltText() {
    return !!n(this, ot) && !n(this, ot).isEmpty();
  }
  hasAltTextData() {
    return n(this, ot)?.hasData() ?? !1;
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = n(this, Ir) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), b(this, H, ad).call(this);
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
    const [s, i] = this.getInitialTranslation();
    return this.translate(s, i), Tl(this, this.div, ["pointerdown"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, wn) || f(this, wn, new Ml({
      container: this.div,
      isPinchingDisabled: /* @__PURE__ */ u(() => !this.isSelected, "isPinchingDisabled"),
      onPinchStart: b(this, H, Pg).bind(this),
      onPinching: b(this, H, Rg).bind(this),
      onPinchEnd: b(this, H, Lg).bind(this),
      signal: this._uiManager._signal
    }))), this._uiManager._editorUndoBar?.hide(), this.div;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = Ut.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (f(this, An, !0), this._isDraggable) {
      b(this, H, Ig).call(this, t);
      return;
    }
    b(this, H, rd).call(this, t);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, vs) && clearTimeout(n(this, vs)), f(this, vs, setTimeout(() => {
      f(this, vs, null), this.parent?.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, h] = this.pageTranslation, l = t / i, c = e / i, d = this.x * r, p = this.y * a, A = this.width * r, y = this.height * a;
    switch (s) {
      case 0:
        return [d + l + o, a - p - c - y + h, d + l + A + o, a - p - c + h];
      case 90:
        return [d + c + o, a - p + l + h, d + c + y + o, a - p + l + A + h];
      case 180:
        return [d - l - A + o, a - p + c + h, d - l + o, a - p + c + y + h];
      case 270:
        return [d - c - y + o, a - p - l - A + h, d - c + o, a - p - l + h];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, h = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, h];
      case 90:
        return [s, e - i, h, o];
      case 180:
        return [r, e - i, o, h];
      case 270:
        return [r, e - a, h, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    f(this, yn, !0);
  }
  disableEditMode() {
    f(this, yn, !1);
  }
  isInEditMode() {
    return n(this, yn);
  }
  shouldGetKeyboardEvents() {
    return n(this, Gs);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, H, ad).call(this);
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
    rt("An editor must be serializable");
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: s
    });
    i.rotation = t.rotation, f(i, gn, t.accessibilityData);
    const [r, a] = i.pageDimensions, [o, h, l, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = h / a, i.width = l / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (n(this, Ti)?.abort(), f(this, Ti, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, vs) && (clearTimeout(n(this, vs)), f(this, vs, null)), b(this, H, Ha).call(this), this.removeEditToolbar(), n(this, Oe)) {
      for (const t of n(this, Oe).values())
        clearTimeout(t);
      f(this, Oe, null);
    }
    this.parent = null, n(this, wn)?.destroy(), f(this, wn, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, H, kg).call(this), n(this, Ht).classList.remove("hidden"), Tl(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), f(this, $s, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, Ht).children;
    if (!n(this, Ye)) {
      f(this, Ye, Array.from(e));
      const a = b(this, H, Dg).bind(this), o = b(this, H, Ng).bind(this), h = this._uiManager._signal;
      for (const l of n(this, Ye)) {
        const c = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", a, {
          signal: h
        }), l.addEventListener("blur", o, {
          signal: h
        }), l.addEventListener("focus", b(this, H, Fg).bind(this, c), {
          signal: h
        }), l.setAttribute("data-l10n-id", Y._l10nResizer[c]);
      }
    }
    const s = n(this, Ye)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Ye).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, Ht).append(n(this, Ht).firstChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, Ht).firstChild.before(n(this, Ht).lastChild);
      let a = 0;
      for (const o of e) {
        const l = n(this, Ye)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", Y._l10nResizer[l]);
      }
    }
    b(this, H, od).call(this, 0), f(this, Gs, !0), n(this, Ht).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, Gs) && b(this, H, nd).call(this, n(this, Ho), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, H, Ha).call(this), this.div.focus();
  }
  select() {
    if (this.makeResizable(), this.div?.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      });
      return;
    }
    this._editToolbar?.show(), n(this, ot)?.toggleAltTextBadge(!1);
  }
  unselect() {
    n(this, Ht)?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), this._editToolbar?.hide(), n(this, ot)?.toggleAltTextBadge(!0);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, Bo);
  }
  set isEditing(t) {
    f(this, Bo, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(t, e) {
    f(this, mn, !0);
    const s = t / e, {
      style: i
    } = this.div;
    i.aspectRatio = s, i.height = "auto";
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
      n(this, Oe) || f(this, Oe, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, Oe).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Oe).delete(s), n(this, Oe).size === 0 && f(this, Oe, null);
      }, Y._telemetryTimeout), n(this, Oe).set(s, i);
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
    this.div && (this.div.tabIndex = 0), f(this, Ir, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), f(this, Ir, !0);
  }
  renderAnnotationElement(t) {
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
      firstChild: e
    } = t.container;
    e?.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
gn = new WeakMap(), Ye = new WeakMap(), ot = new WeakMap(), Ir = new WeakMap(), Ci = new WeakMap(), Oo = new WeakMap(), mn = new WeakMap(), Ht = new WeakMap(), bn = new WeakMap(), $s = new WeakMap(), Ti = new WeakMap(), Ho = new WeakMap(), An = new WeakMap(), Ae = new WeakMap(), Bo = new WeakMap(), yn = new WeakMap(), Gs = new WeakMap(), vs = new WeakMap(), Dr = new WeakMap(), Nr = new WeakMap(), Oe = new WeakMap(), wn = new WeakMap(), $o = new WeakMap(), rc = new WeakMap(), H = new WeakSet(), ed = /* @__PURE__ */ u(function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, "#translate"), Go = new WeakSet(), sd = /* @__PURE__ */ u(function(t, e, s) {
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
}, "#rotatePoint"), el = /* @__PURE__ */ u(function(t) {
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
}, "#getRotationMatrix"), kg = /* @__PURE__ */ u(function() {
  if (n(this, Ht))
    return;
  f(this, Ht, document.createElement("div")), n(this, Ht).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, Ht).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, H, Mg).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", rs, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, Ht));
}, "#createResizers"), Mg = /* @__PURE__ */ u(function(t, e) {
  e.preventDefault();
  const {
    isMac: s
  } = Ut.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  n(this, ot)?.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, f(this, bn, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, H, nd).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Pe, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", rs, {
    signal: a
  }), f(this, $s, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, h = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const l = /* @__PURE__ */ u(() => {
    r.abort(), this.parent.togglePointerEvents(!0), n(this, ot)?.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = h, b(this, H, sl).call(this);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", l, {
    signal: a
  }), window.addEventListener("blur", l, {
    signal: a
  });
}, "#resizerPointerdown"), id = /* @__PURE__ */ u(function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e;
  const [r, a] = this.parentDimensions;
  this.setDims(r * s, a * i), this.fixAndSetPosition(), this._onResized();
}, "#resize"), sl = /* @__PURE__ */ u(function() {
  if (!n(this, $s))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, $s);
  f(this, $s, null);
  const r = this.x, a = this.y, o = this.width, h = this.height;
  r === t && a === e && o === s && h === i || this.addCommands({
    cmd: b(this, H, id).bind(this, r, a, o, h),
    undo: b(this, H, id).bind(this, t, e, s, i),
    mustExec: !0
  });
}, "#addResizeToUndoStack"), nd = /* @__PURE__ */ u(function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, h = this.height, l = Y.MIN_SIZE / s, c = Y.MIN_SIZE / i, d = b(this, H, el).call(this, this.rotation), p = /* @__PURE__ */ u((I, B) => [d[0] * I + d[2] * B, d[1] * I + d[3] * B], "transf"), A = b(this, H, el).call(this, 360 - this.rotation), y = /* @__PURE__ */ u((I, B) => [A[0] * I + A[2] * B, A[1] * I + A[3] * B], "invTransf");
  let w, _, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, w = /* @__PURE__ */ u((I, B) => [0, 0], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [I, B], "getOpposite");
      break;
    case "topMiddle":
      w = /* @__PURE__ */ u((I, B) => [I / 2, 0], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [I / 2, B], "getOpposite");
      break;
    case "topRight":
      v = !0, w = /* @__PURE__ */ u((I, B) => [I, 0], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [0, B], "getOpposite");
      break;
    case "middleRight":
      S = !0, w = /* @__PURE__ */ u((I, B) => [I, B / 2], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [0, B / 2], "getOpposite");
      break;
    case "bottomRight":
      v = !0, w = /* @__PURE__ */ u((I, B) => [I, B], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [0, 0], "getOpposite");
      break;
    case "bottomMiddle":
      w = /* @__PURE__ */ u((I, B) => [I / 2, B], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [I / 2, 0], "getOpposite");
      break;
    case "bottomLeft":
      v = !0, w = /* @__PURE__ */ u((I, B) => [0, B], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [I, 0], "getOpposite");
      break;
    case "middleLeft":
      S = !0, w = /* @__PURE__ */ u((I, B) => [0, B / 2], "getPoint"), _ = /* @__PURE__ */ u((I, B) => [I, B / 2], "getOpposite");
      break;
  }
  const x = w(o, h), E = _(o, h);
  let C = p(...E);
  const k = Y._round(r + C[0]), T = Y._round(a + C[1]);
  let F = 1, O = 1, U, V;
  if (e.fromKeyboard)
    ({
      deltaX: U,
      deltaY: V
    } = e);
  else {
    const {
      screenX: I,
      screenY: B
    } = e, [ge, os] = n(this, bn);
    [U, V] = this.screenToPageTranslation(I - ge, B - os), n(this, bn)[0] = I, n(this, bn)[1] = B;
  }
  if ([U, V] = y(U / s, V / i), v) {
    const I = Math.hypot(o, h);
    F = O = Math.max(Math.min(Math.hypot(E[0] - x[0] - U, E[1] - x[1] - V) / I, 1 / o, 1 / h), l / o, c / h);
  } else S ? F = Math.max(l, Math.min(1, Math.abs(E[0] - x[0] - U))) / o : O = Math.max(c, Math.min(1, Math.abs(E[1] - x[1] - V))) / h;
  const ut = Y._round(o * F), ft = Y._round(h * O);
  C = p(..._(ut, ft));
  const at = k - C[0], Jt = T - C[1];
  n(this, Ae) || f(this, Ae, [this.x, this.y, this.width, this.height]), this.width = ut, this.height = ft, this.x = at, this.y = Jt, this.setDims(s * ut, i * ft), this.fixAndSetPosition(), this._onResizing();
}, "#resizerPointermove"), Pg = /* @__PURE__ */ u(function() {
  f(this, $s, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), n(this, ot)?.toggle(!1), this.parent.togglePointerEvents(!1);
}, "#touchPinchStartCallback"), Rg = /* @__PURE__ */ u(function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, H, el).call(this, this.rotation), o = /* @__PURE__ */ u((k, T) => [a[0] * k + a[2] * T, a[1] * k + a[3] * T], "transf"), [h, l] = this.parentDimensions, c = this.x, d = this.y, p = this.width, A = this.height, y = Y.MIN_SIZE / h, w = Y.MIN_SIZE / l;
  r = Math.max(Math.min(r, 1 / p, 1 / A), y / p, w / A);
  const _ = Y._round(p * r), v = Y._round(A * r);
  if (_ === p && v === A)
    return;
  n(this, Ae) || f(this, Ae, [c, d, p, A]);
  const S = o(p / 2, A / 2), x = Y._round(c + S[0]), E = Y._round(d + S[1]), C = o(_ / 2, v / 2);
  this.x = x - C[0], this.y = E - C[1], this.width = _, this.height = v, this.setDims(h * _, l * v), this.fixAndSetPosition(), this._onResizing();
}, "#touchPinchCallback"), Lg = /* @__PURE__ */ u(function() {
  n(this, ot)?.toggle(!0), this.parent.togglePointerEvents(!0), b(this, H, sl).call(this);
}, "#touchPinchEndCallback"), rd = /* @__PURE__ */ u(function(t) {
  const {
    isMac: e
  } = Ut.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, "#selectOnPointerEvent"), Ig = /* @__PURE__ */ u(function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = /* @__PURE__ */ u((l) => {
    i.abort(), f(this, Ci, null), f(this, An, !1), this._uiManager.endDragSession() || b(this, H, rd).call(this, l), s && this._onStopDragging();
  }, "cancelDrag");
  e && (f(this, Dr, t.clientX), f(this, Nr, t.clientY), f(this, Ci, t.pointerId), f(this, Oo, t.pointerType), window.addEventListener("pointermove", (l) => {
    s || (s = !0, this._onStartDragging());
    const {
      clientX: c,
      clientY: d,
      pointerId: p
    } = l;
    if (p !== n(this, Ci)) {
      Pe(l);
      return;
    }
    const [A, y] = this.screenToPageTranslation(c - n(this, Dr), d - n(this, Nr));
    f(this, Dr, c), f(this, Nr, d), this._uiManager.dragSelectedEditors(A, y);
  }, a), window.addEventListener("touchmove", Pe, a), window.addEventListener("pointerdown", (l) => {
    l.pointerType === n(this, Oo) && (n(this, wn) || l.isPrimary) && o(l), Pe(l);
  }, a));
  const h = /* @__PURE__ */ u((l) => {
    if (!n(this, Ci) || n(this, Ci) === l.pointerId) {
      o(l);
      return;
    }
    Pe(l);
  }, "pointerUpCallback");
  window.addEventListener("pointerup", h, {
    signal: r
  }), window.addEventListener("blur", h, {
    signal: r
  });
}, "#setUpDragSession"), ad = /* @__PURE__ */ u(function() {
  if (n(this, Ti) || !this.div)
    return;
  f(this, Ti, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Ti));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, "#addFocusListeners"), Dg = /* @__PURE__ */ u(function(t) {
  Y._resizerKeyboardManager.exec(this, t);
}, "#resizerKeydown"), Ng = /* @__PURE__ */ u(function(t) {
  n(this, Gs) && t.relatedTarget?.parentNode !== n(this, Ht) && b(this, H, Ha).call(this);
}, "#resizerBlur"), Fg = /* @__PURE__ */ u(function(t) {
  f(this, Ho, n(this, Gs) ? t : "");
}, "#resizerFocus"), od = /* @__PURE__ */ u(function(t) {
  if (n(this, Ye))
    for (const e of n(this, Ye))
      e.tabIndex = t;
}, "#setResizerTabIndex"), Ha = /* @__PURE__ */ u(function() {
  f(this, Gs, !1), b(this, H, od).call(this, -1), b(this, H, sl).call(this);
}, "#stopResizing"), m(Y, Go), u(Y, "AnnotationEditor"), $(Y, "_l10n", null), $(Y, "_l10nResizer", null), $(Y, "_borderLineWidth", -1), $(Y, "_colorManager", new Xc()), $(Y, "_zIndex", 1), $(Y, "_telemetryTimeout", 1e3);
let mt = Y;
const bf = class bf extends mt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
};
u(bf, "FakeEditor");
let hd = bf;
const Xp = 3285377520, Ie = 4294901760, ls = 65535, Af = class Af {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Xp, this.h2 = t ? t & 4294967295 : Xp;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let w = 0, _ = t.length; w < _; w++) {
        const v = t.charCodeAt(w);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, h = 0, l = this.h1, c = this.h2;
    const d = 3432918353, p = 461845907, A = d & ls, y = p & ls;
    for (let w = 0; w < i; w++)
      w & 1 ? (o = a[w], o = o * d & Ie | o * A & ls, o = o << 15 | o >>> 17, o = o * p & Ie | o * y & ls, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (h = a[w], h = h * d & Ie | h * A & ls, h = h << 15 | h >>> 17, h = h * p & Ie | h * y & ls, c ^= h, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * d & Ie | o * A & ls, o = o << 15 | o >>> 17, o = o * p & Ie | o * y & ls, i & 1 ? l ^= o : c ^= o;
    }
    this.h1 = l, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Ie | t * 36045 & ls, e = e * 4283543511 & Ie | ((e << 16 | t >>> 16) * 2950163797 & Ie) >>> 16, t ^= e >>> 1, t = t * 444984403 & Ie | t * 60499 & ls, e = e * 3301882366 & Ie | ((e << 16 | t >>> 16) * 3120437893 & Ie) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
};
u(Af, "MurmurHash3_64");
let Pl = Af;
const ld = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var vn, _n, Rt, ac, Og;
const yf = class yf {
  constructor() {
    m(this, ac);
    m(this, vn, !1);
    m(this, _n, null);
    m(this, Rt, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = n(this, Rt).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, Rt).get(t);
  }
  remove(t) {
    if (n(this, Rt).delete(t), n(this, Rt).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of n(this, Rt).values())
        if (e instanceof mt)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = n(this, Rt).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [r, a] of Object.entries(e))
        s[r] !== a && (i = !0, s[r] = a);
    else
      i = !0, n(this, Rt).set(t, e);
    i && b(this, ac, Og).call(this), e instanceof mt && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(t) {
    return n(this, Rt).has(t);
  }
  getAll() {
    return n(this, Rt).size > 0 ? Qu(n(this, Rt)) : null;
  }
  setAll(t) {
    for (const [e, s] of Object.entries(t))
      this.setValue(e, s);
  }
  get size() {
    return n(this, Rt).size;
  }
  resetModified() {
    n(this, vn) && (f(this, vn, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Rl(this);
  }
  get serializable() {
    if (n(this, Rt).size === 0)
      return ld;
    const t = /* @__PURE__ */ new Map(), e = new Pl(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, Rt)) {
      const h = o instanceof mt ? o.serialize(!1, i) : o;
      h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), r ||= !!h.bitmap);
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : ld;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    for (const s of n(this, Rt).values()) {
      if (!(s instanceof mt))
        continue;
      const i = s.telemetryFinalData;
      if (!i)
        continue;
      const {
        type: r
      } = i;
      e.has(r) || e.set(r, Object.getPrototypeOf(s).constructor), t ||= /* @__PURE__ */ Object.create(null);
      const a = t[r] ||= /* @__PURE__ */ new Map();
      for (const [o, h] of Object.entries(i)) {
        if (o === "type")
          continue;
        let l = a.get(o);
        l || (l = /* @__PURE__ */ new Map(), a.set(o, l));
        const c = l.get(h) ?? 0;
        l.set(h, c + 1);
      }
    }
    for (const [s, i] of e)
      t[s] = i.computeTelemetryFinalData(t[s]);
    return t;
  }
  resetModifiedIds() {
    f(this, _n, null);
  }
  get modifiedIds() {
    if (n(this, _n))
      return n(this, _n);
    const t = [];
    for (const e of n(this, Rt).values())
      !(e instanceof mt) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
    return f(this, _n, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
};
vn = new WeakMap(), _n = new WeakMap(), Rt = new WeakMap(), ac = new WeakSet(), Og = /* @__PURE__ */ u(function() {
  n(this, vn) || (f(this, vn, !0), typeof this.onSetModified == "function" && this.onSetModified());
}, "#setModified"), u(yf, "AnnotationStorage");
let ao = yf;
var zo;
const wf = class wf extends ao {
  constructor(e) {
    super();
    m(this, zo);
    const {
      map: s,
      hash: i,
      transfer: r
    } = e.serializable, a = structuredClone(s, r ? {
      transfer: r
    } : null);
    f(this, zo, {
      map: a,
      hash: i,
      transfer: r
    });
  }
  get print() {
    rt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, zo);
  }
  get modifiedIds() {
    return q(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
};
zo = new WeakMap(), u(wf, "PrintAnnotationStorage");
let Rl = wf;
var Fr;
const vf = class vf {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    m(this, Fr, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), n(this, Fr).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    _inspectFont: e
  }) {
    if (!(!t || n(this, Fr).has(t.loadedName))) {
      if (Nt(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: i,
          style: r
        } = t, a = new FontFace(s, i, r);
        this.addNativeFontFace(a);
        try {
          await a.load(), n(this, Fr).add(s), e?.(t);
        } catch {
          W(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(a);
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
        } catch (i) {
          throw W(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((s) => {
        const i = this._queueLoadingCallback(s);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const t = !!this._document?.fonts;
    return q(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return typeof navigator < "u" && typeof navigator?.userAgent == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent) && (t = !0), q(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (Nt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; s.length > 0 && s[0].done; ) {
        const r = s.shift();
        setTimeout(r.callback, 0);
      }
    }
    u(e, "completeRequest");
    const {
      loadingRequests: s
    } = this, i = {
      done: !1,
      complete: e,
      callback: t
    };
    return s.push(i), i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return q(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(E, C) {
      return E.charCodeAt(C) << 24 | E.charCodeAt(C + 1) << 16 | E.charCodeAt(C + 2) << 8 | E.charCodeAt(C + 3) & 255;
    }
    u(s, "int32");
    function i(E, C, k, T) {
      const F = E.substring(0, C), O = E.substring(C + k);
      return F + T + O;
    }
    u(i, "spliceString");
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const h = o.getContext("2d");
    let l = 0;
    function c(E, C) {
      if (++l > 30) {
        W("Load test font never loaded."), C();
        return;
      }
      if (h.font = "30px " + E, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
        C();
        return;
      }
      setTimeout(c.bind(null, E, C));
    }
    u(c, "isFontReady");
    const d = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = i(p, 976, d.length, d);
    const y = 16, w = 1482184792;
    let _ = s(p, y);
    for (r = 0, a = d.length - 3; r < a; r += 4)
      _ = _ - w + s(d, r) | 0;
    r < d.length && (_ = _ - w + s(d + "XXX", r) | 0), p = i(p, y, 4, Ym(_));
    const v = `url(data:font/opentype;base64,${btoa(p)});`, S = `@font-face {font-family:"${d}";src:${v}}`;
    this.insertRule(S);
    const x = this._document.createElement("div");
    x.style.visibility = "hidden", x.style.width = x.style.height = "10px", x.style.position = "absolute", x.style.top = x.style.left = "0px";
    for (const E of [t.loadedName, d]) {
      const C = this._document.createElement("span");
      C.textContent = "Hi", C.style.fontFamily = E, x.append(C);
    }
    this._document.body.append(x), c(d, () => {
      x.remove(), e.complete();
    });
  }
};
Fr = new WeakMap(), u(vf, "FontLoader");
let cd = vf;
const _f = class _f {
  constructor(t, {
    disableFontFace: e = !1,
    fontExtraProperties: s = !1,
    inspectFont: i = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const r in t)
      this[r] = t[r];
    this.disableFontFace = e === !0, this.fontExtraProperties = s === !0, this._inspectFont = i;
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
    const t = `url(data:${this.mimetype};base64,${eb(this.data)});`;
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
    let i;
    try {
      i = t.get(s);
    } catch (a) {
      W(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(i || "");
    return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = r;
  }
};
u(_f, "FontFaceObject");
let dd = _f;
const Uh = {
  DATA: 1,
  ERROR: 2
}, vt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function qp() {
}
u(qp, "onFn");
function le(g) {
  if (g instanceof hi || g instanceof so || g instanceof ka || g instanceof El || g instanceof Ma || g instanceof Qa)
    return g;
  switch (g instanceof Error || typeof g == "object" && g !== null || rt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), g.name) {
    case "AbortException":
      return new hi(g.message);
    case "InvalidPDFException":
      return new so(g.message);
    case "MissingPDFException":
      return new ka(g.message);
    case "PasswordException":
      return new El(g.message, g.code);
    case "UnexpectedResponseException":
      return new Ma(g.message, g.status);
    case "UnknownErrorException":
      return new Qa(g.message, g.details);
  }
  return new Qa(g.message, g.toString());
}
u(le, "wrapReason");
var Or, Ve, Hg, Bg, $g, il;
const Sf = class Sf {
  constructor(t, e, s) {
    m(this, Ve);
    m(this, Or, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", b(this, Ve, Hg).bind(this), {
      signal: n(this, Or).signal
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
    const i = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[i] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, h = this.comObj;
    return new ReadableStream({
      start: /* @__PURE__ */ u((l) => {
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
        }, i), c.promise;
      }, "start"),
      pull: /* @__PURE__ */ u((l) => {
        const c = Promise.withResolvers();
        return this.streamControllers[r].pullCall = c, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: vt.PULL,
          streamId: r,
          desiredSize: l.desiredSize
        }), c.promise;
      }, "pull"),
      cancel: /* @__PURE__ */ u((l) => {
        Nt(l instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = c, this.streamControllers[r].isClosed = !0, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: vt.CANCEL,
          streamId: r,
          reason: le(l)
        }), c.promise;
      }, "cancel")
    }, s);
  }
  destroy() {
    n(this, Or)?.abort(), f(this, Or, null);
  }
};
Or = new WeakMap(), Ve = new WeakSet(), Hg = /* @__PURE__ */ u(function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    b(this, Ve, $g).call(this, t);
    return;
  }
  if (t.callback) {
    const s = t.callbackId, i = this.callbackCapabilities[s];
    if (!i)
      throw new Error(`Cannot resolve callback ${s}`);
    if (delete this.callbackCapabilities[s], t.callback === Uh.DATA)
      i.resolve(t.data);
    else if (t.callback === Uh.ERROR)
      i.reject(le(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = this.sourceName, i = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Uh.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: Uh.ERROR,
        callbackId: t.callbackId,
        reason: le(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, Ve, Bg).call(this, t);
    return;
  }
  e(t.data);
}, "#onMessage"), Bg = /* @__PURE__ */ u(function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], h = {
    enqueue(l, c = 1, d) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= c, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.ENQUEUE,
        streamId: e,
        chunk: l
      }, d);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(l) {
      Nt(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: vt.ERROR,
        streamId: e,
        reason: le(l)
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
      targetName: i,
      stream: vt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(l) {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: vt.START_COMPLETE,
      streamId: e,
      reason: le(l)
    });
  });
}, "#createStreamSink"), $g = /* @__PURE__ */ u(function(t) {
  const e = t.streamId, s = this.sourceName, i = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case vt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(le(t.reason));
      break;
    case vt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(le(t.reason));
      break;
    case vt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || qp).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.PULL_COMPLETE,
          streamId: e,
          reason: le(l)
        });
      });
      break;
    case vt.ENQUEUE:
      if (Nt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case vt.CLOSE:
      if (Nt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, Ve, il).call(this, a, e);
      break;
    case vt.ERROR:
      Nt(a, "error should have stream controller"), a.controller.error(le(t.reason)), b(this, Ve, il).call(this, a, e);
      break;
    case vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(le(t.reason)), b(this, Ve, il).call(this, a, e);
      break;
    case vt.CANCEL:
      if (!o)
        break;
      const h = le(t.reason);
      Promise.try(o.onCancel || qp, h).then(function() {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(l) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: vt.CANCEL_COMPLETE,
          streamId: e,
          reason: le(l)
        });
      }), o.sinkCapability.reject(h), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, "#processStreamMessage"), il = /* @__PURE__ */ u(async function(t, e) {
  await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]), delete this.streamControllers[e];
}, "#deleteStreamController"), u(Sf, "MessageHandler");
let en = Sf;
var Uo;
const Ef = class Ef {
  constructor({
    enableHWA: t = !1
  }) {
    m(this, Uo, !1);
    f(this, Uo, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, Uo)
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
    rt("Abstract method `_createCanvas` called.");
  }
};
Uo = new WeakMap(), u(Ef, "BaseCanvasFactory");
let ud = Ef;
const xf = class xf extends ud {
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
u(xf, "DOMCanvasFactory");
let fd = xf;
const Cf = class Cf {
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
    rt("Abstract method `_fetch` called.");
  }
};
u(Cf, "BaseCMapReaderFactory");
let pd = Cf;
const Tf = class Tf extends pd {
  async _fetch(t) {
    const e = await Tc(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Cc(e);
  }
};
u(Tf, "DOMCMapReaderFactory");
let Ll = Tf;
const kf = class kf {
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
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  destroy(t = !1) {
  }
};
u(kf, "BaseFilterFactory");
let gd = kf;
var Sn, Hr, zs, Us, qt, En, xn, P, Wt, Ba, ur, nl, fr, Gg, bd, pr, $a, Ga, Ad, za;
const Mf = class Mf extends gd {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    m(this, P);
    m(this, Sn);
    m(this, Hr);
    m(this, zs);
    m(this, Us);
    m(this, qt);
    m(this, En);
    m(this, xn, 0);
    f(this, Us, e), f(this, qt, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, P, Wt).get(e);
    if (s)
      return s;
    const [i, r, a] = b(this, P, nl).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, P, Wt).get(o), s)
      return n(this, P, Wt).set(e, s), s;
    const h = `g_${n(this, Us)}_transfer_map_${Zt(this, xn)._++}`, l = b(this, P, fr).call(this, h);
    n(this, P, Wt).set(e, l), n(this, P, Wt).set(o, l);
    const c = b(this, P, pr).call(this, h);
    return b(this, P, Ga).call(this, i, r, a, c), l;
  }
  addHCMFilter(e, s) {
    const i = `${e}-${s}`, r = "base";
    let a = n(this, P, Ba).get(r);
    if (a?.key === i || (a ? (a.filter?.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, P, Ba).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, P, za).call(this, e);
    e = N.makeHexColor(...o);
    const h = b(this, P, za).call(this, s);
    if (s = N.makeHexColor(...h), n(this, P, ur).style.color = "", e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const l = new Array(256);
    for (let y = 0; y <= 255; y++) {
      const w = y / 255;
      l[y] = w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    }
    const c = l.join(","), d = `g_${n(this, Us)}_hcm_filter`, p = a.filter = b(this, P, pr).call(this, d);
    b(this, P, Ga).call(this, c, c, c, p), b(this, P, bd).call(this, p);
    const A = /* @__PURE__ */ u((y, w) => {
      const _ = o[y] / 255, v = h[y] / 255, S = new Array(w + 1);
      for (let x = 0; x <= w; x++)
        S[x] = _ + x / w * (v - _);
      return S.join(",");
    }, "getSteps");
    return b(this, P, Ga).call(this, A(0, 5), A(1, 5), A(2, 5), p), a.url = b(this, P, fr).call(this, d), a.url;
  }
  addAlphaFilter(e) {
    let s = n(this, P, Wt).get(e);
    if (s)
      return s;
    const [i] = b(this, P, nl).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, P, Wt).get(r), s)
      return n(this, P, Wt).set(e, s), s;
    const a = `g_${n(this, Us)}_alpha_map_${Zt(this, xn)._++}`, o = b(this, P, fr).call(this, a);
    n(this, P, Wt).set(e, o), n(this, P, Wt).set(r, o);
    const h = b(this, P, pr).call(this, a);
    return b(this, P, Ad).call(this, i, h), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, P, Wt).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = b(this, P, nl).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, P, Wt).get(r), s)
      return n(this, P, Wt).set(e, s), s;
    const a = `g_${n(this, Us)}_luminosity_map_${Zt(this, xn)._++}`, o = b(this, P, fr).call(this, a);
    n(this, P, Wt).set(e, o), n(this, P, Wt).set(r, o);
    const h = b(this, P, pr).call(this, a);
    return b(this, P, Gg).call(this, h), e && b(this, P, Ad).call(this, i, h), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    const o = `${s}-${i}-${r}-${a}`;
    let h = n(this, P, Ba).get(e);
    if (h?.key === o || (h ? (h.filter?.remove(), h.key = o, h.url = "none", h.filter = null) : (h = {
      key: o,
      url: "none",
      filter: null
    }, n(this, P, Ba).set(e, h)), !s || !i))
      return h.url;
    const [l, c] = [s, i].map(b(this, P, za).bind(this));
    let d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), p = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [A, y] = [r, a].map(b(this, P, za).bind(this));
    p < d && ([d, p, A, y] = [p, d, y, A]), n(this, P, ur).style.color = "";
    const w = /* @__PURE__ */ u((S, x, E) => {
      const C = new Array(256), k = (p - d) / E, T = S / 255, F = (x - S) / (255 * E);
      let O = 0;
      for (let U = 0; U <= E; U++) {
        const V = Math.round(d + U * k), ut = T + U * F;
        for (let ft = O; ft <= V; ft++)
          C[ft] = ut;
        O = V + 1;
      }
      for (let U = O; U < 256; U++)
        C[U] = C[O - 1];
      return C.join(",");
    }, "getSteps"), _ = `g_${n(this, Us)}_hcm_${e}_filter`, v = h.filter = b(this, P, pr).call(this, _);
    return b(this, P, bd).call(this, v), b(this, P, Ga).call(this, w(A[0], y[0], 5), w(A[1], y[1], 5), w(A[2], y[2], 5), v), h.url = b(this, P, fr).call(this, _), h.url;
  }
  destroy(e = !1) {
    e && n(this, En)?.size || (n(this, zs)?.parentNode.parentNode.remove(), f(this, zs, null), n(this, Hr)?.clear(), f(this, Hr, null), n(this, En)?.clear(), f(this, En, null), f(this, xn, 0));
  }
};
Sn = new WeakMap(), Hr = new WeakMap(), zs = new WeakMap(), Us = new WeakMap(), qt = new WeakMap(), En = new WeakMap(), xn = new WeakMap(), P = new WeakSet(), Wt = /* @__PURE__ */ u(function() {
  return n(this, Hr) || f(this, Hr, /* @__PURE__ */ new Map());
}, "#cache"), Ba = /* @__PURE__ */ u(function() {
  return n(this, En) || f(this, En, /* @__PURE__ */ new Map());
}, "#hcmCache"), ur = /* @__PURE__ */ u(function() {
  if (!n(this, zs)) {
    const e = n(this, qt).createElement("div"), {
      style: s
    } = e;
    s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, qt).createElementNS(Ls, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), f(this, zs, n(this, qt).createElementNS(Ls, "defs")), e.append(i), i.append(n(this, zs)), n(this, qt).body.append(e);
  }
  return n(this, zs);
}, "#defs"), nl = /* @__PURE__ */ u(function(e) {
  if (e.length === 1) {
    const l = e[0], c = new Array(256);
    for (let p = 0; p < 256; p++)
      c[p] = l[p] / 255;
    const d = c.join(",");
    return [d, d, d];
  }
  const [s, i, r] = e, a = new Array(256), o = new Array(256), h = new Array(256);
  for (let l = 0; l < 256; l++)
    a[l] = s[l] / 255, o[l] = i[l] / 255, h[l] = r[l] / 255;
  return [a.join(","), o.join(","), h.join(",")];
}, "#createTables"), fr = /* @__PURE__ */ u(function(e) {
  if (n(this, Sn) === void 0) {
    f(this, Sn, "");
    const s = n(this, qt).URL;
    s !== n(this, qt).baseURI && (kc(s) ? W('#createUrl: ignore "data:"-URL for performance reasons.') : f(this, Sn, s.split("#", 1)[0]));
  }
  return `url(${n(this, Sn)}#${e})`;
}, "#createUrl"), Gg = /* @__PURE__ */ u(function(e) {
  const s = n(this, qt).createElementNS(Ls, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, "#addLuminosityConversion"), bd = /* @__PURE__ */ u(function(e) {
  const s = n(this, qt).createElementNS(Ls, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, "#addGrayConversion"), pr = /* @__PURE__ */ u(function(e) {
  const s = n(this, qt).createElementNS(Ls, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, P, ur).append(s), s;
}, "#createFilter"), $a = /* @__PURE__ */ u(function(e, s, i) {
  const r = n(this, qt).createElementNS(Ls, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, "#appendFeFunc"), Ga = /* @__PURE__ */ u(function(e, s, i, r) {
  const a = n(this, qt).createElementNS(Ls, "feComponentTransfer");
  r.append(a), b(this, P, $a).call(this, a, "feFuncR", e), b(this, P, $a).call(this, a, "feFuncG", s), b(this, P, $a).call(this, a, "feFuncB", i);
}, "#addTransferMapConversion"), Ad = /* @__PURE__ */ u(function(e, s) {
  const i = n(this, qt).createElementNS(Ls, "feComponentTransfer");
  s.append(i), b(this, P, $a).call(this, i, "feFuncA", e);
}, "#addTransferMapAlphaConversion"), za = /* @__PURE__ */ u(function(e) {
  return n(this, P, ur).style.color = e, tf(getComputedStyle(n(this, P, ur)).getPropertyValue("color"));
}, "#getRGB"), u(Mf, "DOMFilterFactory");
let md = Mf;
const Pf = class Pf {
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
    rt("Abstract method `_fetch` called.");
  }
};
u(Pf, "BaseStandardFontDataFactory");
let yd = Pf;
const Rf = class Rf extends yd {
  async _fetch(t) {
    const e = await Tc(t, "arraybuffer");
    return new Uint8Array(e);
  }
};
u(Rf, "DOMStandardFontDataFactory");
let Il = Rf;
const Qt = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function wd(g, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), g.clip(i);
}
u(wd, "applyBoundingBox");
const Lf = class Lf {
  getPattern() {
    rt("Abstract method `getPattern` called.");
  }
};
u(Lf, "BaseShadingPattern");
let oo = Lf;
const If = class If extends oo {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const s of this._colorStops)
      e.addColorStop(s[0], s[1]);
    return e;
  }
  getPattern(t, e, s, i) {
    let r;
    if (i === Qt.STROKE || i === Qt.FILL) {
      const a = e.current.getClippedPathBoundingBox(i, ct(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, h = Math.ceil(a[3] - a[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", o, h), c = l.context;
      c.clearRect(0, 0, c.canvas.width, c.canvas.height), c.beginPath(), c.rect(0, 0, c.canvas.width, c.canvas.height), c.translate(-a[0], -a[1]), s = N.transform(s, [1, 0, 0, 1, a[0], a[1]]), c.transform(...e.baseTransform), this.matrix && c.transform(...this.matrix), wd(c, this._bbox), c.fillStyle = this._createGradient(c), c.fill(), r = t.createPattern(l.canvas, "no-repeat");
      const d = new DOMMatrix(s);
      r.setTransform(d);
    } else
      wd(t, this._bbox), r = this._createGradient(t);
    return r;
  }
};
u(If, "RadialAxialShadingPattern");
let vd = If;
function Nc(g, t, e, s, i, r, a, o) {
  const h = t.coords, l = t.colors, c = g.data, d = g.width * 4;
  let p;
  h[e + 1] > h[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p), h[s + 1] > h[i + 1] && (p = s, s = i, i = p, p = a, a = o, o = p), h[e + 1] > h[s + 1] && (p = e, e = s, s = p, p = r, r = a, a = p);
  const A = (h[e] + t.offsetX) * t.scaleX, y = (h[e + 1] + t.offsetY) * t.scaleY, w = (h[s] + t.offsetX) * t.scaleX, _ = (h[s + 1] + t.offsetY) * t.scaleY, v = (h[i] + t.offsetX) * t.scaleX, S = (h[i + 1] + t.offsetY) * t.scaleY;
  if (y >= S)
    return;
  const x = l[r], E = l[r + 1], C = l[r + 2], k = l[a], T = l[a + 1], F = l[a + 2], O = l[o], U = l[o + 1], V = l[o + 2], ut = Math.round(y), ft = Math.round(S);
  let at, Jt, I, B, ge, os, Rs, Le;
  for (let Vt = ut; Vt <= ft; Vt++) {
    if (Vt < _) {
      const ht = Vt < y ? 0 : (y - Vt) / (y - _);
      at = A - (A - w) * ht, Jt = x - (x - k) * ht, I = E - (E - T) * ht, B = C - (C - F) * ht;
    } else {
      let ht;
      Vt > S ? ht = 1 : _ === S ? ht = 0 : ht = (_ - Vt) / (_ - S), at = w - (w - v) * ht, Jt = k - (k - O) * ht, I = T - (T - U) * ht, B = F - (F - V) * ht;
    }
    let Et;
    Vt < y ? Et = 0 : Vt > S ? Et = 1 : Et = (y - Vt) / (y - S), ge = A - (A - v) * Et, os = x - (x - O) * Et, Rs = E - (E - U) * Et, Le = C - (C - V) * Et;
    const dr = Math.round(Math.min(at, ge)), Ra = Math.round(Math.max(at, ge));
    let oe = d * Vt + dr * 4;
    for (let ht = dr; ht <= Ra; ht++)
      Et = (at - ht) / (at - ge), Et < 0 ? Et = 0 : Et > 1 && (Et = 1), c[oe++] = Jt - (Jt - os) * Et | 0, c[oe++] = I - (I - Rs) * Et | 0, c[oe++] = B - (B - Le) * Et | 0, c[oe++] = 255;
  }
}
u(Nc, "drawTriangle");
function ab(g, t, e) {
  const s = t.coords, i = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, h = Math.floor(s.length / o) - 1, l = o - 1;
      for (r = 0; r < h; r++) {
        let c = r * o;
        for (let d = 0; d < l; d++, c++)
          Nc(g, e, s[c], s[c + 1], s[c + o], i[c], i[c + 1], i[c + o]), Nc(g, e, s[c + o + 1], s[c + 1], s[c + o], i[c + o + 1], i[c + 1], i[c + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = s.length; r < a; r += 3)
        Nc(g, e, s[r], s[r + 1], s[r + 2], i[r], i[r + 1], i[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
u(ab, "drawFigure");
const Df = class Df extends oo {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const o = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - o, c = Math.ceil(this._bounds[3]) - h, d = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(c * t[1] * 1.1)), 3e3), A = l / d, y = c / p, w = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -h,
      scaleX: 1 / A,
      scaleY: 1 / y
    }, _ = d + 2 * 2, v = p + 2 * 2, S = s.getCanvas("mesh", _, v), x = S.context, E = x.createImageData(d, p);
    if (e) {
      const k = E.data;
      for (let T = 0, F = k.length; T < F; T += 4)
        k[T] = e[0], k[T + 1] = e[1], k[T + 2] = e[2], k[T + 3] = 255;
    }
    for (const k of this._figures)
      ab(E, k, w);
    return x.putImageData(E, 2, 2), {
      canvas: S.canvas,
      offsetX: o - 2 * A,
      offsetY: h - 2 * y,
      scaleX: A,
      scaleY: y
    };
  }
  getPattern(t, e, s, i) {
    wd(t, this._bbox);
    let r;
    if (i === Qt.SHADING)
      r = N.singularValueDecompose2dScale(ct(t));
    else if (r = N.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const o = N.singularValueDecompose2dScale(this.matrix);
      r = [r[0] * o[0], r[1] * o[1]];
    }
    const a = this._createMeshCanvas(r, i === Qt.SHADING ? null : this._background, e.cachedCanvases);
    return i !== Qt.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
};
u(Df, "MeshShadingPattern");
let _d = Df;
const Nf = class Nf extends oo {
  getPattern() {
    return "hotpink";
  }
};
u(Nf, "DummyShadingPattern");
let Sd = Nf;
function ob(g) {
  switch (g[0]) {
    case "RadialAxial":
      return new vd(g);
    case "Mesh":
      return new _d(g);
    case "Dummy":
      return new Sd();
  }
  throw new Error(`Unknown IR type: ${g[0]}`);
}
u(ob, "getShadingPattern");
const Yp = {
  COLORED: 1,
  UNCOLORED: 2
}, Za = class Za {
  constructor(t, e, s, i, r) {
    this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = r;
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: s,
      paintType: i,
      tilingType: r,
      color: a,
      canvasGraphicsFactory: o
    } = this;
    let {
      xstep: h,
      ystep: l
    } = this;
    h = Math.abs(h), l = Math.abs(l), xc("TilingType: " + r);
    const c = e[0], d = e[1], p = e[2], A = e[3], y = p - c, w = A - d, _ = N.singularValueDecompose2dScale(this.matrix), v = N.singularValueDecompose2dScale(this.baseTransform), S = _[0] * v[0], x = _[1] * v[1];
    let E = y, C = w, k = !1, T = !1;
    const F = Math.ceil(h * S), O = Math.ceil(l * x), U = Math.ceil(y * S), V = Math.ceil(w * x);
    F >= U ? E = h : k = !0, O >= V ? C = l : T = !0;
    const ut = this.getSizeAndScale(E, this.ctx.canvas.width, S), ft = this.getSizeAndScale(C, this.ctx.canvas.height, x), at = t.cachedCanvases.getCanvas("pattern", ut.size, ft.size), Jt = at.context, I = o.createCanvasGraphics(Jt);
    if (I.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(I, i, a), Jt.translate(-ut.scale * c, -ft.scale * d), I.transform(ut.scale, 0, 0, ft.scale, 0, 0), Jt.save(), this.clipBbox(I, c, d, p, A), I.baseTransform = ct(I.ctx), I.executeOperatorList(s), I.endDrawing(), Jt.restore(), k || T) {
      const B = at.canvas;
      k && (E = h), T && (C = l);
      const ge = this.getSizeAndScale(E, this.ctx.canvas.width, S), os = this.getSizeAndScale(C, this.ctx.canvas.height, x), Rs = ge.size, Le = os.size, Vt = t.cachedCanvases.getCanvas("pattern-workaround", Rs, Le), Et = Vt.context, dr = k ? Math.floor(y / h) : 0, Ra = T ? Math.floor(w / l) : 0;
      for (let oe = 0; oe <= dr; oe++)
        for (let ht = 0; ht <= Ra; ht++)
          Et.drawImage(B, Rs * oe, Le * ht, Rs, Le, 0, 0, Rs, Le);
      return {
        canvas: Vt.canvas,
        scaleX: ge.scale,
        scaleY: os.scale,
        offsetX: c,
        offsetY: d
      };
    }
    return {
      canvas: at.canvas,
      scaleX: ut.scale,
      scaleY: ft.scale,
      offsetX: c,
      offsetY: d
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Za.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s;
    t.ctx.rect(e, s, a, o), t.current.updateRectMinMax(ct(t.ctx), [e, s, i, r]), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    const i = t.ctx, r = t.current;
    switch (e) {
      case Yp.COLORED:
        const a = this.ctx;
        i.fillStyle = a.fillStyle, i.strokeStyle = a.strokeStyle, r.fillColor = a.fillStyle, r.strokeColor = a.strokeStyle;
        break;
      case Yp.UNCOLORED:
        const o = N.makeHexColor(s[0], s[1], s[2]);
        i.fillStyle = o, i.strokeStyle = o, r.fillColor = o, r.strokeColor = o;
        break;
      default:
        throw new Bc(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, s, i) {
    let r = s;
    i !== Qt.SHADING && (r = N.transform(r, e.baseTransform), this.matrix && (r = N.transform(r, this.matrix)));
    const a = this.createPatternCanvas(e);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const h = t.createPattern(a.canvas, "repeat");
    return h.setTransform(o), h;
  }
};
u(Za, "TilingPattern"), $(Za, "MAX_PATTERN_SIZE", 3e3);
let Ed = Za;
function hb({
  src: g,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = Ut.isLittleEndian ? 4278190080 : 255, [h, l] = a ? [r, o] : [o, r], c = s >> 3, d = s & 7, p = g.length;
  e = new Uint32Array(e.buffer);
  let A = 0;
  for (let y = 0; y < i; y++) {
    for (const _ = t + c; t < _; t++) {
      const v = t < p ? g[t] : 255;
      e[A++] = v & 128 ? l : h, e[A++] = v & 64 ? l : h, e[A++] = v & 32 ? l : h, e[A++] = v & 16 ? l : h, e[A++] = v & 8 ? l : h, e[A++] = v & 4 ? l : h, e[A++] = v & 2 ? l : h, e[A++] = v & 1 ? l : h;
    }
    if (d === 0)
      continue;
    const w = t < p ? g[t++] : 255;
    for (let _ = 0; _ < d; _++)
      e[A++] = w & 1 << 7 - _ ? l : h;
  }
  return {
    srcPos: t,
    destPos: A
  };
}
u(hb, "convertBlackAndWhiteToRGBA");
const Kp = 16, Qp = 100, lb = 15, Jp = 10, Zp = 1e3, pe = 16;
function cb(g, t) {
  if (g._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  g.__originalSave = g.save, g.__originalRestore = g.restore, g.__originalRotate = g.rotate, g.__originalScale = g.scale, g.__originalTranslate = g.translate, g.__originalTransform = g.transform, g.__originalSetTransform = g.setTransform, g.__originalResetTransform = g.resetTransform, g.__originalClip = g.clip, g.__originalMoveTo = g.moveTo, g.__originalLineTo = g.lineTo, g.__originalBezierCurveTo = g.bezierCurveTo, g.__originalRect = g.rect, g.__originalClosePath = g.closePath, g.__originalBeginPath = g.beginPath, g._removeMirroring = () => {
    g.save = g.__originalSave, g.restore = g.__originalRestore, g.rotate = g.__originalRotate, g.scale = g.__originalScale, g.translate = g.__originalTranslate, g.transform = g.__originalTransform, g.setTransform = g.__originalSetTransform, g.resetTransform = g.__originalResetTransform, g.clip = g.__originalClip, g.moveTo = g.__originalMoveTo, g.lineTo = g.__originalLineTo, g.bezierCurveTo = g.__originalBezierCurveTo, g.rect = g.__originalRect, g.closePath = g.__originalClosePath, g.beginPath = g.__originalBeginPath, delete g._removeMirroring;
  }, g.save = /* @__PURE__ */ u(function() {
    t.save(), this.__originalSave();
  }, "ctxSave"), g.restore = /* @__PURE__ */ u(function() {
    t.restore(), this.__originalRestore();
  }, "ctxRestore"), g.translate = /* @__PURE__ */ u(function(s, i) {
    t.translate(s, i), this.__originalTranslate(s, i);
  }, "ctxTranslate"), g.scale = /* @__PURE__ */ u(function(s, i) {
    t.scale(s, i), this.__originalScale(s, i);
  }, "ctxScale"), g.transform = /* @__PURE__ */ u(function(s, i, r, a, o, h) {
    t.transform(s, i, r, a, o, h), this.__originalTransform(s, i, r, a, o, h);
  }, "ctxTransform"), g.setTransform = /* @__PURE__ */ u(function(s, i, r, a, o, h) {
    t.setTransform(s, i, r, a, o, h), this.__originalSetTransform(s, i, r, a, o, h);
  }, "ctxSetTransform"), g.resetTransform = /* @__PURE__ */ u(function() {
    t.resetTransform(), this.__originalResetTransform();
  }, "ctxResetTransform"), g.rotate = /* @__PURE__ */ u(function(s) {
    t.rotate(s), this.__originalRotate(s);
  }, "ctxRotate"), g.clip = /* @__PURE__ */ u(function(s) {
    t.clip(s), this.__originalClip(s);
  }, "ctxRotate"), g.moveTo = function(e, s) {
    t.moveTo(e, s), this.__originalMoveTo(e, s);
  }, g.lineTo = function(e, s) {
    t.lineTo(e, s), this.__originalLineTo(e, s);
  }, g.bezierCurveTo = function(e, s, i, r, a, o) {
    t.bezierCurveTo(e, s, i, r, a, o), this.__originalBezierCurveTo(e, s, i, r, a, o);
  }, g.rect = function(e, s, i, r) {
    t.rect(e, s, i, r), this.__originalRect(e, s, i, r);
  }, g.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, g.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
u(cb, "mirrorContextOperations");
const Ff = class Ff {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
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
u(Ff, "CachedCanvases");
let xd = Ff;
function Vh(g, t, e, s, i, r, a, o, h, l) {
  const [c, d, p, A, y, w] = ct(g);
  if (d === 0 && p === 0) {
    const S = a * c + y, x = Math.round(S), E = o * A + w, C = Math.round(E), k = (a + h) * c + y, T = Math.abs(Math.round(k) - x) || 1, F = (o + l) * A + w, O = Math.abs(Math.round(F) - C) || 1;
    return g.setTransform(Math.sign(c), 0, 0, Math.sign(A), x, C), g.drawImage(t, e, s, i, r, 0, 0, T, O), g.setTransform(c, d, p, A, y, w), [T, O];
  }
  if (c === 0 && A === 0) {
    const S = o * p + y, x = Math.round(S), E = a * d + w, C = Math.round(E), k = (o + l) * p + y, T = Math.abs(Math.round(k) - x) || 1, F = (a + h) * d + w, O = Math.abs(Math.round(F) - C) || 1;
    return g.setTransform(0, Math.sign(d), Math.sign(p), 0, x, C), g.drawImage(t, e, s, i, r, 0, 0, O, T), g.setTransform(c, d, p, A, y, w), [O, T];
  }
  g.drawImage(t, e, s, i, r, a, o, h, l);
  const _ = Math.hypot(c, d), v = Math.hypot(p, A);
  return [_ * h, v * l];
}
u(Vh, "drawImageAtIntegerCoords");
function db(g) {
  const {
    width: t,
    height: e
  } = g;
  if (t > Zp || e > Zp)
    return null;
  const s = 1e3, i = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), r = t + 1;
  let a = new Uint8Array(r * (e + 1)), o, h, l;
  const c = t + 7 & -8;
  let d = new Uint8Array(c * e), p = 0;
  for (const v of g.data) {
    let S = 128;
    for (; S > 0; )
      d[p++] = v & S ? 0 : 255, S >>= 1;
  }
  let A = 0;
  for (p = 0, d[p] !== 0 && (a[0] = 1, ++A), h = 1; h < t; h++)
    d[p] !== d[p + 1] && (a[h] = d[p] ? 2 : 1, ++A), p++;
  for (d[p] !== 0 && (a[h] = 2, ++A), o = 1; o < e; o++) {
    p = o * c, l = o * r, d[p - c] !== d[p] && (a[l] = d[p] ? 1 : 8, ++A);
    let v = (d[p] ? 4 : 0) + (d[p - c] ? 8 : 0);
    for (h = 1; h < t; h++)
      v = (v >> 2) + (d[p + 1] ? 4 : 0) + (d[p - c + 1] ? 8 : 0), i[v] && (a[l + h] = i[v], ++A), p++;
    if (d[p - c] !== d[p] && (a[l + h] = d[p] ? 2 : 4, ++A), A > s)
      return null;
  }
  for (p = c * (e - 1), l = o * r, d[p] !== 0 && (a[l] = 8, ++A), h = 1; h < t; h++)
    d[p] !== d[p + 1] && (a[l + h] = d[p] ? 4 : 8, ++A), p++;
  if (d[p] !== 0 && (a[l + h] = 4, ++A), A > s)
    return null;
  const y = new Int32Array([0, r, -1, 0, -r, 0, 0, 0, 1]), w = new Path2D();
  for (o = 0; A && o <= e; o++) {
    let v = o * r;
    const S = v + t;
    for (; v < S && !a[v]; )
      v++;
    if (v === S)
      continue;
    w.moveTo(v % r, o);
    const x = v;
    let E = a[v];
    do {
      const C = y[E];
      do
        v += C;
      while (!a[v]);
      const k = a[v];
      k !== 5 && k !== 10 ? (E = k, a[v] = 0) : (E = k & 51 * E >> 4, a[v] &= E >> 2 | E << 2), w.lineTo(v % r, v / r | 0), a[v] || --A;
    } while (x !== v);
    --o;
  }
  return d = null, a = null, /* @__PURE__ */ u(function(v) {
    v.save(), v.scale(1 / t, -1 / e), v.translate(0, -e), v.fill(w), v.beginPath(), v.restore();
  }, "drawOutline");
}
u(db, "compileType3Glyph");
const Of = class Of {
  constructor(t, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ag, this.textMatrixScale = 1, this.fontMatrix = Hc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = jt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.patternStroke = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t;
  }
  setCurrentPoint(t, e) {
    this.x = t, this.y = e;
  }
  updatePathMinMax(t, e, s) {
    [e, s] = N.applyTransform([e, s], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
  }
  updateRectMinMax(t, e) {
    const s = N.applyTransform(e, t), i = N.applyTransform(e.slice(2), t), r = N.applyTransform([e[0], e[3]], t), a = N.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, s[0], i[0], r[0], a[0]), this.minY = Math.min(this.minY, s[1], i[1], r[1], a[1]), this.maxX = Math.max(this.maxX, s[0], i[0], r[0], a[0]), this.maxY = Math.max(this.maxY, s[1], i[1], r[1], a[1]);
  }
  updateScalingPathMinMax(t, e) {
    N.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, s, i, r, a, o, h, l, c) {
    const d = N.bezierBoundingBox(e, s, i, r, a, o, h, l, c);
    c || this.updateRectMinMax(t, d);
  }
  getPathBoundingBox(t = Qt.FILL, e = null) {
    const s = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === Qt.STROKE) {
      e || rt("Stroke bounding box must include transform.");
      const i = N.singularValueDecompose2dScale(e), r = i[0] * this.lineWidth / 2, a = i[1] * this.lineWidth / 2;
      s[0] -= r, s[1] -= a, s[2] += r, s[3] += a;
    }
    return s;
  }
  updateClipFromPath() {
    const t = N.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(t = Qt.FILL, e = null) {
    return N.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
};
u(Of, "CanvasExtraState");
let Dl = Of;
function tg(g, t) {
  if (t instanceof ImageData) {
    g.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % pe, r = (e - i) / pe, a = i === 0 ? r : r + 1, o = g.createImageData(s, pe);
  let h = 0, l;
  const c = t.data, d = o.data;
  let p, A, y, w;
  if (t.kind === Xh.GRAYSCALE_1BPP) {
    const _ = c.byteLength, v = new Uint32Array(d.buffer, 0, d.byteLength >> 2), S = v.length, x = s + 7 >> 3, E = 4294967295, C = Ut.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (y = p < r ? pe : i, l = 0, A = 0; A < y; A++) {
        const k = _ - h;
        let T = 0;
        const F = k > x ? s : k * 8 - 7, O = F & -8;
        let U = 0, V = 0;
        for (; T < O; T += 8)
          V = c[h++], v[l++] = V & 128 ? E : C, v[l++] = V & 64 ? E : C, v[l++] = V & 32 ? E : C, v[l++] = V & 16 ? E : C, v[l++] = V & 8 ? E : C, v[l++] = V & 4 ? E : C, v[l++] = V & 2 ? E : C, v[l++] = V & 1 ? E : C;
        for (; T < F; T++)
          U === 0 && (V = c[h++], U = 128), v[l++] = V & U ? E : C, U >>= 1;
      }
      for (; l < S; )
        v[l++] = 0;
      g.putImageData(o, 0, p * pe);
    }
  } else if (t.kind === Xh.RGBA_32BPP) {
    for (A = 0, w = s * pe * 4, p = 0; p < r; p++)
      d.set(c.subarray(h, h + w)), h += w, g.putImageData(o, 0, A), A += pe;
    p < a && (w = s * i * 4, d.set(c.subarray(h, h + w)), g.putImageData(o, 0, A));
  } else if (t.kind === Xh.RGB_24BPP)
    for (y = pe, w = s * y, p = 0; p < a; p++) {
      for (p >= r && (y = i, w = s * y), l = 0, A = w; A--; )
        d[l++] = c[h++], d[l++] = c[h++], d[l++] = c[h++], d[l++] = 255;
      g.putImageData(o, 0, p * pe);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
u(tg, "putBinaryImageData");
function eg(g, t) {
  if (t.bitmap) {
    g.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, s = t.width, i = e % pe, r = (e - i) / pe, a = i === 0 ? r : r + 1, o = g.createImageData(s, pe);
  let h = 0;
  const l = t.data, c = o.data;
  for (let d = 0; d < a; d++) {
    const p = d < r ? pe : i;
    ({
      srcPos: h
    } = hb({
      src: l,
      srcPos: h,
      dest: c,
      width: s,
      height: p,
      nonBlackColor: 0
    })), g.putImageData(o, 0, d * pe);
  }
}
u(eg, "putBinaryImageMask");
function Ia(g, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    g[s] !== void 0 && (t[s] = g[s]);
  g.setLineDash !== void 0 && (t.setLineDash(g.getLineDash()), t.lineDashOffset = g.lineDashOffset);
}
u(Ia, "copyCtxState");
function jh(g) {
  g.strokeStyle = g.fillStyle = "#000000", g.fillRule = "nonzero", g.globalAlpha = 1, g.lineWidth = 1, g.lineCap = "butt", g.lineJoin = "miter", g.miterLimit = 10, g.globalCompositeOperation = "source-over", g.font = "10px sans-serif", g.setLineDash !== void 0 && (g.setLineDash([]), g.lineDashOffset = 0);
  {
    const {
      filter: t
    } = g;
    t !== "none" && t !== "" && (g.filter = "none");
  }
}
u(jh, "resetCtxToDefault");
function sg(g, t) {
  if (t)
    return !0;
  const e = N.singularValueDecompose2dScale(g);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const s = Math.fround((globalThis.devicePixelRatio || 1) * Xi.PDF_TO_CSS_UNITS);
  return e[0] <= s && e[1] <= s;
}
u(sg, "getImageSmoothingEnabled");
const ub = ["butt", "round", "square"], fb = ["miter", "round", "bevel"], pb = {}, ig = {};
var as, Cd, Td, kd;
const oc = class oc {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, h, l) {
    m(this, as);
    this.ctx = t, this.current = new Dl(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new xd(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(t, e = null) {
    return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const h = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...ct(this.compositeCtx));
    }
    this.ctx.save(), jh(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = ct(this.ctx);
  }
  executeOperatorList(t, e, s, i) {
    const r = t.argsArray, a = t.fnArray;
    let o = e || 0;
    const h = r.length;
    if (h === o)
      return o;
    const l = h - o > Jp && typeof s == "function", c = l ? Date.now() + lb : 0;
    let d = 0;
    const p = this.commonObjs, A = this.objs;
    let y;
    for (; ; ) {
      if (i !== void 0 && o === i.nextBreakPoint)
        return i.breakIt(o, s), o;
      if (y = a[o], y !== je.dependency)
        this[y].apply(this, r[o]);
      else
        for (const w of r[o]) {
          const _ = w.startsWith("g_") ? p : A;
          if (!_.has(w))
            return _.get(w, s), o;
        }
      if (o++, o === h)
        return o;
      if (l && ++d > Jp) {
        if (Date.now() > c)
          return s(), o;
        d = 0;
      }
    }
  }
  endDrawing() {
    b(this, as, Cd).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, as, Td).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = s, h = i, l = "prescale1", c, d;
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
  _createMaskCanvas(t) {
    const e = this.ctx, {
      width: s,
      height: i
    } = t, r = this.current.fillColor, a = this.current.patternFill, o = ct(e);
    let h, l, c, d;
    if ((t.bitmap || t.data) && t.count > 1) {
      const F = t.bitmap || t.data.buffer;
      l = JSON.stringify(a ? o : [o.slice(0, 4), r]), h = this._cachedBitmapsMap.get(F), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(F, h));
      const O = h.get(l);
      if (O && !a) {
        const U = Math.round(Math.min(o[0], o[2]) + o[4]), V = Math.round(Math.min(o[1], o[3]) + o[5]);
        return {
          canvas: O,
          offsetX: U,
          offsetY: V
        };
      }
      c = O;
    }
    c || (d = this.cachedCanvases.getCanvas("maskCanvas", s, i), eg(d.context, t));
    let p = N.transform(o, [1 / s, 0, 0, -1 / i, 0, 0]);
    p = N.transform(p, [1, 0, 0, 1, 0, -i]);
    const [A, y, w, _] = N.getAxialAlignedBoundingBox([0, 0, s, i], p), v = Math.round(w - A) || 1, S = Math.round(_ - y) || 1, x = this.cachedCanvases.getCanvas("fillCanvas", v, S), E = x.context, C = A, k = y;
    E.translate(-C, -k), E.transform(...p), c || (c = this._scaleImage(d.canvas, hs(E)), c = c.img, h && a && h.set(l, c)), E.imageSmoothingEnabled = sg(ct(E), t.interpolate), Vh(E, c, 0, 0, c.width, c.height, 0, 0, s, i), E.globalCompositeOperation = "source-in";
    const T = N.transform(hs(E), [1, 0, 0, 1, -C, -k]);
    return E.fillStyle = a ? r.getPattern(e, this, T, Qt.FILL) : r, E.fillRect(0, 0, s, i), h && !a && (this.cachedCanvases.delete("fillCanvas"), h.set(l, x.canvas)), {
      canvas: x.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(k)
    };
  }
  setLineWidth(t) {
    t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = ub[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = fb[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
  }
  setRenderingIntent(t) {
  }
  setFlatness(t) {
  }
  setGState(t) {
    for (const [e, s] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
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
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
    this.suspendedCtx = this.ctx, this.ctx = i.context;
    const r = this.ctx;
    r.setTransform(...ct(this.suspendedCtx)), Ia(this.suspendedCtx, r), cb(r, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Ia(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx;
    this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, h = i[3] - a;
    o === 0 || h === 0 || (this.genericComposeSMask(e.context, s, o, h, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, s, i, r, a, o, h, l, c, d) {
    let p = t.canvas, A = h - c, y = l - d;
    if (a) {
      const _ = N.makeHexColor(...a);
      if (A < 0 || y < 0 || A + s > p.width || y + i > p.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", s, i), S = v.context;
        S.drawImage(p, -A, -y), S.globalCompositeOperation = "destination-atop", S.fillStyle = _, S.fillRect(0, 0, s, i), S.globalCompositeOperation = "source-over", p = v.canvas, A = y = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(A, y, s, i), t.clip(v), t.globalCompositeOperation = "destination-atop", t.fillStyle = _, t.fillRect(A, y, s, i), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const w = new Path2D();
    w.rect(h, l, s, i), e.clip(w), e.globalCompositeOperation = "destination-in", e.drawImage(p, A, y, s, i, h, l, s, i), e.restore();
  }
  save() {
    this.inSMaskMode ? (Ia(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const t = this.current;
    this.stateStack.push(t), this.current = t.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ia(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(t, e, s, i, r, a) {
    this.ctx.transform(t, e, s, i, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s) {
    const i = this.ctx, r = this.current;
    let a = r.x, o = r.y, h, l;
    const c = ct(i), d = c[0] === 0 && c[3] === 0 || c[1] === 0 && c[2] === 0, p = d ? s.slice(0) : null;
    for (let A = 0, y = 0, w = t.length; A < w; A++)
      switch (t[A] | 0) {
        case je.rectangle:
          a = e[y++], o = e[y++];
          const _ = e[y++], v = e[y++], S = a + _, x = o + v;
          i.moveTo(a, o), _ === 0 || v === 0 ? i.lineTo(S, x) : (i.lineTo(S, o), i.lineTo(S, x), i.lineTo(a, x)), d || r.updateRectMinMax(c, [a, o, S, x]), i.closePath();
          break;
        case je.moveTo:
          a = e[y++], o = e[y++], i.moveTo(a, o), d || r.updatePathMinMax(c, a, o);
          break;
        case je.lineTo:
          a = e[y++], o = e[y++], i.lineTo(a, o), d || r.updatePathMinMax(c, a, o);
          break;
        case je.curveTo:
          h = a, l = o, a = e[y + 4], o = e[y + 5], i.bezierCurveTo(e[y], e[y + 1], e[y + 2], e[y + 3], a, o), r.updateCurvePathMinMax(c, h, l, e[y], e[y + 1], e[y + 2], e[y + 3], a, o, p), y += 6;
          break;
        case je.curveTo2:
          h = a, l = o, i.bezierCurveTo(a, o, e[y], e[y + 1], e[y + 2], e[y + 3]), r.updateCurvePathMinMax(c, h, l, a, o, e[y], e[y + 1], e[y + 2], e[y + 3], p), a = e[y + 2], o = e[y + 3], y += 4;
          break;
        case je.curveTo3:
          h = a, l = o, a = e[y + 2], o = e[y + 3], i.bezierCurveTo(e[y], e[y + 1], a, o, a, o), r.updateCurvePathMinMax(c, h, l, e[y], e[y + 1], a, o, a, o, p), y += 4;
          break;
        case je.closePath:
          i.closePath();
          break;
      }
    d && r.updateScalingPathMinMax(c, p), r.setCurrentPoint(a, o);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx, s = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && s?.getPattern ? (e.save(), e.strokeStyle = s.getPattern(e, this, hs(e), Qt.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(t = !0) {
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    let r = !1;
    i && (e.save(), e.fillStyle = s.getPattern(e, this, hs(e), Qt.FILL), r = !0);
    const a = this.current.getClippedPathBoundingBox();
    this.contentVisible && a !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), r && e.restore(), t && this.consumePath(a);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = pb;
  }
  eoClip() {
    this.pendingClip = ig;
  }
  beginText() {
    this.current.textMatrix = ag, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const t = this.pendingTextPaths, e = this.ctx;
    if (t === void 0) {
      e.beginPath();
      return;
    }
    const s = new Path2D(), i = e.getTransform().invertSelf();
    for (const {
      transform: r,
      x: a,
      y: o,
      fontSize: h,
      path: l
    } of t)
      s.addPath(l, new DOMMatrix(r).preMultiplySelf(i).translate(a, o).scale(h, -h));
    e.clip(s), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    const s = this.commonObjs.get(t), i = this.current;
    if (!s)
      throw new Error(`Can't find font for ${t}`);
    if (i.fontMatrix = s.fontMatrix || Hc, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && W("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font)
      return;
    const r = s.loadedName || "sans-serif", a = s.systemFontInfo?.css || `"${r}", ${s.fallbackName}`;
    let o = "normal";
    s.black ? o = "900" : s.bold && (o = "bold");
    const h = s.italic ? "italic" : "normal";
    let l = e;
    e < Kp ? l = Kp : e > Qp && (l = Qp), this.current.fontSizeScale = e / l, this.ctx.font = `${h} ${o} ${l}px ${a}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e), this.moveText(t, e);
  }
  setTextMatrix(t, e, s, i, r, a) {
    this.current.textMatrix = [t, e, s, i, r, a], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, s, i, r) {
    const a = this.ctx, o = this.current, h = o.font, l = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, d = l & jt.FILL_STROKE_MASK, p = !!(l & jt.ADD_TO_PATH_FLAG), A = o.patternFill && !h.missingFile, y = o.patternStroke && !h.missingFile;
    let w;
    if ((h.disableFontFace || p || A || y) && (w = h.getPathGenerator(this.commonObjs, t)), h.disableFontFace || A || y) {
      if (a.save(), a.translate(e, s), a.scale(c, -c), d === jt.FILL || d === jt.FILL_STROKE)
        if (i) {
          const _ = a.getTransform();
          a.setTransform(...i), a.fill(b(this, as, kd).call(this, w, _, i));
        } else
          a.fill(w);
      if (d === jt.STROKE || d === jt.FILL_STROKE)
        if (r) {
          const _ = a.getTransform();
          a.setTransform(...r), a.stroke(b(this, as, kd).call(this, w, _, r));
        } else
          a.lineWidth /= c, a.stroke(w);
      a.restore();
    } else
      (d === jt.FILL || d === jt.FILL_STROKE) && a.fillText(t, e, s), (d === jt.STROKE || d === jt.FILL_STROKE) && a.strokeText(t, e, s);
    p && (this.pendingTextPaths ||= []).push({
      transform: ct(a),
      x: e,
      y: s,
      fontSize: c,
      path: w
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let s = !1;
    for (let i = 3; i < e.length; i += 4)
      if (e[i] > 0 && e[i] < 255) {
        s = !0;
        break;
      }
    return q(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t) {
    const e = this.current, s = e.font;
    if (s.isType3Font)
      return this.showType3Text(t);
    const i = e.fontSize;
    if (i === 0)
      return;
    const r = this.ctx, a = e.fontSizeScale, o = e.charSpacing, h = e.wordSpacing, l = e.fontDirection, c = e.textHScale * l, d = t.length, p = s.vertical, A = p ? 1 : -1, y = s.defaultVMetrics, w = i * e.fontMatrix[0], _ = e.textRenderingMode === jt.FILL && !s.disableFontFace && !e.patternFill;
    r.save(), r.transform(...e.textMatrix), r.translate(e.x, e.y + e.textRise), l > 0 ? r.scale(c, -1) : r.scale(c, 1);
    let v, S;
    if (e.patternFill) {
      r.save();
      const T = e.fillColor.getPattern(r, this, hs(r), Qt.FILL);
      v = ct(r), r.restore(), r.fillStyle = T;
    }
    if (e.patternStroke) {
      r.save();
      const T = e.strokeColor.getPattern(r, this, hs(r), Qt.STROKE);
      S = ct(r), r.restore(), r.strokeStyle = T;
    }
    let x = e.lineWidth;
    const E = e.textMatrixScale;
    if (E === 0 || x === 0) {
      const T = e.textRenderingMode & jt.FILL_STROKE_MASK;
      (T === jt.STROKE || T === jt.FILL_STROKE) && (x = this.getSinglePixelWidth());
    } else
      x /= E;
    if (a !== 1 && (r.scale(a, a), x /= a), r.lineWidth = x, s.isInvalidPDFjsFont) {
      const T = [];
      let F = 0;
      for (const O of t)
        T.push(O.unicode), F += O.width;
      r.fillText(T.join(""), 0, 0), e.x += F * w * c, r.restore(), this.compose();
      return;
    }
    let C = 0, k;
    for (k = 0; k < d; ++k) {
      const T = t[k];
      if (typeof T == "number") {
        C += A * T * i / 1e3;
        continue;
      }
      let F = !1;
      const O = (T.isSpace ? h : 0) + o, U = T.fontChar, V = T.accent;
      let ut, ft, at = T.width;
      if (p) {
        const I = T.vmetric || y, B = -(T.vmetric ? I[1] : at * 0.5) * w, ge = I[2] * w;
        at = I ? -I[0] : at, ut = B / a, ft = (C + ge) / a;
      } else
        ut = C / a, ft = 0;
      if (s.remeasure && at > 0) {
        const I = r.measureText(U).width * 1e3 / i * a;
        if (at < I && this.isFontSubpixelAAEnabled) {
          const B = at / I;
          F = !0, r.save(), r.scale(B, 1), ut /= B;
        } else at !== I && (ut += (at - I) / 2e3 * i / a);
      }
      if (this.contentVisible && (T.isInFont || s.missingFile)) {
        if (_ && !V)
          r.fillText(U, ut, ft);
        else if (this.paintChar(U, ut, ft, v, S), V) {
          const I = ut + i * V.offset.x / a, B = ft - i * V.offset.y / a;
          this.paintChar(V.fontChar, I, B, v, S);
        }
      }
      const Jt = p ? at * w - O * l : at * w + O * l;
      C += Jt, F && r.restore();
    }
    p ? e.y -= C : e.x += C * c, r.restore(), this.compose();
  }
  showType3Text(t) {
    const e = this.ctx, s = this.current, i = s.font, r = s.fontSize, a = s.fontDirection, o = i.vertical ? 1 : -1, h = s.charSpacing, l = s.wordSpacing, c = s.textHScale * a, d = s.fontMatrix || Hc, p = t.length, A = s.textRenderingMode === jt.INVISIBLE;
    let y, w, _, v;
    if (!(A || r === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(c, a), y = 0; y < p; ++y) {
        if (w = t[y], typeof w == "number") {
          v = o * w * r / 1e3, this.ctx.translate(v, 0), s.x += v * c;
          continue;
        }
        const S = (w.isSpace ? l : 0) + h, x = i.charProcOperatorList[w.operatorListId];
        if (!x) {
          W(`Type3 character "${w.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = w, this.save(), e.scale(r, r), e.transform(...d), this.executeOperatorList(x), this.restore()), _ = N.applyTransform([w.width, 0], d)[0] * r + S, e.translate(_, 0), s.x += _ * c;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a) {
    this.ctx.rect(s, i, r - s, a - i), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      const s = t[1], i = this.baseTransform || ct(this.ctx), r = {
        createCanvasGraphics: /* @__PURE__ */ u((a) => new oc(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }), "createCanvasGraphics")
      };
      e = new Ed(t, s, this.ctx, r, i);
    } else
      e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = !0;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e, s) {
    this.ctx.strokeStyle = this.current.strokeColor = N.makeHexColor(t, e, s), this.current.patternStroke = !1;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e, s) {
    this.ctx.fillStyle = this.current.fillColor = N.makeHexColor(t, e, s), this.current.patternFill = !1;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e = null) {
    let s;
    return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = ob(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
  }
  shadingFill(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const s = this._getPattern(t);
    e.fillStyle = s.getPattern(e, this, hs(e), Qt.SHADING);
    const i = hs(e);
    if (i) {
      const {
        width: r,
        height: a
      } = e.canvas, [o, h, l, c] = N.getAxialAlignedBoundingBox([0, 0, r, a], i);
      this.ctx.fillRect(o, h, l - o, c - h);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    rt("Should not call beginInlineImage");
  }
  beginImageData() {
    rt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = ct(this.ctx), e)) {
      const s = e[2] - e[0], i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(ct(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    t.isolated || xc("TODO: Support non-isolated groups."), t.knockout && W("Knockout groups not supported.");
    const s = ct(e);
    if (t.matrix && e.transform(...t.matrix), !t.bbox)
      throw new Error("Bounding box is required.");
    let i = N.getAxialAlignedBoundingBox(t.bbox, ct(e));
    const r = [0, 0, e.canvas.width, e.canvas.height];
    i = N.intersect(i, r) || [0, 0, 0, 0];
    const a = Math.floor(i[0]), o = Math.floor(i[1]), h = Math.max(Math.ceil(i[2]) - a, 1), l = Math.max(Math.ceil(i[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, h, l]);
    let c = "groupAt" + this.groupLevel;
    t.smask && (c += "_smask_" + this.smaskCounter++ % 2);
    const d = this.cachedCanvases.getCanvas(c, h, l), p = d.context;
    p.translate(-a, -o), p.transform(...s), t.smask ? this.smaskStack.push({
      canvas: d.canvas,
      context: p,
      offsetX: a,
      offsetY: o,
      subtype: t.smask.subtype,
      backdrop: t.smask.backdrop,
      transferMap: t.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, o), e.save()), Ia(e, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, t.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const i = ct(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
      const r = N.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], i);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(r);
    }
  }
  beginAnnotation(t, e, s, i, r) {
    if (b(this, as, Cd).call(this), jh(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const a = e[2] - e[0], o = e[3] - e[1];
      if (r && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = a, e[3] = o;
        const [h, l] = N.singularValueDecompose2dScale(ct(this.ctx)), {
          viewportScale: c
        } = this, d = Math.ceil(a * this.outputScaleX * c), p = Math.ceil(o * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(d, p);
        const {
          canvas: A,
          context: y
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, A), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(h, 0, 0, -l, 0, o * l), jh(this.ctx);
      } else
        jh(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], a, o), this.ctx.clip(), this.ctx.beginPath();
    }
    this.current = new Dl(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), b(this, as, Td).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.count;
    t = this.getObject(t.data, t), t.count = e;
    const s = this.ctx, i = this.processingType3;
    if (i && (i.compiled === void 0 && (i.compiled = db(t)), i.compiled)) {
      i.compiled(s);
      return;
    }
    const r = this._createMaskCanvas(t), a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, r, a) {
    if (!this.contentVisible)
      return;
    t = this.getObject(t.data, t);
    const o = this.ctx;
    o.save();
    const h = ct(o);
    o.transform(e, s, i, r, 0, 0);
    const l = this._createMaskCanvas(t);
    o.setTransform(1, 0, 0, 1, l.offsetX - h[4], l.offsetY - h[5]);
    for (let c = 0, d = a.length; c < d; c += 2) {
      const p = N.transform(h, [e, s, i, r, a[c], a[c + 1]]), [A, y] = N.applyTransform([0, 0], p);
      o.drawImage(l.canvas, A, y);
    }
    o.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
    for (const r of t) {
      const {
        data: a,
        width: o,
        height: h,
        transform: l
      } = r, c = this.cachedCanvases.getCanvas("maskCanvas", o, h), d = c.context;
      d.save();
      const p = this.getObject(a, r);
      eg(d, p), d.globalCompositeOperation = "source-in", d.fillStyle = i ? s.getPattern(d, this, hs(e), Qt.FILL) : s, d.fillRect(0, 0, o, h), d.restore(), e.save(), e.transform(...l), e.scale(1, -1), Vh(e, c.canvas, 0, 0, o, h, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(t);
    if (!e) {
      W("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(t, e, s, i) {
    if (!this.contentVisible)
      return;
    const r = this.getObject(t);
    if (!r) {
      W("Dependent image isn't ready yet");
      return;
    }
    const a = r.width, o = r.height, h = [];
    for (let l = 0, c = i.length; l < c; l += 2)
      h.push({
        transform: [e, 0, 0, s, i[l], i[l + 1]],
        x: 0,
        y: 0,
        w: a,
        h: o
      });
    this.paintInlineImageXObjectGroup(r, h);
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
      height: i
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", s, i), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible)
      return;
    const e = t.width, s = t.height, i = this.ctx;
    this.save();
    {
      const {
        filter: o
      } = i;
      o !== "none" && o !== "" && (i.filter = "none");
    }
    i.scale(1 / e, -1 / s);
    let r;
    if (t.bitmap)
      r = this.applyTransferMapsToBitmap(t);
    else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data)
      r = t;
    else {
      const h = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      tg(h, t), r = this.applyTransferMapsToCanvas(h);
    }
    const a = this._scaleImage(r, hs(i));
    i.imageSmoothingEnabled = sg(ct(i), t.interpolate), Vh(i, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -s, e, s), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let i;
    if (t.bitmap)
      i = t.bitmap;
    else {
      const r = t.width, a = t.height, h = this.cachedCanvases.getCanvas("inlineImage", r, a).context;
      tg(h, t), i = this.applyTransferMapsToCanvas(h);
    }
    for (const r of e)
      s.save(), s.transform(...r.transform), s.scale(1, -1), Vh(s, i, r.x, r.y, r.w, r.h, 0, -1, 1, 1), s.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {
  }
  markPointProps(t, e) {
  }
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e) {
    t === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(t) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
    const s = this.ctx;
    this.pendingClip && (e || (this.pendingClip === ig ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = ct(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
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
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
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
        const h = Math.abs(e * r - s * i), l = Math.hypot(e, s), c = Math.hypot(i, r);
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
  rescaleAndStroke(t) {
    const {
      ctx: e
    } = this, {
      lineWidth: s
    } = this.current, [i, r] = this.getScaleForStroking();
    if (e.lineWidth = s || 1, i === 1 && r === 1) {
      e.stroke();
      return;
    }
    const a = e.getLineDash();
    if (t && e.save(), e.scale(i, r), a.length > 0) {
      const o = Math.max(i, r);
      e.setLineDash(a.map((h) => h / o)), e.lineDashOffset /= o;
    }
    e.stroke(), t && e.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
as = new WeakSet(), Cd = /* @__PURE__ */ u(function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, "#restoreInitialState"), Td = /* @__PURE__ */ u(function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, "#drawFilter"), kd = /* @__PURE__ */ u(function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
}, "#getScaledPath"), u(oc, "CanvasGraphics");
let wr = oc;
for (const g in je)
  wr.prototype[g] !== void 0 && (wr.prototype[je[g]] = wr.prototype[g]);
var Vo, jo;
const to = class to {
  static get workerPort() {
    return n(this, Vo);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    f(this, Vo, t);
  }
  static get workerSrc() {
    return n(this, jo);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    f(this, jo, t);
  }
};
Vo = new WeakMap(), jo = new WeakMap(), u(to, "GlobalWorkerOptions"), m(to, Vo, null), m(to, jo, "");
let Pa = to;
var Cn, Wo;
const Hf = class Hf {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    m(this, Cn);
    m(this, Wo);
    f(this, Cn, t), f(this, Wo, e);
  }
  getRaw() {
    return n(this, Wo);
  }
  get(t) {
    return n(this, Cn).get(t) ?? null;
  }
  getAll() {
    return Qu(n(this, Cn));
  }
  has(t) {
    return n(this, Cn).has(t);
  }
};
Cn = new WeakMap(), Wo = new WeakMap(), u(Hf, "Metadata");
let Md = Hf;
const gr = Symbol("INTERNAL");
var Xo, qo, Yo, Br;
const Bf = class Bf {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    m(this, Xo, !1);
    m(this, qo, !1);
    m(this, Yo, !1);
    m(this, Br, !0);
    f(this, Xo, !!(t & ke.DISPLAY)), f(this, qo, !!(t & ke.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, Yo))
      return n(this, Br);
    if (!n(this, Br))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, Xo) ? e?.viewState !== "OFF" : n(this, qo) ? t?.printState !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== gr && rt("Internal method `_setVisible` called."), f(this, Yo, s), f(this, Br, e);
  }
};
Xo = new WeakMap(), qo = new WeakMap(), Yo = new WeakMap(), Br = new WeakMap(), u(Bf, "OptionalContentGroup");
let Pd = Bf;
var ki, et, $r, Gr, Ko, Ld;
const $f = class $f {
  constructor(t, e = ke.DISPLAY) {
    m(this, Ko);
    m(this, ki, null);
    m(this, et, /* @__PURE__ */ new Map());
    m(this, $r, null);
    m(this, Gr, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, f(this, Gr, t.order);
      for (const s of t.groups)
        n(this, et).set(s.id, new Pd(e, s));
      if (t.baseState === "OFF")
        for (const s of n(this, et).values())
          s._setVisible(gr, !1);
      for (const s of t.on)
        n(this, et).get(s)._setVisible(gr, !0);
      for (const s of t.off)
        n(this, et).get(s)._setVisible(gr, !1);
      f(this, $r, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, et).size === 0)
      return !0;
    if (!t)
      return xc("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, et).has(t.id) ? n(this, et).get(t.id).visible : (W(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, Ko, Ld).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, et).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (n(this, et).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, et).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!n(this, et).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, et).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (!n(this, et).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, et).has(e))
            return W(`Optional content group not found: ${e}`), !0;
          if (n(this, et).get(e).visible)
            return !1;
        }
        return !0;
      }
      return W(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return W(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    const i = n(this, et).get(t);
    if (!i) {
      W(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const r of i.rbGroups)
        for (const a of r)
          a !== t && n(this, et).get(a)?._setVisible(gr, !1, !0);
    i._setVisible(gr, !!e, !0), f(this, ki, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, et).get(i);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
    }
    f(this, ki, null);
  }
  get hasInitialVisibility() {
    return n(this, $r) === null || this.getHash() === n(this, $r);
  }
  getOrder() {
    return n(this, et).size ? n(this, Gr) ? n(this, Gr).slice() : [...n(this, et).keys()] : null;
  }
  getGroups() {
    return n(this, et).size > 0 ? Qu(n(this, et)) : null;
  }
  getGroup(t) {
    return n(this, et).get(t) || null;
  }
  getHash() {
    if (n(this, ki) !== null)
      return n(this, ki);
    const t = new Pl();
    for (const [e, s] of n(this, et))
      t.update(`${e}:${s.visible}`);
    return f(this, ki, t.hexdigest());
  }
};
ki = new WeakMap(), et = new WeakMap(), $r = new WeakMap(), Gr = new WeakMap(), Ko = new WeakSet(), Ld = /* @__PURE__ */ u(function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = b(this, Ko, Ld).call(this, r);
    else if (n(this, et).has(r))
      a = n(this, et).get(r).visible;
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
}, "#evaluateVisibilityExpression"), u($f, "OptionalContentConfig");
let Rd = $f;
const Gf = class Gf {
  constructor(t, {
    disableRange: e = !1,
    disableStream: s = !1
  }) {
    Nt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, r?.length > 0) {
      const h = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(h);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((h, l) => {
      this._onReceiveData({
        begin: h,
        chunk: l
      });
    }), t.addProgressListener((h, l) => {
      this._onProgress({
        loaded: h,
        total: l
      });
    }), t.addProgressiveReadListener((h) => {
      this._onReceiveData({
        chunk: h
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
    else {
      const i = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(s), !0);
      });
      Nt(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t) {
    t.total === void 0 ? this._rangeReaders[0]?.onProgress?.({
      loaded: t.loaded
    }) : this._fullRequestReader?.onProgress?.({
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Nt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new Dd(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Nd(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeReaders.slice(0))
      e.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
};
u(Gf, "PDFDataTransportStream");
let Id = Gf;
const zf = class zf {
  constructor(t, e, s = !1, i = null) {
    this._stream = t, this._done = s || !1, this._filename = Zu(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
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
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
};
u(zf, "PDFDataTransportStreamReader");
let Dd = zf;
const Uf = class Uf {
  constructor(t, e, s) {
    this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const s of this._requests)
          s.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
};
u(Uf, "PDFDataTransportStreamRangeReader");
let Nd = Uf;
function gb(g) {
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
  u(s, "toParamRegExp");
  function i(c, d) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(d))
        return d;
      try {
        const p = new TextDecoder(c, {
          fatal: !0
        }), A = Cc(d);
        d = p.decode(A), t = !1;
      } catch {
      }
    }
    return d;
  }
  u(i, "textdecode");
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  u(r, "fixupEncoding");
  function a(c) {
    const d = [];
    let p;
    const A = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = A.exec(c)) !== null; ) {
      let [, w, _, v] = p;
      if (w = parseInt(w, 10), w in d) {
        if (w === 0)
          break;
        continue;
      }
      d[w] = [_, v];
    }
    const y = [];
    for (let w = 0; w < d.length && w in d; ++w) {
      let [_, v] = d[w];
      v = o(v), _ && (v = unescape(v), w === 0 && (v = h(v))), y.push(v);
    }
    return y.join("");
  }
  u(a, "rfc2231getparam");
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
  u(o, "rfc2616unquote");
  function h(c) {
    const d = c.indexOf("'");
    if (d === -1)
      return c;
    const p = c.slice(0, d), y = c.slice(d + 1).replace(/^[^']*'/, "");
    return i(p, y);
  }
  u(h, "rfc5987decode");
  function l(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(d, p, A, y) {
      if (A === "q" || A === "Q")
        return y = y.replaceAll("_", " "), y = y.replaceAll(/=([0-9a-fA-F]{2})/g, function(w, _) {
          return String.fromCharCode(parseInt(_, 16));
        }), i(p, y);
      try {
        y = atob(y);
      } catch {
      }
      return i(p, y);
    });
  }
  return u(l, "rfc2047decode"), "";
}
u(gb, "getFilenameFromContentDispositionHeader");
function zg(g, t) {
  const e = new Headers();
  if (!g || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
u(zg, "createHeaders");
function Mc(g) {
  try {
    return new URL(g).origin;
  } catch {
  }
  return null;
}
u(Mc, "getResponseOrigin");
function Ug({
  responseHeaders: g,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(g.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.suggestedLength = r, r <= 2 * e) || s || !t || g.get("Accept-Ranges") !== "bytes" || (g.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = !0), i;
}
u(Ug, "validateRangeRequestCapabilities");
function Vg(g) {
  const t = g.get("Content-Disposition");
  if (t) {
    let e = gb(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Zu(e))
      return e;
  }
  return null;
}
u(Vg, "extractFilenameFromHeader");
function Pc(g, t) {
  return g === 404 || g === 0 && t.startsWith("file:") ? new ka('Missing PDF "' + t + '".') : new Ma(`Unexpected server response (${g}) while retrieving PDF "${t}".`, g);
}
u(Pc, "createResponseStatusError");
function jg(g) {
  return g === 200 || g === 206;
}
u(jg, "validateResponseStatus");
function Wg(g, t, e) {
  return {
    method: "GET",
    headers: g,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
u(Wg, "createFetchOptions");
function Xg(g) {
  return g instanceof Uint8Array ? g.buffer : g instanceof ArrayBuffer ? g : (W(`getArrayBuffer - unexpected data format: ${g}`), new Uint8Array(g).buffer);
}
u(Xg, "getArrayBuffer");
const Vf = class Vf {
  _responseOrigin = null;
  constructor(t) {
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = zg(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    return Nt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Od(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new Hd(this, t, e);
    return this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0))
      e.cancel(t);
  }
};
u(Vf, "PDFFetchStream");
let Fd = Vf;
const jf = class jf {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers), i = e.url;
    fetch(i, Wg(s, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Mc(r.url), !jg(r.status))
        throw Pc(r.status, i);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: h
      } = Ug({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = h || this._contentLength, this._filename = Vg(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new hi("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
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
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: Xg(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
u(jf, "PDFFetchStreamReader");
let Od = jf;
const Wf = class Wf {
  constructor(t, e, s) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${s - 1}`);
    const a = i.url;
    fetch(a, Wg(r, this._withCredentials, this._abortController)).then((o) => {
      const h = Mc(o.url);
      if (h !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${h}" to match "${t._responseOrigin}".`);
      if (!jg(o.status))
        throw Pc(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
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
    } : (this._loaded += t.byteLength, this.onProgress?.({
      loaded: this._loaded
    }), {
      value: Xg(t),
      done: !1
    });
  }
  cancel(t) {
    this._reader?.cancel(t), this._abortController.abort();
  }
};
u(Wf, "PDFFetchStreamRangeReader");
let Hd = Wf;
const Fc = 200, Oc = 206;
function mb(g) {
  const t = g.response;
  return typeof t != "string" ? t : Cc(t).buffer;
}
u(mb, "network_getArrayBuffer");
const Xf = class Xf {
  _responseOrigin = null;
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }) {
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = zg(this.isHttp, e), this.withCredentials = s || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = Oc) : i.expectedStatus = Fc, e.responseType = "arraybuffer", Nt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
  }
  onProgress(t, e) {
    const s = this.pendingRequests[t];
    s && s.onProgress?.(e);
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s)
      return;
    const i = s.xhr;
    if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
      s.onError(i.status);
      return;
    }
    const r = i.status || Fc;
    if (!(r === Fc && s.expectedStatus === Oc) && r !== s.expectedStatus) {
      s.onError(i.status);
      return;
    }
    const o = mb(i);
    if (r === Oc) {
      const h = i.getResponseHeader("Content-Range"), l = /bytes (\d+)-(\d+)\/(\d+)/.exec(h);
      l ? s.onDone({
        begin: parseInt(l[1], 10),
        chunk: o
      }) : (W('Missing or invalid "Content-Range" header.'), s.onError(0));
    } else o ? s.onDone({
      begin: 0,
      chunk: o
    }) : s.onError(i.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
};
u(Xf, "NetworkManager");
let Bd = Xf;
const qf = class qf {
  constructor(t) {
    this._source = t, this._manager = new Bd(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Nt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Gd(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new zd(this._manager, t, e);
    return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0))
      e.cancel(t);
  }
};
u(qf, "PDFNetworkStream");
let $d = qf;
const Yf = class Yf {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Mc(e.responseURL);
    const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [h, ...l] = o.split(": ");
      return [h, l.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = Ug({
      responseHeaders: i,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Vg(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Pc(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    this.onProgress?.({
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
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
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
};
u(Yf, "PDFNetworkStreamFullRequestReader");
let Gd = Yf;
const Kf = class Kf {
  constructor(t, e, s) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: s,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    const t = Mc(this._manager.getRequestXhr(this._requestId)?.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const s of this._requests)
      s.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ??= Pc(t, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    this.isStreamingSupported || this.onProgress?.({
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
};
u(Kf, "PDFNetworkStreamRangeRequestReader");
let zd = Kf;
const bb = 1e5, he = 30, Ab = 0.8;
var Mi, ue, Qo, Jo, Tn, Vs, Zo, th, kn, zr, Ur, Pi, Vr, eh, jr, Mn, sh, ih, Pn, Rn, nh, Ri, Wr, di, qg, Yg, Ud, Re, rl, Vd, Kg, Qg;
const _t = class _t {
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }) {
    m(this, di);
    m(this, Mi, Promise.withResolvers());
    m(this, ue, null);
    m(this, Qo, !1);
    m(this, Jo, !!globalThis.FontInspector?.enabled);
    m(this, Tn, null);
    m(this, Vs, null);
    m(this, Zo, 0);
    m(this, th, 0);
    m(this, kn, null);
    m(this, zr, null);
    m(this, Ur, 0);
    m(this, Pi, 0);
    m(this, Vr, /* @__PURE__ */ Object.create(null));
    m(this, eh, []);
    m(this, jr, null);
    m(this, Mn, []);
    m(this, sh, /* @__PURE__ */ new WeakMap());
    m(this, ih, null);
    var h;
    if (t instanceof ReadableStream)
      f(this, jr, t);
    else if (typeof t == "object")
      f(this, jr, new ReadableStream({
        start(l) {
          l.enqueue(t), l.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    f(this, ue, f(this, zr, e)), f(this, Pi, s.scale * (globalThis.devicePixelRatio || 1)), f(this, Ur, s.rotation), f(this, Vs, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: i,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = s.rawDims;
    f(this, ih, [1, 0, 0, -1, -a, o + r]), f(this, th, i), f(this, Zo, r), b(h = _t, Re, Kg).call(h), ar(e, s), n(this, Mi).promise.finally(() => {
      n(_t, Wr).delete(this), f(this, Vs, null), f(this, Vr, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = Ut.platform;
    return q(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = /* @__PURE__ */ u(() => {
      n(this, kn).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, Mi).resolve();
          return;
        }
        n(this, Tn) ?? f(this, Tn, e.lang), Object.assign(n(this, Vr), e.styles), b(this, di, qg).call(this, e.items), t();
      }, n(this, Mi).reject);
    }, "pump");
    return f(this, kn, n(this, jr).getReader()), n(_t, Wr).add(this), t(), n(this, Mi).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
    if (i !== n(this, Ur) && (e?.(), f(this, Ur, i), ar(n(this, zr), {
      rotation: i
    })), s !== n(this, Pi)) {
      e?.(), f(this, Pi, s);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = _t, Re, rl).call(r, n(this, Tn))
      };
      for (const o of n(this, Mn))
        a.properties = n(this, sh).get(o), a.div = o, b(this, di, Ud).call(this, a);
    }
  }
  cancel() {
    const t = new hi("TextLayer task cancelled.");
    n(this, kn)?.cancel(t).catch(() => {
    }), f(this, kn, null), n(this, Mi).reject(t);
  }
  get textDivs() {
    return n(this, Mn);
  }
  get textContentItemsStr() {
    return n(this, eh);
  }
  static cleanup() {
    if (!(n(this, Wr).size > 0)) {
      n(this, Pn).clear();
      for (const {
        canvas: t
      } of n(this, Rn).values())
        t.remove();
      n(this, Rn).clear();
    }
  }
};
Mi = new WeakMap(), ue = new WeakMap(), Qo = new WeakMap(), Jo = new WeakMap(), Tn = new WeakMap(), Vs = new WeakMap(), Zo = new WeakMap(), th = new WeakMap(), kn = new WeakMap(), zr = new WeakMap(), Ur = new WeakMap(), Pi = new WeakMap(), Vr = new WeakMap(), eh = new WeakMap(), jr = new WeakMap(), Mn = new WeakMap(), sh = new WeakMap(), ih = new WeakMap(), Pn = new WeakMap(), Rn = new WeakMap(), nh = new WeakMap(), Ri = new WeakMap(), Wr = new WeakMap(), di = new WeakSet(), qg = /* @__PURE__ */ u(function(t) {
  var i;
  if (n(this, Qo))
    return;
  n(this, Vs).ctx ??= b(i = _t, Re, rl).call(i, n(this, Tn));
  const e = n(this, Mn), s = n(this, eh);
  for (const r of t) {
    if (e.length > bb) {
      W("Ignoring additional textDivs for performance reasons."), f(this, Qo, !0);
      return;
    }
    if (r.str === void 0) {
      if (r.type === "beginMarkedContentProps" || r.type === "beginMarkedContent") {
        const a = n(this, ue);
        f(this, ue, document.createElement("span")), n(this, ue).classList.add("markedContent"), r.id !== null && n(this, ue).setAttribute("id", `${r.id}`), a.append(n(this, ue));
      } else r.type === "endMarkedContent" && f(this, ue, n(this, ue).parentNode);
      continue;
    }
    s.push(r.str), b(this, di, Yg).call(this, r);
  }
}, "#processItems"), Yg = /* @__PURE__ */ u(function(t) {
  var w;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, Mn).push(e);
  const i = N.transform(n(this, ih), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, Vr)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Jo) && a.fontSubstitution || a.fontFamily;
  o = _t.fontFamilyMap.get(o) || o;
  const h = Math.hypot(i[2], i[3]), l = h * b(w = _t, Re, Qg).call(w, o, n(this, Tn));
  let c, d;
  r === 0 ? (c = i[4], d = i[5] - l) : (c = i[4] + l * Math.sin(r), d = i[5] - l * Math.cos(r));
  const p = "calc(var(--scale-factor)*", A = e.style;
  n(this, ue) === n(this, zr) ? (A.left = `${(100 * c / n(this, th)).toFixed(2)}%`, A.top = `${(100 * d / n(this, Zo)).toFixed(2)}%`) : (A.left = `${p}${c.toFixed(2)}px)`, A.top = `${p}${d.toFixed(2)}px)`), A.fontSize = `${p}${(n(_t, Ri) * h).toFixed(2)}px)`, A.fontFamily = o, s.fontSize = h, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Jo) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    _ !== v && Math.max(_, v) / Math.min(_, v) > 1.5 && (y = !0);
  }
  if (y && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, sh).set(e, s), n(this, Vs).div = e, n(this, Vs).properties = s, b(this, di, Ud).call(this, n(this, Vs)), s.hasText && n(this, ue).append(e), s.hasEOL) {
    const _ = document.createElement("br");
    _.setAttribute("role", "presentation"), n(this, ue).append(_);
  }
}, "#appendText"), Ud = /* @__PURE__ */ u(function(t) {
  var o;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(_t, Ri) > 1 && (a = `scale(${1 / n(_t, Ri)})`), s.canvasWidth !== 0 && s.hasText) {
    const {
      fontFamily: h
    } = r, {
      canvasWidth: l,
      fontSize: c
    } = s;
    b(o = _t, Re, Vd).call(o, i, c * n(this, Pi), h);
    const {
      width: d
    } = i.measureText(e.textContent);
    d > 0 && (a = `scaleX(${l * n(this, Pi) / d}) ${a}`);
  }
  s.angle !== 0 && (a = `rotate(${s.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, "#layout"), Re = new WeakSet(), rl = /* @__PURE__ */ u(function(t = null) {
  let e = n(this, Rn).get(t ||= "");
  if (!e) {
    const s = document.createElement("canvas");
    s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, Rn).set(t, e), n(this, nh).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, "#getCtx"), Vd = /* @__PURE__ */ u(function(t, e, s) {
  const i = n(this, nh).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, "#ensureCtxFont"), Kg = /* @__PURE__ */ u(function() {
  if (n(this, Ri) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), f(this, Ri, t.getBoundingClientRect().height), t.remove();
}, "#ensureMinFontSizeComputed"), Qg = /* @__PURE__ */ u(function(t, e) {
  const s = n(this, Pn).get(t);
  if (s)
    return s;
  const i = b(this, Re, rl).call(this, e);
  i.canvas.width = i.canvas.height = he, b(this, Re, Vd).call(this, i, he, t);
  const r = i.measureText("");
  let a = r.fontBoundingBoxAscent, o = Math.abs(r.fontBoundingBoxDescent);
  if (a) {
    const c = a / (a + o);
    return n(this, Pn).set(t, c), i.canvas.width = i.canvas.height = 0, c;
  }
  i.strokeStyle = "red", i.clearRect(0, 0, he, he), i.strokeText("g", 0, 0);
  let h = i.getImageData(0, 0, he, he).data;
  o = 0;
  for (let c = h.length - 1 - 3; c >= 0; c -= 4)
    if (h[c] > 0) {
      o = Math.ceil(c / 4 / he);
      break;
    }
  i.clearRect(0, 0, he, he), i.strokeText("A", 0, he), h = i.getImageData(0, 0, he, he).data, a = 0;
  for (let c = 0, d = h.length; c < d; c += 4)
    if (h[c] > 0) {
      a = he - Math.floor(c / 4 / he);
      break;
    }
  i.canvas.width = i.canvas.height = 0;
  const l = a ? a / (a + o) : Ab;
  return n(this, Pn).set(t, l), l;
}, "#getAscent"), m(_t, Re), u(_t, "TextLayer"), m(_t, Pn, /* @__PURE__ */ new Map()), m(_t, Rn, /* @__PURE__ */ new Map()), m(_t, nh, /* @__PURE__ */ new WeakMap()), m(_t, Ri, null), m(_t, Wr, /* @__PURE__ */ new Set());
let ho = _t;
const hc = class hc {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (hc.shouldBuildText(o))
        r?.attributes?.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          i(h);
    }
    return u(i, "walk"), i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
};
u(hc, "XfaText");
let lo = hc;
const yb = 65536, wb = 100, vb = 5e3, _b = fd, Sb = Ll, Eb = md, xb = Il;
function Cb(g = {}) {
  typeof g == "string" || g instanceof URL ? g = {
    url: g
  } : (g instanceof ArrayBuffer || ArrayBuffer.isView(g)) && (g = {
    data: g
  });
  const t = new jd(), {
    docId: e
  } = t, s = g.url ? Tb(g.url) : null, i = g.data ? kb(g.data) : null, r = g.httpHeaders || null, a = g.withCredentials === !0, o = g.password ?? null, h = g.range instanceof Nl ? g.range : null, l = Number.isInteger(g.rangeChunkSize) && g.rangeChunkSize > 0 ? g.rangeChunkSize : yb;
  let c = g.worker instanceof vr ? g.worker : null;
  const d = g.verbosity, p = typeof g.docBaseUrl == "string" && !kc(g.docBaseUrl) ? g.docBaseUrl : null, A = typeof g.cMapUrl == "string" ? g.cMapUrl : null, y = g.cMapPacked !== !1, w = g.CMapReaderFactory || Sb, _ = typeof g.standardFontDataUrl == "string" ? g.standardFontDataUrl : null, v = g.StandardFontDataFactory || xb, S = g.stopAtErrors !== !0, x = Number.isInteger(g.maxImageSize) && g.maxImageSize > -1 ? g.maxImageSize : -1, E = g.isEvalSupported !== !1, C = typeof g.isOffscreenCanvasSupported == "boolean" ? g.isOffscreenCanvasSupported : !jp, k = typeof g.isImageDecoderSupported == "boolean" ? g.isImageDecoderSupported : Ut.platform.isFirefox || !globalThis.chrome, T = Number.isInteger(g.canvasMaxAreaInBytes) ? g.canvasMaxAreaInBytes : -1, F = typeof g.disableFontFace == "boolean" ? g.disableFontFace : jp, O = g.fontExtraProperties === !0, U = g.enableXfa === !0, V = g.ownerDocument || globalThis.document, ut = g.disableRange === !0, ft = g.disableStream === !0, at = g.disableAutoFetch === !0, Jt = g.pdfBug === !0, I = g.CanvasFactory || _b, B = g.FilterFactory || Eb, ge = g.enableHWA === !0, os = h ? h.length : g.length ?? NaN, Rs = typeof g.useSystemFonts == "boolean" ? g.useSystemFonts : !F, Le = typeof g.useWorkerFetch == "boolean" ? g.useWorkerFetch : w === Ll && v === Il && A && _ && Yh(A, document.baseURI) && Yh(_, document.baseURI), Vt = null;
  jm(d);
  const Et = {
    canvasFactory: new I({
      ownerDocument: V,
      enableHWA: ge
    }),
    filterFactory: new B({
      docId: e,
      ownerDocument: V
    }),
    cMapReaderFactory: Le ? null : new w({
      baseUrl: A,
      isCompressed: y
    }),
    standardFontDataFactory: Le ? null : new v({
      baseUrl: _
    })
  };
  if (!c) {
    const oe = {
      verbosity: d,
      port: Pa.workerPort
    };
    c = oe.port ? vr.fromPort(oe) : new vr(oe), t._worker = c;
  }
  const dr = {
    docId: e,
    apiVersion: "4.10.38",
    data: i,
    password: o,
    disableAutoFetch: at,
    rangeChunkSize: l,
    length: os,
    docBaseUrl: p,
    enableXfa: U,
    evaluatorOptions: {
      maxImageSize: x,
      disableFontFace: F,
      ignoreErrors: S,
      isEvalSupported: E,
      isOffscreenCanvasSupported: C,
      isImageDecoderSupported: k,
      canvasMaxAreaInBytes: T,
      fontExtraProperties: O,
      useSystemFonts: Rs,
      cMapUrl: Le ? A : null,
      standardFontDataUrl: Le ? _ : null
    }
  }, Ra = {
    disableFontFace: F,
    fontExtraProperties: O,
    ownerDocument: V,
    pdfBug: Jt,
    styleElement: Vt,
    loadingParams: {
      disableAutoFetch: at,
      enableXfa: U
    }
  };
  return c.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    const oe = c.messageHandler.sendWithPromise("GetDocRequest", dr, i ? [i.buffer] : null);
    let ht;
    if (h)
      ht = new Id(h, {
        disableRange: ut,
        disableStream: ft
      });
    else if (!i) {
      if (!s)
        throw new Error("getDocument - no `url` parameter provided.");
      let zh;
      zh = Yh(s) ? Fd : $d, ht = new zh({
        url: s,
        length: os,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: l,
        disableRange: ut,
        disableStream: ft
      });
    }
    return oe.then((zh) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const zp = new en(e, zh, c.port), Bm = new Yd(zp, t, ht, Ra, Et);
      t._transport = Bm, zp.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
u(Cb, "getDocument");
function Tb(g) {
  if (g instanceof URL)
    return g.href;
  try {
    return new URL(g, window.location).href;
  } catch {
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
u(Tb, "getUrlProp");
function kb(g) {
  if (g instanceof Uint8Array && g.byteLength === g.buffer.byteLength)
    return g;
  if (typeof g == "string")
    return Cc(g);
  if (g instanceof ArrayBuffer || ArrayBuffer.isView(g) || typeof g == "object" && !isNaN(g?.length))
    return new Uint8Array(g);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
u(kb, "getDataProp");
function ng(g) {
  return typeof g == "object" && Number.isInteger(g?.num) && g.num >= 0 && Number.isInteger(g?.gen) && g.gen >= 0;
}
u(ng, "isRefProxy");
var lc;
const eo = class eo {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${Zt(eo, lc)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
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
};
lc = new WeakMap(), u(eo, "PDFDocumentLoadingTask"), m(eo, lc, 0);
let jd = eo;
const Qf = class Qf {
  constructor(t, e, s = !1, i = null) {
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const s of this._rangeListeners)
      s(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const s of this._progressListeners)
        s(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners)
        t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    rt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
u(Qf, "PDFDataRangeTransport");
let Nl = Qf;
const Jf = class Jf {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
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
    return q(this, "isPureXfa", !!this._transport._htmlForXfa);
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
u(Jf, "PDFDocumentProxy");
let Wd = Jf;
var Li, js, ze, mr, al;
const Zf = class Zf {
  constructor(t, e, s, i = !1) {
    m(this, ze);
    m(this, Li, null);
    m(this, js, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new xl() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Fl(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
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
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new io({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
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
    return q(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: s = "display",
    annotationMode: i = gi.ENABLE,
    transform: r = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: h = null,
    pageColors: l = null,
    printAnnotationStorage: c = null,
    isEditing: d = !1
  }) {
    this._stats?.time("Overall");
    const p = this._transport.getRenderingIntent(s, i, c, d), {
      renderingIntent: A,
      cacheKey: y
    } = p;
    f(this, js, !1), b(this, ze, al).call(this), o ||= this._transport.getOptionalContentConfig(A);
    let w = this._intentStates.get(y);
    w || (w = /* @__PURE__ */ Object.create(null), this._intentStates.set(y, w)), w.streamReaderCancelTimeout && (clearTimeout(w.streamReaderCancelTimeout), w.streamReaderCancelTimeout = null);
    const _ = !!(A & ke.PRINT);
    w.displayReadyCapability || (w.displayReadyCapability = Promise.withResolvers(), w.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, this._stats?.time("Page Request"), this._pumpOperatorList(p));
    const v = /* @__PURE__ */ u((E) => {
      w.renderTasks.delete(S), (this._maybeCleanupAfterRender || _) && f(this, js, !0), b(this, ze, mr).call(this, !_), E ? (S.capability.reject(E), this._abortOperatorList({
        intentState: w,
        reason: E instanceof Error ? E : new Error(E)
      })) : S.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, "complete"), S = new Jd({
      callback: v,
      params: {
        canvasContext: t,
        viewport: e,
        transform: r,
        background: a
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: w.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: l
    });
    (w.renderTasks ||= /* @__PURE__ */ new Set()).add(S);
    const x = S.task;
    return Promise.all([w.displayReadyCapability.promise, o]).then(([E, C]) => {
      if (this.destroyed) {
        v();
        return;
      }
      if (this._stats?.time("Rendering"), !(C.renderingIntent & A))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      S.initializeGraphics({
        transparency: E,
        optionalContentConfig: C
      }), S.operatorListChanged();
    }).catch(v), x;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = gi.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(h));
    }
    u(r, "operatorListChanged");
    const a = this._transport.getRenderingIntent(t, e, s, i, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
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
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((s) => lo.textContent(s));
    const e = this.streamTextContent(t);
    return new Promise(function(s, i) {
      function r() {
        a.read().then(function({
          value: h,
          done: l
        }) {
          if (l) {
            s(o);
            return;
          }
          o.lang ??= h.lang, Object.assign(o.styles, h.styles), o.items.push(...h.items), r();
        }, i);
      }
      u(r, "pump");
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
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
    return this.objs.clear(), f(this, js, !1), b(this, ze, al).call(this), Promise.all(t);
  }
  cleanup(t = !1) {
    f(this, js, !0);
    const e = b(this, ze, mr).call(this, !1);
    return t && e && (this._stats &&= new xl()), e;
  }
  _startRenderPage(t, e) {
    const s = this._intentStates.get(e);
    s && (this._stats?.timeEnd("Page Request"), s.displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, ze, mr).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: r,
      transfer: a
    } = s, h = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: i
    }, a).getReader(), l = this._intentStates.get(e);
    l.streamReader = h;
    const c = /* @__PURE__ */ u(() => {
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
            b(this, ze, mr).call(this, !0);
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
        if (e instanceof no) {
          let i = wb;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new hi(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
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
Li = new WeakMap(), js = new WeakMap(), ze = new WeakSet(), mr = /* @__PURE__ */ u(function(t = !1) {
  if (b(this, ze, al).call(this), !n(this, js) || this.destroyed)
    return !1;
  if (t)
    return f(this, Li, setTimeout(() => {
      f(this, Li, null), b(this, ze, mr).call(this, !1);
    }, vb)), !1;
  for (const {
    renderTasks: e,
    operatorList: s
  } of this._intentStates.values())
    if (e.size > 0 || !s.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), f(this, js, !1), !0;
}, "#tryCleanup"), al = /* @__PURE__ */ u(function() {
  n(this, Li) && (clearTimeout(n(this, Li)), f(this, Li, null));
}, "#abortDelayedCleanup"), u(Zf, "PDFPageProxy");
let Xd = Zf;
var Ws, cc;
const tp = class tp {
  constructor() {
    m(this, Ws, /* @__PURE__ */ new Map());
    m(this, cc, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, cc).then(() => {
      for (const [i] of n(this, Ws))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if (s?.signal instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        W("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = /* @__PURE__ */ u(() => this.removeEventListener(t, e), "onAbort");
      i = /* @__PURE__ */ u(() => r.removeEventListener("abort", a), "rmAbort"), r.addEventListener("abort", a);
    }
    n(this, Ws).set(e, i);
  }
  removeEventListener(t, e) {
    n(this, Ws).get(e)?.(), n(this, Ws).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, Ws))
      t?.();
    n(this, Ws).clear();
  }
};
Ws = new WeakMap(), cc = new WeakMap(), u(tp, "LoopbackPort");
let qd = tp;
var dc, Xr, Ln, qr, ol, Yr, hl;
const lt = class lt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = Wm()
  } = {}) {
    m(this, qr);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if (n(lt, Ln)?.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (n(lt, Ln) || f(lt, Ln, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t, this._messageHandler = new en("main", "worker", t), this._messageHandler.on("ready", function() {
    }), b(this, qr, ol).call(this);
  }
  _initialize() {
    if (n(lt, Xr) || n(lt, Yr, hl)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: t
    } = lt;
    try {
      lt._isSameOrigin(window.location.href, t) || (t = lt._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, {
        type: "module"
      }), s = new en("main", "worker", e), i = /* @__PURE__ */ u(() => {
        r.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, "terminateEarly"), r = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || i();
      }, {
        signal: r.signal
      }), s.on("test", (o) => {
        if (r.abort(), this.destroyed || !o) {
          i();
          return;
        }
        this._messageHandler = s, this._port = e, this._webWorker = e, b(this, qr, ol).call(this);
      }), s.on("ready", (o) => {
        if (r.abort(), this.destroyed) {
          i();
          return;
        }
        try {
          a();
        } catch {
          this._setupFakeWorker();
        }
      });
      const a = /* @__PURE__ */ u(() => {
        const o = new Uint8Array();
        s.send("test", o, [o.buffer]);
      }, "sendTest");
      a();
      return;
    } catch {
      xc("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    n(lt, Xr) || (W("Setting up fake worker."), f(lt, Xr, !0)), lt._setupFakeWorkerGlobal.then((t) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new qd();
      this._port = e;
      const s = `fake${Zt(lt, dc)._++}`, i = new en(s + "_worker", s, e);
      t.setup(i, e), this._messageHandler = new en(s, s + "_worker", e), b(this, qr, ol).call(this);
    }).catch((t) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
    });
  }
  destroy() {
    this.destroyed = !0, this._webWorker?.terminate(), this._webWorker = null, n(lt, Ln)?.delete(this._port), this._port = null, this._messageHandler?.destroy(), this._messageHandler = null;
  }
  static fromPort(t) {
    if (!t?.port)
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = n(this, Ln)?.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new lt(t);
  }
  static get workerSrc() {
    if (Pa.workerSrc)
      return Pa.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return q(this, "_setupFakeWorkerGlobal", (/* @__PURE__ */ u(async () => n(this, Yr, hl) ? n(this, Yr, hl) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      new URL(
        /*webpackIgnore: true*/
        this.workerSrc,
        typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url
      ).href
    )).WorkerMessageHandler, "loader"))());
  }
};
dc = new WeakMap(), Xr = new WeakMap(), Ln = new WeakMap(), qr = new WeakSet(), ol = /* @__PURE__ */ u(function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, "#resolve"), Yr = new WeakSet(), hl = /* @__PURE__ */ u(function() {
  try {
    return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
}, "#mainThreadWorkerMessageHandler"), m(lt, Yr), u(lt, "PDFWorker"), m(lt, dc, 0), m(lt, Xr, !1), m(lt, Ln), lt._isSameOrigin = (t, e) => {
  let s;
  try {
    if (s = new URL(t), !s.origin || s.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
}, lt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let vr = lt;
var Xs, _s, Kr, Qr, qs, In, Ua;
const ep = class ep {
  constructor(t, e, s, i, r) {
    m(this, In);
    m(this, Xs, /* @__PURE__ */ new Map());
    m(this, _s, /* @__PURE__ */ new Map());
    m(this, Kr, /* @__PURE__ */ new Map());
    m(this, Qr, /* @__PURE__ */ new Map());
    m(this, qs, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Fl(), this.fontLoader = new cd({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return q(this, "annotationStorage", new ao());
  }
  getRenderingIntent(t, e = gi.ENABLE, s = null, i = !1, r = !1) {
    let a = ke.DISPLAY, o = ld;
    switch (t) {
      case "any":
        a = ke.ANY;
        break;
      case "display":
        break;
      case "print":
        a = ke.PRINT;
        break;
      default:
        W(`getRenderingIntent - invalid intent: ${t}`);
    }
    const h = a & ke.PRINT && s instanceof Rl ? s : this.annotationStorage;
    switch (e) {
      case gi.DISABLE:
        a += ke.ANNOTATIONS_DISABLE;
        break;
      case gi.ENABLE:
        break;
      case gi.ENABLE_FORMS:
        a += ke.ANNOTATIONS_FORMS;
        break;
      case gi.ENABLE_STORAGE:
        a += ke.ANNOTATIONS_STORAGE, o = h.serializable;
        break;
      default:
        W(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += ke.IS_EDITING), r && (a += ke.OPLIST);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), n(this, qs)?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of n(this, _s).values())
      t.push(s._destroy());
    n(this, _s).clear(), n(this, Kr).clear(), n(this, Qr).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, Xs).clear(), this.filterFactory.destroy(), ho.cleanup(), this._networkStream?.cancelAllRequests(new hi("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Nt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, i.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          Nt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        this._fullReader.cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!i || !r) && (this._lastProgress && e.onProgress?.(this._lastProgress), this._fullReader.onProgress = (o) => {
        e.onProgress?.({
          loaded: o.loaded,
          total: o.total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      Nt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Nt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Wd(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(le(s));
    }), t.on("PasswordRequest", (s) => {
      f(this, qs, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw le(s);
        const i = /* @__PURE__ */ u((r) => {
          r instanceof Error ? n(this, qs).reject(r) : n(this, qs).resolve({
            password: r
          });
        }, "updatePassword");
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, qs).reject(i);
      }
      return n(this, qs).promise;
    }), t.on("DataLoaded", (s) => {
      e.onProgress?.({
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, _s).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          const {
            disableFontFace: a,
            fontExtraProperties: o,
            pdfBug: h
          } = this._params;
          if ("error" in r) {
            const p = r.error;
            W(`Error during font loading: ${p}`), this.commonObjs.resolve(s, p);
            break;
          }
          const l = h && globalThis.FontInspector?.enabled ? (p, A) => globalThis.FontInspector.fontAdded(p, A) : null, c = new dd(r, {
            disableFontFace: a,
            fontExtraProperties: o,
            inspectFont: l
          });
          this.fontLoader.bind(c).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            !o && c.data && (c.data = null), this.commonObjs.resolve(s, c);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: d
          } = r;
          Nt(d, "The imageRef must be defined.");
          for (const p of n(this, _s).values())
            for (const [, A] of p.objs)
              if (A?.ref === d)
                return A.dataLen ? (this.commonObjs.resolve(s, structuredClone(A)), A.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      if (this.destroyed)
        return;
      const o = n(this, _s).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          a?.bitmap?.close();
          return;
        }
        switch (r) {
          case "Image":
            o.objs.resolve(s, a), a?.dataLen > Gm && (o._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      this.destroyed || e.onProgress?.({
        loaded: s.loaded,
        total: s.total
      });
    }), t.on("FetchBuiltInCMap", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.cMapReaderFactory)
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.cMapReaderFactory.fetch(s);
    }), t.on("FetchStandardFontData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.standardFontDataFactory)
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      return this.standardFontDataFactory.fetch(s);
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
      filename: this._fullReader?.filename ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = n(this, Kr).get(e);
    if (s)
      return s;
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, Qr).set(r.refStr, t);
      const a = new Xd(e, r, this, this._params.pdfBug);
      return n(this, _s).set(e, a), a;
    });
    return n(this, Kr).set(e, i), i;
  }
  getPageIndex(t) {
    return ng(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, In, Ua).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return b(this, In, Ua).call(this, "HasJSActions");
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
  getDocJSActions() {
    return b(this, In, Ua).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, In, Ua).call(this, "GetOptionalContentConfig").then((e) => new Rd(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, Xs).get(t);
    if (e)
      return e;
    const s = this.messageHandler.sendWithPromise(t, null).then((i) => ({
      info: i[0],
      metadata: i[1] ? new Md(i[1]) : null,
      contentDispositionFilename: this._fullReader?.filename ?? null,
      contentLength: this._fullReader?.contentLength ?? null
    }));
    return n(this, Xs).set(t, s), s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, _s).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, Xs).clear(), this.filterFactory.destroy(!0), ho.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!ng(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, Qr).get(e) ?? null;
  }
};
Xs = new WeakMap(), _s = new WeakMap(), Kr = new WeakMap(), Qr = new WeakMap(), qs = new WeakMap(), In = new WeakSet(), Ua = /* @__PURE__ */ u(function(t, e = null) {
  const s = n(this, Xs).get(t);
  if (s)
    return s;
  const i = this.messageHandler.sendWithPromise(t, e);
  return n(this, Xs).set(t, i), i;
}, "#cacheSimpleMethod"), u(ep, "WorkerTransport");
let Yd = ep;
const Da = Symbol("INITIAL_DATA");
var ye, rh, Kd;
const sp = class sp {
  constructor() {
    m(this, rh);
    m(this, ye, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const i = b(this, rh, Kd).call(this, t);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, ye)[t];
    if (!s || s.data === Da)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, ye)[t];
    return !!e && e.data !== Da;
  }
  delete(t) {
    const e = n(this, ye)[t];
    return !e || e.data === Da ? !1 : (delete n(this, ye)[t], !0);
  }
  resolve(t, e = null) {
    const s = b(this, rh, Kd).call(this, t);
    s.data = e, s.resolve();
  }
  clear() {
    for (const t in n(this, ye)) {
      const {
        data: e
      } = n(this, ye)[t];
      e?.bitmap?.close();
    }
    f(this, ye, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ye)) {
      const {
        data: e
      } = n(this, ye)[t];
      e !== Da && (yield [t, e]);
    }
  }
};
ye = new WeakMap(), rh = new WeakSet(), Kd = /* @__PURE__ */ u(function(t) {
  return n(this, ye)[t] ||= {
    ...Promise.withResolvers(),
    data: Da
  };
}, "#ensureObj"), u(sp, "PDFObjects");
let Fl = sp;
var Ii;
const ip = class ip {
  constructor(t) {
    m(this, Ii, null);
    f(this, Ii, t), this.onContinue = null;
  }
  get promise() {
    return n(this, Ii).capability.promise;
  }
  cancel(t = 0) {
    n(this, Ii).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, Ii).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, Ii);
    return t.form || t.canvas && e?.size > 0;
  }
};
Ii = new WeakMap(), u(ip, "RenderTask");
let Qd = ip;
var Di, Dn;
const pi = class pi {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: h,
    filterFactory: l,
    useRequestAnimationFrame: c = !1,
    pdfBug: d = !1,
    pageColors: p = null
  }) {
    m(this, Di, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = d, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Qd(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
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
      if (n(pi, Dn).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(pi, Dn).add(this._canvas);
    }
    this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: s,
      viewport: i,
      transform: r,
      background: a
    } = this.params;
    this.gfx = new wr(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: r,
      viewport: i,
      transparency: t,
      background: a
    }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
  }
  cancel(t = null, e = 0) {
    this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), n(this, Di) && (window.cancelAnimationFrame(n(this, Di)), f(this, Di, null)), n(pi, Dn).delete(this._canvas), this.callback(t || new no(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? f(this, Di, window.requestAnimationFrame(() => {
      f(this, Di, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(pi, Dn).delete(this._canvas), this.callback())));
  }
};
Di = new WeakMap(), Dn = new WeakMap(), u(pi, "InternalRenderTask"), m(pi, Dn, /* @__PURE__ */ new WeakSet());
let Jd = pi;
const Mb = "4.10.38", Pb = "f9bea397f";
function rg(g) {
  return Math.floor(Math.max(0, Math.min(1, g)) * 255).toString(16).padStart(2, "0");
}
u(rg, "makeColorComp");
function Na(g) {
  return Math.max(0, Math.min(255, 255 * g));
}
u(Na, "scaleAndClamp");
const np = class np {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Na(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = rg(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Na);
  }
  static RGB_HTML(t) {
    return `#${t.map(rg).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Na(1 - Math.min(1, t + i)), Na(1 - Math.min(1, s + i)), Na(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
};
u(np, "ColorConverters");
let Ol = np;
const rp = class rp {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
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
u(rp, "BaseSVGFactory");
let Zd = rp;
const ap = class ap extends Zd {
  _createSVG(t) {
    return document.createElementNS(Ls, t);
  }
};
u(ap, "DOMSVGFactory");
let co = ap;
const op = class op {
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
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
          i.setValue(e, {
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
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
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
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = document.createElement(i.name);
    i.attributes && this.setAttributes({
      html: a,
      element: i,
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
    if (i.children.length === 0) {
      if (i.value) {
        const d = document.createTextNode(i.value);
        a.append(d), o && lo.shouldBuildText(i.name) && l.push(d);
      }
      return {
        textDivs: l
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [d, p, A] = c.at(-1);
      if (p + 1 === d.children.length) {
        c.pop();
        continue;
      }
      const y = d.children[++c.at(-1)[1]];
      if (y === null)
        continue;
      const {
        name: w
      } = y;
      if (w === "#text") {
        const v = document.createTextNode(y.value);
        l.push(v), A.append(v);
        continue;
      }
      const _ = y?.attributes?.xmlns ? document.createElementNS(y.attributes.xmlns, w) : document.createElement(w);
      if (A.append(_), y.attributes && this.setAttributes({
        html: _,
        element: y,
        storage: e,
        intent: r,
        linkService: s
      }), y.children?.length > 0)
        c.push([y, -1, _]);
      else if (y.value) {
        const v = document.createTextNode(y.value);
        o && lo.shouldBuildText(w) && l.push(v), _.append(v);
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
u(op, "XfaLayer");
let Hl = op;
const Gh = 1e3, Rb = 9, lr = /* @__PURE__ */ new WeakSet();
function Wi(g) {
  return {
    width: g[2] - g[0],
    height: g[3] - g[1]
  };
}
u(Wi, "getRectDims");
const hp = class hp {
  static create(t) {
    switch (t.data.annotationType) {
      case xt.LINK:
        return new Bl(t);
      case xt.TEXT:
        return new su(t);
      case xt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new iu(t);
          case "Btn":
            return t.data.radioButton ? new $l(t) : t.data.checkBox ? new ru(t) : new au(t);
          case "Ch":
            return new ou(t);
          case "Sig":
            return new nu(t);
        }
        return new li(t);
      case xt.POPUP:
        return new uo(t);
      case xt.FREETEXT:
        return new Gl(t);
      case xt.LINE:
        return new du(t);
      case xt.SQUARE:
        return new uu(t);
      case xt.CIRCLE:
        return new fu(t);
      case xt.POLYLINE:
        return new zl(t);
      case xt.CARET:
        return new gu(t);
      case xt.INK:
        return new fo(t);
      case xt.POLYGON:
        return new pu(t);
      case xt.HIGHLIGHT:
        return new Ul(t);
      case xt.UNDERLINE:
        return new bu(t);
      case xt.SQUIGGLY:
        return new Au(t);
      case xt.STRIKEOUT:
        return new yu(t);
      case xt.STAMP:
        return new Vl(t);
      case xt.FILEATTACHMENT:
        return new wu(t);
      default:
        return new wt(t);
    }
  }
};
u(hp, "AnnotationElementFactory");
let tu = hp;
var Nn, Jr, Zr, ah, eu;
const uc = class uc {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    m(this, ah);
    m(this, Nn, null);
    m(this, Jr, !1);
    m(this, Zr, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: t,
    contentsObj: e,
    richText: s
  }) {
    return !!(t?.str || e?.str || s?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return uc._hasPopupData(this.data);
  }
  updateEdited(t) {
    if (!this.container)
      return;
    n(this, Nn) || f(this, Nn, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = t;
    e && b(this, ah, eu).call(this, e), n(this, Zr)?.popup.updateEdited(t);
  }
  resetEdited() {
    n(this, Nn) && (b(this, ah, eu).call(this, n(this, Nn).rect), n(this, Zr)?.popup.resetEdited(), f(this, Nn, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), this instanceof li || (r.tabIndex = Gh);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex++, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof uo) {
      const {
        rotation: w
      } = e;
      return !e.hasOwnCanvas && w !== 0 && this.setRotation(w, r), r;
    }
    const {
      width: o,
      height: h
    } = Wi(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const w = e.borderStyle.horizontalCornerRadius, _ = e.borderStyle.verticalCornerRadius;
      if (w > 0 || _ > 0) {
        const S = `calc(${w}px * var(--scale-factor)) / calc(${_}px * var(--scale-factor))`;
        a.borderRadius = S;
      } else if (this instanceof $l) {
        const S = `calc(${o}px * var(--scale-factor)) / calc(${h}px * var(--scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case La.SOLID:
          a.borderStyle = "solid";
          break;
        case La.DASHED:
          a.borderStyle = "dashed";
          break;
        case La.BEVELED:
          W("Unimplemented border style: beveled");
          break;
        case La.INSET:
          W("Unimplemented border style: inset");
          break;
        case La.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (f(this, Jr, !0), a.borderColor = N.makeHexColor(v[0] | 0, v[1] | 0, v[2] | 0)) : a.borderWidth = 0;
    }
    const l = N.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: d,
      pageX: p,
      pageY: A
    } = i.rawDims;
    a.left = `${100 * (l[0] - p) / c}%`, a.top = `${100 * (l[1] - A) / d}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * h / d}%`) : this.setRotation(y, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims, {
      width: r,
      height: a
    } = Wi(this.data.rect);
    let o, h;
    t % 180 === 0 ? (o = 100 * r / s, h = 100 * a / i) : (o = 100 * a / s, h = 100 * r / i), e.style.width = `${o}%`, e.style.height = `${h}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = /* @__PURE__ */ u((e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = Ol[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: Ol[`${a}_rgb`](o)
      });
    }, "setColor");
    return q(this, "_commonActions", {
      display: /* @__PURE__ */ u((e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      }, "display"),
      print: /* @__PURE__ */ u((e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      }, "print"),
      hidden: /* @__PURE__ */ u((e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      }, "hidden"),
      focus: /* @__PURE__ */ u((e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      }, "focus"),
      userName: /* @__PURE__ */ u((e) => {
        e.target.title = e.detail.userName;
      }, "userName"),
      readonly: /* @__PURE__ */ u((e) => {
        e.target.disabled = e.detail.readonly;
      }, "readonly"),
      required: /* @__PURE__ */ u((e) => {
        this._setRequired(e.target, e.detail.required);
      }, "required"),
      bgColor: /* @__PURE__ */ u((e) => {
        t("bgColor", "backgroundColor", e);
      }, "bgColor"),
      fillColor: /* @__PURE__ */ u((e) => {
        t("fillColor", "backgroundColor", e);
      }, "fillColor"),
      fgColor: /* @__PURE__ */ u((e) => {
        t("fgColor", "color", e);
      }, "fgColor"),
      textColor: /* @__PURE__ */ u((e) => {
        t("textColor", "color", e);
      }, "textColor"),
      borderColor: /* @__PURE__ */ u((e) => {
        t("borderColor", "borderColor", e);
      }, "borderColor"),
      strokeColor: /* @__PURE__ */ u((e) => {
        t("strokeColor", "borderColor", e);
      }, "strokeColor"),
      rotation: /* @__PURE__ */ u((e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }, "rotation")
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail))
      (t[i] || s[i])?.(e);
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(o), delete e[i];
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
    const [e, s, i, r] = this.data.rect.map((w) => Math.fround(w));
    if (t.length === 8) {
      const [w, _, v, S] = t.subarray(2, 6);
      if (i === w && r === _ && e === v && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, Jr)) {
      const {
        borderColor: w,
        borderWidth: _
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${w}" stroke-width="${_}">`], this.container.classList.add("hasBorder");
    }
    const h = i - e, l = r - s, {
      svgFactory: c
    } = this, d = c.createElement("svg");
    d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0);
    const p = c.createElement("defs");
    d.append(p);
    const A = c.createElement("clipPath"), y = `clippath_${this.data.id}`;
    A.setAttribute("id", y), A.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(A);
    for (let w = 2, _ = t.length; w < _; w += 8) {
      const v = t[w], S = t[w + 1], x = t[w + 2], E = t[w + 3], C = c.createElement("rect"), k = (x - e) / h, T = (r - S) / l, F = (v - x) / h, O = (S - E) / l;
      C.setAttribute("x", k), C.setAttribute("y", T), C.setAttribute("width", F), C.setAttribute("height", O), A.append(C), o?.push(`<rect vector-effect="non-scaling-stroke" x="${k}" y="${T}" width="${F}" height="${O}"/>`);
    }
    n(this, Jr) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(d), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup() {
    const {
      data: t
    } = this, e = f(this, Zr, new uo({
      data: {
        color: t.color,
        titleObj: t.titleObj,
        modificationDate: t.modificationDate,
        contentsObj: t.contentsObj,
        richText: t.richText,
        parentRect: t.rect,
        borderStyle: 0,
        id: `popup_${t.id}`,
        rotation: t.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(e.render());
  }
  render() {
    rt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of i) {
          if (r === -1 || a === e)
            continue;
          const h = typeof o == "string" ? o : null, l = document.querySelector(`[data-element-id="${a}"]`);
          if (l && !lr.has(l)) {
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
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a !== e && lr.has(i) && s.push({
        id: a,
        exportValue: r,
        domElement: i
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
        editId: e
      });
    });
  }
};
Nn = new WeakMap(), Jr = new WeakMap(), Zr = new WeakMap(), ah = new WeakSet(), eu = /* @__PURE__ */ u(function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
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
  s?.splice(0, 4, ...t);
  const {
    width: l,
    height: c
  } = Wi(t);
  e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + h) / a}%`, i === 0 ? (e.width = `${100 * l / r}%`, e.height = `${100 * c / a}%`) : this.setRotation(i);
}, "#setRectEdited"), u(uc, "AnnotationElement");
let wt = uc;
var Me, Ki, Jg, Zg;
const lp = class lp extends wt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!s?.ignoreBorder,
      createQuadrilaterals: !0
    });
    m(this, Me);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action), r = !0) : e.attachment ? (b(this, Me, Jg).call(this, i, e.attachment, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, Me, Zg).call(this, i, e.setOCGState), r = !0) : e.dest ? (this._bindLink(i, e.dest), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(i), this.container;
  }
  _bindLink(e, s) {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, Me, Ki).call(this);
  }
  _bindNamedAction(e, s) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), b(this, Me, Ki).call(this);
  }
  _bindJSAction(e, s) {
    e.href = this.linkService.getAnchorUrl("");
    const i = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(s.actions)) {
      const a = i.get(r);
      a && (e[a] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: s.id,
          name: r
        }
      }), !1));
    }
    e.onclick || (e.onclick = () => !1), b(this, Me, Ki).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, Me, Ki).call(this), !this._fieldObjects) {
      W('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      i?.();
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
            id: y
          } of A)
            d.add(y);
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
            const y = d.defaultValue || "";
            l.setValue(p, {
              value: y
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const y = d.defaultValue === d.exportValues;
            l.setValue(p, {
              value: y
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const y = d.defaultValue || "";
            l.setValue(p, {
              value: y
            });
            break;
          }
          default:
            continue;
        }
        const A = document.querySelector(`[data-element-id="${p}"]`);
        if (A) {
          if (!lr.has(A)) {
            W(`_bindResetFormAction - element not allowed: ${p}`);
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
Me = new WeakSet(), Ki = /* @__PURE__ */ u(function() {
  this.container.setAttribute("data-internal-link", "");
}, "#setInternalLink"), Jg = /* @__PURE__ */ u(function(e, s, i = null) {
  e.href = this.linkService.getAnchorUrl(""), s.description && (e.title = s.description), e.onclick = () => (this.downloadManager?.openOrDownloadData(s.content, s.filename, i), !1), b(this, Me, Ki).call(this);
}, "#bindAttachment"), Zg = /* @__PURE__ */ u(function(e, s) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), b(this, Me, Ki).call(this);
}, "#bindSetOCGState"), u(lp, "LinkAnnotationElement");
let Bl = lp;
const cp = class cp extends wt {
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
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
};
u(cp, "TextAnnotationElement");
let su = cp;
const dp = class dp extends wt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    this.data.hasOwnCanvas && (t.previousSibling?.nodeName === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return Ut.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
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
          name: i,
          value: r(a)
        }
      });
    });
  }
  _setEventListeners(t, e, s, i) {
    for (const [r, a] of s)
      (a === "Action" || this.data.actions?.[a]) && ((a === "Focus" || a === "Blur") && (e ||= {
        focused: !1
      }), this._setEventListener(t, e, r, a, i), a === "Focus" && !this.data.actions?.Blur ? this._setEventListener(t, e, "blur", "Blur", null) : a === "Blur" && !this.data.actions?.Focus && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : N.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Rb, r = t.style;
    let a;
    const o = 2, h = /* @__PURE__ */ u((l) => Math.round(10 * l) / 10, "roundToOneDecimal");
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(l / (Lc * i)) || 1, d = l / c;
      a = Math.min(i, h(d / Lc));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, h(l / Lc));
    }
    r.fontSize = `calc(${a}px * var(--scale-factor))`, r.color = N.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
};
u(dp, "WidgetAnnotationElement");
let li = dp;
const up = class up extends li {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const i = t.getValue(e, {
        value: this.data.fieldValue
      });
      let r = i.value || "";
      const a = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      a && r.length > a && (r = r.slice(0, a));
      let o = i.formattedValue || this.data.textContent?.join(`
`) || null;
      o && this.data.comb && (o = o.replaceAll(/\s+/g, ""));
      const h = {
        userValue: r,
        formattedValue: o,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = o ?? r, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", o ?? r), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = !0), lr.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = Gh, this._setRequired(s, this.data.required), a && (s.maxLength = a), s.addEventListener("input", (c) => {
        t.setValue(e, {
          value: c.target.value
        }), this.setPropertyOnSiblings(s, "value", c.target.value, "value"), h.formattedValue = null;
      }), s.addEventListener("resetform", (c) => {
        const d = this.data.defaultFieldValue ?? "";
        s.value = h.userValue = d, h.formattedValue = null;
      });
      let l = /* @__PURE__ */ u((c) => {
        const {
          formattedValue: d
        } = h;
        d != null && (c.target.value = d), c.target.scrollLeft = 0;
      }, "blurListener");
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (d) => {
          if (h.focused)
            return;
          const {
            target: p
          } = d;
          h.userValue && (p.value = h.userValue), h.lastCommittedValue = p.value, h.commitKey = 1, this.data.actions?.Focus || (h.focused = !0);
        }), s.addEventListener("updatefromsandbox", (d) => {
          this.showElementAndHideCanvas(d.target);
          const p = {
            value(A) {
              h.userValue = A.detail.value ?? "", t.setValue(e, {
                value: h.userValue.toString()
              }), A.target.value = h.userValue;
            },
            formattedValue(A) {
              const {
                formattedValue: y
              } = A.detail;
              h.formattedValue = y, y != null && A.target !== document.activeElement && (A.target.value = y), t.setValue(e, {
                formattedValue: y
              });
            },
            selRange(A) {
              A.target.setSelectionRange(...A.detail.selRange);
            },
            charLimit: /* @__PURE__ */ u((A) => {
              const {
                charLimit: y
              } = A.detail, {
                target: w
              } = A;
              if (y === 0) {
                w.removeAttribute("maxLength");
                return;
              }
              w.setAttribute("maxLength", y);
              let _ = h.userValue;
              !_ || _.length <= y || (_ = _.slice(0, y), w.value = h.userValue = _, t.setValue(e, {
                value: _
              }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: _,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: w.selectionStart,
                  selEnd: w.selectionEnd
                }
              }));
            }, "charLimit")
          };
          this._dispatchEventFromSandbox(p, d);
        }), s.addEventListener("keydown", (d) => {
          h.commitKey = 1;
          let p = -1;
          if (d.key === "Escape" ? p = 0 : d.key === "Enter" && !this.data.multiLine ? p = 2 : d.key === "Tab" && (h.commitKey = 3), p === -1)
            return;
          const {
            value: A
          } = d.target;
          h.lastCommittedValue !== A && (h.lastCommittedValue = A, h.userValue = A, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: A,
              willCommit: !0,
              commitKey: p,
              selStart: d.target.selectionStart,
              selEnd: d.target.selectionEnd
            }
          }));
        });
        const c = l;
        l = null, s.addEventListener("blur", (d) => {
          if (!h.focused || !d.relatedTarget)
            return;
          this.data.actions?.Blur || (h.focused = !1);
          const {
            value: p
          } = d.target;
          h.userValue = p, h.lastCommittedValue !== p && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: p,
              willCommit: !0,
              commitKey: h.commitKey,
              selStart: d.target.selectionStart,
              selEnd: d.target.selectionEnd
            }
          }), c(d);
        }), this.data.actions?.Keystroke && s.addEventListener("beforeinput", (d) => {
          h.lastCommittedValue = null;
          const {
            data: p,
            target: A
          } = d, {
            value: y,
            selectionStart: w,
            selectionEnd: _
          } = A;
          let v = w, S = _;
          switch (d.inputType) {
            case "deleteWordBackward": {
              const x = y.substring(0, w).match(/\w*[^\w]*$/);
              x && (v -= x[0].length);
              break;
            }
            case "deleteWordForward": {
              const x = y.substring(w).match(/^[^\w]*\w*/);
              x && (S += x[0].length);
              break;
            }
            case "deleteContentBackward":
              w === _ && (v -= 1);
              break;
            case "deleteContentForward":
              w === _ && (S += 1);
              break;
          }
          d.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              change: p || "",
              willCommit: !1,
              selStart: v,
              selEnd: S
            }
          });
        }), this._setEventListeners(s, h, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (d) => d.target.value);
      }
      if (l && s.addEventListener("blur", l), this.data.comb) {
        const d = (this.data.rect[2] - this.data.rect[0]) / a;
        s.classList.add("comb"), s.style.letterSpacing = `calc(${d}px * var(--scale-factor) - 1ch)`;
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
};
u(up, "TextWidgetAnnotationElement");
let iu = up;
const fp = class fp extends li {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
};
u(fp, "SignatureWidgetAnnotationElement");
let nu = fp;
const pp = class pp extends li {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return lr.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = Gh, r.addEventListener("change", (a) => {
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
u(pp, "CheckboxWidgetAnnotationElement");
let ru = pp;
const gp = class gp extends li {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (lr.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = Gh, r.addEventListener("change", (a) => {
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
          value: /* @__PURE__ */ u((l) => {
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
u(gp, "RadioButtonWidgetAnnotationElement");
let $l = gp;
const mp = class mp extends Bl {
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
u(mp, "PushButtonWidgetAnnotationElement");
let au = mp;
const bp = class bp extends li {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    lr.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = Gh;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (c) => {
      const d = this.data.defaultFieldValue;
      for (const p of i.options)
        p.selected = p.value === d;
    });
    for (const c of this.data.options) {
      const d = document.createElement("option");
      d.textContent = c.displayValue, d.value = c.exportValue, s.value.includes(c.exportValue) && (d.setAttribute("selected", !0), r = !1), i.append(d);
    }
    let a = null;
    if (r) {
      const c = document.createElement("option");
      c.value = " ", c.setAttribute("hidden", !0), c.setAttribute("selected", !0), i.prepend(c), a = /* @__PURE__ */ u(() => {
        c.remove(), i.removeEventListener("input", a), a = null;
      }, "removeEmptyEntry"), i.addEventListener("input", a);
    }
    const o = /* @__PURE__ */ u((c) => {
      const d = c ? "value" : "textContent", {
        options: p,
        multiple: A
      } = i;
      return A ? Array.prototype.filter.call(p, (y) => y.selected).map((y) => y[d]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][d];
    }, "getValue");
    let h = o(!1);
    const l = /* @__PURE__ */ u((c) => {
      const d = c.target.options;
      return Array.prototype.map.call(d, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    }, "getItems");
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (c) => {
      const d = {
        value(p) {
          a?.();
          const A = p.detail.value, y = new Set(Array.isArray(A) ? A : [A]);
          for (const w of i.options)
            w.selected = y.has(w.value);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        multipleSelection(p) {
          i.multiple = !0;
        },
        remove(p) {
          const A = i.options, y = p.detail.remove;
          A[y].selected = !1, i.remove(y), A.length > 0 && Array.prototype.findIndex.call(A, (_) => _.selected) === -1 && (A[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        clear(p) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), h = o(!1);
        },
        insert(p) {
          const {
            index: A,
            displayValue: y,
            exportValue: w
          } = p.detail.insert, _ = i.children[A], v = document.createElement("option");
          v.textContent = y, v.value = w, _ ? _.before(v) : i.append(v), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        items(p) {
          const {
            items: A
          } = p.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const y of A) {
            const {
              displayValue: w,
              exportValue: _
            } = y, v = document.createElement("option");
            v.textContent = w, v.value = _, i.append(v);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p)
          }), h = o(!1);
        },
        indices(p) {
          const A = new Set(p.detail.indices);
          for (const y of p.target.options)
            y.selected = A.has(y.index);
          t.setValue(e, {
            value: o(!0)
          }), h = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(d, c);
    }), i.addEventListener("input", (c) => {
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
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (c) => c.target.value)) : i.addEventListener("input", function(c) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
};
u(bp, "ChoiceWidgetAnnotationElement");
let ou = bp;
const Ap = class Ap extends wt {
  constructor(t) {
    const {
      data: e,
      elements: s
    } = t;
    super(t, {
      isRenderable: wt._hasPopupData(e)
    }), this.elements = s, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = this.popup = new hu({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), e = [];
    for (const s of this.elements)
      s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
    return this.container.setAttribute("aria-controls", e.map((s) => `${Ju}${s}`).join(",")), this.container;
  }
};
u(Ap, "PopupAnnotationElement");
let uo = Ap;
var ta, fc, pc, ea, Fn, bt, Ys, sa, oh, hh, ia, Ks, Ke, Qs, lh, Js, ch, On, Hn, it, ll, lu, tm, em, sm, im, cl, dl, cu;
const yp = class yp {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: h,
    rect: l,
    parentRect: c,
    open: d
  }) {
    m(this, it);
    m(this, ta, b(this, it, sm).bind(this));
    m(this, fc, b(this, it, cu).bind(this));
    m(this, pc, b(this, it, dl).bind(this));
    m(this, ea, b(this, it, cl).bind(this));
    m(this, Fn, null);
    m(this, bt, null);
    m(this, Ys, null);
    m(this, sa, null);
    m(this, oh, null);
    m(this, hh, null);
    m(this, ia, null);
    m(this, Ks, !1);
    m(this, Ke, null);
    m(this, Qs, null);
    m(this, lh, null);
    m(this, Js, null);
    m(this, ch, null);
    m(this, On, null);
    m(this, Hn, !1);
    f(this, bt, t), f(this, ch, i), f(this, Ys, a), f(this, Js, o), f(this, hh, h), f(this, Fn, e), f(this, lh, l), f(this, ia, c), f(this, oh, s), f(this, sa, Cl.toDateObject(r)), this.trigger = s.flatMap((p) => p.getElementsToTriggerPopup());
    for (const p of this.trigger)
      p.addEventListener("click", n(this, ea)), p.addEventListener("mouseenter", n(this, pc)), p.addEventListener("mouseleave", n(this, fc)), p.classList.add("popupTriggerArea");
    for (const p of s)
      p.container?.addEventListener("keydown", n(this, ta));
    n(this, bt).hidden = !0, d && b(this, it, cl).call(this);
  }
  render() {
    if (n(this, Ke))
      return;
    const t = f(this, Ke, document.createElement("div"));
    if (t.className = "popup", n(this, Fn)) {
      const r = t.style.outlineColor = N.makeHexColor(...n(this, Fn));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)` : t.style.backgroundColor = N.makeHexColor(...n(this, Fn).map((o) => Math.floor(0.7 * (255 - o) + o)));
    }
    const e = document.createElement("span");
    e.className = "header";
    const s = document.createElement("h1");
    if (e.append(s), {
      dir: s.dir,
      str: s.textContent
    } = n(this, ch), t.append(e), n(this, sa)) {
      const r = document.createElement("span");
      r.classList.add("popupDate"), r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, sa).valueOf()
      })), e.append(r);
    }
    const i = n(this, it, ll);
    if (i)
      Hl.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
    else {
      const r = this._formatContents(n(this, Ys));
      t.append(r);
    }
    n(this, bt).append(t);
  }
  _formatContents({
    str: t,
    dir: e
  }) {
    const s = document.createElement("p");
    s.classList.add("popupContent"), s.dir = e;
    const i = t.split(/(?:\r\n?|\n)/);
    for (let r = 0, a = i.length; r < a; ++r) {
      const o = i[r];
      s.append(document.createTextNode(o)), r < a - 1 && s.append(document.createElement("br"));
    }
    return s;
  }
  updateEdited({
    rect: t,
    popupContent: e
  }) {
    n(this, On) || f(this, On, {
      contentsObj: n(this, Ys),
      richText: n(this, Js)
    }), t && f(this, Qs, null), e && (f(this, Js, b(this, it, em).call(this, e)), f(this, Ys, null)), n(this, Ke)?.remove(), f(this, Ke, null);
  }
  resetEdited() {
    n(this, On) && ({
      contentsObj: Zt(this, Ys)._,
      richText: Zt(this, Js)._
    } = n(this, On), f(this, On, null), n(this, Ke)?.remove(), f(this, Ke, null), f(this, Qs, null));
  }
  forceHide() {
    f(this, Hn, this.isVisible), n(this, Hn) && (n(this, bt).hidden = !0);
  }
  maybeShow() {
    n(this, Hn) && (n(this, Ke) || b(this, it, dl).call(this), f(this, Hn, !1), n(this, bt).hidden = !1);
  }
  get isVisible() {
    return n(this, bt).hidden === !1;
  }
};
ta = new WeakMap(), fc = new WeakMap(), pc = new WeakMap(), ea = new WeakMap(), Fn = new WeakMap(), bt = new WeakMap(), Ys = new WeakMap(), sa = new WeakMap(), oh = new WeakMap(), hh = new WeakMap(), ia = new WeakMap(), Ks = new WeakMap(), Ke = new WeakMap(), Qs = new WeakMap(), lh = new WeakMap(), Js = new WeakMap(), ch = new WeakMap(), On = new WeakMap(), Hn = new WeakMap(), it = new WeakSet(), ll = /* @__PURE__ */ u(function() {
  const t = n(this, Js), e = n(this, Ys);
  return t?.str && (!e?.str || e.str === t.str) && n(this, Js).html || null;
}, "#html"), lu = /* @__PURE__ */ u(function() {
  return n(this, it, ll)?.attributes?.style?.fontSize || 0;
}, "#fontSize"), tm = /* @__PURE__ */ u(function() {
  return n(this, it, ll)?.attributes?.style?.color || null;
}, "#fontColor"), em = /* @__PURE__ */ u(function(t) {
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
  }, i = {
    style: {
      color: n(this, it, tm),
      fontSize: n(this, it, lu) ? `calc(${n(this, it, lu)}px * var(--scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return s;
}, "#makePopupContent"), sm = /* @__PURE__ */ u(function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, Ks)) && b(this, it, cl).call(this);
}, "#keyDown"), im = /* @__PURE__ */ u(function() {
  if (n(this, Qs) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: r
      }
    }
  } = n(this, hh);
  let a = !!n(this, ia), o = a ? n(this, ia) : n(this, lh);
  for (const y of n(this, oh))
    if (!o || N.intersect(y.data.rect, o) !== null) {
      o = y.data.rect, a = !0;
      break;
    }
  const h = N.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, d = h[0] + c, p = h[1];
  f(this, Qs, [100 * (d - i) / e, 100 * (p - r) / s]);
  const {
    style: A
  } = n(this, bt);
  A.left = `${n(this, Qs)[0]}%`, A.top = `${n(this, Qs)[1]}%`;
}, "#setPosition"), cl = /* @__PURE__ */ u(function() {
  f(this, Ks, !n(this, Ks)), n(this, Ks) ? (b(this, it, dl).call(this), n(this, bt).addEventListener("click", n(this, ea)), n(this, bt).addEventListener("keydown", n(this, ta))) : (b(this, it, cu).call(this), n(this, bt).removeEventListener("click", n(this, ea)), n(this, bt).removeEventListener("keydown", n(this, ta)));
}, "#toggle"), dl = /* @__PURE__ */ u(function() {
  n(this, Ke) || this.render(), this.isVisible ? n(this, Ks) && n(this, bt).classList.add("focused") : (b(this, it, im).call(this), n(this, bt).hidden = !1, n(this, bt).style.zIndex = parseInt(n(this, bt).style.zIndex) + 1e3);
}, "#show"), cu = /* @__PURE__ */ u(function() {
  n(this, bt).classList.remove("focused"), !(n(this, Ks) || !this.isVisible) && (n(this, bt).hidden = !0, n(this, bt).style.zIndex = parseInt(n(this, bt).style.zIndex) - 1e3);
}, "#hide"), u(yp, "PopupElement");
let hu = yp;
const wp = class wp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = j.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
};
u(wp, "FreeTextAnnotationElement");
let Gl = wp;
var dh;
const vp = class vp extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, dh, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Wi(e.rect), r = this.svgFactory.create(s, i, !0), a = f(this, dh, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, dh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
dh = new WeakMap(), u(vp, "LineAnnotationElement");
let du = vp;
var uh;
const _p = class _p extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, uh, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Wi(e.rect), r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, uh, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, uh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
uh = new WeakMap(), u(_p, "SquareAnnotationElement");
let uu = _p;
var fh;
const Sp = class Sp extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, fh, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const e = this.data, {
      width: s,
      height: i
    } = Wi(e.rect), r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = f(this, fh, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, fh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
fh = new WeakMap(), u(Sp, "CircleAnnotationElement");
let fu = Sp;
var ph;
const Ep = class Ep extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, ph, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: r
      }
    } = this;
    if (!s)
      return this.container;
    const {
      width: a,
      height: o
    } = Wi(e), h = this.svgFactory.create(a, o, !0);
    let l = [];
    for (let d = 0, p = s.length; d < p; d += 2) {
      const A = s[d] - e[0], y = e[3] - s[d + 1];
      l.push(`${A},${y}`);
    }
    l = l.join(" ");
    const c = f(this, ph, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", l), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), h.append(c), this.container.append(h), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, ph);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
ph = new WeakMap(), u(Ep, "PolylineAnnotationElement");
let zl = Ep;
const xp = class xp extends zl {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
};
u(xp, "PolygonAnnotationElement");
let pu = xp;
const Cp = class Cp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
};
u(Cp, "CaretAnnotationElement");
let gu = Cp;
var gh, Bn, mh, mu;
const Tp = class Tp extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, mh);
    m(this, gh, null);
    m(this, Bn, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? j.HIGHLIGHT : j.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: h,
      height: l
    } = b(this, mh, mu).call(this, s, e), c = this.svgFactory.create(h, l, !0), d = f(this, gh, this.svgFactory.createElement("svg:g"));
    c.append(d), d.setAttribute("stroke-width", r.width || 1), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.setAttribute("stroke-miterlimit", 10), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), d.setAttribute("transform", o);
    for (let p = 0, A = i.length; p < A; p++) {
      const y = this.svgFactory.createElement(this.svgElementName);
      n(this, Bn).push(y), y.setAttribute("points", i[p].join(",")), d.append(y);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, gh);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, h = n(this, Bn).length; o < h; o++)
        n(this, Bn)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: h,
        height: l
      } = b(this, mh, mu).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${h} ${l}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Bn);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
gh = new WeakMap(), Bn = new WeakMap(), mh = new WeakSet(), mu = /* @__PURE__ */ u(function(e, s) {
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
}, "#getTransform"), u(Tp, "InkAnnotationElement");
let fo = Tp;
const kp = class kp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = j.HIGHLIGHT;
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
  }
};
u(kp, "HighlightAnnotationElement");
let Ul = kp;
const Mp = class Mp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
};
u(Mp, "UnderlineAnnotationElement");
let bu = Mp;
const Pp = class Pp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
};
u(Pp, "SquigglyAnnotationElement");
let Au = Pp;
const Rp = class Rp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
};
u(Rp, "StrikeOutAnnotationElement");
let yu = Rp;
const Lp = class Lp extends wt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = j.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
};
u(Lp, "StampAnnotationElement");
let Vl = Lp;
var bh, Ah, vu;
const Ip = class Ip extends wt {
  constructor(e) {
    super(e, {
      isRenderable: !0
    });
    m(this, Ah);
    m(this, bh, null);
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
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, Ah, vu).bind(this)), f(this, bh, i);
    const {
      isMac: r
    } = Ut.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Ah, vu).call(this);
    }), !s.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, bh);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
bh = new WeakMap(), Ah = new WeakSet(), vu = /* @__PURE__ */ u(function() {
  this.downloadManager?.openOrDownloadData(this.content, this.filename);
}, "#download"), u(Ip, "FileAttachmentAnnotationElement");
let wu = Ip;
var yh, $n, Gn, wh, cr, nm, Su;
const Dp = class Dp {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o
  }) {
    m(this, cr);
    m(this, yh, null);
    m(this, $n, null);
    m(this, Gn, /* @__PURE__ */ new Map());
    m(this, wh, null);
    this.div = t, f(this, yh, e), f(this, $n, s), f(this, wh, o || null), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = i;
  }
  hasEditableAnnotations() {
    return n(this, Gn).size > 0;
  }
  async render(t) {
    const {
      annotations: e
    } = t, s = this.div;
    ar(s, this.viewport);
    const i = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: s,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new co(),
      annotationStorage: t.annotationStorage || new ao(),
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const a of e) {
      if (a.noHTML)
        continue;
      const o = a.annotationType === xt.POPUP;
      if (o) {
        const c = i.get(a.id);
        if (!c)
          continue;
        r.elements = c;
      } else {
        const {
          width: c,
          height: d
        } = Wi(a.rect);
        if (c <= 0 || d <= 0)
          continue;
      }
      r.data = a;
      const h = tu.create(r);
      if (!h.isRenderable)
        continue;
      if (!o && a.popupRef) {
        const c = i.get(a.popupRef);
        c ? c.push(h) : i.set(a.popupRef, [h]);
      }
      const l = h.render();
      a.hidden && (l.style.visibility = "hidden"), await b(this, cr, nm).call(this, l, a.id), h._isEditable && (n(this, Gn).set(h.data.id, h), this._annotationEditorUIManager?.renderAnnotationElement(h));
    }
    b(this, cr, Su).call(this);
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, ar(e, {
      rotation: t.rotation
    }), b(this, cr, Su).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, Gn).values());
  }
  getEditableAnnotation(t) {
    return n(this, Gn).get(t);
  }
};
yh = new WeakMap(), $n = new WeakMap(), Gn = new WeakMap(), wh = new WeakMap(), cr = new WeakSet(), nm = /* @__PURE__ */ u(async function(t, e) {
  const s = t.firstChild || t, i = s.id = `${Ju}${e}`, r = await n(this, wh)?.getAriaAttributes(i);
  if (r)
    for (const [a, o] of r)
      s.setAttribute(a, o);
  this.div.append(t), n(this, yh)?.moveElementInDOM(this.div, t, s, !1);
}, "#appendElement"), Su = /* @__PURE__ */ u(function() {
  if (!n(this, $n))
    return;
  const t = this.div;
  for (const [e, s] of n(this, $n)) {
    const i = t.querySelector(`[data-annotation-id="${e}"]`);
    if (!i)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: r
    } = i;
    r ? r.nodeName === "CANVAS" ? r.replaceWith(s) : r.classList.contains("annotationContent") ? r.after(s) : r.before(s) : i.append(s);
  }
  n(this, $n).clear();
}, "#setAnnotationCanvasMap"), u(Dp, "AnnotationLayer");
let _u = Dp;
const Wh = /\r\n?|\n/g;
var Qe, we, vh, zn, ve, St, rm, am, om, ul, oi, fl, pl, hm, xu, lm;
const nt = class nt extends mt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    m(this, St);
    m(this, Qe);
    m(this, we, "");
    m(this, vh, `${this.id}-editor`);
    m(this, zn, null);
    m(this, ve);
    f(this, Qe, e.color || nt._defaultColor || mt._defaultLineColor), f(this, ve, e.fontSize || nt._defaultFontSize);
  }
  static get _keyboardManager() {
    const e = nt.prototype, s = /* @__PURE__ */ u((a) => a.isEmpty(), "arrowChecker"), i = hr.TRANSLATE_SMALL, r = hr.TRANSLATE_BIG;
    return q(this, "_keyboardManager", new or([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    mt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case K.FREETEXT_SIZE:
        nt._defaultFontSize = s;
        break;
      case K.FREETEXT_COLOR:
        nt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case K.FREETEXT_SIZE:
        b(this, St, rm).call(this, s);
        break;
      case K.FREETEXT_COLOR:
        b(this, St, am).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[K.FREETEXT_SIZE, nt._defaultFontSize], [K.FREETEXT_COLOR, nt._defaultColor || mt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[K.FREETEXT_SIZE, n(this, ve)], [K.FREETEXT_COLOR, n(this, Qe)]];
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-nt._internalPadding * e, -(nt._internalPadding + n(this, ve)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(j.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), f(this, zn, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, zn));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    });
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, vh)), this._isDraggable = !0, n(this, zn)?.abort(), f(this, zn, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
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
    const e = n(this, we), s = f(this, we, b(this, St, om).call(this).trimEnd());
    if (e === s)
      return;
    const i = /* @__PURE__ */ u((r) => {
      if (f(this, we, r), !r) {
        this.remove();
        return;
      }
      b(this, St, pl).call(this), this._uiManager.rebuild(this), b(this, St, ul).call(this);
    }, "setText");
    this.addCommands({
      cmd: /* @__PURE__ */ u(() => {
        i(s);
      }, "cmd"),
      undo: /* @__PURE__ */ u(() => {
        i(e);
      }, "undo"),
      mustExec: !1
    }), b(this, St, ul).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(e) {
    this.enterInEditMode();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    nt._keyboardManager.exec(this, e);
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
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this.width && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, vh)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, ve)}px * var(--scale-factor))`, i.color = n(this, Qe), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), Tl(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [h, l] = this.getInitialTranslation();
        [h, l] = this.pageTranslationToScreen(h, l);
        const [c, d] = this.pageDimensions, [p, A] = this.pageTranslation;
        let y, w;
        switch (this.rotation) {
          case 0:
            y = e + (o[0] - p) / c, w = s + this.height - (o[1] - A) / d;
            break;
          case 90:
            y = e + (o[0] - p) / c, w = s - (o[1] - A) / d, [h, l] = [l, -h];
            break;
          case 180:
            y = e - this.width + (o[0] - p) / c, w = s - (o[1] - A) / d, [h, l] = [-h, -l];
            break;
          case 270:
            y = e + (o[0] - p - this.height * d) / c, w = s + (o[1] - A - this.width * c) / d, [h, l] = [-l, h];
            break;
        }
        this.setAt(y * r, w * a, h, l);
      } else
        this.setAt(e * r, s * a, this.width * r, this.height * a);
      b(this, St, pl).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, w, _;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(y = nt, oi, xu).call(y, s.getData("text") || "").replaceAll(Wh, `
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
      if (d.push(h.nodeValue.slice(l).replaceAll(Wh, "")), v !== this.editorDiv) {
        let S = c;
        for (const x of this.editorDiv.childNodes) {
          if (x === v) {
            S = d;
            continue;
          }
          S.push(b(w = nt, oi, fl).call(w, x));
        }
      }
      c.push(h.nodeValue.slice(0, l).replaceAll(Wh, ""));
    } else if (h === this.editorDiv) {
      let v = c, S = 0;
      for (const x of this.editorDiv.childNodes)
        S++ === l && (v = d), v.push(b(_ = nt, oi, fl).call(_, x));
    }
    f(this, we, `${c.join(`
`)}${r}${d.join(`
`)}`), b(this, St, pl).call(this);
    const p = new Range();
    let A = c.reduce((v, S) => v + S.length, 0);
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const S = v.nodeValue.length;
        if (A <= S) {
          p.setStart(v, A), p.setEnd(v, A);
          break;
        }
        A -= S;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof Gl) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: h,
            fontColor: l
          },
          rect: c,
          rotation: d,
          id: p,
          popupRef: A
        },
        textContent: y,
        textPosition: w,
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      if (!y || y.length === 0)
        return null;
      r = e = {
        annotationType: j.FREETEXT,
        color: Array.from(l),
        fontSize: h,
        value: y.join(`
`),
        position: w,
        pageIndex: _ - 1,
        rect: c.slice(0),
        rotation: d,
        id: p,
        deleted: !1,
        popupRef: A
      };
    }
    const a = await super.deserialize(e, s, i);
    return f(a, ve, e.fontSize), f(a, Qe, N.makeHexColor(...e.color)), f(a, we, b(o = nt, oi, xu).call(o, e.value)), a.annotationElementId = e.id || null, a._initialData = r, a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = nt._internalPadding * this.parentScale, i = this.getRect(s, s), r = mt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : n(this, Qe)), a = {
      annotationType: j.FREETEXT,
      color: r,
      fontSize: n(this, ve),
      value: b(this, St, hm).call(this),
      pageIndex: this.pageIndex,
      rect: i,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? a : this.annotationElementId && !b(this, St, lm).call(this, a) ? null : (a.id = this.annotationElementId, a);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (this.deleted)
      return s;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, ve)}px * var(--scale-factor))`, i.color = n(this, Qe), s.replaceChildren();
    for (const a of n(this, we).split(`
`)) {
      const o = document.createElement("div");
      o.append(a ? document.createTextNode(a) : document.createElement("br")), s.append(o);
    }
    const r = nt._internalPadding * this.parentScale;
    return e.updateEdited({
      rect: this.getRect(r, r),
      popupContent: n(this, we)
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
Qe = new WeakMap(), we = new WeakMap(), vh = new WeakMap(), zn = new WeakMap(), ve = new WeakMap(), St = new WeakSet(), rm = /* @__PURE__ */ u(function(e) {
  const s = /* @__PURE__ */ u((r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--scale-factor))`, this.translate(0, -(r - n(this, ve)) * this.parentScale), f(this, ve, r), b(this, St, ul).call(this);
  }, "setFontsize"), i = n(this, ve);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: K.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, "#updateFontSize"), am = /* @__PURE__ */ u(function(e) {
  const s = /* @__PURE__ */ u((r) => {
    f(this, Qe, this.editorDiv.style.color = r);
  }, "setColor"), i = n(this, Qe);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: K.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, "#updateColor"), om = /* @__PURE__ */ u(function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    s?.nodeType === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = nt, oi, fl).call(i, r)), s = r);
  return e.join(`
`);
}, "#extractText"), ul = /* @__PURE__ */ u(function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, h = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", h);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, "#setEditorDimensions"), oi = new WeakSet(), fl = /* @__PURE__ */ u(function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Wh, "");
}, "#getNodeContent"), pl = /* @__PURE__ */ u(function() {
  if (this.editorDiv.replaceChildren(), !!n(this, we))
    for (const e of n(this, we).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, "#setContent"), hm = /* @__PURE__ */ u(function() {
  return n(this, we).replaceAll(" ", " ");
}, "#serializeContent"), xu = /* @__PURE__ */ u(function(e) {
  return e.replaceAll(" ", " ");
}, "#deserializeContent"), lm = /* @__PURE__ */ u(function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, h) => o !== r[h]) || e.pageIndex !== a;
}, "#hasElementChanged"), m(nt, oi), u(nt, "FreeTextEditor"), $(nt, "_freeTextDefaultContent", ""), $(nt, "_internalPadding", 0), $(nt, "_defaultColor", null), $(nt, "_defaultFontSize", 10), $(nt, "_type", "freetext"), $(nt, "_editorType", j.FREETEXT);
let Eu = nt;
const gc = class gc {
  toSVGPath() {
    rt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    rt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    rt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, r, a) {
    a ||= new Float32Array(t.length);
    for (let o = 0, h = t.length; o < h; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a ||= new Float32Array(t.length);
    for (let o = 0, h = t.length; o < h; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i ||= new Float32Array(t.length);
    for (let r = 0, a = t.length; r < a; r += 2)
      i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
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
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
};
u(gc, "Outline"), $(gc, "PRECISION", 1e-4);
let R = gc;
var _e, Je, na, ra, Ss, X, Un, Vn, _h, Sh, aa, oa, Ni, Eh, mc, bc, kt, Va, cm, dm, um, fm, pm, gm;
const us = class us {
  constructor({
    x: t,
    y: e
  }, s, i, r, a, o = 0) {
    m(this, kt);
    m(this, _e);
    m(this, Je, []);
    m(this, na);
    m(this, ra);
    m(this, Ss, []);
    m(this, X, new Float32Array(18));
    m(this, Un);
    m(this, Vn);
    m(this, _h);
    m(this, Sh);
    m(this, aa);
    m(this, oa);
    m(this, Ni, []);
    f(this, _e, s), f(this, oa, r * i), f(this, ra, a), n(this, X).set([NaN, NaN, NaN, NaN, t, e], 6), f(this, na, o), f(this, Sh, n(us, Eh) * i), f(this, _h, n(us, bc) * i), f(this, aa, i), n(this, Ni).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, X)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    f(this, Un, t), f(this, Vn, e);
    const [s, i, r, a] = n(this, _e);
    let [o, h, l, c] = n(this, X).subarray(8, 12);
    const d = t - l, p = e - c, A = Math.hypot(d, p);
    if (A < n(this, _h))
      return !1;
    const y = A - n(this, Sh), w = y / A, _ = w * d, v = w * p;
    let S = o, x = h;
    o = l, h = c, l += _, c += v, n(this, Ni)?.push(t, e);
    const E = -v / y, C = _ / y, k = E * n(this, oa), T = C * n(this, oa);
    return n(this, X).set(n(this, X).subarray(2, 8), 0), n(this, X).set([l + k, c + T], 4), n(this, X).set(n(this, X).subarray(14, 18), 12), n(this, X).set([l - k, c - T], 16), isNaN(n(this, X)[6]) ? (n(this, Ss).length === 0 && (n(this, X).set([o + k, h + T], 2), n(this, Ss).push(NaN, NaN, NaN, NaN, (o + k - s) / r, (h + T - i) / a), n(this, X).set([o - k, h - T], 14), n(this, Je).push(NaN, NaN, NaN, NaN, (o - k - s) / r, (h - T - i) / a)), n(this, X).set([S, x, o, h, l, c], 6), !this.isEmpty()) : (n(this, X).set([S, x, o, h, l, c], 6), Math.abs(Math.atan2(x - h, S - o) - Math.atan2(v, _)) < Math.PI / 2 ? ([o, h, l, c] = n(this, X).subarray(2, 6), n(this, Ss).push(NaN, NaN, NaN, NaN, ((o + l) / 2 - s) / r, ((h + c) / 2 - i) / a), [o, h, S, x] = n(this, X).subarray(14, 18), n(this, Je).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((x + h) / 2 - i) / a), !0) : ([S, x, o, h, l, c] = n(this, X).subarray(0, 6), n(this, Ss).push(((S + 5 * o) / 6 - s) / r, ((x + 5 * h) / 6 - i) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - i) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - i) / a), [l, c, o, h, S, x] = n(this, X).subarray(12, 18), n(this, Je).push(((S + 5 * o) / 6 - s) / r, ((x + 5 * h) / 6 - i) / a, ((5 * o + l) / 6 - s) / r, ((5 * h + c) / 6 - i) / a, ((o + l) / 2 - s) / r, ((h + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Ss), e = n(this, Je);
    if (isNaN(n(this, X)[6]) && !this.isEmpty())
      return b(this, kt, cm).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, kt, um).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, kt, dm).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new Wl(t, e, s, i, r, a);
  }
  getOutlines() {
    const t = n(this, Ss), e = n(this, Je), s = n(this, X), [i, r, a, o] = n(this, _e), h = new Float32Array((n(this, Ni)?.length ?? 0) + 2);
    for (let d = 0, p = h.length - 2; d < p; d += 2)
      h[d] = (n(this, Ni)[d] - i) / a, h[d + 1] = (n(this, Ni)[d + 1] - r) / o;
    if (h[h.length - 2] = (n(this, Un) - i) / a, h[h.length - 1] = (n(this, Vn) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, kt, fm).call(this, h);
    const l = new Float32Array(n(this, Ss).length + 24 + n(this, Je).length);
    let c = t.length;
    for (let d = 0; d < c; d += 2) {
      if (isNaN(t[d])) {
        l[d] = l[d + 1] = NaN;
        continue;
      }
      l[d] = t[d], l[d + 1] = t[d + 1];
    }
    c = b(this, kt, gm).call(this, l, c);
    for (let d = e.length - 6; d >= 6; d -= 6)
      for (let p = 0; p < 6; p += 2) {
        if (isNaN(e[d + p])) {
          l[c] = l[c + 1] = NaN, c += 2;
          continue;
        }
        l[c] = e[d + p], l[c + 1] = e[d + p + 1], c += 2;
      }
    return b(this, kt, pm).call(this, l, c), this.newFreeDrawOutline(l, h, n(this, _e), n(this, aa), n(this, na), n(this, ra));
  }
};
_e = new WeakMap(), Je = new WeakMap(), na = new WeakMap(), ra = new WeakMap(), Ss = new WeakMap(), X = new WeakMap(), Un = new WeakMap(), Vn = new WeakMap(), _h = new WeakMap(), Sh = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), Ni = new WeakMap(), Eh = new WeakMap(), mc = new WeakMap(), bc = new WeakMap(), kt = new WeakSet(), Va = /* @__PURE__ */ u(function() {
  const t = n(this, X).subarray(4, 6), e = n(this, X).subarray(16, 18), [s, i, r, a] = n(this, _e);
  return [(n(this, Un) + (t[0] - e[0]) / 2 - s) / r, (n(this, Vn) + (t[1] - e[1]) / 2 - i) / a, (n(this, Un) + (e[0] - t[0]) / 2 - s) / r, (n(this, Vn) + (e[1] - t[1]) / 2 - i) / a];
}, "#getLastCoords"), cm = /* @__PURE__ */ u(function() {
  const [t, e, s, i] = n(this, _e), [r, a, o, h] = b(this, kt, Va).call(this);
  return `M${(n(this, X)[2] - t) / s} ${(n(this, X)[3] - e) / i} L${(n(this, X)[4] - t) / s} ${(n(this, X)[5] - e) / i} L${r} ${a} L${o} ${h} L${(n(this, X)[16] - t) / s} ${(n(this, X)[17] - e) / i} L${(n(this, X)[14] - t) / s} ${(n(this, X)[15] - e) / i} Z`;
}, "#toSVGPathTwoPoints"), dm = /* @__PURE__ */ u(function(t) {
  const e = n(this, Je);
  t.push(`L${e[4]} ${e[5]} Z`);
}, "#toSVGPathStart"), um = /* @__PURE__ */ u(function(t) {
  const [e, s, i, r] = n(this, _e), a = n(this, X).subarray(4, 6), o = n(this, X).subarray(16, 18), [h, l, c, d] = b(this, kt, Va).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${h} ${l} L${c} ${d} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, "#toSVGPathEnd"), fm = /* @__PURE__ */ u(function(t) {
  const e = n(this, X), [s, i, r, a] = n(this, _e), [o, h, l, c] = b(this, kt, Va).call(this), d = new Float32Array(36);
  return d.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(d, t, n(this, _e), n(this, aa), n(this, na), n(this, ra));
}, "#getOutlineTwoPoints"), pm = /* @__PURE__ */ u(function(t, e) {
  const s = n(this, Je);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, "#getOutlineStart"), gm = /* @__PURE__ */ u(function(t, e) {
  const s = n(this, X).subarray(4, 6), i = n(this, X).subarray(16, 18), [r, a, o, h] = n(this, _e), [l, c, d, p] = b(this, kt, Va).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / h, NaN, NaN, NaN, NaN, l, c, NaN, NaN, NaN, NaN, d, p, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / h], e), e += 24;
}, "#getOutlineEnd"), u(us, "FreeDrawOutliner"), m(us, Eh, 8), m(us, mc, 2), m(us, bc, n(us, Eh) + n(us, mc));
let jl = us;
var ha, jn, Zs, xh, Se, Ch, yt, Ac, mm;
const Np = class Np extends R {
  constructor(e, s, i, r, a, o) {
    super();
    m(this, Ac);
    m(this, ha);
    m(this, jn, new Float32Array(4));
    m(this, Zs);
    m(this, xh);
    m(this, Se);
    m(this, Ch);
    m(this, yt);
    f(this, yt, e), f(this, Se, s), f(this, ha, i), f(this, Ch, r), f(this, Zs, a), f(this, xh, o), this.lastPoint = [NaN, NaN], b(this, Ac, mm).call(this, o);
    const [h, l, c, d] = n(this, jn);
    for (let p = 0, A = e.length; p < A; p += 2)
      e[p] = (e[p] - h) / c, e[p + 1] = (e[p + 1] - l) / d;
    for (let p = 0, A = s.length; p < A; p += 2)
      s[p] = (s[p] - h) / c, s[p + 1] = (s[p + 1] - l) / d;
  }
  toSVGPath() {
    const e = [`M${n(this, yt)[4]} ${n(this, yt)[5]}`];
    for (let s = 6, i = n(this, yt).length; s < i; s += 6) {
      if (isNaN(n(this, yt)[s])) {
        e.push(`L${n(this, yt)[s + 4]} ${n(this, yt)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, yt)[s]} ${n(this, yt)[s + 1]} ${n(this, yt)[s + 2]} ${n(this, yt)[s + 3]} ${n(this, yt)[s + 4]} ${n(this, yt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, h = r - s;
    let l, c;
    switch (a) {
      case 0:
        l = R._rescale(n(this, yt), e, r, o, -h), c = R._rescale(n(this, Se), e, r, o, -h);
        break;
      case 90:
        l = R._rescaleAndSwap(n(this, yt), e, s, o, h), c = R._rescaleAndSwap(n(this, Se), e, s, o, h);
        break;
      case 180:
        l = R._rescale(n(this, yt), i, s, -o, h), c = R._rescale(n(this, Se), i, s, -o, h);
        break;
      case 270:
        l = R._rescaleAndSwap(n(this, yt), i, r, -o, -h), c = R._rescaleAndSwap(n(this, Se), i, r, -o, -h);
        break;
    }
    return {
      outline: Array.from(l),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, jn);
  }
  newOutliner(e, s, i, r, a, o = 0) {
    return new jl(e, s, i, r, a, o);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, jn), [h, l, c, d] = n(this, ha), p = a * c, A = o * d, y = i * c + h, w = r * d + l, _ = this.newOutliner({
      x: n(this, Se)[0] * p + y,
      y: n(this, Se)[1] * A + w
    }, n(this, ha), n(this, Ch), e, n(this, xh), s ?? n(this, Zs));
    for (let v = 2; v < n(this, Se).length; v += 2)
      _.add({
        x: n(this, Se)[v] * p + y,
        y: n(this, Se)[v + 1] * A + w
      });
    return _.getOutlines();
  }
};
ha = new WeakMap(), jn = new WeakMap(), Zs = new WeakMap(), xh = new WeakMap(), Se = new WeakMap(), Ch = new WeakMap(), yt = new WeakMap(), Ac = new WeakSet(), mm = /* @__PURE__ */ u(function(e) {
  const s = n(this, yt);
  let i = s[4], r = s[5], a = i, o = r, h = i, l = r, c = i, d = r;
  const p = e ? Math.max : Math.min;
  for (let y = 6, w = s.length; y < w; y += 6) {
    if (isNaN(s[y]))
      a = Math.min(a, s[y + 4]), o = Math.min(o, s[y + 5]), h = Math.max(h, s[y + 4]), l = Math.max(l, s[y + 5]), d < s[y + 5] ? (c = s[y + 4], d = s[y + 5]) : d === s[y + 5] && (c = p(c, s[y + 4]));
    else {
      const _ = N.bezierBoundingBox(i, r, ...s.slice(y, y + 6));
      a = Math.min(a, _[0]), o = Math.min(o, _[1]), h = Math.max(h, _[2]), l = Math.max(l, _[3]), d < _[3] ? (c = _[2], d = _[3]) : d === _[3] && (c = p(c, _[2]));
    }
    i = s[y + 4], r = s[y + 5];
  }
  const A = n(this, jn);
  A[0] = a - n(this, Zs), A[1] = o - n(this, Zs), A[2] = h - a + 2 * n(this, Zs), A[3] = l - o + 2 * n(this, Zs), this.lastPoint = [c, d];
}, "#computeMinMax"), u(Np, "FreeDrawOutline");
let Wl = Np;
var Th, kh, Fi, Ze, ae, bm, gl, Am, ym, Cu;
const Fp = class Fp {
  constructor(t, e = 0, s = 0, i = !0) {
    m(this, ae);
    m(this, Th);
    m(this, kh);
    m(this, Fi, []);
    m(this, Ze, []);
    let r = 1 / 0, a = -1 / 0, o = 1 / 0, h = -1 / 0;
    const l = 10 ** -4;
    for (const {
      x: _,
      y: v,
      width: S,
      height: x
    } of t) {
      const E = Math.floor((_ - e) / l) * l, C = Math.ceil((_ + S + e) / l) * l, k = Math.floor((v - e) / l) * l, T = Math.ceil((v + x + e) / l) * l, F = [E, k, T, !0], O = [C, k, T, !1];
      n(this, Fi).push(F, O), r = Math.min(r, E), a = Math.max(a, C), o = Math.min(o, k), h = Math.max(h, T);
    }
    const c = a - r + 2 * s, d = h - o + 2 * s, p = r - s, A = o - s, y = n(this, Fi).at(i ? -1 : -2), w = [y[0], y[2]];
    for (const _ of n(this, Fi)) {
      const [v, S, x] = _;
      _[0] = (v - p) / c, _[1] = (S - A) / d, _[2] = (x - A) / d;
    }
    f(this, Th, new Float32Array([p, A, c, d])), f(this, kh, w);
  }
  getOutlines() {
    n(this, Fi).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, Fi))
      e[3] ? (t.push(...b(this, ae, Cu).call(this, e)), b(this, ae, Am).call(this, e)) : (b(this, ae, ym).call(this, e), t.push(...b(this, ae, Cu).call(this, e)));
    return b(this, ae, bm).call(this, t);
  }
};
Th = new WeakMap(), kh = new WeakMap(), Fi = new WeakMap(), Ze = new WeakMap(), ae = new WeakSet(), bm = /* @__PURE__ */ u(function(t) {
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
  const i = [];
  let r;
  for (; s.size > 0; ) {
    const a = s.values().next().value;
    let [o, h, l, c, d] = a;
    s.delete(a);
    let p = o, A = h;
    for (r = [o, l], i.push(r); ; ) {
      let y;
      if (s.has(c))
        y = c;
      else if (s.has(d))
        y = d;
      else
        break;
      s.delete(y), [o, h, l, c, d] = y, p !== o && (r.push(p, A, o, A === h ? h : l), p = o), A = A === h ? l : h;
    }
    r.push(p, A);
  }
  return new Tu(i, n(this, Th), n(this, kh));
}, "#getOutlines"), gl = /* @__PURE__ */ u(function(t) {
  const e = n(this, Ze);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, "#binarySearch"), Am = /* @__PURE__ */ u(function([, t, e]) {
  const s = b(this, ae, gl).call(this, t);
  n(this, Ze).splice(s, 0, [t, e]);
}, "#insert"), ym = /* @__PURE__ */ u(function([, t, e]) {
  const s = b(this, ae, gl).call(this, t);
  for (let i = s; i < n(this, Ze).length; i++) {
    const [r, a] = n(this, Ze)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Ze).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, Ze)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Ze).splice(i, 1);
      return;
    }
  }
}, "#remove"), Cu = /* @__PURE__ */ u(function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, ae, gl).call(this, i);
  for (let o = 0; o < a; o++) {
    const [h, l] = n(this, Ze)[o];
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
}, "#breakEdge"), u(Fp, "HighlightOutliner");
let po = Fp;
var Mh, la;
const Op = class Op extends R {
  constructor(e, s, i) {
    super();
    m(this, Mh);
    m(this, la);
    f(this, la, e), f(this, Mh, s), this.lastPoint = i;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, la)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], h = s[a + 1];
        o === i ? (e.push(`V${h}`), r = h) : h === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], h = i - e, l = r - s;
    for (const c of n(this, la)) {
      const d = new Array(c.length);
      for (let p = 0; p < c.length; p += 2)
        d[p] = e + c[p] * h, d[p + 1] = r - c[p + 1] * l;
      o.push(d);
    }
    return o;
  }
  get box() {
    return n(this, Mh);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
};
Mh = new WeakMap(), la = new WeakMap(), u(Op, "HighlightOutline");
let Tu = Op;
const Hp = class Hp extends jl {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new ku(t, e, s, i, r, a);
  }
};
u(Hp, "FreeHighlightOutliner");
let go = Hp;
const Bp = class Bp extends Wl {
  newOutliner(t, e, s, i, r, a = 0) {
    return new go(t, e, s, i, r, a);
  }
};
u(Bp, "FreeHighlightOutline");
let ku = Bp;
var ts, Wn, ca, Tt, Ph, da, Rh, Lh, Oi, es, ua, Ih, st, Mu, Pu, Ru, Qi, wm, ui;
const ee = class ee {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    m(this, st);
    m(this, ts, null);
    m(this, Wn, null);
    m(this, ca);
    m(this, Tt, null);
    m(this, Ph, !1);
    m(this, da, !1);
    m(this, Rh, null);
    m(this, Lh);
    m(this, Oi, null);
    m(this, es, null);
    m(this, ua);
    t ? (f(this, da, !1), f(this, ua, K.HIGHLIGHT_COLOR), f(this, Rh, t)) : (f(this, da, !0), f(this, ua, K.HIGHLIGHT_DEFAULT_COLOR)), f(this, es, t?._uiManager || e), f(this, Lh, n(this, es)._eventBus), f(this, ca, t?.color || n(this, es)?.highlightColors.values().next().value || "#FFFF98"), n(ee, Ih) || f(ee, Ih, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return q(this, "_keyboardManager", new or([[["Escape", "mac+Escape"], ee.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ee.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ee.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ee.prototype._moveToPrevious], [["Home", "mac+Home"], ee.prototype._moveToBeginning], [["End", "mac+End"], ee.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = f(this, ts, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", !0);
    const e = n(this, es)._signal;
    t.addEventListener("click", b(this, st, Qi).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, st, Ru).bind(this), {
      signal: e
    });
    const s = f(this, Wn, document.createElement("span"));
    return s.className = "swatch", s.setAttribute("aria-hidden", !0), s.style.backgroundColor = n(this, ca), t.append(s), t;
  }
  renderMainDropdown() {
    const t = f(this, Tt, b(this, st, Mu).call(this));
    return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, ts)) {
      b(this, st, Qi).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, st, Pu).call(this, e, t);
  }
  _moveToNext(t) {
    if (!n(this, st, ui)) {
      b(this, st, Qi).call(this, t);
      return;
    }
    if (t.target === n(this, ts)) {
      n(this, Tt).firstChild?.focus();
      return;
    }
    t.target.nextSibling?.focus();
  }
  _moveToPrevious(t) {
    if (t.target === n(this, Tt)?.firstChild || t.target === n(this, ts)) {
      n(this, st, ui) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, st, ui) || b(this, st, Qi).call(this, t), t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (!n(this, st, ui)) {
      b(this, st, Qi).call(this, t);
      return;
    }
    n(this, Tt).firstChild?.focus();
  }
  _moveToEnd(t) {
    if (!n(this, st, ui)) {
      b(this, st, Qi).call(this, t);
      return;
    }
    n(this, Tt).lastChild?.focus();
  }
  hideDropdown() {
    n(this, Tt)?.classList.add("hidden"), n(this, Oi)?.abort(), f(this, Oi, null);
  }
  _hideDropdownFromKeyboard() {
    if (!n(this, da)) {
      if (!n(this, st, ui)) {
        n(this, Rh)?.unselect();
        return;
      }
      this.hideDropdown(), n(this, ts).focus({
        preventScroll: !0,
        focusVisible: n(this, Ph)
      });
    }
  }
  updateColor(t) {
    if (n(this, Wn) && (n(this, Wn).style.backgroundColor = t), !n(this, Tt))
      return;
    const e = n(this, es).highlightColors.values();
    for (const s of n(this, Tt).children)
      s.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    n(this, ts)?.remove(), f(this, ts, null), f(this, Wn, null), n(this, Tt)?.remove(), f(this, Tt, null);
  }
};
ts = new WeakMap(), Wn = new WeakMap(), ca = new WeakMap(), Tt = new WeakMap(), Ph = new WeakMap(), da = new WeakMap(), Rh = new WeakMap(), Lh = new WeakMap(), Oi = new WeakMap(), es = new WeakMap(), ua = new WeakMap(), Ih = new WeakMap(), st = new WeakSet(), Mu = /* @__PURE__ */ u(function() {
  const t = document.createElement("div"), e = n(this, es)._signal;
  t.addEventListener("contextmenu", rs, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", !1), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [s, i] of n(this, es).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n(ee, Ih)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.setAttribute("aria-selected", i === n(this, ca)), r.addEventListener("click", b(this, st, Pu).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, st, Ru).bind(this), {
    signal: e
  }), t;
}, "#getDropdownRoot"), Pu = /* @__PURE__ */ u(function(t, e) {
  e.stopPropagation(), n(this, Lh).dispatch("switchannotationeditorparams", {
    source: this,
    type: n(this, ua),
    value: t
  });
}, "#colorSelect"), Ru = /* @__PURE__ */ u(function(t) {
  ee._keyboardManager.exec(this, t);
}, "#keyDown"), Qi = /* @__PURE__ */ u(function(t) {
  if (n(this, st, ui)) {
    this.hideDropdown();
    return;
  }
  if (f(this, Ph, t.detail === 0), n(this, Oi) || (f(this, Oi, new AbortController()), window.addEventListener("pointerdown", b(this, st, wm).bind(this), {
    signal: n(this, es).combinedSignal(n(this, Oi))
  })), n(this, Tt)) {
    n(this, Tt).classList.remove("hidden");
    return;
  }
  const e = f(this, Tt, b(this, st, Mu).call(this));
  n(this, ts).append(e);
}, "#openDropdown"), wm = /* @__PURE__ */ u(function(t) {
  n(this, Tt)?.contains(t.target) || this.hideDropdown();
}, "#pointerDown"), ui = /* @__PURE__ */ u(function() {
  return n(this, Tt) && !n(this, Tt).classList.contains("hidden");
}, "#isDropdownVisible"), u(ee, "ColorPicker"), m(ee, Ih, null);
let Xl = ee;
var fa, Dh, ti, Xn, pa, fe, Nh, Fh, qn, He, Ee, Bt, ga, ei, Yt, ma, Be, Oh, z, Lu, ml, vm, _m, Sm, Iu, Ji, Ue, br, Em, bl, ja, xm, Cm, Tm, km, Mm;
const Z = class Z extends mt {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    m(this, z);
    m(this, fa, null);
    m(this, Dh, 0);
    m(this, ti);
    m(this, Xn, null);
    m(this, pa, null);
    m(this, fe, null);
    m(this, Nh, null);
    m(this, Fh, 0);
    m(this, qn, null);
    m(this, He, null);
    m(this, Ee, null);
    m(this, Bt, !1);
    m(this, ga, null);
    m(this, ei);
    m(this, Yt, null);
    m(this, ma, "");
    m(this, Be);
    m(this, Oh, "");
    this.color = e.color || Z._defaultColor, f(this, Be, e.thickness || Z._defaultThickness), f(this, ei, e.opacity || Z._defaultOpacity), f(this, ti, e.boxes || null), f(this, Oh, e.methodOfCreation || ""), f(this, ma, e.text || ""), this._isDraggable = !1, e.highlightId > -1 ? (f(this, Bt, !0), b(this, z, ml).call(this, e), b(this, z, Ji).call(this)) : n(this, ti) && (f(this, fa, e.anchorNode), f(this, Dh, e.anchorOffset), f(this, Nh, e.focusNode), f(this, Fh, e.focusOffset), b(this, z, Lu).call(this), b(this, z, Ji).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const e = Z.prototype;
    return q(this, "_keyboardManager", new or([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
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
      type: n(this, Bt) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: n(this, Be),
      methodOfCreation: n(this, Oh)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, s) {
    mt.initialize(e, s), Z._defaultColor ||= s.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case K.HIGHLIGHT_DEFAULT_COLOR:
        Z._defaultColor = s;
        break;
      case K.HIGHLIGHT_THICKNESS:
        Z._defaultThickness = s;
        break;
    }
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return n(this, ga);
  }
  updateParams(e, s) {
    switch (e) {
      case K.HIGHLIGHT_COLOR:
        b(this, z, vm).call(this, s);
        break;
      case K.HIGHLIGHT_THICKNESS:
        b(this, z, _m).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[K.HIGHLIGHT_DEFAULT_COLOR, Z._defaultColor], [K.HIGHLIGHT_THICKNESS, Z._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[K.HIGHLIGHT_COLOR, this.color || Z._defaultColor], [K.HIGHLIGHT_THICKNESS, n(this, Be) || Z._defaultThickness], [K.HIGHLIGHT_FREE, n(this, Bt)]];
  }
  async addEditToolbar() {
    const e = await super.addEditToolbar();
    return e ? (this._uiManager.highlightColors && (f(this, pa, new Xl({
      editor: this
    })), e.addColorPicker(n(this, pa))), e) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(b(this, z, ja).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, s) {
    return super.getRect(e, s, b(this, z, ja).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    b(this, z, Iu).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, z, Ji).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? b(this, z, Iu).call(this) : e && (b(this, z, Ji).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), this.show(this._isVisible), s && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: s
    } = this.parent;
    let i;
    n(this, Bt) ? (e = (e - this.rotation + 360) % 360, i = b(r = Z, Ue, br).call(r, n(this, He).box, e)) : i = b(a = Z, Ue, br).call(a, [this.x, this.y, this.width, this.height], e), s.updateProperties(n(this, Ee), {
      bbox: i,
      root: {
        "data-main-rotation": e
      }
    }), s.updateProperties(n(this, Yt), {
      bbox: b(o = Z, Ue, br).call(o, n(this, fe).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, ma) && (e.setAttribute("aria-label", n(this, ma)), e.setAttribute("role", "mark")), n(this, Bt) ? e.classList.add("free") : this.div.addEventListener("keydown", b(this, z, Em).bind(this), {
      signal: this._uiManager._signal
    });
    const s = f(this, qn, document.createElement("div"));
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", s.style.clipPath = n(this, Xn);
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), Tl(this, n(this, qn), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    this.isSelected || this.parent?.drawLayer.updateProperties(n(this, Yt), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    this.isSelected || this.parent?.drawLayer.updateProperties(n(this, Yt), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, z, bl).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, z, bl).call(this, !1);
        break;
    }
  }
  select() {
    super.select(), n(this, Yt) && this.parent?.drawLayer.updateProperties(n(this, Yt), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    });
  }
  unselect() {
    super.unselect(), n(this, Yt) && (this.parent?.drawLayer.updateProperties(n(this, Yt), {
      rootClass: {
        selected: !1
      }
    }), n(this, Bt) || b(this, z, bl).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, Bt);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Ee), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, Yt), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, s, {
    target: i,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: h,
      width: l,
      height: c
    } = i.getBoundingClientRect(), d = new AbortController(), p = e.combinedSignal(d), A = /* @__PURE__ */ u((y) => {
      d.abort(), b(this, Ue, km).call(this, e, y);
    }, "pointerUpCallback");
    window.addEventListener("blur", A, {
      signal: p
    }), window.addEventListener("pointerup", A, {
      signal: p
    }), window.addEventListener("pointerdown", Pe, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", rs, {
      signal: p
    }), i.addEventListener("pointermove", b(this, Ue, Tm).bind(this, e), {
      signal: p
    }), this._freeHighlight = new go({
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
  static async deserialize(e, s, i) {
    var w, _, v, S;
    let r = null;
    if (e instanceof Ul) {
      const {
        data: {
          quadPoints: x,
          rect: E,
          rotation: C,
          id: k,
          color: T,
          opacity: F,
          popupRef: O
        },
        parent: {
          page: {
            pageNumber: U
          }
        }
      } = e;
      r = e = {
        annotationType: j.HIGHLIGHT,
        color: Array.from(T),
        opacity: F,
        quadPoints: x,
        boxes: null,
        pageIndex: U - 1,
        rect: E.slice(0),
        rotation: C,
        id: k,
        deleted: !1,
        popupRef: O
      };
    } else if (e instanceof fo) {
      const {
        data: {
          inkLists: x,
          rect: E,
          rotation: C,
          id: k,
          color: T,
          borderStyle: {
            rawWidth: F
          },
          popupRef: O
        },
        parent: {
          page: {
            pageNumber: U
          }
        }
      } = e;
      r = e = {
        annotationType: j.HIGHLIGHT,
        color: Array.from(T),
        thickness: F,
        inkLists: x,
        boxes: null,
        pageIndex: U - 1,
        rect: E.slice(0),
        rotation: C,
        id: k,
        deleted: !1,
        popupRef: O
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: h,
      opacity: l
    } = e, c = await super.deserialize(e, s, i);
    c.color = N.makeHexColor(...a), f(c, ei, l || 1), h && f(c, Be, e.thickness), c.annotationElementId = e.id || null, c._initialData = r;
    const [d, p] = c.pageDimensions, [A, y] = c.pageTranslation;
    if (o) {
      const x = f(c, ti, []);
      for (let E = 0; E < o.length; E += 8)
        x.push({
          x: (o[E] - A) / d,
          y: 1 - (o[E + 1] - y) / p,
          width: (o[E + 2] - o[E]) / d,
          height: (o[E + 1] - o[E + 5]) / p
        });
      b(w = c, z, Lu).call(w), b(_ = c, z, Ji).call(_), c.rotate(c.rotation);
    } else if (h) {
      f(c, Bt, !0);
      const x = h[0], E = {
        x: x[0] - A,
        y: p - (x[1] - y)
      }, C = new go(E, [0, 0, d, p], 1, n(c, Be) / 2, !0, 1e-3);
      for (let F = 0, O = x.length; F < O; F += 2)
        E.x = x[F] - A, E.y = p - (x[F + 1] - y), C.add(E);
      const {
        id: k,
        clipPathId: T
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
          d: C.toSVGPath()
        }
      }, !0, !0);
      b(v = c, z, ml).call(v, {
        highlightOutlines: C.getOutlines(),
        highlightId: k,
        clipPathId: T
      }), b(S = c, z, Ji).call(S);
    }
    return c;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = this.getRect(0, 0), i = mt._colorManager.convert(this.color), r = {
      annotationType: j.HIGHLIGHT,
      color: i,
      opacity: n(this, ei),
      thickness: n(this, Be),
      quadPoints: b(this, z, xm).call(this),
      outlines: b(this, z, Cm).call(this, s),
      pageIndex: this.pageIndex,
      rect: s,
      rotation: b(this, z, ja).call(this),
      structTreeParentId: this._structTreeParentId
    };
    return this.annotationElementId && !b(this, z, Mm).call(this, r) ? null : (r.id = this.annotationElementId, r);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
fa = new WeakMap(), Dh = new WeakMap(), ti = new WeakMap(), Xn = new WeakMap(), pa = new WeakMap(), fe = new WeakMap(), Nh = new WeakMap(), Fh = new WeakMap(), qn = new WeakMap(), He = new WeakMap(), Ee = new WeakMap(), Bt = new WeakMap(), ga = new WeakMap(), ei = new WeakMap(), Yt = new WeakMap(), ma = new WeakMap(), Be = new WeakMap(), Oh = new WeakMap(), z = new WeakSet(), Lu = /* @__PURE__ */ u(function() {
  const e = new po(n(this, ti), 1e-3);
  f(this, He, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, He).box;
  const s = new po(n(this, ti), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  f(this, fe, s.getOutlines());
  const {
    lastPoint: i
  } = n(this, fe);
  f(this, ga, [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height]);
}, "#createOutlines"), ml = /* @__PURE__ */ u(function({
  highlightOutlines: e,
  highlightId: s,
  clipPathId: i
}) {
  var d, p;
  if (f(this, He, e), f(this, fe, e.getNewOutline(n(this, Be) / 2 + 1.5, 25e-4)), s >= 0)
    f(this, Ee, s), f(this, Xn, i), this.parent.drawLayer.finalizeDraw(s, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), f(this, Yt, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, fe).box,
      path: {
        d: n(this, fe).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const A = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Ee), {
      bbox: b(d = Z, Ue, br).call(d, n(this, He).box, (A - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, Yt), {
      bbox: b(p = Z, Ue, br).call(p, n(this, fe).box, A),
      path: {
        d: n(this, fe).toSVGPath()
      }
    });
  }
  const [a, o, h, l] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = h, this.height = l;
      break;
    case 90: {
      const [A, y] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = h * y / A, this.height = l * A / y;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = h, this.height = l;
      break;
    case 270: {
      const [A, y] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = h * y / A, this.height = l * A / y;
      break;
    }
  }
  const {
    lastPoint: c
  } = n(this, fe);
  f(this, ga, [(c[0] - a) / h, (c[1] - o) / l]);
}, "#createFreeOutlines"), vm = /* @__PURE__ */ u(function(e) {
  const s = /* @__PURE__ */ u((a, o) => {
    this.color = a, f(this, ei, o), this.parent?.drawLayer.updateProperties(n(this, Ee), {
      root: {
        fill: a,
        "fill-opacity": o
      }
    }), n(this, pa)?.updateColor(a);
  }, "setColorAndOpacity"), i = this.color, r = n(this, ei);
  this.addCommands({
    cmd: s.bind(this, e, Z._defaultOpacity),
    undo: s.bind(this, i, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: K.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(e)
  }, !0);
}, "#updateColor"), _m = /* @__PURE__ */ u(function(e) {
  const s = n(this, Be), i = /* @__PURE__ */ u((r) => {
    f(this, Be, r), b(this, z, Sm).call(this, r);
  }, "setThickness");
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: K.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, "#updateThickness"), Sm = /* @__PURE__ */ u(function(e) {
  if (!n(this, Bt))
    return;
  b(this, z, ml).call(this, {
    highlightOutlines: n(this, He).getNewOutline(e / 2)
  }), this.fixAndSetPosition();
  const [s, i] = this.parentDimensions;
  this.setDims(this.width * s, this.height * i);
}, "#changeThickness"), Iu = /* @__PURE__ */ u(function() {
  n(this, Ee) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Ee)), f(this, Ee, null), this.parent.drawLayer.remove(n(this, Yt)), f(this, Yt, null));
}, "#cleanDrawLayer"), Ji = /* @__PURE__ */ u(function(e = this.parent) {
  n(this, Ee) === null && ({
    id: Zt(this, Ee)._,
    clipPathId: Zt(this, Xn)._
  } = e.drawLayer.draw({
    bbox: n(this, He).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": n(this, ei)
    },
    rootClass: {
      highlight: !0,
      free: n(this, Bt)
    },
    path: {
      d: n(this, He).toSVGPath()
    }
  }, !1, !0), f(this, Yt, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, Bt)
    },
    bbox: n(this, fe).box,
    path: {
      d: n(this, fe).toSVGPath()
    }
  }, n(this, Bt))), n(this, qn) && (n(this, qn).style.clipPath = n(this, Xn)));
}, "#addToDrawLayer"), Ue = new WeakSet(), br = /* @__PURE__ */ u(function([e, s, i, r], a) {
  switch (a) {
    case 90:
      return [1 - s - r, e, r, i];
    case 180:
      return [1 - e - i, 1 - s - r, i, r];
    case 270:
      return [s, 1 - e - i, r, i];
  }
  return [e, s, i, r];
}, "#rotateBbox"), Em = /* @__PURE__ */ u(function(e) {
  Z._keyboardManager.exec(this, e);
}, "#keydown"), bl = /* @__PURE__ */ u(function(e) {
  if (!n(this, fa))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, fa), n(this, Dh)) : s.setPosition(n(this, Nh), n(this, Fh));
}, "#setCaret"), ja = /* @__PURE__ */ u(function() {
  return n(this, Bt) ? this.rotation : 0;
}, "#getRotation"), xm = /* @__PURE__ */ u(function() {
  if (n(this, Bt))
    return null;
  const [e, s] = this.pageDimensions, [i, r] = this.pageTranslation, a = n(this, ti), o = new Float32Array(a.length * 8);
  let h = 0;
  for (const {
    x: l,
    y: c,
    width: d,
    height: p
  } of a) {
    const A = l * e + i, y = (1 - c) * s + r;
    o[h] = o[h + 4] = A, o[h + 1] = o[h + 3] = y, o[h + 2] = o[h + 6] = A + d * e, o[h + 5] = o[h + 7] = y - p * s, h += 8;
  }
  return o;
}, "#serializeBoxes"), Cm = /* @__PURE__ */ u(function(e) {
  return n(this, He).serialize(e, b(this, z, ja).call(this));
}, "#serializeOutlines"), Tm = /* @__PURE__ */ u(function(e, s) {
  this._freeHighlight.add(s) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, "#highlightMove"), km = /* @__PURE__ */ u(function(e, s) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(s, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, "#endHighlight"), Mm = /* @__PURE__ */ u(function(e) {
  const {
    color: s
  } = this._initialData;
  return e.color.some((i, r) => i !== s[r]);
}, "#hasElementChanged"), m(Z, Ue), u(Z, "HighlightEditor"), $(Z, "_defaultColor", null), $(Z, "_defaultOpacity", 1), $(Z, "_defaultThickness", 12), $(Z, "_type", "highlight"), $(Z, "_editorType", j.HIGHLIGHT), $(Z, "_freeHighlightId", -1), $(Z, "_freeHighlight", null), $(Z, "_freeHighlightClipId", "");
let ql = Z;
var Yn;
const $p = class $p {
  constructor() {
    m(this, Yn, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Yn)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Yn);
    return f(this, Yn, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    f(this, Yn, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    rt("Not implemented");
  }
};
Yn = new WeakMap(), u($p, "DrawingOptions");
let Du = $p;
var xe, ba, Lt, Kn, Qn, Hi, Bi, $i, Jn, Q, Fu, Ou, Hu, Wa, Pm, Al, Xa, Ar;
const L = class L extends mt {
  constructor(e) {
    super(e);
    m(this, Q);
    m(this, xe, null);
    m(this, ba);
    $(this, "_drawId", null);
    f(this, ba, e.mustBeCommitted || !1), e.drawOutlines && (b(this, Q, Fu).call(this, e), b(this, Q, Wa).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
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
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(L, Lt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, r] of this.constructor.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = /* @__PURE__ */ u((h) => {
      r.updateProperty(s, h);
      const l = n(this, xe).updateProperty(s, h);
      l && b(this, Q, Xa).call(this, l), this.parent?.drawLayer.updateProperties(this._drawId, r.toSVGProperties());
    }, "setter");
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathResizingSVGProperties(b(this, Q, Al).call(this)), {
      bbox: b(this, Q, Ar).call(this)
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathResizedSVGProperties(b(this, Q, Al).call(this)), {
      bbox: b(this, Q, Ar).call(this)
    }));
  }
  _onTranslating(e, s) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, Q, Ar).call(this, e, s)
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties(n(this, xe).getPathTranslatedSVGProperties(b(this, Q, Al).call(this), this.parentDimensions), {
      bbox: b(this, Q, Ar).call(this)
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, ba) && (f(this, ba, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    b(this, Q, Hu).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, Q, Wa).call(this), b(this, Q, Xa).call(this, n(this, xe).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, Q, Hu).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, Q, Wa).call(this, e), s = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), s && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, L._mergeSVGProperties({
      bbox: b(this, Q, Ar).call(this)
    }, n(this, xe).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && b(this, Q, Xa).call(this, n(this, xe).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    e.classList.add("draw");
    const s = document.createElement("div");
    e.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal";
    const [i, r] = this.parentDimensions;
    return this.setDims(this.width * i, this.height * r), this._uiManager.addShouldRescale(this), this.disableEditing(), e;
  }
  static createDrawerInstance(e, s, i, r, a) {
    rt("Not implemented");
  }
  static startDrawing(e, s, i, r) {
    const {
      target: a,
      offsetX: o,
      offsetY: h,
      pointerId: l,
      pointerType: c
    } = r;
    if (n(L, Bi) && n(L, Bi) !== c)
      return;
    const {
      viewport: {
        rotation: d
      }
    } = e, {
      width: p,
      height: A
    } = a.getBoundingClientRect(), y = f(L, Kn, new AbortController()), w = e.combinedSignal(y);
    if (n(L, Hi) || f(L, Hi, l), n(L, Bi) ?? f(L, Bi, c), window.addEventListener("pointerup", (_) => {
      n(L, Hi) === _.pointerId ? this._endDraw(_) : n(L, $i)?.delete(_.pointerId);
    }, {
      signal: w
    }), window.addEventListener("pointercancel", (_) => {
      n(L, Hi) === _.pointerId ? this._currentParent.endDrawingSession() : n(L, $i)?.delete(_.pointerId);
    }, {
      signal: w
    }), window.addEventListener("pointerdown", (_) => {
      n(L, Bi) === _.pointerType && ((n(L, $i) || f(L, $i, /* @__PURE__ */ new Set())).add(_.pointerId), n(L, Lt).isCancellable() && (n(L, Lt).removeLastElement(), n(L, Lt).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: w
    }), window.addEventListener("contextmenu", rs, {
      signal: w
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: w
    }), a.addEventListener("touchmove", (_) => {
      _.timeStamp === n(L, Jn) && Pe(_);
    }, {
      signal: w
    }), e.toggleDrawing(), s._editorUndoBar?.hide(), n(L, Lt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).startNew(o, h, p, A, d));
      return;
    }
    s.updateUIForDefaultProperties(this), f(L, Lt, this.createDrawerInstance(o, h, p, A, d)), f(L, Qn, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(L, Qn).toSVGProperties(), n(L, Lt).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    if (f(L, Jn, -1), !n(L, Lt))
      return;
    const {
      offsetX: s,
      offsetY: i,
      pointerId: r
    } = e;
    if (n(L, Hi) === r) {
      if (n(L, $i)?.size >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).add(s, i)), f(L, Jn, e.timeStamp), Pe(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, f(L, Lt, null), f(L, Qn, null), f(L, Bi, null), f(L, Jn, NaN)), n(L, Kn) && (n(L, Kn).abort(), f(L, Kn, null), f(L, Hi, NaN), f(L, $i, null));
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), e && s.drawLayer.updateProperties(this._currentDrawId, n(L, Lt).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const i = n(L, Lt), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: /* @__PURE__ */ u(() => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          }, "cmd"),
          undo: /* @__PURE__ */ u(() => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          }, "undo"),
          mustExec: !1,
          type: K.DRAW_STEP
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
    if (s.toggleDrawing(!0), s.cleanUndoStack(K.DRAW_STEP), !n(L, Lt).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(L, Lt).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(L, Qn),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o) {
    rt("Not implemented");
  }
  static async deserialize(e, s, i) {
    var d, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: h
      }
    } = s.viewport, l = this.deserializeDraw(o, h, r, a, this._INNER_MARGIN, e), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), b(d = c, Q, Fu).call(d, {
      drawOutlines: l
    }), b(p = c, Q, Wa).call(p), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, xe).serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
xe = new WeakMap(), ba = new WeakMap(), Lt = new WeakMap(), Kn = new WeakMap(), Qn = new WeakMap(), Hi = new WeakMap(), Bi = new WeakMap(), $i = new WeakMap(), Jn = new WeakMap(), Q = new WeakSet(), Fu = /* @__PURE__ */ u(function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i
}) {
  f(this, xe, e), this._drawingOptions ||= i, s >= 0 ? (this._drawId = s, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties)) : this._drawId = b(this, Q, Ou).call(this, e, this.parent), b(this, Q, Xa).call(this, e.box);
}, "#createDrawOutlines"), Ou = /* @__PURE__ */ u(function(e, s) {
  const {
    id: i
  } = s.drawLayer.draw(L._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return i;
}, "#createDrawing"), Hu = /* @__PURE__ */ u(function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, "#cleanDrawLayer"), Wa = /* @__PURE__ */ u(function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, Q, Ou).call(this, n(this, xe), e);
  }
}, "#addToDrawLayer"), Pm = /* @__PURE__ */ u(function([e, s, i, r]) {
  const {
    parentDimensions: [a, o],
    rotation: h
  } = this;
  switch (h) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, "#convertToParentSpace"), Al = /* @__PURE__ */ u(function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    parentDimensions: [a, o],
    rotation: h
  } = this;
  switch (h) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, "#convertToDrawSpace"), Xa = /* @__PURE__ */ u(function(e) {
  if ([this.x, this.y, this.width, this.height] = b(this, Q, Pm).call(this, e), this.div) {
    this.fixAndSetPosition();
    const [s, i] = this.parentDimensions;
    this.setDims(this.width * s, this.height * i);
  }
  this._onResized();
}, "#updateBbox"), Ar = /* @__PURE__ */ u(function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [h, l]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - s - r, e, r, i];
    case 2:
      return [1 - e - i, 1 - s - r, i, r];
    case 3:
      return [s, 1 - e - i, r, i];
    case 4:
      return [e, s - i * (h / l), r * (l / h), i * (h / l)];
    case 5:
      return [1 - s, e, i * (h / l), r * (l / h)];
    case 6:
      return [1 - e - r * (l / h), 1 - s, r * (l / h), i * (h / l)];
    case 7:
      return [s - i * (h / l), 1 - e - r * (l / h), i * (h / l), r * (l / h)];
    case 8:
      return [e - i, s - r, i, r];
    case 9:
      return [1 - s, e - i, r, i];
    case 10:
      return [1 - e, 1 - s, i, r];
    case 11:
      return [s - r, 1 - e, r, i];
    case 12:
      return [e - r * (l / h), s, r * (l / h), i * (h / l)];
    case 13:
      return [1 - s - i * (h / l), e - r * (l / h), i * (h / l), r * (l / h)];
    case 14:
      return [1 - e, 1 - s - i * (h / l), r * (l / h), i * (h / l)];
    case 15:
      return [s, 1 - e, i * (h / l), r * (l / h)];
    default:
      return [e, s, i, r];
  }
}, "#rotateBox"), u(L, "DrawingEditor"), $(L, "_currentDrawId", -1), $(L, "_currentParent", null), m(L, Lt, null), m(L, Kn, null), m(L, Qn, null), m(L, Hi, NaN), m(L, Bi, null), m(L, $i, null), m(L, Jn, NaN), $(L, "_INNER_MARGIN", 3);
let Nu = L;
var Es, It, Dt, Zn, Aa, se, $t, $e, tr, er, sr, ya, yl;
const Gp = class Gp {
  constructor(t, e, s, i, r, a) {
    m(this, ya);
    m(this, Es, new Float64Array(6));
    m(this, It);
    m(this, Dt);
    m(this, Zn);
    m(this, Aa);
    m(this, se);
    m(this, $t, "");
    m(this, $e, 0);
    m(this, tr, new Yl());
    m(this, er);
    m(this, sr);
    f(this, er, s), f(this, sr, i), f(this, Zn, r), f(this, Aa, a), [t, e] = b(this, ya, yl).call(this, t, e);
    const o = f(this, It, [NaN, NaN, NaN, NaN, t, e]);
    f(this, se, [t, e]), f(this, Dt, [{
      line: o,
      points: n(this, se)
    }]), n(this, Es).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && f(this, Aa, e);
  }
  isEmpty() {
    return !n(this, Dt) || n(this, Dt).length === 0;
  }
  isCancellable() {
    return n(this, se).length <= 10;
  }
  add(t, e) {
    [t, e] = b(this, ya, yl).call(this, t, e);
    const [s, i, r, a] = n(this, Es).subarray(2, 6), o = t - r, h = e - a;
    return Math.hypot(n(this, er) * o, n(this, sr) * h) <= 2 ? null : (n(this, se).push(t, e), isNaN(s) ? (n(this, Es).set([r, a, t, e], 2), n(this, It).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Es)[0]) && n(this, It).splice(6, 6), n(this, Es).set([s, i, r, a, t, e], 0), n(this, It).push(...R.createBezierPoints(s, i, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (n(this, se).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, r) {
    f(this, er, s), f(this, sr, i), f(this, Zn, r), [t, e] = b(this, ya, yl).call(this, t, e);
    const a = f(this, It, [NaN, NaN, NaN, NaN, t, e]);
    f(this, se, [t, e]);
    const o = n(this, Dt).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, Dt).push({
      line: a,
      points: n(this, se)
    }), n(this, Es).set(a, 0), f(this, $e, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, Dt).at(-1);
  }
  setLastElement(t) {
    return n(this, Dt) ? (n(this, Dt).push(t), f(this, It, t.line), f(this, se, t.points), f(this, $e, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, tr).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, Dt))
      return n(this, tr).removeLastElement();
    n(this, Dt).pop(), f(this, $t, "");
    for (let t = 0, e = n(this, Dt).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, Dt)[t];
      f(this, It, s), f(this, se, i), f(this, $e, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, $t)
      }
    };
  }
  toSVGPath() {
    const t = R.svgRound(n(this, It)[4]), e = R.svgRound(n(this, It)[5]);
    if (n(this, se).length === 2)
      return f(this, $t, `${n(this, $t)} M ${t} ${e} Z`), n(this, $t);
    if (n(this, se).length <= 6) {
      const i = n(this, $t).lastIndexOf("M");
      f(this, $t, `${n(this, $t).slice(0, i)} M ${t} ${e}`), f(this, $e, 6);
    }
    if (n(this, se).length === 4) {
      const i = R.svgRound(n(this, It)[10]), r = R.svgRound(n(this, It)[11]);
      return f(this, $t, `${n(this, $t)} L ${i} ${r}`), f(this, $e, 12), n(this, $t);
    }
    const s = [];
    n(this, $e) === 0 && (s.push(`M ${t} ${e}`), f(this, $e, 6));
    for (let i = n(this, $e), r = n(this, It).length; i < r; i += 6) {
      const [a, o, h, l, c, d] = n(this, It).slice(i, i + 6).map(R.svgRound);
      s.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
    }
    return f(this, $t, n(this, $t) + s.join(" ")), f(this, $e, n(this, It).length), n(this, $t);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, Dt).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, tr).build(n(this, Dt), t, e, s, n(this, Zn), n(this, Aa), i), f(this, Es, null), f(this, It, null), f(this, Dt, null), f(this, $t, null), n(this, tr);
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
Es = new WeakMap(), It = new WeakMap(), Dt = new WeakMap(), Zn = new WeakMap(), Aa = new WeakMap(), se = new WeakMap(), $t = new WeakMap(), $e = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), sr = new WeakMap(), ya = new WeakSet(), yl = /* @__PURE__ */ u(function(t, e) {
  return R._normalizePoint(t, e, n(this, er), n(this, sr), n(this, Zn));
}, "#normalizePoint"), u(Gp, "InkDrawOutliner");
let Bu = Gp;
var ie, Hh, Bh, Ce, xs, Cs, wa, va, _a, zt, Ds, Rm, Lm, Im;
const yc = class yc extends R {
  constructor() {
    super(...arguments);
    m(this, zt);
    m(this, ie);
    m(this, Hh, 0);
    m(this, Bh);
    m(this, Ce);
    m(this, xs);
    m(this, Cs);
    m(this, wa);
    m(this, va);
    m(this, _a);
  }
  build(e, s, i, r, a, o, h) {
    f(this, xs, s), f(this, Cs, i), f(this, wa, r), f(this, va, a), f(this, _a, o), f(this, Bh, h ?? 0), f(this, Ce, e), b(this, zt, Lm).call(this);
  }
  setLastElement(e) {
    return n(this, Ce).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, Ce).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, Ce)) {
      if (e.push(`M${R.svgRound(s[4])} ${R.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12) {
        e.push(`L${R.svgRound(s[10])} ${R.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, h, l, c, d] = s.subarray(i, i + 6).map(R.svgRound);
        e.push(`C${a} ${o} ${h} ${l} ${c} ${d}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], h = [], [l, c, d, p] = b(this, zt, Rm).call(this);
    let A, y, w, _, v, S, x, E, C;
    switch (n(this, va)) {
      case 0:
        C = R._rescale, A = e, y = s + r, w = i, _ = -r, v = e + l * i, S = s + (1 - c - p) * r, x = e + (l + d) * i, E = s + (1 - c) * r;
        break;
      case 90:
        C = R._rescaleAndSwap, A = e, y = s, w = i, _ = r, v = e + c * i, S = s + l * r, x = e + (c + p) * i, E = s + (l + d) * r;
        break;
      case 180:
        C = R._rescale, A = e + i, y = s, w = -i, _ = r, v = e + (1 - l - d) * i, S = s + c * r, x = e + (1 - l) * i, E = s + (c + p) * r;
        break;
      case 270:
        C = R._rescaleAndSwap, A = e + i, y = s + r, w = -i, _ = -r, v = e + (1 - c - p) * i, S = s + (1 - l - d) * r, x = e + (1 - c) * i, E = s + (1 - l) * r;
        break;
    }
    for (const {
      line: k,
      points: T
    } of n(this, Ce))
      o.push(C(k, A, y, w, _, a ? new Array(k.length) : null)), h.push(C(T, A, y, w, _, a ? new Array(T.length) : null));
    return {
      lines: o,
      points: h,
      rect: [v, S, x, E]
    };
  }
  static deserialize(e, s, i, r, a, {
    paths: {
      lines: o,
      points: h
    },
    rotation: l,
    thickness: c
  }) {
    const d = [];
    let p, A, y, w, _;
    switch (l) {
      case 0:
        _ = R._rescale, p = -e / i, A = s / r + 1, y = 1 / i, w = -1 / r;
        break;
      case 90:
        _ = R._rescaleAndSwap, p = -s / r, A = -e / i, y = 1 / r, w = 1 / i;
        break;
      case 180:
        _ = R._rescale, p = e / i + 1, A = -s / r, y = -1 / i, w = 1 / r;
        break;
      case 270:
        _ = R._rescaleAndSwap, p = s / r + 1, A = e / i + 1, y = -1 / r, w = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of h) {
        const x = S.length;
        if (x === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (x === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const E = new Float32Array(3 * (x - 2));
        o.push(E);
        let [C, k, T, F] = S.subarray(0, 4);
        E.set([NaN, NaN, NaN, NaN, C, k], 0);
        for (let O = 4; O < x; O += 2) {
          const U = S[O], V = S[O + 1];
          E.set(R.createBezierPoints(C, k, T, F, U, V), (O - 2) * 3), [C, k, T, F] = [T, F, U, V];
        }
      }
    }
    for (let S = 0, x = o.length; S < x; S++)
      d.push({
        line: _(o[S].map((E) => E ?? NaN), p, A, y, w),
        points: _(h[S].map((E) => E ?? NaN), p, A, y, w)
      });
    const v = new yc();
    return v.build(d, i, r, 1, l, c, a), v;
  }
  get box() {
    return n(this, ie);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, zt, Im).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, zt, Ds).call(this);
    f(this, xs, e), f(this, Cs, s), f(this, wa, i);
    const [o, h] = b(this, zt, Ds).call(this), l = o - r, c = h - a, d = n(this, ie);
    return d[0] -= l, d[1] -= c, d[2] += 2 * l, d[3] += 2 * c, d;
  }
  updateRotation(e) {
    return f(this, Hh, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, ie).map(R.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, ie);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${R.svgRound(e)} ${R.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, ie);
    let i = 0, r = 0, a = 0, o = 0, h = 0, l = 0;
    switch (n(this, Hh)) {
      case 90:
        r = s / e, a = -e / s, h = e;
        break;
      case 180:
        i = -1, o = -1, h = e, l = s;
        break;
      case 270:
        r = -s / e, a = e / s, l = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${R.svgRound(h)} ${R.svgRound(l)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, zt, Ds).call(this), [h, l, c, d] = n(this, ie);
    if (Math.abs(c - a) <= R.PRECISION || Math.abs(d - o) <= R.PRECISION) {
      const _ = e + i / 2 - (h + c / 2), v = s + r / 2 - (l + d / 2);
      return {
        path: {
          "transform-origin": `${R.svgRound(e)} ${R.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${_} ${v})`
        }
      };
    }
    const p = (i - 2 * a) / (c - 2 * a), A = (r - 2 * o) / (d - 2 * o), y = c / i, w = d / r;
    return {
      path: {
        "transform-origin": `${R.svgRound(h)} ${R.svgRound(l)}`,
        transform: `${this.rotationTransform} scale(${y} ${w}) translate(${R.svgRound(a)} ${R.svgRound(o)}) scale(${p} ${A}) translate(${R.svgRound(-a)} ${R.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, zt, Ds).call(this), h = n(this, ie), [l, c, d, p] = h;
    if (h[0] = e, h[1] = s, h[2] = i, h[3] = r, Math.abs(d - a) <= R.PRECISION || Math.abs(p - o) <= R.PRECISION) {
      const v = e + i / 2 - (l + d / 2), S = s + r / 2 - (c + p / 2);
      for (const {
        line: x,
        points: E
      } of n(this, Ce))
        R._translate(x, v, S, x), R._translate(E, v, S, E);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${R.svgRound(e)} ${R.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const A = (i - 2 * a) / (d - 2 * a), y = (r - 2 * o) / (p - 2 * o), w = -A * (l + a) + e + a, _ = -y * (c + o) + s + o;
    if (A !== 1 || y !== 1 || w !== 0 || _ !== 0)
      for (const {
        line: v,
        points: S
      } of n(this, Ce))
        R._rescale(v, w, _, A, y, v), R._rescale(S, w, _, A, y, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${R.svgRound(e)} ${R.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, ie), h = e - o[0], l = s - o[1];
    if (n(this, xs) === r && n(this, Cs) === a)
      for (const {
        line: c,
        points: d
      } of n(this, Ce))
        R._translate(c, h, l, c), R._translate(d, h, l, d);
    else {
      const c = n(this, xs) / r, d = n(this, Cs) / a;
      f(this, xs, r), f(this, Cs, a);
      for (const {
        line: p,
        points: A
      } of n(this, Ce))
        R._rescale(p, h, l, c, d, p), R._rescale(A, h, l, c, d, A);
      o[2] *= c, o[3] *= d;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${R.svgRound(e)} ${R.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, ie);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${R.svgRound(e[0])} ${R.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
};
ie = new WeakMap(), Hh = new WeakMap(), Bh = new WeakMap(), Ce = new WeakMap(), xs = new WeakMap(), Cs = new WeakMap(), wa = new WeakMap(), va = new WeakMap(), _a = new WeakMap(), zt = new WeakSet(), Ds = /* @__PURE__ */ u(function(e = n(this, _a)) {
  const s = n(this, Bh) + e / 2 * n(this, wa);
  return n(this, va) % 180 === 0 ? [s / n(this, xs), s / n(this, Cs)] : [s / n(this, Cs), s / n(this, xs)];
}, "#getMarginComponents"), Rm = /* @__PURE__ */ u(function() {
  const [e, s, i, r] = n(this, ie), [a, o] = b(this, zt, Ds).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, "#getBBoxWithNoMargin"), Lm = /* @__PURE__ */ u(function() {
  const e = f(this, ie, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, Ce)) {
    if (r.length <= 12) {
      for (let h = 4, l = r.length; h < l; h += 6) {
        const [c, d] = r.subarray(h, h + 2);
        e[0] = Math.min(e[0], c), e[1] = Math.min(e[1], d), e[2] = Math.max(e[2], c), e[3] = Math.max(e[3], d);
      }
      continue;
    }
    let a = r[4], o = r[5];
    for (let h = 6, l = r.length; h < l; h += 6) {
      const [c, d, p, A, y, w] = r.subarray(h, h + 6);
      N.bezierBoundingBox(a, o, c, d, p, A, y, w, e), a = y, o = w;
    }
  }
  const [s, i] = b(this, zt, Ds).call(this);
  e[0] = Math.min(1, Math.max(0, e[0] - s)), e[1] = Math.min(1, Math.max(0, e[1] - i)), e[2] = Math.min(1, Math.max(0, e[2] + s)), e[3] = Math.min(1, Math.max(0, e[3] + i)), e[2] -= e[0], e[3] -= e[1];
}, "#computeBbox"), Im = /* @__PURE__ */ u(function(e) {
  const [s, i] = b(this, zt, Ds).call(this);
  f(this, _a, e);
  const [r, a] = b(this, zt, Ds).call(this), [o, h] = [r - s, a - i], l = n(this, ie);
  return l[0] -= o, l[1] -= h, l[2] += 2 * o, l[3] += 2 * h, l;
}, "#updateThickness"), u(yc, "InkDrawOutline");
let Yl = yc;
var Sa;
const wc = class wc extends Du {
  constructor(e) {
    super();
    m(this, Sa);
    f(this, Sa, e), super.updateProperties({
      fill: "none",
      stroke: mt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(e, s) {
    e === "stroke-width" && (s ??= this["stroke-width"], s *= n(this, Sa).realScale), super.updateSVGProperty(e, s);
  }
  clone() {
    const e = new wc(n(this, Sa));
    return e.updateAll(this), e;
  }
};
Sa = new WeakMap(), u(wc, "InkDrawingOptions");
let $u = wc;
var vc, Dm;
const tn = class tn extends Nu {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    m(this, vc);
    this._willKeepAspectRatio = !0;
  }
  static initialize(e, s) {
    mt.initialize(e, s), this._defaultDrawingOptions = new $u(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return q(this, "typesMap", /* @__PURE__ */ new Map([[K.INK_THICKNESS, "stroke-width"], [K.INK_COLOR, "stroke"], [K.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, s, i, r, a) {
    return new Bu(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return Yl.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof fo) {
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
          popupRef: y
        },
        parent: {
          page: {
            pageNumber: w
          }
        }
      } = e;
      r = e = {
        annotationType: j.INK,
        color: Array.from(d),
        thickness: A,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: w - 1,
        rect: h.slice(0),
        rotation: l,
        id: c,
        deleted: !1,
        popupRef: y
      };
    }
    const a = await super.deserialize(e, s, i);
    return a.annotationElementId = e.id || null, a._initialData = r, a;
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = tn.getDefaultDrawingOptions({
      stroke: N.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i,
      rect: r
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: a,
        "stroke-opacity": o,
        "stroke-width": h
      }
    } = this, l = {
      annotationType: j.INK,
      color: mt._colorManager.convert(a),
      opacity: o,
      thickness: h,
      paths: {
        lines: s,
        points: i
      },
      pageIndex: this.pageIndex,
      rect: r,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return e ? l : this.annotationElementId && !b(this, vc, Dm).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s
    }), null;
  }
};
vc = new WeakSet(), Dm = /* @__PURE__ */ u(function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || e.color.some((o, h) => o !== s[h]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, "#hasElementChanged"), u(tn, "InkEditor"), $(tn, "_type", "ink"), $(tn, "_editorType", j.INK), $(tn, "_defaultDrawingOptions", null);
let Gu = tn;
var gt, Gt, Gi, si, zi, Ea, Ts, ks, Te, xa, J, qa, Ya, wl, Uu, vl, Vu, _l, Nm;
const yr = class yr extends mt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    m(this, J);
    m(this, gt, null);
    m(this, Gt, null);
    m(this, Gi, null);
    m(this, si, null);
    m(this, zi, null);
    m(this, Ea, "");
    m(this, Ts, null);
    m(this, ks, null);
    m(this, Te, !1);
    m(this, xa, !1);
    f(this, si, e.bitmapUrl), f(this, zi, e.bitmapFile);
  }
  static initialize(e, s) {
    mt.initialize(e, s);
  }
  static get supportedTypes() {
    return q(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((s) => `image/${s}`));
  }
  static get supportedTypesStr() {
    return q(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(e) {
    return this.supportedTypes.includes(e);
  }
  static paste(e, s) {
    s.pasteEditor(j.STAMP, {
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
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, h = await i.guess({
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
    n(this, Gt) && (f(this, gt, null), this._uiManager.imageManager.deleteId(n(this, Gt)), n(this, Ts)?.remove(), f(this, Ts, null), n(this, ks) && (clearTimeout(n(this, ks)), f(this, ks, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, Gt) && b(this, J, wl).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Gt) && n(this, Ts) === null && b(this, J, wl).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Gi) || n(this, gt) || n(this, si) || n(this, zi) || n(this, Gt));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    if (this.width && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.div.setAttribute("role", "figure"), this.addAltTextButton(), n(this, gt) ? b(this, J, Uu).call(this) : b(this, J, wl).call(this), this.width && !this.annotationElementId) {
      const [i, r] = this.parentDimensions;
      this.setAt(e * i, s * r, this.width * i, this.height * r);
    }
    return this._uiManager.addShouldRescale(this), this.div;
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, ks) !== null && clearTimeout(n(this, ks)), f(this, ks, setTimeout(() => {
      f(this, ks, null), b(this, J, Vu).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, gt), o = new ro();
    let h = n(this, gt), l = r, c = a, d = null;
    if (s) {
      if (r > s || a > s) {
        const T = Math.min(s / r, s / a);
        l = Math.floor(r * T), c = Math.floor(a * T);
      }
      d = document.createElement("canvas");
      const A = d.width = Math.ceil(l * o.sx), y = d.height = Math.ceil(c * o.sy);
      n(this, Te) || (h = b(this, J, vl).call(this, A, y));
      const w = d.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let _ = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : window.matchMedia?.("(prefers-color-scheme: dark)").matches && (_ = "#8f8f9d", v = "#42414d");
      const S = 15, x = S * o.sx, E = S * o.sy, C = new OffscreenCanvas(x * 2, E * 2), k = C.getContext("2d");
      k.fillStyle = _, k.fillRect(0, 0, x * 2, E * 2), k.fillStyle = v, k.fillRect(0, 0, x, E), k.fillRect(x, E, x, E), w.fillStyle = w.createPattern(C, "repeat"), w.fillRect(0, 0, A, y), w.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, y);
    }
    let p = null;
    if (i) {
      let A, y;
      if (o.symmetric && h.width < e && h.height < e)
        A = h.width, y = h.height;
      else if (h = n(this, gt), r > e || a > e) {
        const v = Math.min(e / r, e / a);
        A = Math.floor(r * v), y = Math.floor(a * v), n(this, Te) || (h = b(this, J, vl).call(this, A, y));
      }
      const _ = new OffscreenCanvas(A, y).getContext("2d", {
        willReadFrequently: !0
      });
      _.drawImage(h, 0, 0, h.width, h.height, 0, 0, A, y), p = {
        width: A,
        height: y,
        data: _.getImageData(0, 0, A, y).data
      };
    }
    return {
      canvas: d,
      width: l,
      height: c,
      imageData: p
    };
  }
  getImageForAltText() {
    return n(this, Ts);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof Vl) {
      const {
        data: {
          rect: w,
          rotation: _,
          id: v,
          structParent: S,
          popupRef: x
        },
        container: E,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = e, k = E.querySelector("canvas"), T = i.imageManager.getFromCanvas(E.id, k);
      k.remove();
      const F = (await s._structTree.getAriaAttributes(`${Ju}${v}`))?.get("aria-label") || "";
      r = e = {
        annotationType: j.STAMP,
        bitmapId: T.id,
        bitmap: T.bitmap,
        pageIndex: C - 1,
        rect: w.slice(0),
        rotation: _,
        id: v,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: F
        },
        isSvg: !1,
        structParent: S,
        popupRef: x
      };
    }
    const a = await super.deserialize(e, s, i), {
      rect: o,
      bitmap: h,
      bitmapUrl: l,
      bitmapId: c,
      isSvg: d,
      accessibilityData: p
    } = e;
    c && i.imageManager.isValidId(c) ? (f(a, Gt, c), h && f(a, gt, h)) : f(a, si, l), f(a, Te, d);
    const [A, y] = a.pageDimensions;
    return a.width = (o[2] - o[0]) / A, a.height = (o[3] - o[1]) / y, a.annotationElementId = e.id || null, p && (a.altTextData = p), a._initialData = r, f(a, xa, !!r), a;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = {
      annotationType: j.STAMP,
      bitmapId: n(this, Gt),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: n(this, Te),
      structTreeParentId: this._structTreeParentId
    };
    if (e)
      return i.bitmapUrl = b(this, J, _l).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const h = b(this, J, Nm).call(this, i);
      if (h.isSame)
        return null;
      h.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1;
    }
    if (i.id = this.annotationElementId, s === null)
      return i;
    s.stamps ||= /* @__PURE__ */ new Map();
    const o = n(this, Te) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, Gt)))
      s.stamps.set(n(this, Gt), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, J, _l).call(this, !1);
    else if (n(this, Te)) {
      const h = s.stamps.get(n(this, Gt));
      o > h.area && (h.area = o, h.serialized.bitmap.close(), h.serialized.bitmap = b(this, J, _l).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getRect(0, 0)
    }), null;
  }
};
gt = new WeakMap(), Gt = new WeakMap(), Gi = new WeakMap(), si = new WeakMap(), zi = new WeakMap(), Ea = new WeakMap(), Ts = new WeakMap(), ks = new WeakMap(), Te = new WeakMap(), xa = new WeakMap(), J = new WeakSet(), qa = /* @__PURE__ */ u(function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  f(this, gt, e.bitmap), s || (f(this, Gt, e.id), f(this, Te, e.isSvg)), e.file && f(this, Ea, e.file.name), b(this, J, Uu).call(this);
}, "#getBitmapFetched"), Ya = /* @__PURE__ */ u(function() {
  if (f(this, Gi, null), this._uiManager.enableWaiting(!1), !!n(this, Ts)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, gt)) {
      this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, gt)) {
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
}, "#getBitmapDone"), wl = /* @__PURE__ */ u(function() {
  if (n(this, Gt)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Gt)).then((i) => b(this, J, qa).call(this, i, !0)).finally(() => b(this, J, Ya).call(this));
    return;
  }
  if (n(this, si)) {
    const i = n(this, si);
    f(this, si, null), this._uiManager.enableWaiting(!0), f(this, Gi, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, J, qa).call(this, r)).finally(() => b(this, J, Ya).call(this)));
    return;
  }
  if (n(this, zi)) {
    const i = n(this, zi);
    f(this, zi, null), this._uiManager.enableWaiting(!0), f(this, Gi, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, J, qa).call(this, r)).finally(() => b(this, J, Ya).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = yr.supportedTypesStr;
  const s = this._uiManager._signal;
  f(this, Gi, new Promise((i) => {
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
        }), b(this, J, qa).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, J, Ya).call(this))), e.click();
}, "#getBitmap"), Uu = /* @__PURE__ */ u(function() {
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, gt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const d = Math.min(o * r / s, o * a / i);
    s *= d, i *= d;
  }
  const [h, l] = this.parentDimensions;
  this.setDims(s * h / r, i * l / a), this._uiManager.enableWaiting(!1);
  const c = f(this, Ts, document.createElement("canvas"));
  c.setAttribute("role", "img"), this.addContainer(c), this.width = s / r, this.height = i / a, this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, J, Vu).call(this), n(this, xa) || (this.parent.addUndoableEditor(this), f(this, xa, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Ea) && c.setAttribute("aria-label", n(this, Ea));
}, "#createCanvas"), vl = /* @__PURE__ */ u(function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, gt);
  let a = i, o = r, h = n(this, gt);
  for (; a > 2 * e || o > 2 * s; ) {
    const l = a, c = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * s && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const d = new OffscreenCanvas(a, o);
    d.getContext("2d").drawImage(h, 0, 0, l, c, 0, 0, a, o), h = d.transferToImageBitmap();
  }
  return h;
}, "#scaleBitmap"), Vu = /* @__PURE__ */ u(function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new ro(), o = Math.ceil(i * e * a.sx), h = Math.ceil(r * s * a.sy), l = n(this, Ts);
  if (!l || l.width === o && l.height === h)
    return;
  l.width = o, l.height = h;
  const c = n(this, Te) ? n(this, gt) : b(this, J, vl).call(this, o, h), d = l.getContext("2d");
  d.filter = this._uiManager.hcmFilter, d.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, h);
}, "#drawBitmap"), _l = /* @__PURE__ */ u(function(e) {
  if (e) {
    if (n(this, Te)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, Gt));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, gt), s.getContext("2d").drawImage(n(this, gt), 0, 0), s.toDataURL();
  }
  if (n(this, Te)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * Xi.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Xi.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, gt), 0, 0, n(this, gt).width, n(this, gt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, gt));
}, "#serializeBitmap"), Nm = /* @__PURE__ */ u(function(e) {
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (e.accessibilityData?.alt || "") === i;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, "#hasElementChanged"), u(yr, "StampEditor"), $(yr, "_type", "stamp"), $(yr, "_editorType", j.STAMP);
let zu = yr;
var ir, Ca, Ms, Ui, ii, Ge, Vi, Ta, nr, ss, ni, Kt, ri, D, ji, dt, Fm, cs, Wu, Xu, Sl;
const De = class De {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: h,
    viewport: l,
    l10n: c
  }) {
    m(this, dt);
    m(this, ir);
    m(this, Ca, !1);
    m(this, Ms, null);
    m(this, Ui, null);
    m(this, ii, null);
    m(this, Ge, /* @__PURE__ */ new Map());
    m(this, Vi, !1);
    m(this, Ta, !1);
    m(this, nr, !1);
    m(this, ss, null);
    m(this, ni, null);
    m(this, Kt, null);
    m(this, ri, null);
    m(this, D);
    const d = [...n(De, ji).values()];
    if (!De._initialized) {
      De._initialized = !0;
      for (const p of d)
        p.initialize(c, t);
    }
    t.registerEditorTypes(d), f(this, D, t), this.pageIndex = e, this.div = s, f(this, ir, r), f(this, Ms, a), this.viewport = l, f(this, Kt, h), this.drawLayer = o, this._structTree = i, n(this, D).addLayer(this);
  }
  get isEmpty() {
    return n(this, Ge).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, D).getMode() === j.NONE;
  }
  updateToolbar(t) {
    n(this, D).updateToolbar(t);
  }
  updateMode(t = n(this, D).getMode()) {
    switch (b(this, dt, Sl).call(this), t) {
      case j.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case j.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case j.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    for (const s of n(De, ji).values())
      e.toggle(`${s._type}Editing`, t === s._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    return t === n(this, Kt)?.div;
  }
  setEditingState(t) {
    n(this, D).setEditingState(t);
  }
  addCommands(t) {
    n(this, D).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, D).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    n(this, Ms)?.div.classList.toggle("disabled", !t);
  }
  async enable() {
    f(this, nr, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, Ge).values())
      s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, D).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    if (!n(this, Ms)) {
      f(this, nr, !1);
      return;
    }
    const e = n(this, Ms).getEditableAnnotations();
    for (const s of e) {
      if (s.hide(), n(this, D).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
        continue;
      const i = await this.deserialize(s);
      i && (this.addOrRebuild(i), i.enableEditing());
    }
    f(this, nr, !1);
  }
  disable() {
    f(this, Ta, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const i of n(this, Ge).values())
      if (i.disableEditing(), !!i.annotationElementId) {
        if (i.serialize() !== null) {
          t.set(i.annotationElementId, i);
          continue;
        } else
          e.set(i.annotationElementId, i);
        this.getEditableAnnotation(i.annotationElementId)?.show(), i.remove();
      }
    if (n(this, Ms)) {
      const i = n(this, Ms).getEditableAnnotations();
      for (const r of i) {
        const {
          id: a
        } = r.data;
        if (n(this, D).isDeletedAnnotationElement(a))
          continue;
        let o = e.get(a);
        if (o) {
          o.resetAnnotationElement(r), o.show(!1), r.show();
          continue;
        }
        o = t.get(a), o && (n(this, D).addChangedExistingAnnotation(o), o.renderAnnotationElement(r) && o.show(!1)), r.show();
      }
    }
    b(this, dt, Sl).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const i of n(De, ji).values())
      s.remove(`${i._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), f(this, Ta, !1);
  }
  getEditableAnnotation(t) {
    return n(this, Ms)?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    n(this, D).getActive() !== t && n(this, D).setActiveEditor(t);
  }
  enableTextSelection() {
    if (this.div.tabIndex = -1, n(this, Kt)?.div && !n(this, ri)) {
      f(this, ri, new AbortController());
      const t = n(this, D).combinedSignal(n(this, ri));
      n(this, Kt).div.addEventListener("pointerdown", b(this, dt, Fm).bind(this), {
        signal: t
      }), n(this, Kt).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0, n(this, Kt)?.div && n(this, ri) && (n(this, ri).abort(), f(this, ri, null), n(this, Kt).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Ui))
      return;
    f(this, Ui, new AbortController());
    const t = n(this, D).combinedSignal(n(this, Ui));
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
    n(this, Ui)?.abort(), f(this, Ui, null);
  }
  attach(t) {
    n(this, Ge).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, D).isDeletedAnnotationElement(e) && n(this, D).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    n(this, Ge).delete(t.id), n(this, ir)?.removePointerInTextLayer(t.contentDiv), !n(this, Ta) && t.annotationElementId && n(this, D).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, D).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, D).addDeletedAnnotationElement(t.annotationElementId), mt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), t.parent?.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, D).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, nr)), n(this, D).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, ii) && (t._focusEventsAllowed = !1, f(this, ii, setTimeout(() => {
      f(this, ii, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, D)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = n(this, ir)?.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent ||= this, t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = /* @__PURE__ */ u(() => t._uiManager.rebuild(t), "cmd"), s = /* @__PURE__ */ u(() => {
      t.remove();
    }, "undo");
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getNextId() {
    return n(this, D).getId();
  }
  combinedSignal(t) {
    return n(this, D).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    return n(this, dt, cs)?.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    n(this, D).updateToolbar(t), n(this, D).updateMode(t);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, dt, Xu).call(this), r = this.getNextId(), a = b(this, dt, Wu).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, D),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    return await n(De, ji).get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, n(this, D)) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = this.getNextId(), r = b(this, dt, Wu).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, D),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  addNewEditor() {
    this.createAndAddNewEditor(b(this, dt, Xu).call(this), !0);
  }
  setSelected(t) {
    n(this, D).setSelected(t);
  }
  toggleSelected(t) {
    n(this, D).toggleSelected(t);
  }
  unselect(t) {
    n(this, D).unselect(t);
  }
  pointerup(t) {
    const {
      isMac: e
    } = Ut.platform;
    if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && n(this, Vi) && (f(this, Vi, !1), !(n(this, dt, cs)?.isDrawer && n(this, dt, cs).supportMultipleDrawings))) {
      if (!n(this, Ca)) {
        f(this, Ca, !0);
        return;
      }
      if (n(this, D).getMode() === j.STAMP) {
        n(this, D).unselectAll();
        return;
      }
      this.createAndAddNewEditor(t, !1);
    }
  }
  pointerdown(t) {
    if (n(this, D).getMode() === j.HIGHLIGHT && this.enableTextSelection(), n(this, Vi)) {
      f(this, Vi, !1);
      return;
    }
    const {
      isMac: e
    } = Ut.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (f(this, Vi, !0), n(this, dt, cs)?.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, D).getActive();
    f(this, Ca, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus(), n(this, ss)) {
      n(this, dt, cs).startDrawing(this, n(this, D), !1, t);
      return;
    }
    n(this, D).setCurrentDrawingSession(this), f(this, ss, new AbortController());
    const e = n(this, D).combinedSignal(n(this, ss));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (f(this, ni, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, dt, cs).startDrawing(this, n(this, D), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && f(this, ni, e);
      return;
    }
    n(this, ni) && setTimeout(() => {
      n(this, ni)?.focus(), f(this, ni, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, ss) ? (n(this, D).setCurrentDrawingSession(null), n(this, ss).abort(), f(this, ss, null), f(this, ni, null), n(this, dt, cs).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, D).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, ss) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, ss) && n(this, dt, cs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove(), n(this, D).getActive()?.parent === this && (n(this, D).commitOrRemove(), n(this, D).setActiveEditor(null)), n(this, ii) && (clearTimeout(n(this, ii)), f(this, ii, null));
    for (const t of n(this, Ge).values())
      n(this, ir)?.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = !1, t.div.remove();
    this.div = null, n(this, Ge).clear(), n(this, D).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, ar(this.div, t);
    for (const e of n(this, D).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, D).commitOrRemove(), b(this, dt, Sl).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, ar(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, Ge).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, D).viewParameters.realScale;
  }
};
ir = new WeakMap(), Ca = new WeakMap(), Ms = new WeakMap(), Ui = new WeakMap(), ii = new WeakMap(), Ge = new WeakMap(), Vi = new WeakMap(), Ta = new WeakMap(), nr = new WeakMap(), ss = new WeakMap(), ni = new WeakMap(), Kt = new WeakMap(), ri = new WeakMap(), D = new WeakMap(), ji = new WeakMap(), dt = new WeakSet(), Fm = /* @__PURE__ */ u(function(t) {
  n(this, D).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Kt).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Kt).div.contains(e)) {
    const {
      isMac: s
    } = Ut.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, D).showAllEditors("highlight", !0, !0), n(this, Kt).div.classList.add("free"), this.toggleDrawing(), ql.startHighlighting(this, n(this, D).direction === "ltr", {
      target: n(this, Kt).div,
      x: t.x,
      y: t.y
    }), n(this, Kt).div.addEventListener("pointerup", () => {
      n(this, Kt).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, D)._signal
    }), t.preventDefault();
  }
}, "#textLayerPointerDown"), cs = /* @__PURE__ */ u(function() {
  return n(De, ji).get(n(this, D).getMode());
}, "#currentEditorType"), Wu = /* @__PURE__ */ u(function(t) {
  const e = n(this, dt, cs);
  return e ? new e.prototype.constructor(t) : null;
}, "#createNewEditor"), Xu = /* @__PURE__ */ u(function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.div.getBoundingClientRect(), r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), h = Math.min(window.innerHeight, e + i), l = (r + o) / 2 - t, c = (a + h) / 2 - e, [d, p] = this.viewport.rotation % 180 === 0 ? [l, c] : [c, l];
  return {
    offsetX: d,
    offsetY: p
  };
}, "#getCenterPoint"), Sl = /* @__PURE__ */ u(function() {
  for (const t of n(this, Ge).values())
    t.isEmpty() && t.remove();
}, "#cleanup"), u(De, "AnnotationEditorLayer"), $(De, "_initialized", !1), m(De, ji, new Map([Eu, Gu, zu, ql].map((t) => [t._editorType, t])));
let ju = De;
var is, $h, ne, rr, _c, Om, Ps, Yu, Hm, Ku;
const Ft = class Ft {
  constructor({
    pageIndex: t
  }) {
    m(this, Ps);
    m(this, is, null);
    m(this, $h, 0);
    m(this, ne, /* @__PURE__ */ new Map());
    m(this, rr, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, is)) {
      f(this, is, t);
      return;
    }
    if (n(this, is) !== t) {
      if (n(this, ne).size > 0)
        for (const e of n(this, ne).values())
          e.remove(), t.append(e);
      f(this, is, t);
    }
  }
  static get _svgFactory() {
    return q(this, "_svgFactory", new co());
  }
  draw(t, e = !1, s = !1) {
    const i = Zt(this, $h)._++, r = b(this, Ps, Yu).call(this), a = Ft._svgFactory.createElement("defs");
    r.append(a);
    const o = Ft._svgFactory.createElement("path");
    a.append(o);
    const h = `path_p${this.pageIndex}_${i}`;
    o.setAttribute("id", h), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, rr).set(i, o);
    const l = s ? b(this, Ps, Hm).call(this, a, h) : null, c = Ft._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${h}`), this.updateProperties(r, t), n(this, ne).set(i, r), {
      id: i,
      clipPathId: `url(#${l})`
    };
  }
  drawOutline(t, e) {
    const s = Zt(this, $h)._++, i = b(this, Ps, Yu).call(this), r = Ft._svgFactory.createElement("defs");
    i.append(r);
    const a = Ft._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let h;
    if (e) {
      const d = Ft._svgFactory.createElement("mask");
      r.append(d), h = `mask_p${this.pageIndex}_${s}`, d.setAttribute("id", h), d.setAttribute("maskUnits", "objectBoundingBox");
      const p = Ft._svgFactory.createElement("rect");
      d.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const A = Ft._svgFactory.createElement("use");
      d.append(A), A.setAttribute("href", `#${o}`), A.setAttribute("stroke", "none"), A.setAttribute("fill", "black"), A.setAttribute("fill-rule", "nonzero"), A.classList.add("mask");
    }
    const l = Ft._svgFactory.createElement("use");
    i.append(l), l.setAttribute("href", `#${o}`), h && l.setAttribute("mask", `url(#${h})`);
    const c = l.cloneNode();
    return i.append(c), l.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, ne).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, rr).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var h;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, ne).get(t) : t;
    if (o) {
      if (s && b(this, Ps, Ku).call(this, o, s), i && b(h = Ft, _c, Om).call(h, o, i), r) {
        const {
          classList: l
        } = o;
        for (const [c, d] of Object.entries(r))
          l.toggle(c, d);
      }
      if (a) {
        const c = o.firstChild.firstChild;
        b(this, Ps, Ku).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, ne).get(t);
    s && (n(e, is).append(s), n(this, ne).delete(t), n(e, ne).set(t, s));
  }
  remove(t) {
    n(this, rr).delete(t), n(this, is) !== null && (n(this, ne).get(t).remove(), n(this, ne).delete(t));
  }
  destroy() {
    f(this, is, null);
    for (const t of n(this, ne).values())
      t.remove();
    n(this, ne).clear(), n(this, rr).clear();
  }
};
is = new WeakMap(), $h = new WeakMap(), ne = new WeakMap(), rr = new WeakMap(), _c = new WeakSet(), Om = /* @__PURE__ */ u(function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, "#setBox"), Ps = new WeakSet(), Yu = /* @__PURE__ */ u(function() {
  const t = Ft._svgFactory.create(1, 1, !0);
  return n(this, is).append(t), t.setAttribute("aria-hidden", !0), t;
}, "#createSVG"), Hm = /* @__PURE__ */ u(function(t, e) {
  const s = Ft._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Ft._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, "#createClipPath"), Ku = /* @__PURE__ */ u(function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, "#updateProperties"), m(Ft, _c), u(Ft, "DrawLayer");
let qu = Ft;
globalThis.pdfjsTestingUtils = {
  HighlightOutliner: po
};
var Ib = G.AbortException, Db = G.AnnotationEditorLayer, Nb = G.AnnotationEditorParamsType, Fb = G.AnnotationEditorType, Ob = G.AnnotationEditorUIManager, Hb = G.AnnotationLayer, Bb = G.AnnotationMode, $b = G.ColorPicker, Gb = G.DOMSVGFactory, zb = G.DrawLayer, Ub = G.FeatureTest, Vb = G.GlobalWorkerOptions, jb = G.ImageKind, Wb = G.InvalidPDFException, Xb = G.MissingPDFException, qb = G.OPS, Yb = G.OutputScale, Kb = G.PDFDataRangeTransport, Qb = G.PDFDateString, Jb = G.PDFWorker, Zb = G.PasswordResponses, tA = G.PermissionFlag, eA = G.PixelsPerInch, sA = G.RenderingCancelledException, iA = G.TextLayer, nA = G.TouchManager, rA = G.UnexpectedResponseException, aA = G.Util, oA = G.VerbosityLevel, hA = G.XfaLayer, lA = G.build, cA = G.createValidAbsoluteUrl, dA = G.fetchData, uA = G.getDocument, fA = G.getFilenameFromUrl, pA = G.getPdfFilenameFromUrl, gA = G.getXfaPageViewport, mA = G.isDataScheme, bA = G.isPdfFile, AA = G.noContextMenu, yA = G.normalizeUnicode, wA = G.setLayerDimensions, vA = G.shadow, _A = G.stopEvent, SA = G.version;
export {
  Ib as AbortException,
  Db as AnnotationEditorLayer,
  Nb as AnnotationEditorParamsType,
  Fb as AnnotationEditorType,
  Ob as AnnotationEditorUIManager,
  Hb as AnnotationLayer,
  Bb as AnnotationMode,
  $b as ColorPicker,
  Gb as DOMSVGFactory,
  zb as DrawLayer,
  Ub as FeatureTest,
  Vb as GlobalWorkerOptions,
  jb as ImageKind,
  Wb as InvalidPDFException,
  Xb as MissingPDFException,
  qb as OPS,
  Yb as OutputScale,
  Kb as PDFDataRangeTransport,
  Qb as PDFDateString,
  Jb as PDFWorker,
  Zb as PasswordResponses,
  tA as PermissionFlag,
  eA as PixelsPerInch,
  sA as RenderingCancelledException,
  iA as TextLayer,
  nA as TouchManager,
  rA as UnexpectedResponseException,
  aA as Util,
  oA as VerbosityLevel,
  hA as XfaLayer,
  lA as build,
  cA as createValidAbsoluteUrl,
  dA as fetchData,
  uA as getDocument,
  fA as getFilenameFromUrl,
  pA as getPdfFilenameFromUrl,
  gA as getXfaPageViewport,
  mA as isDataScheme,
  bA as isPdfFile,
  AA as noContextMenu,
  yA as normalizeUnicode,
  wA as setLayerDimensions,
  vA as shadow,
  _A as stopEvent,
  SA as version
};
