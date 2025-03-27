var kt = Object.defineProperty;
var o = (r, e) => kt(r, "name", { value: e, configurable: !0 });
const Me = "lit-localize-status";
const Rt = /* @__PURE__ */ o((r, ...e) => ({
  strTag: !0,
  strings: r,
  values: e
}), "_str"), c = Rt, Lt = /* @__PURE__ */ o((r) => typeof r != "string" && "strTag" in r, "isStrTagged"), bt = /* @__PURE__ */ o((r, e, t) => {
  let s = r[0];
  for (let i = 1; i < r.length; i++)
    s += e[t ? t[i - 1] : i - 1], s += r[i];
  return s;
}, "joinStringsAndValues");
const $t = /* @__PURE__ */ o((r) => Lt(r) ? bt(r.strings, r.values) : r, "defaultMsg");
let xt = $t, et = !1;
function Nt(r) {
  if (et)
    throw new Error("lit-localize can only be configured once");
  xt = r, et = !0;
}
o(Nt, "_installMsgImplementation");
const ze = class ze {
  constructor(e) {
    this.__litLocalizeEventHandler = (t) => {
      t.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = e;
  }
  hostConnected() {
    window.addEventListener(Me, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(Me, this.__litLocalizeEventHandler);
  }
};
o(ze, "LocalizeController");
let ke = ze;
const Ut = /* @__PURE__ */ o((r) => r.addController(new ke(r)), "_updateWhenLocaleChanges"), Ot = Ut;
const bs = /* @__PURE__ */ o(() => (r, e) => (r.addInitializer(Ot), r), "localized");
const Fe = class Fe {
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
o(Fe, "Deferred");
let fe = Fe;
const S = [];
for (let r = 0; r < 256; r++)
  S[r] = (r >> 4 & 15).toString(16) + (r & 15).toString(16);
function Ht(r) {
  let e = 0, t = 8997, s = 0, i = 33826, n = 0, a = 40164, l = 0, d = 52210;
  for (let f = 0; f < r.length; f++)
    t ^= r.charCodeAt(f), e = t * 435, s = i * 435, n = a * 435, l = d * 435, n += t << 8, l += i << 8, s += e >>> 16, t = e & 65535, n += s >>> 16, i = s & 65535, d = l + (n >>> 16) & 65535, a = n & 65535;
  return S[d >> 8] + S[d & 255] + S[a >> 8] + S[a & 255] + S[i >> 8] + S[i & 255] + S[t >> 8] + S[t & 255];
}
o(Ht, "fnv1a64");
const It = "", jt = "h", Bt = "s";
function Wt(r, e) {
  return (e ? jt : Bt) + Ht(typeof r == "string" ? r : r.join(It));
}
o(Wt, "generateMsgId");
const tt = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new Map();
function Vt(r, e, t) {
  if (r) {
    const s = (t == null ? void 0 : t.id) ?? Dt(e), i = r[s];
    if (i) {
      if (typeof i == "string")
        return i;
      if ("strTag" in i)
        return bt(
          i.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          i.values
        );
      {
        let n = tt.get(i);
        return n === void 0 && (n = i.values, tt.set(i, n)), {
          ...i,
          values: n.map((a) => e.values[a])
        };
      }
    }
  }
  return $t(e);
}
o(Vt, "runtimeMsg");
function Dt(r) {
  const e = typeof r == "string" ? r : r.strings;
  let t = st.get(e);
  return t === void 0 && (t = Wt(e, typeof r != "string" && !("strTag" in r)), st.set(e, t)), t;
}
o(Dt, "generateId");
function ye(r) {
  window.dispatchEvent(new CustomEvent(Me, { detail: r }));
}
o(ye, "dispatchStatusEvent");
let ue = "", Ae, _t, ge, Re, vt, k = new fe();
k.resolve();
let oe = 0;
const $s = /* @__PURE__ */ o((r) => (Nt((e, t) => Vt(vt, e, t)), ue = _t = r.sourceLocale, ge = new Set(r.targetLocales), ge.add(r.sourceLocale), Re = r.loadLocale, { getLocale: zt, setLocale: Ft }), "configureLocalization"), zt = /* @__PURE__ */ o(() => ue, "getLocale"), Ft = /* @__PURE__ */ o((r) => {
  if (r === (Ae ?? ue))
    return k.promise;
  if (!ge || !Re)
    throw new Error("Internal error");
  if (!ge.has(r))
    throw new Error("Invalid locale code");
  oe++;
  const e = oe;
  return Ae = r, k.settled && (k = new fe()), ye({ status: "loading", loadingLocale: r }), (r === _t ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : Re(r)).then((s) => {
    oe === e && (ue = r, Ae = void 0, vt = s.templates, ye({ status: "ready", readyLocale: r }), k.resolve());
  }, (s) => {
    oe === e && (ye({
      status: "error",
      errorLocale: r,
      errorMessage: s.toString()
    }), k.reject(s));
  }), k.promise;
}, "setLocale");
var H;
const Gt = (H = class {
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
}, o(H, "ElementInternals"), H);
var y = function(r, e, t, s, i) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? i.call(r, t) : i ? i.value = t : e.set(r, t), t;
}, $ = function(r, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(r) : s ? s.value : e.get(r);
}, x, de, le, X, Se, Q, ce, C, Y, P, he, it;
const rt = /* @__PURE__ */ o((r) => typeof r == "boolean" ? r : (r == null ? void 0 : r.capture) ?? !1, "isCaptureEventListener"), pe = 0, Le = 1, me = 2, xe = 3;
var I;
const qt = (I = class {
  constructor() {
    this.__eventListeners = /* @__PURE__ */ new Map(), this.__captureEventListeners = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t, s) {
    var l;
    if (t == null)
      return;
    const i = rt(s) ? this.__captureEventListeners : this.__eventListeners;
    let n = i.get(e);
    if (n === void 0)
      n = /* @__PURE__ */ new Map(), i.set(e, n);
    else if (n.has(t))
      return;
    const a = typeof s == "object" && s ? s : {};
    (l = a.signal) == null || l.addEventListener("abort", () => this.removeEventListener(e, t, s)), n.set(t, a ?? {});
  }
  removeEventListener(e, t, s) {
    if (t == null)
      return;
    const i = rt(s) ? this.__captureEventListeners : this.__eventListeners, n = i.get(e);
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
    let i = !1, n = !1, a = pe, l = null, d = null, f = null;
    const m = e.stopPropagation, u = e.stopImmediatePropagation;
    Object.defineProperties(e, {
      target: {
        get() {
          return l ?? d;
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
          return f;
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
    const v = /* @__PURE__ */ o((p, A, J) => {
      typeof p == "function" ? p(e) : typeof (p == null ? void 0 : p.handleEvent) == "function" && p.handleEvent(e), A.once && J.delete(p);
    }, "invokeEventListener"), _ = /* @__PURE__ */ o(() => (f = null, a = pe, !e.defaultPrevented), "finishDispatch"), w = t.slice().reverse();
    l = !this.__host || !e.composed ? this : null;
    const Ye = /* @__PURE__ */ o((p) => {
      for (d = this; d.__host && p.includes(d.__host); )
        d = d.__host;
    }, "retarget");
    for (const p of w) {
      !l && (!d || d === p.__host) && Ye(w.slice(w.indexOf(p))), f = p, a = p === e.target ? me : Le;
      const A = p.__captureEventListeners.get(e.type);
      if (A) {
        for (const [J, Ee] of A)
          if (v(J, Ee, A), n)
            return _();
      }
      if (i)
        return _();
    }
    const ve = e.bubbles ? t : [this];
    d = null;
    for (const p of ve) {
      !l && (!d || p === d.__host) && Ye(ve.slice(0, ve.indexOf(p) + 1)), f = p, a = p === e.target ? me : xe;
      const A = p.__eventListeners.get(e.type);
      if (A) {
        for (const [J, Ee] of A)
          if (v(J, Ee, A), n)
            return _();
      }
      if (i)
        return _();
    }
    return _();
  }
}, o(I, "EventTarget"), I), Kt = qt, h = { __proto__: null };
h.enumerable = !0;
Object.freeze(h);
var j;
const Be = (P = (j = class {
  constructor(e, t = {}) {
    if (x.set(this, !1), de.set(this, !1), le.set(this, !1), X.set(this, !1), Se.set(this, Date.now()), Q.set(this, !1), ce.set(this, void 0), C.set(this, void 0), Y.set(this, void 0), this.NONE = pe, this.CAPTURING_PHASE = Le, this.AT_TARGET = me, this.BUBBLING_PHASE = xe, arguments.length === 0)
      throw new Error("The type argument must be specified");
    if (typeof t != "object" || !t)
      throw new Error('The "options" argument must be an object');
    const { bubbles: s, cancelable: i, composed: n } = t;
    y(this, x, !!i, "f"), y(this, de, !!s, "f"), y(this, le, !!n, "f"), y(this, ce, `${e}`, "f"), y(this, C, null, "f"), y(this, Y, !1, "f");
  }
  initEvent(e, t, s) {
    throw new Error("Method not implemented.");
  }
  stopImmediatePropagation() {
    this.stopPropagation();
  }
  preventDefault() {
    y(this, X, !0, "f");
  }
  get target() {
    return $(this, C, "f");
  }
  get currentTarget() {
    return $(this, C, "f");
  }
  get srcElement() {
    return $(this, C, "f");
  }
  get type() {
    return $(this, ce, "f");
  }
  get cancelable() {
    return $(this, x, "f");
  }
  get defaultPrevented() {
    return $(this, x, "f") && $(this, X, "f");
  }
  get timeStamp() {
    return $(this, Se, "f");
  }
  composedPath() {
    return $(this, Y, "f") ? [$(this, C, "f")] : [];
  }
  get returnValue() {
    return !$(this, x, "f") || !$(this, X, "f");
  }
  get bubbles() {
    return $(this, de, "f");
  }
  get composed() {
    return $(this, le, "f");
  }
  get eventPhase() {
    return $(this, Y, "f") ? P.AT_TARGET : P.NONE;
  }
  get cancelBubble() {
    return $(this, Q, "f");
  }
  set cancelBubble(e) {
    e && y(this, Q, !0, "f");
  }
  stopPropagation() {
    y(this, Q, !0, "f");
  }
  get isTrusted() {
    return !1;
  }
}, o(j, "Event"), j), x = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), P.NONE = pe, P.CAPTURING_PHASE = Le, P.AT_TARGET = me, P.BUBBLING_PHASE = xe, P);
Object.defineProperties(Be.prototype, {
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
var B;
const Et = (it = (B = class extends Be {
  constructor(e, t = {}) {
    super(e, t), he.set(this, void 0), y(this, he, (t == null ? void 0 : t.detail) ?? null, "f");
  }
  initCustomEvent(e, t, s, i) {
    throw new Error("Method not implemented.");
  }
  get detail() {
    return $(this, he, "f");
  }
}, o(B, "CustomEvent"), B), he = /* @__PURE__ */ new WeakMap(), it);
Object.defineProperties(Et.prototype, {
  detail: h
});
const Zt = Be, Jt = Et;
globalThis.Event ?? (globalThis.Event = Zt);
globalThis.CustomEvent ?? (globalThis.CustomEvent = Jt);
const nt = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ o((r) => {
  let e = nt.get(r);
  return e === void 0 && nt.set(r, e = /* @__PURE__ */ new Map()), e;
}, "attributesForElement");
var W;
const Xt = (W = class extends Kt {
  constructor() {
    super(...arguments), this.__shadowRootMode = null, this.__shadowRoot = null, this.__internals = null;
  }
  get attributes() {
    return Array.from(ee(this)).map(([e, t]) => ({
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
    var e;
    return (e = this.localName) == null ? void 0 : e.toUpperCase();
  }
  setAttribute(e, t) {
    ee(this).set(e, String(t));
  }
  removeAttribute(e) {
    ee(this).delete(e);
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
    return ee(this).has(e);
  }
  attachShadow(e) {
    const t = { host: this };
    return this.__shadowRootMode = e.mode, e && e.mode === "open" && (this.__shadowRoot = t), t;
  }
  attachInternals() {
    if (this.__internals !== null)
      throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
    const e = new Gt(this);
    return this.__internals = e, e;
  }
  getAttribute(e) {
    return ee(this).get(e) ?? null;
  }
}, o(W, "Element"), W);
var V;
const Qt = (V = class extends Xt {
}, o(V, "HTMLElement"), V), yt = Qt;
globalThis.litServerRoot ?? (globalThis.litServerRoot = Object.defineProperty(new yt(), "localName", {
  // Patch localName (and tagName) to return a unique name.
  get() {
    return "lit-server-root";
  }
}));
var D;
const Yt = (D = class {
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
    const t = this.__definitions.get(e);
    return t == null ? void 0 : t.ctor;
  }
}, o(D, "CustomElementRegistry"), D), es = Yt, ts = new es();
const se = globalThis, We = se.ShadowRoot && (se.ShadyCSS === void 0 || se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ve = Symbol(), at = /* @__PURE__ */ new WeakMap();
var z;
let At = (z = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== Ve) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (We && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = at.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && at.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, o(z, "n"), z);
const ss = /* @__PURE__ */ o((r) => new At(typeof r == "string" ? r : r + "", void 0, Ve), "r$3"), _s = /* @__PURE__ */ o((r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((s, i, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[n + 1], r[0]);
  return new At(t, r, Ve);
}, "i$2"), is = /* @__PURE__ */ o((r, e) => {
  if (We) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), i = se.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, r.appendChild(s);
  }
}, "S$1"), ot = We || se.CSSStyleSheet === void 0 ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return ss(t);
})(r) : r, { is: rs, defineProperty: ns, getOwnPropertyDescriptor: as, getOwnPropertyNames: os, getOwnPropertySymbols: ds, getPrototypeOf: ls } = Object, E = globalThis;
E.customElements ?? (E.customElements = ts);
const dt = E.trustedTypes, cs = dt ? dt.emptyScript : "", we = E.reactiveElementPolyfillSupport, ie = /* @__PURE__ */ o((r, e) => r, "f$1"), Ne = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? cs : null;
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
} }, St = /* @__PURE__ */ o((r, e) => !rs(r, e), "y$1"), lt = { attribute: !0, type: String, converter: Ne, reflect: !1, hasChanged: St };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), E.litPropertyMetadata ?? (E.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var F;
let N = (F = class extends (globalThis.HTMLElement ?? yt) {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = lt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && ns(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: i, set: n } = as(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(a) {
      const l = i == null ? void 0 : i.call(this);
      n.call(this, a), this.requestUpdate(e, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ie("elementProperties"))) return;
    const e = ls(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ie("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ie("properties"))) {
      const t = this.properties, s = [...os(t), ...ds(t)];
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
      for (const i of s) t.unshift(ot(i));
    } else e !== void 0 && t.push(ot(e));
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
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const s of t.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return is(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var s;
      return (s = t.hostConnected) == null ? void 0 : s.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var s;
      return (s = t.hostDisconnected) == null ? void 0 : s.call(t);
    });
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$EC(e, t) {
    var n;
    const s = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const a = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : Ne).toAttribute(t, s.type);
      this._$Em = e, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var n;
    const s = this.constructor, i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const a = s.getPropertyOptions(i), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? a.converter : Ne;
      this._$Em = i, this[i] = l.fromAttribute(t, a.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(e)), !(s.hasChanged ?? St)(this[e], t)) return;
      this.P(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, s) {
    this._$AL.has(e) || this._$AL.set(e, t), s.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, a] of this._$Ep) this[n] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, a] of i) a.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], a);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(t)) : this._$EU();
    } catch (i) {
      throw e = !1, this._$EU(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}, o(F, "g"), F);
N.elementStyles = [], N.shadowRootOptions = { mode: "open" }, N[ie("elementProperties")] = /* @__PURE__ */ new Map(), N[ie("finalized")] = /* @__PURE__ */ new Map(), we == null || we({ ReactiveElement: N }), (E.reactiveElementVersions ?? (E.reactiveElementVersions = [])).push("2.0.4");
const U = globalThis, be = U.trustedTypes, ct = be ? be.createPolicy("lit-html", { createHTML: /* @__PURE__ */ o((r) => r, "createHTML") }) : void 0, wt = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, Pt = "?" + T, hs = `<${Pt}>`, L = U.document === void 0 ? { createTreeWalker: /* @__PURE__ */ o(() => ({}), "createTreeWalker") } : document, re = /* @__PURE__ */ o(() => L.createComment(""), "l"), ne = /* @__PURE__ */ o((r) => r === null || typeof r != "object" && typeof r != "function", "c"), De = Array.isArray, fs = /* @__PURE__ */ o((r) => De(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", "u"), Pe = `[ 	
\f\r]`, te = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, ft = />/g, M = RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ut = /'/g, gt = /"/g, Tt = /^(?:script|style|textarea|title)$/i, Ct = /* @__PURE__ */ o((r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), "y"), g = Ct(1), vs = Ct(2), G = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), R = L.createTreeWalker(L, 129);
function Mt(r, e) {
  if (!De(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
o(Mt, "P");
const us = /* @__PURE__ */ o((r, e) => {
  const t = r.length - 1, s = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = te;
  for (let l = 0; l < t; l++) {
    const d = r[l];
    let f, m, u = -1, v = 0;
    for (; v < d.length && (a.lastIndex = v, m = a.exec(d), m !== null); ) v = a.lastIndex, a === te ? m[1] === "!--" ? a = ht : m[1] !== void 0 ? a = ft : m[2] !== void 0 ? (Tt.test(m[2]) && (i = RegExp("</" + m[2], "g")), a = M) : m[3] !== void 0 && (a = M) : a === M ? m[0] === ">" ? (a = i ?? te, u = -1) : m[1] === void 0 ? u = -2 : (u = a.lastIndex - m[2].length, f = m[1], a = m[3] === void 0 ? M : m[3] === '"' ? gt : ut) : a === gt || a === ut ? a = M : a === ht || a === ft ? a = te : (a = M, i = void 0);
    const _ = a === M && r[l + 1].startsWith("/>") ? " " : "";
    n += a === te ? d + hs : u >= 0 ? (s.push(f), d.slice(0, u) + wt + d.slice(u) + T + _) : d + T + (u === -2 ? l : _);
  }
  return [Mt(r, n + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
}, "V"), $e = class $e {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let n = 0, a = 0;
    const l = e.length - 1, d = this.parts, [f, m] = us(e, t);
    if (this.el = $e.createElement(f, s), R.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = R.nextNode()) !== null && d.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(wt)) {
          const v = m[a++], _ = i.getAttribute(u).split(T), w = /([.?@])?(.*)/.exec(v);
          d.push({ type: 1, index: n, name: w[2], strings: _, ctor: w[1] === "." ? Oe : w[1] === "?" ? He : w[1] === "@" ? Ie : Z }), i.removeAttribute(u);
        } else u.startsWith(T) && (d.push({ type: 6, index: n }), i.removeAttribute(u));
        if (Tt.test(i.tagName)) {
          const u = i.textContent.split(T), v = u.length - 1;
          if (v > 0) {
            i.textContent = be ? be.emptyScript : "";
            for (let _ = 0; _ < v; _++) i.append(u[_], re()), R.nextNode(), d.push({ type: 2, index: ++n });
            i.append(u[v], re());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Pt) d.push({ type: 2, index: n });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(T, u + 1)) !== -1; ) d.push({ type: 7, index: n }), u += T.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = L.createElement("template");
    return s.innerHTML = e, s;
  }
};
o($e, "N");
let ae = $e;
function q(r, e, t = r, s) {
  var a, l;
  if (e === G) return e;
  let i = s !== void 0 ? (a = t._$Co) == null ? void 0 : a[s] : t._$Cl;
  const n = ne(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = i : t._$Cl = i), i !== void 0 && (e = q(r, i._$AS(r, e.values), i, s)), e;
}
o(q, "S");
const Ge = class Ge {
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
    const { el: { content: t }, parts: s } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? L).importNode(t, !0);
    R.currentNode = i;
    let n = R.nextNode(), a = 0, l = 0, d = s[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let f;
        d.type === 2 ? f = new K(n, n.nextSibling, this, e) : d.type === 1 ? f = new d.ctor(n, d.name, d.strings, this, e) : d.type === 6 && (f = new je(n, this, e)), this._$AV.push(f), d = s[++l];
      }
      a !== (d == null ? void 0 : d.index) && (n = R.nextNode(), a++);
    }
    return R.currentNode = L, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
};
o(Ge, "M");
let Ue = Ge;
const _e = class _e {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, s, i) {
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = q(this, e, t), ne(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== G && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : fs(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== b && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(L.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = ae.createElement(Mt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(t);
    else {
      const a = new Ue(i, this), l = a.u(this.options);
      a.p(t), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = pt.get(e.strings);
    return t === void 0 && pt.set(e.strings, t = new ae(e)), t;
  }
  k(e) {
    De(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const n of e) i === t.length ? t.push(s = new _e(this.O(re()), this.O(re()), this, this.options)) : s = t[i], s._$AI(n), i++;
    i < t.length && (this._$AR(s && s._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
};
o(_e, "k");
let K = _e;
const qe = class qe {
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
    if (n === void 0) e = q(this, e, t, 0), a = !ne(e) || e !== this._$AH && e !== G, a && (this._$AH = e);
    else {
      const l = e;
      let d, f;
      for (e = n[0], d = 0; d < n.length - 1; d++) f = q(this, l[s + d], t, d), f === G && (f = this._$AH[d]), a || (a = !ne(f) || f !== this._$AH[d]), f === b ? e = b : e !== b && (e += (f ?? "") + n[d + 1]), this._$AH[d] = f;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
o(qe, "R");
let Z = qe;
const Ke = class Ke extends Z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === b ? void 0 : e;
  }
};
o(Ke, "H");
let Oe = Ke;
const Ze = class Ze extends Z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== b);
  }
};
o(Ze, "I");
let He = Ze;
const Je = class Je extends Z {
  constructor(e, t, s, i, n) {
    super(e, t, s, i, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = q(this, e, t, 0) ?? b) === G) return;
    const s = this._$AH, i = e === b && s !== b || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, n = e !== b && (s === b || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
o(Je, "L");
let Ie = Je;
const Xe = class Xe {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    q(this, e);
  }
};
o(Xe, "z");
let je = Xe;
const Es = { I: K }, Te = U.litHtmlPolyfillSupport;
Te == null || Te(ae, K), (U.litHtmlVersions ?? (U.litHtmlVersions = [])).push("3.2.1");
const gs = /* @__PURE__ */ o((r, e, t) => {
  const s = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (t == null ? void 0 : t.renderBefore) ?? null;
    s._$litPart$ = i = new K(e.insertBefore(re(), n), n, void 0, t ?? {});
  }
  return i._$AI(r), i;
}, "j");
const Qe = class Qe extends N {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = gs(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return G;
  }
};
o(Qe, "r");
let O = Qe;
var mt;
O._$litElement$ = !0, O.finalized = !0, (mt = globalThis.litElementHydrateSupport) == null || mt.call(globalThis, { LitElement: O });
const Ce = globalThis.litElementPolyfillSupport;
Ce == null || Ce({ LitElement: O });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
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
  s155459b88b1ea946: c`${0} svarade på ditt inlägg`,
  s15bdec250a4a55fb: "Fallande",
  s16430e1864d70df9: "Skriv ett meddelande...",
  s19a7a03b4b8cfd32: c`${0} röstade i din omröstning`,
  s19bee21a859fbea0: "Lämna",
  s1a60287b81ec038c: "Sök efter konversationer...",
  s1d2863ddb9533fcc: "Från molnlagring",
  s1ea911617f4bf7e7: c`Öppna i ${0}?`,
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
  s2cc555789d54845c: c`${0} skriver${1}`,
  s2ea30e6262e90c5b: "Fyll skärm",
  s343f95633406dc81: "1 kommentar",
  s34ca77bbc683247b: c`${0} och ${1} röstade i din omröstning`,
  s355b21b89ce5d9c5: "Detaljer",
  s3732b439b691ea10: c`${0} kommenterade på ${1}`,
  s382a2aa3984474dd: "Skapa",
  s3bdfdd0bd23b0c44: "Servern är offline, försök igen om några minuter...",
  s3c1bff8f22445f9e: "Här finns inget att se ännu.",
  s400d02db3723548e: c`${0} gillade ${1}`,
  s4020ae71422bf3cd: "Namn",
  s417b90913e05bc17: "Förhandsvisning",
  s426827ed0daf0c4f: "Visa borttagna",
  s45a359a3fa397256: "Lista",
  s46cbf33973ae5386: "Återställ sidopanel",
  s473ac9da86ea91f9: "Anpassa sidbredd",
  s4854cd48f30ff8ee: "Personer",
  s4880dc3125543292: "Omnämnanden",
  s49360e6ce199180f: "Ändring av namnet på ett chattrum ändrar det för alla.",
  s4985d93aab4206ee: c`${0} skickade ett meddelande i ${1}`,
  s49d5970ba2260205: c`${0} redigerade ett inlägg`,
  s4e53b5a018b324d9: "Redigera inlägg...",
  s515e890f5b7dece7: "Lägg till medlemmar",
  s527d43090df3bdb7: "Du är just nu offline.",
  s52caf8c8abd32779: c`Röster på ${0}`,
  s57a6b59f8e17ed4b: "Ersätt befintlig?",
  s57adf424d57c8a0f: "Skicka",
  s58aac558ddaa15a3: "Prenumerera",
  s5bb4026da28b7914: "Markera som läst",
  s5be3c6d61cd9182f: "Notifieringar",
  s60320a18282b2b33: "Byt namn",
  s6271883e61d007c2: "Uppladdningsfel",
  s64ef2a6c2dd1d3d1: "Redigera",
  s6acd68c5d25381a5: c`${0} kommentarer`,
  s6e68e284db76e5b4: c`Sedd av ${0} vid ${1}`,
  s6eb27836e516576a: c`${0} och ${1} andra röstade i din omröstning`,
  s705788463d78fe90: c`Nytt meddelande från ${0}`,
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
  s84c4982a56c56159: c`${0} reagerade med ${1} på ditt inlägg`,
  s862e32090efc3ff3: c`${0} nämnde dig i ett inlägg`,
  s89d4ec73de971102: c`${0} nämnde dig i en kommentar`,
  s8b0432eecbd8b034: "Uppdatera",
  s8b4c8439803b5b65: "Redigera inlägg",
  s8b635140729fa01d: c`${0} publicerade ett inlägg i ${1}`,
  s8db89619f41917b4: "Fäst",
  s8f4be9f086eb530f: "Ångra",
  s8f5a7ee3698b3a1f: c`${0} gillade ditt inlägg`,
  s9252c3f0ce55297b: "Lägg till filer",
  s94c650bef124bd01: "Stigande",
  s96cf128ca399b6fc: "Gå med i möte",
  s9ad031fe2ca83e58: c`${0} nämnde dig i ett meddelande`,
  s9bfc95548d124b1c: "Reagera",
  s9c4d64a06ba60af0: "Maximera sidopanel",
  s9d791f9471ce2450: c`${0} reagerade med ${1} på din kommentar`,
  s9ebb630d372e4145: "Ta bort",
  s9f5a5f23312798f0: "Medlemmar",
  s9fb1c9e781c38ec2: c` Öppna i ${0}
        `,
  s9ff2ac475c7b07db: "Reaktioner",
  sa03f857bf0a8da28: c`${0} svarade på ett inlägg`,
  sa667dd9e4a8a6750: "Lägg till filer för att komma igång!",
  sa6b88405214f8c17: "Fel vid uppladdning av kontext-data.",
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
  sbcee3db8f10c0f9c: c`${0} lade till ${1} till ${2}`,
  sbcf612e1db77bcec: "Sätt som admin",
  sbe2dba1939d68a7a: "Redigera kommentar...",
  sbed0d484327fe0c8: "redigerad",
  sc00a88b90cd60661: "Släng",
  sc02b2394071115dc: c`${0} redigerade ${1}`,
  sc374276841a6c39e: "Versioner är inte tillgängliga för externa filer från molnet.",
  sc415bef8633075ec: c`${0} gillade ditt meddelande`,
  sc65ea2cf2f21a13a: "Zooma ut",
  sc68f2f748870a6eb: c`${0}, ${1} och ${2} röstade i din omröstning`,
  scb6a9c1a1757adbc: "Du",
  scd9d7826cea1fd2d: "Välj en konversation",
  sd3386a2ef42e80b9: "Ladda ner",
  sd3b60ec2f9fb421b: "Nya meddelanden",
  sd7c7478edbbcced8: "Filhändelser",
  sd98b59251f065471: "Stjärnmärk",
  sdc12d4d35420eeb7: "Kommentarer",
  sdc673e73b5c13aea: "Radera",
  sde63c2e93c5e1d54: c`${0} reagerade med ${1} på ${2}`,
  se19e2ed58cd65d6c: "Versioner",
  se2afa9653ced894f: "Välj bild",
  se323ece17b96a4df: "Inga fler personer funna.",
  se47f210d062e8068: "Inga uppdateringar ännu.",
  se687fac361e868f6: c`${0} reagerade med ${1} på ditt meddelande`,
  se725f4eac532d6d0: "Alla uppladningar klara",
  se9beb5e1e43f9764: "Redigera kommentar",
  sea4f08110bb8f15d: "Ta bort",
  seb5b50de97156156: c`${0} gillade din kommentar`,
  sed073ac6112070e7: "Skriv en kommentar...",
  sef49aec68fd1dc66: "Namn",
  sf001ba58cf846564: "Meddelanden",
  sf59f359396914fa2: "Ta bort alla",
  sf60480d4fe3a8e08: c`${0} skriver${1}`,
  sf7a5eea7c80c2137: "Bottar",
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
  is as S,
  vs as T,
  Es as W,
  Ne as b,
  $s as configureLocalization,
  We as e,
  _s as i,
  gs as j,
  bs as localized,
  xt as msg,
  O as r,
  ss as r$1,
  c as str,
  ys as svSE,
  G as w,
  g as x,
  St as y
};
