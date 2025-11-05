var Tt = Object.defineProperty;
var o = (r, e) => Tt(r, "name", { value: e, configurable: !0 });
const Pe = "lit-localize-status";
const Ct = /* @__PURE__ */ o((r, ...e) => ({
  strTag: !0,
  strings: r,
  values: e
}), "_str"), l = Ct, Mt = /* @__PURE__ */ o((r) => typeof r != "string" && "strTag" in r, "isStrTagged"), gt = /* @__PURE__ */ o((r, e, t) => {
  let s = r[0];
  for (let i = 1; i < r.length; i++)
    s += e[t ? t[i - 1] : i - 1], s += r[i];
  return s;
}, "joinStringsAndValues");
const pt = /* @__PURE__ */ o((r) => Mt(r) ? gt(r.strings, r.values) : r, "defaultMsg");
let Rt = pt, Qe = !1;
function kt(r) {
  if (Qe)
    throw new Error("lit-localize can only be configured once");
  Rt = r, Qe = !0;
}
o(kt, "_installMsgImplementation");
const We = class We {
  constructor(e) {
    this.__litLocalizeEventHandler = (t) => {
      t.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = e;
  }
  hostConnected() {
    window.addEventListener(Pe, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(Pe, this.__litLocalizeEventHandler);
  }
};
o(We, "LocalizeController");
let Te = We;
const Lt = /* @__PURE__ */ o((r) => r.addController(new Te(r)), "_updateWhenLocaleChanges"), xt = Lt;
const bs = /* @__PURE__ */ o(() => (r, e) => (r.addInitializer(xt), r), "localized");
const Ve = class Ve {
  constructor() {
    this.settled = !1, this.promise = new Promise((e, t) => {
      this._resolve = e, this._reject = t;
    });
  }
  resolve(e) {
    this.settled = !0, this._resolve(e);
  }
  reject(e) {
    this.settled = !0, this._reject(e);
  }
};
o(Ve, "Deferred");
let ce = Ve;
const A = [];
for (let r = 0; r < 256; r++)
  A[r] = (r >> 4 & 15).toString(16) + (r & 15).toString(16);
function Nt(r) {
  let e = 0, t = 8997, s = 0, i = 33826, n = 0, a = 40164, f = 0, d = 52210;
  for (let c = 0; c < r.length; c++)
    t ^= r.charCodeAt(c), e = t * 435, s = i * 435, n = a * 435, f = d * 435, n += t << 8, f += i << 8, s += e >>> 16, t = e & 65535, n += s >>> 16, i = s & 65535, d = f + (n >>> 16) & 65535, a = n & 65535;
  return A[d >> 8] + A[d & 255] + A[a >> 8] + A[a & 255] + A[i >> 8] + A[i & 255] + A[t >> 8] + A[t & 255];
}
o(Nt, "fnv1a64");
const Ot = "", Ut = "h", Ht = "s";
function It(r, e) {
  return (e ? Ut : Ht) + Nt(typeof r == "string" ? r : r.join(Ot));
}
o(It, "generateMsgId");
const Ye = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new Map();
function jt(r, e, t) {
  if (r) {
    const s = t?.id ?? Dt(e), i = r[s];
    if (i) {
      if (typeof i == "string")
        return i;
      if ("strTag" in i)
        return gt(
          i.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          i.values
        );
      {
        let n = Ye.get(i);
        return n === void 0 && (n = i.values, Ye.set(i, n)), {
          ...i,
          values: n.map((a) => e.values[a])
        };
      }
    }
  }
  return pt(e);
}
o(jt, "runtimeMsg");
function Dt(r) {
  const e = typeof r == "string" ? r : r.strings;
  let t = et.get(e);
  return t === void 0 && (t = It(e, typeof r != "string" && !("strTag" in r)), et.set(e, t)), t;
}
o(Dt, "generateId");
function ye(r) {
  window.dispatchEvent(new CustomEvent(Pe, { detail: r }));
}
o(ye, "dispatchStatusEvent");
let ue = "", Ae, mt, fe, Ce, bt, M = new ce();
M.resolve();
let ae = 0;
const $s = /* @__PURE__ */ o((r) => (kt((e, t) => jt(bt, e, t)), ue = mt = r.sourceLocale, fe = new Set(r.targetLocales), fe.add(r.sourceLocale), Ce = r.loadLocale, { getLocale: Bt, setLocale: Wt }), "configureLocalization"), Bt = /* @__PURE__ */ o(() => ue, "getLocale"), Wt = /* @__PURE__ */ o((r) => {
  if (r === (Ae ?? ue))
    return M.promise;
  if (!fe || !Ce)
    throw new Error("Internal error");
  if (!fe.has(r))
    throw new Error("Invalid locale code");
  ae++;
  const e = ae;
  return Ae = r, M.settled && (M = new ce()), ye({ status: "loading", loadingLocale: r }), (r === mt ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : Ce(r)).then((s) => {
    ae === e && (ue = r, Ae = void 0, bt = s.templates, ye({ status: "ready", readyLocale: r }), M.resolve());
  }, (s) => {
    ae === e && (ye({
      status: "error",
      errorLocale: r,
      errorMessage: s.toString()
    }), M.reject(s));
  }), M.promise;
}, "setLocale");
var O;
const Vt = (O = class {
  get shadowRoot() {
    return this.__host.__shadowRoot;
  }
  constructor(e) {
    this.ariaAtomic = "", this.ariaAutoComplete = "", this.ariaBrailleLabel = "", this.ariaBrailleRoleDescription = "", this.ariaBusy = "", this.ariaChecked = "", this.ariaColCount = "", this.ariaColIndex = "", this.ariaColSpan = "", this.ariaCurrent = "", this.ariaDescription = "", this.ariaDisabled = "", this.ariaExpanded = "", this.ariaHasPopup = "", this.ariaHidden = "", this.ariaInvalid = "", this.ariaKeyShortcuts = "", this.ariaLabel = "", this.ariaLevel = "", this.ariaLive = "", this.ariaModal = "", this.ariaMultiLine = "", this.ariaMultiSelectable = "", this.ariaOrientation = "", this.ariaPlaceholder = "", this.ariaPosInSet = "", this.ariaPressed = "", this.ariaReadOnly = "", this.ariaRequired = "", this.ariaRoleDescription = "", this.ariaRowCount = "", this.ariaRowIndex = "", this.ariaRowSpan = "", this.ariaSelected = "", this.ariaSetSize = "", this.ariaSort = "", this.ariaValueMax = "", this.ariaValueMin = "", this.ariaValueNow = "", this.ariaValueText = "", this.role = "", this.form = null, this.labels = [], this.states = /* @__PURE__ */ new Set(), this.validationMessage = "", this.validity = {}, this.willValidate = !0, this.__host = e;
  }
  checkValidity() {
    return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."), !0;
  }
  reportValidity() {
    return !0;
  }
  setFormValue() {
  }
  setValidity() {
  }
}, o(O, "ElementInternals"), O);
var E = function(r, e, t, s, i) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? i.call(r, t) : i ? i.value = t : e.set(r, t), t;
}, $ = function(r, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(r) : s ? s.value : e.get(r);
}, L, oe, de, Z, Se, J, le, T, X, w, he, tt;
const st = /* @__PURE__ */ o((r) => typeof r == "boolean" ? r : r?.capture ?? !1, "isCaptureEventListener"), ge = 0, Me = 1, pe = 2, Re = 3;
var U;
const zt = (U = class {
  constructor() {
    this.__eventListeners = /* @__PURE__ */ new Map(), this.__captureEventListeners = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t, s) {
    if (t == null)
      return;
    const i = st(s) ? this.__captureEventListeners : this.__eventListeners;
    let n = i.get(e);
    if (n === void 0)
      n = /* @__PURE__ */ new Map(), i.set(e, n);
    else if (n.has(t))
      return;
    const a = typeof s == "object" && s ? s : {};
    a.signal?.addEventListener("abort", () => this.removeEventListener(e, t, s)), n.set(t, a ?? {});
  }
  removeEventListener(e, t, s) {
    if (t == null)
      return;
    const i = st(s) ? this.__captureEventListeners : this.__eventListeners, n = i.get(e);
    n !== void 0 && (n.delete(t), n.size || i.delete(e));
  }
  dispatchEvent(e) {
    const t = [this];
    let s = this.__eventTargetParent;
    if (e.composed)
      for (; s; )
        t.push(s), s = s.__eventTargetParent;
    else
      for (; s && s !== this.__host; )
        t.push(s), s = s.__eventTargetParent;
    let i = !1, n = !1, a = ge, f = null, d = null, c = null;
    const m = e.stopPropagation, u = e.stopImmediatePropagation;
    Object.defineProperties(e, {
      target: {
        get() {
          return f ?? d;
        },
        ...h
      },
      srcElement: {
        get() {
          return e.target;
        },
        ...h
      },
      currentTarget: {
        get() {
          return c;
        },
        ...h
      },
      eventPhase: {
        get() {
          return a;
        },
        ...h
      },
      composedPath: {
        value: /* @__PURE__ */ o(() => t, "value"),
        ...h
      },
      stopPropagation: {
        value: /* @__PURE__ */ o(() => {
          i = !0, m.call(e);
        }, "value"),
        ...h
      },
      stopImmediatePropagation: {
        value: /* @__PURE__ */ o(() => {
          n = !0, u.call(e);
        }, "value"),
        ...h
      }
    });
    const v = /* @__PURE__ */ o((p, y, K) => {
      typeof p == "function" ? p(e) : typeof p?.handleEvent == "function" && p.handleEvent(e), y.once && K.delete(p);
    }, "invokeEventListener"), _ = /* @__PURE__ */ o(() => (c = null, a = ge, !e.defaultPrevented), "finishDispatch"), S = t.slice().reverse();
    f = !this.__host || !e.composed ? this : null;
    const Xe = /* @__PURE__ */ o((p) => {
      for (d = this; d.__host && p.includes(d.__host); )
        d = d.__host;
    }, "retarget");
    for (const p of S) {
      !f && (!d || d === p.__host) && Xe(S.slice(S.indexOf(p))), c = p, a = p === e.target ? pe : Me;
      const y = p.__captureEventListeners.get(e.type);
      if (y) {
        for (const [K, Ee] of y)
          if (v(K, Ee, y), n)
            return _();
      }
      if (i)
        return _();
    }
    const ve = e.bubbles ? t : [this];
    d = null;
    for (const p of ve) {
      !f && (!d || p === d.__host) && Xe(ve.slice(0, ve.indexOf(p) + 1)), c = p, a = p === e.target ? pe : Re;
      const y = p.__eventListeners.get(e.type);
      if (y) {
        for (const [K, Ee] of y)
          if (v(K, Ee, y), n)
            return _();
      }
      if (i)
        return _();
    }
    return _();
  }
}, o(U, "EventTarget"), U), Ft = zt, h = { __proto__: null };
h.enumerable = !0;
Object.freeze(h);
var H;
const He = (w = (H = class {
  constructor(e, t = {}) {
    if (L.set(this, !1), oe.set(this, !1), de.set(this, !1), Z.set(this, !1), Se.set(this, Date.now()), J.set(this, !1), le.set(this, void 0), T.set(this, void 0), X.set(this, void 0), this.NONE = ge, this.CAPTURING_PHASE = Me, this.AT_TARGET = pe, this.BUBBLING_PHASE = Re, arguments.length === 0)
      throw new Error("The type argument must be specified");
    if (typeof t != "object" || !t)
      throw new Error('The "options" argument must be an object');
    const { bubbles: s, cancelable: i, composed: n } = t;
    E(this, L, !!i, "f"), E(this, oe, !!s, "f"), E(this, de, !!n, "f"), E(this, le, `${e}`, "f"), E(this, T, null, "f"), E(this, X, !1, "f");
  }
  initEvent(e, t, s) {
    throw new Error("Method not implemented.");
  }
  stopImmediatePropagation() {
    this.stopPropagation();
  }
  preventDefault() {
    E(this, Z, !0, "f");
  }
  get target() {
    return $(this, T, "f");
  }
  get currentTarget() {
    return $(this, T, "f");
  }
  get srcElement() {
    return $(this, T, "f");
  }
  get type() {
    return $(this, le, "f");
  }
  get cancelable() {
    return $(this, L, "f");
  }
  get defaultPrevented() {
    return $(this, L, "f") && $(this, Z, "f");
  }
  get timeStamp() {
    return $(this, Se, "f");
  }
  composedPath() {
    return $(this, X, "f") ? [$(this, T, "f")] : [];
  }
  get returnValue() {
    return !$(this, L, "f") || !$(this, Z, "f");
  }
  get bubbles() {
    return $(this, oe, "f");
  }
  get composed() {
    return $(this, de, "f");
  }
  get eventPhase() {
    return $(this, X, "f") ? w.AT_TARGET : w.NONE;
  }
  get cancelBubble() {
    return $(this, J, "f");
  }
  set cancelBubble(e) {
    e && E(this, J, !0, "f");
  }
  stopPropagation() {
    E(this, J, !0, "f");
  }
  get isTrusted() {
    return !1;
  }
}, o(H, "Event"), H), L = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), w.NONE = ge, w.CAPTURING_PHASE = Me, w.AT_TARGET = pe, w.BUBBLING_PHASE = Re, w);
Object.defineProperties(He.prototype, {
  initEvent: h,
  stopImmediatePropagation: h,
  preventDefault: h,
  target: h,
  currentTarget: h,
  srcElement: h,
  type: h,
  cancelable: h,
  defaultPrevented: h,
  timeStamp: h,
  composedPath: h,
  returnValue: h,
  bubbles: h,
  composed: h,
  eventPhase: h,
  cancelBubble: h,
  stopPropagation: h,
  isTrusted: h
});
var I;
const $t = (tt = (I = class extends He {
  constructor(e, t = {}) {
    super(e, t), he.set(this, void 0), E(this, he, t?.detail ?? null, "f");
  }
  initCustomEvent(e, t, s, i) {
    throw new Error("Method not implemented.");
  }
  get detail() {
    return $(this, he, "f");
  }
}, o(I, "CustomEvent"), I), he = /* @__PURE__ */ new WeakMap(), tt);
Object.defineProperties($t.prototype, {
  detail: h
});
const Gt = He, qt = $t;
globalThis.Event ??= Gt;
globalThis.CustomEvent ??= qt;
const it = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ o((r) => {
  let e = it.get(r);
  return e === void 0 && it.set(r, e = /* @__PURE__ */ new Map()), e;
}, "attributesForElement");
var j;
const Kt = (j = class extends Ft {
  constructor() {
    super(...arguments), this.__shadowRootMode = null, this.__shadowRoot = null, this.__internals = null;
  }
  get attributes() {
    return Array.from(Q(this)).map(([e, t]) => ({
      name: e,
      value: t
    }));
  }
  get shadowRoot() {
    return this.__shadowRootMode === "closed" ? null : this.__shadowRoot;
  }
  get localName() {
    return this.constructor.__localName;
  }
  get tagName() {
    return this.localName?.toUpperCase();
  }
  setAttribute(e, t) {
    Q(this).set(e, String(t));
  }
  removeAttribute(e) {
    Q(this).delete(e);
  }
  toggleAttribute(e, t) {
    if (this.hasAttribute(e)) {
      if (t === void 0 || !t)
        return this.removeAttribute(e), !1;
    } else
      return t === void 0 || t ? (this.setAttribute(e, ""), !0) : !1;
    return !0;
  }
  hasAttribute(e) {
    return Q(this).has(e);
  }
  attachShadow(e) {
    const t = { host: this };
    return this.__shadowRootMode = e.mode, e && e.mode === "open" && (this.__shadowRoot = t), t;
  }
  attachInternals() {
    if (this.__internals !== null)
      throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
    const e = new Vt(this);
    return this.__internals = e, e;
  }
  getAttribute(e) {
    return Q(this).get(e) ?? null;
  }
}, o(j, "Element"), j);
var D;
const Zt = (D = class extends Kt {
}, o(D, "HTMLElement"), D), _t = Zt;
globalThis.litServerRoot ??= Object.defineProperty(new _t(), "localName", {
  // Patch localName (and tagName) to return a unique name.
  get() {
    return "lit-server-root";
  }
});
var B;
const Jt = (B = class {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map();
  }
  define(e, t) {
    if (this.__definitions.has(e))
      throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);
    t.__localName = e, this.__definitions.set(e, {
      ctor: t,
      // Note it's important we read `observedAttributes` in case it is a getter
      // with side-effects, as is the case in Lit, where it triggers class
      // finalization.
      //
      // TODO(aomarks) To be spec compliant, we should also capture the
      // registration-time lifecycle methods like `connectedCallback`. For them
      // to be actually accessible to e.g. the Lit SSR element renderer, though,
      // we'd need to introduce a new API for accessing them (since `get` only
      // returns the constructor).
      observedAttributes: t.observedAttributes ?? []
    });
  }
  get(e) {
    return this.__definitions.get(e)?.ctor;
  }
}, o(B, "CustomElementRegistry"), B), Xt = Jt, Qt = new Xt();
const ee = globalThis, Ie = ee.ShadowRoot && (ee.ShadyCSS === void 0 || ee.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, je = Symbol(), rt = /* @__PURE__ */ new WeakMap();
var W;
let vt = (W = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== je) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ie && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = rt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && rt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, o(W, "n"), W);
const Yt = /* @__PURE__ */ o((r) => new vt(typeof r == "string" ? r : r + "", void 0, je), "r$2"), _s = /* @__PURE__ */ o((r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((s, i, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[n + 1], r[0]);
  return new vt(t, r, je);
}, "i$2"), es = /* @__PURE__ */ o((r, e) => {
  if (Ie) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), i = ee.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, r.appendChild(s);
  }
}, "S$1"), nt = Ie || ee.CSSStyleSheet === void 0 ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return Yt(t);
})(r) : r, { is: ts, defineProperty: ss, getOwnPropertyDescriptor: is, getOwnPropertyNames: rs, getOwnPropertySymbols: ns, getPrototypeOf: as } = Object, ne = globalThis;
ne.customElements ??= Qt;
const at = ne.trustedTypes, os = at ? at.emptyScript : "", ds = ne.reactiveElementPolyfillSupport, te = /* @__PURE__ */ o((r, e) => r, "f$1"), ke = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? os : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Et = /* @__PURE__ */ o((r, e) => !ts(r, e), "m$1"), ot = { attribute: !0, type: String, converter: ke, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ??= Symbol("metadata"), ne.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var V;
let x = (V = class extends (globalThis.HTMLElement ?? _t) {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ot) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && ss(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: i, set: n } = is(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: i, set(a) {
      const f = i?.call(this);
      n?.call(this, a), this.requestUpdate(e, f, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ot;
  }
  static _$Ei() {
    if (this.hasOwnProperty(te("elementProperties"))) return;
    const e = as(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(te("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(te("properties"))) {
      const t = this.properties, s = [...rs(t), ...ns(t)];
      for (const i of s) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, i] of t) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const i = this._$Eu(t, s);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const i of s) t.unshift(nt(i));
    } else e !== void 0 && t.push(nt(e));
    return t;
  }
  static _$Eu(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const s of t.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return es(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$ET(e, t) {
    const s = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (s.converter?.toAttribute !== void 0 ? s.converter : ke).toAttribute(t, s.type);
      this._$Em = e, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const n = s.getPropertyOptions(i), a = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : ke;
      this._$Em = i, this[i] = a.fromAttribute(t, n.type) ?? this._$Ej?.get(i) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      const i = this.constructor, n = this[e];
      if (s ??= i.getPropertyOptions(e), !((s.hasChanged ?? Et)(n, t) || s.useDefault && s.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(i._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: i, wrapped: n }, a) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), n !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, n] of this._$Ep) this[i] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, n] of s) {
        const { wrapped: a } = n, f = this[i];
        a !== !0 || this._$AL.has(i) || f === void 0 || this.C(i, void 0, n, f);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}, o(V, "g"), V);
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[te("elementProperties")] = /* @__PURE__ */ new Map(), x[te("finalized")] = /* @__PURE__ */ new Map(), ds?.({ ReactiveElement: x }), (ne.reactiveElementVersions ??= []).push("2.1.0");
const _e = globalThis, me = _e.trustedTypes, dt = me ? me.createPolicy("lit-html", { createHTML: /* @__PURE__ */ o((r) => r, "createHTML") }) : void 0, yt = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, At = "?" + P, ls = `<${At}>`, k = _e.document === void 0 ? { createTreeWalker: /* @__PURE__ */ o(() => ({}), "createTreeWalker") } : document, se = /* @__PURE__ */ o(() => k.createComment(""), "l"), ie = /* @__PURE__ */ o((r) => r === null || typeof r != "object" && typeof r != "function", "c"), De = Array.isArray, hs = /* @__PURE__ */ o((r) => De(r) || typeof r?.[Symbol.iterator] == "function", "u"), we = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, lt = /-->/g, ht = />/g, C = RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ut = /"/g, St = /^(?:script|style|textarea|title)$/i, wt = /* @__PURE__ */ o((r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), "y"), g = wt(1), vs = wt(2), z = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), ft = /* @__PURE__ */ new WeakMap(), R = k.createTreeWalker(k, 129);
function Pt(r, e) {
  if (!De(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return dt !== void 0 ? dt.createHTML(e) : e;
}
o(Pt, "P");
const cs = /* @__PURE__ */ o((r, e) => {
  const t = r.length - 1, s = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = Y;
  for (let f = 0; f < t; f++) {
    const d = r[f];
    let c, m, u = -1, v = 0;
    for (; v < d.length && (a.lastIndex = v, m = a.exec(d), m !== null); ) v = a.lastIndex, a === Y ? m[1] === "!--" ? a = lt : m[1] !== void 0 ? a = ht : m[2] !== void 0 ? (St.test(m[2]) && (i = RegExp("</" + m[2], "g")), a = C) : m[3] !== void 0 && (a = C) : a === C ? m[0] === ">" ? (a = i ?? Y, u = -1) : m[1] === void 0 ? u = -2 : (u = a.lastIndex - m[2].length, c = m[1], a = m[3] === void 0 ? C : m[3] === '"' ? ut : ct) : a === ut || a === ct ? a = C : a === lt || a === ht ? a = Y : (a = C, i = void 0);
    const _ = a === C && r[f + 1].startsWith("/>") ? " " : "";
    n += a === Y ? d + ls : u >= 0 ? (s.push(c), d.slice(0, u) + yt + d.slice(u) + P + _) : d + P + (u === -2 ? f : _);
  }
  return [Pt(r, n + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
}, "V"), be = class be {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let n = 0, a = 0;
    const f = e.length - 1, d = this.parts, [c, m] = cs(e, t);
    if (this.el = be.createElement(c, s), R.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = R.nextNode()) !== null && d.length < f; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(yt)) {
          const v = m[a++], _ = i.getAttribute(u).split(P), S = /([.?@])?(.*)/.exec(v);
          d.push({ type: 1, index: n, name: S[2], strings: _, ctor: S[1] === "." ? xe : S[1] === "?" ? Ne : S[1] === "@" ? Oe : q }), i.removeAttribute(u);
        } else u.startsWith(P) && (d.push({ type: 6, index: n }), i.removeAttribute(u));
        if (St.test(i.tagName)) {
          const u = i.textContent.split(P), v = u.length - 1;
          if (v > 0) {
            i.textContent = me ? me.emptyScript : "";
            for (let _ = 0; _ < v; _++) i.append(u[_], se()), R.nextNode(), d.push({ type: 2, index: ++n });
            i.append(u[v], se());
          }
        }
      } else if (i.nodeType === 8) if (i.data === At) d.push({ type: 2, index: n });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(P, u + 1)) !== -1; ) d.push({ type: 7, index: n }), u += P.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = k.createElement("template");
    return s.innerHTML = e, s;
  }
};
o(be, "N");
let re = be;
function F(r, e, t = r, s) {
  if (e === z) return e;
  let i = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const n = ie(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== n && (i?._$AO?.(!1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = i : t._$Cl = i), i !== void 0 && (e = F(r, i._$AS(r, e.values), i, s)), e;
}
o(F, "S");
const ze = class ze {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: s } = this._$AD, i = (e?.creationScope ?? k).importNode(t, !0);
    R.currentNode = i;
    let n = R.nextNode(), a = 0, f = 0, d = s[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let c;
        d.type === 2 ? c = new G(n, n.nextSibling, this, e) : d.type === 1 ? c = new d.ctor(n, d.name, d.strings, this, e) : d.type === 6 && (c = new Ue(n, this, e)), this._$AV.push(c), d = s[++f];
      }
      a !== d?.index && (n = R.nextNode(), a++);
    }
    return R.currentNode = k, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
};
o(ze, "M");
let Le = ze;
const $e = class $e {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, i) {
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = F(this, e, t), ie(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : hs(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== b && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(k.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = re.createElement(Pt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(t);
    else {
      const n = new Le(i, this), a = n.u(this.options);
      n.p(t), this.T(a), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = ft.get(e.strings);
    return t === void 0 && ft.set(e.strings, t = new re(e)), t;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const n of e) i === t.length ? t.push(s = new $e(this.O(se()), this.O(se()), this, this.options)) : s = t[i], s._$AI(n), i++;
    i < t.length && (this._$AR(s && s._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
};
o($e, "k");
let G = $e;
const Fe = class Fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, i, n) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = b;
  }
  _$AI(e, t = this, s, i) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) e = F(this, e, t, 0), a = !ie(e) || e !== this._$AH && e !== z, a && (this._$AH = e);
    else {
      const f = e;
      let d, c;
      for (e = n[0], d = 0; d < n.length - 1; d++) c = F(this, f[s + d], t, d), c === z && (c = this._$AH[d]), a ||= !ie(c) || c !== this._$AH[d], c === b ? e = b : e !== b && (e += (c ?? "") + n[d + 1]), this._$AH[d] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
o(Fe, "R");
let q = Fe;
const Ge = class Ge extends q {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === b ? void 0 : e;
  }
};
o(Ge, "H");
let xe = Ge;
const qe = class qe extends q {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== b);
  }
};
o(qe, "I");
let Ne = qe;
const Ke = class Ke extends q {
  constructor(e, t, s, i, n) {
    super(e, t, s, i, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = F(this, e, t, 0) ?? b) === z) return;
    const s = this._$AH, i = e === b && s !== b || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, n = e !== b && (s === b || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
o(Ke, "L");
let Oe = Ke;
const Ze = class Ze {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    F(this, e);
  }
};
o(Ze, "z");
let Ue = Ze;
const Es = { I: G }, us = _e.litHtmlPolyfillSupport;
us?.(re, G), (_e.litHtmlVersions ??= []).push("3.3.0");
const fs = /* @__PURE__ */ o((r, e, t) => {
  const s = t?.renderBefore ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = t?.renderBefore ?? null;
    s._$litPart$ = i = new G(e.insertBefore(se(), n), n, void 0, t ?? {});
  }
  return i._$AI(r), i;
}, "j");
const Be = globalThis, Je = class Je extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fs(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return z;
  }
};
o(Je, "i");
let N = Je;
N._$litElement$ = !0, N.finalized = !0, Be.litElementHydrateSupport?.({ LitElement: N });
const gs = Be.litElementPolyfillSupport;
gs?.({ LitElement: N });
(Be.litElementVersions ??= []).push("4.2.0");
const ps = {
  h01130b08c68f9a5e: g`<strong>${0}</strong> redigerade <em>${1}</em>`,
  h1c3b785e6e3a8e66: g`<strong>${0}</strong> nämnde dig i ett inlägg`,
  h25b3f8f8b362512a: g`<strong>${0}</strong> kommenterade på <strong>${1}</strong>`,
  h38e95b7f86619e86: g`<strong>${0}</strong> reagerade med ${1} på <em>${2}</em>`,
  h4de4b38bbb77efd1: g`<strong>${0}</strong> svarade på ett inlägg`,
  h553c0e517daf2138: g`<strong>${0}</strong> redigerade ett inlägg`,
  h58b3d0836b9c096b: g`<strong>${0}</strong> nämnde dig i ett meddelande`,
  h7dbb7ebbddd1e749: g`<strong>${0}</strong> nämnde dig i en kommentar`,
  h806676f9cb17dc43: g`<strong>${0}</strong> och <strong>${1}</strong> röstade i din omröstning`,
  h9103c911268b0c9e: g`<strong>${0}</strong> reagerade med ${1} på ditt inlägg`,
  h9c07a82c6eebf5c1: g`<strong>${0}</strong> reagerade med ${1} på din kommentar`,
  h9ca2f3f1d2bab6a3: g`Nytt meddelande från <strong>${0}</strong>`,
  hac73f0c2a8a81295: g`<strong>${0}</strong> svarade på ditt inlägg`,
  hb7e18fe8a4d7621d: g`<strong>${0}</strong> röstade i din omröstning`,
  hc347e1c50a2cbca3: g`<strong>${0}</strong> publicerade ett inlägg i <strong>${1}</strong>`,
  hcb4eab821844b51b: g`<strong>${0}</strong> gillade ditt meddelande`,
  hd101f9562d8144ba: g`<strong>${0}</strong>, <strong>${1}</strong> och <strong>${2}</strong> röstade i din omröstning`,
  hd424f1e143fa57e9: g`<strong>${0}</strong> lade till <em>${1}</em> till <strong>${2}</strong>`,
  hd9c939638dd93e26: g`<strong>${0}</strong> skickade ett meddelande i <strong>${1}</strong>`,
  hdaefe9c8c54b22f3: g`<strong>${0}</strong> reagerade med ${1} på ditt meddelande`,
  hdf80c9b60917645e: g`<strong>${0}</strong> gillade <em>${1}</em>`,
  he6123e657aaaff16: g`<strong>${0}</strong> gillade ditt inlägg`,
  hec9260735fe49119: g`<strong>${0}</strong> gillade din kommentar`,
  heea6eb8beac3fd2f: g`<strong>${0}</strong> och ${1} andra röstade i din omröstning`,
  hf66c4d1a8623e3f6: g`<strong>${0}</strong> kommenterade på <em>${1}</em>`,
  s0058d65423075c1c: "Ny konversation",
  s0204546ecda4bd3f: "Namnlös konversation",
  s03844c0e2397a948: "Ta bort som admin",
  s08313776ae04f67f: "Ta bort bild",
  s0b3525368392bc8b: "Filkonflikt",
  s0d7fcbf8f03c7116: "Avprenumerera",
  s12b57a05d9905236: "Din sökning hade inga träffar.",
  s1302c950c73f84cd: "Microsoft Teams",
  s155459b88b1ea946: l`${0} svarade på ditt inlägg`,
  s15bdec250a4a55fb: "Fallande",
  s16430e1864d70df9: "Skriv ett meddelande...",
  s19a7a03b4b8cfd32: l`${0} röstade i din omröstning`,
  s19bee21a859fbea0: "Lämna",
  s1a60287b81ec038c: "Sök efter konversationer...",
  s1d2863ddb9533fcc: "Från molnlagring",
  s1ea911617f4bf7e7: l`Öppna i ${0}?`,
  s215e54ddbbcc5f07: "Lämna konversation",
  s2359515613fb2d9a: "Kommentaren togs bort.",
  s236ae937cbcd6a39: "Zooma in",
  s251a18781c6a3625: "+ lägg till alternativ",
  s2662796b3275bb5b: "Skapa en konversation för att komma igång.",
  s26f91b6796e33111: "Återställ",
  s275e39c24f663f7e: "Starta en konversation!",
  s2a200f62cfdb269c: "Molnlagring",
  s2a8434b16dc214a3: "Ersätt",
  s2b85774393f15042: "Göm borttagna",
  s2cc555789d54845c: l`${0} skriver${1}`,
  s2ea30e6262e90c5b: "Fyll skärm",
  s343f95633406dc81: "1 kommentar",
  s34ca77bbc683247b: l`${0} och ${1} röstade i din omröstning`,
  s355b21b89ce5d9c5: "Detaljer",
  s3732b439b691ea10: l`${0} kommenterade på ${1}`,
  s382a2aa3984474dd: "Skapa",
  s3bdfdd0bd23b0c44: "Servern är offline, försök igen om några minuter...",
  s3c1bff8f22445f9e: "Här finns inget att se ännu.",
  s400d02db3723548e: l`${0} gillade ${1}`,
  s4020ae71422bf3cd: "Namn",
  s417b90913e05bc17: "Förhandsvisning",
  s426827ed0daf0c4f: "Visa borttagna",
  s45a359a3fa397256: "Lista",
  s46cbf33973ae5386: "Återställ sidopanel",
  s473ac9da86ea91f9: "Anpassa sidbredd",
  s4854cd48f30ff8ee: "Personer",
  s4880dc3125543292: "Omnämnanden",
  s49360e6ce199180f: "Ändring av namnet på ett chattrum ändrar det för alla.",
  s4985d93aab4206ee: l`${0} skickade ett meddelande i ${1}`,
  s49d5970ba2260205: l`${0} redigerade ett inlägg`,
  s4e53b5a018b324d9: "Redigera inlägg...",
  s515e890f5b7dece7: "Lägg till medlemmar",
  s527d43090df3bdb7: "Du är just nu offline.",
  s52caf8c8abd32779: l`Röster på ${0}`,
  s56ab6bbd1efee1da: "Fråga något...",
  s57a6b59f8e17ed4b: "Ersätt befintlig?",
  s57adf424d57c8a0f: "Skicka",
  s58aac558ddaa15a3: "Prenumerera",
  s5bb4026da28b7914: "Markera som läst",
  s5be3c6d61cd9182f: "Notifieringar",
  s60320a18282b2b33: "Byt namn",
  s6271883e61d007c2: "Uppladdningsfel",
  s64ef2a6c2dd1d3d1: "Redigera",
  s6acd68c5d25381a5: l`${0} kommentarer`,
  s6e68e284db76e5b4: l`Sedd av ${0} vid ${1}`,
  s6eb27836e516576a: l`${0} och ${1} andra röstade i din omröstning`,
  s705788463d78fe90: l`Nytt meddelande från ${0}`,
  s70af97de3ad8fb23: "Typ",
  s72180ed8bd45fa30: "Teams-möte",
  s728c109d24cb2252: "Ladda ner filer",
  s737d13effc0cee9d: "Ingen förhandsvisning tillgänglig :(",
  s75d8b6d20cb17169: "Google Meet",
  s78636b92c1a3909c: "Väntande",
  s78789724e789221c: "Storlek",
  s79145f82d32504e5: "Från enhet",
  s7c23790a4d2b3420: "Du prenumererar inte på uppdateringar ännu.",
  s7f47cec3e840a432: "Ändrad",
  s84c4982a56c56159: l`${0} reagerade med ${1} på ditt inlägg`,
  s862e32090efc3ff3: l`${0} nämnde dig i ett inlägg`,
  s89d4ec73de971102: l`${0} nämnde dig i en kommentar`,
  s8b0432eecbd8b034: "Uppdatera",
  s8b4c8439803b5b65: "Redigera inlägg",
  s8b635140729fa01d: l`${0} publicerade ett inlägg i ${1}`,
  s8db89619f41917b4: "Fäst",
  s8f4be9f086eb530f: "Ångra",
  s8f5a7ee3698b3a1f: l`${0} gillade ditt inlägg`,
  s9252c3f0ce55297b: "Lägg till filer",
  s94c650bef124bd01: "Stigande",
  s96cf128ca399b6fc: "Gå med i möte",
  s9ad031fe2ca83e58: l`${0} nämnde dig i ett meddelande`,
  s9bfc95548d124b1c: "Reagera",
  s9c4d64a06ba60af0: "Maximera sidopanel",
  s9d791f9471ce2450: l`${0} reagerade med ${1} på din kommentar`,
  s9ebb630d372e4145: "Ta bort",
  s9f5a5f23312798f0: "Medlemmar",
  s9fb1c9e781c38ec2: l` Öppna i ${0}
        `,
  s9ff2ac475c7b07db: "Reaktioner",
  sa03f857bf0a8da28: l`${0} svarade på ett inlägg`,
  sa667dd9e4a8a6750: "Lägg till filer för att komma igång!",
  saae1c70e168b45b4: "Admin",
  sab28965d6b550459: "Inlägget togs bort.",
  saf84ec86139d349e: "Kommentera",
  sb206d032da78e466: "Rutnät",
  sb33fd019a70e1a18: "Omröstning",
  sb357ea19a722d827: "Publicera",
  sb38253b7012e60c5: "Ta bort medlem",
  sb5d079518d9b14e2: "Ta bort stjärna",
  sb5d1c3e0fa747687: "Markera som oläst",
  sbc0cd0b4dfb7dde1: "Lossa",
  sbcee3db8f10c0f9c: l`${0} lade till ${1} till ${2}`,
  sbcf612e1db77bcec: "Sätt som admin",
  sbe2dba1939d68a7a: "Redigera kommentar...",
  sbed0d484327fe0c8: "redigerad",
  sc00a88b90cd60661: "Släng",
  sc02b2394071115dc: l`${0} redigerade ${1}`,
  sc374276841a6c39e: "Versioner är inte tillgängliga för externa filer från molnet.",
  sc415bef8633075ec: l`${0} gillade ditt meddelande`,
  sc65ea2cf2f21a13a: "Zooma ut",
  sc68f2f748870a6eb: l`${0}, ${1} och ${2} röstade i din omröstning`,
  scb6a9c1a1757adbc: "Du",
  scd9d7826cea1fd2d: "Välj en konversation",
  sd3386a2ef42e80b9: "Ladda ner",
  sd3b60ec2f9fb421b: "Nya meddelanden",
  sd7c7478edbbcced8: "Filhändelser",
  sd98b59251f065471: "Stjärnmärk",
  sdc12d4d35420eeb7: "Kommentarer",
  sdc673e73b5c13aea: "Radera",
  sde63c2e93c5e1d54: l`${0} reagerade med ${1} på ${2}`,
  se19e2ed58cd65d6c: "Versioner",
  se2afa9653ced894f: "Välj bild",
  se323ece17b96a4df: "Inga fler personer funna.",
  se47f210d062e8068: "Inga uppdateringar ännu.",
  se687fac361e868f6: l`${0} reagerade med ${1} på ditt meddelande`,
  se725f4eac532d6d0: "Alla uppladningar klara",
  se9beb5e1e43f9764: "Redigera kommentar",
  sea4f08110bb8f15d: "Ta bort",
  seb5b50de97156156: l`${0} gillade din kommentar`,
  sed073ac6112070e7: "Skriv en kommentar...",
  sef49aec68fd1dc66: "Namn",
  sefc8e08d71b8530f: "Agenter",
  sf59f359396914fa2: "Ta bort alla",
  sf60480d4fe3a8e08: l`${0} skriver${1}`,
  sf863f06a8efefe1e: "Skapa ett inlägg...",
  sf8e156354e5bacb8: "Aktiviteter",
  sf993bb199fefbe04: "Alla",
  sfaacc9c26728c711: "Släpp filer här för att ladda upp.",
  sfeddbc6c931b7ad7: "Markera alla som lästa",
  sfef95f1ec987bff3: "Zoom-möte",
  sff2f8a87373e1d2a: "Mötet avslutades",
  sffa721bb6aa3128d: "Sök..."
}, ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  templates: ps
}, Symbol.toStringTag, { value: "Module" }));
export {
  b as E,
  es as S,
  vs as T,
  Es as W,
  ke as b,
  $s as configureLocalization,
  Ie as e,
  _s as i,
  N as i$1,
  bs as localized,
  Et as m,
  Rt as msg,
  Yt as r,
  l as str,
  ys as svSE,
  z as w,
  g as x
};
