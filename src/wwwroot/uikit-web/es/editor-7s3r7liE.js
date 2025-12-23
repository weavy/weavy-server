var bg = Object.defineProperty;
var c = (r, e) => bg(r, "name", { value: e, configurable: !0 });
const rx = /* @__PURE__ */ c((r) => {
  r && requestAnimationFrame(() => r?.focus?.());
}, "autofocusRef");
async function nx(r, e = "wy-") {
  const t = [];
  for (let i = r; i = i.parentElement; )
    i.matches(":not(:defined)") && i.localName.startsWith(e) && t.push(customElements.whenDefined(i.localName));
  await Promise.all(t);
}
c(nx, "whenParentsDefined");
const wg = /* @__PURE__ */ c((r, e) => {
  let t;
  const i = new ResizeObserver(() => {
    const { isConnected: n } = r;
    n !== t && (t = n, e(n, r));
  });
  return i.observe(r), i;
}, "observeConnected");
async function sx(r, e = !0) {
  if (r.isConnected === e)
    return e;
  {
    let t;
    const i = new Promise((s) => t = s), n = wg(r, (s) => {
      s === e && t?.(e);
    });
    return await i, n.disconnect(), e;
  }
}
c(sx, "whenConnected");
async function ox() {
  eh(), document.hidden && await new Promise((r) => {
    window.addEventListener(
      "visibilitychange",
      () => {
        document.hidden || r(!0);
      },
      { once: !0 }
    );
  });
}
c(ox, "whenDocumentVisible");
const CO = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  opacityProperty: !0,
  visibilityProperty: !0,
  // Legacy compatibility
  checkOpacity: !0,
  checkVisibilityCSS: !0
};
function XO(r, e = !0, t = CO, i) {
  r.checkVisibility(t) === e ? i(e) : requestAnimationFrame(() => XO(r, e, t, i));
}
c(XO, "untilVisibility");
async function lx(r, e = !0, t = CO) {
  r.checkVisibility(t) !== e && await new Promise((n) => {
    XO(r, e, t, n);
  });
}
c(lx, "whenElementVisible");
function ax(r) {
  return r.ctrlKey || r.metaKey || r.button === 1;
}
c(ax, "isModifiedClick");
function hx(r) {
  return r.getRootNode() instanceof ShadowRoot;
}
c(hx, "isInShadowDom");
function fx() {
  return !!(document.body?.showPopover && !/native code/i.test(document.body.showPopover.toString()));
}
c(fx, "isPopoverPolyfilled");
function cx() {
  return typeof window < "u";
}
c(cx, "isDomAvailable");
function eh() {
  if (typeof window > "u")
    throw Error("DOM not available");
}
c(eh, "throwOnDomNotAvailable");
function xg(r, e) {
  if (eh(), r) {
    for (let t = r; t = t.parentElement || t.parentNode || t.host; )
      if (t instanceof Element && e(t))
        return t;
  }
}
c(xg, "getParent");
function ux(r) {
  return xg(r, (e) => {
    const t = getComputedStyle(e);
    return !!(e instanceof HTMLElement && (e.localName === "wy-overlay" || e.popover || t.position === "fixed" || // @ts-expect-error overlay not in CSSStyleDeclaration
    t.overlay === "auto"));
  });
}
c(ux, "inOverlay");
let rl = [], EO = [];
(() => {
  let r = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < r.length; e++)
    (e % 2 ? EO : rl).push(t = t + r[e]);
})();
function Pg(r) {
  if (r < 768) return !1;
  for (let e = 0, t = rl.length; ; ) {
    let i = e + t >> 1;
    if (r < rl[i]) t = i;
    else if (r >= EO[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
c(Pg, "isExtendingChar");
function Lc(r) {
  return r >= 127462 && r <= 127487;
}
c(Lc, "isRegionalIndicator");
const _c = 8205;
function kg(r, e, t = !0, i = !0) {
  return (t ? YO : $g)(r, e, i);
}
c(kg, "findClusterBreak$1");
function YO(r, e, t) {
  if (e == r.length) return e;
  e && VO(r.charCodeAt(e)) && WO(r.charCodeAt(e - 1)) && e--;
  let i = $o(r, e);
  for (e += Mc(i); e < r.length; ) {
    let n = $o(r, e);
    if (i == _c || n == _c || t && Pg(n))
      e += Mc(n), i = n;
    else if (Lc(n)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Lc($o(r, o)); )
        s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
c(YO, "nextClusterBreak");
function $g(r, e, t) {
  for (; e > 0; ) {
    let i = YO(r, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
c($g, "prevClusterBreak");
function $o(r, e) {
  let t = r.charCodeAt(e);
  if (!WO(t) || e + 1 == r.length) return t;
  let i = r.charCodeAt(e + 1);
  return VO(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
c($o, "codePointAt$1");
function VO(r) {
  return r >= 56320 && r < 57344;
}
c(VO, "surrogateLow$1");
function WO(r) {
  return r >= 55296 && r < 56320;
}
c(WO, "surrogateHigh$1");
function Mc(r) {
  return r < 65536 ? 1 : 2;
}
c(Mc, "codePointSize$1");
const Ws = class Ws {
  /**
  Get the line description around the given position.
  */
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(e, t, i) {
    [e, t] = Ei(this, e, t);
    let n = [];
    return this.decompose(
      0,
      e,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      t,
      this.length,
      n,
      1
      /* Open.From */
    ), Pi.from(n, this.length - (t - e) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(e, t = this.length) {
    [e, t] = Ei(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Pi.from(i, t - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new Kt(this), s = new Kt(e);
    for (let o = t, l = t; ; ) {
      if (n.next(o), s.next(o), o = 0, n.lineBreak != s.lineBreak || n.done != s.done || n.value != s.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Kt(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new is(this, e, t);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let n = this.line(e).from;
      i = this.iterRange(n, Math.max(n, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new rs(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Ws.empty : e.length <= 32 ? new $e(e) : Pi.from($e.split(e, []));
  }
};
c(Ws, "Text");
let W = Ws;
const Le = class Le extends W {
  constructor(e, t = Rg(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, n) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = n + o.length;
      if ((t ? i : l) >= e)
        return new vg(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let s = e <= 0 && t >= this.length ? this : new Le(Zc(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), l = Gn(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        i.push(new Le(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new Le(l.slice(0, a)), new Le(l.slice(a)));
      }
    } else
      i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof Le))
      return super.replace(e, t, i);
    [e, t] = Ei(this, e, t);
    let n = Gn(this.text, Gn(i.text, Zc(this.text, 0, e)), t), s = this.length + i.length - (t - e);
    return n.length <= 32 ? new Le(n, s) : Pi.from(Le.split(n, []), s);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Ei(this, e, t);
    let n = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (n += i), e < a && t > s && (n += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], n = -1;
    for (let s of e)
      i.push(s), n += s.length + 1, i.length == 32 && (t.push(new Le(i, n)), i = [], n = -1);
    return n > -1 && t.push(new Le(i, n)), t;
  }
};
c(Le, "TextLeaf");
let $e = Le;
const Qt = class Qt extends W {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, n) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = n + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e)
        return o.lineInner(e, t, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, n) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let h = n & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Ei(this, e, t), i.lines < this.lines)
      for (let n = 0, s = 0; n < this.children.length; n++) {
        let o = this.children[n], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let f = this.children.slice();
            return f[n] = a, new Qt(f, this.length - (t - e) + i.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Ei(this, e, t);
    let n = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (n += i), e < a && t > o && (n += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Qt))
      return 0;
    let i = 0, [n, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; n += t, s += t) {
      if (n == o || s == l)
        return i;
      let a = this.children[n], h = e.children[s];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new $e(d, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), s = n << 1, o = n >> 1, l = [], a = 0, h = -1, f = [];
    function u(d) {
      let p;
      if (d.lines > s && d instanceof Qt)
        for (let m of d.children)
          u(m);
      else d.lines > o && (a > o || !a) ? (O(), l.push(d)) : d instanceof $e && a && (p = f[f.length - 1]) instanceof $e && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, f[f.length - 1] = new $e(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && O(), a += d.lines, h += d.length + 1, f.push(d));
    }
    c(u, "add");
    function O() {
      a != 0 && (l.push(f.length == 1 ? f[0] : Qt.from(f, h)), h = -1, a = f.length = 0);
    }
    c(O, "flush");
    for (let d of e)
      u(d);
    return O(), l.length == 1 ? l[0] : new Qt(l, t);
  }
};
c(Qt, "TextNode");
let Pi = Qt;
W.empty = /* @__PURE__ */ new $e([""], 0);
function Rg(r) {
  let e = -1;
  for (let t of r)
    e += t.length + 1;
  return e;
}
c(Rg, "textLength");
function Gn(r, e, t = 0, i = 1e9) {
  for (let n = 0, s = 0, o = !0; s < r.length && n <= i; s++) {
    let l = r[s], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
c(Gn, "appendText");
function Zc(r, e, t) {
  return Gn(r, [""], e, t);
}
c(Zc, "sliceText");
const Eh = class Eh {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof $e ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], s = this.offsets[i], o = s >> 1, l = n instanceof $e ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof $e) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof $e ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
};
c(Eh, "RawTextCursor");
let Kt = Eh;
const Yh = class Yh {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new Kt(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: n } = this.cursor.next(e);
    return this.pos += (n.length + e) * t, this.value = n.length <= i ? n : t < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
};
c(Yh, "PartialTextCursor");
let is = Yh;
const Vh = class Vh {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: n } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
};
c(Vh, "LineCursor");
let rs = Vh;
typeof Symbol < "u" && (W.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Kt.prototype[Symbol.iterator] = is.prototype[Symbol.iterator] = rs.prototype[Symbol.iterator] = function() {
  return this;
});
var Ti;
let vg = (Ti = class {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}, c(Ti, "Line"), Ti);
function Ei(r, e, t) {
  return e = Math.max(0, Math.min(r.length, e)), [e, Math.max(e, Math.min(r.length, t))];
}
c(Ei, "clip");
function me(r, e, t = !0, i = !0) {
  return kg(r, e, t, i);
}
c(me, "findClusterBreak");
function Tg(r) {
  return r >= 56320 && r < 57344;
}
c(Tg, "surrogateLow");
function Ag(r) {
  return r >= 55296 && r < 56320;
}
c(Ag, "surrogateHigh");
function Vt(r, e) {
  let t = r.charCodeAt(e);
  if (!Ag(t) || e + 1 == r.length)
    return t;
  let i = r.charCodeAt(e + 1);
  return Tg(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
c(Vt, "codePointAt");
function Lg(r) {
  return r <= 65535 ? String.fromCharCode(r) : (r -= 65536, String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320));
}
c(Lg, "fromCodePoint");
function Oi(r) {
  return r < 65536 ? 1 : 2;
}
c(Oi, "codePointSize");
const nl = /\r\n?|\n/;
var de = /* @__PURE__ */ (function(r) {
  return r[r.Simple = 0] = "Simple", r[r.TrackDel = 1] = "TrackDel", r[r.TrackBefore = 2] = "TrackBefore", r[r.TrackAfter = 3] = "TrackAfter", r;
})(de || (de = {}));
const Qi = class Qi {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(e) {
    this.sections = e;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(e) {
    for (let t = 0, i = 0, n = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, n, s), n += s) : n += o, i += s;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(e, t = !1) {
    sl(this, e, t);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      n < 0 ? e.push(i, n) : e.push(n, i);
    }
    return new Qi(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : UO(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : ol(this, e, t);
  }
  mapPos(e, t = -1, i = de.Simple) {
    let n = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return s + (e - n);
        s += l;
      } else {
        if (i != de.Simple && h >= e && (i == de.TrackDel && n < e && h > e || i == de.TrackBefore && n < e || i == de.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == n || t < 0 ? s : s + a;
        s += a;
      }
      n = h;
    }
    if (e > n)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${n}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, t = e) {
    for (let i = 0, n = 0; i < this.sections.length && n <= t; ) {
      let s = this.sections[i++], o = this.sections[i++], l = n + s;
      if (o >= 0 && n <= t && l >= e)
        return n < e && l > t ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], n = this.sections[t++];
      e += (e ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return e;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Qi(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new Qi(e);
  }
};
c(Qi, "ChangeDesc");
let wt = Qi;
const Ke = class Ke extends wt {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return sl(this, (t, i, n, s, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return ol(this, e, t, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let n = 0, s = 0; n < t.length; n += 2) {
      let o = t[n], l = t[n + 1];
      if (l >= 0) {
        t[n] = l, t[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(W.empty);
        i.push(o ? e.slice(s, s + o) : W.empty);
      }
      s += o;
    }
    return new Ke(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : UO(this, e, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(e, t = !1) {
    return e.empty ? this : ol(this, e, t, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(e, t = !1) {
    sl(this, e, t);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return wt.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let t = [], i = [], n = [], s = new ri(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done)
          break e;
        let f = Math.min(s.len, a - l);
        ae(n, f, -1);
        let u = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        ae(t, f, u), u > 0 && St(i, t, s.text), s.forward(f), l += f;
      }
      let h = e[o++];
      for (; l < h; ) {
        if (s.done)
          break e;
        let f = Math.min(s.len, h - l);
        ae(t, f, -1), ae(n, f, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(f), l += f;
      }
    }
    return {
      changes: new Ke(t, i),
      filtered: wt.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], n = this.sections[t + 1];
      n < 0 ? e.push(i) : n == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, t, i) {
    let n = [], s = [], o = 0, l = null;
    function a(f = !1) {
      if (!f && !n.length)
        return;
      o < t && ae(n, t - o, -1);
      let u = new Ke(n, s);
      l = l ? l.compose(u.map(l)) : u, n = [], s = [], o = 0;
    }
    c(a, "flush");
    function h(f) {
      if (Array.isArray(f))
        for (let u of f)
          h(u);
      else if (f instanceof Ke) {
        if (f.length != t)
          throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`);
        a(), l = l ? l.compose(f.map(l)) : f;
      } else {
        let { from: u, to: O = u, insert: d } = f;
        if (u > O || u < 0 || O > t)
          throw new RangeError(`Invalid change range ${u} to ${O} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? W.of(d.split(i || nl)) : d : W.empty, m = p.length;
        if (u == O && m == 0)
          return;
        u < o && a(), u > o && ae(n, u - o, -1), ae(n, O - u, m), St(s, n, p), o = O;
      }
    }
    return c(h, "process"), h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Ke(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (typeof s == "number")
        t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          t.push(s[0], 0);
        else {
          for (; i.length < n; )
            i.push(W.empty);
          i[n] = W.of(s.slice(1)), t.push(s[0], i[n].length);
        }
      }
    }
    return new Ke(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Ke(e, t);
  }
};
c(Ke, "ChangeSet");
let Te = Ke;
function ae(r, e, t, i = !1) {
  if (e == 0 && t <= 0)
    return;
  let n = r.length - 2;
  n >= 0 && t <= 0 && t == r[n + 1] ? r[n] += e : n >= 0 && e == 0 && r[n] == 0 ? r[n + 1] += t : i ? (r[n] += e, r[n + 1] += t) : r.push(e, t);
}
c(ae, "addSection");
function St(r, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < r.length)
    r[r.length - 1] = r[r.length - 1].append(t);
  else {
    for (; r.length < i; )
      r.push(W.empty);
    r.push(t);
  }
}
c(St, "addInsert");
function sl(r, e, t) {
  let i = r.inserted;
  for (let n = 0, s = 0, o = 0; o < r.sections.length; ) {
    let l = r.sections[o++], a = r.sections[o++];
    if (a < 0)
      n += l, s += l;
    else {
      let h = n, f = s, u = W.empty;
      for (; h += l, f += a, a && i && (u = u.append(i[o - 2 >> 1])), !(t || o == r.sections.length || r.sections[o + 1] < 0); )
        l = r.sections[o++], a = r.sections[o++];
      e(n, h, s, f, u), n = h, s = f;
    }
  }
}
c(sl, "iterChanges");
function ol(r, e, t, i = !1) {
  let n = [], s = i ? [] : null, o = new ri(r), l = new ri(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      ae(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let h = l.len;
      for (ae(n, l.ins, -1); h; ) {
        let f = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= f && (ae(n, 0, o.ins), s && St(s, n, o.text), a = o.i), o.forward(f), h -= f;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, f = o.len;
      for (; f; )
        if (l.ins == -1) {
          let u = Math.min(f, l.len);
          h += u, f -= u, l.forward(u);
        } else if (l.ins == 0 && l.len < f)
          f -= l.len, l.next();
        else
          break;
      ae(n, h, a < o.i ? o.ins : 0), s && a < o.i && St(s, n, o.text), a = o.i, o.forward(o.len - f);
    } else {
      if (o.done && l.done)
        return s ? Te.createSet(n, s) : wt.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
c(ol, "mapSet");
function UO(r, e, t = !1) {
  let i = [], n = t ? [] : null, s = new ri(r), o = new ri(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return n ? Te.createSet(i, n) : wt.create(i);
    if (s.ins == 0)
      ae(i, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      ae(i, 0, o.ins, l), n && St(n, i, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), h = i.length;
        if (s.ins == -1) {
          let f = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          ae(i, a, f, l), n && f && St(n, i, o.text);
        } else o.ins == -1 ? (ae(i, s.off ? 0 : s.len, a, l), n && St(n, i, s.textBit(a))) : (ae(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), n && !o.off && St(n, i, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), s.forward2(a), o.forward(a);
      }
    }
  }
}
c(UO, "composeSets");
const Wh = class Wh {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? W.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? W.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
};
c(Wh, "SectionIter");
let ri = Wh;
const $r = class $r {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(e, t = -1) {
    let i, n;
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new $r(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return k.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return k.range(this.anchor, i);
  }
  /**
  Compare this range to another range.
  */
  eq(e, t = !1) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return k.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new $r(e, t, i);
  }
};
c($r, "SelectionRange");
let di = $r;
const fe = class fe {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, t = -1) {
    return e.empty ? this : fe.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new fe([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, t = !0) {
    return fe.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, fe.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new fe(e.ranges.map((t) => di.fromJSON(t)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, t = e) {
    return new fe([fe.range(e, t)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < e.length; n++) {
      let s = e[n];
      if (s.empty ? s.from <= i : s.from < i)
        return fe.normalized(e.slice(), t);
      i = s.to;
    }
    return new fe(e, t);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, t = 0, i, n) {
    return di.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, n) {
    let s = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return t < e ? di.create(t, e, 48 | s) : di.create(e, t, (t > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((n, s) => n.from - s.from), t = e.indexOf(i);
    for (let n = 1; n < e.length; n++) {
      let s = e[n], o = e[n - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        n <= t && t--, e.splice(--n, 2, s.anchor > s.head ? fe.range(a, l) : fe.range(l, a));
      }
    }
    return new fe(e, t);
  }
};
c(fe, "EditorSelection");
let k = fe;
function IO(r, e) {
  for (let t of r.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
c(IO, "checkSelection");
let th = 0;
const Us = class Us {
  constructor(e, t, i, n, s) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = th++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(e = {}) {
    return new Us(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : ih), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new ki([], this, 0, e);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ki(e, this, 1, t);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new ki(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = /* @__PURE__ */ c((i) => i, "get")), this.compute([e], (i) => t(i.field(e)));
  }
};
c(Us, "Facet");
let M = Us;
function ih(r, e) {
  return r == e || r.length == e.length && r.every((t, i) => t === e[i]);
}
c(ih, "sameArray$1");
const Uh = class Uh {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = th++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, n = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, h = !1, f = [];
    for (let u of this.dependencies)
      u == "doc" ? a = !0 : u == "selection" ? h = !0 : (((t = e[u.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && f.push(e[u.id]);
    return {
      create(u) {
        return u.values[o] = i(u), 1;
      },
      update(u, O) {
        if (a && O.docChanged || h && (O.docChanged || O.selection) || ll(u, f)) {
          let d = i(u);
          if (l ? !Cc(d, u.values[o], n) : !n(d, u.values[o]))
            return u.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: /* @__PURE__ */ c((u, O) => {
        let d, p = O.config.address[s];
        if (p != null) {
          let m = os(O, p);
          if (this.dependencies.every((Q) => Q instanceof M ? O.facet(Q) === u.facet(Q) : Q instanceof Ue ? O.field(Q, !1) == u.field(Q, !1) : !0) || (l ? Cc(d = i(u), m, n) : n(d = i(u), m)))
            return u.values[o] = m, 0;
        } else
          d = i(u);
        return u.values[o] = d, 1;
      }, "reconfigure")
    };
  }
};
c(Uh, "FacetProvider");
let ki = Uh;
function Cc(r, e, t) {
  if (r.length != e.length)
    return !1;
  for (let i = 0; i < r.length; i++)
    if (!t(r[i], e[i]))
      return !1;
  return !0;
}
c(Cc, "compareArray");
function ll(r, e) {
  let t = !1;
  for (let i of e)
    pr(r, i) & 1 && (t = !0);
  return t;
}
c(ll, "ensureAll");
function _g(r, e, t) {
  let i = t.map((a) => r[a.id]), n = t.map((a) => a.type), s = i.filter((a) => !(a & 1)), o = r[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let f = 0; f < i.length; f++) {
      let u = os(a, i[f]);
      if (n[f] == 2)
        for (let O of u)
          h.push(O);
      else
        h.push(u);
    }
    return e.combine(h);
  }
  return c(l, "get"), {
    create(a) {
      for (let h of i)
        pr(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!ll(a, s))
        return 0;
      let f = l(a);
      return e.compare(f, a.values[o]) ? 0 : (a.values[o] = f, 1);
    },
    reconfigure(a, h) {
      let f = ll(a, i), u = h.config.facets[e.id], O = h.facet(e);
      if (u && !f && ih(t, u))
        return a.values[o] = O, 0;
      let d = l(a);
      return e.compare(d, O) ? (a.values[o] = O, 0) : (a.values[o] = d, 1);
    }
  };
}
c(_g, "dynamicFacetSlot");
const vn = /* @__PURE__ */ M.define({ static: !0 }), Is = class Is {
  constructor(e, t, i, n, s) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new Is(th++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(vn).find((i) => i.field == this);
    return (t?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: /* @__PURE__ */ c((i) => (i.values[t] = this.create(i), 1), "create"),
      update: /* @__PURE__ */ c((i, n) => {
        let s = i.values[t], o = this.updateF(s, n);
        return this.compareF(s, o) ? 0 : (i.values[t] = o, 1);
      }, "update"),
      reconfigure: /* @__PURE__ */ c((i, n) => {
        let s = i.facet(vn), o = n.facet(vn), l;
        return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : n.config.address[this.id] != null ? (i.values[t] = n.field(this), 0) : (i.values[t] = this.create(i), 1);
      }, "reconfigure")
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, vn.of({ field: this, create: e })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
};
c(Is, "StateField");
let Ue = Is;
const Ut = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function rr(r) {
  return (e) => new ns(e, r);
}
c(rr, "prec");
const ci = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ rr(Ut.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ rr(Ut.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ rr(Ut.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ rr(Ut.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ rr(Ut.lowest)
}, Ih = class Ih {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
};
c(Ih, "PrecExtension");
let ns = Ih;
const zs = class zs {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new Br(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return zs.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
};
c(zs, "Compartment");
let Dr = zs;
const zh = class zh {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
};
c(zh, "CompartmentInstance");
let Br = zh;
const js = class js {
  constructor(e, t, i, n, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = n, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let n = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let O of Mg(e, t, o))
      O instanceof Ue ? n.push(O) : (s[O.facet.id] || (s[O.facet.id] = [])).push(O);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let O of n)
      l[O.id] = h.length << 1, h.push((d) => O.slot(d));
    let f = i?.config.facets;
    for (let O in s) {
      let d = s[O], p = d[0].facet, m = f && f[O] || [];
      if (d.every(
        (Q) => Q.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, ih(m, d))
          a.push(i.facet(p));
        else {
          let Q = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(Q, i.facet(p)) ? i.facet(p) : Q);
        }
      else {
        for (let Q of d)
          Q.type == 0 ? (l[Q.id] = a.length << 1 | 1, a.push(Q.value)) : (l[Q.id] = h.length << 1, h.push((y) => Q.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((Q) => _g(Q, p, d));
      }
    }
    let u = h.map((O) => O(l));
    return new js(e, o, u, l, a, s);
  }
};
c(js, "Configuration");
let ss = js;
function Mg(r, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof Br && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        s(h, l);
    else if (o instanceof Br) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), s(h, l);
    } else if (o instanceof ns)
      s(o.inner, o.prec);
    else if (o instanceof Ue)
      i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof ki)
      i[l].push(o), o.facet.extensions && s(o.facet.extensions, Ut.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(h, l);
    }
  }
  return c(s, "inner"), s(r, Ut.default), i.reduce((o, l) => o.concat(l));
}
c(Mg, "flatten");
function pr(r, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = r.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  r.status[t] = 4;
  let n = r.computeSlot(r, r.config.dynamicSlots[t]);
  return r.status[t] = 2 | n;
}
c(pr, "ensureAddr");
function os(r, e) {
  return e & 1 ? r.config.staticValues[e >> 1] : r.values[e >> 1];
}
c(os, "getAddr");
const zO = /* @__PURE__ */ M.define(), al = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine"),
  static: !0
}), jO = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : void 0, "combine"),
  static: !0
}), qO = /* @__PURE__ */ M.define(), DO = /* @__PURE__ */ M.define(), BO = /* @__PURE__ */ M.define(), NO = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : !1, "combine")
}), jh = class jh {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new hl();
  }
};
c(jh, "Annotation");
let Ie = jh;
const qh = class qh {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Ie(this, e);
  }
};
c(qh, "AnnotationType");
let hl = qh;
const Dh = class Dh {
  /**
  @internal
  */
  constructor(e) {
    this.map = e;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(e) {
    return new I(this, e);
  }
};
c(Dh, "StateEffectType");
let fl = Dh;
const qs = class qs {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new qs(this.type, t);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(e) {
    return this.type == e;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(e = {}) {
    return new fl(e.map || ((t) => t));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let n of e) {
      let s = n.map(t);
      s && i.push(s);
    }
    return i;
  }
};
c(qs, "StateEffect");
let I = qs;
I.reconfigure = /* @__PURE__ */ I.define();
I.appendConfig = /* @__PURE__ */ I.define();
const jt = class jt {
  constructor(e, t, i, n, s, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, i && IO(i, t.newLength), s.some((l) => l.type == jt.time) || (this.annotations = s.concat(jt.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, n, s, o) {
    return new jt(e, t, i, n, s, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(e) {
    let t = this.annotation(jt.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
};
c(jt, "Transaction");
let le = jt;
le.time = /* @__PURE__ */ Ie.define();
le.userEvent = /* @__PURE__ */ Ie.define();
le.addToHistory = /* @__PURE__ */ Ie.define();
le.remote = /* @__PURE__ */ Ie.define();
function Zg(r, e) {
  let t = [];
  for (let i = 0, n = 0; ; ) {
    let s, o;
    if (i < r.length && (n == e.length || e[n] >= r[i]))
      s = r[i++], o = r[i++];
    else if (n < e.length)
      s = e[n++], o = e[n++];
    else
      return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
c(Zg, "joinRanges");
function GO(r, e, t) {
  var i;
  let n, s, o;
  return t ? (n = e.changes, s = Te.empty(e.changes.length), o = r.changes.compose(e.changes)) : (n = e.changes.map(r.changes), s = r.changes.mapDesc(e.changes, !0), o = r.changes.compose(n)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (i = r.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: I.mapEffects(r.effects, n).concat(I.mapEffects(e.effects, s)),
    annotations: r.annotations.length ? r.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: r.scrollIntoView || e.scrollIntoView
  };
}
c(GO, "mergeTransaction");
function cl(r, e, t) {
  let i = e.selection, n = $i(e.annotations);
  return e.userEvent && (n = n.concat(le.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Te ? e.changes : Te.of(e.changes || [], t, r.facet(jO)),
    selection: i && (i instanceof k ? i : k.single(i.anchor, i.head)),
    effects: $i(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
c(cl, "resolveTransactionInner");
function FO(r, e, t) {
  let i = cl(r, e.length ? e[0] : {}, r.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    i = GO(i, cl(r, e[s], o ? i.changes.newLength : r.doc.length), o);
  }
  let n = le.create(r, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Xg(t ? Cg(n) : n);
}
c(FO, "resolveTransaction");
function Cg(r) {
  let e = r.startState, t = !0;
  for (let n of e.facet(qO)) {
    let s = n(r);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : Zg(t, s));
  }
  if (t !== !0) {
    let n, s;
    if (t === !1)
      s = r.changes.invertedDesc, n = Te.empty(e.doc.length);
    else {
      let o = r.changes.filter(t);
      n = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    r = le.create(e, n, r.selection && r.selection.map(s), I.mapEffects(r.effects, s), r.annotations, r.scrollIntoView);
  }
  let i = e.facet(DO);
  for (let n = i.length - 1; n >= 0; n--) {
    let s = i[n](r);
    s instanceof le ? r = s : Array.isArray(s) && s.length == 1 && s[0] instanceof le ? r = s[0] : r = FO(e, $i(s), !1);
  }
  return r;
}
c(Cg, "filterTransaction");
function Xg(r) {
  let e = r.startState, t = e.facet(BO), i = r;
  for (let n = t.length - 1; n >= 0; n--) {
    let s = t[n](r);
    s && Object.keys(s).length && (i = GO(i, cl(e, s, r.changes.newLength), !0));
  }
  return i == r ? r : le.create(e, r.changes, r.selection, i.effects, i.annotations, i.scrollIntoView);
}
c(Xg, "extendTransaction");
const Eg = [];
function $i(r) {
  return r == null ? Eg : Array.isArray(r) ? r : [r];
}
c($i, "asArray");
var ft = /* @__PURE__ */ (function(r) {
  return r[r.Word = 0] = "Word", r[r.Space = 1] = "Space", r[r.Other = 2] = "Other", r;
})(ft || (ft = {}));
const Yg = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let ul;
try {
  ul = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Vg(r) {
  if (ul)
    return ul.test(r);
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Yg.test(t)))
      return !0;
  }
  return !1;
}
c(Vg, "hasWordChar");
function Wg(r) {
  return (e) => {
    if (!/\S/.test(e))
      return ft.Space;
    if (Vg(e))
      return ft.Word;
    for (let t = 0; t < r.length; t++)
      if (e.indexOf(r[t]) > -1)
        return ft.Word;
    return ft.Other;
  };
}
c(Wg, "makeCategorizer");
const Pe = class Pe {
  constructor(e, t, i, n, s, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      pr(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return pr(this, i), os(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...e) {
    return FO(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let l of e.effects)
      l.is(Dr.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => n.set(h, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(I.reconfigure) ? (t = null, i = l.value) : l.is(I.appendConfig) && (t = null, i = $i(i).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = ss.resolve(i, n, this), s = new Pe(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(al) ? e.newSelection : e.newSelection.asSingle();
    new Pe(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: k.cursor(t.from + e.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), s = [i.range], o = $i(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), f = h.map(n);
      for (let O = 0; O < l; O++)
        s[O] = s[O].map(f);
      let u = n.mapDesc(h, !0);
      s.push(a.range.map(u)), n = n.compose(f), o = I.mapEffects(o, f).concat(I.mapEffects($i(a.effects), u));
    }
    return {
      changes: n,
      selection: k.create(s, t.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof Te ? e : Te.of(e, this.doc.length, this.facet(Pe.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return W.of(e.split(this.facet(Pe.lineSeparator) || nl));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (pr(this, t), os(this, t));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e)
      for (let i in e) {
        let n = e[i];
        n instanceof Ue && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let s in i)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = i[s], l = e[s];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return Pe.create({
      doc: e.doc,
      selection: k.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = ss.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof W ? e.doc : W.of((e.doc || "").split(t.staticFacet(Pe.lineSeparator) || nl)), n = e.selection ? e.selection instanceof k ? e.selection : k.single(e.selection.anchor, e.selection.head) : k.single(0);
    return IO(n, i.length), t.staticFacet(al) || (n = n.asSingle()), new Pe(t, i, n, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(Pe.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(Pe.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(NO);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(e, ...t) {
    for (let i of this.facet(Pe.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let s = +(n || 1);
      return !s || s > t.length ? i : t[s - 1];
    })), e;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(e, t, i = -1) {
    let n = [];
    for (let s of this.facet(zO))
      for (let o of s(this, t, i))
        Object.prototype.hasOwnProperty.call(o, e) && n.push(o[e]);
    return n;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(e) {
    return Wg(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: t, from: i, length: n } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = me(t, o, !1);
      if (s(t.slice(a, o)) != ft.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = me(t, l);
      if (s(t.slice(l, a)) != ft.Word)
        break;
      l = a;
    }
    return o == l ? null : k.range(o + i, l + i);
  }
};
c(Pe, "EditorState");
let J = Pe;
J.allowMultipleSelections = al;
J.tabSize = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : 4, "combine")
});
J.lineSeparator = jO;
J.readOnly = NO;
J.phrases = /* @__PURE__ */ M.define({
  compare(r, e) {
    let t = Object.keys(r), i = Object.keys(e);
    return t.length == i.length && t.every((n) => r[n] == e[n]);
  }
});
J.languageData = zO;
J.changeFilter = qO;
J.transactionFilter = DO;
J.transactionExtender = BO;
Dr.reconfigure = /* @__PURE__ */ I.define();
function HO(r, e, t = {}) {
  let i = {};
  for (let n of r)
    for (let s of Object.keys(n)) {
      let o = n[s], l = i[s];
      if (l === void 0)
        i[s] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, s))
        i[s] = t[s](l, o);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let n in e)
    i[n] === void 0 && (i[n] = e[n]);
  return i;
}
c(HO, "combineConfig");
const Bh = class Bh {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(e) {
    return this == e;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(e, t = e) {
    return Ol.create(e, t, this);
  }
};
c(Bh, "RangeValue");
let ut = Bh;
ut.prototype.startSide = ut.prototype.endSide = 0;
ut.prototype.point = !1;
ut.prototype.mapMode = de.TrackDel;
var ii;
let Ol = (ii = class {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ii(e, t, i);
  }
}, c(ii, "Range"), ii);
function dl(r, e) {
  return r.from - e.from || r.value.startSide - e.value.startSide;
}
c(dl, "cmpRange");
const Ds = class Ds {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, t, i, n = 0) {
    let s = i ? this.to : this.from;
    for (let o = n, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, n) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, s); s < o; s++)
      if (n(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, t) {
    let i = [], n = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], f = this.from[a] + e, u = this.to[a] + e, O, d;
      if (f == u) {
        let p = t.mapPos(f, h.startSide, h.mapMode);
        if (p == null || (O = d = p, h.startSide != h.endSide && (d = t.mapPos(f, h.endSide), d < O)))
          continue;
      } else if (O = t.mapPos(f, h.startSide), d = t.mapPos(u, h.endSide), O > d || O == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - O || h.endSide - h.startSide) < 0 || (o < 0 && (o = O), h.point && (l = Math.max(l, d - O)), i.push(h), n.push(O - o), s.push(d - o));
    }
    return { mapped: i.length ? new Ds(n, s, i, l) : null, pos: o };
  }
};
c(Ds, "Chunk");
let pl = Ds;
const Ve = class Ve {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new Ve(e, t, i, n);
  }
  /**
  @internal
  */
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  /**
  @internal
  */
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: n = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o)
      return this;
    if (i && (t = t.slice().sort(dl)), this.isEmpty)
      return t.length ? Ve.of(t) : this;
    let l = new ls(this, null, -1).goto(0), a = 0, h = [], f = new Yi();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        f.addInner(u.from, u.to, u.value) || h.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && f.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || s < l.from || o(l.from, l.to, l.value)) && (f.addInner(l.from, l.to, l.value) || h.push(Ol.create(l.from, l.to, l.value))), l.next());
    return f.finishInner(this.nextLayer.isEmpty && !h.length ? Ve.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = e.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: f, pos: u } = a.map(l, e);
        f && (n = Math.max(n, f.maxPoint), t.push(f), i.push(u));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new Ve(i, t, s || Ve.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let s = this.chunkPos[n], o = this.chunk[n];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, i) === !1)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(e = 0) {
    return Nr.from([this]).goto(e);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(e, t = 0) {
    return Nr.from(e).goto(t);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, t, i, n, s = -1) {
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), a = Xc(o, l, i), h = new It(o, a, s), f = new It(l, a, s);
    i.iterGaps((u, O, d) => Ec(h, u, f, O, d, n)), i.empty && i.length == 0 && Ec(h, 0, f, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, t, i = 0, n) {
    n == null && (n = 999999999);
    let s = e.filter((f) => !f.isEmpty && t.indexOf(f) < 0), o = t.filter((f) => !f.isEmpty && e.indexOf(f) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = Xc(s, o), a = new It(s, l, 0).goto(i), h = new It(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !ml(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(e, t, i, n, s = -1) {
    let o = new It(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let f = o.activeForPoint(o.to), u = o.pointFrom < t ? f.length + 1 : o.point.startSide < 0 ? f.length : Math.min(f.length, a);
        n.point(l, h, o.point, f, u, o.pointRank), a = Math.min(o.openEnd(h), f.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(e, t = !1) {
    let i = new Yi();
    for (let n of e instanceof Ol ? [e] : t ? Ug(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return Ve.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != Ve.empty; n = n.nextLayer)
        t = new Ve(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
};
c(Ve, "RangeSet");
let re = Ve;
re.empty = /* @__PURE__ */ new re([], [], null, -1);
function Ug(r) {
  if (r.length > 1)
    for (let e = r[0], t = 1; t < r.length; t++) {
      let i = r[t];
      if (dl(e, i) > 0)
        return r.slice().sort(dl);
      e = i;
    }
  return r;
}
c(Ug, "lazySort");
re.empty.nextLayer = re.empty;
const Bs = class Bs {
  finishChunk(e) {
    this.chunks.push(new pl(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Bs())).add(e, t, i);
  }
  /**
  @internal
  */
  addInner(e, t, i) {
    let n = e - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  /**
  @internal
  */
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(re.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let t = re.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
};
c(Bs, "RangeSetBuilder");
let Yi = Bs;
function Xc(r, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let s of r)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = i.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !t?.touchesRange(l, l + s.chunk[o].length) && n.add(s.chunk[o]);
    }
  return n;
}
c(Xc, "findSharedChunks");
const Nh = class Nh {
  constructor(e, t, i, n = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < e || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
};
c(Nh, "LayerCursor");
let ls = Nh;
const Ns = class Ns {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new ls(o, t, i, s));
    return n.length == 1 ? n[0] : new Ns(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ro(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Ro(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Ro(this.heap, 0);
    }
  }
};
c(Ns, "HeapCursor");
let Nr = Ns;
function Ro(r, e) {
  for (let t = r[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= r.length)
      break;
    let n = r[i];
    if (i + 1 < r.length && n.compare(r[i + 1]) >= 0 && (n = r[i + 1], i++), t.compare(n) < 0)
      break;
    r[i] = t, r[e] = n, e = i;
  }
}
c(Ro, "heapBubble");
const Gh = class Gh {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Nr.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Tn(this.active, e), Tn(this.activeTo, e), Tn(this.activeRank, e), this.minActive = Yc(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    An(this.active, t, i), An(this.activeTo, t, n), An(this.activeRank, t, s), e && An(e, t, this.cursor.from), this.minActive = Yc(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > e) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && Tn(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < e; n--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
};
c(Gh, "SpanCursor");
let It = Gh;
function Ec(r, e, t, i, n, s) {
  r.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e;
  for (; ; ) {
    let h = r.to + a - t.to, f = h || r.endSide - t.endSide, u = f < 0 ? r.to + a : t.to, O = Math.min(u, o);
    if (r.point || t.point ? r.point && t.point && (r.point == t.point || r.point.eq(t.point)) && ml(r.activeForPoint(r.to), t.activeForPoint(t.to)) || s.comparePoint(l, O, r.point, t.point) : O > l && !ml(r.active, t.active) && s.compareRange(l, O, r.active, t.active), u > o)
      break;
    (h || r.openEnd != t.openEnd) && s.boundChange && s.boundChange(u), l = u, f <= 0 && r.next(), f >= 0 && t.next();
  }
}
c(Ec, "compare");
function ml(r, e) {
  if (r.length != e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] != e[t] && !r[t].eq(e[t]))
      return !1;
  return !0;
}
c(ml, "sameValues");
function Tn(r, e) {
  for (let t = e, i = r.length - 1; t < i; t++)
    r[t] = r[t + 1];
  r.pop();
}
c(Tn, "remove");
function An(r, e, t) {
  for (let i = r.length - 1; i >= e; i--)
    r[i + 1] = r[i];
  r[e] = t;
}
c(An, "insert");
function Yc(r, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || r[n].endSide - r[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
c(Yc, "findMinIndex");
function Ot(r, e, t = r.length) {
  let i = 0;
  for (let n = 0; n < t && n < r.length; )
    r.charCodeAt(n) == 9 ? (i += e - i % e, n++) : (i++, n = me(r, n));
  return i;
}
c(Ot, "countColumn");
function Ig(r, e, t, i) {
  for (let n = 0, s = 0; ; ) {
    if (s >= e)
      return n;
    if (n == r.length)
      break;
    s += r.charCodeAt(n) == 9 ? t - s % t : 1, n = me(r, n);
  }
  return r.length;
}
c(Ig, "findColumn");
const gl = "ͼ", Vc = typeof Symbol > "u" ? "__" + gl : Symbol.for(gl), Ql = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Wc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, Fh = class Fh {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    c(n, "splitSelector");
    function s(o, l, a, h) {
      let f = [], u = /^@(\w+)\b/.exec(o[0]), O = u && u[1] == "keyframes";
      if (u && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          s(
            d.split(/,\s*/).map((m) => o.map((Q) => m.replace(/&/, Q))).reduce((m, Q) => m.concat(Q)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!u) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          s(n(d), p, f, O);
        } else p != null && f.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (f.length || O) && a.push((i && !u && !h ? o.map(i) : o).join(", ") + " {" + f.join(" ") + "}");
    }
    c(s, "render");
    for (let o in e) s(n(o), e[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let e = Wc[Vc] || 1;
    return Wc[Vc] = e + 1, gl + e.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(e, t, i) {
    let n = e[Ql], s = i && i.nonce;
    n ? s && n.setNonce(s) : n = new yl(e, s), n.mount(Array.isArray(t) ? t : [t], e);
  }
};
c(Fh, "StyleModule");
let rt = Fh, Uc = /* @__PURE__ */ new Map();
const Hh = class Hh {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let s = Uc.get(i);
      if (s) return e[Ql] = s;
      this.sheet = new n.CSSStyleSheet(), Uc.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Ql] = this;
  }
  mount(e, t) {
    let i = this.sheet, n = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), i) for (let h = 0; h < l.rules.length; h++)
          i.insertRule(l.rules[h], n++);
      } else {
        for (; s < a; ) n += this.modules[s++].rules.length;
        n += l.rules.length, s++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
};
c(Hh, "StyleSet");
let yl = Hh;
var $t = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Gr = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, zg = typeof navigator < "u" && /Mac/.test(navigator.platform), jg = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var oe = 0; oe < 10; oe++) $t[48 + oe] = $t[96 + oe] = String(oe);
for (var oe = 1; oe <= 24; oe++) $t[oe + 111] = "F" + oe;
for (var oe = 65; oe <= 90; oe++)
  $t[oe] = String.fromCharCode(oe + 32), Gr[oe] = String.fromCharCode(oe);
for (var vo in $t) Gr.hasOwnProperty(vo) || (Gr[vo] = $t[vo]);
function qg(r) {
  var e = zg && r.metaKey && r.shiftKey && !r.ctrlKey && !r.altKey || jg && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", t = !e && r.key || (r.shiftKey ? Gr : $t)[r.keyCode] || r.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
c(qg, "keyName");
let ue = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Sl = typeof document < "u" ? document : { documentElement: { style: {} } };
const bl = /* @__PURE__ */ /Edge\/(\d+)/.exec(ue.userAgent), KO = /* @__PURE__ */ /MSIE \d/.test(ue.userAgent), wl = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ue.userAgent), yo = !!(KO || wl || bl), Ic = !yo && /* @__PURE__ */ /gecko\/(\d+)/i.test(ue.userAgent), To = !yo && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ue.userAgent), Dg = "webkitFontSmoothing" in Sl.documentElement.style, xl = !yo && /* @__PURE__ */ /Apple Computer/.test(ue.vendor), zc = xl && (/* @__PURE__ */ /Mobile\/\w+/.test(ue.userAgent) || ue.maxTouchPoints > 2);
var T = {
  mac: zc || /* @__PURE__ */ /Mac/.test(ue.platform),
  windows: /* @__PURE__ */ /Win/.test(ue.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ue.platform),
  ie: yo,
  ie_version: KO ? Sl.documentMode || 6 : wl ? +wl[1] : bl ? +bl[1] : 0,
  gecko: Ic,
  gecko_version: Ic ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ue.userAgent) || [0, 0])[1] : 0,
  chrome: !!To,
  chrome_version: To ? +To[1] : 0,
  ios: zc,
  android: /* @__PURE__ */ /Android\b/.test(ue.userAgent),
  webkit_version: Dg ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ue.userAgent) || [0, 0])[1] : 0,
  safari: xl,
  safari_version: xl ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(ue.userAgent) || [0, 0])[1] : 0,
  tabSize: Sl.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function Fr(r) {
  let e;
  return r.nodeType == 11 ? e = r.getSelection ? r : r.ownerDocument : e = r, e.getSelection();
}
c(Fr, "getSelection");
function Pl(r, e) {
  return e ? r == e || r.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
c(Pl, "contains");
function Fn(r, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return Pl(r, e.anchorNode);
  } catch {
    return !1;
  }
}
c(Fn, "hasSelection");
function Vi(r) {
  return r.nodeType == 3 ? si(r, 0, r.nodeValue.length).getClientRects() : r.nodeType == 1 ? r.getClientRects() : [];
}
c(Vi, "clientRectsFor");
function mr(r, e, t, i) {
  return t ? jc(r, e, t, i, -1) || jc(r, e, t, i, 1) : !1;
}
c(mr, "isEquivalentPosition");
function ni(r) {
  for (var e = 0; ; e++)
    if (r = r.previousSibling, !r)
      return e;
}
c(ni, "domIndex");
function as(r) {
  return r.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(r.nodeName);
}
c(as, "isBlockElement");
function jc(r, e, t, i, n) {
  for (; ; ) {
    if (r == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : nt(r))) {
      if (r.nodeName == "DIV")
        return !1;
      let s = r.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = ni(r) + (n < 0 ? 0 : 1), r = s;
    } else if (r.nodeType == 1) {
      if (r = r.childNodes[e + (n < 0 ? -1 : 0)], r.nodeType == 1 && r.contentEditable == "false")
        return !1;
      e = n < 0 ? nt(r) : 0;
    } else
      return !1;
  }
}
c(jc, "scanFor");
function nt(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
c(nt, "maxOffset");
function yn(r, e) {
  let t = e ? r.left : r.right;
  return { left: t, right: t, top: r.top, bottom: r.bottom };
}
c(yn, "flattenRect");
function Bg(r) {
  let e = r.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: r.innerWidth,
    top: 0,
    bottom: r.innerHeight
  };
}
c(Bg, "windowRect");
function JO(r, e) {
  let t = e.width / r.offsetWidth, i = e.height / r.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - r.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - r.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
c(JO, "getScale");
function Ng(r, e, t, i, n, s, o, l) {
  let a = r.ownerDocument, h = a.defaultView || window;
  for (let f = r, u = !1; f && !u; )
    if (f.nodeType == 1) {
      let O, d = f == a.body, p = 1, m = 1;
      if (d)
        O = Bg(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(f).position) && (u = !0), f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) {
          f = f.assignedSlot || f.parentNode;
          continue;
        }
        let b = f.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = JO(f, b)), O = {
          left: b.left,
          right: b.left + f.clientWidth * p,
          top: b.top,
          bottom: b.top + f.clientHeight * m
        };
      }
      let Q = 0, y = 0;
      if (n == "nearest")
        e.top < O.top ? (y = e.top - (O.top + o), t > 0 && e.bottom > O.bottom + y && (y = e.bottom - O.bottom + o)) : e.bottom > O.bottom && (y = e.bottom - O.bottom + o, t < 0 && e.top - y < O.top && (y = e.top - (O.top + o)));
      else {
        let b = e.bottom - e.top, x = O.bottom - O.top;
        y = (n == "center" && b <= x ? e.top + b / 2 - x / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - x + o) - O.top;
      }
      if (i == "nearest" ? e.left < O.left ? (Q = e.left - (O.left + s), t > 0 && e.right > O.right + Q && (Q = e.right - O.right + s)) : e.right > O.right && (Q = e.right - O.right + s, t < 0 && e.left < O.left + Q && (Q = e.left - (O.left + s))) : Q = (i == "center" ? e.left + (e.right - e.left) / 2 - (O.right - O.left) / 2 : i == "start" == l ? e.left - s : e.right - (O.right - O.left) + s) - O.left, Q || y)
        if (d)
          h.scrollBy(Q, y);
        else {
          let b = 0, x = 0;
          if (y) {
            let R = f.scrollTop;
            f.scrollTop += y / m, x = (f.scrollTop - R) * m;
          }
          if (Q) {
            let R = f.scrollLeft;
            f.scrollLeft += Q / p, b = (f.scrollLeft - R) * p;
          }
          e = {
            left: e.left - b,
            top: e.top - x,
            right: e.right - b,
            bottom: e.bottom - x
          }, b && Math.abs(b - Q) < 1 && (i = "nearest"), x && Math.abs(x - y) < 1 && (n = "nearest");
        }
      if (d)
        break;
      (e.top < O.top || e.bottom > O.bottom || e.left < O.left || e.right > O.right) && (e = {
        left: Math.max(e.left, O.left),
        right: Math.min(e.right, O.right),
        top: Math.max(e.top, O.top),
        bottom: Math.min(e.bottom, O.bottom)
      }), f = f.assignedSlot || f.parentNode;
    } else if (f.nodeType == 11)
      f = f.host;
    else
      break;
}
c(Ng, "scrollRectIntoView");
function Gg(r) {
  let e = r.ownerDocument, t, i;
  for (let n = r.parentNode; n && !(n == e.body || t && i); )
    if (n.nodeType == 1)
      !i && n.scrollHeight > n.clientHeight && (i = n), !t && n.scrollWidth > n.clientWidth && (t = n), n = n.assignedSlot || n.parentNode;
    else if (n.nodeType == 11)
      n = n.host;
    else
      break;
  return { x: t, y: i };
}
c(Gg, "scrollableParents");
const Kh = class Kh {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? nt(t) : 0), i, Math.min(e.focusOffset, i ? nt(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
};
c(Kh, "DOMSelectionState");
let kl = Kh, Wt = null;
T.safari && T.safari_version >= 26 && (Wt = !1);
function ed(r) {
  if (r.setActive)
    return r.setActive();
  if (Wt)
    return r.focus(Wt);
  let e = [];
  for (let t = r; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (r.focus(Wt == null ? {
    get preventScroll() {
      return Wt = { preventScroll: !0 }, !0;
    }
  } : void 0), !Wt) {
    Wt = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], s = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
c(ed, "focusPreventScroll");
let qc;
function si(r, e, t = e) {
  let i = qc || (qc = document.createRange());
  return i.setEnd(r, t), i.setStart(r, e), i;
}
c(si, "textRange");
function Ri(r, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let s = new KeyboardEvent("keydown", n);
  s.synthetic = !0, r.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, r.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
c(Ri, "dispatchKey");
function Fg(r) {
  for (; r; ) {
    if (r && (r.nodeType == 9 || r.nodeType == 11 && r.host))
      return r;
    r = r.assignedSlot || r.parentNode;
  }
  return null;
}
c(Fg, "getRoot");
function td(r) {
  for (; r.attributes.length; )
    r.removeAttributeNode(r.attributes[0]);
}
c(td, "clearAttributes");
function Hg(r, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, nt(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = nt(t));
    } else {
      if (t == r)
        return !0;
      i = ni(t), t = t.parentNode;
    }
}
c(Hg, "atElementStart");
function id(r) {
  return r.scrollTop > Math.max(1, r.scrollHeight - r.clientHeight - 4);
}
c(id, "isScrolledToBottom");
function rd(r, e) {
  for (let t = r, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = nt(t);
    } else if (t.parentNode && !as(t))
      i = ni(t), t = t.parentNode;
    else
      return null;
  }
}
c(rd, "textNodeBefore");
function nd(r, e) {
  for (let t = r, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !as(t))
      i = ni(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
c(nd, "textNodeAfter");
const Rr = class Rr {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new Rr(e.parentNode, ni(e), t);
  }
  static after(e, t) {
    return new Rr(e.parentNode, ni(e) + 1, t);
  }
};
c(Rr, "DOMPos");
let pe = Rr;
const rh = [], vr = class vr {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, n = null, s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = n ? n.nextSibling : i.firstChild)) {
            let l = vr.get(s);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (s = n ? n.nextSibling : i.firstChild, t && !t.written && t.node == i && s != o.dom && (t.written = !0), o.dom.parentNode == i)
          for (; s && s != o.dom; )
            s = Dc(s);
        else
          i.insertBefore(o.dom, s);
        n = o.dom;
      }
      for (s = n ? n.nextSibling : i.firstChild, s && t && t.node == i && (t.written = !0); s; )
        s = Dc(s);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let n = nt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        n == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? n = -1 : n = 1), e = s;
      }
      n < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !vr.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let n = 0, s = 0; ; n++) {
      let o = this.children[n];
      if (o.dom == i)
        return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let n = -1, s = -1, o = -1, l = -1;
    for (let a = 0, h = i, f = i; a < this.children.length; a++) {
      let u = this.children[a], O = h + u.length;
      if (h < e && O > t)
        return u.domBoundsAround(e, t, h);
      if (O >= e && n == -1 && (n = a, s = h), h > t && u.dom.parentNode == this.dom) {
        o = a, l = f;
        break;
      }
      f = O, h = O + u.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? i + this.length : l,
      startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
    };
  }
  markDirty(e = !1) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = !1;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = rh) {
    this.markDirty();
    for (let n = e; n < t; n++) {
      let s = this.children[n];
      s.parent == this && i.indexOf(s) < 0 && s.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let n = 0; n < i.length; n++)
      i[n].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new hs(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, n, s, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  // When this is a zero-length view with a side, this should return a
  // number <= 0 to indicate it is before its position, or a
  // number > 0 when after its position.
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
};
c(vr, "ContentView");
let q = vr;
q.prototype.breakAfter = 0;
function Dc(r) {
  let e = r.nextSibling;
  return r.parentNode.removeChild(r), e;
}
c(Dc, "rm$1");
const Jh = class Jh {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
};
c(Jh, "ChildCursor");
let hs = Jh;
function sd(r, e, t, i, n, s, o, l, a) {
  let { children: h } = r, f = h.length ? h[e] : null, u = s.length ? s[s.length - 1] : null, O = u ? u.breakAfter : o;
  if (!(e == i && f && !o && !O && s.length < 2 && f.merge(t, n, s.length ? u : null, t == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (n < d.length || d.breakAfter && u?.breakAfter) ? (e == i && (d = d.split(n), n = 0), !O && u && d.merge(0, n, u, !0, 0, a) ? s[s.length - 1] = d : ((n || d.children.length && !d.children[0].length) && d.merge(0, n, null, !1, 0, a), s.push(d))) : d?.breakAfter && (u ? u.breakAfter = 1 : o = 1), i++;
    }
    for (f && (f.breakAfter = o, t > 0 && (!o && s.length && f.merge(t, f.length, s[0], !1, l, 0) ? f.breakAfter = s.shift().breakAfter : (t < f.length || f.children.length && f.children[f.children.length - 1].length == 0) && f.merge(t, f.length, null, !1, l, 0), e++)); e < i && s.length; )
      if (h[i - 1].become(s[s.length - 1]))
        i--, s.pop(), a = s.length ? 0 : l;
      else if (h[e].become(s[0]))
        e++, s.shift(), l = s.length ? 0 : a;
      else
        break;
    !s.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], !1, l, a) && e--, (e < i || s.length) && r.replaceChildren(e, i, s);
  }
}
c(sd, "replaceRange");
function od(r, e, t, i, n, s) {
  let o = r.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: f } = o.findPos(e, -1), u = e - t;
  for (let O of i)
    u += O.length;
  r.length += u, sd(r, h, f, l, a, i, 0, n, s);
}
c(od, "mergeChildrenInto");
const Kg = 256, Tr = class Tr extends q {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Tr) || this.length - (t - e) + i.length > Kg || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new Tr(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new pe(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Jg(this.dom, e, t);
  }
};
c(Tr, "TextView");
let st = Tr;
const Ar = class Ar extends q {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let n of t)
      n.setParent(this);
  }
  setAttrs(e) {
    if (td(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, n, s, o) {
    return i && (!(i instanceof Ar && i.mark.eq(this.mark)) || e && s <= 0 || t < this.length && o <= 0) ? !1 : (od(this, e, t, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [], i = 0, n = -1, s = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), n < 0 && i >= e && (n = s), i = a, s++;
    }
    let o = this.length - e;
    return this.length = e, n > -1 && (this.children.length = n, this.markDirty()), new Ar(this.mark, t, o);
  }
  domAtPos(e) {
    return ld(this, e);
  }
  coordsAt(e, t) {
    return hd(this, e, t);
  }
};
c(Ar, "MarkView");
let Rt = Ar;
function Jg(r, e, t) {
  let i = r.nodeValue.length;
  e > i && (e = i);
  let n = e, s = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? T.chrome || T.gecko || (e ? (n--, o = 1) : s < i && (s++, o = -1)) : t < 0 ? n-- : s < i && s++;
  let l = si(r, n, s).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return T.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? yn(a, o < 0) : a || null;
}
c(Jg, "textCoords");
const qt = class qt extends q {
  static create(e, t, i) {
    return new qt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = qt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, n, s, o) {
    return i && (!(i instanceof qt) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof qt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return W.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : W.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? pe.before(this.dom) : pe.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let n = this.dom.getClientRects(), s = null;
    if (!n.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? n.length - 1 : 0; s = n[l], !(e > 0 ? l == 0 : l == n.length - 1 || s.top < s.bottom); l += o ? -1 : 1)
      ;
    return yn(s, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
};
c(qt, "WidgetView");
let Hr = qt;
const Lr = class Lr extends q {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Lr && e.side == this.side;
  }
  split() {
    return new Lr(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? pe.before(this.dom) : pe.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return W.empty;
  }
  get isHidden() {
    return !0;
  }
};
c(Lr, "WidgetBufferView");
let Kr = Lr;
st.prototype.children = Hr.prototype.children = Kr.prototype.children = rh;
function ld(r, e) {
  let t = r.dom, { children: i } = r, n = 0;
  for (let s = 0; n < i.length; n++) {
    let o = i[n], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == t)
        return o.domAtPos(e - s);
      if (e <= s)
        break;
      s = l;
    }
  }
  for (let s = n; s > 0; s--) {
    let o = i[s - 1];
    if (o.dom.parentNode == t)
      return o.domAtPos(o.length);
  }
  for (let s = n; s < i.length; s++) {
    let o = i[s];
    if (o.dom.parentNode == t)
      return o.domAtPos(0);
  }
  return new pe(t, 0);
}
c(ld, "inlineDOMAtPos");
function ad(r, e, t) {
  let i, { children: n } = r;
  t > 0 && e instanceof Rt && n.length && (i = n[n.length - 1]) instanceof Rt && i.mark.eq(e.mark) ? ad(i, e.children[0], t - 1) : (n.push(e), e.setParent(r)), r.length += e.length;
}
c(ad, "joinInlineInto");
function hd(r, e, t) {
  let i = null, n = -1, s = null, o = -1;
  function l(h, f) {
    for (let u = 0, O = 0; u < h.children.length && O <= f; u++) {
      let d = h.children[u], p = O + d.length;
      p >= f && (d.children.length ? l(d, f - O) : (!s || s.isHidden && (t > 0 || t0(s, d))) && (p > f || O == p && d.getSide() > 0) ? (s = d, o = f - O) : (O < f || O == p && d.getSide() < 0 && !d.isHidden) && (i = d, n = f - O)), O = p;
    }
  }
  c(l, "scan"), l(r, e);
  let a = (t < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? n : o), t) : e0(r);
}
c(hd, "coordsInChildren");
function e0(r) {
  let e = r.dom.lastChild;
  if (!e)
    return r.dom.getBoundingClientRect();
  let t = Vi(e);
  return t[t.length - 1] || null;
}
c(e0, "fallbackRect");
function t0(r, e) {
  let t = r.coordsAt(0, 1), i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
c(t0, "onSameLine");
function $l(r, e) {
  for (let t in r)
    t == "class" && e.class ? e.class += " " + r.class : t == "style" && e.style ? e.style += ";" + r.style : e[t] = r[t];
  return e;
}
c($l, "combineAttrs");
const Bc = /* @__PURE__ */ Object.create(null);
function fs(r, e, t) {
  if (r == e)
    return !0;
  r || (r = Bc), e || (e = Bc);
  let i = Object.keys(r), n = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != n.length - (t && n.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let s of i)
    if (s != t && (n.indexOf(s) == -1 || r[s] !== e[s]))
      return !1;
  return !0;
}
c(fs, "attrsEq");
function Rl(r, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? r.style.cssText = "" : r.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? r.style.cssText = t[n] : r.setAttribute(n, t[n]));
  return i;
}
c(Rl, "updateAttrs");
function i0(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < r.attributes.length; t++) {
    let i = r.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
c(i0, "getAttrs$1");
const ef = class ef {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(e) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(e, t) {
    return !1;
  }
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(e) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(e, t, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(e) {
  }
};
c(ef, "WidgetType");
let vt = ef;
var tt = /* @__PURE__ */ (function(r) {
  return r[r.Text = 0] = "Text", r[r.WidgetBefore = 1] = "WidgetBefore", r[r.WidgetAfter = 2] = "WidgetAfter", r[r.WidgetRange = 3] = "WidgetRange", r;
})(tt || (tt = {}));
const tf = class tf extends ut {
  constructor(e, t, i, n) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = n;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(e) {
    return new Jr(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Tt(e, t, t, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let t = !!e.block, i, n;
    if (e.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: s, end: o } = fd(e, t);
      i = (s ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Tt(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new en(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, t = !1) {
    return re.of(e, t);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
};
c(tf, "Decoration");
let z = tf;
z.none = re.empty;
const Gs = class Gs extends z {
  constructor(e) {
    let { start: t, end: i } = fd(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof Gs && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && fs(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
};
c(Gs, "MarkDecoration");
let Jr = Gs;
Jr.prototype.point = !1;
const Fs = class Fs extends z {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Fs && this.spec.class == e.spec.class && fs(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
};
c(Fs, "LineDecoration");
let en = Fs;
en.prototype.mapMode = de.TrackBefore;
en.prototype.point = !0;
const Hs = class Hs extends z {
  constructor(e, t, i, n, s, o) {
    super(t, i, s, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? de.TrackBefore : de.TrackAfter : de.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? tt.WidgetRange : this.startSide <= 0 ? tt.WidgetBefore : tt.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Hs && r0(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
};
c(Hs, "PointDecoration");
let Tt = Hs;
Tt.prototype.point = !0;
function fd(r, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = r;
  return t == null && (t = r.inclusive), i == null && (i = r.inclusive), { start: t ?? e, end: i ?? e };
}
c(fd, "getInclusive");
function r0(r, e) {
  return r == e || !!(r && e && r.compare(e));
}
c(r0, "widgetsEq");
function Hn(r, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= r ? t[n] = Math.max(t[n], e) : t.push(r, e);
}
c(Hn, "addRange");
const Dt = class Dt extends q {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, n, s, o) {
    if (i) {
      if (!(i instanceof Dt))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), od(this, e, t, i ? i.children.slice() : [], s, o), !0;
  }
  split(e) {
    let t = new Dt();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: n } = this.childPos(e);
    n && (t.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
    for (let s = i; s < this.children.length; s++)
      t.append(this.children[s], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    fs(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    ad(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = $l(t, this.attrs || {})), i && (this.attrs = $l({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return ld(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (td(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Rl(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let n = this.dom.lastChild;
    for (; n && q.get(n) instanceof Rt; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((i = q.get(n)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!T.ios || !this.children.some((s) => s instanceof st))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof st) || /[^ -~]/.test(i.text))
        return null;
      let n = Vi(i.dom);
      if (n.length != 1)
        return null;
      e += n[0].width, t = n[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: t
    } : null;
  }
  coordsAt(e, t) {
    let i = hd(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: n } = this.parent.view.viewState, s = i.bottom - i.top;
      if (Math.abs(s - n.lineHeight) < 2 && n.textHeight < s) {
        let o = (s - n.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof Dt && this.children.length == 0 && e.children.length == 0 && fs(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, n = 0; i < e.children.length; i++) {
      let s = e.children[i], o = n + s.length;
      if (o >= t) {
        if (s instanceof Dt)
          return s;
        if (o > t)
          break;
      }
      n = o + s.breakAfter;
    }
    return null;
  }
};
c(Dt, "LineView");
let se = Dt;
const yi = class yi extends q {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, n, s, o) {
    return i && (!(i instanceof yi) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? pe.before(this.dom) : pe.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new yi(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return rh;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : W.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof yi && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof tn ? null : yn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
};
c(yi, "BlockWidgetView");
let Jt = yi;
const rf = class rf extends vt {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
};
c(rf, "BlockGapWidget");
let tn = rf;
const Ks = class Ks {
  constructor(e, t, i, n) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Jt && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new se()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Ln(new Kr(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Jt) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: l, done: a } = this.cursor.next(this.skip);
        if (this.skip = 0, a)
          throw new Error("Ran out of text content when drawing inline views");
        if (l) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = o, this.textOff = 0;
      }
      let n = Math.min(this.text.length - this.textOff, e), s = Math.min(
        n,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Ln(new st(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = !0, this.textOff += s, e -= s, i = n <= s ? 0 : t.length;
    }
  }
  span(e, t, i, n) {
    this.buildText(t - e, i, n), this.pos = t, this.openStart < 0 && (this.openStart = n);
  }
  point(e, t, i, n, s, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Tt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof Tt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Jt(i.widget || At.block, l, i));
      else {
        let a = Hr.create(i.widget || At.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && s <= n.length && (e < t || i.startSide > 0), f = !a.isEditable && (e < t || s > n.length || i.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n), h && (u.append(Ln(new Kr(1), n), s), s = n.length + Math.max(0, s - n.length)), u.append(Ln(a, n), s), this.atCursorPos = f, this.pendingBuffer = f ? e < t || s > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, i, n, s) {
    let o = new Ks(e, t, i, s);
    return o.openEnd = re.spans(n, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
};
c(Ks, "ContentBuilder");
let gr = Ks;
function Ln(r, e) {
  for (let t of e)
    r = new Rt(t, [r], r.length);
  return r;
}
c(Ln, "wrapMarks");
const nf = class nf extends vt {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
};
c(nf, "NullWidget");
let At = nf;
At.inline = /* @__PURE__ */ new At("span");
At.block = /* @__PURE__ */ new At("div");
var ee = /* @__PURE__ */ (function(r) {
  return r[r.LTR = 0] = "LTR", r[r.RTL = 1] = "RTL", r;
})(ee || (ee = {}));
const oi = ee.LTR, nh = ee.RTL;
function cd(r) {
  let e = [];
  for (let t = 0; t < r.length; t++)
    e.push(1 << +r[t]);
  return e;
}
c(cd, "dec");
const n0 = /* @__PURE__ */ cd("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), s0 = /* @__PURE__ */ cd("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), vl = /* @__PURE__ */ Object.create(null), Ne = [];
for (let r of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ r.charCodeAt(0), t = /* @__PURE__ */ r.charCodeAt(1);
  vl[e] = t, vl[t] = -e;
}
function ud(r) {
  return r <= 247 ? n0[r] : 1424 <= r && r <= 1524 ? 2 : 1536 <= r && r <= 1785 ? s0[r - 1536] : 1774 <= r && r <= 2220 ? 4 : 8192 <= r && r <= 8204 ? 256 : 64336 <= r && r <= 65023 ? 4 : 1;
}
c(ud, "charType");
const o0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, sf = class sf {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? nh : oi;
  }
  /**
  @internal
  */
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  /**
  @internal
  */
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(e, t) {
    return e == (this.dir == t);
  }
  /**
  @internal
  */
  static find(e, t, i, n) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return o;
        (s < 0 || (n != 0 ? n < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
};
c(sf, "BidiSpan");
let et = sf;
function Od(r, e) {
  if (r.length != e.length)
    return !1;
  for (let t = 0; t < r.length; t++) {
    let i = r[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !Od(i.inner, n.inner))
      return !1;
  }
  return !0;
}
c(Od, "isolatesEq");
const j = [];
function l0(r, e, t, i, n) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e, l = s < i.length ? i[s].from : t, a = s ? 256 : n;
    for (let h = o, f = a, u = a; h < l; h++) {
      let O = ud(r.charCodeAt(h));
      O == 512 ? O = f : O == 8 && u == 4 && (O = 16), j[h] = O == 4 ? 2 : O, O & 7 && (u = O), f = O;
    }
    for (let h = o, f = a, u = a; h < l; h++) {
      let O = j[h];
      if (O == 128)
        h < l - 1 && f == j[h + 1] && f & 24 ? O = j[h] = f : j[h] = 256;
      else if (O == 64) {
        let d = h + 1;
        for (; d < l && j[d] == 64; )
          d++;
        let p = h && f == 8 || d < t && j[d] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          j[m] = p;
        h = d - 1;
      } else O == 8 && u == 1 && (j[h] = 1);
      f = O, O & 7 && (u = O);
    }
  }
}
c(l0, "computeCharTypes");
function a0(r, e, t, i, n) {
  let s = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, f = o < i.length ? i[o].from : t;
    for (let u = h, O, d, p; u < f; u++)
      if (d = vl[O = r.charCodeAt(u)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (Ne[m + 1] == -d) {
              let Q = Ne[m + 2], y = Q & 2 ? n : Q & 4 ? Q & 1 ? s : n : 0;
              y && (j[u] = j[Ne[m]] = y), l = m;
              break;
            }
        } else {
          if (Ne.length == 189)
            break;
          Ne[l++] = u, Ne[l++] = O, Ne[l++] = a;
        }
      else if ((p = j[u]) == 2 || p == 1) {
        let m = p == n;
        a = m ? 0 : 1;
        for (let Q = l - 3; Q >= 0; Q -= 3) {
          let y = Ne[Q + 2];
          if (y & 2)
            break;
          if (m)
            Ne[Q + 2] |= 2;
          else {
            if (y & 4)
              break;
            Ne[Q + 2] |= 4;
          }
        }
      }
  }
}
c(a0, "processBracketPairs");
function h0(r, e, t, i) {
  for (let n = 0, s = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : r, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let h = j[a];
      if (h == 256) {
        let f = a + 1;
        for (; ; )
          if (f == l) {
            if (n == t.length)
              break;
            f = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (j[f] == 256)
            f++;
          else
            break;
        let u = s == 1, O = (f < e ? j[f] : i) == 1, d = u == O ? u ? 1 : 2 : i;
        for (let p = f, m = n, Q = m ? t[m - 1].to : r; p > a; )
          p == Q && (p = t[--m].from, Q = m ? t[m - 1].to : r), j[--p] = d;
        a = f;
      } else
        s = h, a++;
    }
  }
}
c(h0, "processNeutrals");
function Tl(r, e, t, i, n, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let f = !0, u = !1;
      if (h == s.length || a < s[h].from) {
        let m = j[a];
        m != l && (f = !1, u = m == 16);
      }
      let O = !f && l == 1 ? [] : null, d = f ? i : i + 1, p = a;
      e: for (; ; )
        if (h < s.length && p == s[h].from) {
          if (u)
            break e;
          let m = s[h];
          if (!f)
            for (let Q = m.to, y = h + 1; ; ) {
              if (Q == t)
                break e;
              if (y < s.length && s[y].from == Q)
                Q = s[y++].to;
              else {
                if (j[Q] == l)
                  break e;
                break;
              }
            }
          if (h++, O)
            O.push(m);
          else {
            m.from > a && o.push(new et(a, m.from, d));
            let Q = m.direction == oi != !(d % 2);
            Al(r, Q ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == t || (f ? j[p] != l : j[p] == l))
            break;
          p++;
        }
      O ? Tl(r, a, p, i + 1, n, O, o) : a < p && o.push(new et(a, p, d)), a = p;
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let f = !0, u = !1;
      if (!h || a > s[h - 1].to) {
        let m = j[a - 1];
        m != l && (f = !1, u = m == 16);
      }
      let O = !f && l == 1 ? [] : null, d = f ? i : i + 1, p = a;
      e: for (; ; )
        if (h && p == s[h - 1].to) {
          if (u)
            break e;
          let m = s[--h];
          if (!f)
            for (let Q = m.from, y = h; ; ) {
              if (Q == e)
                break e;
              if (y && s[y - 1].to == Q)
                Q = s[--y].from;
              else {
                if (j[Q - 1] == l)
                  break e;
                break;
              }
            }
          if (O)
            O.push(m);
          else {
            m.to < a && o.push(new et(m.to, a, d));
            let Q = m.direction == oi != !(d % 2);
            Al(r, Q ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == e || (f ? j[p - 1] != l : j[p - 1] == l))
            break;
          p--;
        }
      O ? Tl(r, p, a, i + 1, n, O, o) : p < a && o.push(new et(p, a, d)), a = p;
    }
}
c(Tl, "emitSpans");
function Al(r, e, t, i, n, s, o) {
  let l = e % 2 ? 2 : 1;
  l0(r, n, s, i, l), a0(r, n, s, i, l), h0(n, s, i, l), Tl(r, n, s, e, t, i, o);
}
c(Al, "computeSectionOrder");
function f0(r, e, t) {
  if (!r)
    return [new et(0, 0, e == nh ? 1 : 0)];
  if (e == oi && !t.length && !o0.test(r))
    return dd(r.length);
  if (t.length)
    for (; r.length > j.length; )
      j[j.length] = 256;
  let i = [], n = e == oi ? 0 : 1;
  return Al(r, n, n, t, 0, r.length, i), i;
}
c(f0, "computeOrder");
function dd(r) {
  return [new et(0, r, 0)];
}
c(dd, "trivialOrder");
let pd = "";
function c0(r, e, t, i, n) {
  var s;
  let o = i.head - r.from, l = et.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let O = l += n ? 1 : -1;
    if (O < 0 || O >= e.length)
      return null;
    a = e[l = O], o = a.side(!n, t), h = a.side(n, t);
  }
  let f = me(r.text, o, a.forward(n, t));
  (f < a.from || f > a.to) && (f = h), pd = r.text.slice(Math.min(o, f), Math.max(o, f));
  let u = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return u && f == h && u.level + (n ? 0 : 1) < a.level ? k.cursor(u.side(!n, t) + r.from, u.forward(n, t) ? 1 : -1, u.level) : k.cursor(f + r.from, a.forward(n, t) ? -1 : 1, a.level);
}
c(c0, "moveVisually");
function u0(r, e, t) {
  for (let i = e; i < t; i++) {
    let n = ud(r.charCodeAt(i));
    if (n == 1)
      return oi;
    if (n == 2 || n == 4)
      return nh;
  }
  return oi;
}
c(u0, "autoDirection");
const md = /* @__PURE__ */ M.define(), gd = /* @__PURE__ */ M.define(), Qd = /* @__PURE__ */ M.define(), yd = /* @__PURE__ */ M.define(), Ll = /* @__PURE__ */ M.define(), Sd = /* @__PURE__ */ M.define(), bd = /* @__PURE__ */ M.define(), sh = /* @__PURE__ */ M.define(), oh = /* @__PURE__ */ M.define(), wd = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine")
}), O0 = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine")
}), xd = /* @__PURE__ */ M.define(), _r = class _r {
  constructor(e, t = "nearest", i = "nearest", n = 5, s = 5, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new _r(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new _r(k.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
};
c(_r, "ScrollTarget");
let Qr = _r;
const _n = /* @__PURE__ */ I.define({ map: /* @__PURE__ */ c((r, e) => r.map(e), "map") }), Pd = /* @__PURE__ */ I.define();
function Re(r, e, t) {
  let i = r.facet(yd);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
c(Re, "logException");
const ht = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.length ? r[0] : !0, "combine") });
let d0 = 0;
const pi = /* @__PURE__ */ M.define({
  combine(r) {
    return r.filter((e, t) => {
      for (let i = 0; i < t; i++)
        if (r[i].plugin == e.plugin)
          return !1;
      return !0;
    });
  }
}), Mr = class Mr {
  constructor(e, t, i, n, s) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = n, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(pi.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(e) {
    return this.baseExtensions.concat(pi.of({ plugin: this, arg: e }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, t) {
    const { eventHandlers: i, eventObservers: n, provide: s, decorations: o } = t || {};
    return new Mr(d0++, e, i, n, (l) => {
      let a = [];
      return o && a.push(rn.of((h) => {
        let f = h.plugin(l);
        return f ? o(f) : z.none;
      })), s && a.push(s(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, t) {
    return Mr.define((i, n) => new e(i, n), t);
  }
};
c(Mr, "ViewPlugin");
let ze = Mr;
const of = class of {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (Re(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(e, this.spec.arg);
      } catch (t) {
        Re(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Re(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
};
c(of, "PluginInstance");
let yr = of;
const kd = /* @__PURE__ */ M.define(), lh = /* @__PURE__ */ M.define(), rn = /* @__PURE__ */ M.define(), $d = /* @__PURE__ */ M.define(), Sn = /* @__PURE__ */ M.define(), Rd = /* @__PURE__ */ M.define();
function Nc(r, e) {
  let t = r.state.facet(Rd);
  if (!t.length)
    return t;
  let i = t.map((s) => s instanceof Function ? s(r) : s), n = [];
  return re.spans(i, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let h = s - e.from, f = o - e.from, u = n;
      for (let O = l.length - 1; O >= 0; O--, a--) {
        let d = l[O].spec.bidiIsolate, p;
        if (d == null && (d = u0(e.text, h, f)), a > 0 && u.length && (p = u[u.length - 1]).to == h && p.direction == d)
          p.to = f, u = p.inner;
        else {
          let m = { from: h, to: f, direction: d, inner: [] };
          u.push(m), u = m.inner;
        }
      }
    }
  }), n;
}
c(Nc, "getIsolatedRanges");
const vd = /* @__PURE__ */ M.define();
function ah(r) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let s of r.state.facet(vd)) {
    let o = s(r);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
c(ah, "getScrollMargins");
const fr = /* @__PURE__ */ M.define(), Si = class Si {
  constructor(e, t, i, n) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = n;
  }
  join(e) {
    return new Si(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let n = e[t - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let n = 0, s = 0, o = 0, l = 0; ; n++) {
      let a = n == e.length ? null : e[n], h = o - l, f = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < f; ) {
        let u = t[s], O = t[s + 1], d = Math.max(l, u), p = Math.min(f, O);
        if (d <= p && new Si(d + h, p + h, d, p).addToSet(i), O > f)
          break;
        s += 2;
      }
      if (!a)
        return i;
      new Si(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
};
c(Si, "ChangedRange");
let it = Si;
const Js = class Js {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = Te.empty(this.startState.doc.length);
    for (let s of i)
      this.changes = this.changes.compose(s.changes);
    let n = [];
    this.changes.iterChangedRanges((s, o, l, a) => n.push(new it(s, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Js(e, t, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
};
c(Js, "ViewUpdate");
let nn = Js;
const lf = class lf extends q {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = z.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new se()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new it(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: f }) => f < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !b0(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let s = n > -1 ? m0(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: f } = this.hasComposition;
      i = new it(h, f, e.changes.mapPos(h, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (T.ie || T.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = y0(o, l, e.changes);
    return i = it.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, t, i);
    let { observer: n } = this.view;
    n.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = T.chrome || T.ios ? { node: n.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || n.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Jt && o.widget instanceof tn && s.push(o.dom);
    n.updateGaps(s);
  }
  updateChildren(e, t, i) {
    let n = i ? i.range.addToSet(e.slice()) : e, s = this.childCursor(t);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: f, toB: u } = l, O, d, p, m;
      if (i && i.range.fromB < u && i.range.toB > f) {
        let R = gr.build(this.view.state.doc, f, i.range.fromB, this.decorations, this.dynamicDecorationMap), $ = gr.build(this.view.state.doc, i.range.toB, u, this.decorations, this.dynamicDecorationMap);
        d = R.breakAtStart, p = R.openStart, m = $.openEnd;
        let A = this.compositionView(i);
        $.breakAtStart ? A.breakAfter = 1 : $.content.length && A.merge(A.length, A.length, $.content[0], !1, $.openStart, 0) && (A.breakAfter = $.content[0].breakAfter, $.content.shift()), R.content.length && A.merge(0, 0, R.content[R.content.length - 1], !0, 0, R.openEnd) && R.content.pop(), O = R.content.concat(A).concat($.content);
      } else
        ({ content: O, breakAtStart: d, openStart: p, openEnd: m } = gr.build(this.view.state.doc, f, u, this.decorations, this.dynamicDecorationMap));
      let { i: Q, off: y } = s.findPos(h, 1), { i: b, off: x } = s.findPos(a, -1);
      sd(this, b, x, Q, y, O, d, p, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(Pd) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new st(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: n } of e.marks)
      t = new Rt(n, [t], t.length);
    let i = new se();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = /* @__PURE__ */ c((s, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = q.get(s);
      l && l != o && (l.dom = null), o.setDOM(s);
    }, "fix"), i = this.childPos(e.range.fromB, 1), n = this.children[i.i];
    t(e.line, n);
    for (let s = e.marks.length - 1; s >= -1; s--)
      i = n.childPos(i.off, 1), n = n.children[i.i], t(s >= 0 ? e.marks[s].node : e.text, n);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, s = !n && !(this.view.state.facet(ht) || this.dom.tabIndex > -1) && Fn(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || t || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (T.gecko && l.empty && !this.hasComposition && p0(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = h = new pe(u, 0), o = !0;
    }
    let f = this.view.observer.selectionRange;
    (o || !f.focusNode || (!mr(a.node, a.offset, f.anchorNode, f.anchorOffset) || !mr(h.node, h.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, l)) && (this.view.observer.ignore(() => {
      T.android && T.chrome && this.dom.contains(f.focusNode) && S0(f.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = Fr(this.view.root);
      if (u) if (l.empty) {
        if (T.gecko) {
          let O = g0(a.node, a.offset);
          if (O && O != 3) {
            let d = (O == 1 ? rd : nd)(a.node, a.offset);
            d && (a = new pe(d.node, d.offset));
          }
        }
        u.collapse(a.node, a.offset), l.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = l.bidiLevel);
      } else if (u.extend) {
        u.collapse(a.node, a.offset);
        try {
          u.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let O = document.createRange();
        l.anchor > l.head && ([a, h] = [h, a]), O.setEnd(h.node, h.offset), O.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(O);
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new pe(f.anchorNode, f.anchorOffset), this.impreciseHead = h.precise ? null : new pe(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && mr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = Fr(e.root), { anchorNode: n, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let o = se.find(this, t.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let f = this.domAtPos(t.head + t.assoc);
    i.collapse(f.node, f.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let u = e.observer.selectionRange;
    e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && i.collapse(n, s);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let n = e.offset; !i && n < t.childNodes.length; n++) {
      let s = q.get(t.childNodes[n]);
      s instanceof se && (i = s.domAtPos(0));
    }
    for (let n = e.offset - 1; !i && n >= 0; n--) {
      let s = q.get(t.childNodes[n]);
      s instanceof se && (i = s.domAtPos(s.length));
    }
    return i ? new pe(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = q.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let n = this.children[t];
      if (i < n.length || n instanceof se)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, n = 0;
    for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = s - l.breakAfter, h = a - l.length;
      if (a < e)
        break;
      if (h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof se && !(i instanceof se && t >= 0)))
        i = l, n = h;
      else if (i && h == e && a == e && l instanceof Jt && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      s = h;
    }
    return i ? i.coordsAt(e - n, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), n = this.children[t];
    if (!(n instanceof se))
      return null;
    for (; n.children.length; ) {
      let { i: l, off: a } = n.childPos(i, 1);
      for (; ; l++) {
        if (l == n.children.length)
          return null;
        if ((n = n.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(n instanceof st))
      return null;
    let s = me(n.text, i);
    if (s == i)
      return null;
    let o = si(n.dom, i, s).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: n } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == ee.LTR;
    for (let h = 0, f = 0; f < this.children.length; f++) {
      let u = this.children[f], O = h + u.length;
      if (O > n)
        break;
      if (h >= i) {
        let d = u.dom.getBoundingClientRect();
        if (t.push(d.height), o) {
          let p = u.dom.lastChild, m = p ? Vi(p) : [];
          if (m.length) {
            let Q = m[m.length - 1], y = a ? Q.right - d.left : d.right - Q.left;
            y > l && (l = y, this.minWidth = s, this.minWidthFrom = h, this.minWidthTo = O);
          }
        }
      }
      h = O + u.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? ee.RTL : ee.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof se) {
        let o = s.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), t, i, n;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = Vi(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = s ? s.width / 27 : 7, n = s ? s.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: n };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new hs(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let s = n == t.viewports.length ? null : t.viewports[n], o = s ? s.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(z.replace({
          widget: new tn(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!s)
        break;
      i = s.to + 1;
    }
    return z.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(rn).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = !1, n = this.view.state.facet($d).map((s, o) => {
      let l = typeof s == "function";
      return l && (i = !0), l ? s(this.view) : s;
    });
    for (n.length && (this.dynamicDecorationMap[e++] = i, t.push(re.join(n))), this.decorations = [
      this.editContextFormatting,
      ...t,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(xd))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (f) {
        Re(this.view.state, f, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), n;
    if (!i)
      return;
    !t.empty && (n = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, n.left),
      top: Math.min(i.top, n.top),
      right: Math.max(i.right, n.right),
      bottom: Math.max(i.bottom, n.bottom)
    });
    let s = ah(this.view), o = {
      left: i.left - s.left,
      top: i.top - s.top,
      right: i.right + s.right,
      bottom: i.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Ng(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == ee.LTR);
  }
  lineHasWidget(e) {
    let { i: t } = this.childCursor().findPos(e);
    if (t == this.children.length)
      return !1;
    let i = /* @__PURE__ */ c((n) => n instanceof Hr || n.children.some(i), "scan");
    return i(this.children[t]);
  }
};
c(lf, "DocView");
let cs = lf;
function p0(r) {
  return r.node.nodeType == 1 && r.node.firstChild && (r.offset == 0 || r.node.childNodes[r.offset - 1].contentEditable == "false") && (r.offset == r.node.childNodes.length || r.node.childNodes[r.offset].contentEditable == "false");
}
c(p0, "betweenUneditable");
function Td(r, e) {
  let t = r.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = rd(t.focusNode, t.focusOffset), n = nd(t.focusNode, t.focusOffset), s = i || n;
  if (n && i && n.node != i.node) {
    let l = q.get(n.node);
    if (!l || l instanceof st && l.text != n.node.nodeValue)
      s = n;
    else if (r.docView.lastCompositionAfterCursor) {
      let a = q.get(i.node);
      !a || a instanceof st && a.text != i.node.nodeValue || (s = n);
    }
  }
  if (r.docView.lastCompositionAfterCursor = s != i, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
c(Td, "findCompositionNode");
function m0(r, e, t) {
  let i = Td(r, t);
  if (!i)
    return null;
  let { node: n, from: s, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || r.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new it(a.mapPos(s), a.mapPos(o), s, o), f = [];
  for (let u = n.parentNode; ; u = u.parentNode) {
    let O = q.get(u);
    if (O instanceof Rt)
      f.push({ node: u, deco: O.mark });
    else {
      if (O instanceof se || u.nodeName == "DIV" && u.parentNode == r.contentDOM)
        return { range: h, text: n, marks: f, line: u };
      if (u != r.contentDOM)
        f.push({ node: u, deco: new Jr({
          inclusive: !0,
          attributes: i0(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
c(m0, "findCompositionRange");
function g0(r, e) {
  return r.nodeType != 1 ? 0 : (e && r.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < r.childNodes.length && r.childNodes[e].contentEditable == "false" ? 2 : 0);
}
c(g0, "nextToUneditable");
var Ai;
let Q0 = (Ai = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Hn(e, t, this.changes);
  }
  comparePoint(e, t) {
    Hn(e, t, this.changes);
  }
  boundChange(e) {
    Hn(e, e, this.changes);
  }
}, c(Ai, "DecorationComparator"), Ai);
function y0(r, e, t) {
  let i = new Q0();
  return re.compare(r, e, t, i), i.changes;
}
c(y0, "findChangedDeco");
function S0(r, e) {
  for (let t = r; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
c(S0, "inUneditable");
function b0(r, e) {
  let t = !1;
  return e && r.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
c(b0, "touchesComposition");
function w0(r, e, t = 1) {
  let i = r.charCategorizer(e), n = r.doc.lineAt(e), s = e - n.from;
  if (n.length == 0)
    return k.cursor(e);
  s == 0 ? t = 1 : s == n.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = me(n.text, s, !1) : l = me(n.text, s);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = me(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = me(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return k.range(o + n.from, l + n.from);
}
c(w0, "groupAt");
function x0(r, e) {
  return e.left > r ? e.left - r : Math.max(0, r - e.right);
}
c(x0, "getdx");
function P0(r, e) {
  return e.top > r ? e.top - r : Math.max(0, r - e.bottom);
}
c(P0, "getdy");
function Ao(r, e) {
  return r.top < e.bottom - 1 && r.bottom > e.top + 1;
}
c(Ao, "yOverlap");
function Gc(r, e) {
  return e < r.top ? { top: e, left: r.left, right: r.right, bottom: r.bottom } : r;
}
c(Gc, "upTop");
function Fc(r, e) {
  return e > r.bottom ? { top: r.top, left: r.left, right: r.right, bottom: e } : r;
}
c(Fc, "upBot");
function _l(r, e, t) {
  let i, n, s, o, l = !1, a, h, f, u;
  for (let p = r.firstChild; p; p = p.nextSibling) {
    let m = Vi(p);
    for (let Q = 0; Q < m.length; Q++) {
      let y = m[Q];
      n && Ao(n, y) && (y = Gc(Fc(y, n.bottom), n.top));
      let b = x0(e, y), x = P0(t, y);
      if (b == 0 && x == 0)
        return p.nodeType == 3 ? Hc(p, e, t) : _l(p, e, t);
      (!i || o > x || o == x && s > b) && (i = p, n = y, s = b, o = x, l = b ? e < y.left ? Q > 0 : Q < m.length - 1 : !0), b == 0 ? t > y.bottom && (!f || f.bottom < y.bottom) ? (a = p, f = y) : t < y.top && (!u || u.top > y.top) && (h = p, u = y) : f && Ao(f, y) ? f = Fc(f, y.bottom) : u && Ao(u, y) && (u = Gc(u, y.top));
    }
  }
  if (f && f.bottom >= t ? (i = a, n = f) : u && u.top <= t && (i = h, n = u), !i)
    return { node: r, offset: 0 };
  let O = Math.max(n.left, Math.min(n.right, e));
  if (i.nodeType == 3)
    return Hc(i, O, t);
  if (l && i.contentEditable != "false")
    return _l(i, O, t);
  let d = Array.prototype.indexOf.call(r.childNodes, i) + (e >= (n.left + n.right) / 2 ? 1 : 0);
  return { node: r, offset: d };
}
c(_l, "domPosAtCoords");
function Hc(r, e, t) {
  let i = r.nodeValue.length, n = -1, s = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = si(r, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let f = a[h];
      if (f.top == f.bottom)
        continue;
      o || (o = e - f.left);
      let u = (f.top > t ? f.top - t : t - f.bottom) - 1;
      if (f.left - 1 <= e && f.right + 1 >= e && u < s) {
        let O = e >= (f.left + f.right) / 2, d = O;
        if (T.chrome || T.gecko) {
          let p = si(r, l).getBoundingClientRect();
          Math.abs(p.left - f.right) < 0.1 && (d = !O);
        }
        if (u <= 0)
          return { node: r, offset: l + (d ? 1 : 0) };
        n = l + (d ? 1 : 0), s = u;
      }
    }
  }
  return { node: r, offset: n > -1 ? n : o > 0 ? r.nodeValue.length : 0 };
}
c(Hc, "domPosInText");
function Ad(r, e, t, i = -1) {
  var n, s;
  let o = r.contentDOM.getBoundingClientRect(), l = o.top + r.viewState.paddingTop, a, { docHeight: h } = r.viewState, { x: f, y: u } = e, O = u - l;
  if (O < 0)
    return 0;
  if (O > h)
    return r.state.doc.length;
  for (let R = r.viewState.heightOracle.textHeight / 2, $ = !1; a = r.elementAtHeight(O), a.type != tt.Text; )
    for (; O = i > 0 ? a.bottom + R : a.top - R, !(O >= 0 && O <= h); ) {
      if ($)
        return t ? null : 0;
      $ = !0, i = -i;
    }
  u = l + O;
  let d = a.from;
  if (d < r.viewport.from)
    return r.viewport.from == 0 ? 0 : t ? null : Kc(r, o, a, f, u);
  if (d > r.viewport.to)
    return r.viewport.to == r.state.doc.length ? r.state.doc.length : t ? null : Kc(r, o, a, f, u);
  let p = r.dom.ownerDocument, m = r.root.elementFromPoint ? r.root : p, Q = m.elementFromPoint(f, u);
  Q && !r.contentDOM.contains(Q) && (Q = null), Q || (f = Math.max(o.left + 1, Math.min(o.right - 1, f)), Q = m.elementFromPoint(f, u), Q && !r.contentDOM.contains(Q) && (Q = null));
  let y, b = -1;
  if (Q && ((n = r.docView.nearest(Q)) === null || n === void 0 ? void 0 : n.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let R = p.caretPositionFromPoint(f, u);
      R && ({ offsetNode: y, offset: b } = R);
    } else if (p.caretRangeFromPoint) {
      let R = p.caretRangeFromPoint(f, u);
      R && ({ startContainer: y, startOffset: b } = R);
    }
    y && (!r.contentDOM.contains(y) || T.safari && k0(y, b, f) || T.chrome && $0(y, b, f)) && (y = void 0), y && (b = Math.min(nt(y), b));
  }
  if (!y || !r.docView.dom.contains(y)) {
    let R = se.find(r.docView, d);
    if (!R)
      return O > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: b } = _l(R.dom, f, u));
  }
  let x = r.docView.nearest(y);
  if (!x)
    return null;
  if (x.isWidget && ((s = x.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let R = x.dom.getBoundingClientRect();
    return e.y < R.top || e.y <= R.bottom && e.x <= (R.left + R.right) / 2 ? x.posAtStart : x.posAtEnd;
  } else
    return x.localPosFromDOM(y, b) + x.posAtStart;
}
c(Ad, "posAtCoords");
function Kc(r, e, t, i, n) {
  let s = Math.round((i - e.left) * r.defaultCharacterWidth);
  if (r.lineWrapping && t.height > r.defaultLineHeight * 1.5) {
    let l = r.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (r.defaultLineHeight - l) * 0.5) / l);
    s += a * r.viewState.heightOracle.lineLength;
  }
  let o = r.state.sliceDoc(t.from, t.to);
  return t.from + Ig(o, s, r.state.tabSize);
}
c(Kc, "posAtCoordsImprecise");
function Ld(r, e, t) {
  let i, n = r;
  if (r.nodeType != 3 || e != (i = r.nodeValue.length))
    return !1;
  for (; ; ) {
    let s = n.nextSibling;
    if (s) {
      if (s.nodeName == "BR")
        break;
      return !1;
    } else {
      let o = n.parentNode;
      if (!o || o.nodeName == "DIV")
        break;
      n = o;
    }
  }
  return si(r, i - 1, i).getBoundingClientRect().right > t;
}
c(Ld, "isEndOfLineBefore");
function k0(r, e, t) {
  return Ld(r, e, t);
}
c(k0, "isSuspiciousSafariCaretResult");
function $0(r, e, t) {
  if (e != 0)
    return Ld(r, e, t);
  for (let n = r; ; ) {
    let s = n.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != n)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    n = s;
  }
  let i = r.nodeType == 1 ? r.getBoundingClientRect() : si(r, 0, Math.max(r.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
c($0, "isSuspiciousChromeCaretResult");
function R0(r, e, t) {
  let i = r.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let s of i.type) {
      if (s.from > e)
        break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e)
          return s;
        (!n || s.type == tt.Text && (n.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (n = s);
      }
    }
    return n || i;
  }
  return i;
}
c(R0, "blockAt");
function v0(r, e, t, i) {
  let n = R0(r, e.head, e.assoc || -1), s = !i || n.type != tt.Text || !(r.lineWrapping || n.widgetLineBreaks) ? null : r.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (s) {
    let o = r.dom.getBoundingClientRect(), l = r.textDirectionAt(n.from), a = r.posAtCoords({
      x: t == (l == ee.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return k.cursor(a, t ? -1 : 1);
  }
  return k.cursor(t ? n.to : n.from, t ? -1 : 1);
}
c(v0, "moveToLineBoundary");
function Jc(r, e, t, i) {
  let n = r.state.doc.lineAt(e.head), s = r.bidiSpans(n), o = r.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = c0(n, s, o, l, t), f = pd;
    if (!h) {
      if (n.number == (t ? r.state.doc.lines : 1))
        return l;
      f = `
`, n = r.state.doc.line(n.number + (t ? 1 : -1)), s = r.bidiSpans(n), h = r.visualLineSide(n, !t);
    }
    if (a) {
      if (!a(f))
        return l;
    } else {
      if (!i)
        return h;
      a = i(f);
    }
    l = h;
  }
}
c(Jc, "moveByChar");
function T0(r, e, t) {
  let i = r.state.charCategorizer(e), n = i(t);
  return (s) => {
    let o = i(s);
    return n == ft.Space && (n = o), n == o;
  };
}
c(T0, "byGroup");
function A0(r, e, t, i) {
  let n = e.head, s = t ? 1 : -1;
  if (n == (t ? r.state.doc.length : 0))
    return k.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = r.contentDOM.getBoundingClientRect(), h = r.coordsAtPos(n, e.assoc || -1), f = r.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = s < 0 ? h.top : h.bottom;
  else {
    let d = r.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, r.defaultCharacterWidth * (n - d.from))), l = (s < 0 ? d.top : d.bottom) + f;
  }
  let u = a.left + o, O = i ?? r.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (O + d) * s, m = Ad(r, { x: u, y: p }, !1, s);
    if (p < a.top || p > a.bottom || (s < 0 ? m < n : m > n)) {
      let Q = r.docView.coordsForChar(m), y = !Q || p < Q.top ? -1 : 1;
      return k.cursor(m, y, void 0, o);
    }
  }
}
c(A0, "moveVertically");
function Sr(r, e, t) {
  for (; ; ) {
    let i = 0;
    for (let n of r)
      n.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = i || t || (e - s < o - e ? -1 : 1);
          e = a < 0 ? s : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
c(Sr, "skipAtomicRanges");
function _d(r, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let n = e.ranges[i], s = null;
    if (n.empty) {
      let o = Sr(r, n.from, 0);
      o != n.from && (s = k.cursor(o, -1));
    } else {
      let o = Sr(r, n.from, -1), l = Sr(r, n.to, 1);
      (o != n.from || l != n.to) && (s = k.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
    }
    s && (t || (t = e.ranges.slice()), t[i] = s);
  }
  return t ? k.create(t, e.mainIndex) : e;
}
c(_d, "skipAtomsForSelection");
function Lo(r, e, t) {
  let i = Sr(r.state.facet(Sn).map((n) => n(r)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : k.cursor(i, i < t.from ? 1 : -1);
}
c(Lo, "skipAtoms");
const cr = "￿", af = class af {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(J.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += cr;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let n = e; ; ) {
      this.findPointBefore(i, n);
      let s = this.text.length;
      this.readNode(n);
      let o = n.nextSibling;
      if (o == t)
        break;
      let l = q.get(n), a = q.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : as(n)) || as(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > s) && !_0(o, t) && this.lineBreak(), n = o;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(i, s < 0 ? t.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = q.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (L0(e, i.node, i.offset) ? t : 0));
  }
};
c(af, "DOMReader");
let Ml = af;
function L0(r, e, t) {
  for (; ; ) {
    if (!e || t < nt(e))
      return !1;
    if (e == r)
      return !0;
    t = ni(e) + 1, e = e.parentNode;
  }
}
c(L0, "isAtEnd");
function _0(r, e) {
  let t;
  for (; !(r == e || !r); r = r.nextSibling) {
    let i = q.get(r);
    if (!(i?.isWidget || r.cmIgnore))
      return !1;
    i && (t || (t = [])).push(i);
  }
  if (t)
    for (let i of t) {
      let n = i.overrideDOMText;
      if (n?.length)
        return !1;
    }
  return !0;
}
c(_0, "isEmptyToEnd");
const hf = class hf {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
};
c(hf, "DOMPoint");
let us = hf;
const ff = class ff {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = s || o ? [] : Z0(e), a = new Ml(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = C0(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !Pl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Pl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), f = e.viewport;
      if ((T.ios || T.chrome) && e.state.selection.main.empty && a != h && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(a, h), O = Math.max(a, h), d = f.from - u, p = f.to - O;
        (d == 0 || d == 1 || u == 0) && (p == 0 || p == -1 || O == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      e.inputState.composing > -1 && e.state.selection.ranges.length > 1 ? this.newSel = e.state.selection.replaceRange(k.range(h, a)) : this.newSel = k.single(h, a);
    }
  }
};
c(ff, "DOMChange");
let Zl = ff;
function Md(r, e) {
  let t, { newSel: i } = e, n = r.state.selection.main, s = r.inputState.lastKeyTime > Date.now() - 100 ? r.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = n.from, h = null;
    (s === 8 || T.android && e.text.length < l - o) && (a = n.to, h = "end");
    let f = Zd(r.state.doc.sliceString(o, l, cr), e.text, a - o, h);
    f && (T.chrome && s == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == cr + cr && f.toB--, t = {
      from: o + f.from,
      to: o + f.toA,
      insert: W.of(e.text.slice(f.from, f.toB).split(cr))
    });
  } else i && (!r.hasFocus && r.state.facet(ht) || i.main.eq(n)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !n.empty && i && i.main.empty ? t = { from: n.from, to: n.to, insert: r.state.doc.slice(n.from, n.to) } : (T.mac || T.android) && t && t.from == t.to && t.from == n.head - 1 && /^\. ?$/.test(t.insert.toString()) && r.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: W.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= n.from && t.to <= n.to && (t.from != n.from || t.to != n.to) && n.to - n.from - (t.to - t.from) <= 4 ? t = {
    from: n.from,
    to: n.to,
    insert: r.state.doc.slice(n.from, t.from).append(t.insert).append(r.state.doc.slice(t.to, n.to))
  } : r.state.doc.lineAt(n.from).to < n.to && r.docView.lineHasWidget(n.to) && r.inputState.insertingTextAt > Date.now() - 50 ? t = {
    from: n.from,
    to: n.to,
    insert: r.state.toText(r.inputState.insertingText)
  } : T.chrome && t && t.from == t.to && t.from == n.head && t.insert.toString() == `
 ` && r.lineWrapping && (i && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: W.of([" "]) }), t)
    return hh(r, t, i, s);
  if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return r.inputState.lastSelectionTime > Date.now() - 50 && (r.inputState.lastSelectionOrigin == "select" && (o = !0), l = r.inputState.lastSelectionOrigin, l == "select.pointer" && (i = _d(r.state.facet(Sn).map((a) => a(r)), i))), r.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
c(Md, "applyDOMChange");
function hh(r, e, t, i = -1) {
  if (T.ios && r.inputState.flushIOSKey(e))
    return !0;
  let n = r.state.selection.main;
  if (T.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && r.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Ri(r.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && Ri(r.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && Ri(r.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  r.inputState.composing >= 0 && r.inputState.composing++;
  let o, l = /* @__PURE__ */ c(() => o || (o = M0(r, e, t)), "defaultInsert");
  return r.state.facet(Sd).some((a) => a(r, e.from, e.to, s, l)) || r.dispatch(l()), !0;
}
c(hh, "applyDOMChangeInner");
function M0(r, e, t) {
  let i, n = r.state, s = n.selection.main, o = -1;
  if (e.from == e.to && e.from < s.from || e.from > s.to) {
    let a = e.from < s.from ? -1 : 1, h = a < 0 ? s.from : s.to, f = Sr(n.facet(Sn).map((u) => u(r)), h, a);
    e.from == f && (o = f);
  }
  if (o > -1)
    i = {
      changes: e,
      selection: k.cursor(e.from + e.insert.length, -1)
    };
  else if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && r.inputState.composing < 0) {
    let a = s.from < e.from ? n.sliceDoc(s.from, e.from) : "", h = s.to > e.to ? n.sliceDoc(e.to, s.to) : "";
    i = n.replaceSelection(r.state.toText(a + e.insert.sliceString(0, void 0, r.state.lineBreak) + h));
  } else {
    let a = n.changes(e), h = t && t.main.to <= a.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && (r.inputState.composing >= 0 || r.inputState.compositionPendingChange) && e.to <= s.to + 10 && e.to >= s.to - 10) {
      let f = r.state.sliceDoc(e.from, e.to), u, O = t && Td(r, t.main.head);
      if (O) {
        let p = e.insert.length - (e.to - e.from);
        u = { from: O.from, to: O.to - p };
      } else
        u = r.state.doc.lineAt(s.head);
      let d = s.to - e.to;
      i = n.changeByRange((p) => {
        if (p.from == s.from && p.to == s.to)
          return { changes: a, range: h || p.map(a) };
        let m = p.to - d, Q = m - f.length;
        if (r.state.sliceDoc(Q, m) != f || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        m >= u.from && Q <= u.to)
          return { range: p };
        let y = n.changes({ from: Q, to: m, insert: e.insert }), b = p.to - s.to;
        return {
          changes: y,
          range: h ? k.range(Math.max(0, h.anchor + b), Math.max(0, h.head + b)) : p.map(y)
        };
      });
    } else
      i = {
        changes: a,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (r.composing || r.inputState.compositionPendingChange && r.inputState.compositionEndedAt > Date.now() - 50) && (r.inputState.compositionPendingChange = !1, l += ".compose", r.inputState.compositionFirstChange && (l += ".start", r.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: l, scrollIntoView: !0 });
}
c(M0, "applyDefaultInsert");
function Zd(r, e, t, i) {
  let n = Math.min(r.length, e.length), s = 0;
  for (; s < n && r.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == n && r.length == e.length)
    return null;
  let o = r.length, l = e.length;
  for (; o > 0 && l > 0 && r.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && r.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
c(Zd, "findDiff");
function Z0(r) {
  let e = [];
  if (r.root.activeElement != r.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: s } = r.observer.selectionRange;
  return t && (e.push(new us(t, i)), (n != t || s != i) && e.push(new us(n, s))), e;
}
c(Z0, "selectionPoints");
function C0(r, e) {
  if (r.length == 0)
    return null;
  let t = r[0].pos, i = r.length == 2 ? r[1].pos : t;
  return t > -1 && i > -1 ? k.single(t + e, i + e) : null;
}
c(C0, "selectionFromPoints");
const cf = class cf {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, T.safari && e.contentDOM.addEventListener("input", () => null), T.gecko && F0(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !I0(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let n of i.observers)
        n(this.view, t);
      for (let n of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (n(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = X0(e), i = this.handlers, n = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let o = !t[s].handlers.length, l = i[s];
        l && o != !l.handlers.length && (n.removeEventListener(s, this.handleEvent), l = null), l || n.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in i)
      s != "scroll" && !t[s] && n.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && Xd.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), T.android && T.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return T.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Cd.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || E0.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Ri(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : T.safari && !T.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
c(cf, "InputState");
let Cl = cf;
function eu(r, e) {
  return (t, i) => {
    try {
      return e.call(r, i, t);
    } catch (n) {
      Re(t.state, n);
    }
  };
}
c(eu, "bindHandler");
function X0(r) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  c(t, "record");
  for (let i of r) {
    let n = i.spec, s = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (s)
      for (let l in s) {
        let a = s[l];
        a && t(l).handlers.push(eu(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(eu(i.value, a));
      }
  }
  for (let i in je)
    t(i).handlers.push(je[i]);
  for (let i in Xe)
    t(i).observers.push(Xe[i]);
  return e;
}
c(X0, "computeHandlers");
const Cd = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], E0 = "dthko", Xd = [16, 17, 18, 20, 91, 92, 224, 225], Mn = 6;
function Zn(r) {
  return Math.max(0, r) * 0.7 + 8;
}
c(Zn, "dragScrollSpeed");
function Y0(r, e) {
  return Math.max(Math.abs(r.clientX - e.clientX), Math.abs(r.clientY - e.clientY));
}
c(Y0, "dist");
const uf = class uf {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Gg(e.contentDOM), this.atoms = e.state.facet(Sn).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(J.allowMultipleSelections) && V0(e, t), this.dragging = U0(e, t) && Vd(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Y0(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = ah(this.view);
    e.clientX - a.left <= n + Mn ? t = -Zn(n - e.clientX) : e.clientX + a.right >= o - Mn && (t = Zn(e.clientX - o)), e.clientY - a.top <= s + Mn ? i = -Zn(s - e.clientY) : e.clientY + a.bottom >= l - Mn && (i = Zn(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = _d(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
};
c(uf, "MouseSelection");
let Xl = uf;
function V0(r, e) {
  let t = r.state.facet(md);
  return t.length ? t[0](e) : T.mac ? e.metaKey : e.ctrlKey;
}
c(V0, "addsSelectionRange");
function W0(r, e) {
  let t = r.state.facet(gd);
  return t.length ? t[0](e) : T.mac ? !e.altKey : !e.ctrlKey;
}
c(W0, "dragMovesSelection");
function U0(r, e) {
  let { main: t } = r.state.selection;
  if (t.empty)
    return !1;
  let i = Fr(r.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
c(U0, "isInPrimarySelection");
function I0(r, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != r.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = q.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
c(I0, "eventBelongsToEditor");
const je = /* @__PURE__ */ Object.create(null), Xe = /* @__PURE__ */ Object.create(null), Ed = T.ie && T.ie_version < 15 || T.ios && T.webkit_version < 604;
function z0(r) {
  let e = r.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    r.focus(), t.remove(), Yd(r, t.value);
  }, 50);
}
c(z0, "capturePaste");
function So(r, e, t) {
  for (let i of r.facet(e))
    t = i(t, r);
  return t;
}
c(So, "textFilter");
function Yd(r, e) {
  e = So(r.state, sh, e);
  let { state: t } = r, i, n = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (El != null && t.selection.ranges.every((a) => a.empty) && El == s.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let f = t.doc.lineAt(h.from);
      if (f.from == a)
        return { range: h };
      a = f.from;
      let u = t.toText((o ? s.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: f.from, insert: u },
        range: k.cursor(h.from + u.length)
      };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = s.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: k.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(s);
  r.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
c(Yd, "doPaste");
Xe.scroll = (r) => {
  r.inputState.lastScrollTop = r.scrollDOM.scrollTop, r.inputState.lastScrollLeft = r.scrollDOM.scrollLeft;
};
je.keydown = (r, e) => (r.inputState.setSelectionOrigin("select"), e.keyCode == 27 && r.inputState.tabFocusMode != 0 && (r.inputState.tabFocusMode = Date.now() + 2e3), !1);
Xe.touchstart = (r, e) => {
  r.inputState.lastTouchTime = Date.now(), r.inputState.setSelectionOrigin("select.pointer");
};
Xe.touchmove = (r) => {
  r.inputState.setSelectionOrigin("select.pointer");
};
je.mousedown = (r, e) => {
  if (r.observer.flush(), r.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of r.state.facet(Qd))
    if (t = i(r, e), t)
      break;
  if (!t && e.button == 0 && (t = D0(r, e)), t) {
    let i = !r.hasFocus;
    r.inputState.startMouseSelection(new Xl(r, e, t, i)), i && r.observer.ignore(() => {
      ed(r.contentDOM);
      let s = r.root.activeElement;
      s && !s.contains(r.contentDOM) && s.blur();
    });
    let n = r.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  } else
    r.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function tu(r, e, t, i) {
  if (i == 1)
    return k.cursor(e, t);
  if (i == 2)
    return w0(r.state, e, t);
  {
    let n = se.find(r.docView, e), s = r.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : s.from, l = n ? n.posAtEnd : s.to;
    return l < r.state.doc.length && l == s.to && l++, k.range(o, l);
  }
}
c(tu, "rangeForClick");
let iu = /* @__PURE__ */ c((r, e, t) => e >= t.top && e <= t.bottom && r >= t.left && r <= t.right, "inside");
function j0(r, e, t, i) {
  let n = se.find(r.docView, e);
  if (!n)
    return 1;
  let s = e - n.posAtStart;
  if (s == 0)
    return 1;
  if (s == n.length)
    return -1;
  let o = n.coordsAt(s, -1);
  if (o && iu(t, i, o))
    return -1;
  let l = n.coordsAt(s, 1);
  return l && iu(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
c(j0, "findPositionSide");
function ru(r, e) {
  let t = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: j0(r, t, e.clientX, e.clientY) };
}
c(ru, "queryPos");
const q0 = T.ie && T.ie_version <= 11;
let nu = null, su = 0, ou = 0;
function Vd(r) {
  if (!q0)
    return r.detail;
  let e = nu, t = ou;
  return nu = r, ou = Date.now(), su = !e || t > Date.now() - 400 && Math.abs(e.clientX - r.clientX) < 2 && Math.abs(e.clientY - r.clientY) < 2 ? (su + 1) % 3 : 1;
}
c(Vd, "getClickType");
function D0(r, e) {
  let t = ru(r, e), i = Vd(e), n = r.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), n = n.map(s.changes));
    },
    get(s, o, l) {
      let a = ru(r, s), h, f = tu(r, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let u = tu(r, t.pos, t.bias, i), O = Math.min(u.from, f.from), d = Math.max(u.to, f.to);
        f = O < f.from ? k.range(O, d) : k.range(d, O);
      }
      return o ? n.replaceRange(n.main.extend(f.from, f.to)) : l && i == 1 && n.ranges.length > 1 && (h = B0(n, a.pos)) ? h : l ? n.addRange(f) : k.create([f]);
    }
  };
}
c(D0, "basicMouseSelection");
function B0(r, e) {
  for (let t = 0; t < r.ranges.length; t++) {
    let { from: i, to: n } = r.ranges[t];
    if (i <= e && n >= e)
      return k.create(r.ranges.slice(0, t).concat(r.ranges.slice(t + 1)), r.mainIndex == t ? 0 : r.mainIndex - (r.mainIndex > t ? 1 : 0));
  }
  return null;
}
c(B0, "removeRangeAround");
je.dragstart = (r, e) => {
  let { selection: { main: t } } = r.state;
  if (e.target.draggable) {
    let n = r.docView.nearest(e.target);
    if (n && n.isWidget) {
      let s = n.posAtStart, o = s + n.length;
      (s >= t.to || o <= t.from) && (t = k.range(s, o));
    }
  }
  let { inputState: i } = r;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", So(r.state, oh, r.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
je.dragend = (r) => (r.inputState.draggedContent = null, !1);
function lu(r, e, t, i) {
  if (t = So(r.state, sh, t), !t)
    return;
  let n = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = r.inputState, o = i && s && W0(r, e) ? { from: s.from, to: s.to } : null, l = { from: n, insert: t }, a = r.state.changes(o ? [o, l] : l);
  r.focus(), r.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), r.inputState.draggedContent = null;
}
c(lu, "dropText");
je.drop = (r, e) => {
  if (!e.dataTransfer)
    return !1;
  if (r.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, s = /* @__PURE__ */ c(() => {
      ++n == t.length && lu(r, e, i.filter((o) => o != null).join(r.state.lineBreak), !1);
    }, "finishFile");
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return lu(r, e, i, !0), !0;
  }
  return !1;
};
je.paste = (r, e) => {
  if (r.state.readOnly)
    return !0;
  r.observer.flush();
  let t = Ed ? null : e.clipboardData;
  return t ? (Yd(r, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (z0(r), !1);
};
function N0(r, e) {
  let t = r.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), r.focus();
  }, 50);
}
c(N0, "captureCopy");
function G0(r) {
  let e = [], t = [], i = !1;
  for (let n of r.selection.ranges)
    n.empty || (e.push(r.sliceDoc(n.from, n.to)), t.push(n));
  if (!e.length) {
    let n = -1;
    for (let { from: s } of r.selection.ranges) {
      let o = r.doc.lineAt(s);
      o.number > n && (e.push(o.text), t.push({ from: o.from, to: Math.min(r.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: So(r, oh, e.join(r.lineBreak)), ranges: t, linewise: i };
}
c(G0, "copiedRange");
let El = null;
je.copy = je.cut = (r, e) => {
  let { text: t, ranges: i, linewise: n } = G0(r.state);
  if (!t && !n)
    return !1;
  El = n ? t : null, e.type == "cut" && !r.state.readOnly && r.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = Ed ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (N0(r, t), !1);
};
const Wd = /* @__PURE__ */ Ie.define();
function Ud(r, e) {
  let t = [];
  for (let i of r.facet(bd)) {
    let n = i(r, e);
    n && t.push(n);
  }
  return t.length ? r.update({ effects: t, annotations: Wd.of(!0) }) : null;
}
c(Ud, "focusChangeTransaction");
function Id(r) {
  setTimeout(() => {
    let e = r.hasFocus;
    if (e != r.inputState.notifiedFocused) {
      let t = Ud(r.state, e);
      t ? r.dispatch(t) : r.update([]);
    }
  }, 10);
}
c(Id, "updateForFocusChange");
Xe.focus = (r) => {
  r.inputState.lastFocusTime = Date.now(), !r.scrollDOM.scrollTop && (r.inputState.lastScrollTop || r.inputState.lastScrollLeft) && (r.scrollDOM.scrollTop = r.inputState.lastScrollTop, r.scrollDOM.scrollLeft = r.inputState.lastScrollLeft), Id(r);
};
Xe.blur = (r) => {
  r.observer.clearSelectionRange(), Id(r);
};
Xe.compositionstart = Xe.compositionupdate = (r) => {
  r.observer.editContext || (r.inputState.compositionFirstChange == null && (r.inputState.compositionFirstChange = !0), r.inputState.composing < 0 && (r.inputState.composing = 0));
};
Xe.compositionend = (r) => {
  r.observer.editContext || (r.inputState.composing = -1, r.inputState.compositionEndedAt = Date.now(), r.inputState.compositionPendingKey = !0, r.inputState.compositionPendingChange = r.observer.pendingRecords().length > 0, r.inputState.compositionFirstChange = null, T.chrome && T.android ? r.observer.flushSoon() : r.inputState.compositionPendingChange ? Promise.resolve().then(() => r.observer.flush()) : setTimeout(() => {
    r.inputState.composing < 0 && r.docView.hasComposition && r.update([]);
  }, 50));
};
Xe.contextmenu = (r) => {
  r.inputState.lastContextMenu = Date.now();
};
je.beforeinput = (r, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (r.inputState.insertingText = e.data, r.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && r.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = r.posAtDOM(l.startContainer, l.startOffset), h = r.posAtDOM(l.endContainer, l.endOffset);
      return hh(r, { from: a, to: h, insert: r.state.toText(s) }, null), !0;
    }
  }
  let n;
  if (T.chrome && T.android && (n = Cd.find((s) => s.inputType == e.inputType)) && (r.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && r.hasFocus && (r.contentDOM.blur(), r.focus());
    }, 100);
  }
  return T.ios && e.inputType == "deleteContentForward" && r.observer.flushSoon(), T.safari && e.inputType == "insertText" && r.inputState.composing >= 0 && setTimeout(() => Xe.compositionend(r, e), 20), !1;
};
const au = /* @__PURE__ */ new Set();
function F0(r) {
  au.has(r) || (au.add(r), r.addEventListener("copy", () => {
  }), r.addEventListener("cut", () => {
  }));
}
c(F0, "firefoxCopyCutHack");
const hu = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Wi = !1;
function fu() {
  Wi = !1;
}
c(fu, "clearHeightChangeFlag");
const Of = class Of {
  constructor(e) {
    this.lineWrapping = e, this.doc = W.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return hu.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (t = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return t;
  }
  refresh(e, t, i, n, s, o) {
    let l = hu.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = n, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let f = o[h];
        f < 0 ? h++ : this.heightSamples[Math.floor(f * 10)] = !0;
      }
    }
    return a;
  }
};
c(Of, "HeightOracle");
let Yl = Of;
const df = class df {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
};
c(df, "MeasuredHeights");
let Vl = df;
const eo = class eo {
  /**
  @internal
  */
  constructor(e, t, i, n, s) {
    this.from = e, this.length = t, this.top = i, this.height = n, this._content = s;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? tt.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof Tt ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new eo(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
};
c(eo, "BlockInfo");
let Je = eo;
var N = /* @__PURE__ */ (function(r) {
  return r[r.ByPos = 0] = "ByPos", r[r.ByHeight = 1] = "ByHeight", r[r.ByPosNoHeight = 2] = "ByPosNoHeight", r;
})(N || (N = {}));
const Kn = 1e-3, bi = class bi {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Kn && (Wi = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return bi.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, n) {
    let s = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: f, toB: u } = n[l], O = s.lineAt(a, N.ByPosNoHeight, i.setDoc(t), 0, 0), d = O.to >= h ? O : s.lineAt(h, N.ByPosNoHeight, i, 0, 0);
      for (u += d.to - h, h = d.to; l > 0 && O.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, f = n[l - 1].fromB, l--, a < O.from && (O = s.lineAt(a, N.ByPosNoHeight, i, 0, 0));
      f += O.from - a, a = O.from;
      let p = Ul.build(i.setDoc(o), e, f, u);
      s = Os(s, s.replace(a, h, p));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new _e(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, n = 0, s = 0;
    for (; ; )
      if (t == i)
        if (n > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (s > n * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, s -= l.size;
        } else
          break;
      else if (n < s) {
        let l = e[t++];
        l && (n += l.size);
      } else {
        let l = e[--i];
        l && (s += l.size);
      }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new Wl(bi.of(e.slice(0, t)), o, bi.of(e.slice(i)));
  }
};
c(bi, "HeightMap");
let ve = bi;
function Os(r, e) {
  return r == e ? r : (r.constructor != e.constructor && (Wi = !0), e);
}
c(Os, "replace");
ve.prototype.size = 1;
const pf = class pf extends ve {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, n) {
    return new Je(n, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, n, s) {
    return this.blockAt(0, i, n, s);
  }
  forEachLine(e, t, i, n, s, o) {
    e <= s + this.length && t >= s && o(this.blockAt(0, i, n, s));
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more && this.setHeight(n.heights[n.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
};
c(pf, "HeightMapBlock");
let ds = pf;
const Zr = class Zr extends ds {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, n) {
    return new Je(n, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof Zr || n instanceof xt && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof xt ? n = new Zr(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : ve.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setHeight(n.heights[n.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
};
c(Zr, "HeightMapText");
let _e = Zr;
const ke = class ke extends ve {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, n = e.doc.lineAt(t + this.length).number, s = n - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(e, t, i, n) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, n);
    if (t.lineWrapping) {
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), f = t.doc.lineAt(h), u = l + f.length * a, O = Math.max(i, e - u / 2);
      return new Je(f.from, f.length, O, u, 0);
    } else {
      let h = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))), { from: f, length: u } = t.doc.line(s + h);
      return new Je(f, u, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, n, s) {
    if (t == N.ByHeight)
      return this.blockAt(e, i, n, s);
    if (t == N.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Je(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s), h = i.doc.lineAt(e), f = l + h.length * a, u = h.number - o, O = n + l * u + a * (h.from - s - u);
    return new Je(h.from, h.length, Math.max(n, Math.min(O, n + this.height - f)), f, 0);
  }
  forEachLine(e, t, i, n, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, s);
    for (let f = e, u = n; f <= t; ) {
      let O = i.doc.lineAt(f);
      if (f == e) {
        let p = O.number - l;
        u += a * p + h * (e - s - p);
      }
      let d = a + h * O.length;
      o(new Je(O.from, O.length, u, d, 0)), u += d, f = O.to + 1;
    }
  }
  replace(e, t, i) {
    let n = this.length - t;
    if (n > 0) {
      let s = i[i.length - 1];
      s instanceof ke ? i[i.length - 1] = new ke(s.length + n) : i.push(null, new ke(n - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof ke ? i[0] = new ke(e + s.length) : i.unshift(new ke(e - 1), null);
    }
    return ve.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ke(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ke(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, n) {
    let s = t + this.length;
    if (n && n.from <= t + this.length && n.more) {
      let o = [], l = Math.max(t, n.from), a = -1;
      for (n.from > t && o.push(new ke(n.from - t - 1).updateHeight(e, t)); l <= s && n.more; ) {
        let f = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let u = n.heights[n.index++];
        a == -1 ? a = u : Math.abs(u - a) >= Kn && (a = -2);
        let O = new _e(f, u);
        O.outdated = !1, o.push(O), l += f + 1;
      }
      l <= s && o.push(null, new ke(s - l).updateHeight(e, l));
      let h = ve.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Kn || Math.abs(a - this.heightMetrics(e, t).perLine) >= Kn) && (Wi = !0), Os(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
};
c(ke, "HeightMapGap");
let xt = ke;
const mf = class mf extends ve {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, n) {
    let s = i + this.left.height;
    return e < s ? this.left.blockAt(e, t, i, n) : this.right.blockAt(e, t, s, n + this.left.length + this.break);
  }
  lineAt(e, t, i, n, s) {
    let o = n + this.left.height, l = s + this.left.length + this.break, a = t == N.ByHeight ? e < o : e < l, h = a ? this.left.lineAt(e, t, i, n, s) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let f = t == N.ByPosNoHeight ? N.ByPosNoHeight : N.ByPos;
    return a ? h.join(this.right.lineAt(l, f, i, o, l)) : this.left.lineAt(l, f, i, n, s).join(h);
  }
  forEachLine(e, t, i, n, s, o) {
    let l = n + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, n, s, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, N.ByPos, i, n, s);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, n, s, o), h.to >= e && h.from <= t && o(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let n = this.left.length + this.break;
    if (t < n)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - n, t - n, i));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of i)
      s.push(l);
    if (e > 0 && cu(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), cu(s, l);
    }
    return ve.of(s);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, n = i + this.break;
    if (e >= n)
      return this.right.decomposeRight(e - n, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < n && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? ve.of(this.break ? [e, null, t] : [e, t]) : (this.left = Os(this.left, e), this.right = Os(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return n && n.from <= t + s.length && n.more ? a = s = s.updateHeight(e, t, i, n) : s.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
};
c(mf, "HeightMapBranch");
let Wl = mf;
function cu(r, e) {
  let t, i;
  r[e] == null && (t = r[e - 1]) instanceof xt && (i = r[e + 1]) instanceof xt && r.splice(e - 1, 3, new xt(t.length + 1 + i.length));
}
c(cu, "mergeGaps");
const H0 = 5, to = class to {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof _e ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new _e(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new ds(o, n, i)) : (o || s || n >= H0) && this.addLineDeco(n, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new _e(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new xt(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof _e)
      return e;
    let t = new _e(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, e), n.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof _e) && !this.isCovered ? this.nodes.push(new _e(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof _e && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let s = new to(i, e);
    return re.spans(t, i, n, s, 0), s.finish(i);
  }
};
c(to, "NodeBuilder");
let Ul = to;
function K0(r, e, t) {
  let i = new Il();
  return re.compare(r, e, t, i, 0), i.changes;
}
c(K0, "heightRelevantDecoChanges");
const gf = class gf {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && Hn(e, t, this.changes, 5);
  }
};
c(gf, "DecorationComparator");
let Il = gf;
function J0(r, e) {
  let t = r.getBoundingClientRect(), i = r.ownerDocument, n = i.defaultView || window, s = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = r.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let f = h, u = window.getComputedStyle(f);
      if ((f.scrollHeight > f.clientHeight || f.scrollWidth > f.clientWidth) && u.overflow != "visible") {
        let O = f.getBoundingClientRect();
        s = Math.max(s, O.left), o = Math.min(o, O.right), l = Math.max(l, O.top), a = Math.min(h == r.parentNode ? n.innerHeight : a, O.bottom);
      }
      h = u.position == "absolute" || u.position == "fixed" ? f.offsetParent : f.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: s - t.left,
    right: Math.max(s, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e)
  };
}
c(J0, "visiblePixelRange");
function e1(r) {
  let e = r.getBoundingClientRect(), t = r.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
c(e1, "inWindow");
function t1(r, e) {
  let t = r.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
c(t1, "fullPixelRange");
const Qf = class Qf {
  constructor(e, t, i, n) {
    this.from = e, this.to = t, this.size = i, this.displaySize = n;
  }
  static same(e, t) {
    if (e.length != t.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let n = e[i], s = t[i];
      if (n.from != s.from || n.to != s.to || n.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, t) {
    return z.replace({
      widget: new zl(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
};
c(Qf, "LineGap");
let br = Qf;
const yf = class yf extends vt {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
};
c(yf, "LineGapWidget");
let zl = yf;
const Sf = class Sf {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = uu, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ee.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(lh).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Yl(t), this.stateDeco = e.facet(rn).filter((i) => typeof i != "function"), this.heightMap = ve.empty().applyChanges(this.stateDeco, W.empty, this.heightOracle.setDoc(e.doc), [new it(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = z.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => n >= s && n <= o)) {
        let { from: s, to: o } = this.lineBlockAt(n);
        e.push(new mi(s, o));
      }
    }
    return this.viewports = e.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? uu : new jl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(ur(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(rn).filter((f) => typeof f != "function");
    let n = e.changedRanges, s = it.extendWithRanges(n, K0(i, this.stateDeco, e ? e.changes : Te.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    fu(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || Wi) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(O0) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? ee.RTL : ee.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, f = 0;
    if (l.width && l.height) {
      let { scaleX: R, scaleY: $ } = JO(t, l);
      (R > 5e-3 && Math.abs(this.scaleX - R) > 5e-3 || $ > 5e-3 && Math.abs(this.scaleY - $) > 5e-3) && (this.scaleX = R, this.scaleY = $, h |= 16, o = a = !0);
    }
    let u = (parseInt(i.paddingTop) || 0) * this.scaleY, O = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != O) && (this.paddingTop = u, this.paddingBottom = O, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = id(e.scrollDOM);
    let p = (this.printing ? t1 : J0)(t, this.paddingTop), m = p.top - this.pixelViewport.top, Q = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget && !e1(e.dom))
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let R = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(R) && (o = !0), o || n.lineWrapping && Math.abs(b - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: $, charWidth: A, textHeight: L } = e.docView.measureTextSize();
        o = $ > 0 && n.refresh(s, $, A, L, Math.max(5, b / A), R), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && Q > 0 ? f = Math.max(m, Q) : m < 0 && Q < 0 && (f = Math.min(m, Q)), fu();
      for (let $ of this.viewports) {
        let A = $.from == this.viewport.from ? R : e.docView.measureVisibleLineHeights($);
        this.heightMap = (o ? ve.empty().applyChanges(this.stateDeco, W.empty, this.heightOracle, [new it(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Vl($.from, A));
      }
      Wi && (h |= 2);
    }
    let x = !this.viewportIsAppropriate(this.viewport, f) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return x && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(f, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || x) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), n = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new mi(n.lineAt(o - i * 1e3, N.ByHeight, s, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, N.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let f = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = n.lineAt(h, N.ByPos, s, 0, 0), O;
        t.y == "center" ? O = (u.top + u.bottom) / 2 - f / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? O = u.top : O = u.bottom - f, a = new mi(n.lineAt(O - 1e3 / 2, N.ByHeight, s, 0, 0).from, n.lineAt(O + f + 1e3 / 2, N.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), n = t.mapPos(e.to, 1);
    return new mi(this.heightMap.lineAt(i, N.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, N.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(e, N.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, N.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let n of e)
      t.touchesRange(n.from, n.to) || i.push(new br(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, s = n >> 1, o = n << 1;
    if (this.defaultTextDirection != ee.LTR && !i)
      return [];
    let l = [], a = /* @__PURE__ */ c((f, u, O, d) => {
      if (u - f < s)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let y of m)
        if (y > f && y < u) {
          a(f, y - 10, O, d), a(y + 10, u, O, d);
          return;
        }
      let Q = r1(e, (y) => y.from >= O.from && y.to <= O.to && Math.abs(y.from - f) < s && Math.abs(y.to - u) < s && !m.some((b) => y.from < b && y.to > b));
      if (!Q) {
        if (u < O.to && t && i && t.visibleRanges.some((x) => x.from <= u && x.to >= u)) {
          let x = t.moveToLineBoundary(k.cursor(u), !1, !0).head;
          x > f && (u = x);
        }
        let y = this.gapSize(O, f, u, d), b = i || y < 2e6 ? y : 2e6;
        Q = new br(f, u, y, b);
      }
      l.push(Q);
    }, "addGap"), h = /* @__PURE__ */ c((f) => {
      if (f.length < o || f.type != tt.Text)
        return;
      let u = i1(f.from, f.to, this.stateDeco);
      if (u.total < o)
        return;
      let O = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let m = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, Q, y;
        if (O != null) {
          let b = Xn(u, O), x = ((this.visibleBottom - this.visibleTop) / 2 + m) / f.height;
          Q = b - x, y = b + x;
        } else
          Q = (this.visibleTop - f.top - m) / f.height, y = (this.visibleBottom - f.top + m) / f.height;
        d = Cn(u, Q), p = Cn(u, y);
      } else {
        let m = u.total * this.heightOracle.charWidth, Q = n * this.heightOracle.charWidth, y = 0;
        if (m > 2e6)
          for (let A of e)
            A.from >= f.from && A.from < f.to && A.size != A.displaySize && A.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = A.size - A.displaySize);
        let b = this.pixelViewport.left + y, x = this.pixelViewport.right + y, R, $;
        if (O != null) {
          let A = Xn(u, O), L = ((x - b) / 2 + Q) / m;
          R = A - L, $ = A + L;
        } else
          R = (b - Q) / m, $ = (x + Q) / m;
        d = Cn(u, R), p = Cn(u, $);
      }
      d > f.from && a(f.from, d, f, u), p < f.to && a(p, f.to, f, u);
    }, "checkLine");
    for (let f of this.viewportLines)
      Array.isArray(f.type) ? f.type.forEach(h) : h(f);
    return l;
  }
  gapSize(e, t, i, n) {
    let s = Xn(n, i) - Xn(n, t);
    return this.heightOracle.lineWrapping ? e.height * s : n.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    br.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = z.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    re.spans(t, this.viewport.from, this.viewport.to, {
      span(s, o) {
        i.push({ from: s, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let s = 0; s < i.length && !(n & 8); s++) {
        let o = this.visibleRanges[s], l = i[s];
        (o.from != l.from || o.to != l.to) && (n |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || ur(this.heightMap.lineAt(e, N.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || ur(this.heightMap.lineAt(this.scaler.fromDOM(e), N.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return ur(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
};
c(Sf, "ViewState");
let ps = Sf;
const bf = class bf {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
};
c(bf, "Viewport");
let mi = bf;
function i1(r, e, t) {
  let i = [], n = r, s = 0;
  return re.spans(t, r, e, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), s += o - n), n = l;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), s += e - n), { total: s, ranges: i };
}
c(i1, "lineStructure");
function Cn({ total: r, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(r * t);
  for (let n = 0; ; n++) {
    let { from: s, to: o } = e[n], l = o - s;
    if (i <= l)
      return s + i;
    i -= l;
  }
}
c(Cn, "findPosition");
function Xn(r, e) {
  let t = 0;
  for (let { from: i, to: n } of r.ranges) {
    if (e <= n) {
      t += e - i;
      break;
    }
    t += n - i;
  }
  return t / r.total;
}
c(Xn, "findFraction");
function r1(r, e) {
  for (let t of r)
    if (e(t))
      return t;
}
c(r1, "find");
const uu = {
  toDOM(r) {
    return r;
  },
  fromDOM(r) {
    return r;
  },
  scale: 1,
  eq(r) {
    return r == this;
  }
}, io = class io {
  constructor(e, t, i) {
    let n = 0, s = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, N.ByPos, e, 0, 0).top, f = t.lineAt(a, N.ByPos, e, 0, 0).bottom;
      return n += f - h, { from: l, to: a, top: h, bottom: f, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (t.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top)
        return n + (e - i) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      i = s.bottom, n = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, n = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop)
        return i + (e - n) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      i = s.bottom, n = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof io ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
};
c(io, "BigScaler");
let jl = io;
function ur(r, e) {
  if (e.scale == 1)
    return r;
  let t = e.toDOM(r.top), i = e.toDOM(r.bottom);
  return new Je(r.from, r.length, t, i - t, Array.isArray(r._content) ? r._content.map((n) => ur(n, e)) : r._content);
}
c(ur, "scaleBlock");
const En = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.join(" "), "combine") }), ql = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.indexOf(!0) > -1, "combine") }), Dl = /* @__PURE__ */ rt.newName(), zd = /* @__PURE__ */ rt.newName(), jd = /* @__PURE__ */ rt.newName(), qd = { "&light": "." + zd, "&dark": "." + jd };
function Bl(r, e, t) {
  return new rt(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return r;
        if (!t || !t[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return t[n];
      }) : r + " " + i;
    }
  });
}
c(Bl, "buildTheme");
const n1 = /* @__PURE__ */ Bl("." + Dl, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // https://github.com/codemirror/dev/issues/456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, qd), s1 = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, _o = T.ie && T.ie_version <= 11, wf = class wf {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new kl(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (T.ie && T.ie_version <= 11 || T.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && T.android && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(T.chrome && T.chrome_version < 126) && (this.editContext = new Gl(e), e.state.facet(ht) && (e.contentDOM.editContext = this.editContext.editContext)), _o && (this.onCharData = (t) => {
      this.queue.push({
        target: t.target,
        type: "characterData",
        oldValue: t.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(ht) ? i.root.activeElement != this.dom : !Fn(this.dom, n))
      return;
    let s = n.anchorNode && i.docView.nearest(n.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (T.ie && T.ie_version <= 11 || T.android && T.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && mr(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = Fr(e.root);
    if (!t)
      return !1;
    let i = T.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && o1(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = Fn(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Hg(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, s1), _o && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), _o && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = /* @__PURE__ */ c(() => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && Ri(this.dom, s.key, s.keyCode));
      }, "flush");
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
      key: e,
      keyCode: t,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, n = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (n = !0), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: n };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && Fn(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new Zl(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = Md(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = Ou(t, e.previousSibling || e.target.previousSibling, -1), n = Ou(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: n ? t.posBefore(n) : t.posAtEnd,
        typeOver: !1
      };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(ht) != e.state.facet(ht) && (e.view.contentDOM.editContext = e.state.facet(ht) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
};
c(wf, "DOMObserver");
let Nl = wf;
function Ou(r, e, t) {
  for (; e; ) {
    let i = q.get(e);
    if (i && i.parent == r)
      return i;
    let n = e.parentNode;
    e = n != r.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
c(Ou, "findChild");
function du(r, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, s = e.endOffset, o = r.docView.domAtPos(r.state.selection.main.anchor);
  return mr(o.node, o.offset, n, s) && ([t, i, n, s] = [n, s, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: s };
}
c(du, "buildSelectionRangeFromRange");
function o1(r, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(r.root)[0];
    if (n)
      return du(r, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return c(i, "read"), r.contentDOM.addEventListener("beforeinput", i, !0), r.dom.ownerDocument.execCommand("indent"), r.contentDOM.removeEventListener("beforeinput", i, !0), t ? du(r, t) : null;
}
c(o1, "safariSelectionRangeHack");
const xf = class xf {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = e.state.selection.main, { anchor: s, head: o } = n, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > i.text.length;
      l == this.from && s < this.from ? l = s : a == this.to && s > this.to && (a = s);
      let f = Zd(e.state.sliceDoc(l, a), i.text, (h ? n.from : n.to) - l, h ? "end" : null);
      if (!f) {
        let O = k.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        O.main.eq(n) || e.dispatch({ selection: O, userEvent: "select" });
        return;
      }
      let u = {
        from: f.from + l,
        to: f.toA + l,
        insert: W.of(i.text.slice(f.from, f.toB).split(`
`))
      };
      if ((T.mac || T.android) && u.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (u = { from: l, to: a, insert: W.of([i.text.replace(".", " ")]) }), this.pendingContextChange = u, !e.state.readOnly) {
        let O = this.to - this.from + (u.to - u.from + u.insert.length);
        hh(e, u, k.single(this.toEditorPos(i.selectionStart, O), this.toEditorPos(i.selectionEnd, O)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], s = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), n.push(s);
      }
      t.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let s of i.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(s.rangeStart), h = this.toEditorPos(s.rangeEnd);
          if (a < h) {
            let f = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            n.push(z.mark({ attributes: { style: f } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: Pd.of(z.set(n)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: /* @__PURE__ */ c((i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let n = Fr(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    }, "read") };
  }
  applyEdits(e) {
    let t = 0, i = !1, n = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, h) => {
      if (i)
        return;
      let f = h.length - (o - s);
      if (n && o >= n.to)
        if (n.from == s && n.to == o && n.insert.eq(h)) {
          n = this.pendingContextChange = null, t += f, this.to += f;
          return;
        } else
          n = null, this.revertPending(e.state);
      if (s += t, o += t, o <= this.from)
        this.from += f, this.to += f;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), h.toString()), this.to += f;
      }
      t += f;
    }), n && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(
      0,
      t - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      e.doc.length,
      t + 1e4
      /* CxVp.Margin */
    );
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), n = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
};
c(xf, "EditContextManager");
let Gl = xf;
const Cr = class Cr {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((s) => i(s, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Fg(e.parent) || document, this.viewState = new ps(e.state || J.create(e)), e.scrollTo && e.scrollTo.is(_n) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(pi).map((n) => new yr(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Nl(this), this.inputState = new Cl(this), this.inputState.ensureHandlers(this.plugins), this.docView = new cs(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof le ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1, i = !1, n, s = this.state;
    for (let O of e) {
      if (O.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = O.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((O) => O.annotation(Wd)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Ud(s, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, f = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), f = this.observer.readChange(), (f && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (f = null)) : this.observer.clear(), s.facet(J.phrases) != this.state.facet(J.phrases))
      return this.setState(s);
    n = nn.create(this, s, e), n.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let O of e) {
        if (u && (u = u.map(O.changes)), O.scrollIntoView) {
          let { main: d } = O.state.selection;
          u = new Qr(d.empty ? d : k.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of O.effects)
          d.is(_n) && (u = d.value.clip(this.state));
      }
      this.viewState.update(n, u), this.bidiCache = ms.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(fr) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((O) => O.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(En) != n.state.facet(En) && (this.viewState.mustMeasureContent = !0), (t || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let O of this.state.facet(Ll))
        try {
          O(n);
        } catch (d) {
          Re(this.state, d, "update listener");
        }
    (a || f) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), f && !Md(this, f) && h.force && Ri(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new ps(e), this.plugins = e.facet(pi).map((i) => new yr(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new cs(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(pi), i = e.state.facet(pi);
    if (t != i) {
      let n = [];
      for (let s of i) {
        let o = t.indexOf(s);
        if (o < 0)
          n.push(new yr(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, n.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = e;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Re(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(e = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, n = i.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (id(i))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            s = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let f = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Re(this.state, p), pu;
          }
        }), u = nn.create(this, this.state, []), O = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), O = this.docView.update(u), O && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (f[d] != pu)
            try {
              let p = h[d];
              p.write && p.write(f[d], this);
            } catch (p) {
              Re(this.state, p);
            }
        if (O && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (p > 1 || p < -1) {
                n = n + p, i.scrollTop = n / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(Ll))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Dl + " " + (this.state.facet(ql) ? jd : zd) + " " + this.state.facet(En);
  }
  updateAttrs() {
    let e = mu(this, kd, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), t = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(ht) ? "true" : "false",
      class: "cm-content",
      style: `${T.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (t["aria-readonly"] = "true"), mu(this, lh, t);
    let i = this.observer.ignore(() => {
      let n = Rl(this.contentDOM, this.contentAttrs, t), s = Rl(this.dom, this.editorAttrs, e);
      return n || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let n of i.effects)
        if (n.is(Cr.announce)) {
          t && (this.announceDOM.textContent = ""), t = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(fr);
    let e = this.state.facet(Cr.cspNonce);
    rt.mount(this.root, this.styleModules.concat(n1).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(e, t, i) {
    return Lo(this, e, Jc(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return Lo(this, e, Jc(this, e, t, (i) => T0(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), s = i[t ? i.length - 1 : 0];
    return k.cursor(s.side(t, n) + e.from, s.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return v0(this, e, t, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(e, t, i) {
    return Lo(this, e, A0(this, e, t, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Ad(this, e, t);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(e), s = this.bidiSpans(n), o = s[et.find(s, e - n.from, -1, t)];
    return yn(i, o.dir == ee.LTR == t > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(e) {
    return !this.state.facet(wd) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(e) {
    if (e.length > l1)
      return dd(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || Od(s.isolates, i = Nc(this, e))))
        return s.order;
    i || (i = Nc(this, e));
    let n = f0(e.text, t, i);
    return this.bidiCache.push(new ms(e.from, e.to, t, i, !0, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || T.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      ed(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(e, t = {}) {
    return _n.of(new Qr(typeof e == "number" ? k.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return _n.of(new Qr(k.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(e) {
    return ze.define(() => ({}), { eventHandlers: e });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(e) {
    return ze.define(() => ({}), { eventObservers: e });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(e, t) {
    let i = rt.newName(), n = [En.of(i), fr.of(Bl(`.${i}`, e))];
    return t && t.dark && n.push(ql.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return ci.lowest(fr.of(Bl("." + Dl, e, qd)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && q.get(i) || q.get(e);
    return ((t = n?.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
};
c(Cr, "EditorView");
let Z = Cr;
Z.styleModule = fr;
Z.inputHandler = Sd;
Z.clipboardInputFilter = sh;
Z.clipboardOutputFilter = oh;
Z.scrollHandler = xd;
Z.focusChangeEffect = bd;
Z.perLineTextDirection = wd;
Z.exceptionSink = yd;
Z.updateListener = Ll;
Z.editable = ht;
Z.mouseSelectionStyle = Qd;
Z.dragMovesSelection = gd;
Z.clickAddsSelectionRange = md;
Z.decorations = rn;
Z.outerDecorations = $d;
Z.atomicRanges = Sn;
Z.bidiIsolatedRanges = Rd;
Z.scrollMargins = vd;
Z.darkTheme = ql;
Z.cspNonce = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.length ? r[0] : "", "combine") });
Z.contentAttributes = lh;
Z.editorAttributes = kd;
Z.lineWrapping = /* @__PURE__ */ Z.contentAttributes.of({ class: "cm-lineWrapping" });
Z.announce = /* @__PURE__ */ I.define();
const l1 = 4096, pu = {}, ro = class ro {
  constructor(e, t, i, n, s, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : ee.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new ro(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
};
c(ro, "CachedOrder");
let ms = ro;
function mu(r, e, t) {
  for (let i = r.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let s = i[n], o = typeof s == "function" ? s(r) : s;
    o && $l(o, t);
  }
  return t;
}
c(mu, "attrsFromFacet");
const a1 = T.mac ? "mac" : T.windows ? "win" : T.linux ? "linux" : "key";
function h1(r, e) {
  const t = r.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let n, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      s = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), s && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
c(h1, "normalizeKeyName");
function Yn(r, e, t) {
  return e.altKey && (r = "Alt-" + r), e.ctrlKey && (r = "Ctrl-" + r), e.metaKey && (r = "Meta-" + r), t !== !1 && e.shiftKey && (r = "Shift-" + r), r;
}
c(Yn, "modifiers");
const f1 = /* @__PURE__ */ ci.default(/* @__PURE__ */ Z.domEventHandlers({
  keydown(r, e) {
    return d1(c1(e.state), r, e, "editor");
  }
})), bn = /* @__PURE__ */ M.define({ enables: f1 }), gu = /* @__PURE__ */ new WeakMap();
function c1(r) {
  let e = r.facet(bn), t = gu.get(e);
  return t || gu.set(e, t = O1(e.reduce((i, n) => i.concat(n), []))), t;
}
c(c1, "getKeymap");
let yt = null;
const u1 = 4e3;
function O1(r, e = a1) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ c((o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, "checkPrefix"), s = /* @__PURE__ */ c((o, l, a, h, f) => {
    var u, O;
    let d = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => h1(y, e));
    for (let y = 1; y < p.length; y++) {
      let b = p.slice(0, y).join(" ");
      n(b, !0), d[b] || (d[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(x) => {
          let R = yt = { view: x, prefix: b, scope: o };
          return setTimeout(() => {
            yt == R && (yt = null);
          }, u1), !0;
        }]
      });
    }
    let m = p.join(" ");
    n(m, !1);
    let Q = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((O = (u = d._any) === null || u === void 0 ? void 0 : u.run) === null || O === void 0 ? void 0 : O.slice()) || []
    });
    a && Q.run.push(a), h && (Q.preventDefault = !0), f && (Q.stopPropagation = !0);
  }, "add");
  for (let o of r) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let f = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        f._any || (f._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: u } = o;
        for (let O in f)
          f[O].run.push((d) => u(d, Fl));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        s(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
c(O1, "buildKeymap");
let Fl = null;
function d1(r, e, t, i) {
  Fl = e;
  let n = qg(e), s = Vt(n, 0), o = Oi(s) == n.length && n != " ", l = "", a = !1, h = !1, f = !1;
  yt && yt.view == t && yt.scope == i && (l = yt.prefix + " ", Xd.indexOf(e.keyCode) < 0 && (h = !0, yt = null));
  let u = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ c((Q) => {
    if (Q) {
      for (let y of Q.run)
        if (!u.has(y) && (u.add(y), y(t)))
          return Q.stopPropagation && (f = !0), !0;
      Q.preventDefault && (Q.stopPropagation && (f = !0), h = !0);
    }
    return !1;
  }, "runFor"), d = r[i], p, m;
  return d && (O(d[l + Yn(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(T.windows && e.ctrlKey && e.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(T.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (p = $t[e.keyCode]) && p != n ? (O(d[l + Yn(p, e, !0)]) || e.shiftKey && (m = Gr[e.keyCode]) != n && m != p && O(d[l + Yn(m, e, !1)])) && (a = !0) : o && e.shiftKey && O(d[l + Yn(n, e, !0)]) && (a = !0), !a && O(d._any) && (a = !0)), h && (a = !0), a && f && e.stopPropagation(), Fl = null, a;
}
c(d1, "runHandlers");
const Dd = /* @__PURE__ */ I.define({
  map(r, e) {
    return r == null ? null : e.mapPos(r);
  }
}), Or = /* @__PURE__ */ Ue.define({
  create() {
    return null;
  },
  update(r, e) {
    return r != null && (r = e.changes.mapPos(r)), e.effects.reduce((t, i) => i.is(Dd) ? i.value : t, r);
  }
}), p1 = /* @__PURE__ */ ze.fromClass(class {
  constructor(r) {
    this.view = r, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(r) {
    var e;
    let t = r.state.field(Or);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (r.startState.field(Or) != t || r.docChanged || r.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: r } = this, e = r.state.field(Or), t = e != null && r.coordsAtPos(e);
    if (!t)
      return null;
    let i = r.scrollDOM.getBoundingClientRect();
    return {
      left: t.left - i.left + r.scrollDOM.scrollLeft * r.scaleX,
      top: t.top - i.top + r.scrollDOM.scrollTop * r.scaleY,
      height: t.bottom - t.top
    };
  }
  drawCursor(r) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      r ? (this.cursor.style.left = r.left / e + "px", this.cursor.style.top = r.top / t + "px", this.cursor.style.height = r.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(r) {
    this.view.state.field(Or) != r && this.view.dispatch({ effects: Dd.of(r) });
  }
}, {
  eventObservers: {
    dragover(r) {
      this.setDropPos(this.view.posAtCoords({ x: r.clientX, y: r.clientY }));
    },
    dragleave(r) {
      (r.target == this.view.contentDOM || !this.view.contentDOM.contains(r.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function m1() {
  return [Or, p1];
}
c(m1, "dropCursor");
function Qu(r, e, t, i, n) {
  e.lastIndex = 0;
  for (let s = r.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        n(o + l.index, l);
}
c(Qu, "iterMatches");
function g1(r, e) {
  let t = r.visibleRanges;
  if (t.length == 1 && t[0].from == r.viewport.from && t[0].to == r.viewport.to)
    return t;
  let i = [];
  for (let { from: n, to: s } of t)
    n = Math.max(r.state.doc.lineAt(n).from, n - e), s = Math.min(r.state.doc.lineAt(s).to, s + e), i.length && i[i.length - 1].to >= n ? i[i.length - 1].to = s : i.push({ from: n, to: s });
  return i;
}
c(g1, "matchRanges");
const Pf = class Pf {
  /**
  Create a decorator.
  */
  constructor(e) {
    const { regexp: t, decoration: i, decorate: n, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, n)
      this.addMatch = (l, a, h, f) => n(f, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, f) => {
        let u = i(l, a, h);
        u && f(h, h + l[0].length, u);
      };
    else if (i)
      this.addMatch = (l, a, h, f) => f(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(e) {
    let t = new Yi(), i = t.add.bind(t);
    for (let { from: n, to: s } of g1(e, this.maxLength))
      Qu(e.state.doc, this.regexp, n, s, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(e, t) {
    let i = 1e9, n = -1;
    return e.docChanged && e.changes.iterChanges((s, o, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (i = Math.min(l, i), n = Math.max(a, n));
    }), e.viewportMoved || n - i > 1e3 ? this.createDeco(e.view) : n > -1 ? this.updateRange(e.view, t.map(e.changes), i, n) : t;
  }
  updateRange(e, t, i, n) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, i), l = Math.min(s.to, n);
      if (l >= o) {
        let a = e.state.doc.lineAt(o), h = a.to < l ? e.state.doc.lineAt(l) : a, f = Math.max(s.from, a.from), u = Math.min(s.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              f = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              u = l;
              break;
            }
        }
        let O = [], d, p = /* @__PURE__ */ c((m, Q, y) => O.push(y.range(m, Q)), "add");
        if (a == h)
          for (this.regexp.lastIndex = f - a.from; (d = this.regexp.exec(a.text)) && d.index < u - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          Qu(e.state.doc, this.regexp, f, u, (m, Q) => this.addMatch(Q, e, m, p));
        t = t.update({ filterFrom: f, filterTo: u, filter: /* @__PURE__ */ c((m, Q) => m < f || Q > u, "filter"), add: O });
      }
    }
    return t;
  }
};
c(Pf, "MatchDecorator");
let Hl = Pf;
const kf = class kf extends vt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? Vi(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), n = yn(t[0], i.direction != "rtl"), s = parseInt(i.lineHeight);
    return n.bottom - n.top > s * 1.5 ? { left: n.left, right: n.right, top: n.top, bottom: n.top + s } : n;
  }
  ignoreEvent() {
    return !1;
  }
};
c(kf, "Placeholder");
let Kl = kf;
function Q1(r) {
  let e = ze.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = r ? z.set([z.widget({ widget: new Kl(r), side: 1 }).range(0)]) : z.none;
    }
    get decorations() {
      return this.view.state.doc.length ? z.none : this.placeholder;
    }
  }, { decorations: /* @__PURE__ */ c((t) => t.decorations, "decorations") });
  return typeof r == "string" ? [
    e,
    Z.contentAttributes.of({ "aria-placeholder": r })
  ] : e;
}
c(Q1, "placeholder");
const Vn = "-10000px", $f = class $f {
  constructor(e, t, i, n) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = n, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => s = i(o, s));
  }
  update(e, t) {
    var i;
    let n = e.state.facet(this.facet), s = n.filter((a) => a);
    if (n === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return !1;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let h = s[a], f = -1;
      if (h) {
        for (let u = 0; u < this.tooltips.length; u++) {
          let O = this.tooltips[u];
          O && O.create == h.create && (f = u);
        }
        if (f < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let u = o[a] = this.tooltipViews[f];
          l && (l[a] = t[f]), u.update && u.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = n, this.tooltips = s, this.tooltipViews = o, !0;
  }
};
c($f, "TooltipViewManager");
let Jl = $f;
function y1(r) {
  let e = r.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
c(y1, "windowSpace");
const Mo = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => {
    var e, t, i;
    return {
      position: T.ios ? "absolute" : ((e = r.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = r.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = r.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || y1
    };
  }, "combine")
}), yu = /* @__PURE__ */ new WeakMap(), Bd = /* @__PURE__ */ ze.fromClass(class {
  constructor(r) {
    this.view = r, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = r.state.facet(Mo);
    this.position = e.position, this.parent = e.parent, this.classes = r.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Jl(r, Nd, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), r.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let r of this.manager.tooltipViews)
        this.intersectionObserver.observe(r.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(r) {
    r.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(r, this.above);
    e && this.observeIntersection();
    let t = e || r.geometryChanged, i = r.state.facet(Mo);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      t = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      t = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(r, e) {
    let t = r.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), r.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", t.dom.appendChild(n);
    }
    return t.dom.style.position = this.position, t.dom.style.top = Vn, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var r, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (r = i.destroy) === null || r === void 0 || r.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let r = 1, e = 1, t = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: s } = this.manager.tooltipViews[0];
      if (T.safari) {
        let o = s.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else
        t = !!s.offsetParent && s.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (r = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: r, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = ah(this.view);
    return {
      visible: {
        left: i.left + n.left,
        top: i.top + n.top,
        right: i.right - n.right,
        bottom: i.bottom - n.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((s, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()),
      space: this.view.state.facet(Mo).tooltipSpace(this.view),
      scaleX: r,
      scaleY: e,
      makeAbsolute: t
    };
  }
  writeMeasure(r) {
    var e;
    if (r.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: n, scaleY: s } = r, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: f } = h, u = r.pos[l], O = r.size[l];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, i.top) || u.top >= Math.min(t.bottom, i.bottom) || u.right < Math.max(t.left, i.left) - 0.1 || u.left > Math.min(t.right, i.right) + 0.1)) {
        f.style.top = Vn;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = O.right - O.left, Q = (e = yu.get(h)) !== null && e !== void 0 ? e : O.bottom - O.top, y = h.offset || b1, b = this.view.textDirection == ee.LTR, x = O.width > i.right - i.left ? b ? i.left : i.right - O.width : b ? Math.max(i.left, Math.min(u.left - (d ? 14 : 0) + y.x, i.right - m)) : Math.min(Math.max(i.left, u.left - m + (d ? 14 : 0) - y.x), i.right - m), R = this.above[l];
      !a.strictSide && (R ? u.top - Q - p - y.y < i.top : u.bottom + Q + p + y.y > i.bottom) && R == i.bottom - u.bottom > u.top - i.top && (R = this.above[l] = !R);
      let $ = (R ? u.top - i.top : i.bottom - u.bottom) - p;
      if ($ < Q && h.resize !== !1) {
        if ($ < this.view.defaultLineHeight) {
          f.style.top = Vn;
          continue;
        }
        yu.set(h, Q), f.style.height = (Q = $) / s + "px";
      } else f.style.height && (f.style.height = "");
      let A = R ? u.top - Q - p - y.y : u.bottom + p + y.y, L = x + m;
      if (h.overlap !== !0)
        for (let U of o)
          U.left < L && U.right > x && U.top < A + Q && U.bottom > A && (A = R ? U.top - Q - 2 - p : U.bottom + p + 2);
      if (this.position == "absolute" ? (f.style.top = (A - r.parent.top) / s + "px", Su(f, (x - r.parent.left) / n)) : (f.style.top = A / s + "px", Su(f, x / n)), d) {
        let U = u.left + (b ? y.x : -y.x) - (x + 14 - 7);
        d.style.left = U / n + "px";
      }
      h.overlap !== !0 && o.push({ left: x, top: A, right: L, bottom: A + Q }), f.classList.toggle("cm-tooltip-above", R), f.classList.toggle("cm-tooltip-below", !R), h.positioned && h.positioned(r.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let r of this.manager.tooltipViews)
        r.dom.style.top = Vn;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function Su(r, e) {
  let t = parseInt(r.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (r.style.left = e + "px");
}
c(Su, "setLeftStyle");
const S1 = /* @__PURE__ */ Z.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: "14px",
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), b1 = { x: 0, y: 0 }, Nd = /* @__PURE__ */ M.define({
  enables: [Bd, S1]
});
function Gd(r, e) {
  let t = r.plugin(Bd);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
c(Gd, "getTooltip");
const Rf = class Rf extends ut {
  /**
  @internal
  */
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(e) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(e) {
  }
};
c(Rf, "GutterMarker");
let Lt = Rf;
Lt.prototype.elementClass = "";
Lt.prototype.toDOM = void 0;
Lt.prototype.mapMode = de.TrackBefore;
Lt.prototype.startSide = Lt.prototype.endSide = -1;
Lt.prototype.point = !0;
const Fd = 1024;
let w1 = 0;
const vf = class vf {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
};
c(vf, "Range");
let Se = vf;
const Tf = class Tf {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = w1++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = te.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
};
c(Tf, "NodeProp");
let C = Tf;
C.closedBy = new C({ deserialize: /* @__PURE__ */ c((r) => r.split(" "), "deserialize") });
C.openedBy = new C({ deserialize: /* @__PURE__ */ c((r) => r.split(" "), "deserialize") });
C.group = new C({ deserialize: /* @__PURE__ */ c((r) => r.split(" "), "deserialize") });
C.isolate = new C({ deserialize: /* @__PURE__ */ c((r) => {
  if (r && r != "rtl" && r != "ltr" && r != "auto")
    throw new RangeError("Invalid value for isolate: " + r);
  return r || "auto";
}, "deserialize") });
C.contextHash = new C({ perNode: !0 });
C.lookAhead = new C({ perNode: !0 });
C.mounted = new C({ perNode: !0 });
const Af = class Af {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[C.mounted.id];
  }
};
c(Af, "MountedTree");
let li = Af;
const x1 = /* @__PURE__ */ Object.create(null), no = class no {
  /**
  @internal
  */
  constructor(e, t, i, n = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = n;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : x1, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new no(e.name || "", t, e.id, i);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(n)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return n;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(e) {
    return this.props[e.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return !0;
      let t = this.prop(C.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let n of i.split(" "))
        t[n] = e[i];
    return (i) => {
      for (let n = i.prop(C.group), s = -1; s < (n ? n.length : 0); s++) {
        let o = t[s < 0 ? i.name : n[s]];
        if (o)
          return o;
      }
    };
  }
};
c(no, "NodeType");
let te = no;
te.none = new te(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const so = class so {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let n = null;
      for (let s of e) {
        let o = s(i);
        if (o) {
          n || (n = Object.assign({}, i.props));
          let l = o[1], a = o[0];
          a.combine && a.id in n && (l = a.combine(n[a.id], l)), n[a.id] = l;
        }
      }
      t.push(n ? new te(i.name, n, i.id, i.flags) : i);
    }
    return new so(t);
  }
};
c(so, "NodeSet");
let Ui = so;
const Wn = /* @__PURE__ */ new WeakMap(), bu = /* @__PURE__ */ new WeakMap();
var B;
(function(r) {
  r[r.ExcludeBuffers = 1] = "ExcludeBuffers", r[r.IncludeAnonymous = 2] = "IncludeAnonymous", r[r.IgnoreMounts = 4] = "IgnoreMounts", r[r.IgnoreOverlays = 8] = "IgnoreOverlays";
})(B || (B = {}));
const Xr = class Xr {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, t, i, n, s) {
    if (this.type = e, this.children = t, this.positions = i, this.length = n, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = li.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (t && (t += ","), t += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new Ii(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, t = 0, i = 0) {
    let n = Wn.get(this) || this.topNode, s = new Ii(n);
    return s.moveTo(e, t), Wn.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new be(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(e, t = 0) {
    let i = sn(Wn.get(this) || this.topNode, e, t, !1);
    return Wn.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = sn(bu.get(this) || this.topNode, e, t, !0);
    return bu.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return P1(this, e, t);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: t, leave: i, from: n = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & B.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | B.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= s && a.to >= n && (!l && a.type.isAnonymous || t(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(e = {}) {
    return this.children.length <= 8 ? this : ch(te.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, n) => new Xr(this.type, t, i, n, this.propValues), e.makeTree || ((t, i, n) => new Xr(te.none, t, i, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return k1(e);
  }
};
c(Xr, "Tree");
let E = Xr;
E.empty = new E(te.none, [], [], 0);
const oo = class oo {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new oo(this.buffer, this.index);
  }
};
c(oo, "FlatBufferCursor");
let ea = oo;
const lo = class lo {
  /**
  Create a tree buffer.
  */
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return te.none;
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  /**
  @internal
  */
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], n = this.set.types[t], s = n.name;
    if (/\W/.test(s) && !n.isError && (s = JSON.stringify(s)), e += 4, i == e)
      return s;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, t, i, n, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(Hd(s, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, t, i) {
    let n = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = n[l++], s[a++] = n[l++] - i;
      let h = s[a++] = n[l++] - i;
      s[a++] = n[l++] - e, o = Math.max(o, h);
    }
    return new lo(s, o, this.set);
  }
};
c(lo, "TreeBuffer");
let _t = lo;
function Hd(r, e, t, i) {
  switch (r) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
c(Hd, "checkSide");
function sn(r, e, t, i) {
  for (var n; r.from == r.to || (t < 1 ? r.from >= e : r.from > e) || (t > -1 ? r.to <= e : r.to < e); ) {
    let o = !i && r instanceof be && r.index < 0 ? null : r.parent;
    if (!o)
      return r;
    r = o;
  }
  let s = i ? 0 : B.IgnoreOverlays;
  if (i)
    for (let o = r, l = o.parent; l; o = l, l = o.parent)
      o instanceof be && o.index < 0 && ((n = l.enter(e, t, s)) === null || n === void 0 ? void 0 : n.from) != o.from && (r = l);
  for (; ; ) {
    let o = r.enter(e, t, s);
    if (!o)
      return r;
    r = o;
  }
}
c(sn, "resolveNode");
const Lf = class Lf {
  cursor(e = 0) {
    return new Ii(this, e);
  }
  getChild(e, t = null, i = null) {
    let n = wu(this, e, t, i);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return wu(this, e, t, i);
  }
  resolve(e, t = 0) {
    return sn(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return sn(this, e, t, !0);
  }
  matchContext(e) {
    return ta(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let n = t.lastChild;
      if (!n || n.to != t.to)
        break;
      n.type.isError && n.from == n.to ? (i = t, t = n.prevSibling) : t = n;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
};
c(Lf, "BaseNode");
let gs = Lf;
const wi = class wi extends gs {
  constructor(e, t, i, n) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, n, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let f = l[e], u = a[e] + o.from;
        if (Hd(n, i, u, u + f.length)) {
          if (f instanceof _t) {
            if (s & B.ExcludeBuffers)
              continue;
            let O = f.findChild(0, f.buffer.length, t, i - u, n);
            if (O > -1)
              return new ai(new ia(o, f, e, u), null, O);
          } else if (s & B.IncludeAnonymous || !f.type.isAnonymous || fh(f)) {
            let O;
            if (!(s & B.IgnoreMounts) && (O = li.get(f)) && !O.overlay)
              return new wi(O.tree, u, e, o);
            let d = new wi(f, u, e, o);
            return s & B.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? f.children.length - 1 : 0, t, i, n);
          }
        }
      }
      if (s & B.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.nextChild(
      0,
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    let n;
    if (!(i & B.IgnoreOverlays) && (n = li.get(this._tree)) && n.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of n.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new wi(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
};
c(wi, "TreeNode");
let be = wi;
function wu(r, e, t, i) {
  let n = r.cursor(), s = [];
  if (!n.firstChild())
    return s;
  if (t != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(t), !n.nextSibling())
        return s;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return s;
    if (n.type.is(e) && s.push(n.node), !n.nextSibling())
      return i == null ? s : [];
  }
}
c(wu, "getChildren");
function ta(r, e, t = e.length - 1) {
  for (let i = r; t >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return !1;
      t--;
    }
  }
  return !0;
}
c(ta, "matchNodeContext");
const _f = class _f {
  constructor(e, t, i, n) {
    this.parent = e, this.buffer = t, this.index = i, this.start = n;
  }
};
c(_f, "BufferContext");
let ia = _f;
const Bt = class Bt extends gs {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: n } = this.context, s = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.context.start, i);
    return s < 0 ? null : new Bt(this.context, this, s);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(e) {
    return this.child(
      1,
      e,
      2
      /* Side.After */
    );
  }
  childBefore(e) {
    return this.child(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  enter(e, t, i = 0) {
    if (i & B.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, s = n.findChild(this.index + 4, n.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new Bt(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + e,
      e,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Bt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Bt(this.context, this._parent, e.findChild(
      t,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, n = this.index + 4, s = i.buffer[this.index + 3];
    if (s > n) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(n, s, o)), t.push(0);
    }
    return new E(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
};
c(Bt, "BufferNode");
let ai = Bt;
function Kd(r) {
  if (!r.length)
    return null;
  let e = 0, t = r[0];
  for (let s = 1; s < r.length; s++) {
    let o = r[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let i = t instanceof be && t.index < 0 ? null : t.parent, n = r.slice();
  return i ? n[e] = i : n.splice(e, 1), new ra(n, t);
}
c(Kd, "iterStack");
const Mf = class Mf {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return Kd(this.heads);
  }
};
c(Mf, "StackIterator");
let ra = Mf;
function P1(r, e, t) {
  let i = r.resolveInner(e, t), n = null;
  for (let s = i instanceof be ? i : i.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (n || (n = [i])).push(o.resolve(e, t)), s = o;
    } else {
      let o = li.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new be(o.tree, o.overlay[0].from + s.from, -1, s);
        (n || (n = [i])).push(sn(l, e, t, !1));
      }
    }
  return n ? Kd(n) : i;
}
c(P1, "stackIterator");
const Zf = class Zf {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof be)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: n } = this.buffer;
    return this.type = t || n.set.types[n.buffer[e]], this.from = i + n.buffer[e + 1], this.to = i + n.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof be ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: n } = this.buffer, s = n.findChild(this.index + 4, n.buffer[this.index + 3], e, t - this.buffer.start, i);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(e) {
    return this.enterChild(
      1,
      e,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(e) {
    return this.enterChild(
      -1,
      e,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(e, t, i = this.mode) {
    return this.buffer ? i & B.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & B.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & B.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  /**
  @internal
  */
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(t.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = t.buffer[this.index + 3];
      if (n < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: n } = this;
    if (n) {
      if (e > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (n.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: t, parent: i } = n);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
          let l = i._tree.children[s];
          if (this.mode & B.IncludeAnonymous || l instanceof _t || !l.type.isAnonymous || fh(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(
      e,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(e))
        return !0;
      if (this.atLastNode(e) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(e = !0) {
    return this.move(1, e);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(e = !0) {
    return this.move(-1, e);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e: for (let n = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == n) {
            if (n == this.index)
              return o;
            t = o, i = s + 1;
            break e;
          }
        n = this.stack[--s];
      }
    for (let n = i; n < this.stack.length; n++)
      t = new ai(this.buffer, t, this.stack[n]);
    return this.bufferNode = new ai(this.buffer, t, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(e, t) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && t && t(this), n = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, n = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(e) {
    if (!this.buffer)
      return ta(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let n = e.length - 1, s = this.stack.length - 1; n >= 0; s--) {
      if (s < 0)
        return ta(this._tree, e, n);
      let o = i[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[n] && e[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
};
c(Zf, "TreeCursor");
let Ii = Zf;
function fh(r) {
  return r.children.some((e) => e instanceof _t || !e.type.isAnonymous || fh(e));
}
c(fh, "hasChild");
function k1(r) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: n = Fd, reused: s = [], minRepeatType: o = i.types.length } = r, l = Array.isArray(t) ? new ea(t, t.length) : t, a = i.types, h = 0, f = 0;
  function u($, A, L, U, D, K) {
    let { id: Y, start: X, end: G, size: F } = l, ne = f, dt = h;
    if (F < 0)
      if (l.next(), F == -1) {
        let ot = s[Y];
        L.push(ot), U.push(X - $);
        return;
      } else if (F == -3) {
        h = Y;
        return;
      } else if (F == -4) {
        f = Y;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${F}`);
    let ir = a[Y], $n, Ct, Tc = X - $;
    if (G - X <= n && (Ct = Q(l.pos - A, D))) {
      let ot = new Uint16Array(Ct.size - Ct.skip), Ae = l.pos - Ct.size, Be = ot.length;
      for (; l.pos > Ae; )
        Be = y(Ct.start, ot, Be);
      $n = new _t(ot, G - Ct.start, i), Tc = Ct.start - $;
    } else {
      let ot = l.pos - F;
      l.next();
      let Ae = [], Be = [], Xt = Y >= o ? Y : -1, ui = 0, Rn = G;
      for (; l.pos > ot; )
        Xt >= 0 && l.id == Xt && l.size >= 0 ? (l.end <= Rn - n && (p(Ae, Be, X, ui, l.end, Rn, Xt, ne, dt), ui = Ae.length, Rn = l.end), l.next()) : K > 2500 ? O(X, ot, Ae, Be) : u(X, ot, Ae, Be, Xt, K + 1);
      if (Xt >= 0 && ui > 0 && ui < Ae.length && p(Ae, Be, X, ui, X, Rn, Xt, ne, dt), Ae.reverse(), Be.reverse(), Xt > -1 && ui > 0) {
        let Ac = d(ir, dt);
        $n = ch(ir, Ae, Be, 0, Ae.length, 0, G - X, Ac, Ac);
      } else
        $n = m(ir, Ae, Be, G - X, ne - G, dt);
    }
    L.push($n), U.push(Tc);
  }
  c(u, "takeNode");
  function O($, A, L, U) {
    let D = [], K = 0, Y = -1;
    for (; l.pos > A; ) {
      let { id: X, start: G, end: F, size: ne } = l;
      if (ne > 4)
        l.next();
      else {
        if (Y > -1 && G < Y)
          break;
        Y < 0 && (Y = F - n), D.push(X, G, F), K++, l.next();
      }
    }
    if (K) {
      let X = new Uint16Array(K * 4), G = D[D.length - 2];
      for (let F = D.length - 3, ne = 0; F >= 0; F -= 3)
        X[ne++] = D[F], X[ne++] = D[F + 1] - G, X[ne++] = D[F + 2] - G, X[ne++] = ne;
      L.push(new _t(X, D[2] - G, i)), U.push(G - $);
    }
  }
  c(O, "takeFlatNode");
  function d($, A) {
    return (L, U, D) => {
      let K = 0, Y = L.length - 1, X, G;
      if (Y >= 0 && (X = L[Y]) instanceof E) {
        if (!Y && X.type == $ && X.length == D)
          return X;
        (G = X.prop(C.lookAhead)) && (K = U[Y] + X.length + G);
      }
      return m($, L, U, D, K, A);
    };
  }
  c(d, "makeBalanced");
  function p($, A, L, U, D, K, Y, X, G) {
    let F = [], ne = [];
    for (; $.length > U; )
      F.push($.pop()), ne.push(A.pop() + L - D);
    $.push(m(i.types[Y], F, ne, K - D, X - K, G)), A.push(D - L);
  }
  c(p, "makeRepeatLeaf");
  function m($, A, L, U, D, K, Y) {
    if (K) {
      let X = [C.contextHash, K];
      Y = Y ? [X].concat(Y) : [X];
    }
    if (D > 25) {
      let X = [C.lookAhead, D];
      Y = Y ? [X].concat(Y) : [X];
    }
    return new E($, A, L, U, Y);
  }
  c(m, "makeTree");
  function Q($, A) {
    let L = l.fork(), U = 0, D = 0, K = 0, Y = L.end - n, X = { size: 0, start: 0, skip: 0 };
    e: for (let G = L.pos - $; L.pos > G; ) {
      let F = L.size;
      if (L.id == A && F >= 0) {
        X.size = U, X.start = D, X.skip = K, K += 4, U += 4, L.next();
        continue;
      }
      let ne = L.pos - F;
      if (F < 0 || ne < G || L.start < Y)
        break;
      let dt = L.id >= o ? 4 : 0, ir = L.start;
      for (L.next(); L.pos > ne; ) {
        if (L.size < 0)
          if (L.size == -3)
            dt += 4;
          else
            break e;
        else L.id >= o && (dt += 4);
        L.next();
      }
      D = ir, U += F, K += dt;
    }
    return (A < 0 || U == $) && (X.size = U, X.start = D, X.skip = K), X.size > 4 ? X : void 0;
  }
  c(Q, "findBufferSize");
  function y($, A, L) {
    let { id: U, start: D, end: K, size: Y } = l;
    if (l.next(), Y >= 0 && U < o) {
      let X = L;
      if (Y > 4) {
        let G = l.pos - (Y - 4);
        for (; l.pos > G; )
          L = y($, A, L);
      }
      A[--L] = X, A[--L] = K - $, A[--L] = D - $, A[--L] = U;
    } else Y == -3 ? h = U : Y == -4 && (f = U);
    return L;
  }
  c(y, "copyToBuffer");
  let b = [], x = [];
  for (; l.pos > 0; )
    u(r.start || 0, r.bufferStart || 0, b, x, -1, 0);
  let R = (e = r.length) !== null && e !== void 0 ? e : b.length ? x[0] + b[0].length : 0;
  return new E(a[r.topID], b.reverse(), x.reverse(), R);
}
c(k1, "buildTree");
const xu = /* @__PURE__ */ new WeakMap();
function Jn(r, e) {
  if (!r.isAnonymous || e instanceof _t || e.type != r)
    return 1;
  let t = xu.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != r || !(i instanceof E)) {
        t = 1;
        break;
      }
      t += Jn(r, i);
    }
    xu.set(e, t);
  }
  return t;
}
c(Jn, "nodeSize");
function ch(r, e, t, i, n, s, o, l, a) {
  let h = 0;
  for (let p = i; p < n; p++)
    h += Jn(r, e[p]);
  let f = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], O = [];
  function d(p, m, Q, y, b) {
    for (let x = Q; x < y; ) {
      let R = x, $ = m[x], A = Jn(r, p[x]);
      for (x++; x < y; x++) {
        let L = Jn(r, p[x]);
        if (A + L >= f)
          break;
        A += L;
      }
      if (x == R + 1) {
        if (A > f) {
          let L = p[R];
          d(L.children, L.positions, 0, L.children.length, m[R] + b);
          continue;
        }
        u.push(p[R]);
      } else {
        let L = m[x - 1] + p[x - 1].length - $;
        u.push(ch(r, p, m, R, x, $, L, null, a));
      }
      O.push($ + b - s);
    }
  }
  return c(d, "divide"), d(e, t, i, n, 0), (l || a)(u, O, o);
}
c(ch, "balanceRange");
const Cf = class Cf {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
  }
  setBuffer(e, t, i) {
    let n = this.map.get(e);
    n || this.map.set(e, n = /* @__PURE__ */ new Map()), n.set(t, i);
  }
  getBuffer(e, t) {
    let i = this.map.get(e);
    return i && i.get(t);
  }
  /**
  Set the value for this syntax node.
  */
  set(e, t) {
    e instanceof ai ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof be && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof ai ? this.getBuffer(e.context.buffer, e.index) : e instanceof be ? this.map.get(e.tree) : void 0;
  }
  /**
  Set the value for the node that a cursor currently points to.
  */
  cursorSet(e, t) {
    e.buffer ? this.setBuffer(e.buffer.buffer, e.index, t) : this.map.set(e.tree, t);
  }
  /**
  Retrieve the value for the node that a cursor currently points
  to.
  */
  cursorGet(e) {
    return e.buffer ? this.getBuffer(e.buffer.buffer, e.index) : this.map.get(e.tree);
  }
};
c(Cf, "NodeWeakMap");
let Qs = Cf;
const Er = class Er {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, t, i, n, s = !1, o = !1) {
    this.from = e, this.to = t, this.tree = i, this.offset = n, this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(e, t = [], i = !1) {
    let n = [new Er(0, e.length, e, 0, !1, i)];
    for (let s of t)
      s.to > e.length && n.push(s);
    return n;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let n = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let f = l < t.length ? t[l] : null, u = f ? f.fromA : 1e9;
      if (u - a >= i)
        for (; o && o.from < u; ) {
          let O = o;
          if (a >= O.from || u <= O.to || h) {
            let d = Math.max(O.from, a) - h, p = Math.min(O.to, u) - h;
            O = d >= p ? null : new Er(d, p, O.tree, O.offset + h, l > 0, !!f);
          }
          if (O && n.push(O), o.to > u)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!f)
        break;
      a = f.toA, h = f.toA - f.toB;
    }
    return n;
  }
};
c(Er, "TreeFragment");
let Pt = Er;
const Xf = class Xf {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(e, t, i) {
    return typeof e == "string" && (e = new na(e)), i = i ? i.length ? i.map((n) => new Se(n.from, n.to)) : [new Se(0, 0)] : [new Se(0, e.length)], this.createParse(e, t || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, t, i) {
    let n = this.startParse(e, t, i);
    for (; ; ) {
      let s = n.advance();
      if (s)
        return s;
    }
  }
};
c(Xf, "Parser");
let zi = Xf;
const Ef = class Ef {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
};
c(Ef, "StringInput");
let na = Ef;
function Jd(r) {
  return (e, t, i, n) => new la(e, r, t, i, n);
}
c(Jd, "parseMixed");
const Yf = class Yf {
  constructor(e, t, i, n, s) {
    this.parser = e, this.parse = t, this.overlay = i, this.target = n, this.from = s;
  }
};
c(Yf, "InnerParse");
let ys = Yf;
function Pu(r) {
  if (!r.length || r.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(r));
}
c(Pu, "checkRanges");
const Vf = class Vf {
  constructor(e, t, i, n, s, o, l) {
    this.parser = e, this.predicate = t, this.mounts = i, this.index = n, this.start = s, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
};
c(Vf, "ActiveOverlay");
let sa = Vf;
const oa = new C({ perNode: !0 }), Wf = class Wf {
  constructor(e, t, i, n, s) {
    this.nest = t, this.input = i, this.fragments = n, this.ranges = s, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = e;
  }
  advance() {
    if (this.baseParse) {
      let i = this.baseParse.advance();
      if (!i)
        return null;
      if (this.baseParse = null, this.baseTree = i, this.startInner(), this.stoppedAt != null)
        for (let n of this.inner)
          n.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let i = this.baseTree;
      return this.stoppedAt != null && (i = new E(i.type, i.children, i.positions, i.length, i.propValues.concat([[oa, this.stoppedAt]]))), i;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      i[C.mounted.id] = new li(t, e.overlay, e.parser), e.target.props = i;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let e = this.input.length;
    for (let t = this.innerDone; t < this.inner.length; t++)
      this.inner[t].from < e && (e = Math.min(e, this.inner[t].parse.parsedPos));
    return e;
  }
  stopAt(e) {
    if (this.stoppedAt = e, this.baseParse)
      this.baseParse.stopAt(e);
    else
      for (let t = this.innerDone; t < this.inner.length; t++)
        this.inner[t].parse.stopAt(e);
  }
  startInner() {
    let e = new v1(this.fragments), t = null, i = null, n = new Ii(new be(this.baseTree, this.ranges[0].from, 0, null), B.IncludeAnonymous | B.IgnoreMounts);
    e: for (let s, o; ; ) {
      let l = !0, a;
      if (this.stoppedAt != null && n.from >= this.stoppedAt)
        l = !1;
      else if (e.hasNode(n)) {
        if (t) {
          let h = t.mounts.find((f) => f.frag.from <= n.from && f.frag.to >= n.to && f.mount.overlay);
          if (h)
            for (let f of h.mount.overlay) {
              let u = f.from + h.pos, O = f.to + h.pos;
              u >= n.from && O <= n.to && !t.ranges.some((d) => d.from < O && d.to > u) && t.ranges.push({ from: u, to: O });
            }
        }
        l = !1;
      } else if (i && (o = $1(i.ranges, n.from, n.to)))
        l = o != 2;
      else if (!n.type.isAnonymous && (s = this.nest(n, this.input)) && (n.from < n.to || !s.overlay)) {
        n.tree || (R1(n), t && t.depth++, i && i.depth++);
        let h = e.findMounts(n.from, s.parser);
        if (typeof s.overlay == "function")
          t = new sa(s.parser, s.overlay, h, this.inner.length, n.from, n.tree, t);
        else {
          let f = $u(this.ranges, s.overlay || (n.from < n.to ? [new Se(n.from, n.to)] : []));
          f.length && Pu(f), (f.length || !s.overlay) && this.inner.push(new ys(s.parser, f.length ? s.parser.startParse(this.input, Ru(h, f), f) : s.parser.startParse(""), s.overlay ? s.overlay.map((u) => new Se(u.from - n.from, u.to - n.from)) : null, n.tree, f.length ? f[0].from : n.from)), s.overlay ? f.length && (i = { ranges: f, depth: 0, prev: i }) : l = !1;
        }
      } else if (t && (a = t.predicate(n)) && (a === !0 && (a = new Se(n.from, n.to)), a.from < a.to)) {
        let h = t.ranges.length - 1;
        h >= 0 && t.ranges[h].to == a.from ? t.ranges[h] = { from: t.ranges[h].from, to: a.to } : t.ranges.push(a);
      }
      if (l && n.firstChild())
        t && t.depth++, i && i.depth++;
      else
        for (; !n.nextSibling(); ) {
          if (!n.parent())
            break e;
          if (t && !--t.depth) {
            let h = $u(this.ranges, t.ranges);
            h.length && (Pu(h), this.inner.splice(t.index, 0, new ys(t.parser, t.parser.startParse(this.input, Ru(t.mounts, h), h), t.ranges.map((f) => new Se(f.from - t.start, f.to - t.start)), t.target, h[0].from))), t = t.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
};
c(Wf, "MixedParse");
let la = Wf;
function $1(r, e, t) {
  for (let i of r) {
    if (i.from >= t)
      break;
    if (i.to > e)
      return i.from <= e && i.to >= t ? 2 : 1;
  }
  return 0;
}
c($1, "checkCover");
function ku(r, e, t, i, n, s) {
  if (e < t) {
    let o = r.buffer[e + 1];
    i.push(r.slice(e, t, o)), n.push(o - s);
  }
}
c(ku, "sliceBuf");
function R1(r) {
  let { node: e } = r, t = [], i = e.context.buffer;
  do
    t.push(r.index), r.parent();
  while (!r.tree);
  let n = r.tree, s = n.children.indexOf(i), o = n.children[s], l = o.buffer, a = [s];
  function h(f, u, O, d, p, m) {
    let Q = t[m], y = [], b = [];
    ku(o, f, Q, y, b, d);
    let x = l[Q + 1], R = l[Q + 2];
    a.push(y.length);
    let $ = m ? h(Q + 4, l[Q + 3], o.set.types[l[Q]], x, R - x, m - 1) : e.toTree();
    return y.push($), b.push(x - d), ku(o, l[Q + 3], u, y, b, d), new E(O, y, b, p);
  }
  c(h, "split"), n.children[s] = h(0, l.length, te.none, 0, o.length, t.length - 1);
  for (let f of a) {
    let u = r.tree.children[f], O = r.tree.positions[f];
    r.yield(new be(u, O + r.from, f, r._tree));
  }
}
c(R1, "materialize");
const Uf = class Uf {
  constructor(e, t) {
    this.offset = t, this.done = !1, this.cursor = e.cursor(B.IncludeAnonymous | B.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(e) {
    let { cursor: t } = this, i = e - this.offset;
    for (; !this.done && t.from < i; )
      t.to >= e && t.enter(i, 1, B.IgnoreOverlays | B.ExcludeBuffers) || t.next(!1) || (this.done = !0);
  }
  hasNode(e) {
    if (this.moveTo(e.from), !this.done && this.cursor.from + this.offset == e.from && this.cursor.tree)
      for (let t = this.cursor.tree; ; ) {
        if (t == e.tree)
          return !0;
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof E)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
};
c(Uf, "StructureCursor");
let Ss = Uf;
var Li;
let v1 = (Li = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let i = this.curFrag = e[0];
      this.curTo = (t = i.tree.prop(oa)) !== null && t !== void 0 ? t : i.to, this.inner = new Ss(i.tree, -i.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(e) {
    for (; this.curFrag && e.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= e.from && this.curTo >= e.to && this.inner.hasNode(e);
  }
  nextFrag() {
    var e;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let t = this.curFrag = this.fragments[this.fragI];
      this.curTo = (e = t.tree.prop(oa)) !== null && e !== void 0 ? e : t.to, this.inner = new Ss(t.tree, -t.offset);
    }
  }
  findMounts(e, t) {
    var i;
    let n = [];
    if (this.inner) {
      this.inner.cursor.moveTo(e, 1);
      for (let s = this.inner.cursor.node; s; s = s.parent) {
        let o = (i = s.tree) === null || i === void 0 ? void 0 : i.prop(C.mounted);
        if (o && o.parser == t)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= s.to)
              break;
            a.tree == this.curFrag.tree && n.push({
              frag: a,
              pos: s.from - a.offset,
              mount: o
            });
          }
      }
    }
    return n;
  }
}, c(Li, "FragmentCursor"), Li);
function $u(r, e) {
  let t = null, i = e;
  for (let n = 1, s = 0; n < r.length; n++) {
    let o = r[n - 1].to, l = r[n].from;
    for (; s < i.length; s++) {
      let a = i[s];
      if (a.from >= l)
        break;
      a.to <= o || (t || (i = t = e.slice()), a.from < o ? (t[s] = new Se(a.from, o), a.to > l && t.splice(s + 1, 0, new Se(l, a.to))) : a.to > l ? t[s--] = new Se(l, a.to) : t.splice(s--, 1));
    }
  }
  return i;
}
c($u, "punchRanges");
function T1(r, e, t, i) {
  let n = 0, s = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let f = n == r.length ? 1e9 : o ? r[n].to : r[n].from, u = s == e.length ? 1e9 : l ? e[s].to : e[s].from;
    if (o != l) {
      let O = Math.max(a, t), d = Math.min(f, u, i);
      O < d && h.push(new Se(O, d));
    }
    if (a = Math.min(f, u), a == 1e9)
      break;
    f == a && (o ? (o = !1, n++) : o = !0), u == a && (l ? (l = !1, s++) : l = !0);
  }
  return h;
}
c(T1, "findCoverChanges");
function Ru(r, e) {
  let t = [];
  for (let { pos: i, mount: n, frag: s } of r) {
    let o = i + (n.overlay ? n.overlay[0].from : 0), l = o + n.tree.length, a = Math.max(s.from, o), h = Math.min(s.to, l);
    if (n.overlay) {
      let f = n.overlay.map((O) => new Se(O.from + i, O.to + i)), u = T1(e, f, a, h);
      for (let O = 0, d = a; ; O++) {
        let p = O == u.length, m = p ? h : u[O].from;
        if (m > d && t.push(new Pt(d, m, n.tree, -o, s.from >= d || s.openStart, s.to <= m || s.openEnd)), p)
          break;
        d = u[O].to;
      }
    } else
      t.push(new Pt(a, h, n.tree, -o, s.from >= o || s.openStart, s.to <= l || s.openEnd));
  }
  return t;
}
c(Ru, "enterFragments");
let A1 = 0;
const Yr = class Yr {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.name = e, this.set = t, this.base = i, this.modified = n, this.id = A1++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof Yr && (t = e), t?.base)
      throw new Error("Can not derive from a modified tag");
    let n = new Yr(i, [], null, []);
    if (n.set.push(n), t)
      for (let s of t.set)
        n.set.push(s);
    return n;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(e) {
    let t = new bs(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : bs.get(i.base || i, i.modified.concat(t).sort((n, s) => n.id - s.id));
  }
};
c(Yr, "Tag");
let Me = Yr, L1 = 0;
const ao = class ao {
  constructor(e) {
    this.name = e, this.instances = [], this.id = L1++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && _1(t, l.modified));
    if (i)
      return i;
    let n = [], s = new Me(e.name, n, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = M1(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(ao.get(l, a));
    return s;
  }
};
c(ao, "Modifier");
let bs = ao;
function _1(r, e) {
  return r.length == e.length && r.every((t, i) => t == e[i]);
}
c(_1, "sameArray");
function M1(r) {
  let e = [[]];
  for (let t = 0; t < r.length; t++)
    for (let i = 0, n = e.length; i < n; i++)
      e.push(e[i].concat(r[t]));
  return e.sort((t, i) => i.length - t.length);
}
c(M1, "powerSet");
function Ji(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r) {
    let i = r[t];
    Array.isArray(i) || (i = [i]);
    for (let n of t.split(" "))
      if (n) {
        let s = [], o = 2, l = n;
        for (let u = 0; ; ) {
          if (l == "..." && u > 0 && u + 3 == n.length) {
            o = 1;
            break;
          }
          let O = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!O)
            throw new RangeError("Invalid path: " + n);
          if (s.push(O[0] == "*" ? "" : O[0][0] == '"' ? JSON.parse(O[0]) : O[0]), u += O[0].length, u == n.length)
            break;
          let d = n[u++];
          if (u == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(u);
        }
        let a = s.length - 1, h = s[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let f = new on(i, o, a > 0 ? s.slice(0, a) : null);
        e[h] = f.sort(e[h]);
      }
  }
  return ep.add(e);
}
c(Ji, "styleTags");
const ep = new C({
  combine(r, e) {
    let t, i, n;
    for (; r || e; ) {
      if (!r || e && r.depth >= e.depth ? (n = e, e = e.next) : (n = r, r = r.next), t && t.mode == n.mode && !n.context && !t.context)
        continue;
      let s = new on(n.tags, n.mode, n.context);
      t ? t.next = s : i = s, t = s;
    }
    return i;
  }
});
var _i;
let on = (_i = class {
  constructor(e, t, i, n) {
    this.tags = e, this.mode = t, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}, c(_i, "Rule"), _i);
on.empty = new on([], 2, null);
function tp(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of r)
    if (!Array.isArray(s.tag))
      t[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        t[o.id] = s.class;
  let { scope: i, all: n = null } = e || {};
  return {
    style: /* @__PURE__ */ c((s) => {
      let o = n;
      for (let l of s)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    }, "style"),
    scope: i
  };
}
c(tp, "tagHighlighter");
function Z1(r, e) {
  let t = null;
  for (let i of r) {
    let n = i.style(e);
    n && (t = t ? t + " " + n : n);
  }
  return t;
}
c(Z1, "highlightTags");
function C1(r, e, t, i = 0, n = r.length) {
  let s = new aa(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(r.cursor(), i, n, "", s.highlighters), s.flush(n);
}
c(C1, "highlightTree");
const If = class If {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, n, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = n, f = X1(e) || on.empty, u = Z1(s, f.tags);
    if (u && (h && (h += " "), h += u, f.mode == 1 && (n += (n ? " " : "") + u)), this.startSpan(Math.max(t, l), h), f.opaque)
      return;
    let O = e.tree && e.tree.prop(C.mounted);
    if (O && O.overlay) {
      let d = e.node.enter(O.overlay[0].from + l, 1), p = this.highlighters.filter((Q) => !Q.scope || Q.scope(O.tree.type)), m = e.firstChild();
      for (let Q = 0, y = l; ; Q++) {
        let b = Q < O.overlay.length ? O.overlay[Q] : null, x = b ? b.from + l : a, R = Math.max(t, y), $ = Math.min(i, x);
        if (R < $ && m)
          for (; e.from < $ && (this.highlightRange(e, R, $, n, s), this.startSpan(Math.min($, e.to), h), !(e.to >= x || !e.nextSibling())); )
            ;
        if (!b || x > i)
          break;
        y = b.to + l, y > t && (this.highlightRange(d.cursor(), Math.max(t, b.from + l), Math.min(i, y), "", p), this.startSpan(Math.min(i, y), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      O && (n = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, n, s), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
};
c(If, "HighlightBuilder");
let aa = If;
function X1(r) {
  let e = r.type.prop(ep);
  for (; e && e.context && !r.matchContext(e.context); )
    e = e.next;
  return e || null;
}
c(X1, "getStyleTags");
const v = Me.define, Un = v(), mt = v(), vu = v(mt), Tu = v(mt), gt = v(), In = v(gt), Zo = v(gt), He = v(), Et = v(He), Ge = v(), Fe = v(), ha = v(), nr = v(ha), zn = v(), g = {
  /**
  A comment.
  */
  comment: Un,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: v(Un),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: v(Un),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: v(Un),
  /**
  Any kind of identifier.
  */
  name: mt,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: v(mt),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: vu,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: v(vu),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Tu,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: v(Tu),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: v(mt),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: v(mt),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: v(mt),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: v(mt),
  /**
  A literal value.
  */
  literal: gt,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: In,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: v(In),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: v(In),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: v(In),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Zo,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: v(Zo),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: v(Zo),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: v(gt),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: v(gt),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: v(gt),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: v(gt),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: v(gt),
  /**
  A language keyword.
  */
  keyword: Ge,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: v(Ge),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: v(Ge),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: v(Ge),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: v(Ge),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: v(Ge),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: v(Ge),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: v(Ge),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: v(Ge),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: v(Ge),
  /**
  An operator.
  */
  operator: Fe,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: v(Fe),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: v(Fe),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: v(Fe),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: v(Fe),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: v(Fe),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: v(Fe),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: v(Fe),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: v(Fe),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: v(Fe),
  /**
  Program or markup punctuation.
  */
  punctuation: ha,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: v(ha),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: nr,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: v(nr),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: v(nr),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: v(nr),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: v(nr),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: He,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Et,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: v(Et),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: v(Et),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: v(Et),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: v(Et),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: v(Et),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: v(Et),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: v(He),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: v(He),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: v(He),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: v(He),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: v(He),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: v(He),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: v(He),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: v(He),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: v(),
  /**
  Deleted text.
  */
  deleted: v(),
  /**
  Changed text.
  */
  changed: v(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: v(),
  /**
  Metadata or meta-instruction.
  */
  meta: zn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: v(zn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: v(zn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: v(zn),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: Me.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: Me.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: Me.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: Me.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: Me.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: Me.defineModifier("special")
};
for (let r in g) {
  let e = g[r];
  e instanceof Me && (e.name = r);
}
tp([
  { tag: g.link, class: "tok-link" },
  { tag: g.heading, class: "tok-heading" },
  { tag: g.emphasis, class: "tok-emphasis" },
  { tag: g.strong, class: "tok-strong" },
  { tag: g.keyword, class: "tok-keyword" },
  { tag: g.atom, class: "tok-atom" },
  { tag: g.bool, class: "tok-bool" },
  { tag: g.url, class: "tok-url" },
  { tag: g.labelName, class: "tok-labelName" },
  { tag: g.inserted, class: "tok-inserted" },
  { tag: g.deleted, class: "tok-deleted" },
  { tag: g.literal, class: "tok-literal" },
  { tag: g.string, class: "tok-string" },
  { tag: g.number, class: "tok-number" },
  { tag: [g.regexp, g.escape, g.special(g.string)], class: "tok-string2" },
  { tag: g.variableName, class: "tok-variableName" },
  { tag: g.local(g.variableName), class: "tok-variableName tok-local" },
  { tag: g.definition(g.variableName), class: "tok-variableName tok-definition" },
  { tag: g.special(g.variableName), class: "tok-variableName2" },
  { tag: g.definition(g.propertyName), class: "tok-propertyName tok-definition" },
  { tag: g.typeName, class: "tok-typeName" },
  { tag: g.namespace, class: "tok-namespace" },
  { tag: g.className, class: "tok-className" },
  { tag: g.macroName, class: "tok-macroName" },
  { tag: g.propertyName, class: "tok-propertyName" },
  { tag: g.operator, class: "tok-operator" },
  { tag: g.comment, class: "tok-comment" },
  { tag: g.meta, class: "tok-meta" },
  { tag: g.invalid, class: "tok-invalid" },
  { tag: g.punctuation, class: "tok-punctuation" }
]);
var Co;
const bt = /* @__PURE__ */ new C();
function bo(r) {
  return M.define({
    combine: r ? (e) => e.concat(r) : void 0
  });
}
c(bo, "defineLanguageFacet");
const uh = /* @__PURE__ */ new C(), zf = class zf {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], n = "") {
    this.data = e, this.name = n, J.prototype.hasOwnProperty("tree") || Object.defineProperty(J.prototype, "tree", { get() {
      return H(this);
    } }), this.parser = t, this.extension = [
      qi.of(this),
      J.languageData.of((s, o, l) => {
        let a = Au(s, o, l), h = a.type.prop(bt);
        if (!h)
          return [];
        let f = s.facet(h), u = a.type.prop(uh);
        if (u) {
          let O = a.resolve(o - a.from, l);
          for (let d of u)
            if (d.test(O, s)) {
              let p = s.facet(d.facet);
              return d.type == "replace" ? p : p.concat(f);
            }
        }
        return f;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(e, t, i = -1) {
    return Au(e, t, i).type.prop(bt) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(qi);
    if (t?.data == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], n = /* @__PURE__ */ c((s, o) => {
      if (s.prop(bt) == this.data) {
        i.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(C.mounted);
      if (l) {
        if (l.tree.prop(bt) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let h = s.children[a];
        h instanceof E && n(h, s.positions[a] + o);
      }
    }, "explore");
    return n(H(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
};
c(zf, "Language");
let ge = zf;
ge.setState = /* @__PURE__ */ I.define();
function Au(r, e, t) {
  let i = r.facet(qi), n = H(r).topNode;
  if (!i || i.allowsNesting)
    for (let s = n; s; s = s.enter(e, t, B.ExcludeBuffers))
      s.type.isTop && (n = s);
  return n;
}
c(Au, "topNodeAt");
const Vr = class Vr extends ge {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = bo(e.languageData);
    return new Vr(t, e.parser.configure({
      props: [bt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new Vr(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
};
c(Vr, "LRLanguage");
let ln = Vr;
function H(r) {
  let e = r.field(ge.state, !1);
  return e ? e.tree : E.empty;
}
c(H, "syntaxTree");
const jf = class jf {
  /**
  Create an input object for the given document.
  */
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
};
c(jf, "DocInput");
let fa = jf, sr = null;
const Wr = class Wr {
  constructor(e, t, i = [], n, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = n, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Wr(e, t, [], E.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new fa(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != E.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let n = Date.now() + e;
        e = /* @__PURE__ */ c(() => Date.now() > n, "until");
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(Pt.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (e())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Pt.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let t = sr;
    sr = this;
    try {
      return e();
    } finally {
      sr = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Lu(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: n, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, f, u, O) => a.push({ fromA: h, toA: f, fromB: u, toB: O })), i = Pt.applyChanges(i, a), n = E.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let f = e.mapPos(h.from, 1), u = e.mapPos(h.to, -1);
          f < u && l.push({ from: f, to: u });
        }
      }
    }
    return new Wr(this.parser, t, i, n, s, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: s } = this.skipped[i];
      n < e.to && s > e.from && (this.fragments = Lu(this.fragments, n, s), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(e) {
    return new class extends zi {
      createParse(t, i, n) {
        let s = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = sr;
            if (a) {
              for (let h of n)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new E(te.none, [], [], o - s);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return sr;
  }
};
c(Wr, "ParseContext");
let ji = Wr;
function Lu(r, e, t) {
  return Pt.applyChanges(r, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
c(Lu, "cutFragments");
const Ur = class Ur {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Ur(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = ji.create(e.facet(qi).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Ur(i);
  }
};
c(Ur, "LanguageState");
let an = Ur;
ge.state = /* @__PURE__ */ Ue.define({
  create: an.init,
  update(r, e) {
    for (let t of e.effects)
      if (t.is(ge.setState))
        return t.value;
    return e.startState.facet(qi) != e.state.facet(qi) ? an.init(e.state) : r.apply(e);
  }
});
let ip = /* @__PURE__ */ c((r) => {
  let e = setTimeout(
    () => r(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
}, "requestIdle");
typeof requestIdleCallback < "u" && (ip = /* @__PURE__ */ c((r) => {
  let e = -1, t = setTimeout(
    () => {
      e = requestIdleCallback(r, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
}, "requestIdle"));
const Xo = typeof navigator < "u" && (!((Co = navigator.scheduling) === null || Co === void 0) && Co.isInputPending) ? () => navigator.scheduling.isInputPending() : null;
var Mi;
const E1 = /* @__PURE__ */ ze.fromClass((Mi = class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(ge.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(ge.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = ip(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, s = i.field(ge.state);
    if (s.tree == s.context.tree && s.context.isDone(
      n + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !Xo ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < n && i.doc.length > n + 1e3, a = s.context.work(() => Xo && Xo() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: ge.setState.of(new an(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Re(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, c(Mi, "ParseWorker"), Mi), {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), qi = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? r[0] : null;
  },
  enables: /* @__PURE__ */ c((r) => [
    ge.state,
    E1,
    Z.contentAttributes.compute([r], (e) => {
      let t = e.facet(r);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ], "enables")
}), qf = class qf {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
};
c(qf, "LanguageSupport");
let Mt = qf;
const ho = class ho {
  constructor(e, t, i, n, s, o = void 0) {
    this.name = e, this.alias = t, this.extensions = i, this.filename = n, this.loadFunc = s, this.support = o, this.loading = null;
  }
  /**
  Start loading the the language. Will return a promise that
  resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
  object when the language successfully loads.
  */
  load() {
    return this.loading || (this.loading = this.loadFunc().then((e) => this.support = e, (e) => {
      throw this.loading = null, e;
    }));
  }
  /**
  Create a language description.
  */
  static of(e) {
    let { load: t, support: i } = e;
    if (!t) {
      if (!i)
        throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
      t = /* @__PURE__ */ c(() => Promise.resolve(i), "load");
    }
    return new ho(e.name, (e.alias || []).concat(e.name).map((n) => n.toLowerCase()), e.extensions || [], e.filename, t, i);
  }
  /**
  Look for a language in the given array of descriptions that
  matches the filename. Will first match
  [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
  and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
  and return the first language that matches.
  */
  static matchFilename(e, t) {
    for (let n of e)
      if (n.filename && n.filename.test(t))
        return n;
    let i = /\.([^.]+)$/.exec(t);
    if (i) {
      for (let n of e)
        if (n.extensions.indexOf(i[1]) > -1)
          return n;
    }
    return null;
  }
  /**
  Look for a language whose name or alias matches the the given
  name (case-insensitively). If `fuzzy` is true, and no direct
  matchs is found, this'll also search for a language whose name
  or alias occurs in the string (for names shorter than three
  characters, only when surrounded by non-word characters).
  */
  static matchLanguageName(e, t, i = !0) {
    t = t.toLowerCase();
    for (let n of e)
      if (n.alias.some((s) => s == t))
        return n;
    if (i)
      for (let n of e)
        for (let s of n.alias) {
          let o = t.indexOf(s);
          if (o > -1 && (s.length > 2 || !/\w/.test(t[o - 1]) && !/\w/.test(t[o + s.length])))
            return n;
        }
    return null;
  }
};
c(ho, "LanguageDescription");
let S = ho;
const Y1 = /* @__PURE__ */ M.define(), wn = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => {
    if (!r.length)
      return "  ";
    let e = r[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(r[0]));
    return e;
  }, "combine")
});
function hi(r) {
  let e = r.facet(wn);
  return e.charCodeAt(0) == 9 ? r.tabSize * e.length : e.length;
}
c(hi, "getIndentUnit");
function ws(r, e) {
  let t = "", i = r.tabSize, n = r.facet(wn)[0];
  if (n == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    n = " ";
  }
  for (let s = 0; s < e; s++)
    t += n;
  return t;
}
c(ws, "indentString");
function rp(r, e) {
  r instanceof J && (r = new Di(r));
  for (let i of r.state.facet(Y1)) {
    let n = i(r, e);
    if (n !== void 0)
      return n;
  }
  let t = H(r.state);
  return t.length >= e ? V1(r, t, e) : null;
}
c(rp, "getIndentation");
const Df = class Df {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = hi(e);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: n, simulateDoubleBreak: s } = this.options;
    return n != null && n >= i.from && n <= i.to ? s && n == e ? { text: "", from: e } : (t < 0 ? n < e : n <= e) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(e, t);
    return i.slice(e - n, Math.min(i.length, e + 100 - n));
  }
  /**
  Find the column for the given position.
  */
  column(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), s = this.countColumn(i, e - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, t = e.length) {
    return Ot(e, this.state.tabSize, t);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, t = 1) {
    let { text: i, from: n } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
};
c(Df, "IndentContext");
let Di = Df;
const er = /* @__PURE__ */ new C();
function V1(r, e, t) {
  let i = e.resolveStack(t), n = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (n != i.node) {
    let s = [];
    for (let o = n; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      i = { node: s[o], next: i };
  }
  return np(i, r, t);
}
c(V1, "syntaxIndentation");
function np(r, e, t) {
  for (let i = r; i; i = i.next) {
    let n = U1(i.node);
    if (n)
      return n(ca.create(e, t, i));
  }
  return 0;
}
c(np, "indentFor");
function W1(r) {
  return r.pos == r.options.simulateBreak && r.options.simulateDoubleBreak;
}
c(W1, "ignoreClosed");
function U1(r) {
  let e = r.type.prop(er);
  if (e)
    return e;
  let t = r.firstChild, i;
  if (t && (i = t.type.prop(C.closedBy))) {
    let n = r.lastChild, s = n && i.indexOf(n.name) > -1;
    return (o) => sp(o, !0, 1, void 0, s && !W1(o) ? n.from : void 0);
  }
  return r.parent == null ? I1 : null;
}
c(U1, "indentStrategy");
function I1() {
  return 0;
}
c(I1, "topIndent");
const fo = class fo extends Di {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new fo(e, t, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (z1(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return np(this.context.next, this.base, this.pos);
  }
};
c(fo, "TreeIndentContext");
let ca = fo;
function z1(r, e) {
  for (let t = e; t; t = t.parent)
    if (r == t)
      return !0;
  return !1;
}
c(z1, "isParent");
function j1(r) {
  let e = r.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let n = r.options.simulateBreak, s = r.state.doc.lineAt(t.from), o = n == null || n <= s.from ? s.to : Math.min(s.to, n);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
c(j1, "bracketedAligned");
function q1({ closing: r, align: e = !0, units: t = 1 }) {
  return (i) => sp(i, e, t, r);
}
c(q1, "delimitedIndent");
function sp(r, e, t, i, n) {
  let s = r.textAfter, o = s.match(/^\s*/)[0].length, l = i && s.slice(o, o + i.length) == i || n == r.pos + o, a = e ? j1(r) : null;
  return a ? l ? r.column(a.from) : r.column(a.to) : r.baseIndent + (l ? 0 : r.unit * t);
}
c(sp, "delimitedStrategy");
const D1 = /* @__PURE__ */ c((r) => r.baseIndent, "flatIndent");
function es({ except: r, units: e = 1 } = {}) {
  return (t) => {
    let i = r && r.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
c(es, "continuedIndent");
const B1 = /* @__PURE__ */ M.define(), xn = /* @__PURE__ */ new C();
function op(r) {
  let e = r.firstChild, t = r.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? r.to : t.from } : null;
}
c(op, "foldInside");
const co = class co {
  constructor(e, t) {
    this.specs = e;
    let i;
    function n(l) {
      let a = rt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    c(n, "def");
    const s = typeof t.all == "string" ? t.all : t.all ? n(t.all) : void 0, o = t.scope;
    this.scope = o instanceof ge ? (l) => l.prop(bt) == o.data : o ? (l) => l == o : void 0, this.style = tp(e.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = i ? new rt(i) : null, this.themeType = t.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(e, t) {
    return new co(e, t || {});
  }
};
c(co, "HighlightStyle");
let xs = co;
const ua = /* @__PURE__ */ M.define(), lp = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? [r[0]] : null;
  }
});
function Eo(r) {
  let e = r.facet(ua);
  return e.length ? e : r.facet(lp);
}
c(Eo, "getHighlighters");
function N1(r, e) {
  let t = [G1], i;
  return r instanceof xs && (r.module && t.push(Z.styleModule.of(r.module)), i = r.themeType), e?.fallback ? t.push(lp.of(r)) : i ? t.push(ua.computeN([Z.darkTheme], (n) => n.facet(Z.darkTheme) == (i == "dark") ? [r] : [])) : t.push(ua.of(r)), t;
}
c(N1, "syntaxHighlighting");
const Bf = class Bf {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = H(e.state), this.decorations = this.buildDeco(e, Eo(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = H(e.state), i = Eo(e.state), n = i != Eo(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !n && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || n) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return z.none;
    let i = new Yi();
    for (let { from: n, to: s } of e.visibleRanges)
      C1(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = z.mark({ class: a })));
      }, n, s);
    return i.finish();
  }
};
c(Bf, "TreeHighlighter");
let Oa = Bf;
const G1 = /* @__PURE__ */ ci.high(/* @__PURE__ */ ze.fromClass(Oa, {
  decorations: /* @__PURE__ */ c((r) => r.decorations, "decorations")
})), F1 = 1e4, H1 = "()[]{}", ap = /* @__PURE__ */ new C();
function da(r, e, t) {
  let i = r.prop(e < 0 ? C.openedBy : C.closedBy);
  if (i)
    return i;
  if (r.name.length == 1) {
    let n = t.indexOf(r.name);
    if (n > -1 && n % 2 == (e < 0 ? 1 : 0))
      return [t[n + e]];
  }
  return null;
}
c(da, "matchingNodes");
function pa(r) {
  let e = r.type.prop(ap);
  return e ? e(r.node) : r;
}
c(pa, "findHandle");
function gi(r, e, t, i = {}) {
  let n = i.maxScanDistance || F1, s = i.brackets || H1, o = H(r), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = da(a.type, t, s);
    if (h && a.from < a.to) {
      let f = pa(a);
      if (f && (t > 0 ? e >= f.from && e < f.to : e > f.from && e <= f.to))
        return K1(r, e, t, a, f, h, s);
    }
  }
  return J1(r, e, t, o, l.type, n, s);
}
c(gi, "matchBrackets");
function K1(r, e, t, i, n, s, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, f = l?.cursor();
  if (f && (t < 0 ? f.childBefore(i.from) : f.childAfter(i.to)))
    do
      if (t < 0 ? f.to <= i.from : f.from >= i.to) {
        if (h == 0 && s.indexOf(f.type.name) > -1 && f.from < f.to) {
          let u = pa(f);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (da(f.type, t, o))
          h++;
        else if (da(f.type, -t, o)) {
          if (h == 0) {
            let u = pa(f);
            return {
              start: a,
              end: u && u.from < u.to ? { from: u.from, to: u.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (t < 0 ? f.prevSibling() : f.nextSibling());
  return { start: a, matched: !1 };
}
c(K1, "matchMarkedBrackets");
function J1(r, e, t, i, n, s, o) {
  let l = t < 0 ? r.sliceDoc(e - 1, e) : r.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, f = r.doc.iterRange(e, t > 0 ? r.doc.length : 0), u = 0;
  for (let O = 0; !f.next().done && O <= s; ) {
    let d = f.value;
    t < 0 && (O += d.length);
    let p = e + O * t;
    for (let m = t > 0 ? 0 : d.length - 1, Q = t > 0 ? d.length : -1; m != Q; m += t) {
      let y = o.indexOf(d[m]);
      if (!(y < 0 || i.resolveInner(p + m, 1).type != n))
        if (y % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: y >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (O += d.length);
  }
  return f.done ? { start: h, matched: !1 } : null;
}
c(J1, "matchPlainBrackets");
function _u(r, e, t, i = 0, n = 0) {
  e == null && (e = r.search(/[^\s\u00a0]/), e == -1 && (e = r.length));
  let s = n;
  for (let o = i; o < e; o++)
    r.charCodeAt(o) == 9 ? s += t - s % t : s++;
  return s;
}
c(_u, "countCol");
const Nf = class Nf {
  /**
  Create a stream.
  */
  constructor(e, t, i, n) {
    this.string = e, this.tabSize = t, this.indentUnit = i, this.overrideIndent = n, this.pos = 0, this.start = 0, this.lastColumnPos = 0, this.lastColumnValue = 0;
  }
  /**
  True if we are at the end of the line.
  */
  eol() {
    return this.pos >= this.string.length;
  }
  /**
  True if we are at the start of the line.
  */
  sol() {
    return this.pos == 0;
  }
  /**
  Get the next code unit after the current position, or undefined
  if we're at the end of the line.
  */
  peek() {
    return this.string.charAt(this.pos) || void 0;
  }
  /**
  Read the next code unit and advance `this.pos`.
  */
  next() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++);
  }
  /**
  Match the next character against the given string, regular
  expression, or predicate. Consume and return it if it matches.
  */
  eat(e) {
    let t = this.string.charAt(this.pos), i;
    if (typeof e == "string" ? i = t == e : i = t && (e instanceof RegExp ? e.test(t) : e(t)), i)
      return ++this.pos, t;
  }
  /**
  Continue matching characters that match the given string,
  regular expression, or predicate function. Return true if any
  characters were consumed.
  */
  eatWhile(e) {
    let t = this.pos;
    for (; this.eat(e); )
      ;
    return this.pos > t;
  }
  /**
  Consume whitespace ahead of `this.pos`. Return true if any was
  found.
  */
  eatSpace() {
    let e = this.pos;
    for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
      ++this.pos;
    return this.pos > e;
  }
  /**
  Move to the end of the line.
  */
  skipToEnd() {
    this.pos = this.string.length;
  }
  /**
  Move to directly before the given character, if found on the
  current line.
  */
  skipTo(e) {
    let t = this.string.indexOf(e, this.pos);
    if (t > -1)
      return this.pos = t, !0;
  }
  /**
  Move back `n` characters.
  */
  backUp(e) {
    this.pos -= e;
  }
  /**
  Get the column position at `this.pos`.
  */
  column() {
    return this.lastColumnPos < this.start && (this.lastColumnValue = _u(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  /**
  Get the indentation column of the current line.
  */
  indentation() {
    var e;
    return (e = this.overrideIndent) !== null && e !== void 0 ? e : _u(this.string, null, this.tabSize);
  }
  /**
  Match the input against the given string or regular expression
  (which should start with a `^`). Return true or the regexp match
  if it matches.
  
  Unless `consume` is set to `false`, this will move `this.pos`
  past the matched text.
  
  When matching a string `caseInsensitive` can be set to true to
  make the match case-insensitive.
  */
  match(e, t, i) {
    if (typeof e == "string") {
      let n = /* @__PURE__ */ c((o) => i ? o.toLowerCase() : o, "cased"), s = this.string.substr(this.pos, e.length);
      return n(s) == n(e) ? (t !== !1 && (this.pos += e.length), !0) : null;
    } else {
      let n = this.string.slice(this.pos).match(e);
      return n && n.index > 0 ? null : (n && t !== !1 && (this.pos += n[0].length), n);
    }
  }
  /**
  Get the current token.
  */
  current() {
    return this.string.slice(this.start, this.pos);
  }
};
c(Nf, "StringStream");
let Ps = Nf;
function eQ(r) {
  return {
    name: r.name || "",
    token: r.token,
    blankLine: r.blankLine || (() => {
    }),
    startState: r.startState || (() => !0),
    copyState: r.copyState || tQ,
    indent: r.indent || (() => null),
    languageData: r.languageData || {},
    tokenTable: r.tokenTable || dh,
    mergeTokens: r.mergeTokens !== !1
  };
}
c(eQ, "fullParser");
function tQ(r) {
  if (typeof r != "object")
    return r;
  let e = {};
  for (let t in r) {
    let i = r[t];
    e[t] = i instanceof Array ? i.slice() : i;
  }
  return e;
}
c(tQ, "defaultCopyState");
const Mu = /* @__PURE__ */ new WeakMap(), uo = class uo extends ge {
  constructor(e) {
    let t = bo(e.languageData), i = eQ(e), n, s = new class extends zi {
      createParse(o, l, a) {
        return new rQ(n, o, l, a);
      }
    }();
    super(t, s, [], e.name), this.topNode = oQ(t, this), n = this, this.streamParser = i, this.stateAfter = new C({ perNode: !0 }), this.tokenTable = e.tokenTable ? new ks(i.tokenTable) : sQ;
  }
  /**
  Define a stream language.
  */
  static define(e) {
    return new uo(e);
  }
  /**
  @internal
  */
  getIndent(e) {
    let t, { overrideIndentation: i } = e.options;
    i && (t = Mu.get(e.state), t != null && t < e.pos - 1e4 && (t = void 0));
    let n = Oh(this, e.node.tree, e.node.from, e.node.from, t ?? e.pos), s, o;
    if (n ? (o = n.state, s = n.pos + 1) : (o = this.streamParser.startState(e.unit), s = e.node.from), e.pos - s > 1e4)
      return null;
    for (; s < e.pos; ) {
      let a = e.state.doc.lineAt(s), h = Math.min(e.pos, a.to);
      if (a.length) {
        let f = i ? i(a.from) : -1, u = new Ps(a.text, e.state.tabSize, e.unit, f < 0 ? void 0 : f);
        for (; u.pos < h - a.from; )
          fp(this.streamParser.token, u, o);
      } else
        this.streamParser.blankLine(o, e.unit);
      if (h == e.pos)
        break;
      s = a.to + 1;
    }
    let l = e.lineAt(e.pos);
    return i && t == null && Mu.set(e.state, l.from), this.streamParser.indent(o, /^\s*(.*)/.exec(l.text)[1], e);
  }
  get allowsNesting() {
    return !1;
  }
};
c(uo, "StreamLanguage");
let ma = uo;
function Oh(r, e, t, i, n) {
  let s = t >= i && t + e.length <= n && e.prop(r.stateAfter);
  if (s)
    return { state: r.streamParser.copyState(s), pos: t + e.length };
  for (let o = e.children.length - 1; o >= 0; o--) {
    let l = e.children[o], a = t + e.positions[o], h = l instanceof E && a < n && Oh(r, l, a, i, n);
    if (h)
      return h;
  }
  return null;
}
c(Oh, "findState");
function hp(r, e, t, i, n) {
  if (n && t <= 0 && i >= e.length)
    return e;
  !n && t == 0 && e.type == r.topNode && (n = !0);
  for (let s = e.children.length - 1; s >= 0; s--) {
    let o = e.positions[s], l = e.children[s], a;
    if (o < i && l instanceof E) {
      if (!(a = hp(r, l, t - o, i - o, n)))
        break;
      return n ? new E(e.type, e.children.slice(0, s).concat(a), e.positions.slice(0, s + 1), o + a.length) : a;
    }
  }
  return null;
}
c(hp, "cutTree");
function iQ(r, e, t, i, n) {
  for (let s of e) {
    let o = s.from + (s.openStart ? 25 : 0), l = s.to - (s.openEnd ? 25 : 0), a = o <= t && l > t && Oh(r, s.tree, 0 - s.offset, t, l), h;
    if (a && a.pos <= i && (h = hp(r, s.tree, t + s.offset, a.pos + s.offset, !1)))
      return { state: a.state, tree: h };
  }
  return { state: r.streamParser.startState(n ? hi(n) : 4), tree: E.empty };
}
c(iQ, "findStartInFragments");
var Zi;
let rQ = (Zi = class {
  constructor(e, t, i, n) {
    this.lang = e, this.input = t, this.fragments = i, this.ranges = n, this.stoppedAt = null, this.chunks = [], this.chunkPos = [], this.chunk = [], this.chunkReused = void 0, this.rangeIndex = 0, this.to = n[n.length - 1].to;
    let s = ji.get(), o = n[0].from, { state: l, tree: a } = iQ(e, i, o, this.to, s?.state);
    this.state = l, this.parsedPos = this.chunkStart = o + a.length;
    for (let h = 0; h < a.children.length; h++)
      this.chunks.push(a.children[h]), this.chunkPos.push(a.positions[h]);
    s && this.parsedPos < s.viewport.from - 1e5 && n.some((h) => h.from <= s.viewport.from && h.to >= s.viewport.from) && (this.state = this.lang.streamParser.startState(hi(s.state)), s.skipUntilInView(this.parsedPos, s.viewport.from), this.parsedPos = s.viewport.from), this.moveRangeIndex();
  }
  advance() {
    let e = ji.get(), t = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt), i = Math.min(
      t,
      this.chunkStart + 512
      /* C.ChunkSize */
    );
    for (e && (i = Math.min(i, e.viewport.to)); this.parsedPos < i; )
      this.parseLine(e);
    return this.chunkStart < this.parsedPos && this.finishChunk(), this.parsedPos >= t ? this.finish() : e && this.parsedPos >= e.viewport.to ? (e.skipUntilInView(this.parsedPos, t), this.finish()) : null;
  }
  stopAt(e) {
    this.stoppedAt = e;
  }
  lineAfter(e) {
    let t = this.input.chunk(e);
    if (this.input.lineChunks)
      t == `
` && (t = "");
    else {
      let i = t.indexOf(`
`);
      i > -1 && (t = t.slice(0, i));
    }
    return e + t.length <= this.to ? t : t.slice(0, this.to - e);
  }
  nextLine() {
    let e = this.parsedPos, t = this.lineAfter(e), i = e + t.length;
    for (let n = this.rangeIndex; ; ) {
      let s = this.ranges[n].to;
      if (s >= i || (t = t.slice(0, s - (i - t.length)), n++, n == this.ranges.length))
        break;
      let o = this.ranges[n].from, l = this.lineAfter(o);
      t += l, i = o + l.length;
    }
    return { line: t, end: i };
  }
  skipGapsTo(e, t, i) {
    for (; ; ) {
      let n = this.ranges[this.rangeIndex].to, s = e + t;
      if (i > 0 ? n > s : n >= s)
        break;
      let o = this.ranges[++this.rangeIndex].from;
      t += o - n;
    }
    return t;
  }
  moveRangeIndex() {
    for (; this.ranges[this.rangeIndex].to < this.parsedPos; )
      this.rangeIndex++;
  }
  emitToken(e, t, i, n) {
    let s = 4;
    if (this.ranges.length > 1) {
      n = this.skipGapsTo(t, n, 1), t += n;
      let l = this.chunk.length;
      n = this.skipGapsTo(i, n, -1), i += n, s += this.chunk.length - l;
    }
    let o = this.chunk.length - 4;
    return this.lang.streamParser.mergeTokens && s == 4 && o >= 0 && this.chunk[o] == e && this.chunk[o + 2] == t ? this.chunk[o + 2] = i : this.chunk.push(e, t, i, s), n;
  }
  parseLine(e) {
    let { line: t, end: i } = this.nextLine(), n = 0, { streamParser: s } = this.lang, o = new Ps(t, e ? e.state.tabSize : 4, e ? hi(e.state) : 2);
    if (o.eol())
      s.blankLine(this.state, o.indentUnit);
    else
      for (; !o.eol(); ) {
        let l = fp(s.token, o, this.state);
        if (l && (n = this.emitToken(this.lang.tokenTable.resolve(l), this.parsedPos + o.start, this.parsedPos + o.pos, n)), o.start > 1e4)
          break;
      }
    this.parsedPos = i, this.moveRangeIndex(), this.parsedPos < this.to && this.parsedPos++;
  }
  finishChunk() {
    let e = E.build({
      buffer: this.chunk,
      start: this.chunkStart,
      length: this.parsedPos - this.chunkStart,
      nodeSet: nQ,
      topID: 0,
      maxBufferLength: 512,
      reused: this.chunkReused
    });
    e = new E(e.type, e.children, e.positions, e.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]), this.chunks.push(e), this.chunkPos.push(this.chunkStart - this.ranges[0].from), this.chunk = [], this.chunkReused = void 0, this.chunkStart = this.parsedPos;
  }
  finish() {
    return new E(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
  }
}, c(Zi, "Parse"), Zi);
function fp(r, e, t) {
  e.start = e.pos;
  for (let i = 0; i < 10; i++) {
    let n = r(e, t);
    if (e.pos > e.start)
      return n;
  }
  throw new Error("Stream parser failed to advance stream.");
}
c(fp, "readToken$1");
const dh = /* @__PURE__ */ Object.create(null), hn = [te.none], nQ = /* @__PURE__ */ new Ui(hn), Zu = [], Cu = /* @__PURE__ */ Object.create(null), cp = /* @__PURE__ */ Object.create(null);
for (let [r, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  cp[r] = /* @__PURE__ */ up(dh, e);
const Gf = class Gf {
  constructor(e) {
    this.extra = e, this.table = Object.assign(/* @__PURE__ */ Object.create(null), cp);
  }
  resolve(e) {
    return e ? this.table[e] || (this.table[e] = up(this.extra, e)) : 0;
  }
};
c(Gf, "TokenTable");
let ks = Gf;
const sQ = /* @__PURE__ */ new ks(dh);
function Yo(r, e) {
  Zu.indexOf(r) > -1 || (Zu.push(r), console.warn(e));
}
c(Yo, "warnForPart");
function up(r, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let f = r[h] || g[h];
      f ? typeof f == "function" ? a.length ? a = a.map(f) : Yo(h, `Modifier ${h} used at start of tag`) : a.length ? Yo(h, `Tag ${h} used as modifier`) : a = Array.isArray(f) ? f : [f] : Yo(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), n = i + " " + t.map((l) => l.id), s = Cu[n];
  if (s)
    return s.id;
  let o = Cu[n] = te.define({
    id: hn.length,
    name: i,
    props: [Ji({ [i]: t })]
  });
  return hn.push(o), o.id;
}
c(up, "createTokenType");
function oQ(r, e) {
  let t = te.define({ id: hn.length, name: "Document", props: [
    bt.add(() => r),
    er.add(() => (i) => e.getIndent(i))
  ], top: !0 });
  return hn.push(t), t;
}
c(oQ, "docID");
ee.RTL, ee.LTR;
const Ff = class Ff {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(e, t, i, n) {
    this.state = e, this.pos = t, this.explicit = i, this.view = n, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(e) {
    let t = H(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), n = t.text.slice(i - t.from, this.pos - t.from), s = n.search(dp(e, !1));
    return s < 0 ? null : { from: i + s, to: this.pos, text: n.slice(s) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
};
c(Ff, "CompletionContext");
let Bi = Ff;
function Xu(r) {
  let e = Object.keys(r).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
c(Xu, "toSet");
function lQ(r) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of r) {
    e[n[0]] = !0;
    for (let s = 1; s < n.length; s++)
      t[n[s]] = !0;
  }
  let i = Xu(e) + Xu(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
c(lQ, "prefixMatch");
function Op(r) {
  let e = r.map((n) => typeof n == "string" ? { label: n } : n), [t, i] = e.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : lQ(e);
  return (n) => {
    let s = n.matchBefore(i);
    return s || n.explicit ? { from: s ? s.from : n.pos, options: e, validFor: t } : null;
  };
}
c(Op, "completeFromList");
function aQ(r, e) {
  return (t) => {
    for (let i = H(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (r.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
c(aQ, "ifNotIn");
const Hf = class Hf {
  constructor(e, t, i, n) {
    this.completion = e, this.source = t, this.match = i, this.score = n;
  }
};
c(Hf, "Option");
let $s = Hf;
function ei(r) {
  return r.selection.main.from;
}
c(ei, "cur");
function dp(r, e) {
  var t;
  let { source: i } = r, n = e && i[0] != "^", s = i[i.length - 1] != "$";
  return !n && !s ? r : new RegExp(`${n ? "^" : ""}(?:${i})${s ? "$" : ""}`, (t = r.flags) !== null && t !== void 0 ? t : r.ignoreCase ? "i" : "");
}
c(dp, "ensureAnchor");
const ph = /* @__PURE__ */ Ie.define();
function hQ(r, e, t, i) {
  let { main: n } = r.selection, s = t - n.from, o = i - n.from;
  return {
    ...r.changeByRange((l) => {
      if (l != n && t != i && r.sliceDoc(l.from + s, l.from + o) != r.sliceDoc(t, i))
        return { range: l };
      let a = r.toText(e);
      return {
        changes: { from: l.from + s, to: i == n.from ? l.to : l.from + o, insert: a },
        range: k.cursor(l.from + s + a.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
c(hQ, "insertCompletionText");
const Eu = /* @__PURE__ */ new WeakMap();
function fQ(r) {
  if (!Array.isArray(r))
    return r;
  let e = Eu.get(r);
  return e || Eu.set(r, e = Op(r)), e;
}
c(fQ, "asSource");
const Rs = /* @__PURE__ */ I.define(), fn = /* @__PURE__ */ I.define(), Kf = class Kf {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Vt(e, t), n = Oi(i);
      this.chars.push(i);
      let s = e.slice(t, t + n), o = s.toUpperCase();
      this.folded.push(Vt(o == s ? s.toLowerCase() : o, 0)), t += n;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: n, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let b = Vt(e, 0), x = Oi(b), R = x == e.length ? 0 : -100;
      if (b != t[0]) if (b == i[0])
        R += -200;
      else
        return null;
      return this.ret(R, [0, x]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let b = 0, x = Math.min(e.length, 200); b < x && h < a; ) {
        let R = Vt(e, b);
        (R == t[h] || R == i[h]) && (n[h++] = b), b += Oi(R);
      }
      if (h < a)
        return null;
    }
    let f = 0, u = 0, O = !1, d = 0, p = -1, m = -1, Q = /[a-z]/.test(e), y = !0;
    for (let b = 0, x = Math.min(e.length, 200), R = 0; b < x && u < a; ) {
      let $ = Vt(e, b);
      l < 0 && (f < a && $ == t[f] && (s[f++] = b), d < a && ($ == t[d] || $ == i[d] ? (d == 0 && (p = b), m = b + 1, d++) : d = 0));
      let A, L = $ < 255 ? $ >= 48 && $ <= 57 || $ >= 97 && $ <= 122 ? 2 : $ >= 65 && $ <= 90 ? 1 : 0 : (A = Lg($)) != A.toLowerCase() ? 1 : A != A.toUpperCase() ? 2 : 0;
      (!b || L == 1 && Q || R == 0 && L != 0) && (t[u] == $ || i[u] == $ && (O = !0) ? o[u++] = b : o.length && (y = !1)), R = L, b += Oi($);
    }
    return u == a && o[0] == 0 && y ? this.result(-100 + (O ? -200 : 0), o, e) : d == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - e.length, [p, m]) : u == a ? this.result(-100 + (O ? -200 : 0) + -700 + (y ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, e);
  }
  result(e, t, i) {
    let n = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? Oi(Vt(i, o)) : 1);
      s && n[s - 1] == o ? n[s - 1] = l : (n[s++] = o, n[s++] = l);
    }
    return this.ret(e - i.length, n);
  }
};
c(Kf, "FuzzyMatcher");
let ga = Kf;
const Jf = class Jf {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
};
c(Jf, "StrictMatcher");
let Qa = Jf;
const ie = /* @__PURE__ */ M.define({
  combine(r) {
    return HO(r, {
      activateOnTyping: !0,
      activateOnCompletion: /* @__PURE__ */ c(() => !1, "activateOnCompletion"),
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: /* @__PURE__ */ c(() => "", "tooltipClass"),
      optionClass: /* @__PURE__ */ c(() => "", "optionClass"),
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: cQ,
      filterStrict: !1,
      compareCompletions: /* @__PURE__ */ c((e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label), "compareCompletions"),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: /* @__PURE__ */ c((e, t) => e && t, "defaultKeymap"),
      closeOnBlur: /* @__PURE__ */ c((e, t) => e && t, "closeOnBlur"),
      icons: /* @__PURE__ */ c((e, t) => e && t, "icons"),
      tooltipClass: /* @__PURE__ */ c((e, t) => (i) => Yu(e(i), t(i)), "tooltipClass"),
      optionClass: /* @__PURE__ */ c((e, t) => (i) => Yu(e(i), t(i)), "optionClass"),
      addToOptions: /* @__PURE__ */ c((e, t) => e.concat(t), "addToOptions"),
      filterStrict: /* @__PURE__ */ c((e, t) => e || t, "filterStrict")
    });
  }
});
function Yu(r, e) {
  return r ? e ? r + " " + e : r : e;
}
c(Yu, "joinClass");
function cQ(r, e, t, i, n, s) {
  let o = r.textDirection == ee.RTL, l = o, a = !1, h = "top", f, u, O = e.left - n.left, d = n.right - e.right, p = i.right - i.left, m = i.bottom - i.top;
  if (l && O < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, O) && (l = !0), p <= (l ? O : d))
    f = Math.max(n.top, Math.min(t.top, n.bottom - m)) - e.top, u = Math.min(400, l ? O : d);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : n.right - e.left) - 30
      /* Info.Margin */
    );
    let b = n.bottom - e.bottom;
    b >= m || b > e.top ? f = t.bottom - e.top : (h = "bottom", f = e.bottom - t.top);
  }
  let Q = (e.bottom - e.top) / s.offsetHeight, y = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${f / Q}px; max-width: ${u / y}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
c(cQ, "defaultPositionInfo");
function uQ(r) {
  let e = r.addToOptions.slice();
  return r.icons && e.push({
    render(t) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), e.push({
    render(t, i, n, s) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = t.displayLabel || t.label, a = 0;
      for (let h = 0; h < s.length; ) {
        let f = s[h++], u = s[h++];
        f > a && o.appendChild(document.createTextNode(l.slice(a, f)));
        let O = o.appendChild(document.createElement("span"));
        O.appendChild(document.createTextNode(l.slice(f, u))), O.className = "cm-completionMatchedText", a = u;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(t) {
      if (!t.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = t.detail, i;
    },
    position: 80
  }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
c(uQ, "optionContent");
function Vo(r, e, t) {
  if (r <= t)
    return { from: 0, to: r };
  if (e < 0 && (e = 0), e <= r >> 1) {
    let n = Math.floor(e / t);
    return { from: n * t, to: (n + 1) * t };
  }
  let i = Math.floor((r - e) / t);
  return { from: r - (i + 1) * t, to: r - i * t };
}
c(Vo, "rangeAroundSelected");
const ec = class ec {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: /* @__PURE__ */ c(() => this.measureInfo(), "read"),
      write: /* @__PURE__ */ c((a) => this.placeInfo(a), "write"),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: s, selected: o } = n.open, l = e.state.facet(ie);
    this.optionContent = uQ(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Vo(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let f = a.target, u; f && f != this.dom; f = f.parentNode)
        if (f.nodeName == "LI" && (u = /-(\d+)$/.exec(f.id)) && +u[1] < h.length) {
          this.applyCompletion(e, h[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(ie).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: fn.of(null) });
    }), this.showOptions(s, n.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), n = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != n) {
      let { options: s, selected: o, disabled: l } = i.open;
      (!n.open || n.open.options != s) && (this.range = Vo(s.length, o, e.state.facet(ie).maxRenderedOptions), this.showOptions(s, i.id)), this.updateSel(), l != ((t = n.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Vo(t.options.length, t.selected, this.view.state.facet(ie).maxRenderedOptions), this.showOptions(t.options, e.id));
    let i = this.updateSelectedOption(t.selected);
    if (i) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected], { info: s } = n;
      if (!s)
        return;
      let o = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!o)
        return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(l, n);
      }).catch((l) => Re(this.view.state, l, "completion info")) : (this.addInfoPane(o, n), i.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: n, destroy: s } = e;
      i.appendChild(n), this.infoDestroy = s || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName != "LI" || !i.id ? n-- : n == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return t && dQ(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return n.top > Math.min(s.bottom, t.bottom) - 10 || n.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(ie).positionInfo(this.view, t, n, i, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const n = document.createElement("ul");
    n.id = t, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions")), n.addEventListener("mousedown", (o) => {
      o.target == n && o.preventDefault();
    });
    let s = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: h } = l;
      if (h) {
        let O = typeof h == "string" ? h : h.name;
        if (O != s && (o > i.from || i.from == 0))
          if (s = O, typeof h != "string" && h.header)
            n.appendChild(h.header(h));
          else {
            let d = n.appendChild(document.createElement("completion-section"));
            d.textContent = O;
          }
      }
      const f = n.appendChild(document.createElement("li"));
      f.id = t + "-" + o, f.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (f.className = u);
      for (let O of this.optionContent) {
        let d = O(l, this.view.state, this.view, a);
        d && f.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < e.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
};
c(ec, "CompletionTooltip");
let ya = ec;
function OQ(r, e) {
  return (t) => new ya(t, r, e);
}
c(OQ, "completionTooltip");
function dQ(r, e) {
  let t = r.getBoundingClientRect(), i = e.getBoundingClientRect(), n = t.height / r.offsetHeight;
  i.top < t.top ? r.scrollTop -= (t.top - i.top) / n : i.bottom > t.bottom && (r.scrollTop += (i.bottom - t.bottom) / n);
}
c(dQ, "scrollIntoView");
function Vu(r) {
  return (r.boost || 0) * 100 + (r.apply ? 10 : 0) + (r.info ? 5 : 0) + (r.type ? 1 : 0);
}
c(Vu, "score");
function pQ(r, e) {
  let t = [], i = null, n = null, s = /* @__PURE__ */ c((f) => {
    t.push(f);
    let { section: u } = f.completion;
    if (u) {
      i || (i = []);
      let O = typeof u == "string" ? u : u.name;
      i.some((d) => d.name == O) || i.push(typeof u == "string" ? { name: O } : u);
    }
  }, "addOption"), o = e.facet(ie);
  for (let f of r)
    if (f.hasResult()) {
      let u = f.result.getMatch;
      if (f.result.filter === !1)
        for (let O of f.result.options)
          s(new $s(O, f.source, u ? u(O) : [], 1e9 - t.length));
      else {
        let O = e.sliceDoc(f.from, f.to), d, p = o.filterStrict ? new Qa(O) : new ga(O);
        for (let m of f.result.options)
          if (d = p.match(m.label)) {
            let Q = m.displayLabel ? u ? u(m, d.matched) : [] : d.matched, y = d.score + (m.boost || 0);
            if (s(new $s(m, f.source, Q, y)), typeof m.section == "object" && m.section.rank === "dynamic") {
              let { name: b } = m.section;
              n || (n = /* @__PURE__ */ Object.create(null)), n[b] = Math.max(y, n[b] || -1e9);
            }
          }
      }
    }
  if (i) {
    let f = /* @__PURE__ */ Object.create(null), u = 0, O = /* @__PURE__ */ c((d, p) => (d.rank === "dynamic" && p.rank === "dynamic" ? n[p.name] - n[d.name] : 0) || (typeof d.rank == "number" ? d.rank : 1e9) - (typeof p.rank == "number" ? p.rank : 1e9) || (d.name < p.name ? -1 : 1), "cmp");
    for (let d of i.sort(O))
      u -= 1e5, f[d.name] = u;
    for (let d of t) {
      let { section: p } = d.completion;
      p && (d.score += f[typeof p == "string" ? p : p.name]);
    }
  }
  let l = [], a = null, h = o.compareCompletions;
  for (let f of t.sort((u, O) => O.score - u.score || h(u.completion, O.completion))) {
    let u = f.completion;
    !a || a.label != u.label || a.detail != u.detail || a.type != null && u.type != null && a.type != u.type || a.apply != u.apply || a.boost != u.boost ? l.push(f) : Vu(f.completion) > Vu(a) && (l[l.length - 1] = f), a = f.completion;
  }
  return l;
}
c(pQ, "sortOptions");
const Nt = class Nt {
  constructor(e, t, i, n, s, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = n, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Nt(this.options, Wu(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, n, s, o) {
    if (n && !o && e.some((h) => h.isPending))
      return n.setDisabled();
    let l = pQ(e, t);
    if (!l.length)
      return n && e.some((h) => h.isPending) ? n.setDisabled() : null;
    let a = t.facet(ie).selectOnOpen ? 0 : -1;
    if (n && n.selected != a && n.selected != -1) {
      let h = n.options[n.selected].completion;
      for (let f = 0; f < l.length; f++)
        if (l[f].completion == h) {
          a = f;
          break;
        }
    }
    return new Nt(l, Wu(i, a), {
      pos: e.reduce((h, f) => f.hasResult() ? Math.min(h, f.from) : h, 1e8),
      create: bQ,
      above: s.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Nt(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Nt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
};
c(Nt, "CompletionDialog");
let Sa = Nt;
const Ir = class Ir {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Ir(yQ, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(ie), s = (i.override || t.languageDataAt("autocomplete", ei(t)).map(fQ)).map((a) => (this.active.find((f) => f.source == a) || new ct(
      a,
      this.active.some(
        (f) => f.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(mh));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !mQ(s, this.active) || l ? o = Sa.build(s, t, this.id, o, i, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new ct(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(mp) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Ir(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? gQ : QQ;
  }
};
c(Ir, "CompletionState");
let ba = Ir;
function mQ(r, e) {
  if (r == e)
    return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < r.length && !r[t].hasResult(); )
      t++;
    for (; i < e.length && !e[i].hasResult(); )
      i++;
    let n = t == r.length, s = i == e.length;
    if (n || s)
      return n == s;
    if (r[t++].result != e[i++].result)
      return !1;
  }
}
c(mQ, "sameResults");
const gQ = {
  "aria-autocomplete": "list"
}, QQ = {};
function Wu(r, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": r
  };
  return e > -1 && (t["aria-activedescendant"] = r + "-" + e), t;
}
c(Wu, "makeAttrs");
const yQ = [];
function pp(r, e) {
  if (r.isUserEvent("input.complete")) {
    let i = r.annotation(ph);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = r.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : r.isUserEvent("delete.backward") ? 2 : r.selection ? 8 : r.docChanged ? 16 : 0;
}
c(pp, "getUpdateType");
const Gt = class Gt {
  constructor(e, t, i = !1) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = pp(e, t), n = this;
    (i & 8 || i & 16 && this.touches(e)) && (n = new Gt(
      n.source,
      0
      /* State.Inactive */
    )), i & 4 && n.state == 0 && (n = new Gt(
      this.source,
      1
      /* State.Pending */
    )), n = n.updateFor(e, i);
    for (let s of e.effects)
      if (s.is(Rs))
        n = new Gt(n.source, 1, s.value);
      else if (s.is(fn))
        n = new Gt(
          n.source,
          0
          /* State.Inactive */
        );
      else if (s.is(mh))
        for (let o of s.value)
          o.source == n.source && (n = o);
    return n;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(ei(e.state));
  }
};
c(Gt, "ActiveSource");
let ct = Gt;
const xi = class xi extends ct {
  constructor(e, t, i, n, s, o) {
    super(e, 3, t), this.limit = i, this.result = n, this.from = s, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3))
      return this.map(e.changes);
    let n = this.result;
    n.map && !e.changes.empty && (n = n.map(n, e.changes));
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = ei(e.state);
    if (l > o || !n || t & 2 && (ei(e.startState) == this.from || l < this.limit))
      return new ct(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return SQ(n.validFor, e.state, s, o) ? new xi(this.source, this.explicit, a, n, s, o) : n.update && (n = n.update(n, s, o, new Bi(e.state, l, !1))) ? new xi(this.source, this.explicit, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : ei(e.state)) : new ct(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new xi(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new ct(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
};
c(xi, "ActiveResult");
let vs = xi;
function SQ(r, e, t, i) {
  if (!r)
    return !1;
  let n = e.sliceDoc(t, i);
  return typeof r == "function" ? r(n, t, i, e) : dp(r, !0).test(n);
}
c(SQ, "checkValid");
const mh = /* @__PURE__ */ I.define({
  map(r, e) {
    return r.map((t) => t.map(e));
  }
}), mp = /* @__PURE__ */ I.define(), Oe = /* @__PURE__ */ Ue.define({
  create() {
    return ba.start();
  },
  update(r, e) {
    return r.update(e);
  },
  provide: /* @__PURE__ */ c((r) => [
    Nd.from(r, (e) => e.tooltip),
    Z.contentAttributes.from(r, (e) => e.attrs)
  ], "provide")
});
function gh(r, e) {
  const t = e.completion.apply || e.completion.label;
  let i = r.state.field(Oe).active.find((n) => n.source == e.source);
  return i instanceof vs ? (typeof t == "string" ? r.dispatch({
    ...hQ(r.state, t, i.from, i.to),
    annotations: ph.of(e.completion)
  }) : t(r, e.completion, i.from, i.to), !0) : !1;
}
c(gh, "applyCompletion");
const bQ = /* @__PURE__ */ OQ(Oe, gh);
function jn(r, e = "option") {
  return (t) => {
    let i = t.state.field(Oe, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ie).interactionDelay)
      return !1;
    let n = 1, s;
    e == "page" && (s = Gd(t, i.open.tooltip)) && (n = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (r ? 1 : -1) : r ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: mp.of(l) }), !0;
  };
}
c(jn, "moveCompletionSelection");
const gp = /* @__PURE__ */ c((r) => {
  let e = r.state.field(Oe, !1);
  return r.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < r.state.facet(ie).interactionDelay ? !1 : gh(r, e.open.options[e.open.selected]);
}, "acceptCompletion"), Wo = /* @__PURE__ */ c((r) => r.state.field(Oe, !1) ? (r.dispatch({ effects: Rs.of(!0) }), !0) : !1, "startCompletion"), wQ = /* @__PURE__ */ c((r) => {
  let e = r.state.field(Oe, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (r.dispatch({ effects: fn.of(null) }), !0);
}, "closeCompletion"), tc = class tc {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
};
c(tc, "RunningQuery");
let wa = tc;
const xQ = 50, PQ = 1e3, kQ = /* @__PURE__ */ ze.fromClass(class {
  constructor(r) {
    this.view = r, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of r.state.field(Oe).active)
      e.isPending && this.startQuery(e);
  }
  update(r) {
    let e = r.state.field(Oe), t = r.state.facet(ie);
    if (!r.selectionSet && !r.docChanged && r.startState.field(Oe) == e)
      return;
    let i = r.transactions.some((s) => {
      let o = pp(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (i || o.context.abortOnDocChange && r.docChanged || o.updates.length + r.transactions.length > xQ && Date.now() - o.time > PQ) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Re(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else
        o.updates.push(...r.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), r.transactions.some((s) => s.effects.some((o) => o.is(Rs))) && (this.pendingStart = !0);
    let n = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), n) : -1, this.composing != 0)
      for (let s of r.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: r } = this.view, e = r.field(Oe);
    for (let t of e.active)
      t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ie).updateSyncTime));
  }
  startQuery(r) {
    let { state: e } = this.view, t = ei(e), i = new Bi(e, t, r.explicit, this.view), n = new wa(r, i);
    this.running.push(n), Promise.resolve(r.source(i)).then((s) => {
      n.context.aborted || (n.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: fn.of(null) }), Re(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((r) => r.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ie).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var r;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(ie), i = this.view.state.field(Oe);
    for (let n = 0; n < this.running.length; n++) {
      let s = this.running[n];
      if (s.done === void 0)
        continue;
      if (this.running.splice(n--, 1), s.done) {
        let l = ei(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), h = new vs(s.active.source, s.active.explicit, a, s.done, s.done.from, (r = s.done.to) !== null && r !== void 0 ? r : l);
        for (let f of s.updates)
          h = h.update(f, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == s.active.source);
      if (o && o.isPending)
        if (s.done == null) {
          let l = new ct(
            s.active.source,
            0
            /* State.Inactive */
          );
          for (let a of s.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(o);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: mh.of(e) });
  }
}, {
  eventHandlers: {
    blur(r) {
      let e = this.view.state.field(Oe, !1);
      if (e && e.tooltip && this.view.state.facet(ie).closeOnBlur) {
        let t = e.open && Gd(this.view, e.open.tooltip);
        (!t || !t.dom.contains(r.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: fn.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Rs.of(!1) }), 20), this.composing = 0;
    }
  }
}), $Q = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), RQ = /* @__PURE__ */ ci.highest(/* @__PURE__ */ Z.domEventHandlers({
  keydown(r, e) {
    let t = e.state.field(Oe, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || r.key.length > 1 || r.ctrlKey && !($Q && r.altKey) || r.metaKey)
      return !1;
    let i = t.open.options[t.open.selected], n = t.active.find((o) => o.source == i.source), s = i.completion.commitCharacters || n.result.commitCharacters;
    return s && s.indexOf(r.key) > -1 && gh(e, i), !1;
  }
})), Qp = /* @__PURE__ */ Z.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), ic = class ic {
  constructor(e, t, i, n) {
    this.field = e, this.line = t, this.from = i, this.to = n;
  }
};
c(ic, "FieldPos");
let xa = ic;
const Oo = class Oo {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, de.TrackDel), i = e.mapPos(this.to, 1, de.TrackDel);
    return t == null || i == null ? null : new Oo(this.field, t, i);
  }
};
c(Oo, "FieldRange");
let Pa = Oo;
const po = class po {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], n = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o, f = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < f; u++)
          h += e.facet(wn);
        n.push(t + h.length - f), a = h + a.slice(f);
      }
      i.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new Pa(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(e) {
    let t = [], i = [], n = [], s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(o); ) {
        let l = s[1] ? +s[1] : null, a = s[2] || s[3] || "", h = -1, f = a.replace(/\\[{}]/g, (u) => u[1]);
        for (let u = 0; u < t.length; u++)
          (l != null ? t[u].seq == l : f && t[u].name == f) && (h = u);
        if (h < 0) {
          let u = 0;
          for (; u < t.length && (l == null || t[u].seq != null && t[u].seq < l); )
            u++;
          t.splice(u, 0, { seq: l, name: f }), h = u;
          for (let O of n)
            O.field >= h && O.field++;
        }
        for (let u of n)
          if (u.line == i.length && u.from > s.index) {
            let O = s[2] ? 3 + (s[1] || "").length : 2;
            u.from -= O, u.to -= O;
          }
        n.push(new xa(h, i.length, s.index, s.index + f.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let f of n)
          f.line == i.length && f.from > h && (f.from--, f.to--);
        return a;
      }), i.push(o);
    }
    return new po(i, n);
  }
};
c(po, "Snippet");
let ka = po, vQ = /* @__PURE__ */ z.widget({ widget: /* @__PURE__ */ new class extends vt {
  toDOM() {
    let r = document.createElement("span");
    return r.className = "cm-snippetFieldPosition", r;
  }
  ignoreEvent() {
    return !1;
  }
}() }), TQ = /* @__PURE__ */ z.mark({ class: "cm-snippetField" });
const mo = class mo {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = z.set(e.map((i) => (i.from == i.to ? vQ : TQ).range(i.from, i.to)), !0);
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let n = i.map(e);
      if (!n)
        return null;
      t.push(n);
    }
    return new mo(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
};
c(mo, "ActiveSnippet");
let Ni = mo;
const Pn = /* @__PURE__ */ I.define({
  map(r, e) {
    return r && r.map(e);
  }
}), AQ = /* @__PURE__ */ I.define(), cn = /* @__PURE__ */ Ue.define({
  create() {
    return null;
  },
  update(r, e) {
    for (let t of e.effects) {
      if (t.is(Pn))
        return t.value;
      if (t.is(AQ) && r)
        return new Ni(r.ranges, t.value);
    }
    return r && e.docChanged && (r = r.map(e.changes)), r && e.selection && !r.selectionInsideField(e.selection) && (r = null), r;
  },
  provide: /* @__PURE__ */ c((r) => Z.decorations.from(r, (e) => e ? e.deco : z.none), "provide")
});
function Qh(r, e) {
  return k.create(r.filter((t) => t.field == e).map((t) => k.range(t.from, t.to)));
}
c(Qh, "fieldSelection");
function LQ(r) {
  let e = ka.parse(r);
  return (t, i, n, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, n), { main: a } = t.state.selection, h = {
      changes: { from: n, to: s == a.from ? a.to : s, insert: W.of(o) },
      scrollIntoView: !0,
      annotations: i ? [ph.of(i), le.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (h.selection = Qh(l, 0)), l.some((f) => f.field > 0)) {
      let f = new Ni(l, 0), u = h.effects = [Pn.of(f)];
      t.state.field(cn, !1) === void 0 && u.push(I.appendConfig.of([cn, XQ, EQ, Qp]));
    }
    t.dispatch(t.state.update(h));
  };
}
c(LQ, "snippet");
function yp(r) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(cn, !1);
    if (!i || r < 0 && i.active == 0)
      return !1;
    let n = i.active + r, s = r > 0 && !i.ranges.some((o) => o.field == n + r);
    return t(e.update({
      selection: Qh(i.ranges, n),
      effects: Pn.of(s ? null : new Ni(i.ranges, n)),
      scrollIntoView: !0
    })), !0;
  };
}
c(yp, "moveField");
const _Q = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.field(cn, !1) ? (e(r.update({ effects: Pn.of(null) })), !0) : !1, "clearSnippet"), MQ = /* @__PURE__ */ yp(1), ZQ = /* @__PURE__ */ yp(-1), CQ = [
  { key: "Tab", run: MQ, shift: ZQ },
  { key: "Escape", run: _Q }
], Uu = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? r[0] : CQ;
  }
}), XQ = /* @__PURE__ */ ci.highest(/* @__PURE__ */ bn.compute([Uu], (r) => r.facet(Uu)));
function ye(r, e) {
  return { ...e, apply: LQ(r) };
}
c(ye, "snippetCompletion");
const EQ = /* @__PURE__ */ Z.domEventHandlers({
  mousedown(r, e) {
    let t = e.state.field(cn, !1), i;
    if (!t || (i = e.posAtCoords({ x: r.clientX, y: r.clientY })) == null)
      return !1;
    let n = t.ranges.find((s) => s.from <= i && s.to >= i);
    return !n || n.field == t.active ? !1 : (e.dispatch({
      selection: Qh(t.ranges, n.field),
      effects: Pn.of(t.ranges.some((s) => s.field > n.field) ? new Ni(t.ranges, n.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), Sp = /* @__PURE__ */ new class extends ut {
}();
Sp.startSide = 1;
Sp.endSide = -1;
function YQ(r = {}) {
  return [
    RQ,
    Oe,
    ie.of(r),
    kQ,
    WQ,
    Qp
  ];
}
c(YQ, "autocompletion");
const VQ = [
  { key: "Ctrl-Space", run: Wo },
  { mac: "Alt-`", run: Wo },
  { mac: "Alt-i", run: Wo },
  { key: "Escape", run: wQ },
  { key: "ArrowDown", run: /* @__PURE__ */ jn(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ jn(!1) },
  { key: "PageDown", run: /* @__PURE__ */ jn(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ jn(!1, "page") },
  { key: "Enter", run: gp }
], WQ = /* @__PURE__ */ ci.highest(/* @__PURE__ */ bn.computeN([ie], (r) => r.facet(ie).defaultKeymap ? [VQ] : []));
function UQ(r) {
  let e = r.field(Oe, !1);
  return e && e.active.some((t) => t.isPending) ? "pending" : e && e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? "active" : null;
}
c(UQ, "completionStatus");
const go = class go {
  static create(e, t, i, n, s) {
    let o = n + (n << 8) + e + (t << 4) | 0;
    return new go(e, t, i, o, s, [], []);
  }
  constructor(e, t, i, n, s, o, l) {
    this.type = e, this.value = t, this.from = i, this.hash = n, this.end = s, this.children = o, this.positions = l, this.hashProp = [[C.contextHash, n]];
  }
  addChild(e, t) {
    e.prop(C.contextHash) != this.hash && (e = new E(e.type, e.children, e.positions, e.length, this.hashProp)), this.children.push(e), this.positions.push(t);
  }
  toTree(e, t = this.end) {
    let i = this.children.length - 1;
    return i >= 0 && (t = Math.max(t, this.positions[i] + this.children[i].length + this.from)), new E(e.types[this.type], this.children, this.positions, t - this.from).balance({
      makeTree: /* @__PURE__ */ c((n, s, o) => new E(te.none, n, s, o, this.hashProp), "makeTree")
    });
  }
};
c(go, "CompositeBlock");
let Ts = go;
var P;
(function(r) {
  r[r.Document = 1] = "Document", r[r.CodeBlock = 2] = "CodeBlock", r[r.FencedCode = 3] = "FencedCode", r[r.Blockquote = 4] = "Blockquote", r[r.HorizontalRule = 5] = "HorizontalRule", r[r.BulletList = 6] = "BulletList", r[r.OrderedList = 7] = "OrderedList", r[r.ListItem = 8] = "ListItem", r[r.ATXHeading1 = 9] = "ATXHeading1", r[r.ATXHeading2 = 10] = "ATXHeading2", r[r.ATXHeading3 = 11] = "ATXHeading3", r[r.ATXHeading4 = 12] = "ATXHeading4", r[r.ATXHeading5 = 13] = "ATXHeading5", r[r.ATXHeading6 = 14] = "ATXHeading6", r[r.SetextHeading1 = 15] = "SetextHeading1", r[r.SetextHeading2 = 16] = "SetextHeading2", r[r.HTMLBlock = 17] = "HTMLBlock", r[r.LinkReference = 18] = "LinkReference", r[r.Paragraph = 19] = "Paragraph", r[r.CommentBlock = 20] = "CommentBlock", r[r.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock", r[r.Escape = 22] = "Escape", r[r.Entity = 23] = "Entity", r[r.HardBreak = 24] = "HardBreak", r[r.Emphasis = 25] = "Emphasis", r[r.StrongEmphasis = 26] = "StrongEmphasis", r[r.Link = 27] = "Link", r[r.Image = 28] = "Image", r[r.InlineCode = 29] = "InlineCode", r[r.HTMLTag = 30] = "HTMLTag", r[r.Comment = 31] = "Comment", r[r.ProcessingInstruction = 32] = "ProcessingInstruction", r[r.Autolink = 33] = "Autolink", r[r.HeaderMark = 34] = "HeaderMark", r[r.QuoteMark = 35] = "QuoteMark", r[r.ListMark = 36] = "ListMark", r[r.LinkMark = 37] = "LinkMark", r[r.EmphasisMark = 38] = "EmphasisMark", r[r.CodeMark = 39] = "CodeMark", r[r.CodeText = 40] = "CodeText", r[r.CodeInfo = 41] = "CodeInfo", r[r.LinkTitle = 42] = "LinkTitle", r[r.LinkLabel = 43] = "LinkLabel", r[r.URL = 44] = "URL";
})(P || (P = {}));
const rc = class rc {
  /**
  @internal
  */
  constructor(e, t) {
    this.start = e, this.content = t, this.marks = [], this.parsers = [];
  }
};
c(rc, "LeafBlock");
let $a = rc;
const nc = class nc {
  constructor() {
    this.text = "", this.baseIndent = 0, this.basePos = 0, this.depth = 0, this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
  }
  /**
  @internal
  */
  forward() {
    this.basePos > this.pos && this.forwardInner();
  }
  /**
  @internal
  */
  forwardInner() {
    let e = this.skipSpace(this.basePos);
    this.indent = this.countIndent(e, this.pos, this.indent), this.pos = e, this.next = e == this.text.length ? -1 : this.text.charCodeAt(e);
  }
  /**
  Skip whitespace after the given position, return the position of
  the next non-space character or the end of the line if there's
  only space after `from`.
  */
  skipSpace(e) {
    return wr(this.text, e);
  }
  /**
  @internal
  */
  reset(e) {
    for (this.text = e, this.baseIndent = this.basePos = this.pos = this.indent = 0, this.forwardInner(), this.depth = 1; this.markers.length; )
      this.markers.pop();
  }
  /**
  Move the line's base position forward to the given position.
  This should only be called by composite [block
  parsers](#BlockParser.parse) or [markup skipping
  functions](#NodeSpec.composite).
  */
  moveBase(e) {
    this.basePos = e, this.baseIndent = this.countIndent(e, this.pos, this.indent);
  }
  /**
  Move the line's base position forward to the given _column_.
  */
  moveBaseColumn(e) {
    this.baseIndent = e, this.basePos = this.findColumn(e);
  }
  /**
  Store a composite-block-level marker. Should be called from
  [markup skipping functions](#NodeSpec.composite) when they
  consume any non-whitespace characters.
  */
  addMarker(e) {
    this.markers.push(e);
  }
  /**
  Find the column position at `to`, optionally starting at a given
  position and column.
  */
  countIndent(e, t = 0, i = 0) {
    for (let n = t; n < e; n++)
      i += this.text.charCodeAt(n) == 9 ? 4 - i % 4 : 1;
    return i;
  }
  /**
  Find the position corresponding to the given column.
  */
  findColumn(e) {
    let t = 0;
    for (let i = 0; t < this.text.length && i < e; t++)
      i += this.text.charCodeAt(t) == 9 ? 4 - i % 4 : 1;
    return t;
  }
  /**
  @internal
  */
  scrub() {
    if (!this.baseIndent)
      return this.text;
    let e = "";
    for (let t = 0; t < this.basePos; t++)
      e += " ";
    return e + this.text.slice(this.basePos);
  }
};
c(nc, "Line");
let Ra = nc;
function Iu(r, e, t) {
  if (t.pos == t.text.length || r != e.block && t.indent >= e.stack[t.depth + 1].value + t.baseIndent)
    return !0;
  if (t.indent >= t.baseIndent + 4)
    return !1;
  let i = (r.type == P.OrderedList ? bh : Sh)(t, e, !1);
  return i > 0 && (r.type != P.BulletList || yh(t, e, !1) < 0) && t.text.charCodeAt(t.pos + i - 1) == r.value;
}
c(Iu, "skipForList");
const bp = {
  [P.Blockquote](r, e, t) {
    return t.next != 62 ? !1 : (t.markers.push(V(P.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1)), t.moveBase(t.pos + (Ee(t.text.charCodeAt(t.pos + 1)) ? 2 : 1)), r.end = e.lineStart + t.text.length, !0);
  },
  [P.ListItem](r, e, t) {
    return t.indent < t.baseIndent + r.value && t.next > -1 ? !1 : (t.moveBaseColumn(t.baseIndent + r.value), !0);
  },
  [P.OrderedList]: Iu,
  [P.BulletList]: Iu,
  [P.Document]() {
    return !0;
  }
};
function Ee(r) {
  return r == 32 || r == 9 || r == 10 || r == 13;
}
c(Ee, "space$2");
function wr(r, e = 0) {
  for (; e < r.length && Ee(r.charCodeAt(e)); )
    e++;
  return e;
}
c(wr, "skipSpace");
function zu(r, e, t) {
  for (; e > t && Ee(r.charCodeAt(e - 1)); )
    e--;
  return e;
}
c(zu, "skipSpaceBack");
function wp(r) {
  if (r.next != 96 && r.next != 126)
    return -1;
  let e = r.pos + 1;
  for (; e < r.text.length && r.text.charCodeAt(e) == r.next; )
    e++;
  if (e < r.pos + 3)
    return -1;
  if (r.next == 96) {
    for (let t = e; t < r.text.length; t++)
      if (r.text.charCodeAt(t) == 96)
        return -1;
  }
  return e;
}
c(wp, "isFencedCode");
function xp(r) {
  return r.next != 62 ? -1 : r.text.charCodeAt(r.pos + 1) == 32 ? 2 : 1;
}
c(xp, "isBlockquote");
function yh(r, e, t) {
  if (r.next != 42 && r.next != 45 && r.next != 95)
    return -1;
  let i = 1;
  for (let n = r.pos + 1; n < r.text.length; n++) {
    let s = r.text.charCodeAt(n);
    if (s == r.next)
      i++;
    else if (!Ee(s))
      return -1;
  }
  return t && r.next == 45 && $p(r) > -1 && r.depth == e.stack.length && e.parser.leafBlockParsers.indexOf(Ap.SetextHeading) > -1 || i < 3 ? -1 : 1;
}
c(yh, "isHorizontalRule");
function Pp(r, e) {
  for (let t = r.stack.length - 1; t >= 0; t--)
    if (r.stack[t].type == e)
      return !0;
  return !1;
}
c(Pp, "inList");
function Sh(r, e, t) {
  return (r.next == 45 || r.next == 43 || r.next == 42) && (r.pos == r.text.length - 1 || Ee(r.text.charCodeAt(r.pos + 1))) && (!t || Pp(e, P.BulletList) || r.skipSpace(r.pos + 2) < r.text.length) ? 1 : -1;
}
c(Sh, "isBulletList");
function bh(r, e, t) {
  let i = r.pos, n = r.next;
  for (; n >= 48 && n <= 57; ) {
    i++;
    if (i == r.text.length)
      return -1;
    n = r.text.charCodeAt(i);
  }
  return i == r.pos || i > r.pos + 9 || n != 46 && n != 41 || i < r.text.length - 1 && !Ee(r.text.charCodeAt(i + 1)) || t && !Pp(e, P.OrderedList) && (r.skipSpace(i + 1) == r.text.length || i > r.pos + 1 || r.next != 49) ? -1 : i + 1 - r.pos;
}
c(bh, "isOrderedList");
function kp(r) {
  if (r.next != 35)
    return -1;
  let e = r.pos + 1;
  for (; e < r.text.length && r.text.charCodeAt(e) == 35; )
    e++;
  if (e < r.text.length && r.text.charCodeAt(e) != 32)
    return -1;
  let t = e - r.pos;
  return t > 6 ? -1 : t;
}
c(kp, "isAtxHeading");
function $p(r) {
  if (r.next != 45 && r.next != 61 || r.indent >= r.baseIndent + 4)
    return -1;
  let e = r.pos + 1;
  for (; e < r.text.length && r.text.charCodeAt(e) == r.next; )
    e++;
  let t = e;
  for (; e < r.text.length && Ee(r.text.charCodeAt(e)); )
    e++;
  return e == r.text.length ? t : -1;
}
c($p, "isSetextUnderline");
const va = /^[ \t]*$/, Rp = /-->/, vp = /\?>/, Ta = [
  [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
  [/^\s*<!--/, Rp],
  [/^\s*<\?/, vp],
  [/^\s*<![A-Z]/, />/],
  [/^\s*<!\[CDATA\[/, /\]\]>/],
  [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, va],
  [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, va]
];
function Tp(r, e, t) {
  if (r.next != 60)
    return -1;
  let i = r.text.slice(r.pos);
  for (let n = 0, s = Ta.length - (t ? 1 : 0); n < s; n++)
    if (Ta[n][0].test(i))
      return n;
  return -1;
}
c(Tp, "isHTMLBlock");
function ju(r, e) {
  let t = r.countIndent(e, r.pos, r.indent), i = r.countIndent(r.skipSpace(e), e, t);
  return i >= t + 5 ? t + 1 : i;
}
c(ju, "getListIndent");
function Yt(r, e, t) {
  let i = r.length - 1;
  i >= 0 && r[i].to == e && r[i].type == P.CodeText ? r[i].to = t : r.push(V(P.CodeText, e, t));
}
c(Yt, "addCodeText");
const qn = {
  LinkReference: void 0,
  IndentedCode(r, e) {
    let t = e.baseIndent + 4;
    if (e.indent < t)
      return !1;
    let i = e.findColumn(t), n = r.lineStart + i, s = r.lineStart + e.text.length, o = [], l = [];
    for (Yt(o, n, s); r.nextLine() && e.depth >= r.stack.length; )
      if (e.pos == e.text.length) {
        Yt(l, r.lineStart - 1, r.lineStart);
        for (let a of e.markers)
          l.push(a);
      } else {
        if (e.indent < t)
          break;
        {
          if (l.length) {
            for (let h of l)
              h.type == P.CodeText ? Yt(o, h.from, h.to) : o.push(h);
            l = [];
          }
          Yt(o, r.lineStart - 1, r.lineStart);
          for (let h of e.markers)
            o.push(h);
          s = r.lineStart + e.text.length;
          let a = r.lineStart + e.findColumn(e.baseIndent + 4);
          a < s && Yt(o, a, s);
        }
      }
    return l.length && (l = l.filter((a) => a.type != P.CodeText), l.length && (e.markers = l.concat(e.markers))), r.addNode(r.buffer.writeElements(o, -n).finish(P.CodeBlock, s - n), n), !0;
  },
  FencedCode(r, e) {
    let t = wp(e);
    if (t < 0)
      return !1;
    let i = r.lineStart + e.pos, n = e.next, s = t - e.pos, o = e.skipSpace(t), l = zu(e.text, e.text.length, o), a = [V(P.CodeMark, i, i + s)];
    o < l && a.push(V(P.CodeInfo, r.lineStart + o, r.lineStart + l));
    for (let h = !0; r.nextLine() && e.depth >= r.stack.length; h = !1) {
      let f = e.pos;
      if (e.indent - e.baseIndent < 4)
        for (; f < e.text.length && e.text.charCodeAt(f) == n; )
          f++;
      if (f - e.pos >= s && e.skipSpace(f) == e.text.length) {
        for (let u of e.markers)
          a.push(u);
        a.push(V(P.CodeMark, r.lineStart + e.pos, r.lineStart + f)), r.nextLine();
        break;
      } else {
        h || Yt(a, r.lineStart - 1, r.lineStart);
        for (let d of e.markers)
          a.push(d);
        let u = r.lineStart + e.basePos, O = r.lineStart + e.text.length;
        u < O && Yt(a, u, O);
      }
    }
    return r.addNode(r.buffer.writeElements(a, -i).finish(P.FencedCode, r.prevLineEnd() - i), i), !0;
  },
  Blockquote(r, e) {
    let t = xp(e);
    return t < 0 ? !1 : (r.startContext(P.Blockquote, e.pos), r.addNode(P.QuoteMark, r.lineStart + e.pos, r.lineStart + e.pos + 1), e.moveBase(e.pos + t), null);
  },
  HorizontalRule(r, e) {
    if (yh(e, r, !1) < 0)
      return !1;
    let t = r.lineStart + e.pos;
    return r.nextLine(), r.addNode(P.HorizontalRule, t), !0;
  },
  BulletList(r, e) {
    let t = Sh(e, r, !1);
    if (t < 0)
      return !1;
    r.block.type != P.BulletList && r.startContext(P.BulletList, e.basePos, e.next);
    let i = ju(e, e.pos + 1);
    return r.startContext(P.ListItem, e.basePos, i - e.baseIndent), r.addNode(P.ListMark, r.lineStart + e.pos, r.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  OrderedList(r, e) {
    let t = bh(e, r, !1);
    if (t < 0)
      return !1;
    r.block.type != P.OrderedList && r.startContext(P.OrderedList, e.basePos, e.text.charCodeAt(e.pos + t - 1));
    let i = ju(e, e.pos + t);
    return r.startContext(P.ListItem, e.basePos, i - e.baseIndent), r.addNode(P.ListMark, r.lineStart + e.pos, r.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  ATXHeading(r, e) {
    let t = kp(e);
    if (t < 0)
      return !1;
    let i = e.pos, n = r.lineStart + i, s = zu(e.text, e.text.length, i), o = s;
    for (; o > i && e.text.charCodeAt(o - 1) == e.next; )
      o--;
    (o == s || o == i || !Ee(e.text.charCodeAt(o - 1))) && (o = e.text.length);
    let l = r.buffer.write(P.HeaderMark, 0, t).writeElements(r.parser.parseInline(e.text.slice(i + t + 1, o), n + t + 1), -n);
    o < e.text.length && l.write(P.HeaderMark, o - i, s - i);
    let a = l.finish(P.ATXHeading1 - 1 + t, e.text.length - i);
    return r.nextLine(), r.addNode(a, n), !0;
  },
  HTMLBlock(r, e) {
    let t = Tp(e, r, !1);
    if (t < 0)
      return !1;
    let i = r.lineStart + e.pos, n = Ta[t][1], s = [], o = n != va;
    for (; !n.test(e.text) && r.nextLine(); ) {
      if (e.depth < r.stack.length) {
        o = !1;
        break;
      }
      for (let h of e.markers)
        s.push(h);
    }
    o && r.nextLine();
    let l = n == Rp ? P.CommentBlock : n == vp ? P.ProcessingInstructionBlock : P.HTMLBlock, a = r.prevLineEnd();
    return r.addNode(r.buffer.writeElements(s, -i).finish(l, a - i), i), !0;
  },
  SetextHeading: void 0
  // Specifies relative precedence for block-continue function
}, sc = class sc {
  constructor(e) {
    this.stage = 0, this.elts = [], this.pos = 0, this.start = e.start, this.advance(e.content);
  }
  nextLine(e, t, i) {
    if (this.stage == -1)
      return !1;
    let n = i.content + `
` + t.scrub(), s = this.advance(n);
    return s > -1 && s < n.length ? this.complete(e, i, s) : !1;
  }
  finish(e, t) {
    return (this.stage == 2 || this.stage == 3) && wr(t.content, this.pos) == t.content.length ? this.complete(e, t, t.content.length) : !1;
  }
  complete(e, t, i) {
    return e.addLeafElement(t, V(P.LinkReference, this.start, this.start + i, this.elts)), !0;
  }
  nextStage(e) {
    return e ? (this.pos = e.to - this.start, this.elts.push(e), this.stage++, !0) : (e === !1 && (this.stage = -1), !1);
  }
  advance(e) {
    for (; ; ) {
      if (this.stage == -1)
        return -1;
      if (this.stage == 0) {
        if (!this.nextStage(Ep(e, this.pos, this.start, !0)))
          return -1;
        if (e.charCodeAt(this.pos) != 58)
          return this.stage = -1;
        this.elts.push(V(P.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
      } else if (this.stage == 1) {
        if (!this.nextStage(Cp(e, wr(e, this.pos), this.start)))
          return -1;
      } else if (this.stage == 2) {
        let t = wr(e, this.pos), i = 0;
        if (t > this.pos) {
          let n = Xp(e, t, this.start);
          if (n) {
            let s = Uo(e, n.to - this.start);
            s > 0 && (this.nextStage(n), i = s);
          }
        }
        return i || (i = Uo(e, this.pos)), i > 0 && i < e.length ? i : -1;
      } else
        return Uo(e, this.pos);
    }
  }
};
c(sc, "LinkReferenceParser");
let Aa = sc;
function Uo(r, e) {
  for (; e < r.length; e++) {
    let t = r.charCodeAt(e);
    if (t == 10)
      break;
    if (!Ee(t))
      return -1;
  }
  return e;
}
c(Uo, "lineEnd");
const oc = class oc {
  nextLine(e, t, i) {
    let n = t.depth < e.stack.length ? -1 : $p(t), s = t.next;
    if (n < 0)
      return !1;
    let o = V(P.HeaderMark, e.lineStart + t.pos, e.lineStart + n);
    return e.nextLine(), e.addLeafElement(i, V(s == 61 ? P.SetextHeading1 : P.SetextHeading2, i.start, e.prevLineEnd(), [
      ...e.parser.parseInline(i.content, i.start),
      o
    ])), !0;
  }
  finish() {
    return !1;
  }
};
c(oc, "SetextHeadingParser");
let La = oc;
const Ap = {
  LinkReference(r, e) {
    return e.content.charCodeAt(0) == 91 ? new Aa(e) : null;
  },
  SetextHeading() {
    return new La();
  }
}, IQ = [
  (r, e) => kp(e) >= 0,
  (r, e) => wp(e) >= 0,
  (r, e) => xp(e) >= 0,
  (r, e) => Sh(e, r, !0) >= 0,
  (r, e) => bh(e, r, !0) >= 0,
  (r, e) => yh(e, r, !0) >= 0,
  (r, e) => Tp(e, r, !0) >= 0
], zQ = { text: "", end: 0 }, lc = class lc {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.parser = e, this.input = t, this.ranges = n, this.line = new Ra(), this.atEnd = !1, this.reusePlaceholders = /* @__PURE__ */ new Map(), this.stoppedAt = null, this.rangeI = 0, this.to = n[n.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = n[0].from, this.block = Ts.create(P.Document, 0, this.lineStart, 0, 0), this.stack = [this.block], this.fragments = i.length ? new DQ(i, t) : null, this.readLine();
  }
  get parsedPos() {
    return this.absoluteLineStart;
  }
  advance() {
    if (this.stoppedAt != null && this.absoluteLineStart > this.stoppedAt)
      return this.finish();
    let { line: e } = this;
    for (; ; ) {
      for (let i = 0; ; ) {
        let n = e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
        for (; i < e.markers.length && (!n || e.markers[i].from < n.end); ) {
          let s = e.markers[i++];
          this.addNode(s.type, s.from, s.to);
        }
        if (!n)
          break;
        this.finishContext();
      }
      if (e.pos < e.text.length)
        break;
      if (!this.nextLine())
        return this.finish();
    }
    if (this.fragments && this.reuseFragment(e.basePos))
      return null;
    e: for (; ; ) {
      for (let i of this.parser.blockParsers)
        if (i) {
          let n = i(this, e);
          if (n != !1) {
            if (n == !0)
              return null;
            e.forward();
            continue e;
          }
        }
      break;
    }
    let t = new $a(this.lineStart + e.pos, e.text.slice(e.pos));
    for (let i of this.parser.leafBlockParsers)
      if (i) {
        let n = i(this, t);
        n && t.parsers.push(n);
      }
    e: for (; this.nextLine() && e.pos != e.text.length; ) {
      if (e.indent < e.baseIndent + 4) {
        for (let i of this.parser.endLeafBlock)
          if (i(this, e, t))
            break e;
      }
      for (let i of t.parsers)
        if (i.nextLine(this, e, t))
          return null;
      t.content += `
` + e.scrub();
      for (let i of e.markers)
        t.marks.push(i);
    }
    return this.finishLeaf(t), null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  reuseFragment(e) {
    if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash))
      return !1;
    let t = this.fragments.takeNodes(this);
    return t ? (this.absoluteLineStart += t, this.lineStart = Yp(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), !0) : !1;
  }
  /**
  The number of parent blocks surrounding the current block.
  */
  get depth() {
    return this.stack.length;
  }
  /**
  Get the type of the parent block at the given depth. When no
  depth is passed, return the type of the innermost parent.
  */
  parentType(e = this.depth - 1) {
    return this.parser.nodeSet.types[this.stack[e].type];
  }
  /**
  Move to the next input line. This should only be called by
  (non-composite) [block parsers](#BlockParser.parse) that consume
  the line directly, or leaf block parser
  [`nextLine`](#LeafBlockParser.nextLine) methods when they
  consume the current line (and return true).
  */
  nextLine() {
    return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, this.atEnd = !0, this.readLine(), !1) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, this.moveRangeI(), this.readLine(), !0);
  }
  /**
  Retrieve the text of the line after the current one, without
  actually moving the context's current line forward.
  */
  peekLine() {
    return this.scanLine(this.absoluteLineEnd + 1).text;
  }
  moveRangeI() {
    for (; this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to; )
      this.rangeI++, this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
  }
  /**
  @internal
  Collect the text for the next line.
  */
  scanLine(e) {
    let t = zQ;
    if (t.end = e, e >= this.to)
      t.text = "";
    else if (t.text = this.lineChunkAt(e), t.end += t.text.length, this.ranges.length > 1) {
      let i = this.absoluteLineStart, n = this.rangeI;
      for (; this.ranges[n].to < t.end; ) {
        n++;
        let s = this.ranges[n].from, o = this.lineChunkAt(s);
        t.end = s + o.length, t.text = t.text.slice(0, this.ranges[n - 1].to - i) + o, i = t.end - t.text.length;
      }
    }
    return t;
  }
  /**
  @internal
  Populate this.line with the content of the next line. Skip
  leading characters covered by composite blocks.
  */
  readLine() {
    let { line: e } = this, { text: t, end: i } = this.scanLine(this.absoluteLineStart);
    for (this.absoluteLineEnd = i, e.reset(t); e.depth < this.stack.length; e.depth++) {
      let n = this.stack[e.depth], s = this.parser.skipContextMarkup[n.type];
      if (!s)
        throw new Error("Unhandled block context " + P[n.type]);
      let o = this.line.markers.length;
      if (!s(n, this, e)) {
        this.line.markers.length > o && (n.end = this.line.markers[this.line.markers.length - 1].to);
        break;
      }
      e.forward();
    }
  }
  lineChunkAt(e) {
    let t = this.input.chunk(e), i;
    if (this.input.lineChunks)
      i = t == `
` ? "" : t;
    else {
      let n = t.indexOf(`
`);
      i = n < 0 ? t : t.slice(0, n);
    }
    return e + i.length > this.to ? i.slice(0, this.to - e) : i;
  }
  /**
  The end position of the previous line.
  */
  prevLineEnd() {
    return this.atEnd ? this.lineStart : this.lineStart - 1;
  }
  /**
  @internal
  */
  startContext(e, t, i = 0) {
    this.block = Ts.create(e, i, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
  }
  /**
  Start a composite block. Should only be called from [block
  parser functions](#BlockParser.parse) that return null.
  */
  startComposite(e, t, i = 0) {
    this.startContext(this.parser.getNodeType(e), t, i);
  }
  /**
  @internal
  */
  addNode(e, t, i) {
    typeof e == "number" && (e = new E(this.parser.nodeSet.types[e], Gi, Gi, (i ?? this.prevLineEnd()) - t)), this.block.addChild(e, t - this.block.from);
  }
  /**
  Add a block element. Can be called by [block
  parsers](#BlockParser.parse).
  */
  addElement(e) {
    this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
  }
  /**
  Add a block element from a [leaf parser](#LeafBlockParser). This
  makes sure any extra composite block markup (such as blockquote
  markers) inside the block are also added to the syntax tree.
  */
  addLeafElement(e, t) {
    this.addNode(this.buffer.writeElements(Za(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
  }
  /**
  @internal
  */
  finishContext() {
    let e = this.stack.pop(), t = this.stack[this.stack.length - 1];
    t.addChild(e.toTree(this.parser.nodeSet), e.from - t.from), this.block = t;
  }
  finish() {
    for (; this.stack.length > 1; )
      this.finishContext();
    return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
  }
  addGaps(e) {
    return this.ranges.length > 1 ? Lp(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
  }
  /**
  @internal
  */
  finishLeaf(e) {
    for (let i of e.parsers)
      if (i.finish(this, e))
        return;
    let t = Za(this.parser.parseInline(e.content, e.start), e.marks);
    this.addNode(this.buffer.writeElements(t, -e.start).finish(P.Paragraph, e.content.length), e.start);
  }
  elt(e, t, i, n) {
    return typeof e == "string" ? V(this.parser.getNodeType(e), t, i, n) : new _s(e, t);
  }
  /**
  @internal
  */
  get buffer() {
    return new Ls(this.parser.nodeSet);
  }
};
c(lc, "BlockContext");
let _a = lc;
function Lp(r, e, t, i, n) {
  let s = r[e].to, o = [], l = [], a = t.from + i;
  function h(f, u) {
    for (; u ? f >= s : f > s; ) {
      let O = r[e + 1].from - s;
      i += O, f += O, e++, s = r[e].to;
    }
  }
  c(h, "movePastNext");
  for (let f = t.firstChild; f; f = f.nextSibling) {
    h(f.from + i, !0);
    let u = f.from + i, O, d = n.get(f.tree);
    d ? O = d : f.to + i > s ? (O = Lp(r, e, f, i, n), h(f.to + i, !1)) : O = f.toTree(), o.push(O), l.push(u - a);
  }
  return h(t.to + i, !1), new E(t.type, o, l, t.to + i - a, t.tree ? t.tree.propValues : void 0);
}
c(Lp, "injectGaps");
const Qo = class Qo extends zi {
  /**
  @internal
  */
  constructor(e, t, i, n, s, o, l, a, h) {
    super(), this.nodeSet = e, this.blockParsers = t, this.leafBlockParsers = i, this.blockNames = n, this.endLeafBlock = s, this.skipContextMarkup = o, this.inlineParsers = l, this.inlineNames = a, this.wrappers = h, this.nodeTypes = /* @__PURE__ */ Object.create(null);
    for (let f of e.types)
      this.nodeTypes[f.name] = f.id;
  }
  createParse(e, t, i) {
    let n = new _a(this, e, t, i);
    for (let s of this.wrappers)
      n = s(n, e, t, i);
    return n;
  }
  /**
  Reconfigure the parser.
  */
  configure(e) {
    let t = Ma(e);
    if (!t)
      return this;
    let { nodeSet: i, skipContextMarkup: n } = this, s = this.blockParsers.slice(), o = this.leafBlockParsers.slice(), l = this.blockNames.slice(), a = this.inlineParsers.slice(), h = this.inlineNames.slice(), f = this.endLeafBlock.slice(), u = this.wrappers;
    if (or(t.defineNodes)) {
      n = Object.assign({}, n);
      let O = i.types.slice(), d;
      for (let p of t.defineNodes) {
        let { name: m, block: Q, composite: y, style: b } = typeof p == "string" ? { name: p } : p;
        if (O.some(($) => $.name == m))
          continue;
        y && (n[O.length] = ($, A, L) => y(A, L, $.value));
        let x = O.length, R = y ? ["Block", "BlockContext"] : Q ? x >= P.ATXHeading1 && x <= P.SetextHeading2 ? ["Block", "LeafBlock", "Heading"] : ["Block", "LeafBlock"] : void 0;
        O.push(te.define({
          id: x,
          name: m,
          props: R && [[C.group, R]]
        })), b && (d || (d = {}), Array.isArray(b) || b instanceof Me ? d[m] = b : Object.assign(d, b));
      }
      i = new Ui(O), d && (i = i.extend(Ji(d)));
    }
    if (or(t.props) && (i = i.extend(...t.props)), or(t.remove))
      for (let O of t.remove) {
        let d = this.blockNames.indexOf(O), p = this.inlineNames.indexOf(O);
        d > -1 && (s[d] = o[d] = void 0), p > -1 && (a[p] = void 0);
      }
    if (or(t.parseBlock))
      for (let O of t.parseBlock) {
        let d = l.indexOf(O.name);
        if (d > -1)
          s[d] = O.parse, o[d] = O.leaf;
        else {
          let p = O.before ? Dn(l, O.before) : O.after ? Dn(l, O.after) + 1 : l.length - 1;
          s.splice(p, 0, O.parse), o.splice(p, 0, O.leaf), l.splice(p, 0, O.name);
        }
        O.endLeaf && f.push(O.endLeaf);
      }
    if (or(t.parseInline))
      for (let O of t.parseInline) {
        let d = h.indexOf(O.name);
        if (d > -1)
          a[d] = O.parse;
        else {
          let p = O.before ? Dn(h, O.before) : O.after ? Dn(h, O.after) + 1 : h.length - 1;
          a.splice(p, 0, O.parse), h.splice(p, 0, O.name);
        }
      }
    return t.wrap && (u = u.concat(t.wrap)), new Qo(i, s, o, l, f, n, a, h, u);
  }
  /**
  @internal
  */
  getNodeType(e) {
    let t = this.nodeTypes[e];
    if (t == null)
      throw new RangeError(`Unknown node type '${e}'`);
    return t;
  }
  /**
  Parse the given piece of inline text at the given offset,
  returning an array of [`Element`](#Element) objects representing
  the inline content.
  */
  parseInline(e, t) {
    let i = new dn(this, e, t);
    e: for (let n = t; n < i.end; ) {
      let s = i.char(n);
      for (let o of this.inlineParsers)
        if (o) {
          let l = o(i, s, n);
          if (l >= 0) {
            n = l;
            continue e;
          }
        }
      n++;
    }
    return i.resolveMarkers(0);
  }
};
c(Qo, "MarkdownParser");
let As = Qo;
function or(r) {
  return r != null && r.length > 0;
}
c(or, "nonEmpty");
function Ma(r) {
  if (!Array.isArray(r))
    return r;
  if (r.length == 0)
    return null;
  let e = Ma(r[0]);
  if (r.length == 1)
    return e;
  let t = Ma(r.slice(1));
  if (!t || !e)
    return e || t;
  let i = /* @__PURE__ */ c((o, l) => (o || Gi).concat(l || Gi), "conc"), n = e.wrap, s = t.wrap;
  return {
    props: i(e.props, t.props),
    defineNodes: i(e.defineNodes, t.defineNodes),
    parseBlock: i(e.parseBlock, t.parseBlock),
    parseInline: i(e.parseInline, t.parseInline),
    remove: i(e.remove, t.remove),
    wrap: n ? s ? (o, l, a, h) => n(s(o, l, a, h), l, a, h) : n : s
  };
}
c(Ma, "resolveConfig");
function Dn(r, e) {
  let t = r.indexOf(e);
  if (t < 0)
    throw new RangeError(`Position specified relative to unknown parser ${e}`);
  return t;
}
c(Dn, "findName");
let _p = [te.none];
for (let r = 1, e; e = P[r]; r++)
  _p[r] = te.define({
    id: r,
    name: e,
    props: r >= P.Escape ? [] : [[C.group, r in bp ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]],
    top: e == "Document"
  });
const Gi = [], ac = class ac {
  constructor(e) {
    this.nodeSet = e, this.content = [], this.nodes = [];
  }
  write(e, t, i, n = 0) {
    return this.content.push(e, t, i, 4 + n * 4), this;
  }
  writeElements(e, t = 0) {
    for (let i of e)
      i.writeTo(this, t);
    return this;
  }
  finish(e, t) {
    return E.build({
      buffer: this.content,
      nodeSet: this.nodeSet,
      reused: this.nodes,
      topID: e,
      length: t
    });
  }
};
c(ac, "Buffer");
let Ls = ac;
var Ci;
let un = (Ci = class {
  /**
  @internal
  */
  constructor(e, t, i, n = Gi) {
    this.type = e, this.from = t, this.to = i, this.children = n;
  }
  /**
  @internal
  */
  writeTo(e, t) {
    let i = e.content.length;
    e.writeElements(this.children, t), e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - i);
  }
  /**
  @internal
  */
  toTree(e) {
    return new Ls(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
  }
}, c(Ci, "Element"), Ci);
const hc = class hc {
  constructor(e, t) {
    this.tree = e, this.from = t;
  }
  get to() {
    return this.from + this.tree.length;
  }
  get type() {
    return this.tree.type.id;
  }
  get children() {
    return Gi;
  }
  writeTo(e, t) {
    e.nodes.push(this.tree), e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
  }
  toTree() {
    return this.tree;
  }
};
c(hc, "TreeElement");
let _s = hc;
function V(r, e, t, i) {
  return new un(r, e, t, i);
}
c(V, "elt");
const Mp = { resolve: "Emphasis", mark: "EmphasisMark" }, Zp = { resolve: "Emphasis", mark: "EmphasisMark" }, zt = {}, Ms = {}, fc = class fc {
  constructor(e, t, i, n) {
    this.type = e, this.from = t, this.to = i, this.side = n;
  }
};
c(fc, "InlineDelimiter");
let ce = fc;
const qu = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let On = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
  On = new RegExp("[\\p{S}|\\p{P}]", "u");
} catch {
}
const Io = {
  Escape(r, e, t) {
    if (e != 92 || t == r.end - 1)
      return -1;
    let i = r.char(t + 1);
    for (let n = 0; n < qu.length; n++)
      if (qu.charCodeAt(n) == i)
        return r.append(V(P.Escape, t, t + 2));
    return -1;
  },
  Entity(r, e, t) {
    if (e != 38)
      return -1;
    let i = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(r.slice(t + 1, t + 31));
    return i ? r.append(V(P.Entity, t, t + 1 + i[0].length)) : -1;
  },
  InlineCode(r, e, t) {
    if (e != 96 || t && r.char(t - 1) == 96)
      return -1;
    let i = t + 1;
    for (; i < r.end && r.char(i) == 96; )
      i++;
    let n = i - t, s = 0;
    for (; i < r.end; i++)
      if (r.char(i) == 96) {
        if (s++, s == n && r.char(i + 1) != 96)
          return r.append(V(P.InlineCode, t, i + 1, [
            V(P.CodeMark, t, t + n),
            V(P.CodeMark, i + 1 - n, i + 1)
          ]));
      } else
        s = 0;
    return -1;
  },
  HTMLTag(r, e, t) {
    if (e != 60 || t == r.end - 1)
      return -1;
    let i = r.slice(t + 1, r.end), n = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(i);
    if (n)
      return r.append(V(P.Autolink, t, t + 1 + n[0].length, [
        V(P.LinkMark, t, t + 1),
        // url[0] includes the closing bracket, so exclude it from this slice
        V(P.URL, t + 1, t + n[0].length),
        V(P.LinkMark, t + n[0].length, t + 1 + n[0].length)
      ]));
    let s = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(i);
    if (s)
      return r.append(V(P.Comment, t, t + 1 + s[0].length));
    let o = /^\?[^]*?\?>/.exec(i);
    if (o)
      return r.append(V(P.ProcessingInstruction, t, t + 1 + o[0].length));
    let l = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(i);
    return l ? r.append(V(P.HTMLTag, t, t + 1 + l[0].length)) : -1;
  },
  Emphasis(r, e, t) {
    if (e != 95 && e != 42)
      return -1;
    let i = t + 1;
    for (; r.char(i) == e; )
      i++;
    let n = r.slice(t - 1, t), s = r.slice(i, i + 1), o = On.test(n), l = On.test(s), a = /\s|^$/.test(n), h = /\s|^$/.test(s), f = !h && (!l || a || o), u = !a && (!o || h || l), O = f && (e == 42 || !u || o), d = u && (e == 42 || !f || l);
    return r.append(new ce(e == 95 ? Mp : Zp, t, i, (O ? 1 : 0) | (d ? 2 : 0)));
  },
  HardBreak(r, e, t) {
    if (e == 92 && r.char(t + 1) == 10)
      return r.append(V(P.HardBreak, t, t + 2));
    if (e == 32) {
      let i = t + 1;
      for (; r.char(i) == 32; )
        i++;
      if (r.char(i) == 10 && i >= t + 2)
        return r.append(V(P.HardBreak, t, i + 1));
    }
    return -1;
  },
  Link(r, e, t) {
    return e == 91 ? r.append(new ce(
      zt,
      t,
      t + 1,
      1
      /* Mark.Open */
    )) : -1;
  },
  Image(r, e, t) {
    return e == 33 && r.char(t + 1) == 91 ? r.append(new ce(
      Ms,
      t,
      t + 2,
      1
      /* Mark.Open */
    )) : -1;
  },
  LinkEnd(r, e, t) {
    if (e != 93)
      return -1;
    for (let i = r.parts.length - 1; i >= 0; i--) {
      let n = r.parts[i];
      if (n instanceof ce && (n.type == zt || n.type == Ms)) {
        if (!n.side || r.skipSpace(n.to) == t && !/[(\[]/.test(r.slice(t + 1, t + 2)))
          return r.parts[i] = null, -1;
        let s = r.takeContent(i), o = r.parts[i] = jQ(r, s, n.type == zt ? P.Link : P.Image, n.from, t + 1);
        if (n.type == zt)
          for (let l = 0; l < i; l++) {
            let a = r.parts[l];
            a instanceof ce && a.type == zt && (a.side = 0);
          }
        return o.to;
      }
    }
    return -1;
  }
};
function jQ(r, e, t, i, n) {
  let { text: s } = r, o = r.char(n), l = n;
  if (e.unshift(V(P.LinkMark, i, i + (t == P.Image ? 2 : 1))), e.push(V(P.LinkMark, n - 1, n)), o == 40) {
    let a = r.skipSpace(n + 1), h = Cp(s, a - r.offset, r.offset), f;
    h && (a = r.skipSpace(h.to), a != h.to && (f = Xp(s, a - r.offset, r.offset), f && (a = r.skipSpace(f.to)))), r.char(a) == 41 && (e.push(V(P.LinkMark, n, n + 1)), l = a + 1, h && e.push(h), f && e.push(f), e.push(V(P.LinkMark, a, l)));
  } else if (o == 91) {
    let a = Ep(s, n - r.offset, r.offset, !1);
    a && (e.push(a), l = a.to);
  }
  return V(t, i, l, e);
}
c(jQ, "finishLink");
function Cp(r, e, t) {
  if (r.charCodeAt(e) == 60) {
    for (let n = e + 1; n < r.length; n++) {
      let s = r.charCodeAt(n);
      if (s == 62)
        return V(P.URL, e + t, n + 1 + t);
      if (s == 60 || s == 10)
        return !1;
    }
    return null;
  } else {
    let n = 0, s = e;
    for (let o = !1; s < r.length; s++) {
      let l = r.charCodeAt(s);
      if (Ee(l))
        break;
      if (o)
        o = !1;
      else if (l == 40)
        n++;
      else if (l == 41) {
        if (!n)
          break;
        n--;
      } else l == 92 && (o = !0);
    }
    return s > e ? V(P.URL, e + t, s + t) : s == r.length ? null : !1;
  }
}
c(Cp, "parseURL");
function Xp(r, e, t) {
  let i = r.charCodeAt(e);
  if (i != 39 && i != 34 && i != 40)
    return !1;
  let n = i == 40 ? 41 : i;
  for (let s = e + 1, o = !1; s < r.length; s++) {
    let l = r.charCodeAt(s);
    if (o)
      o = !1;
    else {
      if (l == n)
        return V(P.LinkTitle, e + t, s + 1 + t);
      l == 92 && (o = !0);
    }
  }
  return null;
}
c(Xp, "parseLinkTitle");
function Ep(r, e, t, i) {
  for (let n = !1, s = e + 1, o = Math.min(r.length, s + 999); s < o; s++) {
    let l = r.charCodeAt(s);
    if (n)
      n = !1;
    else {
      if (l == 93)
        return i ? !1 : V(P.LinkLabel, e + t, s + 1 + t);
      if (i && !Ee(l) && (i = !1), l == 91)
        return !1;
      l == 92 && (n = !0);
    }
  }
  return null;
}
c(Ep, "parseLinkLabel");
const cc = class cc {
  /**
  @internal
  */
  constructor(e, t, i) {
    this.parser = e, this.text = t, this.offset = i, this.parts = [];
  }
  /**
  Get the character code at the given (document-relative)
  position.
  */
  char(e) {
    return e >= this.end ? -1 : this.text.charCodeAt(e - this.offset);
  }
  /**
  The position of the end of this inline section.
  */
  get end() {
    return this.offset + this.text.length;
  }
  /**
  Get a substring of this inline section. Again uses
  document-relative positions.
  */
  slice(e, t) {
    return this.text.slice(e - this.offset, t - this.offset);
  }
  /**
  @internal
  */
  append(e) {
    return this.parts.push(e), e.to;
  }
  /**
  Add a [delimiter](#DelimiterType) at this given position. `open`
  and `close` indicate whether this delimiter is opening, closing,
  or both. Returns the end of the delimiter, for convenient
  returning from [parse functions](#InlineParser.parse).
  */
  addDelimiter(e, t, i, n, s) {
    return this.append(new ce(e, t, i, (n ? 1 : 0) | (s ? 2 : 0)));
  }
  /**
  Returns true when there is an unmatched link or image opening
  token before the current position.
  */
  get hasOpenLink() {
    for (let e = this.parts.length - 1; e >= 0; e--) {
      let t = this.parts[e];
      if (t instanceof ce && (t.type == zt || t.type == Ms))
        return !0;
    }
    return !1;
  }
  /**
  Add an inline element. Returns the end of the element.
  */
  addElement(e) {
    return this.append(e);
  }
  /**
  Resolve markers between this.parts.length and from, wrapping matched markers in the
  appropriate node and updating the content of this.parts. @internal
  */
  resolveMarkers(e) {
    for (let i = e; i < this.parts.length; i++) {
      let n = this.parts[i];
      if (!(n instanceof ce && n.type.resolve && n.side & 2))
        continue;
      let s = n.type == Mp || n.type == Zp, o = n.to - n.from, l, a = i - 1;
      for (; a >= e; a--) {
        let m = this.parts[a];
        if (m instanceof ce && m.side & 1 && m.type == n.type && // Ignore emphasis delimiters where the character count doesn't match
        !(s && (n.side & 1 || m.side & 2) && (m.to - m.from + o) % 3 == 0 && ((m.to - m.from) % 3 || o % 3))) {
          l = m;
          break;
        }
      }
      if (!l)
        continue;
      let h = n.type.resolve, f = [], u = l.from, O = n.to;
      if (s) {
        let m = Math.min(2, l.to - l.from, o);
        u = l.to - m, O = n.from + m, h = m == 1 ? "Emphasis" : "StrongEmphasis";
      }
      l.type.mark && f.push(this.elt(l.type.mark, u, l.to));
      for (let m = a + 1; m < i; m++)
        this.parts[m] instanceof un && f.push(this.parts[m]), this.parts[m] = null;
      n.type.mark && f.push(this.elt(n.type.mark, n.from, O));
      let d = this.elt(h, u, O, f);
      this.parts[a] = s && l.from != u ? new ce(l.type, l.from, u, l.side) : null, (this.parts[i] = s && n.to != O ? new ce(n.type, O, n.to, n.side) : null) ? this.parts.splice(i, 0, d) : this.parts[i] = d;
    }
    let t = [];
    for (let i = e; i < this.parts.length; i++) {
      let n = this.parts[i];
      n instanceof un && t.push(n);
    }
    return t;
  }
  /**
  Find an opening delimiter of the given type. Returns `null` if
  no delimiter is found, or an index that can be passed to
  [`takeContent`](#InlineContext.takeContent) otherwise.
  */
  findOpeningDelimiter(e) {
    for (let t = this.parts.length - 1; t >= 0; t--) {
      let i = this.parts[t];
      if (i instanceof ce && i.type == e && i.side & 1)
        return t;
    }
    return null;
  }
  /**
  Remove all inline elements and delimiters starting from the
  given index (which you should get from
  [`findOpeningDelimiter`](#InlineContext.findOpeningDelimiter),
  resolve delimiters inside of them, and return them as an array
  of elements.
  */
  takeContent(e) {
    let t = this.resolveMarkers(e);
    return this.parts.length = e, t;
  }
  /**
  Return the delimiter at the given index. Mostly useful to get
  additional info out of a delimiter index returned by
  [`findOpeningDelimiter`](#InlineContext.findOpeningDelimiter).
  Returns null if there is no delimiter at this index.
  */
  getDelimiterAt(e) {
    let t = this.parts[e];
    return t instanceof ce ? t : null;
  }
  /**
  Skip space after the given (document) position, returning either
  the position of the next non-space character or the end of the
  section.
  */
  skipSpace(e) {
    return wr(this.text, e - this.offset) + this.offset;
  }
  elt(e, t, i, n) {
    return typeof e == "string" ? V(this.parser.getNodeType(e), t, i, n) : new _s(e, t);
  }
};
c(cc, "InlineContext");
let dn = cc;
dn.linkStart = zt;
dn.imageStart = Ms;
function Za(r, e) {
  if (!e.length)
    return r;
  if (!r.length)
    return e;
  let t = r.slice(), i = 0;
  for (let n of e) {
    for (; i < t.length && t[i].to < n.to; )
      i++;
    if (i < t.length && t[i].from < n.from) {
      let s = t[i];
      s instanceof un && (t[i] = new un(s.type, s.from, s.to, Za(s.children, [n])));
    } else
      t.splice(i++, 0, n);
  }
  return t;
}
c(Za, "injectMarks");
const qQ = [P.CodeBlock, P.ListItem, P.OrderedList, P.BulletList];
var Xi;
let DQ = (Xi = class {
  constructor(e, t) {
    this.fragments = e, this.input = t, this.i = 0, this.fragment = null, this.fragmentEnd = -1, this.cursor = null, e.length && (this.fragment = e[this.i++]);
  }
  nextFragment() {
    this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, this.cursor = null, this.fragmentEnd = -1;
  }
  moveTo(e, t) {
    for (; this.fragment && this.fragment.to <= e; )
      this.nextFragment();
    if (!this.fragment || this.fragment.from > (e ? e - 1 : 0))
      return !1;
    if (this.fragmentEnd < 0) {
      let s = this.fragment.to;
      for (; s > 0 && this.input.read(s - 1, s) != `
`; )
        s--;
      this.fragmentEnd = s ? s - 1 : 0;
    }
    let i = this.cursor;
    i || (i = this.cursor = this.fragment.tree.cursor(), i.firstChild());
    let n = e + this.fragment.offset;
    for (; i.to <= n; )
      if (!i.parent())
        return !1;
    for (; ; ) {
      if (i.from >= n)
        return this.fragment.from <= t;
      if (!i.childAfter(n))
        return !1;
    }
  }
  matches(e) {
    let t = this.cursor.tree;
    return t && t.prop(C.contextHash) == e;
  }
  takeNodes(e) {
    let t = this.cursor, i = this.fragment.offset, n = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0), s = e.absoluteLineStart, o = s, l = e.block.children.length, a = o, h = l;
    for (; ; ) {
      if (t.to - i > n) {
        if (t.type.isAnonymous && t.firstChild())
          continue;
        break;
      }
      let f = Yp(t.from - i, e.ranges);
      if (t.to - i <= e.ranges[e.rangeI].to)
        e.addNode(t.tree, f);
      else {
        let u = new E(e.parser.nodeSet.types[P.Paragraph], [], [], 0, e.block.hashProp);
        e.reusePlaceholders.set(u, t.tree), e.addNode(u, f);
      }
      if (t.type.is("Block") && (qQ.indexOf(t.type.id) < 0 ? (o = t.to - i, l = e.block.children.length) : (o = a, l = h, a = t.to - i, h = e.block.children.length)), !t.nextSibling())
        break;
    }
    for (; e.block.children.length > l; )
      e.block.children.pop(), e.block.positions.pop();
    return o - s;
  }
}, c(Xi, "FragmentCursor"), Xi);
function Yp(r, e) {
  let t = r;
  for (let i = 1; i < e.length; i++) {
    let n = e[i - 1].to, s = e[i].from;
    n < r && (t -= s - n);
  }
  return t;
}
c(Yp, "toRelative");
const BQ = Ji({
  "Blockquote/...": g.quote,
  HorizontalRule: g.contentSeparator,
  "ATXHeading1/... SetextHeading1/...": g.heading1,
  "ATXHeading2/... SetextHeading2/...": g.heading2,
  "ATXHeading3/...": g.heading3,
  "ATXHeading4/...": g.heading4,
  "ATXHeading5/...": g.heading5,
  "ATXHeading6/...": g.heading6,
  "Comment CommentBlock": g.comment,
  Escape: g.escape,
  Entity: g.character,
  "Emphasis/...": g.emphasis,
  "StrongEmphasis/...": g.strong,
  "Link/... Image/...": g.link,
  "OrderedList/... BulletList/...": g.list,
  "BlockQuote/...": g.quote,
  "InlineCode CodeText": g.monospace,
  "URL Autolink": g.url,
  "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": g.processingInstruction,
  "CodeInfo LinkLabel": g.labelName,
  LinkTitle: g.string,
  Paragraph: g.content
}), NQ = new As(new Ui(_p).extend(BQ), Object.keys(qn).map((r) => qn[r]), Object.keys(qn).map((r) => Ap[r]), Object.keys(qn), IQ, bp, Object.keys(Io).map((r) => Io[r]), Object.keys(Io), []);
function GQ(r, e, t) {
  let i = [];
  for (let n = r.firstChild, s = e; ; n = n.nextSibling) {
    let o = n ? n.from : t;
    if (o > s && i.push({ from: s, to: o }), !n)
      break;
    s = n.to;
  }
  return i;
}
c(GQ, "leftOverSpace");
function FQ(r) {
  let { codeParser: e, htmlParser: t } = r;
  return { wrap: Jd((n, s) => {
    let o = n.type.id;
    if (e && (o == P.CodeBlock || o == P.FencedCode)) {
      let l = "";
      if (o == P.FencedCode) {
        let h = n.node.getChild(P.CodeInfo);
        h && (l = s.read(h.from, h.to));
      }
      let a = e(l);
      if (a)
        return { parser: a, overlay: /* @__PURE__ */ c((h) => h.type.id == P.CodeText, "overlay") };
    } else if (t && (o == P.HTMLBlock || o == P.HTMLTag || o == P.CommentBlock))
      return { parser: t, overlay: GQ(n.node, n.from, n.to) };
    return null;
  }) };
}
c(FQ, "parseCode");
const HQ = { resolve: "Strikethrough", mark: "StrikethroughMark" }, KQ = {
  defineNodes: [{
    name: "Strikethrough",
    style: { "Strikethrough/...": g.strikethrough }
  }, {
    name: "StrikethroughMark",
    style: g.processingInstruction
  }],
  parseInline: [{
    name: "Strikethrough",
    parse(r, e, t) {
      if (e != 126 || r.char(t + 1) != 126 || r.char(t + 2) == 126)
        return -1;
      let i = r.slice(t - 1, t), n = r.slice(t + 2, t + 3), s = /\s|^$/.test(i), o = /\s|^$/.test(n), l = On.test(i), a = On.test(n);
      return r.addDelimiter(HQ, t, t + 2, !o && (!a || s || l), !s && (!l || o || a));
    },
    after: "Emphasis"
  }]
};
function xr(r, e, t = 0, i, n = 0) {
  let s = 0, o = !0, l = -1, a = -1, h = !1, f = /* @__PURE__ */ c(() => {
    i.push(r.elt("TableCell", n + l, n + a, r.parser.parseInline(e.slice(l, a), n + l)));
  }, "parseCell");
  for (let u = t; u < e.length; u++) {
    let O = e.charCodeAt(u);
    O == 124 && !h ? ((!o || l > -1) && s++, o = !1, i && (l > -1 && f(), i.push(r.elt("TableDelimiter", u + n, u + n + 1))), l = a = -1) : (h || O != 32 && O != 9) && (l < 0 && (l = u), a = u + 1), h = !h && O == 92;
  }
  return l > -1 && (s++, i && f()), s;
}
c(xr, "parseRow");
function Du(r, e) {
  for (let t = e; t < r.length; t++) {
    let i = r.charCodeAt(t);
    if (i == 124)
      return !0;
    i == 92 && t++;
  }
  return !1;
}
c(Du, "hasPipe");
const Vp = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/, uc = class uc {
  constructor() {
    this.rows = null;
  }
  nextLine(e, t, i) {
    if (this.rows == null) {
      this.rows = !1;
      let n;
      if ((t.next == 45 || t.next == 58 || t.next == 124) && Vp.test(n = t.text.slice(t.pos))) {
        let s = [];
        xr(e, i.content, 0, s, i.start) == xr(e, n, t.pos) && (this.rows = [
          e.elt("TableHeader", i.start, i.start + i.content.length, s),
          e.elt("TableDelimiter", e.lineStart + t.pos, e.lineStart + t.text.length)
        ]);
      }
    } else if (this.rows) {
      let n = [];
      xr(e, t.text, t.pos, n, e.lineStart), this.rows.push(e.elt("TableRow", e.lineStart + t.pos, e.lineStart + t.text.length, n));
    }
    return !1;
  }
  finish(e, t) {
    return this.rows ? (e.addLeafElement(t, e.elt("Table", t.start, t.start + t.content.length, this.rows)), !0) : !1;
  }
};
c(uc, "TableParser");
let Zs = uc;
const JQ = {
  defineNodes: [
    { name: "Table", block: !0 },
    { name: "TableHeader", style: { "TableHeader/...": g.heading } },
    "TableRow",
    { name: "TableCell", style: g.content },
    { name: "TableDelimiter", style: g.processingInstruction }
  ],
  parseBlock: [{
    name: "Table",
    leaf(r, e) {
      return Du(e.content, 0) ? new Zs() : null;
    },
    endLeaf(r, e, t) {
      if (t.parsers.some((n) => n instanceof Zs) || !Du(e.text, e.basePos))
        return !1;
      let i = r.peekLine();
      return Vp.test(i) && xr(r, e.text, e.basePos) == xr(r, i, e.basePos);
    },
    before: "SetextHeading"
  }]
}, Oc = class Oc {
  nextLine() {
    return !1;
  }
  finish(e, t) {
    return e.addLeafElement(t, e.elt("Task", t.start, t.start + t.content.length, [
      e.elt("TaskMarker", t.start, t.start + 3),
      ...e.parser.parseInline(t.content.slice(3), t.start + 3)
    ])), !0;
  }
};
c(Oc, "TaskParser");
let Ca = Oc;
const ey = {
  defineNodes: [
    { name: "Task", block: !0, style: g.list },
    { name: "TaskMarker", style: g.atom }
  ],
  parseBlock: [{
    name: "TaskList",
    leaf(r, e) {
      return /^\[[ xX]\][ \t]/.test(e.content) && r.parentType().name == "ListItem" ? new Ca() : null;
    },
    after: "SetextHeading"
  }]
}, Bu = /(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy, Nu = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy, ty = /[\w-]+\.[\w-]+($|\/)/, Gu = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy, Fu = /\/[a-zA-Z\d@.]+/gy;
function Hu(r, e, t, i) {
  let n = 0;
  for (let s = e; s < t; s++)
    r[s] == i && n++;
  return n;
}
c(Hu, "count");
function iy(r, e) {
  Nu.lastIndex = e;
  let t = Nu.exec(r);
  if (!t || ty.exec(t[0])[0].indexOf("_") > -1)
    return -1;
  let i = e + t[0].length;
  for (; ; ) {
    let n = r[i - 1], s;
    if (/[?!.,:*_~]/.test(n) || n == ")" && Hu(r, e, i, ")") > Hu(r, e, i, "("))
      i--;
    else if (n == ";" && (s = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(r.slice(e, i))))
      i = e + s.index;
    else
      break;
  }
  return i;
}
c(iy, "autolinkURLEnd");
function Ku(r, e) {
  Gu.lastIndex = e;
  let t = Gu.exec(r);
  if (!t)
    return -1;
  let i = t[0][t[0].length - 1];
  return i == "_" || i == "-" ? -1 : e + t[0].length - (i == "." ? 1 : 0);
}
c(Ku, "autolinkEmailEnd");
const ry = {
  parseInline: [{
    name: "Autolink",
    parse(r, e, t) {
      let i = t - r.offset;
      if (i && /\w/.test(r.text[i - 1]))
        return -1;
      Bu.lastIndex = i;
      let n = Bu.exec(r.text), s = -1;
      if (!n)
        return -1;
      if (n[1] || n[2]) {
        if (s = iy(r.text, i + n[0].length), s > -1 && r.hasOpenLink) {
          let o = /([^\[\]]|\[[^\]]*\])*/.exec(r.text.slice(i, s));
          s = i + o[0].length;
        }
      } else n[3] ? s = Ku(r.text, i) : (s = Ku(r.text, i + n[0].length), s > -1 && n[0] == "xmpp:" && (Fu.lastIndex = s, n = Fu.exec(r.text), n && (s = n.index + n[0].length)));
      return s < 0 ? -1 : (r.addElement(r.elt("URL", t, s + r.offset)), s + r.offset);
    }
  }]
}, ny = [JQ, ey, KQ, ry];
function Wp(r, e, t) {
  return (i, n, s) => {
    if (n != r || i.char(s + 1) == r)
      return -1;
    let o = [i.elt(t, s, s + 1)];
    for (let l = s + 1; l < i.end; l++) {
      let a = i.char(l);
      if (a == r)
        return i.addElement(i.elt(e, s, l + 1, o.concat(i.elt(t, l, l + 1))));
      if (a == 92 && o.push(i.elt("Escape", l, l++ + 2)), Ee(a))
        break;
    }
    return -1;
  };
}
c(Wp, "parseSubSuper");
const sy = {
  defineNodes: [
    { name: "Superscript", style: g.special(g.content) },
    { name: "SuperscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Superscript",
    parse: Wp(94, "Superscript", "SuperscriptMark")
  }]
}, oy = {
  defineNodes: [
    { name: "Subscript", style: g.special(g.content) },
    { name: "SubscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Subscript",
    parse: Wp(126, "Subscript", "SubscriptMark")
  }]
}, ly = {
  defineNodes: [{ name: "Emoji", style: g.character }],
  parseInline: [{
    name: "Emoji",
    parse(r, e, t) {
      let i;
      return e != 58 || !(i = /^[a-zA-Z_0-9]+:/.exec(r.slice(t + 1, r.end))) ? -1 : r.addElement(r.elt("Emoji", t, t + 1 + i[0].length));
    }
  }]
}, zr = class zr {
  /**
  @internal
  */
  constructor(e, t, i, n, s, o, l, a, h, f = 0, u) {
    this.p = e, this.stack = t, this.state = i, this.reducePos = n, this.pos = s, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = f, this.parent = u;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(e, t, i = 0) {
    let n = e.parser.context;
    return new zr(e, [], t, i, i, 0, [], 0, n ? new Cs(n, n.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), this.state = e;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(e) {
    var t;
    let i = e >> 19, n = e & 65535, { parser: s } = this.p, o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = s.dynamicPrecedence(n);
    if (l && (this.score += l), i == 0) {
      this.pushState(s.getGoto(this.state, n, !0), this.reducePos), n < s.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from, f = this.reducePos - h;
    f >= 2e3 && !(!((t = this.p.parser.nodeSet.types[n]) === null || t === void 0) && t.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = f) : this.p.lastBigReductionSize < f && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = f));
    let u = a ? this.stack[a - 1] : 0, O = this.bufferBase + this.buffer.length - u;
    if (n < s.minRepeatTerm || e & 131072) {
      let d = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(n, h, d, O + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = s.getGoto(d, n, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(n, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(e, t, i, n = 4, s = !1) {
    if (e == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this, l = this.buffer.length;
      if (l == 0 && o.parent && (l = o.bufferBase - o.parent.bufferBase, o = o.parent), l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1) {
        if (t == i)
          return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = i;
          return;
        }
      }
    }
    if (!s || this.pos == i)
      this.buffer.push(e, t, i, n);
    else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > i; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, n > 4 && (n -= 4);
      }
      this.buffer[o] = e, this.buffer[o + 1] = t, this.buffer[o + 2] = i, this.buffer[o + 3] = n;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(e, t, i, n) {
    if (e & 131072)
      this.pushState(e & 65535, this.pos);
    else if ((e & 262144) == 0) {
      let s = e, { parser: o } = this.p;
      (n > this.pos || t <= o.maxNode) && (this.pos = n, o.stateFlag(
        s,
        1
        /* StateFlag.Skipped */
      ) || (this.reducePos = n)), this.pushState(s, i), this.shiftContext(t, i), t <= o.maxNode && this.buffer.push(t, i, n, 4);
    } else
      this.pos = n, this.shiftContext(t, i), t <= this.p.parser.maxNode && this.buffer.push(t, i, n, 4);
  }
  // Apply an action
  /**
  @internal
  */
  apply(e, t, i, n) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, n);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let n = this.pos;
    this.reducePos = this.pos = n + e.length, this.pushState(t, n), this.buffer.push(
      i,
      n,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, e, this, this.p.stream.reset(this.pos - e.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let e = this, t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; )
      t -= 4;
    let i = e.buffer.slice(t), n = e.bufferBase + t;
    for (; e && n == e.bufferBase; )
      e = e.parent;
    return new zr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, e);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4), this.storeNode(0, this.pos, t, i ? 8 : 4), this.pos = this.reducePos = t, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(e) {
    for (let t = new Ea(this); ; ) {
      let i = this.p.parser.stateSlot(
        t.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(t.state, e);
      if (i == 0)
        return !1;
      if ((i & 65536) == 0)
        return !0;
      t.reduce(i);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(e) {
    if (this.stack.length >= 300)
      return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let n = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && n.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; n.length < 8 && s < t.length; s += 2) {
          let o = t[s + 1];
          n.some((l, a) => a & 1 && l == o) || n.push(t[s], o);
        }
      t = n;
    }
    let i = [];
    for (let n = 0; n < t.length && i.length < 4; n += 2) {
      let s = t[n + 1];
      if (s == this.state)
        continue;
      let o = this.split();
      o.pushState(s, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(t[n], this.pos), o.reducePos = this.pos, o.score -= 200, i.push(o);
    }
    return i;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: e } = this.p, t = e.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if ((t & 65536) == 0)
      return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19, n = t & 65535, s = this.stack.length - i * 3;
      if (s < 0 || e.getGoto(this.stack[s], n, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(t), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: e } = this.p, t = [], i = /* @__PURE__ */ c((n, s) => {
      if (!t.includes(n))
        return t.push(n), e.allActions(n, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - s;
            if (l > 1) {
              let a = o & 65535, h = this.stack.length - l * 3;
              if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = i(o, s + 1);
            if (l != null)
              return l;
          }
        });
    }, "explore");
    return i(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !e.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length)
      return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  reduceContext(e, t) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t)));
  }
  /**
  @internal
  */
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new Cs(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), this.curContext = t;
    }
  }
  /**
  @internal
  */
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), this.lookAhead = e);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
};
c(zr, "Stack");
let Xa = zr;
const dc = class dc {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
};
c(dc, "StackContext");
let Cs = dc;
const pc = class pc {
  constructor(e) {
    this.start = e, this.state = e.state, this.stack = e.stack, this.base = this.stack.length;
  }
  reduce(e) {
    let t = e & 65535, i = e >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = n;
  }
};
c(pc, "SimulatedStack");
let Ea = pc;
const jr = class jr {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new jr(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null && (this.index = this.stack.bufferBase - e.bufferBase, this.stack = e, this.buffer = e.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new jr(this.stack, this.pos, this.index);
  }
};
c(jr, "StackBufferCursor");
let Ya = jr;
function dr(r, e = Uint16Array) {
  if (typeof r != "string")
    return r;
  let t = null;
  for (let i = 0, n = 0; i < r.length; ) {
    let s = 0;
    for (; ; ) {
      let o = r.charCodeAt(i++), l = !1;
      if (o == 126) {
        s = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), s += a, l)
        break;
      s *= 46;
    }
    t ? t[n++] = s : t = new e(s);
  }
  return t;
}
c(dr, "decodeArray");
const mc = class mc {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
};
c(mc, "CachedToken");
let vi = mc;
const Ju = new vi(), gc = class gc {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Ju, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(e, t) {
    let i = this.range, n = this.rangeIndex, s = this.pos + e;
    for (; s < i.from; ) {
      if (!n)
        return null;
      let o = this.ranges[--n];
      s -= i.from - o.to, i = o;
    }
    for (; t < 0 ? s > i.to : s >= i.to; ) {
      if (n == this.ranges.length - 1)
        return null;
      let o = this.ranges[++n];
      s += o.from - i.to, i = o;
    }
    return s;
  }
  /**
  @internal
  */
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to)
      return e;
    for (let t of this.ranges)
      if (t.to > e)
        return Math.max(e, t.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(e) {
    let t = this.chunkOff + e, i, n;
    if (t >= 0 && t < this.chunk.length)
      i = this.pos + e, n = this.chunk.charCodeAt(t);
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null)
        return -1;
      if (i = s, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        n = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= i; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)), n = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), n;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = e, this.token.end = i;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(e, t) {
    this.token.value = e, this.token.end = t;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = e, this.chunk2Pos = t, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let e = this.input.chunk(this.pos), t = this.pos + e.length;
      this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      e -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += e, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(e, t) {
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Ju, this.pos != e) {
      if (this.pos = e, e == this.end)
        return this.setDone(), this;
      for (; e < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length ? this.chunkOff = e - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let i = "";
    for (let n of this.ranges) {
      if (n.from >= t)
        break;
      n.to > e && (i += this.input.read(Math.max(n.from, e), Math.min(n.to, t)));
    }
    return i;
  }
};
c(gc, "InputStream");
let Va = gc;
const Qc = class Qc {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    Up(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
};
c(Qc, "TokenGroup");
let kt = Qc;
kt.prototype.contextual = kt.prototype.fallback = kt.prototype.extend = !1;
const yc = class yc {
  constructor(e, t, i) {
    this.precTable = t, this.elseToken = i, this.data = typeof e == "string" ? dr(e) : e;
  }
  token(e, t) {
    let i = e.pos, n = 0;
    for (; ; ) {
      let s = e.next < 0, o = e.resolveOffset(1, 1);
      if (Up(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
        break;
      if (this.elseToken == null)
        return;
      if (s || n++, o == null)
        break;
      e.reset(o, e.token);
    }
    n && (e.reset(i, e.token), e.acceptToken(this.elseToken, n));
  }
};
c(yc, "LocalTokenGroup");
let Fi = yc;
Fi.prototype.contextual = kt.prototype.fallback = kt.prototype.extend = !1;
const Sc = class Sc {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(e, t = {}) {
    this.token = e, this.contextual = !!t.contextual, this.fallback = !!t.fallback, this.extend = !!t.extend;
  }
};
c(Sc, "ExternalTokenizer");
let Qe = Sc;
function Up(r, e, t, i, n, s) {
  let o = 0, l = 1 << i, { dialect: a } = t.p.parser;
  e: for (; (l & r[o]) != 0; ) {
    let h = r[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((r[d + 1] & l) > 0) {
        let p = r[d];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || ay(p, e.token.value, n, s))) {
          e.acceptToken(p);
          break;
        }
      }
    let f = e.next, u = 0, O = r[o + 2];
    if (e.next < 0 && O > u && r[h + O * 3 - 3] == 65535) {
      o = r[h + O * 3 - 1];
      continue e;
    }
    for (; u < O; ) {
      let d = u + O >> 1, p = h + d + (d << 1), m = r[p], Q = r[p + 1] || 65536;
      if (f < m)
        O = d;
      else if (f >= Q)
        u = d + 1;
      else {
        o = r[p + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
c(Up, "readToken");
function eO(r, e, t) {
  for (let i = e, n; (n = r[i]) != 65535; i++)
    if (n == t)
      return i - e;
  return -1;
}
c(eO, "findOffset");
function ay(r, e, t, i) {
  let n = eO(t, i, e);
  return n < 0 || eO(t, i, r) < n;
}
c(ay, "overrides");
const we = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let zo = null;
function tO(r, e, t) {
  let i = r.cursor(B.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (; ; ) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0 ? Math.max(0, Math.min(
            i.to - 1,
            e - 25
            /* Lookahead.Margin */
          )) : Math.min(r.length, Math.max(
            i.from + 1,
            e + 25
            /* Lookahead.Margin */
          ));
        if (t < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return t < 0 ? 0 : r.length;
      }
}
c(tO, "cutAt");
const bc = class bc {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? tO(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? tO(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree), this.start.push(-e.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(e) {
    if (e < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= e; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let t = this.trees.length - 1;
      if (t < 0)
        return this.nextFragment(), null;
      let i = this.trees[t], n = this.index[t];
      if (n == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = i.children[n], o = this.start[t] + i.positions[n];
      if (o > e)
        return this.nextStart = o, null;
      if (s instanceof E) {
        if (o == e) {
          if (o < this.safeFrom)
            return null;
          let l = o + s.length;
          if (l <= this.safeTo) {
            let a = s.prop(C.lookAhead);
            if (!a || l + a < this.fragment.to)
              return s;
          }
        }
        this.index[t]++, o + s.length >= Math.max(this.safeFrom, e) && (this.trees.push(s), this.start.push(o), this.index.push(0));
      } else
        this.index[t]++, this.nextStart = o + s.length;
    }
  }
};
c(bc, "FragmentCursor");
let Wa = bc;
const wc = class wc {
  constructor(e, t) {
    this.stream = t, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = e.tokenizers.map((i) => new vi());
  }
  getActions(e) {
    let t = 0, i = null, { parser: n } = e.p, { tokenizers: s } = n, o = n.stateSlot(
      e.state,
      3
      /* ParseState.TokenizerMask */
    ), l = e.curContext ? e.curContext.hash : 0, a = 0;
    for (let h = 0; h < s.length; h++) {
      if ((1 << h & o) == 0)
        continue;
      let f = s[h], u = this.tokens[h];
      if (!(i && !f.fallback) && ((f.contextual || u.start != e.pos || u.mask != o || u.context != l) && (this.updateCachedToken(u, f, e), u.mask = o, u.context = l), u.lookAhead > u.end + 25 && (a = Math.max(u.lookAhead, a)), u.value != 0)) {
        let O = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !f.extend && (i = u, t > O))
          break;
      }
    }
    for (; this.actions.length > t; )
      this.actions.pop();
    return a && e.setLookAhead(a), !i && e.pos == this.stream.end && (i = new vi(), i.value = e.p.parser.eofTerm, i.start = i.end = e.pos, t = this.addActions(e, i.value, i.end, t)), this.mainToken = i, this.actions;
  }
  getMainToken(e) {
    if (this.mainToken)
      return this.mainToken;
    let t = new vi(), { pos: i, p: n } = e;
    return t.start = i, t.end = Math.min(i + 1, n.stream.end), t.value = i == n.stream.end ? n.parser.eofTerm : 0, t;
  }
  updateCachedToken(e, t, i) {
    let n = this.stream.clipPos(i.pos);
    if (t.token(this.stream.reset(n, e), i), e.value > -1) {
      let { parser: s } = i.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            (l & 1) == 0 ? e.value = l >> 1 : e.extended = l >> 1;
            break;
          }
        }
    } else
      e.value = 0, e.end = this.stream.clipPos(n + 1);
  }
  putAction(e, t, i, n) {
    for (let s = 0; s < n; s += 3)
      if (this.actions[s] == e)
        return n;
    return this.actions[n++] = e, this.actions[n++] = t, this.actions[n++] = i, n;
  }
  addActions(e, t, i, n) {
    let { state: s } = e, { parser: o } = e.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(
        s,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1)
            h = at(l, h + 2);
          else {
            n == 0 && l[h + 1] == 2 && (n = this.putAction(at(l, h + 2), t, i, n));
            break;
          }
        l[h] == t && (n = this.putAction(at(l, h + 1), t, i, n));
      }
    return n;
  }
};
c(wc, "TokenCache");
let Ua = wc;
const xc = class xc {
  constructor(e, t, i, n) {
    this.parser = e, this.input = t, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Va(t, n), this.tokens = new Ua(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = n[0];
    this.stacks = [Xa.start(this, e.top[0], s)], this.fragments = i.length && this.stream.end - s > e.bufferLength * 4 ? new Wa(i, e.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let e = this.stacks, t = this.minStackPos, i = this.stacks = [], n, s;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > t)
          i.push(l);
        else {
          if (this.advanceStack(l, i, e))
            continue;
          {
            n || (n = [], s = []), n.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = n && hy(n);
      if (o)
        return we && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw we && n && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + t);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && n) {
      let o = this.stoppedAt != null && n[0].pos > this.stoppedAt ? n[0] : this.runRecovery(n, s, i);
      if (o)
        return we && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o)
        for (i.sort((l, a) => a.score - l.score); i.length > o; )
          i.pop();
      i.some((l) => l.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e: for (let o = 0; o < i.length - 1; o++) {
        let l = i[o];
        for (let a = o + 1; a < i.length; a++) {
          let h = i[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              i.splice(a--, 1);
            else {
              i.splice(o--, 1);
              continue e;
            }
        }
      }
      i.length > 12 && i.splice(
        12,
        i.length - 12
        /* Rec.MaxStackCount */
      );
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++)
      i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(e, t, i) {
    let n = e.pos, { parser: s } = this, o = we ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && n > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict, f = h ? e.curContext.hash : 0;
      for (let u = this.fragments.nodeAt(n); u; ) {
        let O = this.parser.nodeSet.types[u.type.id] == u.type ? s.getGoto(e.state, u.type.id) : -1;
        if (O > -1 && u.length && (!h || (u.prop(C.contextHash) || 0) == f))
          return e.useNode(u, O), we && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(u.type.id)})`), !0;
        if (!(u instanceof E) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let d = u.children[0];
        if (d instanceof E && u.positions[0] == 0)
          u = d;
        else
          break;
      }
    }
    let l = s.stateSlot(
      e.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return e.reduce(l), we && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); )
        ;
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let f = a[h++], u = a[h++], O = a[h++], d = h == a.length || !i, p = d ? e : e.split(), m = this.tokens.mainToken;
      if (p.apply(f, u, m ? m.start : p.pos, O), we && console.log(o + this.stackID(p) + ` (via ${(f & 65536) == 0 ? "shift" : `reduce of ${s.getName(
        f & 65535
        /* Action.ValueMask */
      )}`} for ${s.getName(u)} @ ${n}${p == e ? "" : ", split"})`), d)
        return !0;
      p.pos > n ? t.push(p) : i.push(p);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(e, t) {
    let i = e.pos;
    for (; ; ) {
      if (!this.advanceStack(e, null, null))
        return !1;
      if (e.pos > i)
        return iO(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let n = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], h = t[(o << 1) + 1], f = we ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), we && console.log(f + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let u = l.split(), O = f;
      for (let d = 0; d < 10 && u.forceReduce() && (we && console.log(O + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, i)); d++)
        we && (O = this.stackID(u) + " -> ");
      for (let d of l.recoverByInsert(a))
        we && console.log(f + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), we && console.log(f + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), iO(l, i)) : (!n || n.score < l.score) && (n = l);
    }
    return n;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), E.build({
      buffer: Ya.create(e),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: e.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(e) {
    let t = (zo || (zo = /* @__PURE__ */ new WeakMap())).get(e);
    return t || zo.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
};
c(xc, "Parse");
let Ia = xc;
function iO(r, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == r.pos && i.sameState(r)) {
      e[t].score < r.score && (e[t] = r);
      return;
    }
  }
  e.push(r);
}
c(iO, "pushStackDedup");
const Pc = class Pc {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
};
c(Pc, "Dialect");
let za = Pc;
const jo = /* @__PURE__ */ c((r) => r, "id"), kc = class kc {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || jo, this.reduce = e.reduce || jo, this.reuse = e.reuse || jo, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
};
c(kc, "ContextTracker");
let Xs = kc;
const qr = class qr extends zi {
  /**
  @internal
  */
  constructor(e) {
    if (super(), this.wrappers = [], e.version != 14)
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++)
      t.push("");
    let i = Object.keys(e.topRules).map((l) => e.topRules[l][1]), n = [];
    for (let l = 0; l < t.length; l++)
      n.push([]);
    function s(l, a, h) {
      n[l].push([a, a.deserialize(String(h))]);
    }
    if (c(s, "setProp"), e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = C[a]);
        for (let h = 1; h < l.length; ) {
          let f = l[h++];
          if (f >= 0)
            s(f, a, l[h++]);
          else {
            let u = l[h + -f];
            for (let O = -f; O > 0; O--)
              s(l[h++], a, u);
            h++;
          }
        }
      }
    this.nodeSet = new Ui(t.map((l, a) => te.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: n[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = Fd;
    let o = dr(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(rO), this.states = dr(e.states, Uint32Array), this.data = dr(e.stateData), this.goto = dr(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new kt(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let n = new Ia(this, e, t, i);
    for (let s of this.wrappers)
      n = s(n, e, t, i);
    return n;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(e, t, i = !1) {
    let n = this.goto;
    if (t >= n[0])
      return -1;
    for (let s = n[t + 1]; ; ) {
      let o = n[s++], l = o & 1, a = n[s++];
      if (l && i)
        return a;
      for (let h = s + (o >> 1); s < h; s++)
        if (n[s] == e)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(e, t) {
    let i = this.data;
    for (let n = 0; n < 2; n++)
      for (let s = this.stateSlot(
        e,
        n ? 2 : 1
        /* ParseState.Actions */
      ), o; ; s += 3) {
        if ((o = i[s]) == 65535)
          if (i[s + 1] == 1)
            o = i[s = at(i, s + 2)];
          else {
            if (i[s + 1] == 2)
              return at(i, s + 2);
            break;
          }
        if (o == t || o == 0)
          return at(i, s + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  /**
  @internal
  */
  stateFlag(e, t) {
    return (this.stateSlot(
      e,
      0
      /* ParseState.Flags */
    ) & t) > 0;
  }
  /**
  @internal
  */
  validAction(e, t) {
    return !!this.allActions(e, (i) => i == t ? !0 : null);
  }
  /**
  @internal
  */
  allActions(e, t) {
    let i = this.stateSlot(
      e,
      4
      /* ParseState.DefaultReduce */
    ), n = i ? t(i) : void 0;
    for (let s = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); n == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1)
          s = at(this.data, s + 2);
        else
          break;
      n = t(at(this.data, s + 1));
    }
    return n;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(
      e,
      1
      /* ParseState.Actions */
    ); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = at(this.data, i + 2);
        else
          break;
      if ((this.data[i + 2] & 1) == 0) {
        let n = this.data[i + 1];
        t.some((s, o) => o & 1 && s == n) || t.push(this.data[i], n);
      }
    }
    return t;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(e) {
    let t = Object.assign(Object.create(qr.prototype), this);
    if (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top) {
      let i = this.topRules[e.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return e.tokenizers && (t.tokenizers = this.tokenizers.map((i) => {
      let n = e.tokenizers.find((s) => s.from == i);
      return n ? n.to : i;
    })), e.specializers && (t.specializers = this.specializers.slice(), t.specializerSpecs = this.specializerSpecs.map((i, n) => {
      let s = e.specializers.find((l) => l.from == i.external);
      if (!s)
        return i;
      let o = Object.assign(Object.assign({}, i), { external: s.to });
      return t.specializers[n] = rO(o), o;
    })), e.contextTracker && (t.context = e.contextTracker), e.dialect && (t.dialect = this.parseDialect(e.dialect)), e.strict != null && (t.strict = e.strict), e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)), e.bufferLength != null && (t.bufferLength = e.bufferLength), t;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(e) {
    return this.termNames ? this.termNames[e] : String(e <= this.maxNode && this.nodeSet.types[e].name || e);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  /**
  @internal
  */
  parseDialect(e) {
    let t = Object.keys(this.dialects), i = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (i[o] = !0);
      }
    let n = null;
    for (let s = 0; s < t.length; s++)
      if (!i[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (n || (n = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new za(e, i, n);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new qr(e);
  }
};
c(qr, "LRParser");
let pn = qr;
function at(r, e) {
  return r[e] | r[e + 1] << 16;
}
c(at, "pair");
function hy(r) {
  let e = null;
  for (let t of r) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || i != null && t.pos > i) && t.p.parser.stateFlag(
      t.state,
      2
      /* StateFlag.Accepting */
    ) && (!e || e.score < t.score) && (e = t);
  }
  return e;
}
c(hy, "findFinished");
function rO(r) {
  if (r.external) {
    let e = r.extend ? 1 : 0;
    return (t, i) => r.external(t, i) << 1 | e;
  }
  return r.get;
}
c(rO, "getSpecializer");
const fy = 55, cy = 1, uy = 56, Oy = 2, dy = 57, py = 3, nO = 4, my = 5, wh = 6, Ip = 7, zp = 8, jp = 9, qp = 10, gy = 11, Qy = 12, yy = 13, qo = 58, Sy = 14, by = 15, sO = 59, Dp = 21, wy = 23, Bp = 24, xy = 25, ja = 27, Np = 28, Py = 29, ky = 32, $y = 35, Ry = 37, vy = 38, Ty = 0, Ay = 1, Ly = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
}, _y = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
}, oO = {
  dd: { dd: !0, dt: !0 },
  dt: { dd: !0, dt: !0 },
  li: { li: !0 },
  option: { option: !0, optgroup: !0 },
  optgroup: { optgroup: !0 },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: { rp: !0, rt: !0 },
  rt: { rp: !0, rt: !0 },
  tbody: { tbody: !0, tfoot: !0 },
  td: { td: !0, th: !0 },
  tfoot: { tbody: !0 },
  th: { td: !0, th: !0 },
  thead: { tbody: !0, tfoot: !0 },
  tr: { tr: !0 }
};
function My(r) {
  return r == 45 || r == 46 || r == 58 || r >= 65 && r <= 90 || r == 95 || r >= 97 && r <= 122 || r >= 161;
}
c(My, "nameChar");
let lO = null, aO = null, hO = 0;
function qa(r, e) {
  let t = r.pos + e;
  if (hO == t && aO == r) return lO;
  let i = r.peek(e), n = "";
  for (; My(i); )
    n += String.fromCharCode(i), i = r.peek(++e);
  return aO = r, hO = t, lO = n ? n.toLowerCase() : i == Zy || i == Cy ? void 0 : null;
}
c(qa, "tagNameAfter");
const Gp = 60, Es = 62, xh = 47, Zy = 63, Cy = 33, Xy = 45;
function fO(r, e) {
  this.name = r, this.parent = e;
}
c(fO, "ElementContext");
const Ey = [wh, qp, Ip, zp, jp], Yy = new Xs({
  start: null,
  shift(r, e, t, i) {
    return Ey.indexOf(e) > -1 ? new fO(qa(i, 1) || "", r) : r;
  },
  reduce(r, e) {
    return e == Dp && r ? r.parent : r;
  },
  reuse(r, e, t, i) {
    let n = e.type.id;
    return n == wh || n == Ry ? new fO(qa(i, 1) || "", r) : r;
  },
  strict: !1
}), Vy = new Qe((r, e) => {
  if (r.next != Gp) {
    r.next < 0 && e.context && r.acceptToken(qo);
    return;
  }
  r.advance();
  let t = r.next == xh;
  t && r.advance();
  let i = qa(r, 0);
  if (i === void 0) return;
  if (!i) return r.acceptToken(t ? by : Sy);
  let n = e.context ? e.context.name : null;
  if (t) {
    if (i == n) return r.acceptToken(gy);
    if (n && _y[n]) return r.acceptToken(qo, -2);
    if (e.dialectEnabled(Ty)) return r.acceptToken(Qy);
    for (let s = e.context; s; s = s.parent) if (s.name == i) return;
    r.acceptToken(yy);
  } else {
    if (i == "script") return r.acceptToken(Ip);
    if (i == "style") return r.acceptToken(zp);
    if (i == "textarea") return r.acceptToken(jp);
    if (Ly.hasOwnProperty(i)) return r.acceptToken(qp);
    n && oO[n] && oO[n][i] ? r.acceptToken(qo, -1) : r.acceptToken(wh);
  }
}, { contextual: !0 }), Wy = new Qe((r) => {
  for (let e = 0, t = 0; ; t++) {
    if (r.next < 0) {
      t && r.acceptToken(sO);
      break;
    }
    if (r.next == Xy)
      e++;
    else if (r.next == Es && e >= 2) {
      t >= 3 && r.acceptToken(sO, -2);
      break;
    } else
      e = 0;
    r.advance();
  }
});
function Uy(r) {
  for (; r; r = r.parent)
    if (r.name == "svg" || r.name == "math") return !0;
  return !1;
}
c(Uy, "inForeignElement");
const Iy = new Qe((r, e) => {
  if (r.next == xh && r.peek(1) == Es) {
    let t = e.dialectEnabled(Ay) || Uy(e.context);
    r.acceptToken(t ? my : nO, 2);
  } else r.next == Es && r.acceptToken(nO, 1);
});
function Ph(r, e, t) {
  let i = 2 + r.length;
  return new Qe((n) => {
    for (let s = 0, o = 0, l = 0; ; l++) {
      if (n.next < 0) {
        l && n.acceptToken(e);
        break;
      }
      if (s == 0 && n.next == Gp || s == 1 && n.next == xh || s >= 2 && s < i && n.next == r.charCodeAt(s - 2))
        s++, o++;
      else if (s == i && n.next == Es) {
        l > o ? n.acceptToken(e, -o) : n.acceptToken(t, -(o - 2));
        break;
      } else if ((n.next == 10 || n.next == 13) && l) {
        n.acceptToken(e, 1);
        break;
      } else
        s = o = 0;
      n.advance();
    }
  });
}
c(Ph, "contentTokenizer");
const zy = Ph("script", fy, cy), jy = Ph("style", uy, Oy), qy = Ph("textarea", dy, py), Dy = Ji({
  "Text RawText IncompleteTag IncompleteCloseTag": g.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": g.angleBracket,
  TagName: g.tagName,
  "MismatchedCloseTag/TagName": [g.tagName, g.invalid],
  AttributeName: g.attributeName,
  "AttributeValue UnquotedAttributeValue": g.attributeValue,
  Is: g.definitionOperator,
  "EntityReference CharacterReference": g.character,
  Comment: g.blockComment,
  ProcessingInst: g.processingInstruction,
  DoctypeDecl: g.documentMeta
}), By = pn.deserialize({
  version: 14,
  states: ",xOVO!rOOO!ZQ#tO'#CrO!`Q#tO'#C{O!eQ#tO'#DOO!jQ#tO'#DRO!oQ#tO'#DTO!tOaO'#CqO#PObO'#CqO#[OdO'#CqO$kO!rO'#CqOOO`'#Cq'#CqO$rO$fO'#DUO$zQ#tO'#DWO%PQ#tO'#DXOOO`'#Dl'#DlOOO`'#DZ'#DZQVO!rOOO%UQ&rO,59^O%aQ&rO,59gO%lQ&rO,59jO%wQ&rO,59mO&SQ&rO,59oOOOa'#D_'#D_O&_OaO'#CyO&jOaO,59]OOOb'#D`'#D`O&rObO'#C|O&}ObO,59]OOOd'#Da'#DaO'VOdO'#DPO'bOdO,59]OOO`'#Db'#DbO'jO!rO,59]O'qQ#tO'#DSOOO`,59],59]OOOp'#Dc'#DcO'vO$fO,59pOOO`,59p,59pO(OQ#|O,59rO(TQ#|O,59sOOO`-E7X-E7XO(YQ&rO'#CtOOQW'#D['#D[O(hQ&rO1G.xOOOa1G.x1G.xOOO`1G/Z1G/ZO(sQ&rO1G/ROOOb1G/R1G/RO)OQ&rO1G/UOOOd1G/U1G/UO)ZQ&rO1G/XOOO`1G/X1G/XO)fQ&rO1G/ZOOOa-E7]-E7]O)qQ#tO'#CzOOO`1G.w1G.wOOOb-E7^-E7^O)vQ#tO'#C}OOOd-E7_-E7_O){Q#tO'#DQOOO`-E7`-E7`O*QQ#|O,59nOOOp-E7a-E7aOOO`1G/[1G/[OOO`1G/^1G/^OOO`1G/_1G/_O*VQ,UO,59`OOQW-E7Y-E7YOOOa7+$d7+$dOOO`7+$u7+$uOOOb7+$m7+$mOOOd7+$p7+$pOOO`7+$s7+$sO*bQ#|O,59fO*gQ#|O,59iO*lQ#|O,59lOOO`1G/Y1G/YO*qO7[O'#CwO+SOMhO'#CwOOQW1G.z1G.zOOO`1G/Q1G/QOOO`1G/T1G/TOOO`1G/W1G/WOOOO'#D]'#D]O+eO7[O,59cOOQW,59c,59cOOOO'#D^'#D^O+vOMhO,59cOOOO-E7Z-E7ZOOQW1G.}1G.}OOOO-E7[-E7[",
  stateData: ",c~O!_OS~OUSOVPOWQOXROYTO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O|_O!eZO~OgaO~OgbO~OgcO~OgdO~OgeO~O!XfOPmP![mP~O!YiOQpP![pP~O!ZlORsP![sP~OUSOVPOWQOXROYTOZqO[]O][O^^O_^Oa^Ob^Oc^Od^Oy^O!eZO~O![rO~P#gO!]sO!fuO~OgvO~OgwO~OS|OT}OiyO~OS!POT}OiyO~OS!ROT}OiyO~OS!TOT}OiyO~OS}OT}OiyO~O!XfOPmX![mX~OP!WO![!XO~O!YiOQpX![pX~OQ!ZO![!XO~O!ZlORsX![sX~OR!]O![!XO~O![!XO~P#gOg!_O~O!]sO!f!aO~OS!bO~OS!cO~Oj!dOShXThXihX~OS!fOT!gOiyO~OS!hOT!gOiyO~OS!iOT!gOiyO~OS!jOT!gOiyO~OS!gOT!gOiyO~Og!kO~Og!lO~Og!mO~OS!nO~Ol!qO!a!oO!c!pO~OS!rO~OS!sO~OS!tO~Ob!uOc!uOd!uO!a!wO!b!uO~Ob!xOc!xOd!xO!c!wO!d!xO~Ob!uOc!uOd!uO!a!{O!b!uO~Ob!xOc!xOd!xO!c!{O!d!xO~OT~cbd!ey|!e~",
  goto: "%q!aPPPPPPPPPPPPPPPPPPPPP!b!hP!nPP!zP!}#Q#T#Z#^#a#g#j#m#s#y!bP!b!bP$P$V$m$s$y%P%V%]%cPPPPPPPP%iX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 68,
  context: Yy,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 22, 31, 34, 37, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 30, 33, 36, 38, "OpenTag"],
    ["group", -10, 14, 15, 18, 19, 20, 21, 40, 41, 42, 43, "Entity", 17, "Entity TextContent", -3, 29, 32, 35, "TextContent Entity"],
    ["isolate", -11, 22, 30, 31, 33, 34, 36, 37, 38, 39, 42, 43, "ltr", -3, 27, 28, 40, ""]
  ],
  propSources: [Dy],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|caPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bXaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UVaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pTaPOv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!dpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({WaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!b`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!b`!dpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYlWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]`aP!b`!dp!_^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebiSlWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXiSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vciSaP!b`!dpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!ahaP!dpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WiiSlWd!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zblWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOb!R!R7tP;=`<%l7S!Z8OYlWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{iiSlWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbiSlWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QciSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXiSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TalWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOc!R!RAwP;=`<%lAY!ZBRYlWc!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhiSlWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbiSlWc!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbiSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXiSc!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!cxaP!b`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYliSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_kiSaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_XaP!b`!dp!fQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZiSgQaPlW!b`!dpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!b`!dpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!b`!dpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!b`!dp!ePOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!b`!dpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!b`!dpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!b`!dpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!b`!dpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!b`!dpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!b`!dpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!b`!dpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!dpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO|PP!-nP;=`<%l!-Sq!-xS!dp|POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!b`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!b`|POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!b`!dp|POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!b`!dpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!b`!dpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!b`!dpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!b`!dpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!b`!dpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!b`!dpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!dpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOyPP!7TP;=`<%l!6Vq!7]V!dpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!dpyPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!b`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!b`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!b`yPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!b`!dpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!b`!dpyPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXjSaP!b`!dpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [zy, jy, qy, Iy, Vy, Wy, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 16] },
  dialects: { noMatch: 0, selfClosing: 515 },
  tokenPrec: 517
});
function Fp(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i of r.getChildren(Bp)) {
    let n = i.getChild(xy), s = i.getChild(ja) || i.getChild(Np);
    n && (t[e.read(n.from, n.to)] = s ? s.type.id == ja ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
c(Fp, "getAttrs");
function cO(r, e) {
  let t = r.getChild(wy);
  return t ? e.read(t.from, t.to) : " ";
}
c(cO, "findTagName");
function Do(r, e, t) {
  let i;
  for (let n of t)
    if (!n.attrs || n.attrs(i || (i = Fp(r.node.parent.firstChild, e))))
      return { parser: n.parser };
  return null;
}
c(Do, "maybeNest");
function Hp(r = [], e = []) {
  let t = [], i = [], n = [], s = [];
  for (let l of r)
    (l.tag == "script" ? t : l.tag == "style" ? i : l.tag == "textarea" ? n : s).push(l);
  let o = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let l of e) (o[l.name] || (o[l.name] = [])).push(l);
  return Jd((l, a) => {
    let h = l.type.id;
    if (h == Py) return Do(l, a, t);
    if (h == ky) return Do(l, a, i);
    if (h == $y) return Do(l, a, n);
    if (h == Dp && s.length) {
      let f = l.node, u = f.firstChild, O = u && cO(u, a), d;
      if (O) {
        for (let p of s)
          if (p.tag == O && (!p.attrs || p.attrs(d || (d = Fp(u, a))))) {
            let m = f.lastChild, Q = m.type.id == vy ? m.from : f.to;
            if (Q > u.to)
              return { parser: p.parser, overlay: [{ from: u.to, to: Q }] };
          }
      }
    }
    if (o && h == Bp) {
      let f = l.node, u;
      if (u = f.firstChild) {
        let O = o[a.read(u.from, u.to)];
        if (O) for (let d of O) {
          if (d.tagName && d.tagName != cO(f.parent, a)) continue;
          let p = f.lastChild;
          if (p.type.id == ja) {
            let m = p.from + 1, Q = p.lastChild, y = p.to - (Q && Q.isError ? 0 : 1);
            if (y > m) return { parser: d.parser, overlay: [{ from: m, to: y }] };
          } else if (p.type.id == Np)
            return { parser: d.parser, overlay: [{ from: p.from, to: p.to }] };
        }
      }
    }
    return null;
  });
}
c(Hp, "configureNesting");
const Ny = 122, uO = 1, Gy = 123, Fy = 124, Kp = 2, Hy = 125, Ky = 3, Jy = 4, Jp = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], eS = 58, tS = 40, em = 95, iS = 91, ts = 45, rS = 46, nS = 35, sS = 37, oS = 38, lS = 92, aS = 10, hS = 42;
function mn(r) {
  return r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 161;
}
c(mn, "isAlpha");
function kh(r) {
  return r >= 48 && r <= 57;
}
c(kh, "isDigit");
function OO(r) {
  return kh(r) || r >= 97 && r <= 102 || r >= 65 && r <= 70;
}
c(OO, "isHex");
const tm = /* @__PURE__ */ c((r, e, t) => (i, n) => {
  for (let s = !1, o = 0, l = 0; ; l++) {
    let { next: a } = i;
    if (mn(a) || a == ts || a == em || s && kh(a))
      !s && (a != ts || l > 0) && (s = !0), o === l && a == ts && o++, i.advance();
    else if (a == lS && i.peek(1) != aS) {
      if (i.advance(), OO(i.next)) {
        do
          i.advance();
        while (OO(i.next));
        i.next == 32 && i.advance();
      } else i.next > -1 && i.advance();
      s = !0;
    } else {
      s && i.acceptToken(
        o == 2 && n.canShift(Kp) ? e : a == tS ? t : r
      );
      break;
    }
  }
}, "identifierTokens"), fS = new Qe(
  tm(Gy, Kp, Fy)
), cS = new Qe(
  tm(Hy, Ky, Jy)
), uS = new Qe((r) => {
  if (Jp.includes(r.peek(-1))) {
    let { next: e } = r;
    (mn(e) || e == em || e == nS || e == rS || e == hS || e == iS || e == eS && mn(r.peek(1)) || e == ts || e == oS) && r.acceptToken(Ny);
  }
}), OS = new Qe((r) => {
  if (!Jp.includes(r.peek(-1))) {
    let { next: e } = r;
    if (e == sS && (r.advance(), r.acceptToken(uO)), mn(e)) {
      do
        r.advance();
      while (mn(r.next) || kh(r.next));
      r.acceptToken(uO);
    }
  }
}), dS = Ji({
  "AtKeyword import charset namespace keyframes media supports": g.definitionKeyword,
  "from to selector": g.keyword,
  NamespaceName: g.namespace,
  KeyframeName: g.labelName,
  KeyframeRangeName: g.operatorKeyword,
  TagName: g.tagName,
  ClassName: g.className,
  PseudoClassName: g.constant(g.className),
  IdName: g.labelName,
  "FeatureName PropertyName": g.propertyName,
  AttributeName: g.attributeName,
  NumberLiteral: g.number,
  KeywordQuery: g.keyword,
  UnaryQueryOp: g.operatorKeyword,
  "CallTag ValueName": g.atom,
  VariableName: g.variableName,
  Callee: g.operatorKeyword,
  Unit: g.unit,
  "UniversalSelector NestingSelector": g.definitionOperator,
  "MatchOp CompareOp": g.compareOperator,
  "ChildOp SiblingOp, LogicOp": g.logicOperator,
  BinOp: g.arithmeticOperator,
  Important: g.modifier,
  Comment: g.blockComment,
  ColorLiteral: g.color,
  "ParenthesizedContent StringLiteral": g.string,
  ":": g.punctuation,
  "PseudoOp #": g.derefOperator,
  "; ,": g.separator,
  "( )": g.paren,
  "[ ]": g.squareBracket,
  "{ }": g.brace
}), pS = { __proto__: null, lang: 38, "nth-child": 38, "nth-last-child": 38, "nth-of-type": 38, "nth-last-of-type": 38, dir: 38, "host-context": 38, if: 84, url: 124, "url-prefix": 124, domain: 124, regexp: 124 }, mS = { __proto__: null, or: 98, and: 98, not: 106, only: 106, layer: 170 }, gS = { __proto__: null, selector: 112, layer: 166 }, QS = { __proto__: null, "@import": 162, "@media": 174, "@charset": 178, "@namespace": 182, "@keyframes": 188, "@supports": 200, "@scope": 204 }, yS = { __proto__: null, to: 207 }, SS = pn.deserialize({
  version: 14,
  states: "EbQYQdOOO#qQdOOP#xO`OOOOQP'#Cf'#CfOOQP'#Ce'#CeO#}QdO'#ChO$nQaO'#CcO$xQdO'#CkO%TQdO'#DpO%YQdO'#DrO%_QdO'#DuO%_QdO'#DxOOQP'#FV'#FVO&eQhO'#EhOOQS'#FU'#FUOOQS'#Ek'#EkQYQdOOO&lQdO'#EOO&PQhO'#EUO&lQdO'#EWO'aQdO'#EYO'lQdO'#E]O'tQhO'#EcO(VQdO'#EeO(bQaO'#CfO)VQ`O'#D{O)[Q`O'#F`O)gQdO'#F`QOQ`OOP)qO&jO'#CaPOOO)C@t)C@tOOQP'#Cj'#CjOOQP,59S,59SO#}QdO,59SO)|QdO,59VO%TQdO,5:[O%YQdO,5:^O%_QdO,5:aO%_QdO,5:cO%_QdO,5:dO%_QdO'#ErO*XQ`O,58}O*aQdO'#DzOOQS,58},58}OOQP'#Cn'#CnOOQO'#Dn'#DnOOQP,59V,59VO*hQ`O,59VO*mQ`O,59VOOQP'#Dq'#DqOOQP,5:[,5:[OOQO'#Ds'#DsO*rQpO,5:^O+]QaO,5:aO+sQaO,5:dOOQW'#DZ'#DZO,ZQhO'#DdO,xQhO'#FaO'tQhO'#DbO-WQ`O'#DhOOQW'#F['#F[O-]Q`O,5;SO-eQ`O'#DeOOQS-E8i-E8iOOQ['#Cs'#CsO-jQdO'#CtO.QQdO'#CzO.hQdO'#C}O/OQ!pO'#DPO1RQ!jO,5:jOOQO'#DU'#DUO*mQ`O'#DTO1cQ!nO'#FXO3`Q`O'#DVO3eQ`O'#DkOOQ['#FX'#FXO-`Q`O,5:pO3jQ!bO,5:rOOQS'#E['#E[O3rQ`O,5:tO3wQdO,5:tOOQO'#E_'#E_O4PQ`O,5:wO4UQhO,5:}O%_QdO'#DgOOQS,5;P,5;PO-eQ`O,5;PO4^QdO,5;PO4fQdO,5:gO4vQdO'#EtO5TQ`O,5;zO5TQ`O,5;zPOOO'#Ej'#EjP5`O&jO,58{POOO,58{,58{OOQP1G.n1G.nOOQP1G.q1G.qO*hQ`O1G.qO*mQ`O1G.qOOQP1G/v1G/vO5kQpO1G/xO5sQaO1G/{O6ZQaO1G/}O6qQaO1G0OO7XQaO,5;^OOQO-E8p-E8pOOQS1G.i1G.iO7cQ`O,5:fO7hQdO'#DoO7oQdO'#CrOOQP1G/x1G/xO&lQdO1G/xO7vQ!jO'#DZO8UQ!bO,59vO8^QhO,5:OOOQO'#F]'#F]O8XQ!bO,59zO'tQhO,59xO8fQhO'#EvO8sQ`O,5;{O9OQhO,59|O9uQhO'#DiOOQW,5:S,5:SOOQS1G0n1G0nOOQW,5:P,5:PO9|Q!fO'#FYOOQS'#FY'#FYOOQS'#Em'#EmO;^QdO,59`OOQ[,59`,59`O;tQdO,59fOOQ[,59f,59fO<[QdO,59iOOQ[,59i,59iOOQ[,59k,59kO&lQdO,59mO<rQhO'#EQOOQW'#EQ'#EQO=WQ`O1G0UO1[QhO1G0UOOQ[,59o,59oO'tQhO'#DXOOQ[,59q,59qO=]Q#tO,5:VOOQS1G0[1G0[OOQS1G0^1G0^OOQS1G0`1G0`O=hQ`O1G0`O=mQdO'#E`OOQS1G0c1G0cOOQS1G0i1G0iO=xQaO,5:RO-`Q`O1G0kOOQS1G0k1G0kO-eQ`O1G0kO>PQ!fO1G0ROOQO1G0R1G0ROOQO,5;`,5;`O>gQdO,5;`OOQO-E8r-E8rO>tQ`O1G1fPOOO-E8h-E8hPOOO1G.g1G.gOOQP7+$]7+$]OOQP7+%d7+%dO&lQdO7+%dOOQS1G0Q1G0QO?PQaO'#F_O?ZQ`O,5:ZO?`Q!fO'#ElO@^QdO'#FWO@hQ`O,59^O@mQ!bO7+%dO&lQdO1G/bO@uQhO1G/fOOQW1G/j1G/jOOQW1G/d1G/dOAWQhO,5;bOOQO-E8t-E8tOAfQhO'#DZOAtQhO'#F^OBPQ`O'#F^OBUQ`O,5:TOOQS-E8k-E8kOOQ[1G.z1G.zOOQ[1G/Q1G/QOOQ[1G/T1G/TOOQ[1G/X1G/XOBZQdO,5:lOOQS7+%p7+%pOB`Q`O7+%pOBeQhO'#DYOBmQ`O,59sO'tQhO,59sOOQ[1G/q1G/qOBuQ`O1G/qOOQS7+%z7+%zOBzQbO'#DPOOQO'#Eb'#EbOCYQ`O'#EaOOQO'#Ea'#EaOCeQ`O'#EwOCmQdO,5:zOOQS,5:z,5:zOOQ[1G/m1G/mOOQS7+&V7+&VO-`Q`O7+&VOCxQ!fO'#EsO&lQdO'#EsOEPQdO7+%mOOQO7+%m7+%mOOQO1G0z1G0zOEdQ!bO<<IOOElQdO'#EqOEvQ`O,5;yOOQP1G/u1G/uOOQS-E8j-E8jOFOQdO'#EpOFYQ`O,5;rOOQ]1G.x1G.xOOQP<<IO<<IOOFbQdO7+$|OOQO'#D]'#D]OFiQ!bO7+%QOFqQhO'#EoOF{Q`O,5;xO&lQdO,5;xOOQW1G/o1G/oOOQO'#ES'#ESOGTQ`O1G0WOOQS<<I[<<I[O&lQdO,59tOGnQhO1G/_OOQ[1G/_1G/_OGuQ`O1G/_OOQW-E8l-E8lOOQ[7+%]7+%]OOQO,5:{,5:{O=pQdO'#ExOCeQ`O,5;cOOQS,5;c,5;cOOQS-E8u-E8uOOQS1G0f1G0fOOQS<<Iq<<IqOG}Q!fO,5;_OOQS-E8q-E8qOOQO<<IX<<IXOOQPAN>jAN>jOIUQaO,5;]OOQO-E8o-E8oOI`QdO,5;[OOQO-E8n-E8nOOQW<<Hh<<HhOOQW<<Hl<<HlOIjQhO<<HlOI{QhO,5;ZOJWQ`O,5;ZOOQO-E8m-E8mOJ]QdO1G1dOBZQdO'#EuOJgQ`O7+%rOOQW7+%r7+%rOJoQ!bO1G/`OOQ[7+$y7+$yOJzQhO7+$yPKRQ`O'#EnOOQO,5;d,5;dOOQO-E8v-E8vOOQS1G0}1G0}OKWQ`OAN>WO&lQdO1G0uOK]Q`O7+'OOOQO,5;a,5;aOOQO-E8s-E8sOOQW<<I^<<I^OOQ[<<He<<HePOQW,5;Y,5;YOOQWG23rG23rOKeQdO7+&a",
  stateData: "Kx~O#sOS#tQQ~OW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#oRO~OQiOW[OZ[O]TO`VOaVOi]OjWOmXO!jYO!mZO!saO!ybO!{cO!}dO#QeO#WfO#YgO#ohO~O#m$SP~P!dO#tmO~O#ooO~O]qO`rOarOjsOmtO!juO!mwO#nvO~OpzO!^xO~P$SOc!QO#o|O#p}O~O#o!RO~O#o!TO~OW[OZ[O]TO`VOaVOjWOmXO!jYO!mZO#oRO~OS!]Oe!YO!V![O!Y!`O#q!XOp$TP~Ok$TP~P&POQ!jOe!cOm!dOp!eOr!mOt!mOz!kO!`!lO#o!bO#p!hO#}!fO~Ot!qO!`!lO#o!pO~Ot!sO#o!sO~OS!]Oe!YO!V![O!Y!`O#q!XO~Oe!vOpzO#Z!xO~O]YX`YX`!pXaYXjYXmYXpYX!^YX!jYX!mYX#nYX~O`!zO~Ok!{O#m$SXo$SX~O#m$SXo$SX~P!dO#u#OO#v#OO#w#QO~Oc#UO#o|O#p}O~OpzO!^xO~Oo$SP~P!dOe#`O~Oe#aO~Ol#bO!h#cO~O]qO`rOarOjsOmtO~Op!ia!^!ia!j!ia!m!ia#n!iad!ia~P*zOp!la!^!la!j!la!m!la#n!lad!la~P*zOR#gOS!]Oe!YOr#gOt#gO!V![O!Y!`O#q#dO#}!fO~O!R#iO!^#jOk$TXp$TX~Oe#mO~Ok#oOpzO~Oe!vO~O]#rO`#rOd#uOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl#wO~P&lO]#rO`#rOi#rOj#rOk#rOo#yO~P&lOP#zOSsXesXksXvsX!VsX!YsX!usX!wsX#qsX!TsXQsX]sX`sXdsXisXjsXmsXpsXrsXtsXzsX!`sX#osX#psX#}sXlsXosX!^sX!qsX#msX~Ov#{O!u#|O!w#}Ok$TP~P'tOe#aOS#{Xk#{Xv#{X!V#{X!Y#{X!u#{X!w#{X#q#{XQ#{X]#{X`#{Xd#{Xi#{Xj#{Xm#{Xp#{Xr#{Xt#{Xz#{X!`#{X#o#{X#p#{X#}#{Xl#{Xo#{X!^#{X!q#{X#m#{X~Oe$RO~Oe$TO~Ok$VOv#{O~Ok$WO~Ot$XO!`!lO~Op$YO~OpzO!R#iO~OpzO#Z$`O~O!q$bOk!oa#m!oao!oa~P&lOk#hX#m#hXo#hX~P!dOk!{O#m$Sao$Sa~O#u#OO#v#OO#w$hO~Ol$jO!h$kO~Op!ii!^!ii!j!ii!m!ii#n!iid!ii~P*zOp!ki!^!ki!j!ki!m!ki#n!kid!ki~P*zOp!li!^!li!j!li!m!li#n!lid!li~P*zOp#fa!^#fa~P$SOo$lO~Od$RP~P%_Od#zP~P&lO`!PXd}X!R}X!T!PX~O`$sO!T$tO~Od$uO!R#iO~Ok#jXp#jX!^#jX~P'tO!^#jOk$Tap$Ta~O!R#iOk!Uap!Ua!^!Uad!Ua`!Ua~OS!]Oe!YO!V![O!Y!`O#q$yO~Od$QP~P9dOv#{OQ#|X]#|X`#|Xd#|Xe#|Xi#|Xj#|Xk#|Xm#|Xp#|Xr#|Xt#|Xz#|X!`#|X#o#|X#p#|X#}#|Xl#|Xo#|X~O]#rO`#rOd%OOi#rOj#rOk#rO~P&lO]#rO`#rOi#rOj#rOk#rOl%PO~P&lO]#rO`#rOi#rOj#rOk#rOo%QO~P&lOe%SOS!tXk!tX!V!tX!Y!tX#q!tX~Ok%TO~Od%YOt%ZO!a%ZO~Ok%[O~Oo%cO#o%^O#}%]O~Od%dO~P$SOv#{O!^%hO!q%jOk!oi#m!oio!oi~P&lOk#ha#m#hao#ha~P!dOk!{O#m$Sio$Si~O!^%mOd$RX~P$SOd%oO~Ov#{OQ#`Xd#`Xe#`Xm#`Xp#`Xr#`Xt#`Xz#`X!^#`X!`#`X#o#`X#p#`X#}#`X~O!^%qOd#zX~P&lOd%sO~Ol%tOv#{O~OR#gOr#gOt#gO#q%vO#}!fO~O!R#iOk#jap#ja!^#ja~O`!PXd}X!R}X!^}X~O!R#iO!^%xOd$QX~O`%zO~Od%{O~O#o%|O~Ok&OO~O`&PO!R#iO~Od&ROk&QO~Od&UO~OP#zOpsX!^sXdsX~O#}%]Op#TX!^#TX~OpzO!^&WO~Oo&[O#o%^O#}%]O~Ov#{OQ#gXe#gXk#gXm#gXp#gXr#gXt#gXz#gX!^#gX!`#gX!q#gX#m#gX#o#gX#p#gX#}#gXo#gX~O!^%hO!q&`Ok!oq#m!oqo!oq~P&lOl&aOv#{O~Od#eX!^#eX~P%_O!^%mOd$Ra~Od#dX!^#dX~P&lO!^%qOd#za~Od&fO~P&lOd&gO!T&hO~Od#cX!^#cX~P9dO!^%xOd$Qa~O]&mOd&oO~OS#bae#ba!V#ba!Y#ba#q#ba~Od&qO~PG]Od&qOk&rO~Ov#{OQ#gae#gak#gam#gap#gar#gat#gaz#ga!^#ga!`#ga!q#ga#m#ga#o#ga#p#ga#}#gao#ga~Od#ea!^#ea~P$SOd#da!^#da~P&lOR#gOr#gOt#gO#q%vO#}%]O~O!R#iOd#ca!^#ca~O`&xO~O!^%xOd$Qi~P&lO]&mOd&|O~Ov#{Od|ik|i~Od&}O~PG]Ok'OO~Od'PO~O!^%xOd$Qq~Od#cq!^#cq~P&lO#s!a#t#}]#}v!m~",
  goto: "2h$UPPPPP$VP$YP$c$uP$cP%X$cPP%_PPP%e%o%oPPPPP%oPP%oP&]P%oP%o'W%oP't'w'}'}(^'}P'}P'}P'}'}P(m'}(yP(|PP)p)v$c)|$c*SP$cP$c$cP*Y*{+YP$YP+aP+dP$YP$YP$YP+j$YP+m+p+s+z$YP$YPP$YP,P,V,f,|-[-b-l-r-x.O.U.`.f.l.rPPPPPPPPPPP.x/R/w/z0|P1U1u2O2R2U2[RnQ_^OP`kz!{$dq[OPYZ`kuvwxz!v!{#`$d%mqSOPYZ`kuvwxz!v!{#`$d%mQpTR#RqQ!OVR#SrQ#S!QS$Q!i!jR$i#U!V!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'Q!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QU#g!Y$t&hU%`$Y%b&WR&V%_!V!iac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QR$S!kQ%W$RR&S%Xk!^]bf!Y![!g#i#j#m$P$R%X%xQ#e!YQ${#mQ%w$tQ&j%xR&w&hQ!ygQ#p!`Q$^!xR%f$`R#n!]!U!mac!c!d!e!z#a#c#t#v#x#{$a$k$p$s%h%i%q%u%z&P&d&l&x'QQ!qdR$X!rQ!PVR#TrQ#S!PR$i#TQ!SWR#VsQ!UXR#WtQ{UQ!wgQ#^yQ#o!_Q$U!nQ$[!uQ$_!yQ%e$^Q&Y%aQ&]%fR&v&XSjPzQ!}kQ$c!{R%k$dZiPkz!{$dR$P!gQ%}%SR&z&mR!rdR!teR$Z!tS%a$Y%bR&t&WV%_$Y%b&WQ#PmR$g#PQ`OSkPzU!a`k$dR$d!{Q$p#aY%p$p%u&d&l'QQ%u$sQ&d%qQ&l%zR'Q&xQ#t!cQ#v!dQ#x!eV$}#t#v#xQ%X$RR&T%XQ%y$zS&k%y&yR&y&lQ%r$pR&e%rQ%n$mR&c%nQyUR#]yQ%i$aR&_%iQ!|jS$e!|$fR$f!}Q&n%}R&{&nQ#k!ZR$x#kQ%b$YR&Z%bQ&X%aR&u&X__OP`kz!{$d^UOP`kz!{$dQ!VYQ!WZQ#XuQ#YvQ#ZwQ#[xQ$]!vQ$m#`R&b%mR$q#aQ!gaQ!oc[#q!c!d!e#t#v#xQ$a!zd$o#a$p$s%q%u%z&d&l&x'QQ$r#cQ%R#{S%g$a%iQ%l$kQ&^%hR&p&P]#s!c!d!e#t#v#xW!Z]b!g$PQ!ufQ#f!YQ#l![Q$v#iQ$w#jQ$z#mS%V$R%XR&i%xQ#h!YQ%w$tR&w&hR$|#mR$n#`QlPR#_zQ!_]Q!nbQ$O!gR%U$P",
  nodeNames: "⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector CallQuery ArgList , CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to AtRule Styles",
  maxTerm: 143,
  nodeProps: [
    ["isolate", -2, 5, 36, ""],
    ["openedBy", 20, "(", 28, "[", 31, "{"],
    ["closedBy", 21, ")", 29, "]", 32, "}"]
  ],
  propSources: [dS],
  skippedNodes: [0, 5, 106],
  repeatNodeCount: 15,
  tokenData: "JQ~R!YOX$qX^%i^p$qpq%iqr({rs-ust/itu6Wuv$qvw7Qwx7cxy9Qyz9cz{9h{|:R|}>t}!O?V!O!P?t!P!Q@]!Q![AU![!]BP!]!^B{!^!_C^!_!`DY!`!aDm!a!b$q!b!cEn!c!}$q!}#OG{#O#P$q#P#QH^#Q#R6W#R#o$q#o#pHo#p#q6W#q#rIQ#r#sIc#s#y$q#y#z%i#z$f$q$f$g%i$g#BY$q#BY#BZ%i#BZ$IS$q$IS$I_%i$I_$I|$q$I|$JO%i$JO$JT$q$JT$JU%i$JU$KV$q$KV$KW%i$KW&FU$q&FU&FV%i&FV;'S$q;'S;=`Iz<%lO$q`$tSOy%Qz;'S%Q;'S;=`%c<%lO%Q`%VS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q`%fP;=`<%l%Q~%nh#s~OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Q~'ah#s~!a`OX%QX^'Y^p%Qpq'Yqy%Qz#y%Q#y#z'Y#z$f%Q$f$g'Y$g#BY%Q#BY#BZ'Y#BZ$IS%Q$IS$I_'Y$I_$I|%Q$I|$JO'Y$JO$JT%Q$JT$JU'Y$JU$KV%Q$KV$KW'Y$KW&FU%Q&FU&FV'Y&FV;'S%Q;'S;=`%c<%lO%Qj)OUOy%Qz#]%Q#]#^)b#^;'S%Q;'S;=`%c<%lO%Qj)gU!a`Oy%Qz#a%Q#a#b)y#b;'S%Q;'S;=`%c<%lO%Qj*OU!a`Oy%Qz#d%Q#d#e*b#e;'S%Q;'S;=`%c<%lO%Qj*gU!a`Oy%Qz#c%Q#c#d*y#d;'S%Q;'S;=`%c<%lO%Qj+OU!a`Oy%Qz#f%Q#f#g+b#g;'S%Q;'S;=`%c<%lO%Qj+gU!a`Oy%Qz#h%Q#h#i+y#i;'S%Q;'S;=`%c<%lO%Qj,OU!a`Oy%Qz#T%Q#T#U,b#U;'S%Q;'S;=`%c<%lO%Qj,gU!a`Oy%Qz#b%Q#b#c,y#c;'S%Q;'S;=`%c<%lO%Qj-OU!a`Oy%Qz#h%Q#h#i-b#i;'S%Q;'S;=`%c<%lO%Qj-iS!qY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Q~-xWOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c<%lO-u~.gOt~~.jRO;'S-u;'S;=`.s;=`O-u~.vXOY-uZr-urs.bs#O-u#O#P.g#P;'S-u;'S;=`/c;=`<%l-u<%lO-u~/fP;=`<%l-uj/nYjYOy%Qz!Q%Q!Q![0^![!c%Q!c!i0^!i#T%Q#T#Z0^#Z;'S%Q;'S;=`%c<%lO%Qj0cY!a`Oy%Qz!Q%Q!Q![1R![!c%Q!c!i1R!i#T%Q#T#Z1R#Z;'S%Q;'S;=`%c<%lO%Qj1WY!a`Oy%Qz!Q%Q!Q![1v![!c%Q!c!i1v!i#T%Q#T#Z1v#Z;'S%Q;'S;=`%c<%lO%Qj1}YrY!a`Oy%Qz!Q%Q!Q![2m![!c%Q!c!i2m!i#T%Q#T#Z2m#Z;'S%Q;'S;=`%c<%lO%Qj2tYrY!a`Oy%Qz!Q%Q!Q![3d![!c%Q!c!i3d!i#T%Q#T#Z3d#Z;'S%Q;'S;=`%c<%lO%Qj3iY!a`Oy%Qz!Q%Q!Q![4X![!c%Q!c!i4X!i#T%Q#T#Z4X#Z;'S%Q;'S;=`%c<%lO%Qj4`YrY!a`Oy%Qz!Q%Q!Q![5O![!c%Q!c!i5O!i#T%Q#T#Z5O#Z;'S%Q;'S;=`%c<%lO%Qj5TY!a`Oy%Qz!Q%Q!Q![5s![!c%Q!c!i5s!i#T%Q#T#Z5s#Z;'S%Q;'S;=`%c<%lO%Qj5zSrY!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qd6ZUOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qd6tS!hS!a`Oy%Qz;'S%Q;'S;=`%c<%lO%Qb7VSZQOy%Qz;'S%Q;'S;=`%c<%lO%Q~7fWOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z<%lO7c~8RRO;'S7c;'S;=`8[;=`O7c~8_XOY7cZw7cwx.bx#O7c#O#P8O#P;'S7c;'S;=`8z;=`<%l7c<%lO7c~8}P;=`<%l7cj9VSeYOy%Qz;'S%Q;'S;=`%c<%lO%Q~9hOd~n9oUWQvWOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Qj:YWvW!mQOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj:wU!a`Oy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Qj;bY!a`#}YOy%Qz!Q%Q!Q![;Z![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj<VY!a`Oy%Qz{%Q{|<u|}%Q}!O<u!O!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj<zU!a`Oy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj=eU!a`#}YOy%Qz!Q%Q!Q![=^![;'S%Q;'S;=`%c<%lO%Qj>O[!a`#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%Qj>yS!^YOy%Qz;'S%Q;'S;=`%c<%lO%Qj?[WvWOy%Qz!O%Q!O!P:r!P!Q%Q!Q![=w![;'S%Q;'S;=`%c<%lO%Qj?yU]YOy%Qz!Q%Q!Q![;Z![;'S%Q;'S;=`%c<%lO%Q~@bTvWOy%Qz{@q{;'S%Q;'S;=`%c<%lO%Q~@xS!a`#t~Oy%Qz;'S%Q;'S;=`%c<%lO%QjAZ[#}YOy%Qz!O%Q!O!P;Z!P!Q%Q!Q![=w![!g%Q!g!h<Q!h#X%Q#X#Y<Q#Y;'S%Q;'S;=`%c<%lO%QjBUU`YOy%Qz![%Q![!]Bh!];'S%Q;'S;=`%c<%lO%QbBoSaQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjCQSkYOy%Qz;'S%Q;'S;=`%c<%lO%QhCcU!TWOy%Qz!_%Q!_!`Cu!`;'S%Q;'S;=`%c<%lO%QhC|S!TW!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QlDaS!TW!hSOy%Qz;'S%Q;'S;=`%c<%lO%QjDtV!jQ!TWOy%Qz!_%Q!_!`Cu!`!aEZ!a;'S%Q;'S;=`%c<%lO%QbEbS!jQ!a`Oy%Qz;'S%Q;'S;=`%c<%lO%QjEqYOy%Qz}%Q}!OFa!O!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjFfW!a`Oy%Qz!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjGV[iY!a`Oy%Qz}%Q}!OGO!O!Q%Q!Q![GO![!c%Q!c!}GO!}#T%Q#T#oGO#o;'S%Q;'S;=`%c<%lO%QjHQSmYOy%Qz;'S%Q;'S;=`%c<%lO%QnHcSl^Oy%Qz;'S%Q;'S;=`%c<%lO%QjHtSpYOy%Qz;'S%Q;'S;=`%c<%lO%QjIVSoYOy%Qz;'S%Q;'S;=`%c<%lO%QfIhU!mQOy%Qz!_%Q!_!`6m!`;'S%Q;'S;=`%c<%lO%Q`I}P;=`<%l$q",
  tokenizers: [uS, OS, fS, cS, 1, 2, 3, 4, new Fi("m~RRYZ[z{a~~g~aO#v~~dP!P!Qg~lO#w~~", 28, 129)],
  topRules: { StyleSheet: [0, 6], Styles: [1, 105] },
  specialized: [{ term: 124, get: /* @__PURE__ */ c((r) => pS[r] || -1, "get") }, { term: 125, get: /* @__PURE__ */ c((r) => mS[r] || -1, "get") }, { term: 4, get: /* @__PURE__ */ c((r) => gS[r] || -1, "get") }, { term: 25, get: /* @__PURE__ */ c((r) => QS[r] || -1, "get") }, { term: 123, get: /* @__PURE__ */ c((r) => yS[r] || -1, "get") }],
  tokenPrec: 1963
});
let Bo = null;
function No() {
  if (!Bo && typeof document == "object" && document.body) {
    let { style: r } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let i in r)
      i != "cssText" && i != "cssFloat" && typeof r[i] == "string" && (/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, (n) => "-" + n.toLowerCase())), t.has(i) || (e.push(i), t.add(i)));
    Bo = e.sort().map((i) => ({ type: "property", label: i, apply: i + ": " }));
  }
  return Bo || [];
}
c(No, "properties");
const dO = /* @__PURE__ */ [
  "active",
  "after",
  "any-link",
  "autofill",
  "backdrop",
  "before",
  "checked",
  "cue",
  "default",
  "defined",
  "disabled",
  "empty",
  "enabled",
  "file-selector-button",
  "first",
  "first-child",
  "first-letter",
  "first-line",
  "first-of-type",
  "focus",
  "focus-visible",
  "focus-within",
  "fullscreen",
  "has",
  "host",
  "host-context",
  "hover",
  "in-range",
  "indeterminate",
  "invalid",
  "is",
  "lang",
  "last-child",
  "last-of-type",
  "left",
  "link",
  "marker",
  "modal",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "part",
  "placeholder",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "selection",
  "slotted",
  "target",
  "target-text",
  "valid",
  "visited",
  "where"
].map((r) => ({ type: "class", label: r })), pO = /* @__PURE__ */ [
  "above",
  "absolute",
  "activeborder",
  "additive",
  "activecaption",
  "after-white-space",
  "ahead",
  "alias",
  "all",
  "all-scroll",
  "alphabetic",
  "alternate",
  "always",
  "antialiased",
  "appworkspace",
  "asterisks",
  "attr",
  "auto",
  "auto-flow",
  "avoid",
  "avoid-column",
  "avoid-page",
  "avoid-region",
  "axis-pan",
  "background",
  "backwards",
  "baseline",
  "below",
  "bidi-override",
  "blink",
  "block",
  "block-axis",
  "bold",
  "bolder",
  "border",
  "border-box",
  "both",
  "bottom",
  "break",
  "break-all",
  "break-word",
  "bullets",
  "button",
  "button-bevel",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "calc",
  "capitalize",
  "caps-lock-indicator",
  "caption",
  "captiontext",
  "caret",
  "cell",
  "center",
  "checkbox",
  "circle",
  "cjk-decimal",
  "clear",
  "clip",
  "close-quote",
  "col-resize",
  "collapse",
  "color",
  "color-burn",
  "color-dodge",
  "column",
  "column-reverse",
  "compact",
  "condensed",
  "contain",
  "content",
  "contents",
  "content-box",
  "context-menu",
  "continuous",
  "copy",
  "counter",
  "counters",
  "cover",
  "crop",
  "cross",
  "crosshair",
  "currentcolor",
  "cursive",
  "cyclic",
  "darken",
  "dashed",
  "decimal",
  "decimal-leading-zero",
  "default",
  "default-button",
  "dense",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "disc",
  "discard",
  "disclosure-closed",
  "disclosure-open",
  "document",
  "dot-dash",
  "dot-dot-dash",
  "dotted",
  "double",
  "down",
  "e-resize",
  "ease",
  "ease-in",
  "ease-in-out",
  "ease-out",
  "element",
  "ellipse",
  "ellipsis",
  "embed",
  "end",
  "ethiopic-abegede-gez",
  "ethiopic-halehame-aa-er",
  "ethiopic-halehame-gez",
  "ew-resize",
  "exclusion",
  "expanded",
  "extends",
  "extra-condensed",
  "extra-expanded",
  "fantasy",
  "fast",
  "fill",
  "fill-box",
  "fixed",
  "flat",
  "flex",
  "flex-end",
  "flex-start",
  "footnotes",
  "forwards",
  "from",
  "geometricPrecision",
  "graytext",
  "grid",
  "groove",
  "hand",
  "hard-light",
  "help",
  "hidden",
  "hide",
  "higher",
  "highlight",
  "highlighttext",
  "horizontal",
  "hsl",
  "hsla",
  "hue",
  "icon",
  "ignore",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infinite",
  "infobackground",
  "infotext",
  "inherit",
  "initial",
  "inline",
  "inline-axis",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "inside",
  "intrinsic",
  "invert",
  "italic",
  "justify",
  "keep-all",
  "landscape",
  "large",
  "larger",
  "left",
  "level",
  "lighter",
  "lighten",
  "line-through",
  "linear",
  "linear-gradient",
  "lines",
  "list-item",
  "listbox",
  "listitem",
  "local",
  "logical",
  "loud",
  "lower",
  "lower-hexadecimal",
  "lower-latin",
  "lower-norwegian",
  "lowercase",
  "ltr",
  "luminosity",
  "manipulation",
  "match",
  "matrix",
  "matrix3d",
  "medium",
  "menu",
  "menutext",
  "message-box",
  "middle",
  "min-intrinsic",
  "mix",
  "monospace",
  "move",
  "multiple",
  "multiple_mask_images",
  "multiply",
  "n-resize",
  "narrower",
  "ne-resize",
  "nesw-resize",
  "no-close-quote",
  "no-drop",
  "no-open-quote",
  "no-repeat",
  "none",
  "normal",
  "not-allowed",
  "nowrap",
  "ns-resize",
  "numbers",
  "numeric",
  "nw-resize",
  "nwse-resize",
  "oblique",
  "opacity",
  "open-quote",
  "optimizeLegibility",
  "optimizeSpeed",
  "outset",
  "outside",
  "outside-shape",
  "overlay",
  "overline",
  "padding",
  "padding-box",
  "painted",
  "page",
  "paused",
  "perspective",
  "pinch-zoom",
  "plus-darker",
  "plus-lighter",
  "pointer",
  "polygon",
  "portrait",
  "pre",
  "pre-line",
  "pre-wrap",
  "preserve-3d",
  "progress",
  "push-button",
  "radial-gradient",
  "radio",
  "read-only",
  "read-write",
  "read-write-plaintext-only",
  "rectangle",
  "region",
  "relative",
  "repeat",
  "repeating-linear-gradient",
  "repeating-radial-gradient",
  "repeat-x",
  "repeat-y",
  "reset",
  "reverse",
  "rgb",
  "rgba",
  "ridge",
  "right",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "round",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "running",
  "s-resize",
  "sans-serif",
  "saturation",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "screen",
  "scroll",
  "scrollbar",
  "scroll-position",
  "se-resize",
  "self-start",
  "self-end",
  "semi-condensed",
  "semi-expanded",
  "separate",
  "serif",
  "show",
  "single",
  "skew",
  "skewX",
  "skewY",
  "skip-white-space",
  "slide",
  "slider-horizontal",
  "slider-vertical",
  "sliderthumb-horizontal",
  "sliderthumb-vertical",
  "slow",
  "small",
  "small-caps",
  "small-caption",
  "smaller",
  "soft-light",
  "solid",
  "source-atop",
  "source-in",
  "source-out",
  "source-over",
  "space",
  "space-around",
  "space-between",
  "space-evenly",
  "spell-out",
  "square",
  "start",
  "static",
  "status-bar",
  "stretch",
  "stroke",
  "stroke-box",
  "sub",
  "subpixel-antialiased",
  "svg_masks",
  "super",
  "sw-resize",
  "symbolic",
  "symbols",
  "system-ui",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "text-bottom",
  "text-top",
  "textarea",
  "textfield",
  "thick",
  "thin",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "to",
  "top",
  "transform",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ",
  "transparent",
  "ultra-condensed",
  "ultra-expanded",
  "underline",
  "unidirectional-pan",
  "unset",
  "up",
  "upper-latin",
  "uppercase",
  "url",
  "var",
  "vertical",
  "vertical-text",
  "view-box",
  "visible",
  "visibleFill",
  "visiblePainted",
  "visibleStroke",
  "visual",
  "w-resize",
  "wait",
  "wave",
  "wider",
  "window",
  "windowframe",
  "windowtext",
  "words",
  "wrap",
  "wrap-reverse",
  "x-large",
  "x-small",
  "xor",
  "xx-large",
  "xx-small"
].map((r) => ({ type: "keyword", label: r })).concat(/* @__PURE__ */ [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen"
].map((r) => ({ type: "constant", label: r }))), bS = /* @__PURE__ */ [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "figcaption",
  "figure",
  "footer",
  "form",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "meter",
  "nav",
  "ol",
  "output",
  "p",
  "pre",
  "ruby",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
].map((r) => ({ type: "type", label: r })), wS = /* @__PURE__ */ [
  "@charset",
  "@color-profile",
  "@container",
  "@counter-style",
  "@font-face",
  "@font-feature-values",
  "@font-palette-values",
  "@import",
  "@keyframes",
  "@layer",
  "@media",
  "@namespace",
  "@page",
  "@position-try",
  "@property",
  "@scope",
  "@starting-style",
  "@supports",
  "@view-transition"
].map((r) => ({ type: "keyword", label: r })), lt = /^(\w[\w-]*|-\w[\w-]*|)$/, xS = /^-(-[\w-]*)?$/;
function PS(r, e) {
  var t;
  if ((r.name == "(" || r.type.isError) && (r = r.parent || r), r.name != "ArgList")
    return !1;
  let i = (t = r.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return i?.name != "Callee" ? !1 : e.sliceString(i.from, i.to) == "var";
}
c(PS, "isVarArg");
const mO = /* @__PURE__ */ new Qs(), kS = ["Declaration"];
function $S(r) {
  for (let e = r; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return r;
  }
}
c($S, "astTop");
function im(r, e, t) {
  if (e.to - e.from > 4096) {
    let i = mO.get(e);
    if (i)
      return i;
    let n = [], s = /* @__PURE__ */ new Set(), o = e.cursor(B.IncludeAnonymous);
    if (o.firstChild())
      do
        for (let l of im(r, o.node, t))
          s.has(l.label) || (s.add(l.label), n.push(l));
      while (o.nextSibling());
    return mO.set(e, n), n;
  } else {
    let i = [], n = /* @__PURE__ */ new Set();
    return e.cursor().iterate((s) => {
      var o;
      if (t(s) && s.matchContext(kS) && ((o = s.node.nextSibling) === null || o === void 0 ? void 0 : o.name) == ":") {
        let l = r.sliceString(s.from, s.to);
        n.has(l) || (n.add(l), i.push({ label: l, type: "variable" }));
      }
    }), i;
  }
}
c(im, "variableNames");
const rm = /* @__PURE__ */ c((r) => (e) => {
  let { state: t, pos: i } = e, n = H(t).resolveInner(i, -1), s = n.type.isError && n.from == n.to - 1 && t.doc.sliceString(n.from, n.to) == "-";
  if (n.name == "PropertyName" || (s || n.name == "TagName") && /^(Block|Styles)$/.test(n.resolve(n.to).name))
    return { from: n.from, options: No(), validFor: lt };
  if (n.name == "ValueName")
    return { from: n.from, options: pO, validFor: lt };
  if (n.name == "PseudoClassName")
    return { from: n.from, options: dO, validFor: lt };
  if (r(n) || (e.explicit || s) && PS(n, t.doc))
    return {
      from: r(n) || s ? n.from : i,
      options: im(t.doc, $S(n), r),
      validFor: xS
    };
  if (n.name == "TagName") {
    for (let { parent: a } = n; a; a = a.parent)
      if (a.name == "Block")
        return { from: n.from, options: No(), validFor: lt };
    return { from: n.from, options: bS, validFor: lt };
  }
  if (n.name == "AtKeyword")
    return { from: n.from, options: wS, validFor: lt };
  if (!e.explicit)
    return null;
  let o = n.resolve(i), l = o.childBefore(i);
  return l && l.name == ":" && o.name == "PseudoClassSelector" ? { from: i, options: dO, validFor: lt } : l && l.name == ":" && o.name == "Declaration" || o.name == "ArgList" ? { from: i, options: pO, validFor: lt } : o.name == "Block" || o.name == "Styles" ? { from: i, options: No(), validFor: lt } : null;
}, "defineCSSCompletionSource"), nm = /* @__PURE__ */ rm((r) => r.name == "VariableName"), gn = /* @__PURE__ */ ln.define({
  name: "css",
  parser: /* @__PURE__ */ SS.configure({
    props: [
      /* @__PURE__ */ er.add({
        Declaration: /* @__PURE__ */ es()
      }),
      /* @__PURE__ */ xn.add({
        "Block KeyframeList": op
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function sm() {
  return new Mt(gn, gn.data.of({ autocomplete: nm }));
}
c(sm, "css");
const RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: sm,
  cssCompletionSource: nm,
  cssLanguage: gn,
  defineCSSCompletionSource: rm
}, Symbol.toStringTag, { value: "Module" })), vS = 316, TS = 317, gO = 1, AS = 2, LS = 3, _S = 4, MS = 318, ZS = 320, CS = 321, XS = 5, ES = 6, YS = 0, Da = [
  9,
  10,
  11,
  12,
  13,
  32,
  133,
  160,
  5760,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8232,
  8233,
  8239,
  8287,
  12288
], om = 125, VS = 59, Ba = 47, WS = 42, US = 43, IS = 45, zS = 60, jS = 44, qS = 63, DS = 46, BS = 91, NS = new Xs({
  start: !1,
  shift(r, e) {
    return e == XS || e == ES || e == ZS ? r : e == CS;
  },
  strict: !1
}), GS = new Qe((r, e) => {
  let { next: t } = r;
  (t == om || t == -1 || e.context) && r.acceptToken(MS);
}, { contextual: !0, fallback: !0 }), FS = new Qe((r, e) => {
  let { next: t } = r, i;
  Da.indexOf(t) > -1 || t == Ba && ((i = r.peek(1)) == Ba || i == WS) || t != om && t != VS && t != -1 && !e.context && r.acceptToken(vS);
}, { contextual: !0 }), HS = new Qe((r, e) => {
  r.next == BS && !e.context && r.acceptToken(TS);
}, { contextual: !0 }), KS = new Qe((r, e) => {
  let { next: t } = r;
  if (t == US || t == IS) {
    if (r.advance(), t == r.next) {
      r.advance();
      let i = !e.context && e.canShift(gO);
      r.acceptToken(i ? gO : AS);
    }
  } else t == qS && r.peek(1) == DS && (r.advance(), r.advance(), (r.next < 48 || r.next > 57) && r.acceptToken(LS));
}, { contextual: !0 });
function Go(r, e) {
  return r >= 65 && r <= 90 || r >= 97 && r <= 122 || r == 95 || r >= 192 || !e && r >= 48 && r <= 57;
}
c(Go, "identifierChar");
const JS = new Qe((r, e) => {
  if (r.next != zS || !e.dialectEnabled(YS) || (r.advance(), r.next == Ba)) return;
  let t = 0;
  for (; Da.indexOf(r.next) > -1; )
    r.advance(), t++;
  if (Go(r.next, !0)) {
    for (r.advance(), t++; Go(r.next, !1); )
      r.advance(), t++;
    for (; Da.indexOf(r.next) > -1; )
      r.advance(), t++;
    if (r.next == jS) return;
    for (let i = 0; ; i++) {
      if (i == 7) {
        if (!Go(r.next, !0)) return;
        break;
      }
      if (r.next != "extends".charCodeAt(i)) break;
      r.advance(), t++;
    }
  }
  r.acceptToken(_S, -t);
}), eb = Ji({
  "get set async static": g.modifier,
  "for while do if else switch try catch finally return throw break continue default case defer": g.controlKeyword,
  "in of await yield void typeof delete instanceof as satisfies": g.operatorKeyword,
  "let var const using function class extends": g.definitionKeyword,
  "import export from": g.moduleKeyword,
  "with debugger new": g.keyword,
  TemplateString: g.special(g.string),
  super: g.atom,
  BooleanLiteral: g.bool,
  this: g.self,
  null: g.null,
  Star: g.modifier,
  VariableName: g.variableName,
  "CallExpression/VariableName TaggedTemplateExpression/VariableName": g.function(g.variableName),
  VariableDefinition: g.definition(g.variableName),
  Label: g.labelName,
  PropertyName: g.propertyName,
  PrivatePropertyName: g.special(g.propertyName),
  "CallExpression/MemberExpression/PropertyName": g.function(g.propertyName),
  "FunctionDeclaration/VariableDefinition": g.function(g.definition(g.variableName)),
  "ClassDeclaration/VariableDefinition": g.definition(g.className),
  "NewExpression/VariableName": g.className,
  PropertyDefinition: g.definition(g.propertyName),
  PrivatePropertyDefinition: g.definition(g.special(g.propertyName)),
  UpdateOp: g.updateOperator,
  "LineComment Hashbang": g.lineComment,
  BlockComment: g.blockComment,
  Number: g.number,
  String: g.string,
  Escape: g.escape,
  ArithOp: g.arithmeticOperator,
  LogicOp: g.logicOperator,
  BitOp: g.bitwiseOperator,
  CompareOp: g.compareOperator,
  RegExp: g.regexp,
  Equals: g.definitionOperator,
  Arrow: g.function(g.punctuation),
  ": Spread": g.punctuation,
  "( )": g.paren,
  "[ ]": g.squareBracket,
  "{ }": g.brace,
  "InterpolationStart InterpolationEnd": g.special(g.brace),
  ".": g.derefOperator,
  ", ;": g.separator,
  "@": g.meta,
  TypeName: g.typeName,
  TypeDefinition: g.definition(g.typeName),
  "type enum interface implements namespace module declare": g.definitionKeyword,
  "abstract global Privacy readonly override": g.modifier,
  "is keyof unique infer asserts": g.operatorKeyword,
  JSXAttributeValue: g.attributeValue,
  JSXText: g.content,
  "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": g.angleBracket,
  "JSXIdentifier JSXNameSpacedName": g.tagName,
  "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": g.attributeName,
  "JSXBuiltin/JSXIdentifier": g.standard(g.tagName)
}), tb = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, in: 52, out: 55, const: 56, extends: 60, this: 64, true: 72, false: 72, null: 84, void: 88, typeof: 92, super: 108, new: 142, delete: 154, yield: 163, await: 167, class: 172, public: 235, private: 235, protected: 235, readonly: 237, instanceof: 256, satisfies: 259, import: 292, keyof: 349, unique: 353, infer: 359, asserts: 395, is: 397, abstract: 417, implements: 419, type: 421, let: 424, var: 426, using: 429, interface: 435, enum: 439, namespace: 445, module: 447, declare: 451, global: 455, defer: 471, for: 476, of: 485, while: 488, with: 492, do: 496, if: 500, else: 502, switch: 506, case: 512, try: 518, catch: 522, finally: 526, return: 530, throw: 534, break: 538, continue: 542, debugger: 546 }, ib = { __proto__: null, async: 129, get: 131, set: 133, declare: 195, public: 197, private: 197, protected: 197, static: 199, abstract: 201, override: 203, readonly: 209, accessor: 211, new: 401 }, rb = { __proto__: null, "<": 193 }, nb = pn.deserialize({
  version: 14,
  states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
  stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
  goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 380,
  context: NS,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
    ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
    ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
  ],
  propSources: [eb],
  skippedNodes: [0, 5, 6, 278],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [FS, HS, KS, JS, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, GS, new Fi("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new Fi("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
  topRules: { Script: [0, 7], SingleExpression: [1, 276], SingleClassItem: [2, 277] },
  dialects: { jsx: 0, ts: 15175 },
  dynamicPrecedences: { 80: 1, 82: 1, 94: 1, 169: 1, 199: 1 },
  specialized: [{ term: 327, get: /* @__PURE__ */ c((r) => tb[r] || -1, "get") }, { term: 343, get: /* @__PURE__ */ c((r) => ib[r] || -1, "get") }, { term: 95, get: /* @__PURE__ */ c((r) => rb[r] || -1, "get") }],
  tokenPrec: 15201
}), $h = [
  /* @__PURE__ */ ye("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ ye(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ ye(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ ye(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ye('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ ye('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], lm = /* @__PURE__ */ $h.concat([
  /* @__PURE__ */ ye("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ ye("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), QO = /* @__PURE__ */ new Qs(), am = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function lr(r) {
  return (e, t) => {
    let i = e.node.getChild("VariableDefinition");
    return i && t(i, r), !0;
  };
}
c(lr, "defID");
const sb = ["FunctionDeclaration"], ob = {
  FunctionDeclaration: /* @__PURE__ */ lr("function"),
  ClassDeclaration: /* @__PURE__ */ lr("class"),
  ClassExpression: /* @__PURE__ */ c(() => !0, "ClassExpression"),
  EnumDeclaration: /* @__PURE__ */ lr("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ lr("type"),
  NamespaceDeclaration: /* @__PURE__ */ lr("namespace"),
  VariableDefinition(r, e) {
    r.matchContext(sb) || e(r, "variable");
  },
  TypeDefinition(r, e) {
    e(r, "type");
  },
  __proto__: null
};
function hm(r, e) {
  let t = QO.get(e);
  if (t)
    return t;
  let i = [], n = !0;
  function s(o, l) {
    let a = r.sliceString(o.from, o.to);
    i.push({ label: a, type: l });
  }
  return c(s, "def"), e.cursor(B.IncludeAnonymous).iterate((o) => {
    if (n)
      n = !1;
    else if (o.name) {
      let l = ob[o.name];
      if (l && l(o, s) || am.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of hm(r, o.node))
        i.push(l);
      return !1;
    }
  }), QO.set(e, i), i;
}
c(hm, "getScope");
const Ys = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, Rh = [
  "TemplateString",
  "String",
  "RegExp",
  "LineComment",
  "BlockComment",
  "VariableDefinition",
  "TypeDefinition",
  "Label",
  "PropertyDefinition",
  "PropertyName",
  "PrivatePropertyDefinition",
  "PrivatePropertyName",
  "JSXText",
  "JSXAttributeValue",
  "JSXOpenTag",
  "JSXCloseTag",
  "JSXSelfClosingTag",
  ".",
  "?."
];
function fm(r) {
  let e = H(r.state).resolveInner(r.pos, -1);
  if (Rh.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && Ys.test(r.state.sliceDoc(e.from, e.to));
  if (!t && !r.explicit)
    return null;
  let i = [];
  for (let n = e; n; n = n.parent)
    am.has(n.name) && (i = i.concat(hm(r.state.doc, n)));
  return {
    options: i,
    from: t ? e.from : r.pos,
    validFor: Ys
  };
}
c(fm, "localCompletionSource");
function Fo(r, e, t) {
  var i;
  let n = [];
  for (; ; ) {
    let s = e.firstChild, o;
    if (s?.name == "VariableName")
      return n.push(r(s)), { path: n.reverse(), name: t };
    if (s?.name == "MemberExpression" && ((i = o = s.lastChild) === null || i === void 0 ? void 0 : i.name) == "PropertyName")
      n.push(r(o)), e = s;
    else
      return null;
  }
}
c(Fo, "pathFor");
function cm(r) {
  let e = /* @__PURE__ */ c((i) => r.state.doc.sliceString(i.from, i.to), "read"), t = H(r.state).resolveInner(r.pos, -1);
  return t.name == "PropertyName" ? Fo(e, t.parent, e(t)) : (t.name == "." || t.name == "?.") && t.parent.name == "MemberExpression" ? Fo(e, t.parent, "") : Rh.indexOf(t.name) > -1 ? null : t.name == "VariableName" || t.to - t.from < 20 && Ys.test(e(t)) ? { path: [], name: e(t) } : t.name == "MemberExpression" ? Fo(e, t, "") : r.explicit ? { path: [], name: "" } : null;
}
c(cm, "completionPath");
function lb(r, e) {
  let t = [], i = /* @__PURE__ */ new Set();
  for (let n = 0; ; n++) {
    for (let o of (Object.getOwnPropertyNames || Object.keys)(r)) {
      if (!/^[a-zA-Z_$\xaa-\uffdc][\w$\xaa-\uffdc]*$/.test(o) || i.has(o))
        continue;
      i.add(o);
      let l;
      try {
        l = r[o];
      } catch {
        continue;
      }
      t.push({
        label: o,
        type: typeof l == "function" ? /^[A-Z]/.test(o) ? "class" : e ? "function" : "method" : e ? "variable" : "property",
        boost: -n
      });
    }
    let s = Object.getPrototypeOf(r);
    if (!s)
      return t;
    r = s;
  }
}
c(lb, "enumeratePropertyCompletions");
function ab(r) {
  let e = /* @__PURE__ */ new Map();
  return (t) => {
    let i = cm(t);
    if (!i)
      return null;
    let n = r;
    for (let o of i.path)
      if (n = n[o], !n)
        return null;
    let s = e.get(n);
    return s || e.set(n, s = lb(n, !i.path.length)), {
      from: t.pos - i.name.length,
      options: s,
      validFor: Ys
    };
  };
}
c(ab, "scopeCompletionSource");
const Ce = /* @__PURE__ */ ln.define({
  name: "javascript",
  parser: /* @__PURE__ */ nb.configure({
    props: [
      /* @__PURE__ */ er.add({
        IfStatement: /* @__PURE__ */ es({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ es({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: D1,
        SwitchBody: /* @__PURE__ */ c((r) => {
          let e = r.textAfter, t = /^\s*\}/.test(e), i = /^\s*(case|default)\b/.test(e);
          return r.baseIndent + (t ? 0 : i ? 1 : 2) * r.unit;
        }, "SwitchBody"),
        Block: /* @__PURE__ */ q1({ closing: "}" }),
        ArrowFunction: /* @__PURE__ */ c((r) => r.baseIndent + r.unit, "ArrowFunction"),
        "TemplateString BlockComment": /* @__PURE__ */ c(() => null, "TemplateString BlockComment"),
        "Statement Property": /* @__PURE__ */ es({ except: /^\s*{/ }),
        JSXElement(r) {
          let e = /^\s*<\//.test(r.textAfter);
          return r.lineIndent(r.node.from) + (e ? 0 : r.unit);
        },
        JSXEscape(r) {
          let e = /\s*\}/.test(r.textAfter);
          return r.lineIndent(r.node.from) + (e ? 0 : r.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(r) {
          return r.column(r.node.from) + r.unit;
        }
      }),
      /* @__PURE__ */ xn.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": op,
        BlockComment(r) {
          return { from: r.from + 2, to: r.to - 2 };
        }
      })
    ]
  }),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
    wordChars: "$"
  }
}), um = {
  test: /* @__PURE__ */ c((r) => /^JSX/.test(r.name), "test"),
  facet: /* @__PURE__ */ bo({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, vh = /* @__PURE__ */ Ce.configure({ dialect: "ts" }, "typescript"), Th = /* @__PURE__ */ Ce.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ uh.add((r) => r.isTop ? [um] : void 0)]
}), Ah = /* @__PURE__ */ Ce.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ uh.add((r) => r.isTop ? [um] : void 0)]
}, "typescript");
let Om = /* @__PURE__ */ c((r) => ({ label: r, type: "keyword" }), "kwCompletion");
const dm = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Om), hb = /* @__PURE__ */ dm.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(Om));
function pm(r = {}) {
  let e = r.jsx ? r.typescript ? Ah : Th : r.typescript ? vh : Ce, t = r.typescript ? lm.concat(hb) : $h.concat(dm);
  return new Mt(e, [
    Ce.data.of({
      autocomplete: aQ(Rh, Op(t))
    }),
    Ce.data.of({
      autocomplete: fm
    }),
    r.jsx ? mm : []
  ]);
}
c(pm, "javascript");
function fb(r) {
  for (; ; ) {
    if (r.name == "JSXOpenTag" || r.name == "JSXSelfClosingTag" || r.name == "JSXFragmentTag")
      return r;
    if (r.name == "JSXEscape" || !r.parent)
      return null;
    r = r.parent;
  }
}
c(fb, "findOpenTag");
function yO(r, e, t = r.length) {
  for (let i = e?.firstChild; i; i = i.nextSibling)
    if (i.name == "JSXIdentifier" || i.name == "JSXBuiltin" || i.name == "JSXNamespacedName" || i.name == "JSXMemberExpression")
      return r.sliceString(i.from, Math.min(i.to, t));
  return "";
}
c(yO, "elementName$1");
const cb = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), mm = /* @__PURE__ */ Z.inputHandler.of((r, e, t, i, n) => {
  if ((cb ? r.composing : r.compositionStarted) || r.state.readOnly || e != t || i != ">" && i != "/" || !Ce.isActiveAt(r.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h;
    let { head: f } = a, u = H(o).resolveInner(f - 1, -1), O;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(f - 1, f) != i || u.name == "JSXAttributeValue" && u.to > f)) {
      if (i == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: f, insert: "</>" } };
      if (i == "/" && u.name == "JSXStartCloseTag") {
        let d = u.parent, p = d.parent;
        if (p && d.from == f - 2 && ((O = yO(o.doc, p.firstChild, f)) || ((h = p.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let m = `${O}>`;
          return { range: k.cursor(f + m.length, -1), changes: { from: f, insert: m } };
        }
      } else if (i == ">") {
        let d = fb(u);
        if (d && d.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(f, f + 2)) && (O = yO(o.doc, d, f)))
          return { range: a, changes: { from: f, insert: `</${O}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (r.dispatch([
    s,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
});
function ub(r, e) {
  return e || (e = {
    parserOptions: { ecmaVersion: 2019, sourceType: "module" },
    env: { browser: !0, node: !0, es6: !0, es2015: !0, es2017: !0, es2020: !0 },
    rules: {}
  }, r.getRules().forEach((t, i) => {
    var n;
    !((n = t.meta.docs) === null || n === void 0) && n.recommended && (e.rules[i] = 2);
  })), (t) => {
    let { state: i } = t, n = [];
    for (let { from: s, to: o } of Ce.findRegions(i)) {
      let l = i.doc.lineAt(s), a = { line: l.number - 1, col: s - l.from, pos: s };
      for (let h of r.verify(i.sliceDoc(s, o), e))
        n.push(Ob(h, i.doc, a));
    }
    return n;
  };
}
c(ub, "esLint");
function SO(r, e, t, i) {
  return t.line(r + i.line).from + e + (r == 1 ? i.col - 1 : -1);
}
c(SO, "mapPos");
function Ob(r, e, t) {
  let i = SO(r.line, r.column, e, t), n = {
    from: i,
    to: r.endLine != null && r.endColumn != 1 ? SO(r.endLine, r.endColumn, e, t) : i,
    message: r.message,
    source: r.ruleId ? "eslint:" + r.ruleId : "eslint",
    severity: r.severity == 1 ? "warning" : "error"
  };
  if (r.fix) {
    let { range: s, text: o } = r.fix, l = s[0] + t.pos - i, a = s[1] + t.pos - i;
    n.actions = [{
      name: "fix",
      apply(h, f) {
        h.dispatch({ changes: { from: f + l, to: f + a, insert: o }, scrollIntoView: !0 });
      }
    }];
  }
  return n;
}
c(Ob, "translateDiagnostic");
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  autoCloseTags: mm,
  completionPath: cm,
  esLint: ub,
  javascript: pm,
  javascriptLanguage: Ce,
  jsxLanguage: Th,
  localCompletionSource: fm,
  scopeCompletionSource: ab,
  snippets: $h,
  tsxLanguage: Ah,
  typescriptLanguage: vh,
  typescriptSnippets: lm
}, Symbol.toStringTag, { value: "Module" })), ar = ["_blank", "_self", "_top", "_parent"], Ho = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], Ko = ["get", "post", "put", "delete"], Jo = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], xe = ["true", "false"], _ = {}, db = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: ar,
      hreflang: null
    }
  },
  abbr: _,
  address: _,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: _,
  aside: _,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: _,
  base: { attrs: { href: null, target: ar } },
  bdi: _,
  bdo: _,
  blockquote: { attrs: { cite: null } },
  body: _,
  br: _,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: Jo,
      formmethod: Ko,
      formnovalidate: ["novalidate"],
      formtarget: ar,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: _,
  center: _,
  cite: _,
  code: _,
  col: { attrs: { span: null } },
  colgroup: { attrs: { span: null } },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: { attrs: { value: null } },
  datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
  datalist: { attrs: { data: null } },
  dd: _,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: _,
  div: _,
  dl: _,
  dt: _,
  em: _,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: _,
  figure: _,
  footer: _,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": Ho,
      autocomplete: ["on", "off"],
      enctype: Jo,
      method: Ko,
      novalidate: ["novalidate"],
      target: ar
    }
  },
  h1: _,
  h2: _,
  h3: _,
  h4: _,
  h5: _,
  h6: _,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: _,
  hgroup: _,
  hr: _,
  html: {
    attrs: { manifest: null }
  },
  i: _,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: Jo,
      formmethod: Ko,
      formnovalidate: ["novalidate"],
      formtarget: ar,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: [
        "hidden",
        "text",
        "search",
        "tel",
        "url",
        "email",
        "password",
        "datetime",
        "date",
        "month",
        "week",
        "time",
        "datetime-local",
        "number",
        "range",
        "color",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button"
      ]
    }
  },
  ins: { attrs: { cite: null, datetime: null } },
  kbd: _,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: { attrs: { for: null, form: null } },
  legend: _,
  li: { attrs: { value: null } },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: { attrs: { name: null } },
  mark: _,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: Ho,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: _,
  noscript: _,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: { reversed: ["reversed"], start: null, type: ["1", "a", "A", "i", "I"] },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: { attrs: { disabled: ["disabled"], label: null } },
  option: { attrs: { disabled: ["disabled"], label: null, selected: ["selected"], value: null } },
  output: { attrs: { for: null, form: null, name: null } },
  p: _,
  param: { attrs: { name: null, value: null } },
  pre: _,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: _,
  rt: _,
  ruby: _,
  samp: _,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: Ho
    }
  },
  section: _,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: { attrs: { name: null } },
  small: _,
  source: { attrs: { src: null, type: null, media: null } },
  span: _,
  strong: _,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: _,
  summary: _,
  sup: _,
  table: _,
  tbody: _,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: _,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: _,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: _,
  time: { attrs: { datetime: null } },
  title: _,
  tr: _,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: { children: ["li", "script", "template", "ul", "ol"] },
  var: _,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: _
}, gm = {
  accesskey: null,
  class: null,
  contenteditable: xe,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: xe,
  autocorrect: xe,
  autocapitalize: xe,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: /* @__PURE__ */ "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": xe,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": xe,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": xe,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": xe,
  "aria-hidden": xe,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": xe,
  "aria-multiselectable": xe,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": xe,
  "aria-relevant": null,
  "aria-required": xe,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
}, Qm = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((r) => "on" + r);
for (let r of Qm)
  gm[r] = null;
const $c = class $c {
  constructor(e, t) {
    this.tags = { ...db, ...e }, this.globalAttrs = { ...gm, ...t }, this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
};
c($c, "Schema");
let fi = $c;
fi.default = /* @__PURE__ */ new fi();
function Hi(r, e, t = r.length) {
  if (!e)
    return "";
  let i = e.firstChild, n = i && i.getChild("TagName");
  return n ? r.sliceString(n.from, Math.min(n.to, t)) : "";
}
c(Hi, "elementName");
function Ki(r, e = !1) {
  for (; r; r = r.parent)
    if (r.name == "Element")
      if (e)
        e = !1;
      else
        return r;
  return null;
}
c(Ki, "findParentElement");
function ym(r, e, t) {
  let i = t.tags[Hi(r, Ki(e))];
  return i?.children || t.allTags;
}
c(ym, "allowedChildren");
function Lh(r, e) {
  let t = [];
  for (let i = Ki(e); i && !i.type.isTop; i = Ki(i.parent)) {
    let n = Hi(r, i);
    if (n && i.lastChild.name == "CloseTag")
      break;
    n && t.indexOf(n) < 0 && (e.name == "EndTag" || e.from >= i.firstChild.to) && t.push(n);
  }
  return t;
}
c(Lh, "openTags");
const Sm = /^[:\-\.\w\u00b7-\uffff]*$/;
function bO(r, e, t, i, n) {
  let s = /\s*>/.test(r.sliceDoc(n, n + 5)) ? "" : ">", o = Ki(t, t.name == "StartTag" || t.name == "TagName");
  return {
    from: i,
    to: n,
    options: ym(r.doc, o, e).map((l) => ({ label: l, type: "type" })).concat(Lh(r.doc, t).map((l, a) => ({
      label: "/" + l,
      apply: "/" + l + s,
      type: "type",
      boost: 99 - a
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
c(bO, "completeTag");
function wO(r, e, t, i) {
  let n = /\s*>/.test(r.sliceDoc(i, i + 5)) ? "" : ">";
  return {
    from: t,
    to: i,
    options: Lh(r.doc, e).map((s, o) => ({ label: s, apply: s + n, type: "type", boost: 99 - o })),
    validFor: Sm
  };
}
c(wO, "completeCloseTag");
function pb(r, e, t, i) {
  let n = [], s = 0;
  for (let o of ym(r.doc, t, e))
    n.push({ label: "<" + o, type: "type" });
  for (let o of Lh(r.doc, t))
    n.push({ label: "</" + o + ">", type: "type", boost: 99 - s++ });
  return { from: i, to: i, options: n, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
c(pb, "completeStartTag");
function mb(r, e, t, i, n) {
  let s = Ki(t), o = s ? e.tags[Hi(r.doc, s)] : null, l = o && o.attrs ? Object.keys(o.attrs) : [], a = o && o.globalAttrs === !1 ? l : l.length ? l.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: i,
    to: n,
    options: a.map((h) => ({ label: h, type: "property" })),
    validFor: Sm
  };
}
c(mb, "completeAttrName");
function gb(r, e, t, i, n) {
  var s;
  let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), l = [], a;
  if (o) {
    let h = r.sliceDoc(o.from, o.to), f = e.globalAttrs[h];
    if (!f) {
      let u = Ki(t), O = u ? e.tags[Hi(r.doc, u)] : null;
      f = O?.attrs && O.attrs[h];
    }
    if (f) {
      let u = r.sliceDoc(i, n).toLowerCase(), O = '"', d = '"';
      /^['"]/.test(u) ? (a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/, O = "", d = r.sliceDoc(n, n + 1) == u[0] ? "" : u[0], u = u.slice(1), i++) : a = /^[^\s<>='"]*$/;
      for (let p of f)
        l.push({ label: p, apply: O + p + d, type: "constant" });
    }
  }
  return { from: i, to: n, options: l, validFor: a };
}
c(gb, "completeAttrValue");
function bm(r, e) {
  let { state: t, pos: i } = e, n = H(t).resolveInner(i, -1), s = n.resolve(i);
  for (let o = i, l; s == n && (l = n.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    s = n = l, o = a.from;
  }
  return n.name == "TagName" ? n.parent && /CloseTag$/.test(n.parent.name) ? wO(t, n, n.from, i) : bO(t, r, n, n.from, i) : n.name == "StartTag" || n.name == "IncompleteTag" ? bO(t, r, n, i, i) : n.name == "StartCloseTag" || n.name == "IncompleteCloseTag" ? wO(t, n, i, i) : n.name == "OpenTag" || n.name == "SelfClosingTag" || n.name == "AttributeName" ? mb(t, r, n, n.name == "AttributeName" ? n.from : i, i) : n.name == "Is" || n.name == "AttributeValue" || n.name == "UnquotedAttributeValue" ? gb(t, r, n, n.name == "Is" ? i : n.from, i) : e.explicit && (s.name == "Element" || s.name == "Text" || s.name == "Document") ? pb(t, r, n, i) : null;
}
c(bm, "htmlCompletionFor");
function wm(r) {
  return bm(fi.default, r);
}
c(wm, "htmlCompletionSource");
function xm(r) {
  let { extraTags: e, extraGlobalAttributes: t } = r, i = t || e ? new fi(e, t) : fi.default;
  return (n) => bm(i, n);
}
c(xm, "htmlCompletionSourceWith");
const Qb = /* @__PURE__ */ Ce.parser.configure({ top: "SingleExpression" }), Pm = [
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/typescript" || r.lang == "ts", "attrs"),
    parser: vh.parser
  },
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/babel" || r.type == "text/jsx", "attrs"),
    parser: Th.parser
  },
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/typescript-jsx", "attrs"),
    parser: Ah.parser
  },
  {
    tag: "script",
    attrs(r) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(r.type);
    },
    parser: Qb
  },
  {
    tag: "script",
    attrs(r) {
      return !r.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(r.type);
    },
    parser: Ce.parser
  },
  {
    tag: "style",
    attrs(r) {
      return (!r.lang || r.lang == "css") && (!r.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(r.type));
    },
    parser: gn.parser
  }
], km = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ gn.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ Qm.map((r) => ({ name: r, parser: Ce.parser }))), $m = /* @__PURE__ */ ln.define({
  name: "html",
  parser: /* @__PURE__ */ By.configure({
    props: [
      /* @__PURE__ */ er.add({
        Element(r) {
          let e = /^(\s*)(<\/)?/.exec(r.textAfter);
          return r.node.to <= r.pos + e[0].length ? r.continue() : r.lineIndent(r.node.from) + (e[2] ? 0 : r.unit);
        },
        "OpenTag CloseTag SelfClosingTag"(r) {
          return r.column(r.node.from) + r.unit;
        },
        Document(r) {
          if (r.pos + /\s*/.exec(r.textAfter)[0].length < r.node.to)
            return r.continue();
          let e = null, t;
          for (let i = r.node; ; ) {
            let n = i.lastChild;
            if (!n || n.name != "Element" || n.to != i.to)
              break;
            e = i = n;
          }
          return e && !((t = e.lastChild) && (t.name == "CloseTag" || t.name == "SelfClosingTag")) ? r.lineIndent(e.from) + r.unit : null;
        }
      }),
      /* @__PURE__ */ xn.add({
        Element(r) {
          let e = r.firstChild, t = r.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : r.to };
        }
      }),
      /* @__PURE__ */ ap.add({
        "OpenTag CloseTag": /* @__PURE__ */ c((r) => r.getChild("TagName"), "OpenTag CloseTag")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-_"
  }
}), Pr = /* @__PURE__ */ $m.configure({
  wrap: /* @__PURE__ */ Hp(Pm, km)
});
function Rm(r = {}) {
  let e = "", t;
  r.matchClosingTags === !1 && (e = "noMatch"), r.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (r.nestedLanguages && r.nestedLanguages.length || r.nestedAttributes && r.nestedAttributes.length) && (t = Hp((r.nestedLanguages || []).concat(Pm), (r.nestedAttributes || []).concat(km)));
  let i = t ? $m.configure({ wrap: t, dialect: e }) : e ? Pr.configure({ dialect: e }) : Pr;
  return new Mt(i, [
    Pr.data.of({ autocomplete: xm(r) }),
    r.autoCloseTags !== !1 ? vm : [],
    pm().support,
    sm().support
  ]);
}
c(Rm, "html");
const xO = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), vm = /* @__PURE__ */ Z.inputHandler.of((r, e, t, i, n) => {
  if (r.composing || r.state.readOnly || e != t || i != ">" && i != "/" || !Pr.isActiveAt(r.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h, f, u;
    let O = o.doc.sliceString(a.from - 1, a.to) == i, { head: d } = a, p = H(o).resolveInner(d, -1), m;
    if (O && i == ">" && p.name == "EndTag") {
      let Q = p.parent;
      if (((f = (h = Q.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || f === void 0 ? void 0 : f.name) != "CloseTag" && (m = Hi(o.doc, Q.parent, d)) && !xO.has(m)) {
        let y = d + (o.doc.sliceString(d, d + 1) === ">" ? 1 : 0), b = `</${m}>`;
        return { range: a, changes: { from: d, to: y, insert: b } };
      }
    } else if (O && i == "/" && p.name == "IncompleteCloseTag") {
      let Q = p.parent;
      if (p.from == d - 2 && ((u = Q.lastChild) === null || u === void 0 ? void 0 : u.name) != "CloseTag" && (m = Hi(o.doc, Q, d)) && !xO.has(m)) {
        let y = d + (o.doc.sliceString(d, d + 1) === ">" ? 1 : 0), b = `${m}>`;
        return {
          range: k.cursor(d + b.length, -1),
          changes: { from: d, to: y, insert: b }
        };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (r.dispatch([
    s,
    o.update(l, {
      userEvent: "input.complete",
      scrollIntoView: !0
    })
  ]), !0);
}), yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  autoCloseTags: vm,
  html: Rm,
  htmlCompletionSource: wm,
  htmlCompletionSourceWith: xm,
  htmlLanguage: Pr
}, Symbol.toStringTag, { value: "Module" })), Tm = /* @__PURE__ */ bo({ commentTokens: { block: { open: "<!--", close: "-->" } } }), Am = /* @__PURE__ */ new C(), Lm = /* @__PURE__ */ NQ.configure({
  props: [
    /* @__PURE__ */ xn.add((r) => !r.is("Block") || r.is("Document") || Na(r) != null || Sb(r) ? void 0 : (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to })),
    /* @__PURE__ */ Am.add(Na),
    /* @__PURE__ */ er.add({
      Document: /* @__PURE__ */ c(() => null, "Document")
    }),
    /* @__PURE__ */ bt.add({
      Document: Tm
    })
  ]
});
function Na(r) {
  let e = /^(?:ATX|Setext)Heading(\d)$/.exec(r.name);
  return e ? +e[1] : void 0;
}
c(Na, "isHeading");
function Sb(r) {
  return r.name == "OrderedList" || r.name == "BulletList";
}
c(Sb, "isList");
function bb(r, e) {
  let t = r;
  for (; ; ) {
    let i = t.nextSibling, n;
    if (!i || (n = Na(i.type)) != null && n <= e)
      break;
    t = i;
  }
  return t.to;
}
c(bb, "findSectionEnd");
const wb = /* @__PURE__ */ B1.of((r, e, t) => {
  for (let i = H(r).resolveInner(t, -1); i && !(i.from < e); i = i.parent) {
    let n = i.type.prop(Am);
    if (n == null)
      continue;
    let s = bb(i, n);
    if (s > t)
      return { from: t, to: s };
  }
  return null;
});
function _h(r) {
  return new ge(Tm, r, [], "markdown");
}
c(_h, "mkLang");
const _m = /* @__PURE__ */ _h(Lm), xb = /* @__PURE__ */ Lm.configure([ny, oy, sy, ly, {
  props: [
    /* @__PURE__ */ xn.add({
      Table: /* @__PURE__ */ c((r, e) => ({ from: e.doc.lineAt(r.from).to, to: r.to }), "Table")
    })
  ]
}]), Qn = /* @__PURE__ */ _h(xb);
function Pb(r, e) {
  return (t) => {
    if (t && r) {
      let i = null;
      if (t = /\S*/.exec(t)[0], typeof r == "function" ? i = r(t) : i = S.matchLanguageName(r, t, !0), i instanceof S)
        return i.support ? i.support.language.parser : ji.getSkippingParser(i.load());
      if (i)
        return i.parser;
    }
    return e ? e.parser : null;
  };
}
c(Pb, "getCodeParser");
const Rc = class Rc {
  constructor(e, t, i, n, s, o, l) {
    this.node = e, this.from = t, this.to = i, this.spaceBefore = n, this.spaceAfter = s, this.type = o, this.item = l;
  }
  blank(e, t = !0) {
    let i = this.spaceBefore + (this.node.name == "Blockquote" ? ">" : "");
    if (e != null) {
      for (; i.length < e; )
        i += " ";
      return i;
    } else {
      for (let n = this.to - this.from - i.length - this.spaceAfter.length; n > 0; n--)
        i += " ";
      return i + (t ? this.spaceAfter : "");
    }
  }
  marker(e, t) {
    let i = this.node.name == "OrderedList" ? String(+Zm(this.item, e)[2] + t) : "";
    return this.spaceBefore + i + this.type + this.spaceAfter;
  }
};
c(Rc, "Context");
let kr = Rc;
function Mm(r, e) {
  let t = [], i = [];
  for (let n = r; n; n = n.parent) {
    if (n.name == "FencedCode")
      return i;
    (n.name == "ListItem" || n.name == "Blockquote") && t.push(n);
  }
  for (let n = t.length - 1; n >= 0; n--) {
    let s = t[n], o, l = e.lineAt(s.from), a = s.from - l.from;
    if (s.name == "Blockquote" && (o = /^ *>( ?)/.exec(l.text.slice(a))))
      i.push(new kr(s, a, a + o[0].length, "", o[1], ">", null));
    else if (s.name == "ListItem" && s.parent.name == "OrderedList" && (o = /^( *)\d+([.)])( *)/.exec(l.text.slice(a)))) {
      let h = o[3], f = o[0].length;
      h.length >= 4 && (h = h.slice(0, h.length - 4), f -= 4), i.push(new kr(s.parent, a, a + f, o[1], h, o[2], s));
    } else if (s.name == "ListItem" && s.parent.name == "BulletList" && (o = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(l.text.slice(a)))) {
      let h = o[4], f = o[0].length;
      h.length > 4 && (h = h.slice(0, h.length - 4), f -= 4);
      let u = o[2];
      o[3] && (u += o[3].replace(/[xX]/, " ")), i.push(new kr(s.parent, a, a + f, o[1], h, u, s));
    }
  }
  return i;
}
c(Mm, "getContext");
function Zm(r, e) {
  return /^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(r.from, r.from + 10));
}
c(Zm, "itemNumber");
function el(r, e, t, i = 0) {
  for (let n = -1, s = r; ; ) {
    if (s.name == "ListItem") {
      let l = Zm(s, e), a = +l[2];
      if (n >= 0) {
        if (a != n + 1)
          return;
        t.push({ from: s.from + l[1].length, to: s.from + l[0].length, insert: String(n + 2 + i) });
      }
      n = a;
    }
    let o = s.nextSibling;
    if (!o)
      break;
    s = o;
  }
}
c(el, "renumberList");
function Mh(r, e) {
  let t = /^[ \t]*/.exec(r)[0].length;
  if (!t || e.facet(wn) != "	")
    return r;
  let i = Ot(r, 4, t), n = "";
  for (let s = i; s > 0; )
    s >= 4 ? (n += "	", s -= 4) : (n += " ", s--);
  return n + r.slice(t);
}
c(Mh, "normalizeIndent");
const Cm = /* @__PURE__ */ c((r = {}) => ({ state: e, dispatch: t }) => {
  let i = H(e), { doc: n } = e, s = null, o = e.changeByRange((l) => {
    if (!l.empty || !Qn.isActiveAt(e, l.from, -1) && !Qn.isActiveAt(e, l.from, 1))
      return s = { range: l };
    let a = l.from, h = n.lineAt(a), f = Mm(i.resolveInner(a, -1), n);
    for (; f.length && f[f.length - 1].from > a - h.from; )
      f.pop();
    if (!f.length)
      return s = { range: l };
    let u = f[f.length - 1];
    if (u.to - u.spaceAfter.length > a - h.from)
      return s = { range: l };
    let O = a >= u.to - u.spaceAfter.length && !/\S/.test(h.text.slice(u.to));
    if (u.item && O) {
      let y = u.node.firstChild, b = u.node.getChild("ListItem", "ListItem");
      if (y.to >= a || b && b.to < a || h.from > 0 && !/[^\s>]/.test(n.lineAt(h.from - 1).text) || r.nonTightLists === !1) {
        let x = f.length > 1 ? f[f.length - 2] : null, R, $ = "";
        x && x.item ? (R = h.from + x.from, $ = x.marker(n, 1)) : R = h.from + (x ? x.to : 0);
        let A = [{ from: R, to: a, insert: $ }];
        return u.node.name == "OrderedList" && el(u.item, n, A, -2), x && x.node.name == "OrderedList" && el(x.item, n, A), { range: k.cursor(R + $.length), changes: A };
      } else {
        let x = kO(f, e, h);
        return {
          range: k.cursor(a + x.length + 1),
          changes: { from: h.from, insert: x + e.lineBreak }
        };
      }
    }
    if (u.node.name == "Blockquote" && O && h.from) {
      let y = n.lineAt(h.from - 1), b = />\s*$/.exec(y.text);
      if (b && b.index == u.from) {
        let x = e.changes([
          { from: y.from + b.index, to: y.to },
          { from: h.from + u.from, to: h.to }
        ]);
        return { range: l.map(x), changes: x };
      }
    }
    let d = [];
    u.node.name == "OrderedList" && el(u.item, n, d);
    let p = u.item && u.item.from < h.from, m = "";
    if (!p || /^[\s\d.)\-+*>]*/.exec(h.text)[0].length >= u.to)
      for (let y = 0, b = f.length - 1; y <= b; y++)
        m += y == b && !p ? f[y].marker(n, 1) : f[y].blank(y < b ? Ot(h.text, 4, f[y + 1].from) - m.length : null);
    let Q = a;
    for (; Q > h.from && /\s/.test(h.text.charAt(Q - h.from - 1)); )
      Q--;
    return m = Mh(m, e), kb(u.node, e.doc) && (m = kO(f, e, h) + e.lineBreak + m), d.push({ from: Q, to: a, insert: e.lineBreak + m }), { range: k.cursor(Q + m.length + 1), changes: d };
  });
  return s ? !1 : (t(e.update(o, { scrollIntoView: !0, userEvent: "input" })), !0);
}, "insertNewlineContinueMarkupCommand"), Xm = /* @__PURE__ */ Cm();
function PO(r) {
  return r.name == "QuoteMark" || r.name == "ListMark";
}
c(PO, "isMark");
function kb(r, e) {
  if (r.name != "OrderedList" && r.name != "BulletList")
    return !1;
  let t = r.firstChild, i = r.getChild("ListItem", "ListItem");
  if (!i)
    return !1;
  let n = e.lineAt(t.to), s = e.lineAt(i.from), o = /^[\s>]*$/.test(n.text);
  return n.number + (o ? 0 : 1) < s.number;
}
c(kb, "nonTightList");
function kO(r, e, t) {
  let i = "";
  for (let n = 0, s = r.length - 2; n <= s; n++)
    i += r[n].blank(n < s ? Ot(t.text, 4, r[n + 1].from) - i.length : null, n < s);
  return Mh(i, e);
}
c(kO, "blankLine");
function $b(r, e) {
  let t = r.resolveInner(e, -1), i = e;
  PO(t) && (i = t.from, t = t.parent);
  for (let n; n = t.childBefore(i); )
    if (PO(n))
      i = n.from;
    else if (n.name == "OrderedList" || n.name == "BulletList")
      t = n.lastChild, i = t.to;
    else
      break;
  return t;
}
c($b, "contextNodeForDelete");
const Em = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = H(r), i = null, n = r.changeByRange((s) => {
    let o = s.from, { doc: l } = r;
    if (s.empty && Qn.isActiveAt(r, s.from)) {
      let a = l.lineAt(o), h = Mm($b(t, o), l);
      if (h.length) {
        let f = h[h.length - 1], u = f.to - f.spaceAfter.length + (f.spaceAfter ? 1 : 0);
        if (o - a.from > u && !/\S/.test(a.text.slice(u, o - a.from)))
          return {
            range: k.cursor(a.from + u),
            changes: { from: a.from + u, to: o }
          };
        if (o - a.from == u && // Only apply this if we're on the line that has the
        // construct's syntax, or there's only indentation in the
        // target range
        (!f.item || a.from <= f.item.from || !/\S/.test(a.text.slice(0, f.to)))) {
          let O = a.from + f.from;
          if (f.item && f.node.from < f.item.from && /\S/.test(a.text.slice(f.from, f.to))) {
            let d = f.blank(Ot(a.text, 4, f.to) - Ot(a.text, 4, f.from));
            return O == a.from && (d = Mh(d, r)), {
              range: k.cursor(O + d.length),
              changes: { from: O, to: a.from + f.to, insert: d }
            };
          }
          if (O < o)
            return { range: k.cursor(O), changes: { from: O, to: o } };
        }
      }
    }
    return i = { range: s };
  });
  return i ? !1 : (e(r.update(n, { scrollIntoView: !0, userEvent: "delete" })), !0);
}, "deleteMarkupBackward"), Ym = [
  { key: "Enter", run: Xm },
  { key: "Backspace", run: Em }
], Vm = /* @__PURE__ */ Rm({ matchClosingTags: !1 });
function Wm(r = {}) {
  let { codeLanguages: e, defaultCodeLanguage: t, addKeymap: i = !0, base: { parser: n } = _m, completeHTMLTags: s = !0, pasteURLAsLink: o = !0, htmlTagLanguage: l = Vm } = r;
  if (!(n instanceof As))
    throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
  let a = r.extensions ? [r.extensions] : [], h = [l.support, wb], f;
  o && h.push(Um), t instanceof Mt ? (h.push(t.support), f = t.language) : t && (f = t);
  let u = e || f ? Pb(e, f) : void 0;
  a.push(FQ({ codeParser: u, htmlParser: l.language.parser })), i && h.push(ci.high(bn.of(Ym)));
  let O = _h(n.configure(a));
  return s && h.push(O.data.of({ autocomplete: Rb })), new Mt(O, h);
}
c(Wm, "markdown");
function Rb(r) {
  let { state: e, pos: t } = r, i = /<[:\-\.\w\u00b7-\uffff]*$/.exec(e.sliceDoc(t - 25, t));
  if (!i)
    return null;
  let n = H(e).resolveInner(t, -1);
  for (; n && !n.type.isTop; ) {
    if (n.name == "CodeBlock" || n.name == "FencedCode" || n.name == "ProcessingInstructionBlock" || n.name == "CommentBlock" || n.name == "Link" || n.name == "Image")
      return null;
    n = n.parent;
  }
  return {
    from: t - i[0].length,
    to: t,
    options: vb(),
    validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
  };
}
c(Rb, "htmlTagCompletion");
let tl = null;
function vb() {
  if (tl)
    return tl;
  let r = wm(new Bi(J.create({ extensions: Vm }), 0, !0));
  return tl = r ? r.options : [];
}
c(vb, "htmlTagCompletions");
const Tb = /code|horizontalrule|html|link|comment|processing|escape|entity|image|mark|url/i, Um = /* @__PURE__ */ Z.domEventHandlers({
  paste: /* @__PURE__ */ c((r, e) => {
    var t;
    let { main: i } = e.state.selection;
    if (i.empty)
      return !1;
    let n = (t = r.clipboardData) === null || t === void 0 ? void 0 : t.getData("text/plain");
    if (!n || !/^(https?:\/\/|mailto:|xmpp:|www\.)/.test(n) || (/^www\./.test(n) && (n = "https://" + n), !Qn.isActiveAt(e.state, i.from, 1)))
      return !1;
    let s = H(e.state), o = !1;
    return s.iterate({
      from: i.from,
      to: i.to,
      enter: /* @__PURE__ */ c((l) => {
        (l.from > i.from || Tb.test(l.name)) && (o = !0);
      }, "enter"),
      leave: /* @__PURE__ */ c((l) => {
        l.to < i.to && (o = !0);
      }, "leave")
    }), o ? !1 : (e.dispatch({
      changes: [{ from: i.from, insert: "[" }, { from: i.to, insert: `](${n})` }],
      userEvent: "input.paste",
      scrollIntoView: !0
    }), !0);
  }, "paste")
}), Ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonmarkLanguage: _m,
  deleteMarkupBackward: Em,
  insertNewlineContinueMarkup: Xm,
  insertNewlineContinueMarkupCommand: Cm,
  markdown: Wm,
  markdownKeymap: Ym,
  markdownLanguage: Qn,
  pasteURLAsLink: Um
}, Symbol.toStringTag, { value: "Module" }));
function w(r) {
  return new Mt(ma.define(r));
}
c(w, "legacy");
function pt(r) {
  return import(
    /* webpackIgnore: true */
    /* @vite-ignore */
    new URL("./@codemirror/lang-sql/dist/index-CCDZYbZY.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
  ).then((e) => e.sql({ dialect: e[r] }));
}
c(pt, "sql");
const Lb = [
  // New-style language modes
  /* @__PURE__ */ S.of({
    name: "C",
    extensions: ["c", "h", "ino"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-cpp/dist/index-C6T05bZ1.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.cpp());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "C++",
    alias: ["cpp"],
    extensions: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-cpp/dist/index-C6T05bZ1.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.cpp());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "CQL",
    alias: ["cassandra"],
    extensions: ["cql"],
    load() {
      return pt("Cassandra");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "CSS",
    extensions: ["css"],
    load() {
      return Promise.resolve().then(() => RS).then((r) => r.css());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Go",
    extensions: ["go"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-go/dist/index-B4QxA2-y.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.go());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "HTML",
    alias: ["xhtml"],
    extensions: ["html", "htm", "handlebars", "hbs"],
    load() {
      return Promise.resolve().then(() => yb).then((r) => r.html());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Java",
    extensions: ["java"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-java/dist/index-Dx8KBnH4.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.java());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JavaScript",
    alias: ["ecmascript", "js", "node"],
    extensions: ["js", "mjs", "cjs"],
    load() {
      return Promise.resolve().then(() => Bn).then((r) => r.javascript());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Jinja",
    extensions: ["j2", "jinja", "jinja2"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-jinja/dist/index-fHhdnKgr.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.jinja());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JSON",
    alias: ["json5"],
    extensions: ["json", "map"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-json/dist/index-KVnIxyTc.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.json());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JSX",
    extensions: ["jsx"],
    load() {
      return Promise.resolve().then(() => Bn).then((r) => r.javascript({ jsx: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "LESS",
    extensions: ["less"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-less/dist/index-DzEyx1a7.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.less());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Liquid",
    extensions: ["liquid"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-liquid/dist/index-DRpd_Y-o.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.liquid());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MariaDB SQL",
    load() {
      return pt("MariaSQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Markdown",
    extensions: ["md", "markdown", "mkd"],
    load() {
      return Promise.resolve().then(() => Ab).then((r) => r.markdown());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MS SQL",
    load() {
      return pt("MSSQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MySQL",
    load() {
      return pt("MySQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "PHP",
    extensions: ["php", "php3", "php4", "php5", "php7", "phtml"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-php/dist/index-R0cKSpwT.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.php());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "PLSQL",
    extensions: ["pls"],
    load() {
      return pt("PLSQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "PostgreSQL",
    load() {
      return pt("PostgreSQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Python",
    extensions: ["BUILD", "bzl", "py", "pyw"],
    filename: /^(BUCK|BUILD)$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-python/dist/index-BVmKhQ2p.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.python());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Rust",
    extensions: ["rs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-rust/dist/index-CfiHQK3l.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.rust());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Sass",
    extensions: ["sass"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-sass/dist/index-CTpTTqDq.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.sass({ indented: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SCSS",
    extensions: ["scss"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-sass/dist/index-CTpTTqDq.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.sass());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SQL",
    extensions: ["sql"],
    load() {
      return pt("StandardSQL");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SQLite",
    load() {
      return pt("SQLite");
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TSX",
    extensions: ["tsx"],
    load() {
      return Promise.resolve().then(() => Bn).then((r) => r.javascript({ jsx: !0, typescript: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TypeScript",
    alias: ["ts"],
    extensions: ["ts", "mts", "cts"],
    load() {
      return Promise.resolve().then(() => Bn).then((r) => r.javascript({ typescript: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "WebAssembly",
    extensions: ["wat", "wast"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-wast/dist/index-BVXzieui.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.wast());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "XML",
    alias: ["rss", "wsdl", "xsd"],
    extensions: ["xml", "xsl", "xsd", "svg"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-xml/dist/index-DzTFsz0R.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.xml());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "YAML",
    alias: ["yml"],
    extensions: ["yaml", "yml"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-yaml/dist/index-Dqv2beR4.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.yaml());
    }
  }),
  // Legacy modes ported from CodeMirror 5
  /* @__PURE__ */ S.of({
    name: "APL",
    extensions: ["dyalog", "apl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/apl-DUTwTK5s.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.apl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "PGP",
    alias: ["asciiarmor"],
    extensions: ["asc", "pgp", "sig"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/asciiarmor-BaMeU_np.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.asciiArmor));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "ASN.1",
    extensions: ["asn", "asn1"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/asn1-kGGq8akK.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.asn1({})));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Asterisk",
    filename: /^extensions\.conf$/i,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/asterisk-DwFJ90p_.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.asterisk));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Brainfuck",
    extensions: ["b", "bf"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/brainfuck-DDeqt8lW.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.brainfuck));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Cobol",
    extensions: ["cob", "cpy"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/cobol-D0ow5oA-.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.cobol));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "C#",
    alias: ["csharp", "cs"],
    extensions: ["cs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.csharp));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Clojure",
    extensions: ["clj", "cljc", "cljx"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clojure-DfbyEN0r.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.clojure));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "ClojureScript",
    extensions: ["cljs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clojure-DfbyEN0r.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.clojure));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Closure Stylesheets (GSS)",
    extensions: ["gss"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/css-Dtg6soxg.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.gss));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "CMake",
    extensions: ["cmake", "cmake.in"],
    filename: /^CMakeLists\.txt$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/cmake-C-B_OncM.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.cmake));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "CoffeeScript",
    alias: ["coffee", "coffee-script"],
    extensions: ["coffee"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/coffeescript-CYoPSWAO.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.coffeeScript));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Common Lisp",
    alias: ["lisp"],
    extensions: ["cl", "lisp", "el"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/commonlisp-D-pga8tw.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.commonLisp));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Cypher",
    extensions: ["cyp", "cypher"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/cypher-Clmah-Ga.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.cypher));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Cython",
    extensions: ["pyx", "pxd", "pxi"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/python-CrfIqTjY.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.cython));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Crystal",
    extensions: ["cr"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/crystal-qx5TWdJg.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.crystal));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "D",
    extensions: ["d"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/d-DcxBG_qD.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.d));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Dart",
    extensions: ["dart"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.dart));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "diff",
    extensions: ["diff", "patch"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/diff-uc52sYtT.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.diff));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Dockerfile",
    filename: /^Dockerfile$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/dockerfile-BR5-iJnm.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.dockerFile));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "DTD",
    extensions: ["dtd"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/dtd-DSGG6ojJ.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.dtd));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Dylan",
    extensions: ["dylan", "dyl", "intr"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/dylan-Cf8tjg5f.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.dylan));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "EBNF",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ebnf-UWLho9r-.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ebnf));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "ECL",
    extensions: ["ecl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ecl-BIX-mrMd.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ecl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "edn",
    extensions: ["edn"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clojure-DfbyEN0r.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.clojure));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Eiffel",
    extensions: ["e"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/eiffel-BdFLNHQ9.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.eiffel));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Elm",
    extensions: ["elm"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/elm-lodpOZNT.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.elm));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Erlang",
    extensions: ["erl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/erlang-0jNGRix1.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.erlang));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Esper",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/sql-UTwNxHBe.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.esper));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Factor",
    extensions: ["factor"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/factor-DDs0qBeo.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.factor));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "FCL",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/fcl-CUfc8YOk.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.fcl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Forth",
    extensions: ["forth", "fth", "4th"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/forth-BJih3NcC.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.forth));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Fortran",
    extensions: ["f", "for", "f77", "f90", "f95"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/fortran-BBvdgjvb.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.fortran));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "F#",
    alias: ["fsharp"],
    extensions: ["fs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mllike-BNp26hou.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.fSharp));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Gas",
    extensions: ["s"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/gas-sXTmKY5L.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.gas));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Gherkin",
    extensions: ["feature"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/gherkin-CfSuZ3KN.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.gherkin));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Groovy",
    extensions: ["groovy", "gradle"],
    filename: /^Jenkinsfile$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/groovy-B5F8Qy02.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.groovy));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Haskell",
    extensions: ["hs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/haskell-CC1QBnEi.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.haskell));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Haxe",
    extensions: ["hx"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/haxe-b1Z_RqBo.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.haxe));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "HXML",
    extensions: ["hxml"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/haxe-b1Z_RqBo.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.hxml));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "HTTP",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/http-CBcBgwPE.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.http));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "IDL",
    extensions: ["pro"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/idl-DC3hHTOH.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.idl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JSON-LD",
    alias: ["jsonld"],
    extensions: ["jsonld"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/javascript-JQHwq2i2.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.jsonld));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Julia",
    extensions: ["jl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/julia-CNtVJniM.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.julia));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Kotlin",
    extensions: ["kt", "kts"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.kotlin));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "LiveScript",
    alias: ["ls"],
    extensions: ["ls"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/livescript-CTBqbKCT.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.liveScript));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Lua",
    extensions: ["lua"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/lua-C8n6UujM.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.lua));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "mIRC",
    extensions: ["mrc"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mirc-oeFladKZ.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.mirc));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Mathematica",
    extensions: ["m", "nb", "wl", "wls"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mathematica-CvZOoSSH.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.mathematica));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Modelica",
    extensions: ["mo"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/modelica-CnWqw80P.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.modelica));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MUMPS",
    extensions: ["mps"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mumps-pCEuPi_v.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.mumps));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Mbox",
    extensions: ["mbox"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mbox-DrNd_bv1.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.mbox));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Nginx",
    filename: /nginx.*\.conf$/i,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/nginx-BVbogYCV.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.nginx));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "NSIS",
    extensions: ["nsh", "nsi"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/nsis-DRXNZvnW.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.nsis));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "NTriples",
    extensions: ["nt", "nq"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ntriples-DjWhsHUR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ntriples));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Objective-C",
    alias: ["objective-c", "objc"],
    extensions: ["m"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.objectiveC));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Objective-C++",
    alias: ["objective-c++", "objc++"],
    extensions: ["mm"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.objectiveCpp));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "OCaml",
    extensions: ["ml", "mli", "mll", "mly"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mllike-BNp26hou.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.oCaml));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Octave",
    extensions: ["m"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/octave-D6_f-FeL.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.octave));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Oz",
    extensions: ["oz"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/oz-DCQrfpwn.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.oz));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Pascal",
    extensions: ["p", "pas"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/pascal-zeWJYdMx.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.pascal));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Perl",
    extensions: ["pl", "pm"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/perl-D74SawOe.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.perl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Pig",
    extensions: ["pig"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/pig-B17mY-WJ.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.pig));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "PowerShell",
    extensions: ["ps1", "psd1", "psm1"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/powershell-DESElJhV.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.powerShell));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Properties files",
    alias: ["ini", "properties"],
    extensions: ["properties", "ini", "in"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/properties-DG65_nKK.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.properties));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "ProtoBuf",
    extensions: ["proto"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/protobuf-CgLVJqxd.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.protobuf));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Pug",
    alias: ["jade"],
    extensions: ["pug", "jade"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/pug-BcQEkeX3.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.pug));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Puppet",
    extensions: ["pp"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/puppet-FkVlVVOu.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.puppet));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Q",
    extensions: ["q"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/q-0jJKwnqI.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.q));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "R",
    alias: ["rscript"],
    extensions: ["r", "R"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/r-h50dFPd6.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.r));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "RPM Changes",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/rpm-Ch3uNl7-.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.rpmChanges));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "RPM Spec",
    extensions: ["spec"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/rpm-Ch3uNl7-.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.rpmSpec));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Ruby",
    alias: ["jruby", "macruby", "rake", "rb", "rbx"],
    extensions: ["rb"],
    filename: /^(Gemfile|Rakefile)$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ruby-D9Xx7-fE.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ruby));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SAS",
    extensions: ["sas"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/sas-CQP6sezv.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.sas));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Scala",
    extensions: ["scala"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.scala));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Scheme",
    extensions: ["scm", "ss"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/scheme-BUxHmh4Q.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.scheme));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Shell",
    alias: ["bash", "sh", "zsh"],
    extensions: ["sh", "ksh", "bash"],
    filename: /^PKGBUILD$/,
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/shell-CHgqAKoz.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.shell));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Sieve",
    extensions: ["siv", "sieve"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/sieve-B0pugzpM.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.sieve));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Smalltalk",
    extensions: ["st"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/smalltalk-BPx4qaXq.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.smalltalk));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Solr",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/solr-C37DTTTI.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.solr));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SML",
    extensions: ["sml", "sig", "fun", "smackspec"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mllike-BNp26hou.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.sml));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SPARQL",
    alias: ["sparul"],
    extensions: ["rq", "sparql"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/sparql-B14fIQGL.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.sparql));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Spreadsheet",
    alias: ["excel", "formula"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/spreadsheet-BtyWNxQX.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.spreadsheet));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Squirrel",
    extensions: ["nut"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/clike-C7QushSR.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.squirrel));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Stylus",
    extensions: ["styl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/stylus-B8MZ_8T8.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.stylus));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Swift",
    extensions: ["swift"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/swift-CoxtLSqn.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.swift));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "sTeX",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/stex-COcMwSBq.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.stex));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "LaTeX",
    alias: ["tex"],
    extensions: ["text", "ltx", "tex"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/stex-COcMwSBq.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.stex));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "SystemVerilog",
    extensions: ["v", "sv", "svh"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/verilog-Bq3UnBM0.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.verilog));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Tcl",
    extensions: ["tcl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/tcl-Cgli26Z-.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.tcl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Textile",
    extensions: ["textile"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/textile-liATuEBW.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.textile));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TiddlyWiki",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/tiddlywiki-BI0mnSbe.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.tiddlyWiki));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Tiki wiki",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/tiki-C3sn29N5.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.tiki));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TOML",
    extensions: ["toml"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/toml-CmNcgU5Q.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.toml));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Troff",
    extensions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/troff-BtPe0Kr7.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.troff));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TTCN",
    extensions: ["ttcn", "ttcn3", "ttcnpp"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ttcn-D3NR1Our.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ttcn));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TTCN_CFG",
    extensions: ["cfg"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ttcn-cfg-BZV72khF.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.ttcnCfg));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Turtle",
    extensions: ["ttl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/turtle-MJ-6fM67.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.turtle));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Web IDL",
    extensions: ["webidl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/webidl-X9dBkADT.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.webIDL));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "VB.NET",
    extensions: ["vb"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/vb-uqWL2gDw.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.vb));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "VBScript",
    extensions: ["vbs"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/vbscript-DKHTisfa.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.vbScript));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Velocity",
    extensions: ["vtl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/velocity-JMrlzxby.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.velocity));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Verilog",
    extensions: ["v"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/verilog-Bq3UnBM0.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.verilog));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "VHDL",
    extensions: ["vhd", "vhdl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/vhdl-DRYcsAb2.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.vhdl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "XQuery",
    extensions: ["xy", "xquery", "xq", "xqm", "xqy"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/xquery-CcU26fM9.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.xQuery));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Yacas",
    extensions: ["ys"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/yacas-Cnt7xTGr.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.yacas));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Z80",
    extensions: ["z80"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/z80-DZ2g9Rr2.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.z80));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MscGen",
    extensions: ["mscgen", "mscin", "msc"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mscgen-co5J8Ag0.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.mscgen));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Xù",
    extensions: ["xu"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mscgen-co5J8Ag0.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.xu));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "MsGenny",
    extensions: ["msgenny"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/mscgen-co5J8Ag0.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.msgenny));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Vue",
    extensions: ["vue"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-vue/dist/index-yE3aP9SY.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.vue());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Angular Template",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-angular/dist/index-BtjiQGCu.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.angular());
    }
  })
], _b = [{ key: "Mod-Enter", run: Im }], Mb = [{ key: "Enter", run: Im }], Zb = [
  {
    key: "Tab",
    run: /* @__PURE__ */ c((r) => UQ(r.state) ? gp(r) : !1, "run")
  }
];
function Im(r) {
  const e = new CustomEvent("wy-submit", { bubbles: !0 });
  return r.dom.dispatchEvent(e);
}
c(Im, "softSubmit");
const $O = new Hl({
  regexp: /(\[(.+?)\])(\(@u(\d+)\))/g,
  decoration: /* @__PURE__ */ c((r) => z.replace({
    // NOTE: can't use backspace to go "up one row" when inclusive is false
    inclusive: !0,
    widget: new Ga(r)
  }), "decoration")
}), vc = class vc extends vt {
  constructor(e) {
    super(), this.match = e;
  }
  eq(e) {
    return e.match[1] === this.match[1];
  }
  toDOM() {
    eh();
    const e = document.createElement("span");
    return e.className = "wy-mention", e.part = "wy-mention", e.innerHTML = "@" + (typeof this.match[5] < "u" ? this.match[5] : this.match[2]), e;
  }
  ignoreEvent() {
    return !1;
  }
};
c(vc, "MentionWidget");
let Ga = vc;
const Cb = ze.fromClass(
  class {
    constructor(r) {
      this.mentions = $O.createDeco(r);
    }
    update(r) {
      this.mentions = $O.updateDeco(r, this.mentions);
    }
  },
  {
    decorations: /* @__PURE__ */ c((r) => r.mentions, "decorations"),
    provide: /* @__PURE__ */ c((r) => Z.atomicRanges.of((e) => e.plugin(r)?.mentions || z.none), "provide")
  }
), Xb = /* @__PURE__ */ c((r) => {
  let { state: e } = r, t = e.doc.lineAt(e.selection.main.from), i = Ch(r.state, t.from);
  return i.line ? Eb(r) : i.block ? Vb(r) : !1;
}, "toggleComment");
function Zh(r, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return !1;
    let n = r(e, t);
    return n ? (i(t.update(n)), !0) : !1;
  };
}
c(Zh, "command");
const Eb = /* @__PURE__ */ Zh(
  Ib,
  0
  /* CommentOption.Toggle */
), Yb = /* @__PURE__ */ Zh(
  zm,
  0
  /* CommentOption.Toggle */
), Vb = /* @__PURE__ */ Zh(
  (r, e) => zm(r, e, Ub(e)),
  0
  /* CommentOption.Toggle */
);
function Ch(r, e) {
  let t = r.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
c(Ch, "getConfig");
const hr = 50;
function Wb(r, { open: e, close: t }, i, n) {
  let s = r.sliceDoc(i - hr, i), o = r.sliceDoc(n, n + hr), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, h = s.length - l;
  if (s.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let f, u;
  n - i <= 2 * hr ? f = u = r.sliceDoc(i, n) : (f = r.sliceDoc(i, i + hr), u = r.sliceDoc(n - hr, n));
  let O = /^\s*/.exec(f)[0].length, d = /\s*$/.exec(u)[0].length, p = u.length - d - t.length;
  return f.slice(O, O + e.length) == e && u.slice(p, p + t.length) == t ? {
    open: {
      pos: i + O + e.length,
      margin: /\s/.test(f.charAt(O + e.length)) ? 1 : 0
    },
    close: {
      pos: n - d - t.length,
      margin: /\s/.test(u.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
c(Wb, "findBlockComment");
function Ub(r) {
  let e = [];
  for (let t of r.selection.ranges) {
    let i = r.doc.lineAt(t.from), n = t.to <= i.to ? i : r.doc.lineAt(t.to);
    n.from > i.from && n.from == t.to && (n = t.to == i.to + 1 ? i : r.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = n.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return e;
}
c(Ub, "selectedLineRanges");
function zm(r, e, t = e.selection.ranges) {
  let i = t.map((s) => Ch(e, s.from).block);
  if (!i.every((s) => s))
    return null;
  let n = t.map((s, o) => Wb(e, i[o], s.from, s.to));
  if (r != 2 && !n.every((s) => s))
    return { changes: e.changes(t.map((s, o) => n[o] ? [] : [{ from: s.from, insert: i[o].open + " " }, { from: s.to, insert: " " + i[o].close }])) };
  if (r != 1 && n.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = i[o], { open: h, close: f } = l;
        s.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: f.pos - f.margin, to: f.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
c(zm, "changeBlockComment");
function Ib(r, e, t = e.selection.ranges) {
  let i = [], n = -1;
  for (let { from: s, to: o } of t) {
    let l = i.length, a = 1e9, h = Ch(e, s).line;
    if (h) {
      for (let f = s; f <= o; ) {
        let u = e.doc.lineAt(f);
        if (u.from > n && (s == o || o > u.from)) {
          n = u.from;
          let O = /^\s*/.exec(u.text)[0].length, d = O == u.length, p = u.text.slice(O, O + h.length) == h ? O : -1;
          O < u.text.length && O < a && (a = O), i.push({ line: u, comment: p, token: h, indent: O, empty: d, single: !1 });
        }
        f = u.to + 1;
      }
      if (a < 1e9)
        for (let f = l; f < i.length; f++)
          i[f].indent < i[f].line.text.length && (i[f].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (r != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: h, empty: f, single: u } of i)
      (u || !f) && s.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (r != 1 && i.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, f = h + a.length;
        o.text[f - o.from] == " " && f++, s.push({ from: h, to: f });
      }
    return { changes: s };
  }
  return null;
}
c(Ib, "changeLineComment");
const Fa = /* @__PURE__ */ Ie.define(), zb = /* @__PURE__ */ Ie.define(), jb = /* @__PURE__ */ M.define(), jm = /* @__PURE__ */ M.define({
  combine(r) {
    return HO(r, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: /* @__PURE__ */ c((e, t) => t, "joinToEvent")
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: /* @__PURE__ */ c((e, t) => (i, n) => e(i, n) || t(i, n), "joinToEvent")
    });
  }
}), qm = /* @__PURE__ */ Ue.define({
  create() {
    return ti.empty;
  },
  update(r, e) {
    let t = e.state.facet(jm), i = e.annotation(Fa);
    if (i) {
      let a = We.fromTransaction(e, i.selection), h = i.side, f = h == 0 ? r.undone : r.done;
      return a ? f = Vs(f, f.length, t.minDepth, a) : f = Nm(f, e.startState.selection), new ti(h == 0 ? i.rest : f, h == 0 ? f : i.rest);
    }
    let n = e.annotation(zb);
    if ((n == "full" || n == "before") && (r = r.isolate()), e.annotation(le.addToHistory) === !1)
      return e.changes.empty ? r : r.addMapping(e.changes.desc);
    let s = We.fromTransaction(e), o = e.annotation(le.time), l = e.annotation(le.userEvent);
    return s ? r = r.addChanges(s, o, l, t, e) : e.selection && (r = r.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (n == "full" || n == "after") && (r = r.isolate()), r;
  },
  toJSON(r) {
    return { done: r.done.map((e) => e.toJSON()), undone: r.undone.map((e) => e.toJSON()) };
  },
  fromJSON(r) {
    return new ti(r.done.map(We.fromJSON), r.undone.map(We.fromJSON));
  }
});
function qb(r = {}) {
  return [
    qm,
    jm.of(r),
    Z.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Dm : e.inputType == "historyRedo" ? Ha : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
c(qb, "history");
function wo(r, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(qm, !1);
    if (!n)
      return !1;
    let s = n.pop(r, t, e);
    return s ? (i(s), !0) : !1;
  };
}
c(wo, "cmd");
const Dm = /* @__PURE__ */ wo(0, !1), Ha = /* @__PURE__ */ wo(1, !1), Db = /* @__PURE__ */ wo(0, !0), Bb = /* @__PURE__ */ wo(1, !0), Ft = class Ft {
  constructor(e, t, i, n, s) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = n, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new Ft(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(e) {
    return new Ft(e.changes && Te.fromJSON(e.changes), [], e.mapped && wt.fromJSON(e.mapped), e.startSelection && k.fromJSON(e.startSelection), e.selectionsAfter.map(k.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = Ze;
    for (let n of e.startState.facet(jb)) {
      let s = n(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new Ft(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Ze);
  }
  static selection(e) {
    return new Ft(void 0, Ze, void 0, void 0, e);
  }
};
c(Ft, "HistEvent");
let We = Ft;
function Vs(r, e, t, i) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, s = r.slice(n, e);
  return s.push(i), s;
}
c(Vs, "updateBranch");
function Nb(r, e) {
  let t = [], i = !1;
  return r.iterChangedRanges((n, s) => t.push(n, s)), e.iterChangedRanges((n, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], f = t[a++];
      l >= h && o <= f && (i = !0);
    }
  }), i;
}
c(Nb, "isAdjacent");
function Gb(r, e) {
  return r.ranges.length == e.ranges.length && r.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
c(Gb, "eqSelectionShape");
function Bm(r, e) {
  return r.length ? e.length ? r.concat(e) : r : e;
}
c(Bm, "conc");
const Ze = [], Fb = 200;
function Nm(r, e) {
  if (r.length) {
    let t = r[r.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - Fb));
    return i.length && i[i.length - 1].eq(e) ? r : (i.push(e), Vs(r, r.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [We.selection([e])];
}
c(Nm, "addSelection");
function Hb(r) {
  let e = r[r.length - 1], t = r.slice();
  return t[r.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
c(Hb, "popSelection");
function il(r, e) {
  if (!r.length)
    return r;
  let t = r.length, i = Ze;
  for (; t; ) {
    let n = Kb(r[t - 1], e, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let s = r.slice(0, t);
      return s[t - 1] = n, s;
    } else
      e = n.mapped, t--, i = n.selectionsAfter;
  }
  return i.length ? [We.selection(i)] : Ze;
}
c(il, "addMappingToBranch");
function Kb(r, e, t) {
  let i = Bm(r.selectionsAfter.length ? r.selectionsAfter.map((l) => l.map(e)) : Ze, t);
  if (!r.changes)
    return We.selection(i);
  let n = r.changes.map(e), s = e.mapDesc(r.changes, !0), o = r.mapped ? r.mapped.composeDesc(s) : s;
  return new We(n, I.mapEffects(r.effects, e), o, r.startSelection.map(s), i);
}
c(Kb, "mapEvent");
const Jb = /^(input\.type|delete)($|\.)/, Ht = class Ht {
  constructor(e, t, i = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new Ht(this.done, this.undone) : this;
  }
  addChanges(e, t, i, n, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || Jb.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(s, Nb(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = Vs(o, o.length - 1, n.minDepth, new We(e.changes.compose(l.changes), Bm(I.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Ze)) : o = Vs(o, o.length, n.minDepth, e), new Ht(o, Ze, t, i);
  }
  addSelection(e, t, i, n) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ze;
    return s.length > 0 && t - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && Gb(s[s.length - 1], e) ? this : new Ht(Nm(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Ht(il(this.done, e), il(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let s = n[n.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (i && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: Fa.of({ side: e, rest: Hb(n), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = n.length == 1 ? Ze : n.slice(0, n.length - 1);
      return s.mapped && (l = il(l, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: Fa.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
};
c(Ht, "HistoryState");
let ti = Ht;
ti.empty = /* @__PURE__ */ new ti(Ze, Ze);
const ew = [
  { key: "Mod-z", run: Dm, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ha, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ha, preventDefault: !0 },
  { key: "Mod-u", run: Db, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: Bb, preventDefault: !0 }
];
function tr(r, e) {
  return k.create(r.ranges.map(e), r.mainIndex);
}
c(tr, "updateSel");
function qe(r, e) {
  return r.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
c(qe, "setSel");
function De({ state: r, dispatch: e }, t) {
  let i = tr(r.selection, t);
  return i.eq(r.selection, !0) ? !1 : (e(qe(r, i)), !0);
}
c(De, "moveSel");
function xo(r, e) {
  return k.cursor(e ? r.to : r.from);
}
c(xo, "rangeEnd");
function Gm(r, e) {
  return De(r, (t) => t.empty ? r.moveByChar(t, e) : xo(t, e));
}
c(Gm, "cursorByChar");
function he(r) {
  return r.textDirectionAt(r.state.selection.main.head) == ee.LTR;
}
c(he, "ltrAtCursor");
const Fm = /* @__PURE__ */ c((r) => Gm(r, !he(r)), "cursorCharLeft"), Hm = /* @__PURE__ */ c((r) => Gm(r, he(r)), "cursorCharRight");
function Km(r, e) {
  return De(r, (t) => t.empty ? r.moveByGroup(t, e) : xo(t, e));
}
c(Km, "cursorByGroup");
const tw = /* @__PURE__ */ c((r) => Km(r, !he(r)), "cursorGroupLeft"), iw = /* @__PURE__ */ c((r) => Km(r, he(r)), "cursorGroupRight");
function rw(r, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(r.sliceDoc(e.from, e.to))) || e.firstChild;
}
c(rw, "interestingNode");
function Po(r, e, t) {
  let i = H(r).resolveInner(e.head), n = t ? C.closedBy : C.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    rw(r, h, n) ? i = h : a = t ? h.to : h.from;
  }
  let s = i.type.prop(n), o, l;
  return s && (o = t ? gi(r, i.from, 1) : gi(r, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, k.cursor(l, t ? -1 : 1);
}
c(Po, "moveBySyntax");
const nw = /* @__PURE__ */ c((r) => De(r, (e) => Po(r.state, e, !he(r))), "cursorSyntaxLeft"), sw = /* @__PURE__ */ c((r) => De(r, (e) => Po(r.state, e, he(r))), "cursorSyntaxRight");
function Jm(r, e) {
  return De(r, (t) => {
    if (!t.empty)
      return xo(t, e);
    let i = r.moveVertically(t, e);
    return i.head != t.head ? i : r.moveToLineBoundary(t, e);
  });
}
c(Jm, "cursorByLine");
const eg = /* @__PURE__ */ c((r) => Jm(r, !1), "cursorLineUp"), tg = /* @__PURE__ */ c((r) => Jm(r, !0), "cursorLineDown");
function ig(r) {
  let e = r.scrollDOM.clientHeight < r.scrollDOM.scrollHeight - 2, t = 0, i = 0, n;
  if (e) {
    for (let s of r.state.facet(Z.scrollMargins)) {
      let o = s(r);
      o?.top && (t = Math.max(o?.top, t)), o?.bottom && (i = Math.max(o?.bottom, i));
    }
    n = r.scrollDOM.clientHeight - t - i;
  } else
    n = (r.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(r.defaultLineHeight, n - 5)
  };
}
c(ig, "pageInfo");
function rg(r, e) {
  let t = ig(r), { state: i } = r, n = tr(i.selection, (o) => o.empty ? r.moveVertically(o, e, t.height) : xo(o, e));
  if (n.eq(i.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let o = r.coordsAtPos(i.selection.main.head), l = r.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (s = Z.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return r.dispatch(qe(i, n), { effects: s }), !0;
}
c(rg, "cursorByPage");
const RO = /* @__PURE__ */ c((r) => rg(r, !1), "cursorPageUp"), Ka = /* @__PURE__ */ c((r) => rg(r, !0), "cursorPageDown");
function Zt(r, e, t) {
  let i = r.lineBlockAt(e.head), n = r.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? i.to : i.from) && (n = r.moveToLineBoundary(e, t, !1)), !t && n.head == i.from && i.length) {
    let s = /^\s*/.exec(r.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (n = k.cursor(i.from + s));
  }
  return n;
}
c(Zt, "moveByLineBoundary");
const ow = /* @__PURE__ */ c((r) => De(r, (e) => Zt(r, e, !0)), "cursorLineBoundaryForward"), lw = /* @__PURE__ */ c((r) => De(r, (e) => Zt(r, e, !1)), "cursorLineBoundaryBackward"), aw = /* @__PURE__ */ c((r) => De(r, (e) => Zt(r, e, !he(r))), "cursorLineBoundaryLeft"), hw = /* @__PURE__ */ c((r) => De(r, (e) => Zt(r, e, he(r))), "cursorLineBoundaryRight"), fw = /* @__PURE__ */ c((r) => De(r, (e) => k.cursor(r.lineBlockAt(e.head).from, 1)), "cursorLineStart"), cw = /* @__PURE__ */ c((r) => De(r, (e) => k.cursor(r.lineBlockAt(e.head).to, -1)), "cursorLineEnd");
function uw(r, e, t) {
  let i = !1, n = tr(r.selection, (s) => {
    let o = gi(r, s.head, -1) || gi(r, s.head, 1) || s.head > 0 && gi(r, s.head - 1, 1) || s.head < r.doc.length && gi(r, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    i = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return k.cursor(l);
  });
  return i ? (e(qe(r, n)), !0) : !1;
}
c(uw, "toMatchingBracket");
const Ow = /* @__PURE__ */ c(({ state: r, dispatch: e }) => uw(r, e), "cursorMatchingBracket");
function Ye(r, e) {
  let t = tr(r.state.selection, (i) => {
    let n = e(i);
    return k.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return t.eq(r.state.selection) ? !1 : (r.dispatch(qe(r.state, t)), !0);
}
c(Ye, "extendSel");
function ng(r, e) {
  return Ye(r, (t) => r.moveByChar(t, e));
}
c(ng, "selectByChar");
const sg = /* @__PURE__ */ c((r) => ng(r, !he(r)), "selectCharLeft"), og = /* @__PURE__ */ c((r) => ng(r, he(r)), "selectCharRight");
function lg(r, e) {
  return Ye(r, (t) => r.moveByGroup(t, e));
}
c(lg, "selectByGroup");
const dw = /* @__PURE__ */ c((r) => lg(r, !he(r)), "selectGroupLeft"), pw = /* @__PURE__ */ c((r) => lg(r, he(r)), "selectGroupRight"), mw = /* @__PURE__ */ c((r) => Ye(r, (e) => Po(r.state, e, !he(r))), "selectSyntaxLeft"), gw = /* @__PURE__ */ c((r) => Ye(r, (e) => Po(r.state, e, he(r))), "selectSyntaxRight");
function ag(r, e) {
  return Ye(r, (t) => r.moveVertically(t, e));
}
c(ag, "selectByLine");
const hg = /* @__PURE__ */ c((r) => ag(r, !1), "selectLineUp"), fg = /* @__PURE__ */ c((r) => ag(r, !0), "selectLineDown");
function cg(r, e) {
  return Ye(r, (t) => r.moveVertically(t, e, ig(r).height));
}
c(cg, "selectByPage");
const vO = /* @__PURE__ */ c((r) => cg(r, !1), "selectPageUp"), TO = /* @__PURE__ */ c((r) => cg(r, !0), "selectPageDown"), Qw = /* @__PURE__ */ c((r) => Ye(r, (e) => Zt(r, e, !0)), "selectLineBoundaryForward"), yw = /* @__PURE__ */ c((r) => Ye(r, (e) => Zt(r, e, !1)), "selectLineBoundaryBackward"), Sw = /* @__PURE__ */ c((r) => Ye(r, (e) => Zt(r, e, !he(r))), "selectLineBoundaryLeft"), bw = /* @__PURE__ */ c((r) => Ye(r, (e) => Zt(r, e, he(r))), "selectLineBoundaryRight"), ww = /* @__PURE__ */ c((r) => Ye(r, (e) => k.cursor(r.lineBlockAt(e.head).from)), "selectLineStart"), xw = /* @__PURE__ */ c((r) => Ye(r, (e) => k.cursor(r.lineBlockAt(e.head).to)), "selectLineEnd"), AO = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(qe(r, { anchor: 0 })), !0), "cursorDocStart"), LO = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(qe(r, { anchor: r.doc.length })), !0), "cursorDocEnd"), _O = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(qe(r, { anchor: r.selection.main.anchor, head: 0 })), !0), "selectDocStart"), MO = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(qe(r, { anchor: r.selection.main.anchor, head: r.doc.length })), !0), "selectDocEnd"), Pw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(r.update({ selection: { anchor: 0, head: r.doc.length }, userEvent: "select" })), !0), "selectAll"), kw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = ko(r).map(({ from: i, to: n }) => k.range(i, Math.min(n + 1, r.doc.length)));
  return e(r.update({ selection: k.create(t), userEvent: "select" })), !0;
}, "selectLine"), $w = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = tr(r.selection, (i) => {
    let n = H(r), s = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return k.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(r.selection) ? !1 : (e(qe(r, t)), !0);
}, "selectParentSyntax");
function ug(r, e) {
  let { state: t } = r, i = t.selection, n = t.selection.ranges.slice();
  for (let s of t.selection.ranges) {
    let o = t.doc.lineAt(s.head);
    if (e ? o.to < r.state.doc.length : o.from > 0)
      for (let l = s; ; ) {
        let a = r.moveVertically(l, e);
        if (a.head < o.from || a.head > o.to) {
          n.some((h) => h.head == a.head) || n.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return n.length == i.ranges.length ? !1 : (r.dispatch(qe(t, k.create(n, n.length - 1))), !0);
}
c(ug, "addCursorVertically");
const Rw = /* @__PURE__ */ c((r) => ug(r, !1), "addCursorAbove"), vw = /* @__PURE__ */ c((r) => ug(r, !0), "addCursorBelow"), Tw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = r.selection, i = null;
  return t.ranges.length > 1 ? i = k.create([t.main]) : t.main.empty || (i = k.create([k.cursor(t.main.head)])), i ? (e(qe(r, i)), !0) : !1;
}, "simplifySelection");
function kn(r, e) {
  if (r.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = r, n = i.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = Nn(r, a, !1)) : a > o && (t = "delete.forward", a = Nn(r, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Nn(r, o, !1), l = Nn(r, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: k.cursor(o, o < s.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (r.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? Z.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
c(kn, "deleteBy");
function Nn(r, e, t) {
  if (r instanceof Z)
    for (let i of r.state.facet(Z.atomicRanges).map((n) => n(r)))
      i.between(e, e, (n, s) => {
        n < e && s > e && (e = t ? s : n);
      });
  return e;
}
c(Nn, "skipAtomic");
const Og = /* @__PURE__ */ c((r, e, t) => kn(r, (i) => {
  let n = i.from, { state: s } = r, o = s.doc.lineAt(n), l, a;
  if (t && !e && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let h = Ot(l, s.tabSize), f = h % hi(s) || hi(s);
    for (let u = 0; u < f && l[l.length - 1 - u] == " "; u++)
      n--;
    a = n;
  } else
    a = me(o.text, n - o.from, e, e) + o.from, a == n && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = me(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), "deleteByChar"), Ja = /* @__PURE__ */ c((r) => Og(r, !1, !0), "deleteCharBackward"), dg = /* @__PURE__ */ c((r) => Og(r, !0, !1), "deleteCharForward"), pg = /* @__PURE__ */ c((r, e) => kn(r, (t) => {
  let i = t.head, { state: n } = r, s = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == t.head && s.number != (e ? n.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = me(s.text, i - s.from, e) + s.from, h = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), f = o(h);
    if (l != null && f != l)
      break;
    (h != " " || i != t.head) && (l = f), i = a;
  }
  return i;
}), "deleteByGroup"), mg = /* @__PURE__ */ c((r) => pg(r, !1), "deleteGroupBackward"), Aw = /* @__PURE__ */ c((r) => pg(r, !0), "deleteGroupForward"), Lw = /* @__PURE__ */ c((r) => kn(r, (e) => {
  let t = r.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(r.state.doc.length, e.head + 1);
}), "deleteToLineEnd"), _w = /* @__PURE__ */ c((r) => kn(r, (e) => {
  let t = r.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), "deleteLineBoundaryBackward"), Mw = /* @__PURE__ */ c((r) => kn(r, (e) => {
  let t = r.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(r.state.doc.length, e.head + 1);
}), "deleteLineBoundaryForward"), Zw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = r.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: W.of(["", ""]) },
    range: k.cursor(i.from)
  }));
  return e(r.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, "splitLine"), Cw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = r.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == r.doc.length)
      return { range: i };
    let n = i.from, s = r.doc.lineAt(n), o = n == s.from ? n - 1 : me(s.text, n - s.from, !1) + s.from, l = n == s.to ? n + 1 : me(s.text, n - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: r.doc.slice(n, l).append(r.doc.slice(o, n)) },
      range: k.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(r.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
}, "transposeChars");
function ko(r) {
  let e = [], t = -1;
  for (let i of r.selection.ranges) {
    let n = r.doc.lineAt(i.from), s = r.doc.lineAt(i.to);
    if (!i.empty && i.to == s.from && (s = r.doc.lineAt(i.to - 1)), t >= n.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(i);
    } else
      e.push({ from: n.from, to: s.to, ranges: [i] });
    t = s.number + 1;
  }
  return e;
}
c(ko, "selectedLineBlocks");
function gg(r, e, t) {
  if (r.readOnly)
    return !1;
  let i = [], n = [];
  for (let s of ko(r)) {
    if (t ? s.to == r.doc.length : s.from == 0)
      continue;
    let o = r.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + r.lineBreak });
      for (let a of s.ranges)
        n.push(k.range(Math.min(r.doc.length, a.anchor + l), Math.min(r.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: s.from }, { from: s.to, insert: r.lineBreak + o.text });
      for (let a of s.ranges)
        n.push(k.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(r.update({
    changes: i,
    scrollIntoView: !0,
    selection: k.create(n, r.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
c(gg, "moveLine");
const Xw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => gg(r, e, !1), "moveLineUp"), Ew = /* @__PURE__ */ c(({ state: r, dispatch: e }) => gg(r, e, !0), "moveLineDown");
function Qg(r, e, t) {
  if (r.readOnly)
    return !1;
  let i = [];
  for (let s of ko(r))
    t ? i.push({ from: s.from, insert: r.doc.slice(s.from, s.to) + r.lineBreak }) : i.push({ from: s.to, insert: r.lineBreak + r.doc.slice(s.from, s.to) });
  let n = r.changes(i);
  return e(r.update({
    changes: n,
    selection: r.selection.map(n, t ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
c(Qg, "copyLine");
const Yw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => Qg(r, e, !1), "copyLineUp"), Vw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => Qg(r, e, !0), "copyLineDown"), Ww = /* @__PURE__ */ c((r) => {
  if (r.state.readOnly)
    return !1;
  let { state: e } = r, t = e.changes(ko(e).map(({ from: n, to: s }) => (n > 0 ? n-- : s < e.doc.length && s++, { from: n, to: s }))), i = tr(e.selection, (n) => {
    let s;
    if (r.lineWrapping) {
      let o = r.lineBlockAt(n.head), l = r.coordsAtPos(n.head, n.assoc || 1);
      l && (s = o.bottom + r.documentTop - l.bottom + r.defaultLineHeight / 2);
    }
    return r.moveVertically(n, !0, s);
  }).map(t);
  return r.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
}, "deleteLine");
function Uw(r, e) {
  if (/\(\)|\[\]|\{\}/.test(r.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = H(r).resolveInner(e), i = t.childBefore(e), n = t.childAfter(e), s;
  return i && n && i.to <= e && n.from >= e && (s = i.type.prop(C.closedBy)) && s.indexOf(n.name) > -1 && r.doc.lineAt(i.to).from == r.doc.lineAt(n.from).from && !/\S/.test(r.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
c(Uw, "isBetweenBrackets");
const ZO = /* @__PURE__ */ yg(!1), Iw = /* @__PURE__ */ yg(!0);
function yg(r) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((n) => {
      let { from: s, to: o } = n, l = e.doc.lineAt(s), a = !r && s == o && Uw(e, s);
      r && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Di(e, { simulateBreak: s, simulateDoubleBreak: !!a }), f = rp(h, s);
      for (f == null && (f = Ot(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", ws(e, f)];
      return a && u.push(ws(e, h.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: W.of(u) },
        range: k.cursor(s + 1 + u[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
c(yg, "newlineAndIndent");
function Xh(r, e) {
  let t = -1;
  return r.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = r.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, n, i), t = l.number), o = l.to + 1;
    }
    let s = r.changes(n);
    return {
      changes: n,
      range: k.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1))
    };
  });
}
c(Xh, "changeBySelectedLine");
const zw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new Di(r, { overrideIndentation: /* @__PURE__ */ c((s) => {
    let o = t[s];
    return o ?? -1;
  }, "overrideIndentation") }), n = Xh(r, (s, o, l) => {
    let a = rp(i, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let h = /^\s*/.exec(s.text)[0], f = ws(r, a);
    (h != f || l.from < s.from + h.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + h.length, insert: f }));
  });
  return n.changes.empty || e(r.update(n, { userEvent: "indent" })), !0;
}, "indentSelection"), jw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.readOnly ? !1 : (e(r.update(Xh(r, (t, i) => {
  i.push({ from: t.from, insert: r.facet(wn) });
}), { userEvent: "input.indent" })), !0), "indentMore"), qw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.readOnly ? !1 : (e(r.update(Xh(r, (t, i) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let s = Ot(n, r.tabSize), o = 0, l = ws(r, Math.max(0, s - hi(r)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), "indentLess"), Dw = /* @__PURE__ */ c((r) => (r.setTabFocusMode(), !0), "toggleTabFocusMode"), Bw = [
  { key: "Ctrl-b", run: Fm, shift: sg, preventDefault: !0 },
  { key: "Ctrl-f", run: Hm, shift: og },
  { key: "Ctrl-p", run: eg, shift: hg },
  { key: "Ctrl-n", run: tg, shift: fg },
  { key: "Ctrl-a", run: fw, shift: ww },
  { key: "Ctrl-e", run: cw, shift: xw },
  { key: "Ctrl-d", run: dg },
  { key: "Ctrl-h", run: Ja },
  { key: "Ctrl-k", run: Lw },
  { key: "Ctrl-Alt-h", run: mg },
  { key: "Ctrl-o", run: Zw },
  { key: "Ctrl-t", run: Cw },
  { key: "Ctrl-v", run: Ka }
], Nw = /* @__PURE__ */ [
  { key: "ArrowLeft", run: Fm, shift: sg, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: tw, shift: dw, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: aw, shift: Sw, preventDefault: !0 },
  { key: "ArrowRight", run: Hm, shift: og, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: iw, shift: pw, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: hw, shift: bw, preventDefault: !0 },
  { key: "ArrowUp", run: eg, shift: hg, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: AO, shift: _O },
  { mac: "Ctrl-ArrowUp", run: RO, shift: vO },
  { key: "ArrowDown", run: tg, shift: fg, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: LO, shift: MO },
  { mac: "Ctrl-ArrowDown", run: Ka, shift: TO },
  { key: "PageUp", run: RO, shift: vO },
  { key: "PageDown", run: Ka, shift: TO },
  { key: "Home", run: lw, shift: yw, preventDefault: !0 },
  { key: "Mod-Home", run: AO, shift: _O },
  { key: "End", run: ow, shift: Qw, preventDefault: !0 },
  { key: "Mod-End", run: LO, shift: MO },
  { key: "Enter", run: ZO, shift: ZO },
  { key: "Mod-a", run: Pw },
  { key: "Backspace", run: Ja, shift: Ja, preventDefault: !0 },
  { key: "Delete", run: dg, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: mg, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: Aw, preventDefault: !0 },
  { mac: "Mod-Backspace", run: _w, preventDefault: !0 },
  { mac: "Mod-Delete", run: Mw, preventDefault: !0 }
].concat(/* @__PURE__ */ Bw.map((r) => ({ mac: r.key, run: r.run, shift: r.shift }))), Gw = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: nw, shift: mw },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: sw, shift: gw },
  { key: "Alt-ArrowUp", run: Xw },
  { key: "Shift-Alt-ArrowUp", run: Yw },
  { key: "Alt-ArrowDown", run: Ew },
  { key: "Shift-Alt-ArrowDown", run: Vw },
  { key: "Mod-Alt-ArrowUp", run: Rw },
  { key: "Mod-Alt-ArrowDown", run: vw },
  { key: "Escape", run: Tw },
  { key: "Mod-Enter", run: Iw },
  { key: "Alt-l", mac: "Ctrl-l", run: kw },
  { key: "Mod-i", run: $w, preventDefault: !0 },
  { key: "Mod-[", run: qw },
  { key: "Mod-]", run: jw },
  { key: "Mod-Alt-\\", run: zw },
  { key: "Shift-Mod-k", run: Ww },
  { key: "Shift-Mod-\\", run: Ow },
  { key: "Mod-/", run: Xb },
  { key: "Alt-A", run: Yb },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Dw }
].concat(Nw), Fw = xs.define([
  { tag: g.meta, class: "code" },
  { tag: g.link, class: "wy-link" },
  { tag: g.heading, textDecoration: "underline", fontWeight: "bold" },
  { tag: g.emphasis, fontStyle: "italic" },
  { tag: g.strong, fontWeight: "bold" },
  { tag: g.strikethrough, textDecoration: "line-through" },
  { tag: g.keyword, class: "code token keyword" },
  { tag: [g.atom, g.bool], class: "code token builtin" },
  { tag: [g.url, g.contentSeparator, g.labelName], class: "code token prolog" },
  { tag: g.literal, class: "code token char" },
  { tag: g.inserted, class: "code token inserted" },
  { tag: g.deleted, class: "code token deleted" },
  { tag: g.string, class: "code token string" },
  { tag: [g.regexp, g.escape, g.special(g.string)], class: "code token regex" },
  { tag: g.definition(g.variableName), class: "code token constant" },
  { tag: g.local(g.variableName), class: "code token variable" },
  { tag: [g.typeName, g.namespace], class: "code token keyword" },
  { tag: g.className, class: "code token class-name" },
  { tag: [g.special(g.variableName), g.macroName], class: "code token function" },
  { tag: g.propertyName, class: "code token property" },
  { tag: g.comment, class: "code token comment" },
  { tag: g.invalid, color: "#f00", class: "code token" }
]), Ox = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Compartment: Dr,
  CompletionContext: Bi,
  EditorState: J,
  EditorView: Z,
  ViewUpdate: nn,
  autocompletion: YQ,
  defaultKeymap: Gw,
  dropCursor: m1,
  history: qb,
  historyKeymap: ew,
  keymap: bn,
  languages: Lb,
  markdown: Wm,
  mentions: Cb,
  placeholder: Q1,
  syntaxHighlighting: N1,
  weavyEnterSendKeymap: Mb,
  weavyHighlighter: Fw,
  weavyKeymap: Zb,
  weavyModifierEnterSendKeymap: _b
}, Symbol.toStringTag, { value: "Module" }));
function dx(r) {
  Sg(r, "start");
  var e = {}, t = r.languageData || {}, i = !1;
  for (var n in r) if (n != t && r.hasOwnProperty(n))
    for (var s = e[n] = [], o = r[n], l = 0; l < o.length; l++) {
      var a = o[l];
      s.push(new Jw(a, r)), (a.indent || a.dedent) && (i = !0);
    }
  return {
    name: t.name,
    startState: /* @__PURE__ */ c(function() {
      return { state: "start", pending: null, indent: i ? [] : null };
    }, "startState"),
    copyState: /* @__PURE__ */ c(function(h) {
      var f = { state: h.state, pending: h.pending, indent: h.indent && h.indent.slice(0) };
      return h.stack && (f.stack = h.stack.slice(0)), f;
    }, "copyState"),
    token: ex(e),
    indent: tx(e, t),
    mergeTokens: t.mergeTokens,
    languageData: t
  };
}
c(dx, "simpleMode");
function Sg(r, e) {
  if (!r.hasOwnProperty(e))
    throw new Error("Undefined state " + e + " in simple mode");
}
c(Sg, "ensureState");
function Hw(r, e) {
  if (!r) return /(?:)/;
  var t = "";
  return r instanceof RegExp ? (r.ignoreCase && (t = "i"), r.unicode && (t += "u"), r = r.source) : r = String(r), new RegExp("^(?:" + r + ")", t);
}
c(Hw, "toRegex");
function Kw(r) {
  if (!r) return null;
  if (r.apply) return r;
  if (typeof r == "string") return r.replace(/\./g, " ");
  for (var e = [], t = 0; t < r.length; t++)
    e.push(r[t] && r[t].replace(/\./g, " "));
  return e;
}
c(Kw, "asToken");
function Jw(r, e) {
  (r.next || r.push) && Sg(e, r.next || r.push), this.regex = Hw(r.regex), this.token = Kw(r.token), this.data = r;
}
c(Jw, "Rule");
function ex(r) {
  return function(e, t) {
    if (t.pending) {
      var i = t.pending.shift();
      return t.pending.length == 0 && (t.pending = null), e.pos += i.text.length, i.token;
    }
    for (var n = r[t.state], s = 0; s < n.length; s++) {
      var o = n[s], l = (!o.data.sol || e.sol()) && e.match(o.regex);
      if (l) {
        o.data.next ? t.state = o.data.next : o.data.push ? ((t.stack || (t.stack = [])).push(t.state), t.state = o.data.push) : o.data.pop && t.stack && t.stack.length && (t.state = t.stack.pop()), o.data.indent && t.indent.push(e.indentation() + e.indentUnit), o.data.dedent && t.indent.pop();
        var a = o.token;
        if (a && a.apply && (a = a(l)), l.length > 2 && o.token && typeof o.token != "string") {
          t.pending = [];
          for (var h = 2; h < l.length; h++)
            l[h] && t.pending.push({ text: l[h], token: o.token[h - 1] });
          return e.backUp(l[0].length - (l[1] ? l[1].length : 0)), a[0];
        } else return a && a.join ? a[0] : a;
      }
    }
    return e.next(), null;
  };
}
c(ex, "tokenFunction");
function tx(r, e) {
  return function(t, i) {
    if (t.indent == null || e.dontIndentStates && e.dontIndentStates.indexOf(t.state) > -1)
      return null;
    var n = t.indent.length - 1, s = r[t.state];
    e: for (; ; ) {
      for (var o = 0; o < s.length; o++) {
        var l = s[o];
        if (l.data.dedent && l.data.dedentIfLineStart !== !1) {
          var a = l.regex.exec(i);
          if (a && a[0]) {
            n--, (l.next || l.push) && (s = r[l.next || l.push]), i = i.slice(a[0].length);
            continue e;
          }
        }
      }
      break;
    }
    return n < 0 ? 0 : t.indent[n];
  };
}
c(tx, "indentFunction");
export {
  Xs as ContextTracker,
  k as EditorSelection,
  Z as EditorView,
  Qe as ExternalTokenizer,
  B as IterMode,
  ln as LRLanguage,
  pn as LRParser,
  Mt as LanguageSupport,
  Fi as LocalTokenGroup,
  Qs as NodeWeakMap,
  rx as autofocusRef,
  ap as bracketMatchingHandle,
  Op as completeFromList,
  es as continuedIndent,
  CO as defaultVisibilityCheckOptions,
  rm as defineCSSCompletionSource,
  q1 as delimitedIndent,
  Ox as editor,
  D1 as flatIndent,
  op as foldInside,
  xn as foldNodeProp,
  Rm as html,
  aQ as ifNotIn,
  ux as inOverlay,
  er as indentNodeProp,
  cx as isDomAvailable,
  hx as isInShadowDom,
  ax as isModifiedClick,
  fx as isPopoverPolyfilled,
  Ce as javascriptLanguage,
  wg as observeConnected,
  Jd as parseMixed,
  dx as simpleMode,
  ye as snippetCompletion,
  Ji as styleTags,
  H as syntaxTree,
  g as tags,
  eh as throwOnDomNotAvailable,
  sx as whenConnected,
  ox as whenDocumentVisible,
  lx as whenElementVisible,
  nx as whenParentsDefined
};
