var et = Object.defineProperty;
var o = (r, e) => et(r, "name", { value: e, configurable: !0 });
const ce = "lit-localize-status";
const tt = /* @__PURE__ */ o((r, ...e) => ({
  strTag: !0,
  strings: r,
  values: e
}), "_str"), l = tt, st = /* @__PURE__ */ o((r) => typeof r != "string" && "strTag" in r, "isStrTagged"), Be = /* @__PURE__ */ o((r, e, t) => {
  let s = r[0];
  for (let i = 1; i < r.length; i++)
    s += e[t ? t[i - 1] : i - 1], s += r[i];
  return s;
}, "joinStringsAndValues");
const We = /* @__PURE__ */ o((r) => st(r) ? Be(r.strings, r.values) : r, "defaultMsg");
let it = We, Te = !1;
function rt(r) {
  if (Te)
    throw new Error("lit-localize can only be configured once");
  it = r, Te = !0;
}
o(rt, "_installMsgImplementation");
const _e = class _e {
  constructor(e) {
    this.__litLocalizeEventHandler = (t) => {
      t.detail.status === "ready" && this.host.requestUpdate();
    }, this.host = e;
  }
  hostConnected() {
    window.addEventListener(ce, this.__litLocalizeEventHandler);
  }
  hostDisconnected() {
    window.removeEventListener(ce, this.__litLocalizeEventHandler);
  }
};
o(_e, "LocalizeController");
let he = _e;
const nt = /* @__PURE__ */ o((r) => r.addController(new he(r)), "_updateWhenLocaleChanges"), at = nt;
const Nt = /* @__PURE__ */ o(() => (r, e) => (r.addInitializer(at), r), "localized");
const ve = class ve {
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
o(ve, "Deferred");
let K = ve;
const m = [];
for (let r = 0; r < 256; r++)
  m[r] = (r >> 4 & 15).toString(16) + (r & 15).toString(16);
function ot(r) {
  let e = 0, t = 8997, s = 0, i = 33826, a = 0, n = 40164, h = 0, d = 52210;
  for (let g = 0; g < r.length; g++)
    t ^= r.charCodeAt(g), e = t * 435, s = i * 435, a = n * 435, h = d * 435, a += t << 8, h += i << 8, s += e >>> 16, t = e & 65535, a += s >>> 16, i = s & 65535, d = h + (a >>> 16) & 65535, n = a & 65535;
  return m[d >> 8] + m[d & 255] + m[n >> 8] + m[n & 255] + m[i >> 8] + m[i & 255] + m[t >> 8] + m[t & 255];
}
o(ot, "fnv1a64");
const dt = "", lt = "h", ct = "s";
function ht(r, e) {
  return (e ? lt : ct) + ot(typeof r == "string" ? r : r.join(dt));
}
o(ht, "generateMsgId");
const Ce = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new Map();
function ft(r, e, t) {
  if (r) {
    const s = (t == null ? void 0 : t.id) ?? gt(e), i = r[s];
    if (i) {
      if (typeof i == "string")
        return i;
      if ("strTag" in i)
        return Be(
          i.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          i.values
        );
      {
        let a = Ce.get(i);
        return a === void 0 && (a = i.values, Ce.set(i, a)), {
          ...i,
          values: a.map((n) => e.values[n])
        };
      }
    }
  }
  return We(e);
}
o(ft, "runtimeMsg");
function gt(r) {
  const e = typeof r == "string" ? r : r.strings;
  let t = Me.get(e);
  return t === void 0 && (t = ht(e, typeof r != "string" && !("strTag" in r)), Me.set(e, t)), t;
}
o(gt, "generateId");
function re(r) {
  window.dispatchEvent(new CustomEvent(ce, { detail: r }));
}
o(re, "dispatchStatusEvent");
let Z = "", ne, Fe, G, fe, qe, y = new K();
y.resolve();
let q = 0;
const Ot = /* @__PURE__ */ o((r) => (rt((e, t) => ft(qe, e, t)), Z = Fe = r.sourceLocale, G = new Set(r.targetLocales), G.add(r.sourceLocale), fe = r.loadLocale, { getLocale: ut, setLocale: pt }), "configureLocalization"), ut = /* @__PURE__ */ o(() => Z, "getLocale"), pt = /* @__PURE__ */ o((r) => {
  if (r === (ne ?? Z))
    return y.promise;
  if (!G || !fe)
    throw new Error("Internal error");
  if (!G.has(r))
    throw new Error("Invalid locale code");
  q++;
  const e = q;
  return ne = r, y.settled && (y = new K()), re({ status: "loading", loadingLocale: r }), (r === Fe ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : fe(r)).then((s) => {
    q === e && (Z = r, ne = void 0, qe = s.templates, re({ status: "ready", readyLocale: r }), y.resolve());
  }, (s) => {
    q === e && (re({
      status: "error",
      errorLocale: r,
      errorMessage: s.toString()
    }), y.reject(s));
  }), y.promise;
}, "setLocale");
var M;
const bt = (M = class {
  get shadowRoot() {
    return this.__host.__shadowRoot;
  }
  constructor(e) {
    this.ariaAtomic = "", this.ariaAutoComplete = "", this.ariaBraileLabel = "", this.ariaBraileRoleDescription = "", this.ariaBusy = "", this.ariaChecked = "", this.ariaColCount = "", this.ariaColIndex = "", this.ariaColSpan = "", this.ariaCurrent = "", this.ariaDescription = "", this.ariaDisabled = "", this.ariaExpanded = "", this.ariaHasPopup = "", this.ariaHidden = "", this.ariaInvalid = "", this.ariaKeyShortcuts = "", this.ariaLabel = "", this.ariaLevel = "", this.ariaLive = "", this.ariaModal = "", this.ariaMultiLine = "", this.ariaMultiSelectable = "", this.ariaOrientation = "", this.ariaPlaceholder = "", this.ariaPosInSet = "", this.ariaPressed = "", this.ariaReadOnly = "", this.ariaRequired = "", this.ariaRoleDescription = "", this.ariaRowCount = "", this.ariaRowIndex = "", this.ariaRowSpan = "", this.ariaSelected = "", this.ariaSetSize = "", this.ariaSort = "", this.ariaValueMax = "", this.ariaValueMin = "", this.ariaValueNow = "", this.ariaValueText = "", this.role = "", this.form = null, this.labels = [], this.states = /* @__PURE__ */ new Set(), this.validationMessage = "", this.validity = {}, this.willValidate = !0, this.__host = e;
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
}, o(M, "ElementInternals"), M);
const Pe = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ o((r) => {
  let e = Pe.get(r);
  return e === void 0 && Pe.set(r, e = /* @__PURE__ */ new Map()), e;
}, "attributesForElement");
var P;
const $t = (P = class {
  constructor() {
    this.__shadowRootMode = null, this.__shadowRoot = null, this.__internals = null;
  }
  get attributes() {
    return Array.from(I(this)).map(([e, t]) => ({
      name: e,
      value: t
    }));
  }
  get shadowRoot() {
    return this.__shadowRootMode === "closed" ? null : this.__shadowRoot;
  }
  setAttribute(e, t) {
    I(this).set(e, String(t));
  }
  removeAttribute(e) {
    I(this).delete(e);
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
    return I(this).has(e);
  }
  attachShadow(e) {
    const t = { host: this };
    return this.__shadowRootMode = e.mode, e && e.mode === "open" && (this.__shadowRoot = t), t;
  }
  attachInternals() {
    if (this.__internals !== null)
      throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
    const e = new bt(this);
    return this.__internals = e, e;
  }
  getAttribute(e) {
    return I(this).get(e) ?? null;
  }
}, o(P, "Element"), P);
var x;
const mt = (x = class extends $t {
}, o(x, "HTMLElement"), x), _t = mt;
var U;
const vt = (U = class {
  constructor() {
    this.__definitions = /* @__PURE__ */ new Map();
  }
  define(e, t) {
    if (this.__definitions.has(e))
      throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);
    this.__definitions.set(e, {
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
}, o(U, "CustomElementRegistry"), U), At = vt, yt = new At();
const V = globalThis, ue = V.ShadowRoot && (V.ShadyCSS === void 0 || V.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, pe = Symbol(), xe = /* @__PURE__ */ new WeakMap();
var H;
let Ke = (H = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== pe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ue && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = xe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && xe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, o(H, "n"), H);
const St = /* @__PURE__ */ o((r) => new Ke(typeof r == "string" ? r : r + "", void 0, pe), "r$1"), It = /* @__PURE__ */ o((r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((s, i, a) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[a + 1], r[0]);
  return new Ke(t, r, pe);
}, "i"), Et = /* @__PURE__ */ o((r, e) => {
  if (ue) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const s = document.createElement("style"), i = V.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = t.cssText, r.appendChild(s);
  }
}, "S$1"), Ue = ue || V.CSSStyleSheet === void 0 ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const s of e.cssRules) t += s.cssText;
  return St(t);
})(r) : r, { is: wt, defineProperty: kt, getOwnPropertyDescriptor: Rt, getOwnPropertyNames: Tt, getOwnPropertySymbols: Ct, getPrototypeOf: Mt } = Object, b = globalThis;
b.customElements ?? (b.customElements = yt);
const He = b.trustedTypes, Pt = He ? He.emptyScript : "", ae = b.reactiveElementPolyfillSupport, z = /* @__PURE__ */ o((r, e) => r, "f$2"), ge = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Pt : null;
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
} }, Ze = /* @__PURE__ */ o((r, e) => !wt(r, e), "y"), Le = { attribute: !0, type: String, converter: ge, reflect: !1, hasChanged: Ze };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), b.litPropertyMetadata ?? (b.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var L;
let R = (L = class extends (globalThis.HTMLElement ?? _t) {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Le) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(e, s, t);
      i !== void 0 && kt(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    const { get: i, set: a } = Rt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(n) {
      const h = i == null ? void 0 : i.call(this);
      a.call(this, n), this.requestUpdate(e, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Le;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const e = Mt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const t = this.properties, s = [...Tt(t), ...Ct(t)];
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
      for (const i of s) t.unshift(Ue(i));
    } else e !== void 0 && t.push(Ue(e));
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
    return Et(e, this.constructor.elementStyles), e;
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
    var a;
    const s = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (((a = s.converter) == null ? void 0 : a.toAttribute) !== void 0 ? s.converter : ge).toAttribute(t, s.type);
      this._$Em = e, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var a;
    const s = this.constructor, i = s._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const n = s.getPropertyOptions(i), h = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((a = n.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? n.converter : ge;
      this._$Em = i, this[i] = h.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, s) {
    if (e !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(e)), !(s.hasChanged ?? Ze)(this[e], t)) return;
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
        for (const [a, n] of this._$Ep) this[a] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, n] of i) n.wrapped !== !0 || this._$AL.has(a) || this[a] === void 0 || this.P(a, this[a], n);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (s = this._$EO) == null || s.forEach((i) => {
        var a;
        return (a = i.hostUpdate) == null ? void 0 : a.call(i);
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
}, o(L, "g"), L);
R.elementStyles = [], R.shadowRootOptions = { mode: "open" }, R[z("elementProperties")] = /* @__PURE__ */ new Map(), R[z("finalized")] = /* @__PURE__ */ new Map(), ae == null || ae({ ReactiveElement: R }), (b.reactiveElementVersions ?? (b.reactiveElementVersions = [])).push("2.0.4");
const T = globalThis, J = T.trustedTypes, Ne = J ? J.createPolicy("lit-html", { createHTML: /* @__PURE__ */ o((r) => r, "createHTML") }) : void 0, be = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, $e = "?" + _, xt = `<${$e}>`, E = T.document === void 0 ? { createTreeWalker: /* @__PURE__ */ o(() => ({}), "createTreeWalker") } : document, D = /* @__PURE__ */ o(() => E.createComment(""), "lt"), B = /* @__PURE__ */ o((r) => r === null || typeof r != "object" && typeof r != "function", "st"), me = Array.isArray, Ge = /* @__PURE__ */ o((r) => me(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", "$"), oe = `[ 	
\f\r]`, j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Oe = /-->/g, Ie = />/g, A = RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), je = /'/g, Ve = /"/g, Je = /^(?:script|style|textarea|title)$/i, Xe = /* @__PURE__ */ o((r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), "P"), c = Xe(1), jt = Xe(2), N = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), ze = /* @__PURE__ */ new WeakMap(), S = E.createTreeWalker(E, 129);
function Qe(r, e) {
  if (!me(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ne !== void 0 ? Ne.createHTML(e) : e;
}
o(Qe, "N");
const Ye = /* @__PURE__ */ o((r, e) => {
  const t = r.length - 1, s = [];
  let i, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = j;
  for (let h = 0; h < t; h++) {
    const d = r[h];
    let g, p, f = -1, $ = 0;
    for (; $ < d.length && (n.lastIndex = $, p = n.exec(d), p !== null); ) $ = n.lastIndex, n === j ? p[1] === "!--" ? n = Oe : p[1] !== void 0 ? n = Ie : p[2] !== void 0 ? (Je.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = A) : p[3] !== void 0 && (n = A) : n === A ? p[0] === ">" ? (n = i ?? j, f = -1) : p[1] === void 0 ? f = -2 : (f = n.lastIndex - p[2].length, g = p[1], n = p[3] === void 0 ? A : p[3] === '"' ? Ve : je) : n === Ve || n === je ? n = A : n === Oe || n === Ie ? n = j : (n = A, i = void 0);
    const v = n === A && r[h + 1].startsWith("/>") ? " " : "";
    a += n === j ? d + xt : f >= 0 ? (s.push(g), d.slice(0, f) + be + d.slice(f) + _ + v) : d + _ + (f === -2 ? h : v);
  }
  return [Qe(r, a + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
}, "U"), se = class se {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let a = 0, n = 0;
    const h = e.length - 1, d = this.parts, [g, p] = Ye(e, t);
    if (this.el = se.createElement(g, s), S.currentNode = this.el.content, t === 2 || t === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (i = S.nextNode()) !== null && d.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const f of i.getAttributeNames()) if (f.endsWith(be)) {
          const $ = p[n++], v = i.getAttribute(f).split(_), F = /([.?@])?(.*)/.exec($);
          d.push({ type: 1, index: a, name: F[2], strings: v, ctor: F[1] === "." ? Q : F[1] === "?" ? Y : F[1] === "@" ? ee : k }), i.removeAttribute(f);
        } else f.startsWith(_) && (d.push({ type: 6, index: a }), i.removeAttribute(f));
        if (Je.test(i.tagName)) {
          const f = i.textContent.split(_), $ = f.length - 1;
          if ($ > 0) {
            i.textContent = J ? J.emptyScript : "";
            for (let v = 0; v < $; v++) i.append(f[v], D()), S.nextNode(), d.push({ type: 2, index: ++a });
            i.append(f[$], D());
          }
        }
      } else if (i.nodeType === 8) if (i.data === $e) d.push({ type: 2, index: a });
      else {
        let f = -1;
        for (; (f = i.data.indexOf(_, f + 1)) !== -1; ) d.push({ type: 7, index: a }), f += _.length - 1;
      }
      a++;
    }
  }
  static createElement(e, t) {
    const s = E.createElement("template");
    return s.innerHTML = e, s;
  }
};
o(se, "B");
let W = se;
function w(r, e, t = r, s) {
  var n, h;
  if (e === N) return e;
  let i = s !== void 0 ? (n = t.o) == null ? void 0 : n[s] : t.l;
  const a = B(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== a && ((h = i == null ? void 0 : i._$AO) == null || h.call(i, !1), a === void 0 ? i = void 0 : (i = new a(r), i._$AT(r, t, s)), s !== void 0 ? (t.o ?? (t.o = []))[s] = i : t.l = i), i !== void 0 && (e = w(r, i._$AS(r, e.values), i, s)), e;
}
o(w, "z");
const Ae = class Ae {
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
    const { el: { content: t }, parts: s } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? E).importNode(t, !0);
    S.currentNode = i;
    let a = S.nextNode(), n = 0, h = 0, d = s[0];
    for (; d !== void 0; ) {
      if (n === d.index) {
        let g;
        d.type === 2 ? g = new O(a, a.nextSibling, this, e) : d.type === 1 ? g = new d.ctor(a, d.name, d.strings, this, e) : d.type === 6 && (g = new te(a, this, e)), this._$AV.push(g), d = s[++h];
      }
      n !== (d == null ? void 0 : d.index) && (a = S.nextNode(), n++);
    }
    return S.currentNode = E, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
};
o(Ae, "F");
let X = Ae;
const ie = class ie {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, s, i) {
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this.v = (i == null ? void 0 : i.isConnected) ?? !0;
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
    e = w(this, e, t), B(e) ? e === u || e == null || e === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : e !== this._$AH && e !== N && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Ge(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== u && B(this._$AH) ? this._$AA.nextSibling.data = e : this.T(E.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = W.createElement(Qe(s.h, s.h[0]), this.options)), s);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === i) this._$AH.p(t);
    else {
      const n = new X(i, this), h = n.u(this.options);
      n.p(t), this.T(h), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = ze.get(e.strings);
    return t === void 0 && ze.set(e.strings, t = new W(e)), t;
  }
  k(e) {
    me(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const a of e) i === t.length ? t.push(s = new ie(this.O(D()), this.O(D()), this, this.options)) : s = t[i], s._$AI(a), i++;
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
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
};
o(ie, "et");
let O = ie;
const ye = class ye {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, i, a) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = a, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = u;
  }
  _$AI(e, t = this, s, i) {
    const a = this.strings;
    let n = !1;
    if (a === void 0) e = w(this, e, t, 0), n = !B(e) || e !== this._$AH && e !== N, n && (this._$AH = e);
    else {
      const h = e;
      let d, g;
      for (e = a[0], d = 0; d < a.length - 1; d++) g = w(this, h[s + d], t, d), g === N && (g = this._$AH[d]), n || (n = !B(g) || g !== this._$AH[d]), g === u ? e = u : e !== u && (e += (g ?? "") + a[d + 1]), this._$AH[d] = g;
    }
    n && !i && this.j(e);
  }
  j(e) {
    e === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
};
o(ye, "G");
let k = ye;
const Se = class Se extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === u ? void 0 : e;
  }
};
o(Se, "Y");
let Q = Se;
const Ee = class Ee extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== u);
  }
};
o(Ee, "Z");
let Y = Ee;
const we = class we extends k {
  constructor(e, t, s, i, a) {
    super(e, t, s, i, a), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = w(this, e, t, 0) ?? u) === N) return;
    const s = this._$AH, i = e === u && s !== u || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, a = e !== u && (s === u || i);
    i && this.element.removeEventListener(this.name, this, s), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
};
o(we, "q");
let ee = we;
const ke = class ke {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    w(this, e);
  }
};
o(ke, "K");
let te = ke;
const Vt = { M: be, P: _, A: $e, C: 1, L: Ye, R: X, D: Ge, V: w, I: O, H: k, N: Y, U: ee, B: Q, F: te }, de = T.litHtmlPolyfillSupport;
de == null || de(W, O), (T.litHtmlVersions ?? (T.litHtmlVersions = [])).push("3.2.0");
const Ut = /* @__PURE__ */ o((r, e, t) => {
  const s = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = s._$litPart$;
  if (i === void 0) {
    const a = (t == null ? void 0 : t.renderBefore) ?? null;
    s._$litPart$ = i = new O(e.insertBefore(D(), a), a, void 0, t ?? {});
  }
  return i._$AI(r), i;
}, "Q");
const Re = class Re extends R {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = Ut(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return N;
  }
};
o(Re, "h");
let C = Re;
var De;
C._$litElement$ = !0, C.finalized = !0, (De = globalThis.litElementHydrateSupport) == null || De.call(globalThis, { LitElement: C });
const le = globalThis.litElementPolyfillSupport;
le == null || le({ LitElement: C });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
const Ht = {
  h01130b08c68f9a5e: c`<strong>${0}</strong> redigerade <em>${1}</em>`,
  h1c3b785e6e3a8e66: c`<strong>${0}</strong> nämnde dig i ett inlägg`,
  h25b3f8f8b362512a: c`<strong>${0}</strong> kommenterade på <strong>${1}</strong>`,
  h38e95b7f86619e86: c`<strong>${0}</strong> reagerade med ${1} på <em>${2}</em>`,
  h4de4b38bbb77efd1: c`<strong>${0}</strong> svarade på ett inlägg`,
  h553c0e517daf2138: c`<strong>${0}</strong> redigerade ett inlägg`,
  h58b3d0836b9c096b: c`<strong>${0}</strong> nämnde dig i ett meddelande`,
  h7dbb7ebbddd1e749: c`<strong>${0}</strong> nämnde dig i en kommentar`,
  h806676f9cb17dc43: c`<strong>${0}</strong> och <strong>${1}</strong> röstade i din omröstning`,
  h9103c911268b0c9e: c`<strong>${0}</strong> reagerade med ${1} på ditt inlägg`,
  h9c07a82c6eebf5c1: c`<strong>${0}</strong> reagerade med ${1} på din kommentar`,
  h9ca2f3f1d2bab6a3: c`Nytt meddelande från <strong>${0}</strong>`,
  hac73f0c2a8a81295: c`<strong>${0}</strong> svarade på ditt inlägg`,
  hb7e18fe8a4d7621d: c`<strong>${0}</strong> röstade i din omröstning`,
  hc347e1c50a2cbca3: c`<strong>${0}</strong> publicerade ett inlägg i <strong>${1}</strong>`,
  hcb4eab821844b51b: c`<strong>${0}</strong> gillade ditt meddelande`,
  hd101f9562d8144ba: c`<strong>${0}</strong>, <strong>${1}</strong> och <strong>${2}</strong> röstade i din omröstning`,
  hd424f1e143fa57e9: c`<strong>${0}</strong> lade till <em>${1}</em> till <strong>${2}</strong>`,
  hd9c939638dd93e26: c`<strong>${0}</strong> skickade ett meddelande i <strong>${1}</strong>`,
  hdaefe9c8c54b22f3: c`<strong>${0}</strong> reagerade med ${1} på ditt meddelande`,
  hdf80c9b60917645e: c`<strong>${0}</strong> gillade <em>${1}</em>`,
  he6123e657aaaff16: c`<strong>${0}</strong> gillade ditt inlägg`,
  hec9260735fe49119: c`<strong>${0}</strong> gillade din kommentar`,
  heea6eb8beac3fd2f: c`<strong>${0}</strong> och ${1} andra röstade i din omröstning`,
  hf66c4d1a8623e3f6: c`<strong>${0}</strong> kommenterade på <em>${1}</em>`,
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
  sf001ba58cf846564: "Meddelanden",
  sf59f359396914fa2: "Ta bort alla",
  sf60480d4fe3a8e08: l`${0} skriver${1}`,
  sf7a5eea7c80c2137: "Bottar",
  sf863f06a8efefe1e: "Skapa ett inlägg...",
  sf8e156354e5bacb8: "Aktiviteter",
  sf993bb199fefbe04: "Alla",
  sfaacc9c26728c711: "Släpp filer här för att ladda upp.",
  sfeddbc6c931b7ad7: "Markera alla som lästa",
  sfef95f1ec987bff3: "Zoom-möte",
  sff2f8a87373e1d2a: "Mötet avslutades",
  sffa721bb6aa3128d: "Sök..."
}, zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  templates: Ht
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as D,
  jt as Oe,
  Ut as Q,
  N as R,
  Et as S,
  ge as b,
  Ot as configureLocalization,
  ue as e,
  C as h,
  It as i,
  c as ke,
  Nt as localized,
  it as msg,
  St as r,
  Vt as si,
  l as str,
  zt as svSE,
  Ze as y
};
