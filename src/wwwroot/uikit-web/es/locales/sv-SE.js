var kt = Object.defineProperty;
var o = (r, e) => kt(r, "name", { value: e, configurable: !0 });
const Re = "lit-localize-status";
const Lt = /* @__PURE__ */ o((r, ...e) => ({
  strTag: !0,
  strings: r,
  values: e
}), "_str"), h = Lt, xt = /* @__PURE__ */ o((r) => typeof r != "string" && "strTag" in r, "isStrTagged"), $t = /* @__PURE__ */ o((r, e, t) => {
  let s = r[0];
  for (let i = 1; i < r.length; i++)
    s += e[t ? t[i - 1] : i - 1], s += r[i];
  return s;
}, "joinStringsAndValues");
const _t = /* @__PURE__ */ o((r) => xt(r) ? $t(r.strings, r.values) : r, "defaultMsg");
let Nt = _t, tt = !1;
function Ot(r) {
  if (tt)
    throw new Error("lit-localize can only be configured once");
  Nt = r, tt = !0;
}
o(Ot, "_installMsgImplementation");
const Fe = class Fe {
  constructor(e) {
    this.__litLocalizeEventHandler = (t) => {
      t.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = e;
  }
  hostConnected() {
    window.addEventListener(Re, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(Re, this.__litLocalizeEventHandler);
  }
};
o(Fe, "LocalizeController");
let ke = Fe;
const Ut = /* @__PURE__ */ o((r) => r.addController(new ke(r)), "_updateWhenLocaleChanges"), Ht = Ut;
const $s = /* @__PURE__ */ o(() => (r, e) => (r.addInitializer(Ht), r), "localized");
const Ge = class Ge {
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
o(Ge, "Deferred");
let fe = Ge;
const S = [];
for (let r = 0; r < 256; r++)
  S[r] = (r >> 4 & 15).toString(16) + (r & 15).toString(16);
function It(r) {
  let e = 0, t = 8997, s = 0, i = 33826, n = 0, a = 40164, l = 0, d = 52210;
  for (let u = 0; u < r.length; u++)
    t ^= r.charCodeAt(u), e = t * 435, s = i * 435, n = a * 435, l = d * 435, n += t << 8, l += i << 8, s += e >>> 16, t = e & 65535, n += s >>> 16, i = s & 65535, d = l + (n >>> 16) & 65535, a = n & 65535;
  return S[d >> 8] + S[d & 255] + S[a >> 8] + S[a & 255] + S[i >> 8] + S[i & 255] + S[t >> 8] + S[t & 255];
}
o(It, "fnv1a64");
const jt = "", Dt = "h", Bt = "s";
function Wt(r, e) {
  return (e ? Dt : Bt) + It(typeof r == "string" ? r : r.join(jt));
}
o(Wt, "generateMsgId");
const st = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new Map();
function Vt(r, e, t) {
  if (r) {
    const s = (t == null ? void 0 : t.id) ?? zt(e), i = r[s];
    if (i) {
      if (typeof i == "string")
        return i;
      if ("strTag" in i)
        return $t(
          i.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          i.values
        );
      {
        let n = st.get(i);
        return n === void 0 && (n = i.values, st.set(i, n)), {
          ...i,
          values: n.map((a) => e.values[a])
        };
      }
    }
  }
  return _t(e);
}
o(Vt, "runtimeMsg");
function zt(r) {
  const e = typeof r == "string" ? r : r.strings;
  let t = it.get(e);
  return t === void 0 && (t = Wt(e, typeof r != "string" && !("strTag" in r)), it.set(e, t)), t;
}
o(zt, "generateId");
function Ae(r) {
  window.dispatchEvent(new CustomEvent(Re, { detail: r }));
}
o(Ae, "dispatchStatusEvent");
let ge = "", Se, vt, pe, Le, Et, R = new fe();
R.resolve();
let de = 0;
const _s = /* @__PURE__ */ o((r) => (Ot((e, t) => Vt(Et, e, t)), ge = vt = r.sourceLocale, pe = new Set(r.targetLocales), pe.add(r.sourceLocale), Le = r.loadLocale, { getLocale: Ft, setLocale: Gt }), "configureLocalization"), Ft = /* @__PURE__ */ o(() => ge, "getLocale"), Gt = /* @__PURE__ */ o((r) => {
  if (r === (Se ?? ge))
    return R.promise;
  if (!pe || !Le)
    throw new Error("Internal error");
  if (!pe.has(r))
    throw new Error("Invalid locale code");
  de++;
  const e = de;
  return Se = r, R.settled && (R = new fe()), Ae({ status: "loading", loadingLocale: r }), (r === vt ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : Le(r)).then((s) => {
    de === e && (ge = r, Se = void 0, Et = s.templates, Ae({ status: "ready", readyLocale: r }), R.resolve());
  }, (s) => {
    de === e && (Ae({
      status: "error",
      errorLocale: r,
      errorMessage: s.toString()
    }), R.reject(s));
  }), R.promise;
}, "setLocale");
var I;
const qt = (I = class {
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
}, o(I, "ElementInternals"), I);
var y = function(r, e, t, s, i) {
  if (s === "m") throw new TypeError("Private method is not writable");
  if (s === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? i.call(r, t) : i ? i.value = t : e.set(r, t), t;
}, $ = function(r, e, t, s) {
  if (t === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? s : t === "a" ? s.call(r) : s ? s.value : e.get(r);
}, N, le, he, Q, we, Y, ce, C, ee, P, ue, rt;
const nt = /* @__PURE__ */ o((r) => typeof r == "boolean" ? r : (r == null ? void 0 : r.capture) ?? !1, "isCaptureEventListener"), me = 0, xe = 1, be = 2, Ne = 3;
var j;
const Kt = (j = class {
  constructor() {
    this.__eventListeners = /* @__PURE__ */ new Map(), this.__captureEventListeners = /* @__PURE__ */ new Map();
  }
  addEventListener(e, t, s) {
    var l;
    if (t == null)
      return;
    const i = nt(s) ? this.__captureEventListeners : this.__eventListeners;
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
    const i = nt(s) ? this.__captureEventListeners : this.__eventListeners, n = i.get(e);
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
    let i = !1, n = !1, a = me, l = null, d = null, u = null;
    const m = e.stopPropagation, f = e.stopImmediatePropagation;
    Object.defineProperties(e, {
      target: {
        get() {
          return l ?? d;
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
          return u;
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
          i = !0, m.call(e);
        }, "value"),
        ...c
      },
      stopImmediatePropagation: {
        value: /* @__PURE__ */ o(() => {
          n = !0, f.call(e);
        }, "value"),
        ...c
      }
    });
    const v = /* @__PURE__ */ o((p, A, X) => {
      typeof p == "function" ? p(e) : typeof (p == null ? void 0 : p.handleEvent) == "function" && p.handleEvent(e), A.once && X.delete(p);
    }, "invokeEventListener"), _ = /* @__PURE__ */ o(() => (u = null, a = me, !e.defaultPrevented), "finishDispatch"), w = t.slice().reverse();
    l = !this.__host || !e.composed ? this : null;
    const et = /* @__PURE__ */ o((p) => {
      for (d = this; d.__host && p.includes(d.__host); )
        d = d.__host;
    }, "retarget");
    for (const p of w) {
      !l && (!d || d === p.__host) && et(w.slice(w.indexOf(p))), u = p, a = p === e.target ? be : xe;
      const A = p.__captureEventListeners.get(e.type);
      if (A) {
        for (const [X, ye] of A)
          if (v(X, ye, A), n)
            return _();
      }
      if (i)
        return _();
    }
    const Ee = e.bubbles ? t : [this];
    d = null;
    for (const p of Ee) {
      !l && (!d || p === d.__host) && et(Ee.slice(0, Ee.indexOf(p) + 1)), u = p, a = p === e.target ? be : Ne;
      const A = p.__eventListeners.get(e.type);
      if (A) {
        for (const [X, ye] of A)
          if (v(X, ye, A), n)
            return _();
      }
      if (i)
        return _();
    }
    return _();
  }
}, o(j, "EventTarget"), j), Zt = Kt, c = { __proto__: null };
c.enumerable = !0;
Object.freeze(c);
var D;
const Be = (P = (D = class {
  constructor(e, t = {}) {
    if (N.set(this, !1), le.set(this, !1), he.set(this, !1), Q.set(this, !1), we.set(this, Date.now()), Y.set(this, !1), ce.set(this, void 0), C.set(this, void 0), ee.set(this, void 0), this.NONE = me, this.CAPTURING_PHASE = xe, this.AT_TARGET = be, this.BUBBLING_PHASE = Ne, arguments.length === 0)
      throw new Error("The type argument must be specified");
    if (typeof t != "object" || !t)
      throw new Error('The "options" argument must be an object');
    const { bubbles: s, cancelable: i, composed: n } = t;
    y(this, N, !!i, "f"), y(this, le, !!s, "f"), y(this, he, !!n, "f"), y(this, ce, `${e}`, "f"), y(this, C, null, "f"), y(this, ee, !1, "f");
  }
  initEvent(e, t, s) {
    throw new Error("Method not implemented.");
  }
  stopImmediatePropagation() {
    this.stopPropagation();
  }
  preventDefault() {
    y(this, Q, !0, "f");
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
    return $(this, N, "f");
  }
  get defaultPrevented() {
    return $(this, N, "f") && $(this, Q, "f");
  }
  get timeStamp() {
    return $(this, we, "f");
  }
  composedPath() {
    return $(this, ee, "f") ? [$(this, C, "f")] : [];
  }
  get returnValue() {
    return !$(this, N, "f") || !$(this, Q, "f");
  }
  get bubbles() {
    return $(this, le, "f");
  }
  get composed() {
    return $(this, he, "f");
  }
  get eventPhase() {
    return $(this, ee, "f") ? P.AT_TARGET : P.NONE;
  }
  get cancelBubble() {
    return $(this, Y, "f");
  }
  set cancelBubble(e) {
    e && y(this, Y, !0, "f");
  }
  stopPropagation() {
    y(this, Y, !0, "f");
  }
  get isTrusted() {
    return !1;
  }
}, o(D, "Event"), D), N = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap(), P.NONE = me, P.CAPTURING_PHASE = xe, P.AT_TARGET = be, P.BUBBLING_PHASE = Ne, P);
Object.defineProperties(Be.prototype, {
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
var B;
const yt = (rt = (B = class extends Be {
  constructor(e, t = {}) {
    super(e, t), ue.set(this, void 0), y(this, ue, (t == null ? void 0 : t.detail) ?? null, "f");
  }
  initCustomEvent(e, t, s, i) {
    throw new Error("Method not implemented.");
  }
  get detail() {
    return $(this, ue, "f");
  }
}, o(B, "CustomEvent"), B), ue = /* @__PURE__ */ new WeakMap(), rt);
Object.defineProperties(yt.prototype, {
  detail: c
});
const Jt = Be, Xt = yt;
globalThis.Event ?? (globalThis.Event = Jt);
globalThis.CustomEvent ?? (globalThis.CustomEvent = Xt);
const at = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ o((r) => {
  let e = at.get(r);
  return e === void 0 && at.set(r, e = /* @__PURE__ */ new Map()), e;
}, "attributesForElement");
var W;
const Qt = (W = class extends Zt {
  constructor() {
    super(...arguments), this.__shadowRootMode = null, this.__shadowRoot = null, this.__internals = null;
  }
  get attributes() {
    return Array.from(te(this)).map(([e, t]) => ({
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
    te(this).set(e, String(t));
  }
  removeAttribute(e) {
    te(this).delete(e);
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
    return te(this).has(e);
  }
  attachShadow(e) {
    const t = { host: this };
    return this.__shadowRootMode = e.mode, e && e.mode === "open" && (this.__shadowRoot = t), t;
  }
  attachInternals() {
    if (this.__internals !== null)
      throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
    const e = new qt(this);
    return this.__internals = e, e;
  }
  getAttribute(e) {
    return te(this).get(e) ?? null;
  }
}, o(W, "Element"), W);
var V;
const Yt = (V = class extends Qt {
}, o(V, "HTMLElement"), V), At = Yt;
globalThis.litServerRoot ?? (globalThis.litServerRoot = Object.defineProperty(new At(), "localName", {
  // Patch localName (and tagName) to return a unique name.
  get() {
    return "lit-server-root";
  }
}));
var z;
const es = (z = class {
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
}, o(z, "CustomElementRegistry"), z), ts = es, ss = new ts();
const ie = globalThis, We = ie.ShadowRoot && (ie.ShadyCSS === void 0 || ie.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ve = Symbol(), ot = /* @__PURE__ */ new WeakMap();
var F;
let St = (F = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== Ve) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (We && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = ot.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && ot.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, o(F, "n"), F);
const is = /* @__PURE__ */ o((r) => new St(typeof r == "string" ? r : r + "", void 0, Ve), "r$2"), vs = /* @__PURE__ */ o((r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((s, i, n) => s + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[n + 1], r[0]);
  return new St(t, r, Ve);
}, "i$2"), rs = /* @__PURE__ */ o((r, e) => {
  if (We) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), i = ie.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, r.appendChild(s);
  }
}, "S$1"), dt = We || ie.CSSStyleSheet === void 0 ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return is(t);
})(r) : r, { is: ns, defineProperty: as, getOwnPropertyDescriptor: os, getOwnPropertyNames: ds, getOwnPropertySymbols: ls, getPrototypeOf: hs } = Object, E = globalThis;
E.customElements ?? (E.customElements = ss);
const lt = E.trustedTypes, cs = lt ? lt.emptyScript : "", Pe = E.reactiveElementPolyfillSupport, re = /* @__PURE__ */ o((r, e) => r, "f$1"), Oe = { toAttribute(r, e) {
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
} }, wt = /* @__PURE__ */ o((r, e) => !ns(r, e), "m$1"), ht = { attribute: !0, type: String, converter: Oe, reflect: !1, useDefault: !1, hasChanged: wt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), E.litPropertyMetadata ?? (E.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var G;
let O = (G = class extends (globalThis.HTMLElement ?? At) {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ht) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && as(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: i, set: n } = os(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get: i, set(a) {
      const l = i == null ? void 0 : i.call(this);
      n == null || n.call(this, a), this.requestUpdate(e, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ht;
  }
  static _$Ei() {
    if (this.hasOwnProperty(re("elementProperties"))) return;
    const e = hs(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(re("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(re("properties"))) {
      const t = this.properties, s = [...ds(t), ...ls(t)];
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
      for (const i of s) t.unshift(dt(i));
    } else e !== void 0 && t.push(dt(e));
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
    return rs(e, this.constructor.elementStyles), e;
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
  _$ET(e, t) {
    var n;
    const s = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const a = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : Oe).toAttribute(t, s.type);
      this._$Em = e, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var n, a;
    const s = this.constructor, i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const l = s.getPropertyOptions(i), d = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((n = l.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? l.converter : Oe;
      this._$Em = i, this[i] = d.fromAttribute(t, l.type) ?? ((a = this._$Ej) == null ? void 0 : a.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    var i;
    if (e !== void 0) {
      const n = this.constructor, a = this[e];
      if (s ?? (s = n.getPropertyOptions(e)), !((s.hasChanged ?? wt)(a, t) || s.useDefault && s.reflect && a === ((i = this._$Ej) == null ? void 0 : i.get(e)) && !this.hasAttribute(n._$Eu(e, s)))) return;
      this.C(e, t, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: s, reflect: i, wrapped: n }, a) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), n !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, a] of this._$Ep) this[n] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, a] of i) {
        const { wrapped: l } = a, d = this[n];
        l !== !0 || this._$AL.has(n) || d === void 0 || this.C(n, void 0, a, d);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}, o(G, "g"), G);
O.elementStyles = [], O.shadowRootOptions = { mode: "open" }, O[re("elementProperties")] = /* @__PURE__ */ new Map(), O[re("finalized")] = /* @__PURE__ */ new Map(), Pe == null || Pe({ ReactiveElement: O }), (E.reactiveElementVersions ?? (E.reactiveElementVersions = [])).push("2.1.0");
const U = globalThis, $e = U.trustedTypes, ct = $e ? $e.createPolicy("lit-html", { createHTML: /* @__PURE__ */ o((r) => r, "createHTML") }) : void 0, Pt = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, Tt = "?" + T, us = `<${Tt}>`, x = U.document === void 0 ? { createTreeWalker: /* @__PURE__ */ o(() => ({}), "createTreeWalker") } : document, ne = /* @__PURE__ */ o(() => x.createComment(""), "l"), ae = /* @__PURE__ */ o((r) => r === null || typeof r != "object" && typeof r != "function", "c"), ze = Array.isArray, fs = /* @__PURE__ */ o((r) => ze(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", "u"), Te = `[ 	
\f\r]`, se = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ut = /-->/g, ft = />/g, M = RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), gt = /'/g, pt = /"/g, Ct = /^(?:script|style|textarea|title)$/i, Mt = /* @__PURE__ */ o((r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), "y"), g = Mt(1), Es = Mt(2), q = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), mt = /* @__PURE__ */ new WeakMap(), k = x.createTreeWalker(x, 129);
function Rt(r, e) {
  if (!ze(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ct !== void 0 ? ct.createHTML(e) : e;
}
o(Rt, "P");
const gs = /* @__PURE__ */ o((r, e) => {
  const t = r.length - 1, s = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = se;
  for (let l = 0; l < t; l++) {
    const d = r[l];
    let u, m, f = -1, v = 0;
    for (; v < d.length && (a.lastIndex = v, m = a.exec(d), m !== null); ) v = a.lastIndex, a === se ? m[1] === "!--" ? a = ut : m[1] !== void 0 ? a = ft : m[2] !== void 0 ? (Ct.test(m[2]) && (i = RegExp("</" + m[2], "g")), a = M) : m[3] !== void 0 && (a = M) : a === M ? m[0] === ">" ? (a = i ?? se, f = -1) : m[1] === void 0 ? f = -2 : (f = a.lastIndex - m[2].length, u = m[1], a = m[3] === void 0 ? M : m[3] === '"' ? pt : gt) : a === pt || a === gt ? a = M : a === ut || a === ft ? a = se : (a = M, i = void 0);
    const _ = a === M && r[l + 1].startsWith("/>") ? " " : "";
    n += a === se ? d + us : f >= 0 ? (s.push(u), d.slice(0, f) + Pt + d.slice(f) + T + _) : d + T + (f === -2 ? l : _);
  }
  return [Rt(r, n + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
}, "V"), _e = class _e {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let n = 0, a = 0;
    const l = e.length - 1, d = this.parts, [u, m] = gs(e, t);
    if (this.el = _e.createElement(u, s), k.currentNode = this.el.content, t === 2 || t === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (i = k.nextNode()) !== null && d.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const f of i.getAttributeNames()) if (f.endsWith(Pt)) {
          const v = m[a++], _ = i.getAttribute(f).split(T), w = /([.?@])?(.*)/.exec(v);
          d.push({ type: 1, index: n, name: w[2], strings: _, ctor: w[1] === "." ? He : w[1] === "?" ? Ie : w[1] === "@" ? je : J }), i.removeAttribute(f);
        } else f.startsWith(T) && (d.push({ type: 6, index: n }), i.removeAttribute(f));
        if (Ct.test(i.tagName)) {
          const f = i.textContent.split(T), v = f.length - 1;
          if (v > 0) {
            i.textContent = $e ? $e.emptyScript : "";
            for (let _ = 0; _ < v; _++) i.append(f[_], ne()), k.nextNode(), d.push({ type: 2, index: ++n });
            i.append(f[v], ne());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Tt) d.push({ type: 2, index: n });
      else {
        let f = -1;
        for (; (f = i.data.indexOf(T, f + 1)) !== -1; ) d.push({ type: 7, index: n }), f += T.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = x.createElement("template");
    return s.innerHTML = e, s;
  }
};
o(_e, "N");
let oe = _e;
function K(r, e, t = r, s) {
  var a, l;
  if (e === q) return e;
  let i = s !== void 0 ? (a = t._$Co) == null ? void 0 : a[s] : t._$Cl;
  const n = ae(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = i : t._$Cl = i), i !== void 0 && (e = K(r, i._$AS(r, e.values), i, s)), e;
}
o(K, "S");
const qe = class qe {
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
    const { el: { content: t }, parts: s } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? x).importNode(t, !0);
    k.currentNode = i;
    let n = k.nextNode(), a = 0, l = 0, d = s[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let u;
        d.type === 2 ? u = new Z(n, n.nextSibling, this, e) : d.type === 1 ? u = new d.ctor(n, d.name, d.strings, this, e) : d.type === 6 && (u = new De(n, this, e)), this._$AV.push(u), d = s[++l];
      }
      a !== (d == null ? void 0 : d.index) && (n = k.nextNode(), a++);
    }
    return k.currentNode = x, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
};
o(qe, "M");
let Ue = qe;
const ve = class ve {
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
    e = K(this, e, t), ae(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : fs(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== b && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = oe.createElement(Rt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(t);
    else {
      const a = new Ue(i, this), l = a.u(this.options);
      a.p(t), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = mt.get(e.strings);
    return t === void 0 && mt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    ze(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const n of e) i === t.length ? t.push(s = new ve(this.O(ne()), this.O(ne()), this, this.options)) : s = t[i], s._$AI(n), i++;
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
o(ve, "k");
let Z = ve;
const Ke = class Ke {
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
    if (n === void 0) e = K(this, e, t, 0), a = !ae(e) || e !== this._$AH && e !== q, a && (this._$AH = e);
    else {
      const l = e;
      let d, u;
      for (e = n[0], d = 0; d < n.length - 1; d++) u = K(this, l[s + d], t, d), u === q && (u = this._$AH[d]), a || (a = !ae(u) || u !== this._$AH[d]), u === b ? e = b : e !== b && (e += (u ?? "") + n[d + 1]), this._$AH[d] = u;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
o(Ke, "R");
let J = Ke;
const Ze = class Ze extends J {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === b ? void 0 : e;
  }
};
o(Ze, "H");
let He = Ze;
const Je = class Je extends J {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== b);
  }
};
o(Je, "I");
let Ie = Je;
const Xe = class Xe extends J {
  constructor(e, t, s, i, n) {
    super(e, t, s, i, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = K(this, e, t, 0) ?? b) === q) return;
    const s = this._$AH, i = e === b && s !== b || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, n = e !== b && (s === b || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
o(Xe, "L");
let je = Xe;
const Qe = class Qe {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    K(this, e);
  }
};
o(Qe, "z");
let De = Qe;
const ys = { I: Z }, Ce = U.litHtmlPolyfillSupport;
Ce == null || Ce(oe, Z), (U.litHtmlVersions ?? (U.litHtmlVersions = [])).push("3.3.0");
const ps = /* @__PURE__ */ o((r, e, t) => {
  const s = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (t == null ? void 0 : t.renderBefore) ?? null;
    s._$litPart$ = i = new Z(e.insertBefore(ne(), n), n, void 0, t ?? {});
  }
  return i._$AI(r), i;
}, "j");
const L = globalThis, Ye = class Ye extends O {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ps(t, this.renderRoot, this.renderOptions);
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
    return q;
  }
};
o(Ye, "i");
let H = Ye;
var bt;
H._$litElement$ = !0, H.finalized = !0, (bt = L.litElementHydrateSupport) == null || bt.call(L, { LitElement: H });
const Me = L.litElementPolyfillSupport;
Me == null || Me({ LitElement: H });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.0");
const ms = {
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
  s155459b88b1ea946: h`${0} svarade på ditt inlägg`,
  s15bdec250a4a55fb: "Fallande",
  s16430e1864d70df9: "Skriv ett meddelande...",
  s19a7a03b4b8cfd32: h`${0} röstade i din omröstning`,
  s19bee21a859fbea0: "Lämna",
  s1a60287b81ec038c: "Sök efter konversationer...",
  s1d2863ddb9533fcc: "Från molnlagring",
  s1ea911617f4bf7e7: h`Öppna i ${0}?`,
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
  s2cc555789d54845c: h`${0} skriver${1}`,
  s2ea30e6262e90c5b: "Fyll skärm",
  s343f95633406dc81: "1 kommentar",
  s34ca77bbc683247b: h`${0} och ${1} röstade i din omröstning`,
  s355b21b89ce5d9c5: "Detaljer",
  s3732b439b691ea10: h`${0} kommenterade på ${1}`,
  s382a2aa3984474dd: "Skapa",
  s3bdfdd0bd23b0c44: "Servern är offline, försök igen om några minuter...",
  s3c1bff8f22445f9e: "Här finns inget att se ännu.",
  s400d02db3723548e: h`${0} gillade ${1}`,
  s4020ae71422bf3cd: "Namn",
  s417b90913e05bc17: "Förhandsvisning",
  s426827ed0daf0c4f: "Visa borttagna",
  s45a359a3fa397256: "Lista",
  s46cbf33973ae5386: "Återställ sidopanel",
  s473ac9da86ea91f9: "Anpassa sidbredd",
  s4854cd48f30ff8ee: "Personer",
  s4880dc3125543292: "Omnämnanden",
  s49360e6ce199180f: "Ändring av namnet på ett chattrum ändrar det för alla.",
  s4985d93aab4206ee: h`${0} skickade ett meddelande i ${1}`,
  s49d5970ba2260205: h`${0} redigerade ett inlägg`,
  s4e53b5a018b324d9: "Redigera inlägg...",
  s515e890f5b7dece7: "Lägg till medlemmar",
  s527d43090df3bdb7: "Du är just nu offline.",
  s52caf8c8abd32779: h`Röster på ${0}`,
  s56ab6bbd1efee1da: "Fråga något...",
  s57a6b59f8e17ed4b: "Ersätt befintlig?",
  s57adf424d57c8a0f: "Skicka",
  s58aac558ddaa15a3: "Prenumerera",
  s5bb4026da28b7914: "Markera som läst",
  s5be3c6d61cd9182f: "Notifieringar",
  s60320a18282b2b33: "Byt namn",
  s6271883e61d007c2: "Uppladdningsfel",
  s64ef2a6c2dd1d3d1: "Redigera",
  s6acd68c5d25381a5: h`${0} kommentarer`,
  s6e68e284db76e5b4: h`Sedd av ${0} vid ${1}`,
  s6eb27836e516576a: h`${0} och ${1} andra röstade i din omröstning`,
  s705788463d78fe90: h`Nytt meddelande från ${0}`,
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
  s84c4982a56c56159: h`${0} reagerade med ${1} på ditt inlägg`,
  s862e32090efc3ff3: h`${0} nämnde dig i ett inlägg`,
  s89d4ec73de971102: h`${0} nämnde dig i en kommentar`,
  s8b0432eecbd8b034: "Uppdatera",
  s8b4c8439803b5b65: "Redigera inlägg",
  s8b635140729fa01d: h`${0} publicerade ett inlägg i ${1}`,
  s8db89619f41917b4: "Fäst",
  s8f4be9f086eb530f: "Ångra",
  s8f5a7ee3698b3a1f: h`${0} gillade ditt inlägg`,
  s9252c3f0ce55297b: "Lägg till filer",
  s94c650bef124bd01: "Stigande",
  s96cf128ca399b6fc: "Gå med i möte",
  s9ad031fe2ca83e58: h`${0} nämnde dig i ett meddelande`,
  s9bfc95548d124b1c: "Reagera",
  s9c4d64a06ba60af0: "Maximera sidopanel",
  s9d791f9471ce2450: h`${0} reagerade med ${1} på din kommentar`,
  s9ebb630d372e4145: "Ta bort",
  s9f5a5f23312798f0: "Medlemmar",
  s9fb1c9e781c38ec2: h` Öppna i ${0}
        `,
  s9ff2ac475c7b07db: "Reaktioner",
  sa03f857bf0a8da28: h`${0} svarade på ett inlägg`,
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
  sbcee3db8f10c0f9c: h`${0} lade till ${1} till ${2}`,
  sbcf612e1db77bcec: "Sätt som admin",
  sbe2dba1939d68a7a: "Redigera kommentar...",
  sbed0d484327fe0c8: "redigerad",
  sc00a88b90cd60661: "Släng",
  sc02b2394071115dc: h`${0} redigerade ${1}`,
  sc374276841a6c39e: "Versioner är inte tillgängliga för externa filer från molnet.",
  sc415bef8633075ec: h`${0} gillade ditt meddelande`,
  sc65ea2cf2f21a13a: "Zooma ut",
  sc68f2f748870a6eb: h`${0}, ${1} och ${2} röstade i din omröstning`,
  scb6a9c1a1757adbc: "Du",
  scd9d7826cea1fd2d: "Välj en konversation",
  sd3386a2ef42e80b9: "Ladda ner",
  sd3b60ec2f9fb421b: "Nya meddelanden",
  sd7c7478edbbcced8: "Filhändelser",
  sd98b59251f065471: "Stjärnmärk",
  sdc12d4d35420eeb7: "Kommentarer",
  sdc673e73b5c13aea: "Radera",
  sde63c2e93c5e1d54: h`${0} reagerade med ${1} på ${2}`,
  se19e2ed58cd65d6c: "Versioner",
  se2afa9653ced894f: "Välj bild",
  se323ece17b96a4df: "Inga fler personer funna.",
  se47f210d062e8068: "Inga uppdateringar ännu.",
  se687fac361e868f6: h`${0} reagerade med ${1} på ditt meddelande`,
  se725f4eac532d6d0: "Alla uppladningar klara",
  se9beb5e1e43f9764: "Redigera kommentar",
  sea4f08110bb8f15d: "Ta bort",
  seb5b50de97156156: h`${0} gillade din kommentar`,
  sed073ac6112070e7: "Skriv en kommentar...",
  sef49aec68fd1dc66: "Namn",
  sefc8e08d71b8530f: "Agenter",
  sf59f359396914fa2: "Ta bort alla",
  sf60480d4fe3a8e08: h`${0} skriver${1}`,
  sf863f06a8efefe1e: "Skapa ett inlägg...",
  sf8e156354e5bacb8: "Aktiviteter",
  sf993bb199fefbe04: "Alla",
  sfaacc9c26728c711: "Släpp filer här för att ladda upp.",
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
  rs as S,
  Es as T,
  ys as W,
  Oe as b,
  _s as configureLocalization,
  We as e,
  vs as i,
  H as i$1,
  $s as localized,
  wt as m,
  Nt as msg,
  is as r,
  h as str,
  As as svSE,
  q as w,
  g as x
};
