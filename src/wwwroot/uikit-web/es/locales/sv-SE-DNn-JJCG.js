var Ct = Object.defineProperty;
var o = (i, e) => Ct(i, "name", { value: e, configurable: !0 });
const we = "lit-localize-status";
const Rt = /* @__PURE__ */ o((i, ...e) => ({
  strTag: !0,
  strings: i,
  values: e
}), "_str"), l = Rt, kt = /* @__PURE__ */ o((i) => typeof i != "string" && "strTag" in i, "isStrTagged"), mt = /* @__PURE__ */ o((i, e, t) => {
  let s = i[0];
  for (let n = 1; n < i.length; n++)
    s += e[t ? t[n - 1] : n - 1], s += i[n];
  return s;
}, "joinStringsAndValues");
const bt = /* @__PURE__ */ o(((i) => kt(i) ? mt(i.strings, i.values) : i), "defaultMsg");
let Lt = bt, et = !1;
function xt(i) {
  if (et)
    throw new Error("lit-localize can only be configured once");
  Lt = i, et = !0;
}
o(xt, "_installMsgImplementation");
const Be = class Be {
  constructor(e) {
    this.__litLocalizeEventHandler = (t) => {
      t.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = e;
  }
  hostConnected() {
    window.addEventListener(we, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(we, this.__litLocalizeEventHandler);
  }
};
o(Be, "LocalizeController");
let Se = Be;
const Nt = /* @__PURE__ */ o((i) => i.addController(new Se(i)), "_updateWhenLocaleChanges"), Ot = Nt;
const _s = /* @__PURE__ */ o(() => (i, e) => (i.addInitializer(Ot), i), "localized");
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
let le = Ve;
const A = [];
for (let i = 0; i < 256; i++)
  A[i] = (i >> 4 & 15).toString(16) + (i & 15).toString(16);
function Ut(i) {
  let e = 0, t = 8997, s = 0, n = 33826, r = 0, a = 40164, h = 0, d = 52210;
  for (let f = 0; f < i.length; f++)
    t ^= i.charCodeAt(f), e = t * 435, s = n * 435, r = a * 435, h = d * 435, r += t << 8, h += n << 8, s += e >>> 16, t = e & 65535, r += s >>> 16, n = s & 65535, d = h + (r >>> 16) & 65535, a = r & 65535;
  return A[d >> 8] + A[d & 255] + A[a >> 8] + A[a & 255] + A[n >> 8] + A[n & 255] + A[t >> 8] + A[t & 255];
}
o(Ut, "fnv1a64");
const Ht = "", It = "h", Dt = "s";
function jt(i, e) {
  return (e ? It : Dt) + Ut(typeof i == "string" ? i : i.join(Ht));
}
o(jt, "generateMsgId");
const tt = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new Map();
function Wt(i, e, t) {
  if (i) {
    const s = t?.id ?? Bt(e), n = i[s];
    if (n) {
      if (typeof n == "string")
        return n;
      if ("strTag" in n)
        return mt(
          n.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          n.values
        );
      {
        let r = tt.get(n);
        return r === void 0 && (r = n.values, tt.set(n, r)), {
          ...n,
          values: r.map((a) => e.values[a])
        };
      }
    }
  }
  return bt(e);
}
o(Wt, "runtimeMsg");
function Bt(i) {
  const e = typeof i == "string" ? i : i.strings;
  let t = st.get(e);
  return t === void 0 && (t = jt(e, typeof i != "string" && !("strTag" in i)), st.set(e, t)), t;
}
o(Bt, "generateId");
function ve(i) {
  window.dispatchEvent(new CustomEvent(we, { detail: i }));
}
o(ve, "dispatchStatusEvent");
let he = "", Ee, _t, ce, Pe, $t, C = new le();
C.resolve();
let ne = 0;
const $s = /* @__PURE__ */ o((i) => (xt(((e, t) => Wt($t, e, t))), he = _t = i.sourceLocale, ce = new Set(i.targetLocales), ce.add(i.sourceLocale), Pe = i.loadLocale, { getLocale: Vt, setLocale: zt }), "configureLocalization"), Vt = /* @__PURE__ */ o(() => he, "getLocale"), zt = /* @__PURE__ */ o((i) => {
  if (i === (Ee ?? he))
    return C.promise;
  if (!ce || !Pe)
    throw new Error("Internal error");
  if (!ce.has(i))
    throw new Error("Invalid locale code");
  ne++;
  const e = ne;
  return Ee = i, C.settled && (C = new le()), ve({ status: "loading", loadingLocale: i }), (i === _t ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : Pe(i)).then((s) => {
    ne === e && (he = i, Ee = void 0, $t = s.templates, ve({ status: "ready", readyLocale: i }), C.resolve());
  }, (s) => {
    ne === e && (ve({
      status: "error",
      errorLocale: i,
      errorMessage: s.toString()
    }), C.reject(s));
  }), C.promise;
}, "setLocale");
var O;
const Ft = (O = class {
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
var E = function(i, e, t, s, n) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? i !== e || !n : !e.has(i)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? n.call(i, t) : n ? n.value = t : e.set(i, t), t;
}, _ = function(i, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? i !== e || !s : !e.has(i)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(i) : s ? s.value : e.get(i);
}, L, re, ae, q, ye, K, oe, T, Z, S, de, it;
const nt = /* @__PURE__ */ o((i) => typeof i == "boolean" ? i : i?.capture ?? !1, "isCaptureEventListener"), fe = 0, Te = 1, ue = 2, Me = 3, ze = class ze {
  constructor() {
    this.__eventListeners = /* @__PURE__ */ new Map(), this.__captureEventListeners = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t, s) {
    if (t == null)
      return;
    const n = nt(s) ? this.__captureEventListeners : this.__eventListeners;
    let r = n.get(e);
    if (r === void 0)
      r = /* @__PURE__ */ new Map(), n.set(e, r);
    else if (r.has(t))
      return;
    const a = typeof s == "object" && s ? s : {};
    a.signal?.addEventListener("abort", () => this.removeEventListener(e, t, s)), r.set(t, a ?? {});
  }
  removeEventListener(e, t, s) {
    if (t == null)
      return;
    const n = nt(s) ? this.__captureEventListeners : this.__eventListeners, r = n.get(e);
    r !== void 0 && (r.delete(t), r.size || n.delete(e));
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
    let n = !1, r = !1, a = fe, h = null, d = null, f = null;
    const m = e.stopPropagation, u = e.stopImmediatePropagation;
    Object.defineProperties(e, {
      target: {
        get() {
          return h ?? d;
        },
        ...c
      },
      srcElement: {
        get() {
          return e.target;
        },
        ...c
      },
      currentTarget: {
        get() {
          return f;
        },
        ...c
      },
      eventPhase: {
        get() {
          return a;
        },
        ...c
      },
      composedPath: {
        value: /* @__PURE__ */ o(() => t, "value"),
        ...c
      },
      stopPropagation: {
        value: /* @__PURE__ */ o(() => {
          n = !0, m.call(e);
        }, "value"),
        ...c
      },
      stopImmediatePropagation: {
        value: /* @__PURE__ */ o(() => {
          r = !0, u.call(e);
        }, "value"),
        ...c
      }
    });
    const v = /* @__PURE__ */ o((g, y, G) => {
      typeof g == "function" ? g(e) : typeof g?.handleEvent == "function" && g.handleEvent(e), y.once && G.delete(g);
    }, "invokeEventListener"), $ = /* @__PURE__ */ o(() => (f = null, a = fe, !e.defaultPrevented), "finishDispatch"), w = t.slice().reverse();
    h = !this.__host || !e.composed ? this : null;
    const Ye = /* @__PURE__ */ o((g) => {
      for (d = this; d.__host && g.includes(d.__host); )
        d = d.__host;
    }, "retarget");
    for (const g of w) {
      !h && (!d || d === g.__host) && Ye(w.slice(w.indexOf(g))), f = g, a = g === e.target ? ue : Te;
      const y = g.__captureEventListeners.get(e.type);
      if (y) {
        for (const [G, $e] of y)
          if (v(G, $e, y), r)
            return $();
      }
      if (n)
        return $();
    }
    const _e = e.bubbles ? t : [this];
    d = null;
    for (const g of _e) {
      !h && (!d || g === d.__host) && Ye(_e.slice(0, _e.indexOf(g) + 1)), f = g, a = g === e.target ? ue : Me;
      const y = g.__eventListeners.get(e.type);
      if (y) {
        for (const [G, $e] of y)
          if (v(G, $e, y), r)
            return $();
      }
      if (n)
        return $();
    }
    return $();
  }
};
o(ze, "EventTarget");
let Ce = ze;
const Gt = Ce, c = { __proto__: null };
c.enumerable = !0;
Object.freeze(c);
var U;
const He = (S = (U = class {
  constructor(e, t = {}) {
    if (L.set(this, !1), re.set(this, !1), ae.set(this, !1), q.set(this, !1), ye.set(this, Date.now()), K.set(this, !1), oe.set(this, void 0), T.set(this, void 0), Z.set(this, void 0), this.NONE = fe, this.CAPTURING_PHASE = Te, this.AT_TARGET = ue, this.BUBBLING_PHASE = Me, arguments.length === 0)
      throw new Error("The type argument must be specified");
    if (typeof t != "object" || !t)
      throw new Error('The "options" argument must be an object');
    const { bubbles: s, cancelable: n, composed: r } = t;
    E(this, L, !!n, "f"), E(this, re, !!s, "f"), E(this, ae, !!r, "f"), E(this, oe, `${e}`, "f"), E(this, T, null, "f"), E(this, Z, !1, "f");
  }
  initEvent(e, t, s) {
    throw new Error("Method not implemented.");
  }
  stopImmediatePropagation() {
    this.stopPropagation();
  }
  preventDefault() {
    E(this, q, !0, "f");
  }
  get target() {
    return _(this, T, "f");
  }
  get currentTarget() {
    return _(this, T, "f");
  }
  get srcElement() {
    return _(this, T, "f");
  }
  get type() {
    return _(this, oe, "f");
  }
  get cancelable() {
    return _(this, L, "f");
  }
  get defaultPrevented() {
    return _(this, L, "f") && _(this, q, "f");
  }
  get timeStamp() {
    return _(this, ye, "f");
  }
  composedPath() {
    return _(this, Z, "f") ? [_(this, T, "f")] : [];
  }
  get returnValue() {
    return !_(this, L, "f") || !_(this, q, "f");
  }
  get bubbles() {
    return _(this, re, "f");
  }
  get composed() {
    return _(this, ae, "f");
  }
  get eventPhase() {
    return _(this, Z, "f") ? S.AT_TARGET : S.NONE;
  }
  get cancelBubble() {
    return _(this, K, "f");
  }
  set cancelBubble(e) {
    e && E(this, K, !0, "f");
  }
  stopPropagation() {
    E(this, K, !0, "f");
  }
  get isTrusted() {
    return !1;
  }
}, o(U, "Event"), U), L = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), S.NONE = fe, S.CAPTURING_PHASE = Te, S.AT_TARGET = ue, S.BUBBLING_PHASE = Me, S);
Object.defineProperties(He.prototype, {
  initEvent: c,
  stopImmediatePropagation: c,
  preventDefault: c,
  target: c,
  currentTarget: c,
  srcElement: c,
  type: c,
  cancelable: c,
  defaultPrevented: c,
  timeStamp: c,
  composedPath: c,
  returnValue: c,
  bubbles: c,
  composed: c,
  eventPhase: c,
  cancelBubble: c,
  stopPropagation: c,
  isTrusted: c
});
var H;
const vt = (it = (H = class extends He {
  constructor(e, t = {}) {
    super(e, t), de.set(this, void 0), E(this, de, t?.detail ?? null, "f");
  }
  initCustomEvent(e, t, s, n) {
    throw new Error("Method not implemented.");
  }
  get detail() {
    return _(this, de, "f");
  }
}, o(H, "CustomEvent"), H), de = /* @__PURE__ */ new WeakMap(), it);
Object.defineProperties(vt.prototype, {
  detail: c
});
const qt = He, Kt = vt;
globalThis.Event ??= qt;
globalThis.CustomEvent ??= Kt;
const rt = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ o((i) => {
  let e = rt.get(i);
  return e === void 0 && rt.set(i, e = /* @__PURE__ */ new Map()), e;
}, "attributesForElement");
var I;
const Zt = (I = class extends Gt {
  constructor() {
    super(...arguments), this.__shadowRootMode = null, this.__shadowRoot = null, this.__internals = null;
  }
  get attributes() {
    return Array.from(J(this)).map(([e, t]) => ({
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
    J(this).set(e, String(t));
  }
  removeAttribute(e) {
    J(this).delete(e);
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
    return J(this).has(e);
  }
  attachShadow(e) {
    const t = { host: this };
    return this.__shadowRootMode = e.mode, e && e.mode === "open" && (this.__shadowRoot = t), t;
  }
  attachInternals() {
    if (this.__internals !== null)
      throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
    const e = new Ft(this);
    return this.__internals = e, e;
  }
  getAttribute(e) {
    return J(this).get(e) ?? null;
  }
}, o(I, "Element"), I);
var D;
const Jt = (D = class extends Zt {
}, o(D, "HTMLElement"), D), Et = Jt;
globalThis.litServerRoot ??= Object.defineProperty(new Et(), "localName", {
  // Patch localName (and tagName) to return a unique name.
  get() {
    return "lit-server-root";
  }
});
function Xt() {
  let i, e;
  return { promise: new Promise((s, n) => {
    i = s, e = n;
  }), resolve: i, reject: e };
}
o(Xt, "promiseWithResolvers");
const Fe = class Fe {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map(), this.__reverseDefinitions = /* @__PURE__ */ new Map(), this.__pendingWhenDefineds = /* @__PURE__ */ new Map();
  }
  define(e, t) {
    if (this.__definitions.has(e))
      throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);
    if (this.__reverseDefinitions.has(t))
      throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name ${this.__reverseDefinitions.get(t)}`);
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
    }), this.__reverseDefinitions.set(t, e), this.__pendingWhenDefineds.get(e)?.resolve(t), this.__pendingWhenDefineds.delete(e);
  }
  get(e) {
    return this.__definitions.get(e)?.ctor;
  }
  getName(e) {
    return this.__reverseDefinitions.get(e) ?? null;
  }
  upgrade(e) {
    throw new Error("customElements.upgrade is not currently supported in SSR. Please file a bug if you need it.");
  }
  async whenDefined(e) {
    const t = this.__definitions.get(e);
    if (t)
      return t.ctor;
    let s = this.__pendingWhenDefineds.get(e);
    return s || (s = Xt(), this.__pendingWhenDefineds.set(e, s)), s.promise;
  }
};
o(Fe, "CustomElementRegistry");
let Re = Fe;
const Qt = Re, Yt = new Qt();
const Q = globalThis, Ie = Q.ShadowRoot && (Q.ShadyCSS === void 0 || Q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, De = Symbol(), at = /* @__PURE__ */ new WeakMap();
var j;
let yt = (j = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== De) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ie && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = at.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && at.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, o(j, "n"), j);
const es = /* @__PURE__ */ o((i) => new yt(typeof i == "string" ? i : i + "", void 0, De), "r$2"), vs = /* @__PURE__ */ o((i, ...e) => {
  const t = i.length === 1 ? i[0] : e.reduce(((s, n, r) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1]), i[0]);
  return new yt(t, i, De);
}, "i$2"), ts = /* @__PURE__ */ o((i, e) => {
  if (Ie) i.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const s = document.createElement("style"), n = Q.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = t.cssText, i.appendChild(s);
  }
}, "S$1"), ot = Ie || Q.CSSStyleSheet === void 0 ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return es(t);
})(i) : i, { is: ss, defineProperty: is, getOwnPropertyDescriptor: ns, getOwnPropertyNames: rs, getOwnPropertySymbols: as, getPrototypeOf: os } = Object, ie = globalThis;
ie.customElements ??= Yt;
const dt = ie.trustedTypes, ds = dt ? dt.emptyScript : "", ls = ie.reactiveElementPolyfillSupport, Y = /* @__PURE__ */ o((i, e) => i, "f$1"), ke = { toAttribute(i, e) {
  switch (e) {
    case Boolean:
      i = i ? ds : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, e) {
  let t = i;
  switch (e) {
    case Boolean:
      t = i !== null;
      break;
    case Number:
      t = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(i);
      } catch {
        t = null;
      }
  }
  return t;
} }, At = /* @__PURE__ */ o((i, e) => !ss(i, e), "m$1"), lt = { attribute: !0, type: String, converter: ke, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ??= Symbol("metadata"), ie.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var W;
let x = (W = class extends (globalThis.HTMLElement ?? Et) {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = lt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && is(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: n, set: r } = ns(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: n, set(a) {
      const h = n?.call(this);
      r?.call(this, a), this.requestUpdate(e, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = os(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, s = [...rs(t), ...as(t)];
      for (const n of s) this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [s, n] of t) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, s] of this.elementProperties) {
      const n = this._$Eu(t, s);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const n of s) t.unshift(ot(n));
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
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
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
    return ts(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$ET(e, t) {
    const s = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, s);
    if (n !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : ke).toAttribute(t, s.type);
      this._$Em = e, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const s = this.constructor, n = s._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : ke;
      this._$Em = n;
      const h = a.fromAttribute(t, r.type);
      this[n] = h ?? this._$Ej?.get(n) ?? h, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      const n = this.constructor, r = this[e];
      if (s ??= n.getPropertyOptions(e), !((s.hasChanged ?? At)(r, t) || s.useDefault && s.reflect && r === this._$Ej?.get(e) && !this.hasAttribute(n._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: n, wrapped: r }, a) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), r !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), n === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
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
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) {
        const { wrapped: a } = r, h = this[n];
        a !== !0 || this._$AL.has(n) || h === void 0 || this.C(n, void 0, r, h);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((s) => s.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
    this._$Eq &&= this._$Eq.forEach(((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}, o(W, "g"), W);
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[Y("elementProperties")] = /* @__PURE__ */ new Map(), x[Y("finalized")] = /* @__PURE__ */ new Map(), ls?.({ ReactiveElement: x }), (ie.reactiveElementVersions ??= []).push("2.1.1");
const be = globalThis, pe = be.trustedTypes, ht = pe ? pe.createPolicy("lit-html", { createHTML: /* @__PURE__ */ o((i) => i, "createHTML") }) : void 0, wt = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, St = "?" + P, hs = `<${St}>`, k = be.document === void 0 ? { createTreeWalker: /* @__PURE__ */ o(() => ({}), "createTreeWalker") } : document, ee = /* @__PURE__ */ o(() => k.createComment(""), "l"), te = /* @__PURE__ */ o((i) => i === null || typeof i != "object" && typeof i != "function", "c"), je = Array.isArray, cs = /* @__PURE__ */ o((i) => je(i) || typeof i?.[Symbol.iterator] == "function", "u"), Ae = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ct = /-->/g, ft = />/g, M = RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ut = /'/g, pt = /"/g, Pt = /^(?:script|style|textarea|title)$/i, Tt = /* @__PURE__ */ o((i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), "y"), p = Tt(1), Es = Tt(2), B = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), gt = /* @__PURE__ */ new WeakMap(), R = k.createTreeWalker(k, 129);
function Mt(i, e) {
  if (!je(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ht !== void 0 ? ht.createHTML(e) : e;
}
o(Mt, "P");
const fs = /* @__PURE__ */ o((i, e) => {
  const t = i.length - 1, s = [];
  let n, r = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = X;
  for (let h = 0; h < t; h++) {
    const d = i[h];
    let f, m, u = -1, v = 0;
    for (; v < d.length && (a.lastIndex = v, m = a.exec(d), m !== null); ) v = a.lastIndex, a === X ? m[1] === "!--" ? a = ct : m[1] !== void 0 ? a = ft : m[2] !== void 0 ? (Pt.test(m[2]) && (n = RegExp("</" + m[2], "g")), a = M) : m[3] !== void 0 && (a = M) : a === M ? m[0] === ">" ? (a = n ?? X, u = -1) : m[1] === void 0 ? u = -2 : (u = a.lastIndex - m[2].length, f = m[1], a = m[3] === void 0 ? M : m[3] === '"' ? pt : ut) : a === pt || a === ut ? a = M : a === ct || a === ft ? a = X : (a = M, n = void 0);
    const $ = a === M && i[h + 1].startsWith("/>") ? " " : "";
    r += a === X ? d + hs : u >= 0 ? (s.push(f), d.slice(0, u) + wt + d.slice(u) + P + $) : d + P + (u === -2 ? h : $);
  }
  return [Mt(i, r + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
}, "V"), ge = class ge {
  constructor({ strings: e, _$litType$: t }, s) {
    let n;
    this.parts = [];
    let r = 0, a = 0;
    const h = e.length - 1, d = this.parts, [f, m] = fs(e, t);
    if (this.el = ge.createElement(f, s), R.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (n = R.nextNode()) !== null && d.length < h; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const u of n.getAttributeNames()) if (u.endsWith(wt)) {
          const v = m[a++], $ = n.getAttribute(u).split(P), w = /([.?@])?(.*)/.exec(v);
          d.push({ type: 1, index: r, name: w[2], strings: $, ctor: w[1] === "." ? xe : w[1] === "?" ? Ne : w[1] === "@" ? Oe : F }), n.removeAttribute(u);
        } else u.startsWith(P) && (d.push({ type: 6, index: r }), n.removeAttribute(u));
        if (Pt.test(n.tagName)) {
          const u = n.textContent.split(P), v = u.length - 1;
          if (v > 0) {
            n.textContent = pe ? pe.emptyScript : "";
            for (let $ = 0; $ < v; $++) n.append(u[$], ee()), R.nextNode(), d.push({ type: 2, index: ++r });
            n.append(u[v], ee());
          }
        }
      } else if (n.nodeType === 8) if (n.data === St) d.push({ type: 2, index: r });
      else {
        let u = -1;
        for (; (u = n.data.indexOf(P, u + 1)) !== -1; ) d.push({ type: 7, index: r }), u += P.length - 1;
      }
      r++;
    }
  }
  static createElement(e, t) {
    const s = k.createElement("template");
    return s.innerHTML = e, s;
  }
};
o(ge, "N");
let se = ge;
function V(i, e, t = i, s) {
  if (e === B) return e;
  let n = s !== void 0 ? t._$Co?.[s] : t._$Cl;
  const r = te(e) ? void 0 : e._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, t, s)), s !== void 0 ? (t._$Co ??= [])[s] = n : t._$Cl = n), n !== void 0 && (e = V(i, n._$AS(i, e.values), n, s)), e;
}
o(V, "S");
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
    const { el: { content: t }, parts: s } = this._$AD, n = (e?.creationScope ?? k).importNode(t, !0);
    R.currentNode = n;
    let r = R.nextNode(), a = 0, h = 0, d = s[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let f;
        d.type === 2 ? f = new z(r, r.nextSibling, this, e) : d.type === 1 ? f = new d.ctor(r, d.name, d.strings, this, e) : d.type === 6 && (f = new Ue(r, this, e)), this._$AV.push(f), d = s[++h];
      }
      a !== d?.index && (r = R.nextNode(), a++);
    }
    return R.currentNode = k, n;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
};
o(Ge, "M");
let Le = Ge;
const me = class me {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, s, n) {
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    e = V(this, e, t), te(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== B && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : cs(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== b && te(this._$AH) ? this._$AA.nextSibling.data = e : this.T(k.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = se.createElement(Mt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(t);
    else {
      const r = new Le(n, this), a = r.u(this.options);
      r.p(t), this.T(a), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = gt.get(e.strings);
    return t === void 0 && gt.set(e.strings, t = new se(e)), t;
  }
  k(e) {
    je(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, n = 0;
    for (const r of e) n === t.length ? t.push(s = new me(this.O(ee()), this.O(ee()), this, this.options)) : s = t[n], s._$AI(r), n++;
    n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
};
o(me, "k");
let z = me;
const qe = class qe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, n, r) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = b;
  }
  _$AI(e, t = this, s, n) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) e = V(this, e, t, 0), a = !te(e) || e !== this._$AH && e !== B, a && (this._$AH = e);
    else {
      const h = e;
      let d, f;
      for (e = r[0], d = 0; d < r.length - 1; d++) f = V(this, h[s + d], t, d), f === B && (f = this._$AH[d]), a ||= !te(f) || f !== this._$AH[d], f === b ? e = b : e !== b && (e += (f ?? "") + r[d + 1]), this._$AH[d] = f;
    }
    a && !n && this.j(e);
  }
  j(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
o(qe, "R");
let F = qe;
const Ke = class Ke extends F {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === b ? void 0 : e;
  }
};
o(Ke, "H");
let xe = Ke;
const Ze = class Ze extends F {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== b);
  }
};
o(Ze, "I");
let Ne = Ze;
const Je = class Je extends F {
  constructor(e, t, s, n, r) {
    super(e, t, s, n, r), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = V(this, e, t, 0) ?? b) === B) return;
    const s = this._$AH, n = e === b && s !== b || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, r = e !== b && (s === b || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
o(Je, "L");
let Oe = Je;
const Xe = class Xe {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    V(this, e);
  }
};
o(Xe, "z");
let Ue = Xe;
const ys = { I: z }, us = be.litHtmlPolyfillSupport;
us?.(se, z), (be.litHtmlVersions ??= []).push("3.3.1");
const ps = /* @__PURE__ */ o((i, e, t) => {
  const s = t?.renderBefore ?? e;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = t?.renderBefore ?? null;
    s._$litPart$ = n = new z(e.insertBefore(ee(), r), r, void 0, t ?? {});
  }
  return n._$AI(i), n;
}, "j");
const We = globalThis, Qe = class Qe extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ps(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return B;
  }
};
o(Qe, "i");
let N = Qe;
N._$litElement$ = !0, N.finalized = !0, We.litElementHydrateSupport?.({ LitElement: N });
const gs = We.litElementPolyfillSupport;
gs?.({ LitElement: N });
(We.litElementVersions ??= []).push("4.2.1");
const ms = {
  h01130b08c68f9a5e: p`<strong>${0}</strong> redigerade <em>${1}</em>`,
  h1c3b785e6e3a8e66: p`<strong>${0}</strong> nämnde dig i ett inlägg`,
  h25b3f8f8b362512a: p`<strong>${0}</strong> kommenterade på <strong>${1}</strong>`,
  h38e95b7f86619e86: p`<strong>${0}</strong> reagerade med ${1} på <em>${2}</em>`,
  h4de4b38bbb77efd1: p`<strong>${0}</strong> svarade på ett inlägg`,
  h553c0e517daf2138: p`<strong>${0}</strong> redigerade ett inlägg`,
  h58b3d0836b9c096b: p`<strong>${0}</strong> nämnde dig i ett meddelande`,
  h7dbb7ebbddd1e749: p`<strong>${0}</strong> nämnde dig i en kommentar`,
  h806676f9cb17dc43: p`<strong>${0}</strong> och <strong>${1}</strong> röstade i din omröstning`,
  h9103c911268b0c9e: p`<strong>${0}</strong> reagerade med ${1} på ditt inlägg`,
  h9c07a82c6eebf5c1: p`<strong>${0}</strong> reagerade med ${1} på din kommentar`,
  h9ca2f3f1d2bab6a3: p`Nytt meddelande från <strong>${0}</strong>`,
  hac73f0c2a8a81295: p`<strong>${0}</strong> svarade på ditt inlägg`,
  hb7e18fe8a4d7621d: p`<strong>${0}</strong> röstade i din omröstning`,
  hc347e1c50a2cbca3: p`<strong>${0}</strong> publicerade ett inlägg i <strong>${1}</strong>`,
  hcb4eab821844b51b: p`<strong>${0}</strong> gillade ditt meddelande`,
  hd101f9562d8144ba: p`<strong>${0}</strong>, <strong>${1}</strong> och <strong>${2}</strong> röstade i din omröstning`,
  hd424f1e143fa57e9: p`<strong>${0}</strong> lade till <em>${1}</em> till <strong>${2}</strong>`,
  hd9c939638dd93e26: p`<strong>${0}</strong> skickade ett meddelande i <strong>${1}</strong>`,
  hdaefe9c8c54b22f3: p`<strong>${0}</strong> reagerade med ${1} på ditt meddelande`,
  hdf80c9b60917645e: p`<strong>${0}</strong> gillade <em>${1}</em>`,
  he6123e657aaaff16: p`<strong>${0}</strong> gillade ditt inlägg`,
  hec9260735fe49119: p`<strong>${0}</strong> gillade din kommentar`,
  heea6eb8beac3fd2f: p`<strong>${0}</strong> och ${1} andra röstade i din omröstning`,
  hf66c4d1a8623e3f6: p`<strong>${0}</strong> kommenterade på <em>${1}</em>`,
  s0058d65423075c1c: "Ny konversation",
  s0204546ecda4bd3f: "Namnlös konversation",
  s03844c0e2397a948: "Ta bort som admin",
  s08313776ae04f67f: "Ta bort bild",
  s0b3525368392bc8b: "Filkonflikt",
  s0d7fcbf8f03c7116: "Avprenumerera",
  s12ae2efccc49d4af: "Konversationer",
  s12b57a05d9905236: "Din sökning hade inga träffar.",
  s1302c950c73f84cd: "Microsoft Teams",
  s155459b88b1ea946: l`${0} svarade på ditt inlägg`,
  s15bdec250a4a55fb: "Fallande",
  s16430e1864d70df9: "Skriv ett meddelande...",
  s19a7a03b4b8cfd32: l`${0} röstade i din omröstning`,
  s19bee21a859fbea0: "Lämna",
  s1a60287b81ec038c: "Sök efter konversationer...",
  s1d2863ddb9533fcc: "Från molnlagring",
  s215e54ddbbcc5f07: "Lämna konversation",
  s2359515613fb2d9a: "Kommentaren togs bort.",
  s236ae937cbcd6a39: "Zooma in",
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
  s9fb1c9e781c38ec2: l`Öppna i ${0}`,
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
  scb9da282dc6a8c06: l`Alternativ ${0}`,
  scd9d7826cea1fd2d: "Välj en konversation",
  sd3386a2ef42e80b9: "Ladda ner",
  sd348deccf67960bf: "Inga pågående uppladdningar",
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
  sea4f08110bb8f15d: "Ta bort",
  seb5b50de97156156: l`${0} gillade din kommentar`,
  sed073ac6112070e7: "Skriv en kommentar...",
  sef49aec68fd1dc66: "Namn",
  sefc8e08d71b8530f: "Agenter",
  sf5eaa1a29802dfaf: "Släpp filer här",
  sf60480d4fe3a8e08: l`${0} skriver${1}`,
  sf863f06a8efefe1e: "Skapa ett inlägg...",
  sf8e156354e5bacb8: "Aktiviteter",
  sf993bb199fefbe04: "Alla",
  sfeddbc6c931b7ad7: "Markera alla som lästa",
  sfef95f1ec987bff3: "Zoom-möte",
  sff2f8a87373e1d2a: "Mötet avslutades",
  sffa721bb6aa3128d: "Sök..."
}, As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  templates: ms
}, Symbol.toStringTag, { value: "Module" }));
export {
  b as E,
  ts as S,
  Es as T,
  ys as W,
  ke as b,
  $s as configureLocalization,
  Ie as e,
  vs as i,
  N as i$1,
  _s as localized,
  At as m,
  Lt as msg,
  es as r,
  l as str,
  As as svSE,
  B as w,
  p as x
};
