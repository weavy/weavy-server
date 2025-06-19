var Og = Object.defineProperty;
var c = (r, e) => Og(r, "name", { value: e, configurable: !0 });
const Vw = /* @__PURE__ */ c((r) => {
  r && requestAnimationFrame(() => {
    var e;
    return (e = r == null ? void 0 : r.focus) == null ? void 0 : e.call(r);
  });
}, "autofocusRef");
async function Uw(r, e = "wy-") {
  const t = [];
  for (let i = r; i = i.parentElement; )
    i.matches(":not(:defined)") && i.localName.startsWith(e) && t.push(customElements.whenDefined(i.localName));
  await Promise.all(t);
}
c(Uw, "whenParentsDefined");
const pg = /* @__PURE__ */ c((r, e) => {
  let t;
  const i = new ResizeObserver(() => {
    const { isConnected: n } = r;
    n !== t && (t = n, e(n, r));
  });
  return i.observe(r), i;
}, "observeConnected");
async function Ww(r, e = !0) {
  if (r.isConnected === e)
    return e;
  {
    let t;
    const i = new Promise((s) => t = s), n = pg(r, (s) => {
      s === e && (t == null || t(e));
    });
    return await i, n.disconnect(), e;
  }
}
c(Ww, "whenConnected");
async function Xw() {
  Cd(), document.hidden && await new Promise((r) => {
    window.addEventListener(
      "visibilitychange",
      () => {
        document.hidden || r(!0);
      },
      { once: !0 }
    );
  });
}
c(Xw, "whenDocumentVisible");
const Md = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  opacityProperty: !0,
  visibilityProperty: !0,
  // Legacy compatibility
  checkOpacity: !0,
  checkVisibilityCSS: !0
};
function _d(r, e = !0, t = Md, i) {
  r.checkVisibility(t) === e ? i(e) : requestAnimationFrame(() => _d(r, e, t, i));
}
c(_d, "untilVisibility");
async function Yw(r, e = !0, t = Md) {
  r.checkVisibility(t) !== e && await new Promise((n) => {
    _d(r, e, t, n);
  });
}
c(Yw, "whenElementVisible");
function Iw(r) {
  return r.getRootNode() instanceof ShadowRoot;
}
c(Iw, "isInShadowDom");
function jw() {
  var r;
  return !!((r = document.body) != null && r.showPopover && !/native code/i.test(document.body.showPopover.toString()));
}
c(jw, "isPopoverPolyfilled");
function qw() {
  return typeof window < "u";
}
c(qw, "isDomAvailable");
function Cd() {
  if (typeof window > "u")
    throw Error("DOM not available");
}
c(Cd, "throwOnDomNotAvailable");
let el = [], Ed = [];
(() => {
  let r = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < r.length; e++)
    (e % 2 ? Ed : el).push(t = t + r[e]);
})();
function mg(r) {
  if (r < 768) return !1;
  for (let e = 0, t = el.length; ; ) {
    let i = e + t >> 1;
    if (r < el[i]) t = i;
    else if (r >= Ed[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
c(mg, "isExtendingChar");
function vc(r) {
  return r >= 127462 && r <= 127487;
}
c(vc, "isRegionalIndicator");
const Tc = 8205;
function gg(r, e, t = !0, i = !0) {
  return (t ? Vd : yg)(r, e, i);
}
c(gg, "findClusterBreak$1");
function Vd(r, e, t) {
  if (e == r.length) return e;
  e && Ud(r.charCodeAt(e)) && Wd(r.charCodeAt(e - 1)) && e--;
  let i = Po(r, e);
  for (e += Ac(i); e < r.length; ) {
    let n = Po(r, e);
    if (i == Tc || n == Tc || t && mg(n))
      e += Ac(n), i = n;
    else if (vc(n)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && vc(Po(r, o)); )
        s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
c(Vd, "nextClusterBreak");
function yg(r, e, t) {
  for (; e > 0; ) {
    let i = Vd(r, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
c(yg, "prevClusterBreak");
function Po(r, e) {
  let t = r.charCodeAt(e);
  if (!Wd(t) || e + 1 == r.length) return t;
  let i = r.charCodeAt(e + 1);
  return Ud(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
c(Po, "codePointAt$1");
function Ud(r) {
  return r >= 56320 && r < 57344;
}
c(Ud, "surrogateLow$1");
function Wd(r) {
  return r >= 55296 && r < 56320;
}
c(Wd, "surrogateHigh$1");
function Ac(r) {
  return r < 65536 ? 1 : 2;
}
c(Ac, "codePointSize$1");
const Us = class Us {
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
    [e, t] = Vi(this, e, t);
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
    [e, t] = Vi(this, e, t);
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
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), n = new Ht(this), s = new Ht(e);
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
    return new Ht(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, t = this.length) {
    return new Fn(this, e, t);
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
    return new Kn(i);
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
    return e.length == 1 && !e[0] ? Us.empty : e.length <= 32 ? new Re(e) : Pi.from(Re.split(e, []));
  }
};
c(Us, "Text");
let X = Us;
const Ze = class Ze extends X {
  constructor(e, t = bg(e)) {
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
        return new Sg(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(e, t, i, n) {
    let s = e <= 0 && t >= this.length ? this : new Ze(Zc(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (n & 1) {
      let o = i.pop(), l = jn(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        i.push(new Ze(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new Ze(l.slice(0, a)), new Ze(l.slice(a)));
      }
    } else
      i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof Ze))
      return super.replace(e, t, i);
    [e, t] = Vi(this, e, t);
    let n = jn(this.text, jn(i.text, Zc(this.text, 0, e)), t), s = this.length + i.length - (t - e);
    return n.length <= 32 ? new Ze(n, s) : Pi.from(Ze.split(n, []), s);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Vi(this, e, t);
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
      i.push(s), n += s.length + 1, i.length == 32 && (t.push(new Ze(i, n)), i = [], n = -1);
    return n > -1 && t.push(new Ze(i, n)), t;
  }
};
c(Ze, "TextLeaf");
let Re = Ze;
const yt = class yt extends X {
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
    if ([e, t] = Vi(this, e, t), i.lines < this.lines)
      for (let n = 0, s = 0; n < this.children.length; n++) {
        let o = this.children[n], l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let f = this.children.slice();
            return f[n] = a, new yt(f, this.length - (t - e) + i.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Vi(this, e, t);
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
    if (!(e instanceof yt))
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
    for (let O of e)
      i += O.lines;
    if (i < 32) {
      let O = [];
      for (let p of e)
        p.flatten(O);
      return new Re(O, t);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), s = n << 1, o = n >> 1, l = [], a = 0, h = -1, f = [];
    function u(O) {
      let p;
      if (O.lines > s && O instanceof yt)
        for (let m of O.children)
          u(m);
      else O.lines > o && (a > o || !a) ? (d(), l.push(O)) : O instanceof Re && a && (p = f[f.length - 1]) instanceof Re && O.lines + p.lines <= 32 ? (a += O.lines, h += O.length + 1, f[f.length - 1] = new Re(p.text.concat(O.text), p.length + 1 + O.length)) : (a + O.lines > n && d(), a += O.lines, h += O.length + 1, f.push(O));
    }
    c(u, "add");
    function d() {
      a != 0 && (l.push(f.length == 1 ? f[0] : yt.from(f, h)), h = -1, a = f.length = 0);
    }
    c(d, "flush");
    for (let O of e)
      u(O);
    return d(), l.length == 1 ? l[0] : new yt(l, t);
  }
};
c(yt, "TextNode");
let Pi = yt;
X.empty = /* @__PURE__ */ new Re([""], 0);
function bg(r) {
  let e = -1;
  for (let t of r)
    e += t.length + 1;
  return e;
}
c(bg, "textLength");
function jn(r, e, t = 0, i = 1e9) {
  for (let n = 0, s = 0, o = !0; s < r.length && n <= i; s++) {
    let l = r[s], a = n + l.length;
    a >= t && (a > i && (l = l.slice(0, i - n)), n < t && (l = l.slice(t - n)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), n = a + 1;
  }
  return e;
}
c(jn, "appendText");
function Zc(r, e, t) {
  return jn(r, [""], e, t);
}
c(Zc, "sliceText");
const _h = class _h {
  constructor(e, t = 1) {
    this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Re ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], s = this.offsets[i], o = s >> 1, l = n instanceof Re ? n.text.length : n.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (n instanceof Re) {
        let a = n.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = n.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Re ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
};
c(_h, "RawTextCursor");
let Ht = _h;
const Ch = class Ch {
  constructor(e, t, i) {
    this.value = "", this.done = !1, this.cursor = new Ht(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
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
c(Ch, "PartialTextCursor");
let Fn = Ch;
const Eh = class Eh {
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
c(Eh, "LineCursor");
let Kn = Eh;
typeof Symbol < "u" && (X.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Ht.prototype[Symbol.iterator] = Fn.prototype[Symbol.iterator] = Kn.prototype[Symbol.iterator] = function() {
  return this;
});
var Ti;
let Sg = (Ti = class {
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
function Vi(r, e, t) {
  return e = Math.max(0, Math.min(r.length, e)), [e, Math.max(e, Math.min(r.length, t))];
}
c(Vi, "clip");
function Oe(r, e, t = !0, i = !0) {
  return gg(r, e, t, i);
}
c(Oe, "findClusterBreak");
function Qg(r) {
  return r >= 56320 && r < 57344;
}
c(Qg, "surrogateLow");
function wg(r) {
  return r >= 55296 && r < 56320;
}
c(wg, "surrogateHigh");
function Wt(r, e) {
  let t = r.charCodeAt(e);
  if (!wg(t) || e + 1 == r.length)
    return t;
  let i = r.charCodeAt(e + 1);
  return Qg(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
c(Wt, "codePointAt");
function xg(r) {
  return r <= 65535 ? String.fromCharCode(r) : (r -= 65536, String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320));
}
c(xg, "fromCodePoint");
function ui(r) {
  return r < 65536 ? 1 : 2;
}
c(ui, "codePointSize");
const tl = /\r\n?|\n/;
var ue = /* @__PURE__ */ function(r) {
  return r[r.Simple = 0] = "Simple", r[r.TrackDel = 1] = "TrackDel", r[r.TrackBefore = 2] = "TrackBefore", r[r.TrackAfter = 3] = "TrackAfter", r;
}(ue || (ue = {}));
const yi = class yi {
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
    il(this, e, t);
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
    return new yi(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Xd(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, t = !1) {
    return e.empty ? this : rl(this, e, t);
  }
  mapPos(e, t = -1, i = ue.Simple) {
    let n = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > e)
          return s + (e - n);
        s += l;
      } else {
        if (i != ue.Simple && h >= e && (i == ue.TrackDel && n < e && h > e || i == ue.TrackBefore && n < e || i == ue.TrackAfter && h > e))
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
    return new yi(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new yi(e);
  }
};
c(yi, "ChangeDesc");
let wt = yi;
const Fe = class Fe extends wt {
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
    return il(this, (t, i, n, s, o) => e = e.replace(n, n + (i - t), o), !1), e;
  }
  mapDesc(e, t = !1) {
    return rl(this, e, t, !0);
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
          i.push(X.empty);
        i.push(o ? e.slice(s, s + o) : X.empty);
      }
      s += o;
    }
    return new Fe(t, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Xd(this, e, !0);
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
    return e.empty ? this : rl(this, e, t, !0);
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
    il(this, e, t);
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
    let t = [], i = [], n = [], s = new ti(this);
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
      changes: new Fe(t, i),
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
      let u = new Fe(n, s);
      l = l ? l.compose(u.map(l)) : u, n = [], s = [], o = 0;
    }
    c(a, "flush");
    function h(f) {
      if (Array.isArray(f))
        for (let u of f)
          h(u);
      else if (f instanceof Fe) {
        if (f.length != t)
          throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`);
        a(), l = l ? l.compose(f.map(l)) : f;
      } else {
        let { from: u, to: d = u, insert: O } = f;
        if (u > d || u < 0 || d > t)
          throw new RangeError(`Invalid change range ${u} to ${d} (in doc of length ${t})`);
        let p = O ? typeof O == "string" ? X.of(O.split(i || tl)) : O : X.empty, m = p.length;
        if (u == d && m == 0)
          return;
        u < o && a(), u > o && ae(n, u - o, -1), ae(n, d - u, m), St(s, n, p), o = d;
      }
    }
    return c(h, "process"), h(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new Fe(e ? [e, -1] : [], []);
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
            i.push(X.empty);
          i[n] = X.of(s.slice(1)), t.push(s[0], i[n].length);
        }
      }
    }
    return new Fe(t, i);
  }
  /**
  @internal
  */
  static createSet(e, t) {
    return new Fe(e, t);
  }
};
c(Fe, "ChangeSet");
let Te = Fe;
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
      r.push(X.empty);
    r.push(t);
  }
}
c(St, "addInsert");
function il(r, e, t) {
  let i = r.inserted;
  for (let n = 0, s = 0, o = 0; o < r.sections.length; ) {
    let l = r.sections[o++], a = r.sections[o++];
    if (a < 0)
      n += l, s += l;
    else {
      let h = n, f = s, u = X.empty;
      for (; h += l, f += a, a && i && (u = u.append(i[o - 2 >> 1])), !(t || o == r.sections.length || r.sections[o + 1] < 0); )
        l = r.sections[o++], a = r.sections[o++];
      e(n, h, s, f, u), n = h, s = f;
    }
  }
}
c(il, "iterChanges");
function rl(r, e, t, i = !1) {
  let n = [], s = i ? [] : null, o = new ti(r), l = new ti(e);
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
c(rl, "mapSet");
function Xd(r, e, t = !1) {
  let i = [], n = t ? [] : null, s = new ti(r), o = new ti(e);
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
c(Xd, "composeSets");
const Vh = class Vh {
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
    return t >= e.length ? X.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? X.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
};
c(Vh, "SectionIter");
let ti = Vh;
const Rr = class Rr {
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
    return this.empty ? i = n = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), n = e.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new Rr(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return R.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return R.range(this.anchor, i);
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
    return R.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Rr(e, t, i);
  }
};
c(Rr, "SelectionRange");
let Oi = Rr;
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
    return new fe(e.ranges.map((t) => Oi.fromJSON(t)), e.main);
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
    return Oi.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, t, i, n) {
    let s = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return t < e ? Oi.create(t, e, 48 | s) : Oi.create(e, t, (t > e ? 8 : 0) | s);
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
let R = fe;
function Yd(r, e) {
  for (let t of r.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
c(Yd, "checkSelection");
let Ka = 0;
const Ws = class Ws {
  constructor(e, t, i, n, s) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = n, this.id = Ka++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
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
    return new Ws(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Ja), !!e.static, e.enables);
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
c(Ws, "Facet");
let M = Ws;
function Ja(r, e) {
  return r == e || r.length == e.length && r.every((t, i) => t === e[i]);
}
c(Ja, "sameArray$1");
const Uh = class Uh {
  constructor(e, t, i, n) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = n, this.id = Ka++;
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
      update(u, d) {
        if (a && d.docChanged || h && (d.docChanged || d.selection) || nl(u, f)) {
          let O = i(u);
          if (l ? !Lc(O, u.values[o], n) : !n(O, u.values[o]))
            return u.values[o] = O, 1;
        }
        return 0;
      },
      reconfigure: /* @__PURE__ */ c((u, d) => {
        let O, p = d.config.address[s];
        if (p != null) {
          let m = ts(d, p);
          if (this.dependencies.every((y) => y instanceof M ? d.facet(y) === u.facet(y) : y instanceof Ye ? d.field(y, !1) == u.field(y, !1) : !0) || (l ? Lc(O = i(u), m, n) : n(O = i(u), m)))
            return u.values[o] = m, 0;
        } else
          O = i(u);
        return u.values[o] = O, 1;
      }, "reconfigure")
    };
  }
};
c(Uh, "FacetProvider");
let ki = Uh;
function Lc(r, e, t) {
  if (r.length != e.length)
    return !1;
  for (let i = 0; i < r.length; i++)
    if (!t(r[i], e[i]))
      return !1;
  return !0;
}
c(Lc, "compareArray");
function nl(r, e) {
  let t = !1;
  for (let i of e)
    mr(r, i) & 1 && (t = !0);
  return t;
}
c(nl, "ensureAll");
function Pg(r, e, t) {
  let i = t.map((a) => r[a.id]), n = t.map((a) => a.type), s = i.filter((a) => !(a & 1)), o = r[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let f = 0; f < i.length; f++) {
      let u = ts(a, i[f]);
      if (n[f] == 2)
        for (let d of u)
          h.push(d);
      else
        h.push(u);
    }
    return e.combine(h);
  }
  return c(l, "get"), {
    create(a) {
      for (let h of i)
        mr(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!nl(a, s))
        return 0;
      let f = l(a);
      return e.compare(f, a.values[o]) ? 0 : (a.values[o] = f, 1);
    },
    reconfigure(a, h) {
      let f = nl(a, i), u = h.config.facets[e.id], d = h.facet(e);
      if (u && !f && Ja(t, u))
        return a.values[o] = d, 0;
      let O = l(a);
      return e.compare(O, d) ? (a.values[o] = d, 0) : (a.values[o] = O, 1);
    }
  };
}
c(Pg, "dynamicFacetSlot");
const xn = /* @__PURE__ */ M.define({ static: !0 }), Xs = class Xs {
  constructor(e, t, i, n, s) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = n, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let t = new Xs(Ka++, e.create, e.update, e.compare || ((i, n) => i === n), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(xn).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
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
        let s = i.facet(xn), o = n.facet(xn), l;
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
    return [this, xn.of({ field: this, create: e })];
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
c(Xs, "StateField");
let Ye = Xs;
const Xt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function rr(r) {
  return (e) => new Jn(e, r);
}
c(rr, "prec");
const hi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ rr(Xt.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ rr(Xt.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ rr(Xt.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ rr(Xt.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ rr(Xt.lowest)
}, Wh = class Wh {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
};
c(Wh, "PrecExtension");
let Jn = Wh;
const Ys = class Ys {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new zr(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Ys.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
};
c(Ys, "Compartment");
let Br = Ys;
const Xh = class Xh {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
};
c(Xh, "CompartmentInstance");
let zr = Xh;
const Is = class Is {
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
    for (let d of kg(e, t, o))
      d instanceof Ye ? n.push(d) : (s[d.facet.id] || (s[d.facet.id] = [])).push(d);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let d of n)
      l[d.id] = h.length << 1, h.push((O) => d.slot(O));
    let f = i == null ? void 0 : i.config.facets;
    for (let d in s) {
      let O = s[d], p = O[0].facet, m = f && f[d] || [];
      if (O.every(
        (y) => y.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, Ja(m, O))
          a.push(i.facet(p));
        else {
          let y = p.combine(O.map((b) => b.value));
          a.push(i && p.compare(y, i.facet(p)) ? i.facet(p) : y);
        }
      else {
        for (let y of O)
          y.type == 0 ? (l[y.id] = a.length << 1 | 1, a.push(y.value)) : (l[y.id] = h.length << 1, h.push((b) => y.dynamicSlot(b)));
        l[p.id] = h.length << 1, h.push((y) => Pg(y, p, O));
      }
    }
    let u = h.map((d) => d(l));
    return new Is(e, o, u, l, a, s);
  }
};
c(Is, "Configuration");
let es = Is;
function kg(r, e, t) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof zr && t.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        s(h, l);
    else if (o instanceof zr) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), s(h, l);
    } else if (o instanceof Jn)
      s(o.inner, o.prec);
    else if (o instanceof Ye)
      i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof ki)
      i[l].push(o), o.facet.extensions && s(o.facet.extensions, Xt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(h, l);
    }
  }
  return c(s, "inner"), s(r, Xt.default), i.reduce((o, l) => o.concat(l));
}
c(kg, "flatten");
function mr(r, e) {
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
c(mr, "ensureAddr");
function ts(r, e) {
  return e & 1 ? r.config.staticValues[e >> 1] : r.values[e >> 1];
}
c(ts, "getAddr");
const Id = /* @__PURE__ */ M.define(), sl = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine"),
  static: !0
}), jd = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : void 0, "combine"),
  static: !0
}), qd = /* @__PURE__ */ M.define(), Dd = /* @__PURE__ */ M.define(), Bd = /* @__PURE__ */ M.define(), zd = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : !1, "combine")
}), Yh = class Yh {
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
    return new ol();
  }
};
c(Yh, "Annotation");
let Ie = Yh;
const Ih = class Ih {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new Ie(this, e);
  }
};
c(Ih, "AnnotationType");
let ol = Ih;
const jh = class jh {
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
c(jh, "StateEffectType");
let ll = jh;
const js = class js {
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
    return t === void 0 ? void 0 : t == this.value ? this : new js(this.type, t);
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
    return new ll(e.map || ((t) => t));
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
c(js, "StateEffect");
let I = js;
I.reconfigure = /* @__PURE__ */ I.define();
I.appendConfig = /* @__PURE__ */ I.define();
const It = class It {
  constructor(e, t, i, n, s, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = n, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, i && Yd(i, t.newLength), s.some((l) => l.type == It.time) || (this.annotations = s.concat(It.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, t, i, n, s, o) {
    return new It(e, t, i, n, s, o);
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
    let t = this.annotation(It.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
};
c(It, "Transaction");
let le = It;
le.time = /* @__PURE__ */ Ie.define();
le.userEvent = /* @__PURE__ */ Ie.define();
le.addToHistory = /* @__PURE__ */ Ie.define();
le.remote = /* @__PURE__ */ Ie.define();
function Rg(r, e) {
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
c(Rg, "joinRanges");
function Nd(r, e, t) {
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
c(Nd, "mergeTransaction");
function al(r, e, t) {
  let i = e.selection, n = Ri(e.annotations);
  return e.userEvent && (n = n.concat(le.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof Te ? e.changes : Te.of(e.changes || [], t, r.facet(jd)),
    selection: i && (i instanceof R ? i : R.single(i.anchor, i.head)),
    effects: Ri(e.effects),
    annotations: n,
    scrollIntoView: !!e.scrollIntoView
  };
}
c(al, "resolveTransactionInner");
function Gd(r, e, t) {
  let i = al(r, e.length ? e[0] : {}, r.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    i = Nd(i, al(r, e[s], o ? i.changes.newLength : r.doc.length), o);
  }
  let n = le.create(r, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return vg(t ? $g(n) : n);
}
c(Gd, "resolveTransaction");
function $g(r) {
  let e = r.startState, t = !0;
  for (let n of e.facet(qd)) {
    let s = n(r);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : Rg(t, s));
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
  let i = e.facet(Dd);
  for (let n = i.length - 1; n >= 0; n--) {
    let s = i[n](r);
    s instanceof le ? r = s : Array.isArray(s) && s.length == 1 && s[0] instanceof le ? r = s[0] : r = Gd(e, Ri(s), !1);
  }
  return r;
}
c($g, "filterTransaction");
function vg(r) {
  let e = r.startState, t = e.facet(Bd), i = r;
  for (let n = t.length - 1; n >= 0; n--) {
    let s = t[n](r);
    s && Object.keys(s).length && (i = Nd(i, al(e, s, r.changes.newLength), !0));
  }
  return i == r ? r : le.create(e, r.changes, r.selection, i.effects, i.annotations, i.scrollIntoView);
}
c(vg, "extendTransaction");
const Tg = [];
function Ri(r) {
  return r == null ? Tg : Array.isArray(r) ? r : [r];
}
c(Ri, "asArray");
var ft = /* @__PURE__ */ function(r) {
  return r[r.Word = 0] = "Word", r[r.Space = 1] = "Space", r[r.Other = 2] = "Other", r;
}(ft || (ft = {}));
const Ag = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let hl;
try {
  hl = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Zg(r) {
  if (hl)
    return hl.test(r);
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (/\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Ag.test(t)))
      return !0;
  }
  return !1;
}
c(Zg, "hasWordChar");
function Lg(r) {
  return (e) => {
    if (!/\S/.test(e))
      return ft.Space;
    if (Zg(e))
      return ft.Word;
    for (let t = 0; t < r.length; t++)
      if (e.indexOf(r[t]) > -1)
        return ft.Word;
    return ft.Other;
  };
}
c(Lg, "makeCategorizer");
const Pe = class Pe {
  constructor(e, t, i, n, s, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = n, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      mr(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return mr(this, i), ts(this, i);
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
    return Gd(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: n } = t;
    for (let l of e.effects)
      l.is(Br.reconfigure) ? (t && (n = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => n.set(h, a)), t = null), n.set(l.value.compartment, l.value.extension)) : l.is(I.reconfigure) ? (t = null, i = l.value) : l.is(I.appendConfig) && (t = null, i = Ri(i).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = es.resolve(i, n, this), s = new Pe(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = e.startState.facet(sl) ? e.newSelection : e.newSelection.asSingle();
    new Pe(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
      changes: { from: t.from, to: t.to, insert: e },
      range: R.cursor(t.from + e.length)
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
    let t = this.selection, i = e(t.ranges[0]), n = this.changes(i.changes), s = [i.range], o = Ri(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), f = h.map(n);
      for (let d = 0; d < l; d++)
        s[d] = s[d].map(f);
      let u = n.mapDesc(h, !0);
      s.push(a.range.map(u)), n = n.compose(f), o = I.mapEffects(o, f).concat(I.mapEffects(Ri(a.effects), u));
    }
    return {
      changes: n,
      selection: R.create(s, t.mainIndex),
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
    return X.of(e.split(this.facet(Pe.lineSeparator) || tl));
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
    return t == null ? e.default : (mr(this, t), ts(this, t));
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
        n instanceof Ye && this.config.address[n.id] != null && (t[i] = n.spec.toJSON(this.field(e[i]), this));
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
      selection: R.fromJSON(e.selection),
      extensions: t.extensions ? n.concat([t.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let t = es.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof X ? e.doc : X.of((e.doc || "").split(t.staticFacet(Pe.lineSeparator) || tl)), n = e.selection ? e.selection instanceof R ? e.selection : R.single(e.selection.anchor, e.selection.head) : R.single(0);
    return Yd(n, i.length), t.staticFacet(sl) || (n = n.asSingle()), new Pe(t, i, n, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
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
    return this.facet(zd);
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
    for (let s of this.facet(Id))
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
    return Lg(this.languageDataAt("wordChars", e).join(""));
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
      let a = Oe(t, o, !1);
      if (s(t.slice(a, o)) != ft.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = Oe(t, l);
      if (s(t.slice(l, a)) != ft.Word)
        break;
      l = a;
    }
    return o == l ? null : R.range(o + i, l + i);
  }
};
c(Pe, "EditorState");
let K = Pe;
K.allowMultipleSelections = sl;
K.tabSize = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.length ? r[0] : 4, "combine")
});
K.lineSeparator = jd;
K.readOnly = zd;
K.phrases = /* @__PURE__ */ M.define({
  compare(r, e) {
    let t = Object.keys(r), i = Object.keys(e);
    return t.length == i.length && t.every((n) => r[n] == e[n]);
  }
});
K.languageData = Id;
K.changeFilter = qd;
K.transactionFilter = Dd;
K.transactionExtender = Bd;
Br.reconfigure = /* @__PURE__ */ I.define();
function Hd(r, e, t = {}) {
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
c(Hd, "combineConfig");
const qh = class qh {
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
    return fl.create(e, t, this);
  }
};
c(qh, "RangeValue");
let ut = qh;
ut.prototype.startSide = ut.prototype.endSide = 0;
ut.prototype.point = !1;
ut.prototype.mapMode = ue.TrackDel;
var ei;
let fl = (ei = class {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new ei(e, t, i);
  }
}, c(ei, "Range"), ei);
function cl(r, e) {
  return r.from - e.from || r.value.startSide - e.value.startSide;
}
c(cl, "cmpRange");
const qs = class qs {
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
      let h = this.value[a], f = this.from[a] + e, u = this.to[a] + e, d, O;
      if (f == u) {
        let p = t.mapPos(f, h.startSide, h.mapMode);
        if (p == null || (d = O = p, h.startSide != h.endSide && (O = t.mapPos(f, h.endSide), O < d)))
          continue;
      } else if (d = t.mapPos(f, h.startSide), O = t.mapPos(u, h.endSide), d > O || d == O && h.startSide > 0 && h.endSide <= 0)
        continue;
      (O - d || h.endSide - h.startSide) < 0 || (o < 0 && (o = d), h.point && (l = Math.max(l, O - d)), i.push(h), n.push(d - o), s.push(O - o));
    }
    return { mapped: i.length ? new qs(n, s, i, l) : null, pos: o };
  }
};
c(qs, "Chunk");
let ul = qs;
const We = class We {
  constructor(e, t, i, n) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(e, t, i, n) {
    return new We(e, t, i, n);
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
    if (i && (t = t.slice().sort(cl)), this.isEmpty)
      return t.length ? We.of(t) : this;
    let l = new is(this, null, -1).goto(0), a = 0, h = [], f = new Ui();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let u = t[a++];
        f.addInner(u.from, u.to, u.value) || h.push(u);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && f.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || s < l.from || o(l.from, l.to, l.value)) && (f.addInner(l.from, l.to, l.value) || h.push(fl.create(l.from, l.to, l.value))), l.next());
    return f.finishInner(this.nextLayer.isEmpty && !h.length ? We.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: s }));
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
    return t.length == 0 ? s : new We(i, t, s || We.empty, n);
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
    let o = e.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), l = t.filter((u) => u.maxPoint > 0 || !u.isEmpty && u.maxPoint >= s), a = Mc(o, l, i), h = new Yt(o, a, s), f = new Yt(l, a, s);
    i.iterGaps((u, d, O) => _c(h, u, f, d, O, n)), i.empty && i.length == 0 && _c(h, 0, f, 0, 0, n);
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
    let l = Mc(s, o), a = new Yt(s, l, 0).goto(i), h = new Yt(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !dl(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
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
    let o = new Yt(e, null, s).goto(t), l = t, a = o.openStart;
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
    let i = new Ui();
    for (let n of e instanceof fl ? [e] : t ? Mg(e) : e)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return We.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let n = e[i]; n != We.empty; n = n.nextLayer)
        t = new We(n.chunkPos, n.chunk, t, Math.max(n.maxPoint, t.maxPoint));
    return t;
  }
};
c(We, "RangeSet");
let re = We;
re.empty = /* @__PURE__ */ new re([], [], null, -1);
function Mg(r) {
  if (r.length > 1)
    for (let e = r[0], t = 1; t < r.length; t++) {
      let i = r[t];
      if (cl(e, i) > 0)
        return r.slice().sort(cl);
      e = i;
    }
  return r;
}
c(Mg, "lazySort");
re.empty.nextLayer = re.empty;
const Ds = class Ds {
  finishChunk(e) {
    this.chunks.push(new ul(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Ds())).add(e, t, i);
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
c(Ds, "RangeSetBuilder");
let Ui = Ds;
function Mc(r, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let s of r)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = i.get(s.chunk[o]);
      l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t != null && t.touchesRange(l, l + s.chunk[o].length)) && n.add(s.chunk[o]);
    }
  return n;
}
c(Mc, "findSharedChunks");
const Dh = class Dh {
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
c(Dh, "LayerCursor");
let is = Dh;
const Bs = class Bs {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let n = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new is(o, t, i, s));
    return n.length == 1 ? n[0] : new Bs(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ko(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      ko(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), ko(this.heap, 0);
    }
  }
};
c(Bs, "HeapCursor");
let Nr = Bs;
function ko(r, e) {
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
c(ko, "heapBubble");
const Bh = class Bh {
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
    Pn(this.active, e), Pn(this.activeTo, e), Pn(this.activeRank, e), this.minActive = Cc(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: n, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || n - this.activeTo[t]) > 0; )
      t++;
    kn(this.active, t, i), kn(this.activeTo, t, n), kn(this.activeRank, t, s), e && kn(e, t, this.cursor.from), this.minActive = Cc(this.active, this.activeTo);
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
        this.removeActive(n), i && Pn(i, n);
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
c(Bh, "SpanCursor");
let Yt = Bh;
function _c(r, e, t, i, n, s) {
  r.goto(e), t.goto(i);
  let o = i + n, l = i, a = i - e;
  for (; ; ) {
    let h = r.to + a - t.to, f = h || r.endSide - t.endSide, u = f < 0 ? r.to + a : t.to, d = Math.min(u, o);
    if (r.point || t.point ? r.point && t.point && (r.point == t.point || r.point.eq(t.point)) && dl(r.activeForPoint(r.to), t.activeForPoint(t.to)) || s.comparePoint(l, d, r.point, t.point) : d > l && !dl(r.active, t.active) && s.compareRange(l, d, r.active, t.active), u > o)
      break;
    (h || r.openEnd != t.openEnd) && s.boundChange && s.boundChange(u), l = u, f <= 0 && r.next(), f >= 0 && t.next();
  }
}
c(_c, "compare");
function dl(r, e) {
  if (r.length != e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] != e[t] && !r[t].eq(e[t]))
      return !1;
  return !0;
}
c(dl, "sameValues");
function Pn(r, e) {
  for (let t = e, i = r.length - 1; t < i; t++)
    r[t] = r[t + 1];
  r.pop();
}
c(Pn, "remove");
function kn(r, e, t) {
  for (let i = r.length - 1; i >= e; i--)
    r[i + 1] = r[i];
  r[e] = t;
}
c(kn, "insert");
function Cc(r, e) {
  let t = -1, i = 1e9;
  for (let n = 0; n < e.length; n++)
    (e[n] - i || r[n].endSide - r[t].endSide) < 0 && (t = n, i = e[n]);
  return t;
}
c(Cc, "findMinIndex");
function dt(r, e, t = r.length) {
  let i = 0;
  for (let n = 0; n < t && n < r.length; )
    r.charCodeAt(n) == 9 ? (i += e - i % e, n++) : (i++, n = Oe(r, n));
  return i;
}
c(dt, "countColumn");
function _g(r, e, t, i) {
  for (let n = 0, s = 0; ; ) {
    if (s >= e)
      return n;
    if (n == r.length)
      break;
    s += r.charCodeAt(n) == 9 ? t - s % t : 1, n = Oe(r, n);
  }
  return r.length;
}
c(_g, "findColumn");
const Ol = "ͼ", Ec = typeof Symbol > "u" ? "__" + Ol : Symbol.for(Ol), pl = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Vc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, zh = class zh {
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
      let f = [], u = /^@(\w+)\b/.exec(o[0]), d = u && u[1] == "keyframes";
      if (u && l == null) return a.push(o[0] + ";");
      for (let O in l) {
        let p = l[O];
        if (/&/.test(O))
          s(
            O.split(/,\s*/).map((m) => o.map((y) => m.replace(/&/, y))).reduce((m, y) => m.concat(y)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!u) throw new RangeError("The value of a property (" + O + ") should be a primitive value.");
          s(n(O), p, f, d);
        } else p != null && f.push(O.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (f.length || d) && a.push((i && !u && !h ? o.map(i) : o).join(", ") + " {" + f.join(" ") + "}");
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
    let e = Vc[Ec] || 1;
    return Vc[Ec] = e + 1, Ol + e.toString(36);
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
    let n = e[pl], s = i && i.nonce;
    n ? s && n.setNonce(s) : n = new ml(e, s), n.mount(Array.isArray(t) ? t : [t], e);
  }
};
c(zh, "StyleModule");
let it = zh, Uc = /* @__PURE__ */ new Map();
const Nh = class Nh {
  constructor(e, t) {
    let i = e.ownerDocument || e, n = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && n.CSSStyleSheet) {
      let s = Uc.get(i);
      if (s) return e[pl] = s;
      this.sheet = new n.CSSStyleSheet(), Uc.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[pl] = this;
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
c(Nh, "StyleSet");
let ml = Nh;
var Rt = {
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
}, Cg = typeof navigator < "u" && /Mac/.test(navigator.platform), Eg = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var oe = 0; oe < 10; oe++) Rt[48 + oe] = Rt[96 + oe] = String(oe);
for (var oe = 1; oe <= 24; oe++) Rt[oe + 111] = "F" + oe;
for (var oe = 65; oe <= 90; oe++)
  Rt[oe] = String.fromCharCode(oe + 32), Gr[oe] = String.fromCharCode(oe);
for (var Ro in Rt) Gr.hasOwnProperty(Ro) || (Gr[Ro] = Rt[Ro]);
function Vg(r) {
  var e = Cg && r.metaKey && r.shiftKey && !r.ctrlKey && !r.altKey || Eg && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", t = !e && r.key || (r.shiftKey ? Gr : Rt)[r.keyCode] || r.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
c(Vg, "keyName");
function Hr(r) {
  let e;
  return r.nodeType == 11 ? e = r.getSelection ? r : r.ownerDocument : e = r, e.getSelection();
}
c(Hr, "getSelection");
function gl(r, e) {
  return e ? r == e || r.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
c(gl, "contains");
function qn(r, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return gl(r, e.anchorNode);
  } catch {
    return !1;
  }
}
c(qn, "hasSelection");
function Wi(r) {
  return r.nodeType == 3 ? ri(r, 0, r.nodeValue.length).getClientRects() : r.nodeType == 1 ? r.getClientRects() : [];
}
c(Wi, "clientRectsFor");
function gr(r, e, t, i) {
  return t ? Wc(r, e, t, i, -1) || Wc(r, e, t, i, 1) : !1;
}
c(gr, "isEquivalentPosition");
function ii(r) {
  for (var e = 0; ; e++)
    if (r = r.previousSibling, !r)
      return e;
}
c(ii, "domIndex");
function rs(r) {
  return r.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(r.nodeName);
}
c(rs, "isBlockElement");
function Wc(r, e, t, i, n) {
  for (; ; ) {
    if (r == t && e == i)
      return !0;
    if (e == (n < 0 ? 0 : rt(r))) {
      if (r.nodeName == "DIV")
        return !1;
      let s = r.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = ii(r) + (n < 0 ? 0 : 1), r = s;
    } else if (r.nodeType == 1) {
      if (r = r.childNodes[e + (n < 0 ? -1 : 0)], r.nodeType == 1 && r.contentEditable == "false")
        return !1;
      e = n < 0 ? rt(r) : 0;
    } else
      return !1;
  }
}
c(Wc, "scanFor");
function rt(r) {
  return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length;
}
c(rt, "maxOffset");
function pn(r, e) {
  let t = e ? r.left : r.right;
  return { left: t, right: t, top: r.top, bottom: r.bottom };
}
c(pn, "flattenRect");
function Ug(r) {
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
c(Ug, "windowRect");
function Fd(r, e) {
  let t = e.width / r.offsetWidth, i = e.height / r.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - r.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - r.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
c(Fd, "getScale");
function Wg(r, e, t, i, n, s, o, l) {
  let a = r.ownerDocument, h = a.defaultView || window;
  for (let f = r, u = !1; f && !u; )
    if (f.nodeType == 1) {
      let d, O = f == a.body, p = 1, m = 1;
      if (O)
        d = Ug(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(f).position) && (u = !0), f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) {
          f = f.assignedSlot || f.parentNode;
          continue;
        }
        let Q = f.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = Fd(f, Q)), d = {
          left: Q.left,
          right: Q.left + f.clientWidth * p,
          top: Q.top,
          bottom: Q.top + f.clientHeight * m
        };
      }
      let y = 0, b = 0;
      if (n == "nearest")
        e.top < d.top ? (b = e.top - (d.top + o), t > 0 && e.bottom > d.bottom + b && (b = e.bottom - d.bottom + o)) : e.bottom > d.bottom && (b = e.bottom - d.bottom + o, t < 0 && e.top - b < d.top && (b = e.top - (d.top + o)));
      else {
        let Q = e.bottom - e.top, x = d.bottom - d.top;
        b = (n == "center" && Q <= x ? e.top + Q / 2 - x / 2 : n == "start" || n == "center" && t < 0 ? e.top - o : e.bottom - x + o) - d.top;
      }
      if (i == "nearest" ? e.left < d.left ? (y = e.left - (d.left + s), t > 0 && e.right > d.right + y && (y = e.right - d.right + s)) : e.right > d.right && (y = e.right - d.right + s, t < 0 && e.left < d.left + y && (y = e.left - (d.left + s))) : y = (i == "center" ? e.left + (e.right - e.left) / 2 - (d.right - d.left) / 2 : i == "start" == l ? e.left - s : e.right - (d.right - d.left) + s) - d.left, y || b)
        if (O)
          h.scrollBy(y, b);
        else {
          let Q = 0, x = 0;
          if (b) {
            let $ = f.scrollTop;
            f.scrollTop += b / m, x = (f.scrollTop - $) * m;
          }
          if (y) {
            let $ = f.scrollLeft;
            f.scrollLeft += y / p, Q = (f.scrollLeft - $) * p;
          }
          e = {
            left: e.left - Q,
            top: e.top - x,
            right: e.right - Q,
            bottom: e.bottom - x
          }, Q && Math.abs(Q - y) < 1 && (i = "nearest"), x && Math.abs(x - b) < 1 && (n = "nearest");
        }
      if (O)
        break;
      (e.top < d.top || e.bottom > d.bottom || e.left < d.left || e.right > d.right) && (e = {
        left: Math.max(e.left, d.left),
        right: Math.min(e.right, d.right),
        top: Math.max(e.top, d.top),
        bottom: Math.min(e.bottom, d.bottom)
      }), f = f.assignedSlot || f.parentNode;
    } else if (f.nodeType == 11)
      f = f.host;
    else
      break;
}
c(Wg, "scrollRectIntoView");
function Xg(r) {
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
c(Xg, "scrollableParents");
const Gh = class Gh {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? rt(t) : 0), i, Math.min(e.focusOffset, i ? rt(i) : 0));
  }
  set(e, t, i, n) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = n;
  }
};
c(Gh, "DOMSelectionState");
let yl = Gh, ci = null;
function Kd(r) {
  if (r.setActive)
    return r.setActive();
  if (ci)
    return r.focus(ci);
  let e = [];
  for (let t = r; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (r.focus(ci == null ? {
    get preventScroll() {
      return ci = { preventScroll: !0 }, !0;
    }
  } : void 0), !ci) {
    ci = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], n = e[t++], s = e[t++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
c(Kd, "focusPreventScroll");
let Xc;
function ri(r, e, t = e) {
  let i = Xc || (Xc = document.createRange());
  return i.setEnd(r, t), i.setStart(r, e), i;
}
c(ri, "textRange");
function $i(r, e, t, i) {
  let n = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let s = new KeyboardEvent("keydown", n);
  s.synthetic = !0, r.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, r.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
c($i, "dispatchKey");
function Yg(r) {
  for (; r; ) {
    if (r && (r.nodeType == 9 || r.nodeType == 11 && r.host))
      return r;
    r = r.assignedSlot || r.parentNode;
  }
  return null;
}
c(Yg, "getRoot");
function Jd(r) {
  for (; r.attributes.length; )
    r.removeAttributeNode(r.attributes[0]);
}
c(Jd, "clearAttributes");
function Ig(r, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, rt(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return !1;
      let n = t.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (t = n, i = rt(t));
    } else {
      if (t == r)
        return !0;
      i = ii(t), t = t.parentNode;
    }
}
c(Ig, "atElementStart");
function eO(r) {
  return r.scrollTop > Math.max(1, r.scrollHeight - r.clientHeight - 4);
}
c(eO, "isScrolledToBottom");
function tO(r, e) {
  for (let t = r, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = rt(t);
    } else if (t.parentNode && !rs(t))
      i = ii(t), t = t.parentNode;
    else
      return null;
  }
}
c(tO, "textNodeBefore");
function iO(r, e) {
  for (let t = r, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !rs(t))
      i = ii(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
c(iO, "textNodeAfter");
const $r = class $r {
  constructor(e, t, i = !0) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new $r(e.parentNode, ii(e), t);
  }
  static after(e, t) {
    return new $r(e.parentNode, ii(e) + 1, t);
  }
};
c($r, "DOMPos");
let de = $r;
const eh = [], vr = class vr {
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
            s = Yc(s);
        else
          i.insertBefore(o.dom, s);
        n = o.dom;
      }
      for (s = n ? n.nextSibling : i.firstChild, s && t && t.node == i && (t.written = !0); s; )
        s = Yc(s);
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
      let n = rt(e) == 0 ? 0 : t == 0 ? -1 : 1;
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
      let u = this.children[a], d = h + u.length;
      if (h < e && d > t)
        return u.domBoundsAround(e, t, h);
      if (d >= e && n == -1 && (n = a, s = h), h > t && u.dom.parentNode == this.dom) {
        o = a, l = f;
        break;
      }
      f = d, h = d + u.breakAfter;
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
  replaceChildren(e, t, i = eh) {
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
    return new ns(this.children, e, this.children.length);
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
let z = vr;
z.prototype.breakAfter = 0;
function Yc(r) {
  let e = r.nextSibling;
  return r.parentNode.removeChild(r), e;
}
c(Yc, "rm$1");
const Hh = class Hh {
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
c(Hh, "ChildCursor");
let ns = Hh;
function rO(r, e, t, i, n, s, o, l, a) {
  let { children: h } = r, f = h.length ? h[e] : null, u = s.length ? s[s.length - 1] : null, d = u ? u.breakAfter : o;
  if (!(e == i && f && !o && !d && s.length < 2 && f.merge(t, n, s.length ? u : null, t == 0, l, a))) {
    if (i < h.length) {
      let O = h[i];
      O && (n < O.length || O.breakAfter && (u != null && u.breakAfter)) ? (e == i && (O = O.split(n), n = 0), !d && u && O.merge(0, n, u, !0, 0, a) ? s[s.length - 1] = O : ((n || O.children.length && !O.children[0].length) && O.merge(0, n, null, !1, 0, a), s.push(O))) : O != null && O.breakAfter && (u ? u.breakAfter = 1 : o = 1), i++;
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
c(rO, "replaceRange");
function nO(r, e, t, i, n, s) {
  let o = r.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: h, off: f } = o.findPos(e, -1), u = e - t;
  for (let d of i)
    u += d.length;
  r.length += u, rO(r, h, f, l, a, i, 0, n, s);
}
c(nO, "mergeChildrenInto");
let ye = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, bl = typeof document < "u" ? document : { documentElement: { style: {} } };
const Sl = /* @__PURE__ */ /Edge\/(\d+)/.exec(ye.userAgent), sO = /* @__PURE__ */ /MSIE \d/.test(ye.userAgent), Ql = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ye.userAgent), go = !!(sO || Ql || Sl), Ic = !go && /* @__PURE__ */ /gecko\/(\d+)/i.test(ye.userAgent), $o = !go && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ye.userAgent), jg = "webkitFontSmoothing" in bl.documentElement.style, oO = !go && /* @__PURE__ */ /Apple Computer/.test(ye.vendor), jc = oO && (/* @__PURE__ */ /Mobile\/\w+/.test(ye.userAgent) || ye.maxTouchPoints > 2);
var T = {
  mac: jc || /* @__PURE__ */ /Mac/.test(ye.platform),
  windows: /* @__PURE__ */ /Win/.test(ye.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ye.platform),
  ie: go,
  ie_version: sO ? bl.documentMode || 6 : Ql ? +Ql[1] : Sl ? +Sl[1] : 0,
  gecko: Ic,
  gecko_version: Ic ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ye.userAgent) || [0, 0])[1] : 0,
  chrome: !!$o,
  chrome_version: $o ? +$o[1] : 0,
  ios: jc,
  android: /* @__PURE__ */ /Android\b/.test(ye.userAgent),
  safari: oO,
  webkit_version: jg ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ye.userAgent) || [0, 0])[1] : 0,
  tabSize: bl.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const qg = 256, Tr = class Tr extends z {
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
    return this.flags & 8 || i && (!(i instanceof Tr) || this.length - (t - e) + i.length > qg || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), !0);
  }
  split(e) {
    let t = new Tr(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new de(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Dg(this.dom, e, t);
  }
};
c(Tr, "TextView");
let nt = Tr;
const Ar = class Ar extends z {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let n of t)
      n.setParent(this);
  }
  setAttrs(e) {
    if (Jd(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
    return i && (!(i instanceof Ar && i.mark.eq(this.mark)) || e && s <= 0 || t < this.length && o <= 0) ? !1 : (nO(this, e, t, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
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
    return lO(this, e);
  }
  coordsAt(e, t) {
    return hO(this, e, t);
  }
};
c(Ar, "MarkView");
let $t = Ar;
function Dg(r, e, t) {
  let i = r.nodeValue.length;
  e > i && (e = i);
  let n = e, s = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? T.chrome || T.gecko || (e ? (n--, o = 1) : s < i && (s++, o = -1)) : t < 0 ? n-- : s < i && s++;
  let l = ri(r, n, s).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return T.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? pn(a, o < 0) : a || null;
}
c(Dg, "textCoords");
const jt = class jt extends z {
  static create(e, t, i) {
    return new jt(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = jt.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, n, s, o) {
    return i && (!(i instanceof jt) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  become(e) {
    return e instanceof jt && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return X.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, n = this.posAtStart;
    return i ? i.slice(n, n + this.length) : X.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? de.before(this.dom) : de.after(this.dom, e == this.length);
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
    return pn(s, !o);
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
c(jt, "WidgetView");
let ss = jt;
const Zr = class Zr extends z {
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
    return e instanceof Zr && e.side == this.side;
  }
  split() {
    return new Zr(this.side);
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
    return this.side > 0 ? de.before(this.dom) : de.after(this.dom);
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
    return X.empty;
  }
  get isHidden() {
    return !0;
  }
};
c(Zr, "WidgetBufferView");
let Fr = Zr;
nt.prototype.children = ss.prototype.children = Fr.prototype.children = eh;
function lO(r, e) {
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
  return new de(t, 0);
}
c(lO, "inlineDOMAtPos");
function aO(r, e, t) {
  let i, { children: n } = r;
  t > 0 && e instanceof $t && n.length && (i = n[n.length - 1]) instanceof $t && i.mark.eq(e.mark) ? aO(i, e.children[0], t - 1) : (n.push(e), e.setParent(r)), r.length += e.length;
}
c(aO, "joinInlineInto");
function hO(r, e, t) {
  let i = null, n = -1, s = null, o = -1;
  function l(h, f) {
    for (let u = 0, d = 0; u < h.children.length && d <= f; u++) {
      let O = h.children[u], p = d + O.length;
      p >= f && (O.children.length ? l(O, f - d) : (!s || s.isHidden && (t > 0 || zg(s, O))) && (p > f || d == p && O.getSide() > 0) ? (s = O, o = f - d) : (d < f || d == p && O.getSide() < 0 && !O.isHidden) && (i = O, n = f - d)), d = p;
    }
  }
  c(l, "scan"), l(r, e);
  let a = (t < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? n : o), t) : Bg(r);
}
c(hO, "coordsInChildren");
function Bg(r) {
  let e = r.dom.lastChild;
  if (!e)
    return r.dom.getBoundingClientRect();
  let t = Wi(e);
  return t[t.length - 1] || null;
}
c(Bg, "fallbackRect");
function zg(r, e) {
  let t = r.coordsAt(0, 1), i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
c(zg, "onSameLine");
function wl(r, e) {
  for (let t in r)
    t == "class" && e.class ? e.class += " " + r.class : t == "style" && e.style ? e.style += ";" + r.style : e[t] = r[t];
  return e;
}
c(wl, "combineAttrs");
const qc = /* @__PURE__ */ Object.create(null);
function os(r, e, t) {
  if (r == e)
    return !0;
  r || (r = qc), e || (e = qc);
  let i = Object.keys(r), n = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != n.length - (t && n.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let s of i)
    if (s != t && (n.indexOf(s) == -1 || r[s] !== e[s]))
      return !1;
  return !0;
}
c(os, "attrsEq");
function xl(r, e, t) {
  let i = !1;
  if (e)
    for (let n in e)
      t && n in t || (i = !0, n == "style" ? r.style.cssText = "" : r.removeAttribute(n));
  if (t)
    for (let n in t)
      e && e[n] == t[n] || (i = !0, n == "style" ? r.style.cssText = t[n] : r.setAttribute(n, t[n]));
  return i;
}
c(xl, "updateAttrs");
function Ng(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < r.attributes.length; t++) {
    let i = r.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
c(Ng, "getAttrs$1");
const Fh = class Fh {
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
c(Fh, "WidgetType");
let vt = Fh;
var et = /* @__PURE__ */ function(r) {
  return r[r.Text = 0] = "Text", r[r.WidgetBefore = 1] = "WidgetBefore", r[r.WidgetAfter = 2] = "WidgetAfter", r[r.WidgetRange = 3] = "WidgetRange", r;
}(et || (et = {}));
const Kh = class Kh extends ut {
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
    return new Kr(e);
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
      let { start: s, end: o } = fO(e, t);
      i = (s ? t ? -3e8 : -1 : 5e8) - 1, n = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Tt(e, i, n, t, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Jr(e);
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
c(Kh, "Decoration");
let j = Kh;
j.none = re.empty;
const zs = class zs extends j {
  constructor(e) {
    let { start: t, end: i } = fO(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof zs && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && os(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
};
c(zs, "MarkDecoration");
let Kr = zs;
Kr.prototype.point = !1;
const Ns = class Ns extends j {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Ns && this.spec.class == e.spec.class && os(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
};
c(Ns, "LineDecoration");
let Jr = Ns;
Jr.prototype.mapMode = ue.TrackBefore;
Jr.prototype.point = !0;
const Gs = class Gs extends j {
  constructor(e, t, i, n, s, o) {
    super(t, i, s, e), this.block = n, this.isReplace = o, this.mapMode = n ? t <= 0 ? ue.TrackBefore : ue.TrackAfter : ue.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? et.WidgetRange : this.startSide <= 0 ? et.WidgetBefore : et.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Gs && Gg(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
};
c(Gs, "PointDecoration");
let Tt = Gs;
Tt.prototype.point = !0;
function fO(r, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = r;
  return t == null && (t = r.inclusive), i == null && (i = r.inclusive), { start: t ?? e, end: i ?? e };
}
c(fO, "getInclusive");
function Gg(r, e) {
  return r == e || !!(r && e && r.compare(e));
}
c(Gg, "widgetsEq");
function Dn(r, e, t, i = 0) {
  let n = t.length - 1;
  n >= 0 && t[n] + i >= r ? t[n] = Math.max(t[n], e) : t.push(r, e);
}
c(Dn, "addRange");
const qt = class qt extends z {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, t, i, n, s, o) {
    if (i) {
      if (!(i instanceof qt))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return n && this.setDeco(i ? i.attrs : null), nO(this, e, t, i ? i.children.slice() : [], s, o), !0;
  }
  split(e) {
    let t = new qt();
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
    os(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    aO(this, e, t);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = wl(t, this.attrs || {})), i && (this.attrs = wl({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return lO(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (Jd(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (xl(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let n = this.dom.lastChild;
    for (; n && z.get(n) instanceof $t; )
      n = n.lastChild;
    if (!n || !this.length || n.nodeName != "BR" && ((i = z.get(n)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!T.ios || !this.children.some((s) => s instanceof nt))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof nt) || /[^ -~]/.test(i.text))
        return null;
      let n = Wi(i.dom);
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
    let i = hO(this, e, t);
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
    return e instanceof qt && this.children.length == 0 && e.children.length == 0 && os(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, n = 0; i < e.children.length; i++) {
      let s = e.children[i], o = n + s.length;
      if (o >= t) {
        if (s instanceof qt)
          return s;
        if (o > t)
          break;
      }
      n = o + s.breakAfter;
    }
    return null;
  }
};
c(qt, "LineView");
let se = qt;
const bi = class bi extends z {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, n, s, o) {
    return i && (!(i instanceof bi) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - t), !0);
  }
  domAtPos(e) {
    return e == 0 ? de.before(this.dom) : de.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new bi(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return eh;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : X.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof bi && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
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
    return i || (this.widget instanceof en ? null : pn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
};
c(bi, "BlockWidgetView");
let Ft = bi;
const Jh = class Jh extends vt {
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
c(Jh, "BlockGapWidget");
let en = Jh;
const Hs = class Hs {
  constructor(e, t, i, n) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Ft && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new se()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Rn(new Fr(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Ft) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let n = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Rn(new nt(this.text.slice(this.textOff, this.textOff + n)), t), i), this.atCursorPos = !0, this.textOff += n, e -= n, i = 0;
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
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ft(i.widget || At.block, l, i));
      else {
        let a = ss.create(i.widget || At.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && s <= n.length && (e < t || i.startSide > 0), f = !a.isEditable && (e < t || s > n.length || i.startSide <= 0), u = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(n), h && (u.append(Rn(new Fr(1), n), s), s = n.length + Math.max(0, s - n.length)), u.append(Rn(a, n), s), this.atCursorPos = f, this.pendingBuffer = f ? e < t || s > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, i, n, s) {
    let o = new Hs(e, t, i, s);
    return o.openEnd = re.spans(n, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
};
c(Hs, "ContentBuilder");
let yr = Hs;
function Rn(r, e) {
  for (let t of e)
    r = new $t(t, [r], r.length);
  return r;
}
c(Rn, "wrapMarks");
const ef = class ef extends vt {
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
c(ef, "NullWidget");
let At = ef;
At.inline = /* @__PURE__ */ new At("span");
At.block = /* @__PURE__ */ new At("div");
var ee = /* @__PURE__ */ function(r) {
  return r[r.LTR = 0] = "LTR", r[r.RTL = 1] = "RTL", r;
}(ee || (ee = {}));
const ni = ee.LTR, th = ee.RTL;
function cO(r) {
  let e = [];
  for (let t = 0; t < r.length; t++)
    e.push(1 << +r[t]);
  return e;
}
c(cO, "dec");
const Hg = /* @__PURE__ */ cO("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Fg = /* @__PURE__ */ cO("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Pl = /* @__PURE__ */ Object.create(null), ze = [];
for (let r of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ r.charCodeAt(0), t = /* @__PURE__ */ r.charCodeAt(1);
  Pl[e] = t, Pl[t] = -e;
}
function uO(r) {
  return r <= 247 ? Hg[r] : 1424 <= r && r <= 1524 ? 2 : 1536 <= r && r <= 1785 ? Fg[r - 1536] : 1774 <= r && r <= 2220 ? 4 : 8192 <= r && r <= 8204 ? 256 : 64336 <= r && r <= 65023 ? 4 : 1;
}
c(uO, "charType");
const Kg = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, tf = class tf {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? th : ni;
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
c(tf, "BidiSpan");
let Je = tf;
function dO(r, e) {
  if (r.length != e.length)
    return !1;
  for (let t = 0; t < r.length; t++) {
    let i = r[t], n = e[t];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !dO(i.inner, n.inner))
      return !1;
  }
  return !0;
}
c(dO, "isolatesEq");
const q = [];
function Jg(r, e, t, i, n) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e, l = s < i.length ? i[s].from : t, a = s ? 256 : n;
    for (let h = o, f = a, u = a; h < l; h++) {
      let d = uO(r.charCodeAt(h));
      d == 512 ? d = f : d == 8 && u == 4 && (d = 16), q[h] = d == 4 ? 2 : d, d & 7 && (u = d), f = d;
    }
    for (let h = o, f = a, u = a; h < l; h++) {
      let d = q[h];
      if (d == 128)
        h < l - 1 && f == q[h + 1] && f & 24 ? d = q[h] = f : q[h] = 256;
      else if (d == 64) {
        let O = h + 1;
        for (; O < l && q[O] == 64; )
          O++;
        let p = h && f == 8 || O < t && q[O] == 8 ? u == 1 ? 1 : 8 : 256;
        for (let m = h; m < O; m++)
          q[m] = p;
        h = O - 1;
      } else d == 8 && u == 1 && (q[h] = 1);
      f = d, d & 7 && (u = d);
    }
  }
}
c(Jg, "computeCharTypes");
function e0(r, e, t, i, n) {
  let s = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e, f = o < i.length ? i[o].from : t;
    for (let u = h, d, O, p; u < f; u++)
      if (O = Pl[d = r.charCodeAt(u)])
        if (O < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (ze[m + 1] == -O) {
              let y = ze[m + 2], b = y & 2 ? n : y & 4 ? y & 1 ? s : n : 0;
              b && (q[u] = q[ze[m]] = b), l = m;
              break;
            }
        } else {
          if (ze.length == 189)
            break;
          ze[l++] = u, ze[l++] = d, ze[l++] = a;
        }
      else if ((p = q[u]) == 2 || p == 1) {
        let m = p == n;
        a = m ? 0 : 1;
        for (let y = l - 3; y >= 0; y -= 3) {
          let b = ze[y + 2];
          if (b & 2)
            break;
          if (m)
            ze[y + 2] |= 2;
          else {
            if (b & 4)
              break;
            ze[y + 2] |= 4;
          }
        }
      }
  }
}
c(e0, "processBracketPairs");
function t0(r, e, t, i) {
  for (let n = 0, s = i; n <= t.length; n++) {
    let o = n ? t[n - 1].to : r, l = n < t.length ? t[n].from : e;
    for (let a = o; a < l; ) {
      let h = q[a];
      if (h == 256) {
        let f = a + 1;
        for (; ; )
          if (f == l) {
            if (n == t.length)
              break;
            f = t[n++].to, l = n < t.length ? t[n].from : e;
          } else if (q[f] == 256)
            f++;
          else
            break;
        let u = s == 1, d = (f < e ? q[f] : i) == 1, O = u == d ? u ? 1 : 2 : i;
        for (let p = f, m = n, y = m ? t[m - 1].to : r; p > a; )
          p == y && (p = t[--m].from, y = m ? t[m - 1].to : r), q[--p] = O;
        a = f;
      } else
        s = h, a++;
    }
  }
}
c(t0, "processNeutrals");
function kl(r, e, t, i, n, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = e, h = 0; a < t; ) {
      let f = !0, u = !1;
      if (h == s.length || a < s[h].from) {
        let m = q[a];
        m != l && (f = !1, u = m == 16);
      }
      let d = !f && l == 1 ? [] : null, O = f ? i : i + 1, p = a;
      e: for (; ; )
        if (h < s.length && p == s[h].from) {
          if (u)
            break e;
          let m = s[h];
          if (!f)
            for (let y = m.to, b = h + 1; ; ) {
              if (y == t)
                break e;
              if (b < s.length && s[b].from == y)
                y = s[b++].to;
              else {
                if (q[y] == l)
                  break e;
                break;
              }
            }
          if (h++, d)
            d.push(m);
          else {
            m.from > a && o.push(new Je(a, m.from, O));
            let y = m.direction == ni != !(O % 2);
            Rl(r, y ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == t || (f ? q[p] != l : q[p] == l))
            break;
          p++;
        }
      d ? kl(r, a, p, i + 1, n, d, o) : a < p && o.push(new Je(a, p, O)), a = p;
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let f = !0, u = !1;
      if (!h || a > s[h - 1].to) {
        let m = q[a - 1];
        m != l && (f = !1, u = m == 16);
      }
      let d = !f && l == 1 ? [] : null, O = f ? i : i + 1, p = a;
      e: for (; ; )
        if (h && p == s[h - 1].to) {
          if (u)
            break e;
          let m = s[--h];
          if (!f)
            for (let y = m.from, b = h; ; ) {
              if (y == e)
                break e;
              if (b && s[b - 1].to == y)
                y = s[--b].from;
              else {
                if (q[y - 1] == l)
                  break e;
                break;
              }
            }
          if (d)
            d.push(m);
          else {
            m.to < a && o.push(new Je(m.to, a, O));
            let y = m.direction == ni != !(O % 2);
            Rl(r, y ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == e || (f ? q[p - 1] != l : q[p - 1] == l))
            break;
          p--;
        }
      d ? kl(r, p, a, i + 1, n, d, o) : p < a && o.push(new Je(p, a, O)), a = p;
    }
}
c(kl, "emitSpans");
function Rl(r, e, t, i, n, s, o) {
  let l = e % 2 ? 2 : 1;
  Jg(r, n, s, i, l), e0(r, n, s, i, l), t0(n, s, i, l), kl(r, n, s, e, t, i, o);
}
c(Rl, "computeSectionOrder");
function i0(r, e, t) {
  if (!r)
    return [new Je(0, 0, e == th ? 1 : 0)];
  if (e == ni && !t.length && !Kg.test(r))
    return OO(r.length);
  if (t.length)
    for (; r.length > q.length; )
      q[q.length] = 256;
  let i = [], n = e == ni ? 0 : 1;
  return Rl(r, n, n, t, 0, r.length, i), i;
}
c(i0, "computeOrder");
function OO(r) {
  return [new Je(0, r, 0)];
}
c(OO, "trivialOrder");
let pO = "";
function r0(r, e, t, i, n) {
  var s;
  let o = i.head - r.from, l = Je.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[l], h = a.side(n, t);
  if (o == h) {
    let d = l += n ? 1 : -1;
    if (d < 0 || d >= e.length)
      return null;
    a = e[l = d], o = a.side(!n, t), h = a.side(n, t);
  }
  let f = Oe(r.text, o, a.forward(n, t));
  (f < a.from || f > a.to) && (f = h), pO = r.text.slice(Math.min(o, f), Math.max(o, f));
  let u = l == (n ? e.length - 1 : 0) ? null : e[l + (n ? 1 : -1)];
  return u && f == h && u.level + (n ? 0 : 1) < a.level ? R.cursor(u.side(!n, t) + r.from, u.forward(n, t) ? 1 : -1, u.level) : R.cursor(f + r.from, a.forward(n, t) ? -1 : 1, a.level);
}
c(r0, "moveVisually");
function n0(r, e, t) {
  for (let i = e; i < t; i++) {
    let n = uO(r.charCodeAt(i));
    if (n == 1)
      return ni;
    if (n == 2 || n == 4)
      return th;
  }
  return ni;
}
c(n0, "autoDirection");
const mO = /* @__PURE__ */ M.define(), gO = /* @__PURE__ */ M.define(), yO = /* @__PURE__ */ M.define(), bO = /* @__PURE__ */ M.define(), $l = /* @__PURE__ */ M.define(), SO = /* @__PURE__ */ M.define(), QO = /* @__PURE__ */ M.define(), ih = /* @__PURE__ */ M.define(), rh = /* @__PURE__ */ M.define(), wO = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine")
}), s0 = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => r.some((e) => e), "combine")
}), xO = /* @__PURE__ */ M.define(), Lr = class Lr {
  constructor(e, t = "nearest", i = "nearest", n = 5, s = 5, o = !1) {
    this.range = e, this.y = t, this.x = i, this.yMargin = n, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new Lr(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Lr(R.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
};
c(Lr, "ScrollTarget");
let br = Lr;
const $n = /* @__PURE__ */ I.define({ map: /* @__PURE__ */ c((r, e) => r.map(e), "map") }), PO = /* @__PURE__ */ I.define();
function $e(r, e, t) {
  let i = r.facet(bO);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
c($e, "logException");
const ht = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.length ? r[0] : !0, "combine") });
let o0 = 0;
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
    return new Mr(o0++, e, i, n, (l) => {
      let a = [];
      return o && a.push(tn.of((h) => {
        let f = h.plugin(l);
        return f ? o(f) : j.none;
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
let je = Mr;
const rf = class rf {
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
            if ($e(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
        $e(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        $e(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
};
c(rf, "PluginInstance");
let Sr = rf;
const kO = /* @__PURE__ */ M.define(), nh = /* @__PURE__ */ M.define(), tn = /* @__PURE__ */ M.define(), RO = /* @__PURE__ */ M.define(), sh = /* @__PURE__ */ M.define(), $O = /* @__PURE__ */ M.define();
function Dc(r, e) {
  let t = r.state.facet($O);
  if (!t.length)
    return t;
  let i = t.map((s) => s instanceof Function ? s(r) : s), n = [];
  return re.spans(i, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let h = s - e.from, f = o - e.from, u = n;
      for (let d = l.length - 1; d >= 0; d--, a--) {
        let O = l[d].spec.bidiIsolate, p;
        if (O == null && (O = n0(e.text, h, f)), a > 0 && u.length && (p = u[u.length - 1]).to == h && p.direction == O)
          p.to = f, u = p.inner;
        else {
          let m = { from: h, to: f, direction: O, inner: [] };
          u.push(m), u = m.inner;
        }
      }
    }
  }), n;
}
c(Dc, "getIsolatedRanges");
const vO = /* @__PURE__ */ M.define();
function oh(r) {
  let e = 0, t = 0, i = 0, n = 0;
  for (let s of r.state.facet(vO)) {
    let o = s(r);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: n };
}
c(oh, "getScrollMargins");
const cr = /* @__PURE__ */ M.define(), Si = class Si {
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
        let u = t[s], d = t[s + 1], O = Math.max(l, u), p = Math.min(f, d);
        if (O <= p && new Si(O + h, p + h, O, p).addToSet(i), d > f)
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
let tt = Si;
const Fs = class Fs {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = Te.empty(this.startState.doc.length);
    for (let s of i)
      this.changes = this.changes.compose(s.changes);
    let n = [];
    this.changes.iterChangedRanges((s, o, l, a) => n.push(new tt(s, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Fs(e, t, i);
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
c(Fs, "ViewUpdate");
let rn = Fs;
const nf = class nf extends z {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = j.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new se()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new tt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: f }) => f < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? n = this.domChanged.newSel.head : !d0(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
    let s = n > -1 ? a0(this.view, e.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: f } = this.hasComposition;
      i = new tt(h, f, e.changes.mapPos(h, -1), e.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (T.ie || T.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = c0(o, l, e.changes);
    return i = tt.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
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
        o instanceof Ft && o.widget instanceof en && s.push(o.dom);
    n.updateGaps(s);
  }
  updateChildren(e, t, i) {
    let n = i ? i.range.addToSet(e.slice()) : e, s = this.childCursor(t);
    for (let o = n.length - 1; ; o--) {
      let l = o >= 0 ? n[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: f, toB: u } = l, d, O, p, m;
      if (i && i.range.fromB < u && i.range.toB > f) {
        let $ = yr.build(this.view.state.doc, f, i.range.fromB, this.decorations, this.dynamicDecorationMap), k = yr.build(this.view.state.doc, i.range.toB, u, this.decorations, this.dynamicDecorationMap);
        O = $.breakAtStart, p = $.openStart, m = k.openEnd;
        let A = this.compositionView(i);
        k.breakAtStart ? A.breakAfter = 1 : k.content.length && A.merge(A.length, A.length, k.content[0], !1, k.openStart, 0) && (A.breakAfter = k.content[0].breakAfter, k.content.shift()), $.content.length && A.merge(0, 0, $.content[$.content.length - 1], !0, 0, $.openEnd) && $.content.pop(), d = $.content.concat(A).concat(k.content);
      } else
        ({ content: d, breakAtStart: O, openStart: p, openEnd: m } = yr.build(this.view.state.doc, f, u, this.decorations, this.dynamicDecorationMap));
      let { i: y, off: b } = s.findPos(h, 1), { i: Q, off: x } = s.findPos(a, -1);
      rO(this, Q, x, y, b, d, O, p, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(PO) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new nt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: n } of e.marks)
      t = new $t(n, [t], t.length);
    let i = new se();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = /* @__PURE__ */ c((s, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = z.get(s);
      l && l != o && (l.dom = null), o.setDOM(s);
    }, "fix"), i = this.childPos(e.range.fromB, 1), n = this.children[i.i];
    t(e.line, n);
    for (let s = e.marks.length - 1; s >= -1; s--)
      i = n.childPos(i.off, 1), n = n.children[i.i], t(s >= 0 ? e.marks[s].node : e.text, n);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, n = i == this.dom, s = !n && !(this.view.state.facet(ht) || this.dom.tabIndex > -1) && qn(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(n || t || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (T.gecko && l.empty && !this.hasComposition && l0(a)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(u, a.node.childNodes[a.offset] || null)), a = h = new de(u, 0), o = !0;
    }
    let f = this.view.observer.selectionRange;
    (o || !f.focusNode || (!gr(a.node, a.offset, f.anchorNode, f.anchorOffset) || !gr(h.node, h.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, l)) && (this.view.observer.ignore(() => {
      T.android && T.chrome && this.dom.contains(f.focusNode) && u0(f.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let u = Hr(this.view.root);
      if (u) if (l.empty) {
        if (T.gecko) {
          let d = h0(a.node, a.offset);
          if (d && d != 3) {
            let O = (d == 1 ? tO : iO)(a.node, a.offset);
            O && (a = new de(O.node, O.offset));
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
        let d = document.createRange();
        l.anchor > l.head && ([a, h] = [h, a]), d.setEnd(h.node, h.offset), d.setStart(a.node, a.offset), u.removeAllRanges(), u.addRange(d);
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new de(f.anchorNode, f.anchorOffset), this.impreciseHead = h.precise ? null : new de(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && gr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = Hr(e.root), { anchorNode: n, anchorOffset: s } = e.observer.selectionRange;
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
      let s = z.get(t.childNodes[n]);
      s instanceof se && (i = s.domAtPos(0));
    }
    for (let n = e.offset - 1; !i && n >= 0; n--) {
      let s = z.get(t.childNodes[n]);
      s instanceof se && (i = s.domAtPos(s.length));
    }
    return i ? new de(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = z.get(t);
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
      else if (i && h == e && a == e && l instanceof Ft && Math.abs(t) < 2) {
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
    if (!(n instanceof nt))
      return null;
    let s = Oe(n.text, i);
    if (s == i)
      return null;
    let o = ri(n.dom, i, s).getClientRects();
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
      let u = this.children[f], d = h + u.length;
      if (d > n)
        break;
      if (h >= i) {
        let O = u.dom.getBoundingClientRect();
        if (t.push(O.height), o) {
          let p = u.dom.lastChild, m = p ? Wi(p) : [];
          if (m.length) {
            let y = m[m.length - 1], b = a ? y.right - O.left : O.right - y.left;
            b > l && (l = b, this.minWidth = s, this.minWidthFrom = h, this.minWidthTo = d);
          }
        }
      }
      h = d + u.breakAfter;
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
      let s = Wi(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = s ? s.width / 27 : 7, n = s ? s.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: n };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new ns(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let s = n == t.viewports.length ? null : t.viewports[n], o = s ? s.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(j.replace({
          widget: new en(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!s)
        break;
      i = s.to + 1;
    }
    return j.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(tn).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = !1, n = this.view.state.facet(RO).map((s, o) => {
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
    for (let h of this.view.state.facet(xO))
      try {
        if (h(this.view, e.range, e))
          return !0;
      } catch (f) {
        $e(this.view.state, f, "scroll handler");
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
    let s = oh(this.view), o = {
      left: i.left - s.left,
      top: i.top - s.top,
      right: i.right + s.right,
      bottom: i.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Wg(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == ee.LTR);
  }
};
c(nf, "DocView");
let ls = nf;
function l0(r) {
  return r.node.nodeType == 1 && r.node.firstChild && (r.offset == 0 || r.node.childNodes[r.offset - 1].contentEditable == "false") && (r.offset == r.node.childNodes.length || r.node.childNodes[r.offset].contentEditable == "false");
}
c(l0, "betweenUneditable");
function TO(r, e) {
  let t = r.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = tO(t.focusNode, t.focusOffset), n = iO(t.focusNode, t.focusOffset), s = i || n;
  if (n && i && n.node != i.node) {
    let l = z.get(n.node);
    if (!l || l instanceof nt && l.text != n.node.nodeValue)
      s = n;
    else if (r.docView.lastCompositionAfterCursor) {
      let a = z.get(i.node);
      !a || a instanceof nt && a.text != i.node.nodeValue || (s = n);
    }
  }
  if (r.docView.lastCompositionAfterCursor = s != i, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
c(TO, "findCompositionNode");
function a0(r, e, t) {
  let i = TO(r, t);
  if (!i)
    return null;
  let { node: n, from: s, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || r.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new tt(a.mapPos(s), a.mapPos(o), s, o), f = [];
  for (let u = n.parentNode; ; u = u.parentNode) {
    let d = z.get(u);
    if (d instanceof $t)
      f.push({ node: u, deco: d.mark });
    else {
      if (d instanceof se || u.nodeName == "DIV" && u.parentNode == r.contentDOM)
        return { range: h, text: n, marks: f, line: u };
      if (u != r.contentDOM)
        f.push({ node: u, deco: new Kr({
          inclusive: !0,
          attributes: Ng(u),
          tagName: u.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
c(a0, "findCompositionRange");
function h0(r, e) {
  return r.nodeType != 1 ? 0 : (e && r.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < r.childNodes.length && r.childNodes[e].contentEditable == "false" ? 2 : 0);
}
c(h0, "nextToUneditable");
var Ai;
let f0 = (Ai = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Dn(e, t, this.changes);
  }
  comparePoint(e, t) {
    Dn(e, t, this.changes);
  }
  boundChange(e) {
    Dn(e, e, this.changes);
  }
}, c(Ai, "DecorationComparator"), Ai);
function c0(r, e, t) {
  let i = new f0();
  return re.compare(r, e, t, i), i.changes;
}
c(c0, "findChangedDeco");
function u0(r, e) {
  for (let t = r; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return !0;
  return !1;
}
c(u0, "inUneditable");
function d0(r, e) {
  let t = !1;
  return e && r.iterChangedRanges((i, n) => {
    i < e.to && n > e.from && (t = !0);
  }), t;
}
c(d0, "touchesComposition");
function O0(r, e, t = 1) {
  let i = r.charCategorizer(e), n = r.doc.lineAt(e), s = e - n.from;
  if (n.length == 0)
    return R.cursor(e);
  s == 0 ? t = 1 : s == n.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = Oe(n.text, s, !1) : l = Oe(n.text, s);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = Oe(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = Oe(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return R.range(o + n.from, l + n.from);
}
c(O0, "groupAt");
function p0(r, e) {
  return e.left > r ? e.left - r : Math.max(0, r - e.right);
}
c(p0, "getdx");
function m0(r, e) {
  return e.top > r ? e.top - r : Math.max(0, r - e.bottom);
}
c(m0, "getdy");
function vo(r, e) {
  return r.top < e.bottom - 1 && r.bottom > e.top + 1;
}
c(vo, "yOverlap");
function Bc(r, e) {
  return e < r.top ? { top: e, left: r.left, right: r.right, bottom: r.bottom } : r;
}
c(Bc, "upTop");
function zc(r, e) {
  return e > r.bottom ? { top: r.top, left: r.left, right: r.right, bottom: e } : r;
}
c(zc, "upBot");
function vl(r, e, t) {
  let i, n, s, o, l = !1, a, h, f, u;
  for (let p = r.firstChild; p; p = p.nextSibling) {
    let m = Wi(p);
    for (let y = 0; y < m.length; y++) {
      let b = m[y];
      n && vo(n, b) && (b = Bc(zc(b, n.bottom), n.top));
      let Q = p0(e, b), x = m0(t, b);
      if (Q == 0 && x == 0)
        return p.nodeType == 3 ? Nc(p, e, t) : vl(p, e, t);
      (!i || o > x || o == x && s > Q) && (i = p, n = b, s = Q, o = x, l = Q ? e < b.left ? y > 0 : y < m.length - 1 : !0), Q == 0 ? t > b.bottom && (!f || f.bottom < b.bottom) ? (a = p, f = b) : t < b.top && (!u || u.top > b.top) && (h = p, u = b) : f && vo(f, b) ? f = zc(f, b.bottom) : u && vo(u, b) && (u = Bc(u, b.top));
    }
  }
  if (f && f.bottom >= t ? (i = a, n = f) : u && u.top <= t && (i = h, n = u), !i)
    return { node: r, offset: 0 };
  let d = Math.max(n.left, Math.min(n.right, e));
  if (i.nodeType == 3)
    return Nc(i, d, t);
  if (l && i.contentEditable != "false")
    return vl(i, d, t);
  let O = Array.prototype.indexOf.call(r.childNodes, i) + (e >= (n.left + n.right) / 2 ? 1 : 0);
  return { node: r, offset: O };
}
c(vl, "domPosAtCoords");
function Nc(r, e, t) {
  let i = r.nodeValue.length, n = -1, s = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = ri(r, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let f = a[h];
      if (f.top == f.bottom)
        continue;
      o || (o = e - f.left);
      let u = (f.top > t ? f.top - t : t - f.bottom) - 1;
      if (f.left - 1 <= e && f.right + 1 >= e && u < s) {
        let d = e >= (f.left + f.right) / 2, O = d;
        if ((T.chrome || T.gecko) && ri(r, l).getBoundingClientRect().left == f.right && (O = !d), u <= 0)
          return { node: r, offset: l + (O ? 1 : 0) };
        n = l + (O ? 1 : 0), s = u;
      }
    }
  }
  return { node: r, offset: n > -1 ? n : o > 0 ? r.nodeValue.length : 0 };
}
c(Nc, "domPosInText");
function AO(r, e, t, i = -1) {
  var n, s;
  let o = r.contentDOM.getBoundingClientRect(), l = o.top + r.viewState.paddingTop, a, { docHeight: h } = r.viewState, { x: f, y: u } = e, d = u - l;
  if (d < 0)
    return 0;
  if (d > h)
    return r.state.doc.length;
  for (let $ = r.viewState.heightOracle.textHeight / 2, k = !1; a = r.elementAtHeight(d), a.type != et.Text; )
    for (; d = i > 0 ? a.bottom + $ : a.top - $, !(d >= 0 && d <= h); ) {
      if (k)
        return t ? null : 0;
      k = !0, i = -i;
    }
  u = l + d;
  let O = a.from;
  if (O < r.viewport.from)
    return r.viewport.from == 0 ? 0 : t ? null : Gc(r, o, a, f, u);
  if (O > r.viewport.to)
    return r.viewport.to == r.state.doc.length ? r.state.doc.length : t ? null : Gc(r, o, a, f, u);
  let p = r.dom.ownerDocument, m = r.root.elementFromPoint ? r.root : p, y = m.elementFromPoint(f, u);
  y && !r.contentDOM.contains(y) && (y = null), y || (f = Math.max(o.left + 1, Math.min(o.right - 1, f)), y = m.elementFromPoint(f, u), y && !r.contentDOM.contains(y) && (y = null));
  let b, Q = -1;
  if (y && ((n = r.docView.nearest(y)) === null || n === void 0 ? void 0 : n.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let $ = p.caretPositionFromPoint(f, u);
      $ && ({ offsetNode: b, offset: Q } = $);
    } else if (p.caretRangeFromPoint) {
      let $ = p.caretRangeFromPoint(f, u);
      $ && ({ startContainer: b, startOffset: Q } = $, (!r.contentDOM.contains(b) || T.safari && g0(b, Q, f) || T.chrome && y0(b, Q, f)) && (b = void 0));
    }
    b && (Q = Math.min(rt(b), Q));
  }
  if (!b || !r.docView.dom.contains(b)) {
    let $ = se.find(r.docView, O);
    if (!$)
      return d > a.top + a.height / 2 ? a.to : a.from;
    ({ node: b, offset: Q } = vl($.dom, f, u));
  }
  let x = r.docView.nearest(b);
  if (!x)
    return null;
  if (x.isWidget && ((s = x.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let $ = x.dom.getBoundingClientRect();
    return e.y < $.top || e.y <= $.bottom && e.x <= ($.left + $.right) / 2 ? x.posAtStart : x.posAtEnd;
  } else
    return x.localPosFromDOM(b, Q) + x.posAtStart;
}
c(AO, "posAtCoords");
function Gc(r, e, t, i, n) {
  let s = Math.round((i - e.left) * r.defaultCharacterWidth);
  if (r.lineWrapping && t.height > r.defaultLineHeight * 1.5) {
    let l = r.viewState.heightOracle.textHeight, a = Math.floor((n - t.top - (r.defaultLineHeight - l) * 0.5) / l);
    s += a * r.viewState.heightOracle.lineLength;
  }
  let o = r.state.sliceDoc(t.from, t.to);
  return t.from + _g(o, s, r.state.tabSize);
}
c(Gc, "posAtCoordsImprecise");
function g0(r, e, t) {
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
  return ri(r, i - 1, i).getBoundingClientRect().right > t;
}
c(g0, "isSuspiciousSafariCaretResult");
function y0(r, e, t) {
  if (e != 0)
    return !1;
  for (let n = r; ; ) {
    let s = n.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != n)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    n = s;
  }
  let i = r.nodeType == 1 ? r.getBoundingClientRect() : ri(r, 0, Math.max(r.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
c(y0, "isSuspiciousChromeCaretResult");
function b0(r, e, t) {
  let i = r.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let n;
    for (let s of i.type) {
      if (s.from > e)
        break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e)
          return s;
        (!n || s.type == et.Text && (n.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (n = s);
      }
    }
    return n || i;
  }
  return i;
}
c(b0, "blockAt");
function S0(r, e, t, i) {
  let n = b0(r, e.head, e.assoc || -1), s = !i || n.type != et.Text || !(r.lineWrapping || n.widgetLineBreaks) ? null : r.coordsAtPos(e.assoc < 0 && e.head > n.from ? e.head - 1 : e.head);
  if (s) {
    let o = r.dom.getBoundingClientRect(), l = r.textDirectionAt(n.from), a = r.posAtCoords({
      x: t == (l == ee.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return R.cursor(a, t ? -1 : 1);
  }
  return R.cursor(t ? n.to : n.from, t ? -1 : 1);
}
c(S0, "moveToLineBoundary");
function Hc(r, e, t, i) {
  let n = r.state.doc.lineAt(e.head), s = r.bidiSpans(n), o = r.textDirectionAt(n.from);
  for (let l = e, a = null; ; ) {
    let h = r0(n, s, o, l, t), f = pO;
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
c(Hc, "moveByChar");
function Q0(r, e, t) {
  let i = r.state.charCategorizer(e), n = i(t);
  return (s) => {
    let o = i(s);
    return n == ft.Space && (n = o), n == o;
  };
}
c(Q0, "byGroup");
function w0(r, e, t, i) {
  let n = e.head, s = t ? 1 : -1;
  if (n == (t ? r.state.doc.length : 0))
    return R.cursor(n, e.assoc);
  let o = e.goalColumn, l, a = r.contentDOM.getBoundingClientRect(), h = r.coordsAtPos(n, e.assoc || -1), f = r.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = s < 0 ? h.top : h.bottom;
  else {
    let O = r.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, r.defaultCharacterWidth * (n - O.from))), l = (s < 0 ? O.top : O.bottom) + f;
  }
  let u = a.left + o, d = i ?? r.viewState.heightOracle.textHeight >> 1;
  for (let O = 0; ; O += 10) {
    let p = l + (d + O) * s, m = AO(r, { x: u, y: p }, !1, s);
    if (p < a.top || p > a.bottom || (s < 0 ? m < n : m > n)) {
      let y = r.docView.coordsForChar(m), b = !y || p < y.top ? -1 : 1;
      return R.cursor(m, b, void 0, o);
    }
  }
}
c(w0, "moveVertically");
function Bn(r, e, t) {
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
c(Bn, "skipAtomicRanges");
function To(r, e, t) {
  let i = Bn(r.state.facet(sh).map((n) => n(r)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : R.cursor(i, i < t.from ? 1 : -1);
}
c(To, "skipAtoms");
const ur = "￿", sf = class sf {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(K.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += ur;
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
      let l = z.get(n), a = z.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : rs(n)) || rs(o) && (n.nodeName != "BR" || n.cmIgnore) && this.text.length > s) && this.lineBreak(), n = o;
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
    let t = z.get(e), i = t && t.overrideDOMText;
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
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (x0(e, i.node, i.offset) ? t : 0));
  }
};
c(sf, "DOMReader");
let Tl = sf;
function x0(r, e, t) {
  for (; ; ) {
    if (!e || t < rt(e))
      return !1;
    if (e == r)
      return !0;
    t = ii(e) + 1, e = e.parentNode;
  }
}
c(x0, "isAtEnd");
const of = class of {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
};
c(of, "DOMPoint");
let as = of;
const lf = class lf {
  constructor(e, t, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = s || o ? [] : R0(e), a = new Tl(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = $0(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !gl(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !gl(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), f = e.viewport;
      if ((T.ios || T.chrome) && e.state.selection.main.empty && a != h && (f.from > 0 || f.to < e.state.doc.length)) {
        let u = Math.min(a, h), d = Math.max(a, h), O = f.from - u, p = f.to - d;
        (O == 0 || O == 1 || u == 0) && (p == 0 || p == -1 || d == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      this.newSel = R.single(h, a);
    }
  }
};
c(lf, "DOMChange");
let Al = lf;
function ZO(r, e) {
  let t, { newSel: i } = e, n = r.state.selection.main, s = r.inputState.lastKeyTime > Date.now() - 100 ? r.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = n.from, h = null;
    (s === 8 || T.android && e.text.length < l - o) && (a = n.to, h = "end");
    let f = k0(r.state.doc.sliceString(o, l, ur), e.text, a - o, h);
    f && (T.chrome && s == 13 && f.toB == f.from + 2 && e.text.slice(f.from, f.toB) == ur + ur && f.toB--, t = {
      from: o + f.from,
      to: o + f.toA,
      insert: X.of(e.text.slice(f.from, f.toB).split(ur))
    });
  } else i && (!r.hasFocus && r.state.facet(ht) || i.main.eq(n)) && (i = null);
  if (!t && !i)
    return !1;
  if (!t && e.typeOver && !n.empty && i && i.main.empty ? t = { from: n.from, to: n.to, insert: r.state.doc.slice(n.from, n.to) } : (T.mac || T.android) && t && t.from == t.to && t.from == n.head - 1 && /^\. ?$/.test(t.insert.toString()) && r.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = R.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: X.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= n.from && t.to <= n.to && (t.from != n.from || t.to != n.to) && n.to - n.from - (t.to - t.from) <= 4 ? t = {
    from: n.from,
    to: n.to,
    insert: r.state.doc.slice(n.from, t.from).append(t.insert).append(r.state.doc.slice(t.to, n.to))
  } : T.chrome && t && t.from == t.to && t.from == n.head && t.insert.toString() == `
 ` && r.lineWrapping && (i && (i = R.single(i.main.anchor - 1, i.main.head - 1)), t = { from: n.from, to: n.to, insert: X.of([" "]) }), t)
    return lh(r, t, i, s);
  if (i && !i.main.eq(n)) {
    let o = !1, l = "select";
    return r.inputState.lastSelectionTime > Date.now() - 50 && (r.inputState.lastSelectionOrigin == "select" && (o = !0), l = r.inputState.lastSelectionOrigin), r.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
c(ZO, "applyDOMChange");
function lh(r, e, t, i = -1) {
  if (T.ios && r.inputState.flushIOSKey(e))
    return !0;
  let n = r.state.selection.main;
  if (T.android && (e.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == n.from || e.from == n.from - 1 && r.state.sliceDoc(e.from, n.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && $i(r.contentDOM, "Enter", 13) || (e.from == n.from - 1 && e.to == n.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > n.head) && $i(r.contentDOM, "Backspace", 8) || e.from == n.from && e.to == n.to + 1 && e.insert.length == 0 && $i(r.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  r.inputState.composing >= 0 && r.inputState.composing++;
  let o, l = /* @__PURE__ */ c(() => o || (o = P0(r, e, t)), "defaultInsert");
  return r.state.facet(SO).some((a) => a(r, e.from, e.to, s, l)) || r.dispatch(l()), !0;
}
c(lh, "applyDOMChangeInner");
function P0(r, e, t) {
  let i, n = r.state, s = n.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && r.inputState.composing < 0) {
    let l = s.from < e.from ? n.sliceDoc(s.from, e.from) : "", a = s.to > e.to ? n.sliceDoc(e.to, s.to) : "";
    i = n.replaceSelection(r.state.toText(l + e.insert.sliceString(0, void 0, r.state.lineBreak) + a));
  } else {
    let l = n.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (n.selection.ranges.length > 1 && r.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let h = r.state.sliceDoc(e.from, e.to), f, u = t && TO(r, t.main.head);
      if (u) {
        let p = e.insert.length - (e.to - e.from);
        f = { from: u.from, to: u.to - p };
      } else
        f = r.state.doc.lineAt(s.head);
      let d = s.to - e.to, O = s.to - s.from;
      i = n.changeByRange((p) => {
        if (p.from == s.from && p.to == s.to)
          return { changes: l, range: a || p.map(l) };
        let m = p.to - d, y = m - h.length;
        if (p.to - p.from != O || r.state.sliceDoc(y, m) != h || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= f.from && p.from <= f.to)
          return { range: p };
        let b = n.changes({ from: y, to: m, insert: e.insert }), Q = p.to - s.to;
        return {
          changes: b,
          range: a ? R.range(Math.max(0, a.anchor + Q), Math.max(0, a.head + Q)) : p.map(b)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && n.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (r.composing || r.inputState.compositionPendingChange && r.inputState.compositionEndedAt > Date.now() - 50) && (r.inputState.compositionPendingChange = !1, o += ".compose", r.inputState.compositionFirstChange && (o += ".start", r.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: o, scrollIntoView: !0 });
}
c(P0, "applyDefaultInsert");
function k0(r, e, t, i) {
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
c(k0, "findDiff");
function R0(r) {
  let e = [];
  if (r.root.activeElement != r.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: s } = r.observer.selectionRange;
  return t && (e.push(new as(t, i)), (n != t || s != i) && e.push(new as(n, s))), e;
}
c(R0, "selectionPoints");
function $0(r, e) {
  if (r.length == 0)
    return null;
  let t = r[0].pos, i = r.length == 2 ? r[1].pos : t;
  return t > -1 && i > -1 ? R.single(t + e, i + e) : null;
}
c($0, "selectionFromPoints");
const af = class af {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, T.safari && e.contentDOM.addEventListener("input", () => null), T.gecko && I0(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !_0(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
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
    let t = v0(e), i = this.handlers, n = this.view.contentDOM;
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
    if (this.tabFocusMode > 0 && e.keyCode != 27 && MO.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), T.android && T.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return T.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = LO.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || T0.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, $i(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : T.safari && !T.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
c(af, "InputState");
let Zl = af;
function Fc(r, e) {
  return (t, i) => {
    try {
      return e.call(r, i, t);
    } catch (n) {
      $e(t.state, n);
    }
  };
}
c(Fc, "bindHandler");
function v0(r) {
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
        a && t(l).handlers.push(Fc(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && t(l).observers.push(Fc(i.value, a));
      }
  }
  for (let i in qe)
    t(i).handlers.push(qe[i]);
  for (let i in Ee)
    t(i).observers.push(Ee[i]);
  return e;
}
c(v0, "computeHandlers");
const LO = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], T0 = "dthko", MO = [16, 17, 18, 20, 91, 92, 224, 225], vn = 6;
function Tn(r) {
  return Math.max(0, r) * 0.7 + 8;
}
c(Tn, "dragScrollSpeed");
function A0(r, e) {
  return Math.max(Math.abs(r.clientX - e.clientX), Math.abs(r.clientY - e.clientY));
}
c(A0, "dist");
const hf = class hf {
  constructor(e, t, i, n) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Xg(e.contentDOM), this.atoms = e.state.facet(sh).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(K.allowMultipleSelections) && Z0(e, t), this.dragging = M0(e, t) && EO(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && A0(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, n = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = oh(this.view);
    e.clientX - a.left <= n + vn ? t = -Tn(n - e.clientX) : e.clientX + a.right >= o - vn && (t = Tn(e.clientX - o)), e.clientY - a.top <= s + vn ? i = -Tn(s - e.clientY) : e.clientY + a.bottom >= l - vn && (i = Tn(e.clientY - l)), this.setScrollSpeed(t, i);
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
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let n = e.ranges[i], s = null;
      if (n.empty) {
        let o = Bn(this.atoms, n.from, 0);
        o != n.from && (s = R.cursor(o, -1));
      } else {
        let o = Bn(this.atoms, n.from, -1), l = Bn(this.atoms, n.to, 1);
        (o != n.from || l != n.to) && (s = R.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
      }
      s && (t || (t = e.ranges.slice()), t[i] = s);
    }
    return t ? R.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
};
c(hf, "MouseSelection");
let Ll = hf;
function Z0(r, e) {
  let t = r.state.facet(mO);
  return t.length ? t[0](e) : T.mac ? e.metaKey : e.ctrlKey;
}
c(Z0, "addsSelectionRange");
function L0(r, e) {
  let t = r.state.facet(gO);
  return t.length ? t[0](e) : T.mac ? !e.altKey : !e.ctrlKey;
}
c(L0, "dragMovesSelection");
function M0(r, e) {
  let { main: t } = r.state.selection;
  if (t.empty)
    return !1;
  let i = Hr(r.root);
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
c(M0, "isInPrimarySelection");
function _0(r, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target, i; t != r.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = z.get(t)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
c(_0, "eventBelongsToEditor");
const qe = /* @__PURE__ */ Object.create(null), Ee = /* @__PURE__ */ Object.create(null), _O = T.ie && T.ie_version < 15 || T.ios && T.webkit_version < 604;
function C0(r) {
  let e = r.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    r.focus(), t.remove(), CO(r, t.value);
  }, 50);
}
c(C0, "capturePaste");
function yo(r, e, t) {
  for (let i of r.facet(e))
    t = i(t, r);
  return t;
}
c(yo, "textFilter");
function CO(r, e) {
  e = yo(r.state, ih, e);
  let { state: t } = r, i, n = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (Ml != null && t.selection.ranges.every((a) => a.empty) && Ml == s.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let f = t.doc.lineAt(h.from);
      if (f.from == a)
        return { range: h };
      a = f.from;
      let u = t.toText((o ? s.line(n++).text : e) + t.lineBreak);
      return {
        changes: { from: f.from, insert: u },
        range: R.cursor(h.from + u.length)
      };
    });
  } else o ? i = t.changeByRange((a) => {
    let h = s.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: R.cursor(a.from + h.length)
    };
  }) : i = t.replaceSelection(s);
  r.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
c(CO, "doPaste");
Ee.scroll = (r) => {
  r.inputState.lastScrollTop = r.scrollDOM.scrollTop, r.inputState.lastScrollLeft = r.scrollDOM.scrollLeft;
};
qe.keydown = (r, e) => (r.inputState.setSelectionOrigin("select"), e.keyCode == 27 && r.inputState.tabFocusMode != 0 && (r.inputState.tabFocusMode = Date.now() + 2e3), !1);
Ee.touchstart = (r, e) => {
  r.inputState.lastTouchTime = Date.now(), r.inputState.setSelectionOrigin("select.pointer");
};
Ee.touchmove = (r) => {
  r.inputState.setSelectionOrigin("select.pointer");
};
qe.mousedown = (r, e) => {
  if (r.observer.flush(), r.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let t = null;
  for (let i of r.state.facet(yO))
    if (t = i(r, e), t)
      break;
  if (!t && e.button == 0 && (t = U0(r, e)), t) {
    let i = !r.hasFocus;
    r.inputState.startMouseSelection(new Ll(r, e, t, i)), i && r.observer.ignore(() => {
      Kd(r.contentDOM);
      let s = r.root.activeElement;
      s && !s.contains(r.contentDOM) && s.blur();
    });
    let n = r.inputState.mouseSelection;
    if (n)
      return n.start(e), n.dragging === !1;
  }
  return !1;
};
function Kc(r, e, t, i) {
  if (i == 1)
    return R.cursor(e, t);
  if (i == 2)
    return O0(r.state, e, t);
  {
    let n = se.find(r.docView, e), s = r.state.doc.lineAt(n ? n.posAtEnd : e), o = n ? n.posAtStart : s.from, l = n ? n.posAtEnd : s.to;
    return l < r.state.doc.length && l == s.to && l++, R.range(o, l);
  }
}
c(Kc, "rangeForClick");
let Jc = /* @__PURE__ */ c((r, e, t) => e >= t.top && e <= t.bottom && r >= t.left && r <= t.right, "inside");
function E0(r, e, t, i) {
  let n = se.find(r.docView, e);
  if (!n)
    return 1;
  let s = e - n.posAtStart;
  if (s == 0)
    return 1;
  if (s == n.length)
    return -1;
  let o = n.coordsAt(s, -1);
  if (o && Jc(t, i, o))
    return -1;
  let l = n.coordsAt(s, 1);
  return l && Jc(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
c(E0, "findPositionSide");
function eu(r, e) {
  let t = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: E0(r, t, e.clientX, e.clientY) };
}
c(eu, "queryPos");
const V0 = T.ie && T.ie_version <= 11;
let tu = null, iu = 0, ru = 0;
function EO(r) {
  if (!V0)
    return r.detail;
  let e = tu, t = ru;
  return tu = r, ru = Date.now(), iu = !e || t > Date.now() - 400 && Math.abs(e.clientX - r.clientX) < 2 && Math.abs(e.clientY - r.clientY) < 2 ? (iu + 1) % 3 : 1;
}
c(EO, "getClickType");
function U0(r, e) {
  let t = eu(r, e), i = EO(e), n = r.state.selection;
  return {
    update(s) {
      s.docChanged && (t.pos = s.changes.mapPos(t.pos), n = n.map(s.changes));
    },
    get(s, o, l) {
      let a = eu(r, s), h, f = Kc(r, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let u = Kc(r, t.pos, t.bias, i), d = Math.min(u.from, f.from), O = Math.max(u.to, f.to);
        f = d < f.from ? R.range(d, O) : R.range(O, d);
      }
      return o ? n.replaceRange(n.main.extend(f.from, f.to)) : l && i == 1 && n.ranges.length > 1 && (h = W0(n, a.pos)) ? h : l ? n.addRange(f) : R.create([f]);
    }
  };
}
c(U0, "basicMouseSelection");
function W0(r, e) {
  for (let t = 0; t < r.ranges.length; t++) {
    let { from: i, to: n } = r.ranges[t];
    if (i <= e && n >= e)
      return R.create(r.ranges.slice(0, t).concat(r.ranges.slice(t + 1)), r.mainIndex == t ? 0 : r.mainIndex - (r.mainIndex > t ? 1 : 0));
  }
  return null;
}
c(W0, "removeRangeAround");
qe.dragstart = (r, e) => {
  let { selection: { main: t } } = r.state;
  if (e.target.draggable) {
    let n = r.docView.nearest(e.target);
    if (n && n.isWidget) {
      let s = n.posAtStart, o = s + n.length;
      (s >= t.to || o <= t.from) && (t = R.range(s, o));
    }
  }
  let { inputState: i } = r;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", yo(r.state, rh, r.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
qe.dragend = (r) => (r.inputState.draggedContent = null, !1);
function nu(r, e, t, i) {
  if (t = yo(r.state, ih, t), !t)
    return;
  let n = r.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = r.inputState, o = i && s && L0(r, e) ? { from: s.from, to: s.to } : null, l = { from: n, insert: t }, a = r.state.changes(o ? [o, l] : l);
  r.focus(), r.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), r.inputState.draggedContent = null;
}
c(nu, "dropText");
qe.drop = (r, e) => {
  if (!e.dataTransfer)
    return !1;
  if (r.state.readOnly)
    return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), n = 0, s = /* @__PURE__ */ c(() => {
      ++n == t.length && nu(r, e, i.filter((o) => o != null).join(r.state.lineBreak), !1);
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
      return nu(r, e, i, !0), !0;
  }
  return !1;
};
qe.paste = (r, e) => {
  if (r.state.readOnly)
    return !0;
  r.observer.flush();
  let t = _O ? null : e.clipboardData;
  return t ? (CO(r, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (C0(r), !1);
};
function X0(r, e) {
  let t = r.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), r.focus();
  }, 50);
}
c(X0, "captureCopy");
function Y0(r) {
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
  return { text: yo(r, rh, e.join(r.lineBreak)), ranges: t, linewise: i };
}
c(Y0, "copiedRange");
let Ml = null;
qe.copy = qe.cut = (r, e) => {
  let { text: t, ranges: i, linewise: n } = Y0(r.state);
  if (!t && !n)
    return !1;
  Ml = n ? t : null, e.type == "cut" && !r.state.readOnly && r.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = _O ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (X0(r, t), !1);
};
const VO = /* @__PURE__ */ Ie.define();
function UO(r, e) {
  let t = [];
  for (let i of r.facet(QO)) {
    let n = i(r, e);
    n && t.push(n);
  }
  return t.length ? r.update({ effects: t, annotations: VO.of(!0) }) : null;
}
c(UO, "focusChangeTransaction");
function WO(r) {
  setTimeout(() => {
    let e = r.hasFocus;
    if (e != r.inputState.notifiedFocused) {
      let t = UO(r.state, e);
      t ? r.dispatch(t) : r.update([]);
    }
  }, 10);
}
c(WO, "updateForFocusChange");
Ee.focus = (r) => {
  r.inputState.lastFocusTime = Date.now(), !r.scrollDOM.scrollTop && (r.inputState.lastScrollTop || r.inputState.lastScrollLeft) && (r.scrollDOM.scrollTop = r.inputState.lastScrollTop, r.scrollDOM.scrollLeft = r.inputState.lastScrollLeft), WO(r);
};
Ee.blur = (r) => {
  r.observer.clearSelectionRange(), WO(r);
};
Ee.compositionstart = Ee.compositionupdate = (r) => {
  r.observer.editContext || (r.inputState.compositionFirstChange == null && (r.inputState.compositionFirstChange = !0), r.inputState.composing < 0 && (r.inputState.composing = 0));
};
Ee.compositionend = (r) => {
  r.observer.editContext || (r.inputState.composing = -1, r.inputState.compositionEndedAt = Date.now(), r.inputState.compositionPendingKey = !0, r.inputState.compositionPendingChange = r.observer.pendingRecords().length > 0, r.inputState.compositionFirstChange = null, T.chrome && T.android ? r.observer.flushSoon() : r.inputState.compositionPendingChange ? Promise.resolve().then(() => r.observer.flush()) : setTimeout(() => {
    r.inputState.composing < 0 && r.docView.hasComposition && r.update([]);
  }, 50));
};
Ee.contextmenu = (r) => {
  r.inputState.lastContextMenu = Date.now();
};
qe.beforeinput = (r, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && r.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = r.posAtDOM(l.startContainer, l.startOffset), h = r.posAtDOM(l.endContainer, l.endOffset);
      return lh(r, { from: a, to: h, insert: r.state.toText(s) }, null), !0;
    }
  }
  let n;
  if (T.chrome && T.android && (n = LO.find((s) => s.inputType == e.inputType)) && (r.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && r.hasFocus && (r.contentDOM.blur(), r.focus());
    }, 100);
  }
  return T.ios && e.inputType == "deleteContentForward" && r.observer.flushSoon(), T.safari && e.inputType == "insertText" && r.inputState.composing >= 0 && setTimeout(() => Ee.compositionend(r, e), 20), !1;
};
const su = /* @__PURE__ */ new Set();
function I0(r) {
  su.has(r) || (su.add(r), r.addEventListener("copy", () => {
  }), r.addEventListener("cut", () => {
  }));
}
c(I0, "firefoxCopyCutHack");
const ou = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Xi = !1;
function lu() {
  Xi = !1;
}
c(lu, "clearHeightChangeFlag");
const ff = class ff {
  constructor(e) {
    this.lineWrapping = e, this.doc = X.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return ou.indexOf(e) > -1 != this.lineWrapping;
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
    let l = ou.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
c(ff, "HeightOracle");
let _l = ff;
const cf = class cf {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
};
c(cf, "MeasuredHeights");
let Cl = cf;
const Ks = class Ks {
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
    return typeof this._content == "number" ? et.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return new Ks(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
};
c(Ks, "BlockInfo");
let Ke = Ks;
var N = /* @__PURE__ */ function(r) {
  return r[r.ByPos = 0] = "ByPos", r[r.ByHeight = 1] = "ByHeight", r[r.ByPosNoHeight = 2] = "ByPosNoHeight", r;
}(N || (N = {}));
const zn = 1e-3, Qi = class Qi {
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
    this.height != e && (Math.abs(this.height - e) > zn && (Xi = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, t, i) {
    return Qi.of(i);
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
      let { fromA: a, toA: h, fromB: f, toB: u } = n[l], d = s.lineAt(a, N.ByPosNoHeight, i.setDoc(t), 0, 0), O = d.to >= h ? d : s.lineAt(h, N.ByPosNoHeight, i, 0, 0);
      for (u += O.to - h, h = O.to; l > 0 && d.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, f = n[l - 1].fromB, l--, a < d.from && (d = s.lineAt(a, N.ByPosNoHeight, i, 0, 0));
      f += d.from - a, a = d.from;
      let p = Vl.build(i.setDoc(o), e, f, u);
      s = hs(s, s.replace(a, h, p));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new Le(0, 0);
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
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new El(Qi.of(e.slice(0, t)), o, Qi.of(e.slice(i)));
  }
};
c(Qi, "HeightMap");
let ve = Qi;
function hs(r, e) {
  return r == e ? r : (r.constructor != e.constructor && (Xi = !0), e);
}
c(hs, "replace");
ve.prototype.size = 1;
const uf = class uf extends ve {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, n) {
    return new Ke(n, this.length, i, this.height, this.deco || 0);
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
c(uf, "HeightMapBlock");
let fs = uf;
const _r = class _r extends fs {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, n) {
    return new Ke(n, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof _r || n instanceof xt && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof xt ? n = new _r(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : ve.of(i);
  }
  updateHeight(e, t = 0, i = !1, n) {
    return n && n.from <= t && n.more ? this.setHeight(n.heights[n.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
};
c(_r, "HeightMapText");
let Le = _r;
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
      let h = n + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), f = t.doc.lineAt(h), u = l + f.length * a, d = Math.max(i, e - u / 2);
      return new Ke(f.from, f.length, d, u, 0);
    } else {
      let h = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))), { from: f, length: u } = t.doc.line(s + h);
      return new Ke(f, u, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, n, s) {
    if (t == N.ByHeight)
      return this.blockAt(e, i, n, s);
    if (t == N.ByPosNoHeight) {
      let { from: O, to: p } = i.doc.lineAt(e);
      return new Ke(O, p - O, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s), h = i.doc.lineAt(e), f = l + h.length * a, u = h.number - o, d = n + l * u + a * (h.from - s - u);
    return new Ke(h.from, h.length, Math.max(n, Math.min(d, n + this.height - f)), f, 0);
  }
  forEachLine(e, t, i, n, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, s);
    for (let f = e, u = n; f <= t; ) {
      let d = i.doc.lineAt(f);
      if (f == e) {
        let p = d.number - l;
        u += a * p + h * (e - s - p);
      }
      let O = a + h * d.length;
      o(new Ke(d.from, d.length, u, O, 0)), u += O, f = d.to + 1;
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
        a == -1 ? a = u : Math.abs(u - a) >= zn && (a = -2);
        let d = new Le(f, u);
        d.outdated = !1, o.push(d), l += f + 1;
      }
      l <= s && o.push(null, new ke(s - l).updateHeight(e, l));
      let h = ve.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= zn || Math.abs(a - this.heightMetrics(e, t).perLine) >= zn) && (Xi = !0), hs(this, h);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
};
c(ke, "HeightMapGap");
let xt = ke;
const df = class df extends ve {
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
    if (e > 0 && au(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), au(s, l);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? ve.of(this.break ? [e, null, t] : [e, t]) : (this.left = hs(this.left, e), this.right = hs(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = !1, n) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return n && n.from <= t + s.length && n.more ? a = s = s.updateHeight(e, t, i, n) : s.updateHeight(e, t, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(e, l, i, n) : o.updateHeight(e, l, i), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
};
c(df, "HeightMapBranch");
let El = df;
function au(r, e) {
  let t, i;
  r[e] == null && (t = r[e - 1]) instanceof xt && (i = r[e + 1]) instanceof xt && r.splice(e - 1, 3, new xt(t.length + 1 + i.length));
}
c(au, "mergeGaps");
const j0 = 5, Js = class Js {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof Le ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Le(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new fs(o, n, i)) : (o || s || n >= j0) && this.addLineDeco(n, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Le(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new xt(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Le)
      return e;
    let t = new Le(0, -1);
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
    this.lineStart > -1 && !(t instanceof Le) && !this.isCovered ? this.nodes.push(new Le(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let n of this.nodes)
      n instanceof Le && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, t, i, n) {
    let s = new Js(i, e);
    return re.spans(t, i, n, s, 0), s.finish(i);
  }
};
c(Js, "NodeBuilder");
let Vl = Js;
function q0(r, e, t) {
  let i = new Ul();
  return re.compare(r, e, t, i, 0), i.changes;
}
c(q0, "heightRelevantDecoChanges");
const Of = class Of {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, n) {
    (e < t || i && i.heightRelevant || n && n.heightRelevant) && Dn(e, t, this.changes, 5);
  }
};
c(Of, "DecorationComparator");
let Ul = Of;
function D0(r, e) {
  let t = r.getBoundingClientRect(), i = r.ownerDocument, n = i.defaultView || window, s = Math.max(0, t.left), o = Math.min(n.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(n.innerHeight, t.bottom);
  for (let h = r.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let f = h, u = window.getComputedStyle(f);
      if ((f.scrollHeight > f.clientHeight || f.scrollWidth > f.clientWidth) && u.overflow != "visible") {
        let d = f.getBoundingClientRect();
        s = Math.max(s, d.left), o = Math.min(o, d.right), l = Math.max(l, d.top), a = Math.min(h == r.parentNode ? n.innerHeight : a, d.bottom);
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
c(D0, "visiblePixelRange");
function B0(r) {
  let e = r.getBoundingClientRect(), t = r.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
c(B0, "inWindow");
function z0(r, e) {
  let t = r.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e)
  };
}
c(z0, "fullPixelRange");
const pf = class pf {
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
    return j.replace({
      widget: new Wl(this.displaySize * (t ? e.scaleY : e.scaleX), t)
    }).range(this.from, this.to);
  }
};
c(pf, "LineGap");
let Qr = pf;
const mf = class mf extends vt {
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
c(mf, "LineGapWidget");
let Wl = mf;
const gf = class gf {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = hu, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = ee.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let t = e.facet(nh).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new _l(t), this.stateDeco = e.facet(tn).filter((i) => typeof i != "function"), this.heightMap = ve.empty().applyChanges(this.stateDeco, X.empty, this.heightOracle.setDoc(e.doc), [new tt(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = j.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
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
    return this.scaler = this.heightMap.height <= 7e6 ? hu : new Xl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(dr(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(tn).filter((f) => typeof f != "function");
    let n = e.changedRanges, s = tt.extendWithRanges(n, q0(i, this.stateDeco, e ? e.changes : Te.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    lu(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || Xi) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(s0) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), n = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? ee.RTL : ee.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, f = 0;
    if (l.width && l.height) {
      let { scaleX: $, scaleY: k } = Fd(t, l);
      ($ > 5e-3 && Math.abs(this.scaleX - $) > 5e-3 || k > 5e-3 && Math.abs(this.scaleY - k) > 5e-3) && (this.scaleX = $, this.scaleY = k, h |= 16, o = a = !0);
    }
    let u = (parseInt(i.paddingTop) || 0) * this.scaleY, d = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != u || this.paddingBottom != d) && (this.paddingTop = u, this.paddingBottom = d, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let O = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != O && (this.scrollAnchorHeight = -1, this.scrollTop = O), this.scrolledToBottom = eO(e.scrollDOM);
    let p = (this.printing ? z0 : D0)(t, this.paddingTop), m = p.top - this.pixelViewport.top, y = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let b = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (b != this.inView && (this.inView = b, b && (a = !0)), !this.inView && !this.scrollTarget && !B0(e.dom))
      return 0;
    let Q = l.width;
    if ((this.contentDOMWidth != Q || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let $ = e.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights($) && (o = !0), o || n.lineWrapping && Math.abs(Q - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: k, charWidth: A, textHeight: Z } = e.docView.measureTextSize();
        o = k > 0 && n.refresh(s, k, A, Z, Q / A, $), o && (e.docView.minWidth = 0, h |= 16);
      }
      m > 0 && y > 0 ? f = Math.max(m, y) : m < 0 && y < 0 && (f = Math.min(m, y)), lu();
      for (let k of this.viewports) {
        let A = k.from == this.viewport.from ? $ : e.docView.measureVisibleLineHeights(k);
        this.heightMap = (o ? ve.empty().applyChanges(this.stateDeco, X.empty, this.heightOracle, [new tt(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Cl(k.from, A));
      }
      Xi && (h |= 2);
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
        let f = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), u = n.lineAt(h, N.ByPos, s, 0, 0), d;
        t.y == "center" ? d = (u.top + u.bottom) / 2 - f / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? d = u.top : d = u.bottom - f, a = new mi(n.lineAt(d - 1e3 / 2, N.ByHeight, s, 0, 0).from, n.lineAt(d + f + 1e3 / 2, N.ByHeight, s, 0, 0).to);
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
      t.touchesRange(n.from, n.to) || i.push(new Qr(t.mapPos(n.from), t.mapPos(n.to), n.size, n.displaySize));
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
    let l = [], a = /* @__PURE__ */ c((f, u, d, O) => {
      if (u - f < s)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let b of m)
        if (b > f && b < u) {
          a(f, b - 10, d, O), a(b + 10, u, d, O);
          return;
        }
      let y = G0(e, (b) => b.from >= d.from && b.to <= d.to && Math.abs(b.from - f) < s && Math.abs(b.to - u) < s && !m.some((Q) => b.from < Q && b.to > Q));
      if (!y) {
        if (u < d.to && t && i && t.visibleRanges.some((x) => x.from <= u && x.to >= u)) {
          let x = t.moveToLineBoundary(R.cursor(u), !1, !0).head;
          x > f && (u = x);
        }
        let b = this.gapSize(d, f, u, O), Q = i || b < 2e6 ? b : 2e6;
        y = new Qr(f, u, b, Q);
      }
      l.push(y);
    }, "addGap"), h = /* @__PURE__ */ c((f) => {
      if (f.length < o || f.type != et.Text)
        return;
      let u = N0(f.from, f.to, this.stateDeco);
      if (u.total < o)
        return;
      let d = this.scrollTarget ? this.scrollTarget.range.head : null, O, p;
      if (i) {
        let m = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, y, b;
        if (d != null) {
          let Q = Zn(u, d), x = ((this.visibleBottom - this.visibleTop) / 2 + m) / f.height;
          y = Q - x, b = Q + x;
        } else
          y = (this.visibleTop - f.top - m) / f.height, b = (this.visibleBottom - f.top + m) / f.height;
        O = An(u, y), p = An(u, b);
      } else {
        let m = u.total * this.heightOracle.charWidth, y = n * this.heightOracle.charWidth, b = 0;
        if (m > 2e6)
          for (let A of e)
            A.from >= f.from && A.from < f.to && A.size != A.displaySize && A.from * this.heightOracle.charWidth + b < this.pixelViewport.left && (b = A.size - A.displaySize);
        let Q = this.pixelViewport.left + b, x = this.pixelViewport.right + b, $, k;
        if (d != null) {
          let A = Zn(u, d), Z = ((x - Q) / 2 + y) / m;
          $ = A - Z, k = A + Z;
        } else
          $ = (Q - y) / m, k = (x + y) / m;
        O = An(u, $), p = An(u, k);
      }
      O > f.from && a(f.from, O, f, u), p < f.to && a(p, f.to, f, u);
    }, "checkLine");
    for (let f of this.viewportLines)
      Array.isArray(f.type) ? f.type.forEach(h) : h(f);
    return l;
  }
  gapSize(e, t, i, n) {
    let s = Zn(n, i) - Zn(n, t);
    return this.heightOracle.lineWrapping ? e.height * s : n.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Qr.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = j.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
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
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || dr(this.heightMap.lineAt(e, N.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || dr(this.heightMap.lineAt(this.scaler.fromDOM(e), N.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return dr(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
};
c(gf, "ViewState");
let cs = gf;
const yf = class yf {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
};
c(yf, "Viewport");
let mi = yf;
function N0(r, e, t) {
  let i = [], n = r, s = 0;
  return re.spans(t, r, e, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), s += o - n), n = l;
    }
  }, 20), n < e && (i.push({ from: n, to: e }), s += e - n), { total: s, ranges: i };
}
c(N0, "lineStructure");
function An({ total: r, ranges: e }, t) {
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
c(An, "findPosition");
function Zn(r, e) {
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
c(Zn, "findFraction");
function G0(r, e) {
  for (let t of r)
    if (e(t))
      return t;
}
c(G0, "find");
const hu = {
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
}, eo = class eo {
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
    return e instanceof eo ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : !1;
  }
};
c(eo, "BigScaler");
let Xl = eo;
function dr(r, e) {
  if (e.scale == 1)
    return r;
  let t = e.toDOM(r.top), i = e.toDOM(r.bottom);
  return new Ke(r.from, r.length, t, i - t, Array.isArray(r._content) ? r._content.map((n) => dr(n, e)) : r._content);
}
c(dr, "scaleBlock");
const Ln = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.join(" "), "combine") }), Yl = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.indexOf(!0) > -1, "combine") }), Il = /* @__PURE__ */ it.newName(), XO = /* @__PURE__ */ it.newName(), YO = /* @__PURE__ */ it.newName(), IO = { "&light": "." + XO, "&dark": "." + YO };
function jl(r, e, t) {
  return new it(e, {
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
c(jl, "buildTheme");
const H0 = /* @__PURE__ */ jl("." + Il, {
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
    insetInlineStart: 0,
    zIndex: 200
  },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    borderRight: "1px solid #ddd"
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
}, IO), F0 = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ao = T.ie && T.ie_version <= 11, bf = class bf {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new yl(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (T.ie && T.ie_version <= 11 || T.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(T.chrome && T.chrome_version < 126) && (this.editContext = new Dl(e), e.state.facet(ht) && (e.contentDOM.editContext = this.editContext.editContext)), Ao && (this.onCharData = (t) => {
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
    if (i.state.facet(ht) ? i.root.activeElement != this.dom : !qn(this.dom, n))
      return;
    let s = n.anchorNode && i.docView.nearest(n.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    (T.ie && T.ie_version <= 11 || T.android && T.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && gr(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, t = Hr(e.root);
    if (!t)
      return !1;
    let i = T.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && K0(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = qn(this.dom, i);
    return n && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Ig(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, F0), Ao && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Ao && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && $i(this.dom, s.key, s.keyCode));
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
    let { from: e, to: t, typeOver: i } = this.processRecords(), n = this.selectionChanged && qn(this.dom, this.selectionRange);
    if (e < 0 && !n)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new Al(this.view, e, t, i);
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
    let i = this.view.state, n = ZO(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), n;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = fu(t, e.previousSibling || e.target.previousSibling, -1), n = fu(t, e.nextSibling || e.target.nextSibling, 1);
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
c(bf, "DOMObserver");
let ql = bf;
function fu(r, e, t) {
  for (; e; ) {
    let i = z.get(e);
    if (i && i.parent == r)
      return i;
    let n = e.parentNode;
    e = n != r.dom ? n : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
c(fu, "findChild");
function cu(r, e) {
  let t = e.startContainer, i = e.startOffset, n = e.endContainer, s = e.endOffset, o = r.docView.domAtPos(r.state.selection.main.anchor);
  return gr(o.node, o.offset, n, s) && ([t, i, n, s] = [n, s, t, i]), { anchorNode: t, anchorOffset: i, focusNode: n, focusOffset: s };
}
c(cu, "buildSelectionRangeFromRange");
function K0(r, e) {
  if (e.getComposedRanges) {
    let n = e.getComposedRanges(r.root)[0];
    if (n)
      return cu(r, n);
  }
  let t = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), t = n.getTargetRanges()[0];
  }
  return c(i, "read"), r.contentDOM.addEventListener("beforeinput", i, !0), r.dom.ownerDocument.execCommand("indent"), r.contentDOM.removeEventListener("beforeinput", i, !0), t ? cu(r, t) : null;
}
c(K0, "safariSelectionRangeHack");
const Sf = class Sf {
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
      let h = { from: l, to: a, insert: X.of(i.text.split(`
`)) };
      if (h.from == this.from && s < this.from ? h.from = s : h.to == this.to && s > this.to && (h.to = s), h.from == h.to && !h.insert.length) {
        let f = R.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        f.main.eq(n) || e.dispatch({ selection: f, userEvent: "select" });
        return;
      }
      if ((T.mac || T.android) && h.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: l, to: a, insert: X.of([i.text.replace(".", " ")]) }), this.pendingContextChange = h, !e.state.readOnly) {
        let f = this.to - this.from + (h.to - h.from + h.insert.length);
        lh(e, h, R.single(this.toEditorPos(i.selectionStart, f), this.toEditorPos(i.selectionEnd, f)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
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
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(s.rangeStart), h = this.toEditorPos(s.rangeEnd);
          if (a < h) {
            let f = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            n.push(j.mark({ attributes: { style: f } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: PO.of(j.set(n)) });
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
      let n = Hr(i.root);
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
c(Sf, "EditContextManager");
let Dl = Sf;
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((n) => n.forEach((s) => i(s, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Yg(e.parent) || document, this.viewState = new cs(e.state || K.create(e)), e.scrollTo && e.scrollTo.is($n) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(pi).map((n) => new Sr(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new ql(this), this.inputState = new Zl(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ls(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
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
    for (let d of e) {
      if (d.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = d.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((d) => d.annotation(VO)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = UO(s, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, f = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), f = this.observer.readChange(), (f && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (f = null)) : this.observer.clear(), s.facet(K.phrases) != this.state.facet(K.phrases))
      return this.setState(s);
    n = rn.create(this, s, e), n.flags |= l;
    let u = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let d of e) {
        if (u && (u = u.map(d.changes)), d.scrollIntoView) {
          let { main: O } = d.state.selection;
          u = new br(O.empty ? O : R.cursor(O.head, O.head > O.anchor ? -1 : 1));
        }
        for (let O of d.effects)
          O.is($n) && (u = O.value.clip(this.state));
      }
      this.viewState.update(n, u), this.bidiCache = us.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), t = this.docView.update(n), this.state.facet(cr) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((d) => d.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Ln) != n.state.facet(Ln) && (this.viewState.mustMeasureContent = !0), (t || i || u || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !n.empty)
      for (let d of this.state.facet($l))
        try {
          d(n);
        } catch (O) {
          $e(this.state, O, "update listener");
        }
    (a || f) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), f && !ZO(this, f) && h.force && $i(this.contentDOM, h.key, h.keyCode);
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
      this.viewState = new cs(e), this.plugins = e.facet(pi).map((i) => new Sr(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new ls(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
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
          n.push(new Sr(s));
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
          $e(this.state, i, "doc view update listener");
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
          if (eO(i))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let O = this.viewState.scrollAnchorAt(n);
            s = O.from, o = O.top;
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
        let f = h.map((O) => {
          try {
            return O.read(this);
          } catch (p) {
            return $e(this.state, p), uu;
          }
        }), u = rn.create(this, this.state, []), d = !1;
        u.flags |= a, t ? t.flags |= a : t = u, this.updateState = 2, u.empty || (this.updatePlugins(u), this.inputState.update(u), this.updateAttrs(), d = this.docView.update(u), d && this.docViewUpdate());
        for (let O = 0; O < h.length; O++)
          if (f[O] != uu)
            try {
              let p = h[O];
              p.write && p.write(f[O], this);
            } catch (p) {
              $e(this.state, p);
            }
        if (d && this.docView.updateSelection(!0), !u.viewportChanged && this.measureRequests.length == 0) {
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
      for (let l of this.state.facet($l))
        l(t);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return Il + " " + (this.state.facet(Yl) ? YO : XO) + " " + this.state.facet(Ln);
  }
  updateAttrs() {
    let e = du(this, kO, {
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
    this.state.readOnly && (t["aria-readonly"] = "true"), du(this, nh, t);
    let i = this.observer.ignore(() => {
      let n = xl(this.contentDOM, this.contentAttrs, t), s = xl(this.dom, this.editorAttrs, e);
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
    this.styleModules = this.state.facet(cr);
    let e = this.state.facet(Cr.cspNonce);
    it.mount(this.root, this.styleModules.concat(H0).reverse(), e ? { nonce: e } : void 0);
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
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) at the given
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
    return To(this, e, Hc(this, e, t, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, t) {
    return To(this, e, Hc(this, e, t, (i) => Q0(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), n = this.textDirectionAt(e.from), s = i[t ? i.length - 1 : 0];
    return R.cursor(s.side(t, n) + e.from, s.forward(!t, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, t, i = !0) {
    return S0(this, e, t, i);
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
    return To(this, e, w0(this, e, t, i));
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
    return this.readMeasured(), AO(this, e, t);
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
    let n = this.state.doc.lineAt(e), s = this.bidiSpans(n), o = s[Je.find(s, e - n.from, -1, t)];
    return pn(i, o.dir == ee.LTR == t > 0);
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
    return !this.state.facet(wO) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > J0)
      return OO(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || dO(s.isolates, i = Dc(this, e))))
        return s.order;
    i || (i = Dc(this, e));
    let n = i0(e.text, t, i);
    return this.bidiCache.push(new us(e.from, e.to, t, i, !0, n)), n;
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
      Kd(this.contentDOM), this.docView.updateSelection();
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
    return $n.of(new br(typeof e == "number" ? R.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
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
    return $n.of(new br(R.cursor(i.from), "start", "start", i.top - e, t, !0));
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
    return je.define(() => ({}), { eventHandlers: e });
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
    return je.define(() => ({}), { eventObservers: e });
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
    let i = it.newName(), n = [Ln.of(i), cr.of(jl(`.${i}`, e))];
    return t && t.dark && n.push(Yl.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return hi.lowest(cr.of(jl("." + Il, e, IO)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), n = i && z.get(i) || z.get(e);
    return ((t = n == null ? void 0 : n.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
};
c(Cr, "EditorView");
let _ = Cr;
_.styleModule = cr;
_.inputHandler = SO;
_.clipboardInputFilter = ih;
_.clipboardOutputFilter = rh;
_.scrollHandler = xO;
_.focusChangeEffect = QO;
_.perLineTextDirection = wO;
_.exceptionSink = bO;
_.updateListener = $l;
_.editable = ht;
_.mouseSelectionStyle = yO;
_.dragMovesSelection = gO;
_.clickAddsSelectionRange = mO;
_.decorations = tn;
_.outerDecorations = RO;
_.atomicRanges = sh;
_.bidiIsolatedRanges = $O;
_.scrollMargins = vO;
_.darkTheme = Yl;
_.cspNonce = /* @__PURE__ */ M.define({ combine: /* @__PURE__ */ c((r) => r.length ? r[0] : "", "combine") });
_.contentAttributes = nh;
_.editorAttributes = kO;
_.lineWrapping = /* @__PURE__ */ _.contentAttributes.of({ class: "cm-lineWrapping" });
_.announce = /* @__PURE__ */ I.define();
const J0 = 4096, uu = {}, to = class to {
  constructor(e, t, i, n, s, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = n, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh))
      return e;
    let i = [], n = e.length ? e[e.length - 1].dir : ee.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == n && !t.touchesRange(o.from, o.to) && i.push(new to(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
};
c(to, "CachedOrder");
let us = to;
function du(r, e, t) {
  for (let i = r.state.facet(e), n = i.length - 1; n >= 0; n--) {
    let s = i[n], o = typeof s == "function" ? s(r) : s;
    o && wl(o, t);
  }
  return t;
}
c(du, "attrsFromFacet");
const ey = T.mac ? "mac" : T.windows ? "win" : T.linux ? "linux" : "key";
function ty(r, e) {
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
c(ty, "normalizeKeyName");
function Mn(r, e, t) {
  return e.altKey && (r = "Alt-" + r), e.ctrlKey && (r = "Ctrl-" + r), e.metaKey && (r = "Meta-" + r), t !== !1 && e.shiftKey && (r = "Shift-" + r), r;
}
c(Mn, "modifiers");
const iy = /* @__PURE__ */ hi.default(/* @__PURE__ */ _.domEventHandlers({
  keydown(r, e) {
    return oy(ry(e.state), r, e, "editor");
  }
})), mn = /* @__PURE__ */ M.define({ enables: iy }), Ou = /* @__PURE__ */ new WeakMap();
function ry(r) {
  let e = r.facet(mn), t = Ou.get(e);
  return t || Ou.set(e, t = sy(e.reduce((i, n) => i.concat(n), []))), t;
}
c(ry, "getKeymap");
let bt = null;
const ny = 4e3;
function sy(r, e = ey) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ c((o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, "checkPrefix"), s = /* @__PURE__ */ c((o, l, a, h, f) => {
    var u, d;
    let O = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((b) => ty(b, e));
    for (let b = 1; b < p.length; b++) {
      let Q = p.slice(0, b).join(" ");
      n(Q, !0), O[Q] || (O[Q] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(x) => {
          let $ = bt = { view: x, prefix: Q, scope: o };
          return setTimeout(() => {
            bt == $ && (bt = null);
          }, ny), !0;
        }]
      });
    }
    let m = p.join(" ");
    n(m, !1);
    let y = O[m] || (O[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((d = (u = O._any) === null || u === void 0 ? void 0 : u.run) === null || d === void 0 ? void 0 : d.slice()) || []
    });
    a && y.run.push(a), h && (y.preventDefault = !0), f && (y.stopPropagation = !0);
  }, "add");
  for (let o of r) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let f = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        f._any || (f._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: u } = o;
        for (let d in f)
          f[d].run.push((O) => u(O, Bl));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        s(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
c(sy, "buildKeymap");
let Bl = null;
function oy(r, e, t, i) {
  Bl = e;
  let n = Vg(e), s = Wt(n, 0), o = ui(s) == n.length && n != " ", l = "", a = !1, h = !1, f = !1;
  bt && bt.view == t && bt.scope == i && (l = bt.prefix + " ", MO.indexOf(e.keyCode) < 0 && (h = !0, bt = null));
  let u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ c((y) => {
    if (y) {
      for (let b of y.run)
        if (!u.has(b) && (u.add(b), b(t)))
          return y.stopPropagation && (f = !0), !0;
      y.preventDefault && (y.stopPropagation && (f = !0), h = !0);
    }
    return !1;
  }, "runFor"), O = r[i], p, m;
  return O && (d(O[l + Mn(n, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(T.windows && e.ctrlKey && e.altKey) && (p = Rt[e.keyCode]) && p != n ? (d(O[l + Mn(p, e, !0)]) || e.shiftKey && (m = Gr[e.keyCode]) != n && m != p && d(O[l + Mn(m, e, !1)])) && (a = !0) : o && e.shiftKey && d(O[l + Mn(n, e, !0)]) && (a = !0), !a && d(O._any) && (a = !0)), h && (a = !0), a && f && e.stopPropagation(), Bl = null, a;
}
c(oy, "runHandlers");
const jO = /* @__PURE__ */ I.define({
  map(r, e) {
    return r == null ? null : e.mapPos(r);
  }
}), Or = /* @__PURE__ */ Ye.define({
  create() {
    return null;
  },
  update(r, e) {
    return r != null && (r = e.changes.mapPos(r)), e.effects.reduce((t, i) => i.is(jO) ? i.value : t, r);
  }
}), ly = /* @__PURE__ */ je.fromClass(class {
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
    this.view.state.field(Or) != r && this.view.dispatch({ effects: jO.of(r) });
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
function ay() {
  return [Or, ly];
}
c(ay, "dropCursor");
function pu(r, e, t, i, n) {
  e.lastIndex = 0;
  for (let s = r.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak)
      for (; l = e.exec(s.value); )
        n(o + l.index, l);
}
c(pu, "iterMatches");
function hy(r, e) {
  let t = r.visibleRanges;
  if (t.length == 1 && t[0].from == r.viewport.from && t[0].to == r.viewport.to)
    return t;
  let i = [];
  for (let { from: n, to: s } of t)
    n = Math.max(r.state.doc.lineAt(n).from, n - e), s = Math.min(r.state.doc.lineAt(s).to, s + e), i.length && i[i.length - 1].to >= n ? i[i.length - 1].to = s : i.push({ from: n, to: s });
  return i;
}
c(hy, "matchRanges");
const Qf = class Qf {
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
    let t = new Ui(), i = t.add.bind(t);
    for (let { from: n, to: s } of hy(e, this.maxLength))
      pu(e.state.doc, this.regexp, n, s, (o, l) => this.addMatch(l, e, o, i));
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
        let d = [], O, p = /* @__PURE__ */ c((m, y, b) => d.push(b.range(m, y)), "add");
        if (a == h)
          for (this.regexp.lastIndex = f - a.from; (O = this.regexp.exec(a.text)) && O.index < u - a.from; )
            this.addMatch(O, e, O.index + a.from, p);
        else
          pu(e.state.doc, this.regexp, f, u, (m, y) => this.addMatch(y, e, m, p));
        t = t.update({ filterFrom: f, filterTo: u, filter: /* @__PURE__ */ c((m, y) => m < f || y > u, "filter"), add: d });
      }
    }
    return t;
  }
};
c(Qf, "MatchDecorator");
let zl = Qf;
const wf = class wf extends vt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? Wi(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), n = pn(t[0], i.direction != "rtl"), s = parseInt(i.lineHeight);
    return n.bottom - n.top > s * 1.5 ? { left: n.left, right: n.right, top: n.top, bottom: n.top + s } : n;
  }
  ignoreEvent() {
    return !1;
  }
};
c(wf, "Placeholder");
let Nl = wf;
function fy(r) {
  let e = je.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = r ? j.set([j.widget({ widget: new Nl(r), side: 1 }).range(0)]) : j.none;
    }
    get decorations() {
      return this.view.state.doc.length ? j.none : this.placeholder;
    }
  }, { decorations: /* @__PURE__ */ c((t) => t.decorations, "decorations") });
  return typeof r == "string" ? [
    e,
    _.contentAttributes.of({ "aria-placeholder": r })
  ] : e;
}
c(fy, "placeholder");
const nr = "-10000px", xf = class xf {
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
          let d = this.tooltips[u];
          d && d.create == h.create && (f = u);
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
c(xf, "TooltipViewManager");
let Gl = xf;
function cy(r) {
  let e = r.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
c(cy, "windowSpace");
const Zo = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => {
    var e, t, i;
    return {
      position: T.ios ? "absolute" : ((e = r.find((n) => n.position)) === null || e === void 0 ? void 0 : e.position) || "fixed",
      parent: ((t = r.find((n) => n.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
      tooltipSpace: ((i = r.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || cy
    };
  }, "combine")
}), mu = /* @__PURE__ */ new WeakMap(), qO = /* @__PURE__ */ je.fromClass(class {
  constructor(r) {
    this.view = r, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = r.state.facet(Zo);
    this.position = e.position, this.parent = e.parent, this.classes = r.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Gl(r, DO, (t, i) => this.createTooltip(t, i), (t) => {
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
    let t = e || r.geometryChanged, i = r.state.facet(Zo);
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
    return t.dom.style.position = this.position, t.dom.style.top = nr, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
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
      if (T.gecko)
        t = s.offsetParent != this.container.ownerDocument.body;
      else if (s.style.top == nr && s.style.left == "0px") {
        let o = s.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let s = this.parent.getBoundingClientRect();
        s.width && s.height && (r = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
      } else
        ({ scaleX: r, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = oh(this.view);
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
      space: this.view.state.facet(Zo).tooltipSpace(this.view),
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
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: f } = h, u = r.pos[l], d = r.size[l];
      if (!u || a.clip !== !1 && (u.bottom <= Math.max(t.top, i.top) || u.top >= Math.min(t.bottom, i.bottom) || u.right < Math.max(t.left, i.left) - 0.1 || u.left > Math.min(t.right, i.right) + 0.1)) {
        f.style.top = nr;
        continue;
      }
      let O = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = O ? 7 : 0, m = d.right - d.left, y = (e = mu.get(h)) !== null && e !== void 0 ? e : d.bottom - d.top, b = h.offset || dy, Q = this.view.textDirection == ee.LTR, x = d.width > i.right - i.left ? Q ? i.left : i.right - d.width : Q ? Math.max(i.left, Math.min(u.left - (O ? 14 : 0) + b.x, i.right - m)) : Math.min(Math.max(i.left, u.left - m + (O ? 14 : 0) - b.x), i.right - m), $ = this.above[l];
      !a.strictSide && ($ ? u.top - y - p - b.y < i.top : u.bottom + y + p + b.y > i.bottom) && $ == i.bottom - u.bottom > u.top - i.top && ($ = this.above[l] = !$);
      let k = ($ ? u.top - i.top : i.bottom - u.bottom) - p;
      if (k < y && h.resize !== !1) {
        if (k < this.view.defaultLineHeight) {
          f.style.top = nr;
          continue;
        }
        mu.set(h, y), f.style.height = (y = k) / s + "px";
      } else f.style.height && (f.style.height = "");
      let A = $ ? u.top - y - p - b.y : u.bottom + p + b.y, Z = x + m;
      if (h.overlap !== !0)
        for (let Y of o)
          Y.left < Z && Y.right > x && Y.top < A + y && Y.bottom > A && (A = $ ? Y.top - y - 2 - p : Y.bottom + p + 2);
      if (this.position == "absolute" ? (f.style.top = (A - r.parent.top) / s + "px", gu(f, (x - r.parent.left) / n)) : (f.style.top = A / s + "px", gu(f, x / n)), O) {
        let Y = u.left + (Q ? b.x : -b.x) - (x + 14 - 7);
        O.style.left = Y / n + "px";
      }
      h.overlap !== !0 && o.push({ left: x, top: A, right: Z, bottom: A + y }), f.classList.toggle("cm-tooltip-above", $), f.classList.toggle("cm-tooltip-below", !$), h.positioned && h.positioned(r.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let r of this.manager.tooltipViews)
        r.dom.style.top = nr;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function gu(r, e) {
  let t = parseInt(r.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (r.style.left = e + "px");
}
c(gu, "setLeftStyle");
const uy = /* @__PURE__ */ _.baseTheme({
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
    width: `${7 * 2}px`,
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
}), dy = { x: 0, y: 0 }, DO = /* @__PURE__ */ M.define({
  enables: [qO, uy]
});
function BO(r, e) {
  let t = r.plugin(qO);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
c(BO, "getTooltip");
const Pf = class Pf extends ut {
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
c(Pf, "GutterMarker");
let Zt = Pf;
Zt.prototype.elementClass = "";
Zt.prototype.toDOM = void 0;
Zt.prototype.mapMode = ue.TrackBefore;
Zt.prototype.startSide = Zt.prototype.endSide = -1;
Zt.prototype.point = !0;
const zO = 1024;
let Oy = 0;
const kf = class kf {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
};
c(kf, "Range");
let be = kf;
const Rf = class Rf {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = Oy++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
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
c(Rf, "NodeProp");
let C = Rf;
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
const $f = class $f {
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
c($f, "MountedTree");
let si = $f;
const py = /* @__PURE__ */ Object.create(null), io = class io {
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
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : py, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), n = new io(e.name || "", t, e.id, i);
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
c(io, "NodeType");
let te = io;
te.none = new te(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const ro = class ro {
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
        o && (n || (n = Object.assign({}, i.props)), n[o[0].id] = o[1]);
      }
      t.push(n ? new te(i.name, n, i.id, i.flags) : i);
    }
    return new ro(t);
  }
};
c(ro, "NodeSet");
let Yi = ro;
const _n = /* @__PURE__ */ new WeakMap(), yu = /* @__PURE__ */ new WeakMap();
var B;
(function(r) {
  r[r.ExcludeBuffers = 1] = "ExcludeBuffers", r[r.IncludeAnonymous = 2] = "IncludeAnonymous", r[r.IgnoreMounts = 4] = "IgnoreMounts", r[r.IgnoreOverlays = 8] = "IgnoreOverlays";
})(B || (B = {}));
const Er = class Er {
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
    let e = si.get(this);
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
    let n = _n.get(this) || this.topNode, s = new Ii(n);
    return s.moveTo(e, t), _n.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Se(this, 0, 0, null);
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
    let i = nn(_n.get(this) || this.topNode, e, t, !1);
    return _n.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, t = 0) {
    let i = nn(yu.get(this) || this.topNode, e, t, !0);
    return yu.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, t = 0) {
    return my(this, e, t);
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
    return this.children.length <= 8 ? this : hh(te.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, n) => new Er(this.type, t, i, n, this.propValues), e.makeTree || ((t, i, n) => new Er(te.none, t, i, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return gy(e);
  }
};
c(Er, "Tree");
let V = Er;
V.empty = new V(te.none, [], [], 0);
const no = class no {
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
    return new no(this.buffer, this.index);
  }
};
c(no, "FlatBufferCursor");
let Hl = no;
const so = class so {
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
    for (let a = e; a != t && !(NO(s, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
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
    return new so(s, o, this.set);
  }
};
c(so, "TreeBuffer");
let Lt = so;
function NO(r, e, t, i) {
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
c(NO, "checkSide");
function nn(r, e, t, i) {
  for (var n; r.from == r.to || (t < 1 ? r.from >= e : r.from > e) || (t > -1 ? r.to <= e : r.to < e); ) {
    let o = !i && r instanceof Se && r.index < 0 ? null : r.parent;
    if (!o)
      return r;
    r = o;
  }
  let s = i ? 0 : B.IgnoreOverlays;
  if (i)
    for (let o = r, l = o.parent; l; o = l, l = o.parent)
      o instanceof Se && o.index < 0 && ((n = l.enter(e, t, s)) === null || n === void 0 ? void 0 : n.from) != o.from && (r = l);
  for (; ; ) {
    let o = r.enter(e, t, s);
    if (!o)
      return r;
    r = o;
  }
}
c(nn, "resolveNode");
const vf = class vf {
  cursor(e = 0) {
    return new Ii(this, e);
  }
  getChild(e, t = null, i = null) {
    let n = bu(this, e, t, i);
    return n.length ? n[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return bu(this, e, t, i);
  }
  resolve(e, t = 0) {
    return nn(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return nn(this, e, t, !0);
  }
  matchContext(e) {
    return Fl(this.parent, e);
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
c(vf, "BaseNode");
let ds = vf;
const wi = class wi extends ds {
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
        if (NO(n, i, u, u + f.length)) {
          if (f instanceof Lt) {
            if (s & B.ExcludeBuffers)
              continue;
            let d = f.findChild(0, f.buffer.length, t, i - u, n);
            if (d > -1)
              return new oi(new Kl(o, f, e, u), null, d);
          } else if (s & B.IncludeAnonymous || !f.type.isAnonymous || ah(f)) {
            let d;
            if (!(s & B.IgnoreMounts) && (d = si.get(f)) && !d.overlay)
              return new wi(d.tree, u, e, o);
            let O = new wi(f, u, e, o);
            return s & B.IncludeAnonymous || !O.type.isAnonymous ? O : O.nextChild(t < 0 ? f.children.length - 1 : 0, t, i, n);
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
    if (!(i & B.IgnoreOverlays) && (n = si.get(this._tree)) && n.overlay) {
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
let Se = wi;
function bu(r, e, t, i) {
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
c(bu, "getChildren");
function Fl(r, e, t = e.length - 1) {
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
c(Fl, "matchNodeContext");
const Tf = class Tf {
  constructor(e, t, i, n) {
    this.parent = e, this.buffer = t, this.index = i, this.start = n;
  }
};
c(Tf, "BufferContext");
let Kl = Tf;
const Dt = class Dt extends ds {
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
    return s < 0 ? null : new Dt(this.context, this, s);
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
    return s < 0 ? null : new Dt(this.context, this, s);
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
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Dt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Dt(this.context, this._parent, e.findChild(
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
    return new V(this.type, e, t, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
};
c(Dt, "BufferNode");
let oi = Dt;
function GO(r) {
  if (!r.length)
    return null;
  let e = 0, t = r[0];
  for (let s = 1; s < r.length; s++) {
    let o = r[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let i = t instanceof Se && t.index < 0 ? null : t.parent, n = r.slice();
  return i ? n[e] = i : n.splice(e, 1), new Jl(n, t);
}
c(GO, "iterStack");
const Af = class Af {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return GO(this.heads);
  }
};
c(Af, "StackIterator");
let Jl = Af;
function my(r, e, t) {
  let i = r.resolveInner(e, t), n = null;
  for (let s = i instanceof Se ? i : i.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (n || (n = [i])).push(o.resolve(e, t)), s = o;
    } else {
      let o = si.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Se(o.tree, o.overlay[0].from + s.from, -1, s);
        (n || (n = [i])).push(nn(l, e, t, !1));
      }
    }
  return n ? GO(n) : i;
}
c(my, "stackIterator");
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
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Se)
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
    return e ? e instanceof Se ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
          if (this.mode & B.IncludeAnonymous || l instanceof Lt || !l.type.isAnonymous || ah(l))
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
      t = new oi(this.buffer, t, this.stack[n]);
    return this.bufferNode = new oi(this.buffer, t, this.index);
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
      return Fl(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let n = e.length - 1, s = this.stack.length - 1; n >= 0; s--) {
      if (s < 0)
        return Fl(this._tree, e, n);
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
function ah(r) {
  return r.children.some((e) => e instanceof Lt || !e.type.isAnonymous || ah(e));
}
c(ah, "hasChild");
function gy(r) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: n = zO, reused: s = [], minRepeatType: o = i.types.length } = r, l = Array.isArray(t) ? new Hl(t, t.length) : t, a = i.types, h = 0, f = 0;
  function u(k, A, Z, Y, D, F) {
    let { id: U, start: E, end: G, size: H } = l, ne = f, Ot = h;
    for (; H < 0; )
      if (l.next(), H == -1) {
        let ot = s[U];
        Z.push(ot), Y.push(E - k);
        return;
      } else if (H == -3) {
        h = U;
        return;
      } else if (H == -4) {
        f = U;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${H}`);
    let ir = a[U], Qn, Ct, Rc = E - k;
    if (G - E <= n && (Ct = y(l.pos - A, D))) {
      let ot = new Uint16Array(Ct.size - Ct.skip), Ae = l.pos - Ct.size, Be = ot.length;
      for (; l.pos > Ae; )
        Be = b(Ct.start, ot, Be);
      Qn = new Lt(ot, G - Ct.start, i), Rc = Ct.start - k;
    } else {
      let ot = l.pos - H;
      l.next();
      let Ae = [], Be = [], Et = U >= o ? U : -1, fi = 0, wn = G;
      for (; l.pos > ot; )
        Et >= 0 && l.id == Et && l.size >= 0 ? (l.end <= wn - n && (p(Ae, Be, E, fi, l.end, wn, Et, ne, Ot), fi = Ae.length, wn = l.end), l.next()) : F > 2500 ? d(E, ot, Ae, Be) : u(E, ot, Ae, Be, Et, F + 1);
      if (Et >= 0 && fi > 0 && fi < Ae.length && p(Ae, Be, E, fi, E, wn, Et, ne, Ot), Ae.reverse(), Be.reverse(), Et > -1 && fi > 0) {
        let $c = O(ir, Ot);
        Qn = hh(ir, Ae, Be, 0, Ae.length, 0, G - E, $c, $c);
      } else
        Qn = m(ir, Ae, Be, G - E, ne - G, Ot);
    }
    Z.push(Qn), Y.push(Rc);
  }
  c(u, "takeNode");
  function d(k, A, Z, Y) {
    let D = [], F = 0, U = -1;
    for (; l.pos > A; ) {
      let { id: E, start: G, end: H, size: ne } = l;
      if (ne > 4)
        l.next();
      else {
        if (U > -1 && G < U)
          break;
        U < 0 && (U = H - n), D.push(E, G, H), F++, l.next();
      }
    }
    if (F) {
      let E = new Uint16Array(F * 4), G = D[D.length - 2];
      for (let H = D.length - 3, ne = 0; H >= 0; H -= 3)
        E[ne++] = D[H], E[ne++] = D[H + 1] - G, E[ne++] = D[H + 2] - G, E[ne++] = ne;
      Z.push(new Lt(E, D[2] - G, i)), Y.push(G - k);
    }
  }
  c(d, "takeFlatNode");
  function O(k, A) {
    return (Z, Y, D) => {
      let F = 0, U = Z.length - 1, E, G;
      if (U >= 0 && (E = Z[U]) instanceof V) {
        if (!U && E.type == k && E.length == D)
          return E;
        (G = E.prop(C.lookAhead)) && (F = Y[U] + E.length + G);
      }
      return m(k, Z, Y, D, F, A);
    };
  }
  c(O, "makeBalanced");
  function p(k, A, Z, Y, D, F, U, E, G) {
    let H = [], ne = [];
    for (; k.length > Y; )
      H.push(k.pop()), ne.push(A.pop() + Z - D);
    k.push(m(i.types[U], H, ne, F - D, E - F, G)), A.push(D - Z);
  }
  c(p, "makeRepeatLeaf");
  function m(k, A, Z, Y, D, F, U) {
    if (F) {
      let E = [C.contextHash, F];
      U = U ? [E].concat(U) : [E];
    }
    if (D > 25) {
      let E = [C.lookAhead, D];
      U = U ? [E].concat(U) : [E];
    }
    return new V(k, A, Z, Y, U);
  }
  c(m, "makeTree");
  function y(k, A) {
    let Z = l.fork(), Y = 0, D = 0, F = 0, U = Z.end - n, E = { size: 0, start: 0, skip: 0 };
    e: for (let G = Z.pos - k; Z.pos > G; ) {
      let H = Z.size;
      if (Z.id == A && H >= 0) {
        E.size = Y, E.start = D, E.skip = F, F += 4, Y += 4, Z.next();
        continue;
      }
      let ne = Z.pos - H;
      if (H < 0 || ne < G || Z.start < U)
        break;
      let Ot = Z.id >= o ? 4 : 0, ir = Z.start;
      for (Z.next(); Z.pos > ne; ) {
        if (Z.size < 0)
          if (Z.size == -3)
            Ot += 4;
          else
            break e;
        else Z.id >= o && (Ot += 4);
        Z.next();
      }
      D = ir, Y += H, F += Ot;
    }
    return (A < 0 || Y == k) && (E.size = Y, E.start = D, E.skip = F), E.size > 4 ? E : void 0;
  }
  c(y, "findBufferSize");
  function b(k, A, Z) {
    let { id: Y, start: D, end: F, size: U } = l;
    if (l.next(), U >= 0 && Y < o) {
      let E = Z;
      if (U > 4) {
        let G = l.pos - (U - 4);
        for (; l.pos > G; )
          Z = b(k, A, Z);
      }
      A[--Z] = E, A[--Z] = F - k, A[--Z] = D - k, A[--Z] = Y;
    } else U == -3 ? h = Y : U == -4 && (f = Y);
    return Z;
  }
  c(b, "copyToBuffer");
  let Q = [], x = [];
  for (; l.pos > 0; )
    u(r.start || 0, r.bufferStart || 0, Q, x, -1, 0);
  let $ = (e = r.length) !== null && e !== void 0 ? e : Q.length ? x[0] + Q[0].length : 0;
  return new V(a[r.topID], Q.reverse(), x.reverse(), $);
}
c(gy, "buildTree");
const Su = /* @__PURE__ */ new WeakMap();
function Nn(r, e) {
  if (!r.isAnonymous || e instanceof Lt || e.type != r)
    return 1;
  let t = Su.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != r || !(i instanceof V)) {
        t = 1;
        break;
      }
      t += Nn(r, i);
    }
    Su.set(e, t);
  }
  return t;
}
c(Nn, "nodeSize");
function hh(r, e, t, i, n, s, o, l, a) {
  let h = 0;
  for (let p = i; p < n; p++)
    h += Nn(r, e[p]);
  let f = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), u = [], d = [];
  function O(p, m, y, b, Q) {
    for (let x = y; x < b; ) {
      let $ = x, k = m[x], A = Nn(r, p[x]);
      for (x++; x < b; x++) {
        let Z = Nn(r, p[x]);
        if (A + Z >= f)
          break;
        A += Z;
      }
      if (x == $ + 1) {
        if (A > f) {
          let Z = p[$];
          O(Z.children, Z.positions, 0, Z.children.length, m[$] + Q);
          continue;
        }
        u.push(p[$]);
      } else {
        let Z = m[x - 1] + p[x - 1].length - k;
        u.push(hh(r, p, m, $, x, k, Z, null, a));
      }
      d.push(k + Q - s);
    }
  }
  return c(O, "divide"), O(e, t, i, n, 0), (l || a)(u, d, o);
}
c(hh, "balanceRange");
const Lf = class Lf {
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
    e instanceof oi ? this.setBuffer(e.context.buffer, e.index, t) : e instanceof Se && this.map.set(e.tree, t);
  }
  /**
  Retrieve value for this syntax node, if it exists in the map.
  */
  get(e) {
    return e instanceof oi ? this.getBuffer(e.context.buffer, e.index) : e instanceof Se ? this.map.get(e.tree) : void 0;
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
c(Lf, "NodeWeakMap");
let Os = Lf;
const Vr = class Vr {
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
    let n = [new Vr(0, e.length, e, 0, !1, i)];
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
          let d = o;
          if (a >= d.from || u <= d.to || h) {
            let O = Math.max(d.from, a) - h, p = Math.min(d.to, u) - h;
            d = O >= p ? null : new Vr(O, p, d.tree, d.offset + h, l > 0, !!f);
          }
          if (d && n.push(d), o.to > u)
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
c(Vr, "TreeFragment");
let Pt = Vr;
const Mf = class Mf {
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
    return typeof e == "string" && (e = new ea(e)), i = i ? i.length ? i.map((n) => new be(n.from, n.to)) : [new be(0, 0)] : [new be(0, e.length)], this.createParse(e, t || [], i);
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
c(Mf, "Parser");
let ji = Mf;
const _f = class _f {
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
c(_f, "StringInput");
let ea = _f;
function HO(r) {
  return (e, t, i, n) => new ra(e, r, t, i, n);
}
c(HO, "parseMixed");
const Cf = class Cf {
  constructor(e, t, i, n, s) {
    this.parser = e, this.parse = t, this.overlay = i, this.target = n, this.from = s;
  }
};
c(Cf, "InnerParse");
let ps = Cf;
function Qu(r) {
  if (!r.length || r.some((e) => e.from >= e.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(r));
}
c(Qu, "checkRanges");
const Ef = class Ef {
  constructor(e, t, i, n, s, o, l) {
    this.parser = e, this.predicate = t, this.mounts = i, this.index = n, this.start = s, this.target = o, this.prev = l, this.depth = 0, this.ranges = [];
  }
};
c(Ef, "ActiveOverlay");
let ta = Ef;
const ia = new C({ perNode: !0 }), Vf = class Vf {
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
      return this.stoppedAt != null && (i = new V(i.type, i.children, i.positions, i.length, i.propValues.concat([[ia, this.stoppedAt]]))), i;
    }
    let e = this.inner[this.innerDone], t = e.parse.advance();
    if (t) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), e.target.props);
      i[C.mounted.id] = new si(t, e.overlay, e.parser), e.target.props = i;
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
    let e = new Sy(this.fragments), t = null, i = null, n = new Ii(new Se(this.baseTree, this.ranges[0].from, 0, null), B.IncludeAnonymous | B.IgnoreMounts);
    e: for (let s, o; ; ) {
      let l = !0, a;
      if (this.stoppedAt != null && n.from >= this.stoppedAt)
        l = !1;
      else if (e.hasNode(n)) {
        if (t) {
          let h = t.mounts.find((f) => f.frag.from <= n.from && f.frag.to >= n.to && f.mount.overlay);
          if (h)
            for (let f of h.mount.overlay) {
              let u = f.from + h.pos, d = f.to + h.pos;
              u >= n.from && d <= n.to && !t.ranges.some((O) => O.from < d && O.to > u) && t.ranges.push({ from: u, to: d });
            }
        }
        l = !1;
      } else if (i && (o = yy(i.ranges, n.from, n.to)))
        l = o != 2;
      else if (!n.type.isAnonymous && (s = this.nest(n, this.input)) && (n.from < n.to || !s.overlay)) {
        n.tree || by(n);
        let h = e.findMounts(n.from, s.parser);
        if (typeof s.overlay == "function")
          t = new ta(s.parser, s.overlay, h, this.inner.length, n.from, n.tree, t);
        else {
          let f = xu(this.ranges, s.overlay || (n.from < n.to ? [new be(n.from, n.to)] : []));
          f.length && Qu(f), (f.length || !s.overlay) && this.inner.push(new ps(s.parser, f.length ? s.parser.startParse(this.input, Pu(h, f), f) : s.parser.startParse(""), s.overlay ? s.overlay.map((u) => new be(u.from - n.from, u.to - n.from)) : null, n.tree, f.length ? f[0].from : n.from)), s.overlay ? f.length && (i = { ranges: f, depth: 0, prev: i }) : l = !1;
        }
      } else if (t && (a = t.predicate(n)) && (a === !0 && (a = new be(n.from, n.to)), a.from < a.to)) {
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
            let h = xu(this.ranges, t.ranges);
            h.length && (Qu(h), this.inner.splice(t.index, 0, new ps(t.parser, t.parser.startParse(this.input, Pu(t.mounts, h), h), t.ranges.map((f) => new be(f.from - t.start, f.to - t.start)), t.target, h[0].from))), t = t.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
};
c(Vf, "MixedParse");
let ra = Vf;
function yy(r, e, t) {
  for (let i of r) {
    if (i.from >= t)
      break;
    if (i.to > e)
      return i.from <= e && i.to >= t ? 2 : 1;
  }
  return 0;
}
c(yy, "checkCover");
function wu(r, e, t, i, n, s) {
  if (e < t) {
    let o = r.buffer[e + 1];
    i.push(r.slice(e, t, o)), n.push(o - s);
  }
}
c(wu, "sliceBuf");
function by(r) {
  let { node: e } = r, t = [], i = e.context.buffer;
  do
    t.push(r.index), r.parent();
  while (!r.tree);
  let n = r.tree, s = n.children.indexOf(i), o = n.children[s], l = o.buffer, a = [s];
  function h(f, u, d, O, p, m) {
    let y = t[m], b = [], Q = [];
    wu(o, f, y, b, Q, O);
    let x = l[y + 1], $ = l[y + 2];
    a.push(b.length);
    let k = m ? h(y + 4, l[y + 3], o.set.types[l[y]], x, $ - x, m - 1) : e.toTree();
    return b.push(k), Q.push(x - O), wu(o, l[y + 3], u, b, Q, O), new V(d, b, Q, p);
  }
  c(h, "split"), n.children[s] = h(0, l.length, te.none, 0, o.length, t.length - 1);
  for (let f of a) {
    let u = r.tree.children[f], d = r.tree.positions[f];
    r.yield(new Se(u, d + r.from, f, r._tree));
  }
}
c(by, "materialize");
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
        if (t.children.length && t.positions[0] == 0 && t.children[0] instanceof V)
          t = t.children[0];
        else
          break;
      }
    return !1;
  }
};
c(Uf, "StructureCursor");
let ms = Uf;
var Zi;
let Sy = (Zi = class {
  constructor(e) {
    var t;
    if (this.fragments = e, this.curTo = 0, this.fragI = 0, e.length) {
      let i = this.curFrag = e[0];
      this.curTo = (t = i.tree.prop(ia)) !== null && t !== void 0 ? t : i.to, this.inner = new ms(i.tree, -i.offset);
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
      this.curTo = (e = t.tree.prop(ia)) !== null && e !== void 0 ? e : t.to, this.inner = new ms(t.tree, -t.offset);
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
}, c(Zi, "FragmentCursor"), Zi);
function xu(r, e) {
  let t = null, i = e;
  for (let n = 1, s = 0; n < r.length; n++) {
    let o = r[n - 1].to, l = r[n].from;
    for (; s < i.length; s++) {
      let a = i[s];
      if (a.from >= l)
        break;
      a.to <= o || (t || (i = t = e.slice()), a.from < o ? (t[s] = new be(a.from, o), a.to > l && t.splice(s + 1, 0, new be(l, a.to))) : a.to > l ? t[s--] = new be(l, a.to) : t.splice(s--, 1));
    }
  }
  return i;
}
c(xu, "punchRanges");
function Qy(r, e, t, i) {
  let n = 0, s = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let f = n == r.length ? 1e9 : o ? r[n].to : r[n].from, u = s == e.length ? 1e9 : l ? e[s].to : e[s].from;
    if (o != l) {
      let d = Math.max(a, t), O = Math.min(f, u, i);
      d < O && h.push(new be(d, O));
    }
    if (a = Math.min(f, u), a == 1e9)
      break;
    f == a && (o ? (o = !1, n++) : o = !0), u == a && (l ? (l = !1, s++) : l = !0);
  }
  return h;
}
c(Qy, "findCoverChanges");
function Pu(r, e) {
  let t = [];
  for (let { pos: i, mount: n, frag: s } of r) {
    let o = i + (n.overlay ? n.overlay[0].from : 0), l = o + n.tree.length, a = Math.max(s.from, o), h = Math.min(s.to, l);
    if (n.overlay) {
      let f = n.overlay.map((d) => new be(d.from + i, d.to + i)), u = Qy(e, f, a, h);
      for (let d = 0, O = a; ; d++) {
        let p = d == u.length, m = p ? h : u[d].from;
        if (m > O && t.push(new Pt(O, m, n.tree, -o, s.from >= O || s.openStart, s.to <= m || s.openEnd)), p)
          break;
        O = u[d].to;
      }
    } else
      t.push(new Pt(a, h, n.tree, -o, s.from >= o || s.openStart, s.to <= l || s.openEnd));
  }
  return t;
}
c(Pu, "enterFragments");
let wy = 0;
const Ur = class Ur {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.name = e, this.set = t, this.base = i, this.modified = n, this.id = wy++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof Ur && (t = e), t != null && t.base)
      throw new Error("Can not derive from a modified tag");
    let n = new Ur(i, [], null, []);
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
    let t = new gs(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : gs.get(i.base || i, i.modified.concat(t).sort((n, s) => n.id - s.id));
  }
};
c(Ur, "Tag");
let Me = Ur, xy = 0;
const oo = class oo {
  constructor(e) {
    this.name = e, this.instances = [], this.id = xy++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && Py(t, l.modified));
    if (i)
      return i;
    let n = [], s = new Me(e.name, n, e, t);
    for (let l of t)
      l.instances.push(s);
    let o = ky(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(oo.get(l, a));
    return s;
  }
};
c(oo, "Modifier");
let gs = oo;
function Py(r, e) {
  return r.length == e.length && r.every((t, i) => t == e[i]);
}
c(Py, "sameArray");
function ky(r) {
  let e = [[]];
  for (let t = 0; t < r.length; t++)
    for (let i = 0, n = e.length; i < n; i++)
      e.push(e[i].concat(r[t]));
  return e.sort((t, i) => i.length - t.length);
}
c(ky, "powerSet");
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
          let d = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!d)
            throw new RangeError("Invalid path: " + n);
          if (s.push(d[0] == "*" ? "" : d[0][0] == '"' ? JSON.parse(d[0]) : d[0]), u += d[0].length, u == n.length)
            break;
          let O = n[u++];
          if (u == n.length && O == "!") {
            o = 0;
            break;
          }
          if (O != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(u);
        }
        let a = s.length - 1, h = s[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let f = new ys(i, o, a > 0 ? s.slice(0, a) : null);
        e[h] = f.sort(e[h]);
      }
  }
  return FO.add(e);
}
c(Ji, "styleTags");
const FO = new C();
var Li;
let ys = (Li = class {
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
}, c(Li, "Rule"), Li);
ys.empty = new ys([], 2, null);
function KO(r, e) {
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
c(KO, "tagHighlighter");
function Ry(r, e) {
  let t = null;
  for (let i of r) {
    let n = i.style(e);
    n && (t = t ? t + " " + n : n);
  }
  return t;
}
c(Ry, "highlightTags");
function $y(r, e, t, i = 0, n = r.length) {
  let s = new na(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(r.cursor(), i, n, "", s.highlighters), s.flush(n);
}
c($y, "highlightTree");
const Wf = class Wf {
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
    o.isTop && (s = this.highlighters.filter((O) => !O.scope || O.scope(o)));
    let h = n, f = vy(e) || ys.empty, u = Ry(s, f.tags);
    if (u && (h && (h += " "), h += u, f.mode == 1 && (n += (n ? " " : "") + u)), this.startSpan(Math.max(t, l), h), f.opaque)
      return;
    let d = e.tree && e.tree.prop(C.mounted);
    if (d && d.overlay) {
      let O = e.node.enter(d.overlay[0].from + l, 1), p = this.highlighters.filter((y) => !y.scope || y.scope(d.tree.type)), m = e.firstChild();
      for (let y = 0, b = l; ; y++) {
        let Q = y < d.overlay.length ? d.overlay[y] : null, x = Q ? Q.from + l : a, $ = Math.max(t, b), k = Math.min(i, x);
        if ($ < k && m)
          for (; e.from < k && (this.highlightRange(e, $, k, n, s), this.startSpan(Math.min(k, e.to), h), !(e.to >= x || !e.nextSibling())); )
            ;
        if (!Q || x > i)
          break;
        b = Q.to + l, b > t && (this.highlightRange(O.cursor(), Math.max(t, Q.from + l), Math.min(i, b), "", p), this.startSpan(Math.min(i, b), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      d && (n = "");
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
c(Wf, "HighlightBuilder");
let na = Wf;
function vy(r) {
  let e = r.type.prop(FO);
  for (; e && e.context && !r.matchContext(e.context); )
    e = e.next;
  return e || null;
}
c(vy, "getStyleTags");
const v = Me.define, Cn = v(), mt = v(), ku = v(mt), Ru = v(mt), gt = v(), En = v(gt), Lo = v(gt), He = v(), Vt = v(He), Ne = v(), Ge = v(), sa = v(), sr = v(sa), Vn = v(), g = {
  /**
  A comment.
  */
  comment: Cn,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: v(Cn),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: v(Cn),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: v(Cn),
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
  typeName: ku,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: v(ku),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Ru,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: v(Ru),
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
  string: En,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: v(En),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: v(En),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: v(En),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Lo,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: v(Lo),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: v(Lo),
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
  keyword: Ne,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: v(Ne),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: v(Ne),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: v(Ne),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: v(Ne),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: v(Ne),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: v(Ne),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: v(Ne),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: v(Ne),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: v(Ne),
  /**
  An operator.
  */
  operator: Ge,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: v(Ge),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: v(Ge),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: v(Ge),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: v(Ge),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: v(Ge),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: v(Ge),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: v(Ge),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: v(Ge),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: v(Ge),
  /**
  Program or markup punctuation.
  */
  punctuation: sa,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: v(sa),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: sr,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: v(sr),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: v(sr),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: v(sr),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: v(sr),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: He,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Vt,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: v(Vt),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: v(Vt),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: v(Vt),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: v(Vt),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: v(Vt),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: v(Vt),
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
  meta: Vn,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: v(Vn),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: v(Vn),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: v(Vn),
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
KO([
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
var Mo;
const Qt = /* @__PURE__ */ new C();
function bo(r) {
  return M.define({
    combine: r ? (e) => e.concat(r) : void 0
  });
}
c(bo, "defineLanguageFacet");
const fh = /* @__PURE__ */ new C(), Xf = class Xf {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, t, i = [], n = "") {
    this.data = e, this.name = n, K.prototype.hasOwnProperty("tree") || Object.defineProperty(K.prototype, "tree", { get() {
      return J(this);
    } }), this.parser = t, this.extension = [
      Di.of(this),
      K.languageData.of((s, o, l) => {
        let a = $u(s, o, l), h = a.type.prop(Qt);
        if (!h)
          return [];
        let f = s.facet(h), u = a.type.prop(fh);
        if (u) {
          let d = a.resolve(o - a.from, l);
          for (let O of u)
            if (O.test(d, s)) {
              let p = s.facet(O.facet);
              return O.type == "replace" ? p : p.concat(f);
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
    return $u(e, t, i).type.prop(Qt) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let t = e.facet(Di);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], n = /* @__PURE__ */ c((s, o) => {
      if (s.prop(Qt) == this.data) {
        i.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(C.mounted);
      if (l) {
        if (l.tree.prop(Qt) == this.data) {
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
        h instanceof V && n(h, s.positions[a] + o);
      }
    }, "explore");
    return n(J(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
};
c(Xf, "Language");
let pe = Xf;
pe.setState = /* @__PURE__ */ I.define();
function $u(r, e, t) {
  let i = r.facet(Di), n = J(r).topNode;
  if (!i || i.allowsNesting)
    for (let s = n; s; s = s.enter(e, t, B.ExcludeBuffers))
      s.type.isTop && (n = s);
  return n;
}
c($u, "topNodeAt");
const Wr = class Wr extends pe {
  constructor(e, t, i) {
    super(e, t, [], i), this.parser = t;
  }
  /**
  Define a language from a parser.
  */
  static define(e) {
    let t = bo(e.languageData);
    return new Wr(t, e.parser.configure({
      props: [Qt.add((i) => i.isTop ? t : void 0)]
    }), e.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(e, t) {
    return new Wr(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
};
c(Wr, "LRLanguage");
let sn = Wr;
function J(r) {
  let e = r.field(pe.state, !1);
  return e ? e.tree : V.empty;
}
c(J, "syntaxTree");
const Yf = class Yf {
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
c(Yf, "DocInput");
let oa = Yf, or = null;
const Xr = class Xr {
  constructor(e, t, i = [], n, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = n, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, t, i) {
    return new Xr(e, t, [], V.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new oa(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != V.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
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
    let t = or;
    or = this;
    try {
      return e();
    } finally {
      or = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = vu(e, t.from, t.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, t) {
    let { fragments: i, tree: n, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, f, u, d) => a.push({ fromA: h, toA: f, fromB: u, toB: d })), i = Pt.applyChanges(i, a), n = V.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let f = e.mapPos(h.from, 1), u = e.mapPos(h.to, -1);
          f < u && l.push({ from: f, to: u });
        }
      }
    }
    return new Xr(this.parser, t, i, n, s, o, l, this.scheduleOn);
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
      n < e.to && s > e.from && (this.fragments = vu(this.fragments, n, s), this.skipped.splice(i--, 1));
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
    return new class extends ji {
      createParse(t, i, n) {
        let s = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = or;
            if (a) {
              for (let h of n)
                a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new V(te.none, [], [], o - s);
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
    return or;
  }
};
c(Xr, "ParseContext");
let qi = Xr;
function vu(r, e, t) {
  return Pt.applyChanges(r, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
c(vu, "cutFragments");
const Yr = class Yr {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Yr(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = qi.create(e.facet(Di).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Yr(i);
  }
};
c(Yr, "LanguageState");
let on = Yr;
pe.state = /* @__PURE__ */ Ye.define({
  create: on.init,
  update(r, e) {
    for (let t of e.effects)
      if (t.is(pe.setState))
        return t.value;
    return e.startState.facet(Di) != e.state.facet(Di) ? on.init(e.state) : r.apply(e);
  }
});
let JO = /* @__PURE__ */ c((r) => {
  let e = setTimeout(
    () => r(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
}, "requestIdle");
typeof requestIdleCallback < "u" && (JO = /* @__PURE__ */ c((r) => {
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
const _o = typeof navigator < "u" && (!((Mo = navigator.scheduling) === null || Mo === void 0) && Mo.isInputPending) ? () => navigator.scheduling.isInputPending() : null;
var Mi;
const Ty = /* @__PURE__ */ je.fromClass((Mi = class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(pe.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(pe.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = JO(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, s = i.field(pe.state);
    if (s.tree == s.context.tree && s.context.isDone(
      n + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !_o ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < n && i.doc.length > n + 1e3, a = s.context.work(() => _o && _o() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: pe.setState.of(new on(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => $e(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), Di = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? r[0] : null;
  },
  enables: /* @__PURE__ */ c((r) => [
    pe.state,
    Ty,
    _.contentAttributes.compute([r], (e) => {
      let t = e.facet(r);
      return t && t.name ? { "data-language": t.name } : {};
    })
  ], "enables")
}), If = class If {
  /**
  Create a language support object.
  */
  constructor(e, t = []) {
    this.language = e, this.support = t, this.extension = [e, t];
  }
};
c(If, "LanguageSupport");
let Mt = If;
const lo = class lo {
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
    return new lo(e.name, (e.alias || []).concat(e.name).map((n) => n.toLowerCase()), e.extensions || [], e.filename, t, i);
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
c(lo, "LanguageDescription");
let S = lo;
const Ay = /* @__PURE__ */ M.define(), gn = /* @__PURE__ */ M.define({
  combine: /* @__PURE__ */ c((r) => {
    if (!r.length)
      return "  ";
    let e = r[0];
    if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(r[0]));
    return e;
  }, "combine")
});
function li(r) {
  let e = r.facet(gn);
  return e.charCodeAt(0) == 9 ? r.tabSize * e.length : e.length;
}
c(li, "getIndentUnit");
function bs(r, e) {
  let t = "", i = r.tabSize, n = r.facet(gn)[0];
  if (n == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    n = " ";
  }
  for (let s = 0; s < e; s++)
    t += n;
  return t;
}
c(bs, "indentString");
function ep(r, e) {
  r instanceof K && (r = new Bi(r));
  for (let i of r.state.facet(Ay)) {
    let n = i(r, e);
    if (n !== void 0)
      return n;
  }
  let t = J(r.state);
  return t.length >= e ? Zy(r, t, e) : null;
}
c(ep, "getIndentation");
const jf = class jf {
  /**
  Create an indent context.
  */
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = li(e);
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
    return dt(e, this.state.tabSize, t);
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
c(jf, "IndentContext");
let Bi = jf;
const er = /* @__PURE__ */ new C();
function Zy(r, e, t) {
  let i = e.resolveStack(t), n = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (n != i.node) {
    let s = [];
    for (let o = n; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      i = { node: s[o], next: i };
  }
  return tp(i, r, t);
}
c(Zy, "syntaxIndentation");
function tp(r, e, t) {
  for (let i = r; i; i = i.next) {
    let n = My(i.node);
    if (n)
      return n(la.create(e, t, i));
  }
  return 0;
}
c(tp, "indentFor");
function Ly(r) {
  return r.pos == r.options.simulateBreak && r.options.simulateDoubleBreak;
}
c(Ly, "ignoreClosed");
function My(r) {
  let e = r.type.prop(er);
  if (e)
    return e;
  let t = r.firstChild, i;
  if (t && (i = t.type.prop(C.closedBy))) {
    let n = r.lastChild, s = n && i.indexOf(n.name) > -1;
    return (o) => ip(o, !0, 1, void 0, s && !Ly(o) ? n.from : void 0);
  }
  return r.parent == null ? _y : null;
}
c(My, "indentStrategy");
function _y() {
  return 0;
}
c(_y, "topIndent");
const ao = class ao extends Bi {
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
    return new ao(e, t, i);
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
      if (Cy(i, e))
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
    return tp(this.context.next, this.base, this.pos);
  }
};
c(ao, "TreeIndentContext");
let la = ao;
function Cy(r, e) {
  for (let t = e; t; t = t.parent)
    if (r == t)
      return !0;
  return !1;
}
c(Cy, "isParent");
function Ey(r) {
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
c(Ey, "bracketedAligned");
function Vy({ closing: r, align: e = !0, units: t = 1 }) {
  return (i) => ip(i, e, t, r);
}
c(Vy, "delimitedIndent");
function ip(r, e, t, i, n) {
  let s = r.textAfter, o = s.match(/^\s*/)[0].length, l = i && s.slice(o, o + i.length) == i || n == r.pos + o, a = e ? Ey(r) : null;
  return a ? l ? r.column(a.from) : r.column(a.to) : r.baseIndent + (l ? 0 : r.unit * t);
}
c(ip, "delimitedStrategy");
const Uy = /* @__PURE__ */ c((r) => r.baseIndent, "flatIndent");
function Gn({ except: r, units: e = 1 } = {}) {
  return (t) => {
    let i = r && r.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
c(Gn, "continuedIndent");
const Wy = /* @__PURE__ */ M.define(), yn = /* @__PURE__ */ new C();
function rp(r) {
  let e = r.firstChild, t = r.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? r.to : t.from } : null;
}
c(rp, "foldInside");
const ho = class ho {
  constructor(e, t) {
    this.specs = e;
    let i;
    function n(l) {
      let a = it.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    c(n, "def");
    const s = typeof t.all == "string" ? t.all : t.all ? n(t.all) : void 0, o = t.scope;
    this.scope = o instanceof pe ? (l) => l.prop(Qt) == o.data : o ? (l) => l == o : void 0, this.style = KO(e.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = i ? new it(i) : null, this.themeType = t.themeType;
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
    return new ho(e, t || {});
  }
};
c(ho, "HighlightStyle");
let Ss = ho;
const aa = /* @__PURE__ */ M.define(), np = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? [r[0]] : null;
  }
});
function Co(r) {
  let e = r.facet(aa);
  return e.length ? e : r.facet(np);
}
c(Co, "getHighlighters");
function Xy(r, e) {
  let t = [Yy], i;
  return r instanceof Ss && (r.module && t.push(_.styleModule.of(r.module)), i = r.themeType), e != null && e.fallback ? t.push(np.of(r)) : i ? t.push(aa.computeN([_.darkTheme], (n) => n.facet(_.darkTheme) == (i == "dark") ? [r] : [])) : t.push(aa.of(r)), t;
}
c(Xy, "syntaxHighlighting");
const qf = class qf {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = J(e.state), this.decorations = this.buildDeco(e, Co(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = J(e.state), i = Co(e.state), n = i != Co(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !n && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || n) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return j.none;
    let i = new Ui();
    for (let { from: n, to: s } of e.visibleRanges)
      $y(this.tree, t, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = j.mark({ class: a })));
      }, n, s);
    return i.finish();
  }
};
c(qf, "TreeHighlighter");
let ha = qf;
const Yy = /* @__PURE__ */ hi.high(/* @__PURE__ */ je.fromClass(ha, {
  decorations: /* @__PURE__ */ c((r) => r.decorations, "decorations")
})), Iy = 1e4, jy = "()[]{}", sp = /* @__PURE__ */ new C();
function fa(r, e, t) {
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
c(fa, "matchingNodes");
function ca(r) {
  let e = r.type.prop(sp);
  return e ? e(r.node) : r;
}
c(ca, "findHandle");
function gi(r, e, t, i = {}) {
  let n = i.maxScanDistance || Iy, s = i.brackets || jy, o = J(r), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = fa(a.type, t, s);
    if (h && a.from < a.to) {
      let f = ca(a);
      if (f && (t > 0 ? e >= f.from && e < f.to : e > f.from && e <= f.to))
        return qy(r, e, t, a, f, h, s);
    }
  }
  return Dy(r, e, t, o, l.type, n, s);
}
c(gi, "matchBrackets");
function qy(r, e, t, i, n, s, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, f = l == null ? void 0 : l.cursor();
  if (f && (t < 0 ? f.childBefore(i.from) : f.childAfter(i.to)))
    do
      if (t < 0 ? f.to <= i.from : f.from >= i.to) {
        if (h == 0 && s.indexOf(f.type.name) > -1 && f.from < f.to) {
          let u = ca(f);
          return { start: a, end: u ? { from: u.from, to: u.to } : void 0, matched: !0 };
        } else if (fa(f.type, t, o))
          h++;
        else if (fa(f.type, -t, o)) {
          if (h == 0) {
            let u = ca(f);
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
c(qy, "matchMarkedBrackets");
function Dy(r, e, t, i, n, s, o) {
  let l = t < 0 ? r.sliceDoc(e - 1, e) : r.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, f = r.doc.iterRange(e, t > 0 ? r.doc.length : 0), u = 0;
  for (let d = 0; !f.next().done && d <= s; ) {
    let O = f.value;
    t < 0 && (d += O.length);
    let p = e + d * t;
    for (let m = t > 0 ? 0 : O.length - 1, y = t > 0 ? O.length : -1; m != y; m += t) {
      let b = o.indexOf(O[m]);
      if (!(b < 0 || i.resolveInner(p + m, 1).type != n))
        if (b % 2 == 0 == t > 0)
          u++;
        else {
          if (u == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: b >> 1 == a >> 1 };
          u--;
        }
    }
    t > 0 && (d += O.length);
  }
  return f.done ? { start: h, matched: !1 } : null;
}
c(Dy, "matchPlainBrackets");
function Tu(r, e, t, i = 0, n = 0) {
  e == null && (e = r.search(/[^\s\u00a0]/), e == -1 && (e = r.length));
  let s = n;
  for (let o = i; o < e; o++)
    r.charCodeAt(o) == 9 ? s += t - s % t : s++;
  return s;
}
c(Tu, "countCol");
const Df = class Df {
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
    return this.lastColumnPos < this.start && (this.lastColumnValue = Tu(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  /**
  Get the indentation column of the current line.
  */
  indentation() {
    var e;
    return (e = this.overrideIndent) !== null && e !== void 0 ? e : Tu(this.string, null, this.tabSize);
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
c(Df, "StringStream");
let Qs = Df;
function By(r) {
  return {
    name: r.name || "",
    token: r.token,
    blankLine: r.blankLine || (() => {
    }),
    startState: r.startState || (() => !0),
    copyState: r.copyState || zy,
    indent: r.indent || (() => null),
    languageData: r.languageData || {},
    tokenTable: r.tokenTable || uh,
    mergeTokens: r.mergeTokens !== !1
  };
}
c(By, "fullParser");
function zy(r) {
  if (typeof r != "object")
    return r;
  let e = {};
  for (let t in r) {
    let i = r[t];
    e[t] = i instanceof Array ? i.slice() : i;
  }
  return e;
}
c(zy, "defaultCopyState");
const Au = /* @__PURE__ */ new WeakMap(), fo = class fo extends pe {
  constructor(e) {
    let t = bo(e.languageData), i = By(e), n, s = new class extends ji {
      createParse(o, l, a) {
        return new Gy(n, o, l, a);
      }
    }();
    super(t, s, [], e.name), this.topNode = Ky(t, this), n = this, this.streamParser = i, this.stateAfter = new C({ perNode: !0 }), this.tokenTable = e.tokenTable ? new ws(i.tokenTable) : Fy;
  }
  /**
  Define a stream language.
  */
  static define(e) {
    return new fo(e);
  }
  /**
  @internal
  */
  getIndent(e) {
    let t, { overrideIndentation: i } = e.options;
    i && (t = Au.get(e.state), t != null && t < e.pos - 1e4 && (t = void 0));
    let n = ch(this, e.node.tree, e.node.from, e.node.from, t ?? e.pos), s, o;
    if (n ? (o = n.state, s = n.pos + 1) : (o = this.streamParser.startState(e.unit), s = e.node.from), e.pos - s > 1e4)
      return null;
    for (; s < e.pos; ) {
      let a = e.state.doc.lineAt(s), h = Math.min(e.pos, a.to);
      if (a.length) {
        let f = i ? i(a.from) : -1, u = new Qs(a.text, e.state.tabSize, e.unit, f < 0 ? void 0 : f);
        for (; u.pos < h - a.from; )
          lp(this.streamParser.token, u, o);
      } else
        this.streamParser.blankLine(o, e.unit);
      if (h == e.pos)
        break;
      s = a.to + 1;
    }
    let l = e.lineAt(e.pos);
    return i && t == null && Au.set(e.state, l.from), this.streamParser.indent(o, /^\s*(.*)/.exec(l.text)[1], e);
  }
  get allowsNesting() {
    return !1;
  }
};
c(fo, "StreamLanguage");
let ua = fo;
function ch(r, e, t, i, n) {
  let s = t >= i && t + e.length <= n && e.prop(r.stateAfter);
  if (s)
    return { state: r.streamParser.copyState(s), pos: t + e.length };
  for (let o = e.children.length - 1; o >= 0; o--) {
    let l = e.children[o], a = t + e.positions[o], h = l instanceof V && a < n && ch(r, l, a, i, n);
    if (h)
      return h;
  }
  return null;
}
c(ch, "findState");
function op(r, e, t, i, n) {
  if (n && t <= 0 && i >= e.length)
    return e;
  !n && t == 0 && e.type == r.topNode && (n = !0);
  for (let s = e.children.length - 1; s >= 0; s--) {
    let o = e.positions[s], l = e.children[s], a;
    if (o < i && l instanceof V) {
      if (!(a = op(r, l, t - o, i - o, n)))
        break;
      return n ? new V(e.type, e.children.slice(0, s).concat(a), e.positions.slice(0, s + 1), o + a.length) : a;
    }
  }
  return null;
}
c(op, "cutTree");
function Ny(r, e, t, i, n) {
  for (let s of e) {
    let o = s.from + (s.openStart ? 25 : 0), l = s.to - (s.openEnd ? 25 : 0), a = o <= t && l > t && ch(r, s.tree, 0 - s.offset, t, l), h;
    if (a && a.pos <= i && (h = op(r, s.tree, t + s.offset, a.pos + s.offset, !1)))
      return { state: a.state, tree: h };
  }
  return { state: r.streamParser.startState(n ? li(n) : 4), tree: V.empty };
}
c(Ny, "findStartInFragments");
var _i;
let Gy = (_i = class {
  constructor(e, t, i, n) {
    this.lang = e, this.input = t, this.fragments = i, this.ranges = n, this.stoppedAt = null, this.chunks = [], this.chunkPos = [], this.chunk = [], this.chunkReused = void 0, this.rangeIndex = 0, this.to = n[n.length - 1].to;
    let s = qi.get(), o = n[0].from, { state: l, tree: a } = Ny(e, i, o, this.to, s == null ? void 0 : s.state);
    this.state = l, this.parsedPos = this.chunkStart = o + a.length;
    for (let h = 0; h < a.children.length; h++)
      this.chunks.push(a.children[h]), this.chunkPos.push(a.positions[h]);
    s && this.parsedPos < s.viewport.from - 1e5 && n.some((h) => h.from <= s.viewport.from && h.to >= s.viewport.from) && (this.state = this.lang.streamParser.startState(li(s.state)), s.skipUntilInView(this.parsedPos, s.viewport.from), this.parsedPos = s.viewport.from), this.moveRangeIndex();
  }
  advance() {
    let e = qi.get(), t = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt), i = Math.min(
      t,
      this.chunkStart + 2048
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
    let { line: t, end: i } = this.nextLine(), n = 0, { streamParser: s } = this.lang, o = new Qs(t, e ? e.state.tabSize : 4, e ? li(e.state) : 2);
    if (o.eol())
      s.blankLine(this.state, o.indentUnit);
    else
      for (; !o.eol(); ) {
        let l = lp(s.token, o, this.state);
        if (l && (n = this.emitToken(this.lang.tokenTable.resolve(l), this.parsedPos + o.start, this.parsedPos + o.pos, n)), o.start > 1e4)
          break;
      }
    this.parsedPos = i, this.moveRangeIndex(), this.parsedPos < this.to && this.parsedPos++;
  }
  finishChunk() {
    let e = V.build({
      buffer: this.chunk,
      start: this.chunkStart,
      length: this.parsedPos - this.chunkStart,
      nodeSet: Hy,
      topID: 0,
      maxBufferLength: 2048,
      reused: this.chunkReused
    });
    e = new V(e.type, e.children, e.positions, e.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]), this.chunks.push(e), this.chunkPos.push(this.chunkStart - this.ranges[0].from), this.chunk = [], this.chunkReused = void 0, this.chunkStart = this.parsedPos;
  }
  finish() {
    return new V(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
  }
}, c(_i, "Parse"), _i);
function lp(r, e, t) {
  e.start = e.pos;
  for (let i = 0; i < 10; i++) {
    let n = r(e, t);
    if (e.pos > e.start)
      return n;
  }
  throw new Error("Stream parser failed to advance stream.");
}
c(lp, "readToken$1");
const uh = /* @__PURE__ */ Object.create(null), ln = [te.none], Hy = /* @__PURE__ */ new Yi(ln), Zu = [], Lu = /* @__PURE__ */ Object.create(null), ap = /* @__PURE__ */ Object.create(null);
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
  ap[r] = /* @__PURE__ */ hp(uh, e);
const Bf = class Bf {
  constructor(e) {
    this.extra = e, this.table = Object.assign(/* @__PURE__ */ Object.create(null), ap);
  }
  resolve(e) {
    return e ? this.table[e] || (this.table[e] = hp(this.extra, e)) : 0;
  }
};
c(Bf, "TokenTable");
let ws = Bf;
const Fy = /* @__PURE__ */ new ws(uh);
function Eo(r, e) {
  Zu.indexOf(r) > -1 || (Zu.push(r), console.warn(e));
}
c(Eo, "warnForPart");
function hp(r, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let f = r[h] || g[h];
      f ? typeof f == "function" ? a.length ? a = a.map(f) : Eo(h, `Modifier ${h} used at start of tag`) : a.length ? Eo(h, `Tag ${h} used as modifier`) : a = Array.isArray(f) ? f : [f] : Eo(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), n = i + " " + t.map((l) => l.id), s = Lu[n];
  if (s)
    return s.id;
  let o = Lu[n] = te.define({
    id: ln.length,
    name: i,
    props: [Ji({ [i]: t })]
  });
  return ln.push(o), o.id;
}
c(hp, "createTokenType");
function Ky(r, e) {
  let t = te.define({ id: ln.length, name: "Document", props: [
    Qt.add(() => r),
    er.add(() => (i) => e.getIndent(i))
  ], top: !0 });
  return ln.push(t), t;
}
c(Ky, "docID");
ee.RTL, ee.LTR;
const zf = class zf {
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
    let t = J(this.state).resolveInner(this.pos, -1);
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
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), n = t.text.slice(i - t.from, this.pos - t.from), s = n.search(cp(e, !1));
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
c(zf, "CompletionContext");
let zi = zf;
function Mu(r) {
  let e = Object.keys(r).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
c(Mu, "toSet");
function Jy(r) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of r) {
    e[n[0]] = !0;
    for (let s = 1; s < n.length; s++)
      t[n[s]] = !0;
  }
  let i = Mu(e) + Mu(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
c(Jy, "prefixMatch");
function fp(r) {
  let e = r.map((n) => typeof n == "string" ? { label: n } : n), [t, i] = e.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : Jy(e);
  return (n) => {
    let s = n.matchBefore(i);
    return s || n.explicit ? { from: s ? s.from : n.pos, options: e, validFor: t } : null;
  };
}
c(fp, "completeFromList");
function eb(r, e) {
  return (t) => {
    for (let i = J(t.state).resolveInner(t.pos, -1); i; i = i.parent) {
      if (r.indexOf(i.name) > -1)
        return null;
      if (i.type.isTop)
        break;
    }
    return e(t);
  };
}
c(eb, "ifNotIn");
const Nf = class Nf {
  constructor(e, t, i, n) {
    this.completion = e, this.source = t, this.match = i, this.score = n;
  }
};
c(Nf, "Option");
let xs = Nf;
function Kt(r) {
  return r.selection.main.from;
}
c(Kt, "cur");
function cp(r, e) {
  var t;
  let { source: i } = r, n = e && i[0] != "^", s = i[i.length - 1] != "$";
  return !n && !s ? r : new RegExp(`${n ? "^" : ""}(?:${i})${s ? "$" : ""}`, (t = r.flags) !== null && t !== void 0 ? t : r.ignoreCase ? "i" : "");
}
c(cp, "ensureAnchor");
const dh = /* @__PURE__ */ Ie.define();
function tb(r, e, t, i) {
  let { main: n } = r.selection, s = t - n.from, o = i - n.from;
  return Object.assign(Object.assign({}, r.changeByRange((l) => {
    if (l != n && t != i && r.sliceDoc(l.from + s, l.from + o) != r.sliceDoc(t, i))
      return { range: l };
    let a = r.toText(e);
    return {
      changes: { from: l.from + s, to: i == n.from ? l.to : l.from + o, insert: a },
      range: R.cursor(l.from + s + a.length)
    };
  })), { scrollIntoView: !0, userEvent: "input.complete" });
}
c(tb, "insertCompletionText");
const _u = /* @__PURE__ */ new WeakMap();
function ib(r) {
  if (!Array.isArray(r))
    return r;
  let e = _u.get(r);
  return e || _u.set(r, e = fp(r)), e;
}
c(ib, "asSource");
const Ps = /* @__PURE__ */ I.define(), an = /* @__PURE__ */ I.define(), Gf = class Gf {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Wt(e, t), n = ui(i);
      this.chars.push(i);
      let s = e.slice(t, t + n), o = s.toUpperCase();
      this.folded.push(Wt(o == s ? s.toLowerCase() : o, 0)), t += n;
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
      let Q = Wt(e, 0), x = ui(Q), $ = x == e.length ? 0 : -100;
      if (Q != t[0]) if (Q == i[0])
        $ += -200;
      else
        return null;
      return this.ret($, [0, x]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let Q = 0, x = Math.min(e.length, 200); Q < x && h < a; ) {
        let $ = Wt(e, Q);
        ($ == t[h] || $ == i[h]) && (n[h++] = Q), Q += ui($);
      }
      if (h < a)
        return null;
    }
    let f = 0, u = 0, d = !1, O = 0, p = -1, m = -1, y = /[a-z]/.test(e), b = !0;
    for (let Q = 0, x = Math.min(e.length, 200), $ = 0; Q < x && u < a; ) {
      let k = Wt(e, Q);
      l < 0 && (f < a && k == t[f] && (s[f++] = Q), O < a && (k == t[O] || k == i[O] ? (O == 0 && (p = Q), m = Q + 1, O++) : O = 0));
      let A, Z = k < 255 ? k >= 48 && k <= 57 || k >= 97 && k <= 122 ? 2 : k >= 65 && k <= 90 ? 1 : 0 : (A = xg(k)) != A.toLowerCase() ? 1 : A != A.toUpperCase() ? 2 : 0;
      (!Q || Z == 1 && y || $ == 0 && Z != 0) && (t[u] == k || i[u] == k && (d = !0) ? o[u++] = Q : o.length && (b = !1)), $ = Z, Q += ui(k);
    }
    return u == a && o[0] == 0 && b ? this.result(-100 + (d ? -200 : 0), o, e) : O == a && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : O == a ? this.ret(-900 - e.length, [p, m]) : u == a ? this.result(-100 + (d ? -200 : 0) + -700 + (b ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, e);
  }
  result(e, t, i) {
    let n = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? ui(Wt(i, o)) : 1);
      s && n[s - 1] == o ? n[s - 1] = l : (n[s++] = o, n[s++] = l);
    }
    return this.ret(e - i.length, n);
  }
};
c(Gf, "FuzzyMatcher");
let da = Gf;
const Hf = class Hf {
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
c(Hf, "StrictMatcher");
let Oa = Hf;
const ie = /* @__PURE__ */ M.define({
  combine(r) {
    return Hd(r, {
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
      positionInfo: rb,
      filterStrict: !1,
      compareCompletions: /* @__PURE__ */ c((e, t) => e.label.localeCompare(t.label), "compareCompletions"),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: /* @__PURE__ */ c((e, t) => e && t, "defaultKeymap"),
      closeOnBlur: /* @__PURE__ */ c((e, t) => e && t, "closeOnBlur"),
      icons: /* @__PURE__ */ c((e, t) => e && t, "icons"),
      tooltipClass: /* @__PURE__ */ c((e, t) => (i) => Cu(e(i), t(i)), "tooltipClass"),
      optionClass: /* @__PURE__ */ c((e, t) => (i) => Cu(e(i), t(i)), "optionClass"),
      addToOptions: /* @__PURE__ */ c((e, t) => e.concat(t), "addToOptions"),
      filterStrict: /* @__PURE__ */ c((e, t) => e || t, "filterStrict")
    });
  }
});
function Cu(r, e) {
  return r ? e ? r + " " + e : r : e;
}
c(Cu, "joinClass");
function rb(r, e, t, i, n, s) {
  let o = r.textDirection == ee.RTL, l = o, a = !1, h = "top", f, u, d = e.left - n.left, O = n.right - e.right, p = i.right - i.left, m = i.bottom - i.top;
  if (l && d < Math.min(p, O) ? l = !1 : !l && O < Math.min(p, d) && (l = !0), p <= (l ? d : O))
    f = Math.max(n.top, Math.min(t.top, n.bottom - m)) - e.top, u = Math.min(400, l ? d : O);
  else {
    a = !0, u = Math.min(
      400,
      (o ? e.right : n.right - e.left) - 30
      /* Info.Margin */
    );
    let Q = n.bottom - e.bottom;
    Q >= m || Q > e.top ? f = t.bottom - e.top : (h = "bottom", f = e.bottom - t.top);
  }
  let y = (e.bottom - e.top) / s.offsetHeight, b = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${f / y}px; max-width: ${u / b}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
c(rb, "defaultPositionInfo");
function nb(r) {
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
        let d = o.appendChild(document.createElement("span"));
        d.appendChild(document.createTextNode(l.slice(f, u))), d.className = "cm-completionMatchedText", a = u;
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
c(nb, "optionContent");
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
const Ff = class Ff {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: /* @__PURE__ */ c(() => this.measureInfo(), "read"),
      write: /* @__PURE__ */ c((a) => this.placeInfo(a), "write"),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = e.state.field(t), { options: s, selected: o } = n.open, l = e.state.facet(ie);
    this.optionContent = nb(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Vo(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let f = a.target, u; f && f != this.dom; f = f.parentNode)
        if (f.nodeName == "LI" && (u = /-(\d+)$/.exec(f.id)) && +u[1] < h.length) {
          this.applyCompletion(e, h[+u[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, !1);
      h && h.tooltip && e.state.facet(ie).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: an.of(null) });
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Vo(t.options.length, t.selected, this.view.state.facet(ie).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: n } = i;
      if (!n)
        return;
      let s = typeof n == "string" ? document.createTextNode(n) : n(i);
      if (!s)
        return;
      "then" in s ? s.then((o) => {
        o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
      }).catch((o) => $e(this.view.state, o, "completion info")) : this.addInfoPane(s, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
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
      i.nodeName != "LI" || !i.id ? n-- : n == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && ob(this.list, t), t;
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
        let d = typeof h == "string" ? h : h.name;
        if (d != s && (o > i.from || i.from == 0))
          if (s = d, typeof h != "string" && h.header)
            n.appendChild(h.header(h));
          else {
            let O = n.appendChild(document.createElement("completion-section"));
            O.textContent = d;
          }
      }
      const f = n.appendChild(document.createElement("li"));
      f.id = t + "-" + o, f.setAttribute("role", "option");
      let u = this.optionClass(l);
      u && (f.className = u);
      for (let d of this.optionContent) {
        let O = d(l, this.view.state, this.view, a);
        O && f.appendChild(O);
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
c(Ff, "CompletionTooltip");
let pa = Ff;
function sb(r, e) {
  return (t) => new pa(t, r, e);
}
c(sb, "completionTooltip");
function ob(r, e) {
  let t = r.getBoundingClientRect(), i = e.getBoundingClientRect(), n = t.height / r.offsetHeight;
  i.top < t.top ? r.scrollTop -= (t.top - i.top) / n : i.bottom > t.bottom && (r.scrollTop += (i.bottom - t.bottom) / n);
}
c(ob, "scrollIntoView");
function Eu(r) {
  return (r.boost || 0) * 100 + (r.apply ? 10 : 0) + (r.info ? 5 : 0) + (r.type ? 1 : 0);
}
c(Eu, "score");
function lb(r, e) {
  let t = [], i = null, n = /* @__PURE__ */ c((h) => {
    t.push(h);
    let { section: f } = h.completion;
    if (f) {
      i || (i = []);
      let u = typeof f == "string" ? f : f.name;
      i.some((d) => d.name == u) || i.push(typeof f == "string" ? { name: u } : f);
    }
  }, "addOption"), s = e.facet(ie);
  for (let h of r)
    if (h.hasResult()) {
      let f = h.result.getMatch;
      if (h.result.filter === !1)
        for (let u of h.result.options)
          n(new xs(u, h.source, f ? f(u) : [], 1e9 - t.length));
      else {
        let u = e.sliceDoc(h.from, h.to), d, O = s.filterStrict ? new Oa(u) : new da(u);
        for (let p of h.result.options)
          if (d = O.match(p.label)) {
            let m = p.displayLabel ? f ? f(p, d.matched) : [] : d.matched;
            n(new xs(p, h.source, m, d.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), f = 0, u = /* @__PURE__ */ c((d, O) => {
      var p, m;
      return ((p = d.rank) !== null && p !== void 0 ? p : 1e9) - ((m = O.rank) !== null && m !== void 0 ? m : 1e9) || (d.name < O.name ? -1 : 1);
    }, "cmp");
    for (let d of i.sort(u))
      f -= 1e5, h[d.name] = f;
    for (let d of t) {
      let { section: O } = d.completion;
      O && (d.score += h[typeof O == "string" ? O : O.name]);
    }
  }
  let o = [], l = null, a = s.compareCompletions;
  for (let h of t.sort((f, u) => u.score - f.score || a(f.completion, u.completion))) {
    let f = h.completion;
    !l || l.label != f.label || l.detail != f.detail || l.type != null && f.type != null && l.type != f.type || l.apply != f.apply || l.boost != f.boost ? o.push(h) : Eu(h.completion) > Eu(l) && (o[o.length - 1] = h), l = h.completion;
  }
  return o;
}
c(lb, "sortOptions");
const Bt = class Bt {
  constructor(e, t, i, n, s, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = n, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new Bt(this.options, Vu(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, n, s, o) {
    if (n && !o && e.some((h) => h.isPending))
      return n.setDisabled();
    let l = lb(e, t);
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
    return new Bt(l, Vu(i, a), {
      pos: e.reduce((h, f) => f.hasResult() ? Math.min(h, f.from) : h, 1e8),
      create: db,
      above: s.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(e) {
    return new Bt(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Bt(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
};
c(Bt, "CompletionDialog");
let ma = Bt;
const Ir = class Ir {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Ir(cb, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(ie), s = (i.override || t.languageDataAt("autocomplete", Kt(t)).map(ib)).map((a) => (this.active.find((f) => f.source == a) || new ct(
      a,
      this.active.some(
        (f) => f.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(e, i));
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Oh));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !ab(s, this.active) || l ? o = ma.build(s, t, this.id, o, i, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new ct(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of e.effects)
      a.is(dp) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Ir(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? hb : fb;
  }
};
c(Ir, "CompletionState");
let ga = Ir;
function ab(r, e) {
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
c(ab, "sameResults");
const hb = {
  "aria-autocomplete": "list"
}, fb = {};
function Vu(r, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": r
  };
  return e > -1 && (t["aria-activedescendant"] = r + "-" + e), t;
}
c(Vu, "makeAttrs");
const cb = [];
function up(r, e) {
  if (r.isUserEvent("input.complete")) {
    let i = r.annotation(dh);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = r.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : r.isUserEvent("delete.backward") ? 2 : r.selection ? 8 : r.docChanged ? 16 : 0;
}
c(up, "getUpdateType");
const zt = class zt {
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
    let i = up(e, t), n = this;
    (i & 8 || i & 16 && this.touches(e)) && (n = new zt(
      n.source,
      0
      /* State.Inactive */
    )), i & 4 && n.state == 0 && (n = new zt(
      this.source,
      1
      /* State.Pending */
    )), n = n.updateFor(e, i);
    for (let s of e.effects)
      if (s.is(Ps))
        n = new zt(n.source, 1, s.value);
      else if (s.is(an))
        n = new zt(
          n.source,
          0
          /* State.Inactive */
        );
      else if (s.is(Oh))
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
    return e.changes.touchesRange(Kt(e.state));
  }
};
c(zt, "ActiveSource");
let ct = zt;
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
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Kt(e.state);
    if (l > o || !n || t & 2 && (Kt(e.startState) == this.from || l < this.limit))
      return new ct(
        this.source,
        t & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = e.changes.mapPos(this.limit);
    return ub(n.validFor, e.state, s, o) ? new xi(this.source, this.explicit, a, n, s, o) : n.update && (n = n.update(n, s, o, new zi(e.state, l, !1))) ? new xi(this.source, this.explicit, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : Kt(e.state)) : new ct(this.source, 1, this.explicit);
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
let ks = xi;
function ub(r, e, t, i) {
  if (!r)
    return !1;
  let n = e.sliceDoc(t, i);
  return typeof r == "function" ? r(n, t, i, e) : cp(r, !0).test(n);
}
c(ub, "checkValid");
const Oh = /* @__PURE__ */ I.define({
  map(r, e) {
    return r.map((t) => t.map(e));
  }
}), dp = /* @__PURE__ */ I.define(), ce = /* @__PURE__ */ Ye.define({
  create() {
    return ga.start();
  },
  update(r, e) {
    return r.update(e);
  },
  provide: /* @__PURE__ */ c((r) => [
    DO.from(r, (e) => e.tooltip),
    _.contentAttributes.from(r, (e) => e.attrs)
  ], "provide")
});
function ph(r, e) {
  const t = e.completion.apply || e.completion.label;
  let i = r.state.field(ce).active.find((n) => n.source == e.source);
  return i instanceof ks ? (typeof t == "string" ? r.dispatch(Object.assign(Object.assign({}, tb(r.state, t, i.from, i.to)), { annotations: dh.of(e.completion) })) : t(r, e.completion, i.from, i.to), !0) : !1;
}
c(ph, "applyCompletion");
const db = /* @__PURE__ */ sb(ce, ph);
function Un(r, e = "option") {
  return (t) => {
    let i = t.state.field(ce, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(ie).interactionDelay)
      return !1;
    let n = 1, s;
    e == "page" && (s = BO(t, i.open.tooltip)) && (n = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (r ? 1 : -1) : r ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: dp.of(l) }), !0;
  };
}
c(Un, "moveCompletionSelection");
const Op = /* @__PURE__ */ c((r) => {
  let e = r.state.field(ce, !1);
  return r.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < r.state.facet(ie).interactionDelay ? !1 : ph(r, e.open.options[e.open.selected]);
}, "acceptCompletion"), Uu = /* @__PURE__ */ c((r) => r.state.field(ce, !1) ? (r.dispatch({ effects: Ps.of(!0) }), !0) : !1, "startCompletion"), Ob = /* @__PURE__ */ c((r) => {
  let e = r.state.field(ce, !1);
  return !e || !e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? !1 : (r.dispatch({ effects: an.of(null) }), !0);
}, "closeCompletion"), Kf = class Kf {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
};
c(Kf, "RunningQuery");
let ya = Kf;
const pb = 50, mb = 1e3, gb = /* @__PURE__ */ je.fromClass(class {
  constructor(r) {
    this.view = r, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let e of r.state.field(ce).active)
      e.isPending && this.startQuery(e);
  }
  update(r) {
    let e = r.state.field(ce), t = r.state.facet(ie);
    if (!r.selectionSet && !r.docChanged && r.startState.field(ce) == e)
      return;
    let i = r.transactions.some((s) => {
      let o = up(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (i || o.context.abortOnDocChange && r.docChanged || o.updates.length + r.transactions.length > pb && Date.now() - o.time > mb) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            $e(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else
        o.updates.push(...r.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), r.transactions.some((s) => s.effects.some((o) => o.is(Ps))) && (this.pendingStart = !0);
    let n = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), n) : -1, this.composing != 0)
      for (let s of r.transactions)
        s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: r } = this.view, e = r.field(ce);
    for (let t of e.active)
      t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(ie).updateSyncTime));
  }
  startQuery(r) {
    let { state: e } = this.view, t = Kt(e), i = new zi(e, t, r.explicit, this.view), n = new ya(r, i);
    this.running.push(n), Promise.resolve(r.source(i)).then((s) => {
      n.context.aborted || (n.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: an.of(null) }), $e(this.view.state, s);
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
    let e = [], t = this.view.state.facet(ie), i = this.view.state.field(ce);
    for (let n = 0; n < this.running.length; n++) {
      let s = this.running[n];
      if (s.done === void 0)
        continue;
      if (this.running.splice(n--, 1), s.done) {
        let l = Kt(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), h = new ks(s.active.source, s.active.explicit, a, s.done, s.done.from, (r = s.done.to) !== null && r !== void 0 ? r : l);
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
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Oh.of(e) });
  }
}, {
  eventHandlers: {
    blur(r) {
      let e = this.view.state.field(ce, !1);
      if (e && e.tooltip && this.view.state.facet(ie).closeOnBlur) {
        let t = e.open && BO(this.view, e.open.tooltip);
        (!t || !t.dom.contains(r.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: an.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Ps.of(!1) }), 20), this.composing = 0;
    }
  }
}), yb = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), bb = /* @__PURE__ */ hi.highest(/* @__PURE__ */ _.domEventHandlers({
  keydown(r, e) {
    let t = e.state.field(ce, !1);
    if (!t || !t.open || t.open.disabled || t.open.selected < 0 || r.key.length > 1 || r.ctrlKey && !(yb && r.altKey) || r.metaKey)
      return !1;
    let i = t.open.options[t.open.selected], n = t.active.find((o) => o.source == i.source), s = i.completion.commitCharacters || n.result.commitCharacters;
    return s && s.indexOf(r.key) > -1 && ph(e, i), !1;
  }
})), pp = /* @__PURE__ */ _.baseTheme({
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
}), Jf = class Jf {
  constructor(e, t, i, n) {
    this.field = e, this.line = t, this.from = i, this.to = n;
  }
};
c(Jf, "FieldPos");
let ba = Jf;
const co = class co {
  constructor(e, t, i) {
    this.field = e, this.from = t, this.to = i;
  }
  map(e) {
    let t = e.mapPos(this.from, -1, ue.TrackDel), i = e.mapPos(this.to, 1, ue.TrackDel);
    return t == null || i == null ? null : new co(this.field, t, i);
  }
};
c(co, "FieldRange");
let Sa = co;
const uo = class uo {
  constructor(e, t) {
    this.lines = e, this.fieldPositions = t;
  }
  instantiate(e, t) {
    let i = [], n = [t], s = e.doc.lineAt(t), o = /^\s*/.exec(s.text)[0];
    for (let a of this.lines) {
      if (i.length) {
        let h = o, f = /^\t*/.exec(a)[0].length;
        for (let u = 0; u < f; u++)
          h += e.facet(gn);
        n.push(t + h.length - f), a = h + a.slice(f);
      }
      i.push(a), t += a.length + 1;
    }
    let l = this.fieldPositions.map((a) => new Sa(a.field, n[a.line] + a.from, n[a.line] + a.to));
    return { text: i, ranges: l };
  }
  static parse(e) {
    let t = [], i = [], n = [], s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o); ) {
        let l = s[1] ? +s[1] : null, a = s[2] || s[3] || "", h = -1, f = a.replace(/\\[{}]/g, (u) => u[1]);
        for (let u = 0; u < t.length; u++)
          (l != null ? t[u].seq == l : f && t[u].name == f) && (h = u);
        if (h < 0) {
          let u = 0;
          for (; u < t.length && (l == null || t[u].seq != null && t[u].seq < l); )
            u++;
          t.splice(u, 0, { seq: l, name: f }), h = u;
          for (let d of n)
            d.field >= h && d.field++;
        }
        n.push(new ba(h, i.length, s.index, s.index + f.length)), o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let f of n)
          f.line == i.length && f.from > h && (f.from--, f.to--);
        return a;
      }), i.push(o);
    }
    return new uo(i, n);
  }
};
c(uo, "Snippet");
let Qa = uo, Sb = /* @__PURE__ */ j.widget({ widget: /* @__PURE__ */ new class extends vt {
  toDOM() {
    let r = document.createElement("span");
    return r.className = "cm-snippetFieldPosition", r;
  }
  ignoreEvent() {
    return !1;
  }
}() }), Qb = /* @__PURE__ */ j.mark({ class: "cm-snippetField" });
const Oo = class Oo {
  constructor(e, t) {
    this.ranges = e, this.active = t, this.deco = j.set(e.map((i) => (i.from == i.to ? Sb : Qb).range(i.from, i.to)));
  }
  map(e) {
    let t = [];
    for (let i of this.ranges) {
      let n = i.map(e);
      if (!n)
        return null;
      t.push(n);
    }
    return new Oo(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) => this.ranges.some((i) => i.field == this.active && i.from <= t.from && i.to >= t.to));
  }
};
c(Oo, "ActiveSnippet");
let Ni = Oo;
const bn = /* @__PURE__ */ I.define({
  map(r, e) {
    return r && r.map(e);
  }
}), wb = /* @__PURE__ */ I.define(), hn = /* @__PURE__ */ Ye.define({
  create() {
    return null;
  },
  update(r, e) {
    for (let t of e.effects) {
      if (t.is(bn))
        return t.value;
      if (t.is(wb) && r)
        return new Ni(r.ranges, t.value);
    }
    return r && e.docChanged && (r = r.map(e.changes)), r && e.selection && !r.selectionInsideField(e.selection) && (r = null), r;
  },
  provide: /* @__PURE__ */ c((r) => _.decorations.from(r, (e) => e ? e.deco : j.none), "provide")
});
function mh(r, e) {
  return R.create(r.filter((t) => t.field == e).map((t) => R.range(t.from, t.to)));
}
c(mh, "fieldSelection");
function xb(r) {
  let e = Qa.parse(r);
  return (t, i, n, s) => {
    let { text: o, ranges: l } = e.instantiate(t.state, n), { main: a } = t.state.selection, h = {
      changes: { from: n, to: s == a.from ? a.to : s, insert: X.of(o) },
      scrollIntoView: !0,
      annotations: i ? [dh.of(i), le.userEvent.of("input.complete")] : void 0
    };
    if (l.length && (h.selection = mh(l, 0)), l.some((f) => f.field > 0)) {
      let f = new Ni(l, 0), u = h.effects = [bn.of(f)];
      t.state.field(hn, !1) === void 0 && u.push(I.appendConfig.of([hn, vb, Tb, pp]));
    }
    t.dispatch(t.state.update(h));
  };
}
c(xb, "snippet");
function mp(r) {
  return ({ state: e, dispatch: t }) => {
    let i = e.field(hn, !1);
    if (!i || r < 0 && i.active == 0)
      return !1;
    let n = i.active + r, s = r > 0 && !i.ranges.some((o) => o.field == n + r);
    return t(e.update({
      selection: mh(i.ranges, n),
      effects: bn.of(s ? null : new Ni(i.ranges, n)),
      scrollIntoView: !0
    })), !0;
  };
}
c(mp, "moveField");
const Pb = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.field(hn, !1) ? (e(r.update({ effects: bn.of(null) })), !0) : !1, "clearSnippet"), kb = /* @__PURE__ */ mp(1), Rb = /* @__PURE__ */ mp(-1), $b = [
  { key: "Tab", run: kb, shift: Rb },
  { key: "Escape", run: Pb }
], Wu = /* @__PURE__ */ M.define({
  combine(r) {
    return r.length ? r[0] : $b;
  }
}), vb = /* @__PURE__ */ hi.highest(/* @__PURE__ */ mn.compute([Wu], (r) => r.facet(Wu)));
function me(r, e) {
  return Object.assign(Object.assign({}, e), { apply: xb(r) });
}
c(me, "snippetCompletion");
const Tb = /* @__PURE__ */ _.domEventHandlers({
  mousedown(r, e) {
    let t = e.state.field(hn, !1), i;
    if (!t || (i = e.posAtCoords({ x: r.clientX, y: r.clientY })) == null)
      return !1;
    let n = t.ranges.find((s) => s.from <= i && s.to >= i);
    return !n || n.field == t.active ? !1 : (e.dispatch({
      selection: mh(t.ranges, n.field),
      effects: bn.of(t.ranges.some((s) => s.field > n.field) ? new Ni(t.ranges, n.field) : null),
      scrollIntoView: !0
    }), !0);
  }
}), gp = /* @__PURE__ */ new class extends ut {
}();
gp.startSide = 1;
gp.endSide = -1;
function Ab(r = {}) {
  return [
    bb,
    ce,
    ie.of(r),
    gb,
    Lb,
    pp
  ];
}
c(Ab, "autocompletion");
const Zb = [
  { key: "Ctrl-Space", run: Uu },
  { mac: "Alt-`", run: Uu },
  { key: "Escape", run: Ob },
  { key: "ArrowDown", run: /* @__PURE__ */ Un(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ Un(!1) },
  { key: "PageDown", run: /* @__PURE__ */ Un(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ Un(!1, "page") },
  { key: "Enter", run: Op }
], Lb = /* @__PURE__ */ hi.highest(/* @__PURE__ */ mn.computeN([ie], (r) => r.facet(ie).defaultKeymap ? [Zb] : []));
function Mb(r) {
  let e = r.field(ce, !1);
  return e && e.active.some((t) => t.isPending) ? "pending" : e && e.active.some(
    (t) => t.state != 0
    /* State.Inactive */
  ) ? "active" : null;
}
c(Mb, "completionStatus");
const po = class po {
  static create(e, t, i, n, s) {
    let o = n + (n << 8) + e + (t << 4) | 0;
    return new po(e, t, i, o, s, [], []);
  }
  constructor(e, t, i, n, s, o, l) {
    this.type = e, this.value = t, this.from = i, this.hash = n, this.end = s, this.children = o, this.positions = l, this.hashProp = [[C.contextHash, n]];
  }
  addChild(e, t) {
    e.prop(C.contextHash) != this.hash && (e = new V(e.type, e.children, e.positions, e.length, this.hashProp)), this.children.push(e), this.positions.push(t);
  }
  toTree(e, t = this.end) {
    let i = this.children.length - 1;
    return i >= 0 && (t = Math.max(t, this.positions[i] + this.children[i].length + this.from)), new V(e.types[this.type], this.children, this.positions, t - this.from).balance({
      makeTree: /* @__PURE__ */ c((n, s, o) => new V(te.none, n, s, o, this.hashProp), "makeTree")
    });
  }
};
c(po, "CompositeBlock");
let Rs = po;
var P;
(function(r) {
  r[r.Document = 1] = "Document", r[r.CodeBlock = 2] = "CodeBlock", r[r.FencedCode = 3] = "FencedCode", r[r.Blockquote = 4] = "Blockquote", r[r.HorizontalRule = 5] = "HorizontalRule", r[r.BulletList = 6] = "BulletList", r[r.OrderedList = 7] = "OrderedList", r[r.ListItem = 8] = "ListItem", r[r.ATXHeading1 = 9] = "ATXHeading1", r[r.ATXHeading2 = 10] = "ATXHeading2", r[r.ATXHeading3 = 11] = "ATXHeading3", r[r.ATXHeading4 = 12] = "ATXHeading4", r[r.ATXHeading5 = 13] = "ATXHeading5", r[r.ATXHeading6 = 14] = "ATXHeading6", r[r.SetextHeading1 = 15] = "SetextHeading1", r[r.SetextHeading2 = 16] = "SetextHeading2", r[r.HTMLBlock = 17] = "HTMLBlock", r[r.LinkReference = 18] = "LinkReference", r[r.Paragraph = 19] = "Paragraph", r[r.CommentBlock = 20] = "CommentBlock", r[r.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock", r[r.Escape = 22] = "Escape", r[r.Entity = 23] = "Entity", r[r.HardBreak = 24] = "HardBreak", r[r.Emphasis = 25] = "Emphasis", r[r.StrongEmphasis = 26] = "StrongEmphasis", r[r.Link = 27] = "Link", r[r.Image = 28] = "Image", r[r.InlineCode = 29] = "InlineCode", r[r.HTMLTag = 30] = "HTMLTag", r[r.Comment = 31] = "Comment", r[r.ProcessingInstruction = 32] = "ProcessingInstruction", r[r.Autolink = 33] = "Autolink", r[r.HeaderMark = 34] = "HeaderMark", r[r.QuoteMark = 35] = "QuoteMark", r[r.ListMark = 36] = "ListMark", r[r.LinkMark = 37] = "LinkMark", r[r.EmphasisMark = 38] = "EmphasisMark", r[r.CodeMark = 39] = "CodeMark", r[r.CodeText = 40] = "CodeText", r[r.CodeInfo = 41] = "CodeInfo", r[r.LinkTitle = 42] = "LinkTitle", r[r.LinkLabel = 43] = "LinkLabel", r[r.URL = 44] = "URL";
})(P || (P = {}));
const ec = class ec {
  /**
  @internal
  */
  constructor(e, t) {
    this.start = e, this.content = t, this.marks = [], this.parsers = [];
  }
};
c(ec, "LeafBlock");
let wa = ec;
const tc = class tc {
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
c(tc, "Line");
let xa = tc;
function Xu(r, e, t) {
  if (t.pos == t.text.length || r != e.block && t.indent >= e.stack[t.depth + 1].value + t.baseIndent)
    return !0;
  if (t.indent >= t.baseIndent + 4)
    return !1;
  let i = (r.type == P.OrderedList ? bh : yh)(t, e, !1);
  return i > 0 && (r.type != P.BulletList || gh(t, e, !1) < 0) && t.text.charCodeAt(t.pos + i - 1) == r.value;
}
c(Xu, "skipForList");
const yp = {
  [P.Blockquote](r, e, t) {
    return t.next != 62 ? !1 : (t.markers.push(W(P.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1)), t.moveBase(t.pos + (Ve(t.text.charCodeAt(t.pos + 1)) ? 2 : 1)), r.end = e.lineStart + t.text.length, !0);
  },
  [P.ListItem](r, e, t) {
    return t.indent < t.baseIndent + r.value && t.next > -1 ? !1 : (t.moveBaseColumn(t.baseIndent + r.value), !0);
  },
  [P.OrderedList]: Xu,
  [P.BulletList]: Xu,
  [P.Document]() {
    return !0;
  }
};
function Ve(r) {
  return r == 32 || r == 9 || r == 10 || r == 13;
}
c(Ve, "space$2");
function wr(r, e = 0) {
  for (; e < r.length && Ve(r.charCodeAt(e)); )
    e++;
  return e;
}
c(wr, "skipSpace");
function Yu(r, e, t) {
  for (; e > t && Ve(r.charCodeAt(e - 1)); )
    e--;
  return e;
}
c(Yu, "skipSpaceBack");
function bp(r) {
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
c(bp, "isFencedCode");
function Sp(r) {
  return r.next != 62 ? -1 : r.text.charCodeAt(r.pos + 1) == 32 ? 2 : 1;
}
c(Sp, "isBlockquote");
function gh(r, e, t) {
  if (r.next != 42 && r.next != 45 && r.next != 95)
    return -1;
  let i = 1;
  for (let n = r.pos + 1; n < r.text.length; n++) {
    let s = r.text.charCodeAt(n);
    if (s == r.next)
      i++;
    else if (!Ve(s))
      return -1;
  }
  return t && r.next == 45 && xp(r) > -1 && r.depth == e.stack.length && e.parser.leafBlockParsers.indexOf($p.SetextHeading) > -1 || i < 3 ? -1 : 1;
}
c(gh, "isHorizontalRule");
function Qp(r, e) {
  for (let t = r.stack.length - 1; t >= 0; t--)
    if (r.stack[t].type == e)
      return !0;
  return !1;
}
c(Qp, "inList");
function yh(r, e, t) {
  return (r.next == 45 || r.next == 43 || r.next == 42) && (r.pos == r.text.length - 1 || Ve(r.text.charCodeAt(r.pos + 1))) && (!t || Qp(e, P.BulletList) || r.skipSpace(r.pos + 2) < r.text.length) ? 1 : -1;
}
c(yh, "isBulletList");
function bh(r, e, t) {
  let i = r.pos, n = r.next;
  for (; n >= 48 && n <= 57; ) {
    i++;
    if (i == r.text.length)
      return -1;
    n = r.text.charCodeAt(i);
  }
  return i == r.pos || i > r.pos + 9 || n != 46 && n != 41 || i < r.text.length - 1 && !Ve(r.text.charCodeAt(i + 1)) || t && !Qp(e, P.OrderedList) && (r.skipSpace(i + 1) == r.text.length || i > r.pos + 1 || r.next != 49) ? -1 : i + 1 - r.pos;
}
c(bh, "isOrderedList");
function wp(r) {
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
c(wp, "isAtxHeading");
function xp(r) {
  if (r.next != 45 && r.next != 61 || r.indent >= r.baseIndent + 4)
    return -1;
  let e = r.pos + 1;
  for (; e < r.text.length && r.text.charCodeAt(e) == r.next; )
    e++;
  let t = e;
  for (; e < r.text.length && Ve(r.text.charCodeAt(e)); )
    e++;
  return e == r.text.length ? t : -1;
}
c(xp, "isSetextUnderline");
const Pa = /^[ \t]*$/, Pp = /-->/, kp = /\?>/, ka = [
  [/^<(?:script|pre|style)(?:\s|>|$)/i, /<\/(?:script|pre|style)>/i],
  [/^\s*<!--/, Pp],
  [/^\s*<\?/, kp],
  [/^\s*<![A-Z]/, />/],
  [/^\s*<!\[CDATA\[/, /\]\]>/],
  [/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i, Pa],
  [/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i, Pa]
];
function Rp(r, e, t) {
  if (r.next != 60)
    return -1;
  let i = r.text.slice(r.pos);
  for (let n = 0, s = ka.length - (t ? 1 : 0); n < s; n++)
    if (ka[n][0].test(i))
      return n;
  return -1;
}
c(Rp, "isHTMLBlock");
function Iu(r, e) {
  let t = r.countIndent(e, r.pos, r.indent), i = r.countIndent(r.skipSpace(e), e, t);
  return i >= t + 5 ? t + 1 : i;
}
c(Iu, "getListIndent");
function Ut(r, e, t) {
  let i = r.length - 1;
  i >= 0 && r[i].to == e && r[i].type == P.CodeText ? r[i].to = t : r.push(W(P.CodeText, e, t));
}
c(Ut, "addCodeText");
const Wn = {
  LinkReference: void 0,
  IndentedCode(r, e) {
    let t = e.baseIndent + 4;
    if (e.indent < t)
      return !1;
    let i = e.findColumn(t), n = r.lineStart + i, s = r.lineStart + e.text.length, o = [], l = [];
    for (Ut(o, n, s); r.nextLine() && e.depth >= r.stack.length; )
      if (e.pos == e.text.length) {
        Ut(l, r.lineStart - 1, r.lineStart);
        for (let a of e.markers)
          l.push(a);
      } else {
        if (e.indent < t)
          break;
        {
          if (l.length) {
            for (let h of l)
              h.type == P.CodeText ? Ut(o, h.from, h.to) : o.push(h);
            l = [];
          }
          Ut(o, r.lineStart - 1, r.lineStart);
          for (let h of e.markers)
            o.push(h);
          s = r.lineStart + e.text.length;
          let a = r.lineStart + e.findColumn(e.baseIndent + 4);
          a < s && Ut(o, a, s);
        }
      }
    return l.length && (l = l.filter((a) => a.type != P.CodeText), l.length && (e.markers = l.concat(e.markers))), r.addNode(r.buffer.writeElements(o, -n).finish(P.CodeBlock, s - n), n), !0;
  },
  FencedCode(r, e) {
    let t = bp(e);
    if (t < 0)
      return !1;
    let i = r.lineStart + e.pos, n = e.next, s = t - e.pos, o = e.skipSpace(t), l = Yu(e.text, e.text.length, o), a = [W(P.CodeMark, i, i + s)];
    o < l && a.push(W(P.CodeInfo, r.lineStart + o, r.lineStart + l));
    for (let h = !0; r.nextLine() && e.depth >= r.stack.length; h = !1) {
      let f = e.pos;
      if (e.indent - e.baseIndent < 4)
        for (; f < e.text.length && e.text.charCodeAt(f) == n; )
          f++;
      if (f - e.pos >= s && e.skipSpace(f) == e.text.length) {
        for (let u of e.markers)
          a.push(u);
        a.push(W(P.CodeMark, r.lineStart + e.pos, r.lineStart + f)), r.nextLine();
        break;
      } else {
        h || Ut(a, r.lineStart - 1, r.lineStart);
        for (let O of e.markers)
          a.push(O);
        let u = r.lineStart + e.basePos, d = r.lineStart + e.text.length;
        u < d && Ut(a, u, d);
      }
    }
    return r.addNode(r.buffer.writeElements(a, -i).finish(P.FencedCode, r.prevLineEnd() - i), i), !0;
  },
  Blockquote(r, e) {
    let t = Sp(e);
    return t < 0 ? !1 : (r.startContext(P.Blockquote, e.pos), r.addNode(P.QuoteMark, r.lineStart + e.pos, r.lineStart + e.pos + 1), e.moveBase(e.pos + t), null);
  },
  HorizontalRule(r, e) {
    if (gh(e, r, !1) < 0)
      return !1;
    let t = r.lineStart + e.pos;
    return r.nextLine(), r.addNode(P.HorizontalRule, t), !0;
  },
  BulletList(r, e) {
    let t = yh(e, r, !1);
    if (t < 0)
      return !1;
    r.block.type != P.BulletList && r.startContext(P.BulletList, e.basePos, e.next);
    let i = Iu(e, e.pos + 1);
    return r.startContext(P.ListItem, e.basePos, i - e.baseIndent), r.addNode(P.ListMark, r.lineStart + e.pos, r.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  OrderedList(r, e) {
    let t = bh(e, r, !1);
    if (t < 0)
      return !1;
    r.block.type != P.OrderedList && r.startContext(P.OrderedList, e.basePos, e.text.charCodeAt(e.pos + t - 1));
    let i = Iu(e, e.pos + t);
    return r.startContext(P.ListItem, e.basePos, i - e.baseIndent), r.addNode(P.ListMark, r.lineStart + e.pos, r.lineStart + e.pos + t), e.moveBaseColumn(i), null;
  },
  ATXHeading(r, e) {
    let t = wp(e);
    if (t < 0)
      return !1;
    let i = e.pos, n = r.lineStart + i, s = Yu(e.text, e.text.length, i), o = s;
    for (; o > i && e.text.charCodeAt(o - 1) == e.next; )
      o--;
    (o == s || o == i || !Ve(e.text.charCodeAt(o - 1))) && (o = e.text.length);
    let l = r.buffer.write(P.HeaderMark, 0, t).writeElements(r.parser.parseInline(e.text.slice(i + t + 1, o), n + t + 1), -n);
    o < e.text.length && l.write(P.HeaderMark, o - i, s - i);
    let a = l.finish(P.ATXHeading1 - 1 + t, e.text.length - i);
    return r.nextLine(), r.addNode(a, n), !0;
  },
  HTMLBlock(r, e) {
    let t = Rp(e, r, !1);
    if (t < 0)
      return !1;
    let i = r.lineStart + e.pos, n = ka[t][1], s = [], o = n != Pa;
    for (; !n.test(e.text) && r.nextLine(); ) {
      if (e.depth < r.stack.length) {
        o = !1;
        break;
      }
      for (let h of e.markers)
        s.push(h);
    }
    o && r.nextLine();
    let l = n == Pp ? P.CommentBlock : n == kp ? P.ProcessingInstructionBlock : P.HTMLBlock, a = r.prevLineEnd();
    return r.addNode(r.buffer.writeElements(s, -i).finish(l, a - i), i), !0;
  },
  SetextHeading: void 0
  // Specifies relative precedence for block-continue function
}, ic = class ic {
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
    return e.addLeafElement(t, W(P.LinkReference, this.start, this.start + i, this.elts)), !0;
  }
  nextStage(e) {
    return e ? (this.pos = e.to - this.start, this.elts.push(e), this.stage++, !0) : (e === !1 && (this.stage = -1), !1);
  }
  advance(e) {
    for (; ; ) {
      if (this.stage == -1)
        return -1;
      if (this.stage == 0) {
        if (!this.nextStage(_p(e, this.pos, this.start, !0)))
          return -1;
        if (e.charCodeAt(this.pos) != 58)
          return this.stage = -1;
        this.elts.push(W(P.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
      } else if (this.stage == 1) {
        if (!this.nextStage(Lp(e, wr(e, this.pos), this.start)))
          return -1;
      } else if (this.stage == 2) {
        let t = wr(e, this.pos), i = 0;
        if (t > this.pos) {
          let n = Mp(e, t, this.start);
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
c(ic, "LinkReferenceParser");
let Ra = ic;
function Uo(r, e) {
  for (; e < r.length; e++) {
    let t = r.charCodeAt(e);
    if (t == 10)
      break;
    if (!Ve(t))
      return -1;
  }
  return e;
}
c(Uo, "lineEnd");
const rc = class rc {
  nextLine(e, t, i) {
    let n = t.depth < e.stack.length ? -1 : xp(t), s = t.next;
    if (n < 0)
      return !1;
    let o = W(P.HeaderMark, e.lineStart + t.pos, e.lineStart + n);
    return e.nextLine(), e.addLeafElement(i, W(s == 61 ? P.SetextHeading1 : P.SetextHeading2, i.start, e.prevLineEnd(), [
      ...e.parser.parseInline(i.content, i.start),
      o
    ])), !0;
  }
  finish() {
    return !1;
  }
};
c(rc, "SetextHeadingParser");
let $a = rc;
const $p = {
  LinkReference(r, e) {
    return e.content.charCodeAt(0) == 91 ? new Ra(e) : null;
  },
  SetextHeading() {
    return new $a();
  }
}, _b = [
  (r, e) => wp(e) >= 0,
  (r, e) => bp(e) >= 0,
  (r, e) => Sp(e) >= 0,
  (r, e) => yh(e, r, !0) >= 0,
  (r, e) => bh(e, r, !0) >= 0,
  (r, e) => gh(e, r, !0) >= 0,
  (r, e) => Rp(e, r, !0) >= 0
], Cb = { text: "", end: 0 }, nc = class nc {
  /**
  @internal
  */
  constructor(e, t, i, n) {
    this.parser = e, this.input = t, this.ranges = n, this.line = new xa(), this.atEnd = !1, this.reusePlaceholders = /* @__PURE__ */ new Map(), this.stoppedAt = null, this.rangeI = 0, this.to = n[n.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = n[0].from, this.block = Rs.create(P.Document, 0, this.lineStart, 0, 0), this.stack = [this.block], this.fragments = i.length ? new Ub(i, t) : null, this.readLine();
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
    let t = new wa(this.lineStart + e.pos, e.text.slice(e.pos));
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
    return t ? (this.absoluteLineStart += t, this.lineStart = Cp(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), !0) : !1;
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
    let t = Cb;
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
      if (!s(n, this, e))
        break;
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
    this.block = Rs.create(e, i, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
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
    typeof e == "number" && (e = new V(this.parser.nodeSet.types[e], Gi, Gi, (i ?? this.prevLineEnd()) - t)), this.block.addChild(e, t - this.block.from);
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
    this.addNode(this.buffer.writeElements(La(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
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
    return this.ranges.length > 1 ? vp(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
  }
  /**
  @internal
  */
  finishLeaf(e) {
    for (let i of e.parsers)
      if (i.finish(this, e))
        return;
    let t = La(this.parser.parseInline(e.content, e.start), e.marks);
    this.addNode(this.buffer.writeElements(t, -e.start).finish(P.Paragraph, e.content.length), e.start);
  }
  elt(e, t, i, n) {
    return typeof e == "string" ? W(this.parser.getNodeType(e), t, i, n) : new Ts(e, t);
  }
  /**
  @internal
  */
  get buffer() {
    return new vs(this.parser.nodeSet);
  }
};
c(nc, "BlockContext");
let va = nc;
function vp(r, e, t, i, n) {
  let s = r[e].to, o = [], l = [], a = t.from + i;
  function h(f, u) {
    for (; u ? f >= s : f > s; ) {
      let d = r[e + 1].from - s;
      i += d, f += d, e++, s = r[e].to;
    }
  }
  c(h, "movePastNext");
  for (let f = t.firstChild; f; f = f.nextSibling) {
    h(f.from + i, !0);
    let u = f.from + i, d, O = n.get(f.tree);
    O ? d = O : f.to + i > s ? (d = vp(r, e, f, i, n), h(f.to + i, !1)) : d = f.toTree(), o.push(d), l.push(u - a);
  }
  return h(t.to + i, !1), new V(t.type, o, l, t.to + i - a, t.tree ? t.tree.propValues : void 0);
}
c(vp, "injectGaps");
const mo = class mo extends ji {
  /**
  @internal
  */
  constructor(e, t, i, n, s, o, l, a, h) {
    super(), this.nodeSet = e, this.blockParsers = t, this.leafBlockParsers = i, this.blockNames = n, this.endLeafBlock = s, this.skipContextMarkup = o, this.inlineParsers = l, this.inlineNames = a, this.wrappers = h, this.nodeTypes = /* @__PURE__ */ Object.create(null);
    for (let f of e.types)
      this.nodeTypes[f.name] = f.id;
  }
  createParse(e, t, i) {
    let n = new va(this, e, t, i);
    for (let s of this.wrappers)
      n = s(n, e, t, i);
    return n;
  }
  /**
  Reconfigure the parser.
  */
  configure(e) {
    let t = Ta(e);
    if (!t)
      return this;
    let { nodeSet: i, skipContextMarkup: n } = this, s = this.blockParsers.slice(), o = this.leafBlockParsers.slice(), l = this.blockNames.slice(), a = this.inlineParsers.slice(), h = this.inlineNames.slice(), f = this.endLeafBlock.slice(), u = this.wrappers;
    if (lr(t.defineNodes)) {
      n = Object.assign({}, n);
      let d = i.types.slice(), O;
      for (let p of t.defineNodes) {
        let { name: m, block: y, composite: b, style: Q } = typeof p == "string" ? { name: p } : p;
        if (d.some((k) => k.name == m))
          continue;
        b && (n[d.length] = (k, A, Z) => b(A, Z, k.value));
        let x = d.length, $ = b ? ["Block", "BlockContext"] : y ? x >= P.ATXHeading1 && x <= P.SetextHeading2 ? ["Block", "LeafBlock", "Heading"] : ["Block", "LeafBlock"] : void 0;
        d.push(te.define({
          id: x,
          name: m,
          props: $ && [[C.group, $]]
        })), Q && (O || (O = {}), Array.isArray(Q) || Q instanceof Me ? O[m] = Q : Object.assign(O, Q));
      }
      i = new Yi(d), O && (i = i.extend(Ji(O)));
    }
    if (lr(t.props) && (i = i.extend(...t.props)), lr(t.remove))
      for (let d of t.remove) {
        let O = this.blockNames.indexOf(d), p = this.inlineNames.indexOf(d);
        O > -1 && (s[O] = o[O] = void 0), p > -1 && (a[p] = void 0);
      }
    if (lr(t.parseBlock))
      for (let d of t.parseBlock) {
        let O = l.indexOf(d.name);
        if (O > -1)
          s[O] = d.parse, o[O] = d.leaf;
        else {
          let p = d.before ? Xn(l, d.before) : d.after ? Xn(l, d.after) + 1 : l.length - 1;
          s.splice(p, 0, d.parse), o.splice(p, 0, d.leaf), l.splice(p, 0, d.name);
        }
        d.endLeaf && f.push(d.endLeaf);
      }
    if (lr(t.parseInline))
      for (let d of t.parseInline) {
        let O = h.indexOf(d.name);
        if (O > -1)
          a[O] = d.parse;
        else {
          let p = d.before ? Xn(h, d.before) : d.after ? Xn(h, d.after) + 1 : h.length - 1;
          a.splice(p, 0, d.parse), h.splice(p, 0, d.name);
        }
      }
    return t.wrap && (u = u.concat(t.wrap)), new mo(i, s, o, l, f, n, a, h, u);
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
    let i = new Za(this, e, t);
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
c(mo, "MarkdownParser");
let $s = mo;
function lr(r) {
  return r != null && r.length > 0;
}
c(lr, "nonEmpty");
function Ta(r) {
  if (!Array.isArray(r))
    return r;
  if (r.length == 0)
    return null;
  let e = Ta(r[0]);
  if (r.length == 1)
    return e;
  let t = Ta(r.slice(1));
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
c(Ta, "resolveConfig");
function Xn(r, e) {
  let t = r.indexOf(e);
  if (t < 0)
    throw new RangeError(`Position specified relative to unknown parser ${e}`);
  return t;
}
c(Xn, "findName");
let Tp = [te.none];
for (let r = 1, e; e = P[r]; r++)
  Tp[r] = te.define({
    id: r,
    name: e,
    props: r >= P.Escape ? [] : [[C.group, r in yp ? ["Block", "BlockContext"] : ["Block", "LeafBlock"]]],
    top: e == "Document"
  });
const Gi = [], sc = class sc {
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
    return V.build({
      buffer: this.content,
      nodeSet: this.nodeSet,
      reused: this.nodes,
      topID: e,
      length: t
    });
  }
};
c(sc, "Buffer");
let vs = sc;
var Ci;
let fn = (Ci = class {
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
    return new vs(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
  }
}, c(Ci, "Element"), Ci);
const oc = class oc {
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
c(oc, "TreeElement");
let Ts = oc;
function W(r, e, t, i) {
  return new fn(r, e, t, i);
}
c(W, "elt");
const Ap = { resolve: "Emphasis", mark: "EmphasisMark" }, Zp = { resolve: "Emphasis", mark: "EmphasisMark" }, di = {}, Aa = {}, lc = class lc {
  constructor(e, t, i, n) {
    this.type = e, this.from = t, this.to = i, this.side = n;
  }
};
c(lc, "InlineDelimiter");
let ge = lc;
const ju = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let cn = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
  cn = new RegExp("[\\p{S}|\\p{P}]", "u");
} catch {
}
const Wo = {
  Escape(r, e, t) {
    if (e != 92 || t == r.end - 1)
      return -1;
    let i = r.char(t + 1);
    for (let n = 0; n < ju.length; n++)
      if (ju.charCodeAt(n) == i)
        return r.append(W(P.Escape, t, t + 2));
    return -1;
  },
  Entity(r, e, t) {
    if (e != 38)
      return -1;
    let i = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(r.slice(t + 1, t + 31));
    return i ? r.append(W(P.Entity, t, t + 1 + i[0].length)) : -1;
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
          return r.append(W(P.InlineCode, t, i + 1, [
            W(P.CodeMark, t, t + n),
            W(P.CodeMark, i + 1 - n, i + 1)
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
      return r.append(W(P.Autolink, t, t + 1 + n[0].length, [
        W(P.LinkMark, t, t + 1),
        // url[0] includes the closing bracket, so exclude it from this slice
        W(P.URL, t + 1, t + n[0].length),
        W(P.LinkMark, t + n[0].length, t + 1 + n[0].length)
      ]));
    let s = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(i);
    if (s)
      return r.append(W(P.Comment, t, t + 1 + s[0].length));
    let o = /^\?[^]*?\?>/.exec(i);
    if (o)
      return r.append(W(P.ProcessingInstruction, t, t + 1 + o[0].length));
    let l = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(i);
    return l ? r.append(W(P.HTMLTag, t, t + 1 + l[0].length)) : -1;
  },
  Emphasis(r, e, t) {
    if (e != 95 && e != 42)
      return -1;
    let i = t + 1;
    for (; r.char(i) == e; )
      i++;
    let n = r.slice(t - 1, t), s = r.slice(i, i + 1), o = cn.test(n), l = cn.test(s), a = /\s|^$/.test(n), h = /\s|^$/.test(s), f = !h && (!l || a || o), u = !a && (!o || h || l), d = f && (e == 42 || !u || o), O = u && (e == 42 || !f || l);
    return r.append(new ge(e == 95 ? Ap : Zp, t, i, (d ? 1 : 0) | (O ? 2 : 0)));
  },
  HardBreak(r, e, t) {
    if (e == 92 && r.char(t + 1) == 10)
      return r.append(W(P.HardBreak, t, t + 2));
    if (e == 32) {
      let i = t + 1;
      for (; r.char(i) == 32; )
        i++;
      if (r.char(i) == 10 && i >= t + 2)
        return r.append(W(P.HardBreak, t, i + 1));
    }
    return -1;
  },
  Link(r, e, t) {
    return e == 91 ? r.append(new ge(
      di,
      t,
      t + 1,
      1
      /* Mark.Open */
    )) : -1;
  },
  Image(r, e, t) {
    return e == 33 && r.char(t + 1) == 91 ? r.append(new ge(
      Aa,
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
      if (n instanceof ge && (n.type == di || n.type == Aa)) {
        if (!n.side || r.skipSpace(n.to) == t && !/[(\[]/.test(r.slice(t + 1, t + 2)))
          return r.parts[i] = null, -1;
        let s = r.takeContent(i), o = r.parts[i] = Eb(r, s, n.type == di ? P.Link : P.Image, n.from, t + 1);
        if (n.type == di)
          for (let l = 0; l < i; l++) {
            let a = r.parts[l];
            a instanceof ge && a.type == di && (a.side = 0);
          }
        return o.to;
      }
    }
    return -1;
  }
};
function Eb(r, e, t, i, n) {
  let { text: s } = r, o = r.char(n), l = n;
  if (e.unshift(W(P.LinkMark, i, i + (t == P.Image ? 2 : 1))), e.push(W(P.LinkMark, n - 1, n)), o == 40) {
    let a = r.skipSpace(n + 1), h = Lp(s, a - r.offset, r.offset), f;
    h && (a = r.skipSpace(h.to), a != h.to && (f = Mp(s, a - r.offset, r.offset), f && (a = r.skipSpace(f.to)))), r.char(a) == 41 && (e.push(W(P.LinkMark, n, n + 1)), l = a + 1, h && e.push(h), f && e.push(f), e.push(W(P.LinkMark, a, l)));
  } else if (o == 91) {
    let a = _p(s, n - r.offset, r.offset, !1);
    a && (e.push(a), l = a.to);
  }
  return W(t, i, l, e);
}
c(Eb, "finishLink");
function Lp(r, e, t) {
  if (r.charCodeAt(e) == 60) {
    for (let n = e + 1; n < r.length; n++) {
      let s = r.charCodeAt(n);
      if (s == 62)
        return W(P.URL, e + t, n + 1 + t);
      if (s == 60 || s == 10)
        return !1;
    }
    return null;
  } else {
    let n = 0, s = e;
    for (let o = !1; s < r.length; s++) {
      let l = r.charCodeAt(s);
      if (Ve(l))
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
    return s > e ? W(P.URL, e + t, s + t) : s == r.length ? null : !1;
  }
}
c(Lp, "parseURL");
function Mp(r, e, t) {
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
        return W(P.LinkTitle, e + t, s + 1 + t);
      l == 92 && (o = !0);
    }
  }
  return null;
}
c(Mp, "parseLinkTitle");
function _p(r, e, t, i) {
  for (let n = !1, s = e + 1, o = Math.min(r.length, s + 999); s < o; s++) {
    let l = r.charCodeAt(s);
    if (n)
      n = !1;
    else {
      if (l == 93)
        return i ? !1 : W(P.LinkLabel, e + t, s + 1 + t);
      if (i && !Ve(l) && (i = !1), l == 91)
        return !1;
      l == 92 && (n = !0);
    }
  }
  return null;
}
c(_p, "parseLinkLabel");
const ac = class ac {
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
    return this.append(new ge(e, t, i, (n ? 1 : 0) | (s ? 2 : 0)));
  }
  /**
  Returns true when there is an unmatched link or image opening
  token before the current position.
  */
  get hasOpenLink() {
    for (let e = this.parts.length - 1; e >= 0; e--) {
      let t = this.parts[e];
      if (t instanceof ge && (t.type == di || t.type == Aa))
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
      if (!(n instanceof ge && n.type.resolve && n.side & 2))
        continue;
      let s = n.type == Ap || n.type == Zp, o = n.to - n.from, l, a = i - 1;
      for (; a >= e; a--) {
        let m = this.parts[a];
        if (m instanceof ge && m.side & 1 && m.type == n.type && // Ignore emphasis delimiters where the character count doesn't match
        !(s && (n.side & 1 || m.side & 2) && (m.to - m.from + o) % 3 == 0 && ((m.to - m.from) % 3 || o % 3))) {
          l = m;
          break;
        }
      }
      if (!l)
        continue;
      let h = n.type.resolve, f = [], u = l.from, d = n.to;
      if (s) {
        let m = Math.min(2, l.to - l.from, o);
        u = l.to - m, d = n.from + m, h = m == 1 ? "Emphasis" : "StrongEmphasis";
      }
      l.type.mark && f.push(this.elt(l.type.mark, u, l.to));
      for (let m = a + 1; m < i; m++)
        this.parts[m] instanceof fn && f.push(this.parts[m]), this.parts[m] = null;
      n.type.mark && f.push(this.elt(n.type.mark, n.from, d));
      let O = this.elt(h, u, d, f);
      this.parts[a] = s && l.from != u ? new ge(l.type, l.from, u, l.side) : null, (this.parts[i] = s && n.to != d ? new ge(n.type, d, n.to, n.side) : null) ? this.parts.splice(i, 0, O) : this.parts[i] = O;
    }
    let t = [];
    for (let i = e; i < this.parts.length; i++) {
      let n = this.parts[i];
      n instanceof fn && t.push(n);
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
      if (i instanceof ge && i.type == e)
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
  Skip space after the given (document) position, returning either
  the position of the next non-space character or the end of the
  section.
  */
  skipSpace(e) {
    return wr(this.text, e - this.offset) + this.offset;
  }
  elt(e, t, i, n) {
    return typeof e == "string" ? W(this.parser.getNodeType(e), t, i, n) : new Ts(e, t);
  }
};
c(ac, "InlineContext");
let Za = ac;
function La(r, e) {
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
      s instanceof fn && (t[i] = new fn(s.type, s.from, s.to, La(s.children, [n])));
    } else
      t.splice(i++, 0, n);
  }
  return t;
}
c(La, "injectMarks");
const Vb = [P.CodeBlock, P.ListItem, P.OrderedList, P.BulletList];
var Ei;
let Ub = (Ei = class {
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
      let f = Cp(t.from - i, e.ranges);
      if (t.to - i <= e.ranges[e.rangeI].to)
        e.addNode(t.tree, f);
      else {
        let u = new V(e.parser.nodeSet.types[P.Paragraph], [], [], 0, e.block.hashProp);
        e.reusePlaceholders.set(u, t.tree), e.addNode(u, f);
      }
      if (t.type.is("Block") && (Vb.indexOf(t.type.id) < 0 ? (o = t.to - i, l = e.block.children.length) : (o = a, l = h, a = t.to - i, h = e.block.children.length)), !t.nextSibling())
        break;
    }
    for (; e.block.children.length > l; )
      e.block.children.pop(), e.block.positions.pop();
    return o - s;
  }
}, c(Ei, "FragmentCursor"), Ei);
function Cp(r, e) {
  let t = r;
  for (let i = 1; i < e.length; i++) {
    let n = e[i - 1].to, s = e[i].from;
    n < r && (t -= s - n);
  }
  return t;
}
c(Cp, "toRelative");
const Wb = Ji({
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
}), Xb = new $s(new Yi(Tp).extend(Wb), Object.keys(Wn).map((r) => Wn[r]), Object.keys(Wn).map((r) => $p[r]), Object.keys(Wn), _b, yp, Object.keys(Wo).map((r) => Wo[r]), Object.keys(Wo), []);
function Yb(r, e, t) {
  let i = [];
  for (let n = r.firstChild, s = e; ; n = n.nextSibling) {
    let o = n ? n.from : t;
    if (o > s && i.push({ from: s, to: o }), !n)
      break;
    s = n.to;
  }
  return i;
}
c(Yb, "leftOverSpace");
function Ib(r) {
  let { codeParser: e, htmlParser: t } = r;
  return { wrap: HO((n, s) => {
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
    } else if (t && (o == P.HTMLBlock || o == P.HTMLTag))
      return { parser: t, overlay: Yb(n.node, n.from, n.to) };
    return null;
  }) };
}
c(Ib, "parseCode");
const jb = { resolve: "Strikethrough", mark: "StrikethroughMark" }, qb = {
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
      let i = r.slice(t - 1, t), n = r.slice(t + 2, t + 3), s = /\s|^$/.test(i), o = /\s|^$/.test(n), l = cn.test(i), a = cn.test(n);
      return r.addDelimiter(jb, t, t + 2, !o && (!a || s || l), !s && (!l || o || a));
    },
    after: "Emphasis"
  }]
};
function xr(r, e, t = 0, i, n = 0) {
  let s = 0, o = !0, l = -1, a = -1, h = !1, f = /* @__PURE__ */ c(() => {
    i.push(r.elt("TableCell", n + l, n + a, r.parser.parseInline(e.slice(l, a), n + l)));
  }, "parseCell");
  for (let u = t; u < e.length; u++) {
    let d = e.charCodeAt(u);
    d == 124 && !h ? ((!o || l > -1) && s++, o = !1, i && (l > -1 && f(), i.push(r.elt("TableDelimiter", u + n, u + n + 1))), l = a = -1) : (h || d != 32 && d != 9) && (l < 0 && (l = u), a = u + 1), h = !h && d == 92;
  }
  return l > -1 && (s++, i && f()), s;
}
c(xr, "parseRow");
function qu(r, e) {
  for (let t = e; t < r.length; t++) {
    let i = r.charCodeAt(t);
    if (i == 124)
      return !0;
    i == 92 && t++;
  }
  return !1;
}
c(qu, "hasPipe");
const Ep = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/, hc = class hc {
  constructor() {
    this.rows = null;
  }
  nextLine(e, t, i) {
    if (this.rows == null) {
      this.rows = !1;
      let n;
      if ((t.next == 45 || t.next == 58 || t.next == 124) && Ep.test(n = t.text.slice(t.pos))) {
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
c(hc, "TableParser");
let As = hc;
const Db = {
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
      return qu(e.content, 0) ? new As() : null;
    },
    endLeaf(r, e, t) {
      if (t.parsers.some((n) => n instanceof As) || !qu(e.text, e.basePos))
        return !1;
      let i = r.peekLine();
      return Ep.test(i) && xr(r, e.text, e.basePos) == xr(r, i, e.basePos);
    },
    before: "SetextHeading"
  }]
}, fc = class fc {
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
c(fc, "TaskParser");
let Ma = fc;
const Bb = {
  defineNodes: [
    { name: "Task", block: !0, style: g.list },
    { name: "TaskMarker", style: g.atom }
  ],
  parseBlock: [{
    name: "TaskList",
    leaf(r, e) {
      return /^\[[ xX]\][ \t]/.test(e.content) && r.parentType().name == "ListItem" ? new Ma() : null;
    },
    after: "SetextHeading"
  }]
}, Du = /(www\.)|(https?:\/\/)|([\w.+-]{1,100}@)|(mailto:|xmpp:)/gy, Bu = /[\w-]+(\.[\w-]+)+(\/[^\s<]*)?/gy, zb = /[\w-]+\.[\w-]+($|\/)/, zu = /[\w.+-]+@[\w-]+(\.[\w.-]+)+/gy, Nu = /\/[a-zA-Z\d@.]+/gy;
function Gu(r, e, t, i) {
  let n = 0;
  for (let s = e; s < t; s++)
    r[s] == i && n++;
  return n;
}
c(Gu, "count");
function Nb(r, e) {
  Bu.lastIndex = e;
  let t = Bu.exec(r);
  if (!t || zb.exec(t[0])[0].indexOf("_") > -1)
    return -1;
  let i = e + t[0].length;
  for (; ; ) {
    let n = r[i - 1], s;
    if (/[?!.,:*_~]/.test(n) || n == ")" && Gu(r, e, i, ")") > Gu(r, e, i, "("))
      i--;
    else if (n == ";" && (s = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(r.slice(e, i))))
      i = e + s.index;
    else
      break;
  }
  return i;
}
c(Nb, "autolinkURLEnd");
function Hu(r, e) {
  zu.lastIndex = e;
  let t = zu.exec(r);
  if (!t)
    return -1;
  let i = t[0][t[0].length - 1];
  return i == "_" || i == "-" ? -1 : e + t[0].length - (i == "." ? 1 : 0);
}
c(Hu, "autolinkEmailEnd");
const Gb = {
  parseInline: [{
    name: "Autolink",
    parse(r, e, t) {
      let i = t - r.offset;
      if (i && /\w/.test(r.text[i - 1]))
        return -1;
      Du.lastIndex = i;
      let n = Du.exec(r.text), s = -1;
      if (!n)
        return -1;
      if (n[1] || n[2]) {
        if (s = Nb(r.text, i + n[0].length), s > -1 && r.hasOpenLink) {
          let o = /([^\[\]]|\[[^\]]*\])*/.exec(r.text.slice(i, s));
          s = i + o[0].length;
        }
      } else n[3] ? s = Hu(r.text, i) : (s = Hu(r.text, i + n[0].length), s > -1 && n[0] == "xmpp:" && (Nu.lastIndex = s, n = Nu.exec(r.text), n && (s = n.index + n[0].length)));
      return s < 0 ? -1 : (r.addElement(r.elt("URL", t, s + r.offset)), s + r.offset);
    }
  }]
}, Hb = [Db, Bb, qb, Gb];
function Vp(r, e, t) {
  return (i, n, s) => {
    if (n != r || i.char(s + 1) == r)
      return -1;
    let o = [i.elt(t, s, s + 1)];
    for (let l = s + 1; l < i.end; l++) {
      let a = i.char(l);
      if (a == r)
        return i.addElement(i.elt(e, s, l + 1, o.concat(i.elt(t, l, l + 1))));
      if (a == 92 && o.push(i.elt("Escape", l, l++ + 2)), Ve(a))
        break;
    }
    return -1;
  };
}
c(Vp, "parseSubSuper");
const Fb = {
  defineNodes: [
    { name: "Superscript", style: g.special(g.content) },
    { name: "SuperscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Superscript",
    parse: Vp(94, "Superscript", "SuperscriptMark")
  }]
}, Kb = {
  defineNodes: [
    { name: "Subscript", style: g.special(g.content) },
    { name: "SubscriptMark", style: g.processingInstruction }
  ],
  parseInline: [{
    name: "Subscript",
    parse: Vp(126, "Subscript", "SubscriptMark")
  }]
}, Jb = {
  defineNodes: [{ name: "Emoji", style: g.character }],
  parseInline: [{
    name: "Emoji",
    parse(r, e, t) {
      let i;
      return e != 58 || !(i = /^[a-zA-Z_0-9]+:/.exec(r.slice(t + 1, r.end))) ? -1 : r.addElement(r.elt("Emoji", t, t + 1 + i[0].length));
    }
  }]
}, jr = class jr {
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
    return new jr(e, [], t, i, i, 0, [], 0, n ? new Zs(n, n.start) : null, 0, null);
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
    let u = a ? this.stack[a - 1] : 0, d = this.bufferBase + this.buffer.length - u;
    if (n < s.minRepeatTerm || e & 131072) {
      let O = s.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(n, h, O, d + 4, !0);
    }
    if (e & 262144)
      this.state = this.stack[a];
    else {
      let O = this.stack[a - 3];
      this.state = s.getGoto(O, n, !0);
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
      if (o > 0 && this.buffer[o - 4] != 0) {
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
    return new jr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, e);
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
    for (let t = new Ca(this); ; ) {
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
      let t = new Zs(this.curContext.tracker, e);
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
c(jr, "Stack");
let _a = jr;
const cc = class cc {
  constructor(e, t) {
    this.tracker = e, this.context = t, this.hash = e.strict ? e.hash(t) : 0;
  }
};
c(cc, "StackContext");
let Zs = cc;
const uc = class uc {
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
c(uc, "SimulatedStack");
let Ca = uc;
const qr = class qr {
  constructor(e, t, i) {
    this.stack = e, this.pos = t, this.index = i, this.buffer = e.buffer, this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new qr(e, t, t - e.bufferBase);
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
    return new qr(this.stack, this.pos, this.index);
  }
};
c(qr, "StackBufferCursor");
let Ea = qr;
function pr(r, e = Uint16Array) {
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
c(pr, "decodeArray");
const dc = class dc {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
};
c(dc, "CachedToken");
let vi = dc;
const Fu = new vi(), Oc = class Oc {
  /**
  @internal
  */
  constructor(e, t) {
    this.input = e, this.ranges = t, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Fu, this.rangeIndex = 0, this.pos = this.chunkPos = t[0].from, this.range = t[0], this.end = t[t.length - 1].to, this.readNext();
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
    if (t ? (this.token = t, t.start = e, t.lookAhead = e + 1, t.value = t.extended = -1) : this.token = Fu, this.pos != e) {
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
c(Oc, "InputStream");
let Va = Oc;
const pc = class pc {
  constructor(e, t) {
    this.data = e, this.id = t;
  }
  token(e, t) {
    let { parser: i } = t.p;
    Up(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
};
c(pc, "TokenGroup");
let kt = pc;
kt.prototype.contextual = kt.prototype.fallback = kt.prototype.extend = !1;
const mc = class mc {
  constructor(e, t, i) {
    this.precTable = t, this.elseToken = i, this.data = typeof e == "string" ? pr(e) : e;
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
c(mc, "LocalTokenGroup");
let Hi = mc;
Hi.prototype.contextual = kt.prototype.fallback = kt.prototype.extend = !1;
const gc = class gc {
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
c(gc, "ExternalTokenizer");
let Qe = gc;
function Up(r, e, t, i, n, s) {
  let o = 0, l = 1 << i, { dialect: a } = t.p.parser;
  e: for (; (l & r[o]) != 0; ) {
    let h = r[o + 1];
    for (let O = o + 3; O < h; O += 2)
      if ((r[O + 1] & l) > 0) {
        let p = r[O];
        if (a.allows(p) && (e.token.value == -1 || e.token.value == p || e1(p, e.token.value, n, s))) {
          e.acceptToken(p);
          break;
        }
      }
    let f = e.next, u = 0, d = r[o + 2];
    if (e.next < 0 && d > u && r[h + d * 3 - 3] == 65535) {
      o = r[h + d * 3 - 1];
      continue e;
    }
    for (; u < d; ) {
      let O = u + d >> 1, p = h + O + (O << 1), m = r[p], y = r[p + 1] || 65536;
      if (f < m)
        d = O;
      else if (f >= y)
        u = O + 1;
      else {
        o = r[p + 2], e.advance();
        continue e;
      }
    }
    break;
  }
}
c(Up, "readToken");
function Ku(r, e, t) {
  for (let i = e, n; (n = r[i]) != 65535; i++)
    if (n == t)
      return i - e;
  return -1;
}
c(Ku, "findOffset");
function e1(r, e, t, i) {
  let n = Ku(t, i, e);
  return n < 0 || Ku(t, i, r) < n;
}
c(e1, "overrides");
const we = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let Xo = null;
function Ju(r, e, t) {
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
c(Ju, "cutAt");
const yc = class yc {
  constructor(e, t) {
    this.fragments = e, this.nodeSet = t, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let e = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (e) {
      for (this.safeFrom = e.openStart ? Ju(e.tree, e.from + e.offset, 1) - e.offset : e.from, this.safeTo = e.openEnd ? Ju(e.tree, e.to + e.offset, -1) - e.offset : e.to; this.trees.length; )
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
      if (s instanceof V) {
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
c(yc, "FragmentCursor");
let Ua = yc;
const bc = class bc {
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
        let d = t;
        if (u.extended > -1 && (t = this.addActions(e, u.extended, u.end, t)), t = this.addActions(e, u.value, u.end, t), !f.extend && (i = u, t > d))
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
c(bc, "TokenCache");
let Wa = bc;
const Sc = class Sc {
  constructor(e, t, i, n) {
    this.parser = e, this.input = t, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Va(t, n), this.tokens = new Wa(e, this.stream), this.topTerm = e.top[1];
    let { from: s } = n[0];
    this.stacks = [_a.start(this, e.top[0], s)], this.fragments = i.length && this.stream.end - s > e.bufferLength * 4 ? new Ua(i, e.nodeSet) : null;
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
      let o = n && t1(n);
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
        let d = this.parser.nodeSet.types[u.type.id] == u.type ? s.getGoto(e.state, u.type.id) : -1;
        if (d > -1 && u.length && (!h || (u.prop(C.contextHash) || 0) == f))
          return e.useNode(u, d), we && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(u.type.id)})`), !0;
        if (!(u instanceof V) || u.children.length == 0 || u.positions[0] > 0)
          break;
        let O = u.children[0];
        if (O instanceof V && u.positions[0] == 0)
          u = O;
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
      let f = a[h++], u = a[h++], d = a[h++], O = h == a.length || !i, p = O ? e : e.split(), m = this.tokens.mainToken;
      if (p.apply(f, u, m ? m.start : p.pos, d), we && console.log(o + this.stackID(p) + ` (via ${(f & 65536) == 0 ? "shift" : `reduce of ${s.getName(
        f & 65535
        /* Action.ValueMask */
      )}`} for ${s.getName(u)} @ ${n}${p == e ? "" : ", split"})`), O)
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
        return ed(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let n = null, s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = t[o << 1], h = t[(o << 1) + 1], f = we ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (s || (s = !0, l.restart(), we && console.log(f + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let u = l.split(), d = f;
      for (let O = 0; u.forceReduce() && O < 10 && (we && console.log(d + this.stackID(u) + " (via force-reduce)"), !this.advanceFully(u, i)); O++)
        we && (d = this.stackID(u) + " -> ");
      for (let O of l.recoverByInsert(a))
        we && console.log(f + this.stackID(O) + " (via recover-insert)"), this.advanceFully(O, i);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), we && console.log(f + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), ed(l, i)) : (!n || n.score < l.score) && (n = l);
    }
    return n;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(e) {
    return e.close(), V.build({
      buffer: Ea.create(e),
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
    let t = (Xo || (Xo = /* @__PURE__ */ new WeakMap())).get(e);
    return t || Xo.set(e, t = String.fromCodePoint(this.nextStackID++)), t + e;
  }
};
c(Sc, "Parse");
let Xa = Sc;
function ed(r, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == r.pos && i.sameState(r)) {
      e[t].score < r.score && (e[t] = r);
      return;
    }
  }
  e.push(r);
}
c(ed, "pushStackDedup");
const Qc = class Qc {
  constructor(e, t, i) {
    this.source = e, this.flags = t, this.disabled = i;
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
};
c(Qc, "Dialect");
let Ya = Qc;
const Yo = /* @__PURE__ */ c((r) => r, "id"), wc = class wc {
  /**
  Define a context tracker.
  */
  constructor(e) {
    this.start = e.start, this.shift = e.shift || Yo, this.reduce = e.reduce || Yo, this.reuse = e.reuse || Yo, this.hash = e.hash || (() => 0), this.strict = e.strict !== !1;
  }
};
c(wc, "ContextTracker");
let Ls = wc;
const Dr = class Dr extends ji {
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
            for (let d = -f; d > 0; d--)
              s(l[h++], a, u);
            h++;
          }
        }
      }
    this.nodeSet = new Yi(t.map((l, a) => te.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: n[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1
    }))), e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)), this.strict = !1, this.bufferLength = zO;
    let o = pr(e.tokenData);
    this.context = e.context, this.specializerSpecs = e.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(td), this.states = pr(e.states, Uint32Array), this.data = pr(e.stateData), this.goto = pr(e.goto), this.maxTerm = e.maxTerm, this.tokenizers = e.tokenizers.map((l) => typeof l == "number" ? new kt(o, l) : l), this.topRules = e.topRules, this.dialects = e.dialects || {}, this.dynamicPrecedences = e.dynamicPrecedences || null, this.tokenPrecTable = e.tokenPrec, this.termNames = e.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(e, t, i) {
    let n = new Xa(this, e, t, i);
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
    let t = Object.assign(Object.create(Dr.prototype), this);
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
      return t.specializers[n] = td(o), o;
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
    return new Ya(e, i, n);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(e) {
    return new Dr(e);
  }
};
c(Dr, "LRParser");
let un = Dr;
function at(r, e) {
  return r[e] | r[e + 1] << 16;
}
c(at, "pair");
function t1(r) {
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
c(t1, "findFinished");
function td(r) {
  if (r.external) {
    let e = r.extend ? 1 : 0;
    return (t, i) => r.external(t, i) << 1 | e;
  }
  return r.get;
}
c(td, "getSpecializer");
const i1 = 54, r1 = 1, n1 = 55, s1 = 2, o1 = 56, l1 = 3, id = 4, a1 = 5, Ms = 6, Wp = 7, Xp = 8, Yp = 9, Ip = 10, h1 = 11, f1 = 12, c1 = 13, Io = 57, u1 = 14, rd = 58, jp = 20, d1 = 22, qp = 23, O1 = 24, Ia = 26, Dp = 27, p1 = 28, m1 = 31, g1 = 34, y1 = 36, b1 = 37, S1 = 0, Q1 = 1, w1 = {
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
}, x1 = {
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
}, nd = {
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
function P1(r) {
  return r == 45 || r == 46 || r == 58 || r >= 65 && r <= 90 || r == 95 || r >= 97 && r <= 122 || r >= 161;
}
c(P1, "nameChar");
function Bp(r) {
  return r == 9 || r == 10 || r == 13 || r == 32;
}
c(Bp, "isSpace");
let sd = null, od = null, ld = 0;
function ja(r, e) {
  let t = r.pos + e;
  if (ld == t && od == r) return sd;
  let i = r.peek(e);
  for (; Bp(i); ) i = r.peek(++e);
  let n = "";
  for (; P1(i); )
    n += String.fromCharCode(i), i = r.peek(++e);
  return od = r, ld = t, sd = n ? n.toLowerCase() : i == k1 || i == R1 ? void 0 : null;
}
c(ja, "tagNameAfter");
const zp = 60, _s = 62, Sh = 47, k1 = 63, R1 = 33, $1 = 45;
function ad(r, e) {
  this.name = r, this.parent = e;
}
c(ad, "ElementContext");
const v1 = [Ms, Ip, Wp, Xp, Yp], T1 = new Ls({
  start: null,
  shift(r, e, t, i) {
    return v1.indexOf(e) > -1 ? new ad(ja(i, 1) || "", r) : r;
  },
  reduce(r, e) {
    return e == jp && r ? r.parent : r;
  },
  reuse(r, e, t, i) {
    let n = e.type.id;
    return n == Ms || n == y1 ? new ad(ja(i, 1) || "", r) : r;
  },
  strict: !1
}), A1 = new Qe((r, e) => {
  if (r.next != zp) {
    r.next < 0 && e.context && r.acceptToken(Io);
    return;
  }
  r.advance();
  let t = r.next == Sh;
  t && r.advance();
  let i = ja(r, 0);
  if (i === void 0) return;
  if (!i) return r.acceptToken(t ? u1 : Ms);
  let n = e.context ? e.context.name : null;
  if (t) {
    if (i == n) return r.acceptToken(h1);
    if (n && x1[n]) return r.acceptToken(Io, -2);
    if (e.dialectEnabled(S1)) return r.acceptToken(f1);
    for (let s = e.context; s; s = s.parent) if (s.name == i) return;
    r.acceptToken(c1);
  } else {
    if (i == "script") return r.acceptToken(Wp);
    if (i == "style") return r.acceptToken(Xp);
    if (i == "textarea") return r.acceptToken(Yp);
    if (w1.hasOwnProperty(i)) return r.acceptToken(Ip);
    n && nd[n] && nd[n][i] ? r.acceptToken(Io, -1) : r.acceptToken(Ms);
  }
}, { contextual: !0 }), Z1 = new Qe((r) => {
  for (let e = 0, t = 0; ; t++) {
    if (r.next < 0) {
      t && r.acceptToken(rd);
      break;
    }
    if (r.next == $1)
      e++;
    else if (r.next == _s && e >= 2) {
      t >= 3 && r.acceptToken(rd, -2);
      break;
    } else
      e = 0;
    r.advance();
  }
});
function L1(r) {
  for (; r; r = r.parent)
    if (r.name == "svg" || r.name == "math") return !0;
  return !1;
}
c(L1, "inForeignElement");
const M1 = new Qe((r, e) => {
  if (r.next == Sh && r.peek(1) == _s) {
    let t = e.dialectEnabled(Q1) || L1(e.context);
    r.acceptToken(t ? a1 : id, 2);
  } else r.next == _s && r.acceptToken(id, 1);
});
function Qh(r, e, t) {
  let i = 2 + r.length;
  return new Qe((n) => {
    for (let s = 0, o = 0, l = 0; ; l++) {
      if (n.next < 0) {
        l && n.acceptToken(e);
        break;
      }
      if (s == 0 && n.next == zp || s == 1 && n.next == Sh || s >= 2 && s < i && n.next == r.charCodeAt(s - 2))
        s++, o++;
      else if ((s == 2 || s == i) && Bp(n.next))
        o++;
      else if (s == i && n.next == _s) {
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
c(Qh, "contentTokenizer");
const _1 = Qh("script", i1, r1), C1 = Qh("style", n1, s1), E1 = Qh("textarea", o1, l1), V1 = Ji({
  "Text RawText": g.content,
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
}), U1 = un.deserialize({
  version: 14,
  states: ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
  stateData: ",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
  goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 67,
  context: T1,
  nodeProps: [
    ["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag"],
    ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag"],
    ["group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity"],
    ["isolate", -11, 21, 29, 30, 32, 33, 35, 36, 37, 38, 41, 42, "ltr", -3, 26, 27, 39, ""]
  ],
  propSources: [V1],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [_1, C1, E1, M1, A1, Z1, 0, 1, 2, 3, 4, 5],
  topRules: { Document: [0, 15] },
  dialects: { noMatch: 0, selfClosing: 509 },
  tokenPrec: 511
});
function Np(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let i of r.getChildren(qp)) {
    let n = i.getChild(O1), s = i.getChild(Ia) || i.getChild(Dp);
    n && (t[e.read(n.from, n.to)] = s ? s.type.id == Ia ? e.read(s.from + 1, s.to - 1) : e.read(s.from, s.to) : "");
  }
  return t;
}
c(Np, "getAttrs");
function hd(r, e) {
  let t = r.getChild(d1);
  return t ? e.read(t.from, t.to) : " ";
}
c(hd, "findTagName");
function jo(r, e, t) {
  let i;
  for (let n of t)
    if (!n.attrs || n.attrs(i || (i = Np(r.node.parent.firstChild, e))))
      return { parser: n.parser };
  return null;
}
c(jo, "maybeNest");
function Gp(r = [], e = []) {
  let t = [], i = [], n = [], s = [];
  for (let l of r)
    (l.tag == "script" ? t : l.tag == "style" ? i : l.tag == "textarea" ? n : s).push(l);
  let o = e.length ? /* @__PURE__ */ Object.create(null) : null;
  for (let l of e) (o[l.name] || (o[l.name] = [])).push(l);
  return HO((l, a) => {
    let h = l.type.id;
    if (h == p1) return jo(l, a, t);
    if (h == m1) return jo(l, a, i);
    if (h == g1) return jo(l, a, n);
    if (h == jp && s.length) {
      let f = l.node, u = f.firstChild, d = u && hd(u, a), O;
      if (d) {
        for (let p of s)
          if (p.tag == d && (!p.attrs || p.attrs(O || (O = Np(u, a))))) {
            let m = f.lastChild, y = m.type.id == b1 ? m.from : f.to;
            if (y > u.to)
              return { parser: p.parser, overlay: [{ from: u.to, to: y }] };
          }
      }
    }
    if (o && h == qp) {
      let f = l.node, u;
      if (u = f.firstChild) {
        let d = o[a.read(u.from, u.to)];
        if (d) for (let O of d) {
          if (O.tagName && O.tagName != hd(f.parent, a)) continue;
          let p = f.lastChild;
          if (p.type.id == Ia) {
            let m = p.from + 1, y = p.lastChild, b = p.to - (y && y.isError ? 0 : 1);
            if (b > m) return { parser: O.parser, overlay: [{ from: m, to: b }] };
          } else if (p.type.id == Dp)
            return { parser: O.parser, overlay: [{ from: p.from, to: p.to }] };
        }
      }
    }
    return null;
  });
}
c(Gp, "configureNesting");
const W1 = 100, fd = 1, X1 = 101, Y1 = 102, cd = 2, Hp = [
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
], I1 = 58, j1 = 40, Fp = 95, q1 = 91, Hn = 45, D1 = 46, B1 = 35, z1 = 37, N1 = 38, G1 = 92, H1 = 10;
function dn(r) {
  return r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 161;
}
c(dn, "isAlpha");
function Kp(r) {
  return r >= 48 && r <= 57;
}
c(Kp, "isDigit");
const F1 = new Qe((r, e) => {
  for (let t = !1, i = 0, n = 0; ; n++) {
    let { next: s } = r;
    if (dn(s) || s == Hn || s == Fp || t && Kp(s))
      !t && (s != Hn || n > 0) && (t = !0), i === n && s == Hn && i++, r.advance();
    else if (s == G1 && r.peek(1) != H1)
      r.advance(), r.next > -1 && r.advance(), t = !0;
    else {
      t && r.acceptToken(s == j1 ? X1 : i == 2 && e.canShift(cd) ? cd : Y1);
      break;
    }
  }
}), K1 = new Qe((r) => {
  if (Hp.includes(r.peek(-1))) {
    let { next: e } = r;
    (dn(e) || e == Fp || e == B1 || e == D1 || e == q1 || e == I1 && dn(r.peek(1)) || e == Hn || e == N1) && r.acceptToken(W1);
  }
}), J1 = new Qe((r) => {
  if (!Hp.includes(r.peek(-1))) {
    let { next: e } = r;
    if (e == z1 && (r.advance(), r.acceptToken(fd)), dn(e)) {
      do
        r.advance();
      while (dn(r.next) || Kp(r.next));
      r.acceptToken(fd);
    }
  }
}), eS = Ji({
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
  MatchOp: g.compareOperator,
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
}), tS = { __proto__: null, lang: 34, "nth-child": 34, "nth-last-child": 34, "nth-of-type": 34, "nth-last-of-type": 34, dir: 34, "host-context": 34, url: 62, "url-prefix": 62, domain: 62, regexp: 62, selector: 140 }, iS = { __proto__: null, "@import": 120, "@media": 144, "@charset": 148, "@namespace": 152, "@keyframes": 158, "@supports": 170 }, rS = { __proto__: null, not: 134, only: 134 }, nS = un.deserialize({
  version: 14,
  states: ":jQYQ[OOO#_Q[OOP#fOWOOOOQP'#Cd'#CdOOQP'#Cc'#CcO#kQ[O'#CfO$_QXO'#CaO$fQ[O'#CiO$qQ[O'#DUO$vQ[O'#DXOOQP'#En'#EnO${QdO'#DhO%jQ[O'#DuO${QdO'#DwO%{Q[O'#DyO&WQ[O'#D|O&`Q[O'#ESO&nQ[O'#EUOOQS'#Em'#EmOOQS'#EX'#EXQYQ[OOO&uQXO'#CdO'jQWO'#DdO'oQWO'#EsO'zQ[O'#EsQOQWOOP(UO#tO'#C_POOO)C@])C@]OOQP'#Ch'#ChOOQP,59Q,59QO#kQ[O,59QO(aQ[O'#E]O({QWO,58{O)TQ[O,59TO$qQ[O,59pO$vQ[O,59sO(aQ[O,59vO(aQ[O,59xO(aQ[O,59yO)`Q[O'#DcOOQS,58{,58{OOQP'#Cl'#ClOOQO'#DS'#DSOOQP,59T,59TO)gQWO,59TO)lQWO,59TOOQP'#DW'#DWOOQP,59p,59pOOQO'#DY'#DYO)qQ`O,59sOOQS'#Cq'#CqO${QdO'#CrO)yQvO'#CtO+ZQtO,5:SOOQO'#Cy'#CyO)lQWO'#CxO+oQWO'#CzO+tQ[O'#DPOOQS'#Ep'#EpOOQO'#Dk'#DkO+|Q[O'#DrO,[QWO'#EtO&`Q[O'#DpO,jQWO'#DsOOQO'#Eu'#EuO)OQWO,5:aO,oQpO,5:cOOQS'#D{'#D{O,wQWO,5:eO,|Q[O,5:eOOQO'#EO'#EOO-UQWO,5:hO-ZQWO,5:nO-cQWO,5:pOOQS-E8V-E8VO-kQdO,5:OO-{Q[O'#E_O.YQWO,5;_O.YQWO,5;_POOO'#EW'#EWP.eO#tO,58yPOOO,58y,58yOOQP1G.l1G.lO/[QXO,5:wOOQO-E8Z-E8ZOOQS1G.g1G.gOOQP1G.o1G.oO)gQWO1G.oO)lQWO1G.oOOQP1G/[1G/[O/iQ`O1G/_O0SQXO1G/bO0jQXO1G/dO1QQXO1G/eO1hQWO,59}O1mQ[O'#DTO1tQdO'#CpOOQP1G/_1G/_O${QdO1G/_O1{QpO,59^OOQS,59`,59`O${QdO,59bO2TQWO1G/nOOQS,59d,59dO2YQ!bO,59fOOQS'#DQ'#DQOOQS'#EZ'#EZO2eQ[O,59kOOQS,59k,59kO2mQWO'#DkO2xQWO,5:WO2}QWO,5:^O&`Q[O,5:YO&`Q[O'#E`O3VQWO,5;`O3bQWO,5:[O(aQ[O,5:_OOQS1G/{1G/{OOQS1G/}1G/}OOQS1G0P1G0PO3sQWO1G0PO3xQdO'#EPOOQS1G0S1G0SOOQS1G0Y1G0YOOQS1G0[1G0[O4TQtO1G/jOOQO1G/j1G/jOOQO,5:y,5:yO4kQ[O,5:yOOQO-E8]-E8]O4xQWO1G0yPOOO-E8U-E8UPOOO1G.e1G.eOOQP7+$Z7+$ZOOQP7+$y7+$yO${QdO7+$yOOQS1G/i1G/iO5TQXO'#ErO5[QWO,59oO5aQtO'#EYO6XQdO'#EoO6cQWO,59[O6hQpO7+$yOOQS1G.x1G.xOOQS1G.|1G.|OOQS7+%Y7+%YOOQS1G/Q1G/QO6pQWO1G/QOOQS-E8X-E8XOOQS1G/V1G/VO${QdO1G/rOOQO1G/x1G/xOOQO1G/t1G/tO6uQWO,5:zOOQO-E8^-E8^O7TQXO1G/yOOQS7+%k7+%kO7[QYO'#CtOOQO'#ER'#ERO7gQ`O'#EQOOQO'#EQ'#EQO7rQWO'#EaO7zQdO,5:kOOQS,5:k,5:kO8VQtO'#E^O${QdO'#E^O9WQdO7+%UOOQO7+%U7+%UOOQO1G0e1G0eO9kQpO<<HeO9sQWO,5;^OOQP1G/Z1G/ZOOQS-E8W-E8WO${QdO'#E[O9{QWO,5;ZOOQT1G.v1G.vOOQP<<He<<HeOOQS7+$l7+$lO:TQdO7+%^OOQO7+%e7+%eOOQO,5:l,5:lO3{QdO'#EbO7rQWO,5:{OOQS,5:{,5:{OOQS-E8_-E8_OOQS1G0V1G0VO:[QtO,5:xOOQS-E8[-E8[OOQO<<Hp<<HpOOQPAN>PAN>PO;]QdO,5:vOOQO-E8Y-E8YOOQO<<Hx<<HxOOQO,5:|,5:|OOQO-E8`-E8`OOQS1G0g1G0g",
  stateData: ";o~O#[OS#]QQ~OUYOXYOZTO^VO_VOrXOyWO!]aO!^ZO!j[O!l]O!n^O!q_O!w`O#YRO~OQfOUYOXYOZTO^VO_VOrXOyWO!]aO!^ZO!j[O!l]O!n^O!q_O!w`O#YeO~O#V#gP~P!ZO#]jO~O#YlO~OZnO^qO_qOrsOuoOyrO!PtO!SvO#WuO~O!UwO~P#pOa}O#XzO#YyO~O#Y!OO~O#Y!QO~OQ![Oc!TOg![Oi![Oo!YOr!ZO#X!WO#Y!SO#e!UO~Oc!^O!e!`O!h!aO#Y!]O!U#hP~Oi!fOo!YO#Y!eO~Oi!hO#Y!hO~Oc!^O!e!`O!h!aO#Y!]O~O!Z#hP~P%jOZWX^WX^!XX_WXrWXuWXyWX!PWX!SWX!UWX#WWX~O^!mO~O!Z!nO#V#gX!T#gX~O#V#gX!T#gX~P!ZO#^!qO#_!qO#`!sO~OUYOXYOZTO^VO_VOrXOyWO#YRO~OuoO!UwO~Oa!zO#XzO#YyO~O!T#gP~P!ZOc#RO~Oc#SO~Oq#TO}#UO~OP#WOchXkhX!ZhX!ehX!hhX#YhXbhXQhXghXihXohXrhXuhX!YhX#VhX#XhX#ehXqhX!ThX~Oc!^Ok#XO!e!`O!h!aO#Y!]O!Z#hP~Oc#[O~Oq#`O#Y#]O~Oc!^O!e!`O!h!aO#Y#aO~Ou#eO!c#dO!U#hX!Z#hX~Oc#hO~Ok#XO!Z#jO~O!Z#kO~Oi#lOo!YO~O!U#mO~O!UwO!c#dO~O!UwO!Z#pO~O!Y#rO!Z!Wa#V!Wa!T!Wa~P${O!Z#RX#V#RX!T#RX~P!ZO!Z!nO#V#ga!T#ga~O#^!qO#_!qO#`#xO~OZnO^qO_qOrsOyrO!PtO!SvO#WuO~Ou#Pa!U#Pab#Pa~P.pOq#zO}#{O~OZnO^qO_qOrsOyrO~Ou!Oi!P!Oi!S!Oi!U!Oi#W!Oib!Oi~P/qOu!Qi!P!Qi!S!Qi!U!Qi#W!Qib!Qi~P/qOu!Ri!P!Ri!S!Ri!U!Ri#W!Rib!Ri~P/qO!T#|O~Ob#fP~P(aOb#cP~P${Ob$TOk#XO~O!Z$VO~Ob$WOi$XOp$XO~Oq$ZO#Y#]O~O^!aXb!_X!c!_X~O^$[O~Ob$]O!c#dO~Ou#eO!U#ha!Z#ha~O!c#dOu!da!U!da!Z!dab!da~O!Z$bO~O!T$iO#Y$dO#e$cO~Ok#XOu$kO!Y$mO!Z!Wi#V!Wi!T!Wi~P${O!Z#Ra#V#Ra!T#Ra~P!ZO!Z!nO#V#gi!T#gi~Ob#fX~P#pOb$qO~Ok#XOQ!|Xb!|Xc!|Xg!|Xi!|Xo!|Xr!|Xu!|X#X!|X#Y!|X#e!|X~Ou$sOb#cX~P${Ob$uO~Ok#XOq$vO~Ob$wO~O!c#dOu#Sa!U#Sa!Z#Sa~Ob$yO~P.pOP#WOuhX!UhX~O#e$cOu!tX!U!tX~Ou${O!UwO~O!T%PO#Y$dO#e$cO~Ok#XOQ#QXc#QXg#QXi#QXo#QXr#QXu#QX!Y#QX!Z#QX#V#QX#X#QX#Y#QX#e#QX!T#QX~Ou$kO!Y%SO!Z!Wq#V!Wq!T!Wq~P${Ok#XOq%TO~OuoOb#fa~Ou$sOb#ca~Ob%WO~P${Ok#XOQ#Qac#Qag#Qai#Qao#Qar#Qau#Qa!Y#Qa!Z#Qa#V#Qa#X#Qa#Y#Qa#e#Qa!T#Qa~Ob#Oau#Oa~P${O#[p#]#ek!S#e~",
  goto: "-g#jPPP#kP#nP#w$WP#wP$g#wPP$mPPP$s$|$|P%`P$|P$|%z&^PPPP$|&vP&z'Q#wP'W#w'^P#wP#w#wPPP'd'y(WPP#nPP(_(_(i(_P(_P(_(_P#nP#nP#nP(l#nP(o(r(u(|#nP#nP)R)X)h)v)|*S*^*d*n*t*zPPPPPPPPPP+Q+Z+v+yP,o,r,x-RRkQ_bOPdhw!n#tkYOPdhotuvw!n#R#h#tkSOPdhotuvw!n#R#h#tQmTR!tnQ{VR!xqQ!x}Q#Z!XR#y!zq![Z]!T!m#S#U#X#q#{$Q$[$k$l$s$x%Up![Z]!T!m#S#U#X#q#{$Q$[$k$l$s$x%UU$f#m$h${R$z$eq!XZ]!T!m#S#U#X#q#{$Q$[$k$l$s$x%Up![Z]!T!m#S#U#X#q#{$Q$[$k$l$s$x%UQ!f^R#l!gT#^!Z#_Q|VR!yqQ!x|R#y!yQ!PWR!{rQ!RXR!|sQxUQ!wpQ#i!cQ#o!jQ#p!kQ$}$gR%Z$|SgPwQ!phQ#s!nR$n#tZfPhw!n#ta!b[`a!V!^!`#d#eR#b!^R!g^R!i_R#n!iS$g#m$hR%X${V$e#m$h${Q!rjR#w!rQdOShPwU!ldh#tR#t!nQ$Q#SU$r$Q$x%UQ$x$[R%U$sQ#_!ZR$Y#_Q$t$QR%V$tQpUS!vp$pR$p#}Q$l#qR%R$lQ!ogS#u!o#vR#v!pQ#f!_R$`#fQ$h#mR%O$hQ$|$gR%Y$|_cOPdhw!n#t^UOPdhw!n#tQ!uoQ!}tQ#OuQ#PvQ#}#RR$a#hR$R#SQ!VZQ!d]Q#V!TQ#q!m[$P#S$Q$[$s$x%UQ$S#UQ$U#XS$j#q$lQ$o#{R%Q$kR$O#RQiPR#QwQ!c[Q!kaR#Y!VU!_[a!VQ!j`Q#c!^Q#g!`Q$^#dR$_#e",
  nodeNames: "⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent ] [ LineNames LineName , PseudoClassName ArgList IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports AtRule Styles",
  maxTerm: 117,
  nodeProps: [
    ["isolate", -2, 3, 25, ""],
    ["openedBy", 18, "(", 33, "[", 51, "{"],
    ["closedBy", 19, ")", 34, "]", 52, "}"]
  ],
  propSources: [eS],
  skippedNodes: [0, 3, 88],
  repeatNodeCount: 11,
  tokenData: "J^~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Ab![!]B]!]!^CX!^!_$}!_!`Cj!`!aC{!a!b$}!b!cDw!c!}$}!}#OFa#O#P$}#P#QFr#Q#R6d#R#T$}#T#UGT#U#c$}#c#dHf#d#o$}#o#pH{#p#q6d#q#rI^#r#sIo#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`JW<%lO$}`%QSOy%^z;'S%^;'S;=`%o<%lO%^`%cSp`Oy%^z;'S%^;'S;=`%o<%lO%^`%rP;=`<%l%^~%zh#[~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#[~p`OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^l)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^l)sUp`Oy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^l*[Up`Oy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^l*sUp`Oy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^l+[Up`Oy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^l+sUp`Oy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^l,[Up`Oy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^l,sUp`Oy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^l-[Up`Oy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^l-uS!Y[p`Oy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOi~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.Rn/zYyQOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^l0oYp`Oy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^l1dYp`Oy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^l2ZYg[p`Oy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^l3QYg[p`Oy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^l3uYp`Oy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^l4lYg[p`Oy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^l5aYp`Oy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^l6WSg[p`Oy%^z;'S%^;'S;=`%o<%lO%^d6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^d7QS}Sp`Oy%^z;'S%^;'S;=`%o<%lO%^b7cSXQOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7on9cSc^Oy%^z;'S%^;'S;=`%o<%lO%^~9tOb~n9{UUQkWOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^n:fWkW!SQOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^l;TUp`Oy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^l;nYp`#e[Oy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^l<cYp`Oy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=WUp`Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=qUp`#e[Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l>[[p`#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^n?VSu^Oy%^z;'S%^;'S;=`%o<%lO%^l?hWkWOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^n@VUZQOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTkWOy%^z{@}{;'S%^;'S;=`%o<%lO%^~AUSp`#]~Oy%^z;'S%^;'S;=`%o<%lO%^lAg[#e[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^bBbU^QOy%^z![%^![!]Bt!];'S%^;'S;=`%o<%lO%^bB{S_Qp`Oy%^z;'S%^;'S;=`%o<%lO%^nC^S!Z^Oy%^z;'S%^;'S;=`%o<%lO%^dCoS}SOy%^z;'S%^;'S;=`%o<%lO%^bDQU!PQOy%^z!`%^!`!aDd!a;'S%^;'S;=`%o<%lO%^bDkS!PQp`Oy%^z;'S%^;'S;=`%o<%lO%^bDzWOy%^z!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^bEk[!]Qp`Oy%^z}%^}!OEd!O!Q%^!Q![Ed![!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^nFfSr^Oy%^z;'S%^;'S;=`%o<%lO%^nFwSq^Oy%^z;'S%^;'S;=`%o<%lO%^bGWUOy%^z#b%^#b#cGj#c;'S%^;'S;=`%o<%lO%^bGoUp`Oy%^z#W%^#W#XHR#X;'S%^;'S;=`%o<%lO%^bHYS!cQp`Oy%^z;'S%^;'S;=`%o<%lO%^bHiUOy%^z#f%^#f#gHR#g;'S%^;'S;=`%o<%lO%^fIQS!UUOy%^z;'S%^;'S;=`%o<%lO%^nIcS!T^Oy%^z;'S%^;'S;=`%o<%lO%^fItU!SQOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^`JZP;=`<%l$}",
  tokenizers: [K1, J1, F1, 1, 2, 3, 4, new Hi("m~RRYZ[z{a~~g~aO#_~~dP!P!Qg~lO#`~~", 28, 106)],
  topRules: { StyleSheet: [0, 4], Styles: [1, 87] },
  specialized: [{ term: 101, get: /* @__PURE__ */ c((r) => tS[r] || -1, "get") }, { term: 59, get: /* @__PURE__ */ c((r) => iS[r] || -1, "get") }, { term: 102, get: /* @__PURE__ */ c((r) => rS[r] || -1, "get") }],
  tokenPrec: 1219
});
let qo = null;
function Do() {
  if (!qo && typeof document == "object" && document.body) {
    let { style: r } = document.body, e = [], t = /* @__PURE__ */ new Set();
    for (let i in r)
      i != "cssText" && i != "cssFloat" && typeof r[i] == "string" && (/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, (n) => "-" + n.toLowerCase())), t.has(i) || (e.push(i), t.add(i)));
    qo = e.sort().map((i) => ({ type: "property", label: i, apply: i + ": " }));
  }
  return qo || [];
}
c(Do, "properties");
const ud = /* @__PURE__ */ [
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
].map((r) => ({ type: "class", label: r })), dd = /* @__PURE__ */ [
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
].map((r) => ({ type: "constant", label: r }))), sS = /* @__PURE__ */ [
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
].map((r) => ({ type: "type", label: r })), oS = /* @__PURE__ */ [
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
].map((r) => ({ type: "keyword", label: r })), lt = /^(\w[\w-]*|-\w[\w-]*|)$/, lS = /^-(-[\w-]*)?$/;
function aS(r, e) {
  var t;
  if ((r.name == "(" || r.type.isError) && (r = r.parent || r), r.name != "ArgList")
    return !1;
  let i = (t = r.parent) === null || t === void 0 ? void 0 : t.firstChild;
  return (i == null ? void 0 : i.name) != "Callee" ? !1 : e.sliceString(i.from, i.to) == "var";
}
c(aS, "isVarArg");
const Od = /* @__PURE__ */ new Os(), hS = ["Declaration"];
function fS(r) {
  for (let e = r; ; ) {
    if (e.type.isTop)
      return e;
    if (!(e = e.parent))
      return r;
  }
}
c(fS, "astTop");
function Jp(r, e, t) {
  if (e.to - e.from > 4096) {
    let i = Od.get(e);
    if (i)
      return i;
    let n = [], s = /* @__PURE__ */ new Set(), o = e.cursor(B.IncludeAnonymous);
    if (o.firstChild())
      do
        for (let l of Jp(r, o.node, t))
          s.has(l.label) || (s.add(l.label), n.push(l));
      while (o.nextSibling());
    return Od.set(e, n), n;
  } else {
    let i = [], n = /* @__PURE__ */ new Set();
    return e.cursor().iterate((s) => {
      var o;
      if (t(s) && s.matchContext(hS) && ((o = s.node.nextSibling) === null || o === void 0 ? void 0 : o.name) == ":") {
        let l = r.sliceString(s.from, s.to);
        n.has(l) || (n.add(l), i.push({ label: l, type: "variable" }));
      }
    }), i;
  }
}
c(Jp, "variableNames");
const em = /* @__PURE__ */ c((r) => (e) => {
  let { state: t, pos: i } = e, n = J(t).resolveInner(i, -1), s = n.type.isError && n.from == n.to - 1 && t.doc.sliceString(n.from, n.to) == "-";
  if (n.name == "PropertyName" || (s || n.name == "TagName") && /^(Block|Styles)$/.test(n.resolve(n.to).name))
    return { from: n.from, options: Do(), validFor: lt };
  if (n.name == "ValueName")
    return { from: n.from, options: dd, validFor: lt };
  if (n.name == "PseudoClassName")
    return { from: n.from, options: ud, validFor: lt };
  if (r(n) || (e.explicit || s) && aS(n, t.doc))
    return {
      from: r(n) || s ? n.from : i,
      options: Jp(t.doc, fS(n), r),
      validFor: lS
    };
  if (n.name == "TagName") {
    for (let { parent: a } = n; a; a = a.parent)
      if (a.name == "Block")
        return { from: n.from, options: Do(), validFor: lt };
    return { from: n.from, options: sS, validFor: lt };
  }
  if (n.name == "AtKeyword")
    return { from: n.from, options: oS, validFor: lt };
  if (!e.explicit)
    return null;
  let o = n.resolve(i), l = o.childBefore(i);
  return l && l.name == ":" && o.name == "PseudoClassSelector" ? { from: i, options: ud, validFor: lt } : l && l.name == ":" && o.name == "Declaration" || o.name == "ArgList" ? { from: i, options: dd, validFor: lt } : o.name == "Block" || o.name == "Styles" ? { from: i, options: Do(), validFor: lt } : null;
}, "defineCSSCompletionSource"), tm = /* @__PURE__ */ em((r) => r.name == "VariableName"), On = /* @__PURE__ */ sn.define({
  name: "css",
  parser: /* @__PURE__ */ nS.configure({
    props: [
      /* @__PURE__ */ er.add({
        Declaration: /* @__PURE__ */ Gn()
      }),
      /* @__PURE__ */ yn.add({
        "Block KeyframeList": rp
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*\}$/,
    wordChars: "-"
  }
});
function im() {
  return new Mt(On, On.data.of({ autocomplete: tm }));
}
c(im, "css");
const cS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: im,
  cssCompletionSource: tm,
  cssLanguage: On,
  defineCSSCompletionSource: em
}, Symbol.toStringTag, { value: "Module" })), uS = 314, dS = 315, pd = 1, OS = 2, pS = 3, mS = 4, gS = 316, yS = 318, bS = 319, SS = 5, QS = 6, wS = 0, qa = [
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
], rm = 125, xS = 59, Da = 47, PS = 42, kS = 43, RS = 45, $S = 60, vS = 44, TS = 63, AS = 46, ZS = 91, LS = new Ls({
  start: !1,
  shift(r, e) {
    return e == SS || e == QS || e == yS ? r : e == bS;
  },
  strict: !1
}), MS = new Qe((r, e) => {
  let { next: t } = r;
  (t == rm || t == -1 || e.context) && r.acceptToken(gS);
}, { contextual: !0, fallback: !0 }), _S = new Qe((r, e) => {
  let { next: t } = r, i;
  qa.indexOf(t) > -1 || t == Da && ((i = r.peek(1)) == Da || i == PS) || t != rm && t != xS && t != -1 && !e.context && r.acceptToken(uS);
}, { contextual: !0 }), CS = new Qe((r, e) => {
  r.next == ZS && !e.context && r.acceptToken(dS);
}, { contextual: !0 }), ES = new Qe((r, e) => {
  let { next: t } = r;
  if (t == kS || t == RS) {
    if (r.advance(), t == r.next) {
      r.advance();
      let i = !e.context && e.canShift(pd);
      r.acceptToken(i ? pd : OS);
    }
  } else t == TS && r.peek(1) == AS && (r.advance(), r.advance(), (r.next < 48 || r.next > 57) && r.acceptToken(pS));
}, { contextual: !0 });
function Bo(r, e) {
  return r >= 65 && r <= 90 || r >= 97 && r <= 122 || r == 95 || r >= 192 || !e && r >= 48 && r <= 57;
}
c(Bo, "identifierChar");
const VS = new Qe((r, e) => {
  if (r.next != $S || !e.dialectEnabled(wS) || (r.advance(), r.next == Da)) return;
  let t = 0;
  for (; qa.indexOf(r.next) > -1; )
    r.advance(), t++;
  if (Bo(r.next, !0)) {
    for (r.advance(), t++; Bo(r.next, !1); )
      r.advance(), t++;
    for (; qa.indexOf(r.next) > -1; )
      r.advance(), t++;
    if (r.next == vS) return;
    for (let i = 0; ; i++) {
      if (i == 7) {
        if (!Bo(r.next, !0)) return;
        break;
      }
      if (r.next != "extends".charCodeAt(i)) break;
      r.advance(), t++;
    }
  }
  r.acceptToken(mS, -t);
}), US = Ji({
  "get set async static": g.modifier,
  "for while do if else switch try catch finally return throw break continue default case": g.controlKeyword,
  "in of await yield void typeof delete instanceof": g.operatorKeyword,
  "let var const using function class extends": g.definitionKeyword,
  "import export from": g.moduleKeyword,
  "with debugger as new": g.keyword,
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
}), WS = { __proto__: null, export: 20, as: 25, from: 33, default: 36, async: 41, function: 42, const: 52, extends: 56, this: 60, true: 68, false: 68, null: 80, void: 84, typeof: 88, super: 104, new: 138, delete: 150, yield: 159, await: 163, class: 168, public: 231, private: 231, protected: 231, readonly: 233, instanceof: 252, satisfies: 255, in: 256, import: 290, keyof: 347, unique: 351, infer: 357, asserts: 393, is: 395, abstract: 415, implements: 417, type: 419, let: 422, var: 424, using: 427, interface: 433, enum: 437, namespace: 443, module: 445, declare: 449, global: 453, for: 472, of: 481, while: 484, with: 488, do: 492, if: 496, else: 498, switch: 502, case: 508, try: 514, catch: 518, finally: 522, return: 526, throw: 530, break: 534, continue: 538, debugger: 542 }, XS = { __proto__: null, async: 125, get: 127, set: 129, declare: 191, public: 193, private: 193, protected: 193, static: 195, abstract: 197, override: 199, readonly: 205, accessor: 207, new: 399 }, YS = { __proto__: null, "<": 189 }, IS = un.deserialize({
  version: 14,
  states: "$EOQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#D_O.QQlO'#DeO.bQlO'#DpO%[QlO'#DxO0fQlO'#EQOOQ!0Lf'#EY'#EYO1PQ`O'#EVOOQO'#En'#EnOOQO'#Ij'#IjO1XQ`O'#GrO1dQ`O'#EmO1iQ`O'#EmO3hQ!0MxO'#JpO6[Q!0MxO'#JqO6uQ`O'#F[O6zQ,UO'#FsOOQ!0Lf'#Fe'#FeO7VO7dO'#FeO7eQMhO'#F{O9UQ`O'#FzOOQ!0Lf'#Jq'#JqOOQ!0Lb'#Jp'#JpO9ZQ`O'#GvOOQ['#K]'#K]O9fQ`O'#IWO9kQ!0LrO'#IXOOQ['#J^'#J^OOQ['#I]'#I]Q`QlOOQ`QlOOO9sQ!L^O'#DtO9zQlO'#D|O:RQlO'#EOO9aQ`O'#GrO:YQMhO'#CoO:hQ`O'#ElO:sQ`O'#EwO:xQMhO'#FdO;gQ`O'#GrOOQO'#K^'#K^O;lQ`O'#K^O;zQ`O'#GzO;zQ`O'#G{O;zQ`O'#G}O9aQ`O'#HQO<qQ`O'#HTO>YQ`O'#CeO>jQ`O'#HaO>rQ`O'#HgO>rQ`O'#HiO`QlO'#HkO>rQ`O'#HmO>rQ`O'#HpO>wQ`O'#HvO>|Q!0LsO'#H|O%[QlO'#IOO?XQ!0LsO'#IQO?dQ!0LsO'#ISO9kQ!0LrO'#IUO?oQ!0MxO'#CiO@qQpO'#DjQOQ`OOO%[QlO'#EOOAXQ`O'#ERO:YQMhO'#ElOAdQ`O'#ElOAoQ!bO'#FdOOQ['#Cg'#CgOOQ!0Lb'#Do'#DoOOQ!0Lb'#Jt'#JtO%[QlO'#JtOOQO'#Jw'#JwOOQO'#If'#IfOBoQpO'#EeOOQ!0Lb'#Ed'#EdOOQ!0Lb'#J{'#J{OCkQ!0MSO'#EeOCuQpO'#EUOOQO'#Jv'#JvODZQpO'#JwOEhQpO'#EUOCuQpO'#EePEuO&2DjO'#CbPOOO)CD{)CD{OOOO'#I^'#I^OFQO#tO,59UOOQ!0Lh,59U,59UOOOO'#I_'#I_OF`O&jO,59UOFnQ!L^O'#DaOOOO'#Ia'#IaOFuO#@ItO,59yOOQ!0Lf,59y,59yOGTQlO'#IbOGhQ`O'#JrOIgQ!fO'#JrO+}QlO'#JrOInQ`O,5:POJUQ`O'#EnOJcQ`O'#KROJnQ`O'#KQOJnQ`O'#KQOJvQ`O,5;[OJ{Q`O'#KPOOQ!0Ln,5:[,5:[OKSQlO,5:[OMQQ!0MxO,5:dOMqQ`O,5:lON[Q!0LrO'#KOONcQ`O'#J}O9ZQ`O'#J}ONwQ`O'#J}O! PQ`O,5;ZO! UQ`O'#J}O!#ZQ!fO'#JqOOQ!0Lh'#Ci'#CiO%[QlO'#EQO!#yQ!fO,5:qOOQS'#Jx'#JxOOQO-E<h-E<hO9aQ`O,5=^O!$aQ`O,5=^O!$fQlO,5;XO!&iQMhO'#EiO!(SQ`O,5;XO!(XQlO'#DwO!(cQpO,5;bO!(kQpO,5;bO%[QlO,5;bOOQ['#FS'#FSOOQ['#FU'#FUO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cO%[QlO,5;cOOQ['#FY'#FYO!(yQlO,5;sOOQ!0Lf,5;x,5;xOOQ!0Lf,5;y,5;yOOQ!0Lf,5;{,5;{O%[QlO'#InO!*|Q!0LrO,5<hO%[QlO,5;cO!&iQMhO,5;cO!+kQMhO,5;cO!-]QMhO'#E[O%[QlO,5;vOOQ!0Lf,5;z,5;zO!-dQ,UO'#FiO!.aQ,UO'#KVO!-{Q,UO'#KVO!.hQ,UO'#KVOOQO'#KV'#KVO!.|Q,UO,5<ROOOW,5<_,5<_O!/_QlO'#FuOOOW'#Im'#ImO7VO7dO,5<PO!/fQ,UO'#FwOOQ!0Lf,5<P,5<PO!0VQ$IUO'#CwOOQ!0Lh'#C{'#C{O!0jO#@ItO'#DPO!1WQMjO,5<dO!1_Q`O,5<gO!2zQ(CWO'#GWO!3XQ`O'#GXO!3^Q`O'#GXO!4|Q(CWO'#G]O!6RQpO'#GaOOQO'#Gm'#GmO!+rQMhO'#GlOOQO'#Go'#GoO!+rQMhO'#GnO!6tQ$IUO'#JjOOQ!0Lh'#Jj'#JjO!7OQ`O'#JiO!7^Q`O'#JhO!7fQ`O'#CuOOQ!0Lh'#Cy'#CyO!7qQ`O'#C{OOQ!0Lh'#DT'#DTOOQ!0Lh'#DV'#DVO1SQ`O'#DXO!+rQMhO'#GOO!+rQMhO'#GQO!7vQ`O'#GSO!7{Q`O'#GTO!3^Q`O'#GZO!+rQMhO'#G`O;zQ`O'#JiO!8QQ`O'#EoO!8oQ`O,5<fOOQ!0Lb'#Cr'#CrO!8wQ`O'#EpO!9qQpO'#EqOOQ!0Lb'#KP'#KPO!9xQ!0LrO'#K_O9kQ!0LrO,5=bO`QlO,5>rOOQ['#Jf'#JfOOQ[,5>s,5>sOOQ[-E<Z-E<ZO!;wQ!0MxO,5:`O!9lQpO,5:^O!>bQ!0MxO,5:hO%[QlO,5:hO!@xQ!0MxO,5:jOOQO,5@x,5@xO!AiQMhO,5=^O!AwQ!0LrO'#JgO9UQ`O'#JgO!BYQ!0LrO,59ZO!BeQpO,59ZO!BmQMhO,59ZO:YQMhO,59ZO!BxQ`O,5;XO!CQQ`O'#H`O!CfQ`O'#KbO%[QlO,5;|O!9lQpO,5<OO!CnQ`O,5=yO!CsQ`O,5=yO!CxQ`O,5=yO9kQ!0LrO,5=yO;zQ`O,5=iOOQO'#Cw'#CwO!DWQpO,5=fO!D`QMhO,5=gO!DkQ`O,5=iO!DpQ!bO,5=lO!DxQ`O'#K^O>wQ`O'#HVO9aQ`O'#HXO!D}Q`O'#HXO:YQMhO'#HZO!ESQ`O'#HZOOQ[,5=o,5=oO!EXQ`O'#H[O!EjQ`O'#CoO!EoQ`O,59PO!EyQ`O,59PO!HOQlO,59POOQ[,59P,59PO!H`Q!0LrO,59PO%[QlO,59PO!JkQlO'#HcOOQ['#Hd'#HdOOQ['#He'#HeO`QlO,5={O!KRQ`O,5={O`QlO,5>RO`QlO,5>TO!KWQ`O,5>VO`QlO,5>XO!K]Q`O,5>[O!KbQlO,5>bOOQ[,5>h,5>hO%[QlO,5>hO9kQ!0LrO,5>jOOQ[,5>l,5>lO# lQ`O,5>lOOQ[,5>n,5>nO# lQ`O,5>nOOQ[,5>p,5>pO#!YQpO'#D]O%[QlO'#JtO#!{QpO'#JtO##VQpO'#DkO##hQpO'#DkO#%yQlO'#DkO#&QQ`O'#JsO#&YQ`O,5:UO#&_Q`O'#ErO#&mQ`O'#KSO#&uQ`O,5;]O#&zQpO'#DkO#'XQpO'#ETOOQ!0Lf,5:m,5:mO%[QlO,5:mO#'`Q`O,5:mO>wQ`O,5;WO!BeQpO,5;WO!BmQMhO,5;WO:YQMhO,5;WO#'hQ`O,5@`O#'mQ07dO,5:qOOQO-E<d-E<dO#(sQ!0MSO,5;POCuQpO,5:pO#(}QpO,5:pOCuQpO,5;PO!BYQ!0LrO,5:pOOQ!0Lb'#Eh'#EhOOQO,5;P,5;PO%[QlO,5;PO#)[Q!0LrO,5;PO#)gQ!0LrO,5;PO!BeQpO,5:pOOQO,5;V,5;VO#)uQ!0LrO,5;PPOOO'#I['#I[P#*ZO&2DjO,58|POOO,58|,58|OOOO-E<[-E<[OOQ!0Lh1G.p1G.pOOOO-E<]-E<]OOOO,59{,59{O#*fQ!bO,59{OOOO-E<_-E<_OOQ!0Lf1G/e1G/eO#*kQ!fO,5>|O+}QlO,5>|OOQO,5?S,5?SO#*uQlO'#IbOOQO-E<`-E<`O#+SQ`O,5@^O#+[Q!fO,5@^O#+cQ`O,5@lOOQ!0Lf1G/k1G/kO%[QlO,5@mO#+kQ`O'#IhOOQO-E<f-E<fO#+cQ`O,5@lOOQ!0Lb1G0v1G0vOOQ!0Ln1G/v1G/vOOQ!0Ln1G0W1G0WO%[QlO,5@jO#,PQ!0LrO,5@jO#,bQ!0LrO,5@jO#,iQ`O,5@iO9ZQ`O,5@iO#,qQ`O,5@iO#-PQ`O'#IkO#,iQ`O,5@iOOQ!0Lb1G0u1G0uO!(cQpO,5:sO!(nQpO,5:sOOQS,5:u,5:uO#-qQdO,5:uO#-yQMhO1G2xO9aQ`O1G2xOOQ!0Lf1G0s1G0sO#.XQ!0MxO1G0sO#/^Q!0MvO,5;TOOQ!0Lh'#GV'#GVO#/zQ!0MzO'#JjO!$fQlO1G0sO#2VQ!fO'#JuO%[QlO'#JuO#2aQ`O,5:cOOQ!0Lh'#D]'#D]OOQ!0Lf1G0|1G0|O%[QlO1G0|OOQ!0Lf1G1e1G1eO#2fQ`O1G0|O#4zQ!0MxO1G0}O#5RQ!0MxO1G0}O#7iQ!0MxO1G0}O#7pQ!0MxO1G0}O#:WQ!0MxO1G0}O#<nQ!0MxO1G0}O#<uQ!0MxO1G0}O#<|Q!0MxO1G0}O#?dQ!0MxO1G0}O#?kQ!0MxO1G0}O#AxQ?MtO'#CiO#CsQ?MtO1G1_O#CzQ?MtO'#JqO#D_Q!0MxO,5?YOOQ!0Lb-E<l-E<lO#FlQ!0MxO1G0}O#GiQ!0MzO1G0}OOQ!0Lf1G0}1G0}O#HlQMjO'#JzO#HvQ`O,5:vO#H{Q!0MxO1G1bO#IoQ,UO,5<VO#IwQ,UO,5<WO#JPQ,UO'#FnO#JhQ`O'#FmOOQO'#KW'#KWOOQO'#Il'#IlO#JmQ,UO1G1mOOQ!0Lf1G1m1G1mOOOW1G1x1G1xO#KOQ?MtO'#JpO#KYQ`O,5<aO!(yQlO,5<aOOOW-E<k-E<kOOQ!0Lf1G1k1G1kO#K_QpO'#KVOOQ!0Lf,5<c,5<cO#KgQpO,5<cO#KlQMhO'#DROOOO'#I`'#I`O#KsO#@ItO,59kOOQ!0Lh,59k,59kO%[QlO1G2OO!7{Q`O'#IpO#LOQ`O,5<yOOQ!0Lh,5<v,5<vO!+rQMhO'#IsO#LlQMjO,5=WO!+rQMhO'#IuO#M_QMjO,5=YO!&iQMhO,5=[OOQO1G2R1G2RO#MiQ!dO'#CrO#M|Q(CWO'#EpO$ RQpO'#GaO$ iQ!dO,5<rO$ pQ`O'#KYO9ZQ`O'#KYO$!OQ`O,5<tO!+rQMhO,5<sO$!TQ`O'#GYO$!fQ`O,5<sO$!kQ!dO'#GVO$!xQ!dO'#KZO$#SQ`O'#KZO!&iQMhO'#KZO$#XQ`O,5<wO$#^QlO'#JtO$#hQpO'#GbO##hQpO'#GbO$#yQ`O'#GfO!3^Q`O'#GjO$$OQ!0LrO'#IrO$$ZQpO,5<{OOQ!0Lp,5<{,5<{O$$bQpO'#GbO$$oQpO'#GcO$%QQpO'#GcO$%VQMjO,5=WO$%gQMjO,5=YOOQ!0Lh,5=],5=]O!+rQMhO,5@TO!+rQMhO,5@TO$%wQ`O'#IwO$&VQ`O,5@SO$&_Q`O,59aOOQ!0Lh,59g,59gO$'UQ$IYO,59sOOQ!0Lh'#Jn'#JnO$'wQMjO,5<jO$(jQMjO,5<lO@iQ`O,5<nOOQ!0Lh,5<o,5<oO$(tQ`O,5<uO$(yQMjO,5<zO$)ZQ`O,5@TO$)iQ`O'#J}O!$fQlO1G2QO$)nQ`O1G2QO9ZQ`O'#KQO9ZQ`O'#ErO%[QlO'#ErO9ZQ`O'#IyO$)sQ!0LrO,5@yOOQ[1G2|1G2|OOQ[1G4^1G4^OOQ!0Lf1G/z1G/zOOQ!0Lf1G/x1G/xO$+uQ!0MxO1G0SOOQ[1G2x1G2xO!&iQMhO1G2xO%[QlO1G2xO#-|Q`O1G2xO$-yQMhO'#EiOOQ!0Lb,5@R,5@RO$.WQ!0LrO,5@ROOQ[1G.u1G.uO!BYQ!0LrO1G.uO!BeQpO1G.uO!BmQMhO1G.uO$.iQ`O1G0sO$.nQ`O'#CiO$.yQ`O'#KcO$/RQ`O,5=zO$/WQ`O'#KcO$/]Q`O'#KcO$/kQ`O'#JPO$/yQ`O,5@|O$0RQ!fO1G1hOOQ!0Lf1G1j1G1jO9aQ`O1G3eO@iQ`O1G3eO$0YQ`O1G3eO$0_Q`O1G3eOOQ[1G3e1G3eO!DkQ`O1G3TO!&iQMhO1G3QO$0dQ`O1G3QOOQ[1G3R1G3RO!&iQMhO1G3RO$0iQ`O1G3RO$0qQpO'#HPOOQ[1G3T1G3TO!5|QpO'#I{O!DpQ!bO1G3WOOQ[1G3W1G3WOOQ[,5=q,5=qO$0yQMhO,5=sO9aQ`O,5=sO$#yQ`O,5=uO9UQ`O,5=uO!BeQpO,5=uO!BmQMhO,5=uO:YQMhO,5=uO$1XQ`O'#KaO$1dQ`O,5=vOOQ[1G.k1G.kO$1iQ!0LrO1G.kO@iQ`O1G.kO$1tQ`O1G.kO9kQ!0LrO1G.kO$3|Q!fO,5AOO$4ZQ`O,5AOO9ZQ`O,5AOO$4fQlO,5=}O$4mQ`O,5=}OOQ[1G3g1G3gO`QlO1G3gOOQ[1G3m1G3mOOQ[1G3o1G3oO>rQ`O1G3qO$4rQlO1G3sO$8vQlO'#HrOOQ[1G3v1G3vO$9TQ`O'#HxO>wQ`O'#HzOOQ[1G3|1G3|O$9]QlO1G3|O9kQ!0LrO1G4SOOQ[1G4U1G4UOOQ!0Lb'#G^'#G^O9kQ!0LrO1G4WO9kQ!0LrO1G4YO$=dQ`O,5@`O!(yQlO,5;^O9ZQ`O,5;^O>wQ`O,5:VO!(yQlO,5:VO!BeQpO,5:VO$=iQ?MtO,5:VOOQO,5;^,5;^O$=sQpO'#IcO$>ZQ`O,5@_OOQ!0Lf1G/p1G/pO$>cQpO'#IiO$>mQ`O,5@nOOQ!0Lb1G0w1G0wO##hQpO,5:VOOQO'#Ie'#IeO$>uQpO,5:oOOQ!0Ln,5:o,5:oO#'cQ`O1G0XOOQ!0Lf1G0X1G0XO%[QlO1G0XOOQ!0Lf1G0r1G0rO>wQ`O1G0rO!BeQpO1G0rO!BmQMhO1G0rOOQ!0Lb1G5z1G5zO!BYQ!0LrO1G0[OOQO1G0k1G0kO%[QlO1G0kO$>|Q!0LrO1G0kO$?XQ!0LrO1G0kO!BeQpO1G0[OCuQpO1G0[O$?gQ!0LrO1G0kOOQO1G0[1G0[O$?{Q!0MxO1G0kPOOO-E<Y-E<YPOOO1G.h1G.hOOOO1G/g1G/gO$@VQ!bO,5<hO$@_Q!fO1G4hOOQO1G4n1G4nO%[QlO,5>|O$@iQ`O1G5xO$@qQ`O1G6WO$@yQ!fO1G6XO9ZQ`O,5?SO$ATQ!0MxO1G6UO%[QlO1G6UO$AeQ!0LrO1G6UO$AvQ`O1G6TO$AvQ`O1G6TO9ZQ`O1G6TO$BOQ`O,5?VO9ZQ`O,5?VOOQO,5?V,5?VO$BdQ`O,5?VO$)iQ`O,5?VOOQO-E<i-E<iOOQS1G0_1G0_OOQS1G0a1G0aO#-tQ`O1G0aOOQ[7+(d7+(dO!&iQMhO7+(dO%[QlO7+(dO$BrQ`O7+(dO$B}QMhO7+(dO$C]Q!0MzO,5=WO$EhQ!0MzO,5=YO$GsQ!0MzO,5=WO$JUQ!0MzO,5=YO$LgQ!0MzO,59sO$NlQ!0MzO,5<jO%!wQ!0MzO,5<lO%%SQ!0MzO,5<zOOQ!0Lf7+&_7+&_O%'eQ!0MxO7+&_O%(XQlO'#IdO%(fQ`O,5@aO%(nQ!fO,5@aOOQ!0Lf1G/}1G/}O%(xQ`O7+&hOOQ!0Lf7+&h7+&hO%(}Q?MtO,5:dO%[QlO7+&yO%)XQ?MtO,5:`O%)fQ?MtO,5:hO%)pQ?MtO,5:jO%)zQMhO'#IgO%*UQ`O,5@fOOQ!0Lh1G0b1G0bOOQO1G1q1G1qOOQO1G1r1G1rO%*^Q!jO,5<YO!(yQlO,5<XOOQO-E<j-E<jOOQ!0Lf7+'X7+'XOOOW7+'d7+'dOOOW1G1{1G1{O%*iQ`O1G1{OOQ!0Lf1G1}1G1}OOOO,59m,59mO%*nQ!dO,59mOOOO-E<^-E<^OOQ!0Lh1G/V1G/VO%*uQ!0MxO7+'jOOQ!0Lh,5?[,5?[O%+iQMhO1G2eP%+pQ`O'#IpPOQ!0Lh-E<n-E<nO%,^QMjO,5?_OOQ!0Lh-E<q-E<qO%-PQMjO,5?aOOQ!0Lh-E<s-E<sO%-ZQ!dO1G2vO%-bQ!dO'#CrO%-xQMhO'#KQO$#^QlO'#JtOOQ!0Lh1G2^1G2^O%.PQ`O'#IoO%.eQ`O,5@tO%.eQ`O,5@tO%.mQ`O,5@tO%.xQ`O,5@tOOQO1G2`1G2`O%/WQMjO1G2_O!+rQMhO1G2_O%/hQ(CWO'#IqO%/uQ`O,5@uO!&iQMhO,5@uO%/}Q!dO,5@uOOQ!0Lh1G2c1G2cO%2_Q!fO'#CiO%2iQ`O,5=OOOQ!0Lb,5<|,5<|O%2qQpO,5<|OOQ!0Lb,5<},5<}OCfQ`O,5<|O%2|QpO,5<|OOQ!0Lb,5=Q,5=QO$)iQ`O,5=UOOQO,5?^,5?^OOQO-E<p-E<pOOQ!0Lp1G2g1G2gO##hQpO,5<|O$#^QlO,5=OO%3[Q`O,5<}O%3gQpO,5<}O!+rQMhO'#IsO%4aQMjO1G2rO!+rQMhO'#IuO%5SQMjO1G2tO%5^QMjO1G5oO%5hQMjO1G5oOOQO,5?c,5?cOOQO-E<u-E<uOOQO1G.{1G.{O!9lQpO,59uO%[QlO,59uOOQ!0Lh,5<i,5<iO%5uQ`O1G2YO!+rQMhO1G2aO!+rQMhO1G5oO!+rQMhO1G5oO%5zQ!0MxO7+'lOOQ!0Lf7+'l7+'lO!$fQlO7+'lO%6nQ`O,5;^OOQ!0Lb,5?e,5?eOOQ!0Lb-E<w-E<wO%6sQ!dO'#K[O#'cQ`O7+(dO4UQ!fO7+(dO$BuQ`O7+(dO%6}Q!0MvO'#CiO%7nQ!0LrO,5=RO%8PQ!0MvO,5=RO%8dQ`O,5=ROOQ!0Lb1G5m1G5mOOQ[7+$a7+$aO!BYQ!0LrO7+$aO!BeQpO7+$aO!$fQlO7+&_O%8lQ`O'#JOO%9TQ`O,5@}OOQO1G3f1G3fO9aQ`O,5@}O%9TQ`O,5@}O%9]Q`O,5@}OOQO,5?k,5?kOOQO-E<}-E<}OOQ!0Lf7+'S7+'SO%9bQ`O7+)PO9kQ!0LrO7+)PO9aQ`O7+)PO@iQ`O7+)POOQ[7+(o7+(oO%9gQ!0MvO7+(lO!&iQMhO7+(lO!DfQ`O7+(mOOQ[7+(m7+(mO!&iQMhO7+(mO%9qQ`O'#K`O%9|Q`O,5=kOOQO,5?g,5?gOOQO-E<y-E<yOOQ[7+(r7+(rO%;`QpO'#HYOOQ[1G3_1G3_O!&iQMhO1G3_O%[QlO1G3_O%;gQ`O1G3_O%;rQMhO1G3_O9kQ!0LrO1G3aO$#yQ`O1G3aO9UQ`O1G3aO!BeQpO1G3aO!BmQMhO1G3aO%<QQ`O'#I}O%<fQ`O,5@{O%<nQpO,5@{OOQ!0Lb1G3b1G3bOOQ[7+$V7+$VO@iQ`O7+$VO9kQ!0LrO7+$VO%<yQ`O7+$VO%[QlO1G6jO%[QlO1G6kO%=OQ!0LrO1G6jO%=YQlO1G3iO%=aQ`O1G3iO%=fQlO1G3iOOQ[7+)R7+)RO9kQ!0LrO7+)]O`QlO7+)_OOQ['#Kf'#KfOOQ['#JQ'#JQO%=mQlO,5>^OOQ[,5>^,5>^O%[QlO'#HsO%=zQ`O'#HuOOQ[,5>d,5>dO9ZQ`O,5>dOOQ[,5>f,5>fOOQ[7+)h7+)hOOQ[7+)n7+)nOOQ[7+)r7+)rOOQ[7+)t7+)tO%>PQpO1G5zO%>kQ?MtO1G0xO%>uQ`O1G0xOOQO1G/q1G/qO%?QQ?MtO1G/qO>wQ`O1G/qO!(yQlO'#DkOOQO,5>},5>}OOQO-E<a-E<aOOQO,5?T,5?TOOQO-E<g-E<gO!BeQpO1G/qOOQO-E<c-E<cOOQ!0Ln1G0Z1G0ZOOQ!0Lf7+%s7+%sO#'cQ`O7+%sOOQ!0Lf7+&^7+&^O>wQ`O7+&^O!BeQpO7+&^OOQO7+%v7+%vO$?{Q!0MxO7+&VOOQO7+&V7+&VO%[QlO7+&VO%?[Q!0LrO7+&VO!BYQ!0LrO7+%vO!BeQpO7+%vO%?gQ!0LrO7+&VO%?uQ!0MxO7++pO%[QlO7++pO%@VQ`O7++oO%@VQ`O7++oOOQO1G4q1G4qO9ZQ`O1G4qO%@_Q`O1G4qOOQS7+%{7+%{O#'cQ`O<<LOO4UQ!fO<<LOO%@mQ`O<<LOOOQ[<<LO<<LOO!&iQMhO<<LOO%[QlO<<LOO%@uQ`O<<LOO%AQQ!0MzO,5?_O%C]Q!0MzO,5?aO%EhQ!0MzO1G2_O%GyQ!0MzO1G2rO%JUQ!0MzO1G2tO%LaQ!fO,5?OO%[QlO,5?OOOQO-E<b-E<bO%LkQ`O1G5{OOQ!0Lf<<JS<<JSO%LsQ?MtO1G0sO%NzQ?MtO1G0}O& RQ?MtO1G0}O&#SQ?MtO1G0}O&#ZQ?MtO1G0}O&%[Q?MtO1G0}O&']Q?MtO1G0}O&'dQ?MtO1G0}O&'kQ?MtO1G0}O&)lQ?MtO1G0}O&)sQ?MtO1G0}O&)zQ!0MxO<<JeO&+rQ?MtO1G0}O&,oQ?MvO1G0}O&-rQ?MvO'#JjO&/xQ?MtO1G1bO&0VQ?MtO1G0SO&0aQMjO,5?ROOQO-E<e-E<eO!(yQlO'#FpOOQO'#KX'#KXOOQO1G1t1G1tO&0kQ`O1G1sO&0pQ?MtO,5?YOOOW7+'g7+'gOOOO1G/X1G/XO&0zQ!dO1G4vOOQ!0Lh7+(P7+(PP!&iQMhO,5?[O!+rQMhO7+(bO&1RQ`O,5?ZO9ZQ`O,5?ZOOQO-E<m-E<mO&1aQ`O1G6`O&1aQ`O1G6`O&1iQ`O1G6`O&1tQMjO7+'yO&2UQ!dO,5?]O&2`Q`O,5?]O!&iQMhO,5?]OOQO-E<o-E<oO&2eQ!dO1G6aO&2oQ`O1G6aO&2wQ`O1G2jO!&iQMhO1G2jOOQ!0Lb1G2h1G2hOOQ!0Lb1G2i1G2iO%2qQpO1G2hO!BeQpO1G2hOCfQ`O1G2hOOQ!0Lb1G2p1G2pO&2|QpO1G2hO&3[Q`O1G2jO$)iQ`O1G2iOCfQ`O1G2iO$#^QlO1G2jO&3dQ`O1G2iO&4WQMjO,5?_OOQ!0Lh-E<r-E<rO&4yQMjO,5?aOOQ!0Lh-E<t-E<tO!+rQMhO7++ZOOQ!0Lh1G/a1G/aO&5TQ`O1G/aOOQ!0Lh7+'t7+'tO&5YQMjO7+'{O&5jQMjO7++ZO&5tQMjO7++ZO&6RQ!0MxO<<KWOOQ!0Lf<<KW<<KWO&6uQ`O1G0xO!&iQMhO'#IxO&6zQ`O,5@vO&8|Q!fO<<LOO!&iQMhO1G2mO&9TQ!0LrO1G2mOOQ[<<G{<<G{O!BYQ!0LrO<<G{O&9fQ!0MxO<<IyOOQ!0Lf<<Iy<<IyOOQO,5?j,5?jO&:YQ`O,5?jO&:_Q`O,5?jOOQO-E<|-E<|O&:mQ`O1G6iO&:mQ`O1G6iO9aQ`O1G6iO@iQ`O<<LkOOQ[<<Lk<<LkO&:uQ`O<<LkO9kQ!0LrO<<LkOOQ[<<LW<<LWO%9gQ!0MvO<<LWOOQ[<<LX<<LXO!DfQ`O<<LXO&:zQpO'#IzO&;VQ`O,5@zO!(yQlO,5@zOOQ[1G3V1G3VOOQO'#I|'#I|O9kQ!0LrO'#I|O&;_QpO,5=tOOQ[,5=t,5=tO&;fQpO'#EeO&;mQpO'#GdO&;rQ`O7+(yO&;wQ`O7+(yOOQ[7+(y7+(yO!&iQMhO7+(yO%[QlO7+(yO&<PQ`O7+(yOOQ[7+({7+({O9kQ!0LrO7+({O$#yQ`O7+({O9UQ`O7+({O!BeQpO7+({O&<[Q`O,5?iOOQO-E<{-E<{OOQO'#H]'#H]O&<gQ`O1G6gO9kQ!0LrO<<GqOOQ[<<Gq<<GqO@iQ`O<<GqO&<oQ`O7+,UO&<tQ`O7+,VO%[QlO7+,UO%[QlO7+,VOOQ[7+)T7+)TO&<yQ`O7+)TO&=OQlO7+)TO&=VQ`O7+)TOOQ[<<Lw<<LwOOQ[<<Ly<<LyOOQ[-E=O-E=OOOQ[1G3x1G3xO&=[Q`O,5>_OOQ[,5>a,5>aO&=aQ`O1G4OO9ZQ`O7+&dO!(yQlO7+&dOOQO7+%]7+%]O&=fQ?MtO1G6XO>wQ`O7+%]OOQ!0Lf<<I_<<I_OOQ!0Lf<<Ix<<IxO>wQ`O<<IxOOQO<<Iq<<IqO$?{Q!0MxO<<IqO%[QlO<<IqOOQO<<Ib<<IbO!BYQ!0LrO<<IbO&=pQ!0LrO<<IqO&={Q!0MxO<= [O&>]Q`O<= ZOOQO7+*]7+*]O9ZQ`O7+*]OOQ[ANAjANAjO&>eQ!fOANAjO!&iQMhOANAjO#'cQ`OANAjO4UQ!fOANAjO&>lQ`OANAjO%[QlOANAjO&>tQ!0MzO7+'yO&AVQ!0MzO,5?_O&CbQ!0MzO,5?aO&EmQ!0MzO7+'{O&HOQ!fO1G4jO&HYQ?MtO7+&_O&J^Q?MvO,5=WO&LeQ?MvO,5=YO&LuQ?MvO,5=WO&MVQ?MvO,5=YO&MgQ?MvO,59sO' mQ?MvO,5<jO'#pQ?MvO,5<lO'&UQ?MvO,5<zO''zQ?MtO7+'jO'(XQ?MtO7+'lO'(fQ`O,5<[OOQO7+'_7+'_OOQ!0Lh7+*b7+*bO'(kQMjO<<K|OOQO1G4u1G4uO'(rQ`O1G4uO'(}Q`O1G4uO')]Q`O7++zO')]Q`O7++zO!&iQMhO1G4wO')eQ!dO1G4wO')oQ`O7++{O')wQ`O7+(UO'*SQ!dO7+(UOOQ!0Lb7+(S7+(SOOQ!0Lb7+(T7+(TO!BeQpO7+(SOCfQ`O7+(SO'*^Q`O7+(UO!&iQMhO7+(UO$)iQ`O7+(TO'*cQ`O7+(UOCfQ`O7+(TO'*kQMjO<<NuOOQ!0Lh7+${7+${O!+rQMhO<<NuO'*uQ!dO,5?dOOQO-E<v-E<vO'+PQ!0MvO7+(XO!&iQMhO7+(XOOQ[AN=gAN=gO9aQ`O1G5UOOQO1G5U1G5UO'+aQ`O1G5UO'+fQ`O7+,TO'+fQ`O7+,TO9kQ!0LrOANBVO@iQ`OANBVOOQ[ANBVANBVOOQ[ANArANArOOQ[ANAsANAsO'+nQ`O,5?fOOQO-E<x-E<xO'+yQ?MtO1G6fOOQO,5?h,5?hOOQO-E<z-E<zOOQ[1G3`1G3`O',TQ`O,5=OOOQ[<<Le<<LeO!&iQMhO<<LeO&;rQ`O<<LeO',YQ`O<<LeO%[QlO<<LeOOQ[<<Lg<<LgO9kQ!0LrO<<LgO$#yQ`O<<LgO9UQ`O<<LgO',bQpO1G5TO',mQ`O7+,ROOQ[AN=]AN=]O9kQ!0LrOAN=]OOQ[<= p<= pOOQ[<= q<= qO',uQ`O<= pO',zQ`O<= qOOQ[<<Lo<<LoO'-PQ`O<<LoO'-UQlO<<LoOOQ[1G3y1G3yO>wQ`O7+)jO'-]Q`O<<JOO'-hQ?MtO<<JOOOQO<<Hw<<HwOOQ!0LfAN?dAN?dOOQOAN?]AN?]O$?{Q!0MxOAN?]OOQOAN>|AN>|O%[QlOAN?]OOQO<<Mw<<MwOOQ[G27UG27UO!&iQMhOG27UO#'cQ`OG27UO'-rQ!fOG27UO4UQ!fOG27UO'-yQ`OG27UO'.RQ?MtO<<JeO'.`Q?MvO1G2_O'0UQ?MvO,5?_O'2XQ?MvO,5?aO'4[Q?MvO1G2rO'6_Q?MvO1G2tO'8bQ?MtO<<KWO'8oQ?MtO<<IyOOQO1G1v1G1vO!+rQMhOANAhOOQO7+*a7+*aO'8|Q`O7+*aO'9XQ`O<= fO'9aQ!dO7+*cOOQ!0Lb<<Kp<<KpO$)iQ`O<<KpOCfQ`O<<KpO'9kQ`O<<KpO!&iQMhO<<KpOOQ!0Lb<<Kn<<KnO!BeQpO<<KnO'9vQ!dO<<KpOOQ!0Lb<<Ko<<KoO':QQ`O<<KpO!&iQMhO<<KpO$)iQ`O<<KoO':VQMjOANDaO':aQ!0MvO<<KsOOQO7+*p7+*pO9aQ`O7+*pO':qQ`O<= oOOQ[G27qG27qO9kQ!0LrOG27qO!(yQlO1G5QO':yQ`O7+,QO';RQ`O1G2jO&;rQ`OANBPOOQ[ANBPANBPO!&iQMhOANBPO';WQ`OANBPOOQ[ANBRANBRO9kQ!0LrOANBRO$#yQ`OANBROOQO'#H^'#H^OOQO7+*o7+*oOOQ[G22wG22wOOQ[ANE[ANE[OOQ[ANE]ANE]OOQ[ANBZANBZO';`Q`OANBZOOQ[<<MU<<MUO!(yQlOAN?jOOQOG24wG24wO$?{Q!0MxOG24wO#'cQ`OLD,pOOQ[LD,pLD,pO!&iQMhOLD,pO';eQ!fOLD,pO';lQ?MvO7+'yO'=bQ?MvO,5?_O'?eQ?MvO,5?aO'AhQ?MvO7+'{O'C^QMjOG27SOOQO<<M{<<M{OOQ!0LbANA[ANA[O$)iQ`OANA[OCfQ`OANA[O'CnQ!dOANA[OOQ!0LbANAYANAYO'CuQ`OANA[O!&iQMhOANA[O'DQQ!dOANA[OOQ!0LbANAZANAZOOQO<<N[<<N[OOQ[LD-]LD-]O'D[Q?MtO7+*lOOQO'#Ge'#GeOOQ[G27kG27kO&;rQ`OG27kO!&iQMhOG27kOOQ[G27mG27mO9kQ!0LrOG27mOOQ[G27uG27uO'DfQ?MtOG25UOOQOLD*cLD*cOOQ[!$(![!$(![O#'cQ`O!$(![O!&iQMhO!$(![O'DpQ!0MzOG27SOOQ!0LbG26vG26vO$)iQ`OG26vO'GRQ`OG26vOCfQ`OG26vO'G^Q!dOG26vO!&iQMhOG26vOOQ[LD-VLD-VO&;rQ`OLD-VOOQ[LD-XLD-XOOQ[!)9Ev!)9EvO#'cQ`O!)9EvOOQ!0LbLD,bLD,bO$)iQ`OLD,bOCfQ`OLD,bO'GeQ`OLD,bO'GpQ!dOLD,bOOQ[!$(!q!$(!qOOQ[!.K;b!.K;bO'GwQ?MvOG27SOOQ!0Lb!$( |!$( |O$)iQ`O!$( |OCfQ`O!$( |O'ImQ`O!$( |OOQ!0Lb!)9Eh!)9EhO$)iQ`O!)9EhOCfQ`O!)9EhOOQ!0Lb!.K;S!.K;SO$)iQ`O!.K;SOOQ!0Lb!4/0n!4/0nO!(yQlO'#DxO1PQ`O'#EVO'IxQ!fO'#JpO'JPQ!L^O'#DtO'JWQlO'#D|O'J_Q!fO'#CiO'LuQ!fO'#CiO!(yQlO'#EOO'MVQlO,5;XO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO,5;cO!(yQlO'#InO( YQ`O,5<hO!(yQlO,5;cO( bQMhO,5;cO(!{QMhO,5;cO!(yQlO,5;vO!&iQMhO'#GlO( bQMhO'#GlO!&iQMhO'#GnO( bQMhO'#GnO1SQ`O'#DXO1SQ`O'#DXO!&iQMhO'#GOO( bQMhO'#GOO!&iQMhO'#GQO( bQMhO'#GQO!&iQMhO'#G`O( bQMhO'#G`O!(yQlO,5:hO(#SQpO'#D]O(#^QpO'#JtO!(yQlO,5@mO'MVQlO1G0sO(#hQ?MtO'#CiO!(yQlO1G2OO!&iQMhO'#IsO( bQMhO'#IsO!&iQMhO'#IuO( bQMhO'#IuO(#rQ!dO'#CrO!&iQMhO,5<sO( bQMhO,5<sO'MVQlO1G2QO!(yQlO7+&yO!&iQMhO1G2_O( bQMhO1G2_O!&iQMhO'#IsO( bQMhO'#IsO!&iQMhO'#IuO( bQMhO'#IuO!&iQMhO1G2aO( bQMhO1G2aO'MVQlO7+'lO'MVQlO7+&_O!&iQMhOANAhO( bQMhOANAhO($VQ`O'#EmO($[Q`O'#EmO($dQ`O'#F[O($iQ`O'#EwO($nQ`O'#KRO($yQ`O'#KPO(%UQ`O,5;XO(%ZQMjO,5<dO(%bQ`O'#GXO(%gQ`O'#GXO(%lQ`O,5<fO(%tQ`O,5;XO(%|Q?MtO1G1_O(&TQ`O,5<sO(&YQ`O,5<sO(&_Q`O,5<uO(&dQ`O,5<uO(&iQ`O1G2QO(&nQ`O1G0sO(&sQMjO<<K|O(&zQMjO<<K|O7eQMhO'#F{O9UQ`O'#FzOAdQ`O'#ElO!(yQlO,5;sO!3^Q`O'#GXO!3^Q`O'#GXO!3^Q`O'#GZO!3^Q`O'#GZO!+rQMhO7+(bO!+rQMhO7+(bO%-ZQ!dO1G2vO%-ZQ!dO1G2vO!&iQMhO,5=[O!&iQMhO,5=[",
  stateData: "((P~O'zOS'{OSTOS'|RQ~OPYOQYOSfOY!VOaqOdzOeyOj!POnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]XO!guO!jZO!mYO!nYO!oYO!qvO!swO!vxO!z]O$V|O$miO%g}O%i!QO%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO%x!UO&U!WO&[!XO&^!YO&`!ZO&b![O&e!]O&k!^O&q!_O&s!`O&u!aO&w!bO&y!cO(RSO(TTO(WUO(_VO(m[O~OWtO~P`OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oa!wOq!nO!Q!oO!`!yO!a!vO!b!vO!z;wO#R!pO#S!pO#T!xO#U!pO#V!pO#Y!zO#Z!zO(S!lO(TTO(WUO(c!mO(m!sO~O'|!{O~OP]XR]X[]Xa]Xp]X!O]X!Q]X!Z]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X'x]X(_]X(p]X(w]X(x]X~O!e%QX~P(qO_!}O(T#PO(U!}O(V#PO~O_#QO(V#PO(W#PO(X#QO~Ov#SO!S#TO(`#TO(a#VO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R;{O(TTO(WUO(_VO(m[O~O!Y#ZO!Z#WO!W(fP!W(tP~P+}O![#cO~P`OPYOQYOSfOd!jOe!iOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(TTO(WUO(_VO(m[O~On#mO!Y#iO!z]O#g#lO#h#iO(R;|O!i(qP~P.iO!j#oO(R#nO~O!v#sO!z]O%g#tO~O#i#uO~O!e#vO#i#uO~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!Z$_O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~Oa(dX'x(dX'u(dX!i(dX!W(dX!](dX%h(dX!e(dX~P1qO#Q$dO#^$eO$P$eOP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#t(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX!](eX%h(eX~Oa(eX'x(eX'u(eX!W(eX!i(eXt(eX!e(eX~P4UO#^$eO~O$[$hO$^$gO$e$mO~OSfO!]$nO$h$oO$j$qO~Oh%VOj%cOn%WOp%XOq$tOr$tOx%YOz%ZO|%[O!Q${O!]$|O!g%aO!j$xO#h%bO$V%_O$s%]O$u%^O$x%`O(R$sO(TTO(WUO(_$uO(w$}O(x%POg([P~O!j%dO~O!Q%gO!]%hO(R%fO~O!e%lO~Oa%mO'x%mO~O!O%qO~P%[O(S!lO~P%[O%m%uO~P%[Oh%VO!j%dO(R%fO(S!lO~Oe%|O!j%dO(R%fO~O#t$RO~O!O&RO!]&OO!j&QO%i&UO(R%fO(S!lO(TTO(WUO`)UP~O!v#sO~O%r&WO!Q)QX!])QX(R)QX~O(R&XO~Oj!PO!s&^O%i!QO%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO~Od&cOe&bO!v&`O%g&aO%z&_O~P<POd&fOeyOj!PO!]&eO!s&^O!vxO!z]O%g}O%k!OO%l!OO%m!OO%p!RO%r!SO%u!TO%v!TO%x!UO~Ob&iO#^&lO%i&gO(S!lO~P=UO!j&mO!s&qO~O!j#oO~O!]XO~Oa%mO'v&yO'x%mO~Oa%mO'v&|O'x%mO~Oa%mO'v'OO'x%mO~O'u]X!W]Xt]X!i]X&Y]X!]]X%h]X!e]X~P(qO!`']O!a'UO!b'UO(S!lO(TTO(WUO~Oq'SO!Q'RO!Y'VO(c'QO![(gP![(vP~P@]Ol'`O!]'^O(R%fO~Oe'eO!j%dO(R%fO~O!O&RO!j&QO~Oq!nO!Q!oO!z;wO#R!pO#S!pO#U!pO#V!pO(S!lO(TTO(WUO(c!mO(m!sO~O!`'kO!a'jO!b'jO#T!pO#Y'lO#Z'lO~PAwOa%mOh%VO!e#vO!j%dO'x%mO(p'nO~O!n'rO#^'pO~PCVOq!nO!Q!oO(TTO(WUO(c!mO(m!sO~O!]XOq(kX!Q(kX!`(kX!a(kX!b(kX!z(kX#R(kX#S(kX#T(kX#U(kX#V(kX#Y(kX#Z(kX(S(kX(T(kX(W(kX(c(kX(m(kX~O!a'jO!b'jO(S!lO~PCuO'}'vO(O'vO(P'xO~O_!}O(T'zO(U!}O(V'zO~O_#QO(V'zO(W'zO(X#QO~Ot'|O~P%[Ov#SO!S#TO(`#TO(a(PO~O!Y(RO!W'UX!W'[X!Z'UX!Z'[X~P+}O!Z(TO!W(fX~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!Z(TO!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~O!W(fX~PGpO!W(YO~O!W(sX!Z(sX!e(sX!i(sX(p(sX~O#^(sX#i#bX![(sX~PIsO#^(ZO!W(uX!Z(uX~O!Z([O!W(tX~O!W(_O~O#^$eO~PIsO![(`O~P`OR#zO!O#yO!Q#{O!j#xO(_VOP!la[!lap!la!Z!la!n!la#P!la#l!la#m!la#n!la#o!la#p!la#q!la#r!la#s!la#t!la#u!la#w!la#y!la#z!la(p!la(w!la(x!la~Oa!la'x!la'u!la!W!la!i!lat!la!]!la%h!la!e!la~PKZO!i(aO~O!e#vO#^(bO(p'nO!Z(rXa(rX'x(rX~O!i(rX~PMvO!Q%gO!]%hO!z]O#g(gO#h(fO(R%fO~O!Z(hO!i(qX~O!i(jO~O!Q%gO!]%hO#h(fO(R%fO~OP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#t(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX~O!e#vO!i(eX~P! dOR(lO!O(kO!j#xO#Q$dO!z!ya!Q!ya~O!v!ya%g!ya!]!ya#g!ya#h!ya(R!ya~P!#eO!v(pO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]XO!guO!jZO!mYO!nYO!oYO!qvO!s!gO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~O#i(vO~O!Y(xO!i(iP~P%[O(c(zO(m[O~O!Q(|O!j#xO(c(zO(m[O~OP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]!eO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(R)ZO(TTO(WUO(_VO(m[O~O!Z$_Oa$pa'x$pa'u$pa!i$pa!W$pa!]$pa%h$pa!e$pa~Oj)bO~P!&iOh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|%[O!Q${O!]$|O!g%aO!j$xO#h%bO$V%_O$s%]O$u%^O$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~Og(nP~P!+rO!O)gO!e)fO!]$]X$Y$]X$[$]X$^$]X$e$]X~O!e)fO!](yX$Y(yX$[(yX$^(yX$e(yX~O!O)gO~P!-{O!O)gO!](yX$Y(yX$[(yX$^(yX$e(yX~O!])iO$Y)mO$[)hO$^)hO$e)nO~O!Y)qO~P!(yO$[$hO$^$gO$e)uO~Ol$yX!O$yX#Q$yX'w$yX(w$yX(x$yX~OgkXg$yXlkX!ZkX#^kX~P!/qOv)wO(`)xO(a)zO~Ol*TO!O)|O'w)}O(w$}O(x%PO~Og){O~P!0uOg*UO~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q*WO!]*XO!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(TTO(WUO(_$uO(w$}O(x%PO~O!Y*[O(R*VO!i(|P~P!1dO#i*^O~O!j*_O~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(R*aO(TTO(WUO(_$uO(w$}O(x%PO~O!Y*dO!W(}P~P!3cOp*pOq!nO!Q*fO!`*nO!a*hO!b*hO!j*_O#Y*oO%_*jO(S!lO(TTO(WUO(c!mO~O![*mO~P!5WO#Q$dOl(^X!O(^X'w(^X(w(^X(x(^X!Z(^X#^(^X~Og(^X#}(^X~P!6YOl*uO#^*tOg(]X!Z(]X~O!Z*vOg([X~Oj%cO(R&XOg([P~Oq*yO~O!j+OO~O(R(tO~On+TO!Q%gO!Y#iO!]%hO!z]O#g#lO#h#iO(R%fO!i(qP~O!e#vO#i+UO~O!Q%gO!Y+WO!Z([O!]%hO(R%fO!W(tP~Oq'YO!Q+YO!Y+XO(TTO(WUO(c(zO~O![(vP~P!9]O!Z+ZOa)RX'x)RX~OP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO#y$WO#z$XO(_VO(p$YO(w#|O(x#}O~Oa!ha!Z!ha'x!ha'u!ha!W!ha!i!hat!ha!]!ha%h!ha!e!ha~P!:TOR#zO!O#yO!Q#{O!j#xO(_VOP!pa[!pap!pa!Z!pa!n!pa#P!pa#l!pa#m!pa#n!pa#o!pa#p!pa#q!pa#r!pa#s!pa#t!pa#u!pa#w!pa#y!pa#z!pa(p!pa(w!pa(x!pa~Oa!pa'x!pa'u!pa!W!pa!i!pat!pa!]!pa%h!pa!e!pa~P!<kOR#zO!O#yO!Q#{O!j#xO(_VOP!ra[!rap!ra!Z!ra!n!ra#P!ra#l!ra#m!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#w!ra#y!ra#z!ra(p!ra(w!ra(x!ra~Oa!ra'x!ra'u!ra!W!ra!i!rat!ra!]!ra%h!ra!e!ra~P!?ROh%VOl+dO!]'^O%h+cO~O!e+fOa(ZX!](ZX'x(ZX!Z(ZX~Oa%mO!]XO'x%mO~Oh%VO!j%dO~Oh%VO!j%dO(R%fO~O!e#vO#i(vO~Ob+qO%i+rO(R+nO(TTO(WUO![)VP~O!Z+sO`)UX~O[+wO~O`+xO~O!]&OO(R%fO(S!lO`)UP~Oh%VO#^+}O~Oh%VOl,QO!]$|O~O!],SO~O!O,UO!]XO~O%m%uO~O!v,ZO~Oe,`O~Ob,aO(R#nO(TTO(WUO![)TP~Oe%|O~O%i!QO(R&XO~P=UO[,fO`,eO~OPYOQYOSfOdzOeyOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!guO!jZO!mYO!nYO!oYO!qvO!vxO!z]O$miO%g}O(TTO(WUO(_VO(m[O~O!]!eO!s!gO$V!kO(R!dO~P!FRO`,eOa%mO'x%mO~OPYOQYOSfOd!jOe!iOnkOpYOqkOrkOxkOzYO|YO!QWO!UkO!VkO!]!eO!guO!jZO!mYO!nYO!oYO!qvO!v!hO$V!kO$miO(R!dO(TTO(WUO(_VO(m[O~Oa,kOj!OO!swO%k!OO%l!OO%m!OO~P!HkO!j&mO~O&[,qO~O!],sO~O&m,uO&o,vOP&jaQ&jaS&jaY&jaa&jad&jae&jaj&jan&jap&jaq&jar&jax&jaz&ja|&ja!Q&ja!U&ja!V&ja!]&ja!g&ja!j&ja!m&ja!n&ja!o&ja!q&ja!s&ja!v&ja!z&ja$V&ja$m&ja%g&ja%i&ja%k&ja%l&ja%m&ja%p&ja%r&ja%u&ja%v&ja%x&ja&U&ja&[&ja&^&ja&`&ja&b&ja&e&ja&k&ja&q&ja&s&ja&u&ja&w&ja&y&ja'u&ja(R&ja(T&ja(W&ja(_&ja(m&ja![&ja&c&jab&ja&h&ja~O(R,{O~Oh!cX!Z!PX![!PX!e!PX!e!cX!j!cX#^!PX~O!Z!cX![!cX~P# qO!e-QO#^-POh(hX!Z#fX![#fX!e(hX!j(hX~O!Z(hX![(hX~P#!dOh%VO!e-SO!j%dO!Z!_X![!_X~Oq!nO!Q!oO(TTO(WUO(c!mO~OP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]!eO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(TTO(WUO(_VO(m[O~O(R<rO~P##yO!Z-WO![(gX~O![-YO~O!e-QO#^-PO!Z#fX![#fX~O!Z-ZO![(vX~O![-]O~O!a-^O!b-^O(S!lO~P##hO![-aO~P'_Ol-dO!]'^O~O!W-iO~Oq!ya!`!ya!a!ya!b!ya#R!ya#S!ya#T!ya#U!ya#V!ya#Y!ya#Z!ya(S!ya(T!ya(W!ya(c!ya(m!ya~P!#eO!n-nO#^-lO~PCVO!a-pO!b-pO(S!lO~PCuOa%mO#^-lO'x%mO~Oa%mO!e#vO#^-lO'x%mO~Oa%mO!e#vO!n-nO#^-lO'x%mO(p'nO~O'}'vO(O'vO(P-uO~Ot-vO~O!W'Ua!Z'Ua~P!:TO!Y-zO!W'UX!Z'UX~P%[O!Z(TO!W(fa~O!W(fa~PGpO!Z([O!W(ta~O!Q%gO!Y.OO!]%hO(R%fO!W'[X!Z'[X~O#^.QO!Z(ra!i(raa(ra'x(ra~O!e#vO~P#,PO!Z(hO!i(qa~O!Q%gO!]%hO#h.UO(R%fO~On.ZO!Q%gO!Y.WO!]%hO!z]O#g.YO#h.WO(R%fO!Z'_X!i'_X~OR._O!j#xO~Oh%VOl.bO!]'^O%h.aO~Oa#ai!Z#ai'x#ai'u#ai!W#ai!i#ait#ai!]#ai%h#ai!e#ai~P!:TOl=|O!O)|O'w)}O(w$}O(x%PO~O#i#]aa#]a#^#]a'x#]a!Z#]a!i#]a!]#]a!W#]a~P#.{O#i(^XP(^XR(^X[(^Xa(^Xp(^X!Q(^X!j(^X!n(^X#P(^X#l(^X#m(^X#n(^X#o(^X#p(^X#q(^X#r(^X#s(^X#t(^X#u(^X#w(^X#y(^X#z(^X'x(^X(_(^X(p(^X!i(^X!W(^X'u(^Xt(^X!](^X%h(^X!e(^X~P!6YO!Z.oO!i(iX~P!:TO!i.rO~O!W.tO~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O(_VO[#kia#kip#ki!Z#ki#P#ki#m#ki#n#ki#o#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#l#ki~P#2kO#l$OO~P#2kOP$[OR#zOp$aO!O#yO!Q#{O!j#xO!n$[O#l$OO#m$PO#n$PO#o$PO(_VO[#kia#ki!Z#ki#P#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#p#ki~P#5YO#p$QO~P#5YOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO(_VOa#ki!Z#ki#w#ki#y#ki#z#ki'x#ki(p#ki(w#ki(x#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#u#ki~P#7wOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO(_VO(x#}Oa#ki!Z#ki#y#ki#z#ki'x#ki(p#ki(w#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#w$UO~P#:_O#w#ki~P#:_O#u$SO~P#7wOP$[OR#zO[$cOp$aO!O#yO!Q#{O!j#xO!n$[O#P$RO#l$OO#m$PO#n$PO#o$PO#p$QO#q$RO#r$RO#s$bO#t$RO#u$SO#w$UO(_VO(w#|O(x#}Oa#ki!Z#ki#z#ki'x#ki(p#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~O#y#ki~P#=TO#y$WO~P#=TOP]XR]X[]Xp]X!O]X!Q]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X!Z]X![]X~O#}]X~P#?rOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO#w<VO#y<XO#z<YO(_VO(p$YO(w#|O(x#}O~O#}.vO~P#BPO#Q$dO#^<`O$P<`O#}(eX![(eX~P! dOa'ba!Z'ba'x'ba'u'ba!i'ba!W'bat'ba!]'ba%h'ba!e'ba~P!:TO[#kia#kip#ki!Z#ki#P#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki'x#ki(p#ki'u#ki!W#ki!i#kit#ki!]#ki%h#ki!e#ki~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O#l$OO#m$PO#n$PO#o$PO(_VO(w#ki(x#ki~P#EROl=|O!O)|O'w)}O(w$}O(x%POP#kiR#ki!Q#ki!j#ki!n#ki#l#ki#m#ki#n#ki#o#ki(_#ki~P#ERO!Z.zOg(nX~P!0uOg.|O~Oa$Oi!Z$Oi'x$Oi'u$Oi!W$Oi!i$Oit$Oi!]$Oi%h$Oi!e$Oi~P!:TO$[.}O$^.}O~O$[/OO$^/OO~O!e)fO#^/PO!]$bX$Y$bX$[$bX$^$bX$e$bX~O!Y/QO~O!])iO$Y/SO$[)hO$^)hO$e/TO~O!Z<ZO![(dX~P#BPO![/UO~O!e)fO$e(yX~O$e/WO~Ot/XO~P!&iOv)wO(`)xO(a/[O~O!Q/_O~O(w$}Ol%`a!O%`a'w%`a(x%`a!Z%`a#^%`a~Og%`a#}%`a~P#LTO(x%POl%ba!O%ba'w%ba(w%ba!Z%ba#^%ba~Og%ba#}%ba~P#LvO!ZfX!efX!ifX!i$yX(pfX~P!/qO!Y/hO!Z([O(R/gO!W(tP!W(}P~P!1dOp*pO!`*nO!a*hO!b*hO!j*_O#Y*oO%_*jO(S!lO(TTO(WUO~Oq<oO!Q/iO!Y+XO![*mO(c<nO![(vP~P#NaO!i/jO~P#.{O!Z/kO!e#vO(p'nO!i(|X~O!i/pO~O!Q%gO!Y*[O!]%hO(R%fO!i(|P~O#i/rO~O!W$yX!Z$yX!e%QX~P!/qO!Z/sO!W(}X~P#.{O!e/uO~O!W/wO~OnkO(R/xO~P.iOh%VOp/}O!e#vO!j%dO(p'nO~O!e+fO~Oa%mO!Z0RO'x%mO~O![0TO~P!5WO!a0UO!b0UO(S!lO~P##hOq!nO!Q0VO(TTO(WUO(c!mO~O#Y0XO~Og%`a!Z%`a#^%`a#}%`a~P!0uOg%ba!Z%ba#^%ba#}%ba~P!0uOj%cO(R&XOg'kX!Z'kX~O!Z*vOg([a~Og0bO~OR0cO!O0cO!Q0dO#Q$dOl{a'w{a(w{a(x{a!Z{a#^{a~Og{a#}{a~P$&dO!O)|O'w)}Ol$ra(w$ra(x$ra!Z$ra#^$ra~Og$ra#}$ra~P$'`O!O)|O'w)}Ol$ta(w$ta(x$ta!Z$ta#^$ta~Og$ta#}$ta~P$(RO#i0gO~Og%Sa!Z%Sa#^%Sa#}%Sa~P!0uOl0iO#^0hOg(]a!Z(]a~O!e#vO~O#i0lO~O!Z+ZOa)Ra'x)Ra~OR#zO!O#yO!Q#{O!j#xO(_VOP!pi[!pip!pi!Z!pi!n!pi#P!pi#l!pi#m!pi#n!pi#o!pi#p!pi#q!pi#r!pi#s!pi#t!pi#u!pi#w!pi#y!pi#z!pi(p!pi(w!pi(x!pi~Oa!pi'x!pi'u!pi!W!pi!i!pit!pi!]!pi%h!pi!e!pi~P$*OOh%VOp%XOq$tOr$tOx%YOz%ZO|<eO!Q${O!]$|O!g=vO!j$xO#h<kO$V%_O$s<gO$u<iO$x%`O(TTO(WUO(_$uO(w$}O(x%PO~On0vO%[0wO(R0tO~P$,fO!e+fOa(Za!](Za'x(Za!Z(Za~O#i0|O~O[]X!ZfX![fX~O!Z0}O![)VX~O![1PO~O[1QO~Ob1SO(R+nO(TTO(WUO~O!]&OO(R%fO`'sX!Z'sX~O!Z+sO`)Ua~O!i1VO~P!:TO[1YO~O`1ZO~O#^1^O~Ol1aO!]$|O~O(c(zO![)SP~Oh%VOl1jO!]1gO%h1iO~O[1tO!Z1rO![)TX~O![1uO~O`1wOa%mO'x%mO~O(R#nO(TTO(WUO~O#Q$dO#^$eO$P$eOP(eXR(eX[(eXp(eX!O(eX!Q(eX!Z(eX!j(eX!n(eX#P(eX#l(eX#m(eX#n(eX#o(eX#p(eX#q(eX#r(eX#s(eX#u(eX#w(eX#y(eX#z(eX(_(eX(p(eX(w(eX(x(eX~O#t1zO&Y1{Oa(eX~P$2PO#^$eO#t1zO&Y1{O~Oa1}O~P%[Oa2PO~O&c2SOP&aiQ&aiS&aiY&aia&aid&aie&aij&ain&aip&aiq&air&aix&aiz&ai|&ai!Q&ai!U&ai!V&ai!]&ai!g&ai!j&ai!m&ai!n&ai!o&ai!q&ai!s&ai!v&ai!z&ai$V&ai$m&ai%g&ai%i&ai%k&ai%l&ai%m&ai%p&ai%r&ai%u&ai%v&ai%x&ai&U&ai&[&ai&^&ai&`&ai&b&ai&e&ai&k&ai&q&ai&s&ai&u&ai&w&ai&y&ai'u&ai(R&ai(T&ai(W&ai(_&ai(m&ai![&aib&ai&h&ai~Ob2YO![2WO&h2XO~P`O!]XO!j2[O~O&o,vOP&jiQ&jiS&jiY&jia&jid&jie&jij&jin&jip&jiq&jir&jix&jiz&ji|&ji!Q&ji!U&ji!V&ji!]&ji!g&ji!j&ji!m&ji!n&ji!o&ji!q&ji!s&ji!v&ji!z&ji$V&ji$m&ji%g&ji%i&ji%k&ji%l&ji%m&ji%p&ji%r&ji%u&ji%v&ji%x&ji&U&ji&[&ji&^&ji&`&ji&b&ji&e&ji&k&ji&q&ji&s&ji&u&ji&w&ji&y&ji'u&ji(R&ji(T&ji(W&ji(_&ji(m&ji![&ji&c&jib&ji&h&ji~O!W2bO~O!Z!_a![!_a~P#BPOq!nO!Q!oO!Y2hO(c!mO!Z'VX!['VX~P@]O!Z-WO![(ga~O!Z']X![']X~P!9]O!Z-ZO![(va~O![2oO~P'_Oa%mO#^2xO'x%mO~Oa%mO!e#vO#^2xO'x%mO~Oa%mO!e#vO!n2|O#^2xO'x%mO(p'nO~Oa%mO'x%mO~P!:TO!Z$_Ot$pa~O!W'Ui!Z'Ui~P!:TO!Z(TO!W(fi~O!Z([O!W(ti~O!W(ui!Z(ui~P!:TO!Z(ri!i(ria(ri'x(ri~P!:TO#^3OO!Z(ri!i(ria(ri'x(ri~O!Z(hO!i(qi~O!Q%gO!]%hO!z]O#g3TO#h3SO(R%fO~O!Q%gO!]%hO#h3SO(R%fO~Ol3[O!]'^O%h3ZO~Oh%VOl3[O!]'^O%h3ZO~O#i%`aP%`aR%`a[%`aa%`ap%`a!Q%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a'x%`a(_%`a(p%`a!i%`a!W%`a'u%`at%`a!]%`a%h%`a!e%`a~P#LTO#i%baP%baR%ba[%baa%bap%ba!Q%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba'x%ba(_%ba(p%ba!i%ba!W%ba'u%bat%ba!]%ba%h%ba!e%ba~P#LvO#i%`aP%`aR%`a[%`aa%`ap%`a!Q%`a!Z%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a'x%`a(_%`a(p%`a!i%`a!W%`a'u%`a#^%`at%`a!]%`a%h%`a!e%`a~P#.{O#i%baP%baR%ba[%baa%bap%ba!Q%ba!Z%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba'x%ba(_%ba(p%ba!i%ba!W%ba'u%ba#^%bat%ba!]%ba%h%ba!e%ba~P#.{O#i{aP{a[{aa{ap{a!j{a!n{a#P{a#l{a#m{a#n{a#o{a#p{a#q{a#r{a#s{a#t{a#u{a#w{a#y{a#z{a'x{a(_{a(p{a!i{a!W{a'u{at{a!]{a%h{a!e{a~P$&dO#i$raP$raR$ra[$raa$rap$ra!Q$ra!j$ra!n$ra#P$ra#l$ra#m$ra#n$ra#o$ra#p$ra#q$ra#r$ra#s$ra#t$ra#u$ra#w$ra#y$ra#z$ra'x$ra(_$ra(p$ra!i$ra!W$ra'u$rat$ra!]$ra%h$ra!e$ra~P$'`O#i$taP$taR$ta[$taa$tap$ta!Q$ta!j$ta!n$ta#P$ta#l$ta#m$ta#n$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#w$ta#y$ta#z$ta'x$ta(_$ta(p$ta!i$ta!W$ta'u$tat$ta!]$ta%h$ta!e$ta~P$(RO#i%SaP%SaR%Sa[%Saa%Sap%Sa!Q%Sa!Z%Sa!j%Sa!n%Sa#P%Sa#l%Sa#m%Sa#n%Sa#o%Sa#p%Sa#q%Sa#r%Sa#s%Sa#t%Sa#u%Sa#w%Sa#y%Sa#z%Sa'x%Sa(_%Sa(p%Sa!i%Sa!W%Sa'u%Sa#^%Sat%Sa!]%Sa%h%Sa!e%Sa~P#.{Oa#aq!Z#aq'x#aq'u#aq!W#aq!i#aqt#aq!]#aq%h#aq!e#aq~P!:TO!Y3dO!Z'WX!i'WX~P%[O!Z.oO!i(ia~O!Z.oO!i(ia~P!:TO!W3gO~O#}!la![!la~PKZO#}!ha!Z!ha![!ha~P#BPO#}!pa![!pa~P!<kO#}!ra![!ra~P!?ROg'ZX!Z'ZX~P!+rO!Z.zOg(na~OSfO!]3{O$c3|O~O![4QO~Ot4RO~P#.{Oa$lq!Z$lq'x$lq'u$lq!W$lq!i$lqt$lq!]$lq%h$lq!e$lq~P!:TO!W4TO~P!&iO!Q4UO~O!O)|O'w)}O(x%POl'ga(w'ga!Z'ga#^'ga~Og'ga#}'ga~P%+uO!O)|O'w)}Ol'ia(w'ia(x'ia!Z'ia#^'ia~Og'ia#}'ia~P%,hO(p$YO~P#.{O!WfX!W$yX!ZfX!Z$yX!e%QX#^fX~P!/qO(R<xO~P!1dO!Q%gO!Y4XO!]%hO(R%fO!Z'cX!i'cX~O!Z/kO!i(|a~O!Z/kO!e#vO!i(|a~O!Z/kO!e#vO(p'nO!i(|a~Og${i!Z${i#^${i#}${i~P!0uO!Y4aO!W'eX!Z'eX~P!3cO!Z/sO!W(}a~O!Z/sO!W(}a~P#.{OP]XR]X[]Xp]X!O]X!Q]X!W]X!Z]X!j]X!n]X#P]X#Q]X#^]X#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X~O!e%XX#t%XX~P%0XO!e#vO#t4fO~Oh%VO!e#vO!j%dO~Oh%VOp4kO!j%dO(p'nO~Op4pO!e#vO(p'nO~Oq!nO!Q4qO(TTO(WUO(c!mO~O(w$}Ol%`i!O%`i'w%`i(x%`i!Z%`i#^%`i~Og%`i#}%`i~P%3xO(x%POl%bi!O%bi'w%bi(w%bi!Z%bi#^%bi~Og%bi#}%bi~P%4kOg(]i!Z(]i~P!0uO#^4wOg(]i!Z(]i~P!0uO!i4zO~Oa$nq!Z$nq'x$nq'u$nq!W$nq!i$nqt$nq!]$nq%h$nq!e$nq~P!:TO!W5QO~O!Z5RO!])OX~P#.{Oa]Xa$yX!]]X!]$yX%]]X'x]X'x$yX!Z]X!Z$yX~P!/qO%]5UOa%Za!]%Za'x%Za!Z%Za~OlmX!OmX'wmX(wmX(xmX~P%7nOn5VO(R#nO~Ob5]O%i5^O(R+nO(TTO(WUO!Z'rX!['rX~O!Z0}O![)Va~O[5bO~O`5cO~Oa%mO'x%mO~P#.{O!Z5kO#^5mO![)SX~O![5nO~Op5tOq!nO!Q*fO!`!yO!a!vO!b!vO!z;wO#R!pO#S!pO#T!pO#U!pO#V!pO#Y5sO#Z!zO(S!lO(TTO(WUO(c!mO(m!sO~O![5rO~P%:ROl5yO!]1gO%h5xO~Oh%VOl5yO!]1gO%h5xO~Ob6QO(R#nO(TTO(WUO!Z'qX!['qX~O!Z1rO![)Ta~O(TTO(WUO(c6SO~O`6WO~O#t6ZO&Y6[O~PMvO!i6]O~P%[Oa6_O~Oa6_O~P%[Ob2YO![6dO&h2XO~P`O!e6fO~O!e6hOh(hi!Z(hi![(hi!e(hi!j(hip(hi(p(hi~O!Z#fi![#fi~P#BPO#^6iO!Z#fi![#fi~O!Z!_i![!_i~P#BPOa%mO#^6rO'x%mO~Oa%mO!e#vO#^6rO'x%mO~O!Z(rq!i(rqa(rq'x(rq~P!:TO!Z(hO!i(qq~O!Q%gO!]%hO#h6yO(R%fO~O!]'^O%h6|O~Ol7QO!]'^O%h6|O~O#i'gaP'gaR'ga['gaa'gap'ga!Q'ga!j'ga!n'ga#P'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#t'ga#u'ga#w'ga#y'ga#z'ga'x'ga(_'ga(p'ga!i'ga!W'ga'u'gat'ga!]'ga%h'ga!e'ga~P%+uO#i'iaP'iaR'ia['iaa'iap'ia!Q'ia!j'ia!n'ia#P'ia#l'ia#m'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#w'ia#y'ia#z'ia'x'ia(_'ia(p'ia!i'ia!W'ia'u'iat'ia!]'ia%h'ia!e'ia~P%,hO#i${iP${iR${i[${ia${ip${i!Q${i!Z${i!j${i!n${i#P${i#l${i#m${i#n${i#o${i#p${i#q${i#r${i#s${i#t${i#u${i#w${i#y${i#z${i'x${i(_${i(p${i!i${i!W${i'u${i#^${it${i!]${i%h${i!e${i~P#.{O#i%`iP%`iR%`i[%`ia%`ip%`i!Q%`i!j%`i!n%`i#P%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#t%`i#u%`i#w%`i#y%`i#z%`i'x%`i(_%`i(p%`i!i%`i!W%`i'u%`it%`i!]%`i%h%`i!e%`i~P%3xO#i%biP%biR%bi[%bia%bip%bi!Q%bi!j%bi!n%bi#P%bi#l%bi#m%bi#n%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#w%bi#y%bi#z%bi'x%bi(_%bi(p%bi!i%bi!W%bi'u%bit%bi!]%bi%h%bi!e%bi~P%4kO!Z'Wa!i'Wa~P!:TO!Z.oO!i(ii~O#}#ai!Z#ai![#ai~P#BPOP$[OR#zO!O#yO!Q#{O!j#xO!n$[O(_VO[#kip#ki#P#ki#m#ki#n#ki#o#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#l#ki~P%MQO#l<PO~P%MQOP$[OR#zOp<]O!O#yO!Q#{O!j#xO!n$[O#l<PO#m<QO#n<QO#o<QO(_VO[#ki#P#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#p#ki~P& YO#p<RO~P& YOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO(_VO#w#ki#y#ki#z#ki#}#ki(p#ki(w#ki(x#ki!Z#ki![#ki~O#u#ki~P&#bOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO(_VO(x#}O#y#ki#z#ki#}#ki(p#ki(w#ki!Z#ki![#ki~O#w<VO~P&%cO#w#ki~P&%cO#u<TO~P&#bOP$[OR#zO[<_Op<]O!O#yO!Q#{O!j#xO!n$[O#P<SO#l<PO#m<QO#n<QO#o<QO#p<RO#q<SO#r<SO#s<^O#t<SO#u<TO#w<VO(_VO(w#|O(x#}O#z#ki#}#ki(p#ki!Z#ki![#ki~O#y#ki~P&'rO#y<XO~P&'rOa#{y!Z#{y'x#{y'u#{y!W#{y!i#{yt#{y!]#{y%h#{y!e#{y~P!:TO[#kip#ki#P#ki#p#ki#q#ki#r#ki#s#ki#t#ki#u#ki#w#ki#y#ki#z#ki#}#ki(p#ki!Z#ki![#ki~OP$[OR#zO!O#yO!Q#{O!j#xO!n$[O#l<PO#m<QO#n<QO#o<QO(_VO(w#ki(x#ki~P&*nOl=}O!O)|O'w)}O(w$}O(x%POP#kiR#ki!Q#ki!j#ki!n#ki#l#ki#m#ki#n#ki#o#ki(_#ki~P&*nO#Q$dOP(^XR(^X[(^Xl(^Xp(^X!O(^X!Q(^X!j(^X!n(^X#P(^X#l(^X#m(^X#n(^X#o(^X#p(^X#q(^X#r(^X#s(^X#t(^X#u(^X#w(^X#y(^X#z(^X#}(^X'w(^X(_(^X(p(^X(w(^X(x(^X!Z(^X![(^X~O#}$Oi!Z$Oi![$Oi~P#BPO#}!pi![!pi~P$*OOg'Za!Z'Za~P!0uO![7dO~O!Z'ba!['ba~P#BPO!W7eO~P#.{O!e#vO(p'nO!Z'ca!i'ca~O!Z/kO!i(|i~O!Z/kO!e#vO!i(|i~Og${q!Z${q#^${q#}${q~P!0uO!W'ea!Z'ea~P#.{O!e7lO~O!Z/sO!W(}i~P#.{O!Z/sO!W(}i~O!W7oO~Oh%VOp7tO!j%dO(p'nO~O!e#vO#t7vO~Op7yO!e#vO(p'nO~O!O)|O'w)}O(x%POl'ha(w'ha!Z'ha#^'ha~Og'ha#}'ha~P&3oO!O)|O'w)}Ol'ja(w'ja(x'ja!Z'ja#^'ja~Og'ja#}'ja~P&4bO!W7{O~Og$}q!Z$}q#^$}q#}$}q~P!0uOg(]q!Z(]q~P!0uO#^7|Og(]q!Z(]q~P!0uOa$ny!Z$ny'x$ny'u$ny!W$ny!i$nyt$ny!]$ny%h$ny!e$ny~P!:TO!e6hO~O!Z5RO!])Oa~O!]'^OP$SaR$Sa[$Sap$Sa!O$Sa!Q$Sa!Z$Sa!j$Sa!n$Sa#P$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#t$Sa#u$Sa#w$Sa#y$Sa#z$Sa(_$Sa(p$Sa(w$Sa(x$Sa~O%h6|O~P&7SO%]8QOa%Zi!]%Zi'x%Zi!Z%Zi~Oa#ay!Z#ay'x#ay'u#ay!W#ay!i#ayt#ay!]#ay%h#ay!e#ay~P!:TO[8SO~Ob8UO(R+nO(TTO(WUO~O!Z0}O![)Vi~O`8YO~O(c(zO!Z'nX!['nX~O!Z5kO![)Sa~O![8cO~P%:RO(m!sO~P$$oO#Y8dO~O!]1gO~O!]1gO%h8fO~Ol8iO!]1gO%h8fO~O[8nO!Z'qa!['qa~O!Z1rO![)Ti~O!i8rO~O!i8sO~O!i8vO~O!i8vO~P%[Oa8xO~O!e8yO~O!i8zO~O!Z(ui![(ui~P#BPOa%mO#^9SO'x%mO~O!Z(ry!i(rya(ry'x(ry~P!:TO!Z(hO!i(qy~O%h9VO~P&7SO!]'^O%h9VO~O#i${qP${qR${q[${qa${qp${q!Q${q!Z${q!j${q!n${q#P${q#l${q#m${q#n${q#o${q#p${q#q${q#r${q#s${q#t${q#u${q#w${q#y${q#z${q'x${q(_${q(p${q!i${q!W${q'u${q#^${qt${q!]${q%h${q!e${q~P#.{O#i'haP'haR'ha['haa'hap'ha!Q'ha!j'ha!n'ha#P'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#w'ha#y'ha#z'ha'x'ha(_'ha(p'ha!i'ha!W'ha'u'hat'ha!]'ha%h'ha!e'ha~P&3oO#i'jaP'jaR'ja['jaa'jap'ja!Q'ja!j'ja!n'ja#P'ja#l'ja#m'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#w'ja#y'ja#z'ja'x'ja(_'ja(p'ja!i'ja!W'ja'u'jat'ja!]'ja%h'ja!e'ja~P&4bO#i$}qP$}qR$}q[$}qa$}qp$}q!Q$}q!Z$}q!j$}q!n$}q#P$}q#l$}q#m$}q#n$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#w$}q#y$}q#z$}q'x$}q(_$}q(p$}q!i$}q!W$}q'u$}q#^$}qt$}q!]$}q%h$}q!e$}q~P#.{O!Z'Wi!i'Wi~P!:TO#}#aq!Z#aq![#aq~P#BPO(w$}OP%`aR%`a[%`ap%`a!Q%`a!j%`a!n%`a#P%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#t%`a#u%`a#w%`a#y%`a#z%`a#}%`a(_%`a(p%`a!Z%`a![%`a~Ol%`a!O%`a'w%`a(x%`a~P&HgO(x%POP%baR%ba[%bap%ba!Q%ba!j%ba!n%ba#P%ba#l%ba#m%ba#n%ba#o%ba#p%ba#q%ba#r%ba#s%ba#t%ba#u%ba#w%ba#y%ba#z%ba#}%ba(_%ba(p%ba!Z%ba![%ba~Ol%ba!O%ba'w%ba(w%ba~P&JnOl=}O!O)|O'w)}O(x%PO~P&HgOl=}O!O)|O'w)}O(w$}O~P&JnOR0cO!O0cO!Q0dO#Q$dOP{a[{al{ap{a!j{a!n{a#P{a#l{a#m{a#n{a#o{a#p{a#q{a#r{a#s{a#t{a#u{a#w{a#y{a#z{a#}{a'w{a(_{a(p{a(w{a(x{a!Z{a![{a~O!O)|O'w)}OP$raR$ra[$ral$rap$ra!Q$ra!j$ra!n$ra#P$ra#l$ra#m$ra#n$ra#o$ra#p$ra#q$ra#r$ra#s$ra#t$ra#u$ra#w$ra#y$ra#z$ra#}$ra(_$ra(p$ra(w$ra(x$ra!Z$ra![$ra~O!O)|O'w)}OP$taR$ta[$tal$tap$ta!Q$ta!j$ta!n$ta#P$ta#l$ta#m$ta#n$ta#o$ta#p$ta#q$ta#r$ta#s$ta#t$ta#u$ta#w$ta#y$ta#z$ta#}$ta(_$ta(p$ta(w$ta(x$ta!Z$ta![$ta~Ol=}O!O)|O'w)}O(w$}O(x%PO~OP%SaR%Sa[%Sap%Sa!Q%Sa!j%Sa!n%Sa#P%Sa#l%Sa#m%Sa#n%Sa#o%Sa#p%Sa#q%Sa#r%Sa#s%Sa#t%Sa#u%Sa#w%Sa#y%Sa#z%Sa#}%Sa(_%Sa(p%Sa!Z%Sa![%Sa~P'%sO#}$lq!Z$lq![$lq~P#BPO#}$nq!Z$nq![$nq~P#BPO![9dO~O#}9eO~P!0uO!e#vO!Z'ci!i'ci~O!e#vO(p'nO!Z'ci!i'ci~O!Z/kO!i(|q~O!W'ei!Z'ei~P#.{O!Z/sO!W(}q~Op9lO!e#vO(p'nO~O[9nO!W9mO~P#.{O!W9mO~O!e#vO#t9tO~Og(]y!Z(]y~P!0uO!Z'la!]'la~P#.{Oa%Zq!]%Zq'x%Zq!Z%Zq~P#.{O[9yO~O!Z0}O![)Vq~O#^9}O!Z'na!['na~O!Z5kO![)Si~P#BPO!Q:PO~O!]1gO%h:SO~O(TTO(WUO(c:XO~O!Z1rO![)Tq~O!i:[O~O!i:]O~O!i:^O~O!i:^O~P%[O#^:aO!Z#fy![#fy~O!Z#fy![#fy~P#BPO%h:fO~P&7SO!]'^O%h:fO~O#}#{y!Z#{y![#{y~P#BPOP${iR${i[${ip${i!Q${i!j${i!n${i#P${i#l${i#m${i#n${i#o${i#p${i#q${i#r${i#s${i#t${i#u${i#w${i#y${i#z${i#}${i(_${i(p${i!Z${i![${i~P'%sO!O)|O'w)}O(x%POP'gaR'ga['gal'gap'ga!Q'ga!j'ga!n'ga#P'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#t'ga#u'ga#w'ga#y'ga#z'ga#}'ga(_'ga(p'ga(w'ga!Z'ga!['ga~O!O)|O'w)}OP'iaR'ia['ial'iap'ia!Q'ia!j'ia!n'ia#P'ia#l'ia#m'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#w'ia#y'ia#z'ia#}'ia(_'ia(p'ia(w'ia(x'ia!Z'ia!['ia~O(w$}OP%`iR%`i[%`il%`ip%`i!O%`i!Q%`i!j%`i!n%`i#P%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#t%`i#u%`i#w%`i#y%`i#z%`i#}%`i'w%`i(_%`i(p%`i(x%`i!Z%`i![%`i~O(x%POP%biR%bi[%bil%bip%bi!O%bi!Q%bi!j%bi!n%bi#P%bi#l%bi#m%bi#n%bi#o%bi#p%bi#q%bi#r%bi#s%bi#t%bi#u%bi#w%bi#y%bi#z%bi#}%bi'w%bi(_%bi(p%bi(w%bi!Z%bi![%bi~O#}$ny!Z$ny![$ny~P#BPO#}#ay!Z#ay![#ay~P#BPO!e#vO!Z'cq!i'cq~O!Z/kO!i(|y~O!W'eq!Z'eq~P#.{Op:pO!e#vO(p'nO~O[:tO!W:sO~P#.{O!W:sO~Og(]!R!Z(]!R~P!0uOa%Zy!]%Zy'x%Zy!Z%Zy~P#.{O!Z0}O![)Vy~O!Z5kO![)Sq~O(R:zO~O!]1gO%h:}O~O!i;QO~O%h;VO~P&7SOP${qR${q[${qp${q!Q${q!j${q!n${q#P${q#l${q#m${q#n${q#o${q#p${q#q${q#r${q#s${q#t${q#u${q#w${q#y${q#z${q#}${q(_${q(p${q!Z${q![${q~P'%sO!O)|O'w)}O(x%POP'haR'ha['hal'hap'ha!Q'ha!j'ha!n'ha#P'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#t'ha#u'ha#w'ha#y'ha#z'ha#}'ha(_'ha(p'ha(w'ha!Z'ha!['ha~O!O)|O'w)}OP'jaR'ja['jal'jap'ja!Q'ja!j'ja!n'ja#P'ja#l'ja#m'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#w'ja#y'ja#z'ja#}'ja(_'ja(p'ja(w'ja(x'ja!Z'ja!['ja~OP$}qR$}q[$}qp$}q!Q$}q!j$}q!n$}q#P$}q#l$}q#m$}q#n$}q#o$}q#p$}q#q$}q#r$}q#s$}q#t$}q#u$}q#w$}q#y$}q#z$}q#}$}q(_$}q(p$}q!Z$}q![$}q~P'%sOg%d!Z!Z%d!Z#^%d!Z#}%d!Z~P!0uO!W;ZO~P#.{Op;[O!e#vO(p'nO~O[;^O!W;ZO~P#.{O!Z'nq!['nq~P#BPO!Z#f!Z![#f!Z~P#BPO#i%d!ZP%d!ZR%d!Z[%d!Za%d!Zp%d!Z!Q%d!Z!Z%d!Z!j%d!Z!n%d!Z#P%d!Z#l%d!Z#m%d!Z#n%d!Z#o%d!Z#p%d!Z#q%d!Z#r%d!Z#s%d!Z#t%d!Z#u%d!Z#w%d!Z#y%d!Z#z%d!Z'x%d!Z(_%d!Z(p%d!Z!i%d!Z!W%d!Z'u%d!Z#^%d!Zt%d!Z!]%d!Z%h%d!Z!e%d!Z~P#.{Op;fO!e#vO(p'nO~O!W;gO~P#.{Op;nO!e#vO(p'nO~O!W;oO~P#.{OP%d!ZR%d!Z[%d!Zp%d!Z!Q%d!Z!j%d!Z!n%d!Z#P%d!Z#l%d!Z#m%d!Z#n%d!Z#o%d!Z#p%d!Z#q%d!Z#r%d!Z#s%d!Z#t%d!Z#u%d!Z#w%d!Z#y%d!Z#z%d!Z#}%d!Z(_%d!Z(p%d!Z!Z%d!Z![%d!Z~P'%sOp;rO!e#vO(p'nO~Ot(dX~P1qO!O%qO~P!(yO(S!lO~P!(yO!WfX!ZfX#^fX~P%0XOP]XR]X[]Xp]X!O]X!Q]X!Z]X!ZfX!j]X!n]X#P]X#Q]X#^]X#^fX#ifX#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#w]X#y]X#z]X$P]X(_]X(p]X(w]X(x]X~O!efX!i]X!ifX(pfX~P'JlOP;vOQ;vOSfOd=rOe!iOnkOp;vOqkOrkOxkOz;vO|;vO!QWO!UkO!VkO!]XO!g;yO!jZO!m;vO!n;vO!o;vO!q;zO!s;}O!v!hO$V!kO$m=pO(R)ZO(TTO(WUO(_VO(m[O~O!Z<ZO![$pa~Oh%VOn%WOp%XOq$tOr$tOx%YOz%ZO|<fO!Q${O!]$|O!g=wO!j$xO#h<lO$V%_O$s<hO$u<jO$x%`O(R(tO(TTO(WUO(_$uO(w$}O(x%PO~Oj)bO~P( bOp!cX(p!cX~P# qOp(hX(p(hX~P#!dO![]X![fX~P'JlO!WfX!W$yX!ZfX!Z$yX#^fX~P!/qO#i<OO~O!e#vO#i<OO~O#^<`O~O#t<SO~O#^<pO!Z(uX![(uX~O#^<`O!Z(sX![(sX~O#i<qO~Og<sO~P!0uO#i<yO~O#i<zO~O!e#vO#i<{O~O!e#vO#i<qO~O#}<|O~P#BPO#i<}O~O#i=OO~O#i=TO~O#i=UO~O#i=VO~O#i=WO~O#}=XO~P!0uO#}=YO~P!0uO#Q#R#S#U#V#Y#g#h#s$m$s$u$x%[%]%g%h%i%p%r%u%v%x%z~'|T#m!V'z(S#nq#l#op!O'{$['{(R$^(c~",
  goto: "$8f)ZPPPPPP)[PP)_P)pP+Q/VPPPP6aPP6wPP<oP@cP@yP@yPPP@yPCRP@yP@yP@yPCVPC[PCyPHsPPPHwPPPPHwKzPPPLQLrPHwPHwPP! QHwPPPHwPHwP!#XHwP!&o!'t!'}P!(q!(u!(q!,SPPPPPPP!,s!'tPP!-T!.uP!2RHwHw!2W!5d!:Q!:Q!>PPPP!>XHwPPPPPPPPPP!AhP!BuPPHw!DWPHwPHwHwHwHwHwPHw!EjP!HtP!KzP!LO!LY!L^!L^P!HqP!Lb!LbP# hP# lHwPHw# r#$wCV@yP@yP@y@yP#&U@y@y#(h@y#+`@y#-l@y@y#.[#0p#0p#0u#1O#0p#1ZPP#0pP@y#1s@y#5r@y@y6aPPP#9wPPP#:b#:bP#:bP#:x#:bPP#;OP#:uP#:u#;c#:u#;}#<T#<W)_#<Z)_P#<b#<b#<bP)_P)_P)_P)_PP)_P#<h#<kP#<k)_P#<oP#<rP)_P)_P)_P)_P)_P)_)_PP#<x#=O#=Z#=a#=g#=m#=s#>R#>X#>c#>i#>s#>y#?Z#?a#@R#@e#@k#@q#AP#Af#CZ#Ci#Cp#E[#Ej#G[#Gj#Gp#Gv#G|#HW#H^#Hd#Hn#IQ#IWPPPPPPPPPPP#I^PPPPPPP#JR#MY#Nr#Ny$ RPPP$&mP$&v$)o$0Y$0]$0`$1_$1b$1i$1qP$1w$1zP$2h$2l$3d$4r$4w$5_PP$5d$5j$5n$5q$5u$5y$6u$7^$7u$7y$7|$8P$8V$8Y$8^$8bR!|RoqOXst!Z#d%l&p&r&s&u,n,s2S2VY!vQ'^-`1g5qQ%svQ%{yQ&S|Q&h!VS'U!e-WQ'd!iS'j!r!yU*h$|*X*lQ+l%|Q+y&UQ,_&bQ-^']Q-h'eQ-p'kQ0U*nQ1q,`R<m;z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9SS#q];w!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU*{%[<e<fQ+q&OQ,a&eQ,h&mQ0r+dQ0u+fQ1S+rQ1y,fQ3W.bQ5V0wQ5]0}Q6Q1rQ7O3[Q8U5^R9Y7Q'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s!S!nQ!r!v!y!z$|'U']'^'j'k'l*h*l*n*o-W-^-`-p0U0X1g5q5s%[$ti#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q&V|Q'S!eS'Y%h-ZQ+q&OQ,a&eQ0f+OQ1S+rQ1X+xQ1x,eQ1y,fQ5]0}Q5f1ZQ6Q1rQ6T1tQ6U1wQ8U5^Q8X5cQ8q6WQ9|8YQ:Y8nR<o*XrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR,c&i&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=r=s[#]WZ#W#Z'V(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ%vxQ%zyS&P|&UQ&]!TQ'a!hQ'c!iQ(o#sS+k%{%|Q+o&OQ,Y&`Q,^&bS-g'd'eQ.d(pQ0{+lQ1R+rQ1T+sQ1W+wQ1l,ZS1p,_,`Q2t-hQ5[0}Q5`1QQ5e1YQ6P1qQ8T5^Q8W5bQ9x8SR:w9y!U$zi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y!^%xy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pQ+e%vQ,O&YQ,R&ZQ,]&bQ.c(oQ1k,YU1o,^,_,`Q3].dQ5z1lS6O1p1qQ8m6P#f=t#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o=u<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YW%Ti%V*v=pS&Y!Q&gQ&Z!RQ&[!SQ+S%cR+|&W%]%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}T)x$u)yV*{%[<e<fW'Y!e%h*X-ZS({#y#zQ+`%qQ+v&RS.](k(lQ1b,SQ4x0cR8^5k'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s$i$^c#Y#e%p%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.w.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ'W!eR2i-W!W!nQ!e!r!v!y!z$|'U']'^'j'k'l*X*h*l*n*o-W-^-`-p0U0X1g5q5sR1d,UnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&w!^Q't!xS(q#u<OQ+i%yQ,W&]Q,X&_Q-e'bQ-r'mS.m(v<qS0k+U<{Q0y+jQ1f,VQ2Z,uQ2],vQ2e-RQ2r-fQ2u-jS5P0l=VQ5W0zS5Z0|=WQ6j2gQ6n2sQ6s2zQ8R5XQ8}6lQ9O6oQ9R6tR:`8z$d$]c#Y#e%r%t(Q(W(r(w)P)Q)R)S)T)U)V)W)X)Y)[)^)`)e)o+a+u-U-s-x-}.P.n.q.u.x.y/]0j2c2f2v2}3c3h3i3j3k3l3m3n3o3p3q3r3s3t3w3x4P5O5Y6k6q6v7V7W7a7b8`8|9Q9[9b9c:c:y;R;x=gS(m#p'gQ(}#zS+_%p.wS.^(l(nR3U._'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS#q];wQ&r!XQ&s!YQ&u![Q&v!]R2R,qQ'_!hQ+b%vQ-c'aS.`(o+eQ2p-bW3Y.c.d0q0sQ6m2qW6z3V3X3]5TU9U6{6}7PU:e9W9X9ZS;T:d:gQ;b;UR;j;cU!wQ'^-`T5o1g5q!Q_OXZ`st!V!Z#d#h%d%l&g&i&p&r&s&u(h,n,s.V2S2V]!pQ!r'^-`1g5qT#q];w%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS({#y#zS.](k(l!s=^$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sU$fd)],hS(n#p'gU*s%R(u3vU0e*z.i7]Q5T0rQ6{3WQ9X7OR:g9Ym!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sQ'r!uS(d#g1|S-n'i'uQ/n*ZQ/{*gQ2|-qQ4]/oQ4i/}Q4j0OQ4o0WQ7h4WS7s4k4mS7w4p4rQ9g7iQ9k7oQ9p7tQ9u7yS:o9l9mS;Y:p:sS;e;Z;[S;m;f;gS;q;n;oR;t;rQ#wbQ'q!uS(c#g1|S(e#m+TQ+V%eQ+g%wQ+m%}U-m'i'r'uQ.R(dQ/m*ZQ/|*gQ0P*iQ0x+hQ1m,[S2y-n-qQ3R.ZS4[/n/oQ4e/yS4h/{0WQ4l0QQ5|1nQ6u2|Q7g4WQ7k4]U7r4i4o4rQ7u4nQ8k5}S9f7h7iQ9j7oQ9r7wQ9s7xQ:V8lQ:m9gS:n9k9mQ:v9uQ;P:WS;X:o:sS;d;Y;ZS;l;e;gS;p;m;oQ;s;qQ;u;tQ=a=[Q=l=eR=m=fV!wQ'^-`%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SS#wz!j!r=Z$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=a=r%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SQ%ej!^%wy!i!u%z%{%|'T'c'd'e'i's*g+k+l-T-g-h-o/{0O0{2m2t2{4i4j4m7s9pS%}z!jQ+h%xQ,[&bW1n,],^,_,`U5}1o1p1qS8l6O6PQ:W8m!r=[$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ=e=qR=f=r%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9SY#bWZ#W#Z(R!b%im#h#i#l$x%d%g([(f(g(h*W*[*_+W+X+Z,j-Q.O.U.V.W.Y/h/k2[3S3T4X6h6yQ,i&m!p=]$Z$n)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sR=`'VU'Z!e%h*XR2k-Z%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y,k,n,s-d-l-z.Q.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3d4q5y6Z6[6_6r8i8x9S!r)]$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sQ,h&mQ0r+dQ3W.bQ7O3[R9Y7Q!b$Tc#Y%p(Q(W(r(w)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!P<U)[)o-U.w2c2f3h3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!f$Vc#Y%p(Q(W(r(w)U)V)X)Y)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;x!T<W)[)o-U.w2c2f3h3n3o3q3r3w4P6k7W7a7b8`8|9[9b9c:y;R=g!^$Zc#Y%p(Q(W(r(w)^)e+u-s-x-}.P.n.q/]0j2v2}3c3s5O5Y6q6v7V9Q:c;xQ4V/fz=s)[)o-U.w2c2f3h3w4P6k7W7a7b8`8|9[9b9c:y;R=gQ=x=zR=y={'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sS$oh$pR3|/P'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$kf$qQ$ifS)h$l)lR)t$qT$jf$qT)j$l)l'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%l%s&Q&i&l&m&p&r&s&u&y'R'V'`'p(R(T(Z(b(v(x(|)q){*f+U+Y+d,k,n,s-P-S-d-l-z.Q.b.o.v/P/Q/i0V0d0l0|1j1z1{1}2P2S2V2X2h2x3O3[3d3{4q5m5y6Z6[6_6i6r7Q8i8x9S9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=sT$oh$pQ$rhR)s$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%l%s&Q&i&l&m&p&r&s&u&y'R'`'p(R(T(Z(b(v(x(|){*f+U+Y+d,k,n,s-d-l-z.Q.b.o.v/i0V0d0l0|1j1z1{1}2P2S2V2X2x3O3[3d4q5y6Z6[6_6r7Q8i8x9S!s=q$Z$n'V)q-P-S/Q2h3{5m6i9}:a;v;y;z;}<O<P<Q<R<S<T<U<V<W<X<Y<Z<]<`<m<p<q<s<{<|=V=W=s#glOPXZst!Z!`!o#S#d#o#{$n%l&i&l&m&p&r&s&u&y'R'`(|)q*f+Y+d,k,n,s-d.b/Q/i0V0d1j1z1{1}2P2S2V2X3[3{4q5y6Z6[6_7Q8i8x!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}Q+P%`Q/^)|o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!U$yi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yQ*`$zU*i$|*X*lQ+Q%aQ0Q*j#f=c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n=d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YQ=h=tQ=i=uQ=j=vR=k=w!U%Ri$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y#f(u#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}o3v<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=YnoOXst!Z#d%l&p&r&s&u,n,s2S2VS*c${*WQ,|&|Q,}'OR4`/s%[%Si#v$b$c$d$x${%O%Q%]%^%b)w*P*R*T*W*^*d*t*u+c+f+},Q.a.z/_/h/r/s/u0Y0[0g0h0i1^1a1i3Z4U4V4a4f4w5R5U5x6|7l7v7|8Q8f9V9e9n9t:S:f:t:};V;^<^<_<a<b<c<d<g<h<i<j<k<l<t<u<v<w<y<z<}=O=P=Q=R=S=T=U=X=Y=p=x=y=|=}Q,P&ZQ1`,RQ5i1_R8]5jV*k$|*X*lU*k$|*X*lT5p1g5qS/y*f/iQ4n0VT7x4q:PQ+g%wQ0P*iQ0x+hQ1m,[Q5|1nQ8k5}Q:V8lR;P:W!U%Oi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=yx*P$v)c*Q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=oS0Y*q0Z#f<a#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<b<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!d<t(s)a*Y*b.e.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={`<u3u7X7[7`9]:h:k;kS=P.g3aT=Q7Z9`!U%Qi$d%O%Q%]%^%b*P*R*^*t*u.z/r0Y0[0g0h0i4V4w7|9e=p=x=y|*R$v)c*S*q+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=oS0[*r0]#f<c#v$b$c$x${)w*T*W*d+c+f+},Q.a/_/h/s/u1^1a1i3Z4U4a4f5R5U5x6|7l7v8Q8f9V9n9t:S:f:t:};V;^<a<c<g<i<k<t<v<y<}=P=R=T=X=|=}n<d<^<_<b<d<h<j<l<u<w<z=O=Q=S=U=Y!h<v(s)a*Y*b.f.g.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={d<w3u7Y7Z7`9]9^:h:i:k;kS=R.h3bT=S7[9arnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ&d!UR,k&mrnOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VR&d!UQ,T&[R1[+|snOXst!V!Z#d%l&g&p&r&s&u,n,s2S2VQ1h,YS5w1k1lU8e5u5v5zS:R8g8hS:{:Q:TQ;_:|R;i;`Q&k!VR,d&gR6T1tR:Y8nS&P|&UR1T+sQ&p!WR,n&qR,t&vT2T,s2VR,x&wQ,w&wR2^,xQ'w!{R-t'wSsOtQ#dXT%os#dQ#OTR'y#OQ#RUR'{#RQ)y$uR/Z)yQ#UVR(O#UQ#XWU(U#X(V-{Q(V#YR-{(WQ-X'WR2j-XQ.p(wS3e.p3fR3f.qQ-`'^R2n-`Y!rQ'^-`1g5qR'h!rQ.{)cR3z.{U#_W%g*WU(]#_(^-|Q(^#`R-|(XQ-['ZR2l-[t`OXst!V!Z#d%l&g&i&p&r&s&u,n,s2S2VS#hZ%dU#r`#h.VR.V(hQ(i#jQ.S(eW.[(i.S3P6wQ3P.TR6w3QQ)l$lR/R)lQ$phR)r$pQ$`cU)_$`-w<[Q-w;xR<[)oQ/l*ZW4Y/l4Z7j9hU4Z/m/n/oS7j4[4]R9h7k$e*O$v(s)a)c*Y*b*q*r*|*}+R.g.h.j.k.l/Y/b/d/f/q/v0^0_0p1]3^3_3`3u3y4S4^4_4c4s4u4{4|4}5h7R7S7T7U7Z7[7^7_7`7f7m7p7z7}8P9]9^9_9i9q9v9w:h:i:j:k:l:q:u;W;];h;k=b=n=o=z={Q/t*bU4b/t4d7nQ4d/vR7n4cS*l$|*XR0S*lx*Q$v)c*q*r+R/q0^0_3y4^4{4|4}7f7z9v:l=b=n=o!d.e(s)a*Y*b.g.h.l/Y/f/v0p1]3`4S4_4c5h7R7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/c*Q.e7Xa7X3u7Z7[7`9]:h:k;kQ0Z*qQ3a.gU4t0Z3a9`R9`7Z|*S$v)c*q*r+R/b/q0^0_3y4^4s4{4|4}7f7z9v:l=b=n=o!h.f(s)a*Y*b.g.h.l/Y/f/v0p1]3^3`4S4_4c5h7R7S7U7m7p7}8P9i9q9w:q:u;W;];h=z={U/e*S.f7Ye7Y3u7Z7[7`9]9^:h:i:k;kQ0]*rQ3b.hU4v0]3b9aR9a7[Q*w%UR0a*wQ5S0pR8O5SQ+[%jR0o+[Q5l1bS8_5l:OR:O8`Q,V&]R1e,VQ5q1gR8b5qQ1s,aS6R1s8oR8o6TQ1O+oW5_1O5a8V9zQ5a1RQ8V5`R9z8WQ+t&PR1U+tQ2V,sR6c2VYrOXst#dQ&t!ZQ+^%lQ,m&pQ,o&rQ,p&sQ,r&uQ2Q,nS2T,s2VR6b2SQ%npQ&x!_Q&{!aQ&}!bQ'P!cQ'o!uQ+]%kQ+i%yQ+{&VQ,c&kQ,z&zW-k'i'q'r'uQ-r'mQ0R*kQ0y+jS1v,d,gQ2_,yQ2`,|Q2a,}Q2u-jW2w-m-n-q-sQ5W0zQ5d1XQ5g1]Q5{1mQ6V1xQ6a2RU6p2v2y2|Q6s2zQ8R5XQ8Z5fQ8[5hQ8a5pQ8j5|Q8p6US9P6q6uQ9R6tQ9{8XQ:U8kQ:Z8qQ:b9QQ:x9|Q;O:VQ;S:cR;a;PQ%yyQ'b!iQ'm!uU+j%z%{%|Q-R'TU-f'c'd'eS-j'i'sQ/z*gS0z+k+lQ2g-TS2s-g-hQ2z-oS4g/{0OQ5X0{Q6l2mQ6o2tQ6t2{U7q4i4j4mQ9o7sR:r9pS$wi=pR*x%VU%Ui%V=pR0`*vQ$viS(s#v+fS)a$b$cQ)c$dQ*Y$xS*b${*WQ*q%OQ*r%QQ*|%]Q*}%^Q+R%bQ.g<aQ.h<cQ.j<gQ.k<iQ.l<kQ/Y)wQ/b*PQ/d*RQ/f*TQ/q*^S/v*d/hQ0^*tQ0_*ul0p+c,Q.a1a1i3Z5x6|8f9V:S:f:};VQ1]+}Q3^<tQ3_<vQ3`<yS3u<^<_Q3y.zS4S/_4UQ4^/rQ4_/sQ4c/uQ4s0YQ4u0[Q4{0gQ4|0hQ4}0iQ5h1^Q7R<}Q7S=PQ7T=RQ7U=TQ7Z<bQ7[<dQ7^<hQ7_<jQ7`<lQ7f4VQ7m4aQ7p4fQ7z4wQ7}5RQ8P5UQ9]<zQ9^<uQ9_<wQ9i7lQ9q7vQ9v7|Q9w8QQ:h=OQ:i=QQ:j=SQ:k=UQ:l9eQ:q9nQ:u9tQ;W=XQ;]:tQ;h;^Q;k=YQ=b=pQ=n=xQ=o=yQ=z=|R={=}Q*z%[Q.i<eR7]<fnpOXst!Z#d%l&p&r&s&u,n,s2S2VQ!fPS#fZ#oQ&z!`W'f!o*f0V4qQ'}#SQ)O#{Q)p$nS,g&i&lQ,l&mQ,y&yS-O'R/iQ-b'`Q.s(|Q/V)qQ0m+YQ0s+dQ2O,kQ2q-dQ3X.bQ4O/QQ4y0dQ5v1jQ6X1zQ6Y1{Q6^1}Q6`2PQ6e2XQ7P3[Q7c3{Q8h5yQ8t6ZQ8u6[Q8w6_Q9Z7QQ:T8iR:_8x#[cOPXZst!Z!`!o#d#o#{%l&i&l&m&p&r&s&u&y'R'`(|*f+Y+d,k,n,s-d.b/i0V0d1j1z1{1}2P2S2V2X3[4q5y6Z6[6_7Q8i8xQ#YWQ#eYQ%puQ%rvS%tw!gS(Q#W(TQ(W#ZQ(r#uQ(w#xQ)P$OQ)Q$PQ)R$QQ)S$RQ)T$SQ)U$TQ)V$UQ)W$VQ)X$WQ)Y$XQ)[$ZQ)^$_Q)`$aQ)e$eW)o$n)q/Q3{Q+a%sQ+u&QS-U'V2hQ-s'pS-x(R-zQ-}(ZQ.P(bQ.n(vQ.q(xQ.u;vQ.w;yQ.x;zQ.y;}Q/]){Q0j+UQ2c-PQ2f-SQ2v-lQ2}.QQ3c.oQ3h<OQ3i<PQ3j<QQ3k<RQ3l<SQ3m<TQ3n<UQ3o<VQ3p<WQ3q<XQ3r<YQ3s.vQ3t<]Q3w<`Q3x<mQ4P<ZQ5O0lQ5Y0|Q6k<pQ6q2xQ6v3OQ7V3dQ7W<qQ7a<sQ7b<{Q8`5mQ8|6iQ9Q6rQ9[<|Q9b=VQ9c=WQ:c9SQ:y9}Q;R:aQ;x#SR=g=sR#[WR'X!el!tQ!r!v!y!z'^'j'k'l-`-p1g5q5sS'T!e-WU*g$|*X*lS-T'U']S0O*h*nQ0W*oQ2m-^Q4m0UR4r0XR(y#xQ!fQT-_'^-`]!qQ!r'^-`1g5qQ#p]R'g;wR)d$dY!uQ'^-`1g5qQ'i!rS's!v!yS'u!z5sS-o'j'kQ-q'lR2{-pT#kZ%dS#jZ%dS%jm,jU(e#h#i#lS.T(f(gQ.X(hQ0n+ZQ3Q.UU3R.V.W.YS6x3S3TR9T6yd#^W#W#Z%g(R([*W+W.O/hr#gZm#h#i#l%d(f(g(h+Z.U.V.W.Y3S3T6yS*Z$x*_Q/o*[Q1|,jQ2d-QQ4W/kQ6g2[Q7i4XQ8{6hT=_'V+XV#aW%g*WU#`W%g*WS(S#W([U(X#Z+W/hS-V'V+XT-y(R.OV'[!e%h*XQ$lfR)v$qT)k$l)lR3}/PT*]$x*_T*e${*WQ0q+cQ1_,QQ3V.aQ5j1aQ5u1iQ6}3ZQ8g5xQ9W6|Q:Q8fQ:d9VQ:|:SQ;U:fQ;`:}R;c;VnqOXst!Z#d%l&p&r&s&u,n,s2S2VQ&j!VR,c&gtmOXst!U!V!Z#d%l&g&p&r&s&u,n,s2S2VR,j&mT%km,jR1c,SR,b&eQ&T|R+z&UR+p&OT&n!W&qT&o!W&qT2U,s2V",
  nodeNames: "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
  maxTerm: 378,
  context: LS,
  nodeProps: [
    ["isolate", -8, 5, 6, 14, 35, 37, 49, 51, 53, ""],
    ["group", -26, 9, 17, 19, 66, 206, 210, 214, 215, 217, 220, 223, 233, 235, 241, 243, 245, 247, 250, 256, 262, 264, 266, 268, 270, 272, 273, "Statement", -34, 13, 14, 30, 33, 34, 40, 49, 52, 53, 55, 60, 68, 70, 74, 78, 80, 82, 83, 108, 109, 118, 119, 135, 138, 140, 141, 142, 143, 144, 146, 147, 166, 168, 170, "Expression", -23, 29, 31, 35, 39, 41, 43, 172, 174, 176, 177, 179, 180, 181, 183, 184, 185, 187, 188, 189, 200, 202, 204, 205, "Type", -3, 86, 101, 107, "ClassItem"],
    ["openedBy", 23, "<", 36, "InterpolationStart", 54, "[", 58, "{", 71, "(", 159, "JSXStartCloseTag"],
    ["closedBy", -2, 24, 167, ">", 38, "InterpolationEnd", 48, "]", 59, "}", 72, ")", 164, "JSXEndTag"]
  ],
  propSources: [US],
  skippedNodes: [0, 5, 6, 276],
  repeatNodeCount: 37,
  tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(X!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(X!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(UpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(UpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Up(X!b'z0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(V#S$h&j'{0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Up(X!b'{0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!n),Q(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(T':f$h&j(X!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(X!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(X!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(X!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(X!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Up(X!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Up(X!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(X!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(X!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(UpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(UpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Up(X!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(m%1l(Up(X!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Up(X!b$[#t(R,2j(c$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Up(X!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Up(X!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(x+JY$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(W';W$h&j(UpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(UpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(UpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(UpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(UpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!j/.^$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!i!Lf$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Up(X!b(S%&f#o(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Up(X!b#l(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Up(X!bp+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Z+Jf$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Up(X!b!O.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!Y!L^$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Up(X!b#m(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(X!b!V7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!V7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!V7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!V7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!V7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(X!b!V7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(X!b!V7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(X!b!V7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(X!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(X!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Up!V7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Up!V7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Up!V7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Up!V7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(UpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(UpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Up(X!b!V7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Up(X!b!V7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Up(X!b!V7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Up(X!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Up(X!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Up(X!b'|0/l!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Up(X!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(X!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(X!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(UpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(UpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Up(X!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Up(X!b!V7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Up(X!bq'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!e$b$h&j#})Lv(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#P-<U(Up(X!b$m7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#p(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#q(Ch(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#^*!Y$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#i(Cl$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#q(Ch$e#|$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#q(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#p(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#p(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(p(Ct$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!z$Ip$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!Q0,v$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!W#)l$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Up(X!b(_+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Up(X!b(R,2j$^#t(c$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Up(X!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!]#Hb(Up(X!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(w+JY$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_![(CdtBr$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!o7`$h&j(Up(X!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Up(X!b'z0/l$[#t(R,2j(c$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Up(X!b'{0/l$[#t(R,2j(c$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
  tokenizers: [_S, CS, ES, VS, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, MS, new Hi("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOv~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!S~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(a~~", 141, 338), new Hi("j~RQYZXz{^~^O(O~~aP!P!Qd~iO(P~~", 25, 321)],
  topRules: { Script: [0, 7], SingleExpression: [1, 274], SingleClassItem: [2, 275] },
  dialects: { jsx: 0, ts: 15091 },
  dynamicPrecedences: { 78: 1, 80: 1, 92: 1, 168: 1, 198: 1 },
  specialized: [{ term: 325, get: /* @__PURE__ */ c((r) => WS[r] || -1, "get") }, { term: 341, get: /* @__PURE__ */ c((r) => XS[r] || -1, "get") }, { term: 93, get: /* @__PURE__ */ c((r) => YS[r] || -1, "get") }],
  tokenPrec: 15116
}), wh = [
  /* @__PURE__ */ me("function ${name}(${params}) {\n	${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ me("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ me("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
  }),
  /* @__PURE__ */ me("do {\n	${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ me("while (${}) {\n	${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
  }),
  /* @__PURE__ */ me(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
  }),
  /* @__PURE__ */ me("if (${}) {\n	${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
  }),
  /* @__PURE__ */ me(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: "if",
    detail: "/ else block",
    type: "keyword"
  }),
  /* @__PURE__ */ me(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: "class",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ me('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
  }),
  /* @__PURE__ */ me('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
  })
], nm = /* @__PURE__ */ wh.concat([
  /* @__PURE__ */ me("interface ${name} {\n	${}\n}", {
    label: "interface",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ me("type ${name} = ${type}", {
    label: "type",
    detail: "definition",
    type: "keyword"
  }),
  /* @__PURE__ */ me("enum ${name} {\n	${}\n}", {
    label: "enum",
    detail: "definition",
    type: "keyword"
  })
]), md = /* @__PURE__ */ new Os(), sm = /* @__PURE__ */ new Set([
  "Script",
  "Block",
  "FunctionExpression",
  "FunctionDeclaration",
  "ArrowFunction",
  "MethodDeclaration",
  "ForStatement"
]);
function ar(r) {
  return (e, t) => {
    let i = e.node.getChild("VariableDefinition");
    return i && t(i, r), !0;
  };
}
c(ar, "defID");
const jS = ["FunctionDeclaration"], qS = {
  FunctionDeclaration: /* @__PURE__ */ ar("function"),
  ClassDeclaration: /* @__PURE__ */ ar("class"),
  ClassExpression: /* @__PURE__ */ c(() => !0, "ClassExpression"),
  EnumDeclaration: /* @__PURE__ */ ar("constant"),
  TypeAliasDeclaration: /* @__PURE__ */ ar("type"),
  NamespaceDeclaration: /* @__PURE__ */ ar("namespace"),
  VariableDefinition(r, e) {
    r.matchContext(jS) || e(r, "variable");
  },
  TypeDefinition(r, e) {
    e(r, "type");
  },
  __proto__: null
};
function om(r, e) {
  let t = md.get(e);
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
      let l = qS[o.name];
      if (l && l(o, s) || sm.has(o.name))
        return !1;
    } else if (o.to - o.from > 8192) {
      for (let l of om(r, o.node))
        i.push(l);
      return !1;
    }
  }), md.set(e, i), i;
}
c(om, "getScope");
const Cs = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/, xh = [
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
function lm(r) {
  let e = J(r.state).resolveInner(r.pos, -1);
  if (xh.indexOf(e.name) > -1)
    return null;
  let t = e.name == "VariableName" || e.to - e.from < 20 && Cs.test(r.state.sliceDoc(e.from, e.to));
  if (!t && !r.explicit)
    return null;
  let i = [];
  for (let n = e; n; n = n.parent)
    sm.has(n.name) && (i = i.concat(om(r.state.doc, n)));
  return {
    options: i,
    from: t ? e.from : r.pos,
    validFor: Cs
  };
}
c(lm, "localCompletionSource");
function zo(r, e, t) {
  var i;
  let n = [];
  for (; ; ) {
    let s = e.firstChild, o;
    if ((s == null ? void 0 : s.name) == "VariableName")
      return n.push(r(s)), { path: n.reverse(), name: t };
    if ((s == null ? void 0 : s.name) == "MemberExpression" && ((i = o = s.lastChild) === null || i === void 0 ? void 0 : i.name) == "PropertyName")
      n.push(r(o)), e = s;
    else
      return null;
  }
}
c(zo, "pathFor");
function am(r) {
  let e = /* @__PURE__ */ c((i) => r.state.doc.sliceString(i.from, i.to), "read"), t = J(r.state).resolveInner(r.pos, -1);
  return t.name == "PropertyName" ? zo(e, t.parent, e(t)) : (t.name == "." || t.name == "?.") && t.parent.name == "MemberExpression" ? zo(e, t.parent, "") : xh.indexOf(t.name) > -1 ? null : t.name == "VariableName" || t.to - t.from < 20 && Cs.test(e(t)) ? { path: [], name: e(t) } : t.name == "MemberExpression" ? zo(e, t, "") : r.explicit ? { path: [], name: "" } : null;
}
c(am, "completionPath");
function DS(r, e) {
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
c(DS, "enumeratePropertyCompletions");
function BS(r) {
  let e = /* @__PURE__ */ new Map();
  return (t) => {
    let i = am(t);
    if (!i)
      return null;
    let n = r;
    for (let o of i.path)
      if (n = n[o], !n)
        return null;
    let s = e.get(n);
    return s || e.set(n, s = DS(n, !i.path.length)), {
      from: t.pos - i.name.length,
      options: s,
      validFor: Cs
    };
  };
}
c(BS, "scopeCompletionSource");
const Ce = /* @__PURE__ */ sn.define({
  name: "javascript",
  parser: /* @__PURE__ */ IS.configure({
    props: [
      /* @__PURE__ */ er.add({
        IfStatement: /* @__PURE__ */ Gn({ except: /^\s*({|else\b)/ }),
        TryStatement: /* @__PURE__ */ Gn({ except: /^\s*({|catch\b|finally\b)/ }),
        LabeledStatement: Uy,
        SwitchBody: /* @__PURE__ */ c((r) => {
          let e = r.textAfter, t = /^\s*\}/.test(e), i = /^\s*(case|default)\b/.test(e);
          return r.baseIndent + (t ? 0 : i ? 1 : 2) * r.unit;
        }, "SwitchBody"),
        Block: /* @__PURE__ */ Vy({ closing: "}" }),
        ArrowFunction: /* @__PURE__ */ c((r) => r.baseIndent + r.unit, "ArrowFunction"),
        "TemplateString BlockComment": /* @__PURE__ */ c(() => null, "TemplateString BlockComment"),
        "Statement Property": /* @__PURE__ */ Gn({ except: /^{/ }),
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
      /* @__PURE__ */ yn.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": rp,
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
}), hm = {
  test: /* @__PURE__ */ c((r) => /^JSX/.test(r.name), "test"),
  facet: /* @__PURE__ */ bo({ commentTokens: { block: { open: "{/*", close: "*/}" } } })
}, Ph = /* @__PURE__ */ Ce.configure({ dialect: "ts" }, "typescript"), kh = /* @__PURE__ */ Ce.configure({
  dialect: "jsx",
  props: [/* @__PURE__ */ fh.add((r) => r.isTop ? [hm] : void 0)]
}), Rh = /* @__PURE__ */ Ce.configure({
  dialect: "jsx ts",
  props: [/* @__PURE__ */ fh.add((r) => r.isTop ? [hm] : void 0)]
}, "typescript");
let fm = /* @__PURE__ */ c((r) => ({ label: r, type: "keyword" }), "kwCompletion");
const cm = /* @__PURE__ */ "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(fm), zS = /* @__PURE__ */ cm.concat(/* @__PURE__ */ ["declare", "implements", "private", "protected", "public"].map(fm));
function um(r = {}) {
  let e = r.jsx ? r.typescript ? Rh : kh : r.typescript ? Ph : Ce, t = r.typescript ? nm.concat(zS) : wh.concat(cm);
  return new Mt(e, [
    Ce.data.of({
      autocomplete: eb(xh, fp(t))
    }),
    Ce.data.of({
      autocomplete: lm
    }),
    r.jsx ? dm : []
  ]);
}
c(um, "javascript");
function NS(r) {
  for (; ; ) {
    if (r.name == "JSXOpenTag" || r.name == "JSXSelfClosingTag" || r.name == "JSXFragmentTag")
      return r;
    if (r.name == "JSXEscape" || !r.parent)
      return null;
    r = r.parent;
  }
}
c(NS, "findOpenTag");
function gd(r, e, t = r.length) {
  for (let i = e == null ? void 0 : e.firstChild; i; i = i.nextSibling)
    if (i.name == "JSXIdentifier" || i.name == "JSXBuiltin" || i.name == "JSXNamespacedName" || i.name == "JSXMemberExpression")
      return r.sliceString(i.from, Math.min(i.to, t));
  return "";
}
c(gd, "elementName$1");
const GS = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), dm = /* @__PURE__ */ _.inputHandler.of((r, e, t, i, n) => {
  if ((GS ? r.composing : r.compositionStarted) || r.state.readOnly || e != t || i != ">" && i != "/" || !Ce.isActiveAt(r.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h;
    let { head: f } = a, u = J(o).resolveInner(f - 1, -1), d;
    if (u.name == "JSXStartTag" && (u = u.parent), !(o.doc.sliceString(f - 1, f) != i || u.name == "JSXAttributeValue" && u.to > f)) {
      if (i == ">" && u.name == "JSXFragmentTag")
        return { range: a, changes: { from: f, insert: "</>" } };
      if (i == "/" && u.name == "JSXStartCloseTag") {
        let O = u.parent, p = O.parent;
        if (p && O.from == f - 2 && ((d = gd(o.doc, p.firstChild, f)) || ((h = p.firstChild) === null || h === void 0 ? void 0 : h.name) == "JSXFragmentTag")) {
          let m = `${d}>`;
          return { range: R.cursor(f + m.length, -1), changes: { from: f, insert: m } };
        }
      } else if (i == ">") {
        let O = NS(u);
        if (O && O.name == "JSXOpenTag" && !/^\/?>|^<\//.test(o.doc.sliceString(f, f + 2)) && (d = gd(o.doc, O, f)))
          return { range: a, changes: { from: f, insert: `</${d}>` } };
      }
    }
    return { range: a };
  });
  return l.changes.empty ? !1 : (r.dispatch([
    s,
    o.update(l, { userEvent: "input.complete", scrollIntoView: !0 })
  ]), !0);
});
function HS(r, e) {
  return e || (e = {
    parserOptions: { ecmaVersion: 2019, sourceType: "module" },
    env: { browser: !0, node: !0, es6: !0, es2015: !0, es2017: !0, es2020: !0 },
    rules: {}
  }, r.getRules().forEach((t, i) => {
    t.meta.docs.recommended && (e.rules[i] = 2);
  })), (t) => {
    let { state: i } = t, n = [];
    for (let { from: s, to: o } of Ce.findRegions(i)) {
      let l = i.doc.lineAt(s), a = { line: l.number - 1, col: s - l.from, pos: s };
      for (let h of r.verify(i.sliceDoc(s, o), e))
        n.push(FS(h, i.doc, a));
    }
    return n;
  };
}
c(HS, "esLint");
function yd(r, e, t, i) {
  return t.line(r + i.line).from + e + (r == 1 ? i.col - 1 : -1);
}
c(yd, "mapPos");
function FS(r, e, t) {
  let i = yd(r.line, r.column, e, t), n = {
    from: i,
    to: r.endLine != null && r.endColumn != 1 ? yd(r.endLine, r.endColumn, e, t) : i,
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
c(FS, "translateDiagnostic");
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  autoCloseTags: dm,
  completionPath: am,
  esLint: HS,
  javascript: um,
  javascriptLanguage: Ce,
  jsxLanguage: kh,
  localCompletionSource: lm,
  scopeCompletionSource: BS,
  snippets: wh,
  tsxLanguage: Rh,
  typescriptLanguage: Ph,
  typescriptSnippets: nm
}, Symbol.toStringTag, { value: "Module" })), hr = ["_blank", "_self", "_top", "_parent"], No = ["ascii", "utf-8", "utf-16", "latin1", "latin1"], Go = ["get", "post", "put", "delete"], Ho = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], xe = ["true", "false"], L = {}, KS = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: hr,
      hreflang: null
    }
  },
  abbr: L,
  address: L,
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
  article: L,
  aside: L,
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
  b: L,
  base: { attrs: { href: null, target: hr } },
  bdi: L,
  bdo: L,
  blockquote: { attrs: { cite: null } },
  body: L,
  br: L,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: Ho,
      formmethod: Go,
      formnovalidate: ["novalidate"],
      formtarget: hr,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: { attrs: { width: null, height: null } },
  caption: L,
  center: L,
  cite: L,
  code: L,
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
  dd: L,
  del: { attrs: { cite: null, datetime: null } },
  details: { attrs: { open: ["open"] } },
  dfn: L,
  div: L,
  dl: L,
  dt: L,
  em: L,
  embed: { attrs: { src: null, type: null, width: null, height: null } },
  eventsource: { attrs: { src: null } },
  fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
  figcaption: L,
  figure: L,
  footer: L,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": No,
      autocomplete: ["on", "off"],
      enctype: Ho,
      method: Go,
      novalidate: ["novalidate"],
      target: hr
    }
  },
  h1: L,
  h2: L,
  h3: L,
  h4: L,
  h5: L,
  h6: L,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: L,
  hgroup: L,
  hr: L,
  html: {
    attrs: { manifest: null }
  },
  i: L,
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
      formenctype: Ho,
      formmethod: Go,
      formnovalidate: ["novalidate"],
      formtarget: hr,
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
  kbd: L,
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
  legend: L,
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
  mark: L,
  menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
  meta: {
    attrs: {
      content: null,
      charset: No,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: { attrs: { value: null, min: null, low: null, high: null, max: null, optimum: null } },
  nav: L,
  noscript: L,
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
  p: L,
  param: { attrs: { name: null, value: null } },
  pre: L,
  progress: { attrs: { value: null, max: null } },
  q: { attrs: { cite: null } },
  rp: L,
  rt: L,
  ruby: L,
  samp: L,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: No
    }
  },
  section: L,
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
  small: L,
  source: { attrs: { src: null, type: null, media: null } },
  span: L,
  strong: L,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: L,
  summary: L,
  sup: L,
  table: L,
  tbody: L,
  td: { attrs: { colspan: null, rowspan: null, headers: null } },
  template: L,
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
  tfoot: L,
  th: { attrs: { colspan: null, rowspan: null, headers: null, scope: ["row", "col", "rowgroup", "colgroup"] } },
  thead: L,
  time: { attrs: { datetime: null } },
  title: L,
  tr: L,
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
  var: L,
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
  wbr: L
}, Om = {
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
}, pm = /* @__PURE__ */ "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map((r) => "on" + r);
for (let r of pm)
  Om[r] = null;
const xc = class xc {
  constructor(e, t) {
    this.tags = Object.assign(Object.assign({}, KS), e), this.globalAttrs = Object.assign(Object.assign({}, Om), t), this.allTags = Object.keys(this.tags), this.globalAttrNames = Object.keys(this.globalAttrs);
  }
};
c(xc, "Schema");
let ai = xc;
ai.default = /* @__PURE__ */ new ai();
function Fi(r, e, t = r.length) {
  if (!e)
    return "";
  let i = e.firstChild, n = i && i.getChild("TagName");
  return n ? r.sliceString(n.from, Math.min(n.to, t)) : "";
}
c(Fi, "elementName");
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
function mm(r, e, t) {
  let i = t.tags[Fi(r, Ki(e))];
  return (i == null ? void 0 : i.children) || t.allTags;
}
c(mm, "allowedChildren");
function $h(r, e) {
  let t = [];
  for (let i = Ki(e); i && !i.type.isTop; i = Ki(i.parent)) {
    let n = Fi(r, i);
    if (n && i.lastChild.name == "CloseTag")
      break;
    n && t.indexOf(n) < 0 && (e.name == "EndTag" || e.from >= i.firstChild.to) && t.push(n);
  }
  return t;
}
c($h, "openTags");
const gm = /^[:\-\.\w\u00b7-\uffff]*$/;
function bd(r, e, t, i, n) {
  let s = /\s*>/.test(r.sliceDoc(n, n + 5)) ? "" : ">", o = Ki(t, !0);
  return {
    from: i,
    to: n,
    options: mm(r.doc, o, e).map((l) => ({ label: l, type: "type" })).concat($h(r.doc, t).map((l, a) => ({
      label: "/" + l,
      apply: "/" + l + s,
      type: "type",
      boost: 99 - a
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
c(bd, "completeTag");
function Sd(r, e, t, i) {
  let n = /\s*>/.test(r.sliceDoc(i, i + 5)) ? "" : ">";
  return {
    from: t,
    to: i,
    options: $h(r.doc, e).map((s, o) => ({ label: s, apply: s + n, type: "type", boost: 99 - o })),
    validFor: gm
  };
}
c(Sd, "completeCloseTag");
function JS(r, e, t, i) {
  let n = [], s = 0;
  for (let o of mm(r.doc, t, e))
    n.push({ label: "<" + o, type: "type" });
  for (let o of $h(r.doc, t))
    n.push({ label: "</" + o + ">", type: "type", boost: 99 - s++ });
  return { from: i, to: i, options: n, validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/ };
}
c(JS, "completeStartTag");
function eQ(r, e, t, i, n) {
  let s = Ki(t), o = s ? e.tags[Fi(r.doc, s)] : null, l = o && o.attrs ? Object.keys(o.attrs) : [], a = o && o.globalAttrs === !1 ? l : l.length ? l.concat(e.globalAttrNames) : e.globalAttrNames;
  return {
    from: i,
    to: n,
    options: a.map((h) => ({ label: h, type: "property" })),
    validFor: gm
  };
}
c(eQ, "completeAttrName");
function tQ(r, e, t, i, n) {
  var s;
  let o = (s = t.parent) === null || s === void 0 ? void 0 : s.getChild("AttributeName"), l = [], a;
  if (o) {
    let h = r.sliceDoc(o.from, o.to), f = e.globalAttrs[h];
    if (!f) {
      let u = Ki(t), d = u ? e.tags[Fi(r.doc, u)] : null;
      f = (d == null ? void 0 : d.attrs) && d.attrs[h];
    }
    if (f) {
      let u = r.sliceDoc(i, n).toLowerCase(), d = '"', O = '"';
      /^['"]/.test(u) ? (a = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/, d = "", O = r.sliceDoc(n, n + 1) == u[0] ? "" : u[0], u = u.slice(1), i++) : a = /^[^\s<>='"]*$/;
      for (let p of f)
        l.push({ label: p, apply: d + p + O, type: "constant" });
    }
  }
  return { from: i, to: n, options: l, validFor: a };
}
c(tQ, "completeAttrValue");
function ym(r, e) {
  let { state: t, pos: i } = e, n = J(t).resolveInner(i, -1), s = n.resolve(i);
  for (let o = i, l; s == n && (l = n.childBefore(o)); ) {
    let a = l.lastChild;
    if (!a || !a.type.isError || a.from < a.to)
      break;
    s = n = l, o = a.from;
  }
  return n.name == "TagName" ? n.parent && /CloseTag$/.test(n.parent.name) ? Sd(t, n, n.from, i) : bd(t, r, n, n.from, i) : n.name == "StartTag" ? bd(t, r, n, i, i) : n.name == "StartCloseTag" || n.name == "IncompleteCloseTag" ? Sd(t, n, i, i) : n.name == "OpenTag" || n.name == "SelfClosingTag" || n.name == "AttributeName" ? eQ(t, r, n, n.name == "AttributeName" ? n.from : i, i) : n.name == "Is" || n.name == "AttributeValue" || n.name == "UnquotedAttributeValue" ? tQ(t, r, n, n.name == "Is" ? i : n.from, i) : e.explicit && (s.name == "Element" || s.name == "Text" || s.name == "Document") ? JS(t, r, n, i) : null;
}
c(ym, "htmlCompletionFor");
function bm(r) {
  return ym(ai.default, r);
}
c(bm, "htmlCompletionSource");
function Sm(r) {
  let { extraTags: e, extraGlobalAttributes: t } = r, i = t || e ? new ai(e, t) : ai.default;
  return (n) => ym(i, n);
}
c(Sm, "htmlCompletionSourceWith");
const iQ = /* @__PURE__ */ Ce.parser.configure({ top: "SingleExpression" }), Qm = [
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/typescript" || r.lang == "ts", "attrs"),
    parser: Ph.parser
  },
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/babel" || r.type == "text/jsx", "attrs"),
    parser: kh.parser
  },
  {
    tag: "script",
    attrs: /* @__PURE__ */ c((r) => r.type == "text/typescript-jsx", "attrs"),
    parser: Rh.parser
  },
  {
    tag: "script",
    attrs(r) {
      return /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(r.type);
    },
    parser: iQ
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
    parser: On.parser
  }
], wm = /* @__PURE__ */ [
  {
    name: "style",
    parser: /* @__PURE__ */ On.parser.configure({ top: "Styles" })
  }
].concat(/* @__PURE__ */ pm.map((r) => ({ name: r, parser: Ce.parser }))), vh = /* @__PURE__ */ sn.define({
  name: "html",
  parser: /* @__PURE__ */ U1.configure({
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
      /* @__PURE__ */ yn.add({
        Element(r) {
          let e = r.firstChild, t = r.lastChild;
          return !e || e.name != "OpenTag" ? null : { from: e.to, to: t.name == "CloseTag" ? t.from : r.to };
        }
      }),
      /* @__PURE__ */ sp.add({
        "OpenTag CloseTag": /* @__PURE__ */ c((r) => r.getChild("TagName"), "OpenTag CloseTag")
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "<!--", close: "-->" } },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-._"
  }
}), Pr = /* @__PURE__ */ vh.configure({
  wrap: /* @__PURE__ */ Gp(Qm, wm)
});
function xm(r = {}) {
  let e = "", t;
  r.matchClosingTags === !1 && (e = "noMatch"), r.selfClosingTags === !0 && (e = (e ? e + " " : "") + "selfClosing"), (r.nestedLanguages && r.nestedLanguages.length || r.nestedAttributes && r.nestedAttributes.length) && (t = Gp((r.nestedLanguages || []).concat(Qm), (r.nestedAttributes || []).concat(wm)));
  let i = t ? vh.configure({ wrap: t, dialect: e }) : e ? Pr.configure({ dialect: e }) : Pr;
  return new Mt(i, [
    Pr.data.of({ autocomplete: Sm(r) }),
    r.autoCloseTags !== !1 ? Pm : [],
    um().support,
    im().support
  ]);
}
c(xm, "html");
const Qd = /* @__PURE__ */ new Set(/* @__PURE__ */ "area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")), Pm = /* @__PURE__ */ _.inputHandler.of((r, e, t, i, n) => {
  if (r.composing || r.state.readOnly || e != t || i != ">" && i != "/" || !Pr.isActiveAt(r.state, e, -1))
    return !1;
  let s = n(), { state: o } = s, l = o.changeByRange((a) => {
    var h, f, u;
    let d = o.doc.sliceString(a.from - 1, a.to) == i, { head: O } = a, p = J(o).resolveInner(O, -1), m;
    if (d && i == ">" && p.name == "EndTag") {
      let y = p.parent;
      if (((f = (h = y.parent) === null || h === void 0 ? void 0 : h.lastChild) === null || f === void 0 ? void 0 : f.name) != "CloseTag" && (m = Fi(o.doc, y.parent, O)) && !Qd.has(m)) {
        let b = O + (o.doc.sliceString(O, O + 1) === ">" ? 1 : 0), Q = `</${m}>`;
        return { range: a, changes: { from: O, to: b, insert: Q } };
      }
    } else if (d && i == "/" && p.name == "IncompleteCloseTag") {
      let y = p.parent;
      if (p.from == O - 2 && ((u = y.lastChild) === null || u === void 0 ? void 0 : u.name) != "CloseTag" && (m = Fi(o.doc, y, O)) && !Qd.has(m)) {
        let b = O + (o.doc.sliceString(O, O + 1) === ">" ? 1 : 0), Q = `${m}>`;
        return {
          range: R.cursor(O + Q.length, -1),
          changes: { from: O, to: b, insert: Q }
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
}), rQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  autoCloseTags: Pm,
  html: xm,
  htmlCompletionSource: bm,
  htmlCompletionSourceWith: Sm,
  htmlLanguage: Pr,
  htmlPlain: vh
}, Symbol.toStringTag, { value: "Module" })), km = /* @__PURE__ */ bo({ commentTokens: { block: { open: "<!--", close: "-->" } } }), Rm = /* @__PURE__ */ new C(), $m = /* @__PURE__ */ Xb.configure({
  props: [
    /* @__PURE__ */ yn.add((r) => !r.is("Block") || r.is("Document") || Ba(r) != null || nQ(r) ? void 0 : (e, t) => ({ from: t.doc.lineAt(e.from).to, to: e.to })),
    /* @__PURE__ */ Rm.add(Ba),
    /* @__PURE__ */ er.add({
      Document: /* @__PURE__ */ c(() => null, "Document")
    }),
    /* @__PURE__ */ Qt.add({
      Document: km
    })
  ]
});
function Ba(r) {
  let e = /^(?:ATX|Setext)Heading(\d)$/.exec(r.name);
  return e ? +e[1] : void 0;
}
c(Ba, "isHeading");
function nQ(r) {
  return r.name == "OrderedList" || r.name == "BulletList";
}
c(nQ, "isList");
function sQ(r, e) {
  let t = r;
  for (; ; ) {
    let i = t.nextSibling, n;
    if (!i || (n = Ba(i.type)) != null && n <= e)
      break;
    t = i;
  }
  return t.to;
}
c(sQ, "findSectionEnd");
const oQ = /* @__PURE__ */ Wy.of((r, e, t) => {
  for (let i = J(r).resolveInner(t, -1); i && !(i.from < e); i = i.parent) {
    let n = i.type.prop(Rm);
    if (n == null)
      continue;
    let s = sQ(i, n);
    if (s > t)
      return { from: t, to: s };
  }
  return null;
});
function Th(r) {
  return new pe(km, r, [oQ], "markdown");
}
c(Th, "mkLang");
const vm = /* @__PURE__ */ Th($m), lQ = /* @__PURE__ */ $m.configure([Hb, Kb, Fb, Jb, {
  props: [
    /* @__PURE__ */ yn.add({
      Table: /* @__PURE__ */ c((r, e) => ({ from: e.doc.lineAt(r.from).to, to: r.to }), "Table")
    })
  ]
}]), Es = /* @__PURE__ */ Th(lQ);
function aQ(r, e) {
  return (t) => {
    if (t && r) {
      let i = null;
      if (t = /\S*/.exec(t)[0], typeof r == "function" ? i = r(t) : i = S.matchLanguageName(r, t, !0), i instanceof S)
        return i.support ? i.support.language.parser : qi.getSkippingParser(i.load());
      if (i)
        return i.parser;
    }
    return e ? e.parser : null;
  };
}
c(aQ, "getCodeParser");
const Pc = class Pc {
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
    let i = this.node.name == "OrderedList" ? String(+Am(this.item, e)[2] + t) : "";
    return this.spaceBefore + i + this.type + this.spaceAfter;
  }
};
c(Pc, "Context");
let kr = Pc;
function Tm(r, e) {
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
c(Tm, "getContext");
function Am(r, e) {
  return /^(\s*)(\d+)(?=[.)])/.exec(e.sliceString(r.from, r.from + 10));
}
c(Am, "itemNumber");
function Fo(r, e, t, i = 0) {
  for (let n = -1, s = r; ; ) {
    if (s.name == "ListItem") {
      let l = Am(s, e), a = +l[2];
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
c(Fo, "renumberList");
function Ah(r, e) {
  let t = /^[ \t]*/.exec(r)[0].length;
  if (!t || e.facet(gn) != "	")
    return r;
  let i = dt(r, 4, t), n = "";
  for (let s = i; s > 0; )
    s >= 4 ? (n += "	", s -= 4) : (n += " ", s--);
  return n + r.slice(t);
}
c(Ah, "normalizeIndent");
const Zm = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = J(r), { doc: i } = r, n = null, s = r.changeByRange((o) => {
    if (!o.empty || !Es.isActiveAt(r, o.from, -1) && !Es.isActiveAt(r, o.from, 1))
      return n = { range: o };
    let l = o.from, a = i.lineAt(l), h = Tm(t.resolveInner(l, -1), i);
    for (; h.length && h[h.length - 1].from > l - a.from; )
      h.pop();
    if (!h.length)
      return n = { range: o };
    let f = h[h.length - 1];
    if (f.to - f.spaceAfter.length > l - a.from)
      return n = { range: o };
    let u = l >= f.to - f.spaceAfter.length && !/\S/.test(a.text.slice(f.to));
    if (f.item && u) {
      let y = f.node.firstChild, b = f.node.getChild("ListItem", "ListItem");
      if (y.to >= l || b && b.to < l || a.from > 0 && !/[^\s>]/.test(i.lineAt(a.from - 1).text)) {
        let Q = h.length > 1 ? h[h.length - 2] : null, x, $ = "";
        Q && Q.item ? (x = a.from + Q.from, $ = Q.marker(i, 1)) : x = a.from + (Q ? Q.to : 0);
        let k = [{ from: x, to: l, insert: $ }];
        return f.node.name == "OrderedList" && Fo(f.item, i, k, -2), Q && Q.node.name == "OrderedList" && Fo(Q.item, i, k), { range: R.cursor(x + $.length), changes: k };
      } else {
        let Q = xd(h, r, a);
        return {
          range: R.cursor(l + Q.length + 1),
          changes: { from: a.from, insert: Q + r.lineBreak }
        };
      }
    }
    if (f.node.name == "Blockquote" && u && a.from) {
      let y = i.lineAt(a.from - 1), b = />\s*$/.exec(y.text);
      if (b && b.index == f.from) {
        let Q = r.changes([
          { from: y.from + b.index, to: y.to },
          { from: a.from + f.from, to: a.to }
        ]);
        return { range: o.map(Q), changes: Q };
      }
    }
    let d = [];
    f.node.name == "OrderedList" && Fo(f.item, i, d);
    let O = f.item && f.item.from < a.from, p = "";
    if (!O || /^[\s\d.)\-+*>]*/.exec(a.text)[0].length >= f.to)
      for (let y = 0, b = h.length - 1; y <= b; y++)
        p += y == b && !O ? h[y].marker(i, 1) : h[y].blank(y < b ? dt(a.text, 4, h[y + 1].from) - p.length : null);
    let m = l;
    for (; m > a.from && /\s/.test(a.text.charAt(m - a.from - 1)); )
      m--;
    return p = Ah(p, r), hQ(f.node, r.doc) && (p = xd(h, r, a) + r.lineBreak + p), d.push({ from: m, to: l, insert: r.lineBreak + p }), { range: R.cursor(m + p.length + 1), changes: d };
  });
  return n ? !1 : (e(r.update(s, { scrollIntoView: !0, userEvent: "input" })), !0);
}, "insertNewlineContinueMarkup");
function wd(r) {
  return r.name == "QuoteMark" || r.name == "ListMark";
}
c(wd, "isMark");
function hQ(r, e) {
  if (r.name != "OrderedList" && r.name != "BulletList")
    return !1;
  let t = r.firstChild, i = r.getChild("ListItem", "ListItem");
  if (!i)
    return !1;
  let n = e.lineAt(t.to), s = e.lineAt(i.from), o = /^[\s>]*$/.test(n.text);
  return n.number + (o ? 0 : 1) < s.number;
}
c(hQ, "nonTightList");
function xd(r, e, t) {
  let i = "";
  for (let n = 0, s = r.length - 2; n <= s; n++)
    i += r[n].blank(n < s ? dt(t.text, 4, r[n + 1].from) - i.length : null, n < s);
  return Ah(i, e);
}
c(xd, "blankLine");
function fQ(r, e) {
  let t = r.resolveInner(e, -1), i = e;
  wd(t) && (i = t.from, t = t.parent);
  for (let n; n = t.childBefore(i); )
    if (wd(n))
      i = n.from;
    else if (n.name == "OrderedList" || n.name == "BulletList")
      t = n.lastChild, i = t.to;
    else
      break;
  return t;
}
c(fQ, "contextNodeForDelete");
const Lm = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = J(r), i = null, n = r.changeByRange((s) => {
    let o = s.from, { doc: l } = r;
    if (s.empty && Es.isActiveAt(r, s.from)) {
      let a = l.lineAt(o), h = Tm(fQ(t, o), l);
      if (h.length) {
        let f = h[h.length - 1], u = f.to - f.spaceAfter.length + (f.spaceAfter ? 1 : 0);
        if (o - a.from > u && !/\S/.test(a.text.slice(u, o - a.from)))
          return {
            range: R.cursor(a.from + u),
            changes: { from: a.from + u, to: o }
          };
        if (o - a.from == u && // Only apply this if we're on the line that has the
        // construct's syntax, or there's only indentation in the
        // target range
        (!f.item || a.from <= f.item.from || !/\S/.test(a.text.slice(0, f.to)))) {
          let d = a.from + f.from;
          if (f.item && f.node.from < f.item.from && /\S/.test(a.text.slice(f.from, f.to))) {
            let O = f.blank(dt(a.text, 4, f.to) - dt(a.text, 4, f.from));
            return d == a.from && (O = Ah(O, r)), {
              range: R.cursor(d + O.length),
              changes: { from: d, to: a.from + f.to, insert: O }
            };
          }
          if (d < o)
            return { range: R.cursor(d), changes: { from: d, to: o } };
        }
      }
    }
    return i = { range: s };
  });
  return i ? !1 : (e(r.update(n, { scrollIntoView: !0, userEvent: "delete" })), !0);
}, "deleteMarkupBackward"), Mm = [
  { key: "Enter", run: Zm },
  { key: "Backspace", run: Lm }
], _m = /* @__PURE__ */ xm({ matchClosingTags: !1 });
function Cm(r = {}) {
  let { codeLanguages: e, defaultCodeLanguage: t, addKeymap: i = !0, base: { parser: n } = vm, completeHTMLTags: s = !0, htmlTagLanguage: o = _m } = r;
  if (!(n instanceof $s))
    throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
  let l = r.extensions ? [r.extensions] : [], a = [o.support], h;
  t instanceof Mt ? (a.push(t.support), h = t.language) : t && (h = t);
  let f = e || h ? aQ(e, h) : void 0;
  l.push(Ib({ codeParser: f, htmlParser: o.language.parser })), i && a.push(hi.high(mn.of(Mm)));
  let u = Th(n.configure(l));
  return s && a.push(u.data.of({ autocomplete: cQ })), new Mt(u, a);
}
c(Cm, "markdown");
function cQ(r) {
  let { state: e, pos: t } = r, i = /<[:\-\.\w\u00b7-\uffff]*$/.exec(e.sliceDoc(t - 25, t));
  if (!i)
    return null;
  let n = J(e).resolveInner(t, -1);
  for (; n && !n.type.isTop; ) {
    if (n.name == "CodeBlock" || n.name == "FencedCode" || n.name == "ProcessingInstructionBlock" || n.name == "CommentBlock" || n.name == "Link" || n.name == "Image")
      return null;
    n = n.parent;
  }
  return {
    from: t - i[0].length,
    to: t,
    options: uQ(),
    validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
  };
}
c(cQ, "htmlTagCompletion");
let Ko = null;
function uQ() {
  if (Ko)
    return Ko;
  let r = bm(new zi(K.create({ extensions: _m }), 0, !0));
  return Ko = r ? r.options : [];
}
c(uQ, "htmlTagCompletions");
const dQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonmarkLanguage: vm,
  deleteMarkupBackward: Lm,
  insertNewlineContinueMarkup: Zm,
  markdown: Cm,
  markdownKeymap: Mm,
  markdownLanguage: Es
}, Symbol.toStringTag, { value: "Module" }));
function w(r) {
  return new Mt(ua.define(r));
}
c(w, "legacy");
function pt(r) {
  return import(
    /* webpackIgnore: true */
    /* @vite-ignore */
    new URL("./@codemirror/lang-sql/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
  ).then((e) => e.sql({ dialect: e[r] }));
}
c(pt, "sql");
const OQ = [
  // New-style language modes
  /* @__PURE__ */ S.of({
    name: "C",
    extensions: ["c", "h", "ino"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-cpp/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-cpp/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
      return Promise.resolve().then(() => cS).then((r) => r.css());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Go",
    extensions: ["go"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-go/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.go());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "HTML",
    alias: ["xhtml"],
    extensions: ["html", "htm", "handlebars", "hbs"],
    load() {
      return Promise.resolve().then(() => rQ).then((r) => r.html());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Java",
    extensions: ["java"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-java/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.java());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JavaScript",
    alias: ["ecmascript", "js", "node"],
    extensions: ["js", "mjs", "cjs"],
    load() {
      return Promise.resolve().then(() => Yn).then((r) => r.javascript());
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
        new URL("./@codemirror/lang-json/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.json());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "JSX",
    extensions: ["jsx"],
    load() {
      return Promise.resolve().then(() => Yn).then((r) => r.javascript({ jsx: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "LESS",
    extensions: ["less"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-less/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-liquid/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
      return Promise.resolve().then(() => dQ).then((r) => r.markdown());
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
        new URL("./@codemirror/lang-php/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-python/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-rust/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-sass/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-sass/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
      return Promise.resolve().then(() => Yn).then((r) => r.javascript({ jsx: !0, typescript: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TypeScript",
    alias: ["ts"],
    extensions: ["ts", "mts", "cts"],
    load() {
      return Promise.resolve().then(() => Yn).then((r) => r.javascript({ typescript: !0 }));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "WebAssembly",
    extensions: ["wat", "wast"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-wast/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-xml/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-yaml/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/apl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/asciiarmor.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/asn1.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/asterisk.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/brainfuck.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/cobol.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clojure.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clojure.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/css.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/cmake.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/coffeescript.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/commonlisp.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/cypher.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/python.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/crystal.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/d.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/diff.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/dockerfile.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/dtd.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/dylan.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.dylan));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "EBNF",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/ebnf.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/ecl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clojure.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/eiffel.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/elm.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/erlang.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.erlang));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Esper",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/sql.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/factor.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.factor));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "FCL",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/fcl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/forth.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/fortran.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mllike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/gas.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/gherkin.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/groovy.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/haskell.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/haxe.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/haxe.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.hxml));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "HTTP",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/http.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/idl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/javascript.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.jsonld));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Jinja2",
    extensions: ["j2", "jinja", "jinja2"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/jinja2.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.jinja2));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Julia",
    extensions: ["jl"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/julia.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/livescript.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/lua.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mirc.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mathematica.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/modelica.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mumps.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mbox.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/nginx.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/nsis.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/ntriples.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mllike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/octave.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/oz.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/pascal.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/perl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/pig.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/powershell.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/properties.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/protobuf.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/pug.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/puppet.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/q.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/r.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.r));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "RPM Changes",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/rpm.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/rpm.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/ruby.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/sas.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/scheme.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/shell.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/sieve.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/smalltalk.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.smalltalk));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Solr",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/solr.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mllike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/sparql.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/spreadsheet.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/clike.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/stylus.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/swift.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.swift));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "sTeX",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/stex.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/stex.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/verilog.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/tcl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/textile.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.textile));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "TiddlyWiki",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/tiddlywiki.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.tiddlyWiki));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Tiki wiki",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/tiki.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/toml.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/troff.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/ttcn.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/ttcn-cfg.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/turtle.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/webidl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/vb.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/vbscript.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/velocity.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/verilog.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/vhdl.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => w(r.vhdl));
    }
  }),
  /* @__PURE__ */ S.of({
    name: "XQuery",
    extensions: ["xy", "xquery"],
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/legacy-modes/mode/xquery.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/yacas.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/z80.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mscgen.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mscgen.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/legacy-modes/mode/mscgen.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
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
        new URL("./@codemirror/lang-vue/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.vue());
    }
  }),
  /* @__PURE__ */ S.of({
    name: "Angular Template",
    load() {
      return import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        new URL("./@codemirror/lang-angular/dist/index.js", typeof WEAVY_IMPORT_URL == "string" && (!import.meta.url || !new URL(import.meta.url).href.startsWith(WEAVY_IMPORT_URL)) ? WEAVY_IMPORT_URL : import.meta.url).href
      ).then((r) => r.angular());
    }
  })
], pQ = [
  { key: "Mod-Enter", run: Em },
  {
    key: "Tab",
    run: /* @__PURE__ */ c((r) => Mb(r.state) ? Op(r) : !1, "run")
  }
], mQ = [{ key: "Enter", run: Em }];
function Em(r) {
  const e = new Event("Weavy-SoftSubmit");
  return r.dom.dispatchEvent(e), !0;
}
c(Em, "softSubmit");
const Pd = new zl({
  regexp: /(\[(.+?)\])(\(@u(\d+)\))/g,
  decoration: /* @__PURE__ */ c((r) => j.replace({
    // NOTE: can't use backspace to go "up one row" when inclusive is false
    inclusive: !0,
    widget: new za(r)
  }), "decoration")
}), kc = class kc extends vt {
  constructor(e) {
    super(), this.match = e;
  }
  eq(e) {
    return e.match[1] === this.match[1];
  }
  toDOM() {
    Cd();
    const e = document.createElement("span");
    return e.className = "wy-mention", e.innerHTML = typeof this.match[5] < "u" ? this.match[5] : this.match[2], e;
  }
  ignoreEvent() {
    return !1;
  }
};
c(kc, "MentionWidget");
let za = kc;
const gQ = je.fromClass(
  class {
    constructor(r) {
      this.mentions = Pd.createDeco(r);
    }
    update(r) {
      this.mentions = Pd.updateDeco(r, this.mentions);
    }
  },
  {
    decorations: /* @__PURE__ */ c((r) => r.mentions, "decorations"),
    provide: /* @__PURE__ */ c((r) => _.atomicRanges.of((e) => {
      var t;
      return ((t = e.plugin(r)) == null ? void 0 : t.mentions) || j.none;
    }), "provide")
  }
), yQ = /* @__PURE__ */ c((r) => {
  let { state: e } = r, t = e.doc.lineAt(e.selection.main.from), i = Lh(r.state, t.from);
  return i.line ? bQ(r) : i.block ? QQ(r) : !1;
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
const bQ = /* @__PURE__ */ Zh(
  PQ,
  0
  /* CommentOption.Toggle */
), SQ = /* @__PURE__ */ Zh(
  Vm,
  0
  /* CommentOption.Toggle */
), QQ = /* @__PURE__ */ Zh(
  (r, e) => Vm(r, e, xQ(e)),
  0
  /* CommentOption.Toggle */
);
function Lh(r, e) {
  let t = r.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
c(Lh, "getConfig");
const fr = 50;
function wQ(r, { open: e, close: t }, i, n) {
  let s = r.sliceDoc(i - fr, i), o = r.sliceDoc(n, n + fr), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, h = s.length - l;
  if (s.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let f, u;
  n - i <= 2 * fr ? f = u = r.sliceDoc(i, n) : (f = r.sliceDoc(i, i + fr), u = r.sliceDoc(n - fr, n));
  let d = /^\s*/.exec(f)[0].length, O = /\s*$/.exec(u)[0].length, p = u.length - O - t.length;
  return f.slice(d, d + e.length) == e && u.slice(p, p + t.length) == t ? {
    open: {
      pos: i + d + e.length,
      margin: /\s/.test(f.charAt(d + e.length)) ? 1 : 0
    },
    close: {
      pos: n - O - t.length,
      margin: /\s/.test(u.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
c(wQ, "findBlockComment");
function xQ(r) {
  let e = [];
  for (let t of r.selection.ranges) {
    let i = r.doc.lineAt(t.from), n = t.to <= i.to ? i : r.doc.lineAt(t.to);
    n.from > i.from && n.from == t.to && (n = t.to == i.to + 1 ? i : r.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = n.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return e;
}
c(xQ, "selectedLineRanges");
function Vm(r, e, t = e.selection.ranges) {
  let i = t.map((s) => Lh(e, s.from).block);
  if (!i.every((s) => s))
    return null;
  let n = t.map((s, o) => wQ(e, i[o], s.from, s.to));
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
c(Vm, "changeBlockComment");
function PQ(r, e, t = e.selection.ranges) {
  let i = [], n = -1;
  for (let { from: s, to: o } of t) {
    let l = i.length, a = 1e9, h = Lh(e, s).line;
    if (h) {
      for (let f = s; f <= o; ) {
        let u = e.doc.lineAt(f);
        if (u.from > n && (s == o || o > u.from)) {
          n = u.from;
          let d = /^\s*/.exec(u.text)[0].length, O = d == u.length, p = u.text.slice(d, d + h.length) == h ? d : -1;
          d < u.text.length && d < a && (a = d), i.push({ line: u, comment: p, token: h, indent: d, empty: O, single: !1 });
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
c(PQ, "changeLineComment");
const Na = /* @__PURE__ */ Ie.define(), kQ = /* @__PURE__ */ Ie.define(), RQ = /* @__PURE__ */ M.define(), Um = /* @__PURE__ */ M.define({
  combine(r) {
    return Hd(r, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: /* @__PURE__ */ c((e, t) => t, "joinToEvent")
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: /* @__PURE__ */ c((e, t) => (i, n) => e(i, n) || t(i, n), "joinToEvent")
    });
  }
}), Wm = /* @__PURE__ */ Ye.define({
  create() {
    return Jt.empty;
  },
  update(r, e) {
    let t = e.state.facet(Um), i = e.annotation(Na);
    if (i) {
      let a = Xe.fromTransaction(e, i.selection), h = i.side, f = h == 0 ? r.undone : r.done;
      return a ? f = Vs(f, f.length, t.minDepth, a) : f = Im(f, e.startState.selection), new Jt(h == 0 ? i.rest : f, h == 0 ? f : i.rest);
    }
    let n = e.annotation(kQ);
    if ((n == "full" || n == "before") && (r = r.isolate()), e.annotation(le.addToHistory) === !1)
      return e.changes.empty ? r : r.addMapping(e.changes.desc);
    let s = Xe.fromTransaction(e), o = e.annotation(le.time), l = e.annotation(le.userEvent);
    return s ? r = r.addChanges(s, o, l, t, e) : e.selection && (r = r.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (n == "full" || n == "after") && (r = r.isolate()), r;
  },
  toJSON(r) {
    return { done: r.done.map((e) => e.toJSON()), undone: r.undone.map((e) => e.toJSON()) };
  },
  fromJSON(r) {
    return new Jt(r.done.map(Xe.fromJSON), r.undone.map(Xe.fromJSON));
  }
});
function $Q(r = {}) {
  return [
    Wm,
    Um.of(r),
    _.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Xm : e.inputType == "historyRedo" ? Ga : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      }
    })
  ];
}
c($Q, "history");
function So(r, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return !1;
    let n = t.field(Wm, !1);
    if (!n)
      return !1;
    let s = n.pop(r, t, e);
    return s ? (i(s), !0) : !1;
  };
}
c(So, "cmd");
const Xm = /* @__PURE__ */ So(0, !1), Ga = /* @__PURE__ */ So(1, !1), vQ = /* @__PURE__ */ So(0, !0), TQ = /* @__PURE__ */ So(1, !0), Nt = class Nt {
  constructor(e, t, i, n, s) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = n, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new Nt(this.changes, this.effects, this.mapped, this.startSelection, e);
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
    return new Nt(e.changes && Te.fromJSON(e.changes), [], e.mapped && wt.fromJSON(e.mapped), e.startSelection && R.fromJSON(e.startSelection), e.selectionsAfter.map(R.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, t) {
    let i = _e;
    for (let n of e.startState.facet(RQ)) {
      let s = n(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new Nt(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, _e);
  }
  static selection(e) {
    return new Nt(void 0, _e, void 0, void 0, e);
  }
};
c(Nt, "HistEvent");
let Xe = Nt;
function Vs(r, e, t, i) {
  let n = e + 1 > t + 20 ? e - t - 1 : 0, s = r.slice(n, e);
  return s.push(i), s;
}
c(Vs, "updateBranch");
function AQ(r, e) {
  let t = [], i = !1;
  return r.iterChangedRanges((n, s) => t.push(n, s)), e.iterChangedRanges((n, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], f = t[a++];
      l >= h && o <= f && (i = !0);
    }
  }), i;
}
c(AQ, "isAdjacent");
function ZQ(r, e) {
  return r.ranges.length == e.ranges.length && r.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
c(ZQ, "eqSelectionShape");
function Ym(r, e) {
  return r.length ? e.length ? r.concat(e) : r : e;
}
c(Ym, "conc");
const _e = [], LQ = 200;
function Im(r, e) {
  if (r.length) {
    let t = r[r.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - LQ));
    return i.length && i[i.length - 1].eq(e) ? r : (i.push(e), Vs(r, r.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [Xe.selection([e])];
}
c(Im, "addSelection");
function MQ(r) {
  let e = r[r.length - 1], t = r.slice();
  return t[r.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
c(MQ, "popSelection");
function Jo(r, e) {
  if (!r.length)
    return r;
  let t = r.length, i = _e;
  for (; t; ) {
    let n = _Q(r[t - 1], e, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let s = r.slice(0, t);
      return s[t - 1] = n, s;
    } else
      e = n.mapped, t--, i = n.selectionsAfter;
  }
  return i.length ? [Xe.selection(i)] : _e;
}
c(Jo, "addMappingToBranch");
function _Q(r, e, t) {
  let i = Ym(r.selectionsAfter.length ? r.selectionsAfter.map((l) => l.map(e)) : _e, t);
  if (!r.changes)
    return Xe.selection(i);
  let n = r.changes.map(e), s = e.mapDesc(r.changes, !0), o = r.mapped ? r.mapped.composeDesc(s) : s;
  return new Xe(n, I.mapEffects(r.effects, e), o, r.startSelection.map(s), i);
}
c(_Q, "mapEvent");
const CQ = /^(input\.type|delete)($|\.)/, Gt = class Gt {
  constructor(e, t, i = 0, n = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new Gt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, n, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || CQ.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < n.newGroupDelay && n.joinToEvent(s, AQ(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = Vs(o, o.length - 1, n.minDepth, new Xe(e.changes.compose(l.changes), Ym(I.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, _e)) : o = Vs(o, o.length, n.minDepth, e), new Gt(o, _e, t, i);
  }
  addSelection(e, t, i, n) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : _e;
    return s.length > 0 && t - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && ZQ(s[s.length - 1], e) ? this : new Gt(Im(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Gt(Jo(this.done, e), Jo(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let n = e == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let s = n[n.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (i && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: Na.of({ side: e, rest: MQ(n), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = n.length == 1 ? _e : n.slice(0, n.length - 1);
      return s.mapped && (l = Jo(l, s.mapped)), t.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: Na.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
};
c(Gt, "HistoryState");
let Jt = Gt;
Jt.empty = /* @__PURE__ */ new Jt(_e, _e);
const EQ = [
  { key: "Mod-z", run: Xm, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Ga, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Ga, preventDefault: !0 },
  { key: "Mod-u", run: vQ, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: TQ, preventDefault: !0 }
];
function tr(r, e) {
  return R.create(r.ranges.map(e), r.mainIndex);
}
c(tr, "updateSel");
function st(r, e) {
  return r.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
c(st, "setSel");
function De({ state: r, dispatch: e }, t) {
  let i = tr(r.selection, t);
  return i.eq(r.selection, !0) ? !1 : (e(st(r, i)), !0);
}
c(De, "moveSel");
function Qo(r, e) {
  return R.cursor(e ? r.to : r.from);
}
c(Qo, "rangeEnd");
function jm(r, e) {
  return De(r, (t) => t.empty ? r.moveByChar(t, e) : Qo(t, e));
}
c(jm, "cursorByChar");
function he(r) {
  return r.textDirectionAt(r.state.selection.main.head) == ee.LTR;
}
c(he, "ltrAtCursor");
const qm = /* @__PURE__ */ c((r) => jm(r, !he(r)), "cursorCharLeft"), Dm = /* @__PURE__ */ c((r) => jm(r, he(r)), "cursorCharRight");
function Bm(r, e) {
  return De(r, (t) => t.empty ? r.moveByGroup(t, e) : Qo(t, e));
}
c(Bm, "cursorByGroup");
const VQ = /* @__PURE__ */ c((r) => Bm(r, !he(r)), "cursorGroupLeft"), UQ = /* @__PURE__ */ c((r) => Bm(r, he(r)), "cursorGroupRight");
function WQ(r, e, t) {
  if (e.type.prop(t))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(r.sliceDoc(e.from, e.to))) || e.firstChild;
}
c(WQ, "interestingNode");
function wo(r, e, t) {
  let i = J(r).resolveInner(e.head), n = t ? C.closedBy : C.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    WQ(r, h, n) ? i = h : a = t ? h.to : h.from;
  }
  let s = i.type.prop(n), o, l;
  return s && (o = t ? gi(r, i.from, 1) : gi(r, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, R.cursor(l, t ? -1 : 1);
}
c(wo, "moveBySyntax");
const XQ = /* @__PURE__ */ c((r) => De(r, (e) => wo(r.state, e, !he(r))), "cursorSyntaxLeft"), YQ = /* @__PURE__ */ c((r) => De(r, (e) => wo(r.state, e, he(r))), "cursorSyntaxRight");
function zm(r, e) {
  return De(r, (t) => {
    if (!t.empty)
      return Qo(t, e);
    let i = r.moveVertically(t, e);
    return i.head != t.head ? i : r.moveToLineBoundary(t, e);
  });
}
c(zm, "cursorByLine");
const Nm = /* @__PURE__ */ c((r) => zm(r, !1), "cursorLineUp"), Gm = /* @__PURE__ */ c((r) => zm(r, !0), "cursorLineDown");
function Hm(r) {
  let e = r.scrollDOM.clientHeight < r.scrollDOM.scrollHeight - 2, t = 0, i = 0, n;
  if (e) {
    for (let s of r.state.facet(_.scrollMargins)) {
      let o = s(r);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
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
c(Hm, "pageInfo");
function Fm(r, e) {
  let t = Hm(r), { state: i } = r, n = tr(i.selection, (o) => o.empty ? r.moveVertically(o, e, t.height) : Qo(o, e));
  if (n.eq(i.selection))
    return !1;
  let s;
  if (t.selfScroll) {
    let o = r.coordsAtPos(i.selection.main.head), l = r.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < h && (s = _.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return r.dispatch(st(i, n), { effects: s }), !0;
}
c(Fm, "cursorByPage");
const kd = /* @__PURE__ */ c((r) => Fm(r, !1), "cursorPageUp"), Ha = /* @__PURE__ */ c((r) => Fm(r, !0), "cursorPageDown");
function _t(r, e, t) {
  let i = r.lineBlockAt(e.head), n = r.moveToLineBoundary(e, t);
  if (n.head == e.head && n.head != (t ? i.to : i.from) && (n = r.moveToLineBoundary(e, t, !1)), !t && n.head == i.from && i.length) {
    let s = /^\s*/.exec(r.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (n = R.cursor(i.from + s));
  }
  return n;
}
c(_t, "moveByLineBoundary");
const IQ = /* @__PURE__ */ c((r) => De(r, (e) => _t(r, e, !0)), "cursorLineBoundaryForward"), jQ = /* @__PURE__ */ c((r) => De(r, (e) => _t(r, e, !1)), "cursorLineBoundaryBackward"), qQ = /* @__PURE__ */ c((r) => De(r, (e) => _t(r, e, !he(r))), "cursorLineBoundaryLeft"), DQ = /* @__PURE__ */ c((r) => De(r, (e) => _t(r, e, he(r))), "cursorLineBoundaryRight"), BQ = /* @__PURE__ */ c((r) => De(r, (e) => R.cursor(r.lineBlockAt(e.head).from, 1)), "cursorLineStart"), zQ = /* @__PURE__ */ c((r) => De(r, (e) => R.cursor(r.lineBlockAt(e.head).to, -1)), "cursorLineEnd");
function NQ(r, e, t) {
  let i = !1, n = tr(r.selection, (s) => {
    let o = gi(r, s.head, -1) || gi(r, s.head, 1) || s.head > 0 && gi(r, s.head - 1, 1) || s.head < r.doc.length && gi(r, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    i = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return R.cursor(l);
  });
  return i ? (e(st(r, n)), !0) : !1;
}
c(NQ, "toMatchingBracket");
const GQ = /* @__PURE__ */ c(({ state: r, dispatch: e }) => NQ(r, e), "cursorMatchingBracket");
function Ue(r, e) {
  let t = tr(r.state.selection, (i) => {
    let n = e(i);
    return R.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0);
  });
  return t.eq(r.state.selection) ? !1 : (r.dispatch(st(r.state, t)), !0);
}
c(Ue, "extendSel");
function Km(r, e) {
  return Ue(r, (t) => r.moveByChar(t, e));
}
c(Km, "selectByChar");
const Jm = /* @__PURE__ */ c((r) => Km(r, !he(r)), "selectCharLeft"), eg = /* @__PURE__ */ c((r) => Km(r, he(r)), "selectCharRight");
function tg(r, e) {
  return Ue(r, (t) => r.moveByGroup(t, e));
}
c(tg, "selectByGroup");
const HQ = /* @__PURE__ */ c((r) => tg(r, !he(r)), "selectGroupLeft"), FQ = /* @__PURE__ */ c((r) => tg(r, he(r)), "selectGroupRight"), KQ = /* @__PURE__ */ c((r) => Ue(r, (e) => wo(r.state, e, !he(r))), "selectSyntaxLeft"), JQ = /* @__PURE__ */ c((r) => Ue(r, (e) => wo(r.state, e, he(r))), "selectSyntaxRight");
function ig(r, e) {
  return Ue(r, (t) => r.moveVertically(t, e));
}
c(ig, "selectByLine");
const rg = /* @__PURE__ */ c((r) => ig(r, !1), "selectLineUp"), ng = /* @__PURE__ */ c((r) => ig(r, !0), "selectLineDown");
function sg(r, e) {
  return Ue(r, (t) => r.moveVertically(t, e, Hm(r).height));
}
c(sg, "selectByPage");
const Rd = /* @__PURE__ */ c((r) => sg(r, !1), "selectPageUp"), $d = /* @__PURE__ */ c((r) => sg(r, !0), "selectPageDown"), ew = /* @__PURE__ */ c((r) => Ue(r, (e) => _t(r, e, !0)), "selectLineBoundaryForward"), tw = /* @__PURE__ */ c((r) => Ue(r, (e) => _t(r, e, !1)), "selectLineBoundaryBackward"), iw = /* @__PURE__ */ c((r) => Ue(r, (e) => _t(r, e, !he(r))), "selectLineBoundaryLeft"), rw = /* @__PURE__ */ c((r) => Ue(r, (e) => _t(r, e, he(r))), "selectLineBoundaryRight"), nw = /* @__PURE__ */ c((r) => Ue(r, (e) => R.cursor(r.lineBlockAt(e.head).from)), "selectLineStart"), sw = /* @__PURE__ */ c((r) => Ue(r, (e) => R.cursor(r.lineBlockAt(e.head).to)), "selectLineEnd"), vd = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(st(r, { anchor: 0 })), !0), "cursorDocStart"), Td = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(st(r, { anchor: r.doc.length })), !0), "cursorDocEnd"), Ad = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(st(r, { anchor: r.selection.main.anchor, head: 0 })), !0), "selectDocStart"), Zd = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(st(r, { anchor: r.selection.main.anchor, head: r.doc.length })), !0), "selectDocEnd"), ow = /* @__PURE__ */ c(({ state: r, dispatch: e }) => (e(r.update({ selection: { anchor: 0, head: r.doc.length }, userEvent: "select" })), !0), "selectAll"), lw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = xo(r).map(({ from: i, to: n }) => R.range(i, Math.min(n + 1, r.doc.length)));
  return e(r.update({ selection: R.create(t), userEvent: "select" })), !0;
}, "selectLine"), aw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = tr(r.selection, (i) => {
    let n = J(r), s = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return R.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(r.selection) ? !1 : (e(st(r, t)), !0);
}, "selectParentSyntax"), hw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  let t = r.selection, i = null;
  return t.ranges.length > 1 ? i = R.create([t.main]) : t.main.empty || (i = R.create([R.cursor(t.main.head)])), i ? (e(st(r, i)), !0) : !1;
}, "simplifySelection");
function Sn(r, e) {
  if (r.state.readOnly)
    return !1;
  let t = "delete.selection", { state: i } = r, n = i.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = In(r, a, !1)) : a > o && (t = "delete.forward", a = In(r, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = In(r, o, !1), l = In(r, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: R.cursor(o, o < s.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (r.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: t,
    effects: t == "delete.selection" ? _.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
c(Sn, "deleteBy");
function In(r, e, t) {
  if (r instanceof _)
    for (let i of r.state.facet(_.atomicRanges).map((n) => n(r)))
      i.between(e, e, (n, s) => {
        n < e && s > e && (e = t ? s : n);
      });
  return e;
}
c(In, "skipAtomic");
const og = /* @__PURE__ */ c((r, e, t) => Sn(r, (i) => {
  let n = i.from, { state: s } = r, o = s.doc.lineAt(n), l, a;
  if (t && !e && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let h = dt(l, s.tabSize), f = h % li(s) || li(s);
    for (let u = 0; u < f && l[l.length - 1 - u] == " "; u++)
      n--;
    a = n;
  } else
    a = Oe(o.text, n - o.from, e, e) + o.from, a == n && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = Oe(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), "deleteByChar"), Fa = /* @__PURE__ */ c((r) => og(r, !1, !0), "deleteCharBackward"), lg = /* @__PURE__ */ c((r) => og(r, !0, !1), "deleteCharForward"), ag = /* @__PURE__ */ c((r, e) => Sn(r, (t) => {
  let i = t.head, { state: n } = r, s = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == t.head && s.number != (e ? n.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = Oe(s.text, i - s.from, e) + s.from, h = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), f = o(h);
    if (l != null && f != l)
      break;
    (h != " " || i != t.head) && (l = f), i = a;
  }
  return i;
}), "deleteByGroup"), hg = /* @__PURE__ */ c((r) => ag(r, !1), "deleteGroupBackward"), fw = /* @__PURE__ */ c((r) => ag(r, !0), "deleteGroupForward"), cw = /* @__PURE__ */ c((r) => Sn(r, (e) => {
  let t = r.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(r.state.doc.length, e.head + 1);
}), "deleteToLineEnd"), uw = /* @__PURE__ */ c((r) => Sn(r, (e) => {
  let t = r.moveToLineBoundary(e, !1).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), "deleteLineBoundaryBackward"), dw = /* @__PURE__ */ c((r) => Sn(r, (e) => {
  let t = r.moveToLineBoundary(e, !0).head;
  return e.head < t ? t : Math.min(r.state.doc.length, e.head + 1);
}), "deleteLineBoundaryForward"), Ow = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = r.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: X.of(["", ""]) },
    range: R.cursor(i.from)
  }));
  return e(r.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
}, "splitLine"), pw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = r.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == r.doc.length)
      return { range: i };
    let n = i.from, s = r.doc.lineAt(n), o = n == s.from ? n - 1 : Oe(s.text, n - s.from, !1) + s.from, l = n == s.to ? n + 1 : Oe(s.text, n - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: r.doc.slice(n, l).append(r.doc.slice(o, n)) },
      range: R.cursor(l)
    };
  });
  return t.changes.empty ? !1 : (e(r.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
}, "transposeChars");
function xo(r) {
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
c(xo, "selectedLineBlocks");
function fg(r, e, t) {
  if (r.readOnly)
    return !1;
  let i = [], n = [];
  for (let s of xo(r)) {
    if (t ? s.to == r.doc.length : s.from == 0)
      continue;
    let o = r.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + r.lineBreak });
      for (let a of s.ranges)
        n.push(R.range(Math.min(r.doc.length, a.anchor + l), Math.min(r.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: s.from }, { from: s.to, insert: r.lineBreak + o.text });
      for (let a of s.ranges)
        n.push(R.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(r.update({
    changes: i,
    scrollIntoView: !0,
    selection: R.create(n, r.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
c(fg, "moveLine");
const mw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => fg(r, e, !1), "moveLineUp"), gw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => fg(r, e, !0), "moveLineDown");
function cg(r, e, t) {
  if (r.readOnly)
    return !1;
  let i = [];
  for (let n of xo(r))
    t ? i.push({ from: n.from, insert: r.doc.slice(n.from, n.to) + r.lineBreak }) : i.push({ from: n.to, insert: r.lineBreak + r.doc.slice(n.from, n.to) });
  return e(r.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
c(cg, "copyLine");
const yw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => cg(r, e, !1), "copyLineUp"), bw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => cg(r, e, !0), "copyLineDown"), Sw = /* @__PURE__ */ c((r) => {
  if (r.state.readOnly)
    return !1;
  let { state: e } = r, t = e.changes(xo(e).map(({ from: n, to: s }) => (n > 0 ? n-- : s < e.doc.length && s++, { from: n, to: s }))), i = tr(e.selection, (n) => {
    let s;
    if (r.lineWrapping) {
      let o = r.lineBlockAt(n.head), l = r.coordsAtPos(n.head, n.assoc || 1);
      l && (s = o.bottom + r.documentTop - l.bottom + r.defaultLineHeight / 2);
    }
    return r.moveVertically(n, !0, s);
  }).map(t);
  return r.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
}, "deleteLine");
function Qw(r, e) {
  if (/\(\)|\[\]|\{\}/.test(r.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = J(r).resolveInner(e), i = t.childBefore(e), n = t.childAfter(e), s;
  return i && n && i.to <= e && n.from >= e && (s = i.type.prop(C.closedBy)) && s.indexOf(n.name) > -1 && r.doc.lineAt(i.to).from == r.doc.lineAt(n.from).from && !/\S/.test(r.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
c(Qw, "isBetweenBrackets");
const Ld = /* @__PURE__ */ ug(!1), ww = /* @__PURE__ */ ug(!0);
function ug(r) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((n) => {
      let { from: s, to: o } = n, l = e.doc.lineAt(s), a = !r && s == o && Qw(e, s);
      r && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Bi(e, { simulateBreak: s, simulateDoubleBreak: !!a }), f = ep(h, s);
      for (f == null && (f = dt(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let u = ["", bs(e, f)];
      return a && u.push(bs(e, h.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: X.of(u) },
        range: R.cursor(s + 1 + u[1].length)
      };
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
c(ug, "newlineAndIndent");
function Mh(r, e) {
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
      range: R.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1))
    };
  });
}
c(Mh, "changeBySelectedLine");
const xw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => {
  if (r.readOnly)
    return !1;
  let t = /* @__PURE__ */ Object.create(null), i = new Bi(r, { overrideIndentation: /* @__PURE__ */ c((s) => {
    let o = t[s];
    return o ?? -1;
  }, "overrideIndentation") }), n = Mh(r, (s, o, l) => {
    let a = ep(i, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let h = /^\s*/.exec(s.text)[0], f = bs(r, a);
    (h != f || l.from < s.from + h.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + h.length, insert: f }));
  });
  return n.changes.empty || e(r.update(n, { userEvent: "indent" })), !0;
}, "indentSelection"), Pw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.readOnly ? !1 : (e(r.update(Mh(r, (t, i) => {
  i.push({ from: t.from, insert: r.facet(gn) });
}), { userEvent: "input.indent" })), !0), "indentMore"), kw = /* @__PURE__ */ c(({ state: r, dispatch: e }) => r.readOnly ? !1 : (e(r.update(Mh(r, (t, i) => {
  let n = /^\s*/.exec(t.text)[0];
  if (!n)
    return;
  let s = dt(n, r.tabSize), o = 0, l = bs(r, Math.max(0, s - li(r)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: t.from + o, to: t.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), "indentLess"), Rw = /* @__PURE__ */ c((r) => (r.setTabFocusMode(), !0), "toggleTabFocusMode"), $w = [
  { key: "Ctrl-b", run: qm, shift: Jm, preventDefault: !0 },
  { key: "Ctrl-f", run: Dm, shift: eg },
  { key: "Ctrl-p", run: Nm, shift: rg },
  { key: "Ctrl-n", run: Gm, shift: ng },
  { key: "Ctrl-a", run: BQ, shift: nw },
  { key: "Ctrl-e", run: zQ, shift: sw },
  { key: "Ctrl-d", run: lg },
  { key: "Ctrl-h", run: Fa },
  { key: "Ctrl-k", run: cw },
  { key: "Ctrl-Alt-h", run: hg },
  { key: "Ctrl-o", run: Ow },
  { key: "Ctrl-t", run: pw },
  { key: "Ctrl-v", run: Ha }
], vw = /* @__PURE__ */ [
  { key: "ArrowLeft", run: qm, shift: Jm, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: VQ, shift: HQ, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: qQ, shift: iw, preventDefault: !0 },
  { key: "ArrowRight", run: Dm, shift: eg, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: UQ, shift: FQ, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: DQ, shift: rw, preventDefault: !0 },
  { key: "ArrowUp", run: Nm, shift: rg, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: vd, shift: Ad },
  { mac: "Ctrl-ArrowUp", run: kd, shift: Rd },
  { key: "ArrowDown", run: Gm, shift: ng, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Td, shift: Zd },
  { mac: "Ctrl-ArrowDown", run: Ha, shift: $d },
  { key: "PageUp", run: kd, shift: Rd },
  { key: "PageDown", run: Ha, shift: $d },
  { key: "Home", run: jQ, shift: tw, preventDefault: !0 },
  { key: "Mod-Home", run: vd, shift: Ad },
  { key: "End", run: IQ, shift: ew, preventDefault: !0 },
  { key: "Mod-End", run: Td, shift: Zd },
  { key: "Enter", run: Ld, shift: Ld },
  { key: "Mod-a", run: ow },
  { key: "Backspace", run: Fa, shift: Fa },
  { key: "Delete", run: lg },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: hg },
  { key: "Mod-Delete", mac: "Alt-Delete", run: fw },
  { mac: "Mod-Backspace", run: uw },
  { mac: "Mod-Delete", run: dw }
].concat(/* @__PURE__ */ $w.map((r) => ({ mac: r.key, run: r.run, shift: r.shift }))), Tw = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: XQ, shift: KQ },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: YQ, shift: JQ },
  { key: "Alt-ArrowUp", run: mw },
  { key: "Shift-Alt-ArrowUp", run: yw },
  { key: "Alt-ArrowDown", run: gw },
  { key: "Shift-Alt-ArrowDown", run: bw },
  { key: "Escape", run: hw },
  { key: "Mod-Enter", run: ww },
  { key: "Alt-l", mac: "Ctrl-l", run: lw },
  { key: "Mod-i", run: aw, preventDefault: !0 },
  { key: "Mod-[", run: kw },
  { key: "Mod-]", run: Pw },
  { key: "Mod-Alt-\\", run: xw },
  { key: "Shift-Mod-k", run: Sw },
  { key: "Shift-Mod-\\", run: GQ },
  { key: "Mod-/", run: yQ },
  { key: "Alt-A", run: SQ },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Rw }
].concat(vw), Aw = Ss.define([
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
]), Dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Compartment: Br,
  CompletionContext: zi,
  EditorState: K,
  EditorView: _,
  ViewUpdate: rn,
  autocompletion: Ab,
  defaultKeymap: Tw,
  dropCursor: ay,
  history: $Q,
  historyKeymap: EQ,
  keymap: mn,
  languages: OQ,
  markdown: Cm,
  mentions: gQ,
  placeholder: fy,
  syntaxHighlighting: Xy,
  weavyDesktopMessageKeymap: mQ,
  weavyHighlighter: Aw,
  weavyKeymap: pQ
}, Symbol.toStringTag, { value: "Module" }));
function Bw(r) {
  dg(r, "start");
  var e = {}, t = r.languageData || {}, i = !1;
  for (var n in r) if (n != t && r.hasOwnProperty(n))
    for (var s = e[n] = [], o = r[n], l = 0; l < o.length; l++) {
      var a = o[l];
      s.push(new Mw(a, r)), (a.indent || a.dedent) && (i = !0);
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
    token: _w(e),
    indent: Cw(e, t),
    mergeTokens: t.mergeTokens,
    languageData: t
  };
}
c(Bw, "simpleMode");
function dg(r, e) {
  if (!r.hasOwnProperty(e))
    throw new Error("Undefined state " + e + " in simple mode");
}
c(dg, "ensureState");
function Zw(r, e) {
  if (!r) return /(?:)/;
  var t = "";
  return r instanceof RegExp ? (r.ignoreCase && (t = "i"), r = r.source) : r = String(r), new RegExp("^(?:" + r + ")", t);
}
c(Zw, "toRegex");
function Lw(r) {
  if (!r) return null;
  if (r.apply) return r;
  if (typeof r == "string") return r.replace(/\./g, " ");
  for (var e = [], t = 0; t < r.length; t++)
    e.push(r[t] && r[t].replace(/\./g, " "));
  return e;
}
c(Lw, "asToken");
function Mw(r, e) {
  (r.next || r.push) && dg(e, r.next || r.push), this.regex = Zw(r.regex), this.token = Lw(r.token), this.data = r;
}
c(Mw, "Rule");
function _w(r) {
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
c(_w, "tokenFunction");
function Cw(r, e) {
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
c(Cw, "indentFunction");
export {
  Ls as ContextTracker,
  R as EditorSelection,
  _ as EditorView,
  Qe as ExternalTokenizer,
  B as IterMode,
  sn as LRLanguage,
  un as LRParser,
  Mt as LanguageSupport,
  Hi as LocalTokenGroup,
  Os as NodeWeakMap,
  Vw as autofocusRef,
  sp as bracketMatchingHandle,
  fp as completeFromList,
  Gn as continuedIndent,
  Md as defaultVisibilityCheckOptions,
  em as defineCSSCompletionSource,
  Vy as delimitedIndent,
  Dw as editor,
  Uy as flatIndent,
  rp as foldInside,
  yn as foldNodeProp,
  xm as html,
  eb as ifNotIn,
  er as indentNodeProp,
  qw as isDomAvailable,
  Iw as isInShadowDom,
  jw as isPopoverPolyfilled,
  Ce as javascriptLanguage,
  pg as observeConnected,
  HO as parseMixed,
  Bw as simpleMode,
  me as snippetCompletion,
  Ji as styleTags,
  J as syntaxTree,
  g as tags,
  Cd as throwOnDomNotAvailable,
  Ww as whenConnected,
  Xw as whenDocumentVisible,
  Yw as whenElementVisible,
  Uw as whenParentsDefined
};
